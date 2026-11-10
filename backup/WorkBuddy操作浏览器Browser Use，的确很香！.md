![](https://mmbiz.qpic.cn/mmbiz_png/UzsCVuwOnvRwGDvKa80roPlj742ichFrCLqtDLGnM7NztHMTH42UkhIP3iaXqk4I6RouO5nbiav5rdDg8JlQib93oeNeuPQ2GR81TZ1jWZHzKDs/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=0)

最近半年 AI 圈最出圈的一类能力，是让 AI 自动操作软件，代表有两个：

*   • 一个是 `browser use`，AI 自己操控浏览器，开网页、点按钮、填表单；
    
*   • 另一个是 `computer use`，直接操控整台电脑上的应用。
    

这两个能力都不是凭空冒出来的，computer use 最早是 Anthropic 在 2024 年 10 月随 Claude 3.5 Sonnet 发布的，browser use 这个叫法则是被一个同名开源项目带火的，2025 年它已经是最流行的开源浏览器自动化框架之一。

普通用户大规模用上它们，是今年 4 月的事。OpenAI 的 Codex 桌面应用把 computer use 和内置浏览器一起打包了进去，一句话就能让 AI 替你点页面、跑操作，国外开发者玩出了各种花样。但国内真上手体验过的人不多，海外订阅加网络门槛，把大部分人挡在外面了。

最近国内腾讯的 WorkBuddy 也推出了 `browser use` 的能力，不用海外账号，不用折腾网络，装个客户端就能用。

没用过 WorkBuddy 的同学，先看下面一分钟介绍，用熟的同学直接跳到功能部分。

WorkBuddy 是个啥？
--------------

没接触过的同学先花半分钟认识一下。

WorkBuddy 是腾讯出的 AI 办公工作台，腾讯云 CodeBuddy 团队做的，你用大白话给它派活，它自己拆任务、自己执行，写文档、做表格、写代码这类活都能派。微信、QQ、企业微信的账号都能直接登录，电脑、手机、微信小程序三端都有。

![](https://mmbiz.qpic.cn/mmbiz_png/UzsCVuwOnvRRToq3yx1RNRVj1jE6MxRqFGibMKX9dUPKhice3GDgn5ibibAKYgodTehmg5GScvicKpBG14ohd08fTpT71LpcEZxwBc8X6UpibqwPE/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=1)

这半年它的热度涨得很猛。7 月月访问量突破 2000 万，在同类产品里遥遥领先、排在国内 AI 办公桌面端第一。

腾讯也明显在往它身上压资源，10 月刚和企业微信完成双向打通，消息、文档、会议、网盘这些企微能力它都能调。据说**WorkBuddy已经成为了腾讯旗下继QQ、微信的第三大战略级产品**。

这次的浏览器操控，就是它这波快速迭代里的一步。已经用熟的同学，直接往下看。

* * *

WorkBuddy 更新有点猛啊
----------------

WorkBuddy 最近上了一个新功能，能让 AI 直接操控你的浏览器，这类能力现在通行的叫法是 `browser use`。装个浏览器扩展，它就能**在你已经登录的浏览器里**打开网页、点按钮、滚动翻页。

它干活是在一个独立的标签页组里，有自己单独的光标，不抢你手上的鼠标，也不占你正在看的窗口。它跑它的，你切去回消息、看文档都行。配合手机端，还能**随时给电脑派活**，不用一直守在屏幕前。

看到这个功能，我第一反应这不就是**浏览器自动化**么。让机器替人操作浏览器这件事玩法上，已经层出不穷了，早期全靠写脚本，从 Selenium 到 Playwright。突然有个东西说不用写脚本了，一句话它自己就会点，值得试一次。

跟传统写脚本比，差别在哪
------------

让浏览器替人干活，测试这行的老路子是写脚本。元素定位、显式等待、断言、报告，一层层搭起来。最头疼的两件事，一是登录态，二是前端一改版，定位器成片失效。

`browser use` 把这两件事都绕开了。它操作的就是你手上这个已经登录好的浏览器，登录态的问题天然不存在。它找元素也不靠定位器，AI 自己看页面，自己认出哪个是搜索框、哪个是下一页按钮。页面改版了，按钮挪了位置换了样式，它照样能找到。

代价也有，而且不小。它跑一趟要几分钟，每次走的路径还可能不一样，这两条决定了它暂时顶替不了回归脚本。这个后面细说，先把功能装上，跑起来看看。

先把它装上
-----

入口在客户端的设置里。把 WorkBuddy 更新到最新版，打开设置，找到智能体那一栏，里面就有浏览器扩展的安装入口。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/UzsCVuwOnvRsumBK6PqJ7TcIeX7g602HLx2pVHFcaHEia5FmicbDCtUPdmna3ankDNXbRlv8KuxNkdaMrnHaLuflmWq9WayMic6qWrKNn9laicU/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=2)

我用的 Chrome，选 Chrome 扩展，点前往安装，会直接跳到 Chrome 应用商店，点添加到 Chrome 就行。扩展也支持 Edge 和 QQ 浏览器，用哪个装哪个。

![](https://mmbiz.qpic.cn/mmbiz_png/UzsCVuwOnvQXZibedRa7q176dia0CUibFKmnCIicKJX7KntZXqfwNXlktxo41e8NA7y8cbW6KOBjIBTYiadRUDa70qiaibm8icH9cAOkwHu0CzQC41U/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=3)

装完先别急着关设置页，还要把「允许 WorkBuddy 控制浏览器」这个开关打开。扩展和开关都弄好，它才能真正动你的浏览器，少一个都不行。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/UzsCVuwOnvRbnbYN5iaFuBaqcDXtbIeOCuDZKEye0icjGnR4ahWrkc7hicbz3chPjsaicGkfn4EsDwneJLqXPhCNG8oTaNaEkbLdnOT8h4aNdls/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=4)

第一个任务，去我的网站上霍霍一下
----------------

装好就能用。打开 WorkBuddy 的对话框，选 `/workbuddy-browser-use` 这个技能，然后把需求用大白话发过去。  
![](https://mmbiz.qpic.cn/mmbiz_png/UzsCVuwOnvRgHPDLAwIKkWcfibs2icticu8qLcqVQn8CsOpGnv2z3eibmibB7NicbqeXllLWcbGIciaGpEmSkoXU1y7yylUulvmrAh51zgafrVr34Q/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=5)

我给它派的活是，打开我的测试网站，找到面试题库栏目，把最受欢迎的 10 道题挑出来，每道整理一份回答要点。

接到任务后它先自己打开站点，找到「面试题库」栏目，再逐个进分类页面收集题目。有个细节我盯着看了一会儿，列表页默认只显示前几题，它读完后自己把页面往下滚，把后面的题接着读完，这一步没人教它。

![](https://mmbiz.qpic.cn/mmbiz_png/UzsCVuwOnvQguZmfvpicPm20LA9QFqqYXGAJtYibSXg60KggWDhicRDjG3ePp2ic7Uh1fHyW8uhKoKGHDTsicID84GNAxdgcuml8pcEnuCwh2sibE/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=6)

全部跑完，它交回一份清单，10 道题，每道带一份回答要点，格式也归置得整整齐齐。

![](https://mmbiz.qpic.cn/mmbiz_png/UzsCVuwOnvQGFqGWLhBgH2YocVoZ8kMVxVyIdIu6iaa8vqib541PJ0UkHYlx9Da26NYZTOrEmmkRGnJoL6slA6cGnick0RjuKtZNecd0WicKttQ/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=7)

整个过程我没给它一行代码，没给一个元素定位，就一句话。找入口、遍历分类、滚动翻页、汇总排版，全是它自己捣鼓的。这就是 `browser use` 跟写脚本最直观的差别，你描述清楚要什么，过程它自己看着办。

中间一个插曲，它悄悄换了统计口径
----------------

正常来说，「最受欢迎」该按浏览量排。它最后给的清单里，挑选依据写的是按题目在当前招聘中的出现频率。我一开始以为它理解偏了，点开网站一看，浏览量数字是空的，统计又挂了。

我的网站每道题都有浏览量，计数用的是免费第三方前端库，这库有个已知 bug，时好时坏。WorkBuddy 去读的时候恰好赶上坏的那阵，一条数据都没抓到，于是它判定这个网站没有浏览量指标。其实有，只是那一刻是坏的。

判定完它没停下来问我，自己换了个口径，按招聘出现频率把 10 道题挑完了。挑出来的结果看着挺像样，依据已经换过了，而且它不主动讲。

这件事值得记两点。

降级能力是真好。数据读不到，它自己找了个说得通的口径把活干完，一点没耽误事。但验收 AI 的产出，光看结果不够，**得连依据一起验**。它按什么标准挑的、数据从哪读的，验收时多问一嘴，不然口径换了你还不知道。这条对往后拿 AI 干测试的活普遍适用。

另一个算意外收获。要不是它这次去读浏览量，我都不知道统计又挂了。等于顺手做了一次线上巡检，白捡一条 bug 线索。

第二个任务，多步任务一起派发
--------------

收面试题那单跑完，我又试了个更贴近日常的。还是这个学习网站，一次把三步活连着派下去，话术原样贴在下面。

`帮我在当前谷歌浏览器打开的AI测试开发学习路线网站上：  
1、第一步，点击测试八股文菜单，帮我总结一下这个菜单下有什么值得学习的内容。  
2、第二步，再点击面试题库菜单，帮我计算总共有多少道面试题。  
3、第三点，点击资源导航菜单，告诉我当前收录了多少款工具。`

这次有个和上回不一样的地方。上回是它自己打开网址，并且在workbuddy内置的浏览器中的打开的，而这回我在话术里写的是「当前谷歌浏览器打开的网站」，它就直接接管了我手上已经开着的那个标签页。浏览器顶部先弹出一条「WorkBuddy 已开始调试此浏览器」的提示，确认之后它才开始动。

三步活它自己排顺序，先点测试八股文总结内容，再进面试题库翻分类数题，最后去资源导航清点工具。每走到一步，对话里就同步一步，加载技能、点击元素这些动作全有记录，跑到第二步时已经处理了快两分钟。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/UzsCVuwOnvT8pvqB0XbhiaKb30ictoIb6n5x6rQxyxDj24icibe4DmZaolhF8l14oKUQlghuRldKvObAjt9pgmkQUJ9iaUm4rH5GYQVD0Wh6OWuA/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=8)

还有哪些活，能交给它
----------

两轮实测跑下来，大概心里有底了。我又顺着「人在浏览器里点的活」这个标准，把几类常见的工作跑了一下，分几类列在下面，给大家当个引子，供参考。

**测试类**

*   • 发版后的快速冒烟。话术大概是「打开测试环境的订单系统，把登录、创建订单、退款各跑一遍，哪一步页面打不开、报错、按钮点不动，截图记下来」，跑完给你一份带截图的走查清单，白屏、404、按钮失效最先暴露。这种活写脚本太重，人肉点一遍又烦，总算有地方安放了。
    
*   • 线上巡检。核心页面列成清单，每周固定让它挨个打开，看标题、看按钮、看报错，浏览量那个插曲已经证明这条路能跑，周一通勤路上手机派出去，到公司结果已经好了。
    

**开发类**

*   • 提测前自测。写完一个功能，让它替你把页面流程点一遍，该截的图截好，别把低级问题漏到测试同学手里。
    
*   • 依赖升级盘点。要升的库，让它去 GitHub 的 Releases 页把近期更新日志翻一遍，breaking changes 单独挑出来列成清单，看完再决定这版升不升。
    

**产品类**

*   • 体验走查。让它扮演第一次来的用户，从首页找入口、跟着核心功能走一遍，看不懂、找不到、走不通的地方全记下来，等于换双新眼睛。
    
*   • 反馈归类。应用商店的评论、社区的帖子，让它翻一遍按问题归类汇总，比一条条肉眼看快得多。
    
*   • 竞品调研。把竞品官网的功能逐个点开，整理成清单加截图，省你半天。
    

**办公类**

*   • OA 流程。报销、请假、审批，把单子信息给它，让它照着流程一步步填。
    
*   • 周报月报。要的数字让它去后台系统里捞，捞完直接填进模板。
    
*   • 招聘对比表。让它翻招聘网站，把目标岗位的 JD 整理成一张对比表，要求、薪资、技能词一目了然。
    

**重复录入类**

*   • 测试造数据、运营批量上架、行政搬表格，凡是「从一个页面抄到另一个页面」的活，都可以想一句话试试。涉及提交的操作它会先把要提交的内容列出来跟你确认。
    

几条边界，用之前记下
----------

验证码和滑块它过不去，碰到了会停下来等你接手。页面加载慢、网站临时改版，也可能让它失败，重试或者换个时间再跑。

更要紧的是这两条。它每次跑的路径可能不一样，同一个任务这次从导航进，下次从搜索进，做探索无所谓，做回归就是硬伤，回归要的就是每次一模一样。它也没有断言这个概念，检查结果靠它自己汇报加你抽查，关键路径的严格校验，还是得脚本说了算。

再加上它跑一趟要几分钟，高频回归根本等不起。所以我的用法是分工，一次性的、低频的、要人眼看的活交给它，稳定高频的回归留给 `Playwright`。

* * *

这个功能不额外收钱，装个扩展就能试。

我的建议是别从大活开始。先把手头最烦的那件小事丢给它，发版后的冒烟、拖了很久没做的巡检、竞品文档整理，随便挑一件，站在旁边看它把页面一个个点开，你会很快摸清它的脾气，哪些活放心交，哪些活交了也得盯着。

看完你大概也能感觉到，值钱的从来是你派活的那句话。让它查什么、按什么标准算过、依据从哪来，这几样想清楚了，一句话派出去就能放心。想不清楚，它跑得再勤，也只是把你的含糊需求用浏览器重演一遍。

![](https://mmbiz.qpic.cn/mmbiz_gif/Ljib4So7yuWjRNXHaZHEfrMNCcDian3sGp0ZB3OiavjjBswuPNs1vxKa8KgicVCFbMUJj69hf1KThicjCQZYMs5NicCg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=1)

我是 狂师，**专注分享 AI 提效与软件测试开发技术实战干货**。

如果这篇文章对你有帮助，不妨**点个赞**、**转发、**收藏三连支持！**** ❤️想第一时间收到推送，记得加个星标 ⭐

往期推荐

[2026最新A学习路线全景图：从零基础到A全栈测试与开发实战](https://mp.weixin.qq.com/s?__biz=MzA4NDUyNzA0Ng==&mid=2247509152&idx=1&sn=c4dd7c8cb5832998405d02b2c6979419&scene=21#wechat_redirect)

[2026年做了一个大胆的决定：我要收徒弟了！](https://mp.weixin.qq.com/s?__biz=MzA4NDUyNzA0Ng==&mid=2247508622&idx=1&sn=5228a345caf072daffeadbe359ab3c91&scene=21#wechat_redirect)

[最新AI+全栈测试开发技能实战指南（第6期）](https://mp.weixin.qq.com/s?__biz=MzA4NDUyNzA0Ng==&mid=2247505395&idx=1&sn=468bb6360f530d11e5b370bb729367da&scene=21#wechat_redirect)

📢 最新通知：[「狂师・AI 进化社」](https://mp.weixin.qq.com/s?__biz=MzA4NDUyNzA0Ng==&mid=2247507262&idx=1&sn=a03e29abf84cf5075d29de5604645d87&scene=21#wechat_redirect)，企业级AI智能测试平台实战项目已经上线！🔥 2026年必学的AI实战落地项目，助力搞定年度 KPI，目前报名还有优惠，有需要的同学，欢迎一起实践交流。