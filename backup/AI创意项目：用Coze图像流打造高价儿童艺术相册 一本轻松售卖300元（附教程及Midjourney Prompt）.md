****![](https://mmbiz.qpic.cn/mmbiz_png/c8kiaxXICUoXoR2c7yg75xEBFqslsqqCBATWMGVvMA0P2mTjbQiaWh15fHIcbPubURRhenJDOuNUEd7rJ6ibybbvw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)**********关注我，记得标星⭐️不迷路哦～******

最近，我在推特上看到一个非常有创意的AI项目，通过人工智能技术，将孩子的照片和历史上十多位伟大画家的风格相结合，**生成一本个性化的儿童书籍。** 

这种画册的意义在于拉近了孩子和艺术家们的距离，将他们自己置身于名家画作中。用来教育孩子了解历史上的著名画家真是再好不过了。

![](https://mmbiz.qpic.cn/mmbiz_jpg/c8kiaxXICUoXI874PN8YwwOoc2uhiaicvCibObYVnFhqPibf5npPcdBTBGqStASVLKsUNVoSL2ianicXz2sicV1Wq5r9zg/640?wx_fmt=jpeg&from=appmsg)

网站地址:https://selfarama.com/books/my-book-of-art-history

可以看到，国外这家网站它生成实体书的报价是比较高的，平装书都卖到了39美元，粗略一算也要300多块了。**精装版卖49美元，将近400块了。** 

**内页效果是这样的:**

![](https://mmbiz.qpic.cn/mmbiz_jpg/c8kiaxXICUoXI874PN8YwwOoc2uhiaicvCibM6iaRNDeOGTVwVxwsrhcicTcjlE1sSNTiaV0icPzJkkjGMEJf8ttz20PIg/640?wx_fmt=jpeg&from=appmsg)

看起来还不错，这类的书籍如果有一个相对实惠一些的价格，相信很多家长都会买单。

我突然有个大胆的想法，咱可以利用AI制作这样的内页，然后自己拿去某宝打印，这不就妥妥降低成本了吗。我大概搜索了下，某宝打印画册大概是十几块到二十几块，**如果我们为其他家长提供这样的服务，定价良心一点，268一本，赚个辛苦钱。** 

**那么这个内页的图片如何制作呢，下面是详细教程:**

**制作这种实体的画出主要就三步:**

*   将儿童照片和画家风格融合
    
*   将生成后的照片排版成画册
    
*   成品打印
    

**一、将儿童照片和画家风格融合**

想要将儿童照片和某些画家风格融合，方法有两种:

**1、使用mj，通过使用--sref来参考两张图片进行融合**

这里我拿戴珍珠耳环的少女举例

prompt示例:Johannes Vermeer's painting "The Girl Wearing Pearl Earrings"， oil painting --sref （画家代表作）--cref (儿童照片)--cw0--ar3:4--niji6

![](https://mmbiz.qpic.cn/mmbiz_png/c8kiaxXICUoXI874PN8YwwOoc2uhiaicvCibJCCC1INx2icEwLtoqhgzJ67TeVE9vewjQtzL8z2lBZCvmFszeypibWQg/640?wx_fmt=png&from=appmsg)

**2、使用coze图像流**

之前我们有分享过一篇给马斯克上白猫写真效果的图像流教程，使用的就是coze图像流，不清楚的可以点此访问:[笑死！我用Coze图像流给马老板来了一套汤姆梦中情猫写真 附Coze保姆级教程](http://mp.weixin.qq.com/s?__biz=MzIzNjg3NTUzOA==&mid=2247489486&idx=2&sn=b38546a11a0dc7cd07326b7ef7ba406a&chksm=e8d06db3dfa7e4a5ad2116bfdfd1c83879e11043266862392ba2484bcd951aa14d7715088f67&scene=21#wechat_redirect)

怎么创建图像流的步骤这里就不赘述了。

名画风写真这个，coze里面是有直接已经生成好的图像流模板可以调用的。它们用的示例也是戴珍珠耳环的少女。

我们直接在探索图像流这边**选择名画写真的这个模板，创建副本即可。** 

![](https://mmbiz.qpic.cn/mmbiz_jpg/c8kiaxXICUoXI874PN8YwwOoc2uhiaicvCibUqPXEwsWRqYvsM4jYC0BrszPp9HpPibS32sp78F4nkP5a477mt4ibiaVA/640?wx_fmt=jpeg&from=appmsg)

然后就进入了这个工作流的页面，可以看到这已经是一个完整的工作流。**所以我们制作第一张画册图片就不需要动了，直接用就行。** 

![](https://mmbiz.qpic.cn/mmbiz_jpg/c8kiaxXICUoXI874PN8YwwOoc2uhiaicvCibOOdOia8eNIYy8vZZb2biaPYSuiaicp7YsqibGmkLIicwgHw8aa0o0CyHZvng/640?wx_fmt=jpeg&from=appmsg)

点击右上角的试运行，直接上传你要融合的儿童照片即可。运行完成后，保存图片。

![](https://mmbiz.qpic.cn/mmbiz_jpg/c8kiaxXICUoXI874PN8YwwOoc2uhiaicvCibA6VxPGPg9dIxSUTknbtZGcqmIVHbC0lgMov7XqVqRuj34IChfa2FwQ/640?wx_fmt=jpeg&from=appmsg)

那么其他图片怎么制作呢?很简单，只要稍微修改一下原来的工作流就可以了。

第一步依然保持不变，输入的变量就是用户要上传的照片。

![](https://mmbiz.qpic.cn/mmbiz_png/c8kiaxXICUoXI874PN8YwwOoc2uhiaicvCibpPiaiaOUI1rq2GYln0bftvEDib6Q8SwsjKSFdibsuicl4LHTObh57F3P5OQ/640?wx_fmt=png&from=appmsg)

然后，我想更贴近原画家画作的风格，这里只用融合原图是不够的，所以我添加了一个步骤，文生图。第一项和第四项这个是图片高宽，这里大家可以自行设置，不做过多解释，第三项是比例，

**生成图像的宽高比例，以下数字分别代表这些比例:**

1（1:1）、2(4:3)、3(16:9)、4(3:4)、5(9:16)

第二项就是文生图的提示词，比如我要弄的是梵高的自画像，那么，提示词简单设置如下:

a little girl，solo， Van Gogh's self portrait style， oil painting

![](https://mmbiz.qpic.cn/mmbiz_png/c8kiaxXICUoXI874PN8YwwOoc2uhiaicvCibjsrfNicRgkhoOE6jbPib0Ds0xh0MkkYuppz8yLPicHticyYI7QugbsPLgQ/640?wx_fmt=png&from=appmsg)

然后将这一步链接到原来的融图那一步即可，其他可保持不变。

![](https://mmbiz.qpic.cn/mmbiz_jpg/c8kiaxXICUoXI874PN8YwwOoc2uhiaicvCibJTAUAwhn9IqarRjArmYEdD1SX0xicJCGLx8ptt0zrjdHjrDicXZOeGKg/640?wx_fmt=jpeg&from=appmsg)

完整流程如下:

![](https://mmbiz.qpic.cn/mmbiz_jpg/c8kiaxXICUoXI874PN8YwwOoc2uhiaicvCibvaDJKp0IiaDK8WuGGuZ7CA6h5IUZqhMecAneGpXsK29QlKdEal5XxYA/640?wx_fmt=jpeg&from=appmsg)

完整的工作流完成后，点击试运行即可。

![](https://mmbiz.qpic.cn/mmbiz_png/c8kiaxXICUoXI874PN8YwwOoc2uhiaicvCibL0hXg9ficINA3MXBS5qWQPQdxoAre5zicxDAY4ejtfld7Vw6rYaLbWug/640?wx_fmt=png&from=appmsg)

以下是输出图片的效果。满意后，保存图片即可。如果你想要用这个做项目，长期复用的话，记得发布，这样这个模板你就可以留下反复使用了。

![](https://mmbiz.qpic.cn/mmbiz_jpg/c8kiaxXICUoXI874PN8YwwOoc2uhiaicvCibQTcDPh6HdW8fwfeMR6bkSap75tFBJRyDianAD3hKibtmbKOGQiaGt9f2w/640?wx_fmt=jpeg&from=appmsg)

**二、照片排版**

这一步很简单，大家可以使用自己顺手的工具，PS或者Canva，将文字和图片排版好

这里我用PS直接制作

![](https://mmbiz.qpic.cn/mmbiz_jpg/c8kiaxXICUoXI874PN8YwwOoc2uhiaicvCib4A3icXjiaYmf27sYwQr3bpW0UVSIwJudWHIozHic1uqHDWZR7BFuJ7kZQ/640?wx_fmt=jpeg&from=appmsg)

注:一般打印画册对尺寸和图像质量有要求，最好提前咨询好卖家合适的尺寸。

**三、打印**

排版完成后直接找某宝卖家打印，如果自己有打印机的也可以自己打印，画册一般使用铜版纸效果会比较好。

![](https://mmbiz.qpic.cn/mmbiz_jpg/c8kiaxXICUoVic0oKaeldrWiaEjol9G9Wjt7gsbcDSMOoiczA3O7OAuYHpJibbialCicKEV1effPoExTznSDZueiaGO7xw/640?wx_fmt=jpeg&from=appmsg)

↓ 点击阅读原文，进AIbase知识库