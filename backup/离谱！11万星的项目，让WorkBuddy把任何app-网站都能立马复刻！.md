你好呀，我是五竹。

刷到别人的App里一个功能特别好用，想在自己的产品里也做一个——以前怎么办？要么靠猜，要么找懂逆向的人帮你拆。

今天分享一个GitHub上**11万+星**的项目，它的做法简单粗暴：**你看到一个喜欢的功能，让AI帮你分析它怎么实现的，一直深入到二进制层面，然后在你的项目里复刻它。** 

单日涨星2.5万，GitHub Trending登顶。

它叫 **REA**（Reverse Engineer Anything，逆向工程一切），MIT协议开源。

项目地址：https://github.com/morluto/rea

![](https://mmbiz.qpic.cn/mmbiz_jpg/zicAPqf97HX4wkuaGLNndFSJh3IBcAINIUia660AicnX0Tl04PQK4RO6ic4zxcPnicqL0wlDibkkYsayr94y7PBVa1uB023oaLC5nIZgQicXyDrkzI/640?from=appmsg#imgIndex=0)

REA 分析界面

* * *

一、以前逆向要学三年，现在一句话
----------------

传统逆向工程是个**高门槛**的活——你得会用Ghidra、IDA这些专业反编译工具，看得懂汇编和字节码，理解程序的底层运行逻辑。光入门就要几个月。

REA 做了一件事：**把这些专业工具封装成了一个MCP服务器，让AI Agent可以直接调用。** 

MCP（Model Context Protocol）是AI Agent调用外部工具的标准协议。REA把逆向工具包装成MCP接口后，你的WorkBuddy就多了一双"透视眼"——你只需要用自然语言说"这个App的这个功能怎么实现的"，Agent自己调工具去分析，把结果翻译成你能看懂的话。

**门槛从"会用逆向工具"降到了"会说话"。** 

* * *

二、它能分析什么
--------

覆盖范围很广：

*   **原生二进制文件**
    
    ——Windows/macOS/Linux的可执行程序
    
*   **JavaScript和Electron应用**
    
    ——VS Code、Discord这类桌面应用
    
*   **.NET程序集**
    
    ——C#开发的应用
    
*   **网站**
    
    ——前端代码、API调用、运行时行为
    

你也可以不通过Agent，直接在终端里用它的工具——它既是Agent的Skill，也是独立的命令行工具集。

所有分析在**本地运行**，不上传你的文件到任何云端。而且结果会附带**证据和局限性说明**——告诉你"我是怎么得出这个结论的"以及"哪些部分我不确定"。

* * *

三、真实场景
------

README里描述的核心场景特别直接：

> 看到一个App里你喜欢的功能？让你的Agent用REA分析它。它可以在没有源码的情况下检查这个App，解释这个功能怎么工作的，展示证据，然后在你的项目里构建一个版本。

翻译成人话：

1.  你看到竞品App里一个很酷的交互
    
2.  对WorkBuddy说"帮我分析这个App的这个功能怎么实现的"
    
3.  REA在本地拆解这个App的代码
    
4.  Agent给你解释实现原理，附带代码证据
    
5.  你说"在我的项目里做一个类似的"
    
6.  Agent基于分析结果帮你实现
    

**从"看到"到"复刻"，全程不离开对话框。** 

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zicAPqf97HX5ot81jWm2tfls941H8sic6hwJtu5lLueGNITcPfmMQ1K9ZGu8ibjdeXvZXBusAs6vUSpPo3ibrZjjjXzEvDHbAMDxiaQAAbq4Mx6c/640?from=appmsg#imgIndex=1)

REA 项目首页

* * *

四、怎么用
-----

一条命令安装：

```nginx
npx rea-agents setup
```

```

```

或者对WorkBuddy说：

```javascript
帮我安装这个技能：https:
```

```

```

装好后：

```css
帮我分析这个App的登录流程是怎么实现的：[App路径]
这个网站的动画效果用了什么技术？帮我逆向分析一下
帮我看看这个Electron应用的本地存储用了什么加密方式
```

```

```

支持Claude Code、Codex等主流Agent。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/zicAPqf97HX4vicmbuK28Vk3FypRia6Pib6CAvxQLb7icVMnhJusxsoWnrYUZuNBiakarnKICM7tunIW5WASpMh85ympuvqdoXOKlZFRKrmUcsNoY/640?from=appmsg#imgIndex=2)

项目版本页

你学会了吗？

最后，给大家整理了一套WorkBuddy知识库《WorkBuddy从入门到实战指南》，自取👇

点击↑↑↑