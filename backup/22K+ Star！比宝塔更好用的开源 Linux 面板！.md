公众号关注 “GitHubDaily”

设为 “星标”，每天带你逛 GitHub！

![](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28iaSZV42KyEQWTnQYC8blszvb1wjJdxVpyA4gVvdkicLjD3kzibWic25rB4GGb7OX7mquxC5FXVHprw2g/640?wx_fmt=png&wxfrom=13&tp=wxpic)

运维工程师和个人站长都有这种体会：与单纯依靠命令行的操作相比，使用具备图形用户界面的运维管理面板管理服务器要轻松容易很多。

可以说，可视化的运维管理面板大大降低了管理服务器的门槛，堪称非专业运维工作人员和运维小白的上手神器，而借助专门的管理面板也可以大幅提升专业运维工程师的工作效率。

今天给大家推荐一款比宝塔更好用的开源 Linux 运维管理面板——1Panel。

1Panel 是新一代的开源 Linux 运维管理面板，在界面上要比宝塔清爽简洁很多。截至目前，1Panel 项目在 GitHub 上已经获得了超过 22,000 个Star，用户群体庞大，开源社区中研发团队和用户的交流也非常活跃。

![](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28giaqmKkhlTOjoXiaVU8jRSuY9LyGbH9pCeDwZUMSLUACoAqBhJZlEiaOSVjqvmKicsGjsg49qiaa3tqxw/640?wx_fmt=png&from=appmsg)

与宝塔 Linux 面板相比，1Panel 更加现代化，操作界面无广告，十分清爽，用户使用体验更佳。

从 2023 年 3 月到现在，1Panel 经历了多次版本迭代，如今已经成长为一个功能强大、广受欢迎的开源项目。接下来，我来给大家介绍一下 1Panel 的一些亮点功能。

### 服务器资源使用情况快速监控

1Panel 的仪表盘可以实时展示服务器关键资源的使用情况，比如 CPU、内存、主机负载、磁盘和网络等情况，都可以直观地呈现在用户面前。

需要强调的是，针对运行 AI 和大模型应用的用户，1Panel 还提供了 GPU 监控功能，高性能计算环境中的资源消耗状况一目了然，可以有效提升用户的 AI 应用使用体验。

除了实时监控外，1Panel 还能够自动发送告警通知。1Panel 允许用户自定义告警规则，用户可以根据实际需求设定资源使用的阈值（比如 CPU 或内存的占用率）。一旦超过预设的阈值，系统会自动发送告警通知，提醒用户及时处理潜在问题，避免影响系统的正常运行。

1Panel 的监控能力和告警机制可以实现对服务器的全面监控。它不仅能够帮助用户实时了解服务器的运行状态，还能预防并快速应对突发情况，从而提升系统的运维效率和稳定性。

![](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28giaqmKkhlTOjoXiaVU8jRSuYict39CAbLYn2E9DcsXOVqru8Szwl38qqKNSPTjy0XhhDUZu6Ggh7u3g/640?wx_fmt=png&from=appmsg)

### 文件管理器简单易用

1Panel 支持通过直观的可视化界面快速实现文件管理。用户无需借助抽象的命令行，就能进行复制、移动、重命名和删除等常见的操作，从而实现文件的浏览、上传、下载和管理。1Panel 的文件管理功能有效简化了管理流程，提供了十分友好的用户体验。

摆脱命令行只是 1Panel 最基础的功能，在这之上，1Panel 还支持在线预览文档、图片、视频等资源，允许用户无需下载即可直接查看文件内容，实现文件的便捷管理。在追求便捷性的同时，1Panel 同样注重文件的安全性。1Panel 支持对文件进行批量操作，并且提供了灵活的权限管理机制，为用户处理文件提供可靠保障。

1Panel 还提供了收藏夹功能和回收站功能。借助收藏夹功能，用户可以快捷访问常用的重要文件；回收站功能则支持还原被删除的文件，降低了因误操作而导致损失的风险。

![](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28giaqmKkhlTOjoXiaVU8jRSuYHDmy9xy1IHvXoZoMzXvOiaIfUgkicZL0kdxOU6W8ficicgaFwjlhAYxwfg/640?wx_fmt=png&from=appmsg)

### 创建和管理网站轻松便捷

用户可以通过 1Panel 实现快速建站，并且轻松管理自己的网站。

1Panel 的应用商店中上架了包括 Halo 和 WordPress 在内的多种主流建站工具，用户可以在 1Panel 应用商店中为自己的服务器一键安装这些建站软件，借助它们快速搭建个人博客或者企业官网等站点。

1Panel 支持构建多种类型的网站，例如反向代理、PHP、Java、Node.js、Go 运行环境，以及静态网站，不管哪种类型都能实现轻松建站。

网站管理方面，1Panel 提供的容器化建站方案，能够确保各个网站有自己独立的运行环境，从而避免环境冲突，提升网站的稳定性。在管理网站时，域名设置、网站目录、HTTPS、伪静态、防盗链、重定向、密码保护和流量限制等设置都可以在1Panel中实现。

安全性方面，1Panel 支持多种证书类型，包括 Let’s Encrypt、ZeroSSL、Buypass 和 Google Cloud，能够有效确保网站的安全访问；1Panel 同时也支持阿里云、腾讯云、Cloudflare、GoDaddy 等多家 DNS 服务商，可以实现快速配置域名并解析。

![](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28giaqmKkhlTOjoXiaVU8jRSuYyicYiaU7MfGkSskHyZR6D6SHVhYKoibae2nomZOAqkfDpicJEW8HDaszgA/640?wx_fmt=png&from=appmsg)

### 主流开源软件随心部署

1Panel 内置的应用商店集成了丰富多样的开源软件，比如 OpenResty、MySQL、Redis、WordPress、Alist、MaxKB、青龙和 Ollama 等常用软件，用户无需进行命令行操作，就可以通过 1Panel 应用商店实现一键安装，开源软件的部署门槛大大降低。

应用管理方面，1Panel 提供了应用编辑、升级、日志查看、同步、重建、卸载等功能，方便用户维护和管理已安装的软件；1Panel 同时支持本地应用部署，用户可以上传自己的应用安装包，通过 1Panel 快速部署与管理，实现高度自定义的应用环境。

安全性方面，1Panel 的数据备份与恢复功能进一步保障了应用及数据的安全性。

![](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28giaqmKkhlTOjoXiaVU8jRSuYGFjnm8XsHFpGAHokO0ibslibOJogicSqHZOHuRYibicSa30FKrLNleoRKwQ/640?wx_fmt=png&from=appmsg)

### 各类计划任务一键管理

1Panel 支持执行多种类型的计划任务，包括 Shell 脚本、网站备份、应用备份、数据库备份、目录备份、日志备份、URL 访问、日志切割、缓存清理、系统快照和同步服务器时间等。

在创建任务时，用户可以灵活设置任务的执行时间和周期，无论是每日、每周、每月，还是自定义时间表，在 1Panel 中都可以一键完成配置。

任务管理方面，1Panel 支持查看任务运行日志，以及下载和删除备份文件等操作。在未来的版本中，1Panel 还将支持通过通知系统提醒任务执行的状态，帮助用户实时掌握任务进度。

通过 1Panel 执行计划任务，用户可以实现自动化的任务管理，降低运维成本，确保系统稳定运行。

![](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28giaqmKkhlTOjoXiaVU8jRSuYPMoXjBqU3fFXAoyyCnaEATDUgZsjv4mBmhgIXZgTlhdhQpAjMic4q6A/640?wx_fmt=png&from=appmsg)

### 安全防护手段全面多样

作为一款管理面板，1Panel 提供了强大的安全防护能力。1Panel 内置 WAF 防火墙，能够拦截恶意请求，并且抵御 SQL 注入和 XSS 攻击等常见的网络威胁。WAF 提供全局设置，支持自定义黑白名单、频率限制和规则配置，用户可以根据需求灵活调整防护策略。

除此以外，1Panel 还具备网站防篡改功能，支持查看拦截日志，设置排除目录和保护文件。同时，1Panel 也能够进行病毒扫描，支持定时或手动扫描，能够实现对服务器文件的全面检查。

1Panel 还集成了 Fail2Ban，能够自动封禁攻击源 IP。配合 UFW 或 Firewalld 防火墙，用户可以灵活设置端口访问规则，确保服务器得到多层次防护。

![](https://mmbiz.qpic.cn/mmbiz_png/uDRkMWLia28giaqmKkhlTOjoXiaVU8jRSuY9dN6RS3MepLYRGMVcpfBJI1dyicJoH72ic912TgbADestickUibD1fZ1eg/640?wx_fmt=png&from=appmsg)

除了上述亮点功能外，1Panel 还提供数据库管理、容器管理、进程守护和 FTP 等功能，大家可以自行下载安装并体验。

### 总结

总的来说，1Panel 是一款出色的开源Linux运维管理面板工具。首先是颜值上，操作界面无广告，简洁明了。不仅有利于新人快速上手，也为运维老手提供了更加清爽的操作环境；

其次，在功能性方面，1Panel 提供了充分的站点管理和安全管理能力。像应用商店、建站、证书申请、数据库管理、容器管理、防火墙配置和安全审计等这些大家高频使用的功能，1Panel 都已经具备，并且还在不断迭代。

1Panel 还是一个在 GitHub 上十分活跃的项目，用户提出的 Issue 都能得到快速的反馈，项目组成员与社区用户的交流也很频繁。

最后，放上 1Panel 相关的资源网站，供大家参考学习：

*   1Panel 官网：https://1panel.cn/
    

*   1Panel GitHub 仓库：https://github.com/1Panel-dev/1Panel