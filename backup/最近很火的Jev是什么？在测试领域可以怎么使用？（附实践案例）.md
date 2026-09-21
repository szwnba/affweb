最近有个AI热点概念：**Jev**，一款专门用来做判断的 AI 模型。

它和 ChatGPT、Claude 这类通用大模型不同：不聊天、不写代码文案，专门给程序做决策判断，API 调用后直接返回代码可读取的结构化结果

核心能力：

*   **Noul 是非判断**：输出 0~1 概率值，做二分类判定。例：校验接口返回是否符合预期。
    
*   **Choice 多选判定**：最多支持 255 个自定义选项，选出最优结果并附带置信度，适合 UI 自动化选择页面元素、判断业务分支。
    
*   **Score 分级打分**：2~10 档评分，用来评估风险等级、缺陷严重程度这类有强弱差异的场景。
    

最近有些测试同学对这方面感兴趣，我花时间调研并简单实践了一下，整理了这份**上手教程，以及分享一个UI 自动化方案基于 JEV 改造的案例，**感兴趣的小伙伴可以学习了解下。

获取 apikey
---------

### 方式一：官方登录（优先）

访问：https://typesafe.ai/ 进行登录

登录后访问：

https://console.typesafe.ai/keys

左侧菜单栏进入apikeys，点击create key 创建 apikey

![](https://mmbiz.qpic.cn/sz_mmbiz_png/U0CAj2sKmUjhFUBn6u9SoUFmtaVNfiaV4j4eYpSW2dIG5SgusG8KahZhK9PDX4x2Ad0MGiaMHiciam8ibSNafvgVRhW9FDRI1uqdiacC1ic0ZWjwco/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=0)

填写名称，点击创建即可

![](https://mmbiz.qpic.cn/sz_mmbiz_png/U0CAj2sKmUgnzxdmJib4XGmOCibooJkOUL79GDYqLficzImIlT5SXFH6iaviandzqHmBeMyfjbuibVu33rIftmSMxXYjKLeRGkfrQCcYAKJHRrtt8/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=1)

之后 apikey 记得保存一下

不过有时候可能会失败登录会失败，如下：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/U0CAj2sKmUjoy11gibia9CTZOQukFxVq4dRIjiaFZ9wEFq0A1Pa3ZtcGEeicy9G4vp8SaG0PticqNJjknt0QcwwKSdodoLv14piasoKotJd8L5eibk/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=2)
![](https://mmbiz.qpic.cn/mmbiz_png/U0CAj2sKmUhNUEVZFYr9xnFhntD1HU4jMcoibvaP0xydn6ge6u6GzM60rzvuROkaRKekubM07kicx3XvpgJIR5zYIMUUIZkEBvM9ZYog4Kaiak/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=3)

如果一直失败的话，则得考虑使用 openrouter 的方式了

### 方式二：openrouter

#### 1、获取 apikey

访问：

https://openrouter.ai/~typesafe/jev-latest

![](https://mmbiz.qpic.cn/sz_mmbiz_png/U0CAj2sKmUh81ha2ibWapfHPpArmfo2ZvT6rmhRqic0IGyyvwo9b3HpKZXX38ppqf94KjmibQ7swgdWfwh1iccNh0t2s0icHYdnJdwkKMJPyUsdw/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=4)

点击 new key

![](https://mmbiz.qpic.cn/sz_mmbiz_png/U0CAj2sKmUgFZCLdS19wmkibkkzUqrcajHPJzC12jqUkIlHPFvyo7r5juFwWqgEsibqoRr1RCTWSz5k1ibic4JaU6uPVMKVTVurYhxvq8pACnvA/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=5)

填写名称、过期时间、费用限制等等，这里可以按需填写，之后点击创建

![](https://mmbiz.qpic.cn/mmbiz_png/U0CAj2sKmUia89CHB8pvk7bzVre7MHW4bljjLUEFmEbOLbU3Ih62YiboBI4Tx2vazSxrCCYIHEOwkPuZllMdCQicITwCG1SfZJLEcVYnO5htwM/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=6)

保存 apikey

![](https://mmbiz.qpic.cn/mmbiz_png/U0CAj2sKmUhSHnicTBA37TX9q0NzmWK8jKo2tJzuTjAdE29uXT1a2VzlTr28oDShcyLUJGraIkiayV8Bap776dJ4fbnQWicmVLxD5zWbfrIA50/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=7)

#### 2、费用充值

*   点击 credits，点击 add credits
    

![](https://mmbiz.qpic.cn/sz_mmbiz_png/U0CAj2sKmUhwVlbLqibSEmW5Cic1WWFibwLKibBSichBzyZs0rRrX7SNIv0pl3XOp9YeKRMymcr6SKIKWVG9wMuPhzzAYHBjib5aXn8utUCWNTSeA/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=8)

最少只能充值 5手续费，手续费还是挺贵的

如果需要使用支付宝的话，可以点击

![](https://mmbiz.qpic.cn/mmbiz_png/U0CAj2sKmUiaEEdMp1L1PkC3K6MXv0ClGdFMRSB3j4FVDqeUgN2ly7HfIbpZ5ibPUyDDcn9phgxgYQMmLm5bJy6LiamNhxKR5sk10RWvib58JIU/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=9)

充值成功之后，就发现 OK 了

![](https://mmbiz.qpic.cn/sz_mmbiz_png/U0CAj2sKmUgd948F0sv2bd8c2q8vibm9SgR4YbCWHBhEpd5iaV4OUEe4l247jsWrRpeEibDcLcPyDhqTsictMytzOvt7nyrsJeJWtg3pibchTVoU/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=10)

案例 1：官方 skill & 简单案例实践
----------------------

### 基础介绍

这是 TypeSafe AI 官方出品的 Agent Skill（SKILL.md），专门给 Claude Code / Cursor / Cline 这类编码 Agent 使用，让 AI 自动学会正确调用 Jev（System One）决策 API，不是 MCP 服务，是Agent 指导能力包

目前在github上，已经有 1.4k 的收藏

![](https://mmbiz.qpic.cn/mmbiz_png/U0CAj2sKmUiaDvHQWVcfpQicB2xOfEwPvn0n2s1icVibmkWuTn3RH0nloCAvCib4XzAibH1rIbicic4mAQfDO2aGNJ0iaUPw3gVhEXvCxnEtNuYkRl0w/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=11)

当你在 Claude Code / Cursor 写代码时，加载这个 skill 之后，Agent 会自动知道：

1.  Jev 只有 3 种原语：`Noul`（0~1 概率是非判断）、`Choice`（多选一）、`Score`（打分）
    
2.  怎么构造 `state`、`questions` 结构
    
3.  并行一次性提交多条判断（核心特性，jev-ultrafast 就是靠这个）
    
4.  正确解析 Jev 返回带置信度、概率分布的 JSON
    
5.  写代码时自动引入 typesafe-sdk，生成合法调用代码，**不会写出错误的 Jev 请求**
    

### 如何使用？

#### 1、安装skill

方式 1：Claude Code（推荐）

```
claude plugin marketplace add typesafe-ai/skillsclaude plugin install typesafe@typesafe-ai
```

方式 2：Cursor / Cline / 其他兼容 Agent

```
npx skills add typesafe-ai/skills --skill typesafe-ai
```

这里我们以 cursor 作为案例，打开终端，输入 y

![](https://mmbiz.qpic.cn/sz_mmbiz_png/U0CAj2sKmUjdlZrNANz79w3rThUkMRrGQ3b6z55mt7aPwesgEllbKysTL6RCaMSu3oCYiaPn5tO5Fvqms5bvDFCv1sEzmlb5jbHGL8iadD8fw/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=12)

之后按需选择对应的 agent 即可

![](https://mmbiz.qpic.cn/sz_mmbiz_png/U0CAj2sKmUiaGKaDCUhk3xiaVQ5kTnibWvIOKmOibDovB44yTFDddv0RYd707U7EhyDmicm3ux8zqNRzgAV8Pianfkar4O24icgc7FiaM3iclU2zzMTw/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=13)

之后就生成了 typesafe-ai 了

![](https://mmbiz.qpic.cn/mmbiz_png/U0CAj2sKmUia7TlVvQsXk8RhCIth7jQAZFZWJRnrUw1YjmwOGzEgrAbz2wk1vuf4uWg0HzfqdQib5p6AqppK0cgNiaxKCaqYT0qJ9o1aXiaNSB0/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=14)

#### 2、apikey 配置

这里注意的使用官方配置的 apikey，不能使用 openrouter 的

```
export TYPESAFE_API_KEY=xxx
```

在终端中执行：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/U0CAj2sKmUhheutUDdn6gphl1VuXrznFgJ3jM6sic8pTsTtNvbuwXJctMxqfoEYpqGOh8Q6dMwQrZDU4hdWiac7MHScttiaLa4nJrVrPSZdaGg/640?wx_fmt=png&from=appmsg#imgIndex=15)

#### 3、案例验证

在 cursor 中，输入：

![](https://mmbiz.qpic.cn/mmbiz_png/U0CAj2sKmUgXIeQNialicahctPic7Pkl9RSQTqPXWm68eWIPv3FMHHIqicuOqRTfsQNPYic6ZEhP8UMrYfTAJVPu1VDPUZOOPJsh5TWVjWwiaPaEI/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=16)

执行过程：

首先是它会利用cursor 自带的浏览器功能，去操作界面，不是每个步骤都会用到 jev 的

![](https://mmbiz.qpic.cn/sz_mmbiz_png/U0CAj2sKmUguqr8Y84uTictNyreBawoFtqRKPy0DvJaNDgCEaicVQj5yTibSiat3GdU3qTGCfPicgxN7K8ueWiauNH21c2YcRo7ekwiaEDycE0dibog/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=17)

那什么情况会用到 jev 呢？ 在需要做是非判断、打分、或者选择时

例如：在这个案例中，搜索 raina 测试的时候，可能会搜到很多的用户，就要做判断，因此就用到了 jev 了

可以看到在 cursor 中，它会构建 jev  api 命令去做筛选

![](https://mmbiz.qpic.cn/sz_mmbiz_png/U0CAj2sKmUgSpSkfLpicmpLyR8qbEYCrmoT7ic29vze3bXicrwX1hBCnwnDGibiaY0hY2uIicib9gUKkxY9GbgU8JBceicErVpW9k4LuDW1Cxf7lNic0/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=18)

从多条数据中，筛选出最终的目标，并且输出置信度

![](https://mmbiz.qpic.cn/mmbiz_png/U0CAj2sKmUiayDEMbFzayJz42c2031WKTkyz9JY7cvzw2rOfE16FNXGVUpCrhQCMbqAuYwjZ3RJlibyic5edQIPJkJRlyhfUP1h5kCYMHpduU0/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=19)

最后输出结果，符合预期

![](https://mmbiz.qpic.cn/mmbiz_png/U0CAj2sKmUj9aRRUiciapkX8DxMhSjH6KUoqT93m7syLkPJ2GmAeqp4zzmgwhwq0QTdetdOQVLYOVp6Ptja6HriavElV1mCASMMwkCT37yozfs/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=20)

案例 2：UI 自动化方案基于 JEV 改造
----------------------

前面我们有讲到，在测试领域，我们也有不少需要做判断的场景，之前我们一般使用大模型做判断，成本相对高、速度也相对慢一些，这里我们就可以采用 jev 的方式去做改造了

### 改造思路

之前我们开发过一套 playwright+midscene 双策略进行 UI 自动化的 skill 工作流

![](https://mmbiz.qpic.cn/mmbiz_png/U0CAj2sKmUiatEvY1TDxRvVSwUYorKSh7ttgIeibADXUTbqNO6WCrbJiboAicJeYyqW1LwicaYag5paBvlCNUZqlibTv72M8DyHOLGNUZ4qh2kfIc/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=21)

在这套 skill 中 有不少过程是需要对多个选项做决策的，而这个就比较符合 jev 的特性，那我们看看有多少内容可以基于 jev 做改造

则有下面的改造

1、探索skill：snapshot 后可选调用 Jev，用于控件选择、下一步动作、计划完备度与 locator 风险判断；

2、修复skill：修复前用 jev 对失败原因做判断，判断大概率属于什么问题，然后采用不同的处理方案

> skill 获取方式见文末

### 实操步骤

#### 1、环境变量配置

创建一个.env文件，填写 jev 的 apikey

![](https://mmbiz.qpic.cn/mmbiz_png/U0CAj2sKmUhnVCTn0cXU82grsZYQjEBw7jVls5PBlkyKDStYQITUVENvzicicWc3LiaEZJsz06XWMBMQt2RbAC5p97ibRKszSXxiafTHUaHyDqI8/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=22)

#### 2、探索界面

![](https://mmbiz.qpic.cn/mmbiz_png/U0CAj2sKmUgMKQeKaKVdFxCkWnM34YGjv1iatSF3vrN8Lt9cl7a3EkQJWKwJe39Mefv1icmt1rbwztEZyRGVcE7icqgGyLn4wMVfU8BqicnNXyo/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=23)

在执行过程中可以看到，部分流程会去调研 jev 进行决策，决定操作哪个元素

![](https://mmbiz.qpic.cn/mmbiz_png/U0CAj2sKmUgDXs8sTIDALKk2EQbHHeKBw26icM5wArx0RhDNmG1IevpoBwvN685z9KiaDCicfCIfsiahicAdm2apTlrec1fRW4B0lxkbSicOA7MJs/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=24)

最终产出计划文件

![](https://mmbiz.qpic.cn/mmbiz_png/U0CAj2sKmUhxyzicqE4Tibickq3arTbCWATvQ9iaDETSW9jct2NJ9ITvCzMZpNQD7vF039tzH40MyeBD4Ij98QDaFcgSGn8OgicrUV7LhEvRHkbg/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=25)

这里可以检查一下计划内容，如果没有问题的话，可以进行下一步，生成代码

#### 3、生成代码

输入：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/U0CAj2sKmUiaBalUKLNyA5gflWEfEhu4sE7Y3PqaJpAKb5ickUv9jTVicesL4gnMr2BMNUCnfcNx0OiaQD10flWk6OSqI9JYj3PVJdg23RaRWDY/640?wx_fmt=png&from=appmsg#imgIndex=26)

产出代码

![](https://mmbiz.qpic.cn/sz_mmbiz_png/U0CAj2sKmUhojTooADOaRBkXe69FJC157sPIlWdyGH3zrlKkb1fLAD9loqYOL1JicISsqKI4cvbJelw3V12arXToljZ1pShiblX6jnZPNFDpY/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=27)

####  4、执行代码

![](https://mmbiz.qpic.cn/sz_mmbiz_png/U0CAj2sKmUjFkXNlRznA0osrWiaPk6K5VibTsnr1qDXia2R5uJcbxaoRUDRd69ricaO6nbQZQ9yTRfc3ic2N2YNLrfRBjzwSyCNvRyH2l9a93e0I/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=28)

#### 5、修复

出现问题，则走 skill 做修复

![](https://mmbiz.qpic.cn/sz_mmbiz_png/U0CAj2sKmUhOqq0bJttSWaKFUJaMeicw6tzkaoutibtKp9dDQKzPpx40jYpQbyqGtBFFA9icOgnh5K6NnPKCJg8BoG7a457Ze9X65AMmdXvyHM/640?wx_fmt=png&from=appmsg#imgIndex=29)

这里会使用 jev 判断失败原因，是否能够直接解决

![](https://mmbiz.qpic.cn/sz_mmbiz_png/U0CAj2sKmUhQvia9jcw5zafhRicKU9KrzMZgMialxibCc7MliayKOx6Uzu2yLSt7viczzxOIc9SnYmqZ9f04UZXCc1NwicAgT0Tib62tYExvRvzHWLk/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=30)

最后多次修复代码，如果没有问题的话，就可以直接查看报告了

#### 6、报告查看

报告列表

![](https://mmbiz.qpic.cn/mmbiz_png/U0CAj2sKmUhSJohw78uAU9tHvWU9ibIoVE94cljFowuxAv2ia4U9jycHK3GnYfvNQT1iaWqxD7DNx9m9m0Bwib9NyHXjyB3gF20UbhGhbwkNHNE/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=31)

执行过程中的视频，可以用于判断是否正确

![](https://mmbiz.qpic.cn/mmbiz_png/U0CAj2sKmUgGiaTLC3ugOVqhbRuTPiajMOIqrSckPhQywSZhlc2hazurZEmPhR59Y1ZLGSqjEGOn98vCGGxrbKiaKicls4P9zrxVlPIL9518QY4/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=32)

trace，记录了每步操作的记录

![](https://mmbiz.qpic.cn/sz_mmbiz_png/U0CAj2sKmUgU5ledSuEwgLhq2ts6dzEicH5hDIeFfctQdm0DG9TCkfuqgPHmPPwmLf0KibwBrwAvaoLDXWmqePXqRibeTFo2qKQEIwicoN85D68/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=33)

使用下来，jev的对于决策方面是具备一定的优势的，速度快且成本低，效果也相对不错，此前完全依赖于大模型进行推理和判断，而 jev 面向决策任务的专用小模型，但是目前我们还是可以观望一下

也许各大模型厂商会参考 jev 做升级和改造，不过我们还是可以基于自己agent 项目或者 skill 等等需要做决策、判断的逻辑接入 jev。

* * *

以上是今天分享的内容。Skill 包以及更多AI赋能测试的实战教程均已整理在**[【Raina的AI&测试实战圈】](https://mp.weixin.qq.com/s?__biz=Mzk2NDQzMzMwNA==&mid=2247490206&idx=1&sn=6bba82533e71931c8a31d56355b5ef9f&scene=21#wechat_redirect)**知识星球，跟着步骤操作就可以上手。感兴趣的小伙伴可以了解下哦～