electron桌面客户端
-------------

> whisper字幕生成

以自动生成字幕为例,前些年,写过一个python脚本,就是利用ffmpeg切片,借助google翻译api,将没有字幕的视频生成双语srt字幕.由于需要魔法上网,且使用的免费api并不是很稳定,所以宣传小阵子后,最终自用

而openapi的whisper,只需要借助消费级显卡GPU,加大模型,就可以本地识别,无论是体验,还是成本,就强大太多太多了

当然,AIGC的应用,如果仅仅是字幕,肯定不够,所以我写了个小工具,核心实现自动化业务

*   • 字幕生成
    
*   • 图片生成
    
*   • 配音生成
    
*   • 片头片尾特效,以及水印
    
*   • 一键发布+多平台
    

无论是wordpress还是油管,都可以在只有一个中文基础的背景下

自动化多语言,面向更多用户

![](https://mmbiz.qpic.cn/sz_mmbiz_png/HWjX0DuFz6kg2QExHLCs89M25y0jL0QJ6B8wGZTXDHsKWAepgEnnyiaPNTicSwWmL3lEUutjx03a3bav70ooBTtA/640?wx_fmt=png&from=appmsg)

* * *

RPA自动化+AIGC
-----------

> 能自动的就不要手动

![](https://mmbiz.qpic.cn/sz_mmbiz_png/HWjX0DuFz6kg2QExHLCs89M25y0jL0QJEaeqicImgOiac7qqYbO0xtibvPg7nicP3ib9j6RKF1pYKlI3K31jR5UhibVQ/640?wx_fmt=png&from=appmsg)

选择electron的原因是,开发客户端,可以跨平台,既有web开发的优势,也能突破浏览器的限制,获取硬件交互,native api调用,比如

*   • 系统通知
    
*   • 快捷方式,托盘常驻
    
*   • 音视频处理
    
*   • 屏幕截图.录制
    
*   • 文件存储
    
*   • 自动更新
    

AIGC的能力,就不用阐述了,无论是文本,图片,音频,视频,各种都在快速迭代突破

建立了`交流群 `有兴趣折腾的小伙伴

后台回复关键词`加群`