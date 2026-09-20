大家好，我是萝卜~

上次写 **WorkBuddy 加飞书跑公众号内容飞轮** 那篇，后台好几个朋友来问，能不能把“文章写完到进草稿箱”这一段单独拆开讲讲。

以前我发一篇文章，排版、封面、配图这几步加起来要花起码大几十分钟。现在这一块我基本不碰了，文章丢给 WorkBuddy，过几分钟它就排好版、配好图，然后直接就在草稿箱里了。

**文章交给 WorkBuddy，排版、配图、封面和草稿创建都可以自动完成。** 

靠的是 WorkBuddy 加上我自己做的两个 skill：

•一个负责文章排版

•一个负责文章视觉

•两个 skill 都已经上架 WorkBuddy 开放平台

今天从头到尾跑一遍，照着做就能用上。

如果你对于 WorkBuddy 和飞书还不太了解，可以先看看这篇文章：

[用 WorkBuddy + 飞书，手把手教你搭一条公众号内容「自动飞轮」](https://mp.weixin.qq.com/s?__biz=MzkwMzc1MzI0NA==&mid=2247500974&idx=1&sn=7ca8c40a6b46d517c2342c342df0650a&scene=21#wechat_redirect)

01准备工作先完成公众号接口配置

首先需要先获取自己公众号的开发者信息。

这是公众号平台官方提供的能力，**属于正常的接口调用，不存在违规行为**。

01先看懂完整流程

我们整个流程大致是这样的：

**手工写完文章（或者自动生成文章）  
→ 使用 WorkBuddy 的 skill 配图和生成封面  
→ 使用 WorkBuddy 的 skill 排版  
→ WorkBuddy 调用接口创建草稿  
→ 打开公众号后台检查  
→ 确认无误后手动点击发布**

![](https://mmbiz.qpic.cn/mmbiz_png/zovwWMPh4Bzq0mtibyrF8goTqoiaSm09MXVDxQlkEzSSzjvKcWLAqhHxybeGlSCQJbIDj2zwI9o3jxibMdSQ6SSiaeclyberO1ehTClBV38h08Q/640?wx_fmt=png&from=appmsg#imgIndex=0)

02登录微信开发者平台

先登录微信开发者平台，扫码登录即可。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zovwWMPh4BxPicMZUTUyrNwcPm9Cy6bN5yibAAMF4vd9Ag4lG6a8y0XjjmIKVwcicJ7jWGHoAzRg12aveBfB53S2OSUBdSiasKypduAp8s4Koqk/640?wx_fmt=png&from=appmsg#imgIndex=1)

登录之后，到“我的业务”里面点击“公众号”。

![](https://mmbiz.qpic.cn/mmbiz_png/zovwWMPh4ByGfZTx1KaBAW9YiarZkO1cneQaD49GoJ61c6tkQIFaEfMq3pL96FCk7bYd5AnBmJye01cs7gtCBBicibtdcGK1Kc2gfrH1D4ricD4/640?wx_fmt=png&from=appmsg#imgIndex=2)

03获取 AppID 和 AppSecret

进入公众号配置页面后，就能看到对应的 AppID 和 AppSecret。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zovwWMPh4BzXL5LlOvPX4gWonsbUmru3xiarP762byzaubkHKVtt8Q5JnicB6BjWOOVL00SOS94ALmsNEdDEe8JLhYIChBTmicqXGU7EKC7WaM/640?wx_fmt=png&from=appmsg#imgIndex=3)

安全提醒：****AppSecret 非常重要，千万不要在公开场合暴露出去。**   
无论是截图、文章、聊天记录，还是公开发布的配置文件，都不要包含完整的 AppSecret。** 

04配置 API IP 白名单

公众号接口还需要设置 API IP 白名单。

一般来说，可以在百度搜索“我的 IP”，获取当前使用的公网 IP 地址，然后将它填入公众号后台的 IP 白名单中。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zovwWMPh4BxxLJqtHPBQYu29vl7SriatWmzNBaDWYJ5vzYCgeYgzUJRuFQ955PCzXCt84lXwdiadFw28coEVXsWncJsRfcrL8OH7rC8HeFb9I/640?wx_fmt=png&from=appmsg#imgIndex=4)

到这里，准备工作基本完成了。

02让 WorkBuddy 完成一切先跑通接口流程

下面的事情，其实都可以交给 WorkBuddy。

我把相关提示词发送给 WorkBuddy 后，它就会一步步帮我完成后面的配置和测试。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zovwWMPh4BxFOOeSPkwoIV9iaTQzx3Q5F8JeVtqclYuMr8tSd46K4ZD0ibQcf9QemJPWFFCTT9SZQCJ3AHroZeibG2pgeO6WFwwpPqhHhdJwLo/640?wx_fmt=png&from=appmsg#imgIndex=5)

很快，WorkBuddy 就帮我测试好了，一切都没有问题。

![](https://mmbiz.qpic.cn/mmbiz_png/zovwWMPh4BwCZiccGJmmQPSKuiaKh8JGmEicNwnCSAibdd9mibvglXOdDicJSLibdXEzdwOV3rFk0nH0E5Cfw4t9zlHrKow6QKZBVTkqPpNhBRfv9Y/640?wx_fmt=png&from=appmsg#imgIndex=6)

已经可以在草稿箱看到这篇测试文章了。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zovwWMPh4BwicjyPOPiaJhFNHgoibaMmD5ANFiaKuJHTIqKmfUKgD3gagNld2Aia6NNKyT7xEhVo3sS6E2ibByQXQlKLkpiatX46YffnC7Y70oic7to/640?wx_fmt=png&from=appmsg#imgIndex=7)

流程跑通之后，就可以让 WorkBuddy 把这个过程做成一个 skill。

这样以后就不需要每次都手工提供 AppID 和 AppSecret 了。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zovwWMPh4Bz9pCxiblm7ZtglODoxmYLrWNu3rgdyIOZkgRnjXApDnrzvhxSrSYgLGIaqeBSiaMtYPvsclYdO2pF7J1JrReiaLcsyI6TUicohyVg/640?wx_fmt=png&from=appmsg#imgIndex=8)

**建议先用一篇测试文章跑通完整流程，再将它封装成 skill。** 

03两个自建 skill文章排版与文章视觉

下面再来说说两个自建 skill。

这两个 skill 都是我开发的，用来辅助公众号日常运营

•文章排版

•文章视觉

我已经将它们上架到 WorkBuddy 开放平台，目前已经审批通过，大家在 WorkBuddy 的 skill 页面就能搜索到。

![](https://mmbiz.qpic.cn/mmbiz_png/zovwWMPh4Bw0eRzV2nybIv78WB6lsyKqnPibYXSW33dQtibstO2RXa7vPJ08LSicatxcpM2V0XpvucOmppiaqVRxbiavJiag69fG7p15rFGrBB4Fs/640?wx_fmt=png&from=appmsg#imgIndex=9)

直接在 skill 广场搜索即可。

![](https://mmbiz.qpic.cn/mmbiz_png/zovwWMPh4BweAlY6Jdia0hvX6xtjFsxrw9h4k9cS9MzntIRw2YqY7DAXHYDiatCbxIQic5vImKfuFs5AThYrQeHfiaaTPn4ib0EoKH257B4vfxZQ/640?wx_fmt=png&from=appmsg#imgIndex=10)

![](https://mmbiz.qpic.cn/mmbiz_png/zovwWMPh4BxFRY10X1E2IDbwWNCQf60RcpEsKDoicE1nm2DI4P5k6x2UwyCDczySUNdfaaC6HYh34MeriancicflBBo16SMDDPDGSmWfYQtyfw/640?wx_fmt=png&from=appmsg#imgIndex=11)

使用上面两个 skill，可以极大地缩短公众号的写作流程，真的值得去试一试。

04跑一遍完整流程从飞书文档到公众号草稿箱

比如我飞书文档上有这样一篇文章。

如果是以前，我会先下载为 Markdown 文件，再复制到排版工具里面进行排版；封面和配图则会放到 ChatGPT 里面生成。

一整套下来，纯纯是在耗费时间。

![](https://mmbiz.qpic.cn/mmbiz_png/zovwWMPh4Bw2cP6m1bNy0QxZTogT9IcC0ZKdbvnfibJ0Sib2UIM0UYpXVnZcBnHSiaKF92D1d8KUOrS56gD3A5vCXdjbzAIMTsXEnWWo4qzJGU/640?wx_fmt=png&from=appmsg#imgIndex=12)

现在直接交给 WorkBuddy 和相关 skill 就完事了。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zovwWMPh4BzibtnH3eOiag4v7HcrV9DGic8zc8kvx3pVtwIut5NIVhMF92eiciblheLxMIISicDatHswPMTfCiamVfLGynojkFGVpM2gpkuUPzYkAA/640?wx_fmt=png&from=appmsg#imgIndex=13)

很快，我们就能得到想要的产物了，包括：

•已经排好版、可以一键复制的 HTML 页面

•公众号封面图片

•文章内文配图

![](https://mmbiz.qpic.cn/mmbiz_png/zovwWMPh4BzoMuf2WKewuiajF2Ww95hLzNhRj9qfZmsvBOlvvdQicPLdkeawuicIIOJoJlGrJXwhmh2Mpg8qHRQicdPYularHY5J0EHP2ibABHfc/640?wx_fmt=png&from=appmsg#imgIndex=14)

文章也安静地躺在草稿箱里了。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zovwWMPh4BzT5RynyazVDEcGtx67zuwcM4rhL89tCGvwNAb8h8fPyURMen3icbE9icjPBlpV4eTtnoqic4mjAVfCrRQoyXOPD6Odytw1fwHG7U/640?wx_fmt=png&from=appmsg#imgIndex=15)

05让 AI 自动写文章先打底，再人工修改

当然，肯定还有朋友想要更进一步，**连文章也不想写。** 

下面再演示一下，怎么让 WorkBuddy 自动写文章。

其实我自己的感觉是，对于偏理论的内容，让 AI 自动写文章还是可以的，偏教程类的文章就算了，因为教程需要个人感受和大量截图、视频才真实，纯 AI 写出来的教程，读者很难真正信服。

情感类、时事类等赛道，也可以让 AI 先打底，但最能打动读者的，肯定还是你的个人特色。

所以这里展示的自动写文章，只是展示一下 AI 目前所能达到的能力，**不代表你可以什么都不管。** 

01使用提示词生成文章

Plain Text

以飞书文档中“OpenAI”目录下的文章为写作风格，写一篇介绍AI基础概念的公众号文章，包括不限于skill，mcp，Agent，Prompt，Context，Tool，Memory / RAG， Workflow，Evals等等。并使用 skill 进行去AI味处理。  

![](https://mmbiz.qpic.cn/mmbiz_png/zovwWMPh4BwamRFD1yjFazcF36p9a3HSPXM4g2RD3CUYo9N9EgetNSGOhrhlNZyR4CjM9st4a866ouYgSxT7qPRfGWrxZ6rPJFP9I4R9Yu4/640?wx_fmt=png&from=appmsg#imgIndex=16)

细心的朋友可能看到了，我这里的“去 AI 味”提到了一个 skill。

这是网上一位大佬开源的 skill，据说是从 **283 万字的语料** 中整理得出的。我用过，确实比一般的去 AI 味工具要好很多，推荐给大家。

后台回复“去AI”获取。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zovwWMPh4Byfb9G2J9hOslnduO5kI0bVtxZP7lLtHe7LAY7wnx5ocHJISdmDYJQ52w1VxHOtQJVHbyeQ1BBwYSBzzcrwWXvjlHoFda53ncM/640?wx_fmt=png&from=appmsg#imgIndex=17)

很快，我们就能得到一篇不错的 AI 科普文章。

因为我没有要求配图和发布到草稿箱，所以 WorkBuddy 只生成了文章。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zovwWMPh4BxiaaQzZ7UmlNiaHsBHrv6fXylPoBybDQQRrHoL6oenzf05xgMonam6YRNOlIdibTicaEo3mtZwtuKlJV2u1Bh75WByaK5qic2tYbT8/640?wx_fmt=png&from=appmsg#imgIndex=18)

02继续让 WorkBuddy 配图并创建草稿

如果还想配图和发布到草稿箱，只需要继续说一句话

Plain Text

为上面的文章配图并生成封面，并发布到草稿箱  

![](https://mmbiz.qpic.cn/mmbiz_png/zovwWMPh4ByDicCdWvCMDAQBwaq1un9b8yPAKs2w1XeFQzxUNicsTIqMbm3SeUmhAL0seeqbB4OS3q3GNkpp82qmUp9pHFp5icV3Fz2JkLHqu4/640?wx_fmt=png&from=appmsg#imgIndex=19)

看到没有，还是太方便了。

06写在最后自动化不是替你负责

看到“公众号自由”四个字，很多人会以为从写到发全都能甩手。

但我这套流程省掉的，其实主要是

•排版

•配图

•制作封面

•上传草稿

•其他重复性的体力活

**自动发布我是绝对不碰的。** 

AI 把稿子送进草稿箱就行了，之后我会打开后台从头看一遍，确认无误后再手动点击发送。

至于写什么、截哪张图、踩过哪些坑，这部分还得你自己来。

对我来说，公众号自由就是

**把时间从重复操作里省出来，多留给选题和文章本身。** 

你也可以先去 Skill 广场搜索“文章排版”和“文章视觉”，拿一篇自己的文章试试，看看它能替你省下多少时间。

* * *

以上就是今天的分享，觉得有帮助，帮请帮一键三连：**点赞、转发，再看**和**留言**，你的反馈对我很重要！