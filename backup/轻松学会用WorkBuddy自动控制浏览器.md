没记错的话，WorkBuddy算是在5.8.2版本的时候，上线了浏览器自动化的功能，之前还是通过安装Broswer Skill来实现控制浏览器对网页进行一些操作的。

有意思的是，Broswer Skill也是腾讯的一个团队在做，官方推出来的Skill，现在估计是整合到WorkBuddy一起了。当然，其它第三方做的Broswer Use相关的Skill也是很多的。

有关Broswer Use跟Computer Use的详细原理介绍，老马之前也写过一篇文章，不了解的小伙伴可以回看：[一文带你搞懂WorkBuddy的自动化操作](https://mp.weixin.qq.com/s?__biz=MjM5ODAxOTA2Mg==&mid=2649977207&idx=1&sn=6e22cb37031cd3f39805ed3f441e2df8&scene=21#wechat_redirect)，这里就不再啰嗦了。

但对于WorkBuddy新版推出的浏览器自动化功能，有些小伙伴还在问具体怎么使用，还是搞不懂里面的逻辑。所以今天就补充多一篇文章教程来说明一下，以后大家遇到此类问题举一反三即可，都是差不多的操作逻辑。

本文脉络

01

底层CodeBuddy与Computer Use

02

打开浏览器自动化开关

03

安装Chrome扩展程序

04

实测：B站视频点赞任务

01 · CHAPTER ONE

### 底层是CodeBuddy，Computer Use还没放出

首先WorkBuddy的底层是CodeBuddy，它本来是带有Computer Use能力的，也就是自动控制操作电脑的能力，只是不知道为啥到现在WorkBuddy还不把这个能力放出来，人家Codex都玩得不知道多6了。

估计是考虑到不同模型的能力差异问题，GPT系列模型在这方面配合Codex确实是有如神助的，咱们就不纠结了，再等等，接下来进入Broswer Use的使用教程。

02 · CHAPTER TWO

### 打开浏览器自动化开关

现在WorkBuddy的最新版本已经是5.8.3了(目前是5.9.2，这篇稿子压了个把星期才想起来发，但没有影响），你可以更新后，在左下角的账号头像位置点开，进入设置页面：

![](https://mmbiz.qpic.cn/mmbiz_png/iaC8bMtQHCTEfmdo3MuUibcPtFaT2b4YdHSt2enPHuFrJndKibvSAbNN06zcVibXjIsh0UyYsm9ZhfKybfcIxfB7kWlTVPSmewD6c5ia6o6cFCPk/640?wx_fmt=png&from=appmsg#imgIndex=1)

这里多一嘴，经常有小伙伴会问，WorkBuddy的签到活动是不是结束了，怎么没看到Buddy加油站。这个有时候是版本更新后，网络加载问题没显示出来。只要你安装的是WorkBuddy国内版，重启一下就行了。

像Buddy加油站签到领鸡蛋的活动是按期进行的，这么重要的运营引流活动，真要下线了，WorkBuddy不会悄无声息地下线的，起码会出一个正式的公告通知，所以大家也不要老是太过于担心鸡蛋没得领了。

打开设置页面后，在左侧的菜单中找到智能体，就可以看到让WorkBuddy控制浏览器的功能开关了。打开它就行，然后上面的经济模式也是可以打开的，后续能够帮我们节省token的消耗：

![](https://mmbiz.qpic.cn/mmbiz_png/iaC8bMtQHCTFibFYTECYKKaibYBMhib1CcQxLde5s1RbiaOCm7pASPxHL8ZqyDYz3WJLNgTVIn9icU4dwXnzaH9trZI5aaFpCuampkq7ib1j7rtjgA/640?wx_fmt=png&from=appmsg#imgIndex=2)

打开了浏览器自动化控制的开关，可以看到还需要我们去安装对应的浏览器插件。这里提供了Chrome扩展程序、Edge扩展程序、QQ浏览器扩展程序三种。一般来说，Chrome扩展程序的兼容性高一些，适合各种浏览器。

03 · CHAPTER THREE

### 安装Chrome扩展程序

老马个人也建议你首先安装Chrome扩展程序，电脑上没安装谷歌浏览器无所谓，像什么360安全浏览器、QQ浏览器、搜狗浏览器等都是可以用的，换句话讲都是一样的谷歌浏览器内核，当然也顺带了IE内核。

但是还是那个但是，你点击前往安装Chrome扩展程序时，发现打开的是谷歌的扩展程序商店，在国内没有神秘力量是打不开的。而其它两个浏览器的扩展程序，则需要你电脑上已经安装过该浏览器，国内是可以下载的。

因此老马把Chrome扩展程序安装文件放在了服务器上，你可以直接使用电脑的浏览器访问下面的下载地址，把扩展程序文件下载到电脑本地桌面即可：

www.majiabin.com/AI/WorkBuddy\_extension.crx

当然，5.9.2的版本官方又更新了一个手动安装的方式。它是把扩展程序的安装包解压之后放在了本地，你需要在下面的操作中选择加载未打包的扩展程序。如果你搞不懂，那就按老马下面介绍的方式去操作。

把crx扩展程序文件下载完，接下来老马以谷歌浏览器为例进行演示，上面提到的其它浏览器操作其实也差不多的。在浏览器右上角找到拼图的小图标，打开管理扩展程序。或者点击三个小点，打开扩展程序都行：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaC8bMtQHCTHEictBZ3z6a581nIDBXfRa8oJZcaWmXkBsEbA60IiafqibVUyibpRHUmibNibOWBnbonyeQfwS5M6QwY3sZDRoAdb7uvfA1ialP07B6k/640?wx_fmt=png&from=appmsg#imgIndex=3)

进入拓展程序页面，记得在页面右上角把开发者模式的开关打开。然后再把刚才下载好的crx扩展程序文件选择上，拖动到页面上进行安装即可：

![](https://mmbiz.qpic.cn/mmbiz_png/iaC8bMtQHCTE3QlEnn4t1tDdCjLwxwHnWfEPaF92u9oLkgE8xukQ4CvfJFGwCPFY3LlZwJaOaxBw85XzwelJmTvCNhIEKbPiaz4aibJUayFGc8/640?wx_fmt=png&from=appmsg#imgIndex=4)

拖动进去后，会询问你是否添加WorkBuddy的扩展程序，点击添加扩展程序就可以了：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaC8bMtQHCTFMJGNvkAP84XZKc2HHJIr1ibr9rbYlRPWdlwMIjO1GaHucRNf7qMHvibKTpSDmTLibe2PibnGRpqGhB8J7oj7cGXLMpEo7hxVRAW8/640?wx_fmt=png&from=appmsg#imgIndex=5)

WorkBuddy的浏览器控制扩展程序安装成功之后，在谷歌浏览器的右上角就会显示对应的小图标，点开图标就能看到已经连接上了我们的WorkBuddy电脑客户端了：

![](https://mmbiz.qpic.cn/mmbiz_png/iaC8bMtQHCTFSpDXcYkhp2DPT87O9a8cYibibdlC75PXJs77H4c8nFia3bdLbvN9icRN4LBcpeVLFu45lF8cqiaG7VTmkJEA4XjRG2T3MMbs7XOmE/640?wx_fmt=png&from=appmsg#imgIndex=6)

与此同时，你回到WorkBuddy电脑客户端，进入设置里面的智能体，查看一下刚才我们前往安装扩展程序的地方，也会显示Chrome扩展程序是已安装的状态：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaC8bMtQHCTFVjKv30oHEexCiajgxmkOFBFNGGSPEp2rEdSe9xXoe1pFIkNH8onUfsv49SKluXj6ltnQibPn3wib7iaEDDNZMCSfhGEIibaA8pJo4/640?wx_fmt=png&from=appmsg#imgIndex=7)

04 · CHAPTER FOUR

### 实测：控制浏览器给B站视频点赞

接下来使用也非常简单，在WorkBuddy电脑客户端新建个任务，输入一段提示词，比如老马这里输入的是使用WorkBuddy控制谷歌浏览器，打开B站搜索马佳彬，给个人主页的前三个视频作品点个赞：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iaC8bMtQHCTEIttPrI6n1W4qPicu5Hx93yvCe1FRubVOjpeFa1406picozvibxh4OX4n13tQmiakOu4EtpLmTOECUq9l3DlekcUlNGLKQOtOsZvc/640?wx_fmt=png&from=appmsg#imgIndex=8)

通过模型的思考过程得知调用的是workbuddy-browser-use技能，WorkBuddy会结合刚才安装的Chrome扩展程序，在谷歌浏览器新开一个单独的标签，实现自动控制浏览器打开B站，给视频作品点赞的操作：

![](https://mmbiz.qpic.cn/mmbiz_png/iaC8bMtQHCTGULB798fwg0FuutsmGicWDe6takI8paYME2hfd7BoQYvDzfIiaAnsEvFsx2g5C745VrVAXcJicY8nsEq36mEuC6XdEvFtGia0yre4/640?wx_fmt=png&from=appmsg#imgIndex=9)

整个操作耗时6分钟多一点，消耗了19.84个WorkBuddy积分就完成了，完成后也会给到一份详细清单，总体来说这个简单的小任务也没啥难度：

![](https://mmbiz.qpic.cn/mmbiz_png/iaC8bMtQHCTEqhohKhYIetZonh0FCvaGnbJG7TZJ9DItvc3yH4KVX1rVdGXwibKfxEc18aWbAib4uTI2cTicSpvEGYC9pic6V4BryRJvh176AUds/640?wx_fmt=png&from=appmsg#imgIndex=10)

如果是复杂程度比较高的，比如让WorkBuddy把一份表格，自动帮你录入到你已经登录的网页版OA系统里面。这里面除了会去获取OA系统的网页UI元素，还有可能需要去截图分析，任务所耗费的时间和积分肯定是多一些的。

**其次就是目前的浏览器自动化操作，它的执行速度和准确度，按国内的Agent跟模型来说，肯定是不如Codex那么强的。遇到一些卡点问题，你得调试，自行截图或者告诉Agent操作路径，跑通了就可以固定成Skill的。** 

∞ · POSTSCRIPT

### 写在最后

好了，以上就是今天的分享。欢迎**关注、点赞、转发一键三连**。有任何问题和需求，请在评论区留言，回见！