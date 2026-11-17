最近国内外的短剧越来越火了，想入局的人很多

我有个朋友啊

真的是朋友🌚

花了大半年筹备一个 AI短剧产品，但因为没有设计师，界面 UI 交互各方面都很 low

而且几乎做的都是表单式的，功能非常受限，只能在固定几个场景来做效果

结果上周，他用 DeepSeek Harness 配合 REA、Craft Anything，反手就把刚上线的「某短剧工作室」给复刻了。

![](https://mmbiz.qpic.cn/mmbiz_jpg/UQ9fsOliarQic4mUSuy3Iw2UQ0p9Uk0Tlz9t7CfRDqm7kfziceLuwMhQE511iaiavO6iaXsKPmR57duTV2aLss3iawcgBo2XwPmTquwW0D9K8Vk3xY/640?from=appmsg#imgIndex=0)

本地复刻版首页

一下子高大上起来。不止是前端交互，甚至后端功能、Skill 定义等各种功能都整得一模一样。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/UQ9fsOliarQibzdplpdvmxaheUsj966u3LVa39Kgu1co6zniaX9RFPx23SAoic6joRZRE59ribg74N75qZOsWfzDvETm0QkwA6ticrERqHRfn5d0M/640?wx_fmt=png&from=appmsg#imgIndex=1)

复刻版分镜工作台

他甚至把短剧剧本大模型都给蒸馏了（后面会说怎么弄的）

再加上 Gemini、Claude等海外御三家的模型能力，实测直接跑出的 完整短剧，效果很好。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/UQ9fsOliarQ9SzcppwWx67s1tyfeuLGWEwHMlXE5me5GaYBMM5us62eJfsiclM31T3Cun0vY779zfk21dzR4NMicOJwyURFeicDBxYMvdOoplF8/640?from=appmsg#imgIndex=2)

而且前后也才花了 2 天时间。

DSH 在工作的时间长达 10 个小时，跑了 48 个会话、累计 29.36 亿 Token（99% 命中缓存），用的 DeepSeek v4 flash max， 成本才 100 块钱出头，谁敢想啊？

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/UQ9fsOliarQibqia1liacBEEqyIcwHM9QJ2CHzP9XtRZgZGjCgJKGrcvqBb9xG7uLbbSeU91Dbff6LicJpRm6IrEibTtuYPDU3Vlx1TZDRC0nhv1o/640?from=appmsg#imgIndex=3)

老实说，以后大家想创业、想做什么产品，真的不要自己花心思去空想了。因为创业本身就是先各种抄作业，那就直接把它抄到位就好了。

所以这篇文章，就是给大家看下这个朋友是怎么抄到位的。

先说清楚

不过，这里没有「一键复刻」，实际上人还是要守着，不断去看效果，给意见来修改。

我之前跑过几个案例，全都是这样：

[不愧是谷歌，出的这个MCP能一键复刻网站、改AI写的屎山代码...](https://mp.weixin.qq.com/s?__biz=MjM5NDI4MTY3NA==&mid=2257496452&idx=1&sn=72923e764b46e579877ef52343deb095&scene=21#wechat_redirect)

[GLM-5「全栈长任务」实测：3小时复刻TikTok视频生成SaaS](https://mp.weixin.qq.com/s?__biz=MjM5NDI4MTY3NA==&mid=2257498510&idx=1&sn=b0a077af20adbc10bbd4fa179851a376&scene=21#wechat_redirect)

只是说用这套逻辑，能更深度复刻，也更省事了。

废话少说，直接上教程。

![](https://mmbiz.qpic.cn/mmbiz_png/UQ9fsOliarQ8blLetaQSgFdUZEKTxSNaMQuIQZzd2vqlCCgTKDYXw3HOKE7XL7FZY9giboPicqwjH2YicoJicY6QvdskicO8hC6QPNJkU7083Z6Gc/640?wx_fmt=png&from=appmsg#imgIndex=4)

01

复刻三步走：前端外观、后端接口、模型蒸馏

这也是顺序，先复刻前端外观，这部分很好抄；然后是逆向后端功能；最后是把背后的模型和 Skill 定义蒸馏出来。

工具上用到的是 DeepSeek Harness、REA、Craft Anything

先简单介绍一下它们。

1\. DeepSeek Harness（简称 DSH）

DeepSeek 官方开源的桌面级 Agent 工具，主打「一切皆插件」。

用下来还挺爽的，DSH 基于自研的 Cordis 内核，把所有底层能力都做成了可插拔的插件，甚至支持 Agent 在运行过程中自己给自己开发、安装和卸载插件。

甚至还能把 Claude Code、Codex 直接挂进来当子智能体一起干活。

再配上自家的 DeepSeek V4 Pro / V4.1 Flash 模型，极高的上下文缓存命中率直接把长程开发成本打到了白菜价。

安装也很简单，直接去官网下载桌面端，或者在终端跑一行 `npx @deepseek-ai/dsh web` 就能启动本地网页端。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/UQ9fsOliarQ9a0wZdXaDGPiaDukkhOtaRMFCpdIMw3gdIoOjyd5jRDQwJtYOjmCZkzBhFAdhEyjhC2AL07j4ib0enicxobITPwnB5jKEKuebkWg/640?wx_fmt=png&from=appmsg#imgIndex=5)

DSH 子智能体并发面板

2\. REA（Reverse Engineer Anything）

GitHub 上 45.8 万 Star 的逆向工具箱，这段时间非常火。。。

它支持逆向本地软件，但逻辑上拿来复刻网站也没问题。连上浏览器后，它能直接把前端代码、页面结构和网络请求全扒下来，专门负责摸清原站的前后端逻辑，非常刑

听说通过 Claude、Codex 用它的话，会被封号，所以我才用的 DSH

![](https://mmbiz.qpic.cn/sz_mmbiz_png/UQ9fsOliarQ9LtiaZRQJazwuI0127tEfqyun6ru7rKZEFPvEmZPCaU8nibpB6QdvBPclRu7bGqTS2ZvFRpHTQvYw4V96Njk1ThUn22CNlYF13Q/640?wx_fmt=png&from=appmsg#imgIndex=6)

REA 开源仓库

![](https://mmbiz.qpic.cn/sz_mmbiz_png/UQ9fsOliarQibI1b4duceVRJzwWZv53yG4Ql95jtQ6FaxjicdjnWccJrswsVZZichphcm3icL5n5HtAHYHMS8FFtibKjZGhINvzxTGpXibu2WMBbQk/640?wx_fmt=png&from=appmsg#imgIndex=7)

DSH 里接入的 REA 工具

安装接入很简单（要求 Node.js 22.19 以上）：

开源地址：`https://github.com/morluto/rea`

如果你平时用的是 Claude Code、Codex 或 Cursor，直接在终端跑一行交互式向导就能自动扫描并配好：

●●●

bash

`npx rea-agents setup`

如果要接进 DeepSeek Harness，只需跑一行命令装好逆向 Skill：

●●●

bash

`npx -y rea-agents setup --skill --yes`

再在 `~/.dsh/cordis.patch.yml` 里把 `rea-agents` 挂进 `@deepseek-ai/dsh-mcp-client`，重启 DSH 就能直接调用它的 200 多个逆向工具。

3\. Craft Anything

号称是 REA 的升级版。

区别是，REA 只管调查不管写代码，而 Craft Anything 自带「调查 → 构建 → 验收」流水线。

开启 Deep 模式后，它会一边读网页结构，一边调用本地的 DSH 写代码，最后自动把本地页面和原站截图叠在一起比对像素差异，哪里不像改哪里。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/UQ9fsOliarQibMqMnJQicOkSz1Aic5FgVoUMXjJPPOSXLhULAG19k4pdR7X4Fvyp2MWIbZJ2zianAABuEBssEl3O7gMVuCb596F0hLx7icZmz7fWg/640?from=appmsg#imgIndex=8)

Craft Anything 桌面端

安装方式：去 GitHub 仓库的 Releases 页面下载对应系统的安装包（macOS 装 `.dmg`，Windows 装 `.msi`）。

装好后打开软件，在「设置 → AI → 构建助手」里选好本机的 Coding Agent（支持 DeepSeek Harness、Claude Code 等）

需要深度还原代码时把顶部开关从默认的「净室（Clean room）」切到「深度（Deep）」模式，再把内置的 `craft-anything-cli mcp` 挂进 Agent 配置即可联动。

所以它们大概是这么跑的：

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/UQ9fsOliarQibR1tHqVibgspl6NE2IxxKWYUhHMV1hhvPtLKMBI9cZ3ywWLfAEtibgLV0qIK6UOXxo3LzkHPKUJgicU3QbCMrMeWdgHTia0ykEGhM/640?from=appmsg#imgIndex=9)

三层复刻 × 三个工具的分工

02

实战：全栈复刻短剧工作室

这里最核心的是「写剧本 → 剧本医生 → 生成视频」的流程。

第一步：先抄前端外观，把死板表单改成富文本工作台

先用带调试端口的 Chrome 登录某梦会员，打开「剧本创作」页面，让 Craft Anything 抓取原站布局并驱动 DSH 生成前端代码。

首版界面出来后，我朋友逐项检查了一下，重点让 AI 修了三处交互细节：

① 输入框行内标签

选中的技能、画风和 `#时间循环` 选题都是嵌在文字行内的标签，删标签不能误删正文。

② 132 种画风封面

原站风格菜单是懒加载的，一路滚到底才抓齐

![](https://mmbiz.qpic.cn/mmbiz_jpg/UQ9fsOliarQib3yyttfxia8WvLiccFOczD6icKlrb38OiapwnGaRvfxBaUgRickIvcJP41plUZ2oiaB6ROeRAxNzzHqeQW4ULAZulZe4zRhM276rsKc/640?from=appmsg#imgIndex=10)

132 种画风封面全部还原

③ 16 项官方技能面板

把点开「技能」按钮弹出的 16 项官方技能（剧本医生、玄幻仙侠、都市男频、摄影增强、引用优化、表演优化、分镜打分等）连同搜索、分类和详情卡片一比一还原出来。

![](https://mmbiz.qpic.cn/mmbiz_png/UQ9fsOliarQicsWt04logA7kbsvC1JWHBOryiaPO2moEOAyfcdsCwDSJU5GLIibHjWgvcUOH4Q3qDAgiaCk7cdtkvAiag4Vum9MvFbY62cmWHlqIQ/640?wx_fmt=png&from=appmsg#imgIndex=11)

16 项官方技能面板

第二步：用 REA 逆向后端接口，把全套业务流程跑通

前端界面其实是最简单的，真正麻烦的是后端。此时就要用 REA 分析原站的前端代码和网络请求，把后端的运行逻辑反推出来：

1三视图剧本工作台：摸清原站怎么在「故事设定」「分集大纲」「剧本正文」三个视图之间切换和保存状态。

2对话与生成接口：抓出发送消息、流式回复，以及画幅、清晰度、视频模型等参数是怎么传给后端的。

3三级分镜结构：原站不是拿整集剧本盲抽视频，而是拆成「分集 → 15 秒片段 → 内部单镜头」三级结构，每个镜头单独绑定角色和场景参考图。

摸清这 26 个接口后，DSH 直接在本地用 Node.js 加 SQLite 数据库搭了一套完整后端。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/UQ9fsOliarQicia3rxwDdTsMnRPYvstW9l8b2lLibWOCVn1Hkel1IGp6RHaOkyHuN4p3AaVYobKOciaU5gl246yZ94OJBlshTSvjnz4urO5sMxmM/640?wx_fmt=png&from=appmsg#imgIndex=12)

创作方向单选问卷卡

![](https://mmbiz.qpic.cn/mmbiz_jpg/UQ9fsOliarQibauavfYVCHLJpHMe3t1hyibx58bMs8cjiaq2NPtTGYeXYOgx9ThlW51L7P53d6L0iat9xyOt2fO8PkuhA8VsJYSk96fick1R27ciao/640?from=appmsg#imgIndex=13)

故事设定 / 分集大纲 / 剧本正文三视图

检查了一下本地跑起来的体验，还是挺顺畅的：

输入一句话想法后，先弹出「创作方向单选问卷卡」；确认方向后依次生成故事设定、大纲与正文；接着拆解角色与场景图，进分镜工作台生成多段视频，最后自动合成导出 30 秒整集短剧。

第三步：逆向JS接口，把短剧大模型和 Skill 蒸馏出来

终于到了核心竞争力了：某梦自研的短剧模型和 16 个官方 Skill，到底是怎么写出爆款节奏、怎么给剧本打分的？某梦

这一步靠的是接口抓包 + 模型蒸馏。通过分析网络请求里的 JSON 数据，把 16 个官方技能的触发标识、输入变量和返回格式全部摸清，再把原站在「剧本创作、剧本医生诊断、按诊断修订、角色设计、分镜规划、摄影增强」等 12 个核心环节的能力蒸馏成提示词模板，做成一套本地管理后台。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/UQ9fsOliarQ9CwddBzHYCmLnXzzuTXznUgN7z85nhbHcBic99d6FNOWmQe0V9LYds0ibt08iaEV8nlZVlR94Wv0lDMIzWzI1seAoR1placO8gxM/640?from=appmsg#imgIndex=14)

剧本医生诊断报告

![](https://mmbiz.qpic.cn/sz_mmbiz_png/UQ9fsOliarQ902QgoFD8BxZayvqsyxbzvvnI3TnrPuDR6BWa0fPia3rYJVibxl9ZkHWgjLfwsdojho60nFvFLNqAibe7yP3QTA3eiaAibJfcCgibB0/640?wx_fmt=png&from=appmsg#imgIndex=15)

后台：12 类提示词模板与模型路由

在本地后台里，每个功能调用的模型（Gemini、Claude、Grok 等）和提示词模板都能随时修改，体验非常丝滑。

03

但现实没那么理想

实话

实操了才知道以上是网传的逻辑，不适合绝大多数小白，因为光是 dsh 的配置就搞死人，更不用说 dsh 经常做破环性升级，导致插件用不了。

我把朋友吊起来打了三天三夜才跟我说，实际上，最终还是用的 Codex 作为司令官去指挥 deepseek Harness 干活，还能修修bug

![](https://mmbiz.qpic.cn/mmbiz_jpg/UQ9fsOliarQ8D8Ax0OFUsgQ8F82USP1GIwsgI43DlzGibv4UI1xD3I5xMQGtMeaiaAJIchfPGOfRVF3vSkVLn5bU7icpPkEq02jxUQYPDx7tEME/640?from=appmsg#imgIndex=16)

甚至蒸馏剧本大模型这件事实际上是claude做的，它设计了多个问题直接把1000+元的6000积分用完了，调试出来了背后的效果

还逆向找到了json接口看到了一些背后的提示词，太刑了，不建议这么做

但如果你感兴趣的话，可以留言

我再接着吊打朋友，让他吐出来蒸馏模型的实操方法论