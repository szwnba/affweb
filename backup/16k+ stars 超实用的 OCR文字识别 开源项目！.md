#### ****每天给大家带来网站工具、********开源社区项目、开源软件、********安卓&IOS软件********等黑科技！****

****公众号推送改版，请务必点击【**爱编程爱技术**】右上角【******设为星标******🌟】，这样才不会错过最新的文章推送。****

#### ******如果你们有什么好的建议，也可以在后台留言。******

#### ****创作不易，希望大家给一点鼓励，给文章点下********"********赞********"********和"********在********看********"，谢谢大家！********每日********持续****更新****，望宝子们多多支持~****

![](https://mmbiz.qpic.cn/sz_mmbiz_png/o3oSjHMHKLHeAFKXh8ybUFM6GblgPy6eXIQb9mXQU89FjH38SJKWXX6lytticyrM9ibyXyag6rqdBOX2ibUmOp3lg/640?wx_fmt=png&from=appmsg)

小编今天为大家分享一个最近特别火的 OCR文字识别 开源项目：**Umi-OCR**。开源、免费、无需联网，解压即用。支持截屏/粘贴/批量导入图片、段落排版/排除水印、扫描/生成二维码、条形码。内置多国语言库。

该项目在 GitHub 上已斩获 16.2 Kstars，非常受欢迎。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/o3oSjHMHKLHeAFKXh8ybUFM6GblgPy6eT8v9yYeL0EOohwLeBQPibfRx5V1s33H9PSuDOZNGU0LSqMvVa0C3uSQ/640?wx_fmt=png&from=appmsg)

*   支持 win7 x64 及以上的系统，附带多国语言识别库  
    
*   免费：本项目所有代码开源，完全免费。
    
*   灵活：支持命令行、HTTP接口等多种调用方式。
    
*   方便：解压即用，离线运行，无需网络。
    
*   高效：自带高效率离线OCR引擎。只要电脑性能足够，可以比在线OCR服务更快。
    
*   功能：截图OCR、批量OCR、 二维码、条形码、 数学公式识别（测试中）
    

1、在 GitHub 发行页下载最新版本

打不开GitHub的小伙伴可参考文章：[Github 绝版开源加速器](http://mp.weixin.qq.com/s?__biz=Mzg3ODUzMjI5Ng==&mid=2247492876&idx=1&sn=b8a76aeafd3e51d121111914be82311e&chksm=cf10e6abf8676fbd3e93c20d70ac7d3f11b099fc22496382d8d2bda8e8fe766952b4618bb3ab&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/o3oSjHMHKLHeAFKXh8ybUFM6GblgPy6e8RpanukaViak7YBls5jUMPt4rQ00Ezibt2W4bqHhYicHiblnbrzHc2gbZA/640?wx_fmt=png&from=appmsg)

开发者提供了 Paddle 和 Rapid 两个版本，差别仅 OCR 引擎插件不同，其它功能完全一致。

二者区别如下：

*   Paddle 版性能好，速度快，占用率高，适合高配机器。
    
*   Rapid 版速度稍慢，内存占用低，适合低配机器，兼容性好
    

**重要提示：如果执行 OCR 时报错 \[Error\] OCR init fail，大概率是 CPU 不兼容 Paddle，请换用 Rapid 版本。** 

2、解压安装

.7z.exe 为自解压包，直接双击运行，然后解压到指定的目录即可。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/o3oSjHMHKLHeAFKXh8ybUFM6GblgPy6egvw36SkfXQ6YjbBice7Libibn4wW85IP7kQIcTkMQOM9FUQTDJRJVeaew/640?wx_fmt=png&from=appmsg)

双击【Umi-OCR.exe】启动软件。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/o3oSjHMHKLHeAFKXh8ybUFM6GblgPy6eyct8pZF4rxtLw9oHGWYickf2XsFW2NDhGjwmVXlf84icohIiaJzUyLEyg/640?wx_fmt=png&from=appmsg)

3、全局设置

*   一键添加快捷方式或设置开机自启
    
*   更改界面语言。Umi支持繁中、英语、日语等语言
    
*   切换界面主题。Umi拥有多个亮/暗主题
    
*   调整界面文字的大小和字体
    
*   切换OCR插件
    
*   渲染器：软件界面默认支持显卡加速渲染。如果在你的机器上出现截屏闪烁、UI错位的情况，请调整界面和外观 → 渲染器 ，尝试切换到不同渲染方案，或关闭硬件加速。
    

![](https://mmbiz.qpic.cn/sz_mmbiz_png/o3oSjHMHKLHeAFKXh8ybUFM6GblgPy6e8ILUrTt0McE8pJib1K0c4VfCuFMhEiaV1ULsKic5VbTnT4yNNHv7b8V4A/640?wx_fmt=png&from=appmsg)

**添加标签页**
---------

可按照自己的喜好，点击【+】添加需要的标签页。

标签栏左上角可以切换窗口置顶。右上角能够锁定标签页，以防止日常使用中误触关闭标签页。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/o3oSjHMHKLHeAFKXh8ybUFM6GblgPy6elbWJByLRmk8vlzlmBPzHxNnzHwYiajvCnna4Y3SkoszhMmDozibadpwA/640?wx_fmt=png&from=appmsg)

### **截图OCR**

可用快捷键【win+alt+c】唤起截图，识别图中的文字。

*   左侧的图片预览栏，可直接用鼠标划选复制。
    
*   右侧的识别记录栏，可以编辑文字，允许划选多个记录复制。
    
*   也支持在别处复制图片，粘贴到Umi-OCR进行识别。
    

![](https://mmbiz.qpic.cn/sz_mmbiz_png/o3oSjHMHKLHeAFKXh8ybUFM6GblgPy6eVry733ETjNy1bklot9vrOMzXnx0FIGz5iaft7RmAUxGa5xYRBJ6sQlg/640?wx_fmt=png&from=appmsg)

**段落合并**

OCR文本后处理，可以整理OCR结果的排版和顺序，使文本更适合阅读和使用。

预设方案：

*   单行：合并同一行的文字，适合绝大部分情景。
    
*   多行-自然段：智能识别、合并属于同一段落的文字，适合绝大部分情景，如上图所示。
    
*   多行-代码段：尽可能还原原始排版的缩进与空格。适合识别代码片段，或需要保留空格的场景。
    
*   竖排：适合竖排排版。需要与同样支持竖排识别的模型库配合使用。
    

![](https://mmbiz.qpic.cn/sz_mmbiz_png/o3oSjHMHKLHeAFKXh8ybUFM6GblgPy6ef5ngJwGVXiamUZq3QXCxYTHU3qjsNRL3bibYLZbNPLO4Ns8CstIibGzCQ/640?wx_fmt=png&from=appmsg)

**批量OCR**

*   支持批量导入本地图片并识别。
    
*   识别内容可以保存为 txt / jsonl / md / csv(Excel) 等多种格式。
    
*   支持文本后处理技术，能识别属于同一自然段的文字，并将其合并。还支持代码段、竖排文本等多种处理方案。
    
*   没有数量上限，可一次性导入几百张图片进行任务。
    
*   支持任务完成后自动关机/待机。
    

![](https://mmbiz.qpic.cn/sz_mmbiz_png/o3oSjHMHKLHeAFKXh8ybUFM6GblgPy6e0HrNRsEp8KPibgAmmhQR3lCDfwEkHaRbc1g95JrlOrZGr1HagMbJZiaA/640?wx_fmt=png&from=appmsg)

**忽略区域**

批量OCR中的一种特殊功能，适用于排除图片中的不想要的文字。

*   在批量识别页的右栏设置中可进入忽略区域编辑器。
    
*   如上方样例，图片顶部和右下角存在多个水印 / LOGO。如果批量识别这类图片，水印会对识别结果造成干扰。
    
*   按住右键，绘制多个矩形框。这些区域内的文字将在任务中被忽略。
    
*   请尽量将矩形框画得大一些，完全包裹住水印所有可能出现的位置。
    

![](https://mmbiz.qpic.cn/sz_mmbiz_png/o3oSjHMHKLHeAFKXh8ybUFM6GblgPy6eTCTRgfLgUHbxetJgtV8ibFhB76iauWW3RHLJicTmp4O1fHp8IFLicSRZzg/640?wx_fmt=png&from=appmsg)

**二维码**

可截图/粘贴/拖入本地图片，读取其中的二维码、条形码。还支持输入文本，生成二维码、条形码。支持一图多码。支持19种协议和纠错等级等参数。

支持的协议包括：Aztec、Codabar、Code128、Code39、Code93、DataBar、DataBarExpanded、DataMatrix、EAN13、EAN8、ITF、LinearCodes、MatrixCodes、MaxiCode、MicroQRCode、PDF417、QRCode、UPCA、UPCE。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/o3oSjHMHKLHeAFKXh8ybUFM6GblgPy6eqDgccd4GtFqt82RoY4e2TvrianpY0vUckM0m8JsM2F3yxff7RmXe5fw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/o3oSjHMHKLHeAFKXh8ybUFM6GblgPy6e2Kwkt5HcRdj7x7bSd5ToE8JkiaZyS6mWDfVcXiahG0c2Somia65HlgjjQ/640?wx_fmt=png&from=appmsg)

最新 v2.0.1 版本支持数学公式识别，能够识别既包含文字又包含数学公式的混合图片。

该功能需要安装插件 Pix2Text ，插件解压后 1.7GB 大小，无此类需求的不建议安装。

**具体操作步骤如下：** 

1、下载插件【win7\_x64\_Pix2Text.7z】

插件库地址：

https://github.com/hiroi-sora/Umi-OCR_plugins/releases

2、解压到 UmiOCR-data/plugins 目录下

3、重启 Umi-OCR 软件

全局设置→文字识别→当前接口改为Pix2Text→点击应用修改

4、回到截图/批量标签页，正常使用即可

**注：首次 OCR 任务，可能需10~60s时间加载，耐心等待，后续OCR速度将恢复正常。** 

![](https://mmbiz.qpic.cn/sz_mmbiz_png/o3oSjHMHKLHeAFKXh8ybUFM6GblgPy6eA4dd8454sjgOyQRAgAibhCzEUMGibZ0ZUM8SgWNTS8NOujaMjsEDXrtA/640?wx_fmt=png&from=appmsg)

5、截图测试  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/o3oSjHMHKLHeAFKXh8ybUFM6GblgPy6eaKicqibbLhkWIia9XBUaNel756LuMu99xTtU6P1vmnX1ZkqHlqGHAyUqg/640?wx_fmt=png&from=appmsg)

6、效果预览

![](https://mmbiz.qpic.cn/sz_mmbiz_png/o3oSjHMHKLHeAFKXh8ybUFM6GblgPy6esiaq0mPslT8vH5ja5VaRevJ4yzx8LdTUHx9vIbzibgrFficnmGb5IopBQ/640?wx_fmt=png&from=appmsg)

目前该插件仍在测试中，这个精度已经很好了，期待后续版本的优化改良！

访问不了 GitHub 的宝子，获取软件及插件可后台私信留言关键词：**umiocr**  

**附项目的链接：** 

GitHub 开源地址：  

https://github.com/hiroi-sora/Umi-OCR

插件库地址：  

https://github.com/hiroi-sora/Umi-OCR_plugins

网盘备用下载地址后台私信留言：

****往期推荐：****

[27K+ stars 开源的Docker容器管理工具](http://mp.weixin.qq.com/s?__biz=Mzg3ODUzMjI5Ng==&mid=2247496016&idx=1&sn=c99d8d42462065dda3441989e2237e9a&chksm=cf10f2f7f8677be1b8d4bc72dd67e89bfbb5d03d14f8a19d0b9acce3a9fb1bc2be478ddc42d0&scene=21#wechat_redirect)  

[3K+ stars 国产轻量级动态线程池开源项目](http://mp.weixin.qq.com/s?__biz=Mzg3ODUzMjI5Ng==&mid=2247495828&idx=1&sn=eb1ec613bea2939e3b350c67cc0fe8dd&chksm=cf10f333f8677a25ef48570b36caf9d1936ec0d30a81bd06bd4f87f6ebef221d49a4be1d4221&scene=21#wechat_redirect)  

[22k+ stars 搭建个人私有云盘的开源神器](http://mp.weixin.qq.com/s?__biz=Mzg3ODUzMjI5Ng==&mid=2247495796&idx=2&sn=749ab8a9e83b2ac1b74bb085503623a2&chksm=cf10f3d3f8677ac5f2771c481525e25c99053714b94d9b4e8d6ca783095f7a9a4342f095eed2&scene=21#wechat_redirect)  

[13k+ Stars 功能强悍，群控手机，开源无需root](http://mp.weixin.qq.com/s?__biz=Mzg3ODUzMjI5Ng==&mid=2247495732&idx=1&sn=98ccbfb7205e61bf64f8ea1665808085&chksm=cf10f393f8677a85377f4474d2c5773a5a080c6a55b7a6c30fe8346c8e62f369211ed8a23298&scene=21#wechat_redirect)  

**点关注不迷路，每日分享优秀开源项目**

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/ZHqheKIE34mtRC5YQA2ibldjicXJmMrwTzkVkGqqlC83GJibcicQKJIDuqYY9AnGUUCZCYQ41cYhXwI7kSFxFGveLw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&wx_co=1)