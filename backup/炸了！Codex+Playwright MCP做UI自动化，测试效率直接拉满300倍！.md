我做测试第八年了。

前面好几年，最熟的动作不是写用例，是半夜被人从群里点名。接口同学说链路没问题，产品说刚才演示还好好的，最后镜头对准你，你昨晚不是回归过吗。

坦率的讲，这种场面最气人的地方，不是技术多难，是口径对不上。有人盯 HTTP 200，有人盯有没有弹窗，有人只看自己电脑能不能点开。大家都很忙，证据却散落在聊天记录里。

后来我把 Codex 接上 Playwright MCP，再把配套 Skill 焊进项目，才真正把「帮我点一下」变成「可重复验收」。不是玄学提效，是把打开页面、拿快照、点击填写、断言截图，收进同一条工具链。跑通主线冒烟之后，再回头看以前手点十几页的节奏，效率体感真的像被拉满了好几倍。你要硬说个数字，我愿意用「拉满 300 倍」来形容那种从人肉点击到自然语言驱动回归的落差。夸张吗？对天天救火的测试同学来说，一点也不夸张。

这篇就把文档里那套核心能力掰开讲清楚，结构、目录、功能、用法、源码级约定，以及怎么落到你们自己的测试仓库。不成熟的经验，但我已经尽量按可执行的方式写了。

* * *

软件测试里有个老坑，接口测通了，页面未必能用。

Web 端回归最贵的往往不是再写几条用例，而是把完整页面状态反复灌进脑子或模型。电商下单、审批流、会员开通，动不动十几个页面。人肉点一遍，眼睛酸；脚本写一堆，定位一改就崩；只靠聊天让 Agent「帮我点一下」，下一轮对话一开，规范全丢。

Playwright MCP 干的第一件事，是让 Codex 以程序化方式控制浏览器。打开页面、获取可交互元素快照、点击、输入、断言、截图留证。和「人在本机浏览器里点一遍」不同，它更适合可重复的端到端验收，先拿 snapshot，再按真实文案点，最后对成功页做断言并截图。

配起来也不神秘。Node 18+，npx 可用，被测站点网络通。在 Codex 的 MCP 服务里填名字 `playwright`，命令 `npx`，参数 `-y @playwright/mcp@latest`，保存后重启。内网下不了浏览器时，再配代理或指定浏览器缓存目录。演示账号用课程同款即可，用户名 `standard_user`，密码 `secret_sauce`。

三条 UI 路径别混着用。

localhost 快速预览，用内置浏览器就够。已经登录的公网页做演示交互，本机 Chrome 更顺手。要可重复断言、要进 MCP 工具链、要截图留证，默认走 Playwright MCP。选型错了，你会又慢又难断言，还误以为是模型不行。

回到主线，MCP 解决的是「Agent 能不能稳定操控浏览器」。但真正把效率拉满，还差两层，CLI 把状态落盘，Skill 把操作手册固化。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/zHRDKibK8xkspDoUOqFESHl7dZB14WIaHMZKwXs0mhQAuZZfa8guOKib9vxj7tCvVvMOBVQL5GlOqicuqCiaNCSRwjlUic5vwPsZH1jWhniaPcybo/640?wx_fmt=jpeg&from=appmsg&watermark=1#imgIndex=0)

* * *

刚接上 MCP 时，你会有种「卧槽也能这么玩」的兴奋。一句话让它打开演示站，确认登录框在不在，听着很香。

可真实项目里，UI 自动化不是一次对话，是每天、每环境、每条冒烟路径。

如果每次都把完整可访问性树和二十多个工具 Schema 全量灌进上下文，长流程很容易顶满。官方基准里，标准多步骤 UI 会话可以超过八万 Token。Token 烧完了，后面的断言、截图、失败定位全被挤掉。测试团队要的是可重复、可回放、可进 CI 的回归能力，不是热闹的「帮我点一下」。

所以课程里把组件分得很清楚。

**Playwright** 是底层执行引擎，负责页面操作、元素定位、断言这些硬能力。

**Playwright MCP** 是 AI 的标准化工具接口，把能力封装成 `browser_navigate`、`browser_click`、`browser_snapshot`、`browser_type` 等二十多个可调用工具，适合短期探索和调试。

**Playwright CLI** 是执行助手，命令行驱动，快照落 YAML，截图落 PNG，Trace 落独立文件，Agent 按需读取。同等多步骤会话，可比全量灌入上下文省下好几倍 Token。

**Skill** 是操作手册。Markdown 技能文件，指导 Agent 学 CLI 命令与最佳实践，匹配触发场景，规定输出格式。

短探索、要同时看控制台和网络时，留着 MCP。长流程回归、要入库的 UI 用例，默认走 CLI 加 Skill。同一条用例今天走这套、明天走那套，证据格式会对不上。怎么说呢，工具没有绝对的好和坏，只有默认路径清不清楚。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/zHRDKibK8xksuJ1qZzBhqgwlSaYJdUhgoBib0pkzXgkKtYThpEuZvlsSbgRopj7DB5H6n4ou8M7GWNMT1hB7cyL7zvbicB5DVDE0cpVhaVQiciac/640?wx_fmt=jpeg&from=appmsg&watermark=1#imgIndex=1)

* * *

装 Skill 很短。先保证本机有 CLI，再装配套手册。

```

```

第一块是 `description`。写清楚「用 playwright CLI 做 UI 测试、浏览器探索、录制脚本」这类触发词，Agent 才能在一堆 Skill 里选对你。写糊了，最常见症状是另起一套工具，或者手写一堆不稳定选择器。

第二块是命令手册。至少覆盖打开页面、快照、点击、填写、截图、关闭，以及 Ref 从快照读、不要把整棵 DOM 贴回对话。

第三块是交付约定。探索结束后要输出什么，是规格文件还是 PO 模式脚本，页面层和用例层怎么拆，先自验证再保存。没有交付约定，探索再漂亮也只是表演。

核心片段可以长这样，重点是触发、步骤、硬规则，别写成散文。

```

```

能力上对应四件事。用自然语言接下测试任务。按手册编排 `playwright-cli`。按需读取磁盘快照，而不是把整页状态灌进模型。把探索过程整理成可回归脚本。对测试人来说，这四件事合在一起才叫提效。少敲命令只是爽感，沉淀成资产才是回报。

再补一句边界。Skill 管的是「这类 UI 测试怎么做」，触发场景、步骤、输出格式。团队级语言规范、安全红线，别塞进每个 Skill，那是 `AGENTS.md` 的事。Skill 越干净，越容易在不同项目间复用。

![](https://mmbiz.qpic.cn/mmbiz_jpg/zHRDKibK8xkvwfM6BoicAlnBHz7CUx1WB54UI6NcpcSvR6h1OJyZOpaXFafHmxeBUsS943iby6sibtibMBtTUlqRibSdUT3bMNwN8FaPiatk503C9o/640?wx_fmt=jpeg&from=appmsg&watermark=1#imgIndex=4)

* * *

链路其实很短，建议团队直接贴进 README。

你用自然语言丢任务，带上站点、账号、验收点。Agent 扫描已安装 Skill 的 `description`，匹配 `playwright-cli`。接着读取 `SKILL.md`，学会常用语法。再通过 Shell 执行命令，按需读磁盘上的快照 YAML。探索完成后，整理成可入库脚本，而不是只留聊天记录。

常用命令闭环长这样。

```

```

`snapshot` 之后，页面上的可交互元素会带着 Ref，比如 `e8`、`e21`。后面直接 `playwright-cli click e8`。这是结构解析，不是拿截图瞎猜。一次快照可以反复复用，比纯视觉方案稳得多。快照字段通常包含角色、名称、状态，足够支撑结构化定位。

调试用有头，能看见真实点击路径。夜间回归默认无头，进 CI 不弹窗。YAML、PNG、Trace 当失败证据，缺陷评审时拿得出东西，不用靠「当时好像是点了这个」。

![](https://mmbiz.qpic.cn/mmbiz_jpg/zHRDKibK8xktfCWeDK4hsdWlIUDaTVyPaUticcnb9nLl6ucSOcVGyYgHibeHN1MAk8kibI8URTq75CVRkn2VvhwjBVcrLa8fd58ghROyROfrYaE/640?wx_fmt=jpeg&from=appmsg&watermark=1#imgIndex=6)

* * *

下面这段 prompt，可以直接丢给 Codex。关键约束已经写死，有头模式、PO 分层、先验证再保存。把演示站换成你们自己的测试环境也行，骨架不变。

```
页面层负责定位和操作，改 UI 时只改这一层。
```

```

```

用例层只描述业务路径，不掺定位细节。登录、加购两件、进购物车、完成结算、断言成功。UI 一改只动页面层，业务路径一变只动用例层。很多人觉得 AI 生成脚本不能直接用，往往不是模型不行，是你没要求它按 PO 分层交作业。

成功标志也很明确。每步有汇报，购物车与下单成功页有断言，最终页有截图。这就是可纳入回归的 UI 自动化，而不只是「帮我点一下」。

和 Chrome 插件对照时，可以要求同一条演示链路两边都跑一遍，对比步骤和断言是否一致。对照的目的不是秀两种工具，是确认 MCP 主线真的可重复，不是靠人工记忆续命。

* * *

Skill 对测试同学的好处，不只是少敲命令。

**回归更稳。**  长流程状态落盘，按需读 YAML，比把完整可访问性树反复灌进模型更扛跑。十几个页面的审批流，如果每步都把整页状态灌回去，上下文很快顶满，后面的断言和失败定位全被挤掉。

**资产可复用。**  探索过程变成页面层、用例层、快照、截图。缺陷评审时拿得出证据，不是靠口头复述。新人丢同一段 prompt，就能复现接近的路径。自动化能力往往集中在少数测开身上，Skill 等于把隐性经验外显化。

**和现有项目更好咬合。**  你不必推倒重来。先在仓库建 Skill 目录，再约定页面层与用例层，把演示站这套当成模板，替换成你们自己的登录页、列表页、结算页即可。原来的 Pytest、报告、流水线都可以继续用。Skill 负责探索与生成，CI 负责无头回归。

落到日常，我建议按这个节奏嵌进去。

本周先接 Playwright MCP，跑通「打开页面、确认登录框」这条最小链路，确认工具链活着。下周装 CLI 和 Skill，把最稳的一条冒烟路径改成自然语言探索、PO 分层、自验证入库。第三周把失败截图和快照接到评审流程。再往后，才考虑把 Excel 用例到报告编排做成更大的 Skill。

如果你负责的是偏业务的功能测试，更实际的用法是，你把验收点和业务路径说清楚，测开把目录和 PO 模板建好。两边对齐一次，后面每个人都能用同一套 prompt 起跑。测开同学则可以把隐性步骤写成可扫描文件，团队不会只靠聊天记录续命。

职业价值其实很直白。会写脚本的人很多，能把「Agent + 浏览器 + 手册 + 仓库规范」焊成质量门禁的人不多。接口层、页面层、数据层以后还要继续接，页面层先跑通，至少你不会再被「接口 200，页面全挂」反复点名。

常见坑提前避一下。Skill 装了但没进扫描目录，任务完全不走 CLI。MCP 配了但没重启，列表里像没装。Ref 过期还硬点，该重新 snapshot。探索完不要求入库，聊天一关资产归零。有头窗口被带进夜间回归，CI 直接卡死。排错顺序也固定，先查网络与站点是否可开，再查 Node 与 npx，最后查 MCP 与 Skill 是否加载。

![](https://mmbiz.qpic.cn/mmbiz_jpg/zHRDKibK8xksGu48wJibiaZYcRGiayNOfrh2SxLKysdMMBic4cXMMkkLNZBb6bv3EqIANkFqFwCMBibIMicMUNyaccInQKotNZN4wITsBzmI8SNnlw/640?wx_fmt=jpeg&from=appmsg&watermark=1#imgIndex=9)

* * *

写到这里，其实就三句话。

第一句，Playwright MCP 只是点火器。真正把效率拉满的，是 MCP 能控浏览器，CLI 能把状态落盘，Skill 能把手册焊进仓库。少一层，你都会在半夜回归里重新踩坑。

第二句，别再把聊天记录当资产。探索完就要求 PO 分层、自验证、入库。页面层、用例层、截图、快照，这四样进了仓库，才叫质量门禁，不叫热闹演示。

第三句，今晚真的能动手。确认 Node，接上 MCP，装好 Skill，跑通登录加购结算，强制输出可回归脚本。五步走完，你就不再只是「会点页面的人」。

我做测试这些年，最怕的不是学不会新工具，是明明知道页面层会翻车，却还只能靠肉身当监控。这套链路不完美，我也还在摸索。但至少从接上那天起，我少被「接口全绿，页面全挂」点名了一次又一次。

如果你也在同样的坑里，把这篇当作业说明书就行。能跑通一条冒烟路径，就已经值回票价。

![](https://mmbiz.qpic.cn/mmbiz_png/zHRDKibK8xkuUXibva5J4uljn5kvSIesPHv5nYdHgBokfxf9tiaB3pmdXtgZBBLsxztiaSHl3OfnvibADwy6NhP8as6FXialribaeesP0YLMiatvZ1E/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=10)

谢谢你看我的文章，我们，下次再见。