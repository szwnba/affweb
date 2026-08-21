![](https://mmbiz.qpic.cn/sz_mmbiz_png/o3oSjHMHKLHKM44oxVlrb4DJvKibSicJ0epfZOvFU7kqtboTxVGQSWFdGBypoumb5wzfSePO8rpKPwibEQdsAFYVQ/640?wx_fmt=png&from=appmsg)

之前为大家分享过两款手机投屏电脑的软件，分别是 [开源版的 scrcpy](http://mp.weixin.qq.com/s?__biz=Mzg3ODUzMjI5Ng==&mid=2247489305&idx=1&sn=6e81d89bf9925ecbb3ab927fd92be43c&chksm=cf1314bef8649da8fedd20c1bd4621f1a8f3305a287f32bb965e0eee3e951c47bc3b4a552816&scene=21#wechat_redirect) 和 [免费版的 Anlink](http://mp.weixin.qq.com/s?__biz=Mzg3ODUzMjI5Ng==&mid=2247491307&idx=3&sn=730ed03cac71342fd55ce7c539c0cf56&chksm=cf131d4cf864945a907876ab81eb8817a075cf17b02c05d26b19899d813176fbe9e090fcd480&scene=21#wechat_redirect)，纯净无广告，操作简单且实用。  

小编这两天逛 GitHub 又有新的收获，今天为大家安利另一款安卓手机实时投屏到电脑的开源软件：**QtScrcpy**，功能十分强悍，无需 Root 权限，支持通过 USB 或 网络连接 Android 设备，并进行显示和控制，甚至是群控。

目前该软件已开源，在 GitHub 上斩获了 13.3K Stars。

支持 Windows 、MacOS 、GNU/Linux 三大主流的桌面平台。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/o3oSjHMHKLHKM44oxVlrb4DJvKibSicJ0eLX0HIzDUch0qzWUlRrl5kxctNIXAvNMgZhFTj9N5WE83mCWzYuTHCQ/640?wx_fmt=png&from=appmsg)

**QtScrcpy**专注于：

*   精致 (仅显示设备屏幕)
    
*   性能 (30~60fps)
    
*   质量 (1920×1080以上)
    
*   低延迟 (35~70ms)
    
*   快速启动 (1s 内就可以看到第一帧图像)
    
*   非侵入性 (不在设备上安装任何软件)
    

**QtScrcpy**提供安卓手机实时投屏到电脑的功能，并在电脑上控制手机，并非市面上的流行的模拟器！

![](https://mmbiz.qpic.cn/sz_mmbiz_png/o3oSjHMHKLHKM44oxVlrb4DJvKibSicJ0ejfZC9k2VvQj21QxK92kJdYrUFvcQhicJJS4YPYL5npucIj885icVf4GQ/640?wx_fmt=png&from=appmsg)

*   实时显示 Android 设备屏幕
    
*   实时键鼠控制 Android 设备
    
*   屏幕录制、截图、同步设备扬声器声音到电脑
    
*   无线连接、多设备连接与批量操作
    
*   全屏显示、窗口置顶
    
*   安装 apk：拖拽apk到显示窗口即可安装
    
*   传输文件：拖拽文件到显示窗口即可发送文件到 Android 设备
    
*   后台录制：只录制屏幕，不显示界面
    
*   剪贴板同步: 在计算机和设备之间同步剪贴板：
    

*   Ctrl + C 将设备剪贴板复制到计算机剪贴板；
    
*   Ctrl + Shift + V将计算机剪贴板复制到设备剪贴板；
    
*   Ctrl + V 将计算机剪贴板作为一系列文本事件发送到设备
    

1、下载软件的安装包

在 GitHub releases 发行页下载最新的版本v2.1.2，根据实际使用的桌面系统选择对应的版本。**打不开 Github 的宝子，可参考公众号主页的置顶文章。** 

**文末提供了网盘下载地址，有需要的自取。** 

 ![](https://mmbiz.qpic.cn/sz_mmbiz_png/o3oSjHMHKLHKM44oxVlrb4DJvKibSicJ0ed6ykADZW3x3xLq93Ew4j6h2SQ6gQh6vWgoYNiaXqBlldNfXicJI1ggzQ/640?wx_fmt=png&from=appmsg)

2、解压运行

小编这里使用的 Windows x64 系统，所以下载的是【QtScrcpy-win-x64-v2.1.2.zip】，下载完成后解压，双击【QtScrcpy.exe】运行。主界面为暗黑主题，看着很干净舒服~

![](https://mmbiz.qpic.cn/sz_mmbiz_png/o3oSjHMHKLHKM44oxVlrb4DJvKibSicJ0ey75gYKkP83hkSlKGC1MKFxvg1dEUYbgo2QIsv4pfj0xbs44m7XSBFg/640?wx_fmt=png&from=appmsg)

3、连接手机

首次电脑连接手机需要使用到一根 USB 数据线，在手机上打开 开发者模式，然后开启 USB调试，并允许 ADB 调试。

QtScrcpy 自动识别到手机设备。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/o3oSjHMHKLHKM44oxVlrb4DJvKibSicJ0eQ43PN81ZMXMyqrMZZ2slXbp3iaHzNc6r4aW1ZTKo8ogulibJKU12gVHg/640?wx_fmt=png&from=appmsg)

点击 一键USB连接 或者 一键 WIFI 连接。如下图所示表示投屏成功。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/o3oSjHMHKLHKM44oxVlrb4DJvKibSicJ0eeOibOoPaVICd9wAY6R3fibJBWXWFpXOV2Ee9foZTgwaia1FUClrdWlmwA/640?wx_fmt=png&from=appmsg)

4、无线连接步骤

将手机和电脑连接到同一局域网，点击无线连接，会看到有设备号更新出来，双击设备开始投屏。

后续投屏都无需在使用 USB 线，断开也不再需要，只需保持在同一局域网（WIFI）内就行。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/o3oSjHMHKLHKM44oxVlrb4DJvKibSicJ0e2VicotYWouxEz1kJ3njuwB4A0Td8NQv8QE9Dnmm2VaetJM6ylibcrvlQ/640?wx_fmt=png&from=appmsg)

5、支持多台设备同时投屏，操作步骤同上  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/o3oSjHMHKLHKM44oxVlrb4DJvKibSicJ0e4CC4xEv3BdAoNU70qq2E1wPks0regGTu1Ml3ob341MmKoXEC2OmSwQ/640?wx_fmt=png&from=appmsg)

看到这里觉得和之前介绍的投屏软件大同小异，但是，作者开发了更加专业的投屏软件 **极限投屏。** 

先看效果：  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/o3oSjHMHKLHKM44oxVlrb4DJvKibSicJ0e4UwA095Bpstr1mqEkPmqnEEOMYxuExTgw1kd0ibytTyBNjVCSyuLM0A/640?wx_fmt=png&from=appmsg)

**极限投屏的功能特点：** 

*   设备投屏和控制：批量投屏、单个控制、批量控制
    
*   分组管理
    
*   支持 WIFI投屏和 OTG投屏
    
*   adb shell 快捷指令
    
*   文件传输、apk 安装
    
*   投屏数量多：在 OTG 投屏模式，设置分辨率和流畅度为低的情况下，单台电脑可以同时管理 500+ 台手机
    
*   低延迟：USB 投屏 1080p 延迟在 30ms 以内，在相同分辨率流畅度情况下，比市面上所有投屏软件延迟都低
    
*   cpu占用率低：纯 C++开发，高性能 GPU 视频渲染
    
*   高分辨率：可调节，最大支持安卓终端的原生分辨率
    
*   完美中文输入：支持闲鱼 app，支持三星手机
    
*   免费版最大能支持投屏 20台，功能无限制(除了自动重新投屏)
    

小编这里没有太多的手机，大家自行尝试演示了。使用方式也简单，可参考这篇手册，一步一步跟着做就行，安装下载时如遇杀毒软件误报，放行即可：

https://lrbnfell4p.feishu.cn/docx/QRMhd9nImorAGgxVLlmczxSdnYf

**极限投屏**可以批量投屏管理多个安卓设备，基于 QtScrcpyCore 开发。达到群控目的：一台电脑操控多部手机，让软件解放双手，极大程度上节省人工成本，提高办公效率。

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/o3oSjHMHKLHKM44oxVlrb4DJvKibSicJ0e8u0XsfjfFXUT1ePRte5iavhTKsJCBpaa2W3myGkC4CRUKW38hxNiaTMg/640?wx_fmt=gif&from=appmsg)

这在App压测时十分有用，包括测试工具与测试平台、测试外包与测试众包服务。

使用的领域涵盖了App和Web自动化测试、接口自动化、测试性能测试、安全测试、持续交付或 DevOps、测试左移、测试右移、精准测试、测试平台开发等多种场景。达到模拟人工使用 APP 的效果。

如果结合自动化的技术，模拟真实用户的操作请求，可实现吸粉、引流、广告、薅羊毛等作弊目标。

**小编最后提醒宝子们，技术无罪，但用的人......，宝子们切勿以身试险！请勿用于非法途径！**

**附项目的链接：** 

GitHub开源地址：

https://github.com/barry-ran/QtScrcpy  

Gitee开源地址：

https://gitee.com/Barryda/QtScrcpy

极限投屏使用手册：

https://lrbnfell4p.feishu.cn/docx/QRMhd9nImorAGgxVLlmczxSdnYf

****往期推荐：****

[1.9K+ stars 开源免费简洁高效的截图、划词翻译软件！](http://mp.weixin.qq.com/s?__biz=Mzg3ODUzMjI5Ng==&mid=2247495679&idx=1&sn=52670a193190560917cd339588894826&chksm=cf10ec58f867654e1e28f3dea399f4a37771ab9aed24490404dd20be57d29bcb6af79ec4dfbc&scene=21#wechat_redirect)  

[273K+ Stars！上千个免费的开源 API 公共接口，超牛！！](http://mp.weixin.qq.com/s?__biz=Mzg3ODUzMjI5Ng==&mid=2247495562&idx=1&sn=6834db92199ca15ead74740e3245abac&chksm=cf10ec2df867653b77b976f5fb4895319105b881de556c52f802fbdfa68fd27043458391e649&scene=21#wechat_redirect)  

[56k+ Stars  动画图解算法，开源项目](http://mp.weixin.qq.com/s?__biz=Mzg3ODUzMjI5Ng==&mid=2247495503&idx=1&sn=d6c6f407fd31bfb118bb76dba3812825&chksm=cf10ece8f86765fef3158026b52a4030ef3e80b7f91feb42e9a804828138c817a9d70e261917&scene=21#wechat_redirect)  

[49K+ stars 最新火爆的 GPT 学术优化开源项目](http://mp.weixin.qq.com/s?__biz=Mzg3ODUzMjI5Ng==&mid=2247495153&idx=1&sn=d43c7d477f67b21a3082237982f4cdd7&chksm=cf10ee56f8676740d716266531fc30e97c978e045cd3d69972247a915c0bf324e913f7bf0458&scene=21#wechat_redirect)  

*   本公众号所发布的部分内容源于网络，版权归原作者所有。
    
*   如果侵犯了您的权益，请及时联系我们删除或更正。我们也欢迎原创作者与我们联系，分享您的优秀作品，共同推广优质内容。感谢您的支持和理解！
    
*   本公众号推出所有内容及资源仅限用于学习和研究使用。不得用于商业或非法用途，否则后果自负！
    
*   如遇付费请立即卸载，不要犹豫！
    
*   该系列软件的文章仅供读者参考，虽经小编亲测可用，但难免有疏忽之处，一旦您下载使用此软件，后续风险需自行承担。
    

**关注公众号私信留言：** **QtScrcpy**

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/ZHqheKIE34mtRC5YQA2ibldjicXJmMrwTzkVkGqqlC83GJibcicQKJIDuqYY9AnGUUCZCYQ41cYhXwI7kSFxFGveLw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_gif/iahCauphAD3gx0XkcD7ND3bBibLbc1icXCibUbm6icxVQ7p75153AmzEgibINS8K7JzW3icDsOt4v4JGg2dePOZrZwPOA/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1)