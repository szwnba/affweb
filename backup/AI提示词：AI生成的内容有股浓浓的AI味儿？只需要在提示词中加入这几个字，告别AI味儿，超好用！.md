点击下方👇“冯帅Prompt”关注公众号  

一起学习AI、搞钱、进化！

  

刚开始学习AI提示词的时候，总觉得用AI写出来的内容猛的一看很像回事儿，但是仔细一看又觉得哪里不对，AI味儿太浓了，不像是平常的表达那么自然和流畅。

什么是AI味？

先来看一个案例，让AI写一个关于「如何看待打工人躺平现象」的文章，在AI生成的内容中出现了很多「他们认为」、「因此」、「进而」这种很生硬的转折词汇，这种就是浓浓的AI味。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/b9iabcJrovZCwtbyiarwwKvxyz8diculfwdcsibwaIficbBXic73lMC8kCCB2Qtmmk9u6CjakwWVMhtoAhvzeKWwDUibA/640?wx_fmt=png&from=appmsg)

我们平常用到的 ChatGPT 或者国产的 Kimi 之类的AI工具，它们是生成式的AI，生成的内容是逐字生成，下一个字要和上一个字有紧密的关联，所以它生成的内容就会带有这种生硬的转折。

解决这个问题的办法有两种，一种是改进AI大模型的能力，另外一种是改进我们的提示词。

改进AI大模型的能力咱们做不到，今天来给大家唠唠如何改进提示词，把AI味儿给去掉。

把AI也想象成人，既然它生成的内容AI味很重，那我们在提示词中就直白的告诉它该怎样做。在提示词中加入：“口语化表达”，或者添加内容的受众群体：“小孩子听得懂的”，就可以非常有效的降低AI味

修改前提示词：

```
请你帮我写一篇文章，主题是：如何看待当代打工人躺平的现象
```

生成效果：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/b9iabcJrovZCwtbyiarwwKvxyz8diculfwdtB3BfNSMN0PSEOD4OheBIENGLic7uV4UIACYrtxjSa7wXNQkibCNdZtw/640?wx_fmt=png&from=appmsg)

修改后提示词：

```
请你帮我写一篇文章，主题是：如何看待当代打工人躺平的现象。要求：口语化表达，7岁小孩都能听得懂
```

![](https://mmbiz.qpic.cn/sz_mmbiz_png/b9iabcJrovZCwtbyiarwwKvxyz8diculfwdk470x79dnicdzQzBqutvmoicmDYx7SYjBlykaxwuofLUx0d8sCnPm5sg/640?wx_fmt=png&from=appmsg)

有些时候，在提示词中加入“口语化”这种提示词，虽然能大幅度降低AI味儿，但是并不能做到完全限制。这个时候我们就可以在提示词中加入一些AI味词库。常见的词汇有以下这些：

```
`事实上``同样``总体而言``进一步``在此基础上``因此``显然``通常``一般来说``大多数情况下``首先``其次``最后``另一方面``因而``综合来看``不可否认``归根结底``从而``例如``换句话说``作为结果``基于此``从总体上看``总而言之`
```

提示词：  

```
请你帮我写一篇文章，主题是：如何看待当代打工人躺平的现象。要求：避免出现以下词汇：事实上 同样 总体而言 进一步 在此基础上 因此 显然 通常 一般来说 大多数情况下 首先 其次 最后 另一方面 因而 综合来看 不可否认 归根结底 从而 例如 换句话说 作为结果 基于此 从总体上看 总而言之
```

生成效果如下图，观察下图会发现AI生成的内容中，“综上所述”这类的词汇依然出现，那我们直接把这个词加入到提示词的避免词汇内容中就可以啦。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/b9iabcJrovZCwtbyiarwwKvxyz8diculfwdb8o6MjibGkCzlicvxwTt5icI2ecEItzSuucEJT2FIfdaUn2IGB4G2sCTw/640?wx_fmt=png&from=appmsg)

AI具备非常强的学习能力，给它一些高质量的内容示例，也可以非常有效的让它避免AI味。

提示词：

```
`请你帮我写一篇文章，主题是：如何看待当代打工人躺平的现象。``要求1：口语化表达，避免AI味。``要求2：避免出现以下词汇：事实上 同样 总体而言 进一步 在此基础上 因此 显然 通常 一般来说 大多数情况下 首先 其次 最后 另一方面 因而 综合来看 不可否认 归根结底 从而 例如 换句话说 作为结果 基于此 从总体上看 总而言之``示例1：AI味：“这种方法具有很高的有效性。” 去除AI味：“这个方法我亲自试过，效果超明显” 示例2: AI味：“天气非常热” 去除AI味：“今天的天气热得要命，感觉自己都快被烤熟了。” 示例3: AI味：“这个地方风景很美，适合拍照。” 去除AI味：“这里的风景真的是太美了！无论是山川还是湖泊，都像是一幅幅美丽的画卷。随手一拍，就是一张大片。”`
```

生成效果：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/b9iabcJrovZCwtbyiarwwKvxyz8diculfwdh45UUSOuFqniahib9EwenywK8pibDmbdr3iawG0e87A2BkrAKhFLOBIgrA/640?wx_fmt=png&from=appmsg)

快去在你的提示词中试一试吧～

* * *

我是冯帅，专注于 AI 提示词和副业搞钱。  

扫描下方二维码，添加好友获取 AI 提示词资料和副业资料～

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/b9iabcJrovZDy0hzCebYiaxecWLqm3Y1icjRogv79VYTSmETSll1xkOP6J0NCINCc90aMv8jKo6lfPWJhGVIAzK5w/640?wx_fmt=other)