![](https://mmbiz.qpic.cn/sz_mmbiz_png/df5PYxpmUmHYVasNOTbIpJdUbL7JBtn852BUD0fahuImqmnDw9DPIGA9XDPJt8PWkwoajAoGVR67LbdicNwCEnw/640?wx_fmt=png&from=appmsg)

GitHub 上有一个非常火的短视频生成项目，叫做 MoneyPrinterTurbo，它可以利用 AI 来一键生成高清原创短视频。目前，此项目已经有 10.6k 的 star 了。

MoneyPrinterTurbo 有着全自动化的视频生成逻辑：只需提供一个视频主题或关键词，就可以自动生成视频文案、视频素材、视频字幕、视频背景音乐，然后合成一个高清短视频。

本视频由此项目生成

本文将带你全面探索这个项目的功能特性以及教程，让你能够随时随地一键生成想要的短视频。

功能特性
----

**视频文案自动生成**：支持视频文案 AI 自动生成，也支持自定义视频文案。

**支持主流视频尺寸**：横屏 16:9（1920 * 1080），可用于 YouTube、B 站等，以及竖屏 9:16（1080 * 1920），可用于抖音、快手等。

**批量生成视频**：可一次生成多个视频，根据需求选择最满意的视频。

**支持视频片段时长设置**：可以设置视频中每个片段的时长，调节素材的切换频率。

**支持多语言**：支持中文和英文的视频文案。

**多语音**：支持多种语音的合成。

**字幕**：可对字体、位置、颜色、大小以及字幕描边进行设置。

**支持多种背景音乐**：可以随机或者本地制定音乐文件，支持对背景音乐的音量调节。

**没有版权烦恼**：视频素材均无版权问题，也可以使用自己的本地素材。

**支持多个大模型的介入**：OpenAI（ChatGPT 所属公司），Moonshot（Kimi 所属公司），gpt4free，Gemini 等。

接下来，我将会针对有编程基础和无编程基础的用户来详细讲解这个项目的使用教程。

详细教程（无编程基础）
-----------

对于没有编程基础的用户，MoneyPrinterTurbo 提供了第三方的访问方式，可以通过一些第三方网站来访问并使用。

> 网站地址：https://www.reccloud.cn/

在网站首页，点击左上角的**功能 -\> AI 视频生成器**，随后点击**立即体验**，即可直接使用。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/df5PYxpmUmHYVasNOTbIpJdUbL7JBtn8f1Qs2jQoibxKvMEnr0ibKriapMrPubvRibvUa2HRy0TCCH6az1S9v1wmEA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/df5PYxpmUmHYVasNOTbIpJdUbL7JBtn8YnicFlxviaAr43FecheRXmAzb96vemMOY2nhfbY6jwiawe8jnDtN1u2yQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/df5PYxpmUmHYVasNOTbIpJdUbL7JBtn8n1nnfgmReQtdibpGzBHyejskTc3bjtMexL3oD9o02bg7OVKMloW2KicA/640?wx_fmt=png&from=appmsg)

这个网站目前对于生成短视频这个功能限免，不确定后期是否会收费。如果你不想后期花钱的话，可以试着自己在电脑上部署这样一套服务。

接下来，我将会针对有编程基础的用户讲解如何在自己电脑上部署这样一套服务来生成短视频。

详细教程（有编程基础）
-----------

如果你有编程基础，那你完全可以直接在自己的电脑上部署一套这样的服务，不用担心需要收费的问题，可以无限制地生成短视频，而且，在本地部署的话，可支持的视频设置项会更丰富，可以更容易生成让人满意的视频。

### 电脑配置要求

*   • 建议最低 CPU 4 核或以上，内存 8G 或以上，显卡非必须
    
*   • Windows 10 或 MacOS 11.0 以上系统
    

#### 前提条件说明

*   • 不要使用中文路径，避免出现一些无法预料的问题。
    
*   • 这个项目需要 VPN，请确保你的 VPN 配置正确。
    

#### 一键启动包

对于 Windows 用户，项目提供了一键启动包，可以直接下载使用。

> 百度网盘: https://pan.baidu.com/s/1bpGjgQVE5sADZRn3A6F87w?pwd=xt16，提取码: xt16。

下载后，建议先双击执行 `update.bat` 更新到最新代码，然后双击 `start.bat` 即可启动Web界面。对于其他系统，可参考以下详细步骤。

### 详细步骤

#### 克隆代码

`git clone git@github.com:harry0703/MoneyPrinterTurbo.git`

#### 修改配置

*   • 将 `config.example.toml` 文件复制一份，命名为 `config.toml`
    
*   • 按照 `config.toml` 文件中的说明，配置好 `pexels_api_keys` 和 `llm_provider`，并根据 llm_provider 对应的服务商，配置相关的 API Key
    

#### 配置 LLM

*   • 如果要使用 `GPT-4.0` 或 `GPT-3.5`，需要有 `OpenAI` 的 `API Key`，如果没有，可以将 `llm_provider` 设置为 `g4f` ( 一个免费使用GPT的开源库 https://github.com/xtekky/gpt4free ，但是该免费的服务，稳定性较差，有时候可以用，有时候用不了)
    
*   • 或者可以使用到 月之暗面 申请。注册就送 15元体验金，可以对话1500次左右。然后设置 `llm_provider="moonshot"` 和 `moonshot_api_key`
    
*   • 也可以使用 通义千问，具体请看配置文件里面的注释说明
    

#### Docker 部署

> 如果未安装 Docker，请根据 https://www.docker.com/products/docker-desktop/ 的说明先安装。

`cd MoneyPrinterTurbo  
docker-compose up`

项目的 Web 网页地址：http://0.0.0.0:8501 或者 http://127.0.0.1:8501/，API 文档地址：http://0.0.0.0:8080/docs 或者 http://0.0.0.0:8080/redoc

启动成功之后，你就可以看到下图这样的界面。

#### 配置 Pexels API Key

> 网站地址：https://www.pexels.com/api/

打开 Pexels 网站，登录成功之后，即可以看到自己的 API Key，将 API Key 复制下来，粘贴到基础设置里的 Pexels API Key 这一个输入框里。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/df5PYxpmUmHYVasNOTbIpJdUbL7JBtn8Db8AibgatPokzBNV0ZDa18mpmH0QVZPeKs7JrgrYG2tCNwzoy7Dzs2A/640?wx_fmt=png&from=appmsg)

#### 生成视频

**大模型提供商**可以选择 G4f，可能会有服务不稳定的情况，但是我试用下来还算比较稳定，主要是 G4f 免费，不用额外的去申请 API Key 了。当然，如果你有其他的 LLM 的 API Key 可以用，也可以选择对应的 LLM 来使用。如果没有的话，API Key 这个输入框留空就好了。

我们尝试来生成一个关于机器人的视频，填入视频主题，选择语言，文案我直接使用 ChatGPT 帮我生成，然后填写视频的英文关键词，我设置了同时生成 2 个视频，你也可以根据自己的需求来选择批量生成视频的数量，随后点击**生成视频**，等待几分钟即可。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/df5PYxpmUmHYVasNOTbIpJdUbL7JBtn8HXXLNicQTlF06L5QITBORzzA6YFTCV29FiaGfMlPfD4gficG8NNeZjdhA/640?wx_fmt=png&from=appmsg)

> 最终生成的视频文件在 MoneyPrinterTurbo/storage/tasks 这个目录下可以找到。

以下是本次生成的视频效果。

机器人短视频-1

机器人短视频-2

总结
--

希望本文的教程能够帮助你快速上手这个项目来制作短视频，同时，如果你对这个项目感兴趣，可以直接去 GitHub 上查看更多内容，以及尝试使用一些高级用法。

项目地址为：https://github.com/harry0703/MoneyPrinterTurbo。

往期精彩：

[只用 5 步，每个人都能写出精准的 Prompt](http://mp.weixin.qq.com/s?__biz=MzIwNDIwMTIxNQ==&mid=2653451465&idx=1&sn=dd419534105f3cfac2b85032663992b6&chksm=8d1f1959ba68904f78ecdc2725af6ded804b497e1ea917169e36751d975e6a1624934e695440&scene=21#wechat_redirect)  

[AI 有情感吗？语气或基调对 AI 生成文本的影响有多大](http://mp.weixin.qq.com/s?__biz=MzIwNDIwMTIxNQ==&mid=2653451495&idx=1&sn=3405f7fb70600434b852105b60ddcc44&chksm=8d1f1977ba689061156acb4af6e6b1411b404d4e03fe1ab9d0d1ee98c73e94d6520c19e23b8c&scene=21#wechat_redirect)  

[深入理解 AI 大模型：参数、Token、上下文窗口、上下文长度和温度](http://mp.weixin.qq.com/s?__biz=MzIwNDIwMTIxNQ==&mid=2653451512&idx=1&sn=557b43f71deadbd8901bae81ec43d73c&chksm=8d1f1968ba68907e9b78d14b6ffc2ddd7a36d70615db66b30229f8e3127fa61a2c5bc28af752&scene=21#wechat_redirect)  

[AI 写作秘籍：如何用提示语驾驭 AI，写出流畅优美的文章？](http://mp.weixin.qq.com/s?__biz=MzIwNDIwMTIxNQ==&mid=2653451553&idx=1&sn=1d7ec780939b13e6665f7e00713aaa2a&chksm=8d1f18b1ba6891a7f0c3fdbf6139450695e5f40d3e49422a9ad823fba0576d56d1619eb6b435&scene=21#wechat_redirect)  

[链式思维提示是什么？使用 Prompt 就能让 AI 像你一样思考](http://mp.weixin.qq.com/s?__biz=MzIwNDIwMTIxNQ==&mid=2653451574&idx=1&sn=5a044f9796f530633ddf1982e320f948&chksm=8d1f18a6ba6891b0ca51ffaeebf0edf4cfda91b1e9064560ab7661398154b92e80c5b5445adc&scene=21#wechat_redirect)  

[2 小时 → 5 分钟，5 款免费 AI 神器，让你飞速写出优质好文章](http://mp.weixin.qq.com/s?__biz=MzIwNDIwMTIxNQ==&mid=2653451621&idx=1&sn=04e78fec0cad48150d0be1a144fa4512&chksm=8d1f18f5ba6891e3bce0f4129fe6a8270c700dba168c0f9e4f0a09955170651f0a6c52dc3cc7&scene=21#wechat_redirect)