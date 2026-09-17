![](https://mmbiz.qpic.cn/sz_mmbiz_png/B7Jh706CbS1FucGkITw35ia0pp6ia6uS9ljysW09hIauM9wF1ov0clicdr4YvvCE45UcLPonr1g8lCTNvLjbdLTC2nObrmFCt95zrB5oGibyYOI/640?wx_fmt=png&from=appmsg#imgIndex=0)

图 1｜BrowserSkill 官方项目横幅。来源：Tencent/BrowserSkill 官方 GitHub 仓库。

从安装、连接扩展到 \`bsk doctor\` 验收，按步骤跑通第一个网页任务

这篇教程会教你：在 WorkBuddy 中装好 BrowserSkill，让 AI 打开一个公开网页、读取内容并返回结果。

01安装成功标准
--------

要同时满足下面四项：

1.  WorkBuddy 能执行 `bsk --version`，并返回版本信息。
    
2.  BrowserSkill 浏览器扩展已启用，扩展弹窗显示绿色连接状态。
    
3.  `bsk doctor`
    
     的每一项检查都是 `ok` 或 `na`。
    
4.  新建 WorkBuddy 会话后，AI 能打开独立的 Agent Window，访问网页并返回内容。
    

前三项只是安装成功，第四项才说明整条执行链路真正可用。如果 AI 只回复“已经安装完成”，请让它贴出 `bsk doctor` 的完整结果再判断。

02准备工作：浏览器、WorkBuddy 和一个公开测试页
-----------------------------

开始前准备好：

*   一个能执行本机 Shell 命令的 WorkBuddy 环境。
    
*   Chrome 或 Edge 浏览器。BrowserSkill 官方明确支持这两种浏览器。
    
*   安装浏览器扩展的权限。扩展必须由用户亲自确认安装，AI 不能代替。
    
*   一个公开测试页面。本文使用 `https://example.com` 和 BrowserSkill 官方中文 README。
    

BrowserSkill 官方仓库把 WorkBuddy 列在支持的 Agent 中。它的基本链路是：WorkBuddy 调用 `bsk`，`bsk` 连接本机浏览器扩展，扩展再打开独立的 Agent Window 执行网页任务。

![](https://mmbiz.qpic.cn/mmbiz_png/B7Jh706CbS3ezB32cM2tsMJLvCZYQvebVVSboE5xmAm3t6dQDWibXdeNJ9ETb831VDiaSDSX0rsUhWXSopwkIfbwv7cQomkHODNB8W3FOOIic0/640?wx_fmt=png&from=appmsg#imgIndex=1)

图 2｜腾讯云 WorkBuddy 官方页面中的 Agent 工作流示意。图中展示的是 WorkBuddy 的通用工作方式。

03第一步：让 WorkBuddy 自动安装 BrowserSkill
-----------------------------------

在 WorkBuddy 新建一个任务，把下面整段提示词复制进去：

```
请按照下面这份 BrowserSkill 官方安装说明，在本机完成安装和配置：https://raw.githubusercontent.com/Tencent/BrowserSkill/main/AGENT_INSTALL.md要求：1. 安装 bsk CLI 和 browser-skill；2. 不要使用 sudo；3. 执行 bsk --version；4. 执行 bsk doctor；5. 把完整检查结果告诉我；6. 如果需要安装浏览器扩展，请打开官方商店页面后停下来让我操作。
```

这段地址来自 Tencent/BrowserSkill 官方仓库。WorkBuddy 会按照说明安装 CLI 和 Skill，然后运行诊断。

如果诊断结果只有 `extension connected` 一项失败，并提示 `0 browsers connected`，通常说明 CLI 已经装好，只差浏览器扩展。官方安装说明把这种情况列为首次安装时的正常中间状态。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/B7Jh706CbS0GHiaibjJRvnsZf95hqckRJibxhNibmCP1nAOI6bemY6fkfxMr1BySjmy2ibDpiciaUhJibUO2tUnRDojiaibxkx9yVCkjZ2oAQuLCsYWR4/640?wx_fmt=png&from=appmsg#imgIndex=2)

图 3｜WorkBuddy 官方技能市场真实界面。技能入口和页面布局可能随版本更新。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/B7Jh706CbS1rrib3OqvJ5Wt2UUqialdpccdMXWEfYOynzChbON0Dw2zUN2tGh4p4oicLYiaFewiaMgLQviaSwAxHC39aznLFaRgYjZhOSkZVPLRQM/640?wx_fmt=png&from=appmsg#imgIndex=3)

图 4｜WorkBuddy 官方文档展示了用自然语言查找并自动安装 Skill 的方式。本教程使用的是 BrowserSkill 官方安装说明链接。

04第二步：安装扩展，让 `bsk doctor` 全部通过
------------------------------

WorkBuddy 应当打开 BrowserSkill 的 Chrome Web Store 页面。如果没有自动打开，可以手动访问：

`https://chromewebstore.google.com/detail/hhcmgoofomhgciiibhipgmgkgnoenaoi`

接着按顺序操作：

1.  点击“添加至 Chrome”或浏览器显示的同类按钮。
    
2.  在确认框中允许安装扩展。
    
3.  打开 BrowserSkill 扩展弹窗，等待连接状态变成绿色。
    
4.  回到 WorkBuddy，发送：“扩展已经安装并显示绿色，请再次执行 `bsk doctor`，把完整结果发给我。”
    

![](https://mmbiz.qpic.cn/mmbiz_png/B7Jh706CbS3qacyBDNhVewqCq4Bh38bZIv9Es5tiaHeZ3LW8QDwldHu8gxLoPSRvIg5IwgdNicHbp5Qu7XV8s9ohlVyPvb5d9tZIKKWoibibZQw/640?wx_fmt=png&from=appmsg#imgIndex=4)

图 5｜BrowserSkill 官方 Chrome Web Store 截图。商店按钮文字可能因浏览器版本和语言不同而变化。

![](https://mmbiz.qpic.cn/mmbiz_png/B7Jh706CbS3oQNiapemP0BVZR1Sxuniak4MepyKp9O9eJXia9YJTjj7Arx6AOgQNDV88QXjUDfbbYQUWrxYHib2uSOVpGdg8z3plUqwYrGXWiaDI/640?wx_fmt=png&from=appmsg#imgIndex=5)

图 6｜BrowserSkill 官方演示视频中的扩展真实界面。扩展连接成功后应显示绿色状态。

验收时不要只看最后一句话，要检查每一行。官方定义的完成口径是：`bsk doctor` 所有检查项都为 `ok` 或 `na`。只要还有 `fail`，就让 WorkBuddy 按照该行的 `hint` 处理，再运行一次诊断。

05第三步：新开会话，跑通第一个只读任务
--------------------

Skill 安装完成后，新建一个 WorkBuddy 会话。BrowserSkill 官方 README 也要求在新 Agent 会话中开始使用。

复制下面这段提示词：

```
请使用 browser-skill 打开 https://example.com。读取网页标题和正文，整理成 3 条中文摘要。只允许读取页面，不登录、不填写表单、不点击提交按钮。完成后关闭 browser-skill session，并告诉我任务是否成功。
```

正常情况下，你会看到一个独立的 Agent Window。AI 在这个窗口里打开网页、读取内容，然后回到 WorkBuddy 输出摘要。任务结束后，Agent Window 应当关闭。

![](https://mmbiz.qpic.cn/mmbiz_png/B7Jh706CbS2xfA14EFpsfOpS4Wqywp5BibF2ORGedmf2D1wqFaYAOvp15UAV0s5mBpibGdhzUoqibO1XqfS2qcfIjib3B12ZCQxYSgZXWC8QiasY/640?wx_fmt=png&from=appmsg#imgIndex=6)

图 7｜BrowserSkill 官方演示视频真实截帧。左侧为终端操作，右侧为独立的 Agent Window。

这一关的成功标准很简单：网页确实打开，摘要与页面内容一致，任务结束后会话被关闭。如果只得到一段没有打开网页的泛泛介绍，可以明确补一句：“必须调用 browser-skill 完成，不要只根据已有知识回答。”

06第四步：测试长页面，确认它会滚动和整理
---------------------

公开短页面跑通后，再用 BrowserSkill 官方中文 README 测一次长页面：

```
请使用 browser-skill 打开下面的公开页面：https://github.com/Tencent/BrowserSkill/blob/main/README.zh-CN.md完整阅读页面，必要时滚动和展开内容。请输出：1. BrowserSkill 的用途；2. 安装流程；3. 支持的浏览器和 Agent；4. 使用时需要注意的 5 条安全边界；5. 原始页面链接。只读取页面，不登录，不修改任何内容。遇到验证码或权限提示时停止并告诉我。完成后关闭 session。
```

这个任务能检查三件事：是否真的读取长页面，是否会根据页面变化继续观察，是否按指定结构交付结果。

![](https://mmbiz.qpic.cn/mmbiz_png/B7Jh706CbS1ZCRCJh541Qkg1pSld0iaTuUDWia4RtvHLdId9ChHwpsiacgnNWS287nRibZVJFtiaascpug87L9icqR3Q20fAuXOg4mViaFn7Ehz1dQ/640?wx_fmt=png&from=appmsg#imgIndex=7)

图 8｜WorkBuddy 官方 Agent Browser 文档中的网页执行界面。Agent Browser 与 BrowserSkill 是不同工具，此图仅展示同类浏览器 Skill 的操作形态。

![](https://mmbiz.qpic.cn/mmbiz_png/B7Jh706CbS1um2Sic50umaYsicA3BqRkAicYVLSgCUhatj4mgdian3coibZZsibt7YFouSr6wzcTYGVx4d4Nibh5sLllhKvYkS96dMicczN7yH9CIEg/640?wx_fmt=png&from=appmsg#imgIndex=8)

图 9｜WorkBuddy 官方 Agent Browser 文档中的结果界面。它不是 BrowserSkill 的运行截图，也不代表 BrowserSkill 的实测结果。

07第五步：再尝试已经登录的网站
----------------

BrowserSkill 可以在当前浏览器配置文件中使用已有登录状态。建议先手动登录目标网站，再让 AI 执行一个只读查询任务。

可以套用下面的模板：

```
请使用 browser-skill 打开我已经登录的【网站或后台名称】。任务目标：【要查找的具体内容】。只允许读取、搜索、翻页和截图，不得修改、删除、发送或提交任何内容。如果必须使用我当前已经打开的标签页，请先向我申请借用。遇到登录、验证码、短信验证码或确认按钮时，立刻暂停并让我接管。输出格式：【表格 / 要点 / Markdown】。完成后归还借用的标签页并关闭 session。
```

BrowserSkill 默认在独立的 Agent Window 中操作。用户原来打开的标签页受到保护；要操作已有标签页，Agent 必须先显式借用，并在任务完成后归还。第一次测试登录态时，仍建议从低权限账号和只读任务开始。

08三套可以直接复制的实用提示词
----------------

### 模板一：采集一篇长文章

```
请使用 browser-skill 打开【文章链接】。完整阅读正文，必要时滚动和展开折叠内容。提取标题、作者、发布日期、核心观点、关键数据和原始链接。把事实与作者观点分开，无法确认的内容标注“待核实”。只读取和截图，不登录，不发表评论。完成后关闭 session。
```

### 模板二：对比多个公开页面

```
请使用 browser-skill 依次打开下面 3 个公开页面：【链接 1】【链接 2】【链接 3】按“页面标题、发布日期、核心结论、数据口径、原始链接”整理成表格。发现页面相互矛盾时分别列出，不要自行编造统一答案。只读取页面，不下载可执行文件，不登录账号。完成后关闭 session。
```

### 模板三：填写草稿，停在提交前

```
请使用 browser-skill 打开我已经登录的【后台名称】。把下面内容填写到新建草稿中：【正文内容】。允许新建和编辑草稿，但禁止点击发布、提交、发送或确认按钮。填写完成后截图并暂停，等待我人工检查。遇到登录、验证码、权限申请或任何付费步骤时立刻停止。
```

提示词至少写清五件事：目标页面、允许动作、禁止动作、输出格式、停止条件。任务边界越具体，越容易检查结果。

09安装失败时，按这个顺序排查
---------------

### 1\. 提示 `bsk: command not found`

先新开一个 WorkBuddy 会话，再执行 `bsk --version`。如果仍然失败，让 WorkBuddy 检查安装输出和 PATH。

也可以按官方命令手动安装。运行前先确认链接域名是 `raw.githubusercontent.com`，仓库路径是 `Tencent/BrowserSkill`。

macOS 或 Linux：

```
curl -fsSL https://raw.githubusercontent.com/Tencent/BrowserSkill/main/install.sh | shbsk install-skill --yesbsk doctor
```

Windows PowerShell：

```
irm https://raw.githubusercontent.com/Tencent/BrowserSkill/main/install.ps1 | iexbsk install-skill --yesbsk doctor
```

### 2. `extension connected` 仍然失败

确认扩展已经安装且处于启用状态，打开扩展弹窗等待绿色连接状态，再运行 `bsk doctor`。公司网络或浏览器策略禁止扩展时，需要联系管理员处理。

### 3\. WorkBuddy 没有触发 BrowserSkill

执行 `bsk install-skill`，确认安装目标包含 WorkBuddy，然后新建 Agent 会话。在提示词第一句明确写“请使用 browser-skill”。

### 4\. 打开了错误的浏览器

让 Agent 执行 `bsk browsers` 查看已经连接的浏览器，再指定正确的浏览器启动任务。

### 5\. 页面要求登录、验证码或短信验证

让 Agent 暂停并请求人工接管。不要连续重试验证码，也不要把密码、验证码或 Cookie 粘贴给 AI。人工完成后，再让 Agent 重新观察页面并继续。

### 6\. 页面点击两次仍没有进展

停止继续点击，让 Agent 重新读取页面状态并说明阻塞点。BrowserSkill 官方 Skill 也要求，连续失败且没有进展时，应请求人工帮助，不能盲目重试。

10正式使用前，再做一次安全检查
----------------

BrowserSkill 扩展本身只通过本机 `127.0.0.1` 与本地服务通信，不会自行调用远程大模型。不过，上层的 WorkBuddy 或模型服务可能接收网页正文、截图和表单内容。两者的数据边界要分开看。

正式使用前，建议逐项确认：

1.  尽量使用单独的浏览器配置文件，只保留任务需要的登录状态。
    
2.  先做公开页面和只读任务，再逐步增加权限。
    
3.  发布、删除、购买、转账、发送和权限修改必须保留人工确认。
    
4.  不要让 AI 提取 Cookie、Token、密码或其他认证信息。
    
5.  只从官方仓库安装 BrowserSkill，第三方 Skill 先审查来源和权限。
    
6.  每个任务都写清停止条件，完成后关闭 session，借用的标签页要归还。
    

最后用一分钟验收：扩展显示绿色，`bsk doctor` 全部为 `ok` 或 `na`，公开网页任务能返回正确结果，任务结束后 Agent Window 正常关闭。四项都满足，再把 BrowserSkill 用到更复杂的工作里。

* * *