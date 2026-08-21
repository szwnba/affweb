今天碰到这么一个问题，在编译代码的时候给我报了个警告，以前我是不怎么处理警告的，最近鸡汤喝多了，变严谨了，于是乎想解决一下这个警告，警告如下：

```makefile
注: /Users/wa/Desktop/Client/alipay_kit/alipay_kit_android/android/src/main/java/io/github/v7lin/alipay_kit/AlipayKitPlugin.java使用或覆盖了已过时的 API。
注: 有关详细信息, 请使用 -Xlint:deprecation 重新编译。
```

于是我想知道更多，我想知道详细信息。豆包是这么跟我说的：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/J9NtQXG9xqKKUzaib9TvOVwEXfQekTVXGibCoNvKLiaMYjsQ227icPnfEuCSetBKRD1QtcHH5IiccQvZ2gYNDmVlbLQ/640?wx_fmt=png&from=appmsg)

千问这么说的：  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/J9NtQXG9xqKKUzaib9TvOVwEXfQekTVXGZmRH3TXvaxodpSZRvXZIFvM1iboBVvza8icpJZM2jGyrbyVcgFvHtw3w/640?wx_fmt=png&from=appmsg)

GPT-4o

![](https://mmbiz.qpic.cn/sz_mmbiz_png/J9NtQXG9xqKKUzaib9TvOVwEXfQekTVXGV9sqgLpA7breG2s5VIaCSXexVWH6iaiatGJezMg3MU4nWaAzvMCg5t7A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/J9NtQXG9xqKKUzaib9TvOVwEXfQekTVXGLjzVb7wEicQ3IicLoZXlbticK4PciakuW0AcV6W4Jl4ukFhlziabB1ic0BbA/640?wx_fmt=png&from=appmsg)

好了，大概知道了，然后我想知道在flutter中如何加入这个编译参数，于是我问：如何在flutter中添加-Xlint:deprecation编译参数

豆包是这么回答的：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/J9NtQXG9xqKKUzaib9TvOVwEXfQekTVXGmsbIbEibAx64UJEt6AMMOyiaQUV18dibQRIxQt81R2X7Cwficeyp6JZpCg/640?wx_fmt=png&from=appmsg)

千问这么说的：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/J9NtQXG9xqKKUzaib9TvOVwEXfQekTVXGpgiaXHsCodvJialIGkNIURIRJAibP2cJOAcuVNPXBolZtPxzzJbuYIia0w/640?wx_fmt=png&from=appmsg)

我们再来看看GPT-4o

![](https://mmbiz.qpic.cn/sz_mmbiz_png/J9NtQXG9xqKKUzaib9TvOVwEXfQekTVXGZnKSl5TKjcQBw2fZzIhMB8mGwFcm4SNfhqopfA2aUHM3Nw681pLF4Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/J9NtQXG9xqKKUzaib9TvOVwEXfQekTVXG29wIcUQZic6gtctf5hKeb9500YH7nTKQJKTVbNIIWQib7nOl8Kib1EuCg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/J9NtQXG9xqKKUzaib9TvOVwEXfQekTVXGHrZicibVILsicicaG8etfdEGic87k5K2v3icInCWCZss89Aia6AoC0ZzPQU9A/640?wx_fmt=png&from=appmsg)

这里先说明一下，上面所有的ai都没答对，体现出来了文科生的精神：胡说八道。有的人问我是不是对文科生有意见，你说错了，我不是对文科生有意见，我对文科生是很有意见。

度娘完胜：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/J9NtQXG9xqKKUzaib9TvOVwEXfQekTVXGBXswMTuicu7AicAZzBdEnrMPRVsRa1ibuHXpLUdEEHIctz6SGZwFIJicdw/640?wx_fmt=png&from=appmsg)

所以文科生有文科生的玩法，就是把字符用合法的语法结构组织起来胡说八道，你问它一些深刻的问题，比如对这些东西的理解，到底什么地方有什么bug，它是答不上来的。

大模型训练的时候，会使用很多数据，这些数据就是给大模型的概率模型里塞随机字符，让它知道各种稀奇古怪的文法，然后当你问它什么的时候它就按照权重，相关性之类的搬出来跟你一顿儿胡说八道。

后续我们给同学们介绍一下AI的训练方法，让同学们从训练开始，入手AI大模型的玩法，从而知道大模型到底可以干什么不可以干什么。