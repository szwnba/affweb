**0.开场白**

大家好，我是书生  

这是我的第**188篇**原创

内容很干，记得**星标**

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iaEkK5qwKOmutpYIfBjgPX5icOmXjYlkeaClmGrTBZtrnsf7nAtWrJIOicjsrpRvGSdBr2Y5a22ujwt6fDbuGiaHwg/640?wx_fmt=jpeg&from=appmsg)

**点击查看更多优质内容**

* * *

**#文末有福利**

**一、本文背景**

近期在忙着做公众号的指令课程，闲暇之余呢又研究了一下AI小说的提效Know-How。当时是在Claude-Opus上测了一把，效果呢还可以~看下图：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaEkK5qwKOmv2ZTic3t0KoibUAh0IICO8IcJ5iaqxib4UxTaDm0esaK5lk29niazVnlqCic7vE3mM3bnlicYiaQoC8JkyKw/640?wx_fmt=png&from=appmsg)

> > 何清跪在大雪中，屋内传来王爷沈逸与老太妃的对话。
> > 
> > "何清不过是儿子看中的外室，儿子答应您，等我对她腻了，或者我要娶亲了，一定给她点银两打发她走。" 何清心如死灰，却并不怨怼。五年前，沈逸从人贩子手中将她赎出，给了她一个容身之所。虽然身份低微，但在王府的日子却是安然逍遥。沈逸身边再无其他女子，待她极尽温柔，吃穿用度皆是最好。 
> > 
> > 只是何清早已失去生育能力，这是她的痛，也是她的解脱。老太妃虽视她为眼中钉，却也因沈逸的承诺而睁一只眼闭一只眼。日子就这样一天天过去，直到圣上赐婚，沈逸迎娶乔太傅之女乔柏鸳。何清知道，自己终究是要离开的。 
> > 
> > 沈逸给了她一大笔银两，让她离开王府。何清感恩戴德，含泪告别。在王府门口，她遇到了未来的王妃乔柏鸳。乔柏鸳眼中的敌意让何清心中不快。
> > 
> > 她决定最后放肆一回，旧情难了，新仇又起。"姐姐我是过来人，跟你说句体己话。你马上要嫁给一个中看不中用的男人，这辈子怕是要忍受得不到满足的滋味了。"何清掩嘴轻笑。乔柏鸳气红了脸，却也无言以对。何清眼角泛泪，轻笑背后满是苦涩。五年恩爱，说散就散。她头也不回地离开，泪水模糊了视线，马蹄声渐行渐远。这一别，是断肠红。

开头这个效果很棒，但能达到这个效果，是因为我们开头使用到了<少样本示例>所以效果非常好，文字风格、行文逻辑、节奏等都非常ok。

为了更好的验证这个开头改写提示词的优点，这里再引入<相似度检测>查一查

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaEkK5qwKOmv2ZTic3t0KoibUAh0IICO8IcgtyH52Pkqv1R26awq6TJWZDhx0hWFEhcSZp11tibgb0unVv68zGtElQ/640?wx_fmt=png&from=appmsg)

相似度39.47%，稍微的有些高了哈。但没关系，又不是不能跟AI说了。

我用了这么一句话，**<这句话放在文章的结尾了>**让AI将相似度降了下去，文字的感觉呢，还可以。

> > 我是苏婉，一个丑女，却意外得到太子陆珩的青睐。三年前，我被卖入太子府，成为陆珩的通房。那时，我以为这只是一场交易，我用年华换取荣华富贵。 
> > 
> > 陆珩待我极好，我在太子府的日子虽然低调，但衣食无忧。我的贴身丫鬟绿芽常为我打抱不平，说太子殿下对我这般好，定是真心喜欢我。可我心里清楚，陆珩不过是想要一个听话的女人暖床，等他玩腻了，或是要娶亲了，我就得乖乖离开。 
> > 
> > 太后一直看我不顺眼，但碍于陆珩的面子，也只能睁一只眼闭一只眼。日子就这样一天天过去，直到陆珩迎娶白家千金白雪为妃。我知道，我的好日子到头了。陆珩给了我一大笔银子，让我离开太子府。我强忍泪水，向他告别。在太子府门口，我撞见了白雪。她轻蔑地看了我一眼，眼中满是不屑。
> > 
> > 我心中窝火，决定不能就这样忍气吞声。"白姑娘，你马上就要嫁给一个薄情寡义的男人了，这辈子怕是要受许多委屈。"我冷笑道。白雪脸色一变，却也无力反驳。我头也不回地离开，心中苦涩万分。三年情深，到头来不过是一场交易。我的泪水模糊了视线，马车渐行渐远。这一次，我决定放手一搏，不再做陆珩的替身。

这一次的相似度检测呢，如下：25.80%.  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaEkK5qwKOmv2ZTic3t0KoibUAh0IICO8Icpo8uJZfEF8m3t8tGPdsdqD2AG3biazV5NUqFRzC4WLOoYiafe9iaBibp2Q/640?wx_fmt=png&from=appmsg)

已经达到对于非抄袭认定的国际标准了，**文字复制比/相似度低于30%。开头搞定了，接着就要弄后面的大纲，设计情节以及安排反转等。** 不过这暂时还不在我们这品文章的范畴里噢。

接着我们说回GPT-4O。同属第一梯队的，我们来试试看，这个提示词，在GPT-4o上产生的效果。  

* * *

**二、正文**

使用跟Claude同样的提示词，GPT-4o出来的效果是如图：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaEkK5qwKOmv2ZTic3t0KoibUAh0IICO8Ic5AtComZhdTKy7eOFwxM49kSIlGqhmMmlptG0Wy2fd9Nr4x9ZuAoibag/640?wx_fmt=png&from=appmsg)

相似度检测：91.10%。我真的服了。  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaEkK5qwKOmv2ZTic3t0KoibUAh0IICO8IcsxoTGv7nb8xibGWcB6DyDj6u8B558l40CicYyiadVhWgiay8MWWpvtVOVA/640?wx_fmt=png&from=appmsg)

接着用我上述讲到的那句话，AI重写了一段，这段如下：

> > 我不是天生洒脱，只是不愿纠缠。我做了霸道总裁凌修五年的情人，服用了五年的避孕药。医生说我以后很难怀孕。好友李琳替我打抱不平，说我怎么不知道为自己打算，有个孩子傍身，总裁以后就不会轻易让我走了。我神色淡然，「你懂什么，凌修不喜欢有心机的女人。而且，我根本不想给他生孩子。」 
> > 
> > 我入职凌氏集团时刚刚大学毕业，那年凌修从校园招聘中把我选中。我跪在大雨中，听办公室内凌修跟他的母亲承诺：「何清不过是我看中的一个小职员，我答应您，等我对她腻了，或者我要结婚了，一定给她一笔钱打发她走。」但我没有怨怼，因为除了不能怀孕，我在集团公司的日子过得安然，逍遥。
> > 
> > 凌修身边没有别的女人，待我极温柔，吃穿用度都给我最好的。他母亲虽看我不顺眼，但凌修已经承诺不会给我名分，也不会让我有孕，他宠一个玩物，她总归还能睁一只眼闭一只眼。我向来过一天算一天，不去想未来如何，去留不由我掌握。五年快活日子过得我几乎忘了他最初说过的话。直到公司高层安排联姻，他的婚事再不能拖下。他的未婚妻乃是名媛苏婉。凌修的婚事在即，他给了我大把的支票和金银财宝，让我离开。就算是青楼头牌，五年陪伴也赚不了这么多钱，我真是太走运了。
> > 
> > 我感恩戴德地向凌修告别。在公司门口，我遇到了苏婉。她显然知道我的存在，女人的直觉让我感受到了她眼里的敌意。这敌意让我心里不那么痛快，反正我人都要走了，最后发泄一下压在心底的不爽。
> > 
> > 我故作浪荡地对苏婉说：「唉，真是同情你，马上要嫁给一个中看不中用的男人。我忍了五年解脱了，你可要忍受一辈子得不到满足的滋味呢？」 「你这女人，这种话也能光天化日地说出来，真是不知羞耻。」 我掩嘴轻笑，「姐姐我过来人跟你说几句体己话，你发什么火啊。得了，当我没说。」 编排了凌修几句我痛快了些。我大摇大摆地上了车离开。车窗放下的那一刻，我脸上的笑容消失，眼泪瞬间就侵袭了我的面容。五年啊，凌修，你还真是说断就断。

第一眼看着觉得写得不错，第二眼再细看，这跟开头不是一样的嘛！抄袭。不行，现在我已经有内容洁癖了，开头差不多的的我也不要！

那怎么办呢？诶，我还有个GPTs.专门用来改这个玩意儿的，加上这个试试。

第一步：打开这个GPTs。第二步：输入小说改写提示词。得到第一版结果

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaEkK5qwKOmv2ZTic3t0KoibUAh0IICO8IcYKpf1R7F2TicJvMu74uHd17A9Ef4f7hZerIib5PuPMeYWvOcoCusK4CQ/640?wx_fmt=png&from=appmsg)

然后加入这句话<虽然替换了名字，但开头情节没变，所以构成抄袭>。

然后GPT-4o，会给出一版新的，这版本如下：  

> > 我从未觉得自己是个天性洒脱的人，只是不愿意与无谓的情感纠缠。自从君天宸将军将我从火海中救出后，我的生活便仿佛被重新点燃。然而，我也深知，这份恩情背后隐藏着更深的阴谋与算计。将军府上五年，我忍受着无数次的汤药折磨，医生宣判我再难有孕。
> > 
> > 小丫鬟碧云替我打抱不平，劝我为将来谋划，设法生个孩子傍身，以保住在将军府的地位。我冷笑道：“碧云，你不懂。将军不喜欢有心机的女人。而且，我根本不想为他生孩子。” 五年前，我被君天宸从人贩子手中救出时，年仅十五。
> > 
> > 那时的我，还天真地以为自己遇上了命中的贵人。君天宸对外宣称我是他从灾民中救出的孤女，却从未打算给我名分。每天的日子在表面上的平静中度过，我成了他手中的一枚棋子，一步步陷入权谋的漩涡。 
> > 
> > 君天宸身边没有其他女人，他对我温柔备至，吃穿用度皆是上等。即便如此，我也知道，他对我从未动情。直到宛如，这个权臣之女的出现，一切才变得不同。她的到来，让君天宸终于露出了他隐藏多年的冷酷面孔。他宣布要迎娶宛如，将我这枚棋子彻底弃置。 
> > 
> > “凤瑶，你该走了。”他的话冰冷刺骨，宛如在一旁得意地笑。我并不感到意外，反而觉得心底一阵轻松。拿起他赏赐的银票和财宝，我毫不留恋地转身离去。在将军府门口，我遇到了宛如。她眼中的敌意昭然若揭，我挑衅地笑道：“宛如小姐，真是可惜，你要嫁给一个只会利用女人的男人。他的心永远不会属于你。” 
> > 
> > 宛如冷哼一声：“你不过是个替身，有什么资格说这些话？” 我淡然一笑，转身离开。帘子落下的那一刻，我脸上的笑容瞬间消失，泪水模糊了视线。五年啊，君天宸，你说断就断，真是绝情。 
> > 
> > 我并非甘心离去，重生后的我誓要夺回属于我的一切。这一世，我不再是那个任人摆布的替身凤瑶，而是掌握自己命运的强者。
> > 
> > 君天宸，你等着，我会让你付出代价。

文字风格很好，我肉眼看不出来抄袭的痕迹了，有一些字数重叠了，不过这没关系，在我可接受的范围之内~。接着查下相似度：33.54%。有点高，但差不多了~

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaEkK5qwKOmv2ZTic3t0KoibUAh0IICO8IcY9XaJN4reGWHkuFAPbQwicZH8tSZeJ68zT75gq9zicmZ0TeVfMvEM5oQ/640?wx_fmt=png&from=appmsg)

当然最后的这句话也可以加入到这一版的小说开头改写提示词当中~

目前对于写小说这个事儿，我的思路之一是通过<AI组合工作流>的方式去做。比如上面的<文本改写器>＋<小说开头改写器>，就足够出一版很好的短篇小说开头了~。剩下的几千字咋办呢？等着我再设计几个<GPTs>出来一起协作。

到时候只需要@它们即可，想想还是很兴奋呢哈哈

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaEkK5qwKOmv2ZTic3t0KoibUAh0IICO8IckOQ1nT1kKgEXmtR40GFkI5eJl4WicCz1hOITPqDo4Ceib8U0cGjDXicXQ/640?wx_fmt=png&from=appmsg)

**码字不易，多多支持~**

扫码加入我的**免费知识星球**<**成长 | IP | 提示词**>

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iaEkK5qwKOmtziaJib2cW9ueAAs0rWgWOqaPibOpxfkYnDw1duwsEkTCWdcwFc5Y2egMWeC6zoGpzvQrQ6OFIn06og/640?wx_fmt=jpeg&from=appmsg)

* * *

**好了，本文完结。以上，enjoy**

**文末有个10块的小册（现在29.9，也不贵，一杯奶茶钱）内容价值按照20倍交付.**

**我这么牛X，出的小册也不会太差**

**#阅读摘录**

**如何成为有头脑、生活幸福的人？坚持做有意义的事；坚持做有价值的人；坚持追求理智、正直、诚信。终有一天，一定能获得成功。身教胜于言教**。如果你取得了成功，别人会更愿意向你学习。如果你坚持走正路，你更容易获得成功。你已经走在了正确的道路上，你需要做的只是坚持下去。

**--****查理·芒格的99条人生建议：我一生中反复使用的几个思维方法**

**下方小册是我性价比最高的品**.（小册目前订阅人数已过2千，放心入）

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iaEkK5qwKOmvupmAEynWEN3PfBIVoeia98DmsnVSpzMYef6wXHeic4RZyicZszWp6GUEXMlP2NpsWmwZ6YE3qicWydQ/640?wx_fmt=jpeg&from=appmsg)

嗯，买了可以找我入群，这个群以<公众号>为场景，

探索公众号文章的AI撰写工作流和高效提示词指令。

**<都看到这儿了，不关注一下？>**

我的VX

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iaEkK5qwKOmtSwWIgyibicBDpXHu8boXL4pN8fTRXgiaYzKFETE0BKfYmhxuXzn7ziaOgWQWsrxTAIhV0gcorFSyBwg/640?wx_fmt=jpeg&from=appmsg)

**#往期回顾：** 

[AI|记录一个收费四位数的提示词定制案例](http://mp.weixin.qq.com/s?__biz=Mzg5ODYyMjI1NA==&mid=2247485698&idx=1&sn=128f42f742041681e2c7a1e9b7841c9d&chksm=c05eff43f72976559f29538061e2b4a738a7da010333b7af009fbe9a5e193d7261918a5c06d2&scene=21#wechat_redirect)  

[AI|你以前的AI指令不太对哦！正确的AI Prompt要这么写！](http://mp.weixin.qq.com/s?__biz=Mzg5ODYyMjI1NA==&mid=2247485368&idx=1&sn=b264cfc7954eaae221eee42be80c160b&chksm=c05ef1f9f72978ef580da4e1cefce07a96b91a9e98d36ef6fb01d4d7bcb1efbfd6d78446ea16&scene=21#wechat_redirect)  

[AI都发展成这样了，还不跑你等什么呢？](http://mp.weixin.qq.com/s?__biz=Mzg5ODYyMjI1NA==&mid=2247484632&idx=1&sn=751349dbef6d2fb14a58535c8675ae28&chksm=c05ef299f7297b8f699485ae4e782186fe9edb37dc788beec8c71ba3836b4959ac55e2ba4a3d&scene=21#wechat_redirect)  

[AI写作|发现了Kimi的提示词！好牛的感觉啊!](http://mp.weixin.qq.com/s?__biz=Mzg5ODYyMjI1NA==&mid=2247487105&idx=1&sn=77721f4e6e9ede7d8ab1651e96dcd3ca&chksm=c05ef8c0f72971d6feb328c0a6586ec3430dc238ef09ec7dbcc7634330ab5f61971b0ac92969&scene=21#wechat_redirect)  

[没意思，自从用了ChatGPT，一天能发100条小红书。](http://mp.weixin.qq.com/s?__biz=Mzg5ODYyMjI1NA==&mid=2247484563&idx=1&sn=588bb4bfecd513aa54854f9b23175e8c&chksm=c05ef2d2f7297bc4d10da2e1fce226a772b462280781014237cbe3c31a9246ada689184b18c9&scene=21#wechat_redirect)

[AI|给知识星球最大的创业社群-生财有术定制了3套AI prompt（提示词/指令）](http://mp.weixin.qq.com/s?__biz=Mzg5ODYyMjI1NA==&mid=2247485418&idx=1&sn=c42262dd44edaeb524a4171cd78cc7cf&chksm=c05ef1abf72978bd8d2ca804da172d07b52ec69b7def0ca37f6bdbc8cb353b946c6004e9f4b3&scene=21#wechat_redirect)