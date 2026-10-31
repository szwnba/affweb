一台 2 核 4G、30G 系统盘、带 root 和 SSH 的云端 Linux，公测期免费

这事儿我一开始也不信。

阿里云白送服务器？还是 2 核 4G？我第一反应是那种「首月 9 块 9，第二个月自动续费 300」的钓鱼套餐。

结果是真能薅，卡都不用绑。阿里 AgentScope 团队弄了个 AgentScope Platform，现在公测，注册账号、绑个 GitHub，就能一键部署一个叫 QwenPaw 的东西，附赠一台完整的云端 Linux。

**公测期免费。卡不用绑，VPS 不用买，Docker 和 Python 也不用自己配。** 

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/TDOJ2W9vy6sIaBALsoWQfPRlwWaKgP3KuCM1c9OmlbZjLp6RaAO8AuicnXHlqLRLur9A40uaProHyFMtYBxW3EQABWjQO4zE9CCyfaiavHibbk/640?from=appmsg&watermark=1#imgIndex=0)

01PART它到底给你什么WHAT YOU GET

别听我说，直接看机器自己报的数。我登上去敲了几条命令，加上页面上的标称：

nproc2 核 Intel Xeon Platinum

日常跑定时任务、轻量 API、爬虫，够了

free -h4.0 GB（可用约 3.4 GB）

能同时挂几个插件和任务

df -h30 GB 系统盘

放运行环境和文件

NAS 数据盘页面标 1.0 PB

看着夸张，先别当无限盘依赖

待机闲置 48 小时

到这个点没操作才休眠，不是关机就回收

那个 1.0 PB 的 NAS 盘我没敢当真。公测阶段，单文件多大、文件数量上限、闲置怎么回收、以后会不会缩容，官方都没说清。

页面还写着「6 个月不活跃自动清理数据」。要长期挂东西的，自己留个备份。

![](https://mmbiz.qpic.cn/mmbiz_jpg/TDOJ2W9vy6upKQJ0a2maMgVIJiboD64aeVFiaK1TgMVBCVeZWR092JcFcj9W7fQ6Mwqaic1n2WNyZuCn0ftCIbeqGbEibczm7Q3g8Vn7afIHryk/640?from=appmsg&watermark=1#imgIndex=1)

这是部署完的控制台。左边是工作区的文件列表，右边是实时部署日志，能看见它在拉 agent-runtime、csi-sidecar 这些镜像。

日志里的区域码是 ap-southeast-1。

对，**机器在新加坡**。这事后面要提。

02PART三步领到手HOW TO GET IT

流程短得有点不像阿里云。

第一步注册并绑 GitHub

用邮箱注册，然后授权 GitHub。绑 GitHub 是硬门槛，平台拿它防滥用

第二步点 Deploy QwenPaw

平台自动备好运行环境，全在网页里点，一行命令都不用敲

第三步等两分钟，进控制台

浏览器直接打开，不用配端口、不用开安全组

地址是 platform.agentscope.io。首次部署成功还送 200 Credits。

部署页面上有句话我挺喜欢：**所有配置都会保存，重新部署时自动恢复上次状态**。意思就是你装了哪些 Skill、MCP 怎么配的、定时任务怎么排的，实例休眠再唤醒，都还在。

03PARTQwenPaw 是个啥WHAT IS QWENPAW

光说送你台服务器，听着没什么实感。跑在上面的这个 QwenPaw 才是正题。

开源项目，GitHub 上 3.6 万星，Apache-2.0，TypeScript 写的。说白了，它能自己装技能、自己记事、还能长期挂后台干活。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/TDOJ2W9vy6sCsdmHNYM01tpJpDHmRficOnjx7p2ywLOZ6jy8plcibw1JrNjicGOIvUqpcdqn0X1IN2q32N15FczRNX2ibTianEUP4dwUPY5SwiaJc/640?from=appmsg&watermark=1#imgIndex=2)

界面长这样。左边栏一列：Chat、Channels（接聊天软件）、Sessions、Cron Jobs（定时任务）、Heartbeat、Files、Skills、Tools、MCP、Configuration。

我挑几个真用得上的说。

Channels：把微信、飞书、QQ、钉钉接进来

这块我最爱用。国内 IM 它能一键接，扫码配完就通了。接完之后微信里直接就能跟它说话，它也能主动往你微信推消息。

Cron Jobs：定时任务，电脑关着也跑

整台机器上，只有这个功能让我觉得「必须留着」。

你电脑一关，本地跑的助手就死了。它跑在新加坡的机房里，你合上笔记本、出门吃饭、晚上睡觉，到点了它自己起来干活。

能排成这样的活儿：

每天早上九点抓一轮 AI 和科技新闻，整理完推到你微信

盯着几个开源项目的 release，有新版本就提醒

每天收盘后拉一遍行情，生成摘要

定时爬某个站点的数据，存到 NAS 盘上

读长文档、提炼要点，第二天早上放到工作区里

Skills 和 Plugins：能力靠装，不靠等更新

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/TDOJ2W9vy6sicO1ZOuVMQ6moQNXfuh3gCebYLdjzoOWcgRbokeVZuLffyp1E3uRJSzVt9Pu5icLoTnyUd17UFwzNMHuJmepWqPJ1Jiby9VicIn0/640?from=appmsg&watermark=1#imgIndex=3)

Skill 广场里按类目分好了：工程开发、数据研究、文档办公、安全合规、自动化集成、设计创作。看到合适的点一下，直接装到你自己的 QwenPaw 上。

Plugin 广场是另一套，扩展的是模型、命令和页面。

广场是社区投稿，质量参差不齐。装之前翻一眼它的描述和更新日期，别看见「一键」俩字就点。

04PART说点不好听的THE CATCH

免费的机器，代价肯定有，我按条说：

它在新加坡国内访问不算快

走公网的话延迟肉眼可见，网页控制台偶尔转圈

4G 内存跑不动本地模型

它就是个编排层，模型得接外部 API

自带的免费模型不太能用

社区实测 DeepSeek V4 Flash、MiMo 这些很快就撞速率限制

公测规则随时会变

今天免费不等于明年免费，别把生产业务押上去

1.0 PB 的盘别当真

公测期的显示值，实际限制没公布

模型这条得说清楚。**这台机器免费的是算力和存储，推理不免费**。想用得舒服，自己配个 API Key，接手上现成的就行。

05PART一个进阶玩法ROOT + SSH

最有意思的在这儿，**它给你 root，也给你 SSH**。

大部分人只把它当个聊天窗口用，其实它是台完整的 Linux。控制台里让它装东西就行，比如装个 Tailscale，把 SSH 反代出来，拿自己终端直接连。

连上去之后能干的事不少：

当跳板机，跑点需要固定海外出口的脚本

挂个小服务，扔个轻量 API 上去

当练手环境，学 Linux、试 Docker，弄坏了重新部署一遍就行

放几个定时爬虫，结果写进 NAS 盘

这是公测环境，别放任何敏感数据。root 权限给你了，也等于给了所有能进这个实例的人。

反代 SSH 属于「能用但别依赖」的操作。公测结束、实例回收、策略调整，任何一项都可能让它断掉。

LASTPART收个尾NOTES

我把这东西的定位说白一点：

**它不是给你省钱买服务器的，是送你一台永不休眠的机器，专门用来跑那些「得一直挂着」的活。** 

你本地那台电脑，性能强、模型能跑、文件都在手边，但一关机就什么都没了。这台 2 核 4G 的破机器，性能烂得可怜，可它 24 小时都在。

重活本地干，长活扔云端，两个搭着用才顺手。

至于值不值得折腾，公测免费，不绑卡，就是注册绑个 GitHub 的事。**折腾二十分钟，最差白费这点时间，运气好白捡一台机器**。

我反正已经挂上定时任务了。

地址自己搜：platform.agentscope.io。QwenPaw 的仓库在 agentscope-ai/QwenPaw。

我是 AI善后工程师，这篇就聊到这儿。

既然看到这儿了，觉得有用就随手点个赞、在看、转发三连吧。

♥点赞◎在看➦转发

THANKS FOR READING