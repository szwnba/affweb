前面文章的介绍，我们可以通过在自己笔记本电脑上部署的Llama 3大模型生成文章、文本润色、生成摘要等。今天我们更进一步，在文本的基础上，快速制作一部儿童故事短视频，且可根据自己需要完全原创……

前提：有AI大模型对话机器人
--------------

第一种方式（推荐），可参考前面文章，自己**部署大模型**，深入体验一下大模型：

部署**Llama 3 8B**开源大模型：[玩转 AI，笔记本电脑安装属于自己的 Llama 3 8B 大模型和对话客户端](https://mp.weixin.qq.com/s?__biz=MzkyNzY5NDQ1MA==&mid=2247483793&idx=1&sn=d5e0ec44a7618fcb79ab00be32d3aa97&scene=21#wechat_redirect)

部署**Llama 3 8B**Web版对话机器人：[一文彻底整明白，基于 Ollama 工具的 LLM 大语言模型 Web 可视化对话机器人部署指南](https://mp.weixin.qq.com/s?__biz=MzkyNzY5NDQ1MA==&mid=2247483825&idx=1&sn=665b4512f04df5340cbd2d3e85e1859e&scene=21#wechat_redirect)

部署中文版\*\*Llama 3（Llama3-Chinese-Chat）\*\*大模型：[基于Llama 3搭建中文版（Llama3-Chinese-Chat）大模型对话聊天机器人](https://mp.weixin.qq.com/s?__biz=MzkyNzY5NDQ1MA==&mid=2247483841&idx=1&sn=38c7441ad4cdcbb3109cf0128d84b3e0&scene=21#wechat_redirect)

第二种方式，可以使用免费的大模型，国内大模型包括 阿里的**通义**，百度的**文心一言**，抖音的**豆包**等。

由于老牛同学在自己的笔记本电脑部署了Llama大模型，因此使用的自己的AI大模型，下面就开始视频制作了。

第一分钟：明确儿童故事创意和编写Prompt提示词
-------------------------

这部分包含两部分：

*   明确**儿童故事创意**：因为是儿童故事，我相信大家能想象出很多的创意，耳熟能详的包括龟兔赛跑、守株待兔、亡羊补牢等，老牛同学今天的创意是**小猫钓鱼**故事。
    
*   编写**Prompt提示词**：编写Prompt提示词是一个技术活，目前还可作为一份职业，Prompt提示词的好坏，直接影响着AI大模型的输出结果。Prompt提示词的编写技巧，可以参考老牛同学的文章：[高效编写大模型 Prompt 提示词，解锁 AI 无限创意潜能](https://mp.weixin.qq.com/s?__biz=MzkyNzY5NDQ1MA==&mid=2247483905&idx=1&sn=5bf7e92b8c760e8dbf14edf4c9d8b7a7&scene=21#wechat_redirect)
    

老牛同学**新小猫钓鱼记**故事创意的Prompt提示词如下：

`你是一位儿童故事方面的专家，博学多才，大家都很喜欢你幽默有趣的风格。现在你要给大家讲"新小猫钓鱼记"的故事。  
------  
要求：  
 - 故事内容是大家都耳熟能详的"小猫钓鱼"的故事，故事情节要生动有趣，幽默，重要情景要扣人心弦，能够吸引读者的兴趣，引起共鸣。故事内容要求正能量，积极向上，不能包含任何引起小孩子们的不适的内容。小孩子们在看万故事后能从中学到东西和感悟。

 - 故事内容分为三部分，内容富有新意，情节递进曲折，故事结尾需要进行升华。故事内容长度在500个汉字以内。

 - 输出格式仅包含故事内容，不需要输出任何前缀文本、引导文本、提示文本等内容

`

第二分钟：借助Llama 3等大模型生成故事内容🎨
--------------------------

把以上故事创意**Prompt提示词**输入到Llama 3大模型中，即可生成故事内容，老牛同学的**新小猫钓鱼记**故事内容如下（特别注意，由于大模型的**计算不可约性**原理，不同大模型或者相同大模型，多次输入的产出内容可能不一样）：

`在一个阳光洒满大地的清晨，小猫咪咪揣着爷爷的旧钓鱼竿，踏上了寻找“传说中最聪明的鱼”的奇妙旅程。

咪咪来到碧波荡漾的小河边，架好钓竿，满心期待。可时间一分一秒过去，除了偶尔跳起的水花，鱼儿们似乎集体放假了。就在这时，一只戴着墨镜的酷酷小乌龟慢悠悠爬过来，调侃道：“嘿，小家伙，钓鱼可不能急哦，我爷爷的爷爷曾经告诉我，真正的高手都是‘静待花开’的！”咪咪听了，想了想，决定换个方式——它开始吹泡泡、唱小曲，用轻松愉快的心情等待。不久，一条小鱼竟然被这不同寻常的“鱼饵”吸引了！

小鱼可不是轻易上钩的，它围着钓饵转圈圈，仿佛在说：“想抓我？先来一场智慧的较量吧！”咪咪灵机一动，用尾巴轻拍水面，模仿鱼群游动的声音。小鱼果然好奇，慢慢靠近，就在即将咬钩的一刹那，它却突然转身游走，留下一句：“哈哈，今天心情好，放你一马！”咪咪被逗乐了，它意识到，原来钓鱼不只是技巧，更是一场与自然的和谐共舞。

日落时分，咪咪虽然没钓到“最聪明的鱼”，却意外收获了与小鱼和其他小动物们的友情。它们围坐在河边，分享着各自的故事，咪咪明白了：生活中最大的宝藏不是钓到多少鱼，而是这段旅程中遇见的朋友和学会的耐心、智慧。夕阳映照下，咪咪宣布：“明天我要开个‘河畔故事会’，谁都有机会成为主角！”大家欢呼雀跃，小河畔充满了欢声笑语。

从此，咪咪和它的新朋友们，不仅在河边留下了无数欢笑，也在彼此的心中种下了友谊的种子。小猫咪咪学会了，生活就像这不断流淌的河水，每一次尝试和挑战，都可能带给你意想不到的美好。而真正的胜利，是拥有一颗善良、乐观、永远好奇的心。

`

第三分钟：借助「剪映」图文生成功能生成短视频
----------------------

目前还没有根据**文本生成视频**的开源大模型，国外OpenAI发布的**Sora**大模型，我们目前无法访问。幸运的是，国内**剪映**有类似的功能，可根据文本内容，自动匹配素材并生成视频。

*   打开剪映App，点击**图文成片**按钮：
    

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/8aE1QXT1sv62b8XjWq83Q2nic6yujJYibVye0R96YEmNaDegDnBV2y6DY7QR6swzZUOsc00cgpPJYo0iaWeDtcY2A/640?wx_fmt=jpeg&from=appmsg)

图文成片

*   在“图文成片”页，点击**自由编辑文案**按钮：
    

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/8aE1QXT1sv62b8XjWq83Q2nic6yujJYibV5vyCDX78w3ESv0G4wHzB0ufJue6NXPzPzyDDfTAbK73RQqWhXNjvjA/640?wx_fmt=jpeg&from=appmsg)

自由编辑文案

*   输入**新小猫钓鱼记**文本内容，点击**应用**按钮：
    

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/8aE1QXT1sv62b8XjWq83Q2nic6yujJYibVym2cOzlkdzEIdoWHyj8nqOxnshZY02rgrroxk1MbX7iagQpV7SbyXqA/640?wx_fmt=jpeg&from=appmsg)

自由编辑文案

*   在底部弹框选择**智能匹配素材**选项
    

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/8aE1QXT1sv62b8XjWq83Q2nic6yujJYibVuu8Oia4s42eqmB9mG3evkcnBX2AiagRSibPPgroccoia7mYMskGDZUPJibw/640?wx_fmt=jpeg&from=appmsg)

智能匹配素材

*   即可开始制作视频：
    

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/8aE1QXT1sv62b8XjWq83Q2nic6yujJYibV8ic0xX9tvjLiaDAU1mMXicxbYVhib56Cpe0JrlgxpbpYNE7zt6jKYNxeVw/640?wx_fmt=jpeg&from=appmsg)

制作视频

*   最导出视频即可：
    

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/8aE1QXT1sv62b8XjWq83Q2nic6yujJYibVr4SfgGIx8wXI7F38ZZhn6rlB6IZbyN4RAmQRoPHDmGp7xScTkScOhA/640?wx_fmt=jpeg&from=appmsg)

导出视频

导出的视频存储在手机中了：

最后总结
----

到目前为止，我们的原创视频制作完成了。

剪映的智能匹配素材功能，虽然方便我们视频制作过程，但老牛同学的**新小猫钓鱼记**匹配的素材，感觉都是根据每句文案产出，并没有上下文关联，导致素材一会儿是动漫风格、一会儿是现代网络图片等，全文的素材特别不协调。

而反观OpanAI的**Sora**根据Prompt提示词制作的视频，全文内容一致、形象逼真，真心希望我们大模型能快速发展，赶超国际水平~

* * *

关注本公众号，我们共同学习进步 👇🏻👇🏻👇🏻