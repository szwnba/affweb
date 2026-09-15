前几天牛哥分享了如何用AI免费开发一个微信小程序并上线（[我用AI开发了一个小程序，已经开始挣钱了](https://mp.weixin.qq.com/s?__biz=MzI0NTc2MTE2NQ==&mid=2247486302&idx=1&sn=42404a23180c3ef6989e9219c38ea778&scene=21#wechat_redirect)），然后后台有很多小伙伴问牛哥那内容怎么办？

相信很多小伙伴都会遇到一个问题，如果我们开发的不是一个纯工具类小程序，而是一个内容类的小程序或者一个网站/app，那该怎么做内容运营呢？

其实也是可以借助AI来实现的，我们只需要搭建一个完整的内容运营体系，AI就可以自动化运营应用的内容，下面牛哥又来毫无保留地分享其背后的秘密。

一、设计内容运营体系架构

以「牛哥AI圈」小程序里的内容为例，它有三个核心内容板块，即AI最新消息、AI相关教程以及AI相关的资源，其中AI最新消息更新频率最高，因为它需要获取全网最新的AI消息，所以牛哥给这个内容板块搭建了一套7x24小时全天候的内容运营体系。

![](https://mmbiz.qpic.cn/mmbiz_png/pHT5kHn0SJcww8DDWCtEpx9JOH0icTnFibbJeD0D5MoKMESwC4OBZtEfYWk2jm5ic8XjRP9tMiamfV07KLnvXa8nF9bP7AQKjIRrF4VJzGX3ZrE/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=0)

全自动化内容运营体系核心的架构如下：

![](https://mmbiz.qpic.cn/mmbiz_png/pHT5kHn0SJfMMWQnb8gSFiajpBDJljUNWTFV57wJuVajhDjrx5RsymRWsW3JbqsQaGrAal7oOjvl3EzVn2l1mythJh4u5OzfpOSLf896feBI/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=1)

它有人工运营和AI全自动化运营两条路线，其中AI全自动化运营是主要的，人工运营为辅助，目的是补充AI没有发布但人工想发布的内容。

另外，在消息推送方面也是全自动化的，但它不是AI完成的，而是借助了微信的订阅机制，当用户在「我的」页面添加了订阅次数，一有新的内容就会自动化推送给用户，用户就可以第一时间获取到最新的AI消息。

![](https://mmbiz.qpic.cn/mmbiz_jpg/pHT5kHn0SJdq5ddWD9FSvfUqF7WZOp9aqOKykC8aFp2Rsk0ibkVETzicJThq1EicnW0x03jk0hKgU9yfdPVQXHtJuJAU1Z33dN56ZHtHP7XRVo/640?wx_fmt=jpeg&watermark=1#imgIndex=2)

二、实现全自动化运营体系

如果大家有充足的资源，那就可以部署到自己的服务器上，如果资源有限的话，那牛哥推荐使用免费的，像牛哥AI圈的内容AI消息内容全自动化的运营体系就是部署在免费的Cloudflare上，具体的部署教程如下：

1、准备工作

我们需要注册一个Cloudflare账号，使用免费的权益就行了，它的workers每天有10万次的免费请求，AI额度也有10万，还有一定量的KV存储和R2存储，足够我们的小程序使用。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/pHT5kHn0SJffkzYtI1icxQlLWVW8AjCvk1emU6tGxrdaNCNgqN6rmVQ4icnE5UMIwdqcVQI7XouBNmCznaYSXHFLCZR30hpGUSel0HZGVmu7I/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=3)

有一个需要注意的事情是，我们部署workers后，它给域名地址打开非常慢，甚至是打不开的，所以有条件的可以自己绑定一个域名，或者到https://www.dnshe.com/搞一个免费的二级域名，反正自己用，关系不大。

2、开发实现workers并部署

我们和开发小程序一样，在AI开发工具中新建一个项目，然后告诉AI「你帮我开发一个cloudflare workers程序，功能有xxx（你的需求），对接管理后台/数据库（比如supabase）。

![](https://mmbiz.qpic.cn/mmbiz_png/pHT5kHn0SJe6HhpKtERHzCPxyVfNmIVFtlmI5skmuIP642FTkyo86C7mAf602kNBP7t2AdncZDWTmG47b7uWibndrcGDfeSCe80wDYfiap0AM/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=4)

然后它就会帮你开发并部署到cloudflare，部署前它需要你跳转浏览器进行登录，同时还需要给它一下环境变量，这个可以理解为一些密钥，不能让其他人知道的东西。

这里有一个需要注意的地方，那就是要给这个部署好的workers设置一个执行规则，比如1小时执行一次，半小时执行一次，一天执行一次等等，看自己的需求，需要在部署代码里设置执行频率规则，不懂的可以告诉AI，让它执行。

![](https://mmbiz.qpic.cn/mmbiz_png/pHT5kHn0SJdT2tLMUq9Vf39mHrS9FhJwlLu0LxKlkGu6eaLn3G9CYXHQbMmOlxkqe3oiavzKzUk54XvmarQJFKciaCPyfmE1ItCicIKhbaO6ibw/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=5)

三、调试全自动化程序

以牛哥这么多项目经验，全自动化一定需要调试，因为AI一旦忘记约束它，它就会给你生成很多你不需要的东西，比如英文的内容需要翻译成中文，有些不相关的内容要剔除出去，重复的内容不能进库等等，这个环节是需要一点时间去调试的。

四、思维扩展

牛哥说的上述内容，只是一个非常小的案例，当然除了用cloudflare workers程序来实现自动化运营之外，还可以用AI work类的工具，比如openclaw小龙虾。

另外，这个方式可以扩展到很多地方，比如牛哥有很多出海的项目，大部分都是通过全自动化程序运营的，它们按照设置的更新频率，去挖掘网站相关的SEO关键词，然后按照要求完成高质量的SEO文章，接着给多个agent打分，分数合格才可以下一步。

文章内容完成后，再调用图片生成的agent生成文章配图和文章封面图，将图片存入数据库并添加到文章的合适位置，最后就是发布环节。

![](https://mmbiz.qpic.cn/mmbiz_png/pHT5kHn0SJfY7iabicd3iaqoK83rO535xBicxb9kWBUdesiamlfWN67pGSRibrvYaDuwFNwtFRsUZbwgGaFprwsxOIm0xPXLvBdATXwZ8ldPkujg4/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=6)

文章发布到网站上还没结束，还有社交媒体的运营，负责社交媒体运营的agent看到有新内容，它就会把这个文章发布到各大论坛和社交媒体平台上，自动化写好文案。

最后由数据统计agent对发布的内容浏览数据进行统计，并反馈给运营策划agent，让它们根据数据对下一次的内容进行优化。

当然，这些流程非常长且复杂，还需要考虑很多因素，比如谷歌收录的问题，内链问题等等，但是通过不断更新迭代，优化流程就可以解决这些问题。

思路给你了，怎么落地就看自己的需求，有问题也可以评论区交流。