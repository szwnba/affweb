这个是现在正筹备的项目中的具体一步骤，可以说是十分关键。

废话不多说，直接来看操作步骤。

如果暂时用不上，可以先关注收藏，我后面会慢慢把这个项目的具体步骤更新到公众号文章上。  

**01安装 python**

需要先安装 python 配置，此处需注意，必须要3.10及以上才可以。  

打开 python 官网，安装 3.11 版本即可  

> https://www.python.org/downloads/windows/

![](https://mmbiz.qpic.cn/mmbiz_png/Z6gDnRr767PsgZ2NLmHyjT77taZp6kyoHmHqibg1GcoU2QAvUVDx47Xn4VBZ5Hric3ic4cZ9nYWJ53Kzh8cdRbFkA/640?wx_fmt=png&from=appmsg)

注意，下载好安装时候，一定要勾选 add to path

![](https://mmbiz.qpic.cn/mmbiz_png/Z6gDnRr767PsgZ2NLmHyjT77taZp6kyoYyzib8EDA72UhrdBMicX40Q40TgwjQW6nmDUzx3R4tnaJiaEvMvq4rYkA/640?wx_fmt=png&from=appmsg)

安装完毕可以，可以使用 win + R 快捷键，输入 cmd 后回车

![](https://mmbiz.qpic.cn/mmbiz_png/Z6gDnRr767PsgZ2NLmHyjT77taZp6kyof9tP5xKWXjf4J0gCfrpk7OlaBRw2pxicVcUYe9fpsiadraZ8jDTDHOSg/640?wx_fmt=png&from=appmsg)

在新窗口直接输入 python，如果出现以下界面，3.11 版本，就说明安装成功了，可以进行下一步

![](https://mmbiz.qpic.cn/mmbiz_png/Z6gDnRr767PsgZ2NLmHyjT77taZp6kyoPXXMdfnWoHQmm0CnqXkNz1JO8XVkmnAZIV57eLib71kfrbWaIsd5Y5g/640?wx_fmt=png&from=appmsg)

我本身是用 Pycharm 来调用 python 程序代码，属于是个人习惯，用什么都可以。

这里我先用 Pycharm 来实现，如果你用其他编译器，遇到问题直接问 AI 即可。

**02 安装必要的东西--ffmpeg**

首先安装 ffmpeg，用于视频剪辑的东西，是 moviepy 这个库需要用到，可以用于从视频中提取音频。

https://www.gyan.dev/ffmpeg/builds/

![](https://mmbiz.qpic.cn/mmbiz_png/Z6gDnRr767OdgiaxLnOMcXY9CsyTwMndFbzt6yhesmkD16xHxUboZpZowichEicwTPaSKuxGmD2J2llqribibxH18rQ/640?wx_fmt=png&from=appmsg)

随便下载一个稳定版本即可，它是一个压缩包。

解压到想要的路径下就好，还有用，一会儿要添加进 Path 环境变量。

> C:\\Aster\\package\\ffmpeg-2024-06-21-git-d45e20c37b-essentials_build\\bin

打开解压后文件的 bin，然后复制路径。

![](https://mmbiz.qpic.cn/mmbiz_png/Z6gDnRr767OdgiaxLnOMcXY9CsyTwMndFiaTaVSMQRyQkQlujDckOcFwYjYN6ayWxqibv0og5iaia3vYRrUZNwtUJeA/640?wx_fmt=png&from=appmsg)

按 win 键，搜索出编辑系统环境变量  

![](https://mmbiz.qpic.cn/mmbiz_png/Z6gDnRr767OdgiaxLnOMcXY9CsyTwMndFtLNIdkVE3lAW8exGrZ95EGHEeyouAHYNM7CYpECZnaDhictFJFf1QeQ/640?wx_fmt=png&from=appmsg)

按顺序找到 环境变量-Path，然后编辑-新建

![](https://mmbiz.qpic.cn/mmbiz_png/Z6gDnRr767OdgiaxLnOMcXY9CsyTwMndFN5oiakibjFPHgEomlxK4NNgBwCNGepyQJkxmk7YBUZxpGp8aX63043gA/640?wx_fmt=png&from=appmsg)

输入我们刚刚复制的 bin 路径，添加后点击确定即可。  

此时，win + R ，输入 cmd 回车，呼出窗口，输入 ffmpeg，如果出现下图界面，说明安装成功了  

![](https://mmbiz.qpic.cn/mmbiz_png/Z6gDnRr767OdgiaxLnOMcXY9CsyTwMndFyffXSvMfy0ZQETKo92OVp8kqicGaoZZYhHXXZJ1fcNOnGVoR13nLsEw/640?wx_fmt=png&from=appmsg)

接下来我们需要安装 python 软件包

> pip install opencc openai-whisper

注意，python 自带的 torch 可能会出问题，所以也需要先卸载再安装  

> pip uninstall torch

> pip install torch

而且有可能 2.0 版的 numpy 无法运行，所以也许先卸载再安装

> pip uninstall numpy

> pip install numpy==1.26.4

**03 准备素材，开始音频转文字**

安装完毕后，只需要准备一条素材即可，可以是 MP3，也可以是 wav 格式的。

我准备的是 MP3 格式的素材

![](https://mmbiz.qpic.cn/mmbiz_png/Z6gDnRr767OdgiaxLnOMcXY9CsyTwMndFuWUykA5eKw1AXH7djf1aMDJkYmabJmQ997bpWibPuAGcmGQDm4ibkZXg/640?wx_fmt=png&from=appmsg)

```python
import time
import whisper
import opencc


def a2text(model_type, path):
    start_time = time.time()  
    
    model = whisper.load_model(model_type)
    
    result = model.transcribe(path)
    cc = opencc.OpenCC("t2s")
    res = cc.convert(result['text'])
    print(res)
    end_time = time.time()  
    execution_time = end_time - start_time  
    print(f"总耗时：{execution_time}")


path = "test.mp3"
a2text("tiny", path)

```

注意，第一次运行时候，会联网下载该模型，可能需要一段时间。

![](https://mmbiz.qpic.cn/mmbiz_png/Z6gDnRr767OdgiaxLnOMcXY9CsyTwMndFicL2ktZRHcbgujYLChocGplk2uSHia1bW5aicbI7dxLpJdYibbYpROWHiaA/640?wx_fmt=png&from=appmsg)

04 转化结果

可以看到，用了最小的模型，只需要 1s 多就能识别 10s 左右的 MP3 音频。  

当然，由于是小模型，难免识别不准确，后面可以用大一点的模型来识别。

![](https://mmbiz.qpic.cn/mmbiz_png/Z6gDnRr767OdgiaxLnOMcXY9CsyTwMndFicgbI46RhUMcW8JBOS336ZezSN1u5Sm4ib2W1czhchhNNHZg1Zw7d88g/640?wx_fmt=png&from=appmsg)

同时，也报错提醒我说，没有使用 GPU，所以精度低。  

![](https://mmbiz.qpic.cn/mmbiz_png/Z6gDnRr767OdgiaxLnOMcXY9CsyTwMndF01ESEicN7GFqQa3Zzh5IINnDM2tv9VXYHOjvLzSib9Gia2OOym2DFAOzg/640?wx_fmt=png&from=appmsg)

后面再出教程，如何使用本地显卡来加速推理，毕竟，[买的 4090D 可不能浪费了呀。](http://mp.weixin.qq.com/s?__biz=MzkzMDQ0NzQyNA==&mid=2247484813&idx=1&sn=fbaa7538d1df62b497e93545ecc8ac7e&chksm=c27b6ca2f50ce5b42d3d391c76dc268694d51357ac88218fbb90f5f1b80462898805505b706d&scene=21#wechat_redirect)  

关于不同模型的识别速度，后面再做一期评测~  

**04**

openai 开源的 Whisper 模型，有多个版本，主要看你的电脑配置，配置需求从低到高分别是：

也可以是 tiny、base、small、medium、large

按需更改即可，当然，越好的模型，需要配置越高。  

**05**

我是想象力AI，写过很多个有意思的自动化机器人，有小红书自动发图、抖音自动涨粉、和微信自动加好友拉群等等。  

如果你感兴趣的话，千万记得要加我 aiaiai2098，一起交流。

往期文章：

[用 AI 帮忙养狗？Kimi 助我一臂之力，居然把小狗训练成了小机灵鬼](http://mp.weixin.qq.com/s?__biz=MzkzMDQ0NzQyNA==&mid=2247484988&idx=1&sn=ae5438cc00424233a87b00d5607686ef&chksm=c27b6f13f50ce6059bd8f5cb8af8bf14e4aa729dfd97bab651463a7649903d7d81d9b8b14a76&scene=21#wechat_redirect)  

[盘点一下之前写过的AI、RPA机器人（内附使用教程）](http://mp.weixin.qq.com/s?__biz=MzkzMDQ0NzQyNA==&mid=2247484519&idx=1&sn=b74ea9431b03f909f0d52d1eee936ab6&chksm=c27b6d48f50ce45e39d300215043a25590fc6ac5faf5fa2f32ae32d1e49497b9ecd95004ef58&scene=21#wechat_redirect)

[当我把1340条笔记喂给kimi时，它比我还懂我自己。](http://mp.weixin.qq.com/s?__biz=MzkzMDQ0NzQyNA==&mid=2247484779&idx=1&sn=d8cedc0fc303d8077ecd46f3e5806507&chksm=c27b6c44f50ce5525744c4fc9fb0e30beb23738618991fc4033336f58abe311d743dd13f4ff1&scene=21#wechat_redirect)

[必看！RPA 自动化开发效率增加100%](http://mp.weixin.qq.com/s?__biz=MzkzMDQ0NzQyNA==&mid=2247484264&idx=1&sn=07bc86e791afaaa2c762692e7fa6dcd4&chksm=c27b6a47f50ce351fb64be9bd266b20a78e44ec847d79d239ddaf2884c4d36133729c280afd7&scene=21#wechat_redirect)  

[记录 | 学习实践 AI 一年，我赚了多少钱？](http://mp.weixin.qq.com/s?__biz=MzkzMDQ0NzQyNA==&mid=2247484433&idx=1&sn=5982c27ef45c00417f0e9f24e80b8624&chksm=c27b6d3ef50ce428278b8207e007ae2a7b1f5eb27021dae61ba0be64908c67e1f10557d823e3&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/mmbiz_jpg/Z6gDnRr767Nb3ZK98M9UVw1V74n4icAVovZKjfwB51M48LAeU2yIfKJsoyylpibxvEN61yMS0uRqyPmQ8U76rCPA/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)