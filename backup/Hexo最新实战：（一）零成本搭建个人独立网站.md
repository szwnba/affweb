**前言**

很多平台都**能写博客还有创作激励****，****为什么我又要搭一个**？**为什么这次要选择用Hexo框架**？

对应的原因是**流量自由和省钱**，第一个，很多平台能写但不是都有收益，而且平台有自身的规则，比如会屏蔽一些推广类信息。如果我哪天做了一产品，是没办法直接用平台博客的方式硬推的，至少放码和链接不行。第二个用**Hexo**把博客搭到**GitHub**上，服务器之类的费用省了，毕竟对于产品，我现在也没有什么好的想法。

总之，有个**独立博客**，相比**平台博客**在内容约束性上更自由。有想法了就发出来，做了游戏什么的就放出来，写的md文章以后如果要备份收藏，可以**直接转PDF**，更方便地在**副业**的道路上**轻装探索**。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oneRjXnW5LF8M9q9CvEf9v0mojFBViaKZhecl9nicB2sp1TLpibh8hNgkNEicIzhQE3RmBL2TrcicJxzzJvaibg8GplQ/640?wx_fmt=png&from=appmsg)

Hexo介绍

Hexo是一款基于Node.js的开源静态博客框架，用于快速、简单且高效地搭建个人或团队的静态博客网站。说白了他是一个静态网站生成器，我们新增文章只需要添加并编辑md文件，通过运行命令最后生成像html的静态文件。

其实我挺早听过Hexo，但一直没用，直到我 [**CMS搭的博客被别人挂马**](http://mp.weixin.qq.com/s?__biz=MzI4NzE1MDgxOQ==&mid=2651505558&idx=1&sn=5e08b2f6e9964dda674fa8eb87adb34e&chksm=f02c641ac75bed0cdf5483e706f754d6ad1f4a1bfe4c7e8c6a68e21bc92776b8ccc2cb278e28&scene=21#wechat_redirect) 。索性我就关闭了网站并**全面使用平台博客**。但又经种种原因，最近又萌生了建独立博客的想法，并且打算要长期做下去，那么第一步就先记录**Hexo的搭建过程**吧，仅供参考。

流程  

*   本地构建Hexo
    
*   配置 GitHub
    
*   代码上传与备份
    
*   个性化域名绑定
    

**环境搭建**  

-----------

环境比较简单，提前装好Node和Git，关于这两工具的安装这里就跳过了。但是要强调一下，运行Hexo命令最好在Git的GUI窗口里，不要用Windows的cmd，坑多，个人亲测。

构建Hexo  

*   ### 安装Hexo
    

```nginx
npm install -g hexo
```

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LF8M9q9CvEf9v0mojFBViaKZ2PQlpBG5sDhp2khQcLvfJEePoZnFhEvZiaoSzQSgugqKYwlYoXTewQA/640?wx_fmt=jpeg&from=appmsg)

*   ### 检验Hexo是否安装
    

```nginx
hexo -v
```

*   ### 项目构建
    

```properties
# 创建一blog项目
hexo init blog

# 进入项目
cd blog

# 安装依赖包
npm install
```

*   ### 其他操作
    

```properties

npm install hexo-deployer-git --save

hexo _config.yml中文乱码问题
用Notepad++等工具打开，选 “编码” -> “转为UTF-8编码”
```

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LF8M9q9CvEf9v0mojFBViaKZNqmUJjicYcvQgJnZ3cRia9UGbuMNxpaXxJgjG7F2eu59JN6OmmGvMADA/640?wx_fmt=jpeg&from=appmsg)

*   ### 项目预览
    

```properties

hexo clean


hexo g


hexo s
```

### ![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LF8M9q9CvEf9v0mojFBViaKZuaAibN3iapH6bia6PVvictfictPUXG2vRluvss5WUuqXOLTndmL4lhfLqIA/640?wx_fmt=jpeg&from=appmsg)
![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LF8M9q9CvEf9v0mojFBViaKZeic8CIFbD23BpoHcGqibMzLwtHtVVb4XFG64GzOV1SU7NCtKgyjqbaVA/640?wx_fmt=jpeg)

**配置 GitHub**
-------------

这里虽然只是写的配置GitHub，其实包含了本地用Git生成SSH密钥对，和GitHub上公钥添加，提交Token的获取，以及Pages服务的开启。还有仓库名的建立也有讲究，下面就从这些点开始逐一展开。

*   ### **建立仓库**
    

仓库名是个什么讲究法呢？就是格式要保持 “github账号名.github.io”, 比如我的账户名是“z11r00”，那么仓库就要建成 “z11r00.github.io”。如果不这样，最后等用Hexo部署完毕后，初始的域名可能就是 “github账号名.github.io/仓库名”，会在后面多了一个路径，而且hexo的config没有设置好连css都加载不出来。![](https://mmbiz.qpic.cn/sz_mmbiz_png/oneRjXnW5LF8M9q9CvEf9v0mojFBViaKZVMicn4PoX9Tg64QTQXFEb9AA4jI8XZITtZ0eyHbul4h6qOwFQHYDx5g/640?wx_fmt=png&from=appmsg)

*   ### 设置SSH
    

GitHub 的 SSH（Secure Shell）主要用于安全地连接到 GitHub 服务器，其实就是平时Git常用的克隆、拉取、提交、推送等操作。而好处除了安全外，就是提交代码不用每次都要输入账号密码。如果安装了hexo-deployer-git的话，只需一个命令就可以完成项目从静态构建到自动部署。

*   #### 生成SSH密钥对
    

打开Git面板，输入 “ssh-keygen -t rsa -C GitHub账户”, 这里的GitHUb账户是你登陆GitHub的邮箱等方式。生成后找到目录下的id\_rsa.pub（公钥），用编辑器打开并复制。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LF8M9q9CvEf9v0mojFBViaKZ9UXxED0be134O0XbyJMOwXIXJicMFQKPQBIoVFRmfyTQhl9RXmM2V5g/640?wx_fmt=jpeg&from=appmsg)

*   #### GitHub中添加SSH公钥
    

登陆GitHub网站，点击个人头像，找到 “Settings”->"SSH and GPG keys"后，点击 “New SSH keys”，最后将前面复制的很长的公钥字符串粘贴到Key文本框中。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LF8M9q9CvEf9v0mojFBViaKZrhGOOqMSS0Sv4Aec5RQ3PkX0rZEQt3CJWZx9lTKeicVwrAnliciacr4fg/640?wx_fmt=jpeg&from=appmsg)
![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LF8M9q9CvEf9v0mojFBViaKZibMFQTB8NHq6iaXWGVnXsvbYbJkswemibic0gKmJDzbTVxjiczxr8Nw0qEA/640?wx_fmt=jpeg&from=appmsg)
![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LF8M9q9CvEf9v0mojFBViaKZwqVBoHxLyt5BPKkuZeF3JRxlQ5xIUw1Ly7cMdYYovXyYu4GBeBdN2A/640?wx_fmt=jpeg&from=appmsg)

*   #### 验证设备是否可连接
    

通过 “ssh -T git@github.com” 命令，验证当前的设备是否可以连接。![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LF8M9q9CvEf9v0mojFBViaKZSn4YJ5O9qCATLcaJ3LgibmMCTYiboSvFanVuCbwgu9VhRXKphoibBhDIg/640?wx_fmt=jpeg&from=appmsg)

*   #### 获取提交的token
    

虽然说SSH连接不用一直登陆，但是初次还要要的。而且不光要输入账号密码还需要一个提交用的Token,没有这个，运行hexo d一直提示Logon failed, 这个后面会集中列出报错事故的。

获取token，还是进入“Settins”，找到 “Developer settings”->“Personal access tokens”->“Tokens(classic)”, 然后设置备注和过期时间。最主要的权限要勾选 “workflow”、“gist”、“user”，点击 “Generate”按钮，生成的"ghp\_"为前缀的就是token了，复制并保存下来。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LF8M9q9CvEf9v0mojFBViaKZA2Ly23EfBCRwVxJZSXQBNBUg5wIrLa3z2ibDOlAAhticbAHp0fqpe1cQ/640?wx_fmt=jpeg&from=appmsg)
![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LF8M9q9CvEf9v0mojFBViaKZoSdH3mRTLWWl30fiapHtsq46UZjpDPdX3H15wbr9YEVpiaWa2RbNXzUA/640?wx_fmt=jpeg&from=appmsg)
![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LF8M9q9CvEf9v0mojFBViaKZamqEL14Y0LTtT3eF8t1GN5MvGNx9iajthoLThHiaSxiae5KSr4pDicLt3A/640?wx_fmt=jpeg&from=appmsg)
![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LF8M9q9CvEf9v0mojFBViaKZ8nXkZ35QMlRMkTzMibsrf7sKHSKiaOicYS6yyuXCOlmJDWdN3o1ibq0h4A/640?wx_fmt=jpeg&from=appmsg)

**项目部署**
--------

项目部署的其实是将Hexo生成的静态文件提交到github上，后期添加文章也就是markdown文件，继续重新生成，重新部署。而项目的代码却在本地，虽然代码量不多，但是里面的package.json和\_config.yml，以及用到的主题包，还是有必要保存一下。所以我这里的方法是，静态部署项目放在一个公有仓库，而项目源代码单独提交到一私有仓库下。

*   ### 修改配置
    

打开项目根目录下的\_config.yml，主要添加仓库的地址，其他的配置下篇再介绍。因为hexo很多玩法更多的是配置和各种依赖，比如可以添加统计、留言、修改主题、站内搜索、甚至广告位等等。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oneRjXnW5LF8M9q9CvEf9v0mojFBViaKZ2MPMHN8RGFRbrpFHpvOJM3tynLZROVKLHwfyW5n5zarsPXNjfD5ygQ/640?wx_fmt=png&from=appmsg)

*   ### 静态文件生成
    

通过 “hexo clean” 先清理，然后执行 “hexo g” 重新生成。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LF8M9q9CvEf9v0mojFBViaKZuPLT093vdVxiapqI1h9SPrjjInWsbkSkSiaLDAffTfgaLL42wqsSTSFg/640?wx_fmt=jpeg&from=appmsg)

*   ### 开始部署
    

通过命令 “hexo d”，开始部署项目，如果第一次运行，就需要前面提到的输入github账号密码。确认Login后会再次弹一个窗口就是输入Token了，最后完成部署。这里需要注意一下的是，最好用Git面板运行命令，如果是cmd很有可能第二次的窗无法弹出，亲测坑点。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LF8M9q9CvEf9v0mojFBViaKZJiclcSqWMaWSADPwPTmg83Z7SDBx23cicibar9ibicflPqiaria65hl9ZGgHw/640?wx_fmt=jpeg&from=appmsg)
![](https://mmbiz.qpic.cn/sz_mmbiz_png/oneRjXnW5LF8M9q9CvEf9v0mojFBViaKZbL2sTd9XrFAOPs4S5a1Uertvicg2Wq2p2HBicdHbgfs499T3olBNiaAmA/640?wx_fmt=png&from=appmsg)

*   ### 访问测试
    

部署完成就进入仓库下，除了查看提交的代码外，打开仓库下的 “Settings”，找到 “Pages”。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LF8M9q9CvEf9v0mojFBViaKZP6MzNQ12IicWxybTt3Vb74WAcJRStpWFAWhvGSPQPVXjkicUfdmLoEWw/640?wx_fmt=jpeg&from=appmsg)

**个性化域名绑定**
-----------

有一个git域名其实也不错，为什么还要买一个去绑定呢？一个是我本身这域名就空在这里，第二个是可以给博客增加一点IP点，第三个是更利于某度的爬取。我看其他博主说国内一些搜索引擎屏蔽了github的pages博客，当然我没有验证过，下次也要做SEO相关的时候可以测试一下。

*   ### 获取IP地址
    

要想知道当前项目部署的独立IP地址，只需要ping一下github分配的域名，比如我直接 “ping z11r00.github.io”就可以看到了。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LF8M9q9CvEf9v0mojFBViaKZ5fN6ZN4ENTbIWQSrCiauno8dVcUApYHIUahg1eoZQko0DYfia0qRDnlw/640?wx_fmt=jpeg&from=appmsg)

*   ### 域名解析
    

进入购买的域名控制台，给自己的域名添加两个解析，一个指向旧域名，一个解析到前面获取到的IP地址。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LF8M9q9CvEf9v0mojFBViaKZbBbcc1ict3O2iansUHRYwpsTg2oQzodRZnKVmY6ahsRk2etbd5nd004Q/640?wx_fmt=jpeg&from=appmsg)

*   ### **项目绑定域名**
    

进入仓库的“Settings”下，点击 “Pages”，找到 “Custom domain”，将自己的域名粘贴进文本框保存。然后在项目的“source” 新建CNAME（没有后缀）, 打开文件粘贴域名，比如我的zerofc.cn，最后再重新部署项目访问。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oneRjXnW5LF8M9q9CvEf9v0mojFBViaKZFvPMFHQcP2JGaUkTJcWGSfkR8XSPNJI0HSzYHjUdKPscbDsdRHSazA/640?wx_fmt=png&from=appmsg)

**报错汇总**
--------

*   extends includes/layout.pug block content include ./includes/mixins/post-ui.pug #recent-posts.recent-posts +postUI include includes/pagination.pug
    

项目启动后报的这个，是因为缺失了一些依赖包，上面的是没有 pug 以及 stylus 的渲染器，解决方法就是安装对应的依赖。

```sql
npm install hexo-renderer-pug hexo-renderer-stylus 
```

*   运行后打开hexo博客上的中文乱码
    

解决方法是用Notepad++等编辑器打开，选择 “编码” -> “转为UTF-8编码”。

*   unable to access 'https://githuxxxxxxxx.git/': Empty reply from server
    

出现这个报错的是项目初次部署时，原因就是没有设置Token，解决方法就是前面“配置 GitHub”的“提交Token获取”部分。

*   unable to access 'https://githuxxxx.git/': The requested URL returned error: 403
    

出现这个一般就是间接性打开GitHub网站，毕竟是国外网站，多刷新几下，多请求几下就可以了。

**写在后面**
--------

既然博客已经搭起来了，后面再分两步走，凑成**三部曲**。第一个是**Hexo的各种配置和插件的玩法**，第二个是**Hexo博客SEO相关内容**，如果我那个**小游戏软著**下来了，可能博客的更新事情就会往后延一点了。

![](https://mmbiz.qpic.cn/mmbiz_gif/oneRjXnW5LGicNoMAdG2dAwnjwNTribzbVXOFf3GaN3UOJoIAiaNH2dG80QKUsgiaLYaGb03UHSZMBJeOWI6wH5OIA/640?wx_fmt=gif)