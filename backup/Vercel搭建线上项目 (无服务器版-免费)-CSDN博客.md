前言
--

*   假如想做一个简单的功能，例如一个[博客网站](https://so.csdn.net/so/search?q=%E5%8D%9A%E5%AE%A2%E7%BD%91%E7%AB%99&spm=1001.2101.3001.7020)或网页小程序，以往我是要先花几百元购买ECS服务器，在服务器上安装运维面板、再安装Nginx、MySQL、NodeJS、Java、PHP等环境，最后实现一个API服务器。
    
*   这种传统模式不但有着较高的技术门槛，而且站点的维护升级工作就已经足够繁琐、分散了诸多精力。
    

![](https://i-blog.csdnimg.cn/blog_migrate/b7c82e9ee7c267f5de857ca200f5a633.jpeg)

无服务器方案
------

这篇文章我给出了一个方案，借助Vercel、NextJS让你几分钟就能实现一个CURD（增删改查）的后端API，无需购买服务器，完全免费。

该方案有以下两个优点:

*   操作简单：服务器的管理从应用开发中抽离了出来。云提供商负责置备、维护和扩展服务器基础架构等例行工作。开发人员可以简单地将代码进行自动打包与部署。
    
*   节省费用：部署之后，无服务器应用即可响应需求，并根据需要自动扩容。公共云提供商的无服务器产品通常通过事件驱动执行模型来按需计量。因此，当无服务器功能闲置时，不会产生费用。
    

工具介绍
----

### Vercel是什么

它是一个强大的 **网站托管服务**。Vercel类似于github page，但比github page强大、速度也快得多。通过绑定你的github项目，就能实现提交代码自动部署你的应用。

![](https://i-blog.csdnimg.cn/blog_migrate/b300d84b95c687329d15e15c03dbfbfe.png)

Next.JS是什么
----------

Next.js是Vercel官方推荐的、一款极易上手的React 应用框架。使用NextJS可以快速开发 React 应用，而不是先花很多时间和精力去折腾各种开发工具。  
![](https://i-blog.csdnimg.cn/blog_migrate/8b15175fe3c89c48fcf5f986d0f67353.png)

Serverless 是什么
--------------

简单地理解：Serverless = Faas（函数即服务） + Baas（后端即服务）；

Serverless不代表再也不需要服务器了，而是说：开发者再也不用过多考虑服务器的问题  
![](https://i-blog.csdnimg.cn/blog_migrate/a0845f84ebffb81f1b2c3cd51278afad.jpeg)
  
这里只是截图腾讯云对Serverless的表述进行讲解, 并不代表腾讯云才有Serverless技术, 望知悉!

快速开始
----

### 账号

首先要在 [Vercel](https://vercel.com/signup) 后台注册一个账号，推荐用github直接登录。

### 初始化Vercel环境

执行 npm i -g vercel 安装vercel（NodeJs版本大于12）

![](https://i-blog.csdnimg.cn/blog_migrate/7ebc4982feb2faad011d0d86d28c1f0d.png)
  
控制台输入 vercel login 登录Vercel账号，输入指令后需要验证你的vercel邮箱，vercel会向该邮箱发送一个链接，点击邮箱中的链接就可以确认登录。

![](https://i-blog.csdnimg.cn/blog_migrate/da5f7482a4160ba9069333a140c65a5f.png)

### 创建一个Vercel项目

创建一个空目录 demo-vercel

```
`mkdir demo-vercel && cd demo-vercel` 

*   1


```

输入命令 vercel ，将当前目录初始化为vercel项目，vercel会询问你一些信息，一路回车就好。

![](https://i-blog.csdnimg.cn/blog_migrate/ce35c51c0d05a87dcdf9d4d5adf46b8e.png)

### 第一个简单页面

在根目录新建的配置文件vercel.json，并填入下面的配置。(配置说明默认访问服务将跳转到welcome.html页面)

```
`{
    "routes": [
        {
            "handle": "filesystem"
        },
        {
            "src": "/(.*)",
            "status": 404,
            "dest": "/welcome.html"
        }
    ]
}` 

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


```

welcome.html页面内容如下：

```
`<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>欢迎</title>
	</head>
	<body>
			<h1>欢迎</h1>
	</body>
</html>` 

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


```

代码结构

![](https://i-blog.csdnimg.cn/blog_migrate/6f44d119d7264355a33d8ffaaad69f85.png)

### 第一个api接口

Vercel官方仅支持 **Nodejs、Go、Python、Ruby** 这几门语言创建服务，具体使用接入请参考 [官方文档](https://vercel.com/docs/functions/runtimes)

这里选用 Node.js 来开发接口，初始化package.json、引入vercel相关的Typescript便于规范，执行以下脚本:

```
`npm init 
npm i typescript 
npm i @vercel/node -D` 

*   1
*   2
*   3


```

![](https://i-blog.csdnimg.cn/blog_migrate/adedf74738ed75fcb928504b807596ea.png)
  
新建目录/api，并在/api下创建文件helloworld.ts， 文件内容如下：

```
`import { VercelRequest, VercelResponse } from '@vercel/node';
module.exports = async (req: VercelRequest, res: VercelResponse) => {
    const data = {
        msg: "hello world!"
    };
    res.status(200).json(data);
}` 

*   1
*   2
*   3
*   4
*   5
*   6
*   7


```

当前目录结构如下：

![](https://i-blog.csdnimg.cn/blog_migrate/0a3eb5a1f1fd153972ae625706814a55.png)
  
执行 vercel dev 进行本地调试

```
`vercel dev --debug` 

*   1


```

访问页面 http://localhost:3000/api/helloworld ; 链接效果如图：

![](https://i-blog.csdnimg.cn/blog_migrate/eb107f19123803b1487055b883331ba5.png)

### 部署上线

在控制台输入 vercel 即可开始自动部署，点击控制台输出的Preview后面的链接即可预览部署效果。

![](https://i-blog.csdnimg.cn/blog_migrate/7b74c2f6b3ddab9310eeab8715eafedc.png)
  
![](https://i-blog.csdnimg.cn/blog_migrate/13ae3a201672052b44d38e38bd84822e.png)
  
![](https://i-blog.csdnimg.cn/blog_migrate/3d140731bee638a39ebabae5e273999f.png)

数据库持久化
------

API接口最基本的增删改查等功能，依托于数据库持久化。这里我们选择接入免费的云数据库。

这里我使用 mongodb 举例, 你也可根据实际业务需要接入任意数据库来完成你的项目。因篇幅有限不做拓展

[https://cloud.mongodb.com](https://cloud.mongodb.com/) 提供的Mongodb数据库举例，512M免费存储额度，个人使用已经绰绰有余。

**当然还有 db4free.net、mlab.com等其他云数据库网站，除此之外还有免费的rabbitMQ，kafka等。** 

### 创建数据库

在 [https://cloud.mongodb.com](https://cloud.mongodb.com/) 注册一个账号,注册完毕后进入找到 Create a cluster， 选择Free的免费方案。

![](https://i-blog.csdnimg.cn/blog_migrate/f29c6a466ca96994cacea3d5e71534a9.png)

配置服务器地点和服务提供商，(举例用的是Google Cloud，北美中部的服务器)；等待1-3分钟后创建完毕：

![](https://i-blog.csdnimg.cn/blog_migrate/64e2b00bf7b3efbd77979544fc33739c.png)

### 配置连接参数

创建一个访问用户，并选择用Password密码的形式连接：

![](https://i-blog.csdnimg.cn/blog_migrate/2bdb65565544e722a44b11ad09b83984.png)
  
添加允许访问改数据库的IP地址：这里可以点Add current ip address 表示添加当前电脑ip地址，点击 Allow access from anywhere 表示允许所有网络ip地址访问该数据库（这样可能会有风险）

![](https://i-blog.csdnimg.cn/blog_migrate/a5f3314c5994b0b9596f36f95ed1a372.png)
  
![](https://i-blog.csdnimg.cn/blog_migrate/381c2ab958557786e60fb389b9df7700.png)

### 客户端连接数据库：

点击connect

![](https://i-blog.csdnimg.cn/blog_migrate/1615d552e48e7a08fea3523a8c96b08e.png)
  
点击第三个Connect using MongoDB Compass，采用图形界面连接；

![](https://i-blog.csdnimg.cn/blog_migrate/7369708d1ee4feddfab013cdb7323c5d.png)
  
复制下面的连接代码

![](https://i-blog.csdnimg.cn/blog_migrate/3efb252aa8b4bee6d5a53c5f503a911a.png)
  
打开Navicat，选择新建MongoDB，在URI中输入刚才复制的代码，并且将密码部分改成你实际设置的密码；点击测试连接。

![](https://i-blog.csdnimg.cn/blog_migrate/00784505586e23ade9085c826ebf5846.png)
  
![](https://i-blog.csdnimg.cn/blog_migrate/0955822439374435a633adf1267898a4.png)

### 添加测试数据

我们用Navicat往MongoDB添加一条数据：创建一个数据库名叫vercel、创建一个集合的名叫demo，document内容为 {name:“tanghh”}

![](https://i-blog.csdnimg.cn/blog_migrate/f3ef34cceb64a228c19f6783a4abac14.png)
  
至此，数据库的创建，与连接配置已经完成，接下来在代码中实现功能

### 在代码中访问数据库

NPM 安装Mongodb依赖库

```
`npm i mongodb
npm i @types/mongodb -D` 

*   1
*   2


```

![](https://i-blog.csdnimg.cn/blog_migrate/ec068b23cfc92700029530f07bf86769.png)
  
接下我们用接口查询这条数据。我们在api目录下创建名为getUsername.ts的文件

```
`import { VercelRequest, VercelResponse } from '@vercel/node';
import { MongoClient } from 'mongodb'
const CONNECTION_STRING = "mongodb+srv://xxx/vercel";
module.exports = async (req: VercelRequest, res: VercelResponse) => {
  const client = await MongoClient.connect(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = await client.db('vercel');
  var result = await db.collection("helloworld").find().toArray();
  console.log(client)
  console.log(db)
  console.log(result)
  res.status(200).json(result);
}` 

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


```

注意：

代码中的CONNECTION_STRING信息更换成你自己的!!!  
CONNECTION_STRING变量的值，和之前用Navicat连接的代码不太一样，可以在网站后台找到, 如下图:  
![](https://i-blog.csdnimg.cn/blog_migrate/0bebaaa678f9fff29abee97e7d175f91.png)

### 完成效果展示

至此，一个通过MongoDB返回数据的serverless接口开发完毕；类似的你可以用这个平台简易的完成一个CURD的功能

![](https://i-blog.csdnimg.cn/blog_migrate/1225e3cf69edd9412f0df95547dacf25.png)
  
通过运行vercel --prod命令即可将其发布。

总结
--

动态API，数据库，托管服务器都是免费的，结合这套方案，轻装上阵，搭建你的API服务端吧~

拓展
--

### Vercel API说明

在 vercel 中通过 res.json(obj) 来返回 JSON 数据，像这样的简单方便的函数并不为原生的 [HTTP Handler (opens new window)](https://nodejs.org/api/http.html) 所提供。而由 vercel 提供的 [Node.js Helper (opens new window)](https://vercel.com/docs/functions/runtimes#official-runtimes/node-js/node-js-request-and-response-objects) 实现:

*   req.query: An object containing the request’s query string, or {} if the request does not have a query string.
    
*   req.cookies: An object containing the cookies sent by the request, or {} if the request contains no cookies.
    
*   req.body: An object containing the body sent by the request, or null if no body is sent.
    
*   res.status(code): A function to set the status code sent with the response where code must be a valid HTTP status code. Returns res for chaining.
    
*   res.send(body): A function to set the content of the response where body can be a string, an object or a Buffer.
    
*   res.json(obj): A function to send a JSON response where obj is the JSON object to send.
    
*   res.redirect(url): A function to redirect to the URL derived from the specified path with status code “307 Temporary Redirect”.
    
*   res.redirect(statusCode, url): A function to redirect to the URL derived from the specified path, with specified HTTP status code.
    

### Vercel.json 重定向说明

部署完成后，默认的路由路径是 /api，此时 / 会显示文件目录，如果想更好地扩展路由呢？

通过配置文件 vercel.json 配置 Rewrites/Redirects 可完成此功能，通过这一功能可以快速实现反向代理、路由转换等功能。

```
`{
  "rewrites": [
    {
      "source": "/",
      "destination": "/api"
    }
  ]
}` 

*   1
*   2
*   3
*   4
*   5
*   6
*   7
*   8


```