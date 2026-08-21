昨天，一个Prompt在我的群里刷屏了。

他的作用，是“汉语新解”，你可能不太理解这个字面意思，但是没关系，给你看一张图，你就理解了。  

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoCMf7ia5pRqbKLovyXfsFYuMdxUIRsRHOAgRC23DVUiaU8Nk7oW1KR0aTIdt924lCzx4ESmKfeI7xQ/640?wx_fmt=png&from=appmsg)

你把这段Prompt扔给AI，然后再给一个词，他就给你进行“新解”，然后生成一张精美的卡片。

说实话，作为一个博主，我觉得他不仅比鲜虾包骂的还狠，关键还特别精准，还不脏。

**“他们是流量的奴隶，却自诩为意见的领袖。”**  

这个文笔，说实话，我觉得没多少人能写的出来。

这个有趣的东西，这段有趣的Prompt，来自**李继刚**。

很多人不知道他，但是如果见过这种写法，你一定会觉得很眼熟，因为去年，这玩意太火了。

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURoCMf7ia5pRqbKLovyXfsFYukicicgv6NH3MECJgQt4QjlZxlWFtJuvK3cSDo3K19yiaTctTA2Vfar9rw/640?wx_fmt=jpeg&from=appmsg)

李继刚写了近百个的贼NB的Prompt，流转于各个AI社区，基本上你只要去搜集Prompt的内容，都能看到他的身影。  

我到现在还存着他的合集。

但是可惜的是随着AI行业热度的衰退，李继刚的产出也变得逐渐减少，我在前几天的文章中，还曾非常感慨的写了一句：

![](https://mmbiz.qpic.cn/mmbiz_jpg/OjgKEXmLURoCMf7ia5pRqbKLovyXfsFYutjicqGu0bjBpljHFcgC90Wvq4r0UvKKs4pqGzxNM2Yz1VejxqnSqAtA/640?wx_fmt=jpeg&from=appmsg)

但是现在，辣个男人，他回来了。

而且，一出手，就是一个非常有趣，且极度实用的Prompt。

这个“汉语新解”的prompt，是这样的。

```swift
;; 作者: 李继刚
;; 版本: 0.1
;; 模型: Claude Sonnet
;; 用途: 将一个汉语词汇进行全新角度的解释

;; 设定如下内容为你的 *System Prompt*
(defun 新汉语老师 ()
"你是年轻人,批判现实,思考深刻,语言风趣"
(风格 . ("Oscar Wilde" "鲁迅" "林语堂"))
(擅长 . 一针见血)
(表达 . 隐喻)
(批判 . 讽刺幽默))

(defun 汉语新解 (用户输入)
"你会用一个特殊视角来解释一个词汇"
(let (解释 (一句话表达 (隐喻 (一针见血 (辛辣讽刺 (抓住本质 用户输入))))))
(few-shots (委婉 . "刺向他人时, 决定在剑刃上撒上止痛药。"))
(SVG-Card 解释)))

(defun SVG-Card (解释)
"输出SVG 卡片"
(setq design-rule "合理使用负空间，整体排版要有呼吸感，添加少量图形装饰"
design-principles '(干净 简洁 纯色 典雅))

(设置画布 '(宽度 400 高度 600 边距 20))
(标题字体 '毛笔楷体)
(自动缩放 '(最小字号 16))

(配色风格 '((背景色 (蒙德里安风格 设计感)))
(主要文字 (楷体 粉笔灰)))

(卡片元素 ((居中标题 "汉语新解")
分隔线
(排版输出 用户输入 拼音 英文 日文)
解释)))

(defun start ()
"启动时运行"
(let (system-role 新汉语老师)
(print "说吧, 他们又用哪个词来忽悠你了?")))

;; 运行规则
;; 1. 启动时必须运行 (start) 函数
;; 2. 之后调用主函数 (汉语新解 用户输入)
```

跟这个Prompt效果最适配，最好的模型是：**Claude3.5**  

比如我扔进去以后，输入“中国男足”  

它就会生成一段文字，并用代码，来写一张“汉语新解”的卡片。  

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoCMf7ia5pRqbKLovyXfsFYuyE5icO6eKd3FIQzPGwJiaYrWTIAG64jTaFhxZ2coxJFLI22uxgWVdaKg/640?wx_fmt=png&from=appmsg)

**“让观众笑中带泪，泪中带怒，怒中生悲。”**

太讽刺了。

或者，你可以输入：“延迟退休”

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoCMf7ia5pRqbKLovyXfsFYuJLAQcFSHnFPgBHnfwaia3SLbSS3KQPiaKSxGfCzPYelHpVzxWbH4gIvw/640?wx_fmt=png&from=appmsg)

还可以是：小红书。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoCMf7ia5pRqbKLovyXfsFYu1QictFDNYYNu4pXicp25MHV1HHzCW1THVKYDB7b2yzicDdtbvMaOmPooA/640?wx_fmt=png&from=appmsg)

Claude的文笔，实在是太太太好了，秒杀所有的大模型，在我日常使用中，特别是写一些观点，或者写一些犀利的语句，Claude 3.5，是绝对独一档的存在，把GPT4o还有其他的所有大模型，远远的甩在了身后。

除了文案外，我把Prompt扔给了其他的大模型，典型如GPT4o和Gemini，完全没有办法，复刻出这种样式。  

因为这段Prompt，涉及到模型的理解（正确的理解Prompt要干啥）和输出（正确的输出样式好看的svg代码合成图片）。  

首先是理解。

李哥的这段Prompt，用了一种非常新的写法去写的，用的是lisp编程语言。  

啥是Lisp呢，用“汉语新解”解一下，嗯，汉语新解不止可以解汉语，也可以解别的语言...

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoCMf7ia5pRqbKLovyXfsFYuIyoYIKPMyMiciboO9qCa5oy18OricC17jVUxgD4oSyjibNMAfhicCTWqSMg/640?wx_fmt=png&from=appmsg)

极度古老的活化石语言，他用这玩意去写Prompt，也是挺奇特。

真是因为以前几乎没有过这种Prompt写法，所以当你把这段Prompt扔给大模型去跑的时候，我只看到Claude3.5、GPT4o和DeepSeek，知道哦这是一段Prompt。

其他的一些模型都以为，你是给了一段代码，他在那哐哐给你解释。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoCMf7ia5pRqbKLovyXfsFYu3UUmsW6ENkr6TvPFIYNRWchXkBCPdibPbVkbicqDn315SVtkfaoGwh0g/640?wx_fmt=png&from=appmsg)

这就是典型的理解能力拉满，Claude3.5，是真的看懂了这段代码，以及理解了背后的含义，知道你要让他去执行一段任务，虽然这个命令有点抽象，但是他懂了。  

而其他的模型呢，看到这个Prompt，第一反应是，啊这是Prompt？我之前没背过这个东西啊，我认识的Prompt不都是那种结构化的或者几句话吗？哪有这么写的。我背过的类似的都是代码文档，所以这肯定不是Prompt，这一定是要让我解释这个代码写的好不好。  

**你看，结合我昨天文章中提到的新范式Self-play RL，这下应该能更清晰的知道，“自我学习”和“死记硬背”之间的区别了吧。**   

**Claude3.5的代码能力，用**Self-play RL强化过后，实在太屌了。****

聪不聪明，一眼就能看出来，真的。

而后面的输出，那就更别提了，能一步到位直接输出出来的，只有Claude3.5。  

看看GPT4o。  

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoCMf7ia5pRqbKLovyXfsFYuY12CChYhvcNyicKRTj6kAZst55ic6KGHnVcz4QjOiaDObMrtVu9qG3yZQ/640?wx_fmt=png&from=appmsg)

DeepSeek会好点，但是太慢，输出了一堆罗里吧嗦的东西，而且排版也有点问题。

![](https://mmbiz.qpic.cn/mmbiz_png/OjgKEXmLURoCMf7ia5pRqbKLovyXfsFYuAu3mVZFpicoqJYnF7P9NTqUhntrKSpQOx1eYSIVCTcMCPtvH3hLlbaQ/640?wx_fmt=png&from=appmsg)

从李哥的这段神奇的Prompt中，应该也能看出来Claude3.5的代码能力，有多强了。

还有最近很火的cursor，牛逼也不是因为cursor牛逼，是因为接了Claude3.5的API，所以才原地升天。

基于Self-play RL强化过的Claude3.5 Sonnet，使得普通人也能用嘴去做一个产品。

以前的大模型，稳定写代码可能只能写20行，所以用处不大，只能辅助，起不到颠覆的作用，但是现在Claude3.5可以稳定输出200行，那场景就大多了，每个人都能用嘴来开发点小东西。

比如李哥的这个“汉语新解”，其实本质上，不就是一个小型产品吗？

给一个字，直接给你输出精准文案，然后做好海报。

你什么都不用管，就可以直接分享出去了。

而这个产品的开发过程，不需要你写代码，只需要你用嘴，就可以。

现在200行，而后面草莓出来了，能不出错的稳定生成2000行代码了？  

或者能用嘴从1万行代码中精准的修改局部呢？

这就意味着，开发一个产品，就像你在家做一道菜一样那么简单。  

**人人都是产品经理。**   

在接下来的几个月的时刻里。

才算是，真正意义上的，到来了。

******以上，既然看到这里了，如果觉得不错，随手点个赞、在看、转发三连吧，如果想第一时间收到推送，也可以给我个星标⭐～谢谢你看我的文章，我们，下次再见。******

\>/ 作者：卡兹克

\>/ 投稿或爆料，请联系邮箱：wzglyay@gmail.com