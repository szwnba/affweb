> 大家好，我是吴。 本公众号专注于分享RPA技术、AI技术、AI工具、AI前沿知识、AI变现等内容。感谢您的阅读，关注我一起成长进步。

  
[影刀RPA自动化小白教程-小红书自动发布机器人（一），手把手小白教程，老奶奶都能学会](http://mp.weixin.qq.com/s?__biz=Mzk0NzYyMjA5MQ==&mid=2247484693&idx=1&sn=a32f70918bbda48652b01ce93ab6126a&chksm=c3755cb1f402d5a77a87719c18ed26c2aaff55073f2000f48a75da624ddede66ea16e4fc7366&scene=21#wechat_redirect)

在上一节中，我们准备好了发布内容，本节，我们将内容填写到小红书发布页面中，晚上发布

* * *

3.打开网页
------

打开发布页面，如果未登录创作者平台，先提前登录了

创作者平台内容发布地址：https://creator.xiaohongshu.com/publish/publish

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/4O20yibSlvuJoqicibPIxry3arVLo43tYDpdm1gibYfGibKa5476Q35A5ZX3wibRSjLATxicrgKJkbJiaKzToib7DMnBBibg/640?wx_fmt=other&from=appmsg)

4.点击上传图文按钮
----------

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/4O20yibSlvuJoqicibPIxry3arVLo43tYDpcavw0KCb4NV40wBudCicBiboMj4nmUNhbyQCeeVjeE7waicpYfOG464WQ/640?wx_fmt=other&from=appmsg)
![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/4O20yibSlvuJoqicibPIxry3arVLo43tYDpqibibdDstUVZKIz0KZ9fw9IU4qBEGtD3cygyc2EvNbGSFKU4VhiaMgJdQ/640?wx_fmt=other&from=appmsg)
![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/4O20yibSlvuJoqicibPIxry3arVLo43tYDp6u7icEGAkryznw1u65bkvxBlmZO8CMvj2dXdNSYHTn9wLwaicwzUdEtA/640?wx_fmt=other&from=appmsg)

5.上传首图
------

小红书是先上传首图，后面再追加图片的逻辑

使用【上传文件】组件来上传首图

上传文件路径我们取img_list集合第一个元素即可

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/4O20yibSlvuJoqicibPIxry3arVLo43tYDpTJ7eYhFvFWpCSPXkLhZJn9zXgOLm2LxgJd7iaZWTfaY9LcjutjFY8mg/640?wx_fmt=other&from=appmsg)

操作目标，我们要选定这个上传区域

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/4O20yibSlvuJoqicibPIxry3arVLo43tYDpiaNS3buv8Sajg0RrCU9vAg3wDib3OicwSbMicrWRyzw4MZw38gicozgPiaUw/640?wx_fmt=other&from=appmsg)

上传后，我们加个等待，等待1秒即可

6.循环上传剩下图片
----------

先上完整流程图，这里我们循环上传剩余的图片，只要判断loop\_inten\_index循环索引大于0即可

列表的索引是从0开始的，也就是0表示列表中的第一个元素

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/4O20yibSlvuJoqicibPIxry3arVLo43tYDpibC9VpJ4o0ACvgzt9HBiaKT0I4DOyZXt9hYDTHglsJn7HdeafWoGYrTQ/640?wx_fmt=other&from=appmsg)

接下来，一步步来

添加【ForEach列表循环】

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/4O20yibSlvuJoqicibPIxry3arVLo43tYDpQzibegNJT1PuxVFhiad8lSJdfabxR1CiaOFXNg6Z4lP6I4UTia5u3MNQRQ/640?wx_fmt=other&from=appmsg)

添加【IF 条件】

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/4O20yibSlvuJoqicibPIxry3arVLo43tYDpXYnG5HxByiblD1iaFy5NUVa20GNjVDQeahQvvhQQrnwOMkUB6hhycf6A/640?wx_fmt=other&from=appmsg)

上传剩余的图片文件

我们使用【上传文件】

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/4O20yibSlvuJoqicibPIxry3arVLo43tYDp9mk0ujR0BVb1OWt6IU1bu0SMsEOSZozogHNlM9SIDOF9LnMYpeAV5Q/640?wx_fmt=other&from=appmsg)

操作目标为+上传更多按钮

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/4O20yibSlvuJoqicibPIxry3arVLo43tYDpbZ3Bfat89fTn9Q2AZvzqz2QibLpBCsZMNzdqZWibsh5GDGyoLxRKibbjw/640?wx_fmt=other&from=appmsg)

上传图片后，同样等待1s即可

7.填写帖子剩余信息
----------

完整步骤如下

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/4O20yibSlvuJoqicibPIxry3arVLo43tYDpH096XQaVAGbGLEfybEEV09sLnycouGxhaQF0lN1iazpXvo6ibDM8VWiaw/640?wx_fmt=other&from=appmsg)

接下来一步步操作

设置文章标题

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/4O20yibSlvuJoqicibPIxry3arVLo43tYDpKkshhshWaWpy6MLucqnGvm1KBzibEBZcmIjyTHadia9iaQNAFeic9NhzFg/640?wx_fmt=other&from=appmsg)
![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/4O20yibSlvuJoqicibPIxry3arVLo43tYDpLlziaVJdibc17ibhJoRarOhgZiaJ6jy9x6mbZVf8Bia3ic6YEtoa6RCeUJKg/640?wx_fmt=other&from=appmsg)

设置正文内容

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/4O20yibSlvuJoqicibPIxry3arVLo43tYDpRQxYAAnr9VxxExYJ98S6DNOQ5BNhaKfic5xnziabIIx1aBAyS99WszGg/640?wx_fmt=other&from=appmsg)
![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/4O20yibSlvuJoqicibPIxry3arVLo43tYDpSC5tcEcxhsDUuf1aNcKMicmRvmanGNV57gIrp5ibCibsEGAJo0wzRXKfA/640?wx_fmt=other&from=appmsg)

填写完正文，我们使用【键盘输入】插入一个换行，让标签写在新的一行

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/4O20yibSlvuJoqicibPIxry3arVLo43tYDpBo2TsOyvIPhOKUeZ4zk37PiaiczicBNV7KGXuCRtfefGON7Sibmg8vZkhg/640?wx_fmt=other&from=appmsg)

ForEach列表循环添加标签。这里操作目标和上面正文的操作目标一样。

注意这里要勾选追加输入

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/4O20yibSlvuJoqicibPIxry3arVLo43tYDplhibX4pqtkicf2oy4HoMItzKiaiaaU2F93FBxrjSickV9tQDhr15nHZr3ww/640?wx_fmt=other&from=appmsg)
![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/4O20yibSlvuJoqicibPIxry3arVLo43tYDprI7vT9DFydfNj1Gxv9BqhmLgHgPyHkUgQBsXd1hFZiag11Iuz1qxHMQ/640?wx_fmt=other&from=appmsg)
![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/4O20yibSlvuJoqicibPIxry3arVLo43tYDpoVhYQ1MmFLrat3IQvqibPWt6f6I7mrY9GZ4vcw6g4xJqlEUOAHZXNqA/640?wx_fmt=other&from=appmsg)
![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/4O20yibSlvuJoqicibPIxry3arVLo43tYDpzF6Iib37icqFPbibLDs2dVeuNBdAUtPSCrTfIxAlcA0uY2EvlyoRSWibPA/640?wx_fmt=other&from=appmsg)
![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/4O20yibSlvuJoqicibPIxry3arVLo43tYDpC49WG6UXWhIpwhJSKahXUibfwEB4ibUDkAq1cMlzORcELUToiabzSaQgQ/640?wx_fmt=other&from=appmsg)

8.点击发文
------

我这里演示的是立即发布，你也可以根据实际情况，定时发布

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/4O20yibSlvuJoqicibPIxry3arVLo43tYDpiauadiaIChkx0RhUDa3wJXL1f1IQuSEOppEV6fFrrIqRjYxib0gF65RmA/640?wx_fmt=other&from=appmsg)
到此，程序就做好了，你又学会制作一个小红书RPA程序了，学废了没？

* * *

**《影刀RPA自媒体提效实战宝典》当前已经有1200+读者，内容已经更新****50****篇。购买小报童阅读资料，**还送配套答疑群。** 少喝一杯奶茶，为自己冲个电，感兴趣可以入手，当前非常划算。直接扫下图二维码，然后加我入小报童群，进行影刀RPA学习**

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/4O20yibSlvuJoqicibPIxry3arVLo43tYDpAMj7cSyjiauqGRxIM3J6KAxlGCTTI6Zw6cvrp0bboID0yppYpmk4jhw/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/4O20yibSlvuI9P8TQZibMnHgjcs2F1FBeVvbkjYOibjo9OUDjwMgAoXjw1Viae4kq7B5e4jibWkcKicxcQ7CHSPuOKfA/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

欢迎**关注**、**点赞**、**转发**给我鼓励~

👇👇关注我👇👇陪你一起阅见更好的自己

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4O20yibSlvuJoqicibPIxry3arVLo43tYDpqgGbOia6pocXa1uKah7ictxfeYLc5fYnH7yoD2IghTmP4NtNMeK1Ggmg/640?wx_fmt=png&from=appmsg)

**微信号**

AlbertWubinbin

+我领取RPA基础手册一份