`这是我的第 364 篇原创，一直致力于从实战维度去分享工具、Agent、技巧、资讯`

大家好！我是唐舰长

之前基于 Workbuddy 的个人工作台场景分享了，如何个人用 Workbuddy 去开发程序，让自己去用，做出来的程序基本上是在电脑上使用，突然发现，是可以部署到微信的小程序中使用。

之前，大部分人包括舰长都觉得做小程序肯定很繁琐很难，但是在实际操作来看，还是很便捷的。所以专门写一篇文章教大家 0～1 开发一个自己的微信小程序

### 01｜创建应用

打开 Workbuddy 这个软件，然后使用个人工作台专家进行干活。做什么、实现什么功能肯定是要以大家都实际需求和想法来。

找到「工作台搭建师」这个专家

![](https://mmbiz.qpic.cn/mmbiz_png/k1k6dPQU2PvReVkP01gzwicuDZp08vygzUZSQLDI10Vkia2YkyofeBULNdSLKGXibtv0TEVn6aFj4xfs4MLUgqPz8ib7iaibzWoQG32vpRnwpUPwc/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=0)

把需求描述清楚，大部分一上来肯定不会描述的那么详细，这个时候就可以反向让 Workbuddy 引导你去提供一些内容。

重点就是“我们先进行沟通，你需要尽量帮我想的完善一些”就是这样的一句话，会使 Ai 理解并先梳理项目构建和用户未能想到的功能和场景。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/k1k6dPQU2PtzGt79vWoc6gYHlRqXYeJhcoZd1wKWGOibRwEqlnvZjSoE0pzckIias15M2cvE8O4fBeSKx1icTopMLT8z7SruHUeBkre23wNB78/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=1)
![](https://mmbiz.qpic.cn/sz_mmbiz_png/k1k6dPQU2Ps1Sds8oUTvUGgJ1AmSBmwFkxEkDb8xORLiaqnx9qia7EKQibyNkA0dT8oZPfCzgqDic0RuOlQ8ADvHQx7fW0nicib2sD7EWrxFLJq78/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=2)

还需要注意的就是当它把项目构建好后，你需要提供一个「小程序 id」给他，因为在最终一步导入到小程序的开发平台软件中，就需要用到包含我们自己账号下的小程序 ID（不理解这一步的，待会儿往下走就知道）

正确的提示词就是：

```
xxxxxxx 这个是我的小程序 id，你需要帮我打包好这个程序，并给我放到桌面上。方便我导入到“微信开发者工具”中调整和预览小程序。
```

![](https://mmbiz.qpic.cn/mmbiz_png/k1k6dPQU2PtcdR22v65NHRYLjibbtkCEXz6nq0k3qkRCURXHJ2Ncq45JqUFWs8ft48Eg5ibqsIAGqzMKia5PDPCCsRn8OLqCXdNh3G8Q01wyok/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=3)

### 02｜获取小程序 id

下面就是小程序的Id 获取方式，有两种方法

**第一种方法：使用测试号**

1.打开「微信公众平台」并点击小程序注册

![](https://mmbiz.qpic.cn/mmbiz_png/k1k6dPQU2PslribIztTDIQo9dQzsTq9yLgpsw5Ed1VuBxkWXias4EjVCPNkibGX4bG0K0Z4g5j2MzEWwzBoX2TmLgMkpdsBWJ7NQf7XfYibpwpo/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=4)

2.在注册页面点击——创建测试号

然后就是用自己本人的微信扫码创建好测试号，创建成功后再登入这个测试号界面

![](https://mmbiz.qpic.cn/sz_mmbiz_png/k1k6dPQU2PvbmqnoZ9EZiaATHnZIcNfnwBlqKe2XxoOKVV6QIJV6FalMd6sIkJs3UFnwqiaOC7M8vzFLr1KgRvJh7FhaEfQESBKxv8D1ibR7wI/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=5)
![](https://mmbiz.qpic.cn/sz_mmbiz_png/k1k6dPQU2PtK2wWJHKjtDhTf9kCFUulNIXj0ibVEicbIH8rGfESyicxHBzD1UVvny2z2pSjTosggEFNoMjPZfvOYxbakCpRziacakrukW8dTM98/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=6)

3.保存小程序 id 并发给 Workbuddy

测试号的界面就是这样的，把 id 复制好发给 Workbuddy，就是这一步的动作

![](https://mmbiz.qpic.cn/sz_mmbiz_png/k1k6dPQU2Pss8rUUrWHiapXnsIU3d0xDia4LJwv92Nrk9jYPhhicoia3dDMPmpK8PmudpWZLbSuXHu5jouYkl4kC6s85Z3x9lQvUSFpcI0jhnZ4/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=7)

这种方法适合，很多看到舰长这篇文章，真的想自己体验一次开发小程序并在微信查看预览效果，可以使用这种创建测试号的方法。

**方法二：注册正常小程序**

1.和上面创建测试号一致

需要打开「微信公众平台」注册小程序，但这一步不需要点击测试号，只需要使用自己的邮箱、接受验证码

![](https://mmbiz.qpic.cn/mmbiz_png/k1k6dPQU2PuuPalHRhjcY0EZdpgUtawnnNHeR2z4p4ZLY4LWgLKY567uEBfrwHfHraVWOOdfTYV45Ipko2Bf76yjjnFlqsr7zpNXiaM6yOibM/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=8)

2.选择注册身份和填写身份

这一步需要选择注册身份，个人、企业等等可以选择，选择后需要进行对应的认证。个人只需要个人自己的身份证验证即可。而企业和媒体这些类型，就需要对应的认证，比如企业的营业执照等等

![](https://mmbiz.qpic.cn/mmbiz_png/k1k6dPQU2PtAVVdYNIXlTK89fuh6FGGyzZWMQTsVHrvZibPmTJFTgsa21mgd1iaiaYicwHgHeF9RbQUZCof0Z1zer0spVDAoMHkicT1Gc4mEk5I8/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=9)

3.获取小程序 id

在「开发管理」菜单中找到小程序 id，也是复制给 Workbuddy

![](https://mmbiz.qpic.cn/sz_mmbiz_png/k1k6dPQU2Pvxvo25nAD8RpK8Q1rgjib9eKxBh2AY2JmCbh0ujXTFRkEFVbEnJzeGZUZ5a128yZz3QH35xsUElfficDRaWiaXjCkF7axOqqIQpM/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=10)

### 03｜下载「微信开发者」工具

这个工具不像 Workbuddy 这种工具，在网站中一搜就能下载，他隐藏在官方的某一个文档中，寻找起来有难度，但是不要忘记 Workbuddy 是一个非常强大的 AI 工具，完全可以让他帮我们下载：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/k1k6dPQU2PszfvVpnYsibun6vgS44wNLfClVCs8PLicTIqF2ibXiaN6tMu9QDqDiaptbXR76CQnwOhGS70cGC8ibdWDcMIicflr7In8SH6OYD0oSfk/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=11)

软件就长这样，Workbuddy 不能直接帮你安装，但是他可以把安装包下载到本地，最后那个安装需要你自己打开安装包进行安装，安装好就是下面这个图标

![](https://mmbiz.qpic.cn/mmbiz_png/k1k6dPQU2Pvs0JXt5vEMtddVgFYzGklRb8whj25AXI3PGuviclXcrjPRjztS2v4OhdSAmnfgmibHClH3SpeUcd2E8GBiabziaOpSQrMaJMB8ASU/640?wx_fmt=png&from=appmsg#imgIndex=12)

打开软件，需要授权自己的微信号进行登入，一定要是自己的

![](https://mmbiz.qpic.cn/sz_mmbiz_png/k1k6dPQU2PveChGJWNfKeQLGxbshZvdibzsWCGSYkBaUVZY5ovefP7bByGlzCeDKu9nJHg7ovrOVvftjzjYYZUuu3tCV0YRUoGItRWvFzkdk/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=13)

登录软件后，可以点击右上方的导入键

![](https://mmbiz.qpic.cn/sz_mmbiz_png/k1k6dPQU2Pv1k5TFkCR1EFnZRhC1M920rrIFJb7xibXfeckHgoy5fUhDTGUGf7Ioicvva2RWYcXsyy1TWjkxT4vibz1JUicXGFJAIibOlpm9ArNU/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=14)

正常情况下，需要打开在 workbuddy 的工作文件夹下叫「xxx-miniapp」 这样命名的文件夹，需要把这个文件导入（打开）到微信开发者工具中

![](https://mmbiz.qpic.cn/mmbiz_png/k1k6dPQU2PtalCeXfJREyKX4AlP7RSdyUZTztkFuskMiaAQxUaR1ibTJtBADGJbXUbdl2hFE9hhKCcMbiaEvv57YsOzsFhjsN0aLKLrTLZib5kc/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=15)

这个路径不是那么好找。所以，在上面的和 AI 对话中的提示词叫：

```
xxxxxxx 这个是我的小程序 id，你需要帮我打包好这个程序，并给我放到桌面上。方便我导入到“微信开发者工具”中调整和预览小程序。
```

也就是说，通过一句话让 AI 帮你把这个不好找的文件，放到桌面上来。这样我们可以快速导入微信开发者工具中

### 04｜导入项目预览小程序

因为我已经导入过一次，所以我这里会有一个显示已在这个工具里面。

当然，在您们的操作过程中需要注意：这个 ID 必须是您自己的，也就是我们从微信公众平台获取到的这个小程序 ID，再填进来一次。

这个时候会检查你填进来的小程序 ID 和你在程序中写上的 ID 是否一致。一致的话，就可以直接进行下一步创建的操作。

![](https://mmbiz.qpic.cn/mmbiz_png/k1k6dPQU2PuyFM20nSwXPicFgFmDot4icXwaqwHiaW9O7PfKEcOJmk3BY4kiczFl1JXFYSU5py1BdJdMBiaUNZ3bjgZJl8bwEnEronEAH2PhdjPU/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=16)

打开后需要注意的是，因为你可能是第一次下载的，它会跳出一些权限和默认的选项，都是英文的。如果英文不好，可以使用微信截图进行翻译。把那个窗口关掉，正常情况下，选择默认选项就可以了。

就能展现下面的一个界面左侧是你的整个项目所包含的目录和文件夹，中间是代码，右侧是预览图。那我做的是一个水墨画风格、比较佛系的摸鱼小程序，点开这个按钮可以计时。

当初做这个的灵感来源，也是在一本书中看到的：每个人每天最起码要进行冥想或者发呆 15 分钟，这对我们的大脑会有帮助

![](https://mmbiz.qpic.cn/mmbiz_png/k1k6dPQU2Pslz3rciaR5ltZNH4zcJItM3wHBiaEJoXD8Fvmp4Xd1Qf5qxIRaLfg1cxCNXmDic9B9ab0bhgfttnHAhSs1n7AXIA7UD4VQwtkYYQ/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=17)

要想在微信中感受这个页面的效果，需要点击整个窗口右上角的小眼睛，也就是预览按钮

![](https://mmbiz.qpic.cn/mmbiz_png/k1k6dPQU2PsdPAdZeiaONqdw7du0d1EFb0IJo7ZV8TuPLbnc71INfrcZ36KJ8IOyTyFBomGyzyXiaYQTmQhOcuQhnicltLiaxZcM1qXiaLjf6Re0/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=18)

用微信扫码，就能看到在小程序页面的效果：

![](https://mmbiz.qpic.cn/mmbiz_jpg/k1k6dPQU2PsV1tnUS6peKGfgwjIWzYZoEHN55SqPf9Cdyz9F25ich5dlLo6G1mKBdT9hsSianwib2jr1QibCiamtIbEgj4KduY6TricAO0yQoB3kE/640?wx_fmt=jpeg&from=appmsg&watermark=1#imgIndex=19)

恭喜您，到这里开发和预览都已经搞定～

下面就是过备案和认证

### 05｜认证和上线

其实微信小程序分很多种：

**第一种：** 简单的前端界面显示，比如做一个摸鱼神器、个人待办事项等等这种只依靠前端显示展现的东西就叫简单的前端界面显示。

这种小程序做起来比较简单，而且微信的认证费用可以走个人认证，只需要花费 30 元

**第二种：** 前端和后端，这个时候部分难还是简单，只要是涉及到前端和后端的都需要用到，服务器或者使用腾讯的云服务，同时还需要备案以及微信认证需要 300 元。

这个 300 元算是企业认证、个体工商户也算企业，认证后功能会多一些，比如加一些支付系统等等

我们这次就是较为简单的上线方式，如果需要做备案和认证，其实流程都差不多，只不过需要花费的钱较多。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/k1k6dPQU2PunWiaIKx7b7fIvrO89MjPxAYY0Ltq8XaXXud827icpUP4vBunvsUc70wD3UXVAsmykKuAARvtmRZKh6GIicyD1By0icVD1Pll9qxo/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=20)

在小程序的网页中把这些功能完善后，在去微信开发者工具上传代码（测试号是不能直接上传的）

![](https://mmbiz.qpic.cn/mmbiz_png/k1k6dPQU2PuXsPGOibOqPGXdWV3Amiaasg8trovOkaE5cQGNLuKTok2icECoTGSGuqfV3nmeCicMn0yOtBX7eocqJRqHt6AeUiaOUkwI8c7g0BOU/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=21)

在微信开发者工具上传后，需要在管理中的版本管理里面打开开发者版本并提交审核。注意，需要先完成账号基础设置（名称、头像）审核通过后才行

![](https://mmbiz.qpic.cn/sz_mmbiz_png/k1k6dPQU2Psc5pC0YicfHtdQndKoBzjxK2PHAaNQV9TIYbrUGx3OTUBoTEibaZ11SDIJqArqlpaP3HwgaVJZHJ1XkxWkic9Xh9webyyJuSuQEY/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=22)

然后就是认证和备案，搞定后你的小程序就能上线并且可以搜素到

### 06｜写在最后

如果在认证和备案的过程当中遇到了任何问题，都可以基于 workbuddy 这个 AI 进行询问和流程的完成。

总的来说，AI 帮我们完成了整个项目的开发，也能指导我们对整个项目进行发布，直到最后弄上线。除了可能需要我们自己去点击等操作，基本上 AI 已经能够帮我们干很多活了。

以前总觉得 开发一个小程序是一个很繁琐的事情，但是现在已经变成是人人都可以去做的事情了。

整个流程反而时间最长的是小程序里的审核和上线的提交，这反而花费的时间长。开发代码、预览以及最终上线，加起来可能 15~20 分钟就能完善好。因为就算界面效果不理想，那也是我们跟 AI 沟通完之后，AI 帮我们调整

如果你在操作过程中遇到问题，或者做出了不错的成品，欢迎在评论区分享

我是唐舰长，持续分享 AI 工具的实战玩法，记得点赞关注，我们下篇见。