![](https://mmbiz.qpic.cn/sz_mmbiz_png/oERWrZhYomqHw7NFHfgwdTcWwVTIWWopichPEBvleJxH3yWXiaMPpiaOjZg1DDdKicV3dP0vncqeWUmZsaq9zI001ianYecYIoX7OJNPRHTv7P68/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=0)

今天例行打开 OpenCode 官网看更新，发现首页跟上周完全不一样了。

顶部挂了一条横幅：**New OpenCode v2 is now available**→  
安装命令从 `/install`变成了 `/v2/install`，  
GitHub 链接也统一换到了 v2 分支。

我第一反应：它终于转正了？

7 月那波 beta 动静不小——16 万 star 的仓库彻底重写，Bun 换 Node、桌面端 Tauri 换 Electron、多标签并行会话。但「测试版」帽子戴了快 4 个月，很多人跟我一样，装了也不敢放正经项目里。

现在官网全线切到 v2，该升了吗？升了会不会翻车？我把官方迁移文档从头翻了一遍，这份升级答案给你。

先说结论：转正了，但长得不太像
---------------

v2 确实是好东西：多标签并行会话、Electron 桌面端、内存占用降了、服务常驻跨设备能连。但 beta 意味着「随时可能清数据、改配置」，所以多数人选择继续蹲 v1.18.x 等转正。

官网这波切换，就是那个「正式」的信号。但你要注意，它长得不像传统意义的「正式版发布」：

• changelog 页面还是空的，v2 线的更新记录没挂上来  
• GitHub releases 主页最新一条还是 **v1.18.31**（9/14）  
• 安装命令换成了新包 `@opencode/cli`

转正了，但官方没敲锣打鼓。所以很多人反而懵了：现在到底是啥状态？怎么升才不翻车？下面拆开讲。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oERWrZhYomoHQx3kXGlg0YEbdjnHFXhcib8BBGGJZvrL8S98v8Z1usTYYFsFYyeAWlXlHz2swdTVepHjARlyAet6G9fwicYI63Fg74fzmwvBM/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=1)

转正怎么看：官网 3 个信号 + 版本线佐证
----------------------

判断「转正」别听社区传言，盯官网和 GitHub 就够，三个信号全亮了：

• **首页横幅**：New OpenCode v2 is now available →  
• **安装入口**：全站安装命令换成 `curl -fsSL https://opencode.ai/v2/install`  
• **仓库指向**：官网 GitHub 链接全部指向 `v2`分支，主仓库已 **209K star**/ 950+ contributors / 1600 万+ 月活开发者

版本线更实锤。GitHub tags 页里，v2.0.x 已经跑出了完整迭代节奏：

• **v2.0.2**（9/12）→ **v2.0.10**（9/19），一周 9 个小版本  
• 同时 **v1.18.31**（9/14）还在发——v1 没被抛弃，两条线并行维护

一周 9 个版本，说明 v2 已经进入正式迭代节奏，不是挂 beta 帽子的试验品了。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oERWrZhYomqkqjfcEXBfr99zWA9u0MibEu2GrkqlDLmJY7S9Bf4xc6vZfbpz0AVDyk8rZQISU9bfSuZQfppLEX9hjyPtfdh4XXicLF9lYX0Ro/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=2)

装 v2：两条路，一个坑
------------

官方给了两条安装路，选顺手的：

\# 方式一：官方 curl 安装器（推荐）  
curl -fsSL https://opencode.ai/v2/install | bash

\# 方式二：npm 装新包  
npm install -g @opencode/cli

**一个坑先记住**：V1 和 V2 现在共用 `opencode`这一个命令，不再默认并行安装。beta 时期那种「装两个、opencode2 指 v2」的日子结束了。装 v2 前，先卸掉包管理器装的 v1——v2 的 curl 安装器会直接替换掉旧二进制。

升级必知的 3 个 Breaking Changes
--------------------------

官方迁移文档把破坏性改动明明白白列了三处，升级前不知道，装完大概率一脸懵：

• **插件 API 重构**：V1 插件在 V2 跑不了，入口、hooks、工具、事件全按新 API 重写  
• **Server API 重构**：V1 服务端 API 的集成要迁到新契约，用官方 `@opencode/client`包  
• **终端配置合并**：分层 `tui.json(c)`变成单一全局 `~/.config/opencode/cli.json`，首次启动自动迁移

好消息：除了这三块，你现有 `.opencode/`下的 agents、commands、skills 文件，官方承诺「应该不用改就能用」。真坏了算兼容性 bug，可以提 issue。

![](https://mmbiz.qpic.cn/mmbiz_png/oERWrZhYomqDoAK7G7JhOuG1gGlQgn8ln6sbDBgjrNpaWTS8XU0Cp9BCsRKsjqcHPEIFOFtOpfibJRKJuOfB5DuWRuI6A0SoC3UlQtUwM3H8/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=3)

配置迁移对照：最容易踩的改名清单
----------------

如果你自己手改配置，下面这张对照表系好安全带，最容易踩的就是这些：

• **权限动作改名**：`bash`→`shell`、`task`→`subagent`、`write`/`patch`→`edit`；结构从「按工具分组」变成单一有序 `permissions`数组  
• **单数变复数**：`agent`→`agents`、`command`→`commands`、`provider`→`providers`、`snapshot`→`snapshots`、`attachment`→`media`  
• **compaction 改名**：`preserve_recent_tokens`/`reserved`→`keep.tokens`/`buffer`  
• **skills 合并**：`paths`+`urls`两个字段合并成一个数组  
• **MCP 结构**：服务器收进 `mcp.servers`，`enabled`变 `disabled`（语义反转），timeout 拆成 catalog/execution 两档  
• **providers 合并**：`azure-cognitive-services`→`azure`、`google-vertex-anthropic`→`google-vertex`；`npm`→`package`（AI SDK 包加 `aisdk:`前缀）  
• **模型 variant**：独立 `variant: high`字段，合并进模型引用写成 `anthropic/claude-sonnet-4-5#high`

看到这一长串先别慌——官方说得很明白：**V2 直接读 V1 格式的配置，自动归一化，不强制你转**。这些改名是给你「想转的时候」用的，不是升级的前置条件。

![](https://mmbiz.qpic.cn/mmbiz_png/oERWrZhYomp9co1oFtttscncjPfqKKCH0ovGcOiaaRUNbvpmtDnFv6f5roIfyvhFa0lSyIxJQ18icY73OtAJrdZAe6FTlJxV5sSInWKJA05Go/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=4)

迁移 5 步：官方推荐，不用重写
----------------

官方迁移指南给了套 5 步流程，核心思想就一句话：**先跑起来，再慢慢转**。

① **保留现有配置**：V2 从同样位置读 `opencode.json`和 `.opencode/`，什么都不用动  
② **启动 V2 验证**：确认模型、凭证、agents、permissions、MCP 服务器都正常  
③ **移植插件**：V1 插件不兼容，这一步必做  
④ **移植集成**：调过 V1 server API 的脚本/工具改到新契约  
⑤ **转换配置（可选）**：想转 V2 原生格式时再转，不转也行

第 5 步有个偷懒妙招——直接让 OpenCode 自己动手，给它这段指令：

Migrate my OpenCode configuration, including file-based  
definitions, from the V1 format to the native V2 format.  
Preserve its behavior and all unrelated settings.

它能通读整个配置文件，只改该改的，不动的设置不碰。V1/V2 字段在顶层可以共存，转了一半也没关系。

![](https://mmbiz.qpic.cn/mmbiz_png/oERWrZhYomom9GkgrXpCfrT7JLcILpaystbE7xjWbvtg421p1iadjerY4vLUJjq1TokRdcCpWypWME4LkgSZdjicDh8t8b2N9aKQV8R69uQqc/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=5)

几个我挖出来的细节，别踩
------------

翻迁移文档时挖到几个容易被忽略的点，提前给你打预防针：

• **V2 不跑 LSP 了**：`lsp`配置会被接受但不再生效，依赖 LSP 诊断的工作流换成项目自带的 lint / typecheck / 编译命令  
• **转完别喂回 V1**：V1/V2 用同一套配置路径，一旦转成 V2 原生格式，别再拿 V1 去读  
• **混写有边界**：`mcp`/`compaction`/`experimental`里可以混写，但单个 agent/provider/command/model 内部必须保持一种格式  
• **`logLevel`被忽略**：改用环境变量 `OPENCODE_LOG_LEVEL`  
• **`autoshare`改 `share`**：布尔值变成 `"auto"`/`"disabled"`三态  
• **命令改名**：别再用 `subtask`，已改名 `subagent`（旧名字仍接受，但那是兼容遗留）

所以，到底升不升？
---------

我的建议按情况分：

• **主力干活、插件一堆的**：先别急着切。v1 线还在维护，v1.18.31 上周刚发。等插件生态迁移完再动  
• **普通使用、无插件依赖**：可以升了。官方全站切 v2 就是信号，配置还能自动迁移，翻车代价不大  
• **想尝鲜的**：装 v2 前先备份配置（V1/V2 共用配置路径，回退前记得把原生格式配置改回去）

官网已经替你投好票了——安装入口、文档、GitHub 链接全部切 v2。剩下的只是时间问题。

> 转正从来不是版本号的事，是你愿不愿意跟着迁移的事。

💬 你升级到 v2 了吗？配置迁移踩到过什么坑？评论区聊聊，我整理进避坑指南。

* * *

> 如果觉得这篇文章有用，欢迎关注「AI 阿砚」，一个科研爱好者的 AI 探索笔记。