前面也说了，通过 **GitHub Pages+GitHub Actions 只是解决了动态数据的展示**，但是要**零成本**完成将用户信息存储下来，并实现数据交互呢？

也就是**对数据进行增删改查**，方法有三：**云文档**，需要对接接口麻烦；**Vercel自身也有storage**方案但不敏捷；**Vercel+Railway 组合**，可以将现成的源码部署上去，就他吧！

虽然网上也有很多人介绍这俩平台的玩法，但都是 2024 年以前的文章，**并且******Railway**平台有最新的修改，和自己踩到的坑而别人没提到的细节**，所以我还是记录一下。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LGzjdC0ejAzuxwxPAUpy5nyOlfNicf5TTs71Zz3I6ic60yIX0q3ic5EErSH2yuk2rCLzBeELveyMhribw/640?wx_fmt=jpeg&from=appmsg)

坑点  

1.  域名已经解析成功了，但是一直无法访问 Vercel 上的页面。
    
2.  Vercel-php 版本和 Vercel 上的 NodeJs 版本冲突，和一些配置问题。
    
3.  代码提交推送后，Vercel 没有完成自动部署等等。
    

准备

*   Vercel：   略过详细介绍，暂且把他理解成云服务器，入门配置免费。
    
*   Railway： 同样略过详细介绍，暂且把他理解成云数据库，几乎免费。
    
*   GitHub：  先创建存放程序的仓库，也几乎完全免费，需要注册登陆。
    
*   Typecho：博客程序 (用其他的也行)，开源免费，下载或自行编写。
    

Vercel 配置

进入 vercel 官网，推荐使用 GitHub 账号登陆，配置主要完成仓库的代码导入，域名解析绑定，项目部署和相关参数设置。

*   代码导入  
    

登陆后点击 “Import Git Repository”，然后选择仓库安装并设置权限，接着是 Configure Project，Congratulations 都可以直接下一步进入到 Production Deployment，可参考下图。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LGzjdC0ejAzuxwxPAUpy5nywol5txUviaTP65UsUg1meHzXFQbHfW5ZBEERmGmyjvbCIGrPlHOrzUg/640?wx_fmt=jpeg&from=appmsg)
![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LGzjdC0ejAzuxwxPAUpy5nyCPqjUPR5WF5mQxnjNDTYjrRFwxzLpVwliaLZMnMluzxQIvUnVdf4MWA/640?wx_fmt=jpeg&from=appmsg)
![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LGzjdC0ejAzuxwxPAUpy5nyJQ0Uc0dlrUibtuL0FAStoC2aPOUO1M3yI63xC5b0l7XNvAVKreaRKFw/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LGzjdC0ejAzuxwxPAUpy5nyCibjBc6aEodIgqzgdMm2HhUmVTPS0nMJdAZ9G8ibVZyjsb6ITavjwjdA/640?wx_fmt=jpeg&from=appmsg)

*   域名解析绑定  
    

进入到 “Production Deployment” 时，我们可以看到项目已经创建成功。不但可以看到 source 源仓库分支和提交信息，还能看到 Domains 分配的域名，但是该域名被墙无法访问。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LGzjdC0ejAzuxwxPAUpy5nyP9BZZR3lDSeUdp9sFLNmwqzU6md7FvXa2xHEyyQz8wTn3IFocrFtjw/640?wx_fmt=jpeg&from=appmsg)

点击上面的 “Domains” 按钮（在 Visit 左边），输入即将要解析过来的域名，系统会展示需要用 CNAM 类型被解析的域名，复制该 value 去到自己的域名服务商控制台，添加一条 CNAME 解析记录。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LGzjdC0ejAzuxwxPAUpy5nyuQ5PeAGBpPhrrnnUH5icq4vBibXPcTHicic9qWwropkbryTamEzGSab1Iw/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LGzjdC0ejAzuxwxPAUpy5nyU9jcybt02WFibMiaO7ZeUrMicibJkicMvBHhRfaMKXyPZ5A32hn0yvjKzpg/640?wx_fmt=jpeg&from=appmsg)

如果说服务商那边解析成功了，并且 Vercel 平台也显示域名验证成功，也就是前面提到的坑点一。这种一般是 DNS 缓存原因，可以换一台电脑或用手机访问测试，如果能就等待一下，直到能 ping 通。

还有 Vercel 会自动办法 SSL 证书，所以后面只需要留意日期就可以，下图我暂时放了一个 index.html 页面，动态程序演示要放到 Railway 后。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oneRjXnW5LGzjdC0ejAzuxwxPAUpy5nyHxMTa5pChjk40nu2u8E5Z6EMicCkhZc5icXuOkeZCzEUR7LPfEOEW8iaw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oneRjXnW5LGzjdC0ejAzuxwxPAUpy5nyc9LYibpG91hW7BH3xeg7DVQiaKylv9ItaWvkDrIteftT7fEvPhsJKTpw/640?wx_fmt=png&from=appmsg)

Railway 配置  

进入 Railway 官网，同样推荐 GitHub 账号登陆，进来后选择 “MySQL” 类型，直接按默认后进入到 production，最主要的是我们需要分配给他的 Host，账号和密码，数据库名等等。

需要注意的是 Railway 每个月只有 5 刀的限额，需要提前备份数据库。超过限额后没有备份的数据就没了，需要删掉账户重新注册才可以。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oneRjXnW5LGzjdC0ejAzuxwxPAUpy5nyOAMS61cfM1xictkdiblohWkPdT86mTjszelnDcIFoT8InTqAyEib3ibpXA/640?wx_fmt=png&from=appmsg)

打开 Data，选择 “Connect” -> “Public Network”，Connection URL 就是该产品对外的连接 Host，用户密码，端口等信息。只需要复制下来，用于在程序中连接配置，Navicat for MySQL 图形化工具连接失败，我试过了。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LGzjdC0ejAzuxwxPAUpy5nyWyLnqppIEJ4az0HqAXib9ZC1MpzXauh7VvL3M4vh8ldy78dibQDTgDMA/640?wx_fmt=jpeg&from=appmsg)

后端程序部署  

以下简单介绍 php 和 python 两种语言的 hello world，和有数据库连接的博客程序，第一步是后端入口文件都不能放在项目的根目录下，放在新建文件夹的 api 中，并添加 vercel.json（用于配置路由和分配内存等信息）。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LGzjdC0ejAzuxwxPAUpy5nyXZzuzp4lib7bP3fJRWdm9q34rtVYInNENuDoBNpIoteEHqPHevNx3ibw/640?wx_fmt=jpeg&from=appmsg)

*   Python 的 Hello World  
    

新建 vercel.json 文件，和用于打印的 py 文件，最后访问自定义的域名。

```
{    "rewrites": [        { "source": "/(.*)", "destination": "/api/index" }    ]}
```

*   PHP 的 Hello World  
    

需要注意的是部署 php 项目要用到 vercel-php，而 vercel-php 又与 NodeJs 版本有一定对应关系。目前 2024 年 8 月 vercel 平台默认 Node 版本是 20.x，我下面演示的是 vercel-php@0.6.0，所以再部署前需要先将 Node 版本切换为 18.x，如下图。（以下有两种情况的报错都要 node 和 vercel-php 版本相关）

```
部署后报错合集1. PHP Built-In Server HTTP error: Error: connect ECONNREFUSED 127.0.0.1:80002. The following Serverless Functions contain an invalid "runtime": - api/index (nodejs18.x)
```

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oneRjXnW5LGzjdC0ejAzuxwxPAUpy5nyhcNHlCJr5XvH6F6phev4Yibf26A02QoDdwZ1Q2CWdEyGj7PjH8rQk4A/640?wx_fmt=png&from=appmsg)

*   Typecho 安装  
    

从官网下载源码后，找到 config.inc.php 文件，将数据库的参数修改为 Railway 复制过来的配置。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oneRjXnW5LGzjdC0ejAzuxwxPAUpy5nySIILHoad7ww2PNWafkLKLPeZicszKX8xvXsibRtM1YtAU60Bia0cKteRQ/640?wx_fmt=png&from=appmsg)

然后通过 Git 提交代码到仓库，如果发现没有部署成功，可以进入 vercel 平台的 Deployments 查看部署记录，有报错的根据信息修改。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LGzjdC0ejAzuxwxPAUpy5nyWciayBXfLrkdUxhVmGiaUm3VCbXHBH2iaX6gxxYuQ3GFQMpDHib4R2RjGA/640?wx_fmt=jpeg&from=appmsg)

提交并成功部署后，输入自定义域名，并带上 install.php 进行安装，然后用 pdo 方式安装数据库，上面的 railway 参数就再输入一遍。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oneRjXnW5LGzjdC0ejAzuxwxPAUpy5nyDnf6yhzDjteprNV8VOcah5vY8jWwXvkubB0taC2osWHFR1PWiayZ7ibQ/640?wx_fmt=png&from=appmsg)

安装成功后，可以到 Railway 查看到新增的表格，这就表示全部都能正常使用了。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LGzjdC0ejAzuxwxPAUpy5nyiaRibibRYG43kfEictqiaNQZHicwtwNSV4Jx4ibgqWZAl34JxLSdW8UicwZT3Q/640?wx_fmt=jpeg&from=appmsg)

写在后面  

当然 Vercel 也不只是可以用来部署动静态网站或 API，也能搭一些国外工具的镜像，像 npm 之类的，以及自带各种主流 AI 应用。

还有一种场景是，比如国外有一些很好用还免费的 API，你在小程序上调用时，当在后台进行域名配置时，提示没有国内的备案信息无法添加。

这时候就可以用自己备案过的域名在 Vercel 中搭一个中转，小程序请求自己的域名，而部署的程序请求别人的地址就可以，那么更多玩法待后续更新了……

![](https://mmbiz.qpic.cn/mmbiz_gif/oneRjXnW5LGicNoMAdG2dAwnjwNTribzbVXOFf3GaN3UOJoIAiaNH2dG80QKUsgiaLYaGb03UHSZMBJeOWI6wH5OIA/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LFHcbSr1cF7tjLbXzhP3hMVKZYMpHbD5WFtwlOEltmnvWP0ibicgvIya0ia1CZ7h01m50eUI5ZYGCpJQ/640?wx_fmt=jpeg&from=appmsg)