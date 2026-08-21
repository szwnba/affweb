欢迎加入我的AI读者群，订阅[2024年度AI技术专栏](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MjM5MDQ1NzE0MQ==&action=getalbum&album_id=3206397423527428106&scene=21#wechat_redirect)！

![](https://mmbiz.qpic.cn/mmbiz_png/6YuwSbqEwLvqT2B05w6nmbmtQRllodkPstdfme8SuYxq2ZegiaY28BEdPLETH66HiaUs8cZpiccJIsh3Z1dh0Q7iaA/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/mmbiz_png/DicuR7atBfy90vmIAlgvSacHOmMIvZ97CTAoicLWJucc5LLAAkpQNAI6e7OJA6ROnNKcLhFibYLD4iaxWdfxXSIwUw/640?wx_fmt=png&from=appmsg)

随着人工智能技术的发展，AI创作工具如Midjourney正在改变我们创造视觉艺术的方式。有些朋友可能看过我制作的几个盗梦空间中折叠城市风格的视频。

经常有朋友留言要提示语的，实际上目前我们已经有了大量的手段可以帮助自己完成各类图像的提示语编写，不需要到处问人要。

上面视频中大部分场景也不是一句提示语直接生成的，这种风格的图片我做了很多尝试，本文将详细介绍AI爱好者如何不求人，通过简单自学就能掌握生成各类风格图片的方法和流程，重点介绍的是思考方法和过程。

文章包括如何使用Midjourney生成《盗梦空间》（Inception）风格的折叠城市场景，包括使用普通的提示语、使用图片反推描述、使用样式参考，以及利用摄影师Aydin Buyuktas的作品进行灵感借鉴等多种方法。希望看完这篇文章你不仅仅只记住几个提示语，而是掌握了类似的工作方法，以后都可以独立完成类似的工作。

**一、编写提示语：** 

生成这类图片最简单的就是使用关键词“盗梦空间，折叠城市”

在使用Midjourney时，提示语（prompt）的编写是生成高质量图像的关键。为了生成《盗梦空间》风格的折叠城市场景，我们可以使用以下关键词和细节描述：

1\. 基础关键词：

   \- Inception

   \- folding city

   \- surreal cityscape

   \- urban fold

2\. 补充细节：

   \- high-rise buildings

   \- skyscrapers

   \- bending streets

   \- mirrored skyline

   \- surreal perspective

   \- dreamlike

   \- night scene

示例提示语：

"Inception style, show a city street with cars and pedestrians. Then, gradually, street upwards, degree, buildings, street curve, surreal landscape, like the movie, city"

这种提示语能够指导Midjourney快速生成类似于《盗梦空间》中城市折叠的视觉效果，但也许有时你会失望，因为并不一定每次都符合你的想法，还需要你仔细认真的描述你想要的场景，多次尝试不同的提示语。这里有个小技巧可以增加--c参数，例如20-30，增加图像之间的差异性，提高成功率和成功速度。

![](https://mmbiz.qpic.cn/mmbiz_png/DicuR7atBfy90vmIAlgvSacHOmMIvZ97CafFm0R7r2jsaEuIXttv6VEicS61icMAYeB6w5Q7SkbOWIz5s5Ygoib3GA/640?wx_fmt=png&from=appmsg)

你还可以使用/short命令，让Midjourney分析这个提示语，找出影响因素最大的关键词。然后再考虑增加提高画面质量、色调、风格的其他关键词，改善画面的美感程度。

**二、使用图片反推：** 

第二种方法是使用Midjourney的Describe命令，Midjourney的Describe命令可以通过上传图片反推出描述语，这对于生成特定风格的图像非常有用。以下是使用Describe命令的步骤：

1\. 找到合适的图片：选择一张《盗梦空间》中城市折叠的图片，或者其他风格相似的超现实城市景观图片。

2\. 上传图片：在Midjourney的Discord频道或网站中使用Describe命令上传图片。

3\. 获取描述语：Midjourney会返回一系列描述语，这些描述语可以用于指导生成类似风格的图像。

通过这种方法，可以得到更精确的提示语，使生成的图像更加符合预期。

![](https://mmbiz.qpic.cn/mmbiz_png/DicuR7atBfy90vmIAlgvSacHOmMIvZ97CqwwkSSI5hvIia2ATdl2iaVPNzDtZOGCVvKYibZbCssk9qmuYP6K7gp6aw/640?wx_fmt=png&from=appmsg)

**三、使用Midjourney的样式参考：sref**

Midjourney支持样式参考（style reference，简称sref），通过上传一张风格相似的图片，可以影响生成图像的风格和内容。以下是使用样式参考的步骤：

1\. 选择参考图片：例如，可以选择摄影师Aydin Buyuktas的折叠城市作品。

2\. 上传图片：在提示语中加入参考图片的URL，作为样式参考。

3\. 编写提示语：结合样式参考图片和文本提示，生成图像。

示例提示语：

"基础提示语 + --sref \[图片URL\] --sw 300"

这种方法可以确保生成的图像风格与参考图片一致。

![](https://mmbiz.qpic.cn/mmbiz_png/DicuR7atBfy90vmIAlgvSacHOmMIvZ97CRBialeS2AIgcY7gM68TOzAr4u7vOwlWfMXO6GVVnUx0D4tIz70AUPbg/640?wx_fmt=png&from=appmsg)

**四、利用ChatGPT生成提示语**

实际上我最初做这个系列并不是从盗梦空间开始，而是从土耳其摄影师Aydin Buyuktas的作品里找到了一些想法。Aydin Buyuktas是一位著名的超现实主义摄影师，以拍摄折叠城市景观而闻名。他的作品展示了令人难以置信的城市景象，通过巧妙的角度和后期处理技术，创造出仿佛城市在折叠和扭曲的视觉效果。Buyuktas的作品不仅仅是视觉上的冲击，更是对空间和现实的深刻探讨。利用他的作品作为灵感，可以帮助我们更好地理解和实现折叠城市的创作。

![](https://mmbiz.qpic.cn/mmbiz_jpg/DicuR7atBfy90vmIAlgvSacHOmMIvZ97CDvrR393ibzkySeC33RFpaIhjYfIQJtpibXPYkNZeX3vmGpOYQ8cgVQTQ/640?wx_fmt=jpeg&from=appmsg)

Aydın Büyüktaş拍摄的令人眼花缭乱的广阔城市景观照片让我们一睹大都市的规模、复杂性和几何形状，几乎提供了一个新的世界观。

![](https://mmbiz.qpic.cn/mmbiz_jpg/DicuR7atBfy90vmIAlgvSacHOmMIvZ97CsedibVryV0CoWSAM1BkJnM2sicExtnib9UmtQqOI6m0qAtk49LA0ECcGA/640?wx_fmt=jpeg&from=appmsg)

虽然 2010 年的大片《盗梦空间》可能会浮现在他的脑海中，但他的灵感更多来自 1884 年的讽刺小说《平面国》，该小说描绘了一个分为不同维度类别的世界（线国、平面国和空间国）。

![](https://mmbiz.qpic.cn/mmbiz_jpg/DicuR7atBfy90vmIAlgvSacHOmMIvZ97CmEDKQicVOaI3ARhONhzjm8mAibSs4ch5UblpP5x33gMs6iczQQmiby9u5w/640?wx_fmt=jpeg&from=appmsg)

在书中，二维世界的主角与三维世界的球体接触，后来意识到存在更高维度的可能性，但他却因自己的想法而被囚禁。

![](https://mmbiz.qpic.cn/mmbiz_jpg/DicuR7atBfy90vmIAlgvSacHOmMIvZ97CPiaRc0yBum01tOZBzHAWoWiaibzj3HQeERy38y4ogoICYmks3cF4DUdibw/640?wx_fmt=jpeg&from=appmsg)

也许 Büyüktaş 的作品以一种视觉方式提醒我们，我们的狭隘视角无法捕捉到各种可能性。下面看一下我是如何从上面这张图片开始，逐步进入这种风格的漩涡中。

首先我打开ChatGPT，把上面这张图片拖进去：

![](https://mmbiz.qpic.cn/mmbiz_png/DicuR7atBfy90vmIAlgvSacHOmMIvZ97CUcmslrk90D1ZaT7uZ5rdtuJfUsCEz0xMKGUCRyTJe3YuAEMFpjEUEg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/DicuR7atBfy90vmIAlgvSacHOmMIvZ97CYA8RpG1vlftew7x9px2XCLHKsyyCAyk38LwHwoFkQaoDJaa0wQdVhA/640?wx_fmt=png&from=appmsg)

提示语范例：  

amazing quality, sci-fi, epic scene, film composition,A surreal scene depicting a tall, modern skyscraper standing upright in the center. The sky is replaced with various ground elements, including city streets, greenery, and buildings, creating an upside-down world illusion. The roads and highways twist and turn in the sky, with cars driving on them as if gravity has no effect. In the foreground, two people walk along a road with a parked white car nearby and trash bins adding a touch of reality. The entire scene evokes a sense of parallel universes and challenges normal visual perceptions, blending realism with fantastical elements. --no sky --ar 2:3 --s 550

下面是生成的图像：

![](https://mmbiz.qpic.cn/mmbiz_png/DicuR7atBfy90vmIAlgvSacHOmMIvZ97CLibSOickszmBMBPuia1Tklsicdr6fWVJI6miaWqA2gDyHZ1twA6o6ic5kCHw/640?wx_fmt=png&from=appmsg)

如果你想让场景更压抑一些，还可以添加--no sky参数，让天空展示的范围更小。

![](https://mmbiz.qpic.cn/mmbiz_png/DicuR7atBfy90vmIAlgvSacHOmMIvZ97ChGOLRTP20Ma1USmIVFQhGkOqg7jkPO9ucNc7xDLf21vLciaKvcsZKHw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/DicuR7atBfy9pl6ZftokpgHBIic2I2icFCHQEjoKUCfl7MqVubjRFO4ibOJwWeQJLHVBTsibrHe89wb1fMzK4KG3IqA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/DicuR7atBfy90vmIAlgvSacHOmMIvZ97CicYt3lufMyWKdFdY6UGhSibOO04vlLOpCuPeyr44MdnT38IdcBd97maA/640?wx_fmt=png&from=appmsg)

以上几张仅仅是使用了摄影师Aydın Büyüktaş的一张图片作为参考，你还可以用他的其他作品做参考，挖掘更多非现实效果，并不局限于城市和街道。还可以往乡村、大自然景观方面尝试。  

**五、打造自动生成提示语的GPTs**

为了提高创作效率，可以编写GPTs来自动生成相关的提示语。这些模型通过训练可以理解“折叠城市”或“盗梦空间风格”等概念，生成详细而准确的提示语，适用于Midjourney的图像生成。

我将摄影师Aydın Büyüktaş的相关介绍，以及对他作品的分析等文本内容提交到我定制的GPTs中，制作了一个专门生成这种景观的GPTs。

以下是定制GPTs的常规步骤：

1\. 训练模型：使用大量描述超现实城市景观的文本数据训练GPT模型。

2\. 生成提示语：输入简单描述，如“折叠城市”，模型生成详细提示语。

3\. 调整和优化：根据生成的图像效果，调整提示语以获得最佳结果。

我只需输入想要生成的内容，如：

![](https://mmbiz.qpic.cn/mmbiz_png/DicuR7atBfy90vmIAlgvSacHOmMIvZ97C70l3sYKI37olNP0JSO7lvNXneJoRmtdoEJXWRWzibC8Yl1ByFkXZXQg/640?wx_fmt=png&from=appmsg)

**六、AI创作的工作流思考**

看完全篇文章，你会发现这种风格确实不是一句提示语就能解决，即便这篇文章中给了几个范例提示语，但你要想生成不同风格内容的图像，还是需要自己不断练习，结合文章中的多种方法，不断迭代。当你习惯了这种思考流程，以后遇到想要实现的任何效果，其实都不必到处找人要提示语，自己也可以研究出来。

这篇文章前面的提示语重点都在内容上，对画面质量、色调、风格没有多做介绍，后续我们还可以结合使用--sref 的风格迁移，实现更加鲜明的艺术效果，例如这篇文章中介绍的一些sref参数：《[最适合Midjourney室内设计的10个样式代码！](http://mp.weixin.qq.com/s?__biz=MjM5MDQ1NzE0MQ==&mid=2247493805&idx=1&sn=550587811cd102606e43a2543e753aaf&chksm=a64624f79131ade1f68e589754b64c6a0de509f0fa6aa9e673ff59705a333785932b8815787f&scene=21#wechat_redirect)》。

![](https://mmbiz.qpic.cn/mmbiz_png/DicuR7atBfy90vmIAlgvSacHOmMIvZ97CmWWvDUuicmJT9koEpIvTvn5htQatzXAHvdrsJ3x6ERHc2Fap1sj5mlA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/DicuR7atBfy90vmIAlgvSacHOmMIvZ97CBTRprG1Q3kMZyvJcpdcuM6laBqoCw3lLvdvgd19icpapGScDplSaQ4Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/DicuR7atBfy9pl6ZftokpgHBIic2I2icFCHbd36nrNf9HfsCZNg0172U4nicjuxf1SiclAjtYylKibnsm3dWlsJUiciawA/640?wx_fmt=png&from=appmsg)

**结论**

利用Midjourney和其他AI创作工具，生成《盗梦空间》风格的折叠城市场景是一项令人兴奋的创作活动。通过精确编写提示语、使用图片反推描述、参考样式图片，以及借鉴超现实主义摄影师Aydin Buyuktas的作品，我们可以实现视觉上震撼的艺术创作。同时，结合自定义GPTs模型自动生成提示语，优化工作流，可以进一步提高创作效率和效果。希望本文提供的详细指南和创作思路，能为你的AI艺术创作之旅提供有价值的参考和帮助。

想了解AI技术在各领域的更多应用，可以查看下方各月份导航。感兴趣也欢迎订阅并加入[我的专栏用户群](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MjM5MDQ1NzE0MQ==&action=getalbum&album_id=3206397423527428106&scene=21#wechat_redirect)，共同学习探讨。

公众号精选内容

[基础入门](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MjM5MDQ1NzE0MQ==&action=getalbum&album_id=2861626785156562947#wechat_redirect) | [建筑室内](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MjM5MDQ1NzE0MQ==&action=getalbum&album_id=2668769842375720965#wechat_redirect) | [模型训练](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MjM5MDQ1NzE0MQ==&action=getalbum&album_id=2797797717266694145#wechat_redirect) | [ChatGPT](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MjM5MDQ1NzE0MQ==&action=getalbum&album_id=2755574132938932227#wechat_redirect)

[StableDiffusion](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MjM5MDQ1NzE0MQ==&action=getalbum&album_id=2522130388924792834#wechat_redirect)  |  [Midjourney](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MjM5MDQ1NzE0MQ==&action=getalbum&album_id=2431149277830807554#wechat_redirect)  |  [进阶专栏](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MjM5MDQ1NzE0MQ==&action=getalbum&album_id=3206397423527428106&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MDQ1NzE0MQ==&mid=2247492822&idx=1&sn=8bdc6f2185f9d1a0289c33508a43513e&chksm=a646288c9131a19af61ac9e55fb16e2fd9d1674d94130c9b6e4dbe414672bf4172185ed467e4&scene=21#wechat_redirect)[2024.01](http://mp.weixin.qq.com/s?__biz=MjM5MDQ1NzE0MQ==&mid=2247492822&idx=1&sn=8bdc6f2185f9d1a0289c33508a43513e&chksm=a646288c9131a19af61ac9e55fb16e2fd9d1674d94130c9b6e4dbe414672bf4172185ed467e4&scene=21#wechat_redirect)｜[2024.03](http://mp.weixin.qq.com/s?__biz=MjM5MDQ1NzE0MQ==&mid=2247493332&idx=1&sn=854626cb81c82f6a5d4c66f006836240&chksm=a6462a8e9131a398f4b10a4486172154fd1f37f7d9b10625c7ca57cc3f94835647fcb946906e&scene=21#wechat_redirect) ｜[2024.04](http://mp.weixin.qq.com/s?__biz=MjM5MDQ1NzE0MQ==&mid=2247493625&idx=1&sn=ed65e35fd6b3e139caa6590a41d83fbe&chksm=a6462ba39131a2b549dad484d8cab8e5cb7417a6370485d28d4fce4e2076e0c6c2d860a0d570&scene=21#wechat_redirect)

[23.12](http://mp.weixin.qq.com/s?__biz=MjM5MDQ1NzE0MQ==&mid=2247492130&idx=1&sn=983b85028dc038bce8ec7e20db1589fc&chksm=a6462e789131a76e30a8897a4f17cf4baf52ee273fda029e3c70dade84c7a0fd3f4500b20fce&scene=21#wechat_redirect)｜[23.11](http://mp.weixin.qq.com/s?__biz=MjM5MDQ1NzE0MQ==&mid=2247491598&idx=1&sn=74eb4af6b3e1382a960969e0729493f2&chksm=a6462c549131a542e4854906f89976d5f4d3b2bdcc8bdf0bd05b898222dd9e9a0709068171ea&scene=21#wechat_redirect)[｜](http://mp.weixin.qq.com/s?__biz=MjM5MDQ1NzE0MQ==&mid=2247491180&idx=1&sn=73fa69da30b6ba36cf7b0205f8edf9bc&chksm=a645d23691325b20888ffce89f342699420a30b98995bd9dda1fcd6aebe860be2858d8569d3f&scene=21#wechat_redirect)[23.10](http://mp.weixin.qq.com/s?__biz=MjM5MDQ1NzE0MQ==&mid=2247491180&idx=1&sn=73fa69da30b6ba36cf7b0205f8edf9bc&chksm=a645d23691325b20888ffce89f342699420a30b98995bd9dda1fcd6aebe860be2858d8569d3f&scene=21#wechat_redirect) ｜ [23.09](http://mp.weixin.qq.com/s?__biz=MjM5MDQ1NzE0MQ==&mid=2247490667&idx=1&sn=7ae20fa53a62a925a6117f4c5f6007b1&chksm=a645d0319132592729355f02914db41605a145f746a59f4503be578b802b91bb11d1d58ad182&scene=21#wechat_redirect)｜[23.08](http://mp.weixin.qq.com/s?__biz=MjM5MDQ1NzE0MQ==&mid=2247490186&idx=1&sn=e82bf65ca48281d093372e860c6f5992&chksm=a645d6d091325fc622d0b72586c8109b8753053a4eb8adbd6a24113206968e0725abe374aeec&scene=21#wechat_redirect)｜[23.07](http://mp.weixin.qq.com/s?__biz=MjM5MDQ1NzE0MQ==&mid=2247489818&idx=1&sn=10d41d6631eb3be44d7e5d9ac0a5faed&chksm=a645d54091325c56ca5491f1772e9a2e3f677f948ec75de74146a2747b09940b9aea626a5ff0&scene=21#wechat_redirect)

[23.06](http://mp.weixin.qq.com/s?__biz=MjM5MDQ1NzE0MQ==&mid=2247489411&idx=1&sn=46b7d8f707d12ae4e608aff30140a6be&chksm=a645dbd9913252cf01521f8dfdfdca9a00300085bd5f44a04658db221a41d5af34fc96394b3d&scene=21#wechat_redirect)｜ [23.5](http://mp.weixin.qq.com/s?__biz=MjM5MDQ1NzE0MQ==&mid=2247488938&idx=1&sn=f908d6af7fb0e70c49fedd3982d9e922&chksm=a645d9f0913250e6ca824878c16aba9c6389e70c578fb3b0c1f4f20eb0c430c18d14b5e5ba1e&scene=21#wechat_redirect) ｜ [23.4](http://mp.weixin.qq.com/s?__biz=MjM5MDQ1NzE0MQ==&mid=2247488338&idx=1&sn=614d95ded3ff4a431a02ea33028b161c&chksm=a645df089132561e1db2847602bf43c7762d36f643251b1e40125766a9f7a402a1b7e4ae63b4&scene=21#wechat_redirect) ｜ [23.03](http://mp.weixin.qq.com/s?__biz=MjM5MDQ1NzE0MQ==&mid=2247487707&idx=1&sn=fdd2a9708cc4324bee0dfe4efb4e264b&chksm=a645dc8191325597869d9267f6f724c838e634069e71fd6c84da509d04f8b0b4e13c3b4ef794&scene=21#wechat_redirect) ｜ [23.02](http://mp.weixin.qq.com/s?__biz=MjM5MDQ1NzE0MQ==&mid=2247486800&idx=1&sn=937ecaee35dec57573dc5ba663ba622f&chksm=a645c10a9132481c84c5e178d4160c80c17f3ed1d08b3ac8e4ade35adec0c1fe5b95db951fa1&scene=21#wechat_redirect) | [2022](http://mp.weixin.qq.com/s?__biz=MjM5MDQ1NzE0MQ==&mid=2247485751&idx=1&sn=c7a56d44196429908ef07d00f8e01a12&chksm=a645c56d91324c7b08b2acaee1384d5ddc5f4fea3e58668a85b061981f23f06037d7dddf45b9&scene=21#wechat_redirect)

☞三连击支持**点赞 +****在看 **\+ 分享****👇