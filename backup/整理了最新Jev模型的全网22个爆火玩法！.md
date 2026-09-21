 Datawhale干货 

****最火玩法：Jev模型****

Jev 这周彻底爆火。创始人 Diogo Almeida 是前 OpenAI 研究员，参与过 InstructGPT 和 RLHF，也就是 ChatGPT 早期对齐技术的核心成员。他这次做出来的 Jev，不写长文、不聊天、不写复杂代码，只做一件事，帮你做快速决策。玩游戏时挑下一步往哪走，跑流程时判断哪条规则适用。每百万输入 token 0.042 美元，输出 token 免费，有人叫它 AI 界的蜜雪冰城。

发布不到一周，社区已经跑出二十多种用法。看着很多，底层逻辑完全一致，把眼前的情况拆成有限几个选项，交给 Jev 挑一个，程序拿了结果接着跑。

![](https://mmbiz.qpic.cn/mmbiz_png/zW6S9vt0cS8tbunK5bCuSfVepMm8odpAzcMqMBcyCqhuapwrzHS4v0XtJWeQN0u9214V96EOGYR1WLM7raE5LWU8BYIAYgU68gYUP7vprJ0/640?wx_fmt=png&from=appmsg#imgIndex=0)

01

爆火的Jev 到底是什么

传统的文本大模型是生成式的，抛出一个问题，它一个词一个词往外蹦。这种机制适合创作、推理、写代码，但遇到选择题就显得太重、太贵、太慢。

Jev 走的是另一个路子，它是一个轻量的系统一分类与打分模型。每次调用，你给它一段上下文和一组明确的选项，它直接输出每个选项的概率分布，并选出置信度最高的一个。延迟在几十毫秒到几百毫秒之间，成本只有主流大模型的几十分之一。

创始人 Diogo Almeida 的公告帖在 X 上拿下了 3620 万浏览，大家看重的不只是便宜，而是它补齐了 Agent 工作流里最缺的一块低延迟决策控制面。

02

社区整理的 20+ 个玩法

我们把官方示例和社区开发者探索出来的玩法全盘梳理了一遍，按照从好玩的玩具到真正进生产的光谱，逐个列在下面。

1\. 官方：Doom 实时游戏操控

官方在发布博文里演示了让 Jev 玩初代《毁灭战士》（Doom）。Jev 每秒大约做 10 次动作决策，实时控制角色走位和开火。连续跑一小时花费大约 7 美元，比工程师预期的还要低，验证了高频实时决策的可行性。

2\. 官方：Wikiracing 超长列表跳转

从一个维基百科词条，只靠点击页面里的超链接跳到目标词条。每一步面临几百甚至几千个候选链接，Jev 需要挑出离目标语义最近的那一个。这个测试用来验证模型在高基数选项下不会产生幻觉。

3\. 同时跑 50 局地铁跑酷

开发者 @\_MaxBlade 搭建了自动化环境，让 Jev 同时控制 50 局《地铁跑酷》。换道、跳跃、下滑都是单次小判断，高并发下调用次数迅速叠加，但 50 局跑完总费用不到 1 美分。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zW6S9vt0cSicYUW24qa3wywz6jxAAWBv7icjdbrqnuySYReDQ1OLUYohVW87DQTsyQZ5WE0MMPh1Upp8zZLkKbDb4tyqQiaeR2mBMFHo3rmMKU/640?wx_fmt=png#imgIndex=1)

4\. 超级马里奥开源控制器

开发者 @faadilhshaik 为经典《超级马里奥》开发了 Jev 驱动的控制器。它直接读取结构化的游戏内存状态，由 Jev 决定起跳和加速时机，项目已经在 GitHub 开源。

![](https://mmbiz.qpic.cn/mmbiz_png/zW6S9vt0cS9XGJ1Gq6QypDpSj3wb6f7B4B9iaZvWXfiaTZlYNECGt0NkXjqkju0ibLktomujsgXN2lpYCoIDcH9pK2GPI9D4mnRVZvVfAejlvI/640?wx_fmt=png#imgIndex=2)

5\. 杀戮尖塔 2 极速代打

中文开发者 paulwei 拿 Jev 跑策略卡牌游戏《杀戮尖塔 2》。此前用大模型打牌，单步思考明显卡顿；换成 Jev 之后，单次出牌决策仅需 0.7 秒，人类还没看清出牌动画，下一步指令已经给出。

![](https://mmbiz.qpic.cn/mmbiz_png/zW6S9vt0cSicH8gCcV55OkRjEGPFoxCg96wsicgcsNT09RfzqNcT1eIGicgbcNnxgDDDAg0UCXwMLbzyJyVMnnqfeWtU4k8IC1zP4SNICTWRQg/640?wx_fmt=png#imgIndex=3)

6\. 3D 城市自动驾驶仿真

开发者 @jpschroeder 在 3D 城市仿真环境里接入 Jev。车在虚拟街道中行驶，Jev 根据前方传感器和路况判定行驶方向，车辆移动后再把新状态传回，整个系统不到一小时就搭建完成。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zW6S9vt0cSibBUFxbCdI2ncheBWGYSjFfZIPMlI8uOzyUYwp1mMxO3mWKMqicvCDTJmibMXlpWhel8GNG0vaPFAWp4G5nuzHmdL2cyntt0x1o4/640?wx_fmt=png#imgIndex=4)

7\. MuJoCo 物理仿真火箭回收

开发者 @uttkarsh\_42 在 MuJoCo 物理引擎中训练火箭垂直起降。何时点火、开启几台发动机、何时切换着陆姿态完全交由 Jev 判断。经过 12 次试验后成功着陆，单次完整试验消耗 245 次调用，成本仅约 0.04 美元。

![](https://mmbiz.qpic.cn/mmbiz_png/zW6S9vt0cSibFaMG11j60jA8YlTwabdwfmX2Sibfa0V8VDicHv7LZ125SmSyj5qABwz9iaOATYlcBorOoccJ6xuPLLBectoSTTN1Nc8XySU7214/640?wx_fmt=png#imgIndex=5)

8\. 逐像素概率选色拼图

开发者 @anshuc 把图像生成拆解为逐像素的分类选择。给每个像素位置分配颜色选项与概率，程序按照 Jev 给出的高概率颜色逐步涂抹，拼成完整的低保真图像。

![](https://mmbiz.qpic.cn/mmbiz_png/zW6S9vt0cS9pXeSqo0BGUK8oEsxNQ7drliasnCbjCBRWmYHxF0ZxFcSbwRFRsWBXRE3by3dA2G1PyvWd1UiaQg6T25SWTSgbEKKlRq52MsJHo/640?wx_fmt=png#imgIndex=6)

9\. Browser Use 官方集成 jev-ultrafast

Browser Use 团队在 Jev 发布三天内推出了官方集成库 jev-ultrafast，两天狂揽 2700 颗 Star。它把网页操作抽象为操作和目标两组选择题，全程无截图、不消耗多模态 token，单次往返输出两个决策。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zW6S9vt0cS9n5cH7tsPoKLT66qcupAjFT1DI5qAvdfJYVa4qFPcHVibp26iauhJE8kfFQ6RRRMO8c82GdcLsHfbu8rlw23kTjam64icr6Uoqow/640?wx_fmt=png#imgIndex=7)

10\. 真实航班查询 7 秒实测

Browser Use 创始人 Gregor Zunic 放出一段无剪辑实测视频。Jev 驱动浏览器在真实航司官网完成一次完整的单程航班查询，耗时 7 秒，调用花费仅 0.0039 美元。

11\. Vercel 命令安全审查分类器

Vercel 工程师 Pranit Sharma 将内部运行的 Shell 命令安全审查分类器从 OpenAI 大模型替换为 Jev。处理速度提升了 5 到 18 倍，由于误判率下降，实际准确率反而更高。

12\. BryoAI 商业邮件高频分类

BryoAI CTO Nikhil Mudholkar 拿 Jev 与 Gemini 跑商业邮件意图分类测试。Gemini 在绝对准确率上略有优势，但单次调用成本贵了 10 到 20 倍；更重要的是，Jev 输出的是经过校准的真实概率分布，便于下游业务系统设定置信度阈值。

13\. 工单分派与自动化路由

面向客户支持场景，系统将每条新进工单的关键描述提取出来，由 Jev 从十几个业务小组中选择最合适的主管团队，取代了之前脆弱的手写正则匹配。

14\. 自动化 PR 合并资格预审

在持续集成（CI）流水线中，Jev 读取改动文件清单和自动化测试报告，快速对该 PR 是否具备合并资格给出初步判断，高风险 PR 直接打上待人工复查标签。

15\. 重复扣费与紧急客服分类

针对金融和电商业务，Jev 被用来快速识别重复扣费等高危客诉。遇到客户情绪激动或涉及退款申请，系统在 100 毫秒内打上紧急度标签，优先推送人工客服坐席。

16\. jev-mcp 事实核验与注入检测

社区开源了基于模型上下文协议（MCP）的扩展包 jev-mcp。开发者可以调用 Jev 完成多来源事实交叉核验、检测用户 Prompt 中潜藏的 Prompt Injection 越狱攻击，并为检索召回内容打语义相关度分。

17\. fast-jev-compaction 长上下文压缩

在 Coding Agent 运行长任务时，上下文会迅速膨胀。fast-jev-compaction 利用 Jev 快速判断每一轮工具调用的保留价值，剔除无效日志，仅保留关键状态，该项目获得了 Jev 官方团队的转发赞赏。

18\. Jev Codex Router 任务难度分流

一个多模型路由项目，在任务发起前由 Jev 预判该代码编辑任务的逻辑复杂度，简单改动直接路由到便宜的小模型，复杂跨文件重构才激活大模型，整体调用开销压降 60% 以上。

19\. Armin Ronacher 评价的大模型前置分流

Earendil CTO、Sentry 创始人 Armin Ronacher 指出，用主流生成式大模型自己来做分流决策在经济上不合算。Jev 的极低延迟和极低成本，让应用在入口层部署高密度的实时流量路由成为可能。

20\. LangChain 博客：Agent 外挂决策框架

LangChain 官方发表专题博客《Building a Harness with Jev》。文章指出，以往 Agent 框架的分类决策逻辑往往深埋在闭源系统的定制逻辑中，现在有了通用、便宜且确定性极高的分类模型，这套 Harness 决策层可以推广到每一个开源 Agent。

![](https://mmbiz.qpic.cn/mmbiz_png/zW6S9vt0cS9t8ovZWFQyL8h3kjbDqsChGibe9Zr4ftSdp3dyaAUwrcTX0ic96ibYZjZHEib44rPSmXlmsUybGuqic5k9r2iaQRGWnmR1XhC1SXk20/640?wx_fmt=png#imgIndex=8)

21\. 链上订单簿自动化交易

部分 Web3 开发者将 Jev 接入去中心化交易所。模型高频读取买卖订单簿深度数据，仅输出买入、卖出或观望三个动作。社区普遍评价这是目前最具噱头、但在真实行情里风险最高的用法。

22\. PrimeLine 预注册对比测试：置信度决定胜负

在独立测试机构 PrimeLine 开展的双盲预注册评测中，两项真实任务上，Claude Opus 5 和 Haiku 4.5 的初始绝对准确率原本追平甚至领先 Jev。然而，一旦规则允许模型跳过自身最不确定的样本，Jev 在两项任务上全部实现逆转。原因在于 Jev 输出的置信度具备数学统计意义，而通用生成大模型自我评估的概率常常存在严重过自信。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zW6S9vt0cS8fCFNV2AtA29wJw0ibSreaubbA9SMrTicnubwoib4GShpKVdFia0PzVqyiaPCV8Ifw3Vbxen8S3aAfLAvk9LS5ChelvADwYvRvEFEI/640?wx_fmt=png#imgIndex=9)

03

如何用上Jev

不少开发者看了一圈，最关心的是去哪里才能直接上手调用，以及官方有哪些现成的开发者工具。目前官方和主流聚合网关都已经在第一周内开通了入口：

官方控制台与文档入口

TypeSafe 官方提供了在线控制台（Playground）与完整的开发者文档，支持通过 HTTP API、Python SDK 和 JavaScript SDK 直接发起调用。输入价格统一为每百万 token 0.042 美元，输出免费。

```javascript
官方文档：https:
官方控制台：https:
```

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zW6S9vt0cS9tibLib8lN2K8qCEAXImtialXuFSItAp1K83peWCMia3iaVgyrTYtDeItOdOibHUACs0qP4SIIK95htLfKVAbxR9n5ea4iaTEZBTNYN8/640?wx_fmt=png#imgIndex=10)

OpenRouter 与 Vercel AI Gateway 聚合平台

如果你已经在使用现有的模型聚合层，不需要重新申请专属 SDK：

*   OpenRouter：已在官方模型库上线，模型标识为 typesafe/jev，现有接入 OpenRouter 的代码只需修改模型名称即可切换。
    
*   Vercel AI Gateway：在发布 72 小时内完成了直连集成，支持全球边缘低延迟分发。
    

![](https://mmbiz.qpic.cn/mmbiz_png/zW6S9vt0cSic9tehP5yDxEQWPnOKliagJEVjofG3Qr9pZdf7Xng6udt6AAMlC7bOGDvCOOdDH9ibp6CT19ibG1Q3IzPlJSWb3wibt2hutnyBkFsw/640?wx_fmt=png#imgIndex=11)

官方 Skills 技能包：教 Agent 一次多问

除了基础调用接口，TypeSafe 官方还在 GitHub 开源了 \`typesafe-ai/skills\` 仓库。这是一套专门注入给 Coding Agent 的能力规范，重点纠正 Agent 喜欢一次只问一个问题的低效模式，指导它在拿到模糊需求时一次性将歧义点列清并附带候选选项。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zW6S9vt0cS9A6pUbibcFtzkuHTTtrgaX6nc7iaaxHFe1fJBnYb6hw868YJIMNcicqMlRJ7Qt3uicJiaEKyGMtibUUWbtxpicaQXhsh6JBM63muVT9Q/640?wx_fmt=png#imgIndex=12)

04

写在最后

Jev 从上线第一天引发的推特狂欢，到一周内被塞进各种生产级流水线，给整个开发者生态上了一堂关于分工的课。

对日常做 Agent 开发的人来说，能带走的启发很明确。一是别指望小模型拥有天马行空的推理能力，它的长处在于把判断压缩成有限选项后的确定性与高吞吐；二是当业务需要接入安全拦截、分流路由、工单分拣这类非生成式任务时，把重型大模型换成轻量决策器，往往既能省下真金白银，又能把响应延迟拉回可用的毫秒级水平。

![](https://mmbiz.qpic.cn/mmbiz_png/vI9nYe94fsGxu3P5YibTO899okS0X9WaLmQCtia4U8Eu1xWCz9t8Qtq9PH6T1bTcxibiaCIkGzAxpeRkRFYqibVmwSw/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp#imgIndex=2)

**一起“**点****赞”****三连**↓**