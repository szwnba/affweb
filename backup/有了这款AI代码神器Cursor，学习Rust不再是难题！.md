大家好，我是渔夫。

工欲善其事，必先利其器。AI 是未来十年生产力的核心工具，要让 AI 真正转化为生产力，而不仅仅是围观一时的热潮。

今天来聊聊最近又火爆AI圈的AI代码神器 Cursor，它其实是一款 VS Code 的一个分支，然而 Cursor 主要是专注让你如何使用 AI 进行编码，以AI自然语言驱动的编辑器，目前很多国外程序员宣布停止对 Github Copilot 的付费，转向 Cursor。

今天，还分享 Cursor 集成到本地部署 Ollama 模型。

> 安装

首先，进入官网下载对应的系统版本。

下载地址：https://www.cursor.com/

安装完后打开，进入到这样页面，可以跟着我的步骤进行选择，然后选择继续。

![](https://mmbiz.qpic.cn/mmbiz_png/I2mLfEGR4ObRzLGhNHX5gticm2jSxxHEbXpk2BXD4fIEXl7Q9GB30x62VxN1aVzWSAveb2WibTl9aS3qfsuRg4Fw/640?wx_fmt=png&from=appmsg)

相关设置可以到这里来相应设置  

![](https://mmbiz.qpic.cn/mmbiz_png/I2mLfEGR4ObRzLGhNHX5gticm2jSxxHEbIeJfTn9IjVT63cjzkyDmaBjianH6AG9Z4NFibhHUZgoVciaXEnK5DqXxA/640?wx_fmt=png&from=appmsg)

> 快速体验

新建一个 Rust 文件，然后我们使用自然语言让AI帮写这样的案例，假如没有写过项目，对前端也一无所知，以小白形式去使用它。

打开 cursor 后，随便新建 lib.rs ，然后打开 AI Chat ，复制下面例子。

`前端实现图片或文件上传功能，使用Rust语言，要求  
1. 文件上传的大小限制 10M  
2. 文件上传的类型限制(支持pdf、doc、xlsx、ppt、txt、图片等）`

![](https://mmbiz.qpic.cn/mmbiz_png/I2mLfEGR4ObRzLGhNHX5gticm2jSxxHEbDvnft5SrRdaibqPawGOUUl7KW2dWSDf6DuPfwIvVRSykOyTDcwvbgIQ/640?wx_fmt=png&from=appmsg)

然后，将采用 AI 写的这些代码，处理这些代码完成后，直接运行 cargo run。

报错了，我们直接按住 command + k 直接提问，让AI自行去解决，报错一致提问，直到解决问题为止。  

![](https://mmbiz.qpic.cn/mmbiz_png/I2mLfEGR4ObRzLGhNHX5gticm2jSxxHEblB8FqsLiaTWE88rUe4Sukz2ZX2Fu60X1bnuzOzCicouBms6sIfZ9ialTA/640?wx_fmt=png&from=appmsg)

很幸运，问了3次问题就解决完成了，并成功启动。  

![](https://mmbiz.qpic.cn/mmbiz_png/I2mLfEGR4ObRzLGhNHX5gticm2jSxxHEbGiajusibSpjMxp5Hq6B1icuoHUebwuckbyOuuEPs5u2EvEiaHrtpSrHwBA/640?wx_fmt=png&from=appmsg)

下载浏览器访问：http://localhost:8000/

![](https://mmbiz.qpic.cn/mmbiz_png/I2mLfEGR4ObRzLGhNHX5gticm2jSxxHEbs2dCNiasqztyHCogbjTNrGtbdtIzAmcqibg3X8envtUTwFWobSg5AbWQ/640?wx_fmt=png&from=appmsg)

未来学习编程，小白也能轻松开发自己的应用程序，只要你熟悉使用工具，在熟悉点基础皮毛的，都可以很轻松构建自己应用。  

> 接入本地部署 ollama 模型

首先，安装 CodeGPT: Chat & AI Agents 这个插件。

![](https://mmbiz.qpic.cn/mmbiz_png/I2mLfEGR4ObRzLGhNHX5gticm2jSxxHEbicDVhr7nYic5Axxsq8XibkgSgNgTaH2ZXPsicLkhwmWtEPJf4eQWD4Lz3Q/640?wx_fmt=png&from=appmsg)

然后，我们来配置

![](https://mmbiz.qpic.cn/mmbiz_png/I2mLfEGR4ObRzLGhNHX5gticm2jSxxHEb8VMcl2LFUOWz3GgGLtufia6LvhMUj2qVX1oNGzJmJYnGNtdRJ5JwGicg/640?wx_fmt=png&from=appmsg)

配置的前提，你本地需要跑ollama，可以到官网下载。

地址https://ollama.com/

![](https://mmbiz.qpic.cn/mmbiz_png/I2mLfEGR4ObRzLGhNHX5gticm2jSxxHEbmlQefYlqQz7nkxdEBPicWmfvaIh3VJDy317iaFG912daE5Fr0jAP6UEw/640?wx_fmt=png&from=appmsg)

随后，下载 llama3.1  

![](https://mmbiz.qpic.cn/mmbiz_png/I2mLfEGR4ObRzLGhNHX5gticm2jSxxHEbAHzKnHrwXQiaVQN7Amx7TFIHA4eic6g5dQPXJyB3KBRwVH9qNaAe0uXw/640?wx_fmt=png&from=appmsg)

检查自己是否已经搞定了  

![](https://mmbiz.qpic.cn/mmbiz_png/I2mLfEGR4ObRzLGhNHX5gticm2jSxxHEbWf86v91OibxlUa4VuaibNN3icT16Wba1BVkA12wvUSxAv2xyJCIB5FYbA/640?wx_fmt=png&from=appmsg)

配置后，我们就可以使用本地llama进行对话了。

![](https://mmbiz.qpic.cn/mmbiz_png/I2mLfEGR4ObRzLGhNHX5gticm2jSxxHEbK4VPlPMNB57ia6O3M2yYBvoYKA9HDvbDwGhrEhLKb4x8I611zE2tsmA/640?wx_fmt=png&from=appmsg)

参考资料：

*   https://github.com/getcursor/cursor
    

推荐阅读：

[AI大模型下，Rust 一定要学？](http://mp.weixin.qq.com/s?__biz=MzUyODgxNzM0Nw==&mid=2247485970&idx=1&sn=2c7278974faa5931c20e69936bd08fbe&chksm=fa6bc7becd1c4ea8403e39df1238e3de6fb8e2c1ac2e8403dccdcf6b69ebcb639f9fb53ca5d8&scene=21#wechat_redirect)  

[封神了，Rust 的大学课程。](http://mp.weixin.qq.com/s?__biz=MzUyODgxNzM0Nw==&mid=2247485890&idx=1&sn=2a154076488580fd152491213140215b&chksm=fa6bc46ecd1c4d78cf280517634dfb23a9b0560aaba1b4577e86ce2687f97a54186503358367&scene=21#wechat_redirect)  

> 我是渔夫，是一名程序员，现已 All in AI，努力探索小而美的AI商业模式、包括AI副业、个人IP、分享技术、非科班转码经验等相关文章，欢迎关注，和渔夫一起成长。

另外，想和我一起拥抱AI能的伙伴，要记得加我vx。

![](https://mmbiz.qpic.cn/mmbiz_png/I2mLfEGR4ObVvlbPxo5jrEQEXT8uRZCt1XV9a1Ces8ZwdHMQNIVRYEJsoVKgEpxgVK60sklJ8QSsyYbYDXibqsQ/640?wx_fmt=png&from=appmsg)