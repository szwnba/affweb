关注「雷一言」 · 分享 AI 工具与真实工作流

![](https://mmbiz.qpic.cn/mmbiz_gif/0EWRpOXNpkIFAFPjS48hJl7FEyxNnjnr2RZ7Dfb3Mz1aXKZ08icq5RZjhe4WXevmZaC9Ajhiceo2XwCuhHm2qZSTxIoplbRjrRBo96MiaT4AdE/640?wx_fmt=gif&from=appmsg#imgIndex=0)

这是一言的第 33 期分享

大家好，我是一言。

前几篇文章中，我将公众号文章抓取到本地，并且把爆文监控、文章搜索也接入到 DeepSeek Harness 中。

现在的这套东西可以做到三件事情：

terminalTEXT

保存公众号文章

发现反常上涨的爆文

从 8892 篇文章里检查一个主题

跑起来之后，我发现还需要一个更早的入口。

这些信号都来自公众号。等到一篇文章开始上升的时候，在微信上通常已经有其他人写过了。我想要再往前走一步：先看看官方博客、X 和海外媒体都在谈论些什么，然后再回来检查一下公众号里有没有人跟进。

这次，我将卡兹克制作的 AIHOT 放在了整个链条的最前端。

![](https://mmbiz.qpic.cn/mmbiz_png/0EWRpOXNpkLMro08zeFDkUBwxfmqNs3phQDeiaU8oEM3a0PBaHjmp7jugeI0VqlvptkLB0mIrtOXUPOSl4Vq7QkLvQs8fwjGfKlCiawVcr8JM/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=1)

8 月 31 日的 AIHOT 热点榜

AIHOT 负责寻找外界正在升温的话题，WeRSS 负责检查公众号的覆盖情况，DeepSeek Harness 将两边的数据合在一起进行判断。

8 月 31 日，我完成了第一轮运行。

ChatGPT Work 在最近 30 天的公众号库中没有被命中。MiniMax H3 已经有 15 篇相关的文章，“AI 直播”这个具体的角度也没有被命中。

Harness 最后把 ChatGPT Work 上手对比列为首选，把 H3 Max AI 直播留作备选。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0EWRpOXNpkJMZdtGqTHtsNXR7h2R3bJjeMIjLa6jAmVnmuF0M7tejviblFJPwoibZTTkiae8Ab8nT5o1Z5EzcGskQjKaW6PicRHvxpNB3sGgY34/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=2)

Harness 把 AIHOT 热点与 8892 篇本地公众号文章对照

原来的公众号文章要等到涨起来之后再看，现在可以提前查看外部热点和微信内容之间的时间差。

01.AIHOT 是如何接入的Connect

卡总的 AIHOT 的 Agent 页面已经提供了 Skill、MCP、RSS 和 REST API 四种入口。本次选择了 REST API，并且把它封装到上一篇使用的 dsh-wechat-archive 插件中。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0EWRpOXNpkIgJzjdvEllUFVpZKg3fFicmooGjf1sqghrLvzhFPclRjibgUHegr1na50vPm8Du4wc6apAEKefNuSWtZaJ7gbrm6es0Dy1qbvnk/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=3)

AIHOT 的 Agent 接入页：页面提供 Agent Skill、MCP、RSS 和 REST API 四种入口

插件中增加了两个工具：

terminalTEXT

aihot\_recent\_items：读取近 24 小时或 7 天精选

aihot\_hot\_topics：读取当前多来源热点

启动 Harness 之后，我首先用下面这句话来检验两路数据：

terminalTEXT

检查本地公众号资料库的数据量和最新文章时间，

再读取 AIHOT 最近 24 小时精选。

可以看到公众号的数量、文章的数量以及 AIHOT 热点，说明两边已经打通了。

每条 AIHOT 的结果都会保留标题、摘要、发布时间、来源数量、AIHOT 页面以及原始链接。Harness 可以先看摘要，然后顺着原始来源去核实。

Anthropic 版权音乐诉讼中，AIHOT 也保留了热度的变化。目前的热度是 34，过去 24 小时最高是 48。

![](https://mmbiz.qpic.cn/mmbiz_png/0EWRpOXNpkKu73eu0plPdlfNP2lSia4Prt0MVibFEQTKu6uia2yRgbQ4mc3vvYVBKVkTbJhNOFrAsRZhUMpCCObGpUjgaEZLopjFzQkbSoos8M/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=4)

Anthropic 版权诉讼在 AIHOT 中的真实热度曲线：当前热度 34，过去 24 小时峰值达到 48

继续往下看，同一个事件已经被合并到 The Decoder、The Verge、TechCrunch 和 X 上的 4 条公开报道中，并按照发布时间排列在同一条故事线上。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0EWRpOXNpkJQyicgQ6rq5xkEdFicvTKPHLo1LkhPCHayicaImu7TqwBgj6yeSfMNDtuLsjzpDFh8ozyFQJzSOnySoPVJ528eZqwvdQsJnNBXvM/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=5)

AIHOT 把同一事件的 4 条公开报道合并进时间线，并保留来源、发布时间和各自摘要

以前我要打开热点榜，然后在公众号库中一个个查找。现在一句话就可以触发两个 AIHOT 工具，外部信号直接进入下一个环节。

02.让 8892 篇公众号文章进行检查覆盖Compare

我又给插件添加了第三个功能，也就是 wechat\_topic\_coverage。

Harness 会从热点中抽取产品名、事件名以及常用的别名，再到最近 30 天的公众号标题和摘要里进行搜索。工具用来合并重复的文章，并且给出被匹配的数量、相关的账号、现在的阅读数以及原文链接。如果要查得更深入一些，也可以继续搜索正文。

原来的插件可以检查资料库、搜索文章、查找低基数异常以及比较账号。再加上这次的三种工具之后，Harness 总共可以调用七种能力：

terminalTEXT

外部热点：24 小时精选、多来源热点

本地资料：数据状态、文章搜索、异常爆文、账号比较、主题覆盖

Harness 完成四次调用之后，会把外部热点和本地覆盖一起放入同一个结果中。

![](https://mmbiz.qpic.cn/mmbiz_png/0EWRpOXNpkLuniaDt9qnvkYhSeUSeb4g0o9PruvDbchpmYHNZgsSZL5Wap9QicFctmz6XB9libCPJNJH7vAicwx0pOp5rw7pyphW3RHtY0c6tCI/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=6)

DeepSeek Harness 收到选题问题后，依次调用 AIHOT 精选、热点榜、本地资料库状态和公众号主题覆盖四个工具

AIHOT 负责回答“外面正在发生什么”，WeRSS 负责回答“微信已经写到哪一步”，Harness 负责决定先调用谁、搜索哪些关键词，以及最后保留哪个方向。

03.运行一次之后，留下两条路Result

四条热点分别产生了两种可以继续研究的结果。

1\. 主题、角度都没有内容

ChatGPT Work 在本地库中没有找到任何相关的内容。外部已经完成了对功能的整理，但是微信样本中没有相同主题的文章。

Harness 给出的方向是：先做一篇 Work Cloud 和 Work Local 的上手对比。

2\. 产品很拥挤，具体的场景还有空白

MiniMax H3 相关的内容已经命中了 15 篇，其中有的文章阅读量已经超过了 5 万次；继续写常规模型评测的话，很容易就撞到之前的内容了。

我在 WeRSS 中直接搜索 MiniMax H3，得到了 46 条原始记录。合并重复的内容并且限定在最近 30 天之内，插件保留了 15 篇相关的样本。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0EWRpOXNpkLxWfWuUCkiaUMVj6uDEJOiabicbJ3ialf0ib1BvZicpESMl8dQxdwRs0TejqJj0RTMxtibmMO4UdjmvP2dwAkA8U6gjZ6UicPDEdztNyw/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=7)

WeRSS 真实搜索结果：MiniMax H3 返回 46 条原始记录，列表里已经出现实测、玩法、开源和横向对比等写法

最后说一下

Node\_ID: END

总的来说，这套流程对于内容创作者来说是友好的。

它首先会找出值得研究的话题，然后和公众号的历史文章进行选题对比，告诉我哪些方向已经写得很挤，哪些具体的场景还有内容空白。

如果这篇内容对你有帮助，可以点个免费的赞，也可以把文章分享给需要的人。

拜托了，这对我一直持续创作都非常重要。![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/0EWRpOXNpkIaOkdr1goYUunicANZHzRtw00LItAsbicNqSwpNUQXPIcIye3A6OdnajdvKUCWXDx1sRJgy7y29dDWF8QlNGgw8CLGfDyiahibu1Y/640?wx_fmt=other&from=appmsg#imgIndex=8)