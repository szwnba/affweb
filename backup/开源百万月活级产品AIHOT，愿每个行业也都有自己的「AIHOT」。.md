今天，我做了一个决定，把我那个月活百万的AI热点资讯网站。

AIHOT，正式开源。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqWnqjLSpoZNEYFu9rFicVib2ibiaWU0TI05S6zgVgcuwPgZIKGNibsL3CQP1E0vVyaeDA3km8desEfmnb6O0QMkXQM1iahicvbBkk6CfY/640?wx_fmt=png&from=appmsg#imgIndex=0)

就是这个小东西，网址在此（前段时间刚买下的新域名，是不是很好记哈哈哈）：https://aihot.news/

这个小东西真的迭代了很久了，本来是我们公司自己内部用的一个监控热点帮我们找选题的、连网站都没有的飞书机器人，没想到，发展到了今天，居然都有了百万月活，有了近10万的Skill用户，更别提有多少基于AIHOT的API进行二次开发的对外分发的项目了。

从年前借助AI开发第一版到现在，一晃眼，7、8个月就这么过去了。

很多人问我说，为啥你到现在都不商业化，为啥一直免费做，是不是未来要割把大的。。。

我每次都很无语，我其实就是单纯的很喜欢做产品，可能也是我自己的性格的原因，大家的鼓励和正反馈，真的是我无数个深夜最大的动力。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqXLk0V1DbOPpdiafU6qx6IN7a4dn0e191GhdC8Hib3Q2ZDnfBIeyzc2icBkkvTM1hUySzcBo03u1ZicD8RAkAWM6HUmf1BETCchw80/640?wx_fmt=png&from=appmsg#imgIndex=1)

然后就说到开源AIHOT。

这个念头其实有很久了，因为过去有无数的朋友，在我的各种平台下或评论或私信。

他们有法律行业的、有HR行业的、有金融行业的、有贵金属行业的等等等等，每一个人，都有监控自己行业一些最新资讯和热点的需求。

![](https://mmbiz.qpic.cn/mmbiz_png/2jjfQoZLoqVmYKwoRVc8shSHGLQ4dDUchqy3W5z4jZnNANWpQvobCAGURnenkJAYugmuJ9CQaj3aZgB6fa54COFJiaFQbtHRgVkamRZAiaab4/640?wx_fmt=png&from=appmsg#imgIndex=2)

但是我不可能满足大家所有的需求，一个是我没有那么大的精力，第二个是我也没有那个行业的KnowHow，我连什么是有用的信源都不知道，那我怎么可能能做好呢？

所以其实在过去，我一直就有把这个东西开源给所有人的想法。

既然我没有办法满足所有人，那不如就把火种交到大家自己的手上。

但是这个想法一拖，就拖到了今天。

原因很简单，是因为我感觉我没有脸开源，之前这个AIHOT的架构，做的实在是太烂了，半年前，我对于开发是一个完完全全的门外汉，一丁点都不懂，现在我能算是一个外行，对于一些大的架构什么的，开始有一些了解了，毕竟真的是在干中学，学了半年的时间。

所以呢，之前的AIHOT就是一个大型的屎山，经常改了这个地方，另一个地方出bug了，改个模型榜，我都不知道热点榜是怎么能崩掉的。

它每天也给我弹无数的告警和报错信息。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqUQ6av9bDYgRTiahbsazrMjBJK3ibUiba8Ic8G8QFficThjuV7KLTzuC2JEvgWdaofoAsWRx3uzM2Zf5TnSlyORlV652sJIsKnOj4c/640?wx_fmt=png&from=appmsg#imgIndex=3)

你就说吓不吓人吧。

每天早上醒来，我都胆战心惊，特别害怕看到飞书上这个群又有十几条的未读消息。

所以这样的屎山，我怎么敢给大家开源呢？这不是找骂吗？

于是，时间就这么一点一点过去了，几个月的时间，转瞬即逝。

直到，这个中秋。

我终于有了3天几乎可以不需要出门，不需要跟外界有进行任何交流的假期，可以安安心心的在家里vibe coding，玩AI，做我喜欢的东西。

于是，那个念头又回来了。

重写一下AIHOT，然后，给大家开源吧。

你知道的，念头这个东西，一旦在你脑海中形成了，就再也挥之不去了。

念念不忘，必有回响。

于是，说干就干。

我花了一天的时间，搞定了Claude账号，这次，终于可以常用不被封号了（不要问我怎么解决的，有心的可以去我的X上搜），然后用上了Claude Opus 5.5。

用上的那一刻，就是如图的表情。

![](https://mmbiz.qpic.cn/mmbiz_png/2jjfQoZLoqUKKqCnekxyiaseWmibicOf2ibQgTUZxOafSjnkKeXvpbibaFE0C7kr5zxfKGWtoDgOjb4ZAKBiaU8iblByXCzeHgdJ1PTPLEl8We3fK0/640?wx_fmt=png&from=appmsg#imgIndex=4)

Claude Opus 5.5和GPT-6 Astra在手，终于，我开启了重写的日子。

作为一个纯粹的外行，你让我去重写整个的项目，那几乎是不可能的。

所以这个事，当然就需要交给最强的AI了。

那大家也都知道，AI会有个问题，就是即使强如Claude Opus 5.5和GPT-6 Astra这样的模型，一旦读了历史的代码库，它也会受屎山影响，导致我们整个的重构是不完整、不彻底，是没有办法从底层进行重构的。

那有没有更好的方式呢？

我想到了一个办法，就是回归到第一性原理。为什么要看那些代码呢？我们本质上是要给用户提供我们的功能，根本没有人关心背后的代码是怎么写的，只要你的功能提供的准确，用户体验足够好，速度足够的快，那就是好东西。

所以，那不如回归到一个产品经理最原始的东西吧。

我们把整个的旧代码库蒸馏成一个全面的解耦的功能文档。

于是，我打开了Codex，选中GPT-6 Astra，我就先发了这么一段，直接口喷的，大家可以无视。

![](https://mmbiz.qpic.cn/mmbiz_png/2jjfQoZLoqVgia2XGb11Cs3Ttrj65ebrAECE8bFZ8DGs59Bv9VJqWyhaxBuibjAjYpia0702OWJZsAbmS62ibH3r2NSKslaoVibiceBWic9JG6mGsw/640?wx_fmt=png&from=appmsg#imgIndex=5)

在给了我一顿回复和分析之后，我又发了一段更加傻瓜式的Prompt，里面有可能有一些夸张式不现实的要求，反正是让AI干活，大家懂那个意思就好。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqXuXxykUjT88ibMUc9icpialZX2MRCaHls4iaAjv7qf92jqiayMnuFX5ByLEYjPgibAFHPM72ubbaRuXyc6rBmoRPziak4qCqB64oiaFns/640?wx_fmt=png&from=appmsg#imgIndex=6)

然后记得，还要让模型出一个交接包。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqVZAic9fpPoNGpPxickr1HW8ErwkoEcUfVJQh8abH3t8GcePMYuX67WBmaB7gXqhP4GTSh7HvoLIRTd8oS4NIia4jgJ62hmudwDbA/640?wx_fmt=png&from=appmsg#imgIndex=7)

在跑Codex的时候，我同时又打开了Claude，选中Claude Fable 5.1。

让它干一遍跟GPT-6 Astra同样的活，尽可能的让这个文档和交接包做的更加合理。

再然后，就是让Claude Opus 5.5审查和开发了。

在我整个的流程中，Claude Opus 5.5都是绝对的开发主力，这一次，Claude是真的太强了，不仅模型智力极强，还是一个究极水桶，无论是审美还是写文章，还是开发，还是耐用度，还是在理解你的需求上，都是这个时代独一档的模型。

甚至还有人做了这张图。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqXjficsibz6OKZ6MK2RJlpnmhrs34caWO33Ouf5lqTp6koTIe2ia47gJcCuutt6ENvtxbyxia61T7Tb7AyLzS6nqDNMAOWqzKahGwM/640?wx_fmt=png&from=appmsg#imgIndex=8)

整个重写的过程就不给大家一一赘述了，在开发完以后，我总结了12步。

有兴趣的可以看一看，当然我不是什么专业开发者，我就是一个设计师出身的纯外行，我只是分享一下我自己的重写过程，这个过程如果能对大家有一点点启发，那我觉得就很棒了。。。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/2jjfQoZLoqWRxFkjL3tm6HTJurcL7m1CFLrwYVX6kDZZ4U1TgeiajLMNa2bwiaMDAlRbPhM3oVFeFLibmW56rS2K939PuqswKaT1MJcwhMaEC8/640?wx_fmt=jpeg#imgIndex=9)

最终的重写结果，大家可以看看这个图。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2jjfQoZLoqUibC2SQoeTkia5BKic7OW9icuXViaOb8BtndUyPWY5IXxf1CYibhGm2NSbjpyvEELsjWMxMzgKoFpnajGIn46TXDlcyuYg8fL0mU6uQ/640?wx_fmt=jpeg&from=appmsg#imgIndex=10)

整体上架构应该是比较干净的了，对于Agent开发也是非常友好的了，因为模块化足够的清晰，他们只需要去读最少的上下文，就能精准地进行定位，前端也进行了全部的统一，都做成了组件化，几个页面也都重新设计了UI视觉。

比如日报页。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqXUwK7k8r0A5vKUvNvVXSRmbIruajfibvBzBDSHFlGJA9iaIXv9RwQZLRzpEGTjReTl3tQxibkicAxnGeOKfUMVyWib7wniaoApUIJTs/640?wx_fmt=png&from=appmsg#imgIndex=11)

比如Tibo重置监控页。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqVA4a0OjFibUAmwjKqucjJAciaYJFvlHS7mZktibMXuhYzowMiapQfQTQcUc86b9zvHMzXPUJQm4U7qVIVdnkVNQKsVknica52TrgpA/640?wx_fmt=png&from=appmsg#imgIndex=12)

比如热点榜。

![](https://mmbiz.qpic.cn/mmbiz_png/2jjfQoZLoqWlbA6RrDHL9A0ByDeYPK4uqKrMCDy5bBn2Vicg7ZnYQwIFjZoc6lT3w1XP2JcMU359UosJFX52JmZibWjm5sRBzNtE2eAbVKYe8/640?wx_fmt=png&from=appmsg#imgIndex=13)

比如关于页。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqVh3C35FK0OicU0rZoWUQzh6MCl0EdflM5bF48fG9Tz0J7Man2f24w5hR8FjB6COgLGg1ic57zicKpFOm6GmvKnBV6KkKFyha6iciag/640?wx_fmt=png&from=appmsg#imgIndex=14)

等等。

性能和速度上也有了大幅的提升。

于是，AIHOT 2.0版本也上线了。

![](https://mmbiz.qpic.cn/mmbiz_png/2jjfQoZLoqX2bxGVNUHw1jtgvM5JCLKeE9ebeBjvzSXM4O37cOoFiaPClPMQ0PzJyDpFFlmgtoFGVwJsUmaEuX3OpNqNpBGdRRlzXHiclqRM0/640?wx_fmt=png&from=appmsg#imgIndex=15)

我也终于，敢给大家，开源了。

每个行业现在也都可以有自己的AIHOT了。

开源地址：https://github.com/KKKKhazix/AIHOT

![](https://mmbiz.qpic.cn/mmbiz_png/2jjfQoZLoqUTy1dsYVJWnxsVeQdStIZC82Y7pqXfheUwfqAmom18AwYKaWjZqEjzWicYQtJgle7Qo8YmrFWhyBBEicPiajZuM4oYPCa52GOJvk/640?wx_fmt=png&from=appmsg#imgIndex=16)

我把能开源的全部都开源了，包括我的采集流程、精选评分流程、聚簇机制等等，生产环境里面用到的所有Prompt我也都开源了。

但是因为这种网站的特殊性，所以呢，像具体信源这些就没办法放出来了，主要怕引起一些争议，同时确实对于其他各行各业的大家来说，也确实没什么用。

基于这个框架，大家可以尽情的去构建自己的产品。

不过这里也确实说一句，我可能确实没有办法保证我未来在AIHOT的每一次迭代，也都会同步的更新到这个仓库里面，因为更新太频繁了，且很多也是AI行业的特化，所以，我只能说，未来我尽量。

但我觉得它最大的意义，还是作为一个基础框架，能给到所有的行业，所有的人。

法律行业、HR行业、金融行业、贵金属行业等等各行各业的朋友。

我不懂你们的行业，不知道你们该看哪些信源，也不知道什么样的消息，对你们来说才叫热点。

但你们懂。

打开你们的Agent把这个仓库交给你的Agent，让它把信源换成你们自己的，把精选的标准，换成你们自己的标准和KnowHow。

剩下的，就交给时间吧。

半年以前，我连代码是什么都看不太懂。

半年以后，我终于可以把一个曾经只属于我的小东西，交到更多人的手里。

我不知道它最后会被改成什么样子，会走到多远的地方。

但这可能就是开源最浪漫的地方。

AIHOT曾经只是我无数个深夜里，一个很小、很小的念头。

今天，我把它放在这里。

剩下的路，就交给你们了。

**愿我们都能用AI，把那些曾经只有少数人才能做到的事，一点一点，变成普通人也可以拥有的能力。** 

也愿诸君，乾坤既大，草木尤青。

本心择路，笃志前行。

未来必定。

一路，顺风。

******以上，既然看到这里了，如果觉得不错，随手点个赞、在看、转发三连吧，如果想第一时间收到推送，也可以给我个星标⭐～谢谢你看我的文章，我们，下次再见。******

\>/ 作者：卡兹克

\>/ 投稿或爆料，请联系邮箱：wzglyay@virxact.com