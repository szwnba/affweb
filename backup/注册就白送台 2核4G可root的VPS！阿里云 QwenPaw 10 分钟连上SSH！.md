不用买服务器、不用公网 IP、不用会运维——阿里云 QwenPaw 注册就送 2C4G root VPS，怎么连 SSH，这篇一次说清。

![](https://mmbiz.qpic.cn/mmbiz_png/V6oHkic9quzcq5twqA2jMXuWgmIcYOPZqMEEmsuXicsNlK0yqBWAEazD5eIt2vlM4GgdiaB1F2YYb9R2zNsNrD8iaQdzlMGOyMguCh7yjofIKQM/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=0)

1📌 一、这是个什么东西
-------------

AgentScope Platform 是阿里云 AgentScope 生态的云体验平台，注册就给你一个独立的 QwenPaw 工作空间。QwenPaw 本身是一个跑在浏览器里的 AI 助手，带技能市场、插件市场，能让 AI 干活、装东西、跑脚本。

重点在这台工作空间背后是一台实打实的容器 VPS：**2 核 CPU、4GB 内存、支持 root**，大部分脚本都能跑。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/V6oHkic9quzeZEYAJLtXSHCe5OTHvwwiar9JobRP5Ut7wrb99I80VciaNUEU7EUtgqArdLCv4z2zrs41SNpdPFCWNGTQibVUKLe51wBhYicxumv0/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=1)

它没有独立公网 IP（NAT 共享出口），所以从外面连它必须走隧道——这也是这篇教程要解决的核心问题。

2📌 二、白拿流程：注册到部署
----------------

入口就一个，先给地址：

*   部署页：`https://platform.agentscope.io/deploy`
*   没账号走注册：`https://platform.agentscope.io/login?return=%2Fdeploy`

![](https://mmbiz.qpic.cn/sz_mmbiz_png/V6oHkic9quzej6LVBRghcYuMPthx6uA3XRIGrQIYnCbk5ibcLkeicMn2QxKLE36s6yoh0NdUxJ14iaNvMTa64Wkwn5MxFYpwbicaAVWrUOwWt7yQ/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=2)

流程就三步：

1.  1**注册登录**，进部署页
2.  2选版本，点 **Deploy QwenPaw** 一键部署
3.  3部署完点「打开 QwenPaw」，进到助手界面，完事

官方说明里两条对白嫖党很关键：**注册即得独立 workspace**；**所有配置会保存，重新部署自动恢复**——也就是说不是一次性玩具，配置能留住。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/V6oHkic9quzeDaqSWlRaMoYn2Sp2wrJ0Nq1EiarMf74Ip5a2JLhgpCPa80086g4EyEt6r3nqUhQXRTDCicW4icEg6ibJ4eJ8Y6icgiblHibcFsMJ2Ps/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=3)

3📌 三、连上它：Tailscale 方案
----------------------

推荐先用这个，**不需要域名**，免费档够用。前提是你有一个 Tailscale 账号（`https://tailscale.com`，个人免费档支持 100 台设备）。

核心思路：让容器里的 AI 助手自己装，你只负责授权和给 IP。

1.  1在 QwenPaw 对话框里直接说：**"帮我安装 Tailscale"**
2.  2它给出登录认证链接，浏览器打开完成授权
3.  3接着说：**"把这台容器加入我的 Tailscale 网络"**
4.  ![](https://mmbiz.qpic.cn/sz_mmbiz_png/V6oHkic9quzdQ5RAqPSSC0kHnpWIgxMs7BDiaKFsp25ib0CBDhs5Fo8WWSPLETW6z1dhCwUd39w7FIpINkiajTO7nFXK6Piay4MOg4bhrz9Jm3qM/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=4)
    

这里有个坑，右下角的权限要设为关闭模式，否则Tailscale跑不起来

1.  ![](https://mmbiz.qpic.cn/sz_mmbiz_png/V6oHkic9quzdeOA9FwrTU9miapMGa2aRrbvIfKglF5Bt1Ftr8Fwc9gCovcSydcq0wIULlREKktnwBzsmuSTWjDVgmuUbFyCOOrGTlHiaYMiaNFU/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=5)
    
2.  服务运行以后，根据提示进行连接
    
    ![](https://mmbiz.qpic.cn/mmbiz_png/V6oHkic9quzdjOA985DIQkY7mb0cvXnxaaPrsJbfUIrDibguWzXGNbPejWElTCV3nEGLpbwKToVw24dIuV0g1OcppmlXibOTxtNiar7jjmbrdGU/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=6)
    

4.  4拿到它分到的 100 开头的内网 IP（参考文实测是 `100.64.0.20` 这种格式）
5.  5本地电脑也装 Tailscale 客户端，登录同一个账号
6.  客户端下载地址 https://tailscale.com/download/windows
    
7.  6SSH 客户端里填：地址 `100.64.0.20`（换成你的实际 IP）、端口 `22`、用户名 `root`、密码用你设的

推荐用 Tabby 或 FinalShell 这类带界面的客户端，连接记录能保存，下次一键连。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/V6oHkic9quzcmunRS3gCWv2FboWPBtOFd7BcuSHwdbd3Ql7okqWyCpxO54y2A1oV8yCiajf9XRa5XGPJS7ia6yHuYz9IHr0zVytXBIBXiaGNfMU/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=7)

遇到任何问题，记得直接让ai帮你解决，我开始连不上，后来处理过才连接成功

![](https://mmbiz.qpic.cn/sz_mmbiz_png/V6oHkic9quzeSHWDU38AuuwMQXYFT1aBJ4Mt6Mm9LOnluk8eZu1nicuV8cRSw4MeSoibVAPcwmfrPmqkc21Gf71bnadrcibgygpMCD8Wrvw6AoQ/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=8)

4📌 四、连上它：Cloudflare 方案
-----------------------

有自己域名选这个，链路更接近正规运维。分容器端和本地端两步走。

容器端，还是那句话，跟 QwenPaw 里的 AI 说：

*   **"帮我把 SSH 跑到 Cloudflare Zero Trust 走隧道"**
*   **![](https://mmbiz.qpic.cn/mmbiz_png/V6oHkic9quzeJpJXQJWnIln4rADVF8PDWhrcSDUpTmUq0IKsZruuolVBuFyRHfc9Vib42STILHKthu0Iyodmte6Zb0QJWric9zVVj7IsAiaj7ek/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=9)**

过程中要 **隧道认证 token 或域名**，它要什么你给什么。

然后去 Cloudflare 后台（`https://one.dash.cloudflare.com`）：

1.  1进 **Zero Trust → Networks → Tunnels**
2.  2绑定你的域名，建一条 **TCP 隧道**，指向容器的 22 端口
3.  3**本地 Windows 下载 cloudflared**，去 release 页下 `cloudflared-windows-amd64.exe`： `https://github.com/cloudflare/cloudflared/releases`
4.  4按 QwenPaw 给的配置和启动命令把隧道跑起来

连的时候地址是本地回环：

*   主机地址：`127.0.0.1`
*   端口：你隧道映射的那个端口
*   用户名：`root`
*   密码：你设的密码  
    

5📌 五、两套方案怎么选
-------------

一句话：**没域名直接抄第三节，有域名再折腾第四节。**  两篇参考文的原作者也是这个态度——他先发的 Cloudflare 篇，一个月后补的 Tailscale 篇，原话是"相对简单一点"。

6📌 六、连上之后能干什么
--------------

有 SSH + root，这台 2C4G 就是一台正经 Linux 机器：

*   **跑常驻脚本**：爬虫、定时任务、签到机器人，本地电脑关机照样跑
*   **当 AI 的远程手脚**：QwenPaw 自己就能装东西，你可以让它部署个小服务再连上去看
*   **学习和测试**：想练 Linux、想试内网穿透、想搭个自己的小工具，零成本试错
*   **配合它本行**：它首先是 QwenPaw 的云端运行环境，技能市场里的东西都能直接装

7📌 七、几条要注意
-----------

*   **公测资源，规则可能变。**  参考文 10 月下旬的口径是"公测已上线、注册即得空间"，但免费空间的配置和准入以你注册时平台实际展示为准，本文不承诺长期免费。官网目前没有单独的额度公示页，别信"永久免费"的转述
*   **磁盘口径留个心眼。**  参考文写 30GB SSD，部署页文件目录显示 5GB 上限，两者可能不是一个口径，以你部署后实际看到的为准
*   **遵守平台服务条款。**  免费资源不是法外之地，别拿去跑违规业务、当攻击跳板，账号封了别哭
*   **AI 给的命令过一眼再执行。**  让 AI 装东西很方便，但涉及密钥、防火墙改动的命令，看清楚再回车
*   **Tailscale 免费档 100 台设备**，个人用远远够；CF 方案需要你有域名，托管在 Cloudflare 才行

8📌 参考与核实
---------

本文综合了两篇教程（同一作者的前后篇）：

*   6 月 Cloudflare 隧道篇：《阿里云免费 2C4G 30G SSD VPS 的 QwenPaw 环境获取 root 教程，可搭建其它服务》
*   10 月 Tailscale 篇：《QwenPaw 免费领取 2C4G 容器 VPS！支持 root，用 Tailscale 反代 SSH》

平台现状（主页文案、注册入口、部署页）于 **2026 年 10 月 24 日**实际访问核实；配置与公测状态以平台当前页面为准。文中未标注"实测"的内容为公开资料整理，操作步骤请以你设备和平台的实际提示为准。

配置和规则都可能随公测调整，看到这篇文章时先自己去部署页确认一眼，别照抄半年前的教程——包括我这篇。

**觉得有用，点个"在看"和星标，明天继续薅。** 

_李叔AI · 每天一个能落地、能白嫖的 AI 真东西_

![](https://mmbiz.qpic.cn/mmbiz_jpg/V6oHkic9quze0V4M70hQt5dxicLwRNdOlM3KBiaDf8pyopdbtjHAn0LbL0rAkiaYYwJIrNrL9l4x1y7Nt2byoxl3jxoHU6YFVBCSHMEQzrVkCNA/640?wx_fmt=jpeg&from=appmsg&watermark=1#imgIndex=10)