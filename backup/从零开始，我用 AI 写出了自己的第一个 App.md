**编注**：本文是「[2023 年度征文：分享你的关键词](http://mp.weixin.qq.com/s?__biz=MzU4Mjg3MDAyMQ==&mid=2247569405&idx=1&sn=9af603023a9c424fe68b410c4286668b&chksm=fdb23a97cac5b381e802267e0221206e977855ae2f603d3323ef884be463d5fef17dee05edd5&scene=21#wechat_redirect)」的第 4 篇入围文章。本文仅代表作者本人观点，少数派对标题和排版略作调整。

「本文参加 2023 年度征文活动。我的 2023 年度关键词是：创造。」

2023 年，是特别的一年。

这一年，我鼓起勇气辞职，我从零开始学习编程，我做出了自己的第一款应用：Cush 记账。我的人生好像脱轨了，驶向一片未知的地方。期间有太多的欢喜成长，犹豫彷徨，共同构成了我 2023 的关键词：创造。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oylw20gGnRhswnRv0tJeklfoMbU4MPYibHibkwyEfFMkicLlbF5ECDlFDF2jlNp5ORtcvic5zGuv6iaEARIsibaeeLZA/640?wx_fmt=png)

我知道屏幕前的很多人，也想创造一个美好的应用，但囿于编程的艰涩，浅尝辄止。所以让我写下这一年的经历，分享我这样零基础的人，如何在 AI 的帮助下一点点创造。我这样都可以，我相信你也可以。

让我们开始吧！

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oylw20gGnRgkvX0AKu6JibbEMiasxdRia6CTLQficZjIWpp2sJYlqPP27Ov9dOVialxeCxqYFaahOx7oX9WQPdJyVqw/640?wx_fmt=png&from=appmsg)

**▍****8 - 11 月：编程之路**

刚开始开发时，我先学习了少数派「iOS 独立开发指南」。

这个教程针对零基础用户，系统地介绍了编程是怎么回事，如何一步步做应用。

我每天学习 2-3 节，大概看了半个月。一开始，我认认真真地在纸上做笔记，完成每一个章节的课后习题。但学到 Swift 部分愈发艰难，尤其是 2.5 结构部分，看着都有阅读障碍了。代码也越来越多，在纸上记笔记真的要崩溃了。后来我直接跳到 SwiftUI 部分，简单看完就开始上手做应用了。 

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oylw20gGnRgkvX0AKu6JibbEMiasxdRia6CdxArNzvLWPRGyNQBMOGvzgzukjOmfgIYVubuthRn1HOPTMnq9sw1RA/640?wx_fmt=png&from=appmsg)

当时在纸上记的笔记

我的应用大致分为两个部分：数据算法、界面交互。

数据算法指的是数据库、存储删减数据、调用数据等。这部分通常使用 Swift，比较难和枯燥。界面交互指的是展示数据、用户交互等。这部分使用 SwiftUI，就像拼积木一样，更容易上手。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oylw20gGnRgkvX0AKu6JibbEMiasxdRia6CdjZPACKxjbSdyjb9VTthSddHr3rrdF9Uicvyqxu7ylulFIsHAWpskeg/640?wx_fmt=png&from=appmsg)

一开始我要搭建自己的数据库。按照教程需要用到 JSON 和增删读改等一堆函数，看着就很头大。恰时 AI 很火，我就抱着试试看的态度，买了美区礼品卡开通了 GPT-4。然后我直接问 AI：

> 我正在开发一个 Swift 软件。这是一个教学代码，请你参考这个代码给出我的数据库代码。数据格式为 XXX，另外注意：YYY（我的特别要求）。

不得不说，这玩意真的太牛了。它直接给出了完整的、运行良好的代码。不仅采用了教学代码的框架，并且完成了我自定义的需求。这是我第一次感受到 AI 的神奇。

我不再需要会写代码，只要能读懂，会运行，编程的难度大大降低了。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oylw20gGnRgkvX0AKu6JibbEMiasxdRia6CwZax5n11bTQh2za1gw2QKKXuEG5KPj2GVUfibGTX3LuZ7hG0JOjonNg/640?wx_fmt=png&from=appmsg)

有了数据库，就要调用数据展示了。一开始我是直接问 AI：

> 这是我的数据库，请你给我生成一个函数，可以计算过去七天的花费总额。

但因为我的应用是记账软件，涉及到很多函数，每次复制粘贴数据库太麻烦了，于是我做了一个 GPTs，直接预设了数据库 Promote，这样每次只要告诉它想生成什么函数就可以了。

这种重复性的工作，真的很适合预设 Promote 的 GPTs。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oylw20gGnRgkvX0AKu6JibbEMiasxdRia6C6U4XkF1j0n1cPXU6YbJwicJibr0oJIs5w7fzVNfI9xibjo3Nll2oqRMOg/640?wx_fmt=png&from=appmsg)

GPT 3.5 也可以预设 Promote

数据算法设计好后，就需要构建界面了。

这方面有很多编程语言，如 SwiftUI、UIKit，甚至 Flutter 等等。一开始我还去调研了一下，看到有开发吐槽 SwiftUI，纠结要不要用。后来尝试学习了一下，便喜欢上了 SwiftUI。

SwiftUI 就像是搭积木一样。想要两行文字，直接拖拽两个 Text 视图就好，入门非常简单。官方还有很多预设的组件，例如闹钟里上下滚动选择时间的效果，在 SwiftUI 里直接调用 Picker 组件写几行代码就可以实现。写起来真的很美很解压，这也让我第一次喜欢上了编程。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oylw20gGnRgkvX0AKu6JibbEMiasxdRia6CicQVNbkLTXjvNEDZ4Uoicoda51icFia7Sdlg3bicicKTKALO8icD44hjNxPEw/640?wx_fmt=png&from=appmsg)

几行代码就可以写出右边的效果

开始编程前，我已经在 Figma 里设计好了所有页面。所以接下来的事情，就是一个页面一个页面去做。

首先，大部分页面都是基础的元素堆叠，并不难。

我下载了一些 SwiftUI 应用，如 Swifter、Interactful、Libraried、Fabula 等。它们就像是一个 SwiftUI 效果小词典。想要什么效果，就上去找源代码，再发给 GPT，写起来很快。

这里分享一个 GPT 小技巧。

在网上搜索解决方案时，会看到很多时候看不懂但是和问题相关的代码，我就剪切下来问 GPT：你看这个代码有启发吗？不管多乱多无关，它都能找到核心点并模仿。我的很多问题都是这样解决的。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oylw20gGnRgkvX0AKu6JibbEMiasxdRia6Cib9aicwoUjxIDdtw41D8WiciaK7B20piaRWafA6OYRTyfsoiaSQxjTg4ctiaQ/640?wx_fmt=png&from=appmsg)

Interactful：可以直接复制源码

但随着页面和代码越来越多，数据流动也越来越复杂。

之前我是直接把所有代码发给 GPT，GPT 总是能读到关键的部分。但后来，一个页面就可能有上千行代码，发给 GPT 字数爆表。所以我在开发到 1/3 时又花了几天时间学习了代码整理、备注规范等，并把所有常用模块打包成可以复用的组件。后来每次问 GPT，我总能快速发送核心点，效率提升了很多。我也惊讶地发现，GPT 给出的答案有时也会变好。

把问题问清楚，在和 AI 交流的时候也很实用。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oylw20gGnRgkvX0AKu6JibbEMiasxdRia6CuId4D2PzIjlgZYGsfwrbBPCLtJ8OTyqDZbvbrPOUr58JBxtOcKMMNg/640?wx_fmt=png&from=appmsg)

用 //MARK: - 整理代码，非常解压

GPT 也不总是靠谱。有时候，它会给出特别复杂的解决方案。

在我的设计里，我希望备注框可以左右滑动关闭，这样使用起来很自然。但是 GPT 让我检测用户滑动行为，涉及到 UIKit 甚至 Objective-C 等非常复杂的代码，实现的结果也很糟糕。

我隐约觉得不靠谱，便仔细思考了一下，潜意识里为什么会想出左右滑动的方案。后来发现是源自 iPhone 桌面左右滑动的体验，这其实是 SwiftUI 的预设组件 TabView。后来我让 GPT 用 TabView 的方式实现，几行代码就解决了。

所以如果 GPT 给出的解决方案太复杂，不妨再优化一下自己的需求。

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/oylw20gGnRgkvX0AKu6JibbEMiasxdRia6Cz5DWWeOfPK1DecQdmX84BDGqTTBStoMaTbkkEBX7t0Xd0vkK6rG0Uw/640?wx_fmt=gif&from=appmsg)

最后的效果展示

还有一次，我遇到了一个棘手的 Bug：一旦输入小数点应用就会卡死。

问 GPT 后，它总能给出解决方案，但总解决不了问题。我便去学习了断点测试，排查了很久，终于发现原来是地区问题。我的手机设置的是以逗号 , 为小数点的法国地区。于是我在传递数据前做了一个判断，便解决了问题。

这也给了我一个教训：不能太依赖 AI，还是要加强自己的编程技能。

如果我不会编程，便只能不断问 AI，连解法是否靠谱都无法甄别。但是了解编程之后，可以有很简单的解决办法，自己遇到问题也能更好的排查。它就像是我的员工，我的能力上限决定了它的能力上限。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oylw20gGnRgkvX0AKu6JibbEMiasxdRia6CypLmnzodSUlzUDDphQJYdksic3SWqJchhyibcmszz2muckuCCoOln2CQ/640?wx_fmt=png&from=appmsg)

存储前用左边的代码来过滤逗号小数点，就能避免闪退 Bug 了

当然，除了提升自己的能力，还有一个简单的方法可以解决问题：找外援。

一般，GPT-4 解决不了的问题，我会再问一遍 BingAI、Board 和 Pi，有时候可以神奇地解决。有些问题网上很明显会有解决方案，如怎么把导航标题设为圆体，我就直接英文谷歌，一般前排的 StackOverflow、文章和 YouTube 视频等都可以解决。如果不清楚专业名词怎么问，可以问 GPT 如何提问。有些时候，百度也能给出解决方法，如这篇如何手势返回的文章。

大部分情况下，只要想解决问题，总能找到解决的办法。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oylw20gGnRgkvX0AKu6JibbEMiasxdRia6C7rwsE7LfGRJPO3XX5mDibFJ4k3TkicwuOJhEwQ5UTFqjpWkY8TOpiaicdQ/640?wx_fmt=png&from=appmsg)

我经常问 GPT 怎样提问 ...

当然，有一些问题可能只属于我，全世界都找不到办法，这时候就需要发挥主观能动性了。

我设计了一个特别的货币选择页面。它可以像设置闹钟一样上下滑动，同时显示彩色的旗帜和货币符号。这是一个新鲜的设计。GPT 怎么也给不出靠谱的设计，网上也没有先例参考。后来我想了一个巧妙的办法：把滑动的内容变成高清的图片，放到 SwiftUI 原生的 Picker 组件里，就巧妙的解决了，体验也很好。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oylw20gGnRgkvX0AKu6JibbEMiasxdRia6C9cbrVuMsW6wHy7ppICUY4cQQias5MO7I2PLYwA1NkChsVafB3mJ0Oqg/640?wx_fmt=png&from=appmsg)

推荐大家试试 Cush 的这个界面，很好用 ～

如果还是没办法解决，那就变通一下。

在 Cush 的数字输入界面，我希望数字始终很大，并随着输入等比例减小，这样好看又实用。但这涉及到对每一个设备的屏幕尺寸的检测，试了很久都无法解决。于是我想了一个变通的方法：输入 5 位数字后，字体会自动缩小一个字号，以此类推。虽然不是完美的方案，但在大部分情况下也能运行良好。

这其实也是编程教给我的道理：不管如何解决，解决问题最重要。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oylw20gGnRgkvX0AKu6JibbEMiasxdRia6CBWeOb1VdsbHCBQd8Bib0CWZ55NUavUFKja6G4xSptFK1pcXbJ3CmPCg/640?wx_fmt=png&from=appmsg)

我在编程的很长一段时间里，都是每天晚上勤勤恳恳把代码复制到 OneDrive 备份。我知道 Push 到 GitHub 更好，但是 OneDrive 也一样能留档。我到现在都是用苹果的提醒事项做路线图。我知道 Linear、Notion 等工具更好，但是现在苹果够用，未来有需求再换也不迟。

当然，还有一些问题，无论如何都无法解决的。

例如我希望首页可以上滑到负一页，负一页可以下滑到首页。但首页和负一页都是滚动页面 ScrollView，怎么都无法实现。所幸它不干涉到核心体验。权衡之后，我也只能暂且搁置。（此处呼唤一个能力强大的开发大佬 (｀-´)> ）

做出来，比完美更重要。我相信未来我会慢慢迭代，做得更好。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oylw20gGnRgkvX0AKu6JibbEMiasxdRia6CRPg1np36GERS8bNib7MjJ5MAezwZibW1KgCCialg6UsB5navpwk8B1Rkg/640?wx_fmt=png&from=appmsg)

备份到 OneDrive

开发到后期，我已经变成了一个超级大巨婴，什么简单的问题都想问 GPT。我知道这种依赖性并不好，很多时候自己学习去做会更快，但还是偷懒不做，导致效率始终很低。

很快我就迎来了教训。

我需要要给应用加上付费功能 IAP。但这是一个复杂的问题，涉及到前后端和各种判断。GPT 很适合解决单点问题，但解决复杂问题的方案常常很糟糕。那几天我各种尝试，精疲力竭。期间也想过去认认真真学习 IAP，但看着就觉得很难，总是不想学，GPT 又无法解决问题，导致我陷入矛盾内耗，很痛苦。

后来我终于开始走出舒适圈。我先看了少数派教程，但它直接给了一个有 Bug 的文件，没有因果，实在不敢用。然后我又看了苹果的官方教程，它给了一个有源代码的测试应用，里面包含了所有付费类型。但是我真的很晕，我只想用最简单的付费方案啊！囿于不知道也不敢删除多余的部分，也没敢用。

有时候挺奇妙的，本以为提供了完美的方案，实际上别人只想要一点点，完美对别人来说反而是负担。

实际上，在 IAP 上一直有一个成熟的解决方案：RevenueCat。但是它的 YouTube 教学视频动辄四十分钟，我拉进度条，中间的代码看起来也很复杂，让人望而却步。后来实在没办法，我就告诉自己，就花一小时，认认真真看完也不会怎么样。于是便认认真真看完了，结果发现它和 SwiftUI 一样简单直接，文档也清晰易懂，真的不难。花了两三个小时便创建好了 IAP。

这件事对我来说很特别，它告诉了我一个很重要的道理：生活里很多困难的事情，往往只是麻烦，并不是困难。只要耐着性子，一点点学习和拆解，慢慢就能做完。这种心态让我在面对困难时不再犯怵。现在，我已经能耐着性子看一些更长更复杂的视频，学习之前望而却步的「SwiftUI 编程思想」了。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oylw20gGnRgkvX0AKu6JibbEMiasxdRia6C4vX0VNalCK8Pn2Hx62hhmTuK2zIarLNYzFh8feagjKwRfcQXWMQQyA/640?wx_fmt=png&from=appmsg)

神奇的男人，帮我解决了很多问题

总之，就是这样一天天，一点点，我做完了我的应用。

**▍****12 - 1 月：上架与合作**

写到这里，让我先介绍一下我的应用：Cush 记账。

我从大学起就有记账的习惯，但往往坚持几周就半途而废了。虽然如此，在记账的这几周里，我知道自己花了多少钱，对花钱这个行为有了感知力，真的就节省了花费。于是每当我花费失控时，我就会把记账当成是纠错工具，记上几周，自己就会慢慢变好。

2023 年，我鼓起勇气辞职后，自然而然便想到了做这样一款理念的记账软件。它帮助了我，我相信它可以帮助更多人。于是便有了 Cush。它采用特别的上下屏设计，让用户在大部分情况下可以只专注记账；它特别强调了备注心情功能，用户可以针对每月、每天、每一笔记录写备注；在启动页，我还特别提示用户可以短期记账，纠正超支。

有趣的是，当时我沉迷学习多邻国，非常喜欢它贱贱的小组件，于是也在应用里做了一个通知系统，用户超支时便会弹出贱贱的提醒。这个提醒还会根据用户的超支程度变化，为此我想了上百个，花费了很多精力。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oylw20gGnRgkvX0AKu6JibbEMiasxdRia6CSaLtz8FQUh4ZC4Lgex3EJo638AK5FcFfFEBhvqA6SibDCuKofBLmLvA/640?wx_fmt=png&from=appmsg)

上下屏设计｜心情备注｜有趣提醒 

这些都是我在产品上架前做的功能。没有用户调研，全凭自己的直觉和想象。当时我想 Cush 的特色功能应该是短期纠正超支和趣味提醒，所以把这作为了上架后的营销方向。

做完应用后，便是申请开发者账号，发 TestFlight 测试，修改优化，然后是上架。

上架后，按照预期方向，我尝试做了一些推广。例如发小红书、豆瓣等。后来也很快拿到了 App Store 本周推荐，MRR 到了 $500+。但当我想要认真开始推广时，一位前辈告诉我，要先提升应用留存率。而想要提升留存率，就要先知道用户为什么使用我的产品，又有哪些不满可以改善。于是我开始了用户调研。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oylw20gGnRgkvX0AKu6JibbEMiasxdRia6CNIKhzAdvNrvjGFe1u8Sn4dh5ZRjtQH0IhibC4kVyFHyZjY2ke8XzaicA/640?wx_fmt=png&from=appmsg)

苹果推荐

Cush 简单又精美，在测试和上架初期，就有很多很多用户朋友表达了喜爱，他们都特别特别好，对此我真的非常非常感恩。但这也掩盖了一些问题，让我误认为应用在按照我的预设轨迹发展。但当我发了一堆问卷，又打了十几个用户电话后，发现完全不是。

对于他们来说，Cush 最有价值的地方是可以养成记账和省钱习惯。传统的记账软件都堆砌了一堆复杂的功能，记账前还要选分类，繁琐和难以坚持。但 Cush 界面极简无干扰，记账时只需下滑记录金额，甚至不用分类，让人轻松就可以坚持记账。与此同时，Cush 的智能日预算，和超支时界面变红的警戒色，真的能在每一天，记录的每一笔，潜移默化省钱。

而我之前设想的心情备注功能，几乎没有人用。那些贱贱的提醒，烦人也没有用处。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oylw20gGnRgkvX0AKu6JibbEMiasxdRia6C8vtfOE4MqAmAkGe2SJgZzwf5osBehnRhKpvTgWRpCrNzxt4HD9BICg/640?wx_fmt=png&from=appmsg)

Cush 真的能帮助很多人通过记账变得更好

所以 Cush 做出了改变。我隐藏了提醒，去除了短期纠正超支的理念文章。应用的重心转移到了「帮助用户养成记账和省钱习惯」。

这里还可以介绍 Cush 的一些未来计划：养成记账习惯方面，Cush 会增加一个可以自定义预设标签的桌面小组件，省去重复打标签的繁琐，让记账更快速；养成省钱习惯方面，用户在每周回顾时，将可以回看并选择哪些花费可以节省，让下周做得更好。

这段经历对我来说真的特别有益。我一直对产品感兴趣，但终究没有职业化的做过产品。但是现在，我在分析需求，用户调研，靠近我喜欢的职业道路。每一次弯路都让我新奇，原来那些书里读过的内容是这样的。我重新拾起了以前没有共鸣的产品书，我很好奇这条路上会发生什么。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oylw20gGnRgkvX0AKu6JibbEMiasxdRia6CIzT1VqV5zmwAj1u5yOibh2KaWgAOZeCbibpTjU69a5Q9TKNONXH79sgw/640?wx_fmt=png&from=appmsg)

对了，还预测一下：Cush 会支持对单个标签设置预算

到 12 月末，一次特别的契机，我和一名字节开发大佬合作了。

我一直知道自己不擅长也不喜欢开发，补短板只是无奈之选。合作后，我做产品等，他做开发，我们有了工作排期，有了文档库，一切按预期推进，我真的觉得工作幸福感提升了 10 倍。不到一个月的时间，我们做了 iCloud 备份、自动记账、收入模式，修复了很多 Bug。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oylw20gGnRgkvX0AKu6JibbEMiasxdRia6CjiaaJhJJibUOU2ujRMQREdiau6rWj0a2rounVZFJT8YeNFKyw8ZDIKn1Q/640?wx_fmt=png&from=appmsg)

我们一起做的功能 

Cush 在设计伊始只能记录支出，产品的所有设计都是围绕支出。做收入时，意味着所有的细节和界面都要重新设计。当时我还突发奇想要加入省钱模式。于是，支出、收入、省钱，三个模式混杂在一起，我设计了几十个界面，始终觉得不好。后来，我的开发伙伴帮我梳理了产品价值，于是我们删除了省钱模式。我们学习了精益创业，做了用户调研，定位调整为帮助大家养成记账和省钱习惯，于是收入便成了次要。

最后，我们用一种非常巧妙的方式实现了收入模式。原版设计几乎不需要变动，收入只是浅浅展示可有可无。它添加了一个大的功能，它本需要设计地很复杂，但现在的设计却几乎没有变化，简单自然。虽然花了很多精力产品设计，但它大大减小了开发和使用成本，整体上反而是值得的。

这个经历也提示我：要花更多时间思考产品，而不是为了速度盲目投入开发，堆砌功能。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oylw20gGnRgkvX0AKu6JibbEMiasxdRia6CyNuzCBicpMMVic9JC1k44XS2BiaOkYj6aKQrnlywx4Ty4NZpGrTr4N2hA/640?wx_fmt=png&from=appmsg)

没做收入模式之前的 Cush

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oylw20gGnRgkvX0AKu6JibbEMiasxdRia6Cgibiaf0xajCMoFY6OJQibc3K4QibYqeTiaia5oV82wyJLrbkhT2eOnmgfTOw/640?wx_fmt=png&from=appmsg)

做了收入模式之后的 Cush，几乎没有变化

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oylw20gGnRgkvX0AKu6JibbEMiasxdRia6CdjXw8Kiaf3IzPTlwOct45yKKL4wm4Feiar0ibXOhIPDeJEWXJ4BTaCUGA/640?wx_fmt=png&from=appmsg)

舍弃的「存钱功能」

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oylw20gGnRgkvX0AKu6JibbEMiasxdRia6CLbAqkQXiagXPfiaU3hHBTtK6dx7f76Rbk6TlFWoRWr4kGTjbpxwUOJzA/640?wx_fmt=png&from=appmsg)

舍弃的复杂方案 1

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oylw20gGnRgkvX0AKu6JibbEMiasxdRia6CdmD4NtwRNHvMcwoSYnHFvt4K6GziaFk6RglibW3E6jL1icnQLTLMZCAXQ/640?wx_fmt=png&from=appmsg)

舍弃的复杂方案 2

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oylw20gGnRgkvX0AKu6JibbEMiasxdRia6C8qVDYmVs1PbcWKPkgHJYlvn0HhrpY4d5UuKR4C0yN6fMBfL8YFGULA/640?wx_fmt=png&from=appmsg)

舍弃的复杂方案 N ...

我合作的开发朋友真的很棒。他不像很多开发只做开发，而是有很好的产品意识。我们之间有商议，有争执，做出来的产品明显更好。但他合作之初，是想和成熟的产品学习产品知识，而我也只是产品菜鸟。于是，一个月后，我们的合作结束了。按照约定的 50% 分成，是 1600 余元，我想这应该远低于他一个月的工资。

希望我可以努力，把 Cush 做好，提升自己，再请他，值得地，继续合作。

**▍****2 月：从心出发**

做独立开发，最难克服的一点是：纪律性。

不用工作后，时间都是自由安排，也没有目标效绩的压力。我很喜欢设计，就经常熬夜设计到两三点。快到中午才起床，没有精力和自控力，也不喜欢编程，就去看一些乱七八糟的资讯逃避。有时候，我一天能摸鱼 7-8 个小时，Xcode 编程软件都没有打开。

后来有一天，我终于忍无可忍了，这不是我辞职前想要的生活啊！

我用 5Why 方式问自己为什么要熬夜做设计，深入到潜意识里发现，是害怕灵感溜走，以及觉得这样很努力。但我告诉自己，专业应该体现在纪律性，而不是通过投入的时间「假装努力」。灵感是专业后的稳定结果，追求突发的灵感并不是专业的体现。于是我戒除了熬夜。

早上睡懒觉时，我问自己，过去睡了十年懒觉，现在有感觉到很幸福吗？并没有。今天睡懒觉只是满足了一种瘾，明天就记不得今天的懒觉快乐了，对吗？对，我瓦解了当下这种满足瘾的渴望，早晨便没有睡懒觉的念。现在每天早晨六点半起床。

这些听起来有点奇怪。为什么不是上床前不玩手机，早晨定闹钟等实际的方式？因为改变行为最好的方式是改变认知，而不是约束行为。所有的念都来自潜意识的预设，通过 5Why 打开潜意识，否定这一预设，然后就自然能改变行为了。

听起来有点奇怪，但推荐试一试。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oylw20gGnRgkvX0AKu6JibbEMiasxdRia6Csp4yib58MwPKjswNf8QYcxCsekwOzq3AjLy3CiaQPguGsZCuAxUSP4ww/640?wx_fmt=png&from=appmsg)

至于白天的工作效率低。我知道是因为自己陷入了被动驾驶，不知道自己在浪费时间。于是我参考「时间贫困」一书的时间追踪表，做了一个优化版本。记录自己刚刚在干什么。仅仅是记录这个动作，就让我意识到原来我在看资讯，于是便减少了看资讯。

有意思的是，通过记录时间，我发现每次高频工作一小时后会摆烂看一小时资讯。后来我切换了工作方式，每工作 20 分钟就站起来走一走（休息），后来能连续工作两小时，只需要看半小时资讯了。慢慢的，我更了解自己了，也在一点点变好。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oylw20gGnRgkvX0AKu6JibbEMiasxdRia6CITtWWibvtrTrX45Q0Siahw2IT3nW9qFJXvCg3dE0YribKzr76th9oPACA/640?wx_fmt=png&from=appmsg)

我的时间记录历史

还有一些时候，我很迷茫不知道做什么。原因在想做的事情太多太大而无从下手。我就会用飞书的思维笔记拆解一下。我发现，仅仅是写下来，焦虑就会消失。没有了负面情绪，自控力也提升了。思维笔记真的很适合学习和梳理，现在我记读书笔记、整理用户访谈、做计划，做各种事情都用思维笔记，推荐！

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oylw20gGnRgkvX0AKu6JibbEMiasxdRia6C6KpuVa9kIGLw0iaKXx4hTgibZVhrXHysnVGOYFHAeauHWibR5eLPnKp2g/640?wx_fmt=png&from=appmsg)

用思维导图做读书笔记，真的比 Notion、Flomo 等线性工具好太多了，推荐推荐

我很擅长认知和时间管理，解决这些问题并不难。但很快，我就遇到了一个难以解决的问题。

在产品推广阶段，我的大部分用户主要来自小红书。但后来做 iCloud 时，我提及「招募」用户被违规限流，后来的每一条笔记全部限流。如何违规申诉都告之没有问题，但发什么都限流，让我真的特别特别崩溃。小红书这一点真的特别傻 X。总之，我陷入了一种对不稳定的焦虑。

然后，我便去学习其它增长方式。我加了一堆独立开发群，然后了解到，原来很多独立开发不知道做什么时，就会先做记账、待办事项、日记这三种应用，被戏称为独立开发三件套。这让我莫名有一种羞耻感。我又看了一堆「独立开发做什么、晒收入」等等内容，知识没学到，反而怀疑自己做的事情是否有前途，品类增长前景怎么样，投入产出是否值得，赚钱可能性是否高等等。一评估，更焦虑了。

辞职这些天，我一直在玩即刻。本来是想休闲，但上面全是 AI 风口，还有很多「大佬」晒成就，让人更焦虑了。我不免开始动摇：这是一个 AI 机遇时代，做记账是不是太落后了，决策是不是太糟糕了。

最后，我一直关注的一位「独立开发导师」也在说新手千万不要做记账，加上开发大佬的离开，我的心态彻底崩溃了。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oylw20gGnRgkvX0AKu6JibbEMiasxdRia6C01Oagpl6rCm8nJrSRmuN4xC2m4xAVicVuib4F38C0LPyxDDyJBdUamFg/640?wx_fmt=png&from=appmsg)

我丧失了对 Cush 的热情，我觉得自己一事无成，我觉得我找不到工作，我不知道自己应该做什么。然后，我开始看考公资料了 …

那几天里，我看了很多很多考公视频，下载资料分析自己适合哪个岗位，甚至发现考西藏比较容易还小小激动了一下。我想自己就这样吧，努力考上，安安稳稳应该会很幸福吧！这不是我辞职前想要的生活，那时却非常憧憬。

但我如果考公，那些付了钱的用户怎么办？这件事在我心里非常撕扯。而且我内心深处知道，考上了我不会幸福的。如果那时再看一些成功学的书，我也许会遗憾自己的人生吧。曾经想法无限，但受到一点挫折就逃避，成为了一个无能狂怒，自怨自艾的普通人。

总之，就是一段非常低压的时光。那时我还想过拍视频、做健身教练等等不靠谱的想法。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oylw20gGnRgkvX0AKu6JibbEMiasxdRia6CZPIGQ0bJ2HaKyD8IELdyu06sucHG6vyXWMSibic2iaqCA0nVV2q0mWJicA/640?wx_fmt=png&from=appmsg)

很认真地研究了做视频，发现我不喜欢写和剪辑这样紧凑专业的内容，就放弃了

然后，一个偶然的机会，我看到了胖东来老板的视频。

他在回答一位普通人的困惑：28岁一事无成的人生怎么办？他给的回答是：无论工资多少，不和别人比，静下心来认认真真地工作，去创造美好。这其实是一个制作粗糙的视频，讲了一些好像鸡汤的话，但对我来说，就像是一道神启。不知道为何，我忽然想通了。

我所有的不快乐，都是源于一种期望：我要世俗意义上的成功。所以我要把握机会（AI），赚钱（换方向），证明自己（不做开发三件套）。但我做 Cush 的源动力一直是我要创造美好的东西，这是让我在 2023 年辞职的勇气来源，在我开发时就写到了应用里，是我每个熬夜设计的晚上，那种发自内心的喜欢和动力。

有些答案，其实我已经知道了，只是忘记了。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oylw20gGnRgkvX0AKu6JibbEMiasxdRia6Cs4UkTeaCpC6kkpnzYuibIgNlobNONg0BicCtwlchFnyONA9yCZjicnUAA/640?wx_fmt=png&from=appmsg)

滑动 Cush 设置底部，可以见到这个彩蛋

如果不成功 会怎么样？没有很多钱，但是我依然能找一份工作，吹的起空调，在物质上过得比古代王侯将相还好；如果没有赶上 AI 风口会怎么样？我也没有赶上移动互联网和比特币风口，也还是活得好好的；如果不做 Cush 会怎样？我想十年之后再回看，我会很遗憾吧！

与此同时，我想 Cush 一定不是我生命里最后一款产品。我一直有很多想法，例如 全新的工作方式 hillo、增幅 macOS 工作流的小工具、基于 Arc 的一系列想象，亦或是 AI，如此等等。我可以把 Cush 当成是一个很好的锻炼机会，增长我的产品能力，未来再做这些产品时也更游刃有余。慢就是快。

就这样，仔细想了想最糟糕的结果，和我真正想要的东西，我便忽然想开了。然后我取关了「独立开发导师」和一批「AI 大佬」，退出了所有独立开发群，不再关注这些焦虑源，不再以成功为目标。然后，我的大脑忽然就打开了，我对 Cush 的热情，我的创意，我的自控力，全部都回来了。

想想也很奇妙。现在我还是做着和以前一样的事情，好像什么都没有发生过。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oylw20gGnRgkvX0AKu6JibbEMiasxdRia6CGf2iadiaqO8NQQ4EoEs8YDqn4Vs4tVX7XdB81zjib7eO8HDOXiaT4hu3Jg/640?wx_fmt=png&from=appmsg)

我拥有可以改变我自己的力量

哦对了，关于小红书限流，现在还没有解决。想想还是很忧愁。不过，切换心态，这应该也只是麻烦，而不是困难的事情吧！希望明年的这个时候再分享，它会成为一件不起眼的小事，被一笔带过。

**▍****如果你也想从零做一款产品**

最后，如果你也想从零做一款产品。

在产品上，建议可以围绕一个小点，做得简单一点。

简单是美。它不是简单的删除和功能少，而是深思熟虑后的去繁就简，可以帮助用户专注在最重要的事情上。例如我的 Cush，在设计之初就采用上下屏，把大部分不常用的内容隐藏起来，所以用户能关注在最核心的记账上，坚持之；整个应用没有花哨的数据分析，只突出一个指标：是否超支，所以能帮助用户省钱。

这种简单不是囿于技术的，而是一种选择。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oylw20gGnRgkvX0AKu6JibbEMiasxdRia6COiagnGibnxmzjgqGtos4c1Sz5XBtpJw8vvo5tFVibggRUxkxSDM4XQgWA/640?wx_fmt=png&from=appmsg)

通过上下屏设计，将记录和图表等非常用功能藏起来

在设计上，参考最好的方案。

我就把我觉得审美和功能最顶级的应用放在了手机首屏，每天提醒自己。还买了很贵的 Mobbin 会员，没事多逛逛。如果你还不会设计，可以简单学习一下 Figma。不用关心里面的组件、变量等高级功能，简单学一下就行。设计的时候，一定要用手机同步预览。

哦对了，建议多用 SwiftUI 官方的轮子，例如 Sheet、Picker、苹果设计语言、震动反馈等。开发成本低，体验上让人感觉很流畅。追求自定义可能会又难又丑。苹果 HIG 是很好的设计参考，但需根据实际情况选择性接受。例如苹果不建议多层 Sheet。Transit 就是多层 Sheet，逻辑混乱，体验不好。但我的 Cush 是「本周 - 今日 - 本条」这样逻辑清晰的多层 Sheet，使用起来并无大碍。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oylw20gGnRgkvX0AKu6JibbEMiasxdRia6C20uqJL4AaMicdicicicFic2sjZCCTEXyGXzFlsjhoq8rKzhHibBuK7OkSYTA/640?wx_fmt=png&from=appmsg)

我的手机首屏

当你想好自己要做什么样的应用，并在纸上或 Figma 类绘图软件上设计好后，就可以开始学习编程了。

很幸运，AI 的出现，真的让每一个人都有了编程创造的可能。

编程里有困难艰涩，也有简单有趣。以往学习时，必须要先学习困难的理论部分，让人还没开始就结束了尝试。现在有了 AI，困难的部分不用自己写，只要读懂会用就可以了，门槛大大降低。有了信心，慢慢接触到界面交互代码等更有趣的东西，逐渐喜欢上编程，再学习之前晦涩的部分就更简单了。

你可以先找一本编程教程看，了解编程是怎么回事，以及培养编程基础。Swift 部分读懂就行不用写，SwiftUI 跟着写，应用部分看自己的应用需要什么，就学什么。然后就可以直接做应用了。先开 GPT-4 会员，然后，需要什么功能，就问 AI / 找教程 / 搜谷歌 / 私信开发大佬。遇到问题，解决问题，如果无法解决，就拆解问题，或转换问题，或暂时搁置，一点点就能做完。

至于实际的教程和资源。推荐解决疑难杂症的 StackOverflow，推荐讲解 RevenueCat 的 Chris，推荐苹果官方的 SwiftUI 教程。但等等，我想一开始并不需要收藏什么，不用等准备好了才开始。就直接开始，想做什么功能就谷歌，好的资源自己就会出现。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oylw20gGnRgkvX0AKu6JibbEMiasxdRia6CjVhtLibXibyHII9eapUNpL1pITm07l66FlNGBebIMuEzWpgClt73zQ0w/640?wx_fmt=png&from=appmsg)

如果只能记住一个建议的话，就是用谷歌英文搜索！

我很早之前就买了少数派编程课，但因为开头的 Swift 部分大劝退，觉得自己这辈子都不可能编程了。但是现在，我不仅会写了，甚至还开发出了自己的应用。虽然只是一个小小的入门门徒，但这是我从未想过的事情。我这样都可以，相信你也一定可以的。

最后，至于产品上线后如何推广，我暂时也没有什么经验。希望明年再来分享。

**▍****结尾**

回看我人生的前 24 年，好像不知怎么就过完了。

虽然我也在决定我的人生，例如选择上什么大学，读什么专业，毕业后做什么工作。但这些决定来自于我，又好像不是我。我可以想象，按照惯例，我会升职加薪，组建一个家庭，生两个可爱的宝宝，退休，和朋友打打象棋，进 ICU，挤在一个小小的墓地里。总感觉是被什么推着走。

但过去的 2023 年，像是一段很奇幻的旅程。

我犹豫了整整一年，终于鼓起勇气辞职。辞职后我尝试了很多事情，终于决定现在要做的事情。做事中遇到很多挫折和怀疑，我终于克服并坚定地选择。我第一次感受到，我在过我自己的人生，我在为我自己的人生负责。很难去描述这种感受，但它是很真实的。

未来会怎么样，我也不知道。也许明年积蓄耗尽，我又会回到职场，继续去升职加薪；也许 Cush 能做大做强，成为世界上最简单好用的记账软件；也许 AI 太厉害，这一切都没有了意义，大家 30 岁集体退休，天天遛弯下象棋；也许人生无常，变化倏尔即至。

无论如何，在当下，更稳健地过好每一天，增长技能，创造更多美好吧！

原文链接：

https://sspai.com/post/86860?utm\_source=wechat&utm\_medium=social

作者：鲨鲨  

责编：张奕源Nick

[**利益相关声明**](http://mp.weixin.qq.com/s?__biz=MzU4Mjg3MDAyMQ==&mid=2247560065&idx=1&sn=d9a74a6059a73feab05b09c17f5836fb&chksm=fdb21eebcac597fda198b8c9e63f2284df568ea86f467daef69cb6bcdcd49f9a2bf57514120d&scene=21#wechat_redirect)：作者与文中产品有直接的利益相关（开发者、自家产品等）

******/****更多热门文章****/******

[![](https://mmbiz.qpic.cn/sz_mmbiz_png/oylw20gGnRgkvX0AKu6JibbEMiasxdRia6CSfPiceZRcePhombhaicu031BiaRDQZib7kJBGt7q7FhBWlUUjTIavibO0YQ/640?wx_fmt=png&from=appmsg)
](http://mp.weixin.qq.com/s?__biz=MzU4Mjg3MDAyMQ==&mid=2247570174&idx=1&sn=ab6a924ec3770211154b97361dcc66f0&chksm=fdb22794cac5ae82be6a81e6385dc54e926ed011de4c3787a408f7ab20cdf642bc478448db5b&scene=21#wechat_redirect)

[![](https://mmbiz.qpic.cn/sz_mmbiz_png/oylw20gGnRgRshYyF3Mq4r18lUnJENNRUC7zibFhBia6l9DkkticwkakPUwSlrS6o2OgIicKFHv0cRmjib9qoLz4t1Q/640?wx_fmt=png&from=appmsg)
](http://mp.weixin.qq.com/s?__biz=MzU4Mjg3MDAyMQ==&mid=2247570119&idx=1&sn=00ad4ccee466ba1fe0b794f6048e3965&chksm=fdb227adcac5aebbc9a7a186ee2146a0867a0b6d743ed8bee504cc29013870bacde669e70862&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oylw20gGnRia0gia2XRjDMyUibKnCy2K0x54Bib33FrlL2EuuBN3j1JU6EwcpdUY81WF9oVNhLDM0H8vFOjQ2Qfn7w/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/oylw20gGnRia5eQ4a4yV4Qpwj5xOiaaKKiclUP2GvCckKna5gukbFmkUQpoVjdekXiawhY0jiaZALA2nYCQwzP50kfg/640?wx_fmt=gif)