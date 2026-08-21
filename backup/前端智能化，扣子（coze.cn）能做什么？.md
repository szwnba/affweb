进入网站 https://www.coze.cn/ 后，注册或者使用抖音账号登录，即可开启使用。

进入主页面后，操作非常简单，类似 ChatGPT 式的交流形式即可快速、低门槛的搭建一个专属的 Chatbot，示例步骤如下：

**「我：」** 我想创建一个 Bot  
**「扣子：」** 当然，我很乐意帮助你创建一个 Bot。首先，我需要知道这个 Bot 将被用来做什么？这将有助于我为它取一个合适的名字并提供一个描述。  
**「我：」** 每天在微信订阅号自动抓取内容发布文章  
**「扣子：」** 好的，我想我们可以为你的 Bot 取一个创意丰富的名字，例如“内容自动抓取器”。它的描述可以是“一个能够在微信订阅号上自动抓取内容并发布文章的 Bot”。这样的名字和描述是否满足你的需求？如果满足，我将为你创建这个 Bot，这大约需要 30 秒钟的时间。  
**「我：」** 名称改一下，要有吸引力和专业性  
**「扣子：」** balabalabala...  
**「我：」** 还是算了吧，名称改成微信订阅号自动发布机器人  
**「扣子：」** 好的，你的机器人的名字已经成功更改为“微信订阅号自动发布机器人”。你可以从这个链接访问你的机器人：微信订阅号自动发布机器人。希望它能为你的工作提供极大的帮助！

好了，就这么简单，一个 Chatbot 即创建完成，总结体验过程中的优缺点：

**「优点：」**

1.  聊天回复速度快，对比国内的通义千问、文心一言其内容生成速率和展现速率有明显优势，非常接近 ChatGPT
    
2.  使用简洁，对新手友好，进入页面后没有任何阻碍，可以轻松上手
    
3.  界面友好，风格非常像 ChatGPT，蓝紫配色在视觉上也非常舒适，没有疲劳感
    

**「缺点：」**

1.  最好不要问一些深度问题，有可能会得到非常奇怪的答案
    
2.  最后生成的链接，有概率无法访问，打开 chrome 控制台，发现 a 标签没有 href，应该是个 bug
    
3.  右上角的三个点很难被发现，在未点击的情况下并不能一眼知道是干什么的
    
4.  偶尔会把代码显示出来，比如：正在使用 `ts-bot_creator-bot_creator`
    

创建
--

按照以上步骤，以**「前端智能化科普为标题创建 Bot，创建完成之后即有一些默认设置，截图如下：」**

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibsLctiaKLCWsEicZxsQW9fPMBwlWR4WnbNDfOXczvN3nfeufEZyjVkmzbDe3WRs8pvPo0iaSBw1YoNqA/640?wx_fmt=png&from=appmsg)

此时，已经是一个可用的 Bot 了，开场白文案和开场白预置问题都有默认设置，对于前端小智这个 Bot 来说，已经有以下功能：

1.  进入 Bot 时即可收到
    

> ❝
> 
> 你好，我是一个能助你全面了解前端智能化的 AI ，很高兴能为你服务。
> 
> ❞

2.  询问『如何实现前端智能化』，即可得到以下回答：
    

> ❝
> 
> 实现前端智能化需要以下几个关键技术的支持：
> 
> 1.  数据预处理：将原始数据转换为适合机器学习的格式，例如清洗、去重、特征提取等。
>     
> 2.  模型训练：使用机器学习算法对预处理后的数据进行训练，以获得能够进行预测或分类的模型。
>     
> 3.  模型部署：将训练好的模型部署到前端应用程序中，以便在运行时进行实时预测或分类。
>     
> 4.  反馈机制：收集用户的反馈数据，以不断改进和优化模型。
>     
> 
> 以下是一个使用前端智能化技术实现面部识别登录的示例：
> 
> 1.  数据预处理：使用图像处理技术对用户上传的照片进行预处理，例如裁剪、调整大小、灰度变换等。
>     
> 2.  模型训练：使用深度学习算法对预处理后的数据进行训练，以获得能够进行面部识别的模型。
>     
> 3.  模型部署：将训练好的模型部署到前端应用程序中，以便在运行时进行实时面部识别。
>     
> 4.  反馈机制：收集用户的登录结果数据，以不断改进和优化模型。
>     
> 
> 通过以上几个步骤，就可以实现一个简单的前端智能化应用程序。
> 
> ❞

更多能力
----

可以通过知识库、数据库给 Bot 提供更多的能力，比如创建一个【科普文章】的【知识库】并且启用后，即可在 Bot 中添加，如下两图所示：

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibsLctiaKLCWsEicZxsQW9fPMBC9MDxarIURKQxO0ncwdaVLta9gS9ZTnsbhia9jjK21xbz05cZyQP7aQ/640?wx_fmt=png&from=appmsg)
![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibsLctiaKLCWsEicZxsQW9fPMBHddSicibKTI5vsTluxKsylS2jFIlibvgPfwaDOyUAq5haH3xgIF1zAGJw/640?wx_fmt=png&from=appmsg)

之后再次询问 Bot ：如何理解人工智能

此时，Bot 会优先去知识库中搜索答案，如下图所示：

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibsLctiaKLCWsEicZxsQW9fPMBolZ85yH4Kd3UxF24fEMo6BvXYsFyicDpczAECo9aLtMfEa6IrIxhMiaA/640?wx_fmt=png&from=appmsg)

此时展示的内容即为知识库《一个前端智能化的实战》中的内容：

> ❝
> 
> “人工智能”或许是迄今为止最神秘的编程方式。通过机器学习程序，在神经网络中总结出规律和模式，就可以推理出结果。用数学理论无法简单证明，用工具分析也难以理解，但是神经网络却工作的很好。在语音、图像识别等领域已经达到工业标准，识别准确率远超人类。不同以往、难以解释的编程方式，正在改进安检、支付等场景的效率和体验，这正是人工智能的神秘之处。
> 
> ❞

再次询问：『如何定义前端智能化』  
得到答案：

> ❝
> 
> 从围棋的问题中可以看到，如果规则和运算不能解决，那么，这就是人工智能擅长解决的。在前端技术领域当然也会有规则和运算不能直接解决的问题，所以，这些问题就是前端智能化要解决的问题。前端智能化就是在复杂场景中，借助人工智能技术，解决规则和运算不能直接解决的复杂问题。
> 
> ❞

可谓非常简单了，当你上传足够多的有关前端智能化的文章或者链接，你就拥有一个在前端智能化领域非常专业的 Bot 了。

配合再配置一些插件、工作流，让你的 Bot 更加智能

> ❝
> 
> 工作流：工作流支持通过可视化的方式，对插件、大语言模型、代码块等功能进行组合，从而实现复杂、稳定的业务流程编排，例如旅行规划、报告分析等。
> 
> ❞

> ❝
> 
> 插件：插件能够让 Bot 调用外部 API，例如搜索信息、浏览网页、生成图片等，扩展 Bot 的能力和使用场景。
> 
> ❞

之后就可以点击右上角的发布按钮了，这里必须填写发布记录和选择发布平台，目前仅能选择飞书、微信客服和微信公众号（服务号），如下图所示

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibsLctiaKLCWsEicZxsQW9fPMB2WUVOVyVbf5Fv8kuPpo77Yq6EPCYeXsXIk3fbMvuT3QFZqictCXvsyQ/640?wx_fmt=png&from=appmsg)

以飞书为例，首次进入为未授权状态，点击飞书图表后边的配置，进入配置页面，按照操作步骤完成授权，勾选飞书

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibsLctiaKLCWsEicZxsQW9fPMBBFbOsn1fG0bAzc1mOIEHyvXj46Devftbvx86Cickbe49GILOeCyHL2g/640?wx_fmt=png&from=appmsg)

点击发布之后，会有一个官方的审核，目前审核都比较快，稍等过后刷新页面即可完成发布

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibsLctiaKLCWsEicZxsQW9fPMBrw9IE6yK9qJq3M9OTfWoKhFm3QPxCibDviay9CSmz4xWM1vK3BPNUczA/640?wx_fmt=png&from=appmsg)

回到我的空间，即可看到成功发布的 Bot - 前端小智

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibsLctiaKLCWsEicZxsQW9fPMBa5jI7XgialibNl4vnia0c8t6Zf19C2CXKFAvmJjfT0KrBUwCzJodsX7Iw/640?wx_fmt=png&from=appmsg)

进入 Bot 后在浏览器地址栏即可看到 Bot ID 如下图所示

![](https://mmbiz.qpic.cn/mmbiz_png/lCQLg02gtibsLctiaKLCWsEicZxsQW9fPMBmY7NPSUY9ibzibCxmppBKPI58cjCiaBQBkWB5bA6U0lSYib3Yt4njNEhsA/640?wx_fmt=png&from=appmsg)

打开飞书，搜索【前端小智】，即可看到创建的机器人

![](https://mmbiz.qpic.cn/mmbiz_jpg/lCQLg02gtibsLctiaKLCWsEicZxsQW9fPMB7bZAakPavvibjM7mE2cdQerCxxzryIrTqrxf94Fx7SZn0dsgmrLo0qw/640?wx_fmt=jpeg&from=appmsg)

在对话框窗口，随便提问一个问题，如【定义前端智能化】

![](https://mmbiz.qpic.cn/mmbiz_jpg/lCQLg02gtibsLctiaKLCWsEicZxsQW9fPMB45uiby2bDaCVO7ia3IGQlR74V5d2jkSeGTrPoOsfTWqicoIGZtZ00B1uA/640?wx_fmt=jpeg&from=appmsg)

好了，一个前端智能化的 Bot 就建立完毕， 总结一下：

优势：

1.  真的！真的！真的！如此简单，如此丝滑，如此快速，让人不得不感叹 AI 时代已经走进大众
    
2.  插件非常丰富，已经支持诸如搜索、图片、新闻等等，还支持自定义创建插件，只有想不到没有做不到
    
3.  对于构建某一个领域范围的专业机器人，可以说功能已经足够多，足够强大，优势明显，这个成本是我见过最低的
    

建议：

1.  支持的发布平台很少，希望尽快支持更多平台
    
2.  希望开放插件市场，开发者可以获取一些收益
    

最后简单回顾一下 扣子创建 Bot 的过程

1.  **「Bot设置：」** 在创建Bot时，你可以设置其名称和描述，以及选择一个合适的图标作为Bot的标识。这些设置可以让你的Bot在使用过程中更加个性化和专业化。
    
2.  **「交互过程：」** 通过交互式的对话，你可以告诉Bot你的需求，比如要创建一个用于微信订阅号自动发布文章的Bot。Bot会根据你的需求为你生成一个合适的Bot名称和描述，并在创建完成后展示给你。
    
3.  **「Bot名称修改：」** 如果在创建过程中觉得Bot的名称不够吸引人或者不够专业，你可以随时修改它。在交互过程中，Bot会根据你的要求为你修改Bot的名称，并确保修改后的名称符合你的期望。
    
4.  **「访问链接：」** 创建完成后，你会得到一个链接，通过这个链接可以访问你创建的Bot。这个链接可以在你的微信订阅号上使用，让你的Bot开始自动抓取内容并发布文章。
    

【前端小智】Bot 地址 https://www.coze.cn/space/7330538035702136882/bot/7330560334153056265 欢迎大家体验

Bot ID：7330560334153056265