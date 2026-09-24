![](https://mmbiz.qpic.cn/mmbiz_png/oERWrZhYomozAurYm2TsIXPZibXR1u8EjsMkejkvmnArJb1Jy65xaBYzL8lhpibS4QaUd6j3EBQrKSicCO82fl6otlTFP4UtbicNEaS5dQq2yQc/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=0)

上周朋友圈被一个叫 Jev 的模型刷屏了，说它比大模型快两个数量级，还不会幻觉。我兴冲冲打开 OpenCode 想试试，结果在模型列表里翻了两遍——没有。

后来查了一圈才明白：Jev 是 **9 月 15 号才发布**的模型，我用的 OpenCode v1 内置列表还没跟上它；而且它压根不是拿来聊天的，是拿来**做决定的**。想用上它，得装 OpenCode 2。

装完顺手把 OpenCode 2 的免费模型清单也翻了个底朝天——这一翻，还真翻出点东西。

先搞清楚：Jev 不是聊天机器人
----------------

Jev 是 TypeSafe AI 出的第一款 **System One 决策模型**，官方藏了两年才放出来。它的核心特点一句话就能说清：**不生成任何文本，只回答结构化问题**。

你给它一个场景 + 几个问题，它返回的是答案本身，还附赠一个「这个答案我有多确定」的概率。官方说它比传统 LLM 快**两个数量级**——因为不吐字，只算数，速度自然不是一个量级。

那「不会幻觉」怎么说？传统大模型答非所问，是因为它肚子里有一整套「编故事」的机制；Jev 的输出被限制在几个格式里，想编也没有出口。所以官方敢说它 **"can't hallucinate"**——不是不容易幻觉，是结构上就幻觉不了。

它的「语言」只有三种，官方叫三原语：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oERWrZhYompib8BPrN0Ng5tlX8HiciaTcIdwPia85zCkxGgdVqKkBm7bHbR3nfCFJagfiakSswxlQIibnLhVtibG1ur3DlWdxoCYyX9envo2ya3jia4/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=1)

• **noul（是/否）**：返回 0 到 1 的概率。比如「这笔订单需要人工审核吗？」→ 0.87，意思是 87% 需要。  
• **choice（多选一）**：最多 255 个选项，返回选了哪个 + 每个选项的概率分布。比如「这个 bug 派给哪个团队？」→ 前端 62%、后端 21%、API 12%。  
• **score（打分）**：2 到 10 级有序等级，返回概率加权后的位置，可以落在两个等级中间。比如「这段代码可维护性几分？」→ 6.4 分。

为什么需要这么个「不说话的 AI」
-----------------

你可能觉得奇怪：让 AI 做决定，直接用大模型不就行了？还别说，真不是一回事。

传统做法是：写一大段提示词，让大模型输出一坨 JSON，再写代码去解析、校验、兜底。费 token 不说，最大的坑是格式随缘——今天给你 \`{"level": "high"}\`，明天给你 \`"答案是 high，因为你描述的情况看起来比较严重"\`。解析代码写得再稳，也架不住模型哪天心情不好。

![](https://mmbiz.qpic.cn/mmbiz_png/oERWrZhYompFfjTQiaJ2YicDF9s7686BEbGj6rcHKcPOPPcyEpAMq0mNjxewP9IscViav7ph82R6gM5H6AgAiccT18R0Ticiazbj1zgMFdUicOj9Fk/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=2)

Jev 把「生成内容」和「做决定」拆开了：做决定的事交给它，概率清清楚楚，结构永远不变；要解释、要润色、要写代码，再交给大模型。各干各的活，都不拧巴。

适合它的场景都是「要拍板」的活：工单自动分类、内容安全拦截、代码评审预筛、A/B 实验分流……本质上是把过去用 if-else 写死、或用大模型猜的规则，换成一个又快又稳的决策器。

怎么在 OpenCode 2 里免费用到 Jev
------------------------

先说前提：Jev 走的是独立的 **systemone 端点**，不是普通对话接口，所以老版本 OpenCode 的模型列表里看不到它——我开头找了两遍没找着，就是这个原因。要解锁它，两条路：装 OpenCode 2，或者直接在命令行里调用 Zen 的 systemone 接口。

OpenCode 2 上周刚转正（怎么迁我上一篇写过，这里不啰嗦），装它一步到位：

\# 任选一条  
npm install -g @opencode/cli  
curl -fsSL https://opencode.ai/v2/install | bash

装完去 **opencode.ai/console**登录，生成一个 Zen API key。接下来就能直接调 Jev 了。下面是个工单路由的完整例子——判断一条工单是否紧急，再决定派给哪个团队：

curl https://opencode.ai/zen/v1/systemone \\  
  -H "Authorization: Bearer $OPENCODE\_KEY" \\  
  -d '{  
    "model": "jev-1.13-free",  
    "state": { "title": "用户登录后白屏", "location": "frontend" },  
    "questions": \[  
      { "id": "q1", "type": "noul",  
        "question": "该问题是否紧急？" },  
      { "id": "q2", "type": "choice",  
        "question": "该派给哪个团队？",  
        "options": \["前端", "后端", "API", "其他"\] }  
    \]  
  }'

返回（结构示意，字段以官方文档为准）：

{  
  "answers": \[  
    { "id": "q1", "type": "noul", "answer": 0.87, "confidence": 0.95 },  
    { "id": "q2", "type": "choice", "answer": "前端",  
      "all\_probs": { "前端": 0.62, "后端": 0.21,  
        "API": 0.12, "其他": 0.05 } }  
  \]  
}

![](https://mmbiz.qpic.cn/mmbiz_png/oERWrZhYomo5ESbBA2LMdEjk2pZ3wP48AyMG4nduK5sPKUY3CiaLIyjYs9Y2C9VXrAuJp1AdmIyKMZxSd9AQyH4nClicZqSicibSnuwzaFBpOTU/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=3)

两个问题一起问，一个来回就出结果——**同一个上下文里的问题，Jev 是并行评估的**，官方说「几百个问题和一个问题耗时差不多」。这才是它快得离谱的真相。

想要更省事，可以把 Jev 直接接进编程工作流——TypeSafe 官方出了个 skills 技能包，装进 OpenCode / Claude Code 这类工具后，直接用 /typesafe-ai 就能让 agent 在流程里调用 Jev 做决策：

npx skills add typesafe-ai/skills --skill typesafe-ai -g  
\# 然后在对话里：/typesafe-ai 帮我决定这个 bug 要不要阻塞发布

用 Jev 的四个坑
----------

这模型好是好，但它有自己的脾气，不摸清楚会翻车。

一是 **noul 的 0.5 不是「也许」，是「我不知道」**。官方文档明确说过：0.5 表示模型没有足够信息，不是模棱两可。你把 0.5 当中间值去做阈值判断，等于让一个「没看懂」的模型替你拍板。

二是 **choice 的概率加起来必然等于 1**，所以一定要留一个「其他」选项当逃生舱。不然 Jev 只能在你给的几个选项里硬选，哪怕它觉得都不对。

三是 **score 是有序等级，不是精确数值**。6.4 分和 6.6 分没有意义差别，别拿打分结果去做加减乘除——官方自己都强调，score 只能比大小，不能当度量。

四是 **同一个问题，换一种原语问，答案可能直接打架**。官方文档里就放过这种翻车案例：同一件事用 noul 问和用 choice 问，结论完全相反。所以别拿单次结果当真理，关键决策要么多问几个角度，要么人再过一道。

另外记住：**jev-1.13-free 是限时免费**（官方标注 limited time），跟 OpenCode 里其他免费模型一样，说不准哪天就下班了。白嫖要趁早，重要流程别绑死它。

顺手盘点：OpenCode 2 的免费模型全家桶
------------------------

既然装了 v2，顺便把它的免费模型清单翻了——目前官方页面列出 **9 个免费模型**，8 个是拿来写代码/对话的，1 个就是 Jev（决策专用）：

![](https://mmbiz.qpic.cn/mmbiz_png/oERWrZhYompxbpUKEDjUf3dBbjLIMSzT0djCDzLZozoDicM42UNw3cBb6Vt8jZvicPJdcttibicJpm1QRQLoM6QxNRs8k5fcUhByBFJTibgQvhbA/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=4)

• **Big Pickle**——OpenCode 自家主力，日常写代码最稳的选择  
• **Space Bunny Free**——另一个自家模型，官方标注零保留策略（数据不留存）  
• **MiMo-V2.6-Flash Free / MiMo-V2.5 Free**——小米家的开源模型  
• **Ling 3.0 Flash Fin Free**——阶跃星辰，长上下文场景好用  
• **Nemotron 3 Ultra Free / Nemotron 3.5 Lightning Free**——NVIDIA 家的开源模型  
• **Muse Spark 1.3 Contributor Free**——Meta 出品，写代码表现不错  
• **Jev 1.13 Free**——TypeSafe 决策模型，本文主角，不能聊天，只做决定

搭配思路很简单：**写代码用 Big Pickle，长文档用 Ling/Nemotron，要拍板的事丢给 Jev**——三个活儿三种模型，一分钱不花。

最后说句实在的：Jev 不是来替代大模型的，它是来「分活」的。以前让 AI 干活，全靠一张嘴说；现在有了专门「拍板」的模型，AI 编程这件事开始分角色了——**这比多一个会聊天的模型有意思多了**。

> 让 AI 写代码已经不难了，难的是让它在关键时刻敢拍板。Jev 补上的，正是这一块。

💬 如果你要用 Jev 帮你做决定，你会先拿它来分什么？评论区和我说说。

* * *

> 如果觉得这篇文章有用，欢迎关注「AI 阿砚」，一个科研爱好者的 AI 探索笔记。