![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWRHqMIA5wZxSRGYVE93r4Yk1G1NaOHruKw9BlSBjvGJ4DndEpsibwguP4zsDC5trwvgBrSZWQoxcqg/640?wx_fmt=png&from=appmsg)

上周末给上海破局会员线下做了一场"RPA+AI公众号爆文实操与爆文实战经验"的主题分享，这次分享给我带来了十几个铁杆的RPA学员，RPA+公众号爆文的这个赛道依然很火爆。

![](https://mmbiz.qpic.cn/mmbiz_jpg/WkINSo9GVWSwdwcd1yOibGqomqnmZ17u6L3qZ3YbpibqhIsFsAB6q7icwqh6XoaMoAD2Fxia4qGiaVychm4VHl4mblQ/640?wx_fmt=jpeg&from=appmsg)

借这次分享的机会，我把[手把手教你用RPA写一个公众号AI Agent（一）](http://mp.weixin.qq.com/s?__biz=Mzk0MTYxODA5MQ==&mid=2247483795&idx=1&sn=f6dfa5763a39ee54ef8bcd9465c8b69f&chksm=c2cee757f5b96e41dd6647809513061388897cd951a30d29595fb2c895018717041d58c6b114&scene=21#wechat_redirect)中分享的采集公众号爆文的文章进行了升级优化，升级之后的RPA机器人可以一次采集多个对标账号的文章，且增加了更多的异常处理机制。

话不多说，直接上干货，详细拆解升级之后的RPA开发流程。

一）前提条件  

前提条件通常指的是在机器人开始执行其自动化任务之前必须满足的条件或需求。这些条件确保RPA机器人能够在适当的环境下运行，并且能够正确、高效地完成既定任务。

例如提前打开网页并完成登录，准备好需要录入的清单等等。

搭建本机器人的前置条件：

1.  浏览器打开微信公众号后台管理，并手动完成登录。
    
2.  在桌面上创建叫“公众号文章”的文件夹。
    

![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWSwdwcd1yOibGqomqnmZ17u6bhCDDZRgUCY4ZBdo1IeeSau8PicwNhz2LHGhT1YibaSuXRBe1wriaQ3LQ/640?wx_fmt=png&from=appmsg)

3.  在“公众号文章”里创建“账号列表.xlsx”文件，并新建一个叫“账号主列表”的sheet页，在该sheet页中的第一列填写对标账号。
    

![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWSwdwcd1yOibGqomqnmZ17u6tZQ1dSjkFibrDibqVzwibFoZgM2ibBQepJxyd56VhRZqoDvpZuMEkFKClQ/640?wx_fmt=png&from=appmsg)

二）定义变量

为了更加灵活地控制 RPA 机器人，设置变量，方便流程中引用。

根据需求，需要设置以下变量：

【**采集页数】** : 每个账号本次采集的最大页数，如果页数不够，则采集完该账号文章。

**【开始页码】** ：顾名思义，即从哪个页码开始采集。

【**文章存储根文件夹**】：默认值为桌面上的“公众号文章”文件夹，也可以自定义一个文件夹。RPA自动在这个文件夹下创建所有的对标账号。RPA也会自动地在对标账号文件夹下创建以文章名称命名的文件夹，所有的文章的内容和图片都会保存在这个文件夹之中。文件夹的层级关系如下：

![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWSwdwcd1yOibGqomqnmZ17u6d927UwCmx7zicHZ9DwmxrP4eV817hb8d9nWzXeMhibtic2vWryPmicL9Sw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWSwdwcd1yOibGqomqnmZ17u6d927UwCmx7zicHZ9DwmxrP4eV817hb8d9nWzXeMhibtic2vWryPmicL9Sw/640?wx_fmt=png&from=appmsg)

【**账号列表文件**】：存储对标账号列表的excel文件，保存在“文章存储根文件夹”的目录下。

三）打开文章查找页面

1.  点击图文进入编辑网页
    

![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWSwdwcd1yOibGqomqnmZ17u6wLQT3yW7Ba9upjHd6PqZHSe5B0kXA4zbgevTtYiaDAFZ7ibxKmn5JWTg/640?wx_fmt=png&from=appmsg)

2.  点击超链接
    

![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWSwdwcd1yOibGqomqnmZ17u6pzI026LmYpNOb9HxsjRemsb2OfSribSG9sGDDDxCtA27UdwbWcQ21VA/640?wx_fmt=png&from=appmsg)

3.  弹出编辑超链接页面
    

![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWSwdwcd1yOibGqomqnmZ17u6l5qaonwljesAyjzXMWiav1pKdoJflKEWHyVaXT77c5P8VmicW4E0kEpA/640?wx_fmt=png&from=appmsg)

转换为RPA流程图

![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWSwdwcd1yOibGqomqnmZ17u61BU1TMwmdl0P2toatRvZNmBsNZqFYbl1VChWqAtxXYWXEz11OurU5Q/640?wx_fmt=png&from=appmsg)

### 四）输入对标账号名称，查找文章

**实操流程如图：** 

**![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWSwdwcd1yOibGqomqnmZ17u6Jv2DVevic9EQ8HeBibycREL5BW5ontz4ibVZick8T2R2ScXgvAD3jrcVtA/640?wx_fmt=png&from=appmsg)**

**![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWSwdwcd1yOibGqomqnmZ17u6hKHTSyboxXB8e0cQDgqia872HDAOdh5rBfpWd8L2FLX7e8Ir5pFo4pw/640?wx_fmt=png&from=appmsg)**

![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWSwdwcd1yOibGqomqnmZ17u6TiaQicDO85ic2zJngk1s3wtHVcFErYhjR0tM4kYPt0AJCJtiau2tWfd8nw/640?wx_fmt=png&from=appmsg)

转换为RPA流程图

![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWSwdwcd1yOibGqomqnmZ17u6m1z3uQTu1xj9UBHvj601iaIwGn3jne1ib021BKdINebfvbpIypia1V0Kg/640?wx_fmt=png&from=appmsg)

五）根据预设的页码循环列表

**实操流程如图：** 

![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWSwdwcd1yOibGqomqnmZ17u6fGf5FWhg1A6Qlj8BdwNjlNeaxLcRTwJ7XNGOKovFmJiccQkziaIgiaJZg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWSwdwcd1yOibGqomqnmZ17u6pdhn86upwbKzkx1acq8UubPyLAyVgRqZZSo5xMv45stNzBqGqudrbw/640?wx_fmt=png&from=appmsg)

**通过 RPA 流程图，可以更加直白理解：** 

![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWSwdwcd1yOibGqomqnmZ17u6SWBiclXGhiakianbgShoIxpfADneSj1dwcvZyZjve6396icYuqZSdib2BmQ/640?wx_fmt=png&from=appmsg)

说明：

1.  主流程中有三层循环，分别遍历账号列表，采集页面列表以及当前页的文章列表。
    
2.  采集页面列表遍历结束的条件有两个
    

1.  已经遍历到最后一页，没有下一页按钮存在
    
2.  已经采集完了用户输入的采集页数
    

六）采集文章内容

**实操流程如图：** 

![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWSwdwcd1yOibGqomqnmZ17u6e3fN2KsOWbw9LCjM8pAAVb6I4yXWreAicb2SsvuzGR6kbsBjDasxO6g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWSwdwcd1yOibGqomqnmZ17u6gj8iasCMNydk5icCzEDt7pLgQibm851C3XGk8RkxyqIThDI5f3pJfZZqg/640?wx_fmt=png&from=appmsg)

**通过 RPA 流程图，可以更加直白理解：** 

![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWSwdwcd1yOibGqomqnmZ17u6UK9ibIXT1X3tSoDXicxJwSwtEYZsdup8R2V9lnFsIibfko08ZPRYT6NMQ/640?wx_fmt=png&from=appmsg)

七）全流程  

![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWSwdwcd1yOibGqomqnmZ17u6yqs3uQxbxVBYZhOibZvWqwdvXEKUXMhm5evc77LCpuPbwG6JlRFGWdA/640?wx_fmt=png&from=appmsg)

八）全流程完整指令

因流程比较复杂，所以进行多级子流程封装，方便进行调试和流程复用。  

![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWSwdwcd1yOibGqomqnmZ17u655UoUMqAa7Vu5yGe3iaJicK0mIicJOgZJphcKfgViap9CFsR1g9GFqR2pQ/640?wx_fmt=png&from=appmsg)

主流程完整指令

![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWSwdwcd1yOibGqomqnmZ17u6oXaxkcWibk6gL7ggZIymAibBOLBGIx5hYibM5060ADEic0OWAAfZDicC5tA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWSwdwcd1yOibGqomqnmZ17u6eQ8etiacQibW3xVyffBlre29xMhiaiahz5oTh1129BgM4p7g5KSbgnGhEQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWSwdwcd1yOibGqomqnmZ17u6zZ8ib8ApWGgEicl1icsVWwzKWk4WYZjon9kOFaPsYMU4rt4tx0vdRLvOg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWSwdwcd1yOibGqomqnmZ17u6ibI6Tp1FNHDZpW4l1W2aBDlMEzgjpgGNyXD7g9CzrhAX0LKFMnwOkvA/640?wx_fmt=png&from=appmsg)

**采集当前页文章流程****指令**

![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWSwdwcd1yOibGqomqnmZ17u6K1qQxauRjLic00zU8nIicP28ibLkEaKbJEIQKEnpqSOMQeyBOzr9YaDBg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWSwdwcd1yOibGqomqnmZ17u6VuFgcUFGPLpg7aIqDYqcibtoqtOu5oVkrR4XKuZCSFWbwXiaFjZMkJ5g/640?wx_fmt=png&from=appmsg)

**采集单篇文章流程****指令**

![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWSwdwcd1yOibGqomqnmZ17u6ahWlgcpr0j5Hv6HFd4l3lGayMxoTohibKxdLibUpMtJwmO6vuMB7P8uQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWSwdwcd1yOibGqomqnmZ17u6FVdttFLiakpL3U8IkGl14Q96Ecj4IyucM6oME3VTh3tYKp9J3YryicLw/640?wx_fmt=png&from=appmsg)

**下载图片流程指令**

![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWSwdwcd1yOibGqomqnmZ17u6cAwMS03NHR1NoAte4IFcMedFfeAfhqibfSFBWmpbKsjspbZYqFo5IbQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWSwdwcd1yOibGqomqnmZ17u6rDZTT7RrqwjJFcuEKesBlD1KCm9A3icw2K6ptn3Xv8CGMqc1KnLtxPw/640?wx_fmt=png&from=appmsg)

因文章篇幅有限，无法一一展示细节。如果你对搭建该RPA机器人感兴趣，加我Fu_prompt,发送“公众号粉”，我拉你进【RPA+AI技术交流群】，也欢迎加入我的知识星球。  

![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWRHqMIA5wZxSRGYVE93r4Ykib1seHw08IoZagGZKDJll7vTQcicZDibY4tSEyBtbUuhic7rI72QXnFFtA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)