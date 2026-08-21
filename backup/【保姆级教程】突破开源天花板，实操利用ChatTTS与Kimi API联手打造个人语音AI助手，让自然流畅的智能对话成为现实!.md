大家好。之前给大家分享很多关于大模型应用的文章，部分如下:

*   [微信公众号接入kimi大模型:五大能力重磅升级，欢迎来聊天~](http://mp.weixin.qq.com/s?__biz=Mzg5MzY5ODMwNA==&mid=2247488769&idx=1&sn=0643a41ad3facc5d0a8fc4791f264fba&chksm=c02bbd6ef75c3478ca7513dec54173aa20f599ac8ac7f547ff77d52f41e80cfbbb1e3fa61436&scene=21#wechat_redirect)
    
*   [【Kimi智能体实战】解锁智能对话新技能，让Kimi大模型带你轻松打造全新智能体！包含10+实用工具详细介绍！](http://mp.weixin.qq.com/s?__biz=Mzg5MzY5ODMwNA==&mid=2247488928&idx=1&sn=3e3acaa9ff08db2796effa8703e122b3&chksm=c02bbdcff75c34d9307ebfbfb763e6b2870b5ad2023082edc9bb083270f984f70147a309ff97&scene=21#wechat_redirect)  
    
*   [喂饭级教程: 利用coze来搭建图像流，生成斗图表情包AI助手，斗图从此再也不会输！](http://mp.weixin.qq.com/s?__biz=Mzg5MzY5ODMwNA==&mid=2247488854&idx=1&sn=c9f9bc55f906103d0d1a35c0436da40b&chksm=c02bbd39f75c342f72aaf83c0f4e26ae4138e3c144a242b4d471e618d73822521af9f6ce83f1&scene=21#wechat_redirect)  
    
*   [【喂饭级教程】kimi api大家可能都知道，那为什么要用api你知道吗? 实操利用kimi api来实现文本聊天和图片识别！](http://mp.weixin.qq.com/s?__biz=Mzg5MzY5ODMwNA==&mid=2247488825&idx=1&sn=3f0f218bff93ef1eac83b38f21a4b775&chksm=c02bbd56f75c3440f17b0e91146fc2574749d178473b22824e9d7ef0d39f8b95acb3691f229a&scene=21#wechat_redirect)  
    
*   [【干货分享】4个爆火AI知识库/大模型基础课程，让你轻松拿捏kimi大模型，想学习AI的小伙伴，快上车~](http://mp.weixin.qq.com/s?__biz=Mzg5MzY5ODMwNA==&mid=2247488747&idx=1&sn=b1adda67854bae0a6d892b2f94b891e0&chksm=c02bbc84f75c3592a6035202fece4e840f54ac29966c58edf5a47f251617b04e801a2975df2c&scene=21#wechat_redirect)
    
*   [【个人提升】kimi应用: 嘴笨经常被人欺负，我让kimi扮演‘怼人专家’带我飞，效果显著，如今已有所小成！](http://mp.weixin.qq.com/s?__biz=Mzg5MzY5ODMwNA==&mid=2247488722&idx=1&sn=7903ee525e71725cca3bbf2ccdf9a1ae&chksm=c02bbcbdf75c35ab251154237bc4164f1d323dc6c819a965bc4f9571f351a0bdadf6cf2c9433&scene=21#wechat_redirect)
    
*   [天工SkyMusic实操教程：一分钟学会AI音乐创作，效果惊艳！](http://mp.weixin.qq.com/s?__biz=Mzg5MzY5ODMwNA==&mid=2247488803&idx=1&sn=59f0ea980ac87eedc1a9fe53c7b5c43f&chksm=c02bbd4cf75c345a3e97d2c9e03907857e745c8c42d0b5c5669e9959fddfcfefaa87538de69b&scene=21#wechat_redirect)
    
*   [Kimi虽火，但是需要打字; 一分钟创建AI语音助手，完美克隆任何人的声音，真实程度直接拉满完全免费~](http://mp.weixin.qq.com/s?__biz=Mzg5MzY5ODMwNA==&mid=2247488647&idx=1&sn=b483642436daa35f3649e97edbf2de9e&chksm=c02bbce8f75c35fe1628c14653e5c8af8b2e92c1a2d5ce30e3a92769688667aee016a5109b56&scene=21#wechat_redirect)  
    

之前给大家分享关于语音大模型讯飞星火、天工等等，但都是必源的。最近发现一个超酷开源的语音转文本ChatTTS项目，生成的语音文本效果逼真，支持中文和英文。结合kimi api，我给大家手搓一个语音AI助手，让大模型自然流畅地说出来！下面我给大家详细介绍，文末有实测对应的效果展示哦~

*   ChatTTS开源语音天花板
    

*   ChatTTS项目介绍
    
*   效果展示: 利用ChatTTS实现中文文本转语音
    
*   效果展示:  利用ChatTTS实现英文语音转文本
    

*   kimi api接口介绍
    

*   为什么要用api的方式来调用大模型?
    
*   kimi大模型介绍
    
*   kimi api相关限速介绍
    
*   如何配置自己的api
    
*   查看目前免费api的用量限制:
    
*   充值来提高api接口的限制:
    

*   kimi api+ChatTTS打造个人语音AI助手
    

*   配置对应的库
    
*   kimi大模型验证
    
*   将其封装成函数
    
*   问答对话语音展示
    

*   参考文档
    

ChatTTS开源语音天花板
--------------

### ChatTTS项目介绍

ChatTTS 文本转语音项目在github爆火出圈，引来大家极大的关注。短短三天时间，在 GitHub 上已经斩获了15.8k的Star量。

ChatTTS是专门为对话场景设计的文本转语音模型，例如LLM助手对话任务。它支持英文和中文两种语言。

作者本人也在 x (原推特)上表示，ChatTTS 突破了开源天花板。不过，目前开源的只是基础大模型，没有经过 SFT 监督微调。 

项目github地址: https://github.com/2noise/ChatTTS![](https://mmbiz.qpic.cn/mmbiz_png/IHicdx3TSo7UGJl6U7pGuRC9tJMewNj5ZiambKzwIxVl3fwvzZDibKCGmYMYhw79ZXVdBklpKeAGhbJbu3wiaydMzQ/640?wx_fmt=png&from=appmsg)
其具有下面特点:

*   对话式 TTS: ChatTTS针对对话式任务进行了优化，实现了自然流畅的语音合成，同时支持多说话人。
    
*   细粒度控制: 该模型能够预测和控制细粒度的韵律特征，包括笑声、停顿和插入词等。
    
*   更好的韵律: ChatTTS在韵律方面超越了大部分开源TTS模型。同时提供预训练模型，支持进一步的研究。
    

下面我将给大家实操ChatTTS的效果展示。

### 效果展示: 利用ChatTTS实现中文文本转语音

#### 配置对应的运行环境

```
from IPython.display import clear_output!git clone https://github.com/2noise/ChatTTS%cd ChatTTS!pip install -r requirements.txt!pip install openai==1.30.1!pip install pynini==2.1.5 Cython   WeTextProcessing torchaudioclear_output()
```

#### 下载模型权重

```
import ChatTTSimport torchtorch._dynamo.config.cache_size_limit = 64torch._dynamo.config.suppress_errors = Truetorch.set_float32_matmul_precision('high')from IPython.display import Audiochat = ChatTTS.Chat()chat.load_models()
```

![](https://mmbiz.qpic.cn/mmbiz_png/IHicdx3TSo7UGJl6U7pGuRC9tJMewNj5ZwibzbtUibJQx5yILHTtXZFHicA9hJ2ZLflXVARddicjX3M8VAynewE39ng/640?wx_fmt=png&from=appmsg)

#### 进行模型推理实现中文文本转语音

![](https://mmbiz.qpic.cn/mmbiz_png/IHicdx3TSo7UGJl6U7pGuRC9tJMewNj5ZuDmghEmviaVDpTTicPzmyzP9cRa6icebl4OVwfhq5N0yMNk66ZjMX213A/640?wx_fmt=png&from=appmsg)

输出的语音效果展示: 

### 效果展示:  利用ChatTTS实现英文语音转文本

![](https://mmbiz.qpic.cn/mmbiz_png/IHicdx3TSo7UGJl6U7pGuRC9tJMewNj5ZHHiamMPqCvxPrEMQ7z0YmfI9ibvqwAkLT9XzicQNL84uSicMlmC5rfbpSw/640?wx_fmt=png&from=appmsg)
输出的语音效果展示: 

效果是不是很惊艳，下面我将结合大模型来搭建个人语音AI助手~  
kimi api接口介绍
---------------------------------------------

### 为什么要用api的方式来调用大模型?

1.  部分大模型未开源:  即没有开放模型参数权重，所以没法实现本地加载。
    
2.  本地设备无法支持大模型推理: 大模型的参数量高达几百元甚至千亿的参数量，光是参数文件就高达几十G设置上百G的参数，更何况本地没有大型显卡推理，即使下载下来权重也无法运行。大模型推理是费钱费力。
    
3.  易用、高效、定制化强: 通过api接口的方式，易用高效便于用户定制，用户只需要几行代码就可以定制自己的AI助手。环境只需要CPU就行，不需要昂贵的GPU，网络通畅就行。还能通过api的并发等来限制来收取会员费用。
    

### kimi大模型介绍

目前kimi大模型有：

*   moonshot-v1-8k: 它是一个长度为 8k 的模型，适用于生成短文本。
    
*   moonshot-v1-32k: 它是一个长度为 32k 的模型，适用于生成长文本。
    
*   moonshot-v1-128k: 它是一个长度为 128k 的模型，适用于生成超长文本。以上模型的区别在于它们的最大上下文长度，这个长度包括了输入消息和生成的输出，在效果上并没有什么区别。这个主要是为了方便用户选择合适的模型。
    

### kimi api相关限速介绍

![](https://mmbiz.qpic.cn/mmbiz_png/IHicdx3TSo7UGJl6U7pGuRC9tJMewNj5ZYpmqg1a9MMLweyt64GEH5xblAOaQcDaeicJDAwibhP4DN0AMDqzsz29Q/640?wx_fmt=png&from=appmsg)
之前给大家介绍，就是利用coze平台搭建的AI助手，其底层大模型对应的是免费的moonshot-v1-128k大模型。

1.  对应就是并发为1
    
2.  RPM( request per minute)指一分钟内您最多向我们发起的请求数只有3次，
    
3.  TPM( token per minute)指一分钟内您最多和我们交互的token数只有32000个token数，
    
4.  TPD(token per day)指一天内您最多和我们交互的token数交互1.5M;
    

### 如何配置自己的api

首先你需要打开https://platform.moonshot.cn/console/info,进行登录注册，成功后进入下面界面![](https://mmbiz.qpic.cn/mmbiz_png/IHicdx3TSo7UGJl6U7pGuRC9tJMewNj5ZYcMU4CwZqPvic4u1NV2bU1iam9ArK0WLDytQpibD5puV9flrZHjcQyrPw/640?wx_fmt=png&from=appmsg)
点击右边的新建,命名后记得及时复制api密钥，下面需要用到。

### 查看目前免费api的用量限制:

![](https://mmbiz.qpic.cn/mmbiz_png/IHicdx3TSo7UGJl6U7pGuRC9tJMewNj5ZoMicbHBZfEkI1rng7O3q9SF7bQ3na8OrzQibGdWXyf7otasGADdytbwA/640?wx_fmt=png&from=appmsg)

### 充值来提高api接口的限制:

![](https://mmbiz.qpic.cn/mmbiz_png/IHicdx3TSo7UGJl6U7pGuRC9tJMewNj5ZVQBJAAF5boD2LdlECB4lSVyPAfq4CGXr91XfTxCwdtmg4cqyQzlXJw/640?wx_fmt=png&from=appmsg)

#### 账号界面预览

![](https://mmbiz.qpic.cn/mmbiz_png/IHicdx3TSo7UGJl6U7pGuRC9tJMewNj5ZoacKXNAq0HibkNmMqWic70ia6jIW7NpezX6XNEib1geBqjrib6yQEHfUwng/640?wx_fmt=png&from=appmsg)
用户新注册免费获得15元。

下面我将手把手给大家介绍如何利用kimi api+ ChatTTS来打造个人语音AI助手。

kimi api+chatTTS打造个人语音AI助手
--------------------------

### 配置对应的库

```
from IPython.display import clear_output!git clone https://github.com/2noise/ChatTTS%cd ChatTTS!pip install -r requirements.txt!pip install openai==1.30.1!pip install pynini==2.1.5 Cython   WeTextProcessing torchaudioclear_output()# 配置kimi大模型的apifrom openai import OpenAIclient = OpenAI(    api_key = "kimiapi密钥",    base_url = "https://api.moonshot.cn/v1",)
```

### kimi大模型验证

```
query="请问长江和嘉陵江相汇在什么地方"completion = client.chat.completions.create(    model = "moonshot-v1-128k",    messages = [        {"role": "system", "content": "你是 Kimi，由 Moonshot AI 提供的人工智能助手，你更擅长中文和英文的对话。你会为用户提供安全，有帮助，准确的回答。同时，你会拒绝一切涉及恐怖主义，种族歧视，黄色暴力等问题的回答。Moonshot AI 为专有名词，不可翻译成其他语言。"},        {"role": "user", "content": query}    ],    temperature = 0.3,)print(completion.choices[0].message.content)
```

```
长江和嘉陵江相汇的地方位于中国重庆市。嘉陵江在重庆市渝中区的朝天门码头汇入长江，形成了重庆独特的两江交汇景观。
```

### 将其封装成函数

```
def kimi_chat_speak(user_query,history):    history.append({        "role": "user",         "content": user_query    })    completion = client.chat.completions.create(        model="moonshot-v1-128k",        messages=history,        temperature=0.3,    )    result = completion.choices[0].message.content    history.append({        "role": "assistant",        "content": result    })    print("kimi: ", result)    params_infer_code = {'prompt':'[speed_5]', 'temperature':.3}    params_refine_text = {'prompt':'[oral_2][laugh_0][break_6]'}    texts = [result]    wavs = chat.infer(texts,                  do_text_normalization=True,                  params_refine_text=params_refine_text,                  params_infer_code=params_infer_code)    return wavs
```

### 问答对话语音展示

对话案例1效果展示:![](https://mmbiz.qpic.cn/mmbiz_png/IHicdx3TSo7UGJl6U7pGuRC9tJMewNj5ZFStwYqceSfPb0H3Rrj5OAkFd9FAzAwSRAxFlQ695QKiaZ0GVgk4BbuQ/640?wx_fmt=png&from=appmsg)

对话案例2效果展示:![](https://mmbiz.qpic.cn/mmbiz_png/IHicdx3TSo7UGJl6U7pGuRC9tJMewNj5ZXJJbuvtEibwwIeRXCIZgGr27fVia2px1GiaGb0hKs7wqOnCpxWiaPS7keA/640?wx_fmt=png&from=appmsg)

对话案例3效果展示:

![](https://mmbiz.qpic.cn/mmbiz_png/IHicdx3TSo7UGJl6U7pGuRC9tJMewNj5ZtFNmgmbCClu7vtuh52QrD7fpCY6eZHtf2ByrZKwiaQETicrbhia8TgP7g/640?wx_fmt=png&from=appmsg)

 怎么样，是不是很哇塞，快去尝试吧！

参考文档
----

1.  https://kimi.moonshot.cn/
    
2.  https://github.com/2noise/ChatTTS
    

今天给大家分享ChatTTS开源语音转文本项目，结合Kimi等大模型的api可以轻松定制个人语音AI助手。如果你想进行商用，还请查看ChatTTS的github仓库了解更多相关的信息。

不管大模型怎么发展，终究只是一个工具，如何利用好它来提高我们的效率，这个才是最重要的！

如果本文对你有帮助，还请你点赞在看转发。你的支持就是我创作的最大动力，关注下面公众号不迷路~

****👉往期文章精选****

*   [微信公众号接入kimi大模型:五大能力重磅升级，欢迎来聊天~](http://mp.weixin.qq.com/s?__biz=Mzg5MzY5ODMwNA==&mid=2247488769&idx=1&sn=0643a41ad3facc5d0a8fc4791f264fba&chksm=c02bbd6ef75c3478ca7513dec54173aa20f599ac8ac7f547ff77d52f41e80cfbbb1e3fa61436&scene=21#wechat_redirect)
    
*   [【Kimi智能体实战】解锁智能对话新技能，让Kimi大模型带你轻松打造全新智能体！包含10+实用工具详细介绍！](http://mp.weixin.qq.com/s?__biz=Mzg5MzY5ODMwNA==&mid=2247488928&idx=1&sn=3e3acaa9ff08db2796effa8703e122b3&chksm=c02bbdcff75c34d9307ebfbfb763e6b2870b5ad2023082edc9bb083270f984f70147a309ff97&scene=21#wechat_redirect)  
    
*   [手把手教你将月之暗面Kimi大模型接入微信公众号、飞书、掘金平台，完全免费，界面化操作，只需要三分钟就可定制化个人AI助手~](http://mp.weixin.qq.com/s?__biz=Mzg5MzY5ODMwNA==&mid=2247488574&idx=1&sn=e61938336902039fd11c7a97acb1f962&chksm=c02bbc51f75c3547a9d3dc1002ef87b351115234135d19beda9f52c1dc3ce86fc3c8038adc4b&scene=21#wechat_redirect)  
    
*   [【搞钱必看】Kimi大模型7大任务，官方提示词让你效率翻倍！](http://mp.weixin.qq.com/s?__biz=Mzg5MzY5ODMwNA==&mid=2247488667&idx=1&sn=4cc6d3fa2dabf65f37d3cce758e17836&chksm=c02bbcf4f75c35e2d064e576aa44bc44ec12ab03a797c70d9c08045ccbf86f0d9c5396f01966&scene=21#wechat_redirect)
    
*   [【真的好用到哭】kimi应用: 角色扮演40年老局长，教你人情世故，高情商回复~](http://mp.weixin.qq.com/s?__biz=Mzg5MzY5ODMwNA==&mid=2247488683&idx=1&sn=b124aba9170cd9be761680a4f3f15f8e&chksm=c02bbcc4f75c35d21004d63abdbe20c7b0fd405048958fed218cefd4d5122df022e664c32352&scene=21#wechat_redirect)
    
*   [万字长文-数据分析之pandas精品免费教程](http://mp.weixin.qq.com/s?__biz=Mzg5MzY5ODMwNA==&mid=2247486722&idx=1&sn=b30d5dcca93f18e2a0ca4f194e435da6&chksm=c02ba56df75c2c7b07f5a40e81bd35525d323b3deb7f5a2342c9abe84fb44ab396754679491a&scene=21#wechat_redirect)
    
*   [万字长文-数据分析之python可视化实战教程(强烈推荐!!!)](http://mp.weixin.qq.com/s?__biz=Mzg5MzY5ODMwNA==&mid=2247486850&idx=1&sn=d8c8e986a782fc66a02523aa6362f66e&chksm=c02ba5edf75c2cfb2ce71d6b5a1b3791fed6f90ab88e5ee14d1a6b136330b4c01e9f458c1854&scene=21#wechat_redirect)
    
*   [](http://mp.weixin.qq.com/s?__biz=Mzg5MzY5ODMwNA==&mid=2247486850&idx=1&sn=d8c8e986a782fc66a02523aa6362f66e&chksm=c02ba5edf75c2cfb2ce71d6b5a1b3791fed6f90ab88e5ee14d1a6b136330b4c01e9f458c1854&scene=21#wechat_redirect)[大模型微调该选择什么框架合适？万字长文-huggingface基础教程带你入门，大模型在线推理和微调~](http://mp.weixin.qq.com/s?__biz=Mzg5MzY5ODMwNA==&mid=2247487336&idx=1&sn=38fbd15ddcb93643e59aa2217cf892f7&chksm=c02ba707f75c2e1143795d23ba6fd499b28512ff2c21604e5ab4a744cc4100739c9c6bb17e11&scene=21#wechat_redirect)
    
*   [数据分析建模篇: 树模型结构可视化、量化推理实战指南(五千字长文~)](http://mp.weixin.qq.com/s?__biz=Mzg5MzY5ODMwNA==&mid=2247487288&idx=1&sn=f1f70a11655c7b8caa78c5a033f56a0c&chksm=c02ba757f75c2e41f5f9a8e15c3c35287b93182d77fd1d31e6cbc7cc82ae730e1a4ddf307dfc&scene=21#wechat_redirect)  
    
*   [数据可视化-万字长文: python可视化之17种精美图表实战指南](http://mp.weixin.qq.com/s?__biz=Mzg5MzY5ODMwNA==&mid=2247488281&idx=1&sn=ce646874808fd22f4e1cf7565f365bbc&chksm=c02bbb76f75c326045e3e1c4d32348b64e61bbf7e68c1e1400f4e6132c964849a4eabb7bd7a8&scene=21#wechat_redirect)