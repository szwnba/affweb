最近，其实大家都能感觉到，Token好像越来越贵了，各家的额度也越来越不经用了。

于是，怎么能省钱用更多的Token，就成了一个大家经常会讨论的话题。

我也经常能看到很多群里的朋友都在讨论，哪里有免费的Token可以领，比如WorkBuddy每天可以领100积分，可以白用好久的DeepSeek V4.1 Flash，大家经常会互相提醒，今天记得领积分，也会经常互相分享一些有趣的福利。

![](https://mmbiz.qpic.cn/mmbiz_png/2jjfQoZLoqW0EhhCWcZmPwibxXnudkarQxglqhubEWHvvaia5YwWtsMma0iakXnHwkKbFOqGh5y5gSQOCFZj6Mc4mboBDM6QG4EibIFwWv0WA8I/640?wx_fmt=png&from=appmsg#imgIndex=0)

这确实好像是大家的一个刚需。

我花了几天的时间，做了一个我觉得可能有些朋友会喜欢的小功能，那就是：

Token羊毛。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqVY7sIGanzjvmo2liceU9OGYE3EMFYibtWne6glQNG6ibfAOicMDicMic1BoBowrBYNktQmfzk0PA9yNdmpDtDqjBOeHBiaIPRVnBwOWI/640?wx_fmt=png&from=appmsg#imgIndex=1)

过去大家想要知道一些领Token羊毛的这些信息，其实还挺麻烦的，因为实在是太散了。

有的在官网，有的在公众号消息，有的在X上发等等等等。

而且，这些Token的福利，是有时效性的。

比如你像DeepSeek之前新上线的搜索API在一些Agent里面用，其实是免费的，但是免费到11月1号，所以前几天就结束了。

所以找Token羊毛这事，其实本质上没啥技术难度，本质上就是一个信息的搜集+信息处理和分析的问题。

而这个事，恰好就是AIHOT每天都在干的事。

可能有些朋友还不太了解AIHOT，我非常简单的介绍一下。

AIHOT是我们自己做的一个AI资讯站，aihot.news，目前已经100多万的月活了，也把底层的引擎和架构全部开源了，目前有近1万的Star。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqVM9w7FdCwIkh7ATCXP2Ju0iaxjFbzJLOtyaA6ruTfYP16ibVOd37zHlric4iaXHtlaMficqZCPpguFFjRiaHv66APBHJfu7n8KBM4ic4/640?wx_fmt=png&from=appmsg#imgIndex=2)

它现在盯着近几千个信源，AI自动分析，每天从整个AI世界里面，把真正值得看的精选的AI动态挑出来，按5分钟的监控维度，做成精选和日报周报推荐给大家，如果你想获取AI资讯的话，其实讲道理，AIHOT这一站就足够了。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqUGkECQQGMcVsBg4ibmcttnL62DDs1o6aIufg9UCCVQJRGIpeX1Py1JYHYFrPnEACSzFQW6TJkd6JgEFTRGxibPL6exmVX8HMaTc/640?wx_fmt=png&from=appmsg#imgIndex=3)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqVaqlapCPRhDxzBfSJthxynpriaicQsIHYcAYRPMfYc4NBhVSibMo6C0Ib1vh1av0OYjwiaQewTb8LxlickTSmaw0ZLDU7Wne81qFFo/640?wx_fmt=png&from=appmsg#imgIndex=4)

并且我们也开放了免费且匿名的Skill、MCP还有API，大家可以随便接入到Agent和二创使用。

同时因为每天的信息实在太多了，肯定是有无数重复的，全部推出来就会刷屏，用户体验极差，并且一个事件，被多少的信源报道过，本身就是热度的一种体现，于是我又做了一整套的聚簇算法，把事件归类，只推最具有代表性最核心的那一条新闻，其他的变成关联消息，然后又写了一下热度的算法，于是，又有了热点榜。

![](https://mmbiz.qpic.cn/mmbiz_png/2jjfQoZLoqXOLmiaW32Wict8cX3jOfrL4wBnNWuytses0rjia0uzkvltObsOUOOdro1LLUystAH7GpJqTQ2S7AAL7iauLHtvsVrYYfrkxSepRr0/640?wx_fmt=png&from=appmsg#imgIndex=5)

但这么多信源和信息，每天分门别类的监控和存到我的数据库里，能干的事，其实远不止看新闻。

很久前，每天有很多人都在互相传递Tibo发布的Codex重置消息，想知道，Codex啥时候会重置，因为AIHOT已经监控了Tibo的X，每一条Tibo的发言我们都在实时监控以及存到了我们的数据库里，那对于我们来说，把原本就监控的信息，做一下二次的处理和分析，转变成一个Codex重置监控功能，那就再简单不过了。

所以，Tibo一发帖，我们就能第一时间告诉你，北京时间几点生效，谁能用上，他的原话是怎么说的，还做了一个日历，把每一次重置都记了下来。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqUpEUFnaW0bqNxibBcAVn5sIZGYuBcXS8j7Z0iaka3xh08FpS4aJtvR9FSA18c3iauq4HZ1SUofTD2J35RSSKlKSb1G9MbZO6PVtM/640?wx_fmt=png&from=appmsg#imgIndex=6)

最近大家又在说，有一个叫Andrew的小哥要接棒Tibo了，这个人我们本身也监控了，又顺道把他也监控了一下，同时举一反三，顺道手又把Google的Antigravity和Claude的重置监控也做了。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqVqNbiarYKLS9IiaNTPAgYv1kTvg7ZOBJVad6lQOebhvISOwFXY8EnFWMkpHWXLTlhBQKepGAoShdb6hibJbibFhVfA2vOwAFf8pwc/640?wx_fmt=png&from=appmsg#imgIndex=7)

这其实就是过去做AIHOT监控了那么多的信源和结构化处理信息之后，稍微加工一下，做出来的却对大家有一些用处的副产品。

然后前段时间，大家又聊到Token越来越贵这件事，我突然意识到，这些羊毛，它本身就是资讯啊。

我平时就经常能看到，很多厂商在发这种福利，新人送多少钱，每天签到送多少积分，哪个模型限时免费。

但是在以前AIHOT的逻辑里，这些东西，是一定要被剔除掉的。

因为从新闻的角度来讲，它们就是广告，就是噪声，绝对不应该出现在我们的精选列表里的。

我还记得当时为了剔除掉这些广告，花了很多力气去做剔除规则，但是现在反过来看，等等，这不就恰恰是很多人每天在群里找的东西吗。

**对新闻来说，它是噪声。** 

**但从需求端来说，它是实打实的福利啊。** 

既然这样，那就反过来做。

把那些剔除掉的规则，直接反过来，那不就是“什么样的资讯是福利的公告”了吗？

于是就有了这个念头，也就有了今天的Token羊毛。

网址在此：aihot.news/free-tokens

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqVtDDVXibXbsbAzcS1f14UDunmvqF9yGEiaeG21Z1tj7iaxCKR1akBFLNa0NfLhrqsUGgoVDMV1eelMUwZm5iaqh4lrf980LOg5iaPM/640?wx_fmt=png&from=appmsg#imgIndex=8)

打开之后，左上角最大的那个数字，是今天还能领多少钱。我写这篇文章的时候，它写着201块。

旁边两个小一点的数字，一个是这个月你已经领到了多少，一个是离下次刷新还有多久。

下面，所有羊毛按领取的节奏分成了几组，每天都能领的，每周都能领的，每月都能领的，还有其他福利，像新人礼包、限时免费，和一些特定条件下的免费模型之类的。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqXMab9Co8VtfvicAPveZYEicxLnmWic1OR65UpD4iacoQ85RwkoQFwE6elr8PyCFa3WiccObmON0vatiaAX4edav8R2ZaIkxxRNjY9W0/640?wx_fmt=png&from=appmsg#imgIndex=9)

你可以直接点击右边的去领取，有些是要在客户端里领的。比如WorkBuddy之类的，每天的积分，都得打开它们的客户端，在里面签到才能领。

所以在电脑上，为了提高大家的用户体验，我就开发了一下客户端的快捷唤起。你点这个按钮之后，如果你装了这个客户端，浏览器会直接问你，要不要打开这个客户端，你点一下允许，客户端就开了，直接领就行。如果你还没装，我们就直接帮你打开它官网的下载页。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqXWWNkhUG9gia6Yd1slgnHxWzGjnnNfBamnwZhyh85yXsMr3eB9WpCcqjRYo7A3es6j9H5LtLyUgeiajrcas5QwTHqaSqvpxnMj0/640?wx_fmt=png&from=appmsg#imgIndex=10)

做到这一步，一个能用的Token羊毛合集，就已经有了。

但是我总感觉，还是有哪里不是特别好玩。

因为领羊毛这件事，说实话，是有点枯燥的，每天打开几个客户端，点一下签到，领个100积分，然后就没有然后了，我又没办法帮大家直接开发一个Agent来帮大家去领，因为各个系统、各个Agent啥的兼容性差异太大了。

那怎么让大家感觉到，这个事好玩呢，因为我想让大家每天领Token羊毛的时候，能有一点爽感，能直观地看到，自己省了多少钱，攒下了多少东西。

就是尽可能地，给大家一点情绪价值吧。

然后，想起了我自己玩的卡牌手游，于是，一个好玩的想法就出现在了我的脑子里，要不然，做成卡片收集册吧。。。

现在，页面上的每一份羊毛，都是一张卡，没领过的，是一张淡淡的普通卡，领到了，它就会被点亮。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqUibRIqicpstg2h9acaDicfzdjGU1k6Dplibhdben3dsiaL9sbXrwBCkic3ZuBs6YudOYhqpyG8gajS8CDDOE6lZyLQfZHWzHuZGHvKs/640?wx_fmt=png&from=appmsg#imgIndex=11)

然后，卡会越领越亮。

每天都能领的，累计领满7天，变成蓝卡，领满15天变成金卡，30天，就是一张闪卡。每周能领的要2次、4次、8次，每月能领的要1次、2次、3次。只能领一次的那些，看你领的这一次值多少，10块起是蓝卡，50块起是金卡，100块起直接就是闪卡。

我自己还是很喜欢这个设计的= =

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqXiagzG8RUBjlpNmgic4G4dlEleSTkeutntaY5MX9xxjgVBkD3gkum0esQHKKTmAnJergXo6kibMhibt492icnFhdymUVFYvVI9ILJo/640?wx_fmt=png&from=appmsg#imgIndex=12)

闪卡我就学了一下游戏，做得最花哨，边框是一圈转动的彩虹，卡面上有流光，鼠标放上去，它还会放大，跟着你的鼠标倾斜，反正就，情绪价值给满。。。

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/2jjfQoZLoqW4XFv8Kk2LiaLFdPw3NhZTVGVWrd91KbaF7cYicodTBuJ0mp2NdI8rnyTwuxSK1Og7aJQjYpBemUQv2C468IJlW34ic1zaibZPT0c/640?wx_fmt=gif&from=appmsg#imgIndex=13)

整个卡册，越亮的越靠前，闪卡在最前面，然后是金卡、蓝卡，没领过的排在最后。只能领一次的卡，按你领的那一刻值多少钱来定，之后厂商改价、汇率变了，你手里的卡不升也不降。

如果一些Token活动结束了，你领过的那张卡，也不会消失。

它会被盖上一个红色的「绝版」章，写上它的最后一天，攒到的等级也留着，排在卡册的最后面，没领过的，就不放了。

**活动没了，但是卡还会在，算是给大家留个纪念玩。** 

**列表里也一样，领完的那一行，会啪的一下盖上一个墨印，写着「今天已领」和日期，手滑点错了，鼠标移到印章上，也可以点一下撤销。** 

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqVXCuFj3YHXl3FJDHJ5HFCNzaBYgbQlZ6lrZDbXF7N0FBxFSPUFO4ve2gbMXc2OCSL9K7EMuy9GFaBZUxhjOhzOJ0Eu8ZdbBwc/640?wx_fmt=png&from=appmsg#imgIndex=14)

这些玩意，说实话都不是什么大功能。

但我觉得，每天领Token羊毛这件小事，如果能让大家每天多开心一点点，在领福利的时候，也有一些情绪价值，那就太棒了。

**最后，非常简单的再跟大家聊一下Token羊毛用到的技术。** 

第一层，就是雷达了。

除了AIHOT原来那些看新闻的信息源，我们还专门给Token羊毛加了一批来源，厂商自己的账号和页面，专门挖羊毛的大佬，还有社区里的各种合集。

雷达每个小时读一轮这些来源的新内容，先用一张故意撒得很宽的关键词网过一遍，免费、白嫖、薅、羊毛、额度、赠金、签到、限免这些，英文的free、credits也算，这一层足够的宽，宁可多放进来一些。

毕竟多放进来一条，只是多花一次很短很便宜的模型调用，但漏掉的，就再也看不到了。

过了这一层预筛的内容，再交给大模型去做一层额外的确定性判断，把里面提到的每一个活动都列出来，判断算不算羊毛，不算的话为什么不算，是中转站，是返利，还是只给付费用户的。

第二层，是核实。

雷达找到的，毕竟还只是线索。只有厂商自己的账号说了，或者有两个不同的来源都在说，或者帖子里直接链了厂商自己的页面，才会叫醒一个Agent去核实。

只有一个社区帖子孤零零在说的，就先放着不管了，等第二个来源。

Agent核实的时候，只认厂商自己的页面，还得确认这个页面真是这家厂商的，因为假官网上的活动页真的还不少，所以这个核实的Agent，得从厂商官网的首页，或者它的官方账号，一路点到这个活动页，确认是真的才可以。

核实完了，还得再过一关，叫「值得领」。只能用很老的模型的，比如GLM-4.7、DeepSeek v3之类的，那肯定就不能要了，因为实在是没啥意义。

很多营销文章喜欢把「每个模型各送100万Token」加在一起，写成「送7000万Token」，这种这个核实的Agent也会直接毙掉，然后各种返利和邀请链接、API中转站、二手积分、共享账号、接码多开等等的，也都直接毙掉，只给付费用户的、要先充值才送的，也毙掉，因为大家领不到。

真的，这些都是踩坑踩出来的血泪经验。。。

第三层，就是巡查了。

羊毛上架以后，厂商随时可能改规则，可能提前结束，也可能额度早就被领完了。所以每一条上架的时候，我们都会从厂商的页面上照抄一到三句原话，送多少，怎么领，到哪天，之后专门有个脚本每天去对照两次。

原话连着两次都找不到了，或者页面上新冒出来「暂停」「结束」这一类的字眼，就马上派一个Agent去复查。

然后每天晚上，还会有一个Agent照着一本巡检手册，把页面上的每一条Token羊毛都重新过一遍，第二天早上，新上架的和换了链接的，会列成一张单子发给我和另一个Agent确认。

这一整套呢，基本也都是Agent自己自动化在跑了，我每天早上，就像批奏折一样，扫一眼那张单子就行了。

整体大概就是这样。

最后，我希望这个小东西，能对大家有一些用。

坦率的讲，我一直觉得，AI的世界，是不平权的。

所有人都知道，真想拿好一点的大模型干点活，跑Agent、调API，几乎都是要钱的。

但我也见过很多很多人，也想跟上这个时代，想试试大模型到底能干嘛，想用Agent做点有意思的事，可最后，却被额度，被费用，挡在了门外。

我也知道，第一步有多难，因为那都是白花花的钱。

所以，就做了这样一个小东西。

它不碰任何灰色地带，用的全部都是各个厂商自己公开的运营活动，厂商发福利，本来就是希望更多的人来用一用，试一试，我们做的，就是把这些散在各处的活动，聚合到一页里，让更多需要的人看到。

当然，坦率的讲，Token羊毛这种行为，肯定不是长久之计，活动总会结束，免费的额度，也总有用完的一天。

但我希望，它能让你不用花一分钱，先把门推开，先用起来。

等你用顺手了，觉得它值，那时候再花钱，就自会权衡利弊了。

最后，Token羊毛今天才刚刚上线，肯定还有很多不完善的地方。

如果你看到了我们还没收录的羊毛，可以点页面顶上的「提报一条羊毛」告诉我们，哪一条错了，也一样。

这一页上的每一个额度，可能都没有那么多。

但我希望，很多人第一次把AI真正用起来，可能就是从这里开始的。

我也希望，尽我所能，帮大家抹平那一些信息差。

让所有人，都感受到AI的魅力。

也希望能激发，大家对AI的好奇。

******以上，既然看到这里了，如果觉得不错，随手点个赞、在看、转发三连吧，如果想第一时间收到推送，也可以给我个星标⭐～谢谢你看我的文章，我们，下次再见。******

\>/ 作者：卡兹克

\>/ 投稿或爆料，请联系邮箱：agent@virxact.com