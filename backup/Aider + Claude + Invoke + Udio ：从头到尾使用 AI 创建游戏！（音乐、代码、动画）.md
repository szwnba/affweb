> Aitrainee | 公众号：AI进修生

> 🌟教你如何使用 Claude 3.5 Sonnet、Aider、Invoke、Udio 和 ElevenLabs 从头到尾创建专业的 AI 游戏。这将是一个完整的动手教程，解释如何在不编写任何代码的情况下免费创建 AI 游戏。

Hi，这里是Aitrainee，欢迎阅读本期新文章。

> 🌟我分别使用 Aider + Claude 3.5 Sonnet 生成游戏，使用 Invoke 生成精灵/图像，使用 Udio 和 Elevenlabs 生成音乐和音效。

这是一个非常有趣的实验，可以看看 **AI 在新的 LLM 和扩散模型下取得了多大的进展**。你还可以将其与开源 LLM（如 DeepSeek-Coder-V2、Qwen2、Llama-3 和其他此类 LLM）一起使用。

以前的文章也有介绍过AI制作游戏的，比如展示如何用一个文本提示就能用AI创建游戏和应用程序。一般来说，我会创建一些基础的东西，比如**贪吃蛇游戏或待办事项应用程序**。

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibuIUJtMYvmWcTq4CBVicC1dFYrxk68OYkjv8Buxp7Gnib4VWj5BQ9NVYrJyyuWXb6cIB2zufkJtmbicQ/640?wx_fmt=png&from=appmsg)

然而，这次我要展示如何从头到尾制作一个完整的游戏，而不仅仅是简单的贪吃蛇。这次的游戏将包括开始界面、结束界面、精灵动画等内容，且全程无需接触任何代码文件。

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibuIUJtMYvmWcTq4CBVicC1dFTjhhYkOibsoBicWWZsLcHYXQvNIV0KLwmE3AvGUBia89NnWFDzVM62Smw/640?wx_fmt=png&from=appmsg)

我将使用Claude 3.5 Sonnet模型，

Claude API：https://github.com/topics/claude-api

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibuIUJtMYvmWcTq4CBVicC1dF1gMZRHkYIOuHbWKoUXHhbXfTjyRWzjTWDUYGyrcM63j8DHaMwR6bkw/640?wx_fmt=png&from=appmsg)

它在大多数任务上表现出色，尤其擅长编写代码，这正是我们所需的。虽然我会用Claude AI模型，但不会使用Claude AI聊天界面，因为自己提示和组织结果非常麻烦，进行修改更是如此。

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibuIUJtMYvmWcTq4CBVicC1dFDD6UlHicDyD5omvy4rTibzVSoicu7z9EicYaNE2W8GvODNiaf9XABNtYdxw/640?wx_fmt=png&from=appmsg)

相反，我会使用AER（**公众号主页Aider介绍文章：https://github.com/paul-gauthier/aider**），它像是一个编程助手，可以自动创建和修改文件，不需要我们直接操作代码文件。

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibuIUJtMYvmWcTq4CBVicC1dFRvNiaoXqEibSyZ3MNo0ic8U2vYuCKIM3JXF2AuiaWFYlmhyJhh8syQ7xjw/640?wx_fmt=png&from=appmsg)

此外，我还会用Invoke AI生成一些精灵和图片（**或者你可以使用sd或者comfy ui**），使整个游戏更加精美。

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibuIUJtMYvmWcTq4CBVicC1dFYlYq8CobiaP1wbskFeMYUPibEB3axBDUvCliam5OxLQAM9BgnvjohBLfg/640?wx_fmt=png&from=appmsg)

为了让游戏更完整，我还会使用Udio和Eleven Labs生成音乐和音效（**或者你可以使用suno、剪映的音乐素材**）。

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibuIUJtMYvmWcTq4CBVicC1dFEJF4Fr6LRYt0OJoiakB1LSUrPJbia6aLHawcBX0kIy31ewxH5Py1XQpA/640?wx_fmt=png&from=appmsg)

那么，这次我要制作什么样的游戏呢？这是一个简单的游戏，名字叫“香蕉王”，玩家需要在一分钟内控制猴子收集15根香蕉。这只是一个概念验证，展示如何用文本提示创建游戏，无需编程知识。

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibuIUJtMYvmWcTq4CBVicC1dFFhs7IoweHCpotJiaNanibjPrORPTno0CvyS5da7VjUNLm1LryVKfNfPw/640?wx_fmt=png&from=appmsg)

我们首先安装AER，运行pip install AER即可。

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibuIUJtMYvmWcTq4CBVicC1dFibO80TLNxkrawYbaiacetNrCC4OHGic5QlicaiaUkV6d4icX0eUkU5DiaAygg/640?wx_fmt=png&from=appmsg)

然后，我们需要在终端中导出你的Anthropic API密钥来使用Claude 3.5 Sonnet（Aider支持Ollama，没有api，你可以尝试其他的LLM供应商）。

[**Aider + DeepSeek +  Claude 3.5 Sonnet：一次提示生成应用程序（使用 Ollama）**](http://mp.weixin.qq.com/s?__biz=MzkyMzY1NTM0Mw==&mid=2247489366&idx=1&sn=4e58697f15f4c8219485ef32ca1b5110&chksm=c1e09a96f69713804125d4b313b85b04ad23fe5b2358ed9e8108cb7ef4a1c43eb0d09b157128&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibuIUJtMYvmWcTq4CBVicC1dFJKznIomxNtwCArH5ZE4XKjrWE0JAAYicjq4NbyqNCYW3jEEcrzaYnKQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibuIUJtMYvmWcTq4CBVicC1dFcibjWBM00FMVZ9PFAibickxm6EIDw0u45ia089vQyGI47gqjErMHwiayLzg/640?wx_fmt=png&from=appmsg)

推荐在使用前初始化一个git仓库，这样可以更方便地管理生成的文件。我会用HTML、CSS和JS在网络界面上创建这个游戏，当然你也可以创建桌面应用。

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibuIUJtMYvmWcTq4CBVicC1dFGkhJhTfM7zrA2pnjMwLZLaWf6r3fQCbrQzIjJNaMJgoSwCWtQe5vYQ/640?wx_fmt=png&from=appmsg)

接下来，我们提供详细的文本提示给AER，让它生成代码并列出任务。生成代码后，它会询问是否执行创建操作。确认后，AER会生成所需的文件。

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibuIUJtMYvmWcTq4CBVicC1dFMB7LkdxCbqU04X6TNyIAegPlFMG4LYMRJic4Utxh6e8LHDrOKl0kJOA/640?wx_fmt=png&from=appmsg)

初步查看游戏，有一些问题，比如平台间距过大。

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibuIUJtMYvmWcTq4CBVicC1dFDia01b5rG2ddCj0Twu1LZPs5icwJenx1qrvNEW6nStSz13KB9R0CAyTw/640?wx_fmt=png&from=appmsg)

▲ 动画演示请观看上方视频

通过多次调整，最终平台间距得到了优化。

为了让游戏更具动态性，我还添加了逻辑，增加玩家收集香蕉数量后跳跃速度的变化。

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibuIUJtMYvmWcTq4CBVicC1dFhDXiceib4wdTEdXBXUXoZHic17nH2RKbRjzppOWgA0cG9aYdR8Mb2icjGw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibuIUJtMYvmWcTq4CBVicC1dFhqBXg9FoCJtVpEA1xu26Np4O7urTtfv519v14T9KP32Tfofll5HZdA/640?wx_fmt=png&from=appmsg)

接着，我们需要一个开始界面，我让AER生成并添加了这个界面，看起来非常酷。

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibuIUJtMYvmWcTq4CBVicC1dFEIMSKqGEmMJnwbaMOWDdFgREPYVQLp8tnjtmD6LHT0ibAY2kfolYzBw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibuIUJtMYvmWcTq4CBVicC1dFKCknz4xJOm6FGeG99QC72hQUX521iaALvCYP1thGlE6MXes4RMHgPBQ/640?wx_fmt=png&from=appmsg)

为了让游戏更完善，我们还需要将图形替换为图片，并让AER生成所需的文件名和尺寸。通过Invoke AI生成了背景、平台和香蕉的图片，并放置在正确的文件夹中。游戏现在看起来非常棒。

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibuIUJtMYvmWcTq4CBVicC1dFRX8YkK5ic3ia1uJlfRRokOnWBmGZ4jjgZomVs6EiaJZrhdsouNc67wrNw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibuIUJtMYvmWcTq4CBVicC1dFngHicSUMWrUzAtId4BSicfALyNMogMpkaQ5MxRZtOQsjcX4f4PJMgP8A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibuIUJtMYvmWcTq4CBVicC1dFX3twOsvzJt9iahOeVv87tnCCudUQkGWAITv3LaRnSIE3AWbXXlcuAicQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibuIUJtMYvmWcTq4CBVicC1dFF04aWN0pO6licliaxjGhCOXmuxdleP70r1N5C3IDlYkW8JC0AHbQBcEg/640?wx_fmt=png&from=appmsg)

为了增加游戏的沉浸感，我们还需要背景音乐和收集香蕉时的音效。我用Udio生成了两段音乐，选了一段合适的作为背景音乐。

用Eleven Labs生成了收集香蕉的音效。把这些音乐和音效添加到文件夹后，让AER将其集成到游戏中，并添加了静音选项。

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibuIUJtMYvmWcTq4CBVicC1dFFGkCRMWzVReJD1ZE2M6lBWnrTbTZaPuoYoSm9U92CtXQaicrE7u7rEg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibuIUJtMYvmWcTq4CBVicC1dFJfa0tuW3OGaWa94vdDw1dKjXTTlSgcXzG6ZoqWLW22Nbria6MaGFLJw/640?wx_fmt=png&from=appmsg)

现在游戏完全制作完成了。让我带你们看看这个完全用AI文本提示制作的游戏。从开始界面可以看到游戏标题“香蕉王”和开始按钮。进入游戏后，有60秒时间收集散落在平台上的15根香蕉。

如果在限定时间内收集完，就能获胜。虽然这不是一个非常复杂的游戏，但展示了AI模型的强大功能，任何人都能在一到两小时内创建这样的游戏。

![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibuIUJtMYvmWcTq4CBVicC1dFZqJwrscRV0XH1hmB88HcpgTjusZ6MhPtnVxZibUvFZCKsjDouV9DfOw/640?wx_fmt=png&from=appmsg)

▲ 动画演示请观看上方视频

如果你们对我用AI创建完整应用程序感兴趣，请到AI社群交流~

希望这篇文章对你有帮助，感谢阅读！

视频教程

https://www.youtube.com/watch?v=sOd2YYZFMUs

参考链接：  
\[Aider\]https://aider.chat  
\[ElevenLabs\] https://elevenlabs.io/sound-effects  
\[Udio\] https://elevenlabs.io/sound-effects

**知音难求，自我修炼亦艰**

抓住前沿技术的机遇，与我们一起成为创新的超级个体

**（把握AIGC时代的个人力量）**

**![](https://mmbiz.qpic.cn/mmbiz_png/Sn1tJhGWmibsTl3YiaoNO7XxjicK7zCRNsm84GVSuOGcorAqppkMSFVts1hEicJeM2PfuTnicJMjHpNicwIYj2Rq8FxQ/640?wx_fmt=png&from=appmsg)**

**点这里👇关注我，记得标星哦～**

**一键三连「分享」、「点赞」和「在看」**

**科技前沿进展日日相见 ~**

![](https://mmbiz.qpic.cn/mmbiz_svg/g9RQicMD01M0tYoRQT2cMQRmPS5ZDyrrfzeksiay90KaDzlGBH61icqHxmgFKfvfXtVuwTHV740CDLAaXU1LIfZyoJEpYKcRIiaE/640?wx_fmt=svg)