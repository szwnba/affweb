 docker run -d -it --rm -p 3002:8888 -v /home/notebook:/home/jovyan/work quay.io/jupyter/datascience-notebook:2024-10-07 

本文主要介绍如何在Ubuntu系统中使用Docker本地部署Jupyter Notebook，并结合cpolar内网穿透工具实现任意浏览器公网远程访问Jupyter登录界面。

Jupyter Notebook是一个交互式笔记本，支持运行40多种编程语言。可以使用它来创建和共享程序文档，支持实时代码，数学方程，可视化和 markdown。具有数据清理和转换，数值模拟，统计建模，机器学习等等用途。

要使用Docker部署Jupyter Notebook非常简单，只需要选择并拉取你想要安装的版本镜像，然后在容器中进行参数设置就可以启动容器，运行Jupyter Notebook了。

![](https://pics4.baidu.com/feed/e850352ac65c103805c82a880c8eef1eb17e8977.jpeg@f_auto?token=1f69353f3be2b81e95fdb07ef8668f7b)

本文中使用的操作系统为Ubuntu 22.04

### 1\. 安装Docker步骤

添加Docker源

```
\# Add Docker's official GPG key:sudo apt-get updatesudo apt-get install ca-certificates curl gnupgsudo install -m 0755 -d /etc/apt/keyringscurl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpgsudo chmod a+r /etc/apt/keyrings/docker.gpg# Add the repository to Apt sources:echo \\  "deb \[arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg\] https://download.docker.com/linux/ubuntu \\  $(. /etc/os-release && echo "$VERSION\_CODENAME") stable" | \\  sudo tee /etc/apt/sources.list.d/docker.list > /dev/nullsudo apt-get update
```

Bash

Copy

安装 Docker 包

```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

Bash

Copy

通过运行映像来验证 Docker 引擎安装是否成功

```
sudo docker run hello-world
```

Bash

Copy

此命令下载测试映像并在容器中运行它。当容器运行，它打印确认消息并退出。

### 2\. 选择与拉取镜像

本教程中我们以`jupyter/base-notebook`这个基础版本镜像为例，进行镜像拉取。

执行命令：

sudo docker pull jupyter/base-notebook

![](https://pics0.baidu.com/feed/95eef01f3a292df55082352703ae206d35a873e8.jpeg@f_auto?token=d44e2e7b98c8f7d39592d2a65581f087)

执行命令后稍等一会儿就可以看到`jupyter/base-notebook`镜像已经拉取完毕。

执行命令：

可以看到本地所有镜像，其中就有刚才拉取的`jupyter/base-notebook`镜像。

![](https://pics6.baidu.com/feed/f2deb48f8c5494eedb051509936a9cf399257e23.jpeg@f_auto?token=8771699f38a166dba63c50ebb1b818d4)

### 3\. 创建容器

在拉取了Jupyter镜像后，我们就可以使用Docker创建容器来运行Jupyter Notebook了。

执行命令：

sudo docker run -d -p 8888:8888 jupyter/base-notebook

即可创建一个在后台运行的名为`jupyter`的容器，并将本地端口8888映射到容器的8888端口。

执行命令：

可以看到容器已经成功运行了。

![](https://pics7.baidu.com/feed/a6efce1b9d16fdfab46fc9b90a10f05995ee7b96.jpeg@f_auto?token=0b96ef104a28280f005fccd28cafce13)

### 4\. 访问Jupyter工作台

此时，我们在浏览器中输入本机ip地址加端口即可访问Jupyter工作台：

![](https://pics4.baidu.com/feed/96dda144ad345982d6c90126b16b4da0caef8474.jpeg@f_auto?token=790ff5ee5c784cca2d17564d8b91e213)

可以看到，顶部显示我们需要输入密码或者token进行登录。

token获取可以在终端中执行命令`sudo docker logs 你的Jupyter容器id`进行查看：

![](https://pics2.baidu.com/feed/023b5bb5c9ea15ce5e36620b0b9f46fe3b87b201.jpeg@f_auto?token=154e54c642ab9f9c16e976403e274b22)

在显示的信息底部，可以看到一长串的字符构成的token，下图红框中67f4开头，ec38结尾的这个即是。

![](https://pics5.baidu.com/feed/0824ab18972bd407251b71edc516e25c0eb3096a.jpeg@f_auto?token=06bb638ab9f636e3cd5a53d5399df865)

将这串字符复制下来，回到刚才打开的浏览器中进行粘贴：

![](https://pics6.baidu.com/feed/8ad4b31c8701a18b44fe3fb923b07b052938fe58.jpeg@f_auto?token=0557ad08e8aa9788fb6bfd3e988bb8db)

点击`log in`登录，即可进入Jupyter工作台：

![](https://pics6.baidu.com/feed/cefc1e178a82b90108ed7160cd12d57a3812ef4a.jpeg@f_auto?token=3b91aeb8f8f0afc813b25887dd9ae426)

如上图显示，则表示已经成功登录。

不过由于token不方便记忆，所以可以登出后重新登录界面，使用token来设置或修改密码，之后即可使用密码登录。

![](https://pics3.baidu.com/feed/a8773912b31bb0516b80ade1e6e5a6b948ede084.jpeg@f_auto?token=98cd5867e76657118247d8291cdcc73e)

确认后，会自动跳转到工作台界面：

![](https://pics5.baidu.com/feed/00e93901213fb80e7a7f17ba884e5323b8389459.jpeg@f_auto?token=cf5c05c15d21d26447aaa3326a4739af)

点击功能导航中的File，选择Log Out，即可登出，之后再登录工作台就可以在顶部输入刚才设置的密码登录了。

### 5\. 远程访问Jupyter工作台

现在，我们可以在本地使用浏览器登录使用Docker部署的Jupyter工作台了。

![](https://pics0.baidu.com/feed/d058ccbf6c81800a63c9448f0caa4ff7838b47b4.jpeg@f_auto?token=7be8e316290ed18efd98a94f875f73fc)

在工作台中选择Notebook下的Python3（ipykernel），即可创建一个.ipynb文件，开始愉快的使用Jupyer Notebook了。

![](https://pics1.baidu.com/feed/a2cc7cd98d1001e95a77f9b17c9107e155e79776.jpeg@f_auto?token=73ea0fd8a539e176069eb3d679df5847)

**不过我们只能在本地使用刚刚部署的Jupyer Notebook，如果身在异地，想要远程访问在本地部署的Jupyer Notebook容器，但又没有公网ip怎么办呢？**

我们可以使用cpolar内网穿透工具来实现无公网ip环境下的远程访问需求。

### 5.1 内网穿透工具安装

下面是安装cpolar步骤：

```
curl -L https://www.cpolar.com/static/downloads/install-release-cpolar.sh | sudo bash
```

Bash

Copy

```
sudo systemctl enable cpolar
```

Bash

Copy

```
sudo systemctl start cpolar
```

Bash

Copy

cpolar安装成功后，在外部浏览器上访问Linux 的9200端口即:【服务器的局域网ip:9200】，使用cpolar账号登录,登录后即可看到cpolar web 配置界面,结下来在web 管理界面配置即可。

![](https://pics1.baidu.com/feed/b3b7d0a20cf431adf07888ddf6a9d0a22cdd98dd.jpeg@f_auto?token=db266011fc9099c0588a36312ef807ae)

### 5.2 创建远程连接公网地址

登录cpolar web UI管理界面后,点击左侧仪表盘的隧道管理——创建隧道：

*   隧道名称：可自定义，注意不要与已有的隧道名称重复，本例使用了：jup
    
*   本地地址：8888
    
*   域名类型：随机域名
    
*   地区：选择China Top
    

点击`创建`

![](https://pics2.baidu.com/feed/a1ec08fa513d2697032ba2fbe864cef64116d8cd.jpeg@f_auto?token=f14b8f7aec6bd13197eeaedaf4716dae)

创建成功后,打开左侧在线隧道列表,查看刚刚创建隧道后生成两个公网地址，接下来就可以在其他电脑（异地）上，使用任意一个地址复制到浏览器访问即可。

![](https://pics3.baidu.com/feed/dbb44aed2e738bd486e424b51c14fbdb257ff99e.jpeg@f_auto?token=f5863f27707fb07e36fbb67c8c9ab85a)

可以看到，能够正常公网远程访问。

![](https://pics7.baidu.com/feed/b3fb43166d224f4ab45b2db7b768ec5f9a22d185.jpeg@f_auto?token=552cca9100ccda7984b35b278f210a54)

输入密码后即可实现在公网远程登录本地内网部署的Jupyer Notebook工作台界面。

![](https://pics5.baidu.com/feed/a2cc7cd98d1001e958b8c1eb069107e156e797ff.jpeg@f_auto?token=643864a41436ecec31cdebe9beafa5a7)

**小结**

为了方便演示，我们在上边的操作过程中使用了cpolar生成的http公网地址隧道，其公网地址是随机生成的。

这种随机地址的优势在于建立速度快，可以立即使用。然而，它的缺点是网址是随机生成，这个地址在24小时内会发生随机变化，更适合于临时使用。

如果有长期远程访问Jupyter Notebook的需求，但又不想每天重新配置公网地址，还想地址好看又好记，那我推荐大家选择使用固定二级子域名地址的方式来远程访问。