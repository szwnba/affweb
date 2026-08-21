你有没有遇到这种情况？每个月花个 10 刀订阅 GitHub Copilot，虽然它好用，但每次看到信用卡账单时总觉得这钱花得有点“肉疼”？如果我告诉你，有个方法不仅能省下这笔钱，而且还能保持同样的代码生成效果，你会不会很感兴趣？

![](https://mmbiz.qpic.cn/mmbiz_png/oXqG8ETvAensGWvrxfJ8GeIhtkMVgKMgHkSqfdV3IQ7r1vTygCu1CKrX2TibvTS4sARFdHJHhgKPP8iaVYicDMvNg/640?wx_fmt=png&from=appmsg)

今天，我就和你分享一个隐藏的“宝藏”——通过 deepseek 的 API 来替代 GitHub Copilot 的 GPT-4，还能省下一大笔费用。

### 什么是 deepseek API？怎么用？

简单来说，deepseek API 是一款非常强大的代码生成工具，代码生成质量和 GPT-4差距非常之小，但它的价格却比 GitHub Copilot 便宜得多。具体的价格对比在这篇[也许你该了解下，DeepSeek Coder这个国产目前最牛逼的编码大模型，或许你真的用得上](http://mp.weixin.qq.com/s?__biz=MzkxNzY0OTA4Mg==&mid=2247485705&idx=1&sn=75587af2f6f8b7bd54d2d816089c24f8&chksm=c1bc2adcf6cba3caeadb62ed1c649fdcdcd3601904036717d1d9229990b841a8ed17f3c7c890&scene=21#wechat_redirect)文章中，有详细的对比数据。

具体怎么操作呢？其实原理也很简单：你只需要在本地启动一个服务，然后让 GitHub Copilot 的请求通过这个服务转发到 deepseek 的 API，就可以实现用 deepseek 替代 GPT-4 来生成代码了。

可能听起来有点复杂，但别担心，步骤非常简单。原理就是，只需启动一个中间层服务，让 GitHub Copilot 的所有请求自动转发到 deepseek 的 API 上，你就可以开始享受这个“花小钱办大事”的过程了！

具体操作如下：

#### 1.下载 cocopilot 插件

![](https://mmbiz.qpic.cn/mmbiz_png/oXqG8ETvAensGWvrxfJ8GeIhtkMVgKMgsEbaYoKJlah4VLOwfkfiapUAX4CicUsibWrLQsHVfmjHpn5LmnofULUJQ/640?wx_fmt=png&from=appmsg)

插件下载地址在此：

**https://cocopilot.org/static/assets/files/cocopilot-0.0.6.vsix**

安装方式图中已经给出。

然后配置下 vscode 的设置：

```
    "github.copilot.advanced": {        "debug.overrideCAPIUrl": "http://127.0.0.1:8181/v1",        "debug.overrideProxyUrl": "http://127.0.0.1:8181",        "debug.chatOverrideProxyUrl": "http://127.0.0.1:8181/v1/chat/completions",        "authProvider": "github-enterprise"    },    "github-enterprise.uri": "https://cocopilot.org",
```

注意，这里的 http://127.0.0.1:8181 ，就是下面要启动的代理服务

#### 2.git clone 仓库，Docker 启动

```
git clone https://github.com/linux-do/overridedocker compose -up --build
```

config.json 里面配置自己的deepseek 的 base url 和 API key

![](https://mmbiz.qpic.cn/mmbiz_png/oXqG8ETvAensGWvrxfJ8GeIhtkMVgKMgNjZ6OCED2VlF7zmzVA7W76qXVn8J8OfI78EsplxtuCEXNlAtuDBr8Q/640?wx_fmt=png&from=appmsg)

OK，搞定，对话和代码补全都是没有问题的！

![](https://mmbiz.qpic.cn/mmbiz_png/oXqG8ETvAensGWvrxfJ8GeIhtkMVgKMgZiaGJC8aCyrthImwkDZN7g39WlswYHib1RUSMH3ILmfYQ16JKUibXSFhg/640?wx_fmt=png&from=appmsg)

### 1\. 巨大省钱空间：十倍的对比效果

我们先来看看这波操作到底能省多少钱。GitHub Copilot 每个月要 10 刀，折合人民币差不多 70 元。虽然单独看这笔费用不算特别高，但时间一长，这可是实打实的固定开销。而 deepseek 的 API 则按照使用量来收费，基本上如果你不是每天都在用，可能一个月也就几块钱。

对比一下吧：GitHub Copilot 一个月 70 块，deepseek 可能 10 块都不到。这可不是开玩笑，你甚至可能一整年省下几百块！省下的钱拿来干点啥不好？

### 2\. 代码生成能力丝毫不差

省钱归省钱，但效果不能打折吧？我当初也是这么想的。结果试用下来，deepseek 的代码生成能力完全不输于 GitHub Copilot。它的算法同样强大，生成代码的准确度和智能性都非常高，甚至在某些场景下还能更贴合实际需求。

我拿了一个前端项目的代码生成作对比，结果发现 deepseek 生成的代码结构清晰，性能也很稳定，甚至还多了一些智能补全的小惊喜。也就是说，你不仅能省钱，还不用担心性能会打折扣，真是一举两得。

### 3\. 灵活的使用方式

**GitHub Copilot 是个订阅制的服务，你不用还得每个月交钱，而 deepseek 的 API 是按需计费的**。这意味着你可以根据实际的工作需求灵活调整开销。比如，某个项目紧急时，你用 deepseek 的频率高一点，花个几块钱。而当项目告一段落，你几乎不怎么使用时，费用也会自动降低，完全不用担心浪费。

这个灵活性其实在实际开发中非常有用。有时你可能几个星期都不碰代码，花钱买订阅服务岂不是有点冤枉？deepseek 这种灵活计费模式，就特别适合这种不确定的开发周期。

### 4\. 性能和价格之外，开发者更自由

使用 deepseek 的 API，还有一个好处是更自由。GitHub Copilot 的功能虽然强大，但它有时候也会有一些限制，尤其是在自定义需求方面。而 deepseek 提供的 API，能够让你更灵活地调整和扩展功能。

比如，如果你在开发过程中需要集成一些特殊的第三方服务，deepseek 的 API 允许你自由组合，甚至可以自己做一些定制化的开发，完全不受限制。这种自由度在实际项目中尤为重要，因为每个项目的需求都不尽相同，能够根据项目需求调整工具的能力，是开发者的制胜法宝。

### 一次调整，长期受益

通过把 GitHub Copilot 和 deepseek API 结合起来，你能以更低的价格享受到同等甚至更好的代码生成服务。不仅省钱，还能提高工作效率。这种高性价比的操作，真的是为我们这些追求高效开发的程序员量身打造的。

如果你也像我一样，觉得每个月几十块的订阅费是个负担，那么不妨试试这个方法。一次小调整，带来的可能是长期的成本节约和工作效率提升。

毕竟，程序员的世界里，能省一点是一点，而能提高效率的更是不能错过！