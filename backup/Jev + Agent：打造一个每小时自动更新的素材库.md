Jev

Hi，我是 Peter。

前几天在玩 TypeSafe 刚发的 Jev 模型，有点意思。

简单说，它是一个不聊天、不写字的模型——只做判断。你给它一张表，它一格一格填好，每格再标个把握。

快，也便宜，就是只读字不看图。我拿它把平台的素材库过了一遍，把过程和感受写一下。

01

什么是 Jev

9 月 15 日发布，这是 TypeSafe 当时的公告：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/nAey2PDT0XTHMGRlpib0XLxPA42sF9BxPAQlOgq3tBg0ETJFSELIcIfTjIuiaRWCYpTotM6JJmvLcVW1BfiaDlHXeRibmWCmHr4iau4ttccnAvRw/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=0)

Jev 公告

无非三件事。

只做判断

不聊天，不写一个字。能回的就三种，几选一、打个分、是或否。

每个判断带把握

它会告诉你有多确定，拿不准的它自己会标出来。

快

一次判断 70 到 500 毫秒，基本是一眼的事。

价格这块，输入每百万 Token $0.042，输出不收钱。

便宜，是因为它不写字。同样的量给大模型，光输入就是每百万 $0.20 到 $10，输出一般还要贵好几倍。

我是 19 号申请的，1 个小时就通过了：

![](https://mmbiz.qpic.cn/mmbiz_png/nAey2PDT0XSRvv2eHyc6Z5PHXJlicQWzKXYoruVBpFPOllAf1n1D7UHX9ibwqT9PkTG15uXayMPqSrR9rzgxrNib9dOthoJFTeiclyMxeK7ZQTM/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=1)

申请通过的邮件

不过 20 号申请入口又关了。想试的圈友，Vercel 的 AI Gateway 上可以玩，Cloudflare 上也能直接调。

我实测的一轮，400 条素材读了 67.1 万 Token，按标价不到 3 美分。

02

我用它做了什么

我把 RollerAds 的素材库接了出来，一个平台就有 4,000 多条素材。

如果直接丢给 Agent 整理、分析，四千多条一条条读，又慢又烧 Token。

所以先让 Jev 过一遍。演示里左边每一格是一条推送广告，读到哪条亮哪条：

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/nAey2PDT0XT4aJRgRnjnLBPNtDfCG3mW7lZC3nK5mqZ3VtXqCibLN2v83hH4p0I8AYf0pJHp1KVMkAW7LDZibdhnyzJib6pViaE7dMNMDao0HBE/640?wx_fmt=gif&from=appmsg#imgIndex=2)

Jev 20.6 秒读完 400 条素材

每条素材，Jev 要回答 12 个问题，挑几个说。

•  钩子——走的什么套路

•  优惠——有没有、给的什么

•  CTA——让用户干什么

•  吹得多狠——0 到 2 分

•  审核风险——会不会被拒

•  推送适配——适不适合 Push

400 条，20.6 秒读完，一共 4,800 个判断。照这个速度推，库里 4,107 条全读一遍，三分半左右。

读完的结果后，每条素材身上多了几个标签，再加上平台原本的 CTR 和曝光：

![](https://mmbiz.qpic.cn/mmbiz_png/nAey2PDT0XSxHkTApyURIxL1ia41liafMRMTuLicZHwIia6w0HszjLrux9ecLR7I3pA0zwOTk0Ay2dOnicnmxD5PLve8ibibtLob5llpoQrlFicBjkU/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=3)

素材库

拿一条举例。

#1269 是一条英国的寿险广告，图上就一个问题，你是不是 1946 到 1976 年出生，下面两个按钮 Yes 和 No。

平台上跑了 42 万多次曝光，CTR 0.93%。Jev 判它好奇型，把握 0.92。

吹得多狠打了 0.42 分，满分 2。审核风险 0.14，推送适配只有 0.47，Jev 觉得它放在 Push 上一般。

点开素材，右边就是 Jev 的判读：

![](https://mmbiz.qpic.cn/mmbiz_png/nAey2PDT0XTicycVqicNX601cZPElK6wmMicdc1C6OXMqF2bFDHw7JsHRv289g0bxApU35hu9faA4ZDz6STbcPglYltQn3ic5hTfxibQjOYyfX50/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=4)

#1269 的 Jev 判读

感受：快。400 条一眼扫完，比丢给 Agent 一条条读爽一截——当然，它只会判断，写东西我们还得靠 Agent。

03

交给 Agent

标签有了，就能按我们的规则排。

比如 GEO 选肯尼亚，钩子选信息型，风险选低，按平台 CTR 排。四千条一下缩到十几条。

Jev 拿不准的那些，直接不进。筛出来的这十几条，就是我说的置信样本。

这时候才轮到 Agent。它拿着这批样本，照着钩子和结构做二创，改出一批新文案，自动批量去测。

这可能是我想到的形态：Jev 读料和筛料，Agent 管测和二创。

我们自己在跑的素材，CTR 0.08%。平台库里排前面的，在 2% 上下。

两边口径不完全一样，但差距摆在那。素材是投流里最大的变量，找、测、改又是最费时间的。

04

我的思考

1\. 快和便宜，是我最直观的感受。

并且我认为最有价值的是：替 Agent 读料。

素材库先让 Jev 读完、筛好，Agent 拿到的是十几条置信样本，Token 只花在二创和测试上。

2\. 可玩性，投放这块能干的不少。

素材库打标签，每小时补一轮，新素材进库就带上标签。重复劳动，交给它合适。

整库读完还能数行情。这 400 条里，钩子将近一半是功能介绍，一半以上根本不提优惠，CTA 最多的是了解和领取。

这种盘面，一条条翻是翻不出来的。

Agent 改出来的新文案，上线前也可以先过一遍 Jev，钩子跑偏的直接打回。

总的来说，先让 Jev 读、再让 Agent 写，方向是对的。投流里素材多、判断多，全丢给大模型，Token 扛不住。

但现在这个阶段，它更适合打标签、做初筛这种活。它给的是概率，拍板的还是我们。

总之，Token 烧得心疼的圈友，可以试试让 Jev 先帮你读一遍。

希望这篇能对你有所启发！

更多 Affiliate Marketing 干货，请前往星球/飞书获取 👇