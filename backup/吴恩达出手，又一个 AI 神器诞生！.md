公众号关注 “GitHubDaily”

设为 “星标”，每天带你逛 GitHub！

![](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28iaSZV42KyEQWTnQYC8blszvkSeHj0DMcEIe7n74HGvUicibCG5jn1wePMnic984FgymQH6PkMQcFU45A/640?wx_fmt=png)

如今，翻译已成为日常工作中不可或缺的一部分。无论是出国旅游、阅读外文资料，还是在跨国企业中工作，翻译都无处不在。

因此，拥有一个准确且高效的翻译工具至关重要。它不仅能帮助你避免误解，还能显著提升工作效率。

最近，吴恩达提出 “AI Agentic Workflow（AI 智能体工作流）”将引领人工智能新趋势之后，昨天他基于这一理念构建了一个「AI 智能体翻译工作流」，并在 GitHub 上开源。

![](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28iaib1hQn9Vvyx5toUk3UeUFTGqRayWMtqQ1UNLiccqO5P70Oa7BEaFGrAAJibd7vOSgFb8EhbibWmu4gg/640?wx_fmt=png&from=appmsg)

GitHub：https://github.com/andrewyng/translation-agent

该工作流旨在利用人工智能技术，简化和加速翻译过程，为企业和个人带来更加高效和精确的翻译解决方案。

主要分为如下三个步骤：

1.  通过指定大语言模型（LLM）进行语言之间的翻译；
    
2.  对翻译结果进行反思，并提出改进建议；
    
3.  再根据这些建议进行优化翻译。
    

同时这也是一套高度可控的翻译工作流，你只需通过修改提示词，就可以指定语气（正式或非正式）、地区等，甚至你还可以提供专业术语表来确保术语翻译的一致性。

下面一起来看下如何安装部署使用该工作流。

1.  首先需要安装 Poetry 包管理器：
    

pip install poetry

2.  拉取项目源码到本地：
    

\# 克隆项目到本地  
git clone https://github.com/andrewyng/translation-agent.git  
  
\# 进入项目文件夹下  
cd translation-agent

3.  安装相关依赖及激活环境：
    

\# 安装 Poetry 相关依赖包  
poetry install  
  
\# 激活虚拟环境  
poetry shell

4.  将项目文件夹下的 .env.sample 文件去掉后缀 .sample，并填入 OPENAI\_API\_KEY：
    

OPENAI\_API\_KEY="sk-xxxxx"    \# replace "sk-xxxxx" with your secret OpenAI API key

5.  运行项目提供的示例：
    

\# 在 examples 文件夹下提供相关示例  
python example/example_script.py

6.  其他相关用法说明：
    

import translation_agent as ta  
  
source_lang, target_lang, country = "English", "Chinese", "China"  
  
translation = ta.translate(source_lang, target_lang, source_text, country)

通过以上步骤，如无问题可正常运行工作流，来看下我测试得到的结果：

![](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28iaib1hQn9Vvyx5toUk3UeUFT1hhmLOHqRdNa36MGJnK69fI4l2QIkPbsCAM49rOWf7HBcHqS9CMb9A/640?wx_fmt=png&from=appmsg)

吴恩达表示在他们的测试中，这套翻译 Agent 工作流在翻译质量上有时甚至可以媲美领先的商业翻译工具。

不过，吴恩达也表达了这是一个并不完善的翻译工具，仍有很大的优化空间，呼吁开源社区一起来完善它。

项目是以 MIT 许可开源的，你可以自由使用、修改和分发该代码，无论是商业用途还是非商业用途。

最后，吴恩达还分享了几点继续优化该智能体的想法，如尝试其他大语言模型、常用的专业术语表应用以及在不同语言上的表现评估等。

可预见的，在各种大语言模型逐渐发展成熟后，机器翻译的流程将会越来越简化。

以视频字幕为例，我们可以基于 Whisper 模型来快速生成视频字幕文本，将字幕文本拆分后，转而提交给 GPT-4o 或其他大语言模型进行翻译。此前我翻译吴恩达老师的《[ChatGPT 提示工程](http://mp.weixin.qq.com/s?__biz=MzAxOTcxNTIwNQ==&mid=2457982620&idx=1&sn=aafe90ca058bab1debe15407a42dfd88&chksm=8cb7b376bbc03a60ec46d41f1a6f492273de9afb223a3a99837e7dd1440c24957cd44b29b6e5&scene=21#wechat_redirect)》教程时，便是采用的这种方式。

能够熟练将各种 AI 工具进行配套组合，进而让个人能力发生质变，这是我认为当下人工智能时代，作为普通人最需要掌握的核心技能。

文中所提到的所有开源项目与工具，已收录至 GitHubDaily 的开源项目列表中。

该列表包含了 GitHub 上诸多高质量、有趣实用的开源技术教程、开发者工具、编程网站等内容。

从 2015 年至今，累计分享 3500+ 个开源项目，Star 增长 24000+，有需要的，可访问下方 GitHub 地址自取：

GitHub：__https://github.com/GitHubDaily/GitHubDaily__

![](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28ia1W6JDd2aJ7YuzR2FbiaXOLQBibPPOc65M3Lapv4ly5gTuIMcpNshribHuNHibOQnwSYUgSv2XNkKXIw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

好了，今天的分享到此结束，感谢大家抽空阅读，我们下期再见，Respect！