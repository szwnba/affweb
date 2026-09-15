Vibe-Trading 的核心主张非常简洁：

> 一条命令，让你的智能体具备完整交易研究能力。

它不是另一个"AI 选股机器人"，也不是一个封闭的 SaaS 平台。它的定位是交易研究智能体的基础设施层——帮你把数据采集、分析推理、策略回测、信号生成这些能力，通过一套统一的 Runtime 暴露出去，然后你想在哪用就在哪用。

CLI 里跑研究？可以。

REST API 接自己的系统？可以。

微信里问一句"今天纳指怎么看"？可以。

Telegram / Slack / Discord 群里 @它一下？也可以。

同一套 session runtime，所有通道共享。

![](https://mmbiz.qpic.cn/mmbiz_png/6wEpbjZhHQwGRibaibCjGes9AyUKUafCbzibEBpwpxY9R3PvearicybYWoAVJibpDqhsn7XMwQ2MqXPD1cXCLxianZOibKd844hkHrXKlcosTqfaLg/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=0)

* * *

这是 Vibe-Trading 最"离谱"的地方——通道覆盖面极广：

| 

类别

 | 

通道

 |
| --- | --- |
| 

IM 即时通讯

 | 

Telegram、Slack、Discord、Matrix、WhatsApp、Signal

 |
| 

国内主流

 | 

微信 / 企业微信、QQ（NapCat）、飞书/Lark、钉钉、Mochat

 |
| 

企业协作

 | 

Teams、email

 |
| 

开发者接口

 | 

CLI、REST API、Web UI

 |
| 

实时通信

 | 

WebSocket

 |

> 不管你的团队用飞书、你自己用微信、海外社区在 Telegram——同一个智能体实例，全都能聊。

* * *

架构上，Vibe-Trading 做了通道层与核心逻辑的解耦：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/6wEpbjZhHQyicA7uuibKy26rApsibMHxvBibGnRhzQ2HcJODa0SEpvh2Av77RakyU21ZMuDvCDZric3wL6Fts7uaC4hPpeYB98QkbF14paQVAiaFY/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=1)

几个关键设计决策：

Session Runtime 是中心

——不管从哪个通道进来，用户的身份、对话历史、正在执行的任务，全部归一管理。你在微信里发起一个研究任务，到电脑上打开 Web UI，任务状态和结果都在。

Channel Adapter 插件化

——每个 IM 通道是一个独立适配器，实现统一的收发接口。新增通道 = 写一个适配器，不改核心逻辑。

WebSocket + REST 双协议

——实时推送走 WS，异步查询走 REST，CLI 和 Web UI 都能用。

一条命令启动

——vibe-trading start 拉起整个 Runtime，配置好通道适配器即可对外服务。

* * *

场景 1：个人交易者的"贴身研究员"

早上打开微信，问一句："昨晚美股三大指数收盘情况 + 今天宏观日历。"

智能体秒回——数据拉取、整理、总结，一条消息搞定。

不用打开 Bloomberg、不用翻财经网站、不用切好几个 App。

场景 2：交易团队的内部研究 Bot

Slack/飞书群里 @Vibe-Trading："帮我对比一下 BTC 和 ETH 过去 30 天的波动率，画个图。"

Bot 在群里直接回复图表 + 分析结论。

团队成员都能看到、都能追问，研究过程透明可回溯。

场景 3：量化研究者的快速原型工具

CLI 里跑：vibe-trading research --strategy momentum --symbol TSLA --period 1y

Runtime 拉数据、跑回测、输出结果。

觉得方向对了，通过 REST API 把策略接进自己的实盘系统。

场景 4：跨时区/跨平台的协作

你在 Telegram 上跟智能体讨论了一个交易想法，晚上回家在微信上继续追问细节，周末在 Web UI 上回顾完整的研究历史。所有通道共享同一份记忆。

* * *

![](https://mmbiz.qpic.cn/mmbiz_png/6wEpbjZhHQxsYDFknq4zqClHd9lShs8b2pOOwgdr63rpcyhXPxibzib8UEaV4JoOwKalZGZobKYTibr0AvuP7rEicN1PicjXgTZLyLKPRHlbRHCE/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=2)

* * *

Vibe-Trading vs 传统量化平台（QuantConnect / 聚宽 / 米筐）

传统平台是Web IDE + 回测引擎，研究在浏览器里完成，和 IM 通道天然割裂

Vibe-Trading 把研究能力推到你的聊天窗口里，交互范式完全不同

互补关系：Vibe-Trading 做研究交互层，传统平台做执行层

Vibe-Trading vs AI 聊天机器人（ChatGPT + 插件 / Claude）

通用 AI 没有交易研究专用引擎，数据时效性、专业因子计算都受限

Vibe-Trading 的 Runtime 内建交易研究管线，不是"让 LLM 硬算"

通道覆盖上，通用 AI 的官方 App 覆盖有限，Vibe-Trading 几乎通吃

Vibe-Trading vs 自研交易 Bot

自研要写：IM 接入层 + 消息路由 + 会话管理 + 研究引擎 + 数据源对接

Vibe-Trading 把这些一次性全给你了，你只需要关心策略逻辑

省下的开发量：保守估计 2-3 个月

Vibe-Trading vs 封闭 SaaS 交易助手

封闭 SaaS 数据在人家服务器上，通道支持有限，定制空间小

Vibe-Trading 开源自托管，通道想接就接，逻辑想改就改

* * *

个人交易者：想要一个随时在线的研究助手，不用盯盘时也能保持信息优势

小型交易团队：需要一个共享的研究 Bot，降低沟通成本

量化研究者：需要一个快速验证想法的前端，把精力花在策略上而不是工程基建

开发者/量化工程师：需要一个可扩展的交易智能体框架，在上面搭自己的东西

> 它不替你做交易决策，它替你把做决策需要的信息和研究能力，送到你手边最近的地方。

* * *

开源地址

```javascript
https:
```

[8元解锁820+优质项目！别再瞎找资料了！AI、低代码、Agent实战教程一网打尽，永久更新！](https://mp.weixin.qq.com/s?__biz=MzI3MTQyNDc5MA==&mid=2247504934&idx=1&sn=d781838f7483fbdf5292f17c22f54c50&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/mmbiz_png/6wEpbjZhHQxhRBAdRY0icwCFsgKSs5NozhtYAcJz6YYHKkDm7MjSKufmQpOutbWz4dseZNBy0vYmSibhq5Wx1VX3bkYz4XF1C6Pl4bdNibSRoI/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=3)