今天 OpenAI 对 dots 进行一波大更新，现在打开 iOS 或安卓版的 ChatGPT，就能直接在手机上创建自己的 dot。

而且 dot 还能给 Codex 派活，启动新任务、跟进之前的线程，人在外面掏出手机交代一句就行。

另一边，马斯克家的 Grok Bot 也有了自己的邮箱，可以拿去注册服务、收验证码，再也不用拿自己的邮箱去订阅乱七八糟的服务。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/snxIHWuwQol9XwvYKNd4ePDxyPRmHibd4neqBG5ueUS2cmznBicFWlUPnjiaSib4n9srle58ic5K7S3BbyanhbpjKPiabyMSZ7LGRUX0bnTALkWgY/640?wx_fmt=png&from=appmsg#imgIndex=0)

在个人 Agent 这条赛道，各家抢的其实是同一件事，让我们随时随地都能把活交出去。

不过仔细看会发现，dot 干活用的是自己的云电脑和浏览器，再加上 ChatGPT 里接好的 4000 多个应用。

至于我们手机上装的那些原生 App，还是得靠手指去一下下去点。

做移动端开发的朋友应该深有体会，用 Claude Code 或 Codex 写一个页面，代码几分钟就出来了。

可要确认按钮能不能点、页面跳转对不对，还得自己打开模拟器，一遍遍点着测。

最近我发现了一个开源项目：**Mobile MCP**，能让 Agent 直接上手操作 iPhone 和安卓手机。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/snxIHWuwQol9rRgicnZeLcWf52fZMnwzLd3lyWRxRUibvRLqN93Mldf571kTe2OKnFTJINryaFDx5v0pribwpbYX06tPaKHmEyTaibuhMaHJvFc/640?wx_fmt=png&from=appmsg#imgIndex=1)

目前已有 8800+ GitHub Star，最近十天连续发了 5 个版本，看得出作者在积极迭代更新项目。

它是一个 MCP 服务，可以接进 Claude Code、Codex、Cursor 等任何支持 MCP 的工具。

接入之后，Agent 就能在我们手机上点击、滑动、输入文字，还能自己安装、打开和关掉 App。

而且支持 iOS 和安卓模拟器，甚至用数据线连着的真机也都支持，用的都是同一套工具。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/snxIHWuwQoljiaUvhjnzBibO1yoBmwPDm77oehiaLaQ1bAT39ZDibXsk5HmPxS3YNHku6kR9NgpgzZwWLaoliaStUvmrfkxreYxt6YM6dxDwduGs/640?wx_fmt=png&from=appmsg#imgIndex=2)

mobile-mcp 看手机屏幕的方式也挺讲究，优先读的是系统的无障碍信息。

无障碍信息就是手机读屏功能背后用的那份界面清单，哪里有按钮、写着什么字、能不能点，都标得清清楚楚。

Agent 照着这份清单去操作，不用每一步都截图交给视觉模型去猜，速度更快，也省下不少图片 Token。

碰到清单里读不到的控件，它才退回截图的办法，看图找到坐标再点下去。

![](https://mmbiz.qpic.cn/mmbiz_png/snxIHWuwQokT26KibeIBJFiaHBPs5xibOr6dKttyjUfiaYbMsMvBx1acXT9iaicz4MzTXLib3B4qp21RwPneb5mF8uU51vnPetaCzicvWxxiaFEyIPYQ/640?wx_fmt=png&from=appmsg#imgIndex=3)

除了点点划划，它能干的活还挺多，比如录屏、改 GPS 定位、读写剪贴板、切换横竖屏都可以。

甚至连折叠屏的折叠和展开都能模拟。

对开发者来说最实用的是，它能读设备日志和崩溃报告，安卓读的是 logcat，iOS 读的是系统日志。

在测试 App 出现闪退时，可以接着让 Agent 去翻崩溃报告，查看哪里出了问题，方便回到代码里进行修复。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/snxIHWuwQokCOichczwHA4lFia9zu3AJKO48YnehRezQvHNLV6EmIeRptJGZzU2JRulTX7FoUnQf2vuWj0zwXJdviaJExgIVQUMqGtEzOUy3iak/640?wx_fmt=png&from=appmsg#imgIndex=4)

10 月初，它还上线了 Claude Code 插件，带了一个 `/mobile-mirror` 命令。

运行之后，终端侧边会出现手机屏幕的实时画面，Agent 怎么一步步操作的都看得到。

我们也能直接点击画面、打字，或者按 Home 键和返回键，不用离开终端。

不过这个功能需要终端支持 kitty 图形协议，目前用 Ghostty 或者 kitty 才能看到画面。

![](https://mmbiz.qpic.cn/mmbiz_png/snxIHWuwQolnIXTVKTf6c0Hz70hicvIO9nTSabjx6d7MZo6iaicAZb3yUqUkynwiaABSFGZPkAp7MhFO2xicljwGX4LM0PAUuuNbhPbAwftib9gQE/640?wx_fmt=png&from=appmsg#imgIndex=5)

上手不算复杂，电脑上先装好 Node.js 20 以上的版本，测 iOS 要有 Xcode 命令行工具，测安卓要装 Android Platform Tools。

用 Claude Code 的朋友，在里面输入下面两行命令装上插件就行：

```bash
/plugin marketplace add mobile-next/mobile-mcp
/plugin install mobile-mcp@mobile-mcp
```

用 Codex、Cursor 等其他工具的话，README 里都给了对应的配置方法。

不懂的话，直接把项目链接发给 Agent 工具让它帮忙安装即可，核心其实就是运行一行命令：

```css
npx -y @mobilenext/mobile-mcp@latest
```

装好后让 Agent 先列一下可用的设备，能看到正在运行的模拟器或者连着的手机，就说明接通了。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/snxIHWuwQok5QpBwvIPOkU3uNIPyyOY33fI48h0nAkWm24zZvRFC8c4Wtz0XmY2ctPnic6Hsic5SJKibfx1cY53lfTgppVP48oanlWXBnicIIKQ/640?wx_fmt=png&from=appmsg#imgIndex=6)

不过该工具也有缺陷，它主要是靠无障碍干活，App 这块信息给得不全，Agent 读到的界面就会缺少东西。

比如在安卓 14 及以下的系统上，Flutter 做的空白输入框是读不到的，只能退回截图的办法。

另外我看了下项目 issue 也有人反馈，在 iOS 26 的模拟器上读取界面有时会超时。

工具还存在不少问题，刚开始用的话，建议先在模拟器上把流程跑通，再换到装着自己账号的真机上。

### 写在最后

OpenAI dots、Grok Bot 和 Meta Muse 这些都是让 Agent 在云端电脑帮我们干活，手机只是一个交代任务的入口。

而 mobile-mcp 走的是另一个方向，把手机本身交给 Agent，让它去点操作真实手机上的 App。

这对移动端开发者来说更加有用，现在让 AI 写代码早就没问题了，但是功能做出来还是得手动测试验证。

等 Agent 能自己装 App、自己点、自己翻日志，写代码和测代码就能闭环了，我们只需要在最后看一眼结果。

手头正在做 App 的朋友，不妨装上试试，把下一轮功能测试交给 Agent 去做看看。

GitHub 项目地址：https://github.com/mobile-next/mobile-mcp

今天的分享到此结束，感谢大家抽空阅读，我们下期再见，Respect！