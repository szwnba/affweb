现在人人都可以 Vibe Coding，用自己熟悉的 Agent 编程工具手搓产品。

一句需求、一个想法丢给 AI 就开干，但通常做出来的效果，并不是我们想要的东西。

往往推倒重来，白白浪费时间和 Token，这种场景，大家应该都经历不少。

其实问题不在 AI，而是在我们自己没把需求想清楚，导致 AI 只能靠猜。

最近偶然看到一个下载安装量超 87 万次的 Skill，名叫 **grill-me**，专治这个毛病。

![](https://mmbiz.qpic.cn/mmbiz_png/snxIHWuwQokVlXom8icwCTiaqGo7QX7vrT11T0C3fw4Nb2TIhprswF3h1xWSInTAb0Alkcv7rMcYYB4PChwkaBDZbicP4G6vmce8ezWNerxmVE/640?wx_fmt=png&from=appmsg#imgIndex=0)

出自 TypeScript 圈大神 Matt Pocock 之手，它所在的仓库 skills 已有 22 万+ Star。

打开 grill-me 的 SKILL.md，正文就几行字，当时愣了一下，还以为页面没加载完。

grill 这个词在英文口语里是「拷问」的意思，连着 grill me，那就是「拷问我」。

当输入`/grill-me`之后，AI 不会马上动手写代码，而是充当面试官开始盘问我们。

顺着思路，一个决定接一个决定往下挖，把每个选择背后的连锁问题摆到台面上。

每个问题基本都是选择题，并也附上它推荐的答案，大多数时候回一句「同意」就能继续。

而且它自己会去查、去翻代码库落实情况，并不是一股脑来询问我们。

更关键的一条，是在双方未确认达成共识之前，在没搞清楚需求前，不会写任何代码。

![](https://mmbiz.qpic.cn/mmbiz_png/snxIHWuwQokfTlLSJj8jMQFxRqW52miahrorIxnicUqYR5Mg5FHKJPzE1LtJVWD1OVSeDgVBYG5jM0zUngEf5TxyFib35t7OPbuag7hCag6ibh8/640?wx_fmt=png&from=appmsg#imgIndex=1)

就这么几行文字的 Skill，凭什么这么火？我认为，它管住了最容易被忽略的环节。

从零做一个产品，会遇到几百个决定，报错怎么兜底、数据存哪、边界情况怎么办。

若直接把模糊想法丢给 AI，如果它不主动跟我们对齐，而是自己猜测我们的意图，后面做出来的产品，大概率不是我们想要的。

grill-me 正好解决了这极其重要一环，把决策权还给人，AI 负责挖盲点，我们负责拍板。

具体效果如何？下面我们来看看，首先安装 grill-me 的命令如下：

```cs
npx skills add https:
```

![](https://mmbiz.qpic.cn/mmbiz_png/snxIHWuwQokQe2ZxgnZQkcyNPu4bdxiaq6ENkL5TXw63CaveI3jbicDp3PwYlCo8LTOHN9F3TXYTIS15DWLGEky4foTBicoanUnJad1DrKBooU/640?wx_fmt=png&from=appmsg#imgIndex=2)

装完之后，便可以在对话框里使用它了。

在写这篇文章的时候，看了下 DeepSeek Harness 已经破 14 万 Star。

目前使用它只有 Web UI，安装它还得折腾 Node.js 环境，我就想着给它做个客户端。

也正好试下 grill-me，故意发一句模糊需求：「给 DeepSeek Harness 做一个开箱即用的跨平台客户端」。

![](https://mmbiz.qpic.cn/mmbiz_png/snxIHWuwQokkcapDTPibLaGKQiaxoF1xOLfM2WgaLzZtgr57FydFBCbPgcY1riaN6caib5JHgUev7xf2A8uPD8As0NyxUErNuJbdyCX1gOZdaE8/640?wx_fmt=png&from=appmsg#imgIndex=3)

它没急着开干，而是把能自己查到的事实查清楚，再开始细问搞清楚我的真实需求。

包括目标用户、覆盖平台、技术方案、首次引导、实现功能等 11 个关键决策点的对齐。

一层接着一层问，基本都是一个问题，并附带两三个候选项，再给一个推荐选项及理由。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/snxIHWuwQoliaVfJg5ica8J5zYUeWeicAAfaY5WBDERnjGNBiauDiaqBxRlBvUEfGtZMn4gdiaib2XHHBcIgJN6nmJ2cRmqibhlAO1fmibWXAHCVxDpo/640?wx_fmt=png&from=appmsg#imgIndex=4)

说实话，这个过程里有很多问题，在我发送需求那句话的时候，压根是没想过的。

当所有疑问都问完后，它会把定下来的东西汇总成一份设计共识，确认之后才开始动手。

当然它也有代价，面对复杂需求真能问出几十个问题，没耐心的朋友可能会被问烦。

这些对齐的共识它不会落进任何文件，除非你让它保存到本地，否则新开个会话就会丢失。

那么这份共识该往哪放？这也是很多人纠结的地方，下一步该怎么办？

这里不得不提一下 Superpowers，我相信大家的 Agent 编程工具里，基本都有安装它。

从头脑风暴、写计划、执行到调试审查，一整套规程把开发过程全管起来，重而全。

在我看来，grill-me 和 Superpowers 是一个互补关系，做需求前先用 grill-me 对齐需求。

再让 Superpowers 的 writing-plans 把共识落成计划文档，executing-plans 分步实施。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/snxIHWuwQokwolj0JQzPPk5ibh9YIxKxbNX1mLE45NcuckhnJKW5YjoXAgKPSbDzOKfS8giaaGP4icuG6frt8xz9UCxR9vhyU36rjPcAH25ePY/640?wx_fmt=png&from=appmsg#imgIndex=5)

一个管「想清楚」，一个管「做到位」，在介入时机一前一后，正好接得上。

这套流程在自己项目里也跑了一阵子，体感是进了实施阶段，基本不用再回头掰扯需求。

### 写在最后

这两年 Agent 的执行力肉眼可见地变强，一句话做个网站、做个小游戏都不算新鲜事了。

但活干得再快，也不意味着做出来的效果好，一旦最初的方向就错了，后面维护成本越高。

更有意思的是，Superpowers 用一整套规程管流程，grill-me 用几行字管流程开始。

在我看来，这两个项目搭配起来使用，刚好可以把需求落地的质量提升一大截。

对于模糊需求在动手前先盘问，或许往后，会变成各家 Agent 工具的内置动作。

毕竟模型再强，也只能做对我们说清楚的事。

GitHub 项目地址：https://github.com/mattpocock/skills

今天的分享到此结束，感谢大家抽空阅读，我们下期再见，Respect！