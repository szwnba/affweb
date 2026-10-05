一个 KOReader 插件 + 一个纯标准库 Python 桥，让 Kindle 常驻显示 WorkBuddy 的积分与任务进度。附完整开源地址与部署步骤。

* * *

家里的 Kindle 是不是吃灰很久了？

我把它改成了WorkBuddy 的墨水屏常驻看板：积分还剩多少、哪些任务在跑、哪笔积分快到期，抬眼一看就知道——不点亮手机、不打开电脑。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/frics6FgXO5es9qCyI15umeRuvgaTNgnEb5hbiasiaJ5icORCTib3Sbz4klWATYKnee1MH1y0sjnGicicTZ7boVfKYkDSI4k5vGhicR7KLjXIYS6BLc/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=0)

整条链路只有两个角色：

电脑端桥
----

（wb-bridge.py）：只用 Python 标准库的 HTTP 服务，监听 0.0.0.0:8765。它聚合 WorkBuddy 的积分与任务数据，用 Pillow 渲染成一张 8 位灰度 PNG（对墨水屏友好）。

Kindle 端插件
----------

（workbuddy\_monitor.koplugin）：装在 KOReader 里，每 3 分钟从桥拉一次图，常驻显示。渲染全部在 PC 端完成，Kindle 只负责取图和显示，几乎零负担。

常驻看板
----

不锁屏、常显最新状态，每 3 分钟自动刷新，时间戳同步更新。

双配色
---

黑底白字 / 白底黑字两套，均为墨水屏安全灰度。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/frics6FgXO5dneZrA0JicNTbTibkicKicwjgKXkg6jv77ukZ4I3hibzQAiaFE9AYicrTdLxFNWfxWqibViaF5YKiaibe7qfM45tgwQVt9I3eibhSfX1XE8tY/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=1)

三个可绑手势
------

开看板 / 设锁屏壁纸 / 退出，在 KOReader 手势里自由绑定。

锁屏封面
----

看板每次刷新都会把最新一张复制进 wb\_ss/ 文件夹，锁屏随之更新。

断网兜底
----

桥抓不到实时数据时回退静态 credits.json / tasks.json，屏上永不空白。

防休眠干扰
-----

常驻期间暂停 Kindle 自动待机，避免"点不动"。

电脑端
---

python wb-bridge.py，监听 8765。Windows 下配套的开机自启（Startup + 计划任务看门狗，每 5 分钟自愈）脚本也在仓库里。

Kindle 端
--------

USB 连接电脑，运行 python deploy\_to\_kindle.py，自动部署插件并逐字节校验。

配置
--

插件 config.txt 第一行填电脑的桥地址（如 http://192.168.1.20:8765），插件菜单内也可填写，重启 KOReader 即可。

开机自启的说明
-------

电脑端桥不是登录前的系统级服务：用的是交互登录令牌，即用户登录后桥才会起来（≤5 分钟），之后由看门狗兜底常驻、崩溃自愈。对个人电脑来说够用；若要"开机即启（含锁屏前）"，把计划任务改成 SYSTEM 账户 + 启动触发器即可。

开源地址
----

完整代码已开源：

https://github.com/RC-APC/workbuddy\_monitor.koplugin

含 README（安装/配置/手势/锁屏/常见问题），欢迎 Star 与 PR。

* * *

如果你也有一台吃灰的 Kindle，欢迎试着把它利用起来。

点击左下角阅读原文，有问题欢迎留言交流。