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