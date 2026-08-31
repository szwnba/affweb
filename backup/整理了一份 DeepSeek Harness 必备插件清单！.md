8 月 14 号 DeepSeek Harness 刚发布那几天，我写过一篇保姆级安装教程。

那时候它刚出来不久。能聊天，能干活，但界面基本等于毛坯房。

半个多月过去，情况完全变了。

社区插件生态起来了，还有许多博主做了实测横评，把市面上的插件排了个名。我对照榜单把前 10 名挨个用了一遍，整理成这份清单。

下面逐个说。每个插件干什么用、适合什么人，一次讲清楚。

0101 dsh-market，生态入口
--------------------

这个插件排在第一位是有道理的，它是整个生态的入口。

安装命令：

`dsh plugin --profile web add dshmarket`

装了它，重启 `dsh web`，打开 **设置 → 插件市场**。你就可以在设置里直接搜索、一键安装社区插件和主题，还能备份还原配置。后面要讲的 9 个插件，大部分都能从这里装。

![](https://mmbiz.qpic.cn/mmbiz_png/UzsCVuwOnvRiaZjThpj2HhVN2Zic85GsEAfNbUaPrUxgSJ2roJakAgZnyXicHZejbjgcfgXAibHzsUx5hBglohPzzpibsL8mV9j3IuJ69QDCc8SY/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=0)

相当于先给系统装了个应用商店。所以无论你后面想装什么，第一步都是先把它装上。

仓库地址:  `https://github.com/dsh-market/dsh-market`

0202 modlens，给模型装上眼睛
--------------------

公认最强的视觉扩展。

DeepSeek 的主力模型是纯文本的，你丢一张截图过去，它看不到。modlens 补的就是这块。装上之后，直接在输入框粘贴图片，它自动输出 OCR 文字，外加版面布局分析。

![](https://mmbiz.qpic.cn/mmbiz_png/UzsCVuwOnvTSMf5whK23PEd6x7iagh0iasK1Ik4B4j5eXSN123kJ0qKECLJGylTia4Y6rdfXdbDEIV87HkBkibY0BibZF5zUHqhRVFjhLibzibQpicI/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=1)

表格截图、论文截图、报错信息截图，以后统统不用手打了，粘进去就行。

安装命令：

`npx -y @deepseek-ai/dsh plugin --profile web add @liustack/modlens@3.25.2`

仓库地址 `https://github.com/liustack/modlens` ，3.7k star，整个生态里最火的视觉插件。

0303 dsh-web-ui，界面全家桶
---------------------

任务看板、Git 图谱、Token 实时统计，甚至还有桌面宠物。

它把那个极简聊天框直接升级成了全功能控制台。你能看到任务跑到哪一步、代码仓库长什么样、Token 烧了多少。

喜欢盯着界面干活的人，装它。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/UzsCVuwOnvS0wicns1tqpUE6HI8DrdcxDZxNrsAhia1FXSULjZDic7VgqrlXoP9Madpt37SeDnvOWwrebc4clsQy12kiciaTJAASt8uEx0oicvRSo/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=2)

image.png

安装命令：

`dsh plugin --profile web add @linxin666/dsh-web-all@latest`

仓库地址 `https://github.com/zhu1090093659/dsh-web` ，6.4k star，目前 DSH 插件生态里星数最高的项目。

0404 DSH-better-sidebar，侧边工作台
-----------------------------

这个是给写代码的人准备的。

它还原了 VS Code 那套体验，完整侧边栏，内置文件树、真实终端，还有子代理状态监控。你在 Harness 里派出去的子代理现在跑到哪一步，侧边栏一眼就能看到。

![](https://mmbiz.qpic.cn/mmbiz_png/UzsCVuwOnvTtu5Q6IB2iaTvvgOoWBFUVDPc8SvGcGzqvLsovJyAiaU9O5WbqRG8V4443swtYgWKa5vmbP1xH87y8rN6fXquYCDw3Gzs30e0bo/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=3)

和 03 二选一，或者一起装，看个人口味。

安装命令：

`dsh plugin --profile web add dsh-better-sidebar@latest   # 首次会因 pnpm 11 拦截 node-pty 构建脚本而失败（依赖已写入）  
cd ~/.dsh/profiles/web && pnpm approve-builds --all      # 放行构建脚本（自动重跑安装）  
dsh plugin --profile web add dsh-better-sidebar@latest   # 重跑即成功`

仓库地址 `https://github.com/omdsh-dev/DSH-better-sidebar` ，3.1k star。

0505 dsh-at-file，快速引用
---------------------

解决一个高频痛点。

以前想让模型看你本地的某个文件，得开文件、全选、复制、粘贴一大段进来。装了它，输入框直接打 @，模糊搜索本地文件和目录，回车就引用进上下文。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/UzsCVuwOnvSp5glkkDpjG4rOBjtD2x5zYIplMaPc5LHMx6lHepxLQn5OXiaUqBm0CtnZibFS6gHich6ibYoS105eN0DqDCmqvUxDpwsEHo8NLU8/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=4)

用过飞书或者钉钉 @ 功能的人，秒懂。

安装命令：

`dsh plugin --profile web add https://github.com/omdsh-dev/dsh-at-file/archive/refs/tags/v0.6.8.tar.gz`

仓库地址 `https://github.com/FSMargoo/dsh-at-file`

0606 deepseek-harness-desktop，原生桌面端
-----------------------------------

DeepSeek Harness 官方 Web UI 的桌面客户端

下载安装即可使用，不用自己起 `dsh web`

免配置 Node.js 环境，Windows 和 Mac 双端下载即用，装完在系统托盘常驻，要用点开就行。

当初装环境折腾过的人，这个直接帮你跳过那一步。

仓库地址 `https://github.com/ChisaAlter/Deepseek-Harness-Desktop`

0707 dsh-web-search-pro，增强多源搜索
------------------------------

默认的搜索能力有限。这个插件把 DeepSeek、Bing、Exa 多个引擎聚合到一起，还支持对小红书、知乎、B 站这些平台定向爬取，结果可以本地缓存。

做调研、找资料、写稿子的人，这个能省大量时间。

仓库地址 `https://github.com/anweat/dsh-web-search-pro`

0808 OpenViking，跨会话记忆
---------------------

默认情况下，每个会话是孤立的。关掉窗口，聊过的东西就没了。

OpenViking 做了一个自进化的上下文数据库，把碎片对话变成长期记忆和知识 RAG，模型越聊越懂你。你上周跟它讨论过的项目背景，这周接着聊，它还记得。

引擎本体在 `https://github.com/volcengine/OpenViking` 。DSH 这边的接入插件，社区用得比较多的是 `https://github.com/Rxiain/dsh-openviking`

0909 dsh-cost-meter，费用看板
------------------------

这个插件出现得非常是时候。

8 月 17 号 DeepSeek 那轮涨价大家还有印象，缓存命中的价格从 2 分 5 涨到高峰时段 3 毛，一下 12 倍。现在跑 Harness，不看费用等于裸奔。

dsh-cost-meter 实时统计会话花费和当日预算。最实用的功能是，DeepSeek 峰谷电价切换之前它会自动提醒你。踩着优惠时段跑任务，一个月下来能省不少。

仓库地址 `https://github.com/Han-1413141/dsh-cost-meter`

1010 dsh-session-library，知识库与精读
-------------------------------

最后一位，管的是知识管理。

本地文档混合检索，加长文精读。它能把一份很长的 PDF 自动拆解成主张和证据链，读论文、读报告的人会非常喜欢。

配合 08 的记忆系统，就是把 Harness 用成个人知识工作台的组合。

这个要单独说明一下。dsh-session-library 这个名字，我在 GitHub 上没有搜到对应仓库，可能作者后来改了名。功能最接近的是 `https://github.com/1-CellBio/dsh-okf` ，同样是把研究 PDF 拆成可检索的知识库。也可以打开 dsh-market 直接搜 session library。

11最后，新手怎么起步
-----------

最后，不要一口气装十个。

三步走。第一步，先装 01 市场和 02 视觉。第二步，装 03 或 04 其中一个界面插件。到这一步，基础体验已经和毛坯版完全两个东西了。第三步，再看自己用得多的是搜索还是记忆，按需补齐后面的。

这份清单建议先收藏。DeepSeek Harness 的生态现在是一周一变，今天的前 10，下个月可能就换血一半。但最核心的那几个，市场、视觉、界面，大概率会一直稳着。