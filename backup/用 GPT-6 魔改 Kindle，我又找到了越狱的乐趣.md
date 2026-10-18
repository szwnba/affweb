 ![](https://mmbiz.qpic.cn/mmbiz_gif/dCG7OC48IfIxGgVPg63fGnHWEMfPqiazuH1h6g1CGibAFhCsRlvuTy3McpoOYpTSnibaCNtkiaYL4v7Nbm2JGbwib0Vd2SBw5XuyiaZXKkibXianrKI/640?wx_fmt=gif&from=appmsg#imgIndex=0)

谁能想到，在书架上吃灰多年的 Kindle ，被解放了！

最近，开发者 Niraj Rajgor 把一台第十代 Kindle Basic 交给了 GPT-6 去研究如何越狱、写代码、查 BUG ，最终通过 Wi-Fi 成功解锁设备，还顺手把 Kindle 改造成了一台可以循环播放照片的电子相框。

不需要使用 USB 数据线，也不需要自己熬夜去翻论坛输入指令，手搓硬件的快乐又回来了！

用Chat GPT「越狱」Kindle

「越狱」指利用漏洞突破厂商对设备软件的限制，获取更高权限，通常是 root 权限，从而安装非官方软件、修改系统、解除功能限制。

大模型看似降低了越狱门槛，但让 AI 真正取得硬件控制权并不容易，尤其是对于 Kindle 这种难啃的硬骨头。它没有开放自由安装第三方原生应用的标准入口，不同型号和固件版本还需要适配不同的漏洞与破解方案。

![](https://mmbiz.qpic.cn/mmbiz_png/dCG7OC48IfLqIWDTONm3Zn0Z2Q7NJCZsfbW1qqOicucSRGEbEgwvicBat6GaRLSXdWm8nlWwjgSo9ecDH9uRnRLkR0cIN814oDeFeITvaqkgQ/640?wx_fmt=png&from=appmsg#imgIndex=1)

不同于以往通过 USB 接口把设备接入到 Mac 上来实现越狱的方式，开发者 Niraj Rajgor 使用的是 Codex，T3Code 等工具来使人工智能依据 Kindle 网站地址以及设备信息在 Wi-Fi 环境下完成全部改造工作。

但是结果却让人意想不到。

Rajgor 尝试了 GPT-5.6 Sol ，并且把推理级别调到了 Extra High 。模型已经写出能够与 Kindle 进行通讯的代码，并且已经把辅助程序安装到设备上了，但是还是不能让程序正常运行。问题出在 Kindle 文件系统上，程序找不着合适的地方存东西，启动器也没有提示就绪。

接着他使用了 Anthropic 公司的 Fable 5.1，Opus 5.5 两个模型，在第二轮提示后就开启了安全防护机制，并且立刻中止了程序。

最终，GPT-6 Astra 在 High 推理模式下完成了这个任务。

原因在于，Anthropic 给它的高级模型加上了严格的安全防护措施。如果提示词里有提权或者设备逆向这样的高风险标签的话，那么系统就会直接断开连接，并且把流量引导向旧版本的 Opus 4.8 上。安全小组只有一个人工审核通过的小口子能够被内部 Cyber Verification Program 所批准。

根据 OpenAI 于2026年9月发布的安全报告中的信息可知，GPT-6 Astra 为第一个被 OpenAI 判定为达到 Preparedness Framework 网络安全能力Critical（关键级）要求的模型，但是思维链(CoT)的可监控性有所下降。

![](https://mmbiz.qpic.cn/mmbiz_png/dCG7OC48IfIen4tiakH0Z6Sp2zmibjPQ9guEbmHic8HXvicXYkkOgFQfpYiaDVBqLkialtKLYsia98UV8W9OKOUia4ejnXmkL8GUv9J7X6zGrFwbKtk/640?wx_fmt=png&from=appmsg#imgIndex=2)

GPT-6 并不是一下子发现 Kindle 存在一个漏洞。Rajgor 使用的软件是来自 KindleModding 社区的一个开源越狱工具 SpiderCat。该项目于 2026 年 9 月 1 日由 sparklerfish 发布，并且能够支持部分 Kindle 设备以及不同的固件版本。

SpiderCat 的一个特点是能够利用 Kindle 自带的浏览器去下载已经准备好的电子书文件，并且借助于设备上的安全隐患进行越狱，而不用使用 USB 数据线。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/dCG7OC48IfKeeiaKtOT4RNxlqDhJzrHpz0hyA3Dll1wgNsDO6IwTP8QCic1yp8GFeZEiaGLNST7gibib2gWmGC2E73qLnW75XYqQwweJ9KReloAc/640?wx_fmt=png&from=appmsg#imgIndex=3)

也就是说，底层漏洞已经被人类开发者发现，GPT-6 的工作就是把这些分散在开源社区里的技术集中起来，做成可以使用的东西。

### 出乎意料的「反馈循环」

GPT-6 并不是一下子在 Kindle 上就实现了「越狱」。

最开始的时候，它所编写出的启动器会在 Kindle 上直接崩溃。不是因为代码逻辑出错，而是由于程序构建的方式与 Kindle 老式系统的环境不兼容。经过修改后，模型才能够建立起来管理员权限的连接，并且能够完成文件传输，文字显示以及设备重启后的连接测试。

但是，能够连接到设备并不意味着就可以自己进行开发了。

尽管人工智能能够向 Kindle 下达指令，但是不能够直接看到 Kindle 屏幕上所显示的内容。每当程序出现错误时，它就只能让 Rajgor 用手机拍摄 Kindle 屏幕的照片并将其传送到 Mac 上去做进一步的分析。

![](https://mmbiz.qpic.cn/mmbiz_png/dCG7OC48IfKDxe6cicGoxoaGgTuzRh21CfELTA5NgKBWdQKwmqvHP89icxtGOMKjGaztcarricr3xq6PpiaXdv0tW2G7tbZfA1deoR3W9lyDXAA/640?wx_fmt=png&from=appmsg#imgIndex=4)

这就导致了整个流程变成了一种低效的远程合作模式：让人工智能去写代码，然后人类不断监督机器人的工作状态并提出问题，最后再让人工智能去修正错误。

Rajgor 尝试让 GPT-6 可以建立起长期稳定的诊断联系以实现自动获取设备日志，检测错误并检验修复效果而不用开发者每次都要去下载和安装软件。然后他又加入了远程截屏功能，让模型可以直接看到设备上显示的内容。

用这种方法的话，人工智能就可以自己弄明白 Kindle 的文件系统了，并且还会知道哪些目录可以放外部数据，哪些文件在重启后会被保留下来。

这背后是两种「越狱」方式的逻辑差异。

第一种是硬件越狱。通过利用安全漏洞或者其他的方式去绕过设备制造商对设备的限制，从而获得更大的控制权。另外一种是大模型越狱。使用提示词或者其他方式使模型突破开发者设定的安全界限。

模型会接触到漏洞利用，权限提升以及远程执行命令等技术，但是这些技术也可以被用作未经允许的入侵。

### 打开硬件的「锁」

这次实验还有一个值得注意的细节。

在 Mac 上所有自动化测试都通过之后，真实的 Kindle 屏幕就出现了一些问题。照片切换之后，上一张图片的轮廓还残留在电子墨水屏上，造成明显的残影，而 AI 获取的远程截图完全正常。

由于截屏只能反映系统生成的画面，而不能够真实地表现电子墨水颗粒在物理上的刷新过程。

也就是说软件对于人工智能来说没有问题，但是实际的硬件给它带来不同的结果。

当开发者发现了这个 bug 之后，调整GPT-6 使用 Kindle 系统的屏幕刷新功能来消除由于照片切换而产生的残影，但最终的效果要由 Rajgor 本人来检验。

![](https://mmbiz.qpic.cn/mmbiz_png/dCG7OC48IfJZLVFBAfZ64ghEF9HQejW8ol06WST1kuw70E0JgHXx9wwzq1Gn5g7DkswmUvribXWxe53mYDRZRjdu2hkMXjib7c6X0IhNtcL6A/640?wx_fmt=png&from=appmsg#imgIndex=5)

人工智能能够读取日志，看截图，修改代码，并不能说明它能感受到真实存在的物理世界。

屏幕残影，传感器误差，设备发热，机械故障等等都会出现在软件反馈之外。仅仅进行数字世界的自动测试是不够的，因为真实世界的硬件是否可以正常工作还需要验证。

这也暴露了 AI 进入物理世界时的一大盲区。

对于习惯处理代码、日志和数字信号的 AI 来说，硬件并非完全不可操控，而是缺少足够的感知能力。它可以向设备发送指令，却未必知道指令在真实世界中产生了什么效果。

Anthropic 在 2026 年 10 月 12 日发布的研究报告中提到过这种能力所带来的另一面。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/dCG7OC48IfLwVdia7pMcYP9301MKp67m2Qga8WeGptDSOhx9YaiblougwhjzibVky0kdOhzoMO85LGZhlsxeO5OlcULvt92SHGw7p8tibpRDFDg/640?wx_fmt=png&from=appmsg#imgIndex=6)

研究题目是《AI models may be capable of self-replicating without access to a datacenter》 （《人工智能模型不需要数据中心就可以实现自我复制》），其中 William Zhou、Daniel Freeman 两位研究者提出了一种应该引起人们重视的观点，

未来的小型人工智能模型可以通过智能家居烤箱或者价格低廉的安卓电视盒子等物联网设备来进行去中心化运行和传播。

这听着像电影《机器管家》照进现实。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/dCG7OC48IfKaR02FgevW6ZibFE3KcAhNYkHDOicAxA0sTvCl5YSWxC0XNQz6jJS2D81hqZIEcgYIfoGJ0Xvc2oh6mrIrcx4MHXBlAaa0d1qN8/640?wx_fmt=png&from=appmsg#imgIndex=7)

过去的人们一直都在讨论着，人工智能什么时候才能真正地认识这个世界。但是在此之前，它可以利用代码和网络接口来修改现实中的事物。

现在，AI已经可以打开硬件上的锁，但这只是第一步。

![](https://mmbiz.qpic.cn/mmbiz_png/dyDu14T9ZVCMpmmQUzxgYVqPjGyzRU49mvp2GS3ECuaLRaDxvG8jX157sFWmNY29qmhqJiakbKZtrQ0ukV3kThg/640?wx_fmt=png#imgIndex=8)

我们正在招募伙伴

**📮 简历投递邮箱**hr@ifanr.com

**✉️ 邮件标题**「姓名+岗位名称」（请随简历附上项目/作品或相关链接）

[更多岗位信息请点击这里🔗](https://mp.weixin.qq.com/s?__biz=MjgzMTAwODI0MA==&mid=2652396877&idx=2&sn=dfef25453a6bf0dca147b0adca3deaf7&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/dCG7OC48IfIcfAB5J4PL4LPia6HAk0VZqxhrhGUI6YhCyCLA8qibTMNpXW9odNmQpe3aiaOoEmReUbc1AyjwBUE8kFbIcsKJKtTWo6gURQ1SFg/640?wx_fmt=jpeg&from=appmsg#imgIndex=9)