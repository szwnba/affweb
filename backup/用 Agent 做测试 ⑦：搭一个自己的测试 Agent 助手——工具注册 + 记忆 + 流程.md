> 🏷️ #Agent #AI测试 #测试开发 #工具注册 #Agent助手 #工作流

* * *

前面六篇，我们一直在用「通用 Agent 干零活」：拆需求补用例、按约束造数据、写自动化脚本、判读失败日志、做探索式测试。每一篇都是一块独立的拼图，但零活始终是零活——用完一次就散，下次还得重新把上下文喂一遍。

这一篇，我们把散落的拼图**拼成一个「自己的测试 Agent 助手」**。它是主线收尾前的整合篇：把前面学到的能力固化进一个 Agent，让它记住我们项目的上下文，接到我们的测试工具，跑通一条「用例 → 数据 → 脚本 → 判读」的流水线。

这一篇讲清六件事：

1.  **定位**：它到底该会哪几件事（先给一张能力清单，别一上来就写代码）
    
2.  **工具注册**：给它接工具——跑脚本、查库、调接口、看日志（最小实现）
    
3.  **记忆**：把项目结构、环境、历史 bug、常用断言沉淀成它能用的记忆
    
4.  **流程**：把「用例 → 数据 → 脚本 → 判读」串成一条流水线
    
5.  **常见坑**：工具权限、幻觉调用、上下文越用越长
    
6.  **最小可跑脚本**：一个带 3 个工具的测试 Agent 骨架，注册即跑
    

* * *

一、定位：不是再造一个测试平台，是把能力「固化」进一个 Agent
---------------------------------

先泼一盆冷水，把这件事的边界说清楚：**我们要搭的，不是一个测试平台，也不是一个能自动点按钮、自动起服务、自动改代码的「全自动测试机器人」。** 

平台要做的事——用例管理、执行调度、报告报表、权限审批——那些是重工程，有专门的团队和工具在干，Agent 替代不了，也不该替代。我们搭的，是一个**跑在我们自己电脑上、或跑在 CI 旁边的小助手**，它只干一件事：**把前面六篇里那些「每次都要重新喂上下文、重新组织 prompt」的零活，固化成一个随叫随到的搭档。** 

所以在写第一行代码之前，先问清楚一件事：**它到底要会哪几件事？** 不会的，我们就不给它配工具；会的，才值得配。下面这张能力清单，是动手前必须画的边界：

| 

能力

 | 

它该做什么

 | 

它不该做什么

 |
| --- | --- | --- |
| 

生成用例

 | 

从 PRD/需求拆出用例草稿

 | 

替我们拍板「这条算不算 bug」

 |
| 

造数据

 | 

生成格式数据、写走接口的造数脚本

 | 

绕过后台直接写库、直接「变」出合法实体

 |
| 

跑脚本

 | 

触发 pytest/Playwright、回收结果

 | 

自己改业务代码、自己提交

 |
| 

查库/查日志

 | 

只读查询、拉日志辅助判读

 | 

改数据、删数据、发消息

 |
| 

判读

 | 

聚类失败、给出初步根因线索

 | 

下最终结论、标记 bug

 |

这张表里「不该做什么」那一列，就是后面「工具权限」那一节的伏笔。**一个合格的测试 Agent，它的危险之处从来不在「能力不够」，而在「能力越界」。**  先把边界画清楚，下面配工具才不会失控。

定位的一句话：**它不是替代我们的新员工，是我们把「重复劳动」外包出去的那只手，而且这只手要能约束得住。** 

* * *

二、工具注册：给它接上跑脚本、查库、调接口、看日志
-------------------------

Agent 光会「想」没用，得能「动手」。动手靠的就是**工具**。这一节，我们把一个测试 Agent 最需要的四类工具，用最小实现接起来。这里直接沿用「从零造 Agent」系列里 ToolRegistry 的思路——**注册、描述、执行，三层分离。** 

### 2.1 先立工具的标准：一个工具函数 + 一段「面向使用者」的描述

一个工具，最少得有三样东西：**函数（干活的）、描述（告诉模型什么时候用）、参数 schema（告诉模型怎么传参）。**  我们先定一个统一格式：

`classTool:  
def__init__(self, name, description, parameters, func):  
self.name = name  
self.description = description  
self.parameters = parameters   # JSON Schema，定义入参  
self.func = func               # 真正干活的 Python 函数  
  
defto_schema(self):  
"""转成 OpenAI Function Calling 格式"""  
return {  
"type": "function",  
"function": {  
"name": self.name,  
"description": self.description,  
"parameters": self.parameters,  
            }  
        }  
`

这里最关键的是 `description`。它**不是写给开发者看的注释，是写给模型看的「使用说明书」**，必须包含三要素：**什么时候用、干什么、返回什么。**  而且——功能相近的工具，必须在描述里写「负面描述」（不用于 XX），否则模型分不清。

对比一下好坏：

| 

❌ 差描述

 | 

✅ 好描述

 |
| --- | --- |
| `查询数据库` | `在测试库执行只读 SQL，返回查询结果。用于查环境配置、验证造数、查历史 bug。只读，不用于修改数据。` |
| `看日志` | `按关键字拉取最近服务日志。用于分析失败用例、定位报错。不用于查询数据库。` |

看第二列最后那句「不用于 XX」——这就是防「幻觉调用」的第一道闸（第五节会展开）。

### 2.2 四类工具的模拟实现

真实项目里，这四类工具背后接的是 `subprocess`、数据库驱动、HTTP 客户端、日志平台 SDK。但为了先把骨架跑通，我们用**模拟实现**把「接口形态」定下来——后面换成真实实现，签名不用改。

`defrun_test_script(script_name: str) -> dict:  
"""执行 pytest 脚本，返回通过/失败用例数。用于跑自动化用例、跑回归。"""  
# 真实项目：subprocess.run(["pytest", script_name]) 解析结果  
return {"script": script_name, "passed": 6, "failed": 2}  
  
defquery_database(sql: str) -> dict:  
"""在测试库执行只读 SELECT，返回前几行。用于查配置、验证造数、查历史 bug。"""  
# 真实项目：连测试库执行，这里只演示形态  
return {"sql": sql, "rows": [{"id": 1, "status": "on_sale"}], "row_count": 1}  
  
deffetch_logs(keyword: str, lines: int = 20) -> dict:  
"""按关键字拉最近服务日志。用于分析失败用例、定位报错。"""  
# 真实项目：接日志平台 API  
return {"keyword": keyword, "logs": ["ERROR order.price assert failed"], "count": 1}  
  
defcall_api(endpoint: str, method: str = "GET", body: dict = None) -> dict:  
"""调一个后台接口。用于造数、触发状态流转。带副作用的接口需先确认。"""  
# 真实项目：requests 调接口  
return {"endpoint": endpoint, "status": 200, "body": {"ok": True}}  
`

注意 `call_api` 描述里那句「带副作用的接口需先确认」——这是给「权限」留的钩子。有些工具的副作用是安全的（查库），有些是危险的（调接口可能改数据），**危险的要让 Agent 先停下来问我们。** 

### 2.3 注册表：一个字典就能起步，但要把「执行」和「描述」分开

注册表最朴素的实现，一个字典就够：

`classToolRegistry:  
def__init__(self):  
self._tools = {}  
  
defregister(self, tool: Tool):  
self._tools[tool.name] = tool  
  
defschemas(self):  
"""把所有工具的 schema 发给模型"""  
return [t.to_schema() for t inself._tools.values()]  
  
defcall(self, name: str, args: dict):  
"""模型选中工具后，真正执行"""  
returnself._tools[name].func(**args)  
  
registry = ToolRegistry()  
registry.register(Tool("run_test_script", "...", {...}, run_test_script))  
registry.register(Tool("query_database",  "...", {...}, query_database))  
registry.register(Tool("fetch_logs",      "...", {...}, fetch_logs))  
registry.register(Tool("call_api",        "...", {...}, call_api))  
`

看到这个结构，就能理解「注册、描述、执行」三层分离的好处了：**加一个新工具 = 写一个函数 + 注册一行，Agent 的核心循环一行都不用改。**  这是工具能「越用越多」而不乱套的前提。

### 2.4 一个容易被跳过的细节：工具描述决定「选得准不准」

工具一多，模型「选错工具」的概率就上来。尤其是 `query_database` 和 `fetch_logs` 这种都跟「查」沾边的。**判断标准就一条：把两个工具的 description 并排放，我们自己能不能一眼看出差别？** 看不出，模型更看不出。

所以相近工具的描述，一定要互相对照着写：

*   `query_database`：用于查「数据」（库里存了什么）
    
*   `fetch_logs`：用于查「过程」（跑的时候发生了什么）
    

一个查「静态的存量」，一个查「动态的过程」。写清楚这对「静态/动态」的对照，模型选错的概率能降一大截。

* * *

三、记忆：把测试上下文沉淀成 Agent 能用的大脑
--------------------------

工具让 Agent 能「动手」，但光有手没脑子还是不行。这个「脑子」，就是**记忆**——它得知道我们的项目长什么样，否则每次都要我们把上下文从头喂一遍。

### 3.1 先想清楚：一个测试 Agent 该「记住」什么

不是所有信息都值得记。一个测试 Agent 该沉淀进记忆的，是**跨会话稳定、且每次测试都用得上的**那几类：

| 

记忆类型

 | 

记什么

 | 

例子

 |
| --- | --- | --- |
| 

项目结构

 | 

代码目录、测试目录、启动方式

 | `pytest 在 tests/ 目录，跑法：pytest -m smoke` |
| 

环境信息

 | 

测试库、日志平台、接口地址、鉴权

 | `测试库 test_order，日志在 log-platform` |
| 

历史 bug

 | 

以前踩过的坑、根因

 | `order.price 曾出现负数，是优惠券叠加计算错误` |
| 

常用断言

 | 

各模块「怎么算过」的约定

 | `下单接口 200 且 order.status == "created"` |

**这些信息，只有我们自己写得出来，Agent 写不出。**  但一旦写进去，它每次干活就不用我们重复交代。这跟第 3 篇「喂字段清单给 Agent 造数」是同一个道理——**把「懂系统」这件只有我们懂的事，固化下来。** 

### 3.2 最简单的做法：一个「记忆文件」注入 system prompt

不用一上来就上向量数据库。**起步阶段，一个 markdown 记忆文件 + 注入 system prompt，就够用了。**  这是「记忆注入」的最小实现：

`# memory.md（手工维护，随项目演进）  
TEST_MEMORY = """【项目】电商订单系统  
【目录】用例在 tests/，pytest 入口：pytest -m smoke  
【环境】测试库 test_order（只读账号）；日志平台 log-platform；接口 base=api.test.com  
【历史 bug】  
  - order.price 曾出现负数，根因是优惠券叠加计算错误（case: TC-231）  
  - 短信验证码在并发下会重复下发，已加幂等  
【常用断言】  
  - 下单：HTTP 200 且 order.status == "created"  
  - 支付回调：必须幂等，重复回调返回同一结果  
"""  
  
SYSTEM_PROMPT = f"""你是测试 Agent 助手。用下面的测试上下文和工具，帮我们完成测试任务。  
遇到需要跑脚本、查库、看日志时，调用对应工具，不要凭空编造结果。  
  
## 测试上下文（记忆）  
{TEST_MEMORY}  
"""  
`

**这一步的价值，用一次就体会得到**：以前每次让 Agent 写用例，都要重新交代「我们是电商订单系统、下单接口返回 200 才算过」；现在这些默认就带着，Agent 的产出不再「飘」。

### 3.3 进阶：记忆要「分层 + 可更新」

起步用文件，但有两个现实问题绕不开：

1.  **历史 bug 会越记越多**，全塞进 system prompt 会挤占 token。解决办法是**分层**——「高稳频」的（项目结构、环境、断言）放常驻记忆，每次都注入；「低频」的（历史 bug）做成**按需检索**：任务里提到「下单」时，才把下单相关的 bug 捞出来附上。
    
2.  **记忆会过期**。环境换了、bug 修了，记忆不更新，Agent 会照着旧信息干活、越帮越忙。所以记忆文件要当成**代码一样维护**——改环境、修 bug，顺手更新记忆，最好放进 git 一起管。
    

进阶方向（向量库、语义检索、记忆衰减）在「从零造 Agent」第 5 篇有完整实现，这里不展开。**测试 Agent 的起步，一个 markdown + 注入，已经能解决 80% 的「重复交代」问题。** 

* * *

四、流程：把「用例 → 数据 → 脚本 → 判读」串成流水线
------------------------------

工具和记忆都就位了，接下来是把前面六篇的零活**串起来**。单看每一步都不新鲜，新鲜的是「串成一条流水线后，Agent 能自己接力」。

### 4.1 先看清这条流水线长什么样

`输入需求  
   │  
   ▼  
① 生成用例（第 2 篇：拆需求 + 补边界）  
   │  
   ▼  
② 造数据（第 3 篇：格式数据 + 合法实体）  
   │  
   ▼  
③ 写/跑脚本（第 4 篇：pytest 跑通验证）  
   │  
   ▼  
④ 判读结果（第 5 篇：聚类失败 + 根因线索）  
   │  
   ▼  
输出结论草稿（我们来拍板）  
`

**关键不在「每一步」，在「接力」。**  第 3 步跑的脚本，吃的是第 2 步造的数据；第 4 步判读的，是第 3 步的失败日志。前面六篇我们是一步一步手动喂的，这一篇让 Agent 自己把上一棒的输出，接到下一棒的输入上。

### 4.2 流程编排的骨架：一个状态机 + 工作记忆

流水线的骨架，核心是一个\*\*「当前走到哪一步 + 每步产出存到哪」\*\*的状态机。别被「状态机」这个词吓到，本质就是维护一个字典，每步读上一步、写本步：

`defrun_pipeline(requirement: str):  
    ctx = {"requirement": requirement}   # 流水线的工作记忆  
  
# ① 生成用例  
    ctx["cases"] = chat(f"根据需求生成用例（正常/边界/异常/安全四类）：\n{requirement}")  
  
# ② 造数据（吃用例里的字段约束）  
    ctx["data"] = chat(f"根据下面用例涉及的字段，造测试数据：\n{ctx['cases']}")  
  
# ③ 写脚本（吃用例 + 数据）  
    ctx["script"] = chat(  
f"根据下面用例和数据，写 pytest 脚本：\n用例：{ctx['cases']}\n数据：{ctx['data']}"  
    )  
  
# ④ 判读（吃脚本运行结果）  
    ctx["verdict"] = chat(  
f"下面脚本的执行结果，判断失败原因（bug/环境/脚本错）：\n{ctx['script']}"  
    )  
  
return ctx  
`

看 `ctx` 这个字典——它就是这条流水线的**工作记忆**。每一步都从 `ctx` 里读上一步的产出、把自己的产出写回去。**这就是「接力」的最小实现。** 

### 4.3 进阶：不是死板地一条道走到底，要能「看情况」

真实的测试流水线不是直线，是**有分叉的**：

*   造数据时，如果缺依赖实体（造商品要先有类目），要**回退去补依赖**
    
*   跑脚本时，如果失败是「数据问题」而不是「代码问题」，要**回退去重造数据**，而不是硬着头皮往下判读
    
*   判读时，如果根因线索指向「历史 bug」，要**去记忆里捞**那条 bug 对比
    

所以进阶的编排，不是写死 `①→②→③→④` 的顺序，而是给 Agent 一个\*\*「下一步该干啥」的判断权\*\*，让它自己决定是前进、回退、还是调工具。落到实现，就是把上面写死的四行 `chat`，换成前面第 2 节的**工具循环**：让模型在「调 `run_test_script`、调 `query_database`、还是直接给结论」之间自己选。

**起步先用写死的顺序，跑通了再放开让 Agent 自己决定**——这跟「先求稳、再求活」的工程直觉是一致的。

* * *

五、常见坑：工具权限、幻觉调用、上下文越用越长
-----------------------

搭起来只是第一步。真实跑起来，有三个坑几乎一定会踩。提前知道，能省掉大量排查。

### 坑 1：工具权限——副作用工具必须「人确认」

这是最要命的一个。**Agent 不会分辨「查库」和「改库」的区别，给它什么工具它都敢用。**  如果图省事，把一个「能执行任意 SQL」「能删数据」「能发消息」的工具直接注册进去，它可能在一个「帮你看看数据对不对」的任务里，顺手把数据删了。

**解决：给工具分级，副作用高的强制「先问人」。** 

| 

等级

 | 

例子

 | 

处理

 |
| --- | --- | --- |
| 

只读安全

 | 

查库（SELECT）、拉日志

 | 

直接执行

 |
| 

低风险副作用

 | 

跑 pytest（只读不改业务数据）

 | 

直接执行，结果回收

 |
| 

高风险副作用

 | 

调接口造数、改数据、发消息

 | **执行前必须停下来，让我们确认** |

落到实现，就是给「高风险」工具加一道「确认闸」：模型选中这类工具时，不让它直接执行，而是把「它想调什么、参数是什么」打印出来，等我们敲个 `y` 才真正动手：

`defcall_safely(tool_name: str, args: dict):  
if tool_name in HIGH_RISK_TOOLS:            # 需要确认的工具名单  
print(f"⚠️ 工具要执行有副作用的操作，请确认：{tool_name}({args})")  
ifinput("确认执行？(y/n): ").strip().lower() != "y":  
return {"aborted": True, "reason": "用户取消"}  
return registry.call(tool_name, args)  
`

**记住一条红线：改数据、删数据、发消息这类副作用操作，Agent 只能「提议」，动手的必须是「我们」。**  这是第 1 篇那句口诀「出事的兜底」在工具层面的落地。

### 坑 2：幻觉调用——Agent 会编造不存在的工具

这是模型的老毛病，搬到工具场景同样犯：**它会一本正经地调一个我们根本没注册的工具，或者给工具传一个工具根本不接受的参数。** 

`模型输出：调用 run_test_script(script_name="test_order.py", env="prod")  
                    ↑ 工具根本没有 env 这个参数  
`

**解决分两层：** 

1.  **拦在调用前**：模型选中的工具名，先去注册表里查，查不到就明确回一句「工具不存在，可用工具是这些」，让它重选（而不是静默吞掉）。
    
2.  **参数用 JSON Schema 硬校验**：模型的 tool\_calls 参数是 JSON，先 `json.loads` 解析，解析失败或缺必填参数，就回退让它重试。**永远不要让一个没校验过的参数进到真正的函数里。** 
    

这两个动作，在前面第 2.3 节的 `registry.call` 里就要做——**把「幻觉调用」挡在真正执行之前，而不是执行之后才发现报错。** 

### 坑 3：上下文越用越长——流水线跑到后半截就「失忆」

流水线第 ① 步生成的用例，到第 ④ 步判读时，中间已经塞进去「用例 + 数据 + 脚本 + 运行日志」一大坨。**对话一长，早期的关键信息被 token 窗口挤出去，Agent 变成「金鱼脑」——判读时忘了用例到底要求测什么。** 

**解决：摘要 + 裁剪。**  每一棒的产出，不要原文全塞给下一棒，而是**先压缩成「结论 + 关键点」再传递**：

`defpass_on(raw_output: str) -> str:  
"""把上一步的产出压缩成下一步能用的「交接摘要」"""  
    summary = chat(  
f"把下面这段内容压缩成 3 条以内、只保留对下一步有用的要点：\n{raw_output}"  
    )  
return summary  
`

具体到流水线里：第 ① 步生成的几十条用例，传给第 ② 步时只传「涉及哪些字段、有哪些边界」；第 ③ 步的运行日志，传给第 ④ 步时只传「失败了几条、每条的一句话报错」。**「交接摘要」是流水线跑长任务的命门——不压缩，多跑两棒就乱套。** 

* * *

六、最小可跑脚本：一个带 3 个工具的测试 Agent 骨架
------------------------------

下面这个脚本，把前面三件事（工具注册、记忆注入、跑流程）合成一个能直接跑的骨架：**注册 3 个工具 → 注入测试记忆 → 跑一条「生成用例并执行」的流程。**  跑完你会对「一个测试 Agent 助手」长什么样，有个完整印象。

`# pip install openai  
import json  
from openai import OpenAI  
  
client = OpenAI(  
    api_key="你的 API KEY",  
    base_url="https://api.deepseek.com",   # 换成你用的 OpenAI 兼容地址  
)  
MODEL = "deepseek-chat"# 换成你实际用的模型名  
  
# ========== 一、工具注册表 ==========  
classToolRegistry:  
def__init__(self):  
self._tools = {}  
  
defregister(self, name, description, parameters, func):  
self._tools[name] = {  
"schema": {  
"type": "function",  
"function": {"name": name, "description": description, "parameters": parameters},  
            },  
"func": func,  
        }  
  
defschemas(self):  
return [t["schema"] for t inself._tools.values()]  
  
defcall(self, name, args):  
if name notinself._tools:                        # 防幻觉调用：查不到就拦下  
return {"error": f"工具 {name} 不存在"}  
returnself._tools[name]["func"](**args)  
  
registry = ToolRegistry()  
  
# ========== 二、三个测试工具（模拟实现） ==========  
defrun_test_script(script_name: str) -> dict:  
"""执行 pytest 测试脚本，返回通过/失败用例数。用于跑自动化用例、跑回归。"""  
# 真实项目：subprocess.run(["pytest", script_name]) 解析结果  
return {"script": script_name, "passed": 6, "failed": 2}  
  
defquery_database(sql: str) -> dict:  
"""在测试库执行只读 SQL，返回前几行。用于查环境配置、验证造数、查历史 bug。只读，不用于修改数据。"""  
# 真实项目：连测试库执行 SELECT  
return {"sql": sql, "rows": [{"id": 1, "status": "on_sale"}], "row_count": 1}  
  
deffetch_logs(keyword: str, lines: int = 20) -> dict:  
"""按关键字拉最近服务日志。用于分析失败用例、定位报错。不用于查询数据库。"""  
# 真实项目：接日志平台 API  
return {"keyword": keyword, "logs": ["ERROR order.price assert failed: got -1"], "count": 1}  
  
registry.register(  
"run_test_script",  
"执行 pytest 测试脚本并返回通过/失败用例数。当需要跑自动化用例、跑回归时使用。",  
    {"type": "object", "properties": {"script_name": {"type": "string", "description": "脚本文件名，如 test_order.py"}}, "required": ["script_name"]},  
    run_test_script,  
)  
registry.register(  
"query_database",  
"在测试库执行只读 SQL，返回查询结果。用于查环境配置、验证造数、查历史 bug。只读，不用于修改数据。",  
    {"type": "object", "properties": {"sql": {"type": "string", "description": "只读 SELECT 语句"}}, "required": ["sql"]},  
    query_database,  
)  
registry.register(  
"fetch_logs",  
"按关键字拉取最近服务日志。用于分析失败用例、定位报错。不用于查询数据库。",  
    {"type": "object", "properties": {"keyword": {"type": "string", "description": "日志关键字"}, "lines": {"type": "integer", "description": "拉取行数，默认 20"}}, "required": ["keyword"]},  
    fetch_logs,  
)  
  
# ========== 三、测试记忆（注入 system prompt） ==========  
TEST_MEMORY = """【项目】电商订单系统  
【环境】测试库 test_order，日志平台 log-platform，pytest 在 tests/ 目录  
【历史 bug】order.price 曾出现负数，根因是优惠券叠加计算错误  
【常用断言】下单接口返回 200 且 order.status == "created"  
"""  
  
SYSTEM_PROMPT = f"""你是测试 Agent 助手。用下面的测试上下文和工具，帮我们完成测试任务。  
遇到需要跑脚本、查库、看日志时，调用对应工具，不要凭空编造结果。  
  
## 测试上下文（记忆）  
{TEST_MEMORY}  
"""  
  
# ========== 四、工具循环 + 流程 ==========  
defchat_with_tools(messages):  
    resp = client.chat.completions.create(  
        model=MODEL,  
        messages=messages,  
        tools=registry.schemas(),  
    )  
return resp.choices[0].message  
  
defrun_flow(task: str):  
    messages = [  
        {"role": "system", "content": SYSTEM_PROMPT},  
        {"role": "user", "content": task},  
    ]  
for _ inrange(5):                       # 最多 5 轮工具调用，防死循环  
        msg = chat_with_tools(messages)  
ifnot msg.tool_calls:               # 没有工具调用了，说明模型给出结论  
return msg.content  
        messages.append(msg)                 # 把模型的工具调用请求记进对话  
for tc in msg.tool_calls:  
            args = json.loads(tc.function.arguments)      # 参数 JSON 校验  
            result = registry.call(tc.function.name, args)  # 真正执行  
            messages.append({  
"role": "tool",  
"tool_call_id": tc.id,  
"content": json.dumps(result, ensure_ascii=False),  
            })  
return"（达到最大工具轮次，未完成）"  
  
if __name__ == "__main__":  
    task = (  
"对『下单』功能：先生成 3 条核心用例，"  
"然后跑一遍 test_order.py，"  
"再查一下数据库里有没有历史 bug 记录，"  
"最后给出结论草稿。"  
    )  
print(run_flow(task))  
`

**跑完注意看两处：** 

1.  **它是不是真的调了工具，而不是凭空编。**  模型应该在「跑脚本」时调 `run_test_script`、在「查历史 bug」时调 `query_database`。如果它没调就下结论，说明 tool 描述或 system prompt 没写清「遇到 XX 要调工具」。
    
2.  **工具返回的结果有没有被正确「接力」到结论里。**  比如 `fetch_logs` 返回的 `order.price 负数`，应该出现在最终判读里——这是「工具 → 结论」这条链路通不通的直接证据。
    

**别指望一次就顺。**  真实工作里，这个骨架要反复调：工具描述写得不够准、记忆漏了关键约束、流程顺序不对……但骨架立起来了，后面全是「加工具、改记忆、调流程」的小迭代。**这正是「结对」——Agent 负责动手跑，我们负责看它跑得对不对、把它越调越顺手。** 

* * *

七、一句话总结
-------

**搭一个测试 Agent 助手，本质是「把前面的零活固化」：先画一张能力清单划清边界（它不是平台、不是全自动机器人），再用「工具函数 + 面向使用者的描述 + 注册表」给它接上跑脚本、查库、调接口、看日志的手；把项目结构、环境、历史 bug、常用断言沉淀成记忆注入 system prompt，让它不再每次从零交代；用「用例 → 数据 → 脚本 → 判读」的状态机把零活串成流水线、让上一棒产出接力到下一棒。三个坑提前防住：副作用工具必须人确认、幻觉调用在真正执行前拦下、长流水线靠「交接摘要」压缩上下文。** 

* * *

_下一篇预告：《收口》——什么时候千万别用 Agent 测，用例/数据/脚本质量打分，一张工程清单。_