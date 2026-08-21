![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/WCrDl4BUjHyH4XUiaETylIJY0kuVLvgial2gA884uCiaPzqxQtNorBdjon5RdZTHqpfK2CVRy9YtCw58aSCdtS81A/640?wx_fmt=jpeg)

目前AI 在编写代码方面虽然已经非常出色，

**但对于普通人来说，要创建一个应用还是有难度**，因为还需要设置开发环境、安装软件包、配置数据库。

然而**Replit Agent 把这些流程都自动化了！**

只需要说需求，自动建好文件和依赖和代码，直接一键部署网站。

亲自体验了一番，要比cursor的composer要易用。

**下面我会讲述一下自己亲测的例子来演示。** 

**（文末有惊喜）**

在这之前先看看火爆全网的几个例子：

设计师Aman Mathur仅仅花了4分钟就构建了一个带有 Waitlist 的登录页面，这不足以稀奇，但是这个登录页竟然还是连接了它的数据库的：

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/WCrDl4BUjHyH4XUiaETylIJY0kuVLvgialT8icqxaQO3bz8y5XIpM2Zfrg9axrc1CdibzDkic5Y65KF2HUxjhTbicaxQ/640?wx_fmt=gif)

通过三个简单的提示得到了一个名为横向冒险游戏。这个游戏具有完全可编辑的代码和文件，并且可以通过点击一个按钮来托管：

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/WCrDl4BUjHyH4XUiaETylIJY0kuVLvgialTicOHH2DebG0M5qHVhyqOtmXpGdwfaAibxsvJicF2v4GPRvTPhwYrZqgQ/640?wx_fmt=gif)

花了 5 分钟创建了一个社交媒体广告生成器，使用 Flux 生成高质量的广告图片：

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/WCrDl4BUjHyH4XUiaETylIJY0kuVLvgialMgC4W9hGdnuZPfYCicGLDz0OVdukibhynVFNicuvlEbFaGYjNSrHvRbGA/640?wx_fmt=gif)

目前Replit Agent功能需要付费用户才能体验，以年订阅的话需要120美元，但一次性付费900多RMB还是挺心疼的。

**但作为一个AI自媒体作者，要不先尝新一下？**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/WCrDl4BUjHyH4XUiaETylIJY0kuVLvgialS2jNnuDNxy44icUvl0s7IVFQibPI4x2IU5xfZxQOLc2beFDibWYAMwibWA/640?wx_fmt=png&from=appmsg)

**滴，花完钱，开始测试。** 

首先去商店下载一个Replit，

**点开Replit的手机APP应用，点击AI项目：** 

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/WCrDl4BUjHyH4XUiaETylIJY0kuVLvgialmIOlvTNI9vw27WuDiaW8pjMqcxtS8CVVicRNJfE7niaBv8oN7sRAPtTmw/640?wx_fmt=jpeg)

**输入需求：** 

做一个文生图的网站，调用openai的dalle3：

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/WCrDl4BUjHyH4XUiaETylIJY0kuVLvgialiaE8HclLEiahhhHY0WMW2Or88GLB1Y8jkxsPPCiaqibX7rVHPN4Vm7Nbrw/640?wx_fmt=gif)

**等待1分钟后，项目的文件全部自动写好：**   

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/WCrDl4BUjHyH4XUiaETylIJY0kuVLvgial4Tj3Jo2ohK0JJlWs3974RpQvRpG14GvqWiceHGgcEJQhKWXMn9VhgEA/640?wx_fmt=jpeg)

当你还在担心不会调用openai的api怎么办？

**你根本不用会。** 

**因为Replit会给出一个输入框让你填api-key：** 

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/WCrDl4BUjHyH4XUiaETylIJY0kuVLvgialQSA1eBYymbD9y49oUicPlcKibqIzUJZWHkrX05dScibSBQfrle5FebgxQ/640?wx_fmt=jpeg)

**输入apikey后，继续运行：** 

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/WCrDl4BUjHyH4XUiaETylIJY0kuVLvgialAXLHGerAGRyNdwT22hZnKrQzAia1lo02Y3c165Yuynyia9UcUCZgDm0g/640?wx_fmt=gif)

到这里，一个网页已经基本做出来了：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/WCrDl4BUjHyH4XUiaETylIJY0kuVLvgial4T85H7rDJbUpSsXnWNgb4iazzxec7g4R1WysbUycgYdTWwk1qGaN4jw/640?wx_fmt=png)

现在测试一下网站的功能能不能正常使用：

**让他做一个榴莲猫的头像：** 

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/WCrDl4BUjHyH4XUiaETylIJY0kuVLvgial3kU0XvSjyQgD9t0Tljy7ZC4f1V6XpRYQkOWdsewNGNxWtHmicMygYsA/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/WCrDl4BUjHyH4XUiaETylIJY0kuVLvgialsdT0uErXHeBDsUwW8rFe0XImrZOiaA8oTWT24wsj0hsxmV2GWP67yMg/640?wx_fmt=png)

**竟然真的成功了，实在是有点惊艳了。**   

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/WCrDl4BUjHyH4XUiaETylIJY0kuVLvgialp3z55yjS1xdCdsPAtABp5TLskQVRxjaheasgf8mDNBeKxz4oE4AvIg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/WCrDl4BUjHyH4XUiaETylIJY0kuVLvgialovD6tur3skWPRh8jib3ah2ZlTR0DhkxZENnzmEUcbGuS03qo0Z1mKtg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/WCrDl4BUjHyH4XUiaETylIJY0kuVLvgialQERSnaGaxQVzJXXsRAfLIRsaB6BKcE5D1Zxm53KzicdwdrWnkTXXMSA/640?wx_fmt=png)

非常简单地就完成了网站的上线。  

前后花了半小时吧，主要是不熟悉界面，欢迎大家去白嫖我的api，一共就几美刀，一天后我就关了。

总结来说：

Cursor目前的composer功能其实也能做到，照着复制粘贴就行，而手机上其实Claude的app版本也能用artifact。

**但Replit Agent方便就在Replit 是一个可以部署的平台，****它的优势在于便捷的开发和部署流程，尤其是对于初学者和不太熟悉编程工具的用户。** 

所以接下来是不是：

cursor+claude+replit=初创公司？

最后讲下我自己运营的一个星球今天上线了。

**平时自己喜欢收集各种渠道的信息，想着找个地方汇集起来，加上现在AI的发展迅速，希望能帮到更多的人一起学习，我也会把自己以后捣鼓的项目放上去。** 

1.  80篇AI产品增长策略和案例（日更）
    
2.  AI精选开源项目（日更）
    
3.  AI资讯日报（日更）
    
4.  AI杀手级应用追踪
    
5.  70个AI变现案例合集
    
6.  其他付费的网盘资源
    

**内容如上，至于价格一年就两杯星巴克的钱。** 

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/WCrDl4BUjHyH4XUiaETylIJY0kuVLvgialCoIqqHEicQ7VsZL8kOYThCwake15GnjXJsaQGYnUgyH021DkunFeljw/640?wx_fmt=jpeg&from=appmsg)

_全文无广告，_

_完。_