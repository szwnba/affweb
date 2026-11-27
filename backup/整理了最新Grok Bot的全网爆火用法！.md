大多数人第一次打开 AI 助手，依然习惯把它当成一个“问一句、答一句”的聊天窗口。一旦遇到需要跨软件操作、长期跟进进度或者按固定节奏重复处理的日常工作，最后往往还是得自己亲手去点鼠标、填表格、发消息。

前几天，SpaceX 与 xAI 旗下 Grok Bot 工程负责人、React 核心团队成员 Lauren Tan 在 X 平台发出一篇实操长文《Automate Anything with Grok Bot》，单帖浏览量突破 314 万，收藏数高达 3.38 万，几乎是点赞数的两倍。

她在发帖时直言，很多人没能发挥出 Grok Bot 的真正潜力，并不是因为不会写代码，而是不知道怎么把手头的工作拆解成一套能让 AI 独立接管的流程。在这篇指南里，她结合自己日常研发和生活的真实经验，把配置 AI 助手的完整步骤和 5 套对话提示词模板逐一梳理了出来。

![](https://mmbiz.qpic.cn/mmbiz_jpg/zW6S9vt0cS96VVM0g2S3dvWDY9DVrtDYlbpjCRacm9uaB2dVicWSbvJ2UQF8DpVHDjm5JRzhK0UFS7QrL3XOnicDmv32vMZPfVtLaZGK6AVRw/640?wx_fmt=jpeg&from=appmsg#imgIndex=0)

一、先认清手里的工具，每个 Bot 都是一台全天候在线的云端电脑

在动手配置之前，需要先搞清楚 Grok Bot 和常规网页聊天 AI 的区别。

xAI 于今年 8 月推出 Grok Bot（官方入口 `x.ai/bot`）时，给它的官方定位是“TEST\_XYZ\_123”。每一个新建出来的 Bot，都运行在云端一台独立的持久化 Linux 虚拟机上，内置了完整的浏览器、文件系统和终端环境。

这意味着两件事。第一，它能自己移动鼠标点击界面、安装并登录你日常使用的各类办公软件、自己打开浏览器查资料，甚至直接进入 Zoom、Google Meet 或 Teams 会议旁听记纪要；第二，哪怕你合上笔记本电脑去休息，云端的 Bot 依然在后台继续运行。

今年 10 月，官方还为每个 Bot 配备了独立的专属邮箱（形如 `your-bot@mail.grokbot.com`）。你可以直接让它用自己的邮箱去注册外部服务、联系合作商家，或者替你和别人预约会议时间，把自动化账号权限与个人主邮箱隔离开。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zW6S9vt0cS9zoGnWfxvLjpib2kbTswjALJg9VKrCoVNkwajBfzQkquCKaBjx4bDGwQQRZibqrkhXR9VHkk0Mxct0Zt0RRATDfrXOoVgC93iatY/640?wx_fmt=png&from=appmsg#imgIndex=1)

在安全控制上，系统连接外部服务或执行外发邮件、向客户发消息等敏感动作前，默认会弹出审批确认（Approval）；你也可以在设置面板里按细粒度规则设定哪些操作允许自动放行、哪些必须经过人工确认。

理解了这套运行机制，就能明白 Lauren Tan 反复强调的第一条使用原则：不要按“今天临时想问个问题”去建聊天框，而是从你每天最繁琐、最不想重复做的那件具体工作切入，按“一项可独立交接的长期职责”去创建专职 Bot。

二、xAI 工程师手把手拆解，五步把重复工作交给 AI

确定了要交出去的工作后，怎么把一个新建的空白助手引导到能独立上手的程度？Lauren Tan 将整个过程拆成了五个连续步骤，并给出了每一步可直接复制使用的提示词。

1\. 先定最终目标，别把“填表格、发邮件”当成目的

进入 Grok Bot 新建助手时，可以先随便给它起个临时名字（比如她自己常用的 `Potato`）。在正式派活前，新手最容易犯的错误，就是把“中间操作步骤”当成了“最终目标”。

比如你在公司有一套固定的日常工作流，每天要填几张表、发几封确认信。但填表和发邮件本身只是手段，背后的真实目标可能是“促成一笔新订单”、“准确控制库存采购量以降低成本”，或者“替门店排好客户预约并减少爽约”。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/zW6S9vt0cS9bDq8icXRqYTzXibUM8WSHM9n3I3OlTzg5YVQjHjiaib19TqsKHwr1GVibhvYerj9OO52GBBppia8QBIzAiasHiczrv7YcJLJroNRNsZU/640?wx_fmt=jpeg&from=appmsg#imgIndex=2)

先把最终想要的结果告诉 Bot，它不仅能理解全局意图，往往还能反过来帮你简化原有人工流程里多余的环节。确定目标后，可以直接发送第一段起手提示词：

你好 Potato，这是我希望你负责达成的最终目标：<填写你的目标>。请根据这项职责，为你自己挑一个合适的名字和头像。

（英文原版：Hi Potato, this is the goal I want you to be responsible for: `<goal>`. Pick out a name and picture for yourself based on it.）

如果你一时说不清目标该怎么描述，也可以直接让它向你提问，帮你一步步把目标梳理清楚：

你好 Potato，我想交给你负责一项长期目标，但还没想好怎么准确描述它。请你一步步向我提问，帮我把目标梳理清楚，直到我们敲定一个满意的目标描述。

（英文原版：Hi Potato, I'd like you to be responsible for a goal, but I'm not sure how to best describe it. Can you ask me some questions and interview me until we have a goal that I'm happy with?）

2\. 用语音讲清日常做法，要求它先复述确认、暂不执行

目标对齐之后，下一步是把你平时自己处理这件工作的做法教给它。

Lauren Tan 分享了她最常用的省力技巧：不要坐在键盘前苦想怎么写长篇说明文档，直接打开 Grok Bot 的语音输入模式（Voice Mode），像带新同事一样开口讲上几分钟，把平时做事的细节完整说出来，完全不用提前整理语序。

口述时重点交代清楚六件事即可：平时按哪几个步骤操作，中间重点留意哪些容易出错的细节，全程要打开哪些软件或网站，做完之后怎么检查结果对不对，干活所需的信息从邮件、Slack 还是工单系统里获取，以及事后去哪里查看客户评价或同事反馈。

![](https://mmbiz.qpic.cn/mmbiz_jpg/zW6S9vt0cSicALRTMxEqicEzV3tzPmvDTvVIsymaicAQSF5nXLoGJpygyDeKC7Ar9Y71Rlfz39H9TS9Z2mRMzBl1vmKlZcbcE8fcA7hDzsyWCU/640?wx_fmt=jpeg&from=appmsg#imgIndex=3)

口述结束后，先不要让它直接开始执行，而是补上这句关键的控制提示词：

Potato，这就是我平时自己完成这项工作的方式：<粘入语音转写内容>。我希望你想办法把整套工作完整接过去。但在真正动手之前，请先用简单直白的话复述一遍你理解的目标和步骤，方便我确认和补充。现在先不要开始执行，我们先把流程计划定准。

（英文原版：Potato, this is how I usually do this goal myself: `<process>`. I want you to think about how you can take this over completely from me. Before you begin, restate what you think my goal and process is in simple English so I can give you feedback and confirm it. I don't want you to start executing on this yet, let's focus on getting the process planned first.）

核对一遍它的复述，有偏差的地方当场纠正，来回两三轮就能把方案定稳，随后再让它去连接对应的软件工具。如果你想顺便优化老流程，还可以追问一句：

请对照我最初设定的目标重新审视这套流程，如果你发现有更高效、更省事的做法，请直接告诉我。

（英文原版：Review our process against my original goal, and if you see a way to make it better or more efficient, let me know.）

3\. 让它一次问一个问题，补齐你容易忽略的隐性经验

很多人觉得自动化难配置，原因在于人在熟手工作里有很多不假思索的默认判断。

比如替门店安排客户预约，你自然知道哪类服务耗时更长、哪位技师擅长哪类项目、什么情况下两单之间要预留缓冲时间；再比如当邮件里写的时间和预约系统里记的时间不一致时以哪边为准，以及发完邮件并不算预约结束，必须等系统保存成功并向客户发出确认信才算真正办完，尚未回复的还要持续跟进、避免重复建单。这些判断对你来说习以为常，但如果不提前说明，Bot 就缺少处理依据。

不必试图在第一天就把所有特殊情况想全。可以先拿几个真实案例（尤其是之前出过错、需要特殊处理的例子）考考它怎么应对，再发送下面这段提示词，让它主动提问补齐遗漏：

Potato，请帮我找出关于这套流程我还没交代清楚的地方。围绕我平时怎么拿主意、从哪里查信息、怎么验收结果、以及什么情况下必须停下来找我帮忙，请你向我提问。每次只问一个问题，问完后带我推演几个具体例子，等我给完反馈我们再正式启动自动化。

（英文原版：Potato, help me figure out what I haven't told you about this process yet. Ask me questions about how I make decisions, where I get my information, how I check the work, and when you should ask me for help. Ask one question at a time, then walk me through a few examples so I can give you feedback before we automate this.）

在早先的实操工作坊和访谈里，Lauren Tan 还补充了一个实用习惯：带着 Bot 跑通一两次并完成修正后，直接让它把这套验证有效的步骤保存成可复用的技能（Skill），甚至可以让它建一个私有 GitHub 仓库专门存放这些技能文件，保证后续长期对话里执行标准一致。

4\. 接入真实反馈渠道，缺数据就让它写个小工具来记录

流程跑起来之后，想让 Bot 持续改进工作质量，关键是让它自己能看到执行结果的反馈。

如果线上本来就有反馈渠道（比如客户邮件、社媒评论或门店评价平台），可以直接授权 Bot 定期查看这些反馈。一旦发现有顾客反映等待时间过长，它就能主动去查当天的排班和接待记录，定位问题环节并向你提出改进建议。

![](https://mmbiz.qpic.cn/mmbiz_jpg/zW6S9vt0cSiceQzdDnhAVVEtR3qHmpWk5gX2JsrE8Gg9aL2Zm2MDkblBoVicibPTtpUZt4jmV1w1wSD75gddia7Hiaib79abaK7EChta0Q36tia4nU/640?wx_fmt=jpeg&from=appmsg#imgIndex=4)

如果线下业务还没有现成的数字化记录，Lauren Tan 给出了一个很实用的办法：既然 Grok Bot 自带电脑且能写代码，可以直接让它帮你做一个记录数据的网页或手机小应用。比如经营一家汽车维修店，可以让它写个简单的登记页面，依次记录客户到店、接待沟通、交接车钥匙、开始维修与完工的时间点，很快就能算出真实的等待时长。

同时，跨多个软件协同处理事务时，记得保留一个统一的关联标识（如客户邮箱、订单号、工单编号或条形码），方便 Bot 把分散在不同工具里的记录准确对应起来。

5\. 设置 Routines 自动触发，不用每次手动催办

走完前面四步，Bot 已经能稳定完成单次任务了。最后一步是设定它什么时候自动运行。

如果不设置例程（Routines），每次还是得靠人手动发消息触发。在 Grok Bot 里，可以直接用自然语言设好触发条件：既可以按事件触发（例如收到新询盘邮件、或 Slack 频道出现特定消息时自动启动），也可以按固定周期触发（例如每天早上 9 点或每周五下午准时汇总运行），省去人工反复跟进的精力。

三、从研发团队到生活管家，四个落地玩法与现成模板

结合 Lauren Tan 本人与 xAI 团队公开的日常实践，下面四个已经跑通的真实用法可以直接作为配置参考。

1\. 用幕僚长和工程主管带四个研发助手分工协作

在科技创作者 Peter Yang 的专访实录中，Lauren Tan 展示了她日常使用的 Grok Bot 桌面端真实界面。她在工作和生活里一共配置了 14 个职责分明的助手，但平时自己主要只跟名叫 `kero` 的“幕僚长（Chief of Staff）”沟通。

![](https://mmbiz.qpic.cn/mmbiz_png/zW6S9vt0cSicV8Y1874gXZKlgzK3HwjSy5AJdgRAj964M4Ag2o3N2bMyj7KSEwcxaQgfQZ5fq58mf0QicfQqicXyBmnJfudd65FWrpT76VmXiag/640?wx_fmt=png&from=appmsg#imgIndex=5)

幕僚长接到需求后，会转交给名叫 `matcha` 的“工程主管 Bot（eng lead）”，再由工程主管把任务拆细，分配给底下的 `daifuku`、`gyoza`、`benny` 等 4 个研发 Bot 并行写代码、跑测试。她在配置工程主管时特意写明一条硬性规则：主管只负责拆解任务、分配工作和检查进度，不能自己动手写代码。这套清晰的职责划分，支撑她个人在半年内合入了超过 5000 个 PR，仅 8 月单月就合入 2500 个。

2\. 配一个绝不越权代发帖的全天候社媒监测助手

单职能助手在日常信息筛选上同样实用。Lauren Tan 公开分享过她管理 X 账号的专职助手 `tibot`（单帖超 100 万浏览）：它会全天检索全网提到她或特定关键词的帖子（即使对方没有 `@` 也能识别），过滤掉营销广告与无关争吵，将非英语讨论自动翻译整理，每天按固定时间发来一份精简的分类摘要。

![](https://mmbiz.qpic.cn/mmbiz_png/zW6S9vt0cSic45hAeaEz0deWsL4SN0AFlh0Jf92ibL5ibqw8ED2Ay1xvs2pacFAqvj3sao84ibUcmLJJEPlcZJdDsd03phIZPgkNJKeiahrfoOX0/640?wx_fmt=png&from=appmsg#imgIndex=6)

同时她在规则里明确限定 `tibot` 绝不能替她公开发帖，所有文章和推文仍由她本人撰写，既节省了浏览信息流的时间，也守住了账号安全边界。

3\. 盯住推特收藏夹自动写好代码并部署早报预览

很多开发者平时刷推特看到新出的开源库或工具，随手点个收藏（Bookmark）就留在了列表里。xAI 工程师 Matt Palmer 在公开实操课上分享了他的做法：专门建一个监控自己 X 收藏夹的 Grok Bot。

每当他在推特收藏了感兴趣的新技术包，这个 Bot 就会自动在云端环境里用该技术搭出一个可运行的最小 Demo，配置好代码仓库并通过 Cloudflare 部署在线预览。第二天一早，他打开电脑就能收到一条汇总消息，里面直接附着昨天收藏项目的在线体验链接。

4\. 用官方引导模板与五十六个现成岗位一键起步

如果你觉得从零编写提示词还是麻烦，Lauren Tan 在这篇教程的评论区同步放出了她最新升级的创建助手模板 Dr Eggbot v2。

![](https://mmbiz.qpic.cn/mmbiz_png/zW6S9vt0cS8loMDQbwsk10EqG5HDH96ojJarTF9lwc4hIZOYBiceTeMvwibkKYp5kQZW99ImVuQgNWXBHppcJuYZPn5DyjCr8oUPlwF2mqaHc/640?wx_fmt=png&from=appmsg#imgIndex=7)

它本身就是一个内置了上述配置思路的引导助手。安装后只需告诉它你想交出去哪项工作，它就会按照“单一职责、边界清晰、不留多余工具”的标准主动向你提问，理清目标和步骤后直接帮你创建好对应的新助手。

此外，官方也在应用市场（`x.ai/bot``/use-cases`）免费开放了覆盖市场、销售、研发、财务运营、招聘与个人生活事务的 56 个一键安装职位模板，包括收件箱管家、日报整理员、报销核对员、租房房源筛选助手等常见角色。刚开始上手时，可以先从这 56 个现成岗位里挑一件平时最耗精力的事务试起。

![](https://mmbiz.qpic.cn/mmbiz_jpg/zW6S9vt0cS9Obl9FFhBbASrLTCiadgcpicrUhtviarcK7AErQzKCynPvzia3icZ8nmyLHgbUcRH0jh7Cp6OoB12mk5mkXzOG46AIiaSMbhRURJAzs/640?wx_fmt=jpeg&from=appmsg#imgIndex=8)

写在最后

回看 Lauren Tan 这套高收藏自动化指南，最核心的经验可以浓缩成她总结的四步工作节奏：先看着它执行并当场纠正偏差，把跑通的做法存为技能（Skill），等它能稳定一次做对，再设为自动例程（Routine）。

实际使用时也有两点现实限制需要留意。一是助手贵精不贵多，社区里有团队把五六个 Bot 同时拉进同一个客户群聊，结果每发一条消息都会把所有 Bot 唤醒一遍，白白消耗不少每周配额（今年 11 月初，马斯克就曾因算力成本过高收紧过使用限额）；二是涉及对外发邮件、访问内部系统或财务数据时，初期应在设置里开启前置人工审批（Auto Review），等运行稳定后再逐步放宽权限。不妨先挑一件每天最耗时费力的重复小事，用语音跟你的第一个云端助手聊上五分钟试试。