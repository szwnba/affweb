![](https://mmbiz.qpic.cn/mmbiz_jpg/bG6onXJ2q5Um4STC23lHPU1DYcPEhcASDA6kF77b1rtpgqBgxR9Q4jqZLzlXJo0K5tOX9WLYXbwK1PH2Z71URA/640?wx_fmt=jpeg&from=appmsg)

Visual Studio Code是一款由微软开发且跨平台的免费源代码编辑器。该软件以扩展的方式支持语法高亮、代码自动补全、代码重构功能，并且内置了命令行工具和Git 版本控制系统。用户可以更改主题和键盘快捷方式实现个性化设置，也可以通过内置的扩展程序商店安装其他扩展以拓展软件功能。

前几天偶尔使用VS Code过程中，发现其提供端口转发服务！可以将本地HTTP(S)服务映射到公网上，让其他朋友访问！

更多内容：内网穿透 / Github

准备工作
----

1，本机安装 VS Code软件，下载该软件一定要认准官网：https://code.visualstudio.com/  （网上有很多“李鬼”，一定要小心）

2，拥有Github账号

体验转发
----

### 启动服务

1，这里演示运行以下代码。当然可以穿透你本地的其他服务端口。

```
package mainimport ("fmt""net/http")func main() {http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {fmt.Fprintf(w, "如有乐享测试VSCODE内网穿透")})// 启动HTTP服务器，监听8080端口fmt.Println("Server is running on port 8080...")http.ListenAndServe(":8080", nil)}
```

2，启动Server服务，示例监听的是 本地 8080端口

![](https://mmbiz.qpic.cn/mmbiz_jpg/bG6onXJ2q5Um4STC23lHPU1DYcPEhcASK3jWg6akh8V4Lme0M2e8UC37AJ95QOicCAO3m0hoTussckpu7sgUGeg/640?wx_fmt=jpeg&from=appmsg)

### 启用转发

1，Ctrl+J 打开控制台！点击 【端口】 - 【转发端口】按步骤登录Github账号，完成授权！

![](https://mmbiz.qpic.cn/mmbiz_jpg/bG6onXJ2q5Um4STC23lHPU1DYcPEhcAScV9OPQSY8kiaROeZvbozUia1GvkgAj17h7v3uGfWcI8E3NV2g5bbfk1Q/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/bG6onXJ2q5Um4STC23lHPU1DYcPEhcASibSWvCQce8PjUSD2gw3Z6DVfHyqXrDo1D3ia5qIFO1QfEnZWd8loaQ6w/640?wx_fmt=jpeg&from=appmsg)

2，授权完成，点击【添加端口】 输入 8080端口号，确认后自动生成转发地址

![](https://mmbiz.qpic.cn/mmbiz_jpg/bG6onXJ2q5Um4STC23lHPU1DYcPEhcASaQJKHEDJiateO9HpvHNgFKvRj14fYLicCUGaka8DVd2tWBfr2XBj7cicQ/640?wx_fmt=jpeg&from=appmsg)

3，右键将端口可见性 修改为 公共 （可选），可指定端口协议为https/http（按需设置即可）

专用：仅能授权的Github账号访问

公共：任何人均可访问转发地址

![](https://mmbiz.qpic.cn/mmbiz_jpg/bG6onXJ2q5Um4STC23lHPU1DYcPEhcAS8jJCcRQhH00WcWFibujARiawKjUa0uqW0lPGmBGricUzxtphmLiamFQtRg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/bG6onXJ2q5Um4STC23lHPU1DYcPEhcASdMHMPibQl9vZfmGQLbfIrSg02F4E4u1fKHTjwyhHSV5iaSPnRWTZEhHQ/640?wx_fmt=jpeg&from=appmsg)

### 转发访问

1，浏览器第一次访问转发地址，需要确认一下。点击继续！

![](https://mmbiz.qpic.cn/mmbiz_jpg/bG6onXJ2q5Um4STC23lHPU1DYcPEhcASSxp3NU9Neia1bQmoYkDZuCuo1ibj1ZvkPgMMjbAUQsH0xwbwW1Yf7mxA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/bG6onXJ2q5Um4STC23lHPU1DYcPEhcASLgFfm0wgBv5GyreytTp389MpXdTrKUsibEcuKqoQvP5C5DWSFMPxsQQ/640?wx_fmt=jpeg&from=appmsg)

最后总结
----

1，仅支持http(s)协议

2，仅支持本机(127.0.0.1)端口转发

3，浏览器首次访问地址，需要二次确认是否打开

4，romote远程开发不能使用该功能

5，适合临时测试访问使用！！

**提醒：更完整以及后续请点击：** **阅读原文****去发现****！**

![](https://mmbiz.qpic.cn/mmbiz_gif/bG6onXJ2q5X1gl7CTtCLIrM623xwsHT7HPzDILrFxKUzvpvW3pKZqUHxRvicT8qQbeCnglffRWGI3PAqCGyBib9g/640?wx_fmt=gif&wxfrom=5&wx_lazy=1)

![](https://mmbiz.qpic.cn/mmbiz_gif/7QRTvkK2qC6iavic0tIJIoZCwKvUYnFFiaibvE8yamPS1RojR1NmfucyIyYeOvaY7CcN5WW1hVg11mZCuwayLtnnBQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1)