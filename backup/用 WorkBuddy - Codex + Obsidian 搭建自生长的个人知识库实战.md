这是苍何的第 576 篇原创！

大家好，我是苍何。

和朋友半开玩笑的说，如果没有 AI，我最想做的是知识管理博主。

但老实说，卢曼卡片盒、PARA 分类法、双链笔记，这些方法论，分享起来也没那么有意思。

而且，最痛苦的你会发现，一套操作下来：知识整理比学习还累。

![](https://mmbiz.qpic.cn/mmbiz_png/zw8bZHsVSaBgYfkoloQWVqPrRicBpVstQMeScDb8YN69XnZA5G2IWW9cYPENic7dT7ico7LQsl1FJSHxz8ajHcpUlQBZjZMtg3ibQcWl09gGlFQ/640?from=appmsg#imgIndex=0)

于是，很长一段时间，我都在研究如何用 AI 更好的做知识管理。

最近，基于 Karpathy 公开的 LLM wiki 知识库构建方法和架构，我做了一些实践。

用 WorkBuddy / Codex + LLM wiki + Obsidian 构建了一套能够自生长的个人知识库。

它能够将剪藏的文章、AI 对话、随手记的灵感，通过 WorkBuddy / Codex 把知识持续沉淀成可进化的知识大脑。

这篇文章主要分以下几大部分，为大家拆解这套系统的核心搭建思路，以及实操步骤。

![](https://mmbiz.qpic.cn/mmbiz_png/zw8bZHsVSaBicaPyAW0LgSk6l2CibVH2ic2iaK1UOEFkYfyWCNUyVCWia1TvOHSpagMypP0ibMQgeEyqb5zdwibjksibJHRgIRNiaQFcEkfniaLs7EHUI/640?from=appmsg#imgIndex=1)

> 内容会有些长，可以点赞收藏后丢给你的 Agent 放进你自己的个人知识库系统。

要理解 LLM wiki，得先搞清楚它到底要解决什么问题。

现在主流的玩法，不管是 RAG 系统，还是 NotebookLM、GPT 的文件上传，本质都是同一套流程：你先上传资料，提问时模型召回相关知识片段，再临时综合出一个答案。

听着挺智能，但问题很明显。

每次提问，模型都在从碎片里重新拼答案，答完就散。同样的问题问一百遍，它就重新拼一百遍，知识本身没有任何积累。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zw8bZHsVSaCWeku6T9XpyoV5T3UQaQUTdZDhKCsZS8FFdu3iak5JbyDXC2PfSlYjWD2byxic4xV3YHaqFoKc9riacZoFRu3CjrxdJmcR3ICcvw/640?from=appmsg#imgIndex=2)

Karpathy 提出的 LLM wiki，可以理解成给 AI 安排了一份长期工作：持续维护知识库。

每加入一份资料，Agent 都会先查看现有页面。已有内容会被补充，新概念会单独建页；遇到不同观点，则把来源、时间和适用范围一起留下。知识的分歧因此有迹可循，也不会被一段看似完整的总结悄悄抹掉。

我觉得，“自生长”的关键就在这里：AI 处理完资料后，知识库必须留下变化。它可能新增一个概念、补上一条关联，也可能暴露一个暂时没有答案的问题。一次次变化累积起来，才会形成真正属于自己的知识体系。

为了让这个过程可控，整套系统分成三层：Raw 层保存文章、论文、聊天记录等原始资料；Wiki 层沉淀 AI 整理出的概念、实体和主题；Schema 层规定 AI 如何归档、更新、引用，以及怎么处理冲突。

![](https://mmbiz.qpic.cn/mmbiz_png/zw8bZHsVSaBZzicYQT4BaH0y9ZU9nFVYG3yMelWXQLgCEEJP5KXhuf2ZJtapPXIbVgqUKKICa0EPD67SS3VeZOVp4bFquicGIicTibiahCMF0Gsc/640?from=appmsg#imgIndex=3)

简单说，Raw 保存证据，Wiki 记录理解，Schema 负责定规则。后面的实战，就是让这三层真正运转起来。

这套系统用到了 Obsidian，那为什么不直接用 Notion、Ima、NotebookLM 呢？

首先 Obsidian 是完全本地化和数据自主的。一个 Vault 就是电脑上的普通文件夹，笔记以 Markdown 纯文本保存，不依赖某个平台的页面数据库。

聊天记录、会议纪要等私人资料可以留在自己的设备上，是否同步、同步到哪里，都由自己决定。说得直白一点，工具可以换，知识不用跟着搬家。

这种文件形态也很适合 Agent 工作。WorkBuddy / Codex 可以直接读取目录、创建页面、修改链接和维护索引，每次变化都能定位到具体文件，还可以通过 Git 留下记录。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zw8bZHsVSaCRyDibbicH83XPathxW7aqiaU4w6qCkst4Qo1KxMWr4icUIe9EwicbARRWlTfAjv7iaEeJ8dH7QcR16XibYX7CxWic00etBw4WIDQQgicg/640?from=appmsg#imgIndex=4)

Obsidian 的双链、反向链接和知识图谱，则把概念、人物、工具和主题连接起来，帮助我发现核心节点、孤立页面和新的关联。

![](https://mmbiz.qpic.cn/mmbiz_png/zw8bZHsVSaBl5vcDqGXNFUBdv8Ficszwx8AykfSz2onyMvDLmh87ehFIbt3NgyqNFIfLM9Jzr94gs7MH8qCwkp2lFicfaC4B35ZQZARFkPbsM/640?from=appmsg#imgIndex=5)

而且 Obsidian 的插件生态进一步提供了扩展空间，从模板、查询、版本管理到发布和可视化，都可以按需添加。

在整套系统中，Obsidian 同时承担存储底座、人机操作界面和知识观察窗口三种角色；

WorkBuddy / Codex 负责执行，Obsidian 负责保存、连接和呈现结果。对于一套需要长期使用的个人知识库，本地自主、结构开放、变更可追踪和能力可扩展，已经足够构成选择它的理由。

在这套系统里，WorkBuddy / Codex 承担的是 Agent 执行层。它们可以直接读取 Obsidian Vault 里的目录和 Markdown 文件，调用搜索、脚本和命令完成批量处理，并按照 `AGENTS.md` 中约定的规则工作。

简单说，Obsidian 提供工作空间，LLM Wiki 提供知识结构，WorkBuddy / Codex 负责让这套结构真正运转起来。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zw8bZHsVSaDB7PGchZGEdeMJKLdGcvG0bJNTL7gb9NSFuRJ7qlpWxeAI0n7kcUUibr6XFcNs7M9Ak90RKmEwbNTsdz9D7ibL1aViaf5aibiaMKUg/640?from=appmsg#imgIndex=6)

当新资料进入 Raw 层后，Agent 会先理解内容，识别其中的概念、实体和主题，再与现有 Wiki 进行对照。已有知识会被补充，新内容会创建页面，相关知识会建立链接；遇到不同说法时，它还要保留来源、时间和适用范围，并同步更新索引与变更记录。整个过程都属于增量维护，不需要反复重建整套知识库。

到了查询和日常维护阶段，Agent 还会负责检索相关页面、整理答案、追溯来源，并批量检查失效链接、缺失字段和长期没有更新的内容。

![](https://mmbiz.qpic.cn/mmbiz_png/zw8bZHsVSaDGafZntIGO7dQoIL1DoZwYWg0X3kibFJEg7UWx9CwE50pTxBUxAeLryLmrY4YV4Gxp66KSZia4zp5eeoxLrCOf11MXibjWBKfuRg/640?from=appmsg#imgIndex=7)

它在系统中承担执行与编排，人负责设定规则、检查结果和处理关键判断。这样一来，知识管理从大量手工整理，逐渐变成一套人机协作的持续维护流程。

接下来，进入实战环节，这里的 Agent 选择你可以用 Codex、Claude Code，也可以用 WorkBuddy，模型的话建议选择上下文长一些的模型。

在模型这里，如果追求极致的性价比，目前来说 DeepSeek V4 Flash 是个不错的选择，但可惜的是不支持多模态。

> 我非常不建议你用 Codex 里的 GPT 5.6 Sol，因为用量真的太猛了。

当然，如果使用国内模型，也可以选择 Kimi K3 这类原生多模态模型，或 Doubao-Seed-Evolving 这类面向 Agent 与长程任务优化而且是动态永续进化的模型。

到了长链路、多轮任务里，模型需要持续读取文档和图片、调用工具、维护上下文，并根据中间结果不断调整后续动作，因此上下文容量、工具调用稳定性、指令遵循和结构化输出能力，都会直接影响整套流程能否稳定运行。

实际选型时，建议用自己的真实资料跑一遍完整任务，重点观察上下文是否丢失、工具调用是否稳定、输出格式是否漂移，以及单次任务的时间和成本。

![](https://mmbiz.qpic.cn/mmbiz_png/zw8bZHsVSaDs7caVLQr84d1NtTluPhaDOdZeVyqQEMm8uZEvzUYicbwNF4kXR0NCDibovW0OicEicqOCDCgJlyek7FSGyk6OWWSatBHicza4NoJs/640?from=appmsg#imgIndex=8)

准备工作
----

要搭建这样一套知识系统，需要提前准备一下工具及环境。

首先是 Obsidian，在 obsidian. md 免费下载后，新建一个 Vault（仓库）：

![](https://mmbiz.qpic.cn/mmbiz_png/zw8bZHsVSaAatMvGb1bcEhZw8K0cje2HCvJiagb95uz9DibmwtkUOJyuB9Yb9qWOGyBiaRdp35V20qwWuwiatiaCh0swicMSnaJyXFBrvXgM8ZibYE/640?from=appmsg#imgIndex=9)

> 全程记得开代理，特别是访问插件市场的时候。

这里先抛一个彩蛋，下载完 Obsidian 后，你到插件市场再下载一下 WeSight 插件，也可以更丝滑的搭建这套知识大脑。

![](https://mmbiz.qpic.cn/mmbiz_png/zw8bZHsVSaAyw49OBricvnGjvMUV9fLjVceN9jN80JHImOZlYPns4xa6DJWL3FViaD3AuCIwVBEntJeyDsYAab2XlhuicOTYoz238qK2dkU1HE/640?from=appmsg#imgIndex=10)

如果你感兴趣，可以在文章后面看更为简单和丝滑的搭建方法。

有了 Obsidian 后，你还需要准备 WorkBuddy 或者 Codex。这里就不细讲如何下载和使用了，也可以直接去我们开源的蓝皮书上看教程。

> WorkBuddy：workbuddy.homes  
>  Codex：codexguide.ai

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zw8bZHsVSaCic7xkUWRmfibdD6iapibiaOWk3oUjWWI9LupWryrMpMwI6AZAXfhBELDFIYKqEJNA9ibNS6CWvfeLQOjSTBO9pia1sUHQct4CMBLpgU/640?from=appmsg#imgIndex=11)

当然了，当前文章也会同时同步到蓝皮书上。

 LLM Wiki 三层架构
--------------

 LLM wiki 理论整体的三层架构，你可以按照自身需求再自定义，也可以复用我的这个模板：

●●●

`📦 my-wiki/``├── AGENTS. md          ← Schema 规范层：给 AI 的工作说明书（核心）``├── index. md           ← 全局索引/站点地图（AI 定位知识的入口，导航目录）``├── log. md             ← 变更日志（只追加，谁改了什么一目了然）``│``├── raw/                   ← 原始资料层（只读，AI 不许改）``│   ├── articles/          ← 剪藏的文章、网页``│   ├── papers/            ← 论文、报告``│   ├── books/             ← 书籍、划线、笔记``│   ├── chats/             ← 有价值的 AI 对话记录（File Back 回填的）``│   └── notes/             ← 自己随手记的灵感碎片``│   └── meetings/          ← 会议纪要转写``│``└── wiki/                  ← Wiki 层（AI 全权维护）``    ├── sources/           ← 来源摘要页：一份 raw 资料对应一页``    ├── concepts/          ← 概念页：解释方法论、理论、模式``    ├── entities/          ← 实体页：人物、公司、产品、工具``    └── topics/            ← 主题综述页：某个领域的综合对比分析`

如何搭建
----

搭建这套系统，我亲身实践下来一共有三种方法，我认为是比较友好的，对大多数人来说也相对简单。

下面就以上手难易程度分别介绍，最简单的方式我放到最后一个方法中做说明。

**方法一：直接搭建法**

第一种是根据三层架构模板，直接让 WorkBuddy 或 Codex 来搭建。

可以在 WorkBuddy 中打开刚刚新建的 Obsidian Vault，进入这个目录：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zw8bZHsVSaBwk7WHkbp7RAgpUPSxWOFgHtE22UR6OsLAd4vdJrJ7jWpMMiateGBOpr2lTMmkrnbZDNsBAUaLCdeE0wWMEOIG5QyCCuKCWDn0/640?from=appmsg#imgIndex=12)

选择「日常办公」，然后输入以下提示词：

●●●

`你现在是这套个人知识库的搭建与维护 Agent。请在当前 Obsidian Vault 根目录中，搭建一套可长期增量维护的 LLM Wiki。``## 目标``建立 Raw、Wiki、Schema 三层结构：``- Raw 层保存原始资料，只允许读取，不修改原文。``- Wiki 层保存 AI 整理后的结构化知识，由 Agent 增量维护。```- Schema 层通过根目录下的 `AGENTS.md` 定义归档、更新、引用和冲突处理规则。```## 需要创建的结构```- `AGENTS.md`：Agent 的长期工作规范````- `index.md`：全局索引和知识导航入口````- `log.md`：变更日志，只追加新记录````- `raw/articles/`：文章和网页剪藏````- `raw/papers/`：论文和报告````- `raw/books/`：书籍、划线和读书笔记````- `raw/chats/`：有价值的 AI 对话````- `raw/notes/`：灵感与随手记录````- `raw/meetings/`：会议纪要与转写````- `wiki/sources/`：原始资料对应的来源摘要页````- `wiki/concepts/`：概念、理论和方法页````- `wiki/entities/`：人物、公司、产品和工具页````- `wiki/topics/`：跨来源的主题综述页```## AGENTS.md 必须包含的规则```1. 处理新资料前，先搜索 `wiki/` 中已有的相关页面，判断需要补充旧页面还是创建新页面。````2. `raw/` 是事实来源，禁止改写、删除或移动其中的文件。````3. 每份 Raw 资料在 `wiki/sources/` 中建立对应的来源摘要页，并保留原始文件链接。```4. 概念、实体和主题使用独立页面，通过 Obsidian 双链建立关系，避免把所有信息堆在一篇笔记中。``5. 所有事实性内容都要标注来源；无法确认的内容明确写为“待核实”。``6. 新旧资料出现分歧时，同时保留不同说法及其来源、时间和适用范围，不直接覆盖旧结论。```7. 每次只更新受影响的页面，并同步维护相关双链、`index.md` 和 `log.md`。````8. `log.md` 采用只追加方式，记录日期、资料来源、新建页面、更新页面和待人工确认事项。```9. 不擅自删除现有文件；同名文件已经存在时，先读取并合并必要规则，保留原内容。``10. 信息不足或判断可能影响整体结构时，暂停执行并向我提问。``## 页面模板```请分别在 `wiki/sources/`、`wiki/concepts/`、`wiki/entities/` 和 `wiki/topics/` 中创建 `_template.md`。模板使用 Obsidian 兼容的 YAML 属性，至少包含：`title`、`type`、`aliases`、`tags`、`sources`、`created`、`updated`。正文预留摘要、核心内容、相关页面、来源与待核实问题等区域。```## 执行与验收``执行前先检查当前目录，确认这里是 Obsidian Vault；如果无法确认，请先询问我。随后创建缺失的目录和文件，不覆盖已有内容。``完成后请进行一次自检，并向我汇报：``- 新建了哪些目录和文件``- 哪些文件因已存在而被保留或合并```- `AGENTS.md` 中最重要的维护规则```- 当前结构是否通过检查``- 下一步应该把第一份测试资料放到哪个目录`

可以看到 Agent 就会按照规则创建目标文件和目录，以及定义 AGENT. md

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zw8bZHsVSaD0ZlMhhjAiaZQnMEA8wvib3V7uiag7JhgB1ica3XCsBu3oaSaCLicvicj2uTYY5RscnrJsRUiaWpJpRLxvOsZuEGIKF8UM21FuicUt97Q/640?from=appmsg#imgIndex=13)

Agent 会自动按照要求建好相关结构。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zw8bZHsVSaBFfkPTcDBYNVly9gbKvWf4ED1WhtefjNeibLe7HgRIS4rJCFD3OnlOlJKibuuYwe6iaicJ3dkx4DtZugzRjgTQnlLxz6sFBBg9TxM/640?from=appmsg#imgIndex=14)

这个时候，你打开 Obsidian 就能看到对应的结构已经建好了：

![](https://mmbiz.qpic.cn/mmbiz_png/zw8bZHsVSaAZK6uk89lr0PBQ0cot1UKKeiaaPft9oekfZFQIaAYVyfKC4Il64lhEp51pFot9aSbF522YAk2pyrE7ZT5dbt2uphnQ2EBahLoc/640?from=appmsg#imgIndex=15)

然后收藏一篇文章来做下验证，这里就借助一个叫 Obsidian Web Clipper 的浏览器插件，可以把网页文章一键剪藏到 Obsidian 中。

这里在实际目录选择的时候选择我们刚建好的 raw/articles目录

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zw8bZHsVSaChY3ctibtBPK7L2hLUVMhC1unn0n5nNkH8JfnVXt0ewObRoOV6Pu2hjicxTgse9RF5gtNu2sBic6gibiaUNvY8MNLxDicfn0Fr7d7vU/640?from=appmsg#imgIndex=16)

然后你就能看到在 Obsidian 中对应目录下已经把这个文章同步过来了，非常的方便：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zw8bZHsVSaDIusczy0GvicbpPg2bW9TWvV6F0mlVzoGSKT3RkSUr3dYrZI4KWUa4ExictllLScxQxpuwzbibt9hR66CdDerzecb7WD1lzrhibfo/640?from=appmsg#imgIndex=17)

然后接着在 WorkBuddy 或 Codex 中建 wiki，可以参考以下提示词：

●●●

``请读取 `raw/articles/` 中新增的文章，并严格按照 `AGENTS.md` 的规则增量维护 Wiki。````处理前先检索现有页面：为文章创建来源摘要，提取其中的概念、实体和主题；已有内容补充到原页面，新内容创建页面，不同观点保留来源、时间和适用范围。随后建立相关双链，并更新 `index.md` 与 `log.md`。````不要修改 `raw/` 中的原始文件。完成后告诉我新建、更新了哪些页面，以及有哪些内容需要人工确认。``

agent 会按照在 AGENTS. md 来建实体、概念、来源摘要、主题等 wiki。这里可以看到 WorkBuddy 已经帮我们新建了 9 个页面。

![](https://mmbiz.qpic.cn/mmbiz_png/zw8bZHsVSaALEsia2eNC2ogLYYt3fMVn0FMrnv4W9AXN0T33utxIJicRxJibZUfJrzVyfpBDhrPOEW7gUCCPJnCUoHE8UO2yRHnPuzUppRCRQQ/640?from=appmsg#imgIndex=18)

去 Obsidian 中也能看到新建的 wiki 页面信息：

![](https://mmbiz.qpic.cn/mmbiz_png/zw8bZHsVSaBkgRwwmicZJ8Y0mxPsQsdp3SEvEl6z3mRViczr7AdVcia38vjf4esnzAciaxNyfvD5TlSibw2NoUoFxTV0kqhKnVBW0BvbrLfHgNog/640?from=appmsg#imgIndex=19)

这些 Wiki 页面当然可以直接阅读，但它更重要的价值，是成为 Agent 的长期检索层和推理底座。经过结构化整理后，原本分散在文章里的概念、实体、主题和来源关系，都变成了可以直接定位、交叉引用和持续更新的知识节点。

当我们再次提问时，Agent 可以优先检索已经沉淀的 Wiki 页面，再沿着双链回到相关资料，快速组织出有依据、可追溯的回答。随着处理的资料越来越多，这层可复用的中间知识会持续积累，后续查询和维护也会越来越高效。

比如我在 WorkBuddy 中提问：

> 请基于刚刚入库的文章和现有 Wiki，回答三个问题：文章提出了哪些核心观点？涉及的概念、实体和主题之间有什么关系？哪些结论可以转化为可执行的行动建议？
> 
> 回答时请标注引用的 Wiki 页面和 Raw 原文路径；如果资料中存在不同观点、信息缺口或待核实内容，也请单独列出。

![](https://mmbiz.qpic.cn/mmbiz_png/zw8bZHsVSaDjIxesV9DdjKS0GiaLvpvvBQmVYM52zQshfUuf4pPwgxSq46OE6Gicl3UflYTXzy2pmVpib3nxrDd30PvhicXR0AdWAVdyx12jSibI/640?from=appmsg#imgIndex=20)

可以看到，Agent 会先从 Wiki 中定位相关知识节点，再沿着页面之间的双链关系完成交叉检索与综合，并将关键结论追溯到对应的 Raw 原文；整个回答过程因此具备更高的检索效率、上下文一致性和事实可核验性。

以上方法一，比较粗暴，对提示词及工程化理解要很到位，而且 AGENTS. md 要不断调整以适应自身知识库搭建需求。

**方式二：claude-obsidian 插件**

下面介绍下方法二，有大佬已经基于 LLM wiki 这套理论实践出了工程化落地较好的开源项目，叫 claude-obsidian。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zw8bZHsVSaCZEqn2SYicicc4s7Pyiacx1zicHHicurHBvX2Em0RkJUa6GwWCRhMhCFN7iczkQic23mydWefmLOI3DyfSq7dwNdbjianegrgziaHDdV5U/640?from=appmsg#imgIndex=21)

它把常用的方法封装成了插件及 Agent Skill，比如可以初始化知识库，将笔记保存到 wiki，自动索引和链接等。

你不需要再通过提示词及自定义指令来实现 LLM wiki 的能力，你只需要借助该项目，就能搭建一套属于你的个人自生长知识库。

这种方式相对上一种更为简单，你只需要在 WorkBuddy / Codex 中安装该项目：

![](https://mmbiz.qpic.cn/mmbiz_png/zw8bZHsVSaCa3cq5ErfPliaMXjnPhNfZHmoibunS08Jxdb2yHQ5m4UWPNwvyPMRvwjKpVNoVrYHM9OdNX0KEhp3V4kSfyia3kCnX5ibXfzIgwfI/640?from=appmsg#imgIndex=22)

当前 Vault 就会自动创建好结构，只需要简单：ngest 一下，就能把新素材同步 wiki：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zw8bZHsVSaBHosOFa8uSfdAfRonUIyjvZ4iaaNibUzXJYCfzib3GBohTk5ZMKUjW9rQqoQqbj1MDQUbKoss8bibGtca0exFoOpn6lbJesnBIg58/640?from=appmsg#imgIndex=23)

用 retrieve 来从知识库中快速查询结果：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zw8bZHsVSaCGFZPicDCBDWFx629Yh5ibeNd4mHw3qozJzyy3CGyjebrbm2FfTKiaYSrxaOmgasqggf0zkjbiaLiaGLFlS320zVyefCkLYeVK6BoI/640?from=appmsg#imgIndex=24)

你甚至不用显式指定 retrieve，Agent 会命中知识库中的 wiki 来快速检索：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zw8bZHsVSaBSdU22hpgdrH3aU08PWwlETwYhtzpczaPo6QPywYXbcXJkyNnx0o7EH3nWImfOU6wnpib4IKWEoBTbrVKyDNfw2BZ8hKZvRLUA/640?from=appmsg#imgIndex=25)

方式二比方式一更进一步：项目将初始化、入库、索引和检索封装成可复用的 Agent Skill，省去了反复编写提示词和维护复杂规则的工作。

不过，主要操作仍然发生在 WorkBuddy / Codex 中，用户需要理解并调用 `ingest`、`retrieve` 等指令；Obsidian 更多承担文件存储和结果浏览，任务状态、执行过程与知识变化缺少直观的可视化反馈。对第一次接触这套架构的用户来说，使用门槛依然存在。

要让这套知识库真正融入 Obsidian，操作入口也需要进入 Vault。于是就有了第三种方式：

**方式三：WeSight 知识大脑**

WeSight 插件把知识库初始化、资料入库、Wiki 更新和智能检索整合到 Obsidian 内部，让用户在熟悉的笔记界面中完成整个流程，同时由后台 Agent 负责结构维护与持续更新。

这样一来，人看到的是清晰可视的操作和结果，Agent 处理的是复杂的知识编排，两者最终形成一套完整的人机协作闭环。

你现在仅需要开启「知识大脑」能力，WeSight 会自动为你当前 Vault 配置好环境及结构。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zw8bZHsVSaDef9HLQrqv3y8zD1iaR8WqohS7SVPsZibfMn071pkicJtfdllW80KoRVA6iaewCvOrnq9l7kuhPjLHwNfQHicoOoxupNl7IUarmg4k/640?from=appmsg#imgIndex=26)

可以一键将当前笔记加入到知识大脑对应的 wiki：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zw8bZHsVSaADaJPznnoevhC4g54cIibAjSIBG1XNVBfhJ4q8HhPZes3LDIkFVib2TP2tm6n00h8yHoCKRxd3F7WJouZdvGvdibFqgmnWT1Q4NM/640?from=appmsg#imgIndex=27)

Chat 时选择「基于知识库」模式，WeSight 会优先检索 Vault 中已经沉淀的 Wiki 页面，并沿着双链定位相关概念、实体和原始来源，再基于这些上下文组织回答。整个检索、引用与上下文装配过程都会自动完成，无需手动指定目录或调用命令。

![](https://mmbiz.qpic.cn/mmbiz_png/zw8bZHsVSaAjUBpoprV1ywADbEtbqdr1xYsOTAaBmPTQ4JxRdhkU7EfAya696fXGzjmRmFMsBuLHYIs4wxgUcGb1zQXPBZ6KupeYAtMZNXg/640?from=appmsg#imgIndex=28)

而且还可以将与 Claude Code、Codex 的聊天记录一键保存到知识大脑，方便后续检索、关联和复用，让有价值的对话继续沉淀为长期知识资产。

![](https://mmbiz.qpic.cn/mmbiz_png/zw8bZHsVSaCpKZDuJ0me3947Y9hRa9BibIcRRZlgl08AmhKRsuyQqRy9N4k3AibDuITpPzzR5xFiaz0yGGPGJOVLtWsbJ1xCRCIuEpvZNhXMuM/640?from=appmsg#imgIndex=29)

> 不过当前 WeSight 知识大脑功能仅对会员少量开放内测，欢迎大家体验。

这套组合的“自生长”，来自知识结构的持续增量更新。每当新资料进入 Raw 层，Agent 都会按照 Schema 检索现有 Wiki，补充已有页面、创建新节点、建立双链，并记录来源与观点冲突。每次处理都会留下可复用的结构化结果，知识库也会随着输入不断演化。

Obsidian 提供稳定的本地载体和可视化界面，WorkBuddy / Codex 提供理解、判断与编排能力，WeSight 则把入库、更新和查询进一步整合进日常笔记流程。人负责输入高价值资料和完成关键判断，Agent 承担重复维护，数据、规则与执行由此形成闭环。

![](https://mmbiz.qpic.cn/mmbiz_png/zw8bZHsVSaBhsfN1mzoWxGviaT0MZ6yLdZS3dg7JE95TC06icD5EFBiaP7Hh2whpDdZg9sm0REt143d46dyvvBmuakU82kOHEfGP4MPRMnh8icA/640?from=appmsg#imgIndex=30)

对于资料的搜集，如果是手机上可以配合 ima 或者其他剪藏工具来进行搜集，甚至直接可以借助 WorkBuddy 小程序快速搜集文章及灵感：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zw8bZHsVSaA1ib08u0reZFWU6ic17u1ibuPqjTUP0bic7zYTpUeJNXnl1BBLIdpYRyCO18aVOyRtichVHgic7sygm3h2Cmz1qZJUEspS7kibonNvXw/640?from=appmsg#imgIndex=31)

对于电脑文章搜集可直接使用 Obsidian Web Clipper 的浏览器插件一键剪藏。

其他散落在各处的比如飞书文档啊，也可以借助 Agent 快速的收藏近知识库中来。

回过头看，这套系统带来的最大变化，是让知识管理从一次性的手工整理，变成一套可以持续运行的维护机制。文章、笔记、对话和灵感进入 Raw 后，Agent 按照规则完成归档、关联和更新，Obsidian 负责长期保存与呈现，零散资料也就逐步长成了属于自己的知识网络。

当然，自生长并不意味着完全自动化。哪些资料值得保留、规则如何设定、关键结论能否成立，仍然需要人的判断；AI 更适合承担重复、耗时且结构化的维护工作。人和 Agent 各自处理擅长的部分，知识管理才有机会长期坚持下去。

如果你也想试试，不需要一开始就搭出一套完美系统。先建好三层目录，放入一篇真实资料，让 Agent 完成第一次增量更新，再根据实际使用不断调整 Schema。只要每次输入都能留下可复用的结果，你的知识库就已经开始生长了。