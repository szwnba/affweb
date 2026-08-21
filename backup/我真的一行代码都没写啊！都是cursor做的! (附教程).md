这几天，我在做一个小工具，功能是分析一个网站，然后生成一个这个网站的介绍页(其实就是导航站的收录网站的介绍页)。  

这个小工具很简单，主要的功能我没花多长时间就做出来了。但是，怎么把结果友好、美观地展示出来难倒了我。。。

幸运的是，有个AI编程工具---cursor，圈内的用过的朋友都说好！我抱着试一试的心态，玩了下，结果，超出了我的预期。

下面的这个网页，是我的小工具其中一个页面，全部是由cursor写的，我真的一行代码都没有写！

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4kia4RESc0DxEubOEfp8WAhSWx6VdF8qENC4xUWmHq77cHibfjmDxgquhpYbg4AC8ShUnxn2NynbDvsltTJ4ezSg/640?wx_fmt=png)

没有吹牛的成分，cursor的体验和效果，碾压了全世界的AI编程工具，包括github copilot(这货我今天退订了)。

cursor最让我佩服的地方是，它能让一个完全不懂编程的人，只需要通过语言描述，就可以做出很专业的网页。    

我这篇教程， 偏向于实战，主要讲解怎么从零开始生成一个漂亮而且专业的网页。

如果你有很多想法，但是苦于没有技术能力，那么这篇文章肯定适合你。通过这篇文档的学习，你也可以在10分钟内生成一个专业而且漂亮的网页。

本篇教程分为三部分：

1、cursor安装，注册

2、零基础用cursor生成网页

接下来，我就开始讲讲怎么下载、安装和注册cursor

一、cursor安装、注册

1、cursor安装

我们需要到cursor下载cursor安装包，cursor的官网就在下方

cursor官网: cursor.com

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4kia4RESc0DxEubOEfp8WAhSWx6VdF8qEorCF3KGvoicwxicah0kWGhzOHqUPzfFsSZTh6sqUdM3xEfPxZ6bSGhgQ/640?wx_fmt=png)
    

在下载cursor后，点击安装，苹果电脑上，应该会看到下面的图标

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4kia4RESc0DxEubOEfp8WAhSWx6VdF8qE42Lu4vRdaJiaAfUiare9XAE6B6mxSoKSNTATR7mjNibkjjcsfELUEVwJw/640?wx_fmt=png)

点击后，就可以打开我们的cursor页面了（可能需要预先安装vs code，百度查找如何安装即可）。

2、cursor注册

cursor不是免费完全免费的软件，Pro用户需要20$一个月，和ChatGPT plus一样。不过幸运的是，对于新用户，都是可以免费使用14天的。所以，我们只要多注册账号，可以说就能无限使用了。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4kia4RESc0DxEubOEfp8WAhSWx6VdF8qEsJ1R5Yxe6z89FRbBZmkScNelvmmuhNKTpkGsXfUm5qiaJeFLJwEZtqw/640?wx_fmt=png)

cursor支持2种账号登陆，github和gmail    

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4kia4RESc0DxEubOEfp8WAhSWx6VdF8qExDUAQ3MxAm13fZo3j9ECVfFXl8dndwEsqzJ7R0x6UMdqkicflCa6NUw/640?wx_fmt=png)

github帐号和gmail帐号注册，网上有不少教程，这儿就不多说了。

在注册了gmail邮箱或者github帐号之后，我们就可以登陆cursor，开始AI编程啦～

二、零基础AI生成专业漂亮的网页

在开始生成网页前，我们得先了解，我们要做的是什么网站，确定网站类型后，就可以让cursor生成大概的框架。

接下来，按照这个思路，我们先让cursor帮我们生成一个框架，就以个人博客为例吧    

1、根据网站类型，生成框架

我们先打开cursor，然后点击新建，根据提示，可以把我们的新建的网页保存到指定的路径

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4kia4RESc0DxEubOEfp8WAhSWx6VdF8qETrD2ZfW6biaQZjm9UKHwWibXf7MhcHDSicjsYZAJbyqLBmufxd26bwGDA/640?wx_fmt=png)

在最后一步，需要设置我们的文件名，我们可以设置为「index.html」，注意，后缀名一定要是.html

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4kia4RESc0DxEubOEfp8WAhSWx6VdF8qEUvU0CNia51c8J0xbc6kgqoicb8icQum3RO67vRFOqgpSo7JcsyHicdyIZg/640?wx_fmt=png)

完成了文件创建后，使用指令「command」 + L 打开对话窗口，如下图所示

把我们的提示词贴进去，然后按回车键，就可以让cursor帮我们生成网页了。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4kia4RESc0DxEubOEfp8WAhSWx6VdF8qE1hIFve10YlT6Z5HWWSlpPu1WGncnkiaOPjBcXJs3fCSb8PefHHaAmsA/640?wx_fmt=png)

在代码生成后，点击红框中的「Apply」按钮    

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4kia4RESc0DxEubOEfp8WAhSWx6VdF8qEolR3icnrTvSHEVOkzu2xib6poHsOwZ2l3krpbqvIhVibyibvzTqhYnjPFg/640?wx_fmt=png)

点击完成后，代码会自动的显示在我们编辑器的左侧，如下图所示：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4kia4RESc0DxEubOEfp8WAhSWx6VdF8qESiafHxQWkCwqaqicdO5RzZo1kNgH6dOnZ9Jp1ALUje642VJzPn5N6PlQ/640?wx_fmt=png)

点击「Accept」，我们就可以使用AI生成的代码啦～

保存之后，找到index.html，点击打开，可以看到下面的效果    

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4kia4RESc0DxEubOEfp8WAhSWx6VdF8qErfibO3PgmzJibxyziapnMPc6lTU1AR5ic8fZumkWnOjJia4XMsR8CWVLqeA/640?wx_fmt=png)

这个页面，看起来很素，也很难看，像是上个世纪的网页，不过没关系，这也是一个网页的框架了。我们在接下来的过程中，逐步丰富，逐步美化。

小结：对于某些类型的网页，不知道有哪些部分组成，可以指定主题，让AI罗列内容，然后在美化。

2、美化网页

在前面，我们已经生成了一个博客网页，不过这个网页实在太丑了，我们现在就用cursor美化一下

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4kia4RESc0DxEubOEfp8WAhSWx6VdF8qEI0sD66cwuafIwZ8E8d0lUXnwHYib910oQKl6koRVj6pTIY4ClWQpBUw/640?wx_fmt=png)
    

通过这个提示词，我们的相对来说美观了不少。

当然，我们还可以也可以试试别的风格

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4kia4RESc0DxEubOEfp8WAhSWx6VdF8qE1e712INUSOA5s3EDeJxDRf9ibmb47lE1GWvPh3VZrvShOGMlna3kC0g/640?wx_fmt=png)
    

cursor很快把我们网页的主题切换成另外一个风格了，整个过程不到10秒

小结：网页好不好看和风格有关，用AI可以很快切换风格

3、调整布局

我们在前面的过程中，调整了网页的风格，设置了科技风，同时又切换为清新风格。

不过，我们网页的布局看起来还是不好看。

博客的标题居中，但是内容却靠左，显得非常不和谐。我们也可以让Cursor进行调整。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4kia4RESc0DxEubOEfp8WAhSWx6VdF8qEKk9gut6oiaZBUD1RYck1ibQyOl3W2sdUbWGjvE4CuP3d9uNcmU22XA4A/640?wx_fmt=png)

网页的布局相对前一个来说，已经有所改观了，但是还是不好看，那么我们可以在调整。

当前布局仍然不好看，右侧的区域太空旷了，整体不协调,请继续调整。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4kia4RESc0DxEubOEfp8WAhSWx6VdF8qE49ABiaiarwqgIvIVbM22kFNJOaxDXOSmC2gjPiaHvYy2Ro6pThdG0gHqg/640?wx_fmt=png)
    

经过一轮调整后，整体协调了很多，当然了，如果觉得不好看，还可以让cursor继续调整

小结：布局调整时，不用明确调整哪些布局，让AI帮你选择好看的布局。

4、添加内容

我们已经完成了整个网页的布局和主题了，如果我们想在网页上再增加新的内容该咋办呢？

还得是看AI，比如，我想在网页中增加个人介绍，我们也可以让AI帮忙加。

请帮我加上个人介绍，要求有头像，有年龄介绍、职业介绍、邮箱

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4kia4RESc0DxEubOEfp8WAhSWx6VdF8qErgNLGXCzCyXVRvvNIEKGAe4InEyK0BzEn6k92C4iaJoQFNiaWv9SN9nw/640?wx_fmt=png)
    

cursor很快帮我们添加了头像模块，不过。。整体看起来不好看，我们可以要求再次调整

请帮我调整个人介绍模块，要求美化，并且调整位置和布局，让整体美观

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4kia4RESc0DxEubOEfp8WAhSWx6VdF8qEMaZTMZrjPP60NicGPN70stc0O1rNrk8cAKicJtuNDcB9uiccEetBqV4RQ/640?wx_fmt=png)

调整之后，整体美观了很多。

由于时间原因，本次的分享到此结束啦，后续，我将再次手把手教大家用Cursor写一个有用的chrome插件，感谢阅读～