> 这是《Muse 深度实测与硬核玩法》系列的第二篇。在上一篇里，我们聊透了为什么“Muse是什么，怎么用”。今天，我们直接上真格的——**当你用工程巧劲把 Muse 从内部打开，同时打通 `SSH` 和 `API Bridge` 之后，这台原本被锁在网页里的虚拟机，究竟能爆发出多恐怖的生产力？**

一台**没有公网入口**、**不能直接 SSH**、甚至**连系统环境都可能在重启后原地重置**的云端 AI 虚拟机，究竟能玩出什么花样？

在上一篇文章发布后，很多读者在后台问我：_“折腾半天突破限制，不就是为了在黑框框里敲几行 Linux 命令吗？既然 Muse 可以在聊天窗口里帮我们写 Python、跑命令，为什么非要费劲从外部打通它？”_

如果你也这么想，那就太低估这次改造的含金量了。

在经过一轮深度折腾后，我已经能够在本地的 Windows PowerShell 中直接敲下：

```
1tailscale ssh root@muse-vm
```

不到两秒，屏幕直接跳出底层提示符：

```
1root@htch-runtime:~#
```

**注意，这不是 Muse 在聊天窗口里模拟出来的玩具终端，而是真正进入了 Muse VM 的底层 Linux Shell！** 同时，我还成功在里面拉起了一个 **OpenAI 兼容的 API Bridge**，让外部程序可以直接向 Muse Agent 发送请求。

当 **SSH** 和 **API Bridge** 同时被打通后，Muse 发生了一次彻底的“物种进化”——它不再只是一个隔着网页聊天的机器人，而是同时裂变成了两件核武器：

*   打通 SSH，解决的是“你能直接操作 Muse 的云端电脑”\*\*（获得一台随时待命的 Linux 工作站）；
*   打通 API Bridge，解决的是“其他程序能直接使用 Muse 的智能”\*\*（获得一个可编程调用的 AI Agent 接口）。

| 

已成功在postman中测试通过

 | 

聊天、生成图片，生成视频，可以直接下载

 |
| --- | --- |
| ![](https://mmbiz.qpic.cn/sz_mmbiz_png/eYqKkUMZsgSibuxRU9gcEicOhQOqFJP547ibkV6M0W8XwkURJoMWOCUqD3D7anf7oPBDzlNJNNwob21pgB9dSwxhzaMpS1kg9hE3G36WZctHTA/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=0)

  


 | ![](https://mmbiz.qpic.cn/mmbiz_png/eYqKkUMZsgTyAOvUPUV9OX7UHjOp85qKSjD7ZLMkTe2qZJjXiaY7UTblPFzy1pQc1GUFR8OcB1RiaTChSicev5kRic35ELGlTeEjKwcvAONcFfk/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=1)

  


 |

在带你动手敲命令之前，我们先花 2 分钟看看，这两者结合究竟能带来怎样翻天覆地的变化——

01 先看最直观的降维打击：改造前 vs 改造后
------------------------

真正值得展示的，从来不是一行冷冰冰的 SSH 命令，而是打通任督二脉后带来的实际生产力跃迁：

| 

核心维度

 | 

以前的 Muse（网页沙盒态）

 | 

打通 SSH + API 后的 Muse（完全体）

 |  |
| --- | --- | --- | --- |
| **操作方式** | 

只能憋屈地在网页聊天界面打字交互

 | **Windows 终端 / VS Code 直接 SSH 登录底层 VM** |  |
| **命令运行** | 

需要在聊天中求着 Muse 帮你执行命令

 | **直接在原生 Shell 里自由跑 Python、Node.js、Shell** |  |
| **外部调用** | 

其他程序完全无法直接使用 Muse Agent

 | **Python、Node.js 等外部软件可通过 HTTP API 直接调用** |  |
| **文件流转** | 

工作文件主要被困在 Muse 网页环境中

 | **通过远程命令及自动化文件传输工作流自由交换成果** |  |
| **环境寿命** | 

软件运行环境受 VM 休眠重启影响易丢失

 | **借力 Nix 和启动恢复机制，永久保存并自动恢复工具链** |  |
| **能力边界** | 

AI 能力主要供人手动提问使用

 | **AI 能力彻底嵌入你自己的软件与自动化业务流程** |  |

当这两条通道彻底敞开，下面这 **3 大类、7 个直接落地的实战场景**将瞬间向你解锁：

### 🛠️ 维度一：SSH 打通后，你白捡了一台“云端 Linux 工作站”

_(注：通过 SSH 操作的是 VM 的底层 Linux 系统，不消耗 AI 对话推理；你甚至可以在里面运行安装在 VM 中的其他工具，比如 **Claude Code**，只需工具自己完成认证即可。)_

*   场景 1：把 Muse VM 当成零本地污染的“远程 Linux 开发机”你完全不需要在本地 Windows 上折腾复杂的 Python 或 Node.js 环境。直接从终端 SSH 登录 Muse VM，在云端编写代码、安装工具、执行测试、处理日志，本地电脑只负责优雅地接收输出结果。
*   场景 2：远程运行大批量“数据清洗与统计工具”面对 100 份格式杂乱的 CSV、Excel、JSON 或文本文件，提前传入 VM 并配好数据处理库，直接在云端跑脚本完成自动分类、清洗、去重和统计，一键生成干净的合同金额汇总表。程序统一在云端执行，彻底解放本地算力。
*   场景 3：7×24 待命的“自动化脚本与信息采集器”把一次性的人工苦力变成可重复执行的程序。在 VM 内运行公开网页采集、接口测试、文件整理脚本（配合合理的调度机制并遵守目标网站规则），例如每天定时检查指定网站是否更新，自动生成新增内容清单。

### 🧠 维度二：API Bridge 打通后，你的软件不止长出“AI 大脑”，更白嫖了一座“AI 图像与视频渲染农场”！

很多人听到“OpenAI 兼容 API”，第一反应是：\_“这不就是调个接口聊聊天吗？有什么好折腾的？”

格局小了！如果只让它回复一句“你好”，根本不配我们费尽周折去破局。

要知道，Muse 本身具备极强的多模态创作能力。当你通过 API Bridge 或多模态反代把它接入自己的程序，意味着**你不需要买几万块的显卡，也不需要在本地部署庞大的生图/视频模型，就能直接把 Muse 变成你私有软件背后的“多媒体生成引擎”**：

*   场景 4：一键出图的“私人视觉工作室” 告别每次打开网页端手动输提示词、右键存图的原始操作。把接口嵌进你的工作流里，它可以瞬间化身为你的**公众号封面生成器**
    
    （传入文章标题自动配图）、**电商视觉影棚**（上传一张白底商品图，自动换上高级客厅背景并批量吐出横版海报+主图），甚至是**老照片自动修复上色工具**。生图能力直接变成你软件里的一个按钮。
    
*   场景 5：全自动运转的“AI 短视频工厂” 这才是真正让普通人眼馋的杀手锏。在你的程序里上传一张静态产品照或宠物照，后台直接调用 Muse 的视频生成能力，自动完成“静态照变动态运镜短片”、“一句话生成带环境音的创意视频”，或者将自媒体脚本自动拆解、批量生成分镜画面。
*   场景 6：零算力成本，手搓一个“AI 创意工坊”小程序 既然生图、改图、生视频都能通过接口调度，你完全可以自己写一个极简的前端界面或微信小程序：
    
    ![](https://mmbiz.qpic.cn/mmbiz_png/eYqKkUMZsgSgbiaISc9h0IFCYRUXfepDAbQ23QeRodOh3cMfWRc56ia2EBkgFQdpxljFBoK0I2xiaoBuVZiargsvBOQK7ps37mySc1rzic3OC5WI/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=2)
    
      
    

用户在前端看到的，是一个点点按钮就能实现“老照片动起来”、“商品一键生成广告片”的神奇工具；而只有你知道，背后根本没有昂贵的 GPU 集群，全靠那台被你打通了任督二脉的 Muse VM 在默默扛下所有！

之前你注册后获取的300亿token有了用武之地，放心大胆的去生成视频吧！终于不再为Token焦虑了[\# 别再卡地区验证了！手把手教你解锁Muse AI，还能顺便免手机号注册Claude](https://mp.weixin.qq.com/s?__biz=MzYyNTM3OTUwOQ==&mid=2247484503&idx=1&sn=6176e91b472c98413a7eb37eeb41a479&scene=21#wechat_redirect)

_(💡 理性提示：生成速度、时长与并发受限于 Muse 账号本身的正常额度与队列机制，若要对外服务仍需自己做好队列与权限控制。但对于个人开发者、自媒体和独立极客来说，这套“零显卡搭建多模态后端”的玩法，含金量已经拉满了！)_

### 🔥 维度三（王炸玩法）：灵魂换血！让 Muse 接管 Codex、Claude Code 与 DeepSeek Harness 的“最强大脑”！

如果说前面的多模态生图、生视频是给普通玩家的开胃菜，那么接下来的第三个维度，绝对会让所有硬核程序员直接瞳孔地震。

在日常写代码时，你有没有产生过这种大胆的想法：

*   保留 **Codex CLI** 极速流畅的本地操作体验，但把底层思考的模型换成 **Muse**？
    
*   让地表最强的编程特工 **Claude Code** 不再死磕默认模型（顺便避开严苛的风控封号与昂贵账单），直接挂上 **Muse** 的大脑来帮你重构整个项目？
    
*   甚至在 **DeepSeek Harness** 里，把 Muse 添加为一个随时可热切换的“特种外援模型”？
    

**这不是天方夜谭，而是把“AI 编程躯干（Harness）”与“AI 思考大脑（Model）”彻底解耦的降维玩法！**

过去，我们用什么编程工具，就得被迫忍受它绑定的默认模型。但现在，只要通过兼容的 API 协议把 Muse 塞进这三大顶流编程神器的底层配置里，就能直接上演一场“灵魂换血”：

*   场景 7：Codex + Muse —— 熟悉的工作台，全新的推理引擎 Codex 极其擅长读取仓库、改文件、跑命令。通过接入兼容 OpenAI `Responses API`
    
     的服务，你可以直接把 **Muse Wonder / Muse Spark** 挂载进 Codex。你照常在终端下令：_“排查 Python 测试失败的原因，自动改好代码并重跑测试”_——干脏活累活的手脚依然是 Codex，但背后运筹帷幄、规划代码的已经换成了 Muse！
    
*   场景 8：Claude Code + Muse —— 给顶级编程特工换一颗“免死心脏” Claude Code 深入大型项目持续重构的能力无人能出其右，但它的底层通信强制走 `Anthropic Messages API`
    
     协议。最妙的是，Meta 官方 Model API 原生提供了 Anthropic 兼容接口！这意味着你一行代码不用改，就能让 Claude Code 直接调用 Muse 模型来分析数据库瓶颈、改写核心模块——**完美保留 Claude Code 逆天的本地工具链，同时多了一个极其强悍的备用大脑。** 
    
*   场景 9：DeepSeek Harness + Muse —— 打造多模型热切换的“全能军火库” 在支持自定义 Provider 的 DeepSeek Harness 中，你可以把 Muse 设为平行备选引擎。简单脚本用轻量模型秒出，遇到硬骨头重构一键切到重型模型，甚至**把同一个诡异 Bug 同时丢给不同模型交叉会诊**
    
    。你只管保留最顺手的 Harness 界面，背后的大模型任你翻牌。
    

#### 💡 架构解耦：手脚归工具，大脑归 Muse

这套玩法的本质，是把现代 AI 编程彻底拆成了两个标准件：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/eYqKkUMZsgTy5kUC6lDEK9ww94wTIgMn1kJsaNBXUDPGz5kfeyOMiaicNEict6iapI7PKHfdqRvPGQ6oibTpUzn6bo9CNo0tNfn7tTtClpPtUt4U/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=3)

  

**⚠️ 硬核避坑指南（必看）：分清“两条接入路线”！** 很多极客看到“OpenAI 兼容”四个字就会直接往配置里填，结果疯狂报错。这里必须帮你把底层技术路线彻底理清：

我们前文搭建的 `muse-vm-hacks` API Bridge：目前暴露的是基础的 `OpenAI Chat Completions` 接口，本质上是把任务塞进队列唤醒 **Muse Agent**，适合接入普通 AI 客户端或自写脚本，但**不能直接裸连**强制要求 `Responses API`（如 Codex）或 `Anthropic Messages API`（如 Claude Code）的工具（除非你在中间再套一层协议转换网关，如cc switch、codex++等）。接入dsh harness如下：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/eYqKkUMZsgTWusD6xhhwk74AYXLdrNkqtLVLuFqqjmk84qKEK1KbPM0QWjmpFKo4nPDAGMjXYU1sOzNjurmpdv4I6xUS1B5LnAPyZpibqje0/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=4)

  

无论你选择在本地 Bridge 上套协议转换，还是直接挂载官方兼容接口，这件事传递出的信号都极其强烈：

**Muse 绝不仅仅是一个关在网页里的聊天玩具。当你把它拆解成标准化的算力与智力模块，它就能瞬间寄生到你最熟悉的任何顶级开发工具里，成为你代码流水线上的超级外脑！**

### 🔥 维度三（王炸玩法）：SSH + API 联合闭环，让 AI“自己写代码、自己跑验证”

单独用 SSH，你操作的是云端计算环境；单独用 API Bridge，你调用的是 AI 推理。**真正有意思的，是让“AI 分析”和“代码执行”咬合成一个完整的自动化工作流！**

来看一个完全可实现的演示工作流——假设你的任务是\*\*“开发一个 CSV 数据清洗工具，找出重复记录并生成统计报告”\*\*：

1.  提交需求（API）： Windows 上的 Python 客户端通过 `API Bridge` 向 Muse 提交编程需求；
2.  AI 生成程序（Agent）： Muse Agent 分析字段与要求，自动编写并返回 Python 源码；
3.  远程受控执行（SSH）： 客户端对代码完成审核或规则检查后，自动通过 `SSH` 将代码放入 Muse VM 的工作目录并点火运行；
4.  验证结果（SSH）： 程序在云端生成输出文件，客户端自动读取运行结果和错误日志；
5.  AI 自我修复（API）： 如果运行报错，客户端自动把错误信息再次通过 `API` 发给 Muse，让它提出修改方案并重写代码；
6.  交付最终成果： 全流程跑通，直接交付验证无误的 Python 源码、处理后的 CSV 报表与执行报告！

**看懂这套闭环的价值了吗？**  
它不需要你给 Muse Agent 开放危险的无限制命令执行权限——**Muse 负责理解和生成，Linux 环境负责隔离执行，外部客户端程序负责调度和安全控制。**  这才是从“聊天机器人”进化到“自动化工程系统”的实质飞跃！

更关键的是：**实现以上这一切，全程不需要给 Muse VM 开放任何一个公网端口，也不需要拥有底层云平台的管理权限。** 

接下来，我就把这套改造的技术原理与实操步骤完整拆开，手把手带你复现！

02 Muse 的虚拟机为什么以前无法 SSH？
------------------------

在动手之前，我们首先得搞清楚一个容易产生误解的问题。

Muse 的背后虽然是一台真正的 Linux VM，但它绝不是我们在云厂商购买的普通 VPS。在普通 VPS 上，我们只需要执行一句 `apt install openssh-server`，开放 22 端口，就能通过公网 IP 登录。

但经过底层检查，Muse VM 存在 **4 个极其特殊的限制**：

1.  没有可以直接访问的公网入口： 外部设备无法像访问普通 VPS 一样，直接从公网建立到 Muse VM 的入站连接（Inbound）。
2.  自带的 Tailscale 是“阉割精简版”： 平台默认提供的是一个功能高度受限的客户端，缺少完整的 `tailscaled` 服务端能力，根本不支持我们需要的 Tailscale SSH 接入方式。
3.  网络受到安全网关（Sentinel）严格控制： UDP 流量无法正常建立直连，部分非标 TCP 出站连接也需要经过平台弹窗审批。
4.  根文件系统具有“失忆症”： Muse VM 使用了“临时根文件系统 + 持久化目录”相结合的机制。其中只有 `/home/hatch` 可以永久保存数据，而在 `/etc`、`/root` 等系统目录中的任何改动，都会在 VM 休眠重启或环境重建后徹底消失。

这意味着，即使你侥幸装上了某些软件，下次进入 VM 时也会全部归零。我们真正需要的，是一套能够专门适应 Muse 沙盒环境的特种远程连接方案。

03 发现冷门破局神器：`muse-vm-hacks`
---------------------------

折腾过程中，我在 GitHub 上挖到了一个非常对路的开源项目：**`muse-vm-hacks`**。

*   项目地址： `https://github.com/dahjah/muse-vm-hacks`

它的目标非常明确：**把原本只能通过聊天界面使用的 Muse VM，彻底改造成具备持久软件环境、完整 Tailscale 和 SSH 访问能力的 Linux 工作站。** 

这个项目用三招解决了核心痛点：

1.  使用 Nix 建立持久化软件环境： 不再依赖容易丢失的系统默认安装位置，而是将所有软件包存放在 `/home/hatch` 下，并通过启动挂载机制动态恢复使用。
2.  安装完整版 Tailscale： 绕开 Muse 原有的残血客户端，在 VM 内直接运行完整的 `tailscaled`，启用用户态网络及 Tailscale SSH。
3.  可选部署 API Bridge： 将 Muse Agent 的对话能力包装为兼容 OpenAI `Chat Completions` 的 HTTP API，供外部程序调用。

这里最让人好奇的是第二点——**既然 VM 根本不能接受公网入站连接，为什么安装完整版 Tailscale 后反而可以从外部 SSH 登录？**

答案，就藏在网络连接的方向上。

04 最关键的原理：不从外面敲门，让 VM 主动向外拉隧道
-----------------------------

传统 SSH 的连接方式是\*\*“从外往里敲门”\*\*：

```
1Windows 电脑 ──(寻找公网 IP + SSH 端口)──> 远程 Linux 服务器
```

既然 Muse VM 没有可直接访问的公网入口，那我们就换一种逆向思路：**不让 Windows 直接从公网硬闯 Muse VM，而是先让 Muse VM 从内部主动连接 Tailscale 网络！**

当这条出站连接建立之后，处于同一个虚拟局域网（Tailnet）中的其他设备，就能够顺着 Tailscale 提供的加密网络路径反向与它通信：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/eYqKkUMZsgQqFIq8rA1fTiaoKnqqhS2v0JuHc7ywcBp3uBrhBgBVyCLlnGWqs8LjYbxjknKg6IB5wIEQ4K8uISx7nicDGKomZokMlm2CHQI9k/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=5)

image

这里用到了两个非常巧妙的技术支点：

### 1\. 用户态网络（Userspace Networking）

Tailscale 通常需要调用操作系统内核的 TUN 接口来建立虚拟网卡，但在受限的容器或虚拟机环境里，底层网卡权限往往不可用。  
因此项目启用了 Tailscale 的用户态网络模式（`--tun=userspace-networking`），让 `tailscaled` 直接在用户态内存里处理网络流量，再配合 Tailscale 自带的 SSH 服务，无需内核虚拟网卡也能接收经过授权的 SSH 连接。

### 2\. DERP 中继（TCP 443 穿透）

正常情况下 Tailscale 会优先尝试设备间的 UDP 点对点直连，但 Muse VM 所在网络完全阻止了 UDP 直连。  
这时 Tailscale 会自动切换到 **DERP 中继服务器**转发加密流量。最关键的是，**DERP 数据连接可以通过标准的 TCP 443 端口建立**，完美适应无法进行 UDP 直连的严苛网络环境。

_(注：DERP 并不是用来替你违规绕过平台权限审批的，Muse 要连接相关服务，仍然需要我们在平台设置里正规授予相应的网络权限。)_

05 实战开始：4 步让 Muse 自己装好 Tailscale SSH
------------------------------------

接下来进入实操环节。我完全不建议大家手动去敲项目里的几十条复杂命令——因为开源仓库已经准备好了完整的安装指南，**最聪明的做法，是直接把说明书扔给 Muse Agent，让它自己给自己完成改装！**

### 第一步：准备本地 Tailscale 环境

首先，你需要拥有自己的 Tailscale 账户，并在准备访问 Muse VM 的 Windows 或 Mac 电脑上安装好客户端（官网：`https://tailscale.com/`），确保本地电脑已正常登录自己的 Tailnet。

### 第二步：开启 Muse 必要的网络权限

进入 Muse 网页端的设置界面，依次找到：  
`Settings` -> `Permissions` -> `Direct network protocols`

根据仓库当前的安装指南，勾选启用以下两项（不同版本界面表述可能略有差异，以实际为准）：

*   Other TCP connections
*   External DNS lookups![](https://mmbiz.qpic.cn/mmbiz_png/eYqKkUMZsgRanibgrSpLYfIgPHBmxtibzUeSqOVPbibC1hMv0F7DdxRER4uTx4ticnRleD0uwpdcibibM2KNWLkZTiaibGN3cO6n59DwZtssAXNAicOI/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=6)
    
      
    

这两项主要用于让完整版 Tailscale 完成域名解析、连接控制面以及连接 DERP 中继节点。  
_(⚠️ 踩坑提醒：允许 Other TCP 并不等于以后所有 TCP 连接都会无脑放行。平台仍可能针对未授权的陌生 IP 和端口弹出审批卡片，这也是安装过程中最常见的小插曲，看到后正常甄别批准即可。)_

### 第三步：向 Muse 下达“自我改装”指令

直接在 Muse 聊天窗口发送以下提示词（如果你希望最严格地复现作者方案，也可以直接去仓库复制 `SYSTEM_PROMPT.md` 中的原版提示词）：

```
123456789请使用以下 GitHub 项目，在当前 Muse VM 中部署持久化 Nix 环境和完整版 Tailscale SSH：https://github.com/dahjah/muse-vm-hacks请先完整阅读仓库中的 README.md、SYSTEM_PROMPT.md 和 INSTALL.md，再严格按照官方安装步骤实施。使用 /home/hatch 作为持久化存储位置，保留系统原有的安全审批机制。需要我修改网络权限、批准 Tailscale 登录或确认其他敏感操作时，明确告诉我具体步骤。安装完成后，运行仓库提供的健康检查脚本，确认 Tailscale 在线，并向我提供 Windows SSH 登录方式。不要修改其他生产设备，不要覆盖已有 Tailnet 策略。核心安装完成后，再按照 INSTALL.md 第 11 节部署可选的 API Bridge。
```

### 第四步：批准设备登录并从 Windows 直连！

当安装推进到 Tailscale 注册阶段时，Muse 会在聊天框里提供一个 Tailscale 登录链接。将其复制到你自己的浏览器中打开，完成设备授权。

授权成功后，打开你的 Tailscale 管理控制台（`https://login.tailscale.com/admin/machines`），正常情况下你会看到设备列表里多了一台新机器（例如 **`muse-vm`**），并拥有一个 `100.x.x.x` 格式的专属地址。

_(⚠️ 策略提醒：设备加入 Tailnet 后能被谁 SSH 登录，取决于你 Tailnet 的 ACL 访问策略。如果你账号下原本就有 NAS 或生产服务器，请在保留现有规则的基础上合并必要的 SSH 规则，切勿直接全量覆盖原有 ACL 文件。)_

现在，迎来整个实验最激动人心的一步！打开本地 Windows PowerShell，输入：

```
1tailscale ssh root@muse-vm
```

只要策略放行且服务已启动，屏幕瞬间切换，你将直接进入 Muse VM 内部：

```
123456root@htch-runtime:~# whoamirootroot@htch-runtime:~# pwd/rootroot@htch-runtime:~# uname -aLinux htch-runtime ...
```

从这一刻起，Windows Terminal、VS Code 以及任何具备 SSH 能力的工具，都成了你直接操作 Muse VM 的原生入口！

* * *

06 解决隐藏大坑：VM 重启后，安装的软件还在吗？
--------------------------

如果教程写到这里就结束，你睡一觉起来肯定会懵：_“为什么昨天刚装好能用的命令，今天 VM 重启后又找不到了？”_

原因就在于前面提到的临时根文件系统。而 `muse-vm-hacks` 最精妙的设计，就是它的一套**全自动环境恢复机制**：

1.  持久化存储隔离： 项目把所有 Nix 软件包保存在唯一持久化的 `/home/hatch/nixdisk` 目录，而把 Tailscale 的节点状态保存在 `/home/hatch/.local/state/tailscale`。
2.  Runtime Hook 自动恢复： 项目注册了 Muse 的运行时 Hook。每当检测到 VM 经历重启或环境重建后尚未恢复时，就会自动触发包装脚本——**重新将持久化目录挂载回 `/nix`、恢复环境变量配置，并自动拉起 `tailscaled` 服务。**  因为节点身份文件完好无损，重启后通常连重新扫码登录都不需要！
3.  底层扩展属性兼容： Muse 环境中的某些文件会被系统打上特殊的扩展属性（如 `user.hatch_tainted`），这会导致普通 Nix 安装过程报错崩溃。作者专门通过 `ignored-acls` 配置和辅助处理程序完美解决了这个底层兼容性难题。

07 部署与调用重头戏：把 Muse 变成 OpenAI 兼容 API
-----------------------------------

在前面第三步的指令最后，我们已经让 Muse 顺手按照仓库 `INSTALL.md` 第 11 节部署了 **API Bridge** 模块（包括安装模块、创建专用 Muse 对话、注册任务 Hook 及启动 HTTP 服务，默认监听 `8080` 端口）。

它的实现架构非常巧妙——它没有去硬啃 Muse 底层模型的私有接口，而是**让外部 HTTP 请求先进入一个本地任务队列，再通过 Muse 的 Hook 唤醒专用 Agent 对话来处理任务**：

![](https://mmbiz.qpic.cn/mmbiz_png/eYqKkUMZsgR98b6uu9bQaJ62p4e6e3LvCB5A7nyO0OrFkZwnyaFAPCvauticg8AWFY5u3h2CBWQ2S4MribPjPctbq3UWKcWibfzP1YatsCmrico/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=7)

  

### 1\. 检查 API 服务健康状态

假设你的 Muse VM Tailscale IP 为 `100.x.x.x`，先在本地 Windows PowerShell 中执行心跳测试：

```
1Invoke-RestMethod "http://100.x.x.x:8080/health"
```

正常情况下会返回 `{"status":"ok"}`。_(注：健康检查通过代表 HTTP 服务正常，接下来我们还需要做一次真实的 AI 对话调用测试。)_

### 2\. 获取专属 API Key

API Bridge 采用 Bearer Token 认证，默认密钥保存在 Muse VM 的以下路径：

```
1/home/hatch/bridge/token
```

你可以通过刚刚建立的 SSH 连接用 `cat` 命令读取该文件，将其配置到自己的程序中（切勿将此 Token 泄露到公开文章、截图或代码仓库中）。

### 3\. 用 Python 正式调用 Muse Agent！

在本地电脑安装好官方 SDK（`pip install openai`），创建一个测试脚本：

```
1234567891011121314151617181920import osfrom openai import OpenAIclient = OpenAI(    base_url="http://100.x.x.x:8080/v1", # 替换为你自己的 Muse VM Tailscale IP    api_key=os.environ["MUSE_API_KEY"],   # 对应刚才获取的 Bridge Token    timeout=650.0,                        # Agent 任务队列响应较慢，建议设长超时)response = client.chat.completions.create(    model="muse",    messages=[        {            "role": "user",            "content": "你好，请只回复 OK"        }    ],)print(response.choices[0].message.content)
```

运行程序，当终端干净利落地打印出 `OK` 时，整条调用链才算真正大功告成！

_(💡 准确定位：请记住，API Bridge 不是独立部署的高并发大模型推理服务器。每次请求仍需唤醒 Muse Agent 按队列顺序处理，消耗正常的 Muse 使用额度。把它定位为“一个能被外部程序调用的 Muse Agent 接口”\*\*，比盲目吹嘘“免费无限 AI API”要准确且实用得多。)_

### 4\. 在编程harness中使用，如claude code、deepseek、codex

通过兼容 API，可以将 Muse 模型接入 **Claude Code、Codex、DeepSeek Harness** 等主流 AI 编程工具，实现模型与编程框架的灵活组合。

\*\*最大的价值是：节约了订阅费，免费使用muse模型，300亿Token能让你免除token焦虑。

需要注意，各 Harness 的 API 协议不同，需使用相应的兼容接口或适配层；现有 Muse Agent API Bridge 并不能直接兼容所有 Harness。

08 实测汇总与 5 个必须提前说明的坑
--------------------

在我的实际环境中，目前已经完成了以下全套验证：

| 

测试内容

 | 

实测结果

 |
| --- | --- |
| **完整版 Tailscale 安装** | 

成功

 |
| **Muse VM 加入 Tailnet** | 

成功

 |
| **Windows -> Muse VM SSH** | 

成功

 |
| **Muse VM 软件环境持久化机制** | 

已部署

 |
| **API Bridge 服务启动** | 

成功

 |
| **API Bridge 健康检查与调用** | 

通过

 |
| **Muse VM 访问远程服务器** | 

成功 _(系列三预告能力)_

 |
| **远程 Python / Node.js 程序执行** | 

成功 _(系列三预告能力)_

 |
| **Muse 远程权限隔离** | 

通过 _(系列三预告能力)_

 |

为了避免大家照做时走弯路，这 **5 个实测踩出来的坑**务必留意：

1.  第一个坑：把 Tailscale SSH 当成普通 SSH。Tailscale SSH 有自己独立的认证与授权规则。即使两台设备网络互通，也不代表可以直接用 root 登录。修改 Tailnet 标签或策略时，务必确认管理入口依然有效。
2.  第二个坑：把网络审批弹窗当成程序故障。运行期间你会遇到不少 DERP 节点的网络连接审批，其中一部分只是常规网络探测，并非所有弹窗都代表有新的业务连接。不要盲目批准大量未知 IP，更不要擅自关闭安全审批机制。
3.  第三个坑：直接把 API Bridge 暴露到公网。这套方案严格限定在受控的加密 Tailnet 内使用。千万不要把 8080 端口映射到公网，也不要在网页前端代码中硬编码 API Key。
4.  第四个坑：混淆 Muse VM 的 root 和云平台控制权。SSH 拿到的 `root@htch-runtime`
    
     仅仅是当前个人沙盒 VM 内部的账户权限，绝不代表获得了物理宿主机或平台底层服务的管理权。
    
5.  第五个坑：以为 AI API 可以无限并发调用，或忽略安全更新。Bridge 依然受限于 Muse 额度、队列与延迟；同时，由于重度依赖 Tailscale SSH，日常应及时跟进 Tailscale 的安全更新，避免长期固定使用过期版本。

09 写在最后：Muse 真正的价值，不在于那台 VM 有多强
-------------------------------

折腾完这套环境后，我反而不再关心这台虚拟机到底分配了多少 CPU、多少内存。

因为我们做的事情，本质上不是把 Muse VM 改造成一台高性能服务器，而是**在平台允许的既有权限范围内，给原本只能在网页窗口中使用的 AI，装上了两条程序化入口**：

*   一条是 SSH，让我们能够直接管理它的 Linux 运行环境；
*   一条是 API，让其他程序能够直接调用它的 Agent 智能。

这两条通道打通之后，Muse 终于可以真正嵌入复杂的工作流——它可以在自己的 VM 里跑程序，可以和你的电脑交换数据，更可以在获得授权后去连接其他服务器！

🔥 下一篇预告：让 Muse 走出自己的 VM，像小龙虾🦞一样接管你的 VPS！
------------------------------------------

到这里，我们已经解决了“从外部登录 Muse”和“用程序调用 Muse”两个问题。但细心的读者一定注意到了上面实测表格里的最后三行——

**既然我们可以通过 SSH 连进 Muse 的虚拟机，那么能不能反过来，让 Muse 走出那个只有 500MB 可用内存的小沙盒，去反向连接并接管我们自己的高配 VPS 服务器？**

答案是肯定的！

在下一篇《【Muse 实战系列三】云端 AI 指挥官：让 Muse 接入 VPS，打造类 OpenClaw 自动化特工》\*\*中，我将结合实际部署，手把手演示如何让 Muse 通过 Tailscale 连接远程 Linux 服务器：

**当 Muse 不再局限于自己的 VM，真正的云端 AI 自动化工作站才刚刚开始。觉得本文硬核有用，请点个【赞】和【在看】，我们下一篇实战见！**