![](https://mmbiz.qpic.cn/mmbiz_png/UzsCVuwOnvSWTffMYmjAQB3YEcicTxBZHg1PgEn2D6LjdQGLCbibfiaZj3AnO7foxnmwmbXYZYEk7jIDP2Bm452HicSPpgbfeqNSHw5IHP6iaIkY/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=0)

最近一周，一个叫 Jev 的模型突然火了。玩游戏、订机票、分邮件，连 GitHub 上一个自己逛网页的开源项目，都说自己是 Jev 驱动的。

怎么火成这样，问题跟着就来了。它到底是个什么东西？和我们天天在用的 GPT、Claude、豆包、DeepSeek 这些大模型有什么区别？普通人又能在哪里用上它？

这篇文章就来把这几件事一次性讲清楚。

考虑到我的读者大多是做软件测试开发的，所以文中还单独准备了一节，讲讲它对测试工作的价值，哪些环节用得上。

先看看Jev 到底是什么？
-------------

先说结论，**Jev 它也是一个模型**。

9月16号，由前 OpenAI 研究员 Diogo Almeida 创办的 TypeSafe AI 发布，需要说明一下，这哥们参与过 InstructGPT 和 RLHF，也是 ChatGPT 早期技术的核心成员之一。

![](https://mmbiz.qpic.cn/mmbiz_png/UzsCVuwOnvQlubmR8mic48ibOdf6knkSLlph3HlbfsMnAiahQ5UI1tibCAOwaNLLwEeZnicho26WSsrTHy1f42a8YfO6rUnrBQfBoNDia0zuHy71g/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=1)

官方定位是 **System One Model**（系统一模型），名字来自卡尼曼的《思考，快与慢》。

人脑会有两套系统：

*   系统一负责快判断，看到红灯知道踩刹车，扫一眼消息知道是广告。
    
*   系统二负责慢推理，写文章、做数学题、做复杂决策。
    

Jev 想做的，就是实现软件里的系统一。

Jev和传统大模型有什么区别？
---------------

我们平时使用 GPT、Claude、DeepSeek、豆包这类传统大模型，都是属于文本生成式大模型，你给它一个问题，它会一个词一个词往外蹦，回你一段话。

![](https://mmbiz.qpic.cn/mmbiz_png/UzsCVuwOnvSRuoebCXUEDOKMJz6fRsy6SraRCPNARmuI4SkrgGQVNzmrBU7ibkvqOzSwv2UbySSZnZJjsNWq90xH5SZjzn0BLcvJ1c0BoUNQ/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=2)

这种机制适合**创作、推理、写代码**，但遇到选择题或判断题时，比如判断一个工单该分给哪个部门，它不会直接告诉你选择「A部门」或者「B部门」，而是先给你写一大段分析，然后才给出结论。这样模式有点太笨重了，不仅速度慢、而且还烧 Tokens。更重要的是，还需要你自己从一大段回答里把真正你需要的答案抠出来。

而 Jev 走的是另一个路子，从用途来讲，它是一个轻量的分类模型，或者更准确一点来说，**它是一款专门用于做“判断、选择、打分”的轻量模型**。

目前，Jev主要提供了三种类型的问题：

*   **Noul：是非判断**。比如，这条请求需要转人工吗？给一段状态和一个问题，它会返回 0 到 1 之间的概率。
    
*   **Choice：选择题**。一个选项、各选项的概率，以及 confidence，最多 255 个选项。
    
*   **Score：打分题**。按定义的等级评分，评分等级自己定，2 到 10 级都行，返回分数和概率分布以及 confidence。
    

![](https://mmbiz.qpic.cn/mmbiz_png/UzsCVuwOnvS5j2218mIM7xuUUJJfKDVtXMrdaLQ4xEaRahnSCRs1EAlicwgqxPVnjDPvfCiaGRUJoiaEJ4O9DAE9y6PX4aGtxAzKdldfN1gmWk/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=3)

Jev 的调用方式非常简单，你给它两样东西：

*   一个是 **state 状态**，就是你想让它分析的上下文信息；
    
*   另一个是 **questions 问题**，就是你想让它回答的问题，一次可以带多个问题。
    

然后它就直接返回结构化的答案，概率和置信度都附在上面。

Jev 返回的结果大致长这样：

```
{    "is_urgent": {      "type": "noul",      "noul": 0.8    }  }
```

它不会像传统大模型，每个问题不管是难的，还是简单的，都先bilibili给你分析一大通，最后才姗姗来迟给出答案。

Jev 每次调用，你只需要给它一段上下文和一组明确的选项，它会直接输出每个选项的概率分布，并选出置信度最高的一个。延迟在几十毫秒到几百毫秒之间，且成本只有主流大模型的几十分之一。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/UzsCVuwOnvQgLAvBHIpUoYRzcBGAibv6MteicbaTrseVqqz9F3NIURRR7YYTH233djBgp2fsWddBEZtC2HKkWGmusXdhKTtrXqVDcb63juNuk/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=4)

根据 TypeSafe 官方（`https://typesafe.ai/`）自测的数据，两者的差距还是挺夸张的：

| 

对比维度

 | 

传统 LLM

 | 

Jev

 |
| --- | --- | --- |
| **输出方式** | 

生成文字，需要解析

 | 

直接返回结构化决策结果

 |
| **响应速度** | 

3– 329 秒

 | 

70 – 500 毫秒

 |
| **输入价格** | 

$0.20–10 / 百万 token

 | 

$0.042 / 百万 token

 |
| **输出价格** | 

约为输入价的 5 倍

 | **免费** |

![](https://mmbiz.qpic.cn/mmbiz_png/UzsCVuwOnvTGwmMLuIA3BnqBIkZuFVONggavsibdHQiaaxgajtyJAiaOfDsc4Lbh3epT6Olvdhx5x2YEJxhPIqG2DElDTWFibBLfOb0GaNTbmd4/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=5)

为什么Jev能突然爆火？
------------

它为什么出来不到一周，就爆火了？说实话，不是因为它强，是它戳中了当下 AI 的两个痛点，**token 费用太贵**，**AI 响应太慢**。

这种憋屈的日子，在行业中压抑了快两年。

比如说，拿传统大模型做个智能分类路由，烧了几百上千 token 就为了拿回两三个 JSON 字段，这就等于拿大炮打蚊子，**浪费**。

而Jev 输入每百万 token 0.042 美元，比主流大模型平均便宜二十多倍，且输出环节还是免费的，返回速度几乎是毫秒级，我就问你，这价格，这速度香不香吧。

但可能有人会说：AI 大模型的目标不是能像人一样，能「**跟人聊天**」和「**帮人干活**」 的吗。

Jev一个不会说人话的 AI，能有什么用呢？该不会又是噱头和炒冷饭吧？

热度归热度，但落到实际项目里，我认为Jev它在一些细分场景下确实还是有用的。

**客服工单是最典型的一个**。

比如，智能分单，进行部门归属、紧急程度判定，是否需转人工，若是交给传统大模型（GPT、Claude）费钱不说，你还得慢悠悠乖乖等它给你写完小作文。但若交给Jev三个问题一次请求用Jev可以并行问完，几百毫秒后全部搞定。

**另外，它还能反过来伺候大模型，给大模型当一道闸**。

请求进来先过它，判断这是重活还是轻活，该派给旗舰模型还是便宜模型，内容有没有踩线要拦下来。选模型这件事，多数团队靠经验拍脑袋，缺的是一个便宜到能每条请求都问一遍的判断器。

而Jev恰恰就是这个又快，又便宜的AI判断器。

但话说回来，Jev确实是个好东西，但它的好，并不在于技术有多大的突破。

有工程师拿它和 DeepSeek Flash 做过同场对比，分类准确率基本持平。J**ev 真正出圈的关键是速度、成本而不是智能**。

它适合做什么，不能做什么
------------

它的适用边界其实很清楚，就是企业系统里那些高频的判断，路由，分类，分级，放行等场景。

![](https://mmbiz.qpic.cn/mmbiz_png/UzsCVuwOnvTIWSgBrvZEG7AyksZh6IZRJZ0IC1Nw7HeILlqJ9m8CgcG7HicAS9woUymeDHZBquCsAkSthRfBibr97acI39Gz8sHiajZhE6ql9E/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=6)

比如：

*   **内容审核**。评论区每条发言过一遍，是广告吗，有辱骂吗，放不放行，置信度不够的自动进人工队列。日活几十万的社区，这个量靠审核硬看永远看不完，关键词规则又天天被变着法绕过。
    
*   **电商退款分拣**。申请进来先分类，质量问题、物流破损、七天无理由、疑似羊毛党，不同类别走不同流程，疑似羊毛的打高风险标记转风控复核。
    
*   **销售线索打分**。官网表单和展会名片进来的线索，按行业匹配度、预算信号、成交意向排序，销售先跟高分线索，低分的进自动培育流程。
    
*   **运维告警分级**。监控告警先过一道判断，严重级别多高，该通知哪个值班组，要不要直接打电话叫人，值班同学能从每天几百条告警里缓一口气。
    

这些场景的共同点，判断对象是文本，选项事先列得清楚，量大到值得自动化，又没大到值得养一个专门的算法团队。Jev 卡的正好是这个位置，比写死规则灵活，比大模型便宜一个量级，每个判断还带置信程度，不够就转人工。

**不适合的也说清楚**。

凡是生成内容的活，写文案、写代码、总结文档，它一概做不了，继续交给通用大模型。

怎么使用
----

了解了 Jev 是什么之后，接下来看看怎么实际用上它。

目前，普通人和开发者可以通过几条不同的路线体验 Jev。

### 官方 Playground体验

Jev 现在已经正式开放注册了，直接用邮箱在 TypeSafe 官网 注册登录就行。(可以用自己的google帐号一键登录)

```
https://console.typesafe.ai/
```

![](https://mmbiz.qpic.cn/mmbiz_png/UzsCVuwOnvQLEovjklrJn1IjUpIQytEteKTaJz53rswASrdibDoPy78uHQv0rjLaicZLLoCBx0o8v052yz2kyWicI5Jrlu3rvtZe2PBwbLEDso/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=7)

注册之后，最简单的使用方式就是直接在官方 Playground 里体验。左边填写提供给 AI 的上下文和想让 AI 分析的问题，点击运行就能在右侧看到结果。

![](https://mmbiz.qpic.cn/mmbiz_png/UzsCVuwOnvQ5vjXLZVYEheWes8gal9JfAN97hIVD2dia6BLypzjsmT1R23JrAQsTTbzWYiat917WlPSt8SEb4ljlbzibugWYDPOeEuGvEhTpTo/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=8)

目前官方 playground是免费开放使用的。进去选问题类型，贴一段状态，概率和置信度当场返回。没写过代码的人，也能把完整流程体验一遍。

### 使用官方 API 和 SDK

如果你需要在自己的项目中调用或接入Jev，官方提供 Python 和 JavaScript 的 SDK。官方文档的 Quick Start 页面 有完整的示例代码。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/UzsCVuwOnvT8ib53Da7Qka7voMtxnEvLVVfibrtDJ8BSHIq2uhhn8bTASSlKlp4MRQKZiaRMxy65Dgbsc7TPjjTX3EAFribRntRVUHiaZRyqLIXc/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=9)

以Python为例，先安装依赖包

```
pip install typesafe-sdk# 或者uv add typesafe-sdk
```

SDK调用结构大致长下面这样，包名和字段以官方文档为准。

```
from typesafe_sdk import Choice, Noul, Score, TypeSafeClientclient = TypeSafeClient()ticket = "Hi, I've been trying to connect my Stripe account for 3 days and the integration keeps failing. I'm losing sales. Please help ASAP."response = client.system_one(    state=ticket,    questions={        "department": Choice(            instructions="Which team should handle this",            criteria={                "billing": "Payment or subscription issues",                "technical": "Bugs or integration problems",                "sales": "Pricing or account questions",            },        ),        "frustration": Score(            instructions="How frustrated the customer appears",            criteria=[                "Calm, just stating facts",                "Frustrated but civil",                "Very angry, strong language",            ],        ),        "is_urgent": Noul(            instructions="The message conveys urgency or time-sensitivity",        ),    },)print(response.answers["department"].choice)  # "technical"print(response.answers["frustration"].score)  # 1.0print(response.answers["is_urgent"].noul)     # 1.0
```

也可以通过 HTTP API 直接调用。

```
POST https://api.typesafe.ai/v1/systemoneAuthorization: Bearer <API_KEY>Content-Type: application/json
```

不管用哪种方式，都配置配置`TYPESAFE_API_KEY`环境变量。可以到 TypeSafe 的控制台 中创建 API Key。（API KEY创建好之后，复制单独保存下来）

![](https://mmbiz.qpic.cn/sz_mmbiz_png/UzsCVuwOnvTliaX5dp8h0ekutJv6NgzcoavROXMUxAh2KOKuibteia2Z9Tbq5WCics91qqQPrmvwwfI1Wlj7A8h90XNVq9ZGNCyqR7exozGiaibVQ/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=10)

### AI编程工具安装SKILL

第三条路是接进 AI 编程工具。官方开源的技能包，仓库 `typesafe-ai/skills`，照 README 装进 Claude Code，会多出一个 /typesafe-ai 命令，配上 `TYPESAFE_API_KEY` 环境变量，就能在任务里让它做判断。

Claude Code中技能安装方式：

```
claude plugin marketplace add typesafe-ai/skillsclaude plugin install typesafe@typesafe-ai
```

或者Agent安装方式：

```
npx skills add typesafe-ai/skills --skill typesafe-ai
```

也可以直接将下述提示词复制到任意Agent，让其自动帮你安装

```
Install the TypeSafe skill. If you're in Claude Code, run `claude plugin marketplace add typesafe-ai/skills`, then `claude plugin install typesafe@typesafe-ai`. If you're in another agent, run `npx skills add typesafe-ai/skills --skill typesafe-ai` and select your agent. Use one installation method. You can read the skill directly at https://github.com/typesafe-ai/skills/blob/main/skills/typesafe-ai/SKILL.md (raw: https://raw.githubusercontent.com/typesafe-ai/skills/main/skills/typesafe-ai/SKILL.md). Then use the TypeSafe skill when working on this project.
```

安装完成后，输入`/typesafe-ai` 命令![](https://mmbiz.qpic.cn/sz_mmbiz_png/UzsCVuwOnvQweQticicNUaScGPS6L0grlQGnRnRVNUkuTTMAKJbjBuKb4vj4gudiaXjf7libOLX1YnP9WVBRxdBXb9fslMLOYBibGcrk1qSdRStU/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=11)

### 第三方平台集成

除了上述的几种方法外，目前许多第三方平台比如 `OpenRouter`、`Vercel AI Gateway`、`Cloudflare Workers AI` 都有集成。

比如，在 OpenRouter 里面搜索 Jev 相关模型。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/UzsCVuwOnvSibEfy4Kn2wp0J6Ac62VNuhHicZL9u33tfDKKpWgIaMvnnH92DzkcVqgjkCK43AoEVQDAQXJDAZ8q6hEbLribsSEicJIA3tnKtWd8/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=12)

Jev 能给测试工作带来什么帮助?
-----------------

这两年新模型新工具出得太快，隔三差五就有新面孔。大家看到这些变化先别急着兴奋，也别光只看个热闹，先问一句，这东西能不能接到我手头的活上，能替掉解决哪一环。

落到测试这行，能接的位置还真不少。测试工作中很多环节都强依赖人工判断，比如，用例要不要进冒烟，这次失败是环境抖动还是真缺陷，半夜流水线崩了要不要叫人。这些活以前要么靠人眼，要么接传统大模型硬顶，而现在多了个更优的选择。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/UzsCVuwOnvQyVdxASqyH0LfzA0S4J9wx87OgzDT6q6PYic9YVzpWibicGC6UpMf3d85ricR1KdNVRzlibFProibpm2LW4suGEC8gMaoGEaUEqfuek/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=13)

拿线上 bug 定级举个例子。一条线上反馈进来，把反馈原文、复现信息、影响面拼成 state 传给 Jev，配上两个问题，一个定级选择题，一个主链路判断题。

```
{  "state": "线上反馈：支付成功后订单状态未更新，安卓端概率性复现，近 2 小时收到 37 起用户投诉，涉及下单主流程。","questions": {    "severity": {      "type": "choice",      "instructions": "按公司事故定级标准，判断这个缺陷的严重级别",      "criteria": {        "P0": "核心功能不可用或造成资损，需立即拉群响应",        "P1": "核心功能受损，有绕过方案，需当天修复",        "P2": "次要功能异常，影响部分用户体验",        "P3": "文案样式问题，不阻断使用"      }    },    "is_core_flow": {      "type": "noul",      "instructions": "该缺陷是否发生在交易主链路上"    }  }}
```

Jev 返回的结果长这样（字段以官方文档为准）。

```
{  "severity": {    "type": "choice",    "choice": "P1",    "probabilities": { "P0": 0.22, "P1": 0.71, "P2": 0.06, "P3": 0.01 },    "confidence": 0.83  },  "is_core_flow": {    "type": "noul",    "noul": 0.97  }}
```

P1 拿了 0.71 的概率，置信度 0.83，主链路的把握是 0.97。代码里写一句 `if severity.confidence > 0.8` 就能自动定级挂标签，置信度不够的转人工复核。半夜来的反馈，几百毫秒就有初判，值班同学拿到手的就不再是一条裸信息。

*   **回归用例分级**。几千条积压用例，哪条进冒烟集，哪条降成每周跑，把用例描述、所属模块、近半年失败记录拼成状态，一条 Choice 问题全库过一遍。按社区实测的量级，千条输入 15 秒跑完。(我自己的实测下来，74条测试用例，通过jev判读类型、优先级、模块归类这三个任务一起并行，共花了26秒)
    

![](https://mmbiz.qpic.cn/mmbiz_png/UzsCVuwOnvQvkAAmHvpcCFvK5Xb8pTZ2FcLfwP64Q5DF8Th6iam4JZYDibwefGzDuXdpiaJoKtY6wsLHiaFv6iaDibPFialhuNOy4HrclU6Poj1Ww0/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=14)

*   **flaky 判定**。用例失败，重跑又过了，把失败日志和重跑结果丢给它，一个 Noul 问题问是不是环境问题，答案带置信度。够就自动标记 flaky，不够的进人工队列，你只看它挑不准的那一小撮。
    
*   **AI 评测当裁判**。测大模型应用的同学都懂，评测集几千条，全拿 GPT 当裁判，账单看着肉疼。让 Jev 先判一遍，低置信度的再交大模型精判，成本降一截，且有双盲实验验证过，跳过低置信度的版本反而更准。
    
*   **失败截图初筛**。UI 自动化一晚上几百张失败截图，是页面没加载完，还是元素真没了，让它先过一遍，人只看它拿不准的。
    

还有个顺手的用法，缺陷单进来先让它判该派给哪个模块，比关键字匹配靠谱，比人工分单快。

落地建议就一条。**别上来就动生产流程，先挑手头积压最多、又有人工结论可对照的数据，把历史记录喂给它跑一遍，看判得准不准，准了再谈接入**。它的调用便宜到试错几乎没有成本，这一点对测试团队格外友好。

写在最后
----

最后聊聊我自己的看法。

网上吹它的和骂它的都不少。骂得最狠的那位工程师做过两个实验，拿 Qwen 两个小时复刻了一个同款，又找来一个 400M 参数的开源模型 laya，效果都和 Jev 差不多。他的结论说得很难听，Jev 就是一片止痛药，只治贵和慢，治不了笨。

这话说得难听，但我大体同意。你真把它当聪明模型用，会失望，它本来也没打算聪明。它更像一颗螺丝钉，拧在大模型旁边，专干那些不值得惊动大模型的小判断。往后一个 Agent 大概会是这样，重活交给 GPT、Claude 慢慢想，小判断丢给 Jev 秒回，能写死的逻辑交给普通代码，实在拿不准的留给人。

至于它能不能长久，别看官方发布会，看两样东西就够了。

**一是校准**，说九成把握是不是真有九成，要在自己数据上验过的才知道。

**二是习惯**，等几千个 Agent 的判断位都用上它，想换走也没那么容易。这两样它现在都还没坐实，所以我的态度很简单，先用起来，别急着站队。

好了，关于 Jev 是什么、可以在哪里使用，以及它是如何在一些场景里面发挥作用的，今天就给大家介绍到这里了。

正在读这篇文章的朋友，你还发现过哪些 Jev 的使用案例？如果你也在使用类似的工具，欢迎在评论区聊聊。