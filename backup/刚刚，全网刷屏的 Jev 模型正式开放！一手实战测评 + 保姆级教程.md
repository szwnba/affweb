大家好，我是程序员鱼皮。

过去几年，不管是 ChatGPT、Claude 还是 DeepSeek，AI 大模型的目标一直都是「跟人聊天」和「帮人干活」。

但最近有个模型突然火了，它有点儿特别，**不说人话、不能跟人聊天**。

它叫 Jev，由前 OpenAI 研究员 Diogo Almeida 创办的 TypeSafe AI 发布，这哥们是 ChatGPT 的共同发明人之一！

![](https://mmbiz.qpic.cn/mmbiz_png/LlSQOKIxJ1HQqqicKXvace90biaVBTDtdtKv2oEmBSqwtYR63EGMjUq4x1q8T80hslAkWsb5zeFcugXQlPmXDMlibkibicXKAl47fkXzrK6nickc4/640?wx_fmt=png&from=appmsg#imgIndex=0)

我刚看到的反应是：一个不说人话的 AI，能有什么用？又是噱头吧？

![](https://mmbiz.qpic.cn/sz_mmbiz_png/LlSQOKIxJ1E05XicVTTjQXTOCGePcSFBSdcXUZqL9mDTcZBoGsEzdWwia6wsl7pj0R8WHZFW28BWtB7utpiagSI9OEtlWsk3dMibrkZVic6vBqEE/640?wx_fmt=png&from=appmsg#imgIndex=1)

**了解之后发现，还真有点东西！**

这篇文章我就从零开始，带大家搞懂 Jev 到底是什么、怎么用、到底好不好用。没有任何技术基础的小白也能看懂，看完还能直接上手体验。

一、Jev 入门介绍
----------

### Jev 是什么？

传统的大模型主要是跟人对话的，你问它一个问题，它回你一段话。

但这就带来一个问题，比如你想让它帮你判断一下「这封邮件紧急吗」，它不会直接告诉你「是」或者「否」，而是先给你写一大段分析，然后才给出结论。不仅速度慢、烧 Tokens，还需要你自己从回答里把答案抠出来。

Jev 就完全不一样了。你问它「这封邮件紧急吗」，它就直接告诉你「是，概率 95%」。

模型返回的是一段结构化的 JSON 数据，你的程序可以直接拿来用：

```
{  "is_urgent": {    "noul": 0.95  }}
```

可以说，没有任何 AI 比它更直接、更不绕弯子。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/LlSQOKIxJ1GnWkPTsFZ3luTeNngLNUgpsdGBE01ddG87TyLNswnPs61iaJfSuFsF6AGApaa6FrcEVzRZhx2bJCmTF3fmmyGUwjggHHwUDV1I/640?wx_fmt=png&from=appmsg#imgIndex=2)

TypeSafe AI 管这种模型叫 **System One Model（系统一模型）**，灵感来自诺贝尔奖得主 Daniel Kahneman 的《思考，快与慢》。系统一是人类大脑里负责快速直觉判断的部分，比如你一眼就能看出「这个人在生气」；系统二是负责深度推理的，比如「算一下 17 × 24」。

传统 LLM 更像系统二，Jev 就是系统一。

根据 TypeSafe 官方自测的数据，两者的差距还挺夸张的：

|  | 

传统 LLM（如 GPT-5.6）

 | 

Jev

 |
| --- | --- | --- |
| 

输出方式

 | 

生成文字，需要解析

 | 

直接返回结构化决策结果

 |
| 

响应速度

 | 

3 - 329 秒

 | 

70 - 500 毫秒

 |
| 

输入价格

 | 

10 / 百万 token

 | 

$0.042 / 百万 token

 |
| 

输出价格

 | 

约输入价的 5 倍

 | 

免费

 |
| 

结构化输出错误率

 | 

0.58% - 45.5%

 | 

0%（数学保证）

 |

响应速度最高快了将近 200 倍，输入价格便宜了几十倍到上百倍，输出还不要钱，而且结构化输出零错误。这也太香了吧！

那 Jev 到底是怎么用的？为什么能这么快？下面一个一个来讲。

### Jev 能回答什么类型的问题？

Jev 的调用方式非常简单，你给它两样东西，一个是 **state 状态**，就是你想让它分析的上下文信息；另一个是 **questions 问题**，就是你想让它回答的问题。然后它就直接返回结构化的答案。

Jev 支持回答 3 种类型的问题，TypeSafe 官方把它们叫做「AI 原语」。

#### 1、Noul 是或否

简单来说，就是让 AI 做判断题，问一个「是不是」的问题，返回 0 到 1 之间的概率值。

比如你收到一封客户邮件，想判断是否紧急，就把邮件内容作为 state 传给 Jev，再加上一个 Noul 类型的问题：

```
{  "state": "我连续 3 天无法连接 Stripe 账户，正在丢失销售额，请尽快处理！",  "questions": {    "is_urgent": {      "type": "noul",      "instructions": "这条消息是否传达了紧急性或时效性"    }  }}
```

Jev 返回的结果长这样：

```
{  "is_urgent": {    "type": "noul",    "noul": 0.95  }}
```

0.95 意味着有 95% 的把握认为这条消息是紧急的。你在代码里直接 `if noul > 0.8` 就可以触发告警了。

#### 2、Choice 多选一

这个就像让 AI 做选择题，从你预设的选项里选一个，并告诉你每个选项的概率分布。

比如判断一个工单该分给哪个部门，你可以把部门选项列在 criteria 里让 Jev 来选：

```
{  "questions": {    "department": {      "type": "choice",      "instructions": "这个工单应该分配给哪个团队处理",      "criteria": {        "billing": "付款、发票、退款相关问题",        "technical": "Bug、系统故障、集成问题",        "sales": "定价、账户咨询"      }    }  }}
```

返回：

```
{  "department": {    "type": "choice",    "choice": "billing",    "confidence": 0.8,    "probabilities": {      "billing": 0.87,      "sales": 0,      "technical": 0.13    }  }}
```

不光告诉你选了 billing，还把每个选项的概率都算出来了。目前 Choice 最多支持 255 个选项。

#### 3、Score 评分

这个就像让 AI 做打分题，在你自定义的量表上打分，分数可以落在两个等级之间。

比如判断无法登录的客户有多沮丧，你可以定义从「冷静」到「愤怒」的几个等级，让 Jev 来打分：

```
{  "questions": {    "frustration": {      "type": "score",      "instructions": "客户看起来有多沮丧",      "criteria": [        "冷静，只是在陈述事实",        "不满但还算礼貌",        "非常愤怒，言辞激烈"      ]    }  }}
```

返回：

```
{  "frustration": {    "type": "score",    "score": 1.04,    "confidence": 0.94,    "probabilities": { "0": 0, "1": 0.96, "2": 0.04 }  }}
```

Score 1.04 表示介于第 1 级（不满但礼貌）和第 2 级（非常愤怒）之间，偏向不满。这里我定义了 3 个等级，实际使用时你可以根据需要定义 2 到 10 个等级，等级越多，评分的粒度就越细。

### Jev 有什么特别的？

看到这里，可能有接触过 AI 应用开发的朋友会想：我之前在提示词里引导 AI 输出 JSON，或者用大模型自带的结构化输出功能，也能让 AI 返回固定格式的结果啊…… Jev 跟它们有什么区别？

![](https://mmbiz.qpic.cn/mmbiz_png/LlSQOKIxJ1ElO6TvvFrypWckB9oBO2ISsVgSm7rszjkJCRNEdvd7sXSvEo2EedSDVfGr7Akricp0pWE7iaHiarBUxXHTfqrQxE014kZn2IHOTE/640?wx_fmt=png&from=appmsg#imgIndex=3)

你别说，区别还真挺大的！

首先，传统 LLM 做结构化输出，底层还是一个 token 一个 token 地「写字」，写完再校验格式。就好比让一个作文高手去做选择题，他还是会先在脑子里打一遍草稿，然后再从里面挑答案，自然就慢。而且写着写着格式就可能出错。

Jev 的做法完全不一样，它用的是 **并行采样**，不像传统 LLM 那样逐字生成文本，而是直接在预定义好的选项上输出概率分布。也就是说，前面提到的 3 种问题可以在一次请求里同时问，问 1 个和问 10 个问题的响应时间几乎没差别。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/LlSQOKIxJ1HWN5AQ72V2P3wicG5fVYt6yJZUKqZH6r3dsllSQlVEXOF6YPWtvvxWeyJicEFiaVZIFfsC4S1vWRmNHB9Nt96dNQ1bluMYlZQZEw/640?wx_fmt=png&from=appmsg#imgIndex=4)

此外，Jev 的训练方式也跟传统模型不同。传统 LLM 用 RLHF 人类反馈强化学习，优化目标是让回答读起来通顺，让人类满意；推理模型用 RLVR 可验证奖励强化学习，优化目标是让那些有标准答案的问题做对，比如数学证明能不能验证通过、生成的代码能不能编译运行。

而 Jev 用的是 TypeSafe 自研的 **RLCD 校准决策强化学习**，优化目标是让模型「说到做到」，如果 AI 说有 90% 的把握，那在大量预测中这类判断确实有约 90% 是对的。

![](https://mmbiz.qpic.cn/mmbiz_png/LlSQOKIxJ1FMaaVPvZPhv2lJ2dZ5USeURNHdLNhnygrzh2HowvbJXUJpvAjic1bq0LsGEouNfaPmU9vFRLVOHoGndOBBdu1sAoTgKLDLrh9c/640?wx_fmt=png&from=appmsg#imgIndex=5)

理解了这些原理，前面表格里那些夸张的数据就好解释了。

Jev 不用一个字一个字地写回答，直接并行输出所有概率分布，所以速度能快上百倍。

它也不需要生成任何输出文字，成本自然就低了。

而且输出结构在数学上就是确定的，所以结构化错误率是 0%。

更重要的是，因为 Jev 的概率是校准过的，你的程序可以直接拿这个概率来做自动化决策，比如概率高于 0.8 就让 AI 自动处理，低于 0.5 就转人工。

### Jev 能用来干嘛？

虽然 Jev 不能聊天，但是它的适用场景还真不少，这也是它能火起来的原因之一。

TypeSafe 官方建议把 Jev 当成一个「智能的 if 语句」，所有需要做判断和决策的场景，都可以用 Jev。

我看了网上大家的玩法，总结了几个比较典型的场景。

1）工单和消息分类

比如客服系统收到用户消息，一次性判断该分给哪个部门、是否紧急、情绪如何。社区里有人拿 Jev 给 1018 篇论文做分类，分类部分只花了 0.08 刀。

![](https://mmbiz.qpic.cn/mmbiz_png/LlSQOKIxJ1GSJKOo7gbOKAA5bF1TB4nJO5h6ozoicNUYoA3FficBUKXmNiaNrEia3GtbcSYXSj8gtlibNvdr2ZjeFiaTmQYap9t7NwfM6FcThI6Rw/640?wx_fmt=png&from=appmsg#imgIndex=6)

2）AI Agent 的决策中间层

比如 Codex 等 Harness 里的 Agent 每一步都要做判断，可以让 Jev 先快速决定该调哪个工具、这个操作有没有风险，只有需要写代码的时候才让传统的 LLM 上。

有人用这个思路做了 浏览器自动化 Agent，7.1 秒就在 Google Flights 上搜索完一次航班，成本只有 0.0039 刀。

![](https://mmbiz.qpic.cn/mmbiz_png/LlSQOKIxJ1EaP8HjvS7Tm6e3qCITVml0nTsDgCTBMygsQXTnsia5SAxxbljoeXWibK3VrPoEtowb2kfY0OrXFNLT9eibT1c6UvrmbycdenQuia8/640?wx_fmt=png&from=appmsg#imgIndex=7)

3）内容审核和风控：比如一次性判断这条评论是否违规、属于哪种违规类型、风险等级多高，每条消息的判断成本不到 0.001 刀。

4）给 LLM 输出做质检

比如 LLM 生成了一段回答，用 Jev 快速检查有没有跑题、质量打几分，用便宜的 AI 检查贵的 AI。社区里有人做了一个多阶段代码审查工具，用 Jev 先做风险评估再逐文件打分。

![](https://mmbiz.qpic.cn/mmbiz_png/LlSQOKIxJ1GAT4vCfmPkg3s1m9iaYNm7yeJMYkgsG6DodYzxNMeEIqkoJO57e0x70EkDL74rbPcOPDooqdibNDbqANlrLicCkedFeqEJ4fEbBk/640?wx_fmt=png&from=appmsg#imgIndex=8)

5）实时游戏决策

有人用 Jev 玩地铁跑酷游戏，操作速度超过人类；有人用 Jev 控制超级马里奥，甚至还有人打通了《星际争霸》第一关！

![](https://mmbiz.qpic.cn/mmbiz_png/LlSQOKIxJ1H3XxluTbgia8KbNd3t2ygNEYP3YPTVb6icfZp8MbwXA6b30owatj55Ggia9jDZpQBX7wCa8qszvcbNE12aYaeJk9T5iauoia5f772M/640?wx_fmt=png&from=appmsg#imgIndex=9)

这类对响应速度要求极高的场景，以前用传统的 LLM 根本不可能做到。

之后，**需要生成文字的场景用传统 LLM，需要快速做判断的场景用 Jev**，两者互补，可以让任务完成速度又快又准。

二、Jev 实战体验
----------

了解了 Jev 是什么之后，接下来看看怎么实际用上它。

### 怎么使用 Jev？

Jev 现在已经正式开放注册了，直接用邮箱在 TypeSafe 官网 注册登录就行。

![](https://mmbiz.qpic.cn/mmbiz_png/LlSQOKIxJ1HdTGGZSSy2S2icibDGnicbutKpDC9OmjR4MUylLf9L12fPp4BMicDx0nMX42pBbXic7Db4NickEtZp2utlkwyGJLQzMnficiaBLIS2JFE/640?wx_fmt=png&from=appmsg#imgIndex=10)

注册之后，最简单的使用方式就是直接在官方 Playground 里体验，也可以通过 API 和 SDK 接入到自己的项目里。另外也可以通过 Vercel、Cloudflare 这些第三方平台来调用 Jev。

#### 方式一、官方 Playground

最简单的使用方式就是打开 官方的在线 Playground，左边填写提供给 AI 的上下文和想让 AI 分析的问题，点击运行就能在右侧看到结果。

![](https://mmbiz.qpic.cn/mmbiz_png/LlSQOKIxJ1Fgvic7SzNwcq4EDcdV9gA0khqfvSTkBzSaowKiavmC6zSXV40qQa54icZ0M1OicSREBC8C44RD2qZ6Ppsh991plibSg5l3XyVsO9h0/640?wx_fmt=png&from=appmsg#imgIndex=11)

#### 方式二、调用官方 API 和 SDK

登录之后，可以到 TypeSafe 的控制台 中创建 API Key。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/LlSQOKIxJ1En7raWIOduEgwZTcRtsTicVlzrs7gO1f2q9n7o8ssbfIibuy2euUwS6xNo08KyKWicSjBDGBlDTZTkt8ARsWzFD6zsvaWa5AO1UM/640?wx_fmt=png&from=appmsg#imgIndex=12)

TypeSafe 提供了 Python SDK 和 JavaScript SDK，方便开发者在自己的项目里直接调用 Jev，也可以通过 HTTP API 调用。官方文档的 Quick Start 页面 有完整的示例代码。

![](https://mmbiz.qpic.cn/mmbiz_png/LlSQOKIxJ1GPHsNiboWIH2e556Gc2N4aleRoF37YUO5Zdeyfb7ybFiaSjNqN8lgredN8TWDYGk9d8xsAo3HCWDBB5PIVy1aVUyicnwOib694fBI/640?wx_fmt=png&from=appmsg#imgIndex=13)

以 Python 为例，安装 SDK 之后几行代码就能跑：

```
# pip install typesafe-sdkfrom typesafe_sdk import Choice, Noul, Score, TypeSafeClientclient = TypeSafeClient()  # 自动读取环境变量 TYPESAFE_API_KEYresponse = client.system_one(    state="客户说：我被重复扣款了，订单号 A-104，请退款。",    questions={        "department": Choice(            instructions="这个工单应该分配给哪个团队处理",            criteria={                "billing": "付款、发票、退款相关",                "technical": "Bug、系统故障、集成问题",                "sales": "定价、账户咨询",            },        ),        "is_urgent": Noul(            instructions="这条消息是否传达了紧急性或时效性",        ),    },)print(response.answers["department"].choice)  # "billing"print(response.answers["is_urgent"].noul)      # 0.95
```

当然，现在用 AI 编程，这些代码都不用自己写，后面会讲到怎么让 AI 工具直接帮你调用 Jev。

#### 方式三、通过第三方平台调用

除了 TypeSafe 官方的 API，Vercel AI Gateway 和 Cloudflare Workers AI 这些第三方平台也已经支持了 Jev，可以直接在这些平台上调用。

以 Vercel 为例，它的 AI SDK 专门新增了一个 `experimental_evaluate` 接口来对接 Jev 这类决策模型，详细教程可以查看 Vercel 官方文档。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/LlSQOKIxJ1Fn6U2X0ic6bwGPibhuQicic6aSAsOcl2kXtDOgibe2dnQBm5dTcWsVHqT8cqulaIRu5Qj9bXaNVDc0Q9v5NpXbkXMy4qg5sJLI0gy4/640?wx_fmt=png&from=appmsg#imgIndex=14)

我这里还用 AI 接入 Vercel AI Gateway 做了一个 **中文版的 Jev 调试广场**，可以直接在网页上体验 Jev 的三种回复方式。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/LlSQOKIxJ1FwtQmLQ3eJrOKFJZbRQicAaj8MjLj0O9hkp6sfjBDgzatQHwLeHME9Fgt5a8EHKwLQibnE8m2pLbZ6uxdELOqEnO7dZ3yfqN98A/640?wx_fmt=png&from=appmsg#imgIndex=15)

点击「运行」之后，就能直接看到 Jev 返回的决策结果和原始 JSON 数据。

![](https://mmbiz.qpic.cn/mmbiz_png/LlSQOKIxJ1F8T4Kibnuy4kWazNanicWbgficusrmDxEM4XX0ibZVr9vKkYfMhsPWTg1gw9tkCR6WnzVGxozRzaYQbUrujMiclmaFtKbY3eXpyIdU/640?wx_fmt=png&from=appmsg#imgIndex=16)

### 接入 AI 工具

上面几种方式都需要你自己写代码调用 Jev，那有没有更简单的方式呢？

其实日常大家还是用 GPT、Claude、DeepSeek 这些大模型，Jev 更适合作为一个扩展能力来搭配使用。

TypeSafe 官方提供了一个通用的 Skills 技能包，简单理解就是一份配置文件，告诉 AI 编程工具 Jev 是什么、怎么调用、参数怎么传，这样 AI 工具就知道怎么帮你调用 Jev 了。只要安装了 Skills 技能包，所有主流的 AI 编程工具都能用。

![](https://mmbiz.qpic.cn/mmbiz_png/LlSQOKIxJ1Gzvh9Wx8ic3VGqrPtgl3D54SuP85FEqrbr5U5rtlM8KAYxnmyVgmXfIyYJTNvHZj7uPhAlyZkxnPDYKEPt5tU6gR002mYF9Esg/640?wx_fmt=png&from=appmsg#imgIndex=17)

安装方法非常简单，官方提供了一段 现成的提示词，可以让 AI 帮你把技能安装到你用的 AI 工具里。

![](https://mmbiz.qpic.cn/mmbiz_png/LlSQOKIxJ1HNE5JJTSRHcqnOU2ZhmKr13stSIYkxDHTOn9g14O8lUrr7TP5RM1yMibKYpoiar3hQYRLIX8hW2LDd93bRhgy1KoxELvWyUJOgc/640?wx_fmt=png&from=appmsg#imgIndex=18)

不过官方的提示词默认只在当前项目下安装。我把提示词翻译成中文并改为了全局安装的版本，这样所有项目都能用：

```
全局安装 TypeSafe 技能。如果你是 Codex（Claude Code），请执行 `claude plugin marketplace add typesafe-ai/skills`，然后执行 `claude plugin install typesafe@typesafe-ai`。如果你是其他 Agent，请执行 `npx skills add typesafe-ai/skills --skill typesafe-ai -g` 并选择你的 Agent。只需使用一种安装方式即可。技能文件可以在这里查看：https://github.com/typesafe-ai/skills/blob/main/skills/typesafe-ai/SKILL.md
```

比如我在 Codex 中执行这段提示词。它的原理就是根据你用的 AI 工具，执行对应的命令把技能文件从 GitHub 仓库拉取下来。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/LlSQOKIxJ1E3ib5H2bXptP6iapjTrck7KqvUkxXScTml2jqvhqaOoVI4vyFcEOZcqPcBWfcagBp8MicB6BVXgIuZGnoaIa6LzeLRZ7LOUK0DEw/640?wx_fmt=png&from=appmsg#imgIndex=19)

安装完成之后，还需要在环境变量里配置好 TypeSafe 的 API Key，AI 工具才能帮你调用 Jev。

直接让 AI 帮你配置就好：

![](https://mmbiz.qpic.cn/mmbiz_png/LlSQOKIxJ1GrNqgBFtuj42ne0FiaDBNf1r2rnqL5cWkotLo5RyDNTnibscZn2TFwWqT4LwrwGOm5DriaTYfZuvMajlmOqXhib8WnQ51TRbY5KZU/640?wx_fmt=png&from=appmsg#imgIndex=20)

配好之后，你就可以在 AI 编程工具里直接使用斜杠命令 `/typesafe-ai` 来触发技能，AI 会自动帮你调用 Jev 来完成判断和决策。

![](https://mmbiz.qpic.cn/mmbiz_png/LlSQOKIxJ1HiadSiaMYGMbK5bLFXotOBMAdzebQBo2GDKWibIygsBdnqrqEe1EVdct0VSK903fsd4ZD2MzftzXHLIZmnbmvJQtba4Iic0WICb2g/640?wx_fmt=png&from=appmsg#imgIndex=21)

你也可以在对话中直接告诉 AI「用 Jev 来帮我做判断」，AI 同样会自动加载 TypeSafe 技能并调用 Jev 的接口：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/LlSQOKIxJ1HKkeuS7TMibUBtpd6JdxtvpuySAs9G8tiagCofVvhnWNA7DJD1ySHmOBtqicIWeSbQNFXI2E4ZdrV7TiczA1zzjib1B7eJnKZjibiaXA/640?wx_fmt=png&from=appmsg#imgIndex=22)

### Jev API 实战测评

学会了怎么使用 Jev 之后，咱们来通过实际的测试来看看 Jev 的表现到底怎么样。

我分别用 Jev 和 DeepSeek V4.1 Flash 来完成同一个任务，对比两者的速度、价格和准确度。

#### 1、用 Jev 实时玩数字华容道

数字华容道是一个经典的滑块拼图游戏，4 × 4 的棋盘上有 15 个数字方块和 1 个空位，目标是把所有数字按顺序排列好。

每一步 Jev 需要判断「空位应该往哪个方向移动」，这对决策能力的要求很高。

![](https://mmbiz.qpic.cn/mmbiz_png/LlSQOKIxJ1HRIiavqFESZA60efOr5rUoBZjvwSSqkB1LiaMl5dpcCUXOAiaicMj1JGRc3vJxmmS1jegBibg5CVcbc7VvzLq54KcqZOodJ60VDSZY/640?wx_fmt=png&from=appmsg#imgIndex=23)

开始测试，左边是 Jev，右边是 DeepSeek V4.1 Flash，两边同时开始，实时展示每一步的决策时间、累计消耗的 token 数和价格。

![](https://mmbiz.qpic.cn/mmbiz_png/LlSQOKIxJ1GlCS8nzdDdOkib7MImGBVk2SXpduKNEevGjtQfoicpxHEqt5wPnSA5FJpIyUA6hibIsMtCiaicjm9HQRqlByMVbsgg13dfQWdqOEy4/640?wx_fmt=png&from=appmsg#imgIndex=24)

最终，Jev 在完成速度上遥遥领先 DeepSeek V4.1 Flash，而且输入 token 和累计价格也更低。

#### 2、用 Jev 批量分类 1000 封邮件

第二个测试更贴近实际业务场景。假设你公司的邮箱每天会收到大量邮件，需要快速判断每封邮件的优先级、紧急程度和该转给哪个部门处理，这个任务就可以交给 AI。

我模拟了 1000 封不同内容的邮件，让 Jev 和 DeepSeek V4.1 Flash 分别对每封邮件做优先级分类、紧急程度判断和部门路由，两边拿到的邮件列表完全一样。

![](https://mmbiz.qpic.cn/mmbiz_png/LlSQOKIxJ1HFdkuSQxruKGh4PkAb8b6nXqqkKicDfK3FIw5Rm2BHh0IB45w1eIrQDoGRtPmsyry4ZTVjyh3K9YfIe41ia3ib5KKl8EwVXV4cjk/640?wx_fmt=png&from=appmsg#imgIndex=25)

最终结果，Jev 用了 15.6 秒处理完 1000 封邮件，平均每秒处理 64 封，累计花费 0.0177 刀；而 DeepSeek V4.1 Flash 用了 48.9 秒，平均每秒 20 封，累计花费 0.0207 刀。

Jev 在速度上快了接近 2 倍，价格也略低一些。

![](https://mmbiz.qpic.cn/mmbiz_png/LlSQOKIxJ1GCHlJeFta7rlMbHdiahjkzgq3xjvvto44WGiaMW4rrEQFoEC4Vk87t4kyHliaWWficfWg1XF4ClI8AqveqbbFlx2vtjvYSvRy48bo/640?wx_fmt=png&from=appmsg#imgIndex=26)

### AI 工具 + Jev 实战测评

除了直接调用 API，我还试了一下把 Jev 接入 AI 工具之后的使用效果。

这次我用的是 Codex 工具 + GPT 模型，装好 TypeSafe 技能之后直接让 AI 干活。

#### 1、用 Jev 玩连连看

连连看大家都玩过吧？

这次我用 Jev 来玩连连看，可以测试它在实时决策场景下的反应速度和判断准确度，游戏逻辑用代码处理，每一步选哪对方块消除的决策交给 Jev。

在 Codex 中使用 `/typesafe-ai` 技能，然后跟它说：

```
/typesafe-ai 帮我用 Jev 模型玩连连看游戏
```

Codex 加载了 TypeSafe 技能之后，会自动分析页面结构，识别出方块的位置和图案，然后调用 Jev 来做每一步「选哪对方块消除」的决策，最后操作页面完成消除。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/LlSQOKIxJ1GDv8Oe3ucvn0OcduT6VvKwBvVz7KkwLnlmb9MwbVEGXDKDbtR1JvjpR1LicZqNsv06xn9Zn1o9gdfmIB1bj2XetiaF7RXjezILY/640?wx_fmt=png&from=appmsg#imgIndex=27)

虽然 AI 顺利通关了游戏，但是我觉得执行速度没有达到预期。快的时候可以 2 秒消除 1 个，但经常消除几个之后会卡一会儿。

总共花了 5 分钟左右才完成了整局游戏的消除。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/LlSQOKIxJ1EYz7zdDEWz8VoCUMDFb3Jau3zwG4riaBoQJibmAsEjw8YyqQ5tFibPW111X24ErictaIc1L6XJKKBhGedn5AIXm9fOEFkjpplSzKM/640?wx_fmt=png&from=appmsg#imgIndex=28)

虽然 Jev 的决策速度确实很快，但问题出在「看」这个环节。Jev 只能处理文本和 JSON 数据，没办法直接「看到」网页上方块的位置和图案。这次测试我用的是本地的连连看网页版，Codex 可以直接解析到原始的 HTML 和 DOM 结构，所以还能跑起来。但如果你让它去玩那些用 Canvas 渲染的网页游戏，如果 DOM 里获取不到足够的信息，效果会更差。

其实社区里那些用 Jev 玩游戏的博主，思路基本都是一样的，就是先用代码把游戏画面转成结构化的数据（比如读取游戏内存），然后再把数据喂给 Jev 做判断，而不是让 Jev 直接看截图。

#### 2、用 Jev 给开源教程文章打标签

前面的连连看游戏主要考察的是 Jev 的实时决策速度，这次换个方向，考察一下 Jev 对文本内容的分类和打分能力。

我让 Codex 用 Jev 模型给自己 《AI 编程教程》 中的每篇文章自动打标签，包括判断文章属于什么主题、适合什么水平的读者、难度打几分。

提示词如下：

```
/typesafe-ai 读取 ai-guide 仓库里的文章列表，用 Jev 给每篇文章打标签。1. 主题分类（AI 基础/提示词工程/AI 编程实战/工具推荐/行业趋势）2. 适合的读者水平（零基础/有编程基础/有 AI 经验）3. 内容难度打分（入门/进阶/高级）不改动原始文章，只是最后输出一份报告。
```

![](https://mmbiz.qpic.cn/mmbiz_png/LlSQOKIxJ1Fic6EwELBDG6JGBnT7NniaeH47bF45567R8tiaQibopllpsZyzLWqPD4DZEp61mj3klJN9CqbU18EMzX2w83ibd0tDDUhJKc1hf1xw/640?wx_fmt=png&from=appmsg#imgIndex=29)

Codex 会先盘点文章范围、数量和篇幅，再按上下文限制设计可靠的批处理，批量调用 Jev 模型来判断文章的标签。

最终只用了几分钟，就完成了 697 篇长文章的标签分类！这个速度真的非常快了。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/LlSQOKIxJ1F2S6JJImpFZYOPBFfmlJ8aict1j7lJhj9UZhZiaFjfSKVhiaNM4Gbu0jQvEVzibkYKkzs1wxJjaSAhAthZmgo7fCIHQ4yJnlVZIqs/640?wx_fmt=png&from=appmsg#imgIndex=30)

这类批量分类打标签的场景特别适合 Jev，因为每篇文章的判断逻辑是一样的，只是输入内容不同，可以批量并行处理。而且分类结果是结构化的，拿到之后可以直接用来生成目录、做筛选功能。

三、Jev 使用感受
----------

最后说说我使用 Jev 的感受。

如果把 Jev 作为决策模型直接接入到自己的应用里（比如客服分类、内容审核、数据打标签），体验是非常好的，速度快、价格低、结果准确。做了上面这么多任务，总共也才花了不到 2 块钱。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/LlSQOKIxJ1Gx5LrW83anib8I1kLGxibsn17hXDsj6uibP1MvaJzjfMWEHqa84NxhGYBoQibRKVI4sjgrYZDxU0Biafwre8Cpss53pgq1Ps2MYxCU/640?wx_fmt=png&from=appmsg#imgIndex=31)

但如果是通过 AI 工具来间接使用 Jev，目前的体验还有不少提升空间，主要瓶颈在于 AI 工具对网页内容的感知能力还不够强，很多场景下没办法给 Jev 提供足够准确的输入数据。

而且 Jev 的能力有明确的边界，不能生成文字、不能做算术推理、日期比较也不靠谱。

如果你在做 AI 应用开发，想要把分类、路由、审核这类判断逻辑的成本和延迟降下来，Jev 是值得一试的。一定要确保你能给 Jev 提供足够准确的结构化输入数据，它判断得准不准，取决于你喂给它的信息质量。

我个人比较看好 Jev 在 AI Agent 决策层的应用。现在 Agent 每一步操作都要调一次大模型来判断，如果把这类快速判断交给 Jev，整体效率应该会有一个质的提升。

OK 就分享到这儿，本文会收录到我免费开源的 [《AI 编程零基础入门教程》](https://mp.weixin.qq.com/s?__biz=MzI1NDczNTAwMA==&mid=2247588403&idx=2&sn=91ab9714bff9eb6e26d5c03081ec765f&scene=21#wechat_redirect)，上千张图、几十万字，带你从 0 开始快速学会 AI 编程，做出自己的产品、跑通变现全流程，一次拿捏。

![](https://mmbiz.qpic.cn/mmbiz_png/LlSQOKIxJ1HJgKk9lCBzj7W8EyXg7fF7uEbGuDibejPkV89ic2HMChs9ibdxgxxoL6QeSSsib9VRx2n4D6mX6eeWxbUDKpLuM4XsO9IRA5vt9dY/640?wx_fmt=png&from=appmsg#imgIndex=32)

鱼皮的 AI 编程教程

我是鱼皮，持续分享 AI 编程干货。觉得有用的话记得点赞收藏和关注~

也欢迎在评论区聊聊：你有用过 Jev 模型么？你看好它的发展么？

往期推荐

[AI 桌面换装视频火了，1 分钟教你复刻！傻子可懂](https://mp.weixin.qq.com/s?__biz=MzI1NDczNTAwMA==&mid=2247592926&idx=1&sn=d5631f2eb447a2e460c3171fd83a44b3&scene=21#wechat_redirect)

[又一个新项目完结，全栈 AI 修图 Agent！](https://mp.weixin.qq.com/s?__biz=MzI1NDczNTAwMA==&mid=2247592753&idx=1&sn=f88d2d3738a4c63541bb29f9e4471be8&scene=21#wechat_redirect)

[新项目完结！AI 智能 PPT 生成 Agent](https://mp.weixin.qq.com/s?__biz=MzI1NDczNTAwMA==&mid=2247591041&idx=2&sn=a2b1f7143f27d342bb44049e19bdc097&scene=21#wechat_redirect)

[字节搞了一种全新的面试玩法，看完我崩不住了。。](https://mp.weixin.qq.com/s?__biz=MzI1NDczNTAwMA==&mid=2247590662&idx=1&sn=a8da98ba7bd212dd4f17c0371b26c597&scene=21#wechat_redirect)

[又一个新项目完结，用 DeepSeek 搞了个微信小程序！](https://mp.weixin.qq.com/s?__biz=MzI1NDczNTAwMA==&mid=2247589708&idx=1&sn=2cb6852d0faba977c076d178a887f5a7&scene=21#wechat_redirect)

[27 届秋招面试，90% 的原题在这里。。](https://mp.weixin.qq.com/s?__biz=MzI1NDczNTAwMA==&mid=2247589780&idx=2&sn=c296549f9ed8e7fa1f8daf2914f619fb&scene=21#wechat_redirect)

[出成果了，继续扩招！](https://mp.weixin.qq.com/s?__biz=MzI1NDczNTAwMA==&mid=2247589394&idx=2&sn=a59d4b73fbbebe3086b3390e27a4302e&scene=21#wechat_redirect)

[用这个简历，字节当天打电话约面试了！](https://mp.weixin.qq.com/s?__biz=MzI1NDczNTAwMA==&mid=2247589269&idx=2&sn=75d5668f83eb0428999bb44e72d3405d&scene=21#wechat_redirect)