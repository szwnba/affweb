今年9月份EdgeOne Pages低调上线了！该功能基于EdgeOne边缘安全加速，提供了静动态WEB平台的部署。EdgeOne是腾讯云最近几年比较力推的服务，提供国内版和海外版。

本文主要演示利用 EdgeOne Pages 部署一套静态或动态网站！

**有不少童鞋说注册显示试用14天？其实EdgeOne服务需要绑卡验证试用体验14天！而EdgeOne Pages服务没有试用，直接免费使用！**

更多：腾讯云国际站 / 腾讯云

官网地址
----

https://edgeone.ai/products/pages

功能特点
----

1，**海外CDN节点，无需域名备案，目前国内可流畅访问**

2，支持React、Vue、Next.js、Hexo 等构建的网站

3，与 GitHub 集成实现自动化构建部署

4，仅需一个邮箱，无需绑银行卡，手机号等等

5，基于EdgeOne 的 全球CDN（无国内节点）加速和防护

免费限制
----

目前官宣完全免费！

> 我们提供几乎无限的免费版本，该版本将始终可用，允许无限制地使用我们产品的基本功能。我们将继续增强我们的高级功能，同时确保我们服务的稳定性。随着我们走向商业化，免费版本可能会有一定的限制，例如每日构建限制，我们会及时通知您。

容量限制：每个账号所有项目总大小不能超过5G，否则无法完成构建。

目前仅支持绑定Github账号，以后可能会开发Gitlab等平台的绑定。

准备工作
----

1，一枚邮箱（推荐Gmail，Hotmail等海外邮箱）

2，Github账号

注册账号
----

1，访问 https://edgeone.ai/register，填写邮箱密码接收验证码完成注册！更简单的方式直接Google授权登录！

2，注册成功后，页面重定向到腾讯云国际站，14天试用不用领取没啥用。

3，如果界面不是中文的，可在右上角切换语言到中文简体。

开通Pages
-------

1，访问 https://console.tencentcloud.com/edgeone/pages 或者左侧菜单点击【Pages】点击立即开通就哦了~

![](https://mmbiz.qpic.cn/mmbiz_png/bG6onXJ2q5VGwD2Jgy1aKkVlh9mXOibrbPkliap0M9RQRsc1EglRura8VYPiaicblXVaABiazYvkhhPvpABDgvlia7fA/640?wx_fmt=png&from=appmsg)

绑定Github
--------

点击【绑定Github】，登录自己的Github账号，给所有的授权即可！

![](https://mmbiz.qpic.cn/mmbiz_png/bG6onXJ2q5VGwD2Jgy1aKkVlh9mXOibrb8KrfMzfcMOjMTweZq9libmOOshByojMFoxecMfY8DJVnKSjzqxD6M4Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/bG6onXJ2q5VGwD2Jgy1aKkVlh9mXOibrb3WNp2eICH2Tst88FtkKx4iajA2atKRVrFiaBa958fBUjnYVfhnE9KRibQ/640?wx_fmt=png&from=appmsg)

部署平台
----

### 部署项目

1，选择Github仓库，本文演示选择 edge-one-page

如果你的项目是Vue ，等，在页面下方选择模板类型。部署的时候会自动编译。

![](https://mmbiz.qpic.cn/mmbiz_png/bG6onXJ2q5VGwD2Jgy1aKkVlh9mXOibrbSaqSqKyE8ly4VqURMS0sA6UoqibibhLqxVsqUmkabuMnM8WcKicIFM6Jg/640?wx_fmt=png&from=appmsg)

2，设置配置项，按照你的实际情况填写即可。由于本文演示的是静态HTML部署，不需复杂的设置！

![](https://mmbiz.qpic.cn/mmbiz_png/bG6onXJ2q5VGwD2Jgy1aKkVlh9mXOibrbAic5jVMWtR2gV2ql6icJfgOkS0QUHzSWQoHLia5L0aN87RT13vH19OoZw/640?wx_fmt=png&from=appmsg)

3，设置完成后，点击开始部署。平台就开始构建部署了。稍等一会即提示部署成功！

![](https://mmbiz.qpic.cn/mmbiz_png/bG6onXJ2q5VGwD2Jgy1aKkVlh9mXOibrbHHicEM4ptPgcwK2CVsbxEonxZXhVTKnWZXLibJKGTacqlSwnMKfYHOibA/640?wx_fmt=png&from=appmsg)

4，点击预览地址，可以查看部署后的页面情况！  
![](https://mmbiz.qpic.cn/mmbiz_png/bG6onXJ2q5VGwD2Jgy1aKkVlh9mXOibrb36Hnzhy6hU5npEc4ACFP48MCuAsjPTgCN4dGbL2gRD48uo6UJNWMzg/640?wx_fmt=png&from=appmsg)

### 绑定域名

1，点击【自定义域名】，填写要绑定的域名，点击【下一步】

![](https://mmbiz.qpic.cn/mmbiz_png/bG6onXJ2q5VGwD2Jgy1aKkVlh9mXOibrb1u8NMU9VDRQyVibxWZUI35sHQmCDibzNtktWVKzu2FFU7Tm0gFVP3ASA/640?wx_fmt=png&from=appmsg)

2，页面给出域名解析的记录信息，按提示完成解析即可！

![](https://mmbiz.qpic.cn/mmbiz_png/bG6onXJ2q5VGwD2Jgy1aKkVlh9mXOibrbBPZ1ulW8GTpuFZH0peq8aoJ8LpOJA8IicNgnEpT9h1GnF5FzdM1uxGg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/bG6onXJ2q5VGwD2Jgy1aKkVlh9mXOibrbEYznSk7RyF6nVTcJpEFUxNaiaYS3748EpnBsou0icRAhlqs5FfV7jK3w/640?wx_fmt=png&from=appmsg)

3，解析完成，验证DNS生效情况！如下图则解析生效！等待SSL证书生成！

![](https://mmbiz.qpic.cn/mmbiz_png/bG6onXJ2q5VGwD2Jgy1aKkVlh9mXOibrbrQTHwydUdaf8eMdc6Mzpb07HjXtkJeCwGaf1a4ckMBjrf4z6icToKtw/640?wx_fmt=png&from=appmsg)

4，等待约30分钟左右，证书也已经生成就完成了部署了！

![](https://mmbiz.qpic.cn/mmbiz_png/bG6onXJ2q5VGwD2Jgy1aKkVlh9mXOibrbFrnWm6cFC6b7aKpMibJO7JTBP5Axs5SCTzFz0u0lnzg5E5eCWXGyMhA/640?wx_fmt=png&from=appmsg)

演示地址
----

https://jiketuchuang.com

网络情况
----

目前国内访问还算良好，平均延迟180多！

![](https://mmbiz.qpic.cn/mmbiz_png/bG6onXJ2q5VGwD2Jgy1aKkVlh9mXOibrbibmiboV30JiaQ9ziaZcFyhdxhqGiaKs5xxibgKJibYJ9HyPhLIZz0kLF7Dvew/640?wx_fmt=png&from=appmsg)

最后总结
----

1，部署还是比较简单方便的

2，Github仓库分支内容变动会触发重新构建部署

3，相对于Github Pages 和 CF Pages 来说，EdgeOne Pages国内访问更流畅

4，部署支持图片视频访问，本文的图片均为EdgeOne Pages部署的图片

**提醒：更完整以及后续请点击：** **阅读原文****去发现****！**

![](https://mmbiz.qpic.cn/mmbiz_gif/bG6onXJ2q5X1gl7CTtCLIrM623xwsHT7HPzDILrFxKUzvpvW3pKZqUHxRvicT8qQbeCnglffRWGI3PAqCGyBib9g/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=webp)

![](https://mmbiz.qpic.cn/mmbiz_gif/7QRTvkK2qC6iavic0tIJIoZCwKvUYnFFiaibvE8yamPS1RojR1NmfucyIyYeOvaY7CcN5WW1hVg11mZCuwayLtnnBQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=webp)