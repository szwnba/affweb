▲ 图：Muse Charm

这一切都来源于 Muse，它是 **Meta**（Facebook 的母公司）出品的个人 AI Agent。

元宇宙折戟之后，Meta 把筹码 all in 到 AI 这边：开源模型 LLaMA 当年带火了一大批开源模型。

但后面翻车了，Meta 彻底调整方向。

今年 4 月又发布了 Muse Spark，直接冲进第一梯队。但光有模型没掀起太大水花，Meta 干脆换了打法：从「做基础模型」转向「做 AI Agent」，Muse 就是这个战略的头炮。

这玩意火到什么程度？

据 Sensor Tower 数据，Muse 上线两周下载约 280 万，日均下载增速 55%（ChatGPT 当年是 24%）；9 月 18 日登顶美区 App Store 免费榜，19 日登顶 Google Play。

9 月 23 日的 Meta Connect 发布会上，Meta 又一口气公布了头像视频聊天、Mac 支持、专属邮箱、眼镜集成和 Muse Charm 硬件，发布会后日活直接涨了 27%。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/8TRTn7cvcJLK0fvhkiasia2y2jjay2CQHpnd38G2cGMStMFlnK6P5Su2XEKQFcXoH1iciaMsznN0CnQsibUYqjcW0sbvoqwDQBFUNRIrRz5yrPXo/640?from=appmsg&watermark=1#imgIndex=0)

▲ 图：Meta 设备合集示意图。

你可能会问，现在市面上的 AI Agent 很多啊，我们用到的 ChatGPT、Claude、OpenClaw、小龙虾，以及国内的 WorkBuddy 其实都是 Agent。

Muse 为什么突然又火起来了？只是因为它新鲜吗？还说它有一些独特的地方？

01 怎么安装：第一步就能卡住一半人
------------------

这篇主要讲 Muse 的 APP，而不是智能硬件。在正式介绍之前，第一步肯定就是安装，这事简单但却会卡住很多的人。

到 muse.ai 去注册个账号，网页端直接用，或者下载 iOS / Android / Mac 的 App 也行。

**不用装 CLI，不用 npm，会用手机就会用**。

它是个消费级产品，不是开发者工具。

但有个坑：Muse 目前只在**美国和加拿大**开放。国内 IP 注册完大概率进等待列表，提示区域不支持。

网上已经有不少野路子教程，我实测下来最简单的就是换个国外 IP，成本一块多钱就能搞定。

![](https://mmbiz.qpic.cn/mmbiz_png/8TRTn7cvcJKngYywdCHBJibnVFLiaXOFJUogRmlkrgdyaFI36ObPxMhZbkjZGUxiaHq46kkriaVuSwzRn2M6Mt9icYSib1PA6McNv1PhrWdvD0hibo/640?from=appmsg&watermark=1#imgIndex=1)

▲ 图：Muse 当前地区暂不可用，注册后可加入等候名单。

02 聊天：反常识的极简，处处是心机
------------------

现在的 Agent 界面早就约定俗成了：选项目、设权限、挑模型，千篇一律。

我以为 Muse 也一样，结果它反其道而行：**就一个聊天框，加左边一排功能按钮**。

不能选项目，普通用户也没有模型切换入口，默认就是 Muse Spark。

这感觉像梦回最早的 ChatGPT，简单到不像个 Agent。

![](https://mmbiz.qpic.cn/mmbiz_png/8TRTn7cvcJLUibN7aq11MDWueOtpuOuMneT2GK0ibLa4azO277zicEjFPibYndT5wdM3J9GX5m6bt0HYBbeCGQjIWeTsOL1kNLdRJUsYnNVWy8I/640?from=appmsg&watermark=1#imgIndex=2)

▲ 图：Muse 首次对话介绍了个人助理定位，并引导连接 Gmail、日历等应用。

我以为 Muse 也不能免俗，结果发现它还真的不一样。

![](https://mmbiz.qpic.cn/mmbiz_png/8TRTn7cvcJKfcQ0iazmCvzg4VN0ianR6yDaHamAgn3YGqyY1skTKbfz8TP8UHcGCucl5oM9nOKGWJyZQgEKU3TnGrIv9C5lL4d8DhvPtMhWZo/640?from=appmsg&watermark=1#imgIndex=3)

▲ 图：WorkBuddy 与 Muse 的主要操作区域左右对照。

### 主聊+旁聊

聊天仍然是所有AI工具最常用的功能。本来我以为这个东西也没什么好讲的，结果发现这里面也有文章。

我相信大家在用AI工具的时候，很少会一直在同一个聊天框里面聊吧？

大部分应该是会根据不同的任务开不同的聊天窗口？因为我们其实也不能够在一个聊天对话里面一直在聊，因为它有上下文的问题，聊多了可能就会失忆。

Muse 只有一个主聊天，删不掉、归档不了；其他话题都开在「旁聊」里，随开随删。

![](https://mmbiz.qpic.cn/mmbiz_png/8TRTn7cvcJKsG1CS71zzL2UgGATp1yuNS1RQnjfbNoAgc6qjX57QEv6R4IsYJffTxLOImVw5SIPNvTv2IX3UHGhtibAWP4iaReRwmp4c1AoBo/640?from=appmsg&watermark=1#imgIndex=4)

▲ 图：Muse 对话搜索面板，可按关键词查找历史聊天。

这设计一开始让人看不懂。

别的 Agent 里（比如Codex、Claude Code）旁聊是主线任务中的临时分支，问完就消失。但 Muse 的旁聊其实就是一个普通的新对话。

习惯之后倒也清爽：**一个主聊管长期关系，无数旁聊管一次性任务**。

### 不用等它说完

现在大部分 AI 还是一问一答的回合制，它没回完你就只能干等。但人类聊天不是这样的，微信里你不用等对方回复就能连发十条。

Muse 默认就是这种模式：**你可以随时打断、连续输出，它也会一次性回你一串**。

比如我让它画图，画崩了几次，我一顿疯狂输出，它也一顿疯狂输出。

那一刻真的像两个真人在吵架。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/8TRTn7cvcJK9sJEKozTHXaHIcl8pFmPO6hnz9Xf0JkbK11vGXomXyoqG6n14nOs9wyPfq0RHribl0Sic1GKwS0kBOywezJwz8TOWDADTibCFsM/640?from=appmsg&watermark=1#imgIndex=5)

▲ 图：Muse 的主聊与旁聊界面，以及对话中生成的图片内容。

它还支持**引用某句话再回复**（跟微信里一样），长按消息可以**删除**自己发出去的内容。

注意，是删除，不是编辑：**发出去的话改不了**，这点挺让人不爽的。

![](https://mmbiz.qpic.cn/mmbiz_png/8TRTn7cvcJIB20TAhKzVDuJRL9S2KWyj8anh3TD8LGFgDbv6GV55yWUQhhIlVnRibB5MydmMSRV7DPiaXLMu0ib6FONXaG4PPhOg9ibnibzsmRnk/640?from=appmsg&watermark=1#imgIndex=6)

▲ 图：Muse 对话中的消息操作菜单。

另外所有对话都支持全文搜索（Cmd+K），主聊旁聊、归档的都能搜到。

### 多模态拉满

识图、生图、改图都不在话下，生图用的是 Meta 自研的 **Muse Image** 模型，个人感觉比 GPT Images 和 Nano Banana 还是要逊一筹。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/8TRTn7cvcJIz7JOXQ9f6vIuYxhEbT51kicnOQPRfTWTxntU3A09qcArp2qI7eTXGFvaBJFMjg4PcDpzJHoYJ3zYHdsGp2azB2AFrJdUOd1gM/640?from=appmsg&watermark=1#imgIndex=7)

▲ 图：Muse Image 根据对话指令生成图片的示例。

它还能语音转写、生成语音，甚至生成**最长 15 分钟的多人播客**，直接下载。

![](https://mmbiz.qpic.cn/mmbiz_png/8TRTn7cvcJIvAANibMJhUHUjxkmQCOHC4HZj48lBJrt5JU8VWZyU90MD8dqIggdSytzBdOLbjhqzusEyErQv1M8HkK96VSFlIIMeibUNSZqA4/640?from=appmsg&watermark=1#imgIndex=8)

▲ 图：Muse Podcasts 播客生成与播放界面。

▲ 音频：Muse 生成的播客。

我体验下来中文语音质量非常高，几乎没有 AI 味。

视频每次能生成约 10 秒，带合成音效，要长就多段拼接。

▲ 视频：Muse Video 生成示例。

03 点开头像：动态、审批、定时、身份全在这
----------------------

点击顶部那个吉祥物头像，右边会滑出一个状态栏，四个 Tab，设计得相当贴心：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/8TRTn7cvcJLwZxztcO6Cbv6NtH2AMYgCvSMcIRhVPgicmtzh2TtibiaWdRRAu0X6QNh09rBN6gtuMLwbjRMEs6yRJxE0EkJjqVL6phztVyNq8A/640?from=appmsg&watermark=1#imgIndex=9)

▲ 图：Muse 聊天界面与头像侧边面板中的功能入口。

📋 **动态（Activity）：** 它帮你做过的事，按时间一条条列出来。

点进去能看到极细的工作记录：比如一段音频是用什么工具生成的、文件存在哪条路径。对 Agent 重度用户来说，这就是审计日志。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/8TRTn7cvcJJfJLk8w5NNUQ1RZ8CYtjd5qm97OEwPB3SnmrNUyNTPfxbCO0uic43w25h8xwyZwkicUrV7QQWswYY8EOgfkI0rbCpq8V8Sy2LNI/640?from=appmsg&watermark=1#imgIndex=10)

▲ 图：Muse Activity 展示任务执行记录和所用工具。

✅ **审批（Approvals）：** 统一审批中心。

发邮件、花钱、删数据这类敏感操作，都要你点一下允许。审批还能推送到手机锁屏，不用打开 App 就能点允许 / 拒绝。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/8TRTn7cvcJKqLgpHrV4rqw5YykzU1FHjah5icLj2OssYLUApnoy0yLE6Moia3lW4kzGwWT96NJCV5uz59I00SrkuPnNUPl9zibcHyhwicBFgg1Q/640?from=appmsg&watermark=1#imgIndex=11)

▲ 图：Muse 审批中心列出的待确认操作记录。

⏰ **定时（Upcoming）：** 定时任务和提醒都在这儿管，比如每天早上 8 点给你播报新闻。

👤 **身份（Identity）：** 改它的名字头像、调性格、改记忆。

玩过 OpenClaw 的人一眼就懂：这对应的就是 SOUL.md（性格）和 MEMORY.md（记忆），文件可以直接改。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/8TRTn7cvcJKUtPUxOmvIrYfRl5LeScbMIyhA5gOIDrWmLF4YC45GRaZZN265xbEl8BoVZ8dUkmKrgvJ9hME8FrBgpuksul32IOkh6etZqbU/640?from=appmsg&watermark=1#imgIndex=12)

▲ 图：Muse 身份设置中的头像、名称、编辑区、SOUL 与记忆卡片。

顺带补一下左边栏：

![](https://mmbiz.qpic.cn/mmbiz_png/8TRTn7cvcJK2PdgR45ZB8y5s7tgS8Iicz73QTLWJ5AhAU7dicic5a9lY0kTMKCFS6a2mWopWLVFR4et0tuf98M05lcxdI7oox6rGCSiatibibaMPk/640?from=appmsg&watermark=1#imgIndex=13)

▲ 图：Muse 左侧导航栏中的聊天、搜索和功能入口。

这些其实看名字就一目了然了，很多在别的 Agent 里面也能看到。

其中 **Ideas** 特别有意思：Muse 会主动观察你，发现你重复在做一件事，就弹一张卡片问你要不要设成定时任务，或者每天给你推一条 Tips。

它不是等你下指令，而是在主动替你省事。

04 文件与本地：它最大的本事是 7×24 在线
------------------------

用过 Codex/Claude 或者小龙虾、WorkBuddy等 Agent 的人都知道，除了聊天，它更强大的是处理本地文件，甚至完全接管本地电脑进行工作。

muse 理论上也可以，只要打开访问权限就行。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/8TRTn7cvcJIrh9RCiczy5dhJ5mmeRFDBicicxOX3dnhsvv6UYCGVvF5LyA26fNbGw5BNGwlWvteQpYDp1QiaREGmjomABkpbAGJRj9crdsrhyAo/640?from=appmsg&watermark=1#imgIndex=14)

▲ 图：Muse Mac 应用的文件系统访问权限设置。

但实话实说，我折腾半天没调通，问它自己，它说聊天和数据走的是不同通道。

早期版本，糙是糙了点。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/8TRTn7cvcJJuTa6YqTxWNYZZQFOlVOF0sDPK129AawwzFVs9bBwOnqosexxTGY9NUumsQkhVC70FfxssaTQlJqFql9SMqOPmWfjOFql8wYU/640?from=appmsg&watermark=1#imgIndex=15)

▲ 图：Muse 早期版本的界面与对话示例。

不过这恰恰说明：**Muse 的核心卖点根本不是替你管本地文件**。

它是一个**云端 Agent**：Meta 在云上给每个人配了一台专属主机，7×24 小时在线。

你随时召唤它，它全天候帮你干活：定时任务、监控、播客都在云上跑，你关机了它也不停。

**对比一下：** 想在 Claude Code、OpenClaw 上实现同样的 7×24，你得自己备一台常开的机器（我为此刚入坑了一台 Mac Mini 放家里）。

而 Muse 把这台机器直接送你了，想当个全年无休的「牛马」，云端 Agent 再合适不过。

05 连接外部世界：从 Gmail 到「嘴炮建连接器」
---------------------------

Agent 的看家本事是连接外部世界，Muse 里这叫「连接器」。

比如连上 Gmail，设好权限（只读 / 允许起草 / 允许发送），之后查邮件、回邮件一句话的事。

9 月 23 日发布会上 Meta 还宣布：**每个 Muse 都会有一个专属邮箱地址**，别人给你这个邮箱发信，它能直接收。

![](https://mmbiz.qpic.cn/mmbiz_png/8TRTn7cvcJLReMibrOXww5V3BA1jgGfq4sbRQbHaKcosS5EhvUXDkggyh1XRXcibsibV0BYL03GFqPYPvtwOKjJQvOeB6zmlVibjFIbX93BUUicE/640?from=appmsg&watermark=1#imgIndex=16)

▲ 图：Muse 连接器页面中已连接或可添加的应用服务。

**最重要的连接器是浏览器。** 

注意，是它在**云端的浏览器**，不是你本地那个。

比如我让它打开 Bilibili，远端浏览器会直接显示在侧边栏；需要登录点击的地方，它自己操作，你也可以随时接管（右上角有控制按钮）。

浏览器权限是细粒度的：访问网站、提交表单、下载、上传、填密码，每项都能设允许 / 询问 / 拒绝。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/8TRTn7cvcJKBvWL2Fqcj2JBpBfP9b2AZ3BK6b36L7PX9uGgfFJqklibicib2oicFoWW6mJhcNnoQng0cxDfERibia7D3P84ibSUbSCw4ibvun6wfnmU/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=17)

▲ 图：Muse 操作浏览器。

有了云端浏览器，野路子玩法就多了。

大家头疼的 Claude 账号注册，据说它也能办。我试了下，卧槽，真的分分钟搞定，**连人机验证都自己过了**！

![](https://mmbiz.qpic.cn/sz_mmbiz_png/8TRTn7cvcJJ02DZbibzqe2eescdWx5wkDSht8sZBXD8ialTMqooXMLBgZkqJsawbmnfjpGIoOTjQhkRbY8ib0CuRvrgy2CvJRSWsfXM59H3HCk/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=18)

▲ 图：Muse 完成人机验证。

**它还能连钱包（Stripe Link），替你在网上下单。** 但每笔付款都要你审批，它不能自己刷你的卡。

有意思的是，前不久**亚马逊把 Muse 屏蔽了**，不让它在站内代购。原因也直白：太多订单来自 Muse，平台觉得这动了它的奶酪。

目前它还不支持国内支付方式。

![](https://mmbiz.qpic.cn/mmbiz_png/8TRTn7cvcJLCvBaUdNCyt7WkF7N5tgsh7bQk792CRNnM3qUKttWZcUxo6RYMqBAYKVOcsI8CFf4vYGakianTjQRXUOoqcarSRNJ2JY5Fee50/640?from=appmsg&watermark=1#imgIndex=19)

▲ 图：Muse 账户中的支付或订阅相关页面。

坦诚讲，它默认的连接器不算多，还偏海外。

但 Muse 有个让我震惊的能力：**嘴炮自建连接器**。你跟它说需求就行，一行代码都不用写：建连接器通常要对方提供 API 或 MCP，这些我也不懂，但它会自己用浏览器等各种方式去搞定。

比如我说想随时看豆瓣有什么新剧，它 2 分钟就建好了，还给了个链接让我一键直达豆瓣；我又让它连上 DeepSeek，现在直接在 Muse 里跟 DeepSeek 对话。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/8TRTn7cvcJI9Wb4UPeAvCiaoPmWqMIL1z1yj9tFdUiaSGex1uSXzdc8Kc7Pf8ZXiaicwicup2NmYLoib82Ag01AGbaYIn8v8RnAoP7bmcHyZ200CQ/640?from=appmsg&watermark=1#imgIndex=20)

▲ 图：Muse 根据自然语言需求创建自定义连接器的对话过程。

它甚至还提供了链接，我能一键点到豆瓣上去，这太他妈强大了。

![](https://mmbiz.qpic.cn/mmbiz_png/8TRTn7cvcJLuedlh5yOGUxBjkV81NXndkI1Q1icfYkqic2NfwePjTXH3hMibOn2Z9IKLuVykWGfdJfWj1jmG3f3eoCtetnfoamOELuzlcYSnAY/640?from=appmsg&watermark=1#imgIndex=21)

▲ 图：Muse 完成连接器设置后返回的结果与访问链接。

![](https://mmbiz.qpic.cn/mmbiz_png/8TRTn7cvcJJs4G60gicMvlgJfSnJbSAXTCqnNP3rSQBYwIyCLSdL3PE6uZ9TRbqub2yJvjmxBKfM8arNhIzDxz9CU6PHlFlGicqTVZ9cBvL7Q/640?from=appmsg&watermark=1#imgIndex=22)

▲ 图：Muse 连接 DeepSeek 的连接器配置页面。

有些自建的连接器在设置里看不到，问了它才知道：它是直接给我写了个 **Skill**，效果等同于连接器，装在云主机里。这就引出下一个话题。

06 Skills：全内化了，斜杠调不出来
---------------------

我相信很多人跟我一样，在用Agent的时候会大量使用到Skills，会把大量的重复的任务都做成Skills。

我们习惯了在聊天框里面使用斜杠来把一些Skills调出来。

Muse 默认集成了不少 Skill（生成文档、整理资料等等），但你用斜杠只会看到系统命令，**一个 Skill 都调不出来**。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/8TRTn7cvcJKnTNJNM06ZZV0sad0CjVuYicibrEHiaHKBdllgmEK862jtgXgFQaS37D4X8Z58lRvBUwzgCSPqWaiau0iamS3dG92S5jbgT5SNC9tQ/640?from=appmsg&watermark=1#imgIndex=23)

▲ 图：Muse Skills 页面展示的内置技能与可用状态。

这是 Muse 的一个大不同：**Skills 全部内化了**。

你不需要指名道姓调哪个 Skill，它自己判断这个活该让谁干。

我倒觉得这才是对的：用户只管说人话，调度的事交给它。

Muse 的 Skill 遵循业界标准格式，别处的 Skill 也能装，统一放在 **~/workspace/skills** 目录下。

07 连接方式：App 只是其中之一
------------------

除了网页和 App，Muse 还能通过 **WhatsApp** 直连。Meta 亲儿子嘛，聊天会进到一个旁聊里，相当于把 Agent 塞进口袋。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/8TRTn7cvcJIS4yvV1LKGvibC3K3icepcXUUdqzBzO8dllQ1IEw4dywiaBMickDuBVbDZxgUxNX0heKlA6SMViaU3LCZPKyIp3AsKicdJroswIlBRo/640?from=appmsg&watermark=1#imgIndex=24)

▲ 图：Muse 在 WhatsApp 中的一轮提问与回复。

真正让人眼前一亮的是硬件。

**Muse Charm**：钥匙扣大小，2 英寸小屏幕，内置 5G，按一下角落的指纹键就能直接跟 Muse 语音对话，不用掏手机、不用解锁。

屏幕上住着你的专属形象（默认那只吉祥物叫 Jolly），活脱脱一个 AI 版电子宠物。计划 12 月发货，价格还没定。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/8TRTn7cvcJLOzZL6uG4bPGLeIHTriaR3q7RfibUFVibu2LIHE9icOyDjLVV6KuBN2u4okibdpIanmrhnoXCBC8W7Jop80cxFrDic2dRZsCH3K7CR8/640?from=appmsg&watermark=1#imgIndex=25)

▲ 图：手持 Muse Charm 智能硬件的实拍图。

▲ 视频：Muse Charm 

Meta 的算盘很清楚：**手机之外的每一个触点，都塞一个 Muse 进去**。

**头像视频聊天：** 9 月 23 日发布会上最科幻的一幕。

Meta 推出了 **Muse Realtime Avatar**：你可以给自己的 Muse 定制一张脸、定制一把声音（直接描述就行，比如"说话慢一点、带点英音"），然后跟它**实时视频通话**。

注意不是播一段录好的动画，而是一张会动、有表情的脸，跟你面对面聊天；你边跟它聊，它边在后台替你干活。

这一步，等于把 Agent 从「聊天窗口」变成了「视频那头的一个人」。

▲ 视频：Muse Realtime Avatar 实时视频通话演示。

Mac 用户还有两个小甜点：**Option + 空格**随时唤出快速聊天，**按住 fn 键**能在任何 App 里听写。

9 月 23 日发布会还宣布了 Mac 电脑的正式支持和头像视频聊天，Muse 正在从「聊天窗口」变成「无处不在」。

08 Computer Use：电脑操控
--------------------

最近大家都被GPT 6 Astra的电脑操控给震惊了吧？这个功能Muse也支持。

![](https://mmbiz.qpic.cn/mmbiz_png/8TRTn7cvcJJEb222IpzcBtjnvlPobyvR1lOWhkTSNhRw7h2RE5vz44R3L9oYCAM6r61cW7TxgomgiagxLibuR4OGIuQSsUUk7OE5wQJfuZhmQ/640?from=appmsg&watermark=1#imgIndex=26)

▲ 图：Muse Computer Use 的电脑操作权限设置。

配置项里面的**Computer control** 和 **Browser automation** 默认都是 **"Ask every time"（每次询问）**。

还有个 **Blocked apps 黑名单**，加进去的 App 它看不见也用不了，比如银行、密码管理器这类，建议第一时间加进去。

但实际情况嘛……跟第 04 节的本地文件访问**一个德行**。

我兴冲冲让它"用我的电脑打开 Keynote"，结果我的 Mac Mini 在它那儿显示离线，根本用不了。。。

早期版本，糙是真的糙。

09 收费吗？适合谁？
-----------

**大部分功能免费**，重度用户有付费计划（用量 / 订阅）。现阶段先用免费版完全够折腾。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/8TRTn7cvcJI2xBfUVNgySOrh414ibPyxEwrJ89ASMqib7H4vNib13BP3VZNBCSIeaZ9CDzPq1yXn6D6HqQ4JNQw0HcN3HadUliaLC34YBgTmq0o/640?from=appmsg&watermark=1#imgIndex=27)

▲ 图：Muse 当前计划的用量或订阅信息页面。

Meta 不愧是做社交出身的，把裂变这事玩的明明白白。现在每个人可以发 30 个邀请码，每个邀请码会给双方带来 10 亿的Token。(只用来薅 token，不能通过它来注册)

我这个邀请码：ZIIBN5 还可以用，需要的话拿去用吧。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/8TRTn7cvcJJiaT8nTlXZZB28jk0jzFZ2TjRBqTVoMjLrfTWoOzEgiaAs5AIeriaMMfA8m6eVG5fLYMLMCRXtuDGcYUd1k3xg3q4s5eQosGq2FI/640?from=appmsg&watermark=1#imgIndex=28)

▲ 图：Muse 邀请好友页面及对应奖励说明。

Muse 到底适合谁？

✅ **适合：** 想要个 7×24 待命的数字助理的人；重度依赖 Gmail、日历、浏览器办事的人；愿意折腾连接器和定时任务的极客。

❌ **不适合：** 想让它管本地编程项目的人（Claude Code 更对味）；国内用户（先等区服开放）；对 Meta 有信任心结的人。

一句话总结：Muse 赢的不是模型，而是「替你把事办完」的完整体验：云端 7×24 待命、嘴炮建连接器、内化的 Skills，再加上 Meta 把 Instagram / WhatsApp 的流量往里灌。

10 翻到底层：一个「公开的秘密」
-----------------

在 Muse 里乱点，点出一个疑似没藏好的界面：它的文件结构长这样。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/8TRTn7cvcJLp7jdgYSS9aR4auKPax6fu7jEBEDf2TyH9hFpDd9XVIGAPjFRHTMHajuysNTt2au7w0rqdttAfNsgtwPrAsNI6RCe5FH9XlDk/640?from=appmsg&watermark=1#imgIndex=29)

▲ 图：Muse 云端环境中的文件目录列表。

📁 **memory**：长期记忆库，记着你的偏好、做过的事、重要的人  
📁 **workspace**：工作区，它创建的文档图片音频都在这，你收到的文件也从这来  
📁 **user**：你传给它的东西，比如截图和文件  
📁 **hooks**：事件触发的自动化（比如「收到某类消息就提醒我」）  
📁 **channels**：消息通道配置，比如刚连上的 WhatsApp  
📁 **docs / agents**：产品文档、它的「分身」（子智能体）干活用

几个 .md 设定文件每次对话都会加载：**MEMORY.md**（长期记忆）、**USER.md**（你的基本信息）、**SOUL.md**（性格和说话风格）、**IDENTITY.md**（它是谁）、**AGENTS.md**（工作手册）、**TOOLS.md**（工具备注）。

这些文件**都可以直接改**，想给它换个性格，改 SOUL.md 就行。

熟悉开源项目 OpenClaw 的人一看这结构就懂了。

Meta 官方自己也承认，Muse 深受 OpenClaw 的启发（"heavily inspired"），但强调是从零构建的。

所以这可能也不是什么 bug 泄密，而是一个公开的致敬。文件结构像，是因为本来就师出同门。

我在开头的时候说了，Muse提供了一台云主机给了我们，这不是吹的。很多人已经就是破解甚至进去了。

对于我们大部分人来说，可能你不需要这个功能，但是你可以了解一下。其实也不神秘，你可以直接问它，它是一台什么样的机器。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/8TRTn7cvcJLHVUPzqe9Y13egzR7lDA7qSOoSicKG7tEuFXKBkw5RBfCvhwl8t4iciaRd5TbrPdxua8r5mUDMzrsVUxB7noHmOKqXtdLV53BSXo/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=30)

▲ 图：Muse 对话中解释云端环境并展示 Linux 操作指令。

你也可以运行一些Linux命令。

![](https://mmbiz.qpic.cn/mmbiz_png/8TRTn7cvcJI7ymgV0kTRibYRJ9XAvDH6TlrSa4WMUb5d78MDPL3tq44Gc8sgEzV3pa1WUrKHXgDFM4rLbdPflndQpNeyWvRX0DPyu1oyVZfo/640?from=appmsg&watermark=1#imgIndex=31)

▲ 图：Muse 返回的 Linux 命令执行结果示例。

12 写在最后：为什么 Muse 让我惊喜
---------------------

折腾了几天，总的来说：**体验非常好，产品设计也非常好**。

但最让我惊喜的不是某一个功能，而是：这是为数不多的、没有复刻之前东西的产品。

现在的 AI 产品大多长一个样：聊天框、模型选择器、插件市场，换皮不换骨。Muse 偏不，它很多地方是重新想过的。

随便数数它的创新点：

💬 **微信式聊天**——可打断、连续输出、引用回复，把"回合制 AI"变成了"人类式聊天"；  
🧠 **Skills 全内化**——你只管说人话，调度的事交给它，斜杠命令可以进博物馆了；  
🔌 **嘴炮建连接器**——不会写一行代码，也能把豆瓣、DeepSeek 接进来；  
💡 **想法卡片**——AI 主动观察你、替你省事，而不是坐在那等你下指令；  
☁️ **每人一台云主机**——7×24 待命，你关机了它还在替你干活；  
🛡️ **统一审批 + 动态审计**——敏感操作先问你，做过的事有据可查。

更不一样的可能是**理念**。

别的 Agent 在卷"更聪明的模型"，Muse 在卷"更近的距离"：手机、网页、WhatsApp、Mac、眼镜、Charm 钥匙扣、视频通话里的那张脸。

它想变成一种无处不在的存在。你不用去找它，它就在你身边。

Zuckerberg 说目标是 personal superintelligence，听着像画饼，但当硬件矩阵摆出来之后，这个饼至少有了形状。

当然，糙的地方也得认：本地文件和Computer Use都用不了、Meta 背了多年的信任包袱（只有 8% 的人愿意把密码交给它）。

但瑕不掩瑜。方向对了，糙可以迭代；方向错了，再精致也只是复刻。

如果你问我值不值得折腾，我的答案是：**值得**。

不是因为它现在完美，而是因为它可能是第一款让你觉得"AI Agent 就该长这样"的产品。

iPhone 时刻有没有到来我不知道，但用完 Muse，我似乎很难再回头去忍受那些只会一问一答的聊天框了。