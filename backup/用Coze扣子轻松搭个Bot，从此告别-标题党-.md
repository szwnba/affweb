1\. 引言
------

流量是一切的根本，**「流量 = 时间 = 金钱」**，以致于周遭的一切都在想方设法争夺我们宝贵的 **「时间 (注意力)」** 。

### 1.1. 信息噪音

现在的文章标题越来越离谱：**「炸裂！离谱！出乎意料！惊爆大瓜！爆狗血！疯传！惊骇！热搜第一！」** 等等，就必须得有 **「感叹号」**❗❗❗ 起名技术比之当年的UC震惊部，可谓是有过之而无不及，再配上一个美女擦边图，谁能克制住不点进去？🤡点进去，浪费宝贵的几分钟滑倒文尾，收获：**「就这」**？或者前面说得那么好听，最后 **「TM卖课/带货」**？

😶 当然，也不是说所有文章质量都这样垃，只是同行都标题党，逼得那些高质量的文章也只能跟着搞，最后苦了读者，看文章就跟开盲盒一样。长期的训练使得部分读者get√了一个新技能😂 → **「看标题识水文」**，不用点进去就知道是要这厮要 **「割我」**，2333。

### 1.2. 知识密度

然后是 **「知识密度的问题」**，有些文章/视频，罗里吧嗦讲一大堆，想表达的观点，其实用 **「一两句话就能概括完」**，根本没有点开的必要 🐶。最常见的就是：新瓶装旧酒，把一个大道理包装下，配点新鲜名词，看着高大上，等你点开看完，稍微思考下：啊？这不就是XXX吗？谁不知道啊，浪费时间...🙃而且现在有AI加持，批量生产低质量内容变得更加容易了🤮

### 1.3. 想要一个信息"筛子"

😑 综上，我们每天都需要 **「花费大量的时间来对信息进行甄别和加工」**，这种获取优质信息的效率非常低下。

😶 很久之前我就有整一个 **「信息流筛选工具」** 的想法，但局限于自己的抠脚编程开发技术，一直搁置。

直到 **「OpenAI」** **「GPTs」** 的发布，号称 "**「无需撰写代码，使用自然语言就能开发基于ChatGPT的AI应用产品」**"，让我看到了实施想法的曙光。🤡 摩拳擦掌准备去尝试，第一步就把我拦住了，得先有 **「GPT-4账户 (国外信用卡+20刀/月)」** ，后面看了网上的教程，配置起来并没想象中简单，想法再次搁置了...

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt46zfXmpe2iaoDHtSUicjhAqq6BibN9gHdqRaNsQ7NIjaMqFzJPkc2v0GZQ/640?wx_fmt=png&from=appmsg)

😀 临近春节，大伙都无心工作，沉迷摸🐟，刷掘金时，无意中看到了《我用Coze来掘金 | AI Agent 创意征文大赛来啦！》就：字节的「**「Coze 扣子」**」AI Bot开发平台在2月1日宣布上线，号称：**「无需编程基础，可快速搭建基于AI模型的各类问答Bot」**，**「并将其发布到各类社交平台和通讯软件上」**！

😳 这... **「国产GPTs」**？瞄了眼，目前免费，注册个账号就可以直接开耍了，这妥妥得试一哈~

2\. 简单三步搭Bot
------------

打开 Coze扣子官网，支持 **「手机号」** 或者 **「抖音账号」** 登录。

### 2.1. 创建Bot

登录成功后，点击左侧 **「创建Bot」**，在弹出的窗口中依次完善 **「工作空间(默认就行)」** 、**「Bot名称」**、**「Bot功能介绍」** 和 **「Bot图标」**：

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt4QFvVDVNlud9RTmIMNIrdonN4XkfxuVuI016sTOaedaSiaE25R2gDtEA/640?wx_fmt=png&from=appmsg)

编辑完，点击确认，生成Bot，进入到 **「编排」** 页面。

### 2.2. 编排

编排页从左到有分为三个区域：**「人设与回复逻辑」**、**「Bot配置选项」**、**「预览与调试」**，一个个看~

#### 2.2.1. 人设与回复逻辑

🤔em...这一块不就是 **「prompts(提示词)」** ，随手写上一段：

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt4fFLXzE09jXJGdpQdY9VkIpkO895N5DyuKZCiaPibhLRMXIzg2l9YtUQQ/640?wx_fmt=png&from=appmsg)

略显抠脚？问题不大，AI帮你来优化，点击右上角的 **「优化」**：

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt4tzaPibVUhoYpE0wJ9Aiam1a5av7u6IyasIBRpAF188K8iaowLunqWzjkg/640?wx_fmt=png&from=appmsg)

😆 啧啧，头头是道，点击 **「使用」**，直接应用AI生成的关键词~

#### 2.2.2. Bot配置选项

💁‍♂️ 提供了下述可选配置：

*   **「云雀语言模型」**
    

*   携带上下文轮数(0-30)，默认3
    

*   **「插件」**
    

*   插件能够让 Bot 调用外部 API，例如搜索信息、浏览网页、生成图片等，扩展 Bot 的能力和使用场景。
    

*   **「工作流」**
    

*   工作流支持通过可视化的方式，对插件、大语言模型、代码块等功能进行组合，从而实现复杂、稳定的业务流程编排，例如旅行规划、报告分析等。
    

*   **「知识库」**
    

*   将文件或网站 URL 上传为数据集后，用户发送消息时，Bot 能够引用数据集中的内容回答用户问题。
    

*   **「数据库」**
    

*   以表格结构组织数据，可实现类似书签和图书管理等功能。
    

*   **「开场白」**
    

*   开场白文案、开场白预设问题
    

*   **「用户问题建议」**
    

*   在每次Bot回复后，根据编写的Prompt，提供最多3跳用户提问建议
    

*   **「音色」**
    

*   选择适合 Bot 的音色。如果不指定音色，豆包 App 当中的 Bot 会使用相应语言的默认音色。
    

😆 这里只是试试水，怎么简单怎么来，只配置下 **「插件」** 和 **「开场白」**。插件可以手动搜索添加，也可以让AI通过提示词自动添加，😀妥妥选AI自动添加啊：

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt4icWY37LEIymUyma7xD0hWTKWag1PbtYsTpxTSd0J2xlLSBYewvMl0Rg/640?wx_fmt=png&from=appmsg)

点完看到AI给我们加了一个 **「LinkReaderPlugin」** 的插件，鼠标悬停在感叹号上可以看到插件的简介：

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt4sRmWqM0QE8fia8n4qQV9kf4J8rh0GdVMm4kMiafvBIz7dwJAmzlJTGtw/640?wx_fmt=png&from=appmsg)

就一个提取标题和内容的插件，至于开场白就随便写下吧：

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt4eGycxQjxsmiax8v9q5CulftOswicL5VPR451pKZ0aXAMPLMrOF6GMMmg/640?wx_fmt=png&from=appmsg)

#### 2.2.3. 预览与调试

配置完，直接在最右边就能进行预览调试啦，**「丢链接测试环节」**，先丢征文活动的链接：

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt4FibMBNe4GXSzC23V2nwumhLqKmYcXG35biaA0R1JWZ6cvBALXFOicTgEg/640?wx_fmt=png&from=appmsg)

😳 可以，概括还挺准确，接着丢一篇公号的卖课文试试：

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt4SkP4nsZFWZgO4N77Q21jLL1At4EalYfUYDU8BAEna9nYEibictbLQJQg/640?wx_fmt=png&from=appmsg)

😲 WOW，Amazing！是想要的效果！接着再试试视频，先来个抖音的吧：

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt4Mt3B8szvls7c6fIHer6TlBStDaC8P2lUy7ZmTCRyUScAXZn1Hv2LAg/640?wx_fmt=png&from=appmsg)

😍 爱了爱了，再试下B站的视频：

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt4yJGszHPJYDELNYkBlE7d46x36punPicFmCb2RWJJxfia5q66KnWibpuQA/640?wx_fmt=png&from=appmsg)

💁‍♂️ 最后再试试上传文本文件，🐶🍓拿塞，是我低估了 **「扣子」**，竟然支持这么多文件类型：

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt4icIH1dZgDbXdpX3hw54NIPukgtc5KzJ1sUKBEnibteW0LfohFIWDKEiaQ/640?wx_fmt=png&from=appmsg)

em...不过人家想传的是txt啦😂，选文件时切换为全部文件，选中了txt文件没反应。接着试了下把文本内容贴word里再传，一直失败：

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt4leVBlg4HZ4OVmBkoOfb7XtdUrPxaDrCvT1jEQHEr3lo57HoSX62Dgw/640?wx_fmt=png&from=appmsg)

😂 一时半会也不知什么原因，明明是纯文本，内容从30页减少到1页都不行，暂且先这样吧，能在线读文章和视频就很赞了，接着试下发布Bot～

### 2.3. 发布

点击发布按钮后，可以输入 **「发布记录」** 及 **「选择发布的平台」**，都是 **「必填」**，后面两个微信的平台笔者都没有 (🙃注意是 **「服务号」**，不是 **「订阅号」**)，所以只能发布到 **「飞书」** 啦~

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt4kFTM9pA4OxahyykjmSynXTloE1icejrpBN8M17928icqMhdolNaia6ehQ/640?wx_fmt=png&from=appmsg)

点击配置，跳转页面后，提示无权限，点击获取当前应用：

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt41B00licibkZXUxU9FTjgATiaf8ctYPL0oAFZYTdniaJkDpenzUSVqjvCeg/640?wx_fmt=png&from=appmsg)

跳转后，找到Coze，点击Get，勾选同意协议，然后点击 **「Authorize and Install：」**

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt4TK0yZibO7j2A6gyWee4KrR8ZeVUfiaAgmndtMnB5LRn7fI8UeiazqPfPQ/640?wx_fmt=png&from=appmsg)
 ![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt4IOY40KoBwxpn29sz0UlR9LqmJsSuMjibZHeYekPDWqL2A2sUOib8Bduw/640?wx_fmt=png&from=appmsg)

然后回到前面的页面，会触发授权：

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt4XIpzjfydYqeUltareN1KUfqQ8iabvEEycia9FSHyohqnzhvVou0YVmug/640?wx_fmt=png&from=appmsg)

授权完，会自动回到发布的那个页面，勾选 **「飞书」** 选项，然后点击 **「发布」**，然后等 **「飞书审核」**~

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt48UgWZlicLH9K6mOKDB2JictjxFjZ7F71Z6F1InILtossnnQsmnxiavVOw/640?wx_fmt=png&from=appmsg)

😆 略快，不用1分钟就自动审批通过了~

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt4eCgHfo9TPSL3z0mpnN7T1LkmzWUo5sibEJdyW682ORJgDMdmFGjPb7g/640?wx_fmt=png&from=appmsg)

接着打开 **「飞书客户端」**，搜索 **「标题党」**，点击 **「应用」**，就可以看到我们发布的Bot啦：

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt43qQvBH64WjkWpjEwek0yQibGl5kXjEw4ia5iaWmwM74aBXKP6D9988sAw/640?wx_fmt=png&from=appmsg)

以后把文章链接发给它就完事啦🥳~

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt48dmM2rhPrNlsnDzib7o2jXMmv7C0hiahMfomXY2B5u8pJQApNPdk62EQ/640?wx_fmt=png&from=appmsg)

3\. 进阶玩法
--------

💁‍♂️ 简单三步就把Bot搭起来了，但实际体验下来，不尽人意，每次输出的结果太不稳定了。接着参透下 官方文档，看有什么办法让Bot的输出更稳定，更符合我们的预期~

### 3.1. 提示优化

官方文档给出了一些提示优化的建议：

*   使用 **「结构化的格式(Markdown语法)」** 来编写提示，便于迭代，可读性和对Bot的约束更强；
    
*   **「设定人物」**：Bot扮演的角色或职责，回复风格。
    
*   **「描述功能和工作流程」**：Bot会根据提示内容自动选择工具，但仍建议通过自然语言强调在何种场景下、调用哪个工具。以此提升对Bot的约束力，选择更符合预期的工具，以保证回复的准确性。
    
*   **「提供回复格式」**：让Bot模范我们提供的回复格式进行回复。
    
*   **「指示Bot在指定范围内回答」**：就限制Bot什么应该回答，什么不应该回答。
    

看完建议，稍微调整下我们的角色定义：

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt4PacuMziaadov2Mt3xjmtIvIO9a5U7WT56BxttOIFia8cgWHyiagp9hNGw/640?wx_fmt=png&from=appmsg)

接着丢给AI润色下，对生成的技能和约束提示进行二次编辑，反复修改和调试，最后的prompt如下：

`# 角色  
你是一个内容分析专家，擅长对用户输入的 URL 或上传的文件进行分析，包括内容提取、内容分析，还能输出通熟易懂的内容概述和归纳后的详细大纲。

## 技能  
### 技能 1: 内容提取  
1. 对用户输入的 URL 或上传的文件进行分析，提取其中的关键信息和主要内容。  
2. 对提取的内容进行分类和整理，以便更好地理解和分析。

### 技能 2: 内容分析  
1. 使用自然语言处理技术对提取的内容进行分析，包括但不限于词汇、语法、语义、情感、关键词等方面。  
2. 根据分析结果，生成内容概述和详细大纲，以便用户更好地理解和使用。

### 技能 3: 输出结果  
1. 对提取和分析的内容进行总结归纳，生成一个简短的内容概述，让用户快速了解文件或 URL 的主要内容。  
2. 根据提取和分析的内容生成一个详细的大纲，包括主要内容、次要内容、细节等，让用户更深入地了解文件或 URL 的内容。  
3. 请参考如下格式回复：  
**内容概述**：xxx  
**详细大纲**：  
1.xxx  
 - xxx

## 限制  
- 不仅要处理文本相关的内容，图片、音频、视频等多媒体内容也要进行处理。  
- 输出的内容必须符合事实，不能包含虚假信息。  
- 大纲要尽可能详细，尽可能不要错过一点内容。  
- 输出结果必须包含两个部分：内容概述 和 详细大纲。  
- 内容概述以段落的形式输出，详细大纲以无序列表的形式输出。

`

我自以为提示词已经写得滴水不漏了，结果🤡：

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt4ne5nk5x3icWBE8zuRicoiaAh9ibffep1QJ9fKtAtAq7zMOHCRqgD5qVCKg/640?wx_fmt=png&from=appmsg)

😳 说好的约束输出呢？结果我又回了句 **「完整大纲」**：

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt4ziaTLKCF6vIdvvc1mHhOV9Kk6OzK6fV4XicichyK5tBBLxQYrw0xCNH9A/640?wx_fmt=png&from=appmsg)

😲 这直接把我整不会了？难道是用的插件出问题了？点开看看：

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt4gmH7P4ffrSXJFCicOKrQ02uKTUkd6YrYcYUpnq57YJPicT3YemVdic1Bg/640?wx_fmt=png&from=appmsg)

这prompt也没错啊，再看看文档中有没有可以帮助我们保证输出结果准确性的东西...

### 3.2. 制定工作流

工作流介绍处写到：

当目标任务场景包含较多的步骤，且对输出结果的准确性、格式有严格要求时，适合配置工作流来实现。

这不就是我需要的吗🤭？工作流由多个 **「节点构成(基本单元)」** 组成，目前支持三种类型的节点：

*   **「基础结点」**
    

*   **「大模型」**：使用输入参数和提示词生成处理结果。
    
*   **「代码」**：通过IDE编写代码输入参数，并返回输出值。
    
*   **「知识库」**：根据输入参数从关联知识库中召回数据，并返回。
    
*   **「选择器」**：if-else逻辑结点，分支流程，满足条件运行如果分支，不满足运行否则分支。
    

*   **「插件」**
    
*   **「工作流」**
    

工作流默认包含两个结点：

*   **「Start节点」**：工作流的起始节点，可以包含用户的输入信息。
    
*   **「End节点」**：工作流的末尾节点，用于返回工作流的运行结果。
    

不同结点可能需要不同的 **「输入参数」**，支持 **「引用(前面结点的参数值)」** 和 **「输入(自定义参数值)」** 两种设置方式。节点感觉就是 **「黑盒」**，用户只管 **「输入和输出」**，而无需关心结点的具体实现细节，这就是低代码平台的玩法吗😄？

#### 3.2.1. 创建工作流

直接创建一个工作流，目的就是让Bot稳定地输出内容概述和完整大纲：

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt4lAg9cicpgBs6zApZrUUnODeRIDUWibLoU2icHSf0fZwU4I9F3DIkZFADg/640?wx_fmt=png&from=appmsg)

创建后，默认生成了开始和结束两个结点：

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt49AWSp9YfRk9Thlqbu12vXODaeLuMpYUvbeuJ1HZqQKM0qbr5ToicCqQ/640?wx_fmt=png&from=appmsg)

开始这里设置一个参数url，就用户提交的url或文件url，变量类型选String。然后点击左侧可以添加需要的组件：

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt4Sks8nwua9icD70A6BHzyq6exbbSvMznMzMEqBP2pBMFXY1qiaUk44qlw/640?wx_fmt=png&from=appmsg)

#### 3.2.2. 添加插件节点

这里点击插件，搜索 **「LinkReaderPlugin」** 并添加，然后可以根据插件提供的参数进行配置，然后把节点都串起来，点击右上角的 **「试运行」**，

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt4j1cyLibj097Lma1XickH6n3L8iaBia6WN5YRdnB5U1j79vRgrddPKO0alQ/640?wx_fmt=png&from=appmsg)

节点顶部可以看运行状态，待运行完，点击 **「展开运行结果」**，可以查看结点的输入和输出结果，然后对工作进行一些调整。另外，点击结点右上角的...可以快速 **「创建副本(复制节点)」** 或者对节点进行重命名和删除。用法还挺简单，难点是整条工作流的 **「处理思路」**，你得自己想好🤫。笔者给出自己的临时思路：

`开始 => LinkReaderPlugin(prompt:内容概述) => LLM(内容概述) => 代码(输出内容处理) => 结束  
    => LinkReaderPlugin(prompt:详细大纲) => LLM(详细大纲)  
`

#### 3.2.3. 添加大模型结点

复制下LinkReaderPlugin创建一个节点，设置prompt为详细大纲，然后就是添加一个 **「大模型的结点」**：

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt4tLDJS2ImLKwYgZyJHIwsCEM6V1jI8zILjWOoj1ZjjhR1TRUXBJhiaRw/640?wx_fmt=png&from=appmsg)

这部分没啥，就是写提示词而已，可以通过 **「{{变量名}}」** 的方式来引用输入变量。同样拷贝一个副本，改下提示词：据{{input}}生成一个详细的大纲，包括主要内容、次要内容、细节等。

#### 3.2.4. 添加代码节点

😁 接着创建一个 **「代码结点」**，对两个模型的输出结果进行合并处理，确保最终输出结果的统一性。

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt42s6QAMCSbRJAS4BZZrWcsBra3Py2pO8P724t58TwqucSLomMWZicFIA/640?wx_fmt=png&from=appmsg)

点击 **「在IDE中编辑」**，进入代码编辑页，目前只支持两种语言 **「JavaScript」** 或 **「Python」**，点击左上角可以进行切换：

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt4KB2YvZ4esgamsub8JOibNTqYtvawOPMgxtViaenDNYeSiakHzEr5sySRw/640?wx_fmt=png&from=appmsg)

😆巧了，笔者🐍玩得还可以，不难看出代码是在一个异步main函数里执行的，入参数Args，返回值是Output：

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt4Fj4ACGT2YNsiaOTibRcdtRziaDSOyXMHSW7Mz90ktUiaGpFkia0e0MYLdxw/640?wx_fmt=png&from=appmsg)

🤫 所以这里的玩法其实很简单：**「从args拿输入参数」**，**「对参数进行加工生成输出结果」**，**「把输出结果塞到ret里」**。然后分享两个代码调试的小贴士：

① **「print() 是看不到的」**，可以把想打印出来的参数塞到ret里，就可以在输出结果那里看到值啦~

② **「测试代码的输入哪里来？」**

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt4RzkOdDNyiahRZQE3ahVicPVptcuTk1UdV0ib5aY31ibZ6halkRnUfwVaXw/640?wx_fmt=png&from=appmsg)

答：工作流试运行的时候，复制下输出参数，然后可以运行啦😄

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt4uLammkso8AgmO4dFQg1wc9tT9iaE5gpO2owoLfLcee7KNmg7fKkHUFw/640?wx_fmt=png&from=appmsg)

这里的话，暂且不做什么处理，直接拼接下模型返回的两个结果：

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt4lyePXNxPzE1hK8MibxeHUuYm3YFjPvcbFxrz7cwxzrpPaFrfkicwUnXA/640?wx_fmt=png&from=appmsg)

然后把整个工作流都串起来，结束节点的 **「选择回答模式」** 要改为 **「使用设定的内容直接回答」**：

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt43Muibd7DqggTgYX1owl3yxHCT7xiacVpkVZg3v9ZfnSPACXTDQ0wJgicg/640?wx_fmt=png&from=appmsg)

接着点击试运行，工作流跑通了，就可以点击右上角 **「发布」** 了，发布成功后，就可以使用我们制定的工作流了~

#### 3.2.5. 使用工作流

回到Bot的 **「编排」** 页，在 **「工作流」** 处，点击+号添加工作流，然后找到上面创建的工作流。

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt4sSWG5qM7fQZOSQq4v5xsLojEHzcXewjtqTXUjl5ibUsDJ1YwcGyvRzQ/640?wx_fmt=png&from=appmsg)

然后改下 **「人设与回复逻辑」**，指定下使用工作流处理url：

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt4QibfR4y4LNgoD1KUcP7wcXfQvQk85gGXF35RN8ibgLT3jUeYlSgjpxRA/640?wx_fmt=png&from=appmsg)

后面的内容都可以干掉，😳 是的，指定了工作流就是可以这么粗暴！接着发个url试试：

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt4icyvfgb0dpeXmwO85emiaMnia6ssQJwujvibicO03oe0FSRkHcvzNKqCZ1w/640?wx_fmt=png&from=appmsg)

丢个B站试试：

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt4hdmO22J7V8p6eWrfDYDIU1qf2xia0iascLfpVl15NDKcApiayTnxngutQ/640?wx_fmt=png&from=appmsg)

🥳 Nice！输出结果勉强达到我们的预期，内容概述和详细大纲都能同时提取出来了。当然，输出格式还要进行微调，工作流也需要再优化下，不过这些都是后话了。😳接着提一嘴 **「记忆库」** 和 **「插件」**，虽然我们暂时没用到，不过感觉还是蛮常用的，只做下简单了解，感兴趣的读者可查询对应文档。

### 3.3. 记忆库

扣子 提供了 **「两种方式 (」** **「知识库」** **「&」** **「数据库」** **「)」** 来存储和记忆外部数据，Bot可以利用这些外部数据来精准回复用户。

#### 3.3.1. 知识库

扣子支持上传多种类型的外部数据 (本地文件、在线网站、API、自定义)，上传后，知识库会 **「自动」** 将文档 **「分割」** 成多个内容片段进行存储，并通过 **「向量搜索」** 来检索最相关的内容，以回答用户的问题。适用场景：

*   **「语料补充」**：创建虚拟形象与用户交流，在知识库中保存该形象相关的语料，Bot模拟语言风格进行回答；
    
*   **「客服场景」**：将用户高频咨询的产品问题添加到数据库，Bot可以通过这些知识精准回答用户问题；
    
*   **「垂直场景」**：如创建一个包含各种车型详细参数的汽车知识库，用户查询某一车型的百公里油耗是多少时，Bot可通过该车型召回对应的记录，然后进一步识别出百公里油耗。
    

#### 3.3.2. 数据库

扣子的数据库功能提供了一种简单、高效的方式来 **「管理和处理结构化数据」**，用户可以 **「通过自然语言与 Bot 进行交互来插入或查询数据库中的数据」**，具体应用可以看下文档中的 **「AI便签Bot」** 的应用示例。

### 3.4. 插件

插件是一个 **「工具集」**，可以包含一个或多个工具 (**「API」**)，扣子目前提供了60种类型的插件，如果没有喜欢的，可以 自定义插件。插件要发布后才能被Bot使用，**「注意插件创建的空间」**！个人空间下创建的插件只能被个人调用，团队空间下创建的插件才能被团队成员调用。

在左侧 **「工作区」**，选择进入 **「指定团队/个人空间」**，进入 **「插件」** 页，点击 **「创建插件」**，然后会弹窗让你 **「完善插件配置」**：

*   **「插件图标」**：单击默认图标后，你可以上传本地图片文件作为新的图标。
    
*   **「插件名称」**：自定义插件名称，用于标识当前插件。建议输入清晰易理解的名称，便于大语言模型搜索与使用插件。
    
*   **「插件描述」**：插件的描述信息，一般用于记录当前插件的用途。
    
*   **「插件 URL」**：插件的访问地址或相关资源的链接。例如：https://www.example.com/api
    
*   **「Header 列表」**：HTTP 请求头参数列表。你需要根据 API 自身的参数配置要求来填写。
    
*   **「授权方式」**：选择插件的鉴权方式，目前支持三种：不需要授权、Service(秘钥或令牌)、Oauth。
    

配置完点击 **「确认」** 页面跳转，点击 **「创建工具」**，填写工具的 **「基本信息」** (这里以WanAndroid API为例)：

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt4OByZ9iaQSnAPsewspmQ04ibAHgh6uO1wHa1UibyOG79IlYhDGFHj48vHg/640?wx_fmt=png&from=appmsg)

接着 **「配置输入参数」**，这里添加一个 **「page」** 参数代表当前的第几页：

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt4df7JpcFxfotRNjmY0OFUMia0WSP3jnEu9Fkmlvbib7gtC30YLMVnAhyA/640?wx_fmt=png&from=appmsg)

再接着 **「配置输出参数」**，可以点击右上角的 **「自动解析」**，填写输入参数调用API：

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt4tRM5nrooKyZtyvcy6NrFQUibOic71iaFses92OoA8rPH2j5DHIAzakTHg/640?wx_fmt=png&from=appmsg)

平台会根据API响应结果自动配置输出参数：

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt4CDacwA8LG7n5ybEHaegicdib1jSMxr6dVfoHZyLodoKicM9LYqv5WnH2Q/640?wx_fmt=png&from=appmsg)

当然，也可以 **「手动设置输出参数」**，最后来到 **「调试与校验」**，填写 **「输入参数」**，点击 **「运行」**：

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt4PIQxUhlEnhedfuhxgd2Slm9RNmyyfWRq9tZGGiaLHiasQSjHea4C36zg/640?wx_fmt=png&from=appmsg)

**「调试通过」**，点击 **「完成」**，会跳转到 **「插件详情页」**，点击右上角 **「发布」**，发布完，回到Bot编排那里，就可以搜到新建的插件啦：

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibuNYFFMaFFrNxpY17K7FSt44UmxubSmUu1Gl9LApg48vG2B7KwVCU3pkqxffUj3x6GFItGcvV6tcw/640?wx_fmt=png&from=appmsg)

4\. 小结
------

😆 花了亿点时间，算是把Coze目前提供的所有Bot玩法都体验了一遍，这种通过低代码堆砌产品的方式 **「有点意思」**啊！当然，一些细节体验的问题有待优化，也希望早日支持 **「通过API的方式调用Bot」**。

🥰**「众人拾柴火焰高」**，一个人偷着乐咋行，建了个团队，大家来Van♂啊，share一波自己的手作插件、工作流：

> ❝
> 
> 邀请你加入我的 Coze 扣子团队，一起搭建 AI Bot：鸡你太美 👉🏻 https://www.coze.cn/invite/EUZ2WtVXJWxXqDcXWWvN
> 
> ❞

BotID:7330534993011261449

扣子商店链接：https://www.coze.cn/store/bot/7341215109408161801