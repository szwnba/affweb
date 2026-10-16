前几天跟大家介绍了逆向工具 REA，那会它才 8 万多 Star，现在已经涨到 27 万了。

今天在 Hacker News 上看到一条爆火的帖子，标题「用 Rust 把 Adobe 全家桶重做一遍」。

作者名叫 Brandon Thomas，他想给 Adobe 全家桶都做一套平替，并且全部免费开源。

至于为什么要这么干，他在 HN 上说得很直白，就是被 Adobe 的退订违约金坑了太多次。

![](https://mmbiz.qpic.cn/mmbiz_png/snxIHWuwQomslK5STe9kjB0yFPuggU4OxCU4wcVtFCE8ibWP3TMw6DibSBrI56FrnjtuEPwy9OticEZgicMWo66lTHwF6hr3MEbLV2PBzDYLdEY/640?wx_fmt=png&from=appmsg#imgIndex=0)

于是他用 Claude Opus 5.5，拿 Rust 语言从零开始，一口气做了七款对标 Adobe 的工具。

他给自己定了个规矩，不碰 Adobe 的一行代码，只照着公开的文件格式说明和软件用起来的样子，自己从头写一遍。

打个比方，就像没看过别人的菜谱，只尝过味道，就自己琢磨着做出一道差不多的菜。

这七款工具里最火的，就是对标 Photoshop 的 **PhotoCraft**，仅开源半个月，就拿下了 6.3 万 Star。

![](https://mmbiz.qpic.cn/mmbiz_png/snxIHWuwQokgwib2IeiasQU3yicGsUOcHKr2UtoQgkictegl4rV2se8rrZt8Hssf83x7xhjX3iamliaFFFkZ1TyGIhaGTyiciaVmBKJK12BXFB4dFWw/640?wx_fmt=png&from=appmsg#imgIndex=1)

作者当时还在 HN 上放了一句狠话，大意是「**软件这行算是到头了，我一次就把整个 Photoshop 做出来了**」。

口气确实不小，那它到底做到了什么程度？我看了下 README 里对它的功能介绍，东西还真不少。

先说界面，菜单、快捷键、面板的位置都照着 Photoshop 的习惯来摆，用惯 PS 的人打开，手往哪放基本不用重新学。

它也不是网页套了个壳，画布直接交给显卡来渲染，滤镜用上了多核并行，一张 360 万像素的图片做半径 180 的高斯模糊，不到一秒就能出结果。

![](https://mmbiz.qpic.cn/mmbiz_png/snxIHWuwQomaI2yE7FEYH8sm3C5Q5aM6wpx5gVHdXgnm7JHrt89gIgk2RbgML8rEWVTDUibibmiaXwIXbMmbxsEbGA0QpmmiaGSz93rRbxbOIFo/640?wx_fmt=png&from=appmsg#imgIndex=2)

最关键的是能打开真正的 PSD 文件，带图层的工程可以打开、修改，再存回去。

作者拿公开的 309 个 PSD 测试文件做了验证，重新保存之后，有 307 个的显示效果和原来一样。

除了 PSD，Krita、Affinity 的工程文件，还有 iPhone 拍的 HEIC 照片，也都能直接打开。

修图这块，我比较在意它的调整图层，曲线、色阶这些都是叠在图层上面调，就算调坏了，把那一层关掉就行，原图不会受影响。

![](https://mmbiz.qpic.cn/mmbiz_png/snxIHWuwQonyibniaHvVR8kml8HRRKWlcVmtbSBygjIeLBzNRicUJeERNP9GMib5GKn779ibXKyDdypP7seFIib7NSBDEkmCG8WB0DH3yqw3p6VJc/640?wx_fmt=png&from=appmsg#imgIndex=3)

抠图也不用一点点去描边，点一下选择主体，就能把画面里的主体选出来，头发丝这种细边缘还能再精修。

而且这些智能选区都是在本地计算的，不需要联网，也不用登录注册。

![](https://mmbiz.qpic.cn/mmbiz_png/snxIHWuwQon6qgjXBqNiaBPXKEesCc6ib8ALP69jOSNF08UgVmia2r7WcRTlEDvXMiaFgjkNF9Yx9GSEibV702WcNg3iabAYp94DmPHCfYGStoLiaY/640?wx_fmt=png&from=appmsg#imgIndex=4)

此外，它还给 AI 留了个口子。软件里每个菜单、工具和对话框，背后其实都对应着一条命令，加起来有 500 多条。

Claude Code 这类 Agent 可以通过 MCP 接进来调用这些命令，跟我们在界面上点来点去，走的是同一套。

举个例子，手上有一整个文件夹的旅行照片想统一调色，把调色步骤写进一个配置文件，跑一条命令就能批量处理完：

```css
photocraft-cli batch --actions grade.json --in ./raw --out ./graded
```

上手的话，安装包在官网和 GitHub Releases 都能下，macOS、Windows、Linux 都有，作者连 FreeBSD 都照顾到了。

不想装软件的，还有一个能在浏览器里跑的网页版，也可以用 Docker 自己部署一份。

开发者想从源码跑起来，装好 Rust 环境后，执行下面几行命令就可以：

```bash
git clone https://github.com/storytold/photocraft
cd photocraft
cargo run --release -p photocraft
```

想让 Agent 来操控的话，装好命令行工具后运行 photocraft-cli mcp，再接进 Claude Code 就能用了。

![](https://mmbiz.qpic.cn/mmbiz_png/snxIHWuwQomfuy128BfUW9ApFXrjIaAjlxAFLDanADYhibg6ygy4FSBdkXbzBnQLBUiaL2scibdlEQupIQ1P2FUQichV2OiaeKfMjicIVVzOLBY70/640?wx_fmt=png&from=appmsg#imgIndex=5)

PhotoCraft 只是其中一款，作者这次一共做了七款，分别对标 Photoshop、Illustrator、Premiere、Lightroom、Acrobat、After Effects 和 InDesign，Adobe 全家桶的主力基本都照顾到了。

名字也起得很好认，PhotoCraft、VectorCraft、FilmCraft、LightCraft、PdfCraft、EffectCraft、DesignCraft，看一眼大概就知道对应的是谁。

而且他还没打算停手，不久前，又一口气新开了 Word、Excel、PPT、AutoCAD 和 Pro Tools 五个仓库，再加上后来的 Figma，官网上现在已经列到了 13 款。

![](https://mmbiz.qpic.cn/mmbiz_png/snxIHWuwQomLaI8WyHhib9K1iaNYOSAJ9PltcKW8BicAXOrXQicPfheNKpShzRTwNl0tyAzp6GcHrXpUoPoM4qcb0yX7Q81c1Zqh7zVF3Q9gMXI/640?wx_fmt=png&from=appmsg#imgIndex=6)

不过作者那句「一次做出整个 Photoshop」，在 HN 上被不少网友追着问，后来他也改了口，说要把 Photoshop 99% 的功能都做出来，还得花上几个月，不过用不了几年。

PhotoCraft 的 README 倒是写得挺老实，项目目前还处在很早期的测试阶段，暂时还替代不了专业人士的日常工作。

离 Photoshop 差得最多的是 AI 生成这类功能，另外还有 15 个工具没做出来，文字排版这些专业活也不够细，插件兼容同样是个短板。

其他几款就更早了，13 款里只有 PhotoCraft、PdfCraft 和 FigCraft 发了早期测试版，剩下的都还标着开发中。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/snxIHWuwQonjdItn4JrUrnXGC3VSmTf9bjgC741rU9oHBDOrE1Mm0jh3jkNsFdxQdCQ2qvhmykGpKnIEHQkU1YEIeZKG0kVK4DfDIicDMpns/640?wx_fmt=png&from=appmsg#imgIndex=7)

### 写在最后

我翻了下 PhotoCraft 的发布记录，从 10 月 8 日到 14 日，一周里连着发了 5 个版本，光 10 月 15 日一天就有 70 多次提交。

平时做做日常修图，或者偶尔要打开别人发来的 PSD，又不想为此每个月掏订阅费的朋友，可以先装上试试，碰到问题也能直接去提 Issue。

GitHub 项目地址：https://github.com/storytold/photocraft

今天的分享到此结束，感谢大家抽空阅读，我们下期再见，Respect！