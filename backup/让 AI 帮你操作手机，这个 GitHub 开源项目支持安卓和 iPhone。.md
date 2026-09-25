Mobile MCP 是一个让 Agent 操作手机的开源项目。

现在在 GitHub 上有接近 7K 的 Star。

接好设备后，AI 可以读取屏幕上的内容，点击按钮，滑动页面，也可以往输入框里填写文字。

它支持安卓和 iOS，既能连接真机，也能在模拟器上运行。

你能把它接入 Claude Code、 Codex 这些支持 MCP 的工具，在对话里描述要完成的手机操作。

很多独立开发者，用它做页面检查。

修改完一个页面，继续让 AI 打开设备，检查按钮位置和页面跳转啥的，就不用人测了。

**01

**开源项目简介****

下面这个图，就是 Mobile MCP 整个架构了。
--------------------------

![](https://mmbiz.qpic.cn/mmbiz_png/M2ibDBMdECU2O9J2NY3rgZRZlYD1IJ8IQDqH2VoGjIx1LpAbxherxcsfsQxlnibFwQtLN0EA0tIe7ovaMxPDmZouwpN6A19ItDQAGbRwBiaToM/640?wx_fmt=png&from=appmsg#imgIndex=0)

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Mobile MCP 支持下面这些 MCP 的工具可以供 Agent 调用。

包括设备管理、应用管理、屏幕交互、输入导航。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/M2ibDBMdECU3nlxLHQBJNUWCH4HIXJXOssGPucucwKoclbE42icEwrN7dKMxdklZaNtHPE1BmHj9SApqtibAHUgTyztRo2LWiayLX57HPqic5Gys/640?wx_fmt=png&from=appmsg#imgIndex=2)

```perl
地址：https://github.com/mobile-next/mobile-mcp
```

这个开源项目有一个特点，是优先利用系统提供的无障碍信息。

无障碍信息就是 App 给页面元素附带的说明，主要用来帮助视障用户使用手机。

这些信息能告诉 AI 页面上有哪些文字、按钮和输入框，以及它们的位置。

对于能够完整暴露这些信息的界面，很多操作可以依据信息完成控制。

如果信息不完整或控件难以识别，可以获取截图，让具备图像理解能力的 AI 分析画面，再通过坐标操作。

两种方式结合，能应对不同 App 的界面结构。

另一点是跨平台。

安卓真机、安卓模拟器、iPhone 真机和 iOS 模拟器，都有对应的接入方式。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/M2ibDBMdECU1oia3CdDibhytSzadxXWZI9viaHsUUncPExyULDIgVPm2AIEbn8vuicja59GjXR3q0OfC6RqACp4EkicqMVZWoBldhocu1GxjkoPBw/640?wx_fmt=png&from=appmsg#imgIndex=3)

**02

**配置与部署****

下面以电脑连接本地设备为例。

先准备运行环境和手机，再把 Mobile MCP 配置一下。

第一步，准备 Node.js 和 MCP 客户端。

使用 Node.js 22 或更高版本，并准备一个已经能正常使用的 MCP 客户端。

比如 Claude Code、Cursor 啥的。

第二步，连接安卓设备，或启动 iOS 模拟器。

安卓需要安装 Android SDK Platform-Tools，设置 ANDROID\_HOME 指向 SDK 目录，并确保终端能够运行 adb。

使用真机时，开启开发者选项和 USB 调试，用支持数据传输的数据线连接电脑，再在手机上允许这台电脑调试。

运行：

```nginx
adb devices
```

列表里出现设备编号，状态为 device，说明 ADB 已连接。

如果显示 unauthorized，先检查手机上的授权提示。

如果列表为空，检查数据线、USB 连接方式和驱动。

使用安卓模拟器时，可以通过 Android Studio 创建设备并启动，再用同一条命令检查连接。

iOS 模拟器可以在 Mac 上通过完整的 Xcode 准备。

安装所需的 iOS 模拟器运行时，并在 Simulator 中启动一台设备，然后检查：

```nginx
xcrun simctl list devices booted
```

这里应能看到已启动的模拟器。

iPhone 真机也在支持范围内，但除了 USB 连接和设备授权，还需要完成对应的 iOS 自动化环境配置。

真机请结合当前官方文档与真机专项说明操作，旧教程中的组件和命令需按所用版本核对。

第三步，把 Mobile MCP 加到客户端。

如果使用 Claude Code，在准备开展任务的目录中执行：

```css
claude mcp add mobile-mcp -- npx -y @mobilenext/mobile-mcp@latest
```

这条命令会添加 MCP 服务配置，由客户端通过 npx 启动 Mobile MCP。

首次启动时需要联网获取相应软件包。

使用 Cursor 等支持 mcpServers 配置的客户端，可以在其 MCP 配置中合并以下内容：

```perl
{
  "mcpServers": {
    "mobile-mcp": {
      "command": "npx",
      "args": ["-y", "@mobilenext/mobile-mcp@latest"]
    }
  }
}
```

![](https://mmbiz.qpic.cn/sz_mmbiz_png/M2ibDBMdECU2NdNQX7xUeW7efEicr7H7M6WTFgeOAic2ZSyK2EibK5wZR1Or0zycM6HKTaBEhFZicxKrnKQLHBFuyc0k9bic4J1U7sIjx2icOM4RcU/640?wx_fmt=png&from=appmsg#imgIndex=4)

按所用客户端选择一种方式即可。

保存后重新加载 MCP 服务，在 Claude Code 中，可以通过 /mcp 查看连接状态。

第四步，验证连接，再运行一个小任务。

先给 AI 一条指令：

```
使用 mobile-mcp 列出本机已连接的移动设备。
```

确认它找到了目标设备后，再让它读取当前页面：

```
`在刚才列出的目标设备上，列出当前屏幕的文字和可交互元素，``然后截取当前屏幕。``设备列表、界面元素和截图都能正常返回，再尝试打开 App、输入内容等操作。`
```

![](https://mmbiz.qpic.cn/sz_mmbiz_png/M2ibDBMdECU3xCahXwjsaEcyic3Yic2raWMpPEqynYhp08FmiakZjiagiaMBG0kggyyiaDQDyiatt26mT6ck0ianHgJFCkb59Fkica1TIXwtnYfD5kFD4/640?wx_fmt=png&from=appmsg#imgIndex=5)

连接多台设备时，在指令中写明要使用的设备名称或编号。

如果服务已连接却找不到手机，先回到 adb devices 或模拟器状态检查。

03

**点击下方卡片，关注逛逛 GitHub**

这个公众号历史发布过很多有趣的开源项目，如果你懒得翻文章一个个找，你直接关注微信公众号：逛逛 GitHub ，后台对话聊天就行了：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/ePw3ZeGRrux2sRxwJzmfe1lK8ic33XvtVPsIPCMV7hjicmScibtxIZ1NsjXxNoVNMb3zLy32Al7PSpfbVAtrACYqQ/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp#imgIndex=11)