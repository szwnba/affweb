⭐ 设为星标 · 第一时间收到推送

![](https://mmbiz.qpic.cn/mmbiz_png/TkWsojtosvTIxzf5mQGyYRk4TQaBRzfVywicev5EzqptUHnP8FGzOmB8Uia7jIibRfnZpZGrukiauQKlqtcIEQ2VKVP9LRrk2Ux8Ch70f5NzKkc/640?from=appmsg&watermark=1#imgIndex=0)

石臻说AI编辑：石臻

**导读：**  一个浏览器 Agent，用一句自然语言在 Google Flights 里完成苏黎世到伦敦的单程航班搜索，**7.073 秒**结束。我又把它接到 OpenRouter Jev，在 12306 实测了一次北京南到上海虹桥的余票查询。结果很有意思：核心决策确实快，但原版在真实国内网站上连撞了三个兼容问题。

4 天破万 Star，它到底做了什么
------------------

Jev Ultrafast 是 Browser Use 与 TypeSafe Jev 组合出来的一个极小型浏览器 Agent。输入仍然是一句完整目标，但执行方式和常见的视觉 Agent 不太一样：它默认不把截图丢给模型，也不让模型现场编 CSS 选择器、坐标或 JavaScript。

截至 2026 年 9 月 20 日，这个仓库已经拿到 **10,665 Star、642 Fork**。项目刚创建 4 天，主分支只有 3 次提交，没有正式 Release，核心 Python 与快照脚本合计约 850 行。热度很高，成熟度却还在 MVP 阶段，这两件事要同时看。

Jev Ultrafast GitHub 仓库，4 天突破 1 万 Star

![](https://mmbiz.qpic.cn/sz_mmbiz_png/TkWsojtosvSjkiaZBtRtZ3wJrvZz942xUOLsgu5DO0aEh9u7nDAFLJkqyK5HevEHDwG0CDZ50rrBJQb7PLoO15qwRHzcvicLngkBia0xhxIaUQ/640?from=appmsg&watermark=1#imgIndex=1)

演示任务也很具体：把 Google Flights 改成单程，填入 Zurich 和 London，选择 2026 年 9 月 20 日，点击搜索，等到航班结果出现。录屏是 1× 速度，不是后期加速。

| 

项目

 | 

当前信息

 |
| --- | --- |
| 

开源协议

 | 

MIT

 |
| 

语言与环境

 | 

Python 3.12+、Chrome、uv

 |
| 

决策模型

 | 

TypeSafe Jev；OpenRouter 已提供 Jev 1.13

 |
| 

文本模型

 | 

默认示例为 Inception Mercury 2.5

 |
| 

公开演示

 | 

Google Flights 7.073 秒

 |
| 

项目状态

 | 

0.1.0，MVP，尚无正式 Release

 |

它为什么快：把网页变成一张动作表
----------------

Jev Ultrafast 每次观察页面时，会读取当前可见的 HTML 和 ARIA 控件，把按钮、输入框、下拉选项等整理成一张动态索引表：

```
[1] button    Change ticket type · Round trip [2] combobox  Where from?        · San Francisco [3] combobox  Where to?          · empty 
```

每个真实 DOM 节点拿到一个由代码维护的编号。模型只能在当前页面已经观察到的元素和受支持动作里选择，不能凭空生成选择器、坐标、Shell 命令或可执行 JavaScript。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/TkWsojtosvTSQ9UsBxvKRufPEdpaMDr4d7Rxaz07Wf43or1aCIIhSP0FI8ZcPiaxfImUqib782dwjUh06TI11KHFX4kBhSJJ5ZwYyGlSl41o0/640?from=appmsg&watermark=1#imgIndex=2)

Jev Ultrafast 的动态动作空间：页面先变成元素表，再选择操作与目标

它支持的操作包括 `CLICK`、`TYPE_TEXT`、`SELECT`、上下滚动、`WAIT`、`DONE` 和 `BLOCKED`。关键点在于：**“下一步做什么”和“不同动作该选哪个元素”会在同一次 TypeSafe 请求里并行回答。** 

比如页面上同时有点击目标、输入目标和下拉目标，系统会一次提出多组问题。最后如果操作答案是 `CLICK`，代码只消费 `click_target`；其他推测结果直接丢弃。两次判断被压进一次网络往返，这就是 TypeSafe 所说的 speculative fan-out。

只有需要打字时，才叫小模型来写
---------------

动作选择和文字生成被拆开了。绝大多数步骤只做有限选项判断；只有决定执行 `TYPE_TEXT` 时，才调用一个小型 OpenAI 兼容模型，根据原始目标、字段含义、页面上下文和最近动作生成要输入的文字。

这次航班演示里，小模型只调用了两次：生成 Zurich 用了 581 毫秒，生成 London 用了 346 毫秒。返回值必须是只有一个 `text` 字段的 JSON，解析不通过就不会输入。

7.073 秒 Google Flights 演示，录屏保持 1× 速度

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/TkWsojtosvRgXBIoBbcz9vgcefX3gcxrRytGibQBLMrnvHKcsicciaSdLVj3lCSuQOv7yTxUamvKTOOTJjTOnBrjibyaL4Mt8avFvOTgibickV6Vc/640?from=appmsg#imgIndex=3)

浏览器侧也做了几处很实际的减法：一次浏览器调用完成 DOM 快照；默认只发送当前视口里的可见文字；输入联想最多等 200 毫秒；其他交互最多等两个动画帧或 50 毫秒。执行前还会重新检查页面状态、目标是否仍可见、是否被遮挡，避免模型拿着过期页面继续点击。

这套设计更像一个“选择器”，而不是一个边看截图边自由发挥的通用 Agent。它牺牲了一部分网页覆盖面，换来更小的状态、更少的浏览器往返和更快的单步决策。

7 秒是真的，但别把它当成通用跑分
-----------------

项目公开的测量比推文严谨得多。7.073 秒从首次预测开始，到 Agent 接受 `DONE` 为止，包含模型调用、文字生成、浏览器操作、过期决策和页面加载；不包含浏览器初始化、第一次打开页面，以及结束后的独立结果校验。

Google Flights 搜索完成后的真实结果页

![](https://mmbiz.qpic.cn/sz_mmbiz_png/TkWsojtosvQeFN8V5Y2s0HIdeKSmjDb3b6zpsRBic8wUMA8uTVjg1R8iaicRvIDDPpH42picUNu4v1CcofJtzvWyFJAN6jRT3Ign4ngJibkalDqM/640?from=appmsg&watermark=1#imgIndex=4)

仓库还做了 3 组交替对照：原始版本和优化版本都通过 3/3，任务中位时间从 **9.450 秒降到 7.092 秒**，下降 25%；浏览器协议调用中位数从 **1,092 次降到 101 次**。不过只有一个任务、一个浏览器配置和 3 组重复，项目作者也明确写着：这不是通用可靠性基准。

推文称单次任务成本是 **0.0039 美元**。公开测量文件能确认的只有两次文本模型调用合计 0.00006272 美元；TypeSafe 响应记录了 token 数，却没有公开完整美元账单，浏览器成本也未计入。所以 0.0039 美元可以作为作者口径引用，不能当成已由仓库数据完整复算的成本。

怎么跑：官方版要两个 Key，也可以改成只用 OpenRouter
---------------------------------

它不是下载后完全离线运行的项目。官方代码仍默认使用两个凭据：`TYPESAFE_API_KEY` 负责动作决策，`TEXT_MODEL_API_KEY` 负责输入文字。示例配置走 OpenRouter 的 `inception/mercury-2.5`，并关闭 reasoning。

命令不复杂。复制配置文件后，在 `.env` 中填写 `TYPESAFE_API_KEY` 和 `TEXT_MODEL_API_KEY`：

```
git clone https://github.com/browser-use/jev-ultrafast.git cd jev-ultrafast uv sync cp .env.example .env uv run jev 
```

然后打开 `http://127.0.0.1:8766`，点击 `Start demo` 和 `Run automatically`。本地 Inspector 会显示元素编号、操作概率、目标概率和实际执行动作。

本地 Inspector 会展示元素、动作概率和每一步执行记录

![](https://mmbiz.qpic.cn/mmbiz_png/TkWsojtosvSQzd3lNaCzd71DGnibps4I97Zd83W1r983KvDF4Zf8DeHN9FS20mFRticNLqte2D0Byv7ZibYlHia4ha1IDpuLicqc9j4g8KhkKDic0/640?from=appmsg&watermark=1#imgIndex=5)

它也能当作库调用，传入网址和完整目标后遍历执行状态。Google Flights 只是演示，不是写死的站点脚本；仓库还给了 Wikipedia 和本地酒店筛选任务。项目地址：

https://github.com/browser-use/jev-ultrafast

如果注册不了 TypeSafe，还有另一条路。OpenRouter 已经提供 `typesafe/jev-1.13`，走单独的 Decisions Alpha API。当前仓库把 TypeSafe 地址写死了，我在本地加了一层提供方配置，让动作决策和文字输入共用同一把 OpenRouter Key：

```
JEV_PROVIDER=openrouter OPENROUTER_API_KEY=sk-or-... JEV_BASE_URL=https://openrouter.ai/api/alpha/decisions JEV_MODEL=typesafe/jev-1.13  TEXT_MODEL_API_KEY=sk-or-... TEXT_MODEL_BASE_URL=https://openrouter.ai/api/v1 TEXT_MODEL=~openai/gpt-luna-latest 
```

最小 API 测试成功返回了 `typesafe/jev-1.13-20260917`。Jev 决策请求和文字模型请求都能正常计费，不再需要 TypeSafe 账号。不过 Decisions API 仍是 Alpha，接口格式以后可能变化。

我拿 12306 跑了一次，原版先卡了三次
---------------------

实测任务是查询 **2026 年 9 月 21 日，北京南到上海虹桥** 的车票，只看余票，不点击预订、候补或任何下单按钮。最终版本用了 7 个实际操作、20.391 秒，进入余票查询页；程序又独立检查了 URL、出发站、到达站和日期，四项都通过。

| 

项目

 | 

12306 实测结果

 |
| --- | --- |
| 

动作模型

 | 

OpenRouter `typesafe/jev-1.13`

 |
| 

文字模型

 | 

OpenRouter `~openai/gpt-luna-latest`

 |
| 

实际操作

 | 

7 次

 |
| 

总耗时

 | 

20.391 秒

 |
| 

页面变化恢复

 | 

1 次，旧决策被拒绝后重新观察

 |
| 

最终校验

 | 

北京南、上海虹桥、2026-09-21、余票页 URL 全部通过

 |
| 

安全边界

 | 

没有点击预订、候补、提交订单或支付

 |

动图演示：Jev Ultrafast 在 12306 填写车站、选择日期并进入余票页

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/TkWsojtosvTJmhh6jf9QibaEGpfRXemqSnb6BBQrQgcUH8OPpc9ic7R3zr6dj6CoXfLp3IMg15wpc4yIEzrmlqXXcH0EcyT4eBIJgBbQq6MibM/640?from=appmsg#imgIndex=6)

这次并不是一遍过。原版先后卡在三个地方：

*   12306 的车站联想依赖逐键事件。一次性写入文字后，输入框有内容，候选列表却不更新。
    
*   “北京南”“上海虹桥”候选项是自定义 `div`，只有 `cursor:pointer`，没有标准按钮、链接或 ARIA 角色，原快照器看得见文字，却不能把它当成可执行目标。
    
*   点击“查询”会打开新标签页。原浏览器驱动仍盯着旧首页，模型一度在错误页面上宣布完成。
    

我没有写 12306 专用选择器，而是补了三项通用能力：逐字符派发真实键盘事件；把可见、短文本、顶层 `cursor:pointer` 元素纳入受控动作空间；跟随当前页面打开的新结果标签页。修改后，离线测试、代码检查和 **23 项浏览器防护回归**全部通过。

12306 余票结果页：北京南到上海虹桥，日期为 2026-09-21；账户栏已裁掉

![](https://mmbiz.qpic.cn/mmbiz_jpg/TkWsojtosvQeduGCqe1TBpOGSFUY5Z6sGib2B88Vrno1I4icYz6vMRHUgmibs8nCQthLrNOlePtUQVUteAJkYJms8dKd64fH5TrV6hNL4bPzK0/640?from=appmsg&watermark=1#imgIndex=7)

这个结果比“又跑通一个网站”更有参考价值。Jev 的有限选择很快，真正拖住它的是网页工程细节：键盘事件、非标准控件和多标签页。修完这些通用能力后，模型不需要知道 12306 的 CSS 选择器，也能完成查询。

它的边界，在 DOM 之外
-------------

Jev Ultrafast 官方版本支持常见 HTML 和 ARIA 控件，但还没有完整实现浏览器的 accessible-name 规范。Shadow DOM、iframe、Canvas、文件上传、新标签页、嵌套滚动和复杂键盘组件都可能卡住它。最多 60 个动作、120 次决策请求，候选动作超过 250 个也会截断。上面的 12306 能力来自本地通用补丁，尚未进入上游仓库。

项目 README 主动列出的性能证据与 MVP 限制

![](https://mmbiz.qpic.cn/sz_mmbiz_png/TkWsojtosvS2Ycj6O8ZmIT4DAB7oicCaebu54pUpYTnvq0aia7JFZkTRQkcrq1tyQ1iaTOCV84Ku1Q6icnwuLqKQKUqz0ic9FQnn3BFq1ahsd5gY/640?from=appmsg&watermark=1#imgIndex=8)

模型说 `DONE` 不等于任务真的成功。演示会另外检查单程、出发地、目的地、日期和结果页是否都正确。代码也会在点击前重新读取几何位置并做遮挡检查，尽量避免“模型觉得点到了，页面其实没反应”。

本地修改后的版本跑过 **32 个 pytest 测试、23 项浏览器防护回归、Ruff 和两份 JavaScript 语法检查**，随后才执行 12306 在线任务。一次成功仍不能证明它能稳定覆盖整个 12306，更不能直接用于抢票或下单；但这次已经把“模型决策能否落到真实国内网站”从演示视频变成了可复现测试。

Jev Ultrafast 的工程选择很克制：**能让模型做有限选择，就不要让它自由生成；能一次并行问完，就不要串行多跑一轮。**  对结构清晰、DOM 友好的搜索和表单任务，这条路很有潜力；复杂网页和生产流程，现在还不适合直接交给它托管。