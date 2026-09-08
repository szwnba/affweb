平时收藏的网站越来越多，是不是经常遇到这种情况？

收藏夹乱七八糟 😵‍💫常用网站找半天 🔍AI 工具、在线工具、开发工具混在一起……

如果你也有这些烦恼，不妨自己搭一个**专属导航主页**。

今天分享一个开源项目：**cf-workers-nav**。

它是一款运行在 **Cloudflare Workers** 上的轻量级个人导航页面，不需要传统 VPS，项目本身采用 Serverless 架构，并使用 Cloudflare KV 保存导航数据。

* * *

✨ 一个导航网站，能有多好用？
---------------

从你搭出来的效果来看，简洁、清爽，而且支持**浅色 / 深色模式**。

可以把自己常用的网站按照分类整理：

🤖 AI 应用💻 软件工具🌐 在线工具🎬 在线影音🎮 休闲游戏📚 素材资源📖 资料教程🔥 开源项目

打开浏览器，就能快速找到自己需要的网站。

而且分类和卡片都可以自己管理，真正做成一个属于自己的导航首页。

* * *

🧰 功能还挺丰富
---------

这个项目虽然轻量，但并不是简单的“网址列表”。

### 🖱️ 拖拽排序

电脑端可以拖动卡片，移动端也支持长按拖动，整理网站非常方便。

### 🔒 私密链接

一些不想公开展示的网站，可以设置为私密链接，登录管理员后才能看到。

### 🔍 聚合搜索

内置 Google、Bing、百度等搜索入口，同时支持站内快捷搜索。

### 💾 数据导入导出

支持 JSON 数据导入、导出以及自动备份，换环境的时候也更加方便。

### 🎨 深色模式

喜欢暗黑风格的朋友直接开启深色模式，晚上使用更加舒服。

### 📱 手机也能用

项目采用响应式设计，可以适配 PC 和移动端。

* * *

这也是我推荐这个项目的主要原因。

它可以直接部署到 **Cloudflare Workers**。

整个项目非常轻量，核心 Worker 文件只有一个 **workers.js**

再配合 Cloudflare KV 保存数据。官方项目 README 也提供了 Workers、KV、环境变量以及域名绑定的部署说明。

所以对于个人用户来说：

**GitHub 开源项目**⬇️**Cloudflare Workers**⬇️**KV 数据存储**⬇️**绑定自己的域名**⬇️**一个专属导航网站完成！** 🎉

不需要购买 VPS，也不用自己维护传统服务器。

* * *

如果你看到这里也想自己搭一个，我已经专门做了：

**《Cloudflare 零成本部署个人导航网站》视频教程**

从项目部署，到 KV 配置、管理员密码、域名绑定，再到最后的网站使用，都可以直接跟着视频操作。

文字教程看起来可能有点复杂，**跟着视频一步一步操作会更简单。** 

* * *

我觉得这类项目最大的意义就是：

**把自己每天都在用的网站，整理成一个真正属于自己的首页。** 

不用再翻浏览器收藏夹，也不用记几十个网址。

打开自己的域名：

> **AI、软件、工具、影音、资源……全部集中在一个页面。**  🚀

而且项目还是开源的，喜欢折腾的朋友还可以继续修改 UI、分类和功能，打造一个完全属于自己的导航系统。

**如果你平时收藏的网站特别多，这个项目真的值得收藏。**  ⭐

部署步骤：
-----

1.登录 Cloudflare:

创建**workers**，复制仓库里**workers.js**的代码，然后点击部署

2.创建KV存储:

新建一个名为**CARD\_ORDER**的KV存储，用于存储数据

3.添加环境变量:**ADMIN\_PASSWORD**，管理员**登录密码****JWT\_SECRET**，用于加密 Token，输入点**随机字符串**即可 （如果是老版本更新的请一定要添加，否则会出错）

4.绑定KV命名空间

变量名称为**CARD\_ORDER**，KV选择之前创建好的**CARD\_ORDER**

5.添加域名

**相关截图：** 
----------

![](https://mmbiz.qpic.cn/mmbiz_png/bxBuvIbHomFWpWkGRb4P5oBFgweQvRmkEDAUm8mDBCC7hjCAaJbHwXhXrdWzTjdS7k2q3Kbcf22xMn6Sr2aETMOjicSricfKEu29dZpMZ2ia7U/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=0)

![](https://mmbiz.qpic.cn/mmbiz_png/bxBuvIbHomH0IfdD4BBqeYOqeg6XjIpSL7VoR8J8sjWLq6AYj1yr1hnVbbB8c5npFJsAbnETxLrWGeovNxyiaIZVQAea8Txg3uF5zmcCHydo/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=1)

```javascript
项目地址：https:
```