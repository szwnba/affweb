电脑上同时装了 Claude Code 和 Codex，哪个额度用完就换哪个来用。

有时候也会忙起来，打开四五个终端窗口，每个窗口都安排一个 Agent 在干活。

谁跑到了哪一步，谁卡在权限上确认，谁已经完成了任务，只能挨个窗口查看，颇为麻烦。

当然现在的 Agent 工具，基本各自都有手机远程功能，人不在电脑前也能查看进度、下达指令。

但各家的手机远程只管自家 Agent，同时用着几家，就得在几个 App 之间来回切换。

有些纯命令行的 Agent 连手机端都没有，想看一眼进度，还是得回到电脑前才行。

直到最近，我在 GitHub 上发现了一个能把这些 Agent 全部收到一起管理的开源项目：**Paseo**。

![](https://mmbiz.qpic.cn/mmbiz_png/snxIHWuwQomia00pAbodPQ0q5OaeicGqIlevTruDY0XWM3ZqpMKic4yj5fuw8I5o6KvMnxBCqceCJtWKYn1BicBhmN12kdzEALRicGNYswsAEWHA/640?wx_fmt=png&from=appmsg#imgIndex=0)

目前已斩获 18700+ Star，支持 Claude Code、Codex、OpenCode 和 Pi 等 Agent 工具。

它主要是给它们做了一层统一的管理界面，所有 Agent 仍是跑在我们的电脑本地上。

比如像账号、配置、开发环境，甚至各自装好的 Skill、MCP 插件，都是属于 Agent 的。

打开 Paseo，在界面的左侧列表栏，可以直观看到所有正在执行任务 Agent 的状态。

哪个 Agent 在干活、哪个没有执行任务、哪个需要确认，一眼就看清楚。

如果想下达任务指令，先选择项目然后在中间底部对话框里，选择 Agent 和模型，直接发送消息即可。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/snxIHWuwQomd5ZdRyRN2ENdRT0SNkepGq6WibMYq9FCRJibq9FRfSBTqib0aRQG5ocBzQrjatj0NYUSjuGGsyBQA8Zp77bum4XD4uzRv8cSkkw/640?wx_fmt=png&from=appmsg#imgIndex=1)

当需要新建任务时，还可以自由选择交给哪一家的 Agent，甚至能指定用哪一个模型。

更有意思的是，装上 Paseo 提供的 Skill 之后，还能让这几家 Agent 互相协作执行任务。

比如输入 `/paseo-handoff` 指令，可以把任务从一个 Agent 交接给另一个。

比如我们可以先让 Claude 做需求规划，然后再交接给 Codex 去开发实现功能。

而 `/paseo-advisor` 指令，则是拉一个 Agent 过来当顾问，只给意见，不接手干活。

还有一个 `/paseo-committee` 指令，能让两个风格不同的 Agent 组成一个小组，一起分析问题根因并给出方案，也方便对比。

这种跨着 Agent 的协作，也只有把它们放到同一个地方管理之后，才配合得如此丝滑。

![](https://mmbiz.qpic.cn/mmbiz_png/snxIHWuwQomo5khKqSsCIuH7xkXHKOMzfvzoWW6PrrSOibPuImUnrZzicnM0wJDtxf4YOU2WQ6j679ffZkicy8mMWan9UKkK8byk1Wqkn2tlgE/640?wx_fmt=png&from=appmsg#imgIndex=2)

另外 Paseo 还提供 iOS 和 Android 手机客户端，在桌面端的设置里配对一下设备就能连上。

连上之后，就可以手机上看到的就是电脑上那一份 Agent 列表，不管是哪家的都在里面。

出门吃个饭的工夫，任务跑到哪了、要不要再补一句指令，拿出手机就能处理。

在手机上打字写需求多少有点麻烦，所以它还支持语音，直接口述任务也行。

而且语音识别可以放在本机上运行，不用担心录音被传到别处去。

除了手机，还有桌面端、Web 端和命令行可以用，连的都是电脑上同一个本地服务。

![](https://mmbiz.qpic.cn/mmbiz_png/snxIHWuwQolia2qbicUrCE163J5YXpHbicRavLx1eVHljp8ibvvKQ58knB89sPMVahgrtJfrTBHhfehpXrBZKBqqoL0qTAAU7RLM0khMdNUb86U/640?wx_fmt=png&from=appmsg#imgIndex=3)

几个 Agent 同时改一个项目，最怕的就是互相覆盖文件，这点 Paseo 也考虑到了。

它可以给每个 Agent 单独建一个 git worktree，各自在独立的目录和分支里干活，互相碰不到。

等 Agent 改完之后，直接在界面里对照着基线分支看改动，确认没问题再合并，或者顺手开一个 PR。

![](https://mmbiz.qpic.cn/mmbiz_png/snxIHWuwQokP4MMPYSyMt00cGZysickpFBnLHnFT2HTbMMsBCaiaHKSXpy4icYfZYu2WplsUzHtD7swXDJqlfhelCWibiaGkdWR3IxcoZYpesLWw/640?wx_fmt=png&from=appmsg#imgIndex=4)

隐私方面，项目没有遥测、没有追踪，也不强制我们登录账号。

手机配对走的是端到端加密的中继，不想用中继的话，也可以通过 Tailscale 这类工具直连。

另外 App 里能做的事，在终端里用命令行也都能做，还提供了 TypeScript SDK 方便接进自己的工具里。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/snxIHWuwQol5hmghq9JY58t6PUibJpA5Dg2iaJmBXEvv0RFH4b927SJoiaP9rCSyZh2TqHiaU7guRicZnMcnDWPbdYtOw9ONxIFFLklVfHIw9qLY/640?wx_fmt=png&from=appmsg#imgIndex=5)

上手也比较简单，前提是电脑上至少装好了一个 Agent CLI，并且已经配好自己的账号。

因为 Paseo 本身不提供模型服务，用的都是我们自己原有的订阅，项目开源免费。

到官网或者 GitHub 的发布页面下载桌面端，打开之后本地服务会自动启动，不用再装别的东西。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/snxIHWuwQolGb6iczFKxxmfUxjyaEwia7lCKicdOucDglEEVqURMX7ibM1icnD08jGNl7UW42YgtU55fBz0E9Nc5MYVMIrlUTdbtAU2icyk6uKHc0/640?wx_fmt=png&from=appmsg#imgIndex=6)

要是想放到服务器或者远程机器上跑，也可以用命令行的方式来安装，两条命令即可：

```css
npm install -g @getpaseo/cli
paseo
```

启动时会询问要不要开启加密中继，主要是用来给手机配对，按引导操作即可。

另外官方也提供了 Docker 镜像，大家可以自由选择哪种方式使用。

![](https://mmbiz.qpic.cn/mmbiz_png/snxIHWuwQoltjDMZiaGH7wFLeiaHM9U4HyIWTsanuJKoBFEReoicw4icM7q6Tug0C32aHnzd73J5Zt6hdNJC1TQrab0ibb110KwuDgEnNo0ibTydk/640?wx_fmt=png&from=appmsg#imgIndex=7)

### 写在最后

今年新的 Agent 工具一个接一个地出，很多人电脑上都不止装了一个。

但真正天天在用的人会发现，麻烦往往不在哪个 Agent 更聪明，而在同时开着好几个管不过来。

Paseo 选的这条路挺聪明，它不去造一个新的 Agent，只做管理这一层，还能通过插件接入新的 Agent。

在我看来，往后 Agent 只会越来越多，各家都想把人留在自己的 App 里，统一入口这件事只能由第三方来做。

所以同时在用两三家命令行 Agent、又经常并行跑好几个任务的朋友，很适合装上 Paseo 试一试。

往后再多装一个新的 Agent，只要 Paseo 支持，就不用多开一个窗口、多装一个 App 了。

GitHub 项目地址：https://github.com/getpaseo/paseo

今天的分享到此结束，感谢大家抽空阅读，我们下期再见，Respect！