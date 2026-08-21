🍹 Insight Daily 🪺  

##### Aitrainee | 公众号：AI进修生

Hi，这里是Aitrainee，欢迎阅读本期新文章。

前段时间，NotebookLM 凭借其‘AI 播客’功能出圈了。它能将复杂材料转化为更接地气的语音访谈形式。虽然我们通常选择直接查看内容，但长时间使用同一种方式总会感到疲惫。此时，躺在床上或椅子上，把原材料丢进去，让 AI 生成一男一女的对话播客，确实让信息吸收变得轻松许多。

以不同的方式处理相同内容，往往能提升我们的兴奋度。就好像休闲时，我们想听播客，工作时则更依赖文字效率。

NotebookLM 生成的播客在流畅性和换气自然度上表现非常出色。例如，我上传了 Dify 开发者贡献指南（https://docs.dify.ai/community/docs-contribution），它就生成了一个质量极高的播客。

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibt5QVrjyicjd14R4icia5evxjLCOoY5gtJFlFj8LcyrRRTxoSO8ERCs2NE5ZibKo60ShOMwYl93q5Ovbw/640?wx_fmt=png&from=appmsg)

NotebookLM 在流畅性和自然度上表现优异，但可惜的是它不支持中文播客输出。接下来，我们将先介绍一下 NotebookLM，然后再转向 PodLM 和 F5，这两个为中文用户提供支持的播客解决方案。

NotebookLM，支持多种文件格式的导入，包括 Google 文档、幻灯片、PDF、txt 和 Markdown 文件，甚至复制粘贴文本、分享网址和 YouTube 视频链接，或上传音频文件。每个来源上限为 50 万 tokens，上传文件的大小限制为 200 MB，而每个笔记本最多可容纳 50 个来源。这种灵活性让知识的获取与创作变得轻松而丰富。

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibsKcKTX9EgbjX9596MZbeybfiaAljE1It5q7tC0yicOeDM68IR5DMmw4ooctv7UiamtZBwbl1CAMbqKQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibsKcKTX9EgbjX9596MZbeybcicQu8Zwee4uAjzTIc9l16e8zmrq0sF0QXLLA58gm6dic2akssGse6nQ/640?wx_fmt=png&from=appmsg)

在NotebookLM的主界面，我们可以看到三个核心功能：首先，上传的文档构成了我们的知识库，用户可以对其进行提问，获取精准答案；其次，点击ai播客它就会生成这些文档的播客内容；最后，还有五个快捷选项，帮助你便捷地生成所需内容。这一切，使得知识的获取与应用变得更加高效与直观。

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibsKcKTX9EgbjX9596MZbeybh55dpHFnyFvRQLa1ydV0lU0zcUkZhdWRzsrhlmlnnPQ0sIJrN5DdDA/640?wx_fmt=png&from=appmsg)

NotebookLM的第一个功能是RAG（Retrieval-Augmented Generation），允许用户对知识库进行提问，表现相当出色。每个空间最多可容纳50个文档，但用户可以创建更多空间。相比于Anythingllm，NotebookLM在这方面更具优势，使用的是免费的Gemini模型，操作也更加简便，唯一的挑战在于其界面基本上是全英文的。  

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibsKcKTX9EgbjX9596MZbeybCDSNibSW4rict2xEQfVIxboCwhiamfiby4NQIlcykf1HTZouQVCK4Too0g/640?wx_fmt=png&from=appmsg)

这五个快捷选项挺有用的

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibsKcKTX9EgbjX9596MZbeybzjictRrMWKojNVXqiaCpyCXDvpzmrtdv1SibWyoqicPjIbibQgmAAeWs9qA/640?wx_fmt=png&from=appmsg)

比如其中，大纲 ...

![](https://mmbiz.qpic.cn/mmbiz_gif/Sn1tJhGWmibsKcKTX9EgbjX9596MZbeybCiaWIDMlYN2TkJdGFS0hK1V6BXxWzXiaDUNicTnziaj07h2icQGY7WR9Yyw/640?wx_fmt=gif&from=appmsg)

然后时间线 ...

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibsKcKTX9EgbjX9596MZbeybbhnxzbVG8UVO6ArXiaaOd0AicG9hI0Kpar1FWUzM2HtHYBwfOSic9E1Zg/640?wx_fmt=png&from=appmsg)

NotebookLM可以作为研究型专家，支持用户导入多种研究材料，如论文、参考资料、视频（youtube 链接）和音频等，集中进行混合研究。通过其知识库功能，用户可以结合不同领域的信息，模拟主持人与专家之间的一问一答形式。  

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibsKcKTX9EgbjX9596MZbeybrliciacfOf82oOFWExLvSXAnRicqouXkHK9qoToz9dKedd1LQJVrwQbqA/640?wx_fmt=png&from=appmsg)

基本的功能我们介绍完了，那么，对于 NotebookLM 有没有一些好的实践？  

OpenAI的创始成员Andrej Karpathy对NotebookLM充满热情，认为它可能开启与大型语言模型产品交互的新范式，令人想起ChatGPT的影响。他花了两个小时制作了一个10集的历史主题播客系列，并上传至Spotify。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/ePTzepwoNWMUdYqfIkpaUTDH8KxKOGPaWjUQfnNy9cibxO9RgBib2TC6Jn1aV5fPCAWbKvpibtMdq1wsYLx0zGicTg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

▲ 来源｜36氪

其过程颇具启发性，可以总结为以下几步：

1\. 创意生成：使用ChatGPT、Claude和谷歌寻找有趣的话题。

2\. 内容创作：根据维基百科条目，让NotebookLM生成音频内容。

3\. 播客简介：用NotebookLM撰写播客描述。

4\. 封面艺术：使用Ideogram创建播客封面。

另外想想，AI播客属于音频内容，那么利用数字人技术，或许可能将它转化为真正的访谈节目,比如 ...

来源：https://www.youtube.com/watch?v=lFxu0mlOoWs

利用Heygen，我们通过中文音频生成虚拟数字人视频，它是能够根据音频内容对准口型的，并配合恰到好处的肢体动作和表情。

只需将AI播客的音频上传即可。  

除了NotebookLM，我记得谷歌以前还有一个Illuminat — 专门 将论文转换成音频的产品。

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibsKcKTX9EgbjX9596MZbeyb5ibeShydwbve8cBvVQPlakpQxvntOEaibgoIC6tvjnVXPHF8428L62iaw/640?wx_fmt=png&from=appmsg)

无论如何，NotebookLM并不支持中文，不过目前来讲，有一些开源平替：Open NotebookLM、文档生成播客的 Podial、PodLM ......

还有，最近的 F5 TTS 也支持AI播客

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibsKcKTX9EgbjX9596MZbeybolf8ZxBoRSF4ZiclGSBwzK4kx9Y0ue00e7AEJ8wiaLgIicD6NibpVqDqAw/640?wx_fmt=png&from=appmsg)

这个东西操作挺简单的，到这里https://podlm.ai/zh-CN可以免费体验一定的次数，不过他也是开源的，你可以选择自己部署。

现在下面是使用PodLM的一个例子

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibsKcKTX9EgbjX9596MZbeybiaf1IOwq5Mb1ZmlTRE4ycxHfH5JbgthVU94YnKorQFgicmM305CicRQxw/640?wx_fmt=png&from=appmsg)

点击生成它就会按照你填入的内容，自动补内容，形成播客脚本，并生成音频

![](https://mmbiz.qpic.cn/mmbiz_gif/Sn1tJhGWmibsKcKTX9EgbjX9596MZbeybmOmGhJelPcWtQ9uJ1X0Xjiag9CpTicIpRXBthKiartmia1d7xhcqIJF2bQ/640?wx_fmt=gif&from=appmsg)

这个音频就是用文章开头内容生成的AI播客，

虽然不如NotebookLM生成英文播客那样流利顺畅，不过也做的挺不错的，而且它是开源的：https://github.com/lihuithe/podlm-public。

这是一个挺厉害的TTS项目  

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibsKcKTX9EgbjX9596MZbeyb1TCQyh6Xg1dVNlSv4EXIIpE7XO1ibsicUKEzIYoubnWqD1oCY9iaaBoPg/640?wx_fmt=png&from=appmsg)

我在Colab部署F5后生成了一个例子：

由于F5官方（https://huggingface.co/spaces/mrfakename/E2-F5-TTS）访问人数众多，经常出现卡顿，因此推荐本地部署。第一种方法是在我的Windows电脑上部署，使用4060显卡（8GB显存），生成15个字的内容也需要比较久的时间，显存要求较高。

如果你想要更便捷的体验，可以选择第二种方法，我已在谷歌Colab中调试好，只需连接到T4 GPU，速度比我本地的快得多。

现在看看第一种方式：首先克隆仓库

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibtDWhEJYv8ia48187bicibUYR8uIeVobU2LtC4SdIGQAjDJiaKibKruqC47Mlicaicmo0vGFia2s6sXp0cibEg/640?wx_fmt=png&from=appmsg)

打开pycharm进入项目目录，pycharm提示自动按照requirements.txt创建虚拟环境，当然你也可以使用conda手动创建虚拟环境并安装依赖

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibtDWhEJYv8ia48187bicibUYR82MoZsib03Rj4icdjNeNG5U2jnrfQRSymxlXJWB45Cbib4JPf8UMCmxDRg/640?wx_fmt=png&from=appmsg)

我们需要查看本机的Cuda版本，安装对应的torch与audio torch，我这里使用了一个上海交通大学的源，测试下来比较好，我的cuda是12.1的

```javascript
pip install torch===2.3.0+cu121 torchaudio===2.3.0+cu121 -f https:
```

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibtDWhEJYv8ia48187bicibUYR8oObWobp3Yzz8sQNR6ZYVibpn3XxM4KxezaHSOoWf94uEsbJOmPeOribA/640?wx_fmt=png&from=appmsg)

安装依赖

```css
pip install -r requirements.txt
```

然后执行python gradio\_app.py启动项目

![](https://mmbiz.qpic.cn/mmbiz_gif/Sn1tJhGWmibtDWhEJYv8ia48187bicibUYR8Em0H5uIYy3ygU8Zzkk6XufibFYEEMElakyMuMOkkbbKD7Ibc5q19Tag/640?wx_fmt=gif&from=appmsg)

点击web界面的端口

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibtDWhEJYv8ia48187bicibUYR8YrCV0uu629MAngfJG40wvc7mCvcMJxQ8oUibm4uagOfGIxHhdU5Tp9w/640?wx_fmt=png&from=appmsg)

可以看到界面：

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibt5QVrjyicjd14R4icia5evxjL7vQJVHN2RHyJOByyQoje3XhfJXY7YcXPoVU2wZYL02TqvDSQlhXQdQ/640?wx_fmt=png&from=appmsg)

TTS功能是正常的，但是播客用不了，会报一个这样的错误

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibt5QVrjyicjd14R4icia5evxjL4839icoNTibjIkxc1eVPHLmtuXW6WLJoV11nIiaia6cxibPWXMSjOS5MC7Q/640?wx_fmt=png&from=appmsg)

总之播客没有生成出来内容，我也不想花太多时间弄这个，网上也没有生成成功的例子，期待有人指明。并且，官网的播客也是一直处于生成错误的状态。

此外，如果你的TTS也没有成功的话，他可能缺少ffmpeg，你需要安装它

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibt5QVrjyicjd14R4icia5evxjLibJjHgoXjlp9ics6gwKKOM2XLyWJGoOJ8tV8g1SYHU5NYWKbkOU1baSA/640?wx_fmt=png&from=appmsg)

安装这个东西的网址在这（有不同系统的）：

https://www.gyan.dev/ffmpeg/builds/

Windows中记得把bin文件夹添加到环境变量中。

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibt5QVrjyicjd14R4icia5evxjLD9ALcnlRfTZaeE9scvibNdkujIibPdCPYicMSsa55ScjWPII3nhPKIkew/640?wx_fmt=png&from=appmsg)

**现在****第二****种：** **Colab部署****，**我解决了几个潜在的问题，Colab版本可以直接运行，笔记本在这：

https://colab.research.google.com/drive/1KoMvZQyxXiE3bw00\_InCyNDbD4WkPlNr#scrollTo=P9Sgtw-jBBRe

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibsKcKTX9EgbjX9596MZbeybQfPGr07xTicrRcTB7sMqKpj76kqY30aVRUoVqP3j3KiamD1W8fyuLZQQ/640?wx_fmt=png&from=appmsg)

链接T4，然后点击最后一行，并“ctrl+F8”，它会执行所有代码。

总的来说，就是这样，语音是人类最自然的交互模式之一，符合我们大脑的认知习惯。虽然我们有教科书，但依然需要老师讲课来帮助理解复杂内容。当我们能用口语解释概念、讲给别人听时，才真正掌握了它。AI播客 就是用简单的语言重新诠释书面概念，同时融入情绪和语气，带来了更自然的感官体验。  

传统媒体让你被动地听别人制作的内容，而现在，你可以主动制作个性化的音频。

正如 OpenAI 研究主管 Karina Nguyen 所说，‘我心目中的终极 AGI 界面是一张空白画布（Canvas）’，它随着人类的偏好不断演变，自我变形，给予用户无限的创作空间和自由度，让交互方式更加个性化和丰富。

![](https://mmbiz.qpic.cn/mmbiz_jpg/Sn1tJhGWmibsKcKTX9EgbjX9596MZbeybybq0icL9vyts6IWAeHAVzBX54OEB5WDccKWjKuwGEgzaaIeS2f7lS4w/640?wx_fmt=jpeg&from=appmsg)

🌟希望这篇文章对你有帮助，感谢阅读！如果你喜欢这系列文章请以 **点赞 / 分享 / 在看**的方式告诉我，以便我用来评估创作方向。

👽Submission：kristjahmez06@gmail.com

参考链接：  
\[1\] https://mp.weixin.qq.com/s/Jqf2eZZHSU0ax732xP5V5g  
\[2\] https://www.youtube.com/watch?v=lFxu0mlOoWs  
\[3\] https://podlm.ai/zh-CN

**知音难求，自我修炼亦艰**

抓住前沿技术的机遇，与我们一起成为创新的超级个体

**（把握AIGC时代的个人力量）**

**![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibvgdb2aJDwhibkffK1tFRxspVl4CqmANMWgQcbOMDlDKy5iakx25Smj0oUtlhrG7J5aWqsibBveoeRdA/640?wx_fmt=png&from=appmsg)**

**点这里👇关注我，记得标星哦～**

**一键三连「分享」、「点赞」和「在看」**

**科技前沿进展日日相见 ~**

![](https://mmbiz.qpic.cn/mmbiz_svg/g9RQicMD01M0tYoRQT2cMQRmPS5ZDyrrfzeksiay90KaDzlGBH61icqHxmgFKfvfXtVuwTHV740CDLAaXU1LIfZyoJEpYKcRIiaE/640?wx_fmt=svg)