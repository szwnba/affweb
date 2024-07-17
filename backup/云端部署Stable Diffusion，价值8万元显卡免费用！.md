对于普通玩家来说AI绘画的算力一直是心中的痛，不管是升级显卡还是购买云服务，都需要拿出真金白银。如果有一种方法，可以白嫖价值8万元的高端显卡进行绘图，你会不会心动？

![](https://mmbiz.qpic.cn/sz_mmbiz_png/3WAfPxicpXckAfeI9O6b38KSPN1eSEsSL25LRDZUjiaZPY67Lrib5I2G34Pyk9uf5bvI59dHHZD5AoUkB2wlCS2lQ/640?wx_fmt=png&from=appmsg)

虽然白嫖无法为GDP做贡献，但他真的是很香![](https://res.wx.qq.com/t/wx_fed/we-emoji/res/v1.3.10/assets/Expression/Expression_52@2x.png)

闲话不说，开始整活~~  

打开电脑浏览器输入以下网址：  

```javascript
https://openi.pcl.ac.cn/user/sign_up?sharedUser=vawter
```

微信扫码注册账号

![](https://mmbiz.qpic.cn/sz_mmbiz_png/3WAfPxicpXckAfeI9O6b38KSPN1eSEsSLMHISSJLAt8icUrqrnibrrPFdU7GalvNcDK2RUuUhp67PX5LlRofwGoOw/640?wx_fmt=png&from=appmsg)

然后简单填写资料，手机号验证一下就OK了。

打开这个网站，在右上角找到“创建”，创建云脑任务，然后进行任务调试。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/3WAfPxicpXckAfeI9O6b38KSPN1eSEsSLjiakazaZdfNuqO4qx9N923ocITg5ODjvwGO7erKXmyDKpGBKdwOOeaw/640?wx_fmt=png&from=appmsg)

这里新建一个项目，自己起一个名字，

![](https://mmbiz.qpic.cn/sz_mmbiz_png/3WAfPxicpXckAfeI9O6b38KSPN1eSEsSLAiaibiaT3fwxj5r0ichelhGbemlh73HL3YSadYZmesFREHqTJt5Ma7Iviag/640?wx_fmt=png&from=appmsg)

然后下一步，选择GPU，A100 40G

![](https://mmbiz.qpic.cn/sz_mmbiz_png/3WAfPxicpXckAfeI9O6b38KSPN1eSEsSLOMfJDiaVsWFKOTWzECgib0eV3xbzRKJHn66usGJ4kn6plJKRAWibUQOgQ/640?wx_fmt=png&from=appmsg)

接下来创建镜像，将镜像地址放进输入框，点击新建  

```javascript
192.168.242.22:443/default-workspace/2a72307689ae49758c80c896fffda0a1/image:SD-Webui_v1.9.4_backup
```

![](https://mmbiz.qpic.cn/sz_mmbiz_png/3WAfPxicpXckAfeI9O6b38KSPN1eSEsSLydGKnCITgbLa1Erod7gicLuqDIFVCqcopOBplNZZ4hQicI2QzMTHWMicA/640?wx_fmt=png&from=appmsg)

这样，一个云脑任务就建立好了。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/3WAfPxicpXckAfeI9O6b38KSPN1eSEsSLwQIy3RZibibccib4l8O6VfD8RHXaCs2Tevs6eDJmjUickCZCtKXnFhg21A/640?wx_fmt=png&from=appmsg)

当状态显示为“Running”时，就可以点击调试了。点击后转到下面这个界面

![](https://mmbiz.qpic.cn/sz_mmbiz_png/3WAfPxicpXckAfeI9O6b38KSPN1eSEsSLejXp90A8ic1aXVM8CFWibBlfZnoEv3mkoAkEu3vUBgNRBvSu9rF9r2eg/640?wx_fmt=png&from=appmsg)

进入界面后，点击“Terminal”

在命令行输入以下命令  

```nginx
cp -r /sd/stable-diffusion-webui /tmp/code
cd /tmp/code/stable-diffusion-webui
python launch.py --xformers --api
```

等该刷新出SD访问网址

![](https://mmbiz.qpic.cn/sz_mmbiz_png/3WAfPxicpXckAfeI9O6b38KSPN1eSEsSL37xTl9KSMt5E0HoajHEydmk9wLT8U53EVzzM5dMK4jwZ2GPl0Rzyjw/640?wx_fmt=png&from=appmsg)

这时候，还无法访问，因为是在云端部署，我们要做内网映射，此时再新建一个终端窗口，运行一下命令

```css
ssh -R 80:127.0.0.1:7860 nokey@localhost.run
```

![](https://mmbiz.qpic.cn/sz_mmbiz_png/3WAfPxicpXckAfeI9O6b38KSPN1eSEsSL60bql7VsHPPNvLl9YXfm8GbBctPTcoiaqkrbVicFsWjYXC4e12TWEHUg/640?wx_fmt=png&from=appmsg)

复制地址到浏览器打开或者用手机扫描二维码，在手机浏览器上打开。现在应该已经打开了。这里可以看到模型、内置的提示词、插件扩展，以及默认设置的采样方法。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/3WAfPxicpXckAfeI9O6b38KSPN1eSEsSLuVlIfBicRC4JEjK3QWcZ29YPFUKShO9sRRKxFxUaL1BeGWHm48dXVQA/640?wx_fmt=png&from=appmsg)

云脑任务是按小时计费的，如果不满30分钟则不计费，超过30分钟按小时计费。像刚刚那个8万元的显卡，每小时9分钱。你只要在30分钟之内停止任务，然后重新调试，再进行SD的运行，那么你将永远不需要支付费用，就永远不受分数限制，可以无限免费使用这张卡。

这只是一个小的演示，有了免费显卡想干啥来就干啥，虽然每半小时重启一次，但结合RPA做一些单任务半小时以内的工作完全没有问题。  

比如你要生成一大批图片或者视频，测试好间隔时间，让RPA不断地循环生成即可，具体操作细节这里就不展开讲太多，领会精神~~  

更多AI技巧咨询可订阅我的专栏~~一杯奶茶少走弯路  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/3WAfPxicpXckAfeI9O6b38KSPN1eSEsSLsCjAghOGhQibicXialKR2BfhY8ia2JbYFAt0efwJorl6EiaxnhqhuUAowcw/640?wx_fmt=jpeg&from=appmsg)

[AI搜索引擎私有化部署：Gemma2+Perplexica，拉爆Llama3 Qwen2](http://mp.weixin.qq.com/s?__biz=MzIxMjY3MzgyMw==&mid=2247485938&idx=1&sn=732f55b8d57f886c0d593b1e56c20c82&chksm=97433d82a034b494074c7014c4bdcc464bb268fbdeb111614b3149da451f1c138839814e40a7&scene=21#wechat_redirect)  

[统一回复：别再问我微信能不能接入开源这个那个模型，能接入所有模型，云端的本地的。我说的~~](http://mp.weixin.qq.com/s?__biz=MzIxMjY3MzgyMw==&mid=2247485918&idx=1&sn=88f6552dc4b0e3b14da01c57deb88557&chksm=97433daea034b4b85ddf48ec1b4f71cd3336b99ac6206402fe007160040eceda7f7ee0de91b4&scene=21#wechat_redirect)  

[一个简单的演示，开源项目免费部署云端，墙内可访问，带API接口，套路适用几乎所有AI项目，门票这就值了](http://mp.weixin.qq.com/s?__biz=MzIxMjY3MzgyMw==&mid=2247485907&idx=1&sn=436fc53579d277bc97cf9abe5fea6d45&chksm=97433da3a034b4b58d97a820523ec5895799243a570a446a4ebc523431d7c018650a4e6d4a79&scene=21#wechat_redirect)  

[薅GPT4o羊毛，无需自建接口！完美闭环~~](http://mp.weixin.qq.com/s?__biz=MzIxMjY3MzgyMw==&mid=2247485876&idx=1&sn=d838455225c63be9afd8ff6bf5d155f9&chksm=97433dc4a034b4d20d8bdf6ea5e64a56baeaadee5fdcb0dfb7cac834517e6f214bd0193c6d77&scene=21#wechat_redirect)  

[我的模型听我的~~破解大模型的审查机制，提升模型生成能力，探索无限可能！](http://mp.weixin.qq.com/s?__biz=MzIxMjY3MzgyMw==&mid=2247485795&idx=1&sn=3ef4c955fe3c54f6a13357d83a7d6e51&chksm=97433d13a034b405e77bfa2a5c50ca7398403eb0a81346f6999d2ff03a1ea683a83ebedf6fd3&scene=21#wechat_redirect)  

[Coze接入个人微信，下载解压即用](http://mp.weixin.qq.com/s?__biz=MzIxMjY3MzgyMw==&mid=2247485728&idx=1&sn=0cb15118a28ccced63c0b42ec44de72c&chksm=97433d50a034b446087577d8f006aa04a27dbba0a151872323b0b021022dd62d4667965d74fc&scene=21#wechat_redirect)

[Open GPT-4o可本地部署支持多模态](http://mp.weixin.qq.com/s?__biz=MzIxMjY3MzgyMw==&mid=2247485713&idx=1&sn=43da81b11be5ec104dd4957a739727c7&chksm=97433d61a034b477dbde748582f15b947d3d9778df058860a2d8e56a6b2d7fe2595cd0d8be31&scene=21#wechat_redirect)  

[Qwen2：免费翻译与数据分析的实用技巧](http://mp.weixin.qq.com/s?__biz=MzIxMjY3MzgyMw==&mid=2247485689&idx=1&sn=3f650629d2a21013ac38a315d91371a6&chksm=97433c89a034b59f35fb60e756925d4b08359a4bda8f55572806681b54c8ba56290c4a96144c&scene=21#wechat_redirect)

[超越Llama3：快速体验本地部署glm-4-9b支持高并发请求](http://mp.weixin.qq.com/s?__biz=MzIxMjY3MzgyMw==&mid=2247485618&idx=1&sn=c8910decd51996d5907a127e3b9edb98&chksm=97433cc2a034b5d46d17cdfae5c8fe3e35b2ad3f94a6d0b06e008d5950de026c3d4eaf154342&scene=21#wechat_redirect)

[拒绝套壳山寨：原生GPT-4o免费接入个人微信，挂载本地知识库，不限次数，量大管饱](http://mp.weixin.qq.com/s?__biz=MzIxMjY3MzgyMw==&mid=2247485581&idx=1&sn=b8c283aa6bd86bb818b8703b4c0bbd7b&chksm=97433cfda034b5eb7f9cb357e1087b449c991a91747248576ac2cf888cde720f464b870d7eb7&scene=21#wechat_redirect)  

[影刀RPA演示：无限免费的GPT-4o](http://mp.weixin.qq.com/s?__biz=MzIxMjY3MzgyMw==&mid=2247485562&idx=1&sn=f79b2864fbf151268cf81d3703ab8768&chksm=97433c0aa034b51c76df28ce77196244941eca730a020ae52b519439c009fed73e610eb2f147&scene=21#wechat_redirect)  

[AutoGen Studio：构建多智能体工作流解决方案](http://mp.weixin.qq.com/s?__biz=MzIxMjY3MzgyMw==&mid=2247485536&idx=1&sn=a101d038b4e214ccf697689f72ed184f&chksm=97433c10a034b506637ae52a6f80f4e4e6e0a8dadde422e30de7b6e421f291467d8b3f4e2fd0&scene=21#wechat_redirect)  

[挑战GPT4?？Kimi+Qwen多模型协作Agent](http://mp.weixin.qq.com/s?__biz=MzIxMjY3MzgyMw==&mid=2247485467&idx=1&sn=b7e6c03f9ba3968fd00a43ac0c2e0caa&chksm=97433c6ba034b57d11fb58c84740655cd29fdd1f4b146d74cf4fcb2d1f435d1419ad275a6682&scene=21#wechat_redirect)  

[吊打Coze：原生Kimi接入个人微信，免费接入，打包下载解压即用](http://mp.weixin.qq.com/s?__biz=MzIxMjY3MzgyMw==&mid=2247485440&idx=1&sn=90ed6755567fecd1823ed491e8fa28fa&chksm=97433c70a034b566ef5ed0f20129a9d4fd20d264e44f18daed7c13885f6d60c99830ae9b4f37&scene=21#wechat_redirect)  

[so easy：月之暗面Kimi接入微信只要三分钟](http://mp.weixin.qq.com/s?__biz=MzIxMjY3MzgyMw==&mid=2247485420&idx=1&sn=9d851b3860ccccbcc311781a336a0292&chksm=9743339ca034ba8a693983c938a3d4f9f2e6aea44b1306ac091648b2a3ac81c679bc5dab1be9&scene=21#wechat_redirect)  

![](https://mmbiz.qpic.cn/mmbiz_png/3WAfPxicpXcnkVm08ewPXeModD5OO3BRo9kOLChmdAmOb8HSmiabdic9zooPePepcUfUibLPu2qnqicMmicwnfPwpSmg/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)
![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/3WAfPxicpXckH8x8aFTkTs7ic8s2MCXFIXpnznXlNh2tjBdNnshxMmgicYT4b9kWMIK99icKibib6EJEuWt297vheGpw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

**加微信不失联**
----------

分享Chat-GPT、Stable Diffusion等AI工具最新玩法和EXCEL、RPA自动化办公的高级应用