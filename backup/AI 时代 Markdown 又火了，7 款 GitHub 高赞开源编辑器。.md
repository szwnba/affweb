用 AI 越多，和 Markdown 打交道的次数也越多。

很多 Agent 也会通过 AGENTS.md、CLAUDE.md 这类文件读取项目规则。

原因很实际。 Markdown 是纯文本，体积小，方便搜索和版本管理。人能读懂，AI 也容易解析。

内容可以继续渲染成网页、PDF、公众号文章和 PPT，相对比较灵活。

![](https://mmbiz.qpic.cn/mmbiz_png/M2ibDBMdECU3Hibg3WL3WoH4Q0EqjOFrhmPa3TC3duUeFL6u6PaShFlPqq8IzwkLT3X5oo2Rtr3B1Y9KmUtEydIJEGTLrqIc51gJHgk7tc1DI/640?wx_fmt=png&from=appmsg#imgIndex=0)

之前 Markdown 更像程序员和极客的小众工具。

进入 AI 时代，它正在成为人和 AI 交换长内容时最顺手的格式之一。

下面是 7 个 GitHub 开源的 Markdown 编辑器。

感兴趣的可以去试试，哪个最顺手。

**01

**ColaMD：专门为 Agent 准备的 Markdown 编辑器****

关注逛逛的，估计都习惯让 Claude Code、Codex 帮写文档了吧。

但是用起来会有一个小麻烦。

Agent 改文件，你在编辑器里看效果。文件一更新，又得重新加载一下子。

人和 AI 同时围着一篇文档工作时，这种来回切换很影响节奏。

ColaMD 会实时监听已经打开的 .md 文件。AI Agent 在外部完成修改后，内容会同步出现在编辑器里。

标题栏还有一个状态提示点，用来显示 Agent 正在写入或已经结束。

它本身采用所见即所得的编辑方式，不需要长期盯着左右分栏。

需要检查原始 Markdown 时，也能切换到源码模式。

![](https://mmbiz.qpic.cn/mmbiz_png/M2ibDBMdECU24DibnEJK8jGb46yko7iaVfWwvJu0P16fqBF5HCyeC1pvqerllE01RqHrjyHAoyJsrLXFrX1TZWzibqcesO82vodicGiao5xlaKbn4/640?wx_fmt=png&from=appmsg#imgIndex=1)

![](https://mmbiz.qpic.cn/mmbiz_png/M2ibDBMdECU0icqbSutoQemNEHps7aWQnmmOs62IwPuEIp3H5NCqwKHXcWtQeZN3WziaohzbhQVtdP7GGooTC1bXppADMbibBWW7TEFaKfjduH0/640?wx_fmt=png&from=appmsg#imgIndex=3)
文件面板会读取当前文件夹及其子目录，Agent 新建或删除文件后，列表会跟着刷新。

ColaMD 还支持任务列表、LaTeX、搜索、自定义 CSS 主题、PDF 和 HTML 导出。

![](https://mmbiz.qpic.cn/mmbiz_png/M2ibDBMdECU2Pnghug07GaHlicHtZJiazvAIMXdtLxNhoqp57L51NibOHPHNkYmpFhTxgiaKFYiaDDl5MvSUQ1csnHA5MgFhzicancFxia0xic9fs4gQ/640?wx_fmt=png&from=appmsg#imgIndex=5)

写完之后可以复制为富文本，粘贴到微信或邮件里继续排版。

目前提供 macOS、Windows 和 Linux 版本。

它没有内置 AI，也不做云同步和插件系统，主要任务就是把人和 Agent 共用的 Markdown 文件显示好、编辑好。

如果你的文档已经有一半交给 AI 来写，ColaMD 很值得体验。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/M2ibDBMdECU3IJ0VAYTWtWrvshib9ntm8wsIqaXbcsgLFBAujxWp84kmUeoHj61Tq2icravvfow9H27ECx2G62reKGwnTx3LbpFmsJ0QqicF6rg/640?wx_fmt=png&from=appmsg#imgIndex=6)

```javascript
开源地址：https:
```

**02

**接近 Typora 体验的免费开源选择****

很多人第一次喜欢上 Markdown，是因为所见即所得编辑器消除了源码和预览之间的割裂感。

输入 ##，当前行会变成标题。

插入图片、公式和表格时，页面会马上呈现排版效果。你仍然在写 Markdown，手感却更接近普通文档软件。

MarkText 就是类似的体验，已经在 GitHub 上拿到 5.9 万多个 Star。

![](https://mmbiz.qpic.cn/mmbiz_png/M2ibDBMdECU0KVoQKnKgyb5NKtbckulwMmznOvcFdfcSXlDbPREZ4O30prBfnEMluXfth3eJXIbfnbK9rJhmwmYKic7wDVvRichAic35vj8ljNI/640?wx_fmt=png&from=appmsg#imgIndex=7)

它的界面干净，支持 CommonMark、GitHub Flavored Markdown，以及部分 Pandoc Markdown。

数学公式用 KaTeX 渲染，Front Matter、Emoji、代码块和剪贴板粘贴图片也都照顾到了。

写作时可以切换源码模式、打字机模式和专注模式。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/M2ibDBMdECU0eQmMeVO6Hxl3DP2E2icia9Yvpfqq7mxXzQlrvicWnLovD0icIrwWRKuenicHjffWoIzw4CiaeKxmuxfzeX3bZXq0Yu3W6R4SSWPibwM/640?wx_fmt=png&from=appmsg#imgIndex=8)

完成后能导出 HTML 或 PDF。软件覆盖 macOS、Windows 和 Linux，MIT 许可证也足够宽松。

如果你喜欢 Typora 一类编辑器的写作方式，又希望工具免费、开源、跨平台，MarkText 是这份清单里最容易上手的一款。

```javascript
开源地址：https:
```

**03

**Joplin：把 Markdown 做成完整的私人知识库****

Joplin 已经是开源笔记领域的老牌项目，在 GitHub 上有 5.5 万多个 Star。

它支持 Windows、macOS、Linux、Android 和 iOS，桌面与手机都能用。

但是说实话，我不喜欢它的 UI。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/M2ibDBMdECU1aOPy3teI78TcoGJrOQeI3yiaXAKVQLiak0Ep7Js00NJoeAtfBHpjg8qt4AVOFV2mWuQia20hZDGLc6iaOwrfAZuze0hPx88Aicia8M/640?wx_fmt=png&from=appmsg#imgIndex=10)

笔记内容采用 Markdown，可以放进笔记本，添加标签和待办事项，再通过全文搜索快速找回。

它还提供网页剪藏扩展，浏览器里的文章和截图可以收进自己的资料库。

以前积累在 Evernote 里的内容，也能连同附件和部分元数据一起导入。

Joplin 很重视数据控制。

应用采用离线优先设计，没有网络时照常读取和编辑。

需要多端同步时，可以选择 Nextcloud、Dropbox、OneDrive 或 Joplin Cloud，并启用端到端加密。

插件和主题系统也给后续折腾留下了空间。

```bash
开源地址：https://github.com/laurent22/joplin
```

**04

**Zettlr：论文、研究和出版工作流更顺手****

Zettlr 目前在 GitHub 上有 1.3 万多个 Star。

它对研究者、学生、记者和长文写作者尤其友好。

![](https://mmbiz.qpic.cn/mmbiz_png/M2ibDBMdECU1iauREDJbRzC2vibibJ2Fhpvx0OksQ75UENpEqRNicHDxgN5hUxiaFSnxO6Y9SDU4MylflYqu7zJL3TISia91LuTqC7amJRQz8J0wz8/640?wx_fmt=png&from=appmsg#imgIndex=12)

软件能和 Zotero、JabRef 等文献管理工具配合，处理引用与参考文献。

导出部分建立在 Pandoc 之上，并支持 LaTeX、Word 模板和 Textbundle。

学校或出版社对交付格式有要求时，Markdown 初稿可以继续进入后面的出版流程。

它也支持 Zettelkasten 卡片笔记方法、全文搜索、代码高亮、片段模板、自定义 CSS 和多语言界面。

大量零散资料可以通过搜索和链接慢慢组织起来，最后再汇总成长文。

如果你的目标是论文、书稿、调研报告或带有大量引用的文章，Zettlr 的优势会比普通编辑器明显很多。

```javascript
开源地址：https:
```

**05

**原生 C++ 打造的重度笔记平台****

有些人喜欢轻巧的单文件编辑器，也有人需要目录、标签、搜索、任务和大纲都放在一个窗口里。

VNote 属于都放在一个窗口里的。

它基于 Qt 和 C++ 开发，在 GitHub 上有 1.2 万多个 Star，支持 Windows、macOS 和 Linux。

![](https://mmbiz.qpic.cn/mmbiz_jpg/M2ibDBMdECU3rfrmq4tGXjIcWPIgryZyFswlCfo3ynKiciaFHSEbSO3us2TZ70ziceCgZgTv1LicowDibO8pBTxfcLVctSO9HqgbSn967Y6qEfTyI/640?wx_fmt=other&from=appmsg#imgIndex=14)

项目强调笔记管理和编辑体验，适合维护体量较大的本地 Markdown 资料库。

写作过程中，它可以把富文本解析成 Markdown 再粘贴，图片也能按需保存到本地。

复制内容时可以转成富文本，发到其他编辑器里继续使用。

笔记本、文件夹和笔记的层级管理也比临时打开一个 .md 文件更完整。

VNote 对技术内容支持得很细。

Mermaid、Flowchart.js、WaveDrom、PlantUML、Graphviz、MathJax、任务列表、脚注和标记语法都在支持范围内。

写开发文档、架构说明和带公式的技术笔记时会比较省事儿。

```javascript
开源地址：https:
```

**06

**macOS 上很有气质的原生写作工具****

妙言是基于 Swift 6 开发的哦，专心服务 macOS。

它在 GitHub 上有 8500 多个 Star，界面采用三栏布局，支持深色模式和专注写作。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/M2ibDBMdECU3AMiaRQ5cLmWnzUEXZql0CxJwObMgOL3W5ASeJmxte5l6ysyrbVDtx2M6TNzhibs4OvUReafnYEVFe4rKkshIKaEvLjxm6HvGos/640?wx_fmt=png&from=appmsg#imgIndex=16)

应用坚持本地优先，不收集数据。

笔记就放在你指定的文件夹里，想跨设备使用，可以交给 iCloud Drive、坚果云、Dropbox 等云盘客户端同步。

![](https://mmbiz.qpic.cn/mmbiz_gif/M2ibDBMdECU2NhbcknTDF36ibFscNgnKZl0kT95ynicdx02nwh7JgXokvgVib4R8QNuNk8fq9CSfA9oIw968jicvYuYoAQtGCUkPwyeCvzYhicekY/640?wx_fmt=gif&from=appmsg#imgIndex=17)

妙言没有追求 Typora 式所见即所得，当前提供编辑区和预览区并排的分栏模式，并支持双向滚动同步。

Wikilink 双向链接、LaTeX、Mermaid、PPT 演示、版本历史和自动排版也都具备。

最近它还加入了命令行工具，可以在终端里新建、搜索、打开和读取笔记。

项目同时提供官方 Agent Skill，让 AI 了解妙言的语法、附件、演示文稿和 CLI 工作流。

这一点也很贴合今天的 AI 写作环境。

```javascript
开源地址：https:
```

**07

**Yank Note：能写文章，也能跑代码的 Markdown 工作台****

Yank Note 项目在 GitHub 上有 6700 多个 Star，编辑器使用 Monaco 内核，操作习惯和 VS Code 接近。

它支持版本回溯、文件加密、全文搜索、内置终端、代码运行、插件和宏替换。

文档里可以嵌入 PlantUML、Drawio、ECharts、Mermaid、Luckysheet 和 HTML 小工具，嵌套列表还能显示成脑图。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/M2ibDBMdECU3F1JXT9icCfj1QMwLsITJe9QwiciaUOJFn5k2QsxC4SWIuv6SjVoDxeJiaKnibF3YicicEZLyfmz3QYylUuh8s9dYAVBDdA4ibyj2w1sA/640?wx_fmt=png&from=appmsg#imgIndex=18)

![](https://mmbiz.qpic.cn/mmbiz_png/M2ibDBMdECU0E9hdkJKA9PNXD3WM9bEjV4v6VCjibWdA6Rt04SP6DSb2GxFKJwCYZmF1vSCNbgIegb8nO0UcdIO5Hg3FvfSpwCDTrV0uFy9lI/640?wx_fmt=png&from=appmsg#imgIndex=20)

![](https://mmbiz.qpic.cn/mmbiz_png/M2ibDBMdECU0hiaSaw46vNeM4cGGmUHr316Z7fxO1LIzuOlo6tSxO3fE3uDcNyOgQHf4UbJ8cTrO7CK9jicnJXKCxSpVkA9M4ViaT7ctX3OvVto/640?wx_fmt=png&from=appmsg#imgIndex=21)

![](https://mmbiz.qpic.cn/mmbiz_png/M2ibDBMdECU0TS2eeMwlLFmLmdKf7icxqh6ibrHFqALhnd2ToO4Aopf2JoccPibmunu6oSD4v6e2NvKx6eQQgjYD8GBb0icibjWhiaJ3sKJgXic5kFE/640?wx_fmt=png&from=appmsg#imgIndex=22)

```javascript
开源地址：https:
```

JavaScript、PHP、Node.js、Python 和 Bash 代码块可以在应用里运行。

做技术笔记、可执行教程或数据展示时，玩法很多。

Yank Note 也在积极接入 AI。

它的 AI Copilot 支持文本补全、内容生成和图片生成，可以连接 OpenAI、Ollama、Gemini、Kimi、通义千问等服务，还支持 OpenCode AI Agent。

功能强也意味着权限更大。

项目 README 明确提醒，Yank Note 支持命令执行和任意文件读写，打开来自陌生人的 Markdown 文件前要确认内容可信。加密文件的密码也必须妥善保存。

如果你想要一个高度可扩展的 Markdown 工作台，希望把编辑器、终端、图表、代码和 AI 放在一起，Yank Note 会很有吸引力。

08

**点击下方卡片，关注逛逛 GitHub**

这个公众号历史发布过很多有趣的开源项目，如果你懒得翻文章一个个找，你直接关注微信公众号：逛逛 GitHub ，后台对话聊天就行了：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/ePw3ZeGRrux2sRxwJzmfe1lK8ic33XvtVPsIPCMV7hjicmScibtxIZ1NsjXxNoVNMb3zLy32Al7PSpfbVAtrACYqQ/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp#imgIndex=11)