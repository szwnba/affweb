去年弄了份 500 万字报告

是 PUA  AI 弄的  

**[《5000+ 个 AI 项目详解](http://mp.weixin.qq.com/s?__biz=MzkzNDQxOTU2MQ==&mid=2247486722&idx=1&sn=5b6680c15c4e402b2b39828366e4b0bf&chksm=c2bcc004f5cb4912b7eeed8891593f3d00eab44053dca2dd75dc06de767558f04315ed785e5c&scene=21#wechat_redirect)》**  

最近在玩 Coze/扣子

发现这事无需代码，人人都行

比如，链接丢过去，工作结束，下班！  

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYr5kClQ4nrzbtf55pLlXGmggicCrzXjyqBWffxQAJlzcrZon3AaianlojMhKXQoQgN095D2LRT7NLWA/640?wx_fmt=png&from=appmsg)

还可搭配飞书  

真正实现「AI 打工你躺平」  

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYr5kClQ4nrzbtf55pLlXGmgLUwcZWxgVIASibmpEicb8laoDS6j7Zu1QIpiccJ8eichibM32tqf29sQ3Zw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYr5kClQ4nrzbtf55pLlXGmg4y4EflqLPpSBrPoiaY9d5uOkibjI0VNSGcPMtdS8VZcp9CylPbM3t8qg/640?wx_fmt=png&from=appmsg)

顺着这个，让我讲讲

**让 Coze 打工养你**

务求「中学生能看懂」  

* * *

**Coze/扣子，是什么？**

Coze，中文名扣子，字节出的

*   定位：Next-generation AI chatbot building platform
    
*   人话：🐮 帕鲁庄园 🐮
    

在这里，你可以手搓各种机器人🤖️，让它们为你工作：写文章、找资料、画插图、吐槽PM...

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYr5kClQ4nrzbtf55pLlXGmgh5qwgexO566NFxFQicmicWayCoJM6FXvhjbYJXasy4qy1AJMQOibmD9bw/640?wx_fmt=png&from=appmsg)

* * *

**如何使用 就是一把梭**

按流程，我应该介绍「Coze 网址在哪」、「怎么注册 Coze」... 但这样真的太无趣了。

换一种方法：

先创建第一个 bot，然后不断精进，直到做出下面的这个：

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYr5kClQ4nrzbtf55pLlXGmggicCrzXjyqBWffxQAJlzcrZon3AaianlojMhKXQoQgN095D2LRT7NLWA/640?wx_fmt=png&from=appmsg)

步骤如下

*   Step0：先跑起来，有第一个 bot
    
*   Step1：用上「回复逻辑」，让它能将链接转换成回答
    
*   Step2：发布到飞书，基本成型
    
*   Step3：**【进阶】** 使用 工作流/workflow & 代码/code，更灵活自定
    

* * *

**Step0：先跑起来**

**目标 🏆**

创建一个 Coze Bot，帮你查阅 Hacker News，并中文返回

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYr5kClQ4nrzbtf55pLlXGmgwyppicjcdmia1zUlzZRfPO6QAUqTDVdeEdhc5NiaFy4ZYcnDE7Nthqa6w/640?wx_fmt=png&from=appmsg)

**创建第一个bot**

打开 coze.cn/home，点 创建 Bot

信息随便输，如：

_![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYr5kClQ4nrzbtf55pLlXGmgfVwWOrqzNUPAf7OB18Vsiag15pnHZjoibxz7qJ4pLLvBJOvUD09Z4aHQ/640?wx_fmt=png&from=appmsg)
_

**尝试联网**

尝试询问：今天的 hacker news 上有什么新闻？

并答不出

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYr5kClQ4nrzbtf55pLlXGmgIkObJicQgS3mkIk6RPHMDzAWjRQNn2pJKE4lnJyxcMAibCOlRFn0dx7Q/640?wx_fmt=png&from=appmsg)

💡💡 穿插知识 💡💡

AI 是个书呆子

非常聪明，但不出门  

所以不知道外面的事

也不会交流

有一种叫做「插件」的东西  

类似给 AI 用的手机  

AI 可以拿它上网  

拿它点外卖

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYr5kClQ4nrzbtf55pLlXGmgKOsa1Q30vhpKyoKsHRQYVSmJSqTL4RqcLBco7eu3ngoe8wUjHrRNqg/640?wx_fmt=png&from=appmsg)

有一个插件：WebPilot

是首批 ChatGPT Plugin

首个提供「大模型上网」  

**引入联网插件**

插件 -> **+** -> 选择 WebPilot

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYr5kClQ4nrzbtf55pLlXGmgmndul0I0V7mlz6Qv6L38UgL9HmX5OZgibrib3aBhCXfSwU7DOiatDvRRg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYr5kClQ4nrzbtf55pLlXGmgurmcpsew3eibQrSmeXgV9IwBhZ4btfnAfkicPVAa1mYf15bNvJnEicCVQ/640?wx_fmt=png&from=appmsg)

**重新尝试联网**

再次询问：今天的 hacker news 上有什么新闻？

**成功了！**

_![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYr5kClQ4nrzbtf55pLlXGmgicNpoacU81PWly14rT1OGic5a7vuWNL3MTIHrJia0Ks7cLnAzNTjtp3Vg/640?wx_fmt=png&from=appmsg)
_

* * *

**Step1：用上「回复逻辑」**

**目标 🏆**

尝试输入某个 AI 产品的网址，如：

https://www.anthropic.com/news/introducing-claude

AI 自动处理，并返回这个产品的名称、简介等信息

💡💡 穿插知识 💡💡

对于当下的 AI 产品

大都支持「自定义 AI 的回复方式」  

在 ChatGPT/GPTs 里

是 「Instructions」

在 Coze 里  

是「人设与回复逻辑」

**设定「人设与回复逻辑」**

这里的写法就是 Prompt

你可以足够相信 AI 的智商：无论你怎么写，它都能理解

以下仅供参考，**你怎么写都行**

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYr5kClQ4nrzbtf55pLlXGmgxa4h49a8O2uw5ib1bcFB1rKLb9h4Jbc1DCsfvibebNqbcBMvCMbw9ARA/640?wx_fmt=png&from=appmsg)

**测试「人设与回复逻辑」**

尝试输入网址：https://www.anthropic.com/news/introducing-claude

也就是 Claude 的介绍信息页

AI 就会按照预先设定的格式进行返回

**成功了！**

_![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYr5kClQ4nrzbtf55pLlXGmgoSr2GvMEPFJgjACqWt3xOJFo7dmFggNzG8TZUZxmNFQt9yYNM2zR6Q/640?wx_fmt=png&from=appmsg)
_

💡💡 穿插知识 💡💡

由于 AI 的特性

它并不总能返回合适的结果

就比如这里

它并没完全按我的需求返回

处理的方法有很多

比如：重试🐶  

优化 Prompt  

或者使用 Workflow （这个后面讲）

* * *

**Step**2：发布到飞书****

**目标 🏆**

没错，就是发布到飞书，然后在飞书里调用它

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYr5kClQ4nrzbtf55pLlXGmgYljBC0KD69tg6VjGbiboPDV6PDSjxicGhCia0icPX95lqIpctEBia8BmBZQ/640?wx_fmt=png&from=appmsg)

**尝试发布**

页面的右上角点 发布

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYr5kClQ4nrzbtf55pLlXGmgoSr2GvMEPFJgjACqWt3xOJFo7dmFggNzG8TZUZxmNFQt9yYNM2zR6Q/640?wx_fmt=png&from=appmsg)

发现飞书没有授权，得处理下，点 配置

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYr5kClQ4nrzbtf55pLlXGmgLjK7L585wbntSRIAQEnNR9IKiajFNoZDVYwx0VaxDiabYfSZasAAqoTA/640?wx_fmt=png&from=appmsg)

**配置飞书**

页面点 授权

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYr5kClQ4nrzbtf55pLlXGmg0dJsibNTRLAzYKRIV8oTp7j8wg4lBkcMiayDibhR7FFA9l0PribicP8uXAw/640?wx_fmt=png&from=appmsg)

这样就可以点 发布 了

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYr5kClQ4nrzbtf55pLlXGmgWCunpKDaFqSb0jrmr0Rg6uPgiaC773ia1tsBvEdr1WQrh6MCaSyxP5Aw/640?wx_fmt=png&from=appmsg)

片刻功夫，便通过了

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYr5kClQ4nrzbtf55pLlXGmgkG3RNb5vGmbqK4g50hn9QFOib6YtFC9ofxYHqEszdOI3vZLshJ7XOhQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYr5kClQ4nrzbtf55pLlXGmgH2AhDdHUNkw3WLeh2WETbIrEDeJibmD7ZdMS2X3TUhZfN4hgQyPWFww/640?wx_fmt=png&from=appmsg)

**在飞书里使用**

你可以在工作台里找到这个 Bot，然后开始对话吧～

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYr5kClQ4nrzbtf55pLlXGmgT11YY9JJOo1NNBic5E9HaapkPdht8oiaPQ8L58vGHFTsrbbaTUTSYavg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYr5kClQ4nrzbtf55pLlXGmgX7LC3jyUmrN0S5EBfUXEw5XyzVJwZwVE5lSVwFVpKDA3sr3F5KYxpw/640?wx_fmt=png&from=appmsg)

**它成功了！**

不过你仔细看，这里并没有严格按照我所说的来（可通过 workflow 解决）

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYr5kClQ4nrzbtf55pLlXGmgyFZLN4SPYgnZBGqjiawoxttAD6KsWVjwM8uu9Iibf4JX0BhXxVTotGvA/640?wx_fmt=png&from=appmsg)

*它是 「不准确的」

* * *

**Step3：** **【进阶】** **工作流 & 代码**

**对于轻度用户，你并不需要工作流**

对于重度用户，工作流的最好教程参见官方文档：

https://www.coze.cn/docs/guides/welcome

**为什么我用工作流**

这里举个例子，当大模型调用写邮件的插件时，可能出现以下问题：

*   速度慢：虽然内容已经生成好了，但调用插件时仍然会重新生成
    
*   可能错：大模型经常会输出一些不正确的文字，如果这些内容在比如邮件地址上，会造成较为严重的影响
    

为了减少这些问题，我会采取一些工作流+代码的组合方法

**我的工作流（仅供参考，轻度用户可直接略过）**

这是主工作流，将用户的原始输入，直接传送给插件 WebPilot。其中，用另一个另一个工作流 AI Project 进行样式注入

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYr5kClQ4nrzbtf55pLlXGmgJowBBiaARmicM4ncpJ5P5TvPySZyxYT5IqELSt1RolNXywicDFHYOzSgw/640?wx_fmt=png&from=appmsg)

这是 AI Project 工作流，是将用户的输入，通过代码的方式，加上样式信息  

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYr5kClQ4nrzbtf55pLlXGmgPSVOmwtwFLQkKtpNl9vkaXKgIhIHsbkL8U0adl3rGicm5bibst53DenQ/640?wx_fmt=png&from=appmsg)

这个是中间用到的 python 代码  

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYr5kClQ4nrzbtf55pLlXGmgjHU7UChmxMlsLHKvBTbEetWLABBMu3J5G6nmWPO7OaZNNpHkmNAusw/640?wx_fmt=png&from=appmsg)

这个是结合这个工作流，修改的「人设与回复逻辑」  

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYr5kClQ4nrzbtf55pLlXGmgUiaT1v0zkRAYvM1uuyjyvnK4aBfYLfARSxuNEHSb5964ASPM6R7ttGA/640?wx_fmt=png&from=appmsg)

优化好之后，就能以更快的速度，进行更好的输出了，就比如这个  

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYr5kClQ4nrzbtf55pLlXGmggicCrzXjyqBWffxQAJlzcrZon3AaianlojMhKXQoQgN095D2LRT7NLWA/640?wx_fmt=png&from=appmsg)

* * *

**One More Thing**

Coze 真的巨牛逼

可称为当下 AI 干活的最佳解决方案  

本篇是「一起学 Coze 」的新手入门篇

接下来几周

我会结合 Coze API

及飞书的其它特性

做一些更加深入的、结合工作场景的教程

讲究的就是一个

**Coze 打工你躺平**