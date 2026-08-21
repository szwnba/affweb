👇关注回复116获取AI入门指南!

文末有福利一定要领取！

同志们好呀，我是五竹。

你们今天又赚到了，加个餐，给大家又上一个Coze实战。

恰逢最近在带大家玩小绿书带货的项目：[小绿书就是下一个流量洼地！必须全仓猛干~](http://mp.weixin.qq.com/s?__biz=MzI1NjUyMzcyNQ==&mid=2247496462&idx=1&sn=d41a63cc4365677ac36aab478971156d&chksm=ea27dfacdd5056bad176073ef39bf49e28c80eeaf280a1e270f6cda5179be84141eb606f964c&scene=21#wechat_redirect)

那么小绿书的内容如何创作呢？

其中一个思路就是直接模仿小红书上相关的对标文案，从标题、内容到图片进行1:1的模仿。

对于某些方向的内容比如”养生“方向，这个过程完全可以搭建一个Coze智能体来处理，效率瞬间提升N倍。

毕竟”养生“方向的图片相对比较简单，基本上就是纯背景色+文案。  

下面是实现思路：

借助coze插件，提取小红书的图片、标题和内容->通过大模型对标题和内容进行改写->通过图像流对图片进行处理

下面是工作流的具体实现：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/foBxm1ARZr6mic0amQ8S9MGGu6T4UpjCW6oib1h6m0zwQZVmqNsPFz6kXRznFMsT0j1hDuvibic7ADsiaoCWWHaKlyA/640?wx_fmt=png&from=appmsg)

下面是图片流的具体实现：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/foBxm1ARZr6mic0amQ8S9MGGu6T4UpjCW5ic2iajTiaibxW4V7kaASkBPiaP1JLMeZwunYibibq5o4Tqw6GpXW223oEJTg/640?wx_fmt=png&from=appmsg)

这里我采用的是「背景替换」的功能来实现，这种方式最终生成的图片，字体不是很清晰，会出现色块重叠的问题。

除此之外我还尝试了采用「智能抠图」+「叠图」的功能来实现，这种方式字体虽然清晰了，但抠图效果不稳定，尤其是在图标和文字共存的情况下，文字直接被抠出了...

整体效果还可以，具体使用哪种方式处理呢？我的建议是，对于只包含纯文本，且文案大小基本一致的图片采用智能抠图的方式；而其它情况可以采用背景替换的方式。

有人会疑惑，图片上的文案一定都不修改不太好吧？确实不是最优解~

完美的思路应该是：提取图片上的文案->对文案进行改写->将文案写在新的背景模板图上。

这样做有一个问题，就是文案的格式很难搞定，除非文案简单，格式固定~  

其实，对于跨平台的搬运，当前的方案也够用了~  

到这里，基本上结束了。

但我猜你会问，能否将最终的标题、内容和图片自动发布到小绿书呢？

可以，但需要RPA技术也就是影刀，单纯靠Coze不可以，因为微信公众号官方并没有公开发布小绿书的接口。

但Coze能借助下面的插件把图片上传到公众号后台，至少可以帮你省略图片保存和上传的过程

![](https://mmbiz.qpic.cn/sz_mmbiz_png/foBxm1ARZr6mic0amQ8S9MGGu6T4UpjCWicibawk0LIm9IzlwqoyG2dRpuu0ToVTfJkZ3icH9GkNHhdCYZm2UuHTbA/640?wx_fmt=png&from=appmsg)

整个实现细节我已经更新到付费手册《Coze智能体实战》中，总要给付费用户留一点优越感。你想系统的学习一下Coze智能体，可以闭眼上车，目前优惠价109元，下周涨到119元，交付方式：SOP手册+视频教程+陪伴群，**识别下面的二维码购买即可**

| ![](https://mmbiz.qpic.cn/sz_mmbiz_png/foBxm1ARZr6mic0amQ8S9MGGu6T4UpjCWibqeJItoicibmbPjnYY0cKQsiaXbhpibicG9qOMMu5ibX9SQNtwtXIFic0xrlA/640?wx_fmt=png&from=appmsg)
 | 

![](https://mmbiz.qpic.cn/sz_mmbiz_png/foBxm1ARZr6mic0amQ8S9MGGu6T4UpjCWib2FEhRTnTX6HfUpOvT1dRmPdF5DMc7joZEJFEWF01m5W2yRbQuOVmw/640?wx_fmt=png&from=appmsg)


 |

> 我是五竹，一位持续探索自媒体副业的大龄程序员。不算优秀，但贵在真实。咱们下篇见~。

**重磅推荐👇👇👇**

[《玩转GPT指南手册第六版》](http://mp.weixin.qq.com/s?__biz=MzI1NjUyMzcyNQ==&mid=2247493600&idx=2&sn=22997277af0240293d75e5eefd4f93da&chksm=ea27cb42dd5042546e4bbbf35d9c2b5b342580f480a9fd963563b8ae286de6067652b29e6aab&scene=21#wechat_redirect)

[摊牌了！国内使用GPT-4o最正确的姿势！](http://mp.weixin.qq.com/s?__biz=MzI1NjUyMzcyNQ==&mid=2247492744&idx=1&sn=2174c238bb4b2515982e06b3090da9a6&chksm=ea27c82add50413c82b7ab0c891e160dd5570ae015dc734dee682271fc2bc56cdea3124f55de&scene=21#wechat_redirect)

[我用几万元踩的坑，你们可以踩着我！](http://mp.weixin.qq.com/s?__biz=MzI1NjUyMzcyNQ==&mid=2247493426&idx=1&sn=36c93d8dad264fdb163e4f63958350f7&chksm=ea27cb90dd504286d7d7fed0e5b8936db6b95027e5907064b2eb8111da13781e8f8739dab2bc&scene=21#wechat_redirect)

[小赚27元！Kimi傻瓜式洗搞指令，一洗到底！](http://mp.weixin.qq.com/s?__biz=MzI1NjUyMzcyNQ==&mid=2247493277&idx=1&sn=134ae60617bd87fd95112f462751949d&chksm=ea27ca3fdd504329a2e33c5b6b77646f452cfeccb180d50ca349913a2a656c95fcf0101b0252&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/foBxm1ARZr7bmXte6wXicD7KicQqyhMV0CuqOH1bpW15RjOiaHXuxXxA2DZ0lzbjjkKRibWFj0D9jlWYVPtYI7RgPw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

既然都看到这了，文末点个赞呗，喜欢的还可以给公众号加个星标⭐️，您随手的一个赞，能让五竹开心一整天![](https://res.wx.qq.com/t/wx_fed/we-emoji/res/v1.3.10/assets/Expression/Expression_14@2x.png)
，在此谢谢各位读者大大啦