前几天，我在推特上刷到了一条很有意思的分享。

原文找不到了，只剩下了这张图。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqXGffZnMSVDqpKcImOib5e3tRkayQQPUmYVRibY80EjvOVV7jOeGBjZ6YoBxIicCODwwfndVL6LmQj9PKOHhbeickomvT3FsicFhmHA/640?wx_fmt=png&from=appmsg#imgIndex=0)

大概意思就是，先不要让大模型直接回答，先进行一些深度思考，再给你回答。

我顺手也试了一下，效果确实还不错。

里面我觉得最有用的那句可能就是：

“让最终答案真正对我有用，而不是给出一份谁都能套用的通用建议。”  

但是坦诚的讲，毕竟Prompt这玩意已经快3年半了，都比一坤年还多了一整年，这个Prompt在日常用的时候，确实还可以，但是我觉得还没有到能形成一个很棒的方法论的程度。

于是我又去顺手找了一下上面帖子里面说的Reddit的原文，用AI搜索，很容易就找到了。

结果发现，这篇原帖已经是五个月前发的了。

原帖的标题大概是：“这是我找到的，能让Claude真正开始思考的最好用的方法。”

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqX2so1xZg061eOg71JcY9QGIGVVjlRuA0IZZk9fk7gYtDMjejm08VrAA75g2SE5z5QCgqG8ROrvfp7XuPJcPoU6BGSWONp1kbc/640?wx_fmt=png&from=appmsg#imgIndex=1)

而这个原文的开头，其实英语原句是：

Stop asking it for answers. Ask it to steelman your problem first.

我英语虽然很不好，但是最近几年因为看了太多AI的内容了，所以大多数英文单词还是认识的，但是这个steelman确实给我整懵了。

直到往下翻评论区。

![](https://mmbiz.qpic.cn/mmbiz_png/2jjfQoZLoqV0DTN15eUnuIeJn3Wlmyn4LuVaRfibYCNadS0KG6jEbmLCeK5uwJW15wQOYLAGCH2xWUy3E8DlMj2k3H3wxq4DwCe95XzibeR3A/640?wx_fmt=png&from=appmsg#imgIndex=2)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqV1mT4gWvb2icoibnLZOoiaImQ5889vFqWvZFeN58wqpvFhLrqoKkOyCWIFWFnqcdVbvQ6jOJzw1C9Es9KvAg21gRDpY37HwVwau8/640?wx_fmt=png&from=appmsg#imgIndex=3)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqWFgF5Tpmle2F149CJmEE1Am3udTTwma8VyicnBsibvQhBydhPRu7JIygNvpEDDaY9elMViafYicd24JslWYsu4Ec5icmtz5HYibicibk8/640?wx_fmt=png&from=appmsg#imgIndex=4)

不是，steelman这玩意被翻译成钢人法或者钢人论证？这是个啥？为啥都在下面说上面这个Prompt不是那么钢人论证？

于是我立马去调研学习了一下，这才弄懂。

但弄懂了之后，我想说，这玩意，确实是值得所有人跟AI对话时都值得使用的Prompt宝藏。

steelman这个所谓的钢人论证，其实是从**straw man**这个词里硬生生造出来的。

straw man是一个逻辑学里非常经典的观点，也是一个很有意思的辩论技巧，叫稻草人谬误。

大概意思就是，两个人争论时，其中一个人故意把对方的观点说得特别蠢、特别极端、特别容易攻击，然后对着这个被篡改过的弱版本一顿输出。

比如你说：“我觉得这台XX手机有点贵。”

对方说：“哦，懂了，你看不起国产手机。”

我相信大家日常生活里经常遇到到这样的人，这就是strawman，稻草人谬误，你真正的观点被削弱、扭曲了。

后来英语里就出现了一个特别形象的反向说法：

**steelman。** 

straw是稻草，软弱、一碰就倒。

steel是钢铁，坚固、强壮、难以击败。

于是，钢人论证法出现了，也就是steelman，它完全是稻草人谬误的反面，它要求你先替对方把论点补完整，把其中最合理、最难反驳的部分全部找出来，甚至说得比对方本人还好，然后再开始判断。

这个东西的内核其实在历史上出现过很多次了。

比如现代自由主义思想史上的殿堂级著作《论自由》第二章，就提过一句话：

“He who knows only his own side of the case knows little of that.”

翻译过来就是：

“一个人如果只知道自己这一边的论点，那他对自己这一边其实也知之甚少。”

所以，底下很多人对原帖的Prompt的批判我觉得是有道理的，因为确实没有把钢人论证表达的更加深入一些。

真正的钢人论证，它会逼着AI暂时放下你的立场，把你最容易忽略、最不愿意面对的那一边，让你直面面对。

因为所有人都知道，直到如今，AI最大的问题依然是谄媚，会不断的顺着你的观点说，即使强如Fable 5和GPT 5.6 Sol，依然如此。

所以，我觉得，钢人论证法这个内核，实在对我们大家来说，太有用了，因为真的能最大程度避免模型的谄媚。

于是，我自己花了一点时间，写了一个双向钢人Prompt：

```css
先别急着回答，也别默认我已经把问题想清楚。
请先对这个问题做一次详细思考的“双向钢人论证”：
1.用最完整、最有力的方式，重述我真正想解决的问题。
2.使用钢人论证法分别给出支持我当前想法、以及反对它的最强论证。
3.找出双方真正的分歧，以及最可能改变结论的关键变量。
4.只问我一个最关键的问题。
等我回答后，再给出明确判断、理由和下一步行动。

我的问题是：
[粘贴你的问题]
```

就这么长。

但是我觉得足够了，在使用体验上也非常的舒适。

之所以叫双向钢人化，本质上不是为了让AI充当什么钢人跟你辩论，而是有一个我自己的小巧思在。

**AI = 执行钢人论证这个动作的人。** 

**你的观点 = 第一个被钢人论证强化的对象。** 

**反对你的观点 = 第二个被钢人论证强化的对象。** 

所以，最后AI手里会得到两个钢人强化后的最强版本。

这样，我觉得能最大程度的，帮我们找到这个问题最本质的答案。

整个Prompt一共做四件事。

第一件事，是重写你的问题。

因为这几年我其实发现一个现象，就是人这个物种啊，经常会把“自己嘴上问的”和“自己真正想解决的”混在一起。

就比如有人问要不要辞职，他其实真正担心的可能是再干三年，自己还会不会有竞争力等等，诸如此类。

所以当AI先把真实问题重述一遍，那样很多原本乱七八糟的东西，就已经清楚了大半了。

第二件事，是给强化正反双方。

就如同我上面所说，双向钢人论证会要求它把正反两边都推到最强。

那么我们就能知道，支持这件事的人，能拿出的最好证据是什么？

而反对这件事的人，最难回答的质疑又是什么？

当两边都不能靠歪曲对方取胜，真正的冲突才会开始显露出来。

第三件事，找出那个决定结论的变量。

很多复杂问题看起来有十几个因素，最后真正能改变答案的，可能只有一两个。

就比如我们工作的时候，预算是十万还是一百万，答案是一定会变的。

就比如你在公司经营中，究竟想要短期收入还是长期品牌，那答案就更不一样了。

所以，我希望这个Prompt在双向钢人论证之后，帮大家找到这个最核心的分歧和变量。

第四件事，逼AI给出明确判断和行动。

AI经常在最终的结论上会不粘锅，给出一堆模棱两可没啥屁用的结论。

所以，最后，我要求它必须跟你提一个最关键的问题，然后，要求它必须给出判断、理由和下一步行动。

我用我昨天真实的问题举个例子。

就是我们昨天周一，下午公司几个核心的成员一起开周会，因为我们马上又要搬新办公室了，老的地方现在人完全坐不下了，所以在规划新办公室的装修的时候，大家突然想起一个事，我们公司，好像还没有所谓的司庆日。。。

因为我是一个在日常生活中，几乎完全不咋在乎仪式感的人。

然后我们公司我觉得又稍微有点特殊，有三个时间点，到底选哪个当司庆，我就脑壳疼了。

于是，我就把这个问题，通过双向钢人论证这个Prompt，扔给的ChatGPT。

![](https://mmbiz.qpic.cn/mmbiz_png/2jjfQoZLoqUU0Hmj6BAsr9RiblfNEBtAOd1VMoszubmBtlgAAmCzFh2ibK5Co0TUianqVEJtzQoZ5H4J3gsMg2ibsrhWaCgqzy7cqvhljpXrtRk/640?wx_fmt=png&from=appmsg#imgIndex=5)

它把我真正的问题，拆成了5个，我个人觉得，非常准确。

![](https://mmbiz.qpic.cn/mmbiz_png/2jjfQoZLoqWsNKJibGniatFC3UdRHEpVZASfvQMJLC3uvHbib6B0nl2xfcCq03FlHEoTsbrG0r0I3lqmNv0clC9MpRMuaTJwvqsGibWrrkm9cvU/640?wx_fmt=png&from=appmsg#imgIndex=6)

再然后，他就开始强化了，先把支持2023年2月26号，我写文章的第一天作为司庆，进行了非常全面的钢人强化。

![](https://mmbiz.qpic.cn/mmbiz_png/2jjfQoZLoqWxlfI7WTPias0aqx9NAc4qiaibslPEkB0zZmRZpYMX2b3TloYWwNXKAQn07xibNa3yEnxwchOgoweTyHiapbdsug4GC1ib456FZJwpM/640?wx_fmt=png&from=appmsg#imgIndex=7)

然后呢，又把2023年作为反面，又进行了一波钢人强化。

![](https://mmbiz.qpic.cn/mmbiz_png/2jjfQoZLoqVRHTrAMVgK7JQDGJjp2vhE3f3YrQMupticp2Qrib9OyibB9bnjn0s1goAibskNebmY2R7s0zQZ2GEhaZP9NJkPWHMibpXiaV7S60xws/640?wx_fmt=png&from=appmsg#imgIndex=8)

2023年的双向钢人强化之后，又把2024年IP公司正式成立、2025年2月目前最能规模化的也是绝大多数员工入职的虚实传媒成立这两个事件点，进行了双向一共四次的钢人强化。

最后，给了我一个关键的核心变量和问题。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqUAeB1ZQvOjbQdm1nkRGXJ8UX4rkbC4ouujJ6dtEZtvnfZZKXId6t1xK5icIA46PavhiaTJDeTBNYwXNknSvmk69ATkib78kOgW0Q/640?wx_fmt=png&from=appmsg#imgIndex=9)

“假设十年以后，公司已经有500个人，绝大多数人都没经历过你的公众号创业期。司庆那一天，你最希望他们共同纪念的是哪件事？他们到底在纪念什么？”

这个问题很难回答，但是我一旦回答了，基本也就代表答案确立了。

我把上面那些双向钢人强化的观点来来回回反反复复看了很多遍。

最后，我给出的答案是：

“我觉得我们现在做的所有事情都贯彻着我最开始的想法和理念，我觉得在AI时代，人和人的链接和真诚的交流才是像钻石一般珍贵的东西，所以，我、还有我们，一直想做的，都是想链接整个AI时代，我希望大家，纪念的也是这件事情。”

最后，答案确立了。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/2jjfQoZLoqXltVZtfKBgsMBtMqOJqB9WsdkDhiarSv0K4krBcCBzIGIWIk7ayjp1pGtLdgmjj0CLf92zicic8tXITQ0gGDnhcr6ORhLNas1yD0/640?wx_fmt=png&from=appmsg#imgIndex=10)

技术不断向前，人与人的真诚链接却永远珍贵。，、

这就是双向钢人论证的美妙之处。

相信我，他一定可以帮你找到。

你内心里那个最真实、最准确的答案。

******以上，既然看到这里了，如果觉得不错，随手点个赞、在看、转发三连吧，如果想第一时间收到推送，也可以给我个星标⭐～谢谢你看我的文章，我们，下次再见。******

\>/ 作者：卡兹克

\>/ 投稿或爆料，请联系邮箱：wzglyay@virxact.com