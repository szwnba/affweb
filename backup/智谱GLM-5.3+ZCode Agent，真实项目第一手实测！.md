![](https://mmbiz.qpic.cn/mmbiz_png/UzsCVuwOnvTQZiabx3a4fuRAw29eV1hOnebXQ85AdnQiadUnnmRNh786JQIKxuHY26X6NplHDibyKQXOgePicSg2pByl3Kog0VYCvSlFkYLWHQU/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=0)

上周 AI 圈的火药味，大家应该都闻到了。

8 月 13 号，ZCode 全面升级；紧接着，8 月 14 号，智谱发布了最新旗舰模型 GLM-5.3。

一天之隔，模型和 Agent 工具同时出手——智谱这是把"组合拳"直接明牌了。

其实在这之前，很多小伙伴用 GLM 模型，都是借助 Claude Code、Codex 这类 Agent 工具来跑的。模型是智谱的，壳是别人家的，中间还隔着一层协议转换，多少有点"错位搭配"的意思。

我在之前的文章里反复提过一个观点：**原生模型，就得配原生 Agent 工具，才能真正发挥它的效果。** 

道理很简单：模型决定能力上限，同一个模型放在不同的Coding Agent里，实际表现可能差很多。自家的模型配自家的 Agent，从上下文管理、工具调用到缓存优化，都是照着彼此的脾气调校的；别人的工具再好，那也是通用尺码，不是量体裁衣。

01ZCode 是什么？
------------

在实测之前，为了照顾新手同学，还是先花两分钟说清楚：**ZCode 到底是个啥**？

一句话：**ZCode 是智谱推出的智能体开发环境（Agentic Development Environment）**——名字听着挺唬人，说白了，就是一个"你动嘴、AI 动手"的开发工具。

![](https://mmbiz.qpic.cn/mmbiz_png/UzsCVuwOnvR7A4ZOibsVH4CXgVurEgWxP2xyN30jcUUsibjNrERzH4Zo3PpH8xenw0C7tk2VIGqcajd3ib516HKmj8kMnccbZ81aemMlYN4TNw/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=1)

传统写代码是这样的：你打开 IDEA 或 VS Code，自己一行行敲，补全工具帮你加速输入——人始终是主操作者。

到了 ZCode 里，玩法变了：**你用说话的方式描述想要的结果，AI Agent 自己去读代码、改文件、跑命令、检查结果**。比如你说"把首页样式改成浅色极简风"，它会自己分析项目结构、动手修改、跑起来给你看效果。

你还可以同时开多个任务：一个修 Bug、一个补测试、一个分析代码，互不干扰；改完再到 Review 面板里看 Diff，确认没问题再合并。

**那它和 Claude Code、Codex 是什么关系？**

同一个物种，不同人家的孩子。

Claude Code 是 Anthropic 出的，Codex 是 OpenAI 出的，ZCode 是智谱出的。三者定位一样：都是给大模型装上"手脚"，让模型能真正操作你的项目文件、终端和浏览器。这类工具有个统称，叫 Agent（也可以叫 Harness）。

> 模型决定能力上限，Harness负责上下文管理、工具调用、任务调度、缓存和结果校验，决定模型能力能发挥出多少。

所以一句话记住它：**ZCode 之于 GLM，就像 Claude Code 之于 Claude**。以前你借别人家的壳跑 GLM，现在，智谱自家的"原配"来了。

02ZCode+GLM的最佳拍档
----------------

现在，模型（GLM-5.3）和 Agent（ZCode）都到位了，组合终于凑齐了。

凑齐之后，成绩怎么样？官方给过一组对比数据。

在 Z.ai Code Bench 上，智谱用 GLM-5.3 分别搭配 ZCode 和 Claude Code，跑了同一批任务。结果显示：**同一个模型，换上 ZCode，任务整体通过率比搭配 Claude Code 高 2.39%**。

而且，ZCode对上下文缓存复用进行了专门优化。根据官方提供的多款Coding Agent测试数据来看，GLM在ZCode中缓存命中率超过98%，意味着，可以让更多重复上下文命中缓存，以更低的积分系数抵扣，简单来说，比之前更省Token了（也就是更省钱了）。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/UzsCVuwOnvTWAzXxMQokXgnYeOEdylLVosZVeEgH67XaXzzkuYkzn3RPicafsyh2bhW4FOAEfVdQj62ZSTxNR3zaeR6W6pHXUvhicl9Gso3aI/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=2)

2 个多百分点，听着不算多，但在跑分这件事上，旗舰模型之间的差距往往就差在这几个点上。

当然，跑分归跑分，官方数据终归是官方数据。好不好用，还得自己上手干一单才知道。我平时用 Agent，最关心的从来不是"单步回答聪不聪明"，而是三件事：**任务能不能不用人盯着就跑完、改出来的东西能不能直接用、这一趟下来要烧多少 Token**。

所以，本篇教程，我们就用真实项目做一次实测——智谱截止目前最强模型 GLM-5.3，搭配自家研发的 ZCode，从页面重构到细节打磨，完整跑一遍全流程，看看这套"原汤化原食"的组合，实际能打出什么样的效果。

03下载安装
------

介绍完了它是什么、官方成绩怎么样，接下来就把它装上，准备进入实测环节。

ZCode 的上手非常简单，整个过程就三步。

**第一步：下载客户端。** 

ZCode 目前提供 macOS、Windows 和 Linux 客户端，打开官网，根据自己的系统下载安装即可：

**下载地址：https://zcode.z.ai/cn**

![](https://mmbiz.qpic.cn/mmbiz_png/UzsCVuwOnvSNBCUibhRZcRbne9vNtS4w1uX9VwqknrSV6VVqrfSVRQiaUaZsoraOicTyrvZUsiczLkNBAlXZe5gfcyjwIiaVmIVglyzjf9gdsZ2o/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=3)

**第二步：登录认证。** 

安装完成后第一次打开，会先进入账号连接页面，完成登录认证。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/UzsCVuwOnvQIlEwCrBm36ib8Kic7ibMx1ohfT8uZs8L4C2seJboseJQniaZJMVQzehQRtefxOBSPjm67oda6UC3R2Mg3XXFBoZNl7zjBQSia4bBE/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=4)

连接方式很灵活：国内用户可以连接 BigModel 账号，如果已经订阅了 GLM Coding Plan，ZCode 会直接使用账号里的套餐额度；也可以连接 Z.ai 账号，或者干脆填一个 API Key。

**第三步：开用。** 

认证完成后，打开工作区、选好模型，就可以直接下任务了。

这里必须夸一句：整个过程**零配置**。想想以前在 Claude Code 里跑 GLM，你得先折腾 Base URL、再配环境变量，一顿操作下来耐心先掉一半；ZCode 这里登录即用，对新手可以说是零门槛。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/UzsCVuwOnvTJNLAEMSJskrOFiaJ1vetibWLeFucCfW9RQr6gLxiaAPoDHJvjqwVatUcmHT9X2N6AIibt9sc2YnPkaHZzEM8kuIib4jjeffne3Cfk/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=5)

除了本地文件夹，它还支持 SSH、WSL 和 Docker 工作区——也就是说，远程服务器、Linux 子系统、容器里的项目，都能直接接管。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/UzsCVuwOnvSMBsSibg3VIhUesXmFWc9lAc4ggItQHEduGQTUHHBzacgS4g8dVgLjRm92bTwxtJbMKzeuUfPexFXptOCx7MOdAwqYDN7oJE3c/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=6)

环境就绪。接下来，我们就正式进入实测环节：用一个真实项目，看看 GLM-5.3 + ZCode 这套组合的实际战斗力。

04真实项目实测案例
----------

先交代一下背景：这篇教程，其实不在我的写作计划里。

刚好这几天，我在重构自己的几个网站，索性就想——与其专门造个测试项目跑跑分，不如直接拿真实网站开刀，顺手验一验 GLM-5.3 这个新模型的真实成色。

于是我干了这么一件事：**同一个模型（GLM-5.3），配两个不同的 Agent，分别重构两个真实上线的网站**——

*   • **Claude Code + GLM-5.3**：重构了我的 AI 测试开发导航（`https://www.testfather.cn`），大面积动了三十多个前端页面的样式、布局和处理逻辑；
    
*   • **ZCode + GLM-5.3**：重构了快捷导航（`https://www.kjdaohang.com`），也是本篇的主角。
    

这正好凑成了开头说的两种搭配：一个是"借别人家的壳"，一个是"原汤化原食"。

本篇教程，主要以**快捷导航**这个项目的重构过程为主线展开。

提前说明一句：这不算严格意义上的测评——两个项目不一样、任务不一样、基线也不一样，不满足对比实验的任何条件。所以你不用纠结"到底谁更强"，把它当成一份真实项目的使用记录和体验感受来看就好，重点看 ZCode 干真活时的表现。

### 开工前准备

1、在开工之前，你起码得先要一个帐号，最好是购买一个智谱的编码套餐（划算），我自己是买了Max 包年套餐，也是目前智谱编码套餐最高级别的。（买的比较早，当时花了四千多）

![](https://mmbiz.qpic.cn/sz_mmbiz_png/UzsCVuwOnvS9tAqejWB5LHBDwuo5xwTibTZOcgDoq5GexMsUZibRVLVOvIGrQmlbphFWHOQOg6nprzXd4H097Wu1dMaV8FQ3BCicVmYCGDRkuI/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=7)

2、编码执行前，查看一下当前用量（当日用量4%、当周用量15%）：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/UzsCVuwOnvQIM749ZKkQ29qwDcafXVclULnMqPAtaNcYdibHFicGQyyfUC8sLbDQqdW4Ybv7f0J1iaPZVQPSNglMicUB3kS6FiccH1dbTmY5mVpI/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=8)

3、先上「**快捷导航**」重构前的效果图：

![](https://mmbiz.qpic.cn/mmbiz_png/UzsCVuwOnvQvDYoxVWmTMGSObia4qpY45M2iaMwJNThTXgsIriac47iaUOqiaF48o8KPhVG2I6hvH8dIOdETD6y2SxenFPrbmIIxZeCVsrHR6mog/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=9)

这个页面，看着是真有点不忍直视——经典的蓝紫渐变、圆角卡片、居中大标题，一眼就能看出是 AI 生成的，满满的"AI 味"。

说来也有点讽刺：这个网站本来就是 2025 年初我用 AI 开发出来的，上线之后基本就没怎么动过。毕竟它是个非盈利的便民工具，不图赚钱，有得用就行，要啥自行车。

但最近用的人越来越多，天天有人开着它找工具，这张"AI 原生脸"就有点拿不出手了——用户体验这块，终究还是得抽时间拾掇拾掇。

刚好，这次 GLM-5.3 + ZCode 的实测，就拿它开刀。

4、正式动手重构之前，建议你先想清楚一个问题：**你预期的效果，到底长什么样？**

当然，你也可以当甩手掌柜，让 AI 完全自由发挥。但我的经验是：目标不明确的重构，AI 容易反复横跳，改十几版都改不到点子上，纯属浪费时间和 Token。

所以我一般的做法是，先把我的要求一次性告诉 AI，让它先出几个页面效果给我对比，选定方向之后，再正式开工。

比如，类似下述一样，将网站用途和当前存在的问题，以及期望的效果和要求发给AI：  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/UzsCVuwOnvRfd4yUw1Bb4I9JD1j3MSoBAE1m5otRgmZjJoANetnNDxqueXII9yoHlBdUegzgcsjyt7jOjprBaia5O9jyLP4iaT1lbpPp1ySX8/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=10)
  
很快，AI就给了几个效果图，让我挑选：![](https://mmbiz.qpic.cn/mmbiz_png/UzsCVuwOnvSHqIUNYSFCibDjI5lNsoiaib3SI63sNiab7mpvbDiaYNSDgDOEC4ic2C0YU9AVNibgXuXFyOXSaiaiaibCDjibEj6hO8VibQQ4BsqtQdauQbc/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=11)
  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/UzsCVuwOnvRibicCHWIzMAZv7ibJc0xBBaBHjuHVibQlIjER3lWeZr6AfiaS6SicbjSJw9UhEpWlCYgzozUYibqaCMVHNR5OCGAlLzf67NClkH7ZC8/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=12)
![](https://mmbiz.qpic.cn/sz_mmbiz_png/UzsCVuwOnvRGzdhfZzo6zGn6w7q2XhR7JsJ80t4aIvsPmVqw0rYXMJmggWqicIYL3SaxN4fQ2d7atJWcVBQMjTe9erHEYb58Ydnfwf6g3ems/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=13)

选择一个自己更偏好的，或者如果都不满意，继续优化出效果图。（比如，当前我选择的是第三张效果，勉强还能接受）

5、除了上述几项准备工作外，最重要的一点，就是在改之前，需要先将当前项目代码提交到git，哪怕后续重构改坏了，也能很快撤销还原。

### 重构首页

打开ZCode，关联项目工作目录，将上述自己挑选的效果图示例（html）文件作为上下文添加进来，选择模型为GLM-5.3，思考强度选择高，输入下方提示词：

`当前的前端首页为蓝紫色，样式不太美观，且看起来太过于AI味了，请帮我对前端首页进行样式、布局重构。整体效果可参考附件所示，注意要保留网站底部栏。`

![](https://mmbiz.qpic.cn/mmbiz_png/UzsCVuwOnvSp6Mrlic2V8eBhouk4V3oz1yH2ic4W1kc8TXicicLql2o8a8rnuKsFW96RN7JONibBHY0TA7KpiaCFXxTvtO6gRt0zSyiafb2lpWqsYQ/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=14)

收到提示词后，ZCode会先来了解一下项目的整体结构和当前首页的实现方式，然后参考附件的风格进行重构。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/UzsCVuwOnvQuAobvicKTn944BNn6JD7MxMoWXDXLynZAMxfZkVoDlSicicU5p8nyNibdUCfl0WUmBA0vvByCgaEpRI16Pakn0HECZicGTJ6XtE5E/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=15)

ZCode的检索速度还是挺快的，它会先获取到，这是一个 Vue 3 + Element Plus 项目，当前蓝紫色来自 `App.vue` 中头部/资讯栏/搜索区的固定定位渐变背景，参考稿是浅色极简风（浅灰背景 + 白卡片 + 细边框 + 少量靛蓝点缀）。

整个过程大概花了4～5分钟左右，首页就重构好了，并且完成后，会在右侧自动打开内置浏览器预览对比效果。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/UzsCVuwOnvQxmFKGAjTibzEPnHN97lCIyJ14oDZNSRnAZalb9bTYEtXiaQ56ldL3SXE5Tzv1MN1AtOeIssQn7yIebD9m8H4OaaZvSiaDD3x6ro/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=16)
  
但，第一轮修改完成后，虽然首页是差不多复刻出来了，但首页还是有几个我不是特别满意的地方，比如：

*   • 页面整体配色
    
*   • 首页标题栏样式单一
    
*   • 公告栏内容不显示
    
*   • 搜索栏站内下拉列表显示灰色背景和搜索栏整体看起来割裂。
    
*   • 工具分类菜单样式不美观等。
    

这里为了测试它的前端设计和审美能力，我特意对上述的问题没有增加过多补充，让TA自己判断和发挥。将上述问题发给ZCode，让其修改。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/UzsCVuwOnvShq7ahia2pL8gBiatbGaYVpIrL3vibv92L9LnzQa9RKlpAficicVgeXpd4cFzicMrKQakOC3YeYibcSBtLfIhTDQGExr7tAqTW983y4w/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=17)

第一轮，优化后的效果：

![](https://mmbiz.qpic.cn/mmbiz_png/UzsCVuwOnvTWxtrp6ez3ibyVUZtDibiayibeeCQLOIMDwHjpjPysBZZpBYIaOrW092af3Ouy35R8Kodqck4xZjukxmca3lAo3grMCXBbuI41hoU/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=18)

其实改到这里，首页中大部分问题和效果已经达到我的要求了，虽然还有几个地方可以继续优化，但不着急，我们先把其他几个主要页面优化完成后，再来整理修葺细节。

还有值得说一点的是，ZCode在每次执行完任务，进行测试验证时，都会进行截图和预期结果比较。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/UzsCVuwOnvSuic9VMSFNvtLIrrJlymia90YA6iaQm5t2GbW62dBQSXzDyC957WUTEs5yVswgxev100yArC5YibwS4AdRx6SdibBibAE5vhMNSm8Lg/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=19)

### 重构最新上架和最受欢迎

重构其他页面时，我的建议是新开一个对话，这里，可以参考首页重构的方法，对最新上架和最受欢迎页面进行优化。

提示词如下：

`请参考附件网页案例效果，帮我对最新上架、最受欢迎两个页面进行样式和布局重构。`

![](https://mmbiz.qpic.cn/mmbiz_png/UzsCVuwOnvQ8qJ2nEql3pnPElwEHnGib41dMviaAjo93fSWVLnf1Hic9PaM7SGrVOz8zWQDSZXOKopbE9Ly6MqOx0sdMia0VDCQnCqW0ibmgibhqs/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=20)

改代码速度很快，不一会两个页面就重构好了。

![](https://mmbiz.qpic.cn/mmbiz_png/UzsCVuwOnvQvS7RldTHib0bs0Hzahh0t3fckiaSf40cAT5Jw6ibhojpcbRmB3pcCZWymibcBOPdErzLibs7odQmialFM6aUbtumlaqicoht6fpZytM/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=21)

最新上架效果页：

![](https://mmbiz.qpic.cn/mmbiz_png/UzsCVuwOnvTYib29c2NsiaxcmGXcLvSOPd7feTDVLmgqjPF79ncxa3NpvQUhMt4NqtRHFpZibp9gI70ibNM7zwmjn4iayJuhBhGU44bynyZ6icop8/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=22)

最受欢迎页效果页：

![](https://mmbiz.qpic.cn/mmbiz_png/UzsCVuwOnvTbooukPQRRxK2iclyROc9un7tsC5Cw3WvxEY8eR4ByoIrNjgEO4VSHK1K3hzTClCmuZ8JwMzXachqpYaSq4PiaQiajQzpd8Y2k7g/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=23)

还是一样，修改虽然完成，功能也都能用，但AI毕竟不是你肚子里的蛔虫，有些细节如果不满意的，可以继续让他优化。比如，这里我让它优化了几处细节：

*   • 最新上架，工具卡片上，增加NEW.xx小时前或NEW.xx几天前的角标。工具上架时间如果超过一个月则不显示角标。角标样式效果，参考latest-v1.html
    
*   • 最新上架工具卡片上，直达链接按钮、标签样式，请优化，可参考latest-v1.html。参考图效果如下：
    

![](https://mmbiz.qpic.cn/mmbiz_png/UzsCVuwOnvQViapbiax1icS6FJq5UiarWznY5vTQcfM8VOL2nbicozkvrnt9Mz5gYibAicSCwDmJcV4ke35HCINaVibosoC95CDz0BT4sHEcUNhjS4I/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=24)

*   • 最受欢迎页面标题栏样式参考最新上架的标题栏样式，两者尽可能保持一致。
    
*   • 最受欢迎工具卡片上样式可参考popular-v1.html进行优化。
    

![](https://mmbiz.qpic.cn/sz_mmbiz_png/UzsCVuwOnvRC1E8L0yEJVrHZHedDc7oZsG4y4V6QDFiacSLicULRib46ZPOIkwDng1z2Zoe881qGPyChObFAu0MDWicxZgUbyyXN9Y2ibAPDicxvI/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=25)

最新上架，优化后的效果：

![](https://mmbiz.qpic.cn/mmbiz_png/UzsCVuwOnvRh8Uibdlzt9WoAdrBS3PdPQQ7xPsG04o69icre1x5xIMCQtBJ83iaG42WSibrQheIpvoFFdAhbKmYIErKlbVlopw1NQSf5zdUtWicg/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=26)
最受欢迎，优化后的效果：  
![](https://mmbiz.qpic.cn/mmbiz_png/UzsCVuwOnvSg3OanLvzXDWMqz1aR7r62aVNSW5Po3DqQFGsPibVdtvdaMQzNfVGicBQKRJEk3AI8OHJn9j4PPicB8Micy9w58v8k0aib56rzHBlA/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=27)

### 重构免费教程菜单页面

同样的操作，在项目工作目录下，新开一个对话，参考前几个页面重构的方法，对免费教程页面进行重构优化。

`请参考附件网页案例效果，帮我对免费教程页面进行样式和布局重构。`

![](https://mmbiz.qpic.cn/sz_mmbiz_png/UzsCVuwOnvSy0nZ6wCxWSeSr5hrC71LbNOibFbsOyrDO8x4vjicoR5kVJiaichAukjoHzEiaYjff7SrzrrCh5lfWnPGjZyCEaoPJRG917pZ3a1N0/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=28)

免费教程页面，重构后效果如下：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/UzsCVuwOnvSGArvSRQxhlV7pagtL9XTtRmdTbwqk3Wo8tVXKGmg3OQaVJjljL5k3Bichs8HT6UdCCUKlNSeK8ficm1bdlJiaTExLVu6uyvLtWg/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=29)

ZCode中有一个网页元素查找模式功能，可以指哪改哪。

比如，我希望将顶部导航左侧的品牌 Logo 方块「快」的背景色从黑色换一个颜色

![](https://mmbiz.qpic.cn/mmbiz_png/UzsCVuwOnvTiciahKyjfsNp6CAt5HBvtzd6RNEDjH4vKcSVRibcOvmtaIUc1sgSadYeBJ0t6dpc2BpT3VVzl4Zibqc3erjTYOSm8LWRmiaJremAQ/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=30)

改完后，直接生效。

![](https://mmbiz.qpic.cn/mmbiz_png/UzsCVuwOnvRgEl7xE3uQXVQNibUhtNV66MJH6aiax2V9D7dqD8mueeiaTato1ib4QczpntH3gQtW0UrCymI5g5MH0qXehVkclNicfvibJxl9zCuhc/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=31)

### 其他

其他几个页面的重构方式也都差不多了，这里我就不一一罗列了。

整个网站，重构了十几个页面，从页面重构到验证，到最后上线，大概花了一个下午吧。

最后，看一下用量消耗，（当日用量从4%涨到30%、当周用量15%涨到23%），其实这个用量消耗还不是太准，因为我中间还干了啥其他事情 😄，算了，何必扣细节呢。。。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/UzsCVuwOnvQn74vxaHv1icBSRjmoVcOEPBiaohtCXvOiaibAQaCT7PDF7A3tYr66LSWla4dE1da9mB57h0ia0zjMu1qEeQEgVnA2dLia8dZ8KUdRQ/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=32)

05最后
----

按照开头的约定，用我最关心的三件事，给这次真实项目实测收个尾。

**第一，任务能不能不用人盯着就跑完？** 基本能。从首页、最新上架、最受欢迎到免费教程，每一轮都是同一套动作：给参考稿、给一句提示词，然后它自己读代码、改样式、起服务、截图对比预期。我要做的，只是在它交活后看一眼效果，把不满意的地方列个清单，再丢回去。

**第二，改出来的东西能不能直接用？** 八九成能直接用，剩下一两成要自己调。AI 不是你肚子里的蛔虫——配色、角标、标题栏样式这些细节，你不说，它就按自己的审美来。好在它有"指哪改哪"的元素识别模式，改起来也不费事。

**第三，烧了多少 Token？** 这是最惊喜的部分。十几个页面重构完，当天用量从 4% 走到 30%、当周从 15% 走到 23%——这中间还夹着我干的其他活。折算下来，给一个网站整体换皮的成本，大概也就是一杯咖啡钱。

还有一个挺妙的感受：快捷导航这个网站，本来就是 2025 年初我用 AI 写的；一年半后，我又用 AI 把它那张"AI 原生脸"给换了。当初写代码的是 AI，今天改代码的还是 AI，而我全程只做了一件事——想清楚我要什么，然后把话说清楚。

这大概就是 AI 时代最真实的开发写照：**写代码的能力在贬值，把需求讲清楚的能力在升值。** 

如果你手上也有那个"想动很久、一直没动"的项目，或者你日常主力就是 GLM，别犹豫，开个 ZCode 试一试。

当然，老规矩不能省：改前先提交 git，改后 Diff 自己过。这两步，AI 替不了你。

对了，文中重构的快捷导航（`https://www.kjdaohang.com`）已经正式上线了——找工具神器，不要钱，免费用，上面还有免费学习资源可以领取，感兴趣的去逛逛。