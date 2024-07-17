前言
--

经过一番思索和考证，最终还是决定把[微信公众号](https://so.csdn.net/so/search?q=%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7&spm=1001.2101.3001.7020)也捡起来。

以前没怎么搞过公众号，只是做了个注册并没有做后期维护和运营，所以这次如果要做的话也算是比较干净的从0到1的过程。

万事开头难，还望诸位能够多多支持，感激不尽~~~

前两天大概摸索了下微信公众平台发文用的编辑器，说实话真心不好用，主要不支持[markdown](https://so.csdn.net/so/search?q=markdown&spm=1001.2101.3001.7020)，而且从别的地方复制过来的哪怕是html预览的时候格式都是乱的，心累。于是各种百度谷歌，终于发现了一款相对得心应手的工具-md，于是有了这公众号的第一篇文章。

_**PS: 当然关于微信公众号编辑器的替代品网上也是众说纷纭，有收费的有免费的，我也看过一些，个人感觉还是这个md比较好用，推荐给大家。** _

简介
--

首先这是一个开源的项目，在gitee上可以看到源码：https://gitee.com/Doocs/md?\_from=gitee\_search

引用gitee上的一些介绍:

> Markdown 文档自动即时渲染为微信图文，让你不再为微信文章排版而发愁！只要你会基本的 Markdown 语法，就能做出一篇样式简洁而又美观大方的微信图文。

可以好不犹豫的说，没错，这就是我需要的。

其次如下是git上提到的功能特性:

*   支持自定义 CSS 样式
*   支持 Markdown 所有基础语法
*   支持浅色、暗黑两种主题模式
*   支持 Ctrl + F 快速格式化文档
*   支持色盘取色，快速替换文章整体色调
*   支持多图上传，可自定义配置图床
*   支持自定义上传逻辑
*   支持在编辑框右键弹出功能选项卡
*   支持批量转换本地图片为线上图片

看到支持图片上传到图床，这个就很优秀啊有木有，完全可以替代markdown了。

开始
--

接下来，我们就先部署，然后体验下效果，再就是把图片上传到对象存储也就是所谓的图床上。

### 部署

提供了三种部署方案:

#### 1\. 通过源码部署

**前提: 安装好node环境**

```
 `npm i

npm start

npm run build

npm run build:h5-netlify` 

*   1
*   2
*   3
*   4
*   5
*   6
*   7
*   8
*   9
*   10
*   11
*   12
*   13

*   1
*   2
*   3
*   4
*   5
*   6
*   7
*   8
*   9
*   10
*   11
*   12
*   13


```

这也是开发时使用的部署方式，可以做本地开发或者自定义一部分功能。

#### 2\. 通过md-cli启动

**前提: 安装好node环境**

```
 `npm i -g @doocs/md-cli


md-cli

open http://127.0.0.1:8800/md/


md-cli port=8899

open http://127.0.0.1:8899/md/` 

*   1
*   2
*   3
*   4
*   5
*   6
*   7
*   8
*   9
*   10
*   11
*   12
*   13
*   14

*   1
*   2
*   3
*   4
*   5
*   6
*   7
*   8
*   9
*   10
*   11
*   12
*   13
*   14


```

md-cli 支持以下命令行参数：

*   `port` 指定端口号，默认 8800，如果被占用会随机使用一个新端口。
*   `spaceId` dcloud 服务空间配置
*   `clientSecret` dcloud 服务空间配置

#### 3\. 通过docker容器启动

**前提: 安装好docker**

如果你是 Docker 用户，也可以直接使用一条命令，启动完全属于你的、私有化运行的实例。

```
`docker run -d -p 8080:80 doocs/md:latest` 

*   1

*   1


```

容器运行起来之后，打开浏览器，访问 [http://localhost:8080](https://gitee.com/link?target=http%3A%2F%2Flocalhost%3A8080) 即可。

#### 4\. 在线编辑

*   Gitee Pages：https://doocs.gitee.io/md
*   GitHub Pages：[https://doocs.github.io/md](https://gitee.com/link?target=https%3A%2F%2Fdoocs.github.io%2Fmd)

也可以使用以上两个[在线编辑器](https://so.csdn.net/so/search?q=%E5%9C%A8%E7%BA%BF%E7%BC%96%E8%BE%91%E5%99%A8&spm=1001.2101.3001.7020)地址进行编辑使用。

### 部署效果

部署完成后看到的是一个示例网页:

![](https://img-blog.csdnimg.cn/img_convert/e8616674f6313d9f2446888eb0488f22.png)

打眼一看，效果还不错，起码比干撸强太多了。

### 功能梳理

通过页面我们再梳理下md支持的功能:

*   开始
    
    *   导入markdown格式的文件
    *   导出.md和.html格式的文档
    *   暗黑模式切换
    *   左侧编辑和右侧编辑切换
*   格式: 支持加粗、斜体、删除、超链接、格式化
    
*   编辑:
    
    *   上传图片
    *   插入表格
*   样式:
    
    *   支持字体、字号、颜色、代码主题设置
    *   支持自定义css样式
    *   支持自定义颜色
    *   支持mac样式的代码块，个人非常喜欢mac的风格

整体来说还是非常齐全的，起码普通的文章编辑是肯定够用了，赞。

### 文件上传

这里重点体验一下文件上传的配置流程。

进入`编辑-上传图片`，可以看到打开了对话框:

![](https://img-blog.csdnimg.cn/img_convert/88d635f74b9e4cd57186655aefc123b2.png)

看到它支持多个云平台的对象存储，甚至支持自定义代码，这里我以`阿里云OSS`为例进行说明。

*   第一步必然是需要`注册aliyun账号`，自行完成，此处省略。
    
*   登录进入控制台，搜索`对象存储`，进入`对象存储控制台`  
    ![](https://img-blog.csdnimg.cn/img_convert/0897eb6393b2dabe1016780e5fb5121c.png)
    
*   点击创建bucket，**记住这个bucket名称，后面参数会用到**
    

![](https://img-blog.csdnimg.cn/img_convert/41b8384c569d14cf6519b697a3295af8.png)

![](https://img-blog.csdnimg.cn/img_convert/4abb60c29ff830d9990c4100d28a3bf9.png)

*   创建上传用的accessKey
    
    通过控制台个人头像下拉菜单中的accessKey管理，进入accessKey管理控制台，并创建AccessKey。
    

![](https://img-blog.csdnimg.cn/img_convert/95153b16f3abf2e4de457001cfe6f8ef.png)

**创建好后，需要对AccessKey和AccessKeySecret自行保存，后面再不会看到这个secret了。** 

*   文件上传配置

继续回到md的文件上传配置那里，填入需要的参数:

![](https://img-blog.csdnimg.cn/img_convert/b67e1483923d31933ead7bbe7798b05c.png)

填写完成点击保存配置。

*   切换到选择上传标签，选择需要上传的文件，点击上传
    
    这时会报错，通过前台console可以看到是跨域问题导致的，如下图:
    
    ![](https://img-blog.csdnimg.cn/img_convert/c54ba74c7cb73ecde6b8ba0574b3667e.png)
    
    去阿里云官网找到答案说是需要配置规则，参考链接:
    
    [https://help.aliyun.com/zh/oss/user-guide/the-no-access-control-allow-origin-error-message-is-still-reported-when-you-call-oss-after-setting-cross-domain-rules](https://blog.csdn.net/u010361276/article/details/%E5%85%B3%E4%BA%8E%E8%B7%A8%E5%9F%9F%E9%85%8D%E7%BD%AE)  
    
    配置后官网说是15分钟内生效，实测几乎可以立即生效。
    
*   重新上传后成功。
    

至此文件上传就完成了。

### 发布

到发布就比较简单了，在页面编辑完成后，可以直接点击复制，然后粘贴到微信公众平台后台编辑器中进行预览和发布操作即可。

总结
--

本文介绍了微信公众平台编辑器的替代者-md的部署以及文件上传的相关过程，相对来说还是比较清晰明了的。

对于我这样的刚接触公众平台运营的人来说是个利器，也基本够用了。以后终于可以使用markdown写公众号文章了。

再次感谢开源作者的无私奉献。

后面会采用CSDN博客和公众号同步发布文章的方式进行，也希望大家能够持续关注。