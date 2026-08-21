前言
--

通过前面两个步骤，完成了静态博客从搭建到基本功能和界面优化。那么，这次就要介绍一下搭在 GitHub 上的静态博客我是如何开始运营。也就是如何让博客被各大搜索引擎收录？如何提高网站权重，提高收录量的？

网站收录
----

### 平台选择

站长相关的平台有：某度站长工具、某虎站长平台、某狗资源平台、必应网站管理员工具、谷歌站长工具等。列出的五个平台，可以按自身情况提交，提交方法也大同小异，以下以某度为例。

### 添加网站

添加某度、360、某狗等引擎收录，进入某度的站长工具，点击添加网站。流程就三步，输入网站，设置站点属性，最后验证网站。而验证网站又有三种方式，分别是文件验证、HTML 标签验证、CNAME 验证，我这里选择文件验证。

选择文件验证后，下载 baidu\_verify\_xxxx.html 文件，然后将该文件放入 theme / 主题包名 /source/ 根目录下。重新编译生成静态文件，而验证文件会被原封不动地复制到编译后博客根目录地 public 下，最后部署就完成验证了。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LFYf9SBreib62NJW7JwjiaPWz34zibng1laFbfeaPOHgQNDdV2SfbnaicyHornILTiaHmNpJN3icStxmV0w/640?wx_fmt=other&from=appmsg)
  
![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LFYf9SBreib62NJW7JwjiaPWzu8BYyvlcvicib40y83zC0Tlmmc0CwnaxwibZU2AJBgKvAHB58vSBuyhKw/640?wx_fmt=other&from=appmsg)

### 链接提交

进入站长工具的 “普通收录”，这里我们可以向搜索引擎主动提交网站的链接地址。其中提交的方式有三种，分别是 API 提交、sitemap、手动提交，而最方便快捷的就是给引擎提供 sitemap，也就是网站地图，里面按固定格式放满网站上需要被收录的链接。但是某度对于这种方式有限制，需要站点达到一定量才可以使用 sitemap，当然也不妨碍我们先做出地图。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LFYf9SBreib62NJW7JwjiaPWzfH0HIFnj5PtYws6cbuDZhMFGCkMgbeCFXzUFQoc5N2zhE9qYiatUeLw/640?wx_fmt=other&from=appmsg)

#### 安装地图生成插件

以下两个插件都可以生成 sitemap，但是 generator-sitemap 相比另一个多了一种 txt 格式。

npm install hexo-generator-sitemap --save  
npm install hexo-generator-baidu-sitemap \--save

#### 配置 url

设置这个可以在 sitemap 中指定网站的地址，如果绑定了个性化域名就填写改域名。不然放入 github 自带域名，可能被国内引擎屏蔽，也可能由自带域名重定向个性化域名，同样都影响网站的收录。

url: https://www.zerofc.cn  
root: /  
permalink: :year/:month/:day/:title/  
permalink\_defaults:

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LFYf9SBreib62NJW7JwjiaPWzPsZwMabLhOKiciaiadXsrkpmgEMtAFzYRMgmHoC54iaJCJGExsssv48Ymg/640?wx_fmt=other&from=appmsg)

#### 配置地图插件

打开 hexo 的\_config.yml 添加下面对应插件的参数，用于配置 sitemap 文件的保存位置。其中上面的插件可通过 txt 和 xml 决定需要的格式。

\# generator-sitemap插件  
sitemap:  
    #path: sitemap.txt  
 path: sitemap.xml

\# hexo sitemap百度网站地图  
baidusitemap:  
 path: baidusitemap.xml

#### 清理与生成

插件完毕后再重新编译打包的同时，在 public 下就会生成 sitemap 的 xml 文件了。  

```nginx
hexo clean && hexo g
```

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LFYf9SBreib62NJW7JwjiaPWzMe0YkOsWyaWy35FsPb636lpqp7FHEicOmbDiaJD2ILutdUE7bVnV5iclQ/640?wx_fmt=other&from=appmsg)

#### 创建 robots 文件

robots.txt 文件是一个简单的文本文件，用于指示搜索引擎爬虫如何访问和索引您的网站。创建后放入 hexo 主题包下的 source，这样每次打包后都会在静态项目的根目录下，以下是一个简单的 robots.txt 文件配置。

User-agent: \*    
Disallow: /video/    
Disallow: /archives/

上述示例告诉所有搜索引擎爬虫（User-agent: \*）不要索引 /video/ 和 /archives/ 目录下的内容。  
![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LFYf9SBreib62NJW7JwjiaPWzRIdYdwLlYe2QPvY5Vl8ahRWkx5y66evhu9LXX8zwNxhgqFH1sWHIvQ/640?wx_fmt=other&from=appmsg)

错误合集
----

The file will have its original line endings in your working directory.  
On branch master

### 原因

windows 下的换行符是 CRLF 而 Unix 的换行符格式是 LF。git 默认支持 LF。

### 解决方法

git rm -r --cached .  
git config --global core.autocrlf false

抱团友情链接
------

正在联系一些有收录的独立博主，也欢迎大家找我互链抱团！

添加广告联盟
------

虽然不切实际，但是留个flag在这，万一博客还真有流量呢，不好说。

其他优化
----

#### markdown 中插入视频

启动源代码模式，输入下面代码后再切回。

  
![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LFYf9SBreib62NJW7JwjiaPWzkkyN0gpOUnqZlTo4Z69vKNiciauEMyE0gZXn1puibDib6poAdXSeBOONXw/640?wx_fmt=other&from=appmsg)

<video width\="320" height\="240" controls>    
  <source src\="https://www.zerofc.cn/zd\_image\_bed/img/11.mp4" type\="video/mp4"\>    
  Your browser does not support the video tag.    
</video>

![](https://mmbiz.qpic.cn/mmbiz_gif/oneRjXnW5LGicNoMAdG2dAwnjwNTribzbVXOFf3GaN3UOJoIAiaNH2dG80QKUsgiaLYaGb03UHSZMBJeOWI6wH5OIA/640?wx_fmt=gif)