之前给大家安利的一款效率神器，**Automa**，在小红书上，得到了很多欢迎。

这款自动化工具，最大的亮点，`不需要写代码，使用模块拖拽，连线的方式`，就可以实现自动化流程。

常见的填表单，定时任务，多个网页之间来回操作，Automa 都能轻松胜任。

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/UtwUfs1dM3O9Vic2jbU15Tfv6WPoia5P60MvibX981VCh4NSbYDBhqpUkpfPFgBKlRER9wV1icBtaVzibXlXA46GsFQ/640?wx_fmt=gif&from=appmsg)

automa 使用示例动图

以三大主流浏览器为例。

### 1，chrome 谷歌浏览器

插件商店，直接搜索 `automa`。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/UtwUfs1dM3O9Vic2jbU15Tfv6WPoia5P60NS5j8iaugVDHWE3E6c6bjNqOibphFictIKJlk2aYTAvq2dvkxBWKn4wBw/640?wx_fmt=png&from=appmsg)

谷歌应用商店

如果你的电脑无法直接访问应用商店，请使用下面第4种方式。

### 2，firefox 火狐浏览器

点击扩展，搜索 `automa`。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/UtwUfs1dM3O9Vic2jbU15Tfv6WPoia5P60olyQBOQwPaeibIoZWaPPoNzxh2e8QoMDEgic12Mcs78yQTxOjA6bMxeQ/640?wx_fmt=png&from=appmsg)

火狐浏览器插件

火狐浏览器，由开源社区维护，特性比较多，功能非常全。但是运行速度，内存占用，一直被诟病。好在国内可以直连，不需要额外的方法。

### 3，edge 浏览器

有用户问，是否支持微软 edge 浏览器？在官方插件市场，搜索不到，应该是没有上架。所以，目前只能通过“已解压缩安装包”的方式引入。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/UtwUfs1dM3O9Vic2jbU15Tfv6WPoia5P60ib4a3TM8CWVV6Oydku9lZOc51lmMnIgmXdtmtkUBiaWGEkB0DEEpyryg/640?wx_fmt=png&from=appmsg)

edge浏览器扩展商店

### 4，手动安装

针对没有上架应用商店的，使用该方式安装。首先，在地址栏输入：

> chrome://extensions

打开扩展管理页面。顶部右上角，将“开发者模式”打开。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/UtwUfs1dM3O9Vic2jbU15Tfv6WPoia5P60PHdiczOMDPDgiczWuTWhIicOGicwFE8APUD6EwWYrVJ2dKib6GuzONAC7Ow/640?wx_fmt=png&from=appmsg)

chrome开发者模式

开启之后，允许使用“`加载已解压的扩展程序`”。这样就可以把扩展程序，直接在本地安装。

关注公众号，后台回复【**auto258**】，获取最新 automa 扩展安装包。

下面是初阶的应用示例，在这个基础上，可以了解各个模块的用法，以及如何搭建流程。

### 0，不是“爬虫”

使用的python的朋友，对爬虫不太陌生。如果完成浏览器流程，要借助第三方 devtools，通过chrome提供的协议，操作浏览器。

与爬虫不同，automa 是浏览器插件，使用的是浏览器提供的内置 API，原生支持所有的操作对象。

*   • chrome: 操作浏览器的 API
    
*   • cookie：浏览器缓存
    
*   • storage：浏览器存储
    

就像使用 JavaScript 操作 DOM 一样，使用 automa 操作浏览器。

### 1，京东首页截屏

大家想一下，如果要对京东首页截屏，我们手动怎么操作。

*   • 打开jd官网
    
*   • 登录，输入账号密码
    
*   • 刷新首页
    
*   • 使用截图工具截屏
    

使用automa，不必经过这些步骤。你只需要先把京东登录好。这个登录一般有时效性，可以通过页面判断，给出提示，或者等待。

automa 用到的模块和流程如下：

*   • **触发器**：默认是手动触发，点运行图标，才执行；
    
*   • **新标签**：打开新标签，网址输入 jd 官网；
    
*   • **截屏**：如果要截首屏，什么都不用设置；如果要截整个页面，比较长，勾选“整个页面”。
    

![](https://mmbiz.qpic.cn/sz_mmbiz_png/UtwUfs1dM3O9Vic2jbU15Tfv6WPoia5P60HfShLmkCzfGtu02oEHG92icEibVEp4b113K3Pria9w61V7oF8m427MNCw/640?wx_fmt=png&from=appmsg)

automa 京东首页截屏

### 2，问卷星填写表单

自动填写表单，在办公场景，最为多用。以问卷星的一个调查表填写为例。

#### 2.1 打开新标签

使用“新标签”模块，填入问卷网址。比如下面这个表单。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/UtwUfs1dM3O9Vic2jbU15Tfv6WPoia5P60LRo56NLkejjEVibNLG10lRxsZicI3wNuqiay25tPWcWv7cFsfncxOiaZmg/640?wx_fmt=png&from=appmsg)

问卷星调查表单

有单选框，有输入文本框。

#### 2.2 表单模块

表单填写，使用表单模块。

点击插件automa图标，选择“元素选择器”，不用手写CSS选择器，分析页面结构了。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/UtwUfs1dM3O9Vic2jbU15Tfv6WPoia5P60MEuIAKm2zC6PtWkdd5r4xcIUR75ftaaMcehfficVWGp8xUuCZKGDqtA/640?wx_fmt=png&from=appmsg)

automa元素选择器

填写第一个输入文本框，表单模块需要写入的参数：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/UtwUfs1dM3O9Vic2jbU15Tfv6WPoia5P60icFxE51Ucz2PUUITBJH8VhVITrHCFIaWhbCeXhNiak83TJZmhoDWFA5w/640?wx_fmt=png&from=appmsg)

form模块参数

#### 2.3 延迟模块

各个表单之间，填写还是要自然一些。可以加上随机的延迟时间。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/UtwUfs1dM3O9Vic2jbU15Tfv6WPoia5P608s6PCfCWFH2gT4nR9EbVtG0svzjBvJvjCFlAGPwUOnQhD5M50khmvg/640?wx_fmt=png&from=appmsg)

延迟模块

注意，延迟模块的数字，单位是毫秒。1000，代表1秒。

如果你每次都要随机延迟，需要写一个JavaScript随机函数，大家可以用这个：

`{{$randint(5000, 12000)}}`

这个表达式，会生成 5 - 12 秒的随机延迟。最大值、最小值，手动调整。

#### 2.4 点击选中

对于单选框，多选框，都是使用“点击元素”模块。便捷的方法，是使用“元素选择器”，自动在页面上，鼠标移动到元素上，点击，获取 css 选择器的值。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/UtwUfs1dM3O9Vic2jbU15Tfv6WPoia5P600xvNW08BHleSceQYgKFyo4kIfD9Dte5jIvswk6AicWGM3d2AnVcXlSw/640?wx_fmt=png&from=appmsg)

点击元素模块

#### 2.5 循环元素

如果表单很多项，要根据表单标题，填写不同的值。流程内，条件判断，就会很多。

这时，可以分析整个表单，如果可以像 `document.querySelectorAll` 一样，选中一系列元素；然后，挨个遍历。

遍历中，根据每个元素的属性，比如“标签”值，判断应该填入的值。这个流程，其实就是自动化的工作流，留给大家深入学习。

掌握了循环元素，逻辑判断，恭喜你，已经**升级到中阶水准**了！

我们列举几个，读者留言最多，最常遇到的问题。

### 1，任务如何停止

看到读者留言，问到最多的，是“如何停止进程”？

现在最新的版本，没有提供直接提供进程的方式。而是在“日志”里，查看所有正在运行的条目。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/UtwUfs1dM3O9Vic2jbU15Tfv6WPoia5P608w6X12MNJ8OT1iaJRhgNCC1QRejzCLLuTf7rvAQSUlYIwIibpQ7CFpGg/640?wx_fmt=png&from=appmsg)

Logs任务停止

可以使用筛选项，找到需要停止的任务，点击“**stop**”按钮，才能真正停止运行。特别是写出了无限循环的流程，只能在这里关闭。

Automa 应用场景很宽。最后布置两个题目，大家考虑如何实现。

### 网页信息提取类

*   • Tik Tok网页版，获取短视频的封面、链接、标题、点赞数、发布者，整理成 Excel 表格，下载到本地，做数据分析；
    
*   • 热门类目榜单，获取公众号标题，分析热门文章的标题写法；
    

### 跨多个网站操作：

*   • 在浏览器打开，公众号文章，获取标题、内容；
    
*   • 将上述标题内容，整理为提示词；
    
*   • 将提示词贴到 ChatGPT，并获取输出，设置到剪切板；
    
*   • 打开今日头条后台，点击发布微头条；
    
*   • 将ChatGPT创作的内容，粘贴到微头条；
    

*   • [标星 9 K！拯救不会写代码，99% 办公自动化搞定](http://mp.weixin.qq.com/s?__biz=MzAwMzgwMzI2NQ==&mid=2649531251&idx=2&sn=f7520d35568f0cb171e41a06816c8b66&chksm=832d929db45a1b8b6b19cc39c573499b6bce7cb5cf0422f02f7cbf44b1555fc98b247f5fbaba&scene=21#wechat_redirect)[](http://mp.weixin.qq.com/s?__biz=MzAwMzgwMzI2NQ==&mid=2649529330&idx=1&sn=f92fedbb71890649712b9a1d42790975&chksm=832daa1cb45a230a7406f3226af361c1f0be2eaaa0e57ab729ab5bc020ea743d3a153eaecaac&scene=21#wechat_redirect)
    
*   • [2024 年想要转行 AI 的看过来！对你一定有用](http://mp.weixin.qq.com/s?__biz=MzAwMzgwMzI2NQ==&mid=2649531274&idx=1&sn=0530434e850f45b21a3dc3bd246f8396&chksm=832d9264b45a1b72dc4d56115e5cea9ca1b9fd968fef54cffa26948a7ca4831c4a44d5a6afca&scene=21#wechat_redirect)
    
*   • [“面向开发者的下一代搜索引擎”：看到这，我心如同回到了二十年前](http://mp.weixin.qq.com/s?__biz=MzAwMzgwMzI2NQ==&mid=2649531231&idx=1&sn=a8b2cdb4507fa5530f0b40e9780b59bb&chksm=832d92b1b45a1ba79db647547c0c7ca62d7411f2537f163b4a19c71af489eea1517e2702db4f&scene=21#wechat_redirect)
    
*   • [公众号运营请收藏！小白也能获取公众号首页链接 __biz，看教程](http://mp.weixin.qq.com/s?__biz=MzAwMzgwMzI2NQ==&mid=2649531190&idx=1&sn=67bc07973645b34645b6ef0cc552ed76&chksm=832d92d8b45a1bceebdd63c37ce69d47b98b32089132f2f492ea031989bdcdbbdc13e2396c82&scene=21#wechat_redirect)
    
*   • [最新“流量作弊”：自己点自己的小程序广告赚取收益，会被发现吗？](http://mp.weixin.qq.com/s?__biz=MzAwMzgwMzI2NQ==&mid=2649531062&idx=1&sn=3e318a892d83dee27a7fe5dfffdc6d90&chksm=832d9358b45a1a4e49ba430fbfb144f0f72551bb7829cdad7b62ab465a1ce10001656d50dc8e&scene=21#wechat_redirect)
    
*   • [无语了，你们自己看吧！小程序“盗版”产业链，100 块的小程序就这么来的](http://mp.weixin.qq.com/s?__biz=MzAwMzgwMzI2NQ==&mid=2649531051&idx=1&sn=08cf11d1b0d830c34ccc7ef15a782f32&chksm=832d9345b45a1a53f4447ca0e46554214869c88efa4af42fa06887cb164e85e59d217db154d6&scene=21#wechat_redirect)
    
*   [• ](http://mp.weixin.qq.com/s?__biz=MzAwMzgwMzI2NQ==&mid=2649529330&idx=1&sn=f92fedbb71890649712b9a1d42790975&chksm=832daa1cb45a230a7406f3226af361c1f0be2eaaa0e57ab729ab5bc020ea743d3a153eaecaac&scene=21#wechat_redirect)[推荐 10 款超好用开源小工具，完全免费，建议收藏](http://mp.weixin.qq.com/s?__biz=MzAwMzgwMzI2NQ==&mid=2649529330&idx=1&sn=f92fedbb71890649712b9a1d42790975&chksm=832daa1cb45a230a7406f3226af361c1f0be2eaaa0e57ab729ab5bc020ea743d3a153eaecaac&scene=21#wechat_redirect)
    
*   [• ](http://mp.weixin.qq.com/s?__biz=MzAwMzgwMzI2NQ==&mid=2649528997&idx=1&sn=167abf7be535c1f6763ff2596d697eeb&chksm=832dab4bb45a225d69e2be320bd3c84f0b0b2056b896a6b5379488aecd07113ad65f7313ab7a&scene=21#wechat_redirect)[“一天忍不住用了 20 次”：继 ChatAll 之后，又一个套了 6 个大模型的壳应用 GodMode](http://mp.weixin.qq.com/s?__biz=MzAwMzgwMzI2NQ==&mid=2649529273&idx=1&sn=ac50f53e3910487ea0a53ef17582a104&chksm=832daa57b45a23419b6b1b2ba17e29398a0897a05c9db74d5227e5614f35731bc6d1794bb24d&scene=21#wechat_redirect)
    
*   [• ](http://mp.weixin.qq.com/s?__biz=MzAwMzgwMzI2NQ==&mid=2649528997&idx=1&sn=167abf7be535c1f6763ff2596d697eeb&chksm=832dab4bb45a225d69e2be320bd3c84f0b0b2056b896a6b5379488aecd07113ad65f7313ab7a&scene=21#wechat_redirect)[Fooocus：超简单图片生成，MJ 和 SD “容易版”，本地部署教程](http://mp.weixin.qq.com/s?__biz=MzAwMzgwMzI2NQ==&mid=2649529192&idx=1&sn=cfdcfbf290ec162368351882551892f9&chksm=832daa86b45a23903f574395667d9b1a3cfc04e60a7df697ed24dd4397f85a5f9c11bc2d2bef&scene=21#wechat_redirect)
    
*   [• ](http://mp.weixin.qq.com/s?__biz=MzAwMzgwMzI2NQ==&mid=2649528997&idx=1&sn=167abf7be535c1f6763ff2596d697eeb&chksm=832dab4bb45a225d69e2be320bd3c84f0b0b2056b896a6b5379488aecd07113ad65f7313ab7a&scene=21#wechat_redirect)[一日万赞！Meta开源音乐AI生成工具AudioCraft，一步步教你本地部署方法](http://mp.weixin.qq.com/s?__biz=MzAwMzgwMzI2NQ==&mid=2649528997&idx=1&sn=167abf7be535c1f6763ff2596d697eeb&chksm=832dab4bb45a225d69e2be320bd3c84f0b0b2056b896a6b5379488aecd07113ad65f7313ab7a&scene=21#wechat_redirect)
    
*   • [Llama 2 成开源新宠：微调支持32K上下文，速度很快，附本地教程](http://mp.weixin.qq.com/s?__biz=MzAwMzgwMzI2NQ==&mid=2649528979&idx=1&sn=50cdd5dd4d6138ab81ac9d0c6d96b830&chksm=832dab7db45a226bfe47f2a63c059508110356fd05cd4f09317003e6d8e0c42bc4a338c9c66a&scene=21#wechat_redirect)
    
*   • [袖珍版“Llama2” Windows上也能用了！一步步详细教程，开箱即用，附下载链接](http://mp.weixin.qq.com/s?__biz=MzAwMzgwMzI2NQ==&mid=2649528899&idx=1&sn=4e5880983363b17ee31b9e7884114ae0&chksm=832dabadb45a22bb12ccff2ac0baf7a3279d473e12eb4875461b52e6df5ab5974945bdcae78d&scene=21#wechat_redirect)
    
*   • [微小版“Llama 2”来了！开源免费，500行C代码，速度飞快，CPU 足够了！](http://mp.weixin.qq.com/s?__biz=MzAwMzgwMzI2NQ==&mid=2649528880&idx=1&sn=d5c46233d06e32f45a495f214b6035f1&chksm=832dabdeb45a22c804d119932e234a323b1f17a627fd28e095dc84ade8193309b4dbb8e7c2c9&scene=21#wechat_redirect)
    
*   • [ChatGPT 安卓版开放了！！要是放两个月前，我还会高兴一阵，但现在](http://mp.weixin.qq.com/s?__biz=MzAwMzgwMzI2NQ==&mid=2649528863&idx=1&sn=d8284f82601487b3e87508f904156412&chksm=832dabf1b45a22e75d90148ba99ab2497f39305d07c17d79afc45a7692102ed001920979aa02&scene=21#wechat_redirect)
    
*   • [ChatGPT 最强大的开源对手，6 个方法教你用上 llama 2](http://mp.weixin.qq.com/s?__biz=MzAwMzgwMzI2NQ==&mid=2649528849&idx=1&sn=7a9191fc4ef15b3a1a4122664d9af4da&chksm=832dabffb45a22e90da57e4eae556cb1729e961777592c59ba3a2090b506493f3ae6dbdcb288&scene=21#wechat_redirect)
    
*   • [中文写作利器，比 whisper 快 40 倍的免费语音识别，自己部署只要 3 步](http://mp.weixin.qq.com/s?__biz=MzAwMzgwMzI2NQ==&mid=2649528827&idx=1&sn=047f5508c8427c1c47d33c77b1cae042&chksm=832da815b45a2103eb3a6668b033e402bb13ca1a8dee4754523e7ca2fa1d12536b01b58cf447&scene=21#wechat_redirect)
    
*   • [猜对了！不是你的问题，ChatGPT 4 真的会随时间“漂移”！论文已经发出来了](http://mp.weixin.qq.com/s?__biz=MzAwMzgwMzI2NQ==&mid=2649528804&idx=1&sn=1b60dba4af339313c67d8f4f2c9f5ed8&chksm=832da80ab45a211cc82a6f7ac1cabede736105cf3d596ffa7009bb5611a1ffa50903dcbc6820&scene=21#wechat_redirect)
    
*   • [\[比心\]谷歌 Bard 简体中文版来了，我看到的不止是速度快](http://mp.weixin.qq.com/s?__biz=MzAwMzgwMzI2NQ==&mid=2649528723&idx=1&sn=579d6742f98731f81ae0729fcf2c2224&chksm=832da87db45a216b5256c299143bb2b4a5a90740330924160c2c3686b551b665b314bad0215b&scene=21#wechat_redirect)
    
*   • [最强 ChatGPT 4 对手，免费的 Claude 2 它来了，教你用上……](http://mp.weixin.qq.com/s?__biz=MzAwMzgwMzI2NQ==&mid=2649528242&idx=1&sn=b5c0d29e381ace763b14fcb81e8470cb&chksm=832da65cb45a2f4ab3d5da2f50a99dcc021aa374b43ba20196c2c08c923f5f7d2ac316685351&scene=21#wechat_redirect)
    
*   • [7天破亿，比 ChatGPT 更猛的 App 它来了！教你用上 Threads，附下载链接](http://mp.weixin.qq.com/s?__biz=MzAwMzgwMzI2NQ==&mid=2649528227&idx=1&sn=4c87dada6f3def4da72cc492aea67c08&chksm=832da64db45a2f5b3479d7d4c154bd0d8911230bee10ddac98f6e22ab506127227cee62d7c7d&scene=21#wechat_redirect)
    
*   • [一步步超详细，用免费 ChatGPT，搭建属于自己的ChatGPT bot！我也做了一个](http://mp.weixin.qq.com/s?__biz=MzAwMzgwMzI2NQ==&mid=2649528164&idx=1&sn=b92c3f8c5d0c4999c63ecad380377b5d&chksm=832da68ab45a2f9c4002cabd47a40f9cecba94ae85f7ae38586d56fdde3eba0b62384f1b5301&scene=21#wechat_redirect)
    
*   • [哇！自己本地也能搭建免费 ChatGPT 4，超详细教程，照着抄就好了](http://mp.weixin.qq.com/s?__biz=MzAwMzgwMzI2NQ==&mid=2649528113&idx=1&sn=ea6e2bfeab2f02c33b4cd74038dfcfc3&chksm=832da6dfb45a2fc988b53c86f970656125da1b65cc612c3a76f49fa69361f0ce5ef3153ee3e7&scene=21#wechat_redirect)
    
*   • [小圈子信息差！130+个自由免费 ChatGPT 网站](http://mp.weixin.qq.com/s?__biz=MzAwMzgwMzI2NQ==&mid=2649528039&idx=1&sn=6fbe25f17917eebc5c594db108fd4cd9&chksm=832da709b45a2e1f053059adf98536936ee20941b4fc2ee0982906bd4d83d0a492994d05c119&scene=21#wechat_redirect)
    
*   • [微软New Bing只能在国外用？试试这个，免登录！](http://mp.weixin.qq.com/s?__biz=MzAwMzgwMzI2NQ==&mid=2649527895&idx=1&sn=5c6538691e7c57dbc3b2d579a345ed76&chksm=832da7b9b45a2eafd7238c736292dd50f75db90dd71e7aca6465e439944d419547346addab5e&scene=21#wechat_redirect)
    
*   • [ChatGPT 4 最新免费使用方法指南](http://mp.weixin.qq.com/s?__biz=MzAwMzgwMzI2NQ==&mid=2649527671&idx=1&sn=1a3510a691e9b71adbe103d1981a7c05&chksm=832da499b45a2d8f010b7497ff601b221331720af6f03402dc9c7dc7e0f4183b98e0849a8b44&scene=21#wechat_redirect)