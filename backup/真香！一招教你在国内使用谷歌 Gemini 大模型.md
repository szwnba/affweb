> 大家好，我是知白。一个专注于输出 AI +编程内容的大厂资深程序员，关注我一起进步。

我上周写了篇文章，讲述了 Gemini 自称文心一言的故事。

[谷歌 Gemini 自称文心一言？大公司互薅羊毛](http://mp.weixin.qq.com/s?__biz=MzU2NTg3MjMwMg==&mid=2247485058&idx=1&sn=9e44466d6cb831b913817400e39e0e03&chksm=fcb45543cbc3dc5572730e3dc6ffdde1e990e590d2b31ef4b6df215de829ec1c5da9dc0113e1&scene=21#wechat_redirect)  

Gemini 确实在中文语料上使用了很多国内大模型的数据，谷歌已经做了紧急修复，测试不出来了。很多网友猜测其在英文语料上也有使用 ChatGPT 的，互联网上的人造数据毕竟是有限。

对我们使用者来说，倒是没有啥影响。甚至很多读者在后台问我有没有 Gemini 部署到国内可以直接访问的教程，周末花了点时间，找到了国内的免费玩法。

Gemini Pro 免费版每分钟支持60个查询，并且可以长期免费使用。相比于 ChatGPT-3.5 的 5 美元免费额度每分钟 3 个请求限制，确实香很多。

需要注意，有两个前置条件：  

1.  需要先获取到 Gemini 的 API 密钥，这个需要大家自行解决。
    
2.  自己的独立域名，找个不常用的域名后缀一年只需要几块钱。
    

话不多说，直接奉上保姆级教程。

Github 项目地址：`https://github.com/antergone/palm-proxy`

进入到上述网址，使用 Vercel 来进行快速部署。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/ib1lrlXWMibwsS4DmLsHL0s5zM0rZM34RVfDQWLH8IYgY3GJ9Qlbsg0gxMQtp1sztBp7lCTKYhkbnx4DHu7IWIMQ/640?wx_fmt=png&from=appmsg)

进入到 Vercel 中，可以直接使用默认项目名，点击创建。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/ib1lrlXWMibwsS4DmLsHL0s5zM0rZM34RVkLoEfGbPEtjJDA7qdgD3CqhH42Pj4HQ7zvyncnKbTSviaossx6kWXRA/640?wx_fmt=png&from=appmsg)

部署成功后，点击跳转到大盘。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/ib1lrlXWMibwsS4DmLsHL0s5zM0rZM34RVicu9hFbwkF8G0p6CyB0XWaFvm8AZliaRuVQjlVMyueHNO6icib2QAzHXzw/640?wx_fmt=png&from=appmsg)

复制这个代理链接，后面要用到。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/ib1lrlXWMibwsS4DmLsHL0s5zM0rZM34RV2nlUcBzTB4bq4NTrl9QgQgnTTluAwf6xlkD6AfWFJpsIic6qEgS9oyA/640?wx_fmt=png&from=appmsg)

Github 项目地址：`https://github.com/babaohuang/GeminiProChat`

再进入到上面这个项目地址，一样使用 Vercel 来部署。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/ib1lrlXWMibwsS4DmLsHL0s5zM0rZM34RVIsezNkV1ZsuW4oD0Ts4v8M5Ug2beHEH9Txzhqp2ibjyn9oxE0a308XQ/640?wx_fmt=png&from=appmsg)

然后同上面一样，随便输入一个姓名直接点击创建。在这里填入你申请到的 Gemini API 密钥后，点击部署。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/ib1lrlXWMibwsS4DmLsHL0s5zM0rZM34RVbARvZ03jgV0TvOdlIAYaZwZ8v5aHaBAuNdTyrCDwqHtEfhpjNe9ZXQ/640?wx_fmt=png&from=appmsg)

部署成功后跳转到面板，配置环境变量中的代理域名，Key 填入 `API_BASE_URL`，Value 填写你前面获取到的地址，记得加上 `https://` 前缀，最后点击保存即可。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/ib1lrlXWMibwsS4DmLsHL0s5zM0rZM34RVe0TMovoHFUwzyKnlGeWlHUcWeaBMhxIdJWOeianHxFWEaSXUK9EzTkQ/640?wx_fmt=png&from=appmsg)

使用自己的域名也很简单，按照如图所示到 IP 控制台上进行配置即可。这里以腾讯云为例，选择添加记录，填充内容如下：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/ib1lrlXWMibwsS4DmLsHL0s5zM0rZM34RV0tmKf7Y6sOLtiaw3cHiczV9wLvWzzqYrptAiab8huUB3YnLk7OtpzmucQ/640?wx_fmt=png&from=appmsg)

填入你的域名，选择最后一个选项。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/ib1lrlXWMibwsS4DmLsHL0s5zM0rZM34RVDLHvMxcNlxAsjHqArkCgI7SKJH8wp1Cl2Z9Szfl224eIGDdcby0gVw/640?wx_fmt=png&from=appmsg)

转到页面，点击重新部署即可。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/ib1lrlXWMibwsS4DmLsHL0s5zM0rZM34RV1BlWk50qdtuvTOvPv7qCdhd6j1r5ysI227Scm5klNvcuhic3vTYZZVA/640?wx_fmt=png&from=appmsg)

最后我们来通过自己域名进行测试一下，可以成功访问。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/ib1lrlXWMibwsS4DmLsHL0s5zM0rZM34RVPCPsCia9Vtb13CDPeXL5B4Aqu4cwlKOpCkxq3CcqBjibO1H2mZiclgaQw/640?wx_fmt=png&from=appmsg)

按照如上教程配置完成后我们就可以实现真正的畅玩 Gemini，长期白嫖。

后面我们来讲讲，如何在代码里调用 Gemini Pro 的 API，从而可以实现自己的功能。

欢迎加我微信，一起成为 AI 时代的弄潮儿~

![](https://mmbiz.qpic.cn/sz_mmbiz_png/ib1lrlXWMibwsS4DmLsHL0s5zM0rZM34RVo7jm3g40VFSS12P5FHwLsHFbJwgDVa2tDPgXiaLdkpjb0tfJibVDKd8A/640?wx_fmt=png&from=appmsg)

关注我的星球，不定期赠送福利或 AI 资源，持续发布 AI 最新风向标。

目前已有 500 多位 AI 爱好者在星球内一起探讨，沉淀 90+ 内容，快来加入我们！

![](https://mmbiz.qpic.cn/sz_mmbiz_png/ib1lrlXWMibwsS4DmLsHL0s5zM0rZM34RVKnx7gBfBRR0iaBulORkbYS7dnJGZqicqVaZymlZl87D3QT1FA5B8C3PQ/640?wx_fmt=png&from=appmsg)