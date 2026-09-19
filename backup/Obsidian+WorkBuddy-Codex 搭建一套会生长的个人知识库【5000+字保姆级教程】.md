这是「泽安不加班」的第 10 篇原创。

大家好，我是泽安，见字如面～

我为了找半年前存的一条 AI 提效笔记，在我那个两千多篇的 Obsidian 库里翻了四十分钟。

翻到了，顺手看了眼创建时间：去年 11 月。也就是说，这条我当初觉得「太有用了必须存下来」的笔记，安安静静吃了十个月的灰。

我不是个例。我敢打赌，屏幕前用 Obsidian、Notion 或者任何笔记软件的你，库里八成也是这个状态：存的时候感动自己，找的时候像在考古。

这事的根子不在你懒。卢曼卡片盒、PARA等方法论你肯定都看过，看完觉得有道理，实操三天就散架。原因很简单：这些方法全都默认一件事，整理靠人。而人的时间是有限的，你上班已经够牛马了，下班还得给自己的知识库打工，图什么。

所以这一个月我干了件事：把 AI 接进我的 Obsidian 库，让它当管理员，我当甩手掌柜。库还是那个库，但性质变了，从「坟场」变成了「会自己长的东西」。

### 一、先说清楚：什么叫「会自己长」

以前的知识库流程是这样的：你看到好东西，存进去，结束。知识库的唯一动作是「收」，没有「理」和「用」。三个月后它就是一个更大的坟场。

我这次借的是最近圈内很火的一个思路，源头是 Karpathy 提的 LLM wiki 概念。说人话就是：别再让 AI 每次提问都从零开始翻资料，而是给它安排一个长期岗位，专职维护你的知识库。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/PDQ5TeJGT42KMicWTrjRIGHTcibYhvwNNvVQcDmCt8WUNmibVHhqU4JQS7ohQhb8yXnl4WsKbukGhNgWpUibCOPNAFszDgQdicq5ptPMYSD6d5ys/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=0)

具体运转起来是三条铁律：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/PDQ5TeJGT43hiaibpKszv54t0LXicbktwF8VrRLDtcbywlH8nT6LsJLXeUHjqvGvYMibyLWwN0vqDa3LZj7IUeaNI8icjs1q1wzIgh1ia3x8bBtKw/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=1)

1、新资料进来，AI 先查库里有没有。已有的，往原笔记里补充；没有的，新建页面；

2、遇到互相矛盾的说法，不悄悄抹掉，把来源、时间、适用范围都留下来，让分歧有迹可循；

3、每处理完一份资料，库里必须留下变化。可能是新增一个概念，可能是补上一条关联，也可能是暴露一个没答案的问题。

说实话，第三条才是灵魂。以前 AI 帮你总结，答完就散，什么都没留下。现在每一次「喂料」都在给库添砖，库才谈得上「生长」。

### 二、为什么是 Obsidian，而不是 Notion、ima

Obsidian 是一款基于 Markdown 的本地知识管理软件。既能用来写笔记，也能通过内部链接，把不同笔记之间的内容关联起来，逐渐搭建成一个属于自己的个人知识库。

所有笔记都可以直接保存在电脑本地，用户自己拥有和控制这些数据。

先交代分工：Obsidian 负责存，AI（我用的 WorkBuddy，用 Codex 或者别的 Agent 同理）负责干活，我负责动嘴和拍板。

![](https://mmbiz.qpic.cn/mmbiz_jpg/PDQ5TeJGT42eSFTk2TmMviblamOPVCZvfQLCZuRZpmQUNZOqNnJ7giaOvib6xWL4jXkpHmURAyKiakauV49Yibns17RflQHxG1BU7MT4ZMEHseTw/640?wx_fmt=jpeg&from=appmsg&watermark=1#imgIndex=2)

选 Obsidian 不是情怀，是三个很实际的理由：

1、它就是电脑上的一个文件夹。 笔记全是 Markdown 纯文本，不存在某个平台的私有数据库。说得直白点，AI 工具哪天不想用了，换一个，知识不用搬家。

2、这个形态天生适合 AI 干活。 Agent 直接读写目录里的文件就行，每次改动都能定位到具体哪个文件，错了也能回滚。Notion 那种套壳数据库，AI 想动手还得先过 API 这道坎。

3、本地存储，数据在你自己手里。 一些私有数据，不适合放到云端的陌生服务器上。

ima、NotebookLM 这些云端方案不是不好，检索也确实方便，但「资料必须传到别人服务器」这一步，就够我把私人内容排除了。同样定位也不一样：云端那套适合查资料，做共享，本地这套更适合养知识。

WorkBuddy / Codex 负责执行，Obsidian 负责保存、连接和呈现结果。对于一套需要长期使用的个人知识库，本地自主、结构开放、变更可追踪和能力可扩展，已经足够构成选择它的理由。

### 三、实操：搭一个专为写公众号服务的库

先说清楚，这个库不是通用知识库，它只有一个客户：我的公众号。库里每一样东西，最终都要能变成选题、变成稿子、变成数据，不然就是占地方。

第一步，创建知识库，并把 AI 的工作空间指到你的库里。

要搭建一套知识系统，先通过 Obsidian 新建一个 Vault（仓库）：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/PDQ5TeJGT42X7HCp280pRgWp1c26UaHYy6PU6CE28tW73TE9mbAMYzewuYNusQnwR2tp0ss4sKLt0gTB5ISITAtaT0ZHGoE5lyhMs9Sj26M/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=3)

WorkBuddy 新建会话的时候，工作空间直接选 Obsidian 的 vault 文件夹。这一步不需要任何插件，零门槛。

第二步，建目录，围绕公众号来分。直接在 WorkBuddy 里跟它讲：

```
你现在是我的个人内容知识库搭建与维护 Agent。请在当前 Obsidian Vault 根目录中，搭建一套以 LLM 自生长 为核心的知识库，主要服务于公众号 AI 工具测评、内容创作，并为未来写书和自动化内容生产预留空间。核心结构：建立 Raw、Wiki、Schema 三层：Raw：原始素材层。保存对标文章、网页资料、截图、评论、后台数据、AI 对话、灵感等原始信息，只读取，不修改。Wiki：知识弹药库。保存 AI 从 Raw 中提炼出的可复用知识，例如对标账号、爆款拆解、标题模式、选题、写作结构、AI 工具、读者需求和写作经验。Schema：Agent 工作规则。统一写在根目录 AGENTS.md，所有 Agent 工作前必须先读取。请创建：/├── AGENTS.md├── index.md├── log.md├── raw/│   ├── articles/│   ├── screenshots/│   ├── comments/│   ├── data/│   ├── chats/│   └── inbox/├── wiki/│   ├── accounts/│   ├── articles/│   ├── titles/│   ├── topics/│   ├── structures/│   ├── tools/│   ├── audience/│   └── writing/└── backup/AGENTS.md 核心规则：1. 先搜索，再创建。 新资料进入后，先搜索 Wiki，优先更新已有知识，避免重复页面。2. Raw 永远保留原始内容，禁止擅自修改、删除或覆盖。3. Wiki 不是资料摘要，而是可复用知识。 一份 Raw 可以同时更新标题、选题、结构、工具、读者需求等多个页面。4. 重要事实和爆款拆解必须保留原始来源、链接和发布日期；无法确认的信息标记“待核实”。5. 新建对标账号、工具、概念等页面前，必须检查是否已经存在。6. 引用评论和用户反馈时匿名处理。7. 修改已有 Wiki 笔记前，先备份到 backup/。8. 使用 Obsidian [[双链]] 连接相关知识，避免形成孤立笔记。9. log.md 只追加，记录重要的新建、更新、合并和待确认事项。10. 不擅自删除文件；涉及知识库结构或核心规则变化时，先询问我。自生长原则：不要采用“一个 Raw → 一个摘要”的方式。应该采用：新素材 → 搜索已有知识 → 提取新增信息 → 更新相关 Wiki → 建立双链 → 记录变更。随着资料增加，自动发现重复出现的标题模式、文章结构、选题方向、读者痛点、工具信息和写作规律，并逐渐沉淀成独立知识页面。只有某类内容明显增多时才建议新增目录或规则，不要一开始过度设计。未来公众号写作、写书、爆款拆解、对标监控、写作风格和自动生成初稿等 Agent/Skill，都应优先调用这套 Wiki。执行前先确认当前目录是 Obsidian Vault，不覆盖已有内容。完成后展示最终目录树，并简要告诉我新建、保留或合并了哪些内容，以及下一步应该把第一份测试素材放在哪里。
```

创建后的Obsidian 库目录结构总览：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/PDQ5TeJGT41ibNsVkNtIJ463Bft47MVt7VS7BZQgnokFT7AI138vvyxE69SLvm17GKvuLEeUxEicyjN8eVoarps4EbibyDfaKoBJNB48fUZerE/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=4)

*   Raw 层（素材收发室）：刷到的对标文章、爆款标题截图、评论区里读者的真实吐槽、自己后台的数据截图——不用整理，扔进去就算完成；
*   Wiki 层（弹药库）：AI 消化后的成品。对标账号档案页、爆款标题库、选题池、结构拆解页，每一页都是能直接拿来干活的；
*   Schema 层（写给 AI 的规矩）：就一个文件。规定它怎么归档、怎么命名、怎么拆一篇爆款的结构、动笔前要先备份什么。

重点说 Schema 这个文件，这是整套系统的地基。规矩要根据公众号场景来定，比如「新建对标账号档案前，必须先搜库内是否已有该账号」「拆解爆款必须带原文链接和发布日期，方便溯源」「引用读者评论要匿名处理」「修改任何笔记前先复制一份到 backup 文件夹」。规矩写得越细，它干活越省心。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/PDQ5TeJGT40p4vPPAapgPFj3R9FlTPytNu5PaulRGibdrZp2RhCicxTkpWs83QjwJ4dPL0BJXfvHrp4eUhXhQhz0FlkO3kEqBEqWUaDNLMdn8/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=5)

第三步，喂第一批料，让它拆对标。

文章怎么进库？我用的 Obsidian 官方剪藏插件（Web Clipper），打开浏览器的扩展商店，搜 Obsidian Web Clipper，点获取就行。

安装完成后，刷到喜欢的文章顺手剪进 Raw 层，目标目录直接选 raw/articles，正文和原文出处一起带走；

![](https://mmbiz.qpic.cn/mmbiz_png/PDQ5TeJGT413P5IVhptvogGBqr38tXt3ogK4ReqE0a2MQUsOO3CgwYwY9Yw70FklCKBGribkHAbrBMzAYnOy9YA9nM5jj0gyTzaC01yWh5W0/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=6)

这样就能看到在 Obsidian 中对应目录下已经把这个文章同步过来了

![](https://mmbiz.qpic.cn/mmbiz_png/PDQ5TeJGT41pibvOJLbXLJ7SVVeIE2jkiaSwEYEMVYYPXjEhSnmZSTrgIHpkTrGJSUsMzN7EnicTgw1nSh5xyoOt1TcyyRvZnbOUYUzvlk29To/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=7)

第四步，让 AI 自己整理分类。可以参考以下提示词：

```
请先读取并遵守 AGENTS.md，然后处理 raw/ 中本次新增的资料，增量维护整个知识库。处理原则：1. 先检索 wiki/ 已有内容，再处理新资料；已有相关知识优先补充更新，没有合适页面且内容具有长期复用价值时再新建，避免重复和过度拆分。2. 不要简单把 Raw 做成摘要。重点提取未来对内容创作、公众号写作、选题、爆款分析、AI 工具研究以及写书有复用价值的信息，并更新到对应 Wiki。3. 一份 Raw 可以同时影响多个已有页面；主动建立或补充相关 [[双链]]，让知识之间形成关系。4. 新旧资料存在不同观点或信息变化时，不直接覆盖旧结论，保留来源、时间和适用范围；无法确认的标记为“待核实”。5. 严禁修改 raw/ 中的原始资料。6. 完成后同步维护 index.md 和 log.md。不要为了整理而整理，也不要为了完整而创建大量低价值页面。判断标准是：这条信息以后写文章、写书、研究工具或产生新选题时，是否可能再次用到？如果有长期复用价值，就沉淀；如果只是一次性信息，保留在 Raw 即可。完成后简要汇报：本次读取了哪些新资料、新建/更新了哪些 Wiki、发现了哪些值得继续积累的知识，以及有哪些内容需要我人工确认。
```

WorkBuddy、Codex 这类工具，会根据 AGENTS.md 和我输入的提示词来拆解，拆出标题、工具、文章结构这些信息。这次 WorkBuddy 给建了 7 个页面：

![](https://mmbiz.qpic.cn/mmbiz_png/PDQ5TeJGT41ia0w1x6ARTxV4XROGXsRGj13odf15sSCrE1JgNmBOLPjCjHcMc685IBkBMyI2SYAUQzBpYGXgSJUlL2H0TKJBYib6msFOicDvCg/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=8)

执行完成后，obsidian里面的拆解完成后的目录与内容

![](https://mmbiz.qpic.cn/mmbiz_png/PDQ5TeJGT42iaJ54nAPibUbgFicyrqIpfBnoEaiaUT0FVBUHE0B0fibauh6XRviapy9MnI0lVE8WbdCU3p9yh5IxH0EJzSCNbQBZe0qqSpzmpBaoY/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=9)

如果两篇笔记存在关联，它会自动用上 Obsidian 的双链功能，打开关系图谱就能看到它们之间的联系

![](https://mmbiz.qpic.cn/sz_mmbiz_png/PDQ5TeJGT417mosMuDkvC0MwpphbhQ8P4XtKRWeRL03ic1XK8KEW9X56VCwnEFJCeia0xXxibQSq2z7uRXMA19FLwic66icPicWJDpYCiazl9L4fFY/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=10)

这个库最有价值的点，不是笔记能在 wiki 里直接读，而是它成了 AI 公众号创作的长期检索池。

第五步，问库

```
根据刚刚入库的文章，阅读raw里面的内容，请问qwen3.8-27b私有化部署的方案以及案例分别是什么？
```

![](https://mmbiz.qpic.cn/sz_mmbiz_png/PDQ5TeJGT41cO28NEIfIxrC00hBqVks6wn0ywtZs6Yg5R8L5GpvczZE8oiauaiaj55l85hU1dVibPnqebE3SHcFNj9FMxictGORbicicAzuia7Ke5Q/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=11)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/PDQ5TeJGT41cehqKhbB8DUL8xv57dg8kWY4Kiaj91KIkkJeyf3sE2ZKWqhf9cSwic57SvT4RcbfDm32GHgIUxZL1QtDicVicwHWib5h9rels1f9k/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=12)

从回答的问题来看，是做到了很高的质量的。

### 四、库怎么分，怎么养，以及它怎么长

做知识库这两年，我被问最多的问题就是：知识库怎么划分？

我当初纠结的就很具体：主业和副业，要不要合成一个库？AI 工具测评和 AI 编程这两摊，要不要放一起？

我实践下来就一条原则：看交集。两个领域经常互相引用、素材能串着用，就合进一个库——让 AI 跨领域找关联，才是它最值钱的地方；反过来，几乎老死不相往来，就拆开。库不是越大越好，是越「常被一起用」越好。

但分完库不等于结束。一个库跑上两三个月不维护，照样会乱——失效的双链、谁也不连的孤立页面、同一个话题两篇笔记观点打架。搁以前，这基本就是这个库弃坑的开始。

这事现在可以全权交给 WorkBuddy：它有定时任务功能，让 AI 隔一段时间自动体检一次。检查的提示词我放在这里，复制就能用：

```
请按照 AGENTS.md 的规则，对整个知识库进行一次定期健康检查。重点检查：1. 是否存在失效或错误的 [[双链]]2. 是否存在长期没有关联的孤立 Wiki 页面3. 是否存在重复、内容高度相似或适合合并的页面4. 不同知识页之间是否存在明显冲突、过时信息或结论不一致5. 是否有 Raw 中已经出现、但尚未沉淀到 Wiki 的高价值知识6. 是否有多个案例反复出现，已经值得抽象成新的标题模式、写作结构、选题方向、读者需求或其他可复用知识7. index.md 是否仍能准确反映当前知识库的重要内容和结构8. 当前目录和知识分类是否仍然合理，是否出现需要拆分、合并或调整的趋势不要为了整理而整理，也不要因为单个案例就创建新的知识分类。只有出现明显重复模式或长期复用价值时，才提出结构调整建议。发现问题后，先生成检查报告，不要直接修改 Wiki、目录结构或 AGENTS.md。报告按照「问题 → 涉及页面 → 建议处理方式 → 原因」说明，并区分：需要处理 / 建议优化 / 暂时观察。等我确认后再执行修改。修改完成后重新检查相关双链和索引，并将本次实际变更追加记录到 log.md。
```

频次按自己的使用强度调，库小两周一次，库大每天进料多就勤快点，没有硬性要求。

这里提醒下：涉及观点冲突的内容，别让 AI 自己做最终决定。两篇资料说法不同，不代表其中一篇一定是错的，可能是时间不同、场景不同。让 AI 负责发现问题就够了，保留哪个，你自己拍板。

体检之外，再配一个日常自动整理任务：

```
每天检查一次 raw/。如果没有新增资料，则结束本次任务。如果有新增资料，请先读取并遵守 AGENTS.md，然后增量维护整个知识库。处理过程中遵循以下原则：1. 优先更新已有知识，必要时再创建新页面。2. raw/ 永远作为原始事实来源，不进行修改。3. 提炼具有长期复用价值的知识，而不是简单整理或摘要。4. 主动维护相关 [[双链]]，保持知识之间的关联。5. 对存在冲突或无法确认的信息保留来源，并标记为「待核实」。6. 完成后同步更新 index.md 和 log.md。最后简要汇报：本次处理了哪些资料、更新了哪些知识、有哪些内容需要我确认。
```

这两个任务设好之后，你就进入「低维护」状态了：平时只干一件事，看到值得存的文章、PDF、笔记，往 raw/ 里一扔。

到这里，整套系统其实已经能正常转了。但它还有更大的想象空间。

你回头看这套系统：Obsidian 库本质就是一堆 Markdown 文件加一份规矩文件，AI 的工作空间指过来就能读写。这意味着任何技能都能往这套底座上挂。

最重要的是，它不是一个静态的笔记库，而是一个会持续成长的知识系统。以后不管增加什么能力，Skill、Agent、自动化也好，都围绕这一个库展开。能力越来越丰富，但核心始终只有一个：让知识不断积累、不断复用，真正服务于创作。

你只需要记住这个结构：库是底座，规矩是接口，技能是插件，你是唯一的审核员。想明白这一层，你后面学的每一个新技能，都有地方安放。

### 一点暴论，不怕打脸

我一直觉得，这两年「第二大脑」这个概念被讲烂了，是因为大家都把重点放在「存」上，好像存得越多、分得越细，人就越有知识。

方向错了。存是这个时代最不值钱的动作，大模型什么都存着呢。值钱的是让存下来的东西发生关系、长出结构、在你需要的时候自己跳出来。这个活，人干不动，刚好是 AI 的主场。

所以我的预测是：三年内，笔记软件的核心卖点不再是编辑器和双链，而是「谁家的 AI 管家更会养库」。库不再是你的死资产，而是一个你雇了 AI 帮你打理的活资产。到那时候，你现在积累的每一篇笔记，都不是在吃灰，是在给未来的 AI 打底子。

先立这，flag 在这，欢迎三年后回来打我的脸。

我是泽安，一个专门在真实工作里折腾 AI 工具、努力早点下班的博主。我们下期见～

能看到这里，咱们已经是自己人了。先谢谢你耐心读完！

如果这篇文章哪怕对你只有一丁点帮助，欢迎留个赞、点个在看、转发，让更多需要的人看到～

想第一时间收到更新，给「泽安不加班」加个星标就行⭐

最后祝咱们这些职场牛马：用好 AI，少走弯路，早点下班～