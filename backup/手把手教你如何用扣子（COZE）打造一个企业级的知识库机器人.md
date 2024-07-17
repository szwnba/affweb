本文分为三个部分

**第一部分介绍AI大模型（LLM）和AI Agent的区别。AI Agent的能力为什么变强了？**

**第二部分通过一个实际案例，手把手的教你如何使用扣子（COZE）**

**第三部分聊一聊AI Agent未来会对我们的工作和生活产生哪些改变**

其实教程本身不是最重要的，本篇文章第二部分的教程只是在验证和推导出第一和第三部分的观点和推论；

这篇文章字数有点多，如果没什么耐心的话，可以拉到文章末尾直接找机器人体验入口亲自感受一下。

一、AI Agent的概念和能力

1、什么是AI大模型（LLM）：大型语言模型（例如GPT-4或BERT）是一种基于深度学习的模型，主要被训练来理解和生成自然语言文本。这些模型通过分析大量的文本数据学习语言的统计规律，从而能够完成翻译、摘要、对话等多种语言任务。大型语言模型通常没有特定的目标或任务，而是根据输入的文本生成相关的输出。

2、AI Agent则是指可以自主执行任务或目标的系统，它可以是一个软件，也可以是一个智能机器，这些系统通过感知环境并在此基础上做出决策。AI Agent可以集成多种技术，包括AI大模型（LLM），但它们的核心是交互性和目标导向性。例如，自动驾驶汽车是一个AI Agent，它通过感应周围环境（如路况和障碍物）来决策接下来每一步的行动方案，从而实现安全驾驶的目的。

3、用一个可能不太恰当的比喻，AI大模型（LLM）就是人的大脑，AI Agent就是人本身。AI大模型（LLM）只有输入输出，而AI Agent则包括AI大模型（LLM）、Planning（规划）、Momory（记忆）（前面三项构成了大脑）、Tools（工具，就是手脚）。

4、以前AI模型（LLM）出来之前，所谓的智能机器人无法“理解”人类的语言。    

![](https://mmbiz.qpic.cn/mmbiz_jpg/2j9zCVVReY3nQxZ2ZufjDZ5LY7W5PjNL8x4FNbWruyR5UdGAxCjMK4ibbVicTWgnSowlWUk1ygdYeXUmphPMZHjw/640?wx_fmt=jpeg)

而AI大模型通过深度学习技术，开始“理解”人类的语言了（本质上就是通过AI大模型，对下一个token的预测准确率大大的提高了，如何通过prompt也就是输入进一步提高准确率这一话题，以后有机会再写），这个时候和“它”对话，其作用逐渐显现出来，感觉也越来越像人了。

![](https://mmbiz.qpic.cn/mmbiz_png/2j9zCVVReY3nQxZ2ZufjDZ5LY7W5PjNLv2gicHg30M825eicHwHJUqduY19qDVad3QPEswvOpEhnG37VZBksniaQg/640?wx_fmt=png)

因此时至今日，AI Agent这最重要的一环逐渐闭合了。AI Agent即将发挥越来越重要的作用，可以预见，未来AI Agent将出现大量的应用，将很大程度上改变我们的生活和工作。

5、所以AI Agent=AI大模型（LLM）+Planning（规划）+Momory（记忆）+Tools（工具）。

二、如何用扣子（COZE）做一个AI Agent，更具体一点就是知识库机器人

1、扣子（COZE）分为国内版和国外版

（1）国内版：https://www.coze.cn。

大模型使用的是字节自研的云雀大模型和kimi大模型。

国内版官方文档教程：https://www.coze.cn/docs/guides/welcome

![](https://mmbiz.qpic.cn/mmbiz_jpg/2j9zCVVReY3nQxZ2ZufjDZ5LY7W5PjNLUySpRN3HewhCwgE2h3eshTxmqwQdvLymwQHiakroaHAMqSXV6ibAqjrg/640?wx_fmt=jpeg)

（2）国外版：https://www.coze.com/

大模型使用的是GPT-3.5，GPT-4（是的，在这是可以免费用GPT-4的），但是需要一些科学上网的方法。

国外版官方文档教程：https://www.coze.com/docs/guides/welcome    

![](https://mmbiz.qpic.cn/mmbiz_jpg/2j9zCVVReY3nQxZ2ZufjDZ5LY7W5PjNLzia6nswytibW9bhOQwrtrwpnRZzRb9ZibUQeeF3TByhKwscXkXlAJXlibg/640?wx_fmt=jpeg)

国外版的COZE的确比国内版的要香一些，但是国内版的一些功能也在不断地完善。就是在大模型对话方面，GPT-4的确要顺滑多了。体验上的排序如下：GPT-4>GPT-3.5=kimi>云雀大模型。

我们的教程就以国内版COZE来进行。

2、扣子（COZE）功能介绍

![](https://mmbiz.qpic.cn/mmbiz_jpg/2j9zCVVReY3nQxZ2ZufjDZ5LY7W5PjNLUySpRN3HewhCwgE2h3eshTxmqwQdvLymwQHiakroaHAMqSXV6ibAqjrg/640?wx_fmt=jpeg)

以下内容来自扣子官方指南：https://www.coze.cn/docs/guides/function_overview。  

**这部分可迅速的略过，在制作的过程中，在回过头看一下相关功能。** 

基础能力    

你可以使用扣子提供的以下功能，定制你的 AI Bot：

（1）提示词（人设与回复逻辑功能）

设定 Bot 的身份及其目标和技能，例如产品问答助手、新闻播报员、翻译助理等等。Bot 的提示词决定了 Bot 如何与你的用户进行互动。

（2）插件

通过 API 连接集成各种平台和服务，扩展 Bot 能力。扣子平台内置丰富的插件供你直接调用，你也可以创建自定义插件，将你所需要的 API 集成在扣子内作为插件来使用。

（3）工作流

一种用于规划和实现复杂功能逻辑的工具。你可以通过拖拽不同的任务节点来设计复杂的多步骤任务，提升 Bot 处理复杂任务的效率。

（4）触发器

允许用户在与 Bot 对话过程中，根据用户所在时区创建定时任务。例如“每天早上八点推送新闻”。每个对话中最多创建 3 条定时任务。

（5）记忆库

扣子的记忆库功能可以保留和理解对话细节，并支持添加外部知识库给模型补充知识，使 Bot 与用户的互动更加有针对性和个性化。你可以通过以下方式来存储和管理外部知识。

知识库：支持上传本地或线上内容，然后将这些内容分割成知识分片，通过语义匹配给模型补充知识。

（6）变量

用于保存用户个人信息，让Bot记住用户的特征，使回复更加个性化。

（7）数据库

用来存储和管理结构化数据，并支持用户通过自然语言方式对数据库中的数据进行增删改查。    

（8）长期记忆

总结聊天对话的内容，并用于更好的相应用户的消息。

（9）开场白

设置 Bot 对话的开场语，让用户快速了解 Bot 的功能。例如 我是一个旅行助手 Bot，我能帮助你计划行程和查找旅行信息。

（10）用户问题建议

Bot 每次响应用户问题后，系统会根据上下文自动提供三个相关的问题建议给用户使用。

（11）音色

为 Bot 选择与用户交流使用的音色。

高级能力

除了上述简单易用的搭建能力，扣子平台还提供了以下高级功能，让你更加灵活的设计、使用搭建的 Bot。

（12）数据分析

扣子平台为每个 Bot 提供了数据分析看板，让你可以通过数据得知 Bot 的使用情况。例如活跃用户数、留存率等。

（13）多发布渠道

扣子支持将搭建的 Bot 发布到各种社交应用中，让你的 Bot 服务更多的用户。

接下来我们结合实际案例来熟悉这些功能。

3、搭建网站（www.17ai.site）知识库机器人

**（1）该机器人产品的背景、目的及价值**

最近几个月AI的发展非常的迅猛，几乎每天都在发生变化，我在查找相关信息的过程中就发现，大量的时间花在了查找、分辨高质量内容的方面。    

我就想能不能边查找AI相关信息的同时，边将高质量的内容整合到一起呢，我想，这是有价值的。于是做了一个AI信息聚合网站www.17ai.site。

![](https://mmbiz.qpic.cn/mmbiz_png/2j9zCVVReY3nQxZ2ZufjDZ5LY7W5PjNL3sjOmib9kfAS6ibSeXHfRme4nOnfsmz7pCrOghxZJKztD24HIhLvqmyg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2j9zCVVReY3nQxZ2ZufjDZ5LY7W5PjNLythvytxl3thXHBQECGzu5lzWYEic3h60gp8W8ldjHhd3Aiaaz3JNYPYw/640?wx_fmt=png)

从体验上来看，一方面随着信息越来越多，单靠分类、标签，用户仍然会越来越难以查找到自己想要找到的信息。另一方面，站内搜索的体验感很差，很多信息搜不出来，用机器人对话体验感则好了很多。

看下面的示例，同样搜GPT网站内容，站内搜索搜不出来，机器人会帮你找到，提供教程链接，并给出简短的介绍，体验感好很多。

所以制作这个知识库机器人的目的是：基于www.17AI.site网站内的信息，为用户提供更高效的检索服务，助其找到高质量内容。    

![](https://mmbiz.qpic.cn/mmbiz_png/2j9zCVVReY3nQxZ2ZufjDZ5LY7W5PjNLIZtn0UH7Q20zuWibeIx875FdBRf0gSEaVibltPR3kONxgnhqgibnyI9CQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2j9zCVVReY3nQxZ2ZufjDZ5LY7W5PjNLP1zSwrBhjJrxgWUXWg0mrDWtLknjHoDa17yXoCpJQNn04nkSVqzFfQ/640?wx_fmt=png)

**（2）先搞清楚扣子（COZE）机器人运行的最大问题**

搭建这个知识库机器人的目的是为了高质量的搜索站内信息。但是实话实说扣子（COZE）里面现在的**两个AI大模型（云雀、kimi）非常喜欢“夹带私货”，无论我怎么通过提示词强调也没用，总是将无关信息呈现出来。** 

**相较而言GPT-4就非常的“听话”，绝对不会越俎代庖，这就是大模型之间的差距了。** 

后来经过我非常多次的调试、试验，在“人设与回复逻辑”里面用云雀大模型并配上以下提示词（这里不要用kimi，非常非常“不听话”，工作流里面再用它），会相对的减少这种情况的出现（看看提示词里面有多少！就可以想象我经历了什么）    

![](https://mmbiz.qpic.cn/mmbiz_png/2j9zCVVReY3nQxZ2ZufjDZ5LY7W5PjNLEqZU8YYu6fFszB6fAL7q8pka7t6dkx83KocDxvItIrM3pThn8JWmhA/640?wx_fmt=png)

这里是你和Bot直接对话的地方，所以哪怕你后面什么都没做，Bot也会根据你的提示词行动。

**（3）搭建AI机器人的工作流程**

**站内信息整合→创建知识库→创建工作流→编写Bot提示词→调试、优化→发布**

**（4）站内信息整合**

我将网站内的信息整合成了表格，表格分成了两个类型，一个是网站类，一个是文章类。

网站类保留了4个选项，网站名称、网站简介、网站标签、网址

文章类保留了6个选项，日期、星级、一级分类、二级分类、文章标题、网址

这样是为了后面可以**多维度的搜索相关信息，这样能更加精准的搜到想要找到的信息。** 

比如我想搜索：近7天内，星级4星以上的，关于AI开发的文章。就可以精准的找到。

所以高质量的信息源也是非常关键的。    

![](https://mmbiz.qpic.cn/mmbiz_png/2j9zCVVReY3nQxZ2ZufjDZ5LY7W5PjNLHfTTgSY1mlTqVqFuLRl65KTnqibRloJqayia3FFw4tlb6Sa1ia4DfO5qg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2j9zCVVReY3nQxZ2ZufjDZ5LY7W5PjNLcn1ib2DicBQwtL5zCGmeUuvzQsBdSN2K57QZ5opQaAFIdMdPB3wc6KhA/640?wx_fmt=png)

**（5）创建知识库**

点击“个人空间”-“知识库”-“创建知识库”    

![](https://mmbiz.qpic.cn/mmbiz_png/2j9zCVVReY3nQxZ2ZufjDZ5LY7W5PjNLRMHEGQUMSbd9ChAThjTG7yDpyG5TU3YH8DibNCRbQ4Jm1nmf8zDRSIg/640?wx_fmt=png)

起个名字，然后点击“新增单元”

![](https://mmbiz.qpic.cn/mmbiz_png/2j9zCVVReY3nQxZ2ZufjDZ5LY7W5PjNLOG1mlCtpw8xwo0RbQduDOcdPiaDXwGoSccib1cb65icNvRVdyNgecUJjA/640?wx_fmt=png)

点击“表格格式”-“本地文档”

注意：这里还可以选择其他文档形式比如word、pdf等，还可以在线采集等方式，**但是这些方式结构不清晰，知识库在导入的时候会自动分割大小（这涉及到知识库的RAG相关知识，这里不赘述），导致检索质量不稳定。所以我比较倾向于用结构清晰的excel表格。** 

![](https://mmbiz.qpic.cn/mmbiz_png/2j9zCVVReY3nQxZ2ZufjDZ5LY7W5PjNLqSUqrORZlBhdwYQEpVgHmdY6WfxkOIVeO5jS1DIoybgdCtBAkR9OGA/640?wx_fmt=png)

将表格拖入上传    

![](https://mmbiz.qpic.cn/mmbiz_png/2j9zCVVReY3nQxZ2ZufjDZ5LY7W5PjNLu0HagvO1YRNYP5DHl9vFiaoABCULkFw5ZTKRue3J9gASGWsP38oAREQ/640?wx_fmt=png)
![](https://mmbiz.qpic.cn/mmbiz_png/2j9zCVVReY3nQxZ2ZufjDZ5LY7W5PjNL8mjZ1FNJkSH7siaQLibSaVzkKn7ktmoqnGEGaD77iagU5dmKRmfwcIGUA/640?wx_fmt=png)

选择索引项，就是按哪一项进行搜索，比如这里选“一级分类”，我就可以搜索出比如“AI资讯”、“AI实践”等信息出来。

![](https://mmbiz.qpic.cn/mmbiz_png/2j9zCVVReY3nQxZ2ZufjDZ5LY7W5PjNLha1OgeKRgKW6wNa5gnmNHRZickwGicZ2KbJKSAeqicOXJorgb4MibbQMTw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2j9zCVVReY3nQxZ2ZufjDZ5LY7W5PjNLJNyZJcjIkcmhEbuFjI3NmORKHISGGVxK6DjicQT3qGqLVV4R7EJSCvA/640?wx_fmt=png)
    

上传完毕，之后再想增加内容的时候，就点击添加内容即可。

![](https://mmbiz.qpic.cn/mmbiz_png/2j9zCVVReY3nQxZ2ZufjDZ5LY7W5PjNLUXNddENvAkCiaB1DqCtmGjIDt812j8XnQWIZp2KSMlKjaic4GIx8HKww/640?wx_fmt=png)

**这里还有问题就是如果一个表格，我除了按“一级分类”搜索之外，我还希望按“二级分类”和“文章标题”来搜索怎么办。很简单，那就多建立几个表格就行了。** 

到这里，知识库创建完毕

![](https://mmbiz.qpic.cn/mmbiz_png/2j9zCVVReY3nQxZ2ZufjDZ5LY7W5PjNLUAEfIFOBwX95YMDnia1ZeSWibxXv8icsR1sHwBeFBNdM5GJAvVV2t5cmg/640?wx_fmt=png)

**（6）创建工作流**

点击“个人空间”-“工作流”-“创建工作流”

![](https://mmbiz.qpic.cn/mmbiz_png/2j9zCVVReY3nQxZ2ZufjDZ5LY7W5PjNLgwtSPibj95krY6PxNmUJeaF2msv519El9Ye36rpNSXoicicgAQInjKsuQ/640?wx_fmt=png)

新建好的页面长这样，一个开始，一个结束，一个输入，一个输出。**这也表明了工作流的作用，就是接收输入，比如用户打字提问，最后输出贴合这个问题的回答。** 

![](https://mmbiz.qpic.cn/mmbiz_png/2j9zCVVReY3nQxZ2ZufjDZ5LY7W5PjNLJlRgXOhDxdZ0HMFIicCFGx8BzXWfSbf9jUM555JPh68l1LPWu5yR5Sg/640?wx_fmt=png)

a.开始节点

输入变量名称”question”，这个变量将存储用户的输入信息。

![](https://mmbiz.qpic.cn/mmbiz_png/2j9zCVVReY3nQxZ2ZufjDZ5LY7W5PjNLtN2V8zoXktjowClRYR2k6Q9CgNkxwLL8jATZaBfkiakXGkicYiaImTHoA/640?wx_fmt=png)

b.知识库节点

点击左边“知识库”-“+”，将刚才开始节点与知识库节点连接起来。

在输入项，选择刚才开始节点的变量“question”。

点击知识库右边的“+”，选择刚才建立好的知识库“17AIsite”。

搜索策略根据情况选择，我选的是“混合”，最大召回量就是从知识库中输出的最大段落数，数量越大，速度越慢。

最小匹配度，就是搜出来的结果，数值越大，筛选的标准越严格，输出的数据越少，数值越小，筛选的标准越松，输出的数据越多。比如搜出来10个结果，这里的数值如果是0.8，那么输出的结果可能就只有1、2个，如果数值是0.2，那么输出的结果可能就是8、9个。在调试的过程中，可以自行调整看一下，找到最合适的数值。    

输出部分不用管。

![](https://mmbiz.qpic.cn/mmbiz_png/2j9zCVVReY3nQxZ2ZufjDZ5LY7W5PjNLeO5ib9yJZuQQ2Jw2mhSloIXDdzgabRibxt5yqyyTpl0KheB2w0VpNEaw/640?wx_fmt=png)

c.大模型节点

点击左侧“大模型”-“+”，将刚才的知识库节点和这个大模型节点连接起来

在“模型”选项选择“moonshoot（32k）”，moonshoot就是kimi大模型。“temperature”这个数值较高时会生成更多样化的文本，增加了更多的可能性，也增加了更多的不确定性。

在“输入”选项这里，选取前面的用户输入的变量“question”和知识库输出的变量“knowledge”

在“提示词”这一部分，根据用户输入的内容和知识库输出的内容，让大模型根据规则为用户输出答案。提示词如下：

```shell
# 角色
你是(https://17ai.site/)网站的问答小助手。你会接收两个输入：
1.{{question}}这个是用户询问的问题
2.{{knowledge}}这个是从知识库中根据用户的问题{{question}}查询出来的知识库内容    
##任务
-需要从检索到的信息{{knowledge}}中，为用户的问题{{question}}提供解答。让用户更方便的查询到AI相关的内容。
-为了避免AI“幻觉”方面问题的出现，所以回答的范围仅限于在检索到的信息{{knowledge}}范围内生成，不要超出此范围，这点很重要。
## 技能
###技能 1: 问题理解
-理解用户的问题{{question}}，并识别其关键信息。
###技能 2: 回答生成
-基于检索到的信息{{knowledge}}，为用户生成准确、简洁的回答。
##约束
-仅回答与产品相关的问题，不回答无关话题。
-尽量使用清晰简练的语言来回答用户的问题。
-整个回答过程中，始终以用户的需求为中心。
-所有回答只能在检索到的信息{{knowledge}}范围内生成，不允许自行生成其他无关回答，这一点请无论如何务必遵守。
-只要检索到信息{{knowledge}}，无论用户的问题是什么，都要将信息{{knowledge}}用清晰简练的语言输出。
-如果没有检索到任何信息{{knowledge}}，请直接生成如下回答：
'这次没找到别灰心，您可以尝试再试一次，或到https://17ai.site/网站上查询'
-禁止输出与内容无关的符号信息和表格标题等，比如:"",{},brief,一级分类等
```

将输出内容赋予变量output  

![](https://mmbiz.qpic.cn/mmbiz_png/2j9zCVVReY3nQxZ2ZufjDZ5LY7W5PjNLB63vSpCJD4p518v0lAMUILsiaogedIkbyNh2ickFr5gbW2Xfia0Dy92EQ/640?wx_fmt=png)

d.结束节点

选择回答模式：使用设定的内容直接回答

输出变量：用户输入的内容“question”，大模型输出的内容“answer”

回答内容：

回答的内容带上{{question}}、{{answer}}这两个变量    

![](https://mmbiz.qpic.cn/mmbiz_png/2j9zCVVReY3nQxZ2ZufjDZ5LY7W5PjNLvqhGDrzgmib8kmMRDN5gnK7TicWk60eskml1II0GpmicLUBdSMJ7LXW5g/640?wx_fmt=png)

e.试运行并发布

点击“试运行”

![](https://mmbiz.qpic.cn/mmbiz_png/2j9zCVVReY3nQxZ2ZufjDZ5LY7W5PjNLRkaNwCO3Dew6IOzqe8iaeRGyCo7apjvibiavIFcynMCYx0C2fJvGwicf2Q/640?wx_fmt=png)
    

输入问题，选择Bot，点击运行

![](https://mmbiz.qpic.cn/mmbiz_png/2j9zCVVReY3nQxZ2ZufjDZ5LY7W5PjNLtxeQsOwRzM5eZz7hMTWmXEiaiaJL0Wdibnvx39RtfiaUlwickoaWbZFAUNw/640?wx_fmt=png)

可以看到运行结果没问题    

![](https://mmbiz.qpic.cn/mmbiz_png/2j9zCVVReY3nQxZ2ZufjDZ5LY7W5PjNLWybibZEsRLVFLp0iaV4q1rR6sPQSoIU9jibqKZamG9tJcGicwiaXGCsL2aQ/640?wx_fmt=png)

还可以看一下其他节点的运行结果。

**可以看到从知识库的输出到大模型的输出，很明显无论是文字表述还是排版都得到了很大的提升。** 

![](https://mmbiz.qpic.cn/mmbiz_png/2j9zCVVReY3nQxZ2ZufjDZ5LY7W5PjNLjlnbPgp9DyvRGPzjoFrCHt47DwAibwEVMLpUqRU3Z4ZOKicydMwIHxpA/640?wx_fmt=png)

确定没问题了，就点击发布

至此，工作流内容完成。    

![](https://mmbiz.qpic.cn/mmbiz_png/2j9zCVVReY3nQxZ2ZufjDZ5LY7W5PjNLtjMWx4YsfUMFVVAf5HBR9BKNthm8KADscdbALic7JRQYxLiaYrd2wyFQ/640?wx_fmt=png)

**（7）编写Bot提示词→调试、优化→发布**

返回Bots，点击“17AI小助手”，完成其他环节，并自行调试、优化

这些比较简单，就略过了。

全部完成之后，点击“发布”，选择发布渠道

我选择了如下4个渠道，Bot Store、豆包、飞书、订阅号

至此，知识库机器人就创建完成了。

![](https://mmbiz.qpic.cn/mmbiz_png/2j9zCVVReY3nQxZ2ZufjDZ5LY7W5PjNLrAWA1M8g0ZH3gHZA8uKV4SIMLbdJ4MaJG6tzLMuJz9jhDQibBdW5uag/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2j9zCVVReY3nQxZ2ZufjDZ5LY7W5PjNLL3U4pJLgEcuH1oYaicRqtOGv9G2ic5MVKwtsib2E2IXkP0iaBoGJ2vwwvA/640?wx_fmt=png)

**（8）各渠道体验**

各渠道除了订阅号的表现不太稳定（时好时坏）之外，其他的都还可以。

**a、订阅号体验入口：** **我的公众号“王笑东”，对话框**

![](https://mmbiz.qpic.cn/mmbiz_png/2j9zCVVReY3nQxZ2ZufjDZ5LY7W5PjNLx9T76fPiaXbOzVUQhgAdtjzKuCc04rn9yY2D17BoFgx2iadQoZusbTPg/640?wx_fmt=png)

**b、豆包体验入口：**   

**https://www.doubao.com/chat/19574572603906**    

![](https://mmbiz.qpic.cn/mmbiz_png/2j9zCVVReY3nQxZ2ZufjDZ5LY7W5PjNLpI5XVxswynfPsd7Wib7KRuaEibYlILNK507T9M5XZnmJxTSXUaRPxO2g/640?wx_fmt=png)

**c、飞书体验入口：**   

**https://applink.feishu.cn/T8LZq6JEloki**

![](https://mmbiz.qpic.cn/mmbiz_png/2j9zCVVReY3nQxZ2ZufjDZ5LY7W5PjNLbh5Wpgw0aBn5nCL5nE7zzhvnnta1QjmOJ2wTE5yIibyKxAOaHYneiaEA/640?wx_fmt=png)

三、AI Agent的未来

其实知识库机器人只是AI Agent一个很小的应用场景，我相信在不久的将来，AI Agent会在方方面面出现很多不同于以往的应用。

我就由我们的知识库机器人这个案例推导一下，大家可以想象一下未来会不会有这样的应用。  

**一家企业将他们所有的资料都打包做成知识库，让AI大模型通过不断训练，然后开放给内部员工使用。** 

**基层员工可以通过这个机器人进行培训、答疑，帮助处理各类问题（比如技术上的，服务上的等等）**

**营销文案、设计等工作，只要和机器人简单的沟通对话，就能很快的得到相应的文案和设计图片。** 

**人事行政工作，让机器人写一些办公文档完全不在话下，通过与各级员工的对话+员工的各项数据，对每名员工进行人事分析评测也将变得更有效率。** 

**复杂的企业各种系统问题，由于有大量的系统文本输入，再加上所有员工相关问题的搜集整理，AI大模型将会不断地得到反馈并优化解决方案。**   

![](https://mmbiz.qpic.cn/mmbiz_png/2j9zCVVReY2tmftxAjnoSUvj2ibY8C8Ph7gFWwTKFb6rQIwDp8YI42IVOYWwQ6TC7zGLduPhQJH07ouOIldhxhg/640?wx_fmt=png&from=appmsg)

多Agents模式用于更复杂场景，长期记忆让Bot不断优化总结

以上并不是想象，现在AI大模型基本上都可以实现，只是这样的应用还未出现，但我相信不会太久。  

这样的应用对企业来说就是请了一名“超级数字员工”，企业成本（各种隐性成本）降低了，效率（管理效率）大大提升了，客户体验提高了，企业资产（数字资产）提升了。

对于企业员工来说，会用AI就成了必备技能，让AI成为自己的助理，指挥AI去做更繁琐、更基层的事，自己则去做更有创意更有价值的事，从而为企业创造更大的价值。  

> 最后总结，我们详细探讨了如何利用扣子（COZE）平台构建一个企业级的知识库机器人，从理论到实践逐步展开。首先阐述了AI大模型与AI Agent的基本概念，并指出了AI Agent的独特能力和应用前景。
> 
> 通过教程，详细说明了创建一个高效知识库机器人的步骤，包括工作流的设定、知识库的建立、以及功能的优化。此过程不仅展示了技术的具体应用，也反映了AI技术在信息整合和管理数据方面的巨大潜力。通过AI Agent能够更加高效地处理和检索信息，极大地提高工作效率和决策质量。
> 
> 文章通过知识库机器人的实例，展望了AI Agent在未来工作和生活中的潜在影响，强调了AI技术在提高工作效率和企业数字化转型中的关键作用。
> 
> 以上总结在GPT-4生成的基础上，我进行了调整

后续我还会不断地将更多AI应用实践的过程记录下来。希望对你有所帮助。  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2j9zCVVReY3nQxZ2ZufjDZ5LY7W5PjNL6yEok6GPT3hmSTeuXQwqGO5R4gicEGIlyQe639oo207d7EudhGxcMEQ/640?wx_fmt=jpeg&from=appmsg)

题图标题：《五一度假》

AI算法提供：Midjourney V6  

Prompt：Japanese comics/manga,Front view,Warm light,A train is running on the track， surrounded by flowers and green grass. In the grassland， the visual effect is dreamlike with bright colors and bold shapes. Capture this moment., --q 2 --v 6.0 --ar 16:9

你也可以阅读原文，了解更多AI信息及资讯。