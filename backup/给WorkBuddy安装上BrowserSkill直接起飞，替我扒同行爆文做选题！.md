你好呀，我是五竹。

我写公众号有一套自己的流程，其中最花时间的一步是选题。

具体说就是：写之前，我得去看看同行最近都在写什么、什么角度写烂了、有没有我能切进去的空间。

以前这一步全靠手工。打开搜狗微信搜索，输关键词，一页页翻，把标题和摘要抄下来，再点进那些看着不错的文章读全文。

一个话题看下来，半小时起步。

更烦的是搜狗的验证码。翻不了几页就弹一个，让你点选文字，点完接着翻，翻几页又弹。

后来我用BrowserSkill把这一步改造了。现在AI替我扒同行文章，全程不用我点验证码。

* * *

先说清楚BrowserSkill是什么。

它是腾讯开源的一个工具，项目地址：

https://github.com/Tencent/BrowserSkill

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zicAPqf97HX4BI5GKNpv6VwbqPnwM6jlLX2EB85Uq2eCibib6jGgZqUDicYOYscNibhC7kKYttFCBrlEomNb185v2xn1PLDYHz5AeGVrGOFyj8SU/640?wx_fmt=png&from=appmsg#imgIndex=0)

作用是让AI能操作你**已经登录**的浏览器。

关键就在"已经登录"这四个字。

以前让AI去抓网页，它开的是一个全新的空白浏览器，没有你的登录状态。搜狗对这种匿名访问查得特别严，动不动就弹验证码。

BrowserSkill不一样。它用的是你平时在用的、已经登录的浏览器。对搜狗来说，你就是个正常登录的用户，验证码自然就少了。

而且它不挑AI工具。官方说了，只要能调用命令行的AI——Cursor、Claude Code、WorkBuddy这些——都能接上用。

* * *

装起来分三步，我自己刚走过一遍，给你说清楚。

**第一步：装命令行工具**

Windows打开PowerShell，粘贴这行回车：

```
irm https://raw.githubusercontent.com/Tencent/BrowserSkill/main/install.ps1 | iex
```

Mac或Linux在终端粘贴：

```
curl -fsSL https://raw.githubusercontent.com/Tencent/BrowserSkill/main/install.sh | sh
```

装完运行 `bsk --version`，能看到版本号就成了。

这里我踩了个坑：如果报"unsupported architecture"这种架构识别错误，是安装脚本读环境变量出了岔子。解决办法是去项目的Releases页面手动下对应系统的压缩包，解压出bsk.exe放到一个目录，把目录加进PATH就行。

**第二步：装浏览器扩展**

这一步只能你自己动手。在Chrome或Edge的扩展商店搜"BrowserSkill"，安装。装完它会自动连上刚才的命令行工具。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zicAPqf97HX5ziagNa45CH8RBn9f8kz1R9BKvQ9r7NLeRneiaXGmgova0bM49MsA2QED4icjiaTZSHmYFvR76r5npEzG88xlfyBkARF32KPLTCqw/640?wx_fmt=png&from=appmsg#imgIndex=1)

**第三步：验证**

运行 `bsk doctor`，它会一项项检查。全部打勾、看到"extension connected"是绿的，就通了。

如果扩展那项是红的，把浏览器打开、确认扩展启用，再跑一次。

* * *

装好之后，我是怎么用它做选题的？

说白了就两件事，都是**只读**——只看不改。

**第一件：扒同行文章列表**

我让AI打开搜狗微信搜索，输入我要研究的关键词，一页页把搜索结果读下来——标题、摘要、公众号名、发布时间，整理成一个表格。

以前我手工翻好几页、还要跟验证码斗智斗勇的活，现在AI几十秒读完，直接给我一份结构化的同行文章清单。

**第二件：读同行原文提取素材**

光看标题和摘要不够，写之前我得挑几篇最相关的读全文。

以前点进搜狗跳转链接，又是验证码。现在AI直接打开原文，把正文内容读出来给我。

我拿到这些原文，就能看出同行的真实角度、他们踩过的坑、举过的例子，然后避开重复的、找到自己的切入点。

整个选题环节，从原来的半小时手工翻页，变成了AI跑一遍、我做判断。

* * *

有几点我要说清楚，免得你误会。

我用BrowserSkill只做**只读**的事——打开页面、读内容、整理成表格。

我没有让它自动复制别人的文章，没有让它自动发布，没有让它去操作任何后台提交东西。

它就是替我做了"翻页看同行"这个纯浏览的动作。读回来的东西是我判断选题的参考，不是拿去洗稿或者搬运。

这条边界我一直守着。工具能力再强，也不该用来干抄袭和自动搬运的事。

* * *

其实这几年大家都在聊AI Agent。

但我觉得判断一个工具有没有用，标准很朴素：它能不能帮你把最枯燥的那部分活接走，让你专心做只有人能做的判断。

选题这件事，"翻页看同行"是枯燥的体力活，"判断该写什么角度"是需要人脑的判断活。

BrowserSkill帮我接走了前面那半，把后面那半留给我。

这就够了。

今晚花十分钟按上面的步骤装一个，先让它替你扒一次同行文章，你就知道差别在哪了。

我是五竹，下次见。

* * *

分享一下，我用AI开发的两个产品

1.我用一年时间吃透1000篇咪蒙和其它自媒体顶流博主的文章，用她们的底层逻辑，打造了一个「AI爆文写作知识库」：[我用一年时间吃透1000篇咪蒙文章，打造了一套爆文创作skill！](https://mp.weixin.qq.com/s?__biz=MzkyMTc1NDE0NA==&mid=2247485252&idx=1&sn=06b003bf839067d928c3b5ed9e34951a&scene=21#wechat_redirect)需要的👉wuzhuv2

![](https://mmbiz.qpic.cn/sz_mmbiz_png/mYBggbibfUn09egJiamDYv0D5rqJvMJYAvmKt6loPqxqX0ibhIDhg3Zg40ADwkhb79H8w2Ih3GUibjkia83L4cWc39ZibDAvxuIasibhSyjyZmOrgo/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=14)

### 2.一款小程序：拆号鸭，可以把任意个公众号和小红书博主蒸馏成一个skill 👉[做爆文3年，我终于找到了比"洗稿"高级一万倍的方法！](https://mp.weixin.qq.com/s?__biz=MzI1NjUyMzcyNQ==&mid=2247501642&idx=1&sn=21f6da7533cd5edd0af783419bc34977&scene=21#wechat_redirect)

点击↑↑↑↑立即体验