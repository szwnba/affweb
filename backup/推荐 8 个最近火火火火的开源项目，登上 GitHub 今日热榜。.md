**01

**把一群 AI Agent 管成一家公司****

Paperclip 今天在 GitHub 热榜上排到了第一，单日新增 2000 多个 Star，总 Star 已经超过 8.5 万。

它解决的是多个 Agent 同时工作之后的管理问题。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/M2ibDBMdECU0rib91mm8ud0vBNibWKvJ5O14B67QRsgsQBL2SAUvSibsyVlWIxkN0wkUotI6KYIibsfibXxruU06sfhop8pv7fkeARRnSDnibqcqtg/640?wx_fmt=png&from=appmsg#imgIndex=0)

你可以把 Claude Code、Codex、Cursor 或自己写的 Agent 接进来，给它们安排岗位、目标和任务，然后在同一个看板里查看进度与成本。

Paperclip 还有组织架构、审批、预算和审计记录。

某个 Agent 达到预算上限时可以停止运行，重要任务可以先进入审批环节，每次对话和工具调用也能留下记录。

团队同时开着十几个 Agent 时，这些功能挺有用的。

项目支持自己部署，它更适合已经在协调多个 Agent 的团队。

如果平时只用一个 Agent 处理零散任务，完整的组织图和治理流程反而会增加管理工作。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/M2ibDBMdECU09pUmkrVfvwmzYicU9Opt1tpgSh2sE2MDuSSzLiaZJlbiblKot45qYTzlsGy9wJfkdhdqsvTvlicicxjufhHHTcM6acaGSbSkYAt6I/640?wx_fmt=png&from=appmsg#imgIndex=1)

```javascript
开源地址：https:
```

**02

**让 Agent 从过去的交互中学习****

Hindsight  Star 接近 3 万，是这轮热榜里涨得很快的 Agent 基础项目。

普通的 Agent 记忆一般是保存聊天记录，需要时再搜索一段旧内容。

Hindsight 更强调长期学习。它会保存事实和经历，在需要时召回相关信息，还能根据已经积累的内容形成新的理解。

![](https://mmbiz.qpic.cn/mmbiz_png/M2ibDBMdECU3XDTP0oXyricDIlXrwD2sPLOyDCE8xicxQQNd6gu39F0UFeDYT5icjezaFfVDIwIqMaawF4v8XH2ynnaYnWIeBXicsaVFNyV07uhk/640?wx_fmt=png&from=appmsg#imgIndex=4)

项目把这套过程拆成了保存、召回和反思三个主要动作。

比如一个客服 Agent 可以记住用户过去提过的偏好，后续对话再查出来。

随着交互增加，它还可以整理出更稳定的用户画像，减少每次都从头解释。

```javascript
开源地址：https:
```

**03

**给 AI Agent 配一套 Office****

Univer 把表格、文档和 PPT 等办公能力做成一套可以嵌入产品的 SDK，总 Star 超过 1.8 万。

开发者可以用它在自己的 SaaS、内部系统或 AI 应用里加入可编辑的表格和文档。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/M2ibDBMdECU2Wo7hURunJQOMH82saYBUib0Zaiaen74utk0MKtKYjficcE3t7iaKXX6RO195mUAK6fcXWY9heoL3X0icEKjFubESmXhluRCK0NInI/640?wx_fmt=png&from=appmsg#imgIndex=5)

相同的架构也能在浏览器与 Node.js 服务端运行，Agent 可以在后台读取、修改和检查办公文件，用户再通过可视化界面审核结果。

它采用插件式设计，需要表格就装表格模块，需要文档再接入文档能力。

对于正在做报表生成、数据看板或办公自动化产品的团队，这比从零实现公式计算、画布渲染和编辑器省事得多。

![](https://mmbiz.qpic.cn/mmbiz_png/M2ibDBMdECU3AvRhaJDz9S9uyqJP0aaLCAFmOGhJ765Af84hzghRbxcO3KiaUZSqibiaIGnlYxwVhj9DfMp2vibFCx1c1wNdfav4dP8T0B0DLhhI/640?wx_fmt=png&from=appmsg#imgIndex=6)

开源核心目前以表格和文档能力为主，PPT 相关模块仍在开发，PDF 也还没有正式推出。

完整的关系表、实时协作和部分导入导出能力属于 Univer Pro 商业扩展。

```javascript
开源地址：https:
```

**04

**把多 Agent 工作台做成像素空间站****

StarNet 把多个 AI Agent 的真实运行状态放进了一个像素风空间站，支持 Windows 和 macOS。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/M2ibDBMdECU2jj8rv48rA3BGuZUibnUlVDuL8xniaAfq7uyowvpgD3olJkRNXb08L2zANOZrthpEkOzkKDlUNSMKtDRN2kL8VdOlx5EmrLLVRQ/640?wx_fmt=png&from=appmsg#imgIndex=7)

你可以创建不同角色的 Agent，把它们安排到不同房间，再看着它们执行任务。

画面里的房间、通道和设备都有实际含义，分别对应团队范围、任务交接权限和可使用的工具。

每个 Agent 也有独立的工作区、记忆、运行记录与权限。

![](https://mmbiz.qpic.cn/mmbiz_png/M2ibDBMdECU1cYmN5yDibIRx4pl1WMjppC3YZqYFARutLcgVYFrgCAnOT2nvrUdjJIM2OwbpGwfmp0y6SRNyy6Nl544GFhibSsGX8u6CKSf1xg/640?wx_fmt=png&from=appmsg#imgIndex=8)

这套设计让多 Agent 系统容易观察一些。

任务完成后，文件会进入 OUTBOX，费用、历史记录和计划任务也会保存在本地。

它既可以连接云端模型，也可以配合 Ollama 使用本地模型。

![](https://mmbiz.qpic.cn/mmbiz_png/M2ibDBMdECU2XoiaPsL9Xib2x8efrSpw1Q7fxLFmSRXOiauxOu5LLyEia3cI7rJkOmjRhgkGicicu2koCPox6gVOFyuH4KGH1hVibicOA3VqXzSqByHU/640?wx_fmt=png&from=appmsg#imgIndex=9)

```bash
开源地址：https://github.com/androoAGI/starnet
```

**05

**跨平台的 USB Wi-Fi 安全审计工具****

wifit3 是一个可以在 Linux、Windows 和 macOS 上运行的 USB Wi-Fi 安全审计工具。

很多无线安全工具高度依赖 Linux 驱动和一长串外部程序，换到 Windows 或 macOS 后会遇到兼容问题。

![](https://mmbiz.qpic.cn/mmbiz_png/M2ibDBMdECU3gYx0OS4IusvGbWLic9iaNpphRSzs7ic3vXibPiaibT0pSmQr6MhqSibiaAqOEQ7wExmpf1PHvY3wbL8oxfNibMeUVPO5MdRdozq0Prmlo/640?wx_fmt=png&from=appmsg#imgIndex=10)

wifit3 把轻量无线驱动放到了用户态，通过 USB 控制受支持的网卡，因此三个系统上的使用方式比较接近。

它可以扫描 2.4GHz 和 5GHz 网络，识别接入点与客户端，并处理握手捕获、PMKID、WPS 和 WEP 等审计任务。

![](https://mmbiz.qpic.cn/mmbiz_png/M2ibDBMdECU1gSRcVOIRsuibzGOGdANnf1XOzX9ZXoaFooaFujnTu1ib2M6Gn4KVMLaStdjuXlDEN7zbtktaDmicwkSHIWkAfPF3pw8wKAyJYtA/640?wx_fmt=png&from=appmsg#imgIndex=11)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/M2ibDBMdECU0PsbibJTtArJhkj9JmxzFmoRocBib5HDtZtiaM2T4VLHTLzRicTquhYwItoJYgWASKOWfneicUtJw2JxibOIHjT9OvEZC3hqVlEletY/640?wx_fmt=png&from=appmsg#imgIndex=12)

项目也提供预编译程序，不想配 Python 环境的用户可以从 Release 页面下载对应系统的版本。

使用前必须准备仓库支持列表中的 USB 无线网卡。

这个工具只能用于自己拥有或已经明确获得授权的网络。它会直接操作网卡硬件，测试之前也应该先了解网卡和系统驱动的恢复方式。

```bash
开源地址：https://github.com/derv82/wifit3
```

**06

**十年前的经典教程登上热榜****

Kubernetes The Hard Way 已经积累超过 5 万个 Star。

这套教程是带着学习者手动搭建一个 Kubernetes 集群。

![](https://mmbiz.qpic.cn/mmbiz_png/M2ibDBMdECU1ucvuP34ZvE4R07EwTD6f7l7sggRJmLibG6CpZOWRoGCkpAN2HMKxpd48nAwRfxvKeJZak3jICBiauFiaBgFicBZDPQ1ibxqPauQw8/640?wx_fmt=png&from=appmsg#imgIndex=13)

证书、配置文件、控制平面、工作节点和网络路由都要自己处理，整个过程没有一键安装脚本帮你隐藏细节。

教程当前使用 Kubernetes 1.32、containerd 2.1、CNI 1.6 和 etcd 3.6，需要准备 4 台处在同一网络中的 ARM64 或 AMD64 虚拟机或物理机。

最后会得到一个单控制平面、两个工作节点的基础集群。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/M2ibDBMdECU3XODIPpzD2AwIc3w76qVNkOP6V6JNPDNFQLb8iaquoHZibHYYzfiacAibcjGS283WWyoNk5HHxSKGemKGLJMP5Ao9goJFCaib2frZM/640?wx_fmt=png&from=appmsg#imgIndex=14)

它适合想弄清 Kubernetes 各个组件如何连接的开发者和运维人员。

这个集群用于学习，不能当成生产环境部署方案。

如果只是想尽快把服务跑起来，托管 Kubernetes 或自动化安装工具会更合适。

```javascript
开源地址：https:
```

**07

**集中保管 API Key、证书和数据库密码****

OpenBao 是一个面向服务器和应用的敏感信息管理系统，目前有 7.7K 多个 Star。

项目可以集中保存 API Key、证书和数据库密码等敏感数据，写入持久化存储前会先加密。

![](https://mmbiz.qpic.cn/mmbiz_png/M2ibDBMdECU0I7DjFKunVBK0By0sH5TswmzL0WgHp1I0DbFXjv5RqCP2Rib0ribkA6l294aicbI4niaLlEbSIfHBHZ2rpReaJQL6BfYT9CXQS9dQ/640?wx_fmt=png&from=appmsg#imgIndex=15)

应用需要访问数据库或云服务时，还可以临时生成一组短期凭证，租期结束后自动撤销，减少长期密钥泄露后的影响。

OpenBao 还提供租约续期、统一撤销、加解密服务和审计能力。

遇到账号泄露或人员离职时，管理员可以撤销某一组凭证，不必逐台服务器寻找散落在配置文件里的密码。

![](https://mmbiz.qpic.cn/mmbiz_png/M2ibDBMdECU21UfXuiapc7Ap0MYliatAzjkhe9iaEvicOOnUuGTpIZcfouxSKRBEhT13cYkxWbiazMr7XRicBDDuursiazcUx6lCeXJcwdtwwbRLrEU/640?wx_fmt=png&from=appmsg#imgIndex=16)

它源自 Vault 的社区分支，目前由 Linux Foundation 旗下 OpenSSF 管理。

OpenBao 更适合开发、运维和安全团队，需要配合权限、备份与高可用方案一起部署，普通用户保存个人密码通常用不到这么重的系统。

```javascript
开源地址：https:
```

**08

**Google 开源了面向 Agent 的运行时****

Google 的 AX 今天新增 1300 多个 Star，总 Star 已经超过 1.1 万，成为热榜里增长最快的项目之一。

AX 用声明式配置管理 Agent 任务。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/M2ibDBMdECU2rfianbGecGdjZfUKyRfj4GPpBX1xmQicQsCzLicsFKanIVbibY3rF16og3icia8QVqWfL9g1RRcacowrQ1oKMtfF7HDy1s78r87vjM/640?wx_fmt=png&from=appmsg#imgIndex=17)

开发者先写清楚 Agent 要处理的任务、需要使用的代码仓库和模型，AX 再准备隔离环境并启动运行。

它提供 Task、Workspace 和 Model 三类核心资源，操作方式和 Kubernetes 有些相似。

![](https://mmbiz.qpic.cn/mmbiz_png/M2ibDBMdECU1HdycSACYPI2mURGiaXnRLNQTfhzZLDylLyWXc8Qlwt9PcibKnZdmoqcicb10OWKkqkrBZiav5BaZ7yOJ30tEic4CFjOWDdC7oLS7o/640?wx_fmt=png&from=appmsg#imgIndex=18)

任务跑起来之后，可以查看状态、进入隔离环境检查文件，也可以暂停任务并在稍后恢复。

这些功能适合需要同时运行大量 Agent、又希望限制资源与权限的平台团队。

```javascript
开源地址：https:
```

09

**点击下方卡片，关注逛逛 GitHub**

这个公众号历史发布过很多有趣的开源项目，如果你懒得翻文章一个个找，你直接关注微信公众号：逛逛 GitHub ，后台对话聊天就行了：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/ePw3ZeGRrux2sRxwJzmfe1lK8ic33XvtVPsIPCMV7hjicmScibtxIZ1NsjXxNoVNMb3zLy32Al7PSpfbVAtrACYqQ/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp#imgIndex=11)