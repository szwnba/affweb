> 关注 霍格沃兹软件测试开发 公众号，回复「**资料**」, 领取人工智能测试开发技术合集

### 导读

Playwright 官方同时提供 MCP 和 CLI + Skills 两种浏览器自动化方案。两者都能让 AI Agent 操作页面、生成测试代码、检查运行结果，但在工具调用、上下文管理和工程集成上存在差异。本文结合官方技术实现与公开评测数据，分析两种方案的架构设计、Token 开销和执行效率，并给出面向测试开发团队的性能评测方法与选型建议。

一、Playwright MCP 和 CLI + Skills，为什么值得放在一起比较？
--------------------------------------------

最近用 Claude Code、Codex 做 Web 自动化测试的同学，应该对 Playwright MCP 不陌生。

给 Agent 配好 MCP Server，再告诉它：

“打开测试环境，完成登录，新增一条记录，检查列表是否更新。”

接下来，Agent 就可以调用浏览器工具，查看页面元素、填写表单、点击按钮，再根据执行结果决定下一步操作。

这种方式在页面探索、测试用例生成、失败诊断等场景中已经比较常见。

但 Playwright 官方现在又提供了 `playwright-cli`，还专门配套了 Agent Skills。

更有意思的是，微软在两个项目的官方 README 中，都提到了 MCP 与 CLI + Skills 的适用场景：对于需要同时处理代码仓库和浏览器操作的编程 Agent，官方更推荐优先考虑 CLI + Skills；对于探索式自动化、测试自修复以及需要持续分析页面状态的 Agent，MCP 仍然有使用价值。

这就涉及一个实际的工程问题：

如果团队已经用 Playwright MCP 搭建了 AI 自动化测试流程，是否有必要迁移到 CLI + Skills？

网上有一种很流行的说法：CLI 比 MCP 省 Token，执行速度也更快。

但这个结论需要结合版本来看。

2026 年 7 月，Checkly 发布过一组对比测试，发现较新版本的 Playwright MCP 与 CLI + Skills 在 Token 上下文占用方面，差距已经不像早期那么明显。

所以这次我们不急着判断谁更好用，先把架构和执行过程拆开看看。

二、架构对比：MCP 与 CLI + Skills 的调用链有什么区别？
------------------------------------

两种方案都使用 Playwright 的浏览器自动化能力。

区别主要出现在 Agent 和浏览器之间的工具接口，以及操作结果如何传递给模型。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w8gMgicHp6efnjBqLuibPlo16uh8Bt9TDtALRgBj3xgoyVNV2ymXMQCIGlbdzKiaDSaLMhe9hEzZ8MUv4Mia08jccuEnX73iaEneenlwG7EVgVPs/640?wx_fmt=png&from=appmsg#imgIndex=0)

  

图 1：Playwright MCP 与 CLI + Skills 双路径架构

### 1\. Playwright MCP：Agent 调用结构化浏览器工具

MCP 使用标准工具协议暴露浏览器操作能力。

例如让 Agent 打开 TodoMVC 页面，新增一条待办事项。

Agent 可能依次调用：

`browser_navigate  
       ↓  
browser_snapshot  
       ↓  
browser_type  
       ↓  
browser_snapshot  
`

每个工具都定义了自己的参数结构。

`browser_navigate` 负责页面跳转，`browser_snapshot` 获取页面语义信息，`browser_type` 负责输入文本。

Agent 根据工具结果继续推理，再发起下一次调用。

这套结构比较适合独立的浏览器操作 Agent，尤其是需要连续分析页面、动态选择操作目标的场景。

但对 Agent 而言，每一次工具调用都有潜在开销，包括工具定义、模型决策、工具执行和返回结果的上下文处理。

### 2\. CLI + Skills：Agent 通过命令行完成操作

Playwright CLI 则把浏览器操作封装成命令。

例如：

`playwright-cli open https://demo.playwright.dev/todomvc/  
playwright-cli snapshot  
playwright-cli find "What needs to be done?"  
`

这里的 Skill 是一份供 Agent 阅读的操作说明，告诉它有哪些命令、适合什么场景，以及如何调试和生成测试代码。

Skill 本身不执行浏览器操作。

执行命令的是 Playwright CLI。

CLI 会把页面快照保存为文件，再返回快照路径等信息。Agent 需要查看具体元素时，可以按需读取文件或使用 `find` 查询。

对于编程 Agent，这种交互方式比较自然。

它原本就在使用终端读取文件、修改代码、运行测试，现在只需要增加一组浏览器命令。

不过也有一个细节容易被忽略：

Playwright CLI 并没有重新实现一套完全独立的浏览器自动化引擎。

较新版本的 CLI 和 MCP 复用了相当一部分底层能力。Checkly 在对比中也观察到，CLI 命令在内部会调用相应的 Playwright 浏览器工具，两者返回的结果已经十分接近。

因此，浏览器本身的执行性能不应该因为换了工具入口，就被预期产生数量级的提升。

真正有必要测试的是 Agent 完成整个任务需要多少轮交互、消耗多少上下文，以及最终是否正确完成测试。

Playwright mcp技术学习交流群
---------------------

伙伴们，对AI测试、大模型评测、质量保障感兴趣吗？我们建了一个 **「Playwright mcp技术学习交流群」**，专门用来探讨相关技术、分享资料、互通有无。无论你是正在实践还是好奇探索，都欢迎扫码加入，一起抱团成长！期待与你交流！👇

![](https://mmbiz.qpic.cn/mmbiz_png/S9INqT7Da92oMca9UgyfdhrK2cVU5vVoiayjPsevethpXjwH4anjpuc26yXmsYD3uBMCvL8iaBLTOBxNJunWtnAw/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=0)

三、Token 消耗：CLI 为什么曾经明显领先 MCP？
-----------------------------

要理解两种方案的性能差异，先要弄明白 Token 消耗在哪里。

以一个包含大量表单、表格和弹窗的后台管理页面为例。

Agent 执行测试时，一般需要经过以下过程：

1.  理解测试任务。
    
2.  获取页面结构。
    
3.  确定目标元素。
    
4.  执行浏览器操作。
    
5.  读取页面变化。
    
6.  判断操作结果。
    

其中，第 2 步和第 5 步可能产生大量页面上下文。

### 1\. 早期 MCP 的两个开销

2025 年的一些 MCP 实现存在两类明显的上下文开销。

一类是工具定义。

Agent 连接 MCP Server 时，可能需要将大量工具 Schema 加载到模型上下文中。

另一类是页面快照。

过去，一次点击或输入操作可能会返回完整的页面语义树。操作越多，模型上下文中积累的页面内容就越多。

在 Checkly 的文章中，作者提到早期 Playwright MCP 的 48 个工具定义大约占用 5.9K Token。

对于需要同时读取代码仓库、测试文件、错误日志的 Agent，这种额外开销确实值得关注。

CLI + Skills 的优势便由此体现出来：Agent 可以按需读取 Skill 文档，通过简洁的命令执行操作，再读取必要的结果。

### 2\. 2026 年，两种方案的差距缩小了

这里有一个技术变化。

较新的 Agent 客户端已经支持按需加载 MCP 工具定义，不必一次性将所有工具说明放进上下文。

Playwright MCP 也支持将页面快照保存成文件，让 Agent 根据需要读取，避免反复把整棵页面语义树塞进模型上下文。

也就是说，过去 CLI 通过文件管理页面状态的优势，如今 MCP 也可以部分获得。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w8gMgicHp6edDiaIvqkwhUcdTMGAg9ZMj0dMm1fehHZz30SRvibxPsic1KhibxdXibbk5eOsAMbWL8F2vyceKlicXxdovt1TcxzI0yMzZRGv1iclbTw/640?wx_fmt=png&from=appmsg#imgIndex=2)

  

图 2：MCP 与 CLI + Skills 的页面上下文传递

从这张图可以看出，当前两种方案都支持按需获取页面信息。

但最终的 Token 开销仍然取决于 Agent 是否合理使用这些能力。

例如，有的 Agent 每执行一次点击就读取完整页面快照；有的 Agent 只在页面状态变化后查询目标区域。

即使使用同一套浏览器工具，两种调用习惯也可能产生明显不同的开销。

### 3\. 公开评测数据能说明什么？

Checkly 在 2026 年 7 月 30 日发布了一项小规模对比。

评测使用 Claude Code，要求 Agent 在演示购物网站中搜索商品、添加购物车，再验证购物车金额。

MCP 和 CLI + Skills 分别执行了三次。

| 

评测方案

 | 

任务结束时的上下文规模

 |
| --- | --- |
| 

Playwright MCP

 | 

约 48K～50K Token

 |
| 

CLI + Skills

 | 

约 45K～48K Token

 |

数据来源：Checkly 的 \[MCP 与 CLI Token 效率评测\]

这组结果中，CLI 的上下文占用略低，但没有出现早期部分评测宣称的数倍差距。

需要注意两点。

第一，这里统计的是任务结束时的上下文规模，不能直接当作整个任务的 API 计费 Token。

第二，每组只有三次运行，样本量不足以得出稳定的性能排名，也没有充分反映复杂页面、工具失败重试等情况。

所以，对于准备落地的团队，这些公开数据适合作为参考，不适合直接写进内部性能验收标准。

四、实战对比：让 MCP 和 CLI 执行同一条测试用例
----------------------------

为了让评测过程可重复，最好选一个公开、稳定、无需登录的测试应用。

这里使用 Playwright 官方 TodoMVC：

https://demo.playwright.dev/todomvc/

测试任务包含三步：

新增待办事项、标记为完成、检查完成状态。

### 1\. 先定义统一的验收条件

无论 Agent 使用哪一种浏览器工具，最终必须满足相同的业务断言。

我们可以用一条独立的 Playwright Test 代码作为验收基准：

`import { test, expect } from '@playwright/test';  
  
test('新增并完成待办事项', async ({ page }) => {  
  await page.goto('https://demo.playwright.dev/todomvc/');  
  
  const title = '学习 AI 自动化测试';  
  
  const input = page.getByPlaceholder(  
'What needs to be done?'  
  );  
  
  await input.fill(title);  
  await input.press('Enter');  
  
  const todo = page.locator('.todo-list li')  
    .filter({ hasText: title });  
  
  await expect(todo).toHaveCount(1);  
  
  await todo.locator('input.toggle').check();  
  
  await expect(todo).toHaveClass(/completed/);  
});  
`

这条测试定义了明确的通过条件：

*   新增的待办事项必须存在。
    
*   页面中只能有一条匹配记录。
    
*   点击完成复选框后，事项必须进入已完成状态。
    

让两个 Agent 分别执行同样的任务，再用这套验收标准检查结果。

### 2\. MCP 方案：结构化工具调用

在支持 MCP 的 Agent 客户端中配置 Playwright：

`{  
"mcpServers": {  
"playwright": {  
"command": "npx",  
"args": ["-y", "@playwright/mcp@latest"]  
    }  
  }  
}  
`

Agent 可以使用 `browser_navigate` 打开页面，通过 `browser_snapshot` 获取目标元素，再执行输入、点击和状态验证。

如果需要进一步定位问题，可以通过 `browser_find` 获取候选目标，并使用 `browser_generate_locator` 生成定位器。

### 3\. CLI + Skills 方案：命令行操作

安装 CLI：

`npm install -g @playwright/cli@latest  
`

安装对应 Skills：

`playwright-cli install --skills  
`

执行页面操作：

`# 打开演示页面  
playwright-cli open https://demo.playwright.dev/todomvc/  
  
# 查看页面结构  
playwright-cli snapshot --depth=4  
  
# 新增待办事项  
playwright-cli fill \  
"getByPlaceholder('What needs to be done?')" \  
"学习 AI 自动化测试" \  
  --submit  
  
# 查找新增内容  
playwright-cli find "学习 AI 自动化测试"  
`

随后，Agent 可以读取当前页面快照，找到对应的复选框，再使用 `playwright-cli check` 完成勾选。

例如：

`playwright-cli check e21  
`

`e21` 是示意引用，实际执行时必须使用当前快照返回的元素引用，不能直接照搬。

CLI 的另外一项实用能力是：浏览器操作会输出对应的 Playwright TypeScript 代码，方便 Agent 组装成正式测试用例。官方 Skills 中还提供了测试规划、代码生成及失败修复的操作流程。

如果只是临时验证页面功能，两种方案都能完成。

但如果目标是把测试过程保存为项目中的 `.spec.ts` 文件，交给 CI 持续执行，CLI + Skills 与编程 Agent 的工作流配合会比较顺畅。

五、性能评测怎么做，才能避免跑出一组没有意义的数据？
--------------------------

这里建议把评测分成三个层次。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w8gMgicHp6eeQic7ZBDatE8BMjjyujBMHYkholAfmajo0c76A0gciaDibq0wsHEwKXxtj3lYvVOK2DqWkdXV8hibKiarb5PNopyBPiadIib5Xm8ZNlw/640?wx_fmt=png&from=appmsg#imgIndex=3)

  

图 3：AI 浏览器自动化测试性能评测体系

### 第一层：执行性能

需要测量从 Agent 接收到任务，到提交最终测试结果的整个过程。

这里涉及模型推理、工具调用、浏览器执行和失败重试。

端到端耗时 ≈ 模型处理时间 + 工具调用开销 + 浏览器执行时间 + 重试时间

如果只统计浏览器点击耗时，很可能看不出 Agent 工具链之间的差异。

还需要注意冷启动和热启动。

首次启动浏览器会包含额外初始化开销，而持续使用同一个浏览器会话时，这部分成本可能被摊薄。

两种方案必须在一致的浏览器模式下比较。Playwright CLI 默认以无头模式启动；MCP 的默认启动方式可能不同，因此需要显式统一配置。

### 第二层：Token 和工具调用开销

建议使用模型提供商或 Agent 客户端的实际 Usage 数据。

不要简单用页面快照文本长度推算整个任务的 Token 成本。

需要分别记录：

*   模型输入与输出 Token。
    
*   缓存命中及缓存读取情况。
    
*   浏览器工具调用次数。
    
*   因失败而重新执行的次数。
    

还有一项指标很实用：每个成功任务的平均成本。

如果方案 A 每次消耗更少，但经常失败重试；方案 B 每次开销略高，却能稳定完成，那么从整体任务成本来看，B 也可能更划算。

### 第三层：任务正确性与恢复能力

这一层是测试开发团队最需要关注的。

Agent 能够点击按钮，并不意味着它完成了测试。

如果没有正确验证业务状态，只能算执行了页面操作。

建议重点检查三个方面：

| 

质量指标

 | 

判断依据

 |
| --- | --- |
| 

任务完成率

 | 

是否满足全部验收条件

 |
| 

断言正确性

 | 

有没有遗漏、删除或错误修改断言

 |
| 

失败恢复率

 | 

定位失败、页面超时后能否正确恢复

 |

对于更复杂的企业后台，可以人为注入定位器失效、接口响应延迟等故障，观察 Agent 如何判断和恢复。

如果涉及真实业务缺陷，还应检查 Agent 有没有为了让测试通过而改变原始预期。

### 实际评测结果怎么记录？

每组建议运行至少 30 次，分别计算中位数、P95 和成功率。

| 

指标

 | 

MCP

 | 

CLI + Skills

 |
| --- | --- | --- |
| 

任务完成率

 | 

待测

 | 

待测

 |
| 

端到端耗时 P50

 | 

待测

 | 

待测

 |
| 

端到端耗时 P95

 | 

待测

 | 

待测

 |
| 

平均计费 Token

 | 

待测

 | 

待测

 |
| 

平均工具调用次数

 | 

待测

 | 

待测

 |
| 

有效修复成功率

 | 

待测

 | 

待测

 |

评测时保持模型版本、任务提示词、测试数据、浏览器版本和运行环境一致，并为每次任务使用独立的初始状态。

本文没有执行这组受控实验，因此不填入未经验证的性能数值。

六、从测试工程实践看，两种方案应该如何选型？
----------------------

对于已经在使用 Playwright Test 的团队，工具选型可以直接围绕任务类型来判断。

| 

使用场景

 | 

优先考虑

 | 

原因

 |
| --- | --- | --- |
| 

需求驱动的自动化脚本生成

 | 

CLI + Skills

 | 

方便衔接代码仓库、编辑与回归

 |
| 

探索式 Web 自动化测试

 | 

MCP

 | 

结构化调用便于持续观察页面

 |
| 

测试失败诊断与自动修复

 | 

两者均可

 | 

重点看日志、Trace 和代码操作能力

 |
| 

长时间自主交互任务

 | 

MCP

 | 

适合独立浏览器 Agent 工作流

 |
| 

大规模固定回归测试

 | 

Playwright Test

 | 

直接执行稳定脚本更可控

 |

还有一个实际情况值得说一下。

如果团队已经使用 Claude Code 或 Codex 维护 Playwright 自动化测试项目，CLI + Skills 可以直接融入原有开发流程。

比如 Agent 发现定位器失效，便可以查看页面、生成新的 Locator、修改测试文件，再执行：

`npx playwright test tests/todo.spec.ts  
`

这条工作流比较顺畅。

另一方面，如果团队正在建设独立的 AI 测试 Agent 平台，浏览器操作只是其中一组可调用工具，并且还有用例生成、测试数据、缺陷管理等多个服务，那么 MCP 的标准化工具接口会更方便统一管理。

### 是否需要同时保留两套方案？

不一定。

如果团队中不同 Agent 承担不同任务，可以按职责分配工具。

例如：

  

![](https://mmbiz.qpic.cn/mmbiz_png/w8gMgicHp6edzwfLTsto8icX4OhYBZ80dDqm4E7DaXGxia8Gp1exN3XMqDPe9rVYBiaibIDTujXZsoLBqRWtkrzRIvgib4G9Y0zXstfsgMjUeibAsw/640?wx_fmt=png&from=appmsg#imgIndex=4)

  

图 4：面向测试开发团队的 AI 自动化测试工程架构

这套架构中，Agent 承担测试生成、调试与维护工作，正式回归仍然交给 Playwright Test。

原因也很实际。

几百条稳定用例每天都要执行，没有必要每次都让大模型重新观察页面、决定点哪个按钮。

编写好的测试脚本可以直接由 Playwright Test 执行，保留可重复性和可追踪性。

Agent 更适合参与需求变化、页面结构调整、测试失败等需要分析和判断的环节。

在正式项目里，还需要对 Agent 的代码修改权限、测试环境访问、敏感数据读取和自动提交行为进行控制。

七、最后聊聊：CLI + Skills 会替代 Playwright MCP 吗？
-----------------------------------------

至少从目前的官方定位和技术实现来看，两种方案仍然有各自适合的工作流。

CLI + Skills 的使用体验更贴近编程 Agent：读取 Skill、执行命令、修改项目文件、运行测试，一套工具链可以完成大部分测试开发工作。

Playwright MCP 则提供标准化的浏览器工具接口，更适合独立 Agent、持续页面探索和交互式诊断。

至于执行效率，不能只看一条“CLI 节省多少 Token”的数据。

同一个 Agent，面对一个只有三个输入框的页面，和一个包含复杂表格、动态弹窗的管理后台，页面理解成本完全不同。

模型版本、工具调用策略和浏览器启动方式也会改变测试结果。

如果你的团队已经使用 Playwright MCP，不妨先选取一批具有代表性的业务用例，加入 CLI + Skills 做一次对照实验。

先观察测试成功率和失败恢复情况，再对比执行时间与 Token 成本。

对于测试开发工程师，最终要交付的是能够反复执行、定位问题、长期维护的自动化测试，而不是一次看起来很顺利的浏览器操作过程。

选择哪种工具，应该服务于这个目标。

推荐学习
----

自动化智能体与测试用例生成课程，限时免费，机会难得。扫码报名，参与直播，希望您在这场课程中收获满满，开启智能自动化测试的新篇章！

![](https://mmbiz.qpic.cn/mmbiz_png/ervTCibwaujE8ibFXPvIe8iaXkI4K0xqJIbQPuiaOER8h5ltp8Y17DabeWhxQfUOadVLgr3aY3n3ll1ybwicGI9C1nw/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=1)

### 关于我们

霍格沃兹测试开发学社，隶属于 **测吧（北京）科技有限公司**，是一个面向软件测试爱好者的技术交流社区。

学社围绕现代软件测试工程体系展开，内容涵盖软件测试入门、自动化测试、性能测试、接口测试、测试开发、全栈测试，以及**人工智能测试与 AI 在测试工程中的应用实践**。

我们关注测试工程能力的系统化建设，包括 Python 自动化测试、Java 自动化测试、Web 与 App 自动化、持续集成与质量体系建设，同时探索 AI 驱动的测试设计、用例生成、自动化执行与质量分析方法，沉淀可复用、可落地的测试开发工程经验。

在技术社区与工程实践之外，学社还参与测试工程人才培养体系建设，面向高校提供**测试实训平台**与实践支持，组织开展 **“火焰杯” 软件测试相关技术赛事**，并探索以能力为导向的人才培养模式，包括高校学员**先学习、就业后付款**的实践路径。

同时，学社结合真实行业需求，为在职测试工程师与高潜学员提供**名企大厂 1v1 私教服务**，用于个性化能力提升与工程实践指导。