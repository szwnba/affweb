![](https://mmbiz.qpic.cn/sz_mmbiz_png/vAib7LLTowx83bxVXSTicLaDSTPiazZ2v5iauKvBiccQHmcx0DNboOUhrdzjf3QtIEDwjmREt8XicnahW1kCGr8zzicQfrneSNf9p6IxtiahbOMdS0I/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=0)

前几天，Cloudflare 做了一次很有意思的更新：

Workers 免费版的大小限制**提高到了 64MB**。

以前免费用户只有 3MB，稍微复杂一点的项目，打包以后可能就放不进去了。

现在一下提高了二十多倍。

这也让我重新翻了一遍 GitHub 上的 Cloudflare 开源项目，发现这几年已经出现了不少非常成熟的东西。

临时邮箱、图床、网盘、笔记、文件分享，甚至 AI 语音转文字，都可以直接跑在 Cloudflare 上。

我从 awesome-cloudflare 里面挑了 10 个比较有意思的。

很多项目个人使用基本都可以利用 Cloudflare 的免费额度跑起来。

1\. 搭一个自己的临时邮箱
--------------

![](https://mmbiz.qpic.cn/mmbiz_jpg/vAib7LLTowxibzFYRPKVrkoJqU6df9Ccz2tB19NoTK2oNfIpcTIYbNJ8enXp3BYEpxw969HX4wOcmywPo07dCIAsr074mt6xs1gxPDS1ich8Vs/640?wx_fmt=webp&from=appmsg&watermark=1#imgIndex=1)

GitHub：

https://github.com/dreamhunter2333/cloudflare\_temp\_email

这是我最推荐折腾的一个。

我们平时注册一些网站，经常会遇到需要填写邮箱、接收验证码的情况。

不想暴露自己的真实邮箱，就可以使用临时邮箱。

这个项目可以直接用 Cloudflare 搭一个属于自己的临时邮箱。

比如你有一个：

https://ruguo.dev/

就可以生成：

anything@ruguo.dev

用来收验证码或者注册邮件。

它已经不只是一个简单的邮件转发脚本了，还有完整的前端和后台，支持附件、多语言、自动回复，甚至 IMAP 和 SMTP。

最重要的是，邮件接收、程序和数据库都可以利用 Cloudflare 提供的服务完成。

你不需要自己维护邮件服务器。

2\. 自己的免费图床
-----------

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/vAib7LLTowx85hkptQrz2PzRpAzGTd4GRdWs22uoHXl0sVUooDn23fxic9wwMErZE3yVkrnVv4GeN2TZTd7Qa7qox8O6mBPNvbXSP4WdTRW3E/640?wx_fmt=webp&from=appmsg&watermark=1#imgIndex=2)

GitHub：

https://github.com/MarSeventh/CloudFlare-ImgBed

如果你经常写博客或者 Markdown，应该知道图床有多重要。

把图片上传以后，直接得到一个 URL：

https://img.ruguo.dev/hello.png

以后写博客、写文档都可以直接引用。

CloudFlare-ImgBed 就是一个完整的图床程序。

它支持 Cloudflare R2，也支持 Telegram、S3、WebDAV、Discord 等不同的存储方式。

而且自带漂亮的网页管理界面。

如果你平时经常写博客，这个项目非常值得部署一个。

3\. 自己的文件和文本分享工具
----------------

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/vAib7LLTowx8goVz6OOxBx4ogKNNiaFNyNibsaF3N2rLbpfgGaxnsBpQib3yUmtjOwfblfpiaCYQL4Lcj8U5NPwMjkm8O65etBNkGvAPQRctcBRw/640?wx_fmt=webp&from=appmsg&watermark=1#imgIndex=3)

GitHub：

https://github.com/ling-drag0n/CloudPaste

这个项目有点像 Pastebin + 文件快递。

比如你有一大段文字需要发给别人。

不用塞进聊天窗口，直接粘贴进去，然后生成一个链接发过去就行。

它还可以分享文件。

支持密码、Markdown、阅后即焚、WebDAV，甚至可以把 S3、OneDrive、Telegram 等不同的存储放在一起管理。

平时临时传文件、分享代码或者文字，都很好用。

4\. 安全地分享密码和 API Key
--------------------

![](https://mmbiz.qpic.cn/mmbiz_jpg/vAib7LLTowxicQ9qCHeOp86kracLMfn7icSKhic0rxtAChXUur9naPX31D3aysroMPJSN6qMqOTNxSbPANaCBxRwIa2GRR7SjcjSNs7H2qwqYow/640?wx_fmt=webp&from=appmsg&watermark=1#imgIndex=4)

GitHub：

https://github.com/yclgkd/ZeroLink

这个项目我很喜欢。

有时候我们需要把：

密码、API Key、恢复码、服务器密钥

发给另外一个人。

直接通过微信或者 Telegram 发，多少有点不放心。

ZeroLink 专门解决这个问题。

你把秘密放进去，它会生成一个分享链接，对方打开才能看到内容。

内容在你的浏览器里就已经加密了。

服务器本身也不知道你分享的是什么。

而且不需要注册账号。

以后需要给朋友或者同事发密码，可以用自己的域名：

https://secret.ruguo.dev/

至少比直接把密码扔进群聊优雅多了。

5\. 自己的私人笔记
-----------

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/vAib7LLTowx813GibP8ZTBoKuJ4ecyDAYBf8VrY1xOXCFTL5oia2x8vLjy8Nhv1x32djAVibgINKKFPDYR24CiaVy6ec33cOyw0xFzWyzJD9VdnI/640?wx_fmt=jpeg&from=appmsg&watermark=1#imgIndex=5)

GitHub：

https://github.com/souvenp/memos-worker

喜欢记东西的人，可以看看这个。

它是一个运行在 Cloudflare 上的笔记和知识库。

支持 Markdown、文件附件、公开分享、Telegram，还可以按照标签整理自己的内容。

你可以把它理解成一个非常轻量的私人 Notion。

看到一个有意思的网站，记下来。

突然想到一个产品点子，记下来。

写了一段代码，也可以记下来。

最重要的是：

数据是自己的。

对于喜欢自己掌控数据的人来说，这一点很舒服。

6\. 免费的 AI 语音转文字
----------------

![](https://mmbiz.qpic.cn/mmbiz_jpg/vAib7LLTowx9GnS4hI37v7KXic6M314oBoiaKHpV1dUsFBsMLicRYGatydnafayloFUgMzHyeSbiaCp9Z5QhUj7dNkvjUr0ibpacVK8GjR8ecRCvk/640?wx_fmt=webp&from=appmsg&watermark=1#imgIndex=6)

GitHub：

https://github.com/thun888/whisper\_cloudflare

这个项目就比较有意思了。

它直接利用 Cloudflare 提供的 Whisper 模型做语音转文字。

上传一个音频文件，

Cloudflare 帮你转成文字。

还可以直接生成 SRT 字幕。

也就是说，你甚至可以利用 Cloudflare 搭一个属于自己的：

AI 音频转文字网站。

以前说到 AI 应用，大家第一反应往往是需要服务器、GPU，或者购买各种 API。

现在连这种东西都可以直接跑在 Cloudflare 上了。

当然，如果你不想自己部署，也有很多直接使用的免费在线转录工具：

https://videotranscriptfree.com/

7\. 自动追踪 GitHub 项目更新
--------------------

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/vAib7LLTowxicibongMr75EwmKrXvlGvT6sKSomyX2IxsFXudIlx7pNkbhLPvMByDDL1YPibJuhOEdtiaxsicrs3ArE7miaB83T4Zn9Ee4W3RRMgp0/640?wx_fmt=webp&from=appmsg&watermark=1#imgIndex=7)

GitHub：

https://github.com/fatwang2/gitpush

如果你关注很多开源项目，这个东西非常有用。

比如你一直在关注 React、Next.js 或者某个 AI 项目。

但是你又不可能每天打开 GitHub 看它更新了什么。

GitPush 可以订阅这些项目。

项目更新以后，它会使用 AI 帮你总结这次更新了什么，然后直接通过邮件发给你。

它用到了 Cloudflare Workers、Workers AI、Workflow 和 Email Routing。

这已经是一个相当完整的 AI 应用了。

8\. 自己的文件传输助手
-------------

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/vAib7LLTowxiczdnbg86cJfYeqSvu6hP6nNBEU2tx8UQXlPqLBerk55trQUHWoRgwR82QkicLPjxEgRchpJ2cZRXvJRGzC5Pd9wrSjtRZfPDuE/640?wx_fmt=webp&from=appmsg&watermark=1#imgIndex=8)

GitHub：

https://github.com/lyonbot/cf-drop

这个项目的定位非常简单：

文件传输助手。

你可以上传文件，然后通过链接分享给其他设备或者朋友。

文件存在 Cloudflare R2，信息存在 D1。

它还支持密码保护、多文件下载，并且针对手机进行了优化。

甚至可以直接添加到手机桌面。

如果你经常需要在电脑、手机之间临时传文件，可以自己部署一个。

9\. 自己的网址导航
-----------

![](https://mmbiz.qpic.cn/mmbiz_jpg/vAib7LLTowxic18BNZTyMbgWgUqnZY3WoGLNpq7XR8ial8SGXEnMiad0rMXd4JuXJl3oiaBPWNxtK32ibnDmPJiadk3icicGWJufSv3KkcG3zZp4zABs/640?wx_fmt=webp&from=appmsg&watermark=1#imgIndex=9)

GitHub：

https://github.com/sese972010/CloudNav-

浏览器收藏夹用久了以后，基本都会变成垃圾场。

几百个网站塞进去，最后自己都不知道收藏了什么。

CloudNav 可以搭建一个属于自己的网址导航。

比如：

https://nav.ruguo.dev/

把平时常用的 AI 工具、开发工具、网站全部放进去。

它还有 Chrome 扩展。

看到一个不错的网站，可以直接收藏到自己的导航页。

相比浏览器收藏夹，这种方式还有一个好处：

任何设备打开一个网址，就能看到自己的收藏。

10\. 搭建自己的内容发布平台
----------------

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/vAib7LLTowx8F5elUCnBMByzwia2t3MF9ItibNUt31fZZfcn9E00ZQFzoONxZ1ano9zhB7eYBSKeXYpDXlOx9tXtIS9ibt36e21eyvZOicBXvFNQ/640?wx_fmt=webp&from=appmsg&watermark=1#imgIndex=10)

GitHub：

https://github.com/microfeed/microfeed

最后一个项目稍微重量级一点。

microfeed 是一个完整的内容发布工具。

你可以发布：

文字、图片、播客、视频。

然后自动生成网页、RSS Feed 和 JSON Feed。

你甚至可以拿它搭一个自己的博客、播客网站或者个人内容中心。

它的数据和文件都可以放在 Cloudflare 上。

换句话说：

一个完整的内容发布平台，也不一定需要传统服务器。

Cloudflare 已经越来越不像 CDN 了

Cloudflare 的其他基础服务
------------------

把这些项目放在一起看，会发现一件很有意思的事情。

很多人对 Cloudflare 的印象还是：

CDN、DNS、网站加速。

但现在的 Cloudflare 已经完全不是这样了。

Workers 可以运行程序。

D1 可以当数据库。

R2 可以存图片和文件。

KV 可以保存数据。

Email Routing 可以收邮件。

Workers AI 甚至可以直接运行 AI 模型。

把这些东西组合起来，你会发现：

一个普通网站需要的绝大部分东西，Cloudflare 都已经准备好了。

更重要的是，它们基本都有免费额度。

对于一个每天只有几十、几百个人访问的个人项目来说，很多时候已经足够用了。

这也是为什么现在 GitHub 上出现了越来越多这种项目：

不需要 VPS。

不需要 Docker。

不需要维护服务器。

注册一个 Cloudflare 账号，绑定自己的域名，然后部署。

就可以用了。

如果你想继续挖这类项目，我推荐一个 GitHub 仓库：

https://github.com/zhuima/awesome-cloudflare

作者收集了大量可以利用 Cloudflare 部署的开源项目，而且还标注了项目目前是否仍在维护。

我上面列出来的 10 个，只是其中很小的一部分。

以后在 GitHub 看到一个喜欢的开源工具，可能真的不用第一时间去买 VPS 了。

先看看，它能不能扔到 Cloudflare 上。

关注我
---

记得关注我，每天给你带来更多有趣的开源项目与 AI 魔法。