**到底是 10x 程序员的能力，还是让非程序员从 0 到 1 ？**

**01 发现了一个神器 cursor**

> https://www.cursor.com/

![](https://mmbiz.qpic.cn/mmbiz_png/Z6gDnRr767ODEkTDaTPQ3icK1sCg5nknZcURZiblmCwNxBdA5Ozuhn9KJaTvoT6KnS78Lf0ia12vh1L5OTLCGhb0g/640?wx_fmt=png&from=appmsg)

简而言之，这是个无缝集成 AI 的写代码软件，动动手指写好 prompt，它就能帮你生成代码，一键应用集成。

实测下来，真的比在 chatGPT 网站问完代码、再复制粘贴回来方便许多。  

**02 简单界面**  

下载好 cursor 到本地后，左侧会有一系列简单的教程。（话说感觉这个编译器十分类似于 vscode）

通过几个例子教会你如何跟 cursor 合作写代码。

![](https://mmbiz.qpic.cn/mmbiz_png/Z6gDnRr767ODEkTDaTPQ3icK1sCg5nknZhwsAGDwZMWYGOMWZxUAuDBBrhWmRBeSQVib96W8CibWwmspPYm2iaUXtg/640?wx_fmt=png&from=appmsg)

当然，界面是英文的，**我英文比较差，看的十分痛苦。**   

不过没关系，有 AI，直接让 chatGPT 帮我理解一下，现在 chatGPT4o 可以直接读图，非常方便。  

![](https://mmbiz.qpic.cn/mmbiz_png/Z6gDnRr767ODEkTDaTPQ3icK1sCg5nknZ57Jp3wUnoLgC8J8b4WnhQpvCicajLmarM5XXkTP3RX8iaMXVZficoM2Pw/640?wx_fmt=png&from=appmsg)

**03 测试一下几种功能**  

它的示例，一共给了：找到代码 bug、代码解释、代码查找、代码语言转换、代码询问等几个主要功能。

找 bug、代码解释，这两个能力中规中矩，一般的 AI，像 chatGPT、Claude、或者国产的 kimi、智谱等 AI 大模型，都可以轻松完成。  

但是有一点细微的差别，举个例子。

首先是跟 chatGPT 在写代码找 bug 时做对比，我需要先把代码，复制给 chatGPT，然后再补上一句：“**帮我找到代码中的 bug**”

然后等 chatGPT 修改好代码后，我再把**代码复制**粘贴回自己的编译器软件里面。

这是一般的流程，很常规。

![](https://mmbiz.qpic.cn/mmbiz_png/Z6gDnRr767ODEkTDaTPQ3icK1sCg5nknZia9eMepxcGibH1qhY09wEu2TFa7IrdfTD3wHEWEcciaUzibUIALXWMfg9Q/640?wx_fmt=png&from=appmsg)

如果是在 cursor 中呢？  

教程提示我说，只需要按 “Ctrl + L”，呼出聊天框，就可以输入了。  

![](https://mmbiz.qpic.cn/mmbiz_png/Z6gDnRr767ODEkTDaTPQ3icK1sCg5nknZNb4VXr1fWURtIFtegYGfQUIO6ZzGr5u28KrGwn0uHiaibKu31SzSpd7A/640?wx_fmt=png&from=appmsg)

我发现，当 AI 回答完毕后，多了一个 Apply 按钮，点击一下试试看。  

![](https://mmbiz.qpic.cn/mmbiz_png/Z6gDnRr767ODEkTDaTPQ3icK1sCg5nknZWcU9Uicav8LOoPZmvs6tHL9sncgSpHMkC76tunvoZiaY96evqmPQM2yg/640?wx_fmt=png&from=appmsg)

然后它直接帮我把代码修改了，完全不需要我自己再有类似于“复制粘贴”的操作了。

并且，还用红绿两色帮我标记出来，红色的是删掉的部分，绿色的是新增的部分。

且不提代码修改是否正确（一般使用代码能力比较强的 chatGPT4o，或者 Claude 3.5 的 api，都不会有啥问题。），单是这一份用心，就足以打动我了。

这操作，真的省心。  

**此时，再回看让 chatGPT 找代码 bug，无异于在汽车时代还在用人力拉车，这什么啊？**  

这丝滑的体验，回不去了......

**04 更好用的是，可以直接跟整个项目的代码对话**  

如果你用 AI 来帮你写过代码，你会有一个十分十分十分的痛点。  

**那就是，你没办法把整个项目的代码文件，全部粘贴给 AI，来帮你实现一些功能。** 

**因为真的是太麻烦了。** 

比如，我最近在写的一个 AI 项目，里边几十个文件，在不同的目录下，错综复杂。

![](https://mmbiz.qpic.cn/mmbiz_png/Z6gDnRr767ODEkTDaTPQ3icK1sCg5nknZt0btv9bj9cqTqxz8PlCFOyWcujRkicnId5oTvblkpYbepRBdaYpG6Ow/640?wx_fmt=png&from=appmsg)

但是有了 cursor，是可以直接跟整个项目中的代码文件问答，试试看：

先把我的代码导入 cursor，"Ctrl + L"开始询问，先问个简单的试试手。  

> 我在哪里调用了使用 AI 的 api？

我发现，它会先搜索整个项目的所有文件，然后再去查询。  

![](https://mmbiz.qpic.cn/mmbiz_png/Z6gDnRr767ODEkTDaTPQ3icK1sCg5nknZKVOxjFjvp7gE2o5Dlst8bRkElePIT5FzoxnlhvPHm7s1GT1TV9fq7A/640?wx_fmt=png&from=appmsg)

结果比较准确，找到了我的代码实现部分。（把我的 apikey 打个码哈哈）  

![](https://mmbiz.qpic.cn/mmbiz_png/Z6gDnRr767ODEkTDaTPQ3icK1sCg5nknZZ5d0xH2JOnVm6uh9CsDPRRRmcqqgXgSkejTfyqqPL5l9TI97axqhXw/640?wx_fmt=png&from=appmsg)

**05 更进一步**  

再试试增加一点难度，看看基于我整个项目，怎么实现一个新功能？

> 我想增加一个新功能，搞一个字典，把成语和成语对应的 url （我自己补充）对应起来。
> 
> 当生成一个随机成语后，再通过字典找到该 url，并返回。请你帮我生成代码

顺利实现，完全不需要我指定是在哪个文件里面，**它自己就会从头到尾搜索，并且告诉我在哪，怎么修改。**   

![](https://mmbiz.qpic.cn/mmbiz_png/Z6gDnRr767ODEkTDaTPQ3icK1sCg5nknZiaxeZH2oaDsJ80LiatDXuTraF6wnAqBFuPRx1KGAibibrua3T3gSkiagsibg/640?wx_fmt=png&from=appmsg)

**06 推荐指数 ⭐⭐⭐⭐⭐**  

到这儿，我已经忍不住想写一篇文章，歌颂一下这个好用的工具了。

它是真的能把 AI ，很好的集成到编译器里面，而且各种丝滑操作对写代码的人十分友好。

正如我开头说的，cursor 完全可以 10x 程序员的能力。

另一方面，动动嘴都可以完成代码，也真的可以帮非程序员，实现从 0 到 1 写代码了。

好的工具，必须推荐，这次，我给五星好评。  

**07**

我是想象力AI，写过很多个有意思的自动化机器人，有小红书自动发图、抖音自动涨粉、和微信自动加好友拉群等等。  

如果你感兴趣的话，千万记得要加我 aiaiai2098，一起交流。

往期文章：

[用 AI 帮忙养狗？Kimi 助我一臂之力，居然把小狗训练成了小机灵鬼](http://mp.weixin.qq.com/s?__biz=MzkzMDQ0NzQyNA==&mid=2247484988&idx=1&sn=ae5438cc00424233a87b00d5607686ef&chksm=c27b6f13f50ce6059bd8f5cb8af8bf14e4aa729dfd97bab651463a7649903d7d81d9b8b14a76&scene=21#wechat_redirect)  

[盘点一下之前写过的AI、RPA机器人（内附使用教程）](http://mp.weixin.qq.com/s?__biz=MzkzMDQ0NzQyNA==&mid=2247484519&idx=1&sn=b74ea9431b03f909f0d52d1eee936ab6&chksm=c27b6d48f50ce45e39d300215043a25590fc6ac5faf5fa2f32ae32d1e49497b9ecd95004ef58&scene=21#wechat_redirect)

[当我把1340条笔记喂给kimi时，它比我还懂我自己。](http://mp.weixin.qq.com/s?__biz=MzkzMDQ0NzQyNA==&mid=2247484779&idx=1&sn=d8cedc0fc303d8077ecd46f3e5806507&chksm=c27b6c44f50ce5525744c4fc9fb0e30beb23738618991fc4033336f58abe311d743dd13f4ff1&scene=21#wechat_redirect)

[必看！RPA 自动化开发效率增加100%](http://mp.weixin.qq.com/s?__biz=MzkzMDQ0NzQyNA==&mid=2247484264&idx=1&sn=07bc86e791afaaa2c762692e7fa6dcd4&chksm=c27b6a47f50ce351fb64be9bd266b20a78e44ec847d79d239ddaf2884c4d36133729c280afd7&scene=21#wechat_redirect)  

[记录 | 学习实践 AI 一年，我赚了多少钱？](http://mp.weixin.qq.com/s?__biz=MzkzMDQ0NzQyNA==&mid=2247484433&idx=1&sn=5982c27ef45c00417f0e9f24e80b8624&chksm=c27b6d3ef50ce428278b8207e007ae2a7b1f5eb27021dae61ba0be64908c67e1f10557d823e3&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/mmbiz_jpg/Z6gDnRr767Nb3ZK98M9UVw1V74n4icAVovZKjfwB51M48LAeU2yIfKJsoyylpibxvEN61yMS0uRqyPmQ8U76rCPA/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)