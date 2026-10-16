![](https://mmbiz.qpic.cn/sz_mmbiz_png/JdznImgLVOkRXL7bLB2FTlLGibYwqOFUmhia1XgnNJkFHxTTvTpHDT5Yd37IWUoy4p9qDhxFHB4WolicAsjUh0m6Gdhs9UCIEMqMqwhu4WoSg4/640?wx_fmt=png&watermark=1#imgIndex=0)

最近 REA 在 X 刷屏了。很多人只盯着 REA，拿它去逆向软件，但是

> **逆向 ≠ 复刻**

但是 REA + Reverse-skill + PentAGI 能接成一条完整的流水线。把它们一起交给 Codex，可以实现：**看到一个喜欢的软件功能 → 搞懂它怎么实现 → 用自己的技术栈做出同样的版本 → 顺手确认它安全。** 

* * *

01📚 目录
-------

*   **大白话版**
    
     —— 三个工具怎么配合，小白怎么复刻项目
    

*   **先认识这三个神器**
    
     —— 看懂“它是怎么做的”
    

*   **三者怎么配合**

*   **完整工作流**
    
     —— 五步复刻一个软件（重点）
    

*   **卡住了怎么办**
    
     —— 软件开发出问题解决方案
    

* * *

02三个工具怎么配合，小白怎么复刻一个项目
---------------------

不懂编程的人也可以复刻项目。复刻一个完整项目，就是把它拆成一个个小功能。逐个做出来，最后拼起来。

你要做的事是说清楚需求，再检查 AI 做出来的东西。动手的活可以交给工具。整件事分成四段，每段一个主力工具。按顺序走一遍，就能复刻一个功能。

### 三个工具的分工

先让 REA 看懂目标。你看到一个想复刻的功能，就把目标交给 REA。REA 会读对方的程序，追它的处理过程。做完这些，它会交给你一份解释。每个结论都告诉你依据在哪个文件、哪一段，你能自己去核对。

看懂之后，Reverse-skill 负责把工具备齐。REA 干活要用一堆工具，而且不同目标用的工具不一样。新手根本不知道该用哪个。Reverse-skill 会判断这次该走哪条路，缺什么工具就装什么。踩过的坑它会记下来，下次直接绕开。

接着让 Codex 写你的版本。Codex 照着 REA 那份带证据的解释，用你熟悉的工具写一个属于你的版本。这是照着理解重写，不是抄对方的代码。

最后是上线前检查。做出来的东西要上线了，先用 PentAGI 测一遍。PentAGI 是一队 AI，带着二十多种专业安全工具。它带着这些工具在隔离的环境里跑一遍。跑完会找出一批漏洞，然后给你一份报告。只是自己练手、不打算上线，这一步可以跳过。

四段走完，一个功能就复刻出来了。要上线的东西，别忘了最后一段。

### 复刻时你的操作顺序

*   先装环境。要准备一个代码 AI 客户端，比如 Codex，还要装 Node.js。只有拆手机 App 才需要装 Java。PentAGI 要 Docker，电脑内存 4G 以上才跑得动。环境装好后，把第四章第 1 步那段话发给 Codex，让它带着把 REA 和 Reverse-skill 装好。
    

*   然后提目标。用第四章第 2 步那段话，把括号里的内容换成你的目标。想复刻一个大项目，就把它拆成一个个小功能，一次只复刻一个。第一次挑最小的那个功能，跑通了再加大。
    

*   接着看拆解结果。REA 的结果出来后，重点看三个地方，结论是什么、证据在哪、逻辑大概是什么。哪条结论找不到证据，就让 Codex 重查。
    

*   最后验收。用第四章第 4 步那段话，让 Codex 写出你的版本。写完后你验收三件事，跑不跑得起来、像不像原版、缺什么。要上线，再用第四章第 5 步做安全检查。
    

### 小白容易踩的坑

*   第一次就挑大目标。想一口气复刻一整个项目，第一晚就会卡死。先复刻一个小功能，跑通了再加大。
    

*   没看懂就让它写。跳过拆解直接让 Codex 动手，写出来的东西你不知道它为什么对，也不敢改。先看懂，再动手。
    

*   把复刻当成抄代码。直接搬对方的代码确实能跑，但是你看不懂也改不动。别人的代码还有版权和许可的限制，直接拿来用有风险。看懂以后重写，做出来的才是你的。
    

*   环境没装齐就开工。Node.js 版本不够，或者没装 Docker 就跑去体检，报错会一个接一个。先把环境装齐，再开工。
    

*   报错只发一半。要把完整的报错原文发给 Codex，它才帮得上忙。只说一句坏了，它没法救你。
    

*   拿 PentAGI 测别人的网站。这是规矩，只能测你有权测的系统。
    

*   漏洞报告想一次修完。先修严重和高危，中的攒着一起修，低的先记下来。
    

### 小白看不懂的地方

*   逆向是从一个软件的行为出发，反推它的功能是怎么做到的。这样做的目的是学习和仿制，不是攻击。
    

*   有出处的解释，说的是每个结论都带依据，而且告诉了你读了哪个文件、哪一段。你能核对的结论才可信，说不出依据的先放一边。
    

*   REA 读的不一定是源代码。很多软件根本没有源代码，REA 读的是程序本身和它的行为。有源代码的反而是简单情况。
    

*   jadx、apktool 这些工具名不用记，Reverse-skill 会自动管。它让你装什么就装什么，装完就能往下走。
    

*   MCP 是一种标准接口，AI 客户端靠它调用外面的工具。REA 就是用 MCP 接进 Codex 的。你不用懂原理，安装的时候点同意就行。
    

*   Evidence 是证据记录，记的是 REA 这次读了哪些文件、哪几段代码。第四章第 3 步那段话，就是让它把证据翻出来给你看。
    

*   自己练手可以不用 PentAGI。要上线、有表单、要收用户数据的东西，上线前必须测一遍。
    

* * *

03先认识这三个神器
----------

*   **REA**
    
     —— 让 Codex 看懂任何软件的某个功能是怎么实现的（拆解、理解）：github.com/morluto/rea
    

*   **Reverse-skill**
    
     —— 一个“技能路由包”，帮 Codex 自动挑工具、搭环境、记经验（调度、提效）：github.com/zhaoxuya520/reverse-skill
    

*   **PentAGI**
    
     —— 一支自动干活的 AI 渗透测试团队（做完安全体检）：github.com/vxcontrol/pentagi
    

### 1.REA：看懂“它是怎么做的”

REA 全称 Reverse Engineer Anything。它是给 Codex、Claude Code 这类 AI 编程助手用的逆向分析工具。

**逆向分析是**：从一个现成软件的程序和行为出发，查清某个功能是怎样实现的。它能研究网页、桌面应用和二进制程序。你看到一个喜欢的功能，让 AI 用 REA 去读取相关程序、追踪处理过程，它会给你一份**有出处的解释**，再帮你为自己的项目做一个类似版本。每条结论都会记录依据，方便核对。

![](https://mmbiz.qpic.cn/mmbiz_png/JdznImgLVOnPuamDxjcvmrm5FMAictomt44QHbF5ERlt2atUhUstubKD2b1ZNM51NN6uWZxc3SSBHice17nYoBvyDliayPUGKujztHO6HzXMOE/640?wx_fmt=png&watermark=1#imgIndex=1)

### 2.Reverse-skill：帮 AI 自动挑工具、搭环境

Reverse-skill 是一个**技能路由包**，支持 Claude Code、Cursor、Cline、Kiro 等 AI 编程客户端。

它解决的痛点是：逆向/分析要用一堆工具，新手根本不知道该用哪个、怎么装。Reverse-skill 做了三件事：

*   **AI 自动路由**
    
     —— 你说要干嘛，它自动判断该走哪条技能线
    

*   **按需自举工具链**
    
     —— 需要哪个工具，现用现装
    

*   **自动进化经验库**
    
     —— 把踩过的坑记下来，下次更顺
    

![](https://mmbiz.qpic.cn/mmbiz_png/JdznImgLVOlmYLVJVKvx8Xj4X0lg2ibvMOEmpszuBYRohlS3vhopfGzTSuXRcBkVDgXIbMaCxkAy4eDRUFibs3x03G8B5aHibo3Q0TZCu73WzE/640?wx_fmt=png&watermark=1#imgIndex=2)

### 3.PentAGI：复刻完还要确认它安全

PentAGI 是开源的“AI 红队”。多个 AI 智能体分工：一个搜信息、一个写测试代码、一个执行，彼此沟通，最后输出一份漏洞报告，全程在 Docker 沙箱里跑。

你复刻出自己的版本后，用它测一遍，确保没留下明显的安全漏洞。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JdznImgLVOkcmhz7RcWMQGhKkFN3K1IkykY6qAxvxtECINzo5lOI4Uuia91wIaJNBpUZOa6aZRufvK9hYVAemdmmfnCDYZLhEQu0QZPz3fZg/640?wx_fmt=png&watermark=1#imgIndex=3)

* * *

04三个神器怎么配合
----------

一次完整的“复刻”，四个角色各管一摊：

![](https://mmbiz.qpic.cn/mmbiz_jpg/JdznImgLVOmTuhB7o80PjaUlXL3iapX0clS6Gu4KxfQXBhyWmwicsc7X1ux9Mtvl1qs0JKOZYHNqrhEA7BeDXuXtPzrRmickBh1B0AybMKksQM/640?wx_fmt=jpeg&watermark=1#imgIndex=4)

* * *

05完整工作流：五步复刻一个功能
----------------

下面以“复刻某个网页的一个小功能”为例。准备阶段会用到几条命令，后面基本就是跟 Codex 聊天。

### 第 1 步 · 装好三样东西

先装好 Codex（或 Claude Code）桌面端并登录。**把下面这段话直接发给 Codex，让它带你装**：

> 我想在你（Codex）里接入两个开源工具，用来逆向分析、复刻软件功能。我不懂编程，请一步步带我，每一步说清在哪个窗口操作、要粘贴什么、成功后会看到什么。
> 
> 1.  Reverse-skill（技能路由包）：仓库 https://github.com/zhaoxuya520/reverse-skill
>     
> 
>  2.REA（逆向分析工具）：仓库 https://github.com/morluto/rea
> 
> 请你：
> 
> *   先读这两个仓库的 README，告诉我各自要怎么接入到当前这个 AI 客户端；
>     
> 
> *   按我的操作系统给出具体命令（我的系统是：【Windows / macOS，二选一】）；
>     
> 
> *   需要我装 Node.js、Git 等前置工具时，先告诉我怎么装、怎么确认装好了；
>     
> 
> *   全部接入后，给我一句测试指令，用来确认 REA 和 Reverse-skill 都能正常调用。
>     

这两个工具的官方页面，长这样：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JdznImgLVOkWibBoVXYSzSGIsTicRTx2cWYPu5mvAIbbGn6wdj4RPZ6yG29Kme97EmQ0nSEEcHqF4tupqgbnZqvzOnDYoNDLQeHx9pZ5RRvv4/640?wx_fmt=png&watermark=1#imgIndex=5)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JdznImgLVOkN351YxzSF0fjIWT7xm6kcS2egBNMVS0xria5pcEtoGHq3SXYx6fTcNdJLdEBNZaQooTC3RJ96l2eT1TIUTSxHXAiahDZR9gWnc/640?wx_fmt=png&watermark=1#imgIndex=6)

### 第 2 步 · 让 REA 读懂目标功能

把下面这段发给 Codex，把【】里的内容换成你自己的：

> 我想搞懂【某个网页 / 软件，例如 Chrome 断网小恐龙】的【某个功能，例如障碍物为什么越来越快】是怎么实现的，之后要用我自己的技术栈做一个类似版本。
> 
> 请你：
> 
> *   用 Reverse-skill 判断这次该走哪条分析线、要用哪些工具，缺工具就按需装好；
>     
> 
> *   用 REA 读取相关程序、追踪它的处理过程；
>     
> 
> *   给我一份【有出处】的解释：关键逻辑是什么，依据在哪个文件、哪一段；
>     
> 
> *   我不懂编程，请一步步来，并说明每一步在哪个窗口完成。
>     

### 第 3 步 · 核对“有出处的解释”

REA 会把关键逻辑读出来，附上文件名、行号这类依据。你不用全看懂，重点确认一句话：**它的结论能找到出处。**  想核对更细的，发这段：

> 请展示 REA 这次分析的 Evidence（证据）记录：你具体读了哪些文件、哪几段代码，每条结论分别基于什么。
> 
> 再用一段大白话，把这个功能的实现原理讲给完全不懂编程的人听。

### 第 4 步 · 让 Codex 做出你自己的版本

确认理解没问题后，发这段让它动手。注意这是**理解思路后重写，不是复制原代码**：

> 根据上面 REA 的分析，请用【我的技术栈，例如 HTML + JS】帮我实现一个功能类似的版本。要求：
> 
> *   这是基于理解的全新实现，不要直接照搬原程序的代码；
>     
> 
> *   告诉我每个文件叫什么、放在哪、内容是什么；
>     
> 
> *   给我一条运行 / 预览的命令或步骤，让我能亲手打开试玩；
>     
> 
> *   跑不起来时，等我把现象和报错发给你，你再帮我改。
>     

### 第 5 步 · 用 PentAGI 做安全体检

如果你复刻的是要上线的东西（尤其有后端、有表单），上线前做一次安全体检。发这段：

> 我用 PentAGI 给自己的这套系统做一次渗透测试（这是我自己有权测试的系统）。
> 
> 请你：
> 
> *   带我用 PentAGI 对【我的站点地址 / 本地服务】发起一次测试任务；
>     
> 
> *   测试只针对这个我自己的目标，不要触碰其它任何系统；
>     
> 
> *   跑完把漏洞报告里的问题按严重程度讲给我听，并告诉我每个怎么修；
>     
> 
> *   我不懂安全，请用大白话解释。
>     

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JdznImgLVOk511sKzSiazfH4jjr4l4pPVrqTGARwVngib77zIOoYD6UtGIZrJp7ShEpDoP75aF5CKD0jfGHibNE6dtuAJwYQG1uZeOxKKiaZg64/640?wx_fmt=png&watermark=1#imgIndex=7)

* * *

06卡住了怎么办
--------

遇到报错，先把“出错前的操作 + 报错原文”发给 Codex，用这个模板：

> 我在跟练三件套复刻功能，刚才在【终端/客户端】做了【具体操作】，出现报错：【粘贴报错】。请先解释原因，再给我下一步具体操作，说明在哪个窗口做、成功后会看到什么。我不懂编程。

几种常见情况：

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/JdznImgLVOlz40cn23zW30BSj8mQGsF1J8Z51fpJSM1h0mSn55KVq7oNYtWpn13PPSjRe8BjeUUTEMcsfibHZSDTXytImIPOqK5A5ibiboXJN4/640?wx_fmt=jpeg&watermark=1#imgIndex=8)

* * *

07一句话总结
-------

**REA 帮你看懂，Reverse-skill 帮你调度，PentAGI 帮你体检，Codex 把它们串起来动手做。** 

*   REA：github.com/morluto/rea
    

*   Reverse-skill：github.com/zhaoxuya520/reverse-skill
    

*   PentAGI：github.com/vxcontrol/pentagi