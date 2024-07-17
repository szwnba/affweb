**0.开场白**

大家好，我是书生  

这是我的第**186篇**原创

内容很干，记得**星标**

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iaEkK5qwKOmutpYIfBjgPX5icOmXjYlkeaClmGrTBZtrnsf7nAtWrJIOicjsrpRvGSdBr2Y5a22ujwt6fDbuGiaHwg/640?wx_fmt=jpeg&from=appmsg)

**点击查看更多优质内容**

* * *

**#文末有福利**

**一、本文背景**

最近发现Coze这个词出现在我的信息源里面的次数很多，然后我又顺着秘塔AI搜索＆其他知识库的经验沉淀，小小的参考了看了下。

**啥叫Coze工作流呢？**

Coze工作流是一种通过可视化方式组合插件、大语言模型、代码块等功能的工具，用于实现复杂且稳定的业务流程编排。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaEkK5qwKOmvRdXCx6Yrquq4xtruQgGVDEgX31zWOe04zwToPAh9KhNRM68tSApJlv7src0gFNiauDoIQOsku6zQ/640?wx_fmt=png&from=appmsg)

<秘塔AI搜索>

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaEkK5qwKOmvRdXCx6Yrquq4xtruQgGVD3mGAEsJZibDbzFqpnVN0gp7tHNiaJKpvoHps9eJxm8kr82UfYCluahFA/640?wx_fmt=png&from=appmsg)

<搜索信息思维导图>

如果我没有猜错的话，Coze工作流≈Agent？类似于RPA这样的流程化工具？

为了更好的理解这个概念，我们打开Coze(国内可用）

首页会出现一个<扣子助手>，这个助手能帮助你快速创建智能体（类似于早期的GPTs，能够通过对话创建GPTs)。不过创建的智能体还比较简单，就是帮助你快速的生成一段**<结构化提示词>。** 

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaEkK5qwKOmvRdXCx6Yrquq4xtruQgGVDSptF3rsCP7EW5ng1U82icfR46FYM7CG8y6yIGowrsKelFPRt7HAb7ag/640?wx_fmt=png&from=appmsg)

那么我这里呢，就先做了一个<短视频文案提取>的小助手。为什么做这个呢？因为有个核心的痛点是，我要将视频文案转化为文字文案，在以往，**我需要复制链接-->打开小程序-->输入链接-->看广告。** 步骤非常的繁琐。

恰好我需要提取的文案是抖音的，所以来到Coze，看做个小助手。

下图是小助手的编排页面.

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaEkK5qwKOmvRdXCx6Yrquq4xtruQgGVDicz1BxbMOp6vbcFsfohEQCYIURiam5wO0ct4U1lakM1xic7pjYe27xBNA/640?wx_fmt=png&from=appmsg)

右侧是提示词，中间是技能（工作流是技能当中的一种），左侧是调试。

提示词在这里：  

> *   你是一个精准高效的短视频文案提取机器人，能够从各类短视频中准确无误地提炼出精彩绝伦的文案内容。
>     
> 
> 技能
> --
> 
> ### 技能 1: 提取短视频文案
> 
> 1.  当用户给出短视频的链接时，即刻从中精准提取文案内容。
>     
> 2.  将提取到的文案内容全部整理出来。
>     
> 
> 限制:
> ---
> 
> *   仅专注于根据视频链接进行相关操作，不处理其他无关事务
>     
> *   不能缩减优化总结内容。
>     

* * *

<先把我这个小助手说完再讲工作流>

我的小助手还远没有达到<工作流>这个概念，**小助手只负责提升了<文案提取>这个节点的效率，也是之前我们很多GPTs所承担的角色所在.**

那我的小助手是怎么做的呢？  

用到的是Coze里面的插件功能，下图是Coze的插件市场

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaEkK5qwKOmvRdXCx6Yrquq4xtruQgGVD2cStEaECFw3Gt46SYulnO3SEjLibq9h5BqMaiaOYj5vCeDTyFicLicY8nA/640?wx_fmt=png&from=appmsg)

<Coze插件市场>

我的小助手这里，会用到的两个插件是<Link Reader>＆<视频下载>  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaEkK5qwKOmvRdXCx6Yrquq4xtruQgGVDbjQlMFPqf7tZRdhMxOFSPYluoZfwYlBbteQAk8hzOQTwehnPXMvRLQ/640?wx_fmt=png&from=appmsg)

**Link Reader:**当你需要获取网页、pdf、抖音视频内容时，使用此工具。可以获取url链接下的标题和内容。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaEkK5qwKOmvRdXCx6Yrquq4xtruQgGVD82SFYzib02tQrZsPcQ5djbvrtP6ibQTtrhrGG0Qt4xOzTUcyfoBiaKfAg/640?wx_fmt=png&from=appmsg)

**视频下载**：可以根据用户query获取视频

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaEkK5qwKOmvRdXCx6Yrquq4xtruQgGVDTrXIicWNiaWn3c1Iz8HezCkvfSvicGjJ6r5DTCEmYPatuiaeshyX7jGtVg/640?wx_fmt=png&from=appmsg)

将这两个插件给安装好了之后，来到预览和调试页面，即可通过链接获取文章.

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaEkK5qwKOmvRdXCx6Yrquq4xtruQgGVD9Wn5egRpFTgK64aEibMMnGUG1GGiaFOfwF7T8ujVPbKcWlmH9SgTVTHA/640?wx_fmt=png&from=appmsg)

诶，整体来说非常的迅速，那么提取出来的文案有啥用呢？  

发挥你的想象力，有大用处。

好了，开胃菜Coze＋插件展示完毕。

接着进入今天的正题，Coze工作流

**二、正文**

点开工作流，然后点击右侧的<＋>号，即可进入工作流的开始及设定页面

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaEkK5qwKOmvRdXCx6Yrquq4xtruQgGVDJYQVEfnExibnqwFcWz0Ax1LlzCwtU9QhgTtfPvDWn83uSyxUcPnicRoA/640?wx_fmt=png&from=appmsg)

开始页面  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaEkK5qwKOmvRdXCx6Yrquq4xtruQgGVD5MrCpfdqeCOcdiblBiaebrzAmDKrr1ykEs57k3JSYVRickS67KriauDvdg/640?wx_fmt=png&from=appmsg)

<Coze工作流-开始页面>

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaEkK5qwKOmvRdXCx6Yrquq4xtruQgGVDegwGzb0TqcDluxfaonrQJ28dTMgo3YAHic2HRKe46JbZxEXmw2Zx3lQ/640?wx_fmt=png&from=appmsg)

<Coze工作流-编辑页面>

页面的最左边是工作流可以选择组合的节点，包括<插件><大模型><代码><知识库><工作流><图像流><选择题><消息><变量><数据库>一共10个节点。

目前我对工作流的熟悉程度还不够，但我知道怎么样才能够更快入手，那就是看<最佳实践>(就是别人已经做好的场景工作流）  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaEkK5qwKOmvRdXCx6Yrquq4xtruQgGVDcP4sUqDLI1q1MyRnJWt0mPrYHqkEPbqHMQru2AsJJeFgHm2SmfuFHg/640?wx_fmt=png&from=appmsg)

<Coze工作流-列表清单>

场景一：PPT制作

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaEkK5qwKOmvRdXCx6Yrquq4xtruQgGVD4jIssjvYrcDlgDtMiajYibtxmrj2iavYUniaEIw24zrs18lOrFoGPDhvjg/640?wx_fmt=png&from=appmsg)

图片看不清，我阐述一下我理解的工作流步骤：

第一步，**输入<关键词>**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaEkK5qwKOmvRdXCx6Yrquq4xtruQgGVDsF2SGknINUqqzqbJ8QDmVSbicgrOdMQ9RIvVekdKdTKeagjdWV0OrFA/640?wx_fmt=png&from=appmsg)

第二步的第一小点，**<生成标题>**  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaEkK5qwKOmvRdXCx6Yrquq4xtruQgGVDMicgBQOEmQU3fwN5xBaKnnkNZ7GqibKKNTjusQ5sV4ZSHaDH51tiapBPA/640?wx_fmt=png&from=appmsg)

第二步的第二小点：**<生成思路>**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaEkK5qwKOmvRdXCx6Yrquq4xtruQgGVD2yGic3Wlyaq8se0LAuTr7zxXWy4MLDqP8iau4JLd2ydFkqmkyfnKibKcw/640?wx_fmt=png&from=appmsg)

第三步：生成完整的PPT大纲

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaEkK5qwKOmvRdXCx6Yrquq4xtruQgGVDibASbW3gUWSygfUibUtqTjc64SqMbB9MYyqJicOaV6OyCRzuk5ULOYgoQ/640?wx_fmt=png&from=appmsg)

第四步：运行成功＆分析检查

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaEkK5qwKOmvRdXCx6Yrquq4xtruQgGVD75cicfZ5TIJjElbWlRxRITUVQzvXJxu7rNticaod6UMwOOcawFUjuxWQ/640?wx_fmt=png&from=appmsg)

第五步：运行成功＆输出最终结果

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaEkK5qwKOmvRdXCx6Yrquq4xtruQgGVD08PcOvias1tqU6Dnk7Tk47XyaJ7hiace2trplJyJX0o5CclcNQ8vcdlw/640?wx_fmt=png&from=appmsg)

我再用文字讲解一下这个场景下的AI＋PPT，Coze的工作流思路：

**关键词-->PPT标题-->PPT思路-->PPT大纲-->运行。** 

为什么要有PPT思路这个步骤呢？因为AI的创造力，让最终的大纲会有些跳脱，不适配，所以需要<PPT思路>这块去做适配。

* * *

在Coze工作流里面还有更多的场景，比如<生成卡通头像><根据关键词搜索东西>等，比较的娱乐化和小玩意儿。不能直接带来收益，为什么呢，因为直接能带来收益的，别人不上传呗~

我的本期学员之一，就利用Coze＋RPA，实现自动化的小红书图文笔记发布，到现在，一个号能接4-5条广告呢.

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iaEkK5qwKOmvRdXCx6Yrquq4xtruQgGVDYibV0Gzf9TxEficvAnsPEuibTEu3vCYJ7iag3EULlbgx2MstTFoEMibxcqg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaEkK5qwKOmvRdXCx6Yrquq4xtruQgGVDS7J264LKGU1hWknsiaHEBibrf3q9SXg1ria9ToWsy7RGc2UfvstLWC8og/640?wx_fmt=png&from=appmsg)

AI解决效率的问题，也就是投产比的问题。期待未来有更多更好的AI工具，也期待未来有能落地的Agent出现。超级个体只需要搞定商务，用技术给自己创造数字员工，财富自由也就指日可待了~  

**码字不易，多多支持~**

扫码加入我的**免费知识星球**<**成长 | IP | 提示词**>

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iaEkK5qwKOmtziaJib2cW9ueAAs0rWgWOqaPibOpxfkYnDw1duwsEkTCWdcwFc5Y2egMWeC6zoGpzvQrQ6OFIn06og/640?wx_fmt=jpeg&from=appmsg)

* * *

**好了，本文完结。以上，enjoy**

**文末有个10块的小册（现在29.9，也不贵，一杯奶茶钱）内容价值按照20倍交付.**

**我这么牛X，出的小册也不会太差**

**#阅读摘录**

**如何成为有头脑、生活幸福的人？坚持做有意义的事；坚持做有价值的人；坚持追求理智、正直、诚信。终有一天，一定能获得成功。身教胜于言教**。如果你取得了成功，别人会更愿意向你学习。 如果你坚持走正路，你更容易获得成功。你已经走在了正确的道路上，你需要做的只是坚持下去。

**--****查理·芒格的99条人生建议：我一生中反复使用的几个思维方法**

**下方小册是我性价比最高的品**.（小册目前订阅人数已过2千，放心入）

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iaEkK5qwKOmvupmAEynWEN3PfBIVoeia98DmsnVSpzMYef6wXHeic4RZyicZszWp6GUEXMlP2NpsWmwZ6YE3qicWydQ/640?wx_fmt=jpeg&from=appmsg)

嗯，买了可以找我入群，这个群以<公众号>为场景，

探索公众号文章的AI撰写工作流和高效提示词指令。

**<都看到这儿了，不关注一下？>**

我的VX

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iaEkK5qwKOmtSwWIgyibicBDpXHu8boXL4pN8fTRXgiaYzKFETE0BKfYmhxuXzn7ziaOgWQWsrxTAIhV0gcorFSyBwg/640?wx_fmt=jpeg&from=appmsg)

**#往期回顾：** 

[AI|记录一个收费四位数的提示词定制案例](http://mp.weixin.qq.com/s?__biz=Mzg5ODYyMjI1NA==&mid=2247485698&idx=1&sn=128f42f742041681e2c7a1e9b7841c9d&chksm=c05eff43f72976559f29538061e2b4a738a7da010333b7af009fbe9a5e193d7261918a5c06d2&scene=21#wechat_redirect)  

[AI|你以前的AI指令不太对哦！正确的AI Prompt要这么写！](http://mp.weixin.qq.com/s?__biz=Mzg5ODYyMjI1NA==&mid=2247485368&idx=1&sn=b264cfc7954eaae221eee42be80c160b&chksm=c05ef1f9f72978ef580da4e1cefce07a96b91a9e98d36ef6fb01d4d7bcb1efbfd6d78446ea16&scene=21#wechat_redirect)  

[AI都发展成这样了，还不跑你等什么呢？](http://mp.weixin.qq.com/s?__biz=Mzg5ODYyMjI1NA==&mid=2247484632&idx=1&sn=751349dbef6d2fb14a58535c8675ae28&chksm=c05ef299f7297b8f699485ae4e782186fe9edb37dc788beec8c71ba3836b4959ac55e2ba4a3d&scene=21#wechat_redirect)  

[AI写作|发现了Kimi的提示词！好牛的感觉啊!](http://mp.weixin.qq.com/s?__biz=Mzg5ODYyMjI1NA==&mid=2247487105&idx=1&sn=77721f4e6e9ede7d8ab1651e96dcd3ca&chksm=c05ef8c0f72971d6feb328c0a6586ec3430dc238ef09ec7dbcc7634330ab5f61971b0ac92969&scene=21#wechat_redirect)  

[没意思，自从用了ChatGPT，一天能发100条小红书。](http://mp.weixin.qq.com/s?__biz=Mzg5ODYyMjI1NA==&mid=2247484563&idx=1&sn=588bb4bfecd513aa54854f9b23175e8c&chksm=c05ef2d2f7297bc4d10da2e1fce226a772b462280781014237cbe3c31a9246ada689184b18c9&scene=21#wechat_redirect)

[AI|给知识星球最大的创业社群-生财有术定制了3套AI prompt（提示词/指令）](http://mp.weixin.qq.com/s?__biz=Mzg5ODYyMjI1NA==&mid=2247485418&idx=1&sn=c42262dd44edaeb524a4171cd78cc7cf&chksm=c05ef1abf72978bd8d2ca804da172d07b52ec69b7def0ca37f6bdbc8cb353b946c6004e9f4b3&scene=21#wechat_redirect)