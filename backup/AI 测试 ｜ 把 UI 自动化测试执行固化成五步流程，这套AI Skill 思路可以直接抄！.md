真正做过 UI 自动化测试的同学都知道，脚本写完只是自动化测试的第一步，真正的痛苦往往是从「跑测试」开始。

我见过不少团队，脚本攒了几百上千条，最后倒在执行这一环。要么环境跑不起来，要么跑起来收不了场。

一、开头说两句
-------

这个系列一直在做一件事，用 Agent Skill 把 UI 自动化测试的各个环节逐个自动化。

前面几篇解决的是「脚本怎么来」。页面元素解析、测试脚本生成、脚本健壮性增强，一路走下来，脚本能稳定跑通了。

接下来就轮到「脚本怎么跑」。

按传统做法，这一步就是把 pytest 命令敲进终端，然后人守在旁边看结果。听着简单，实际是整个 UI 自动化里翻车率最高、也最消耗人的环节。

所以在这个位置，我专门做了一个 Skill，`ui-test-executor`，一个 WEB UI 测试的智能执行调度引擎。触发执行、浏览器环境管理、用例筛选、并发调度、过程监控、结果收集，这些活全部交给它。

本篇就聚焦这个 Skill，从它面对的问题讲起，到它怎么解决，再到实战跑一遍。

二、传统执行方式存在什么问题
--------------

把执行环节的账摊开算，问题往往集中在几个主要地方。

**1、环境问题防不胜防。** 

浏览器版本、驱动匹配、Playwright 装没装、无头模式支不支持，每一项都可能让任务卡住。一句「我本地明明能跑」，成了 CI 环境里最经典的开场白。排查半小时，最后发现只是某台机器没装 Edge。

**2、等待时机不固定，过不过全靠运气。** 

页面加载、接口返回、动画收尾，每一处都有时间差。很多脚本用写死的 sleep 等 3 秒，环境快了白白等 3 秒，环境慢了 3 秒后又把还没加载完的页面当成失败。同一个用例今天过、明天挂，时好时坏全看缘分。

**3、用例不独立，每次全量跑就出幺蛾子。** 

上一条用例注册了账号没清理，下一条用同一个手机号注册就挂了。单独跑能过，放进全量跑就挂，排查半天发现是别人的脏数据。共享的缓存、文件、数据库，都是雷区。

**4、失败现场是一次性的。** 

用例跑挂了，没截图、没录屏、没 Trace，明明三分钟前它就发生在眼前，你却拿不出任何证据。重跑一遍想复现，居然又过了。挂了不知道为什么挂，过了不知道为什么过。写失败分析，一半时间花在翻文件找线索上。

**5、跑哪些用例，全靠手拼命令。** 

想只跑登录模块的 P0 冒烟，得先翻文档查 `pytest -m` 表达式怎么写。标签拼错一个字母，全量几百条用例跑飞，一等等半小时。会写的人觉得没什么，不会写的人每次都要重新查一遍。

**6、并行、跨浏览器、重试，样样自己搭。** 

想多浏览器跑一轮兼容矩阵，想并行加速，想偶发失败自动重试，每一样都是一轮配置折腾。搭好了是这个项目的，下个项目再来一遍。

这几件事有个共同点。它们规则明确、重复劳动、人工极容易遗漏，而这些工作，恰恰是 AI 最擅长接手的那类活。

> 那能不能让 AI 把「执行调度」这一步彻底接管？

答案是，**可以**。而且经过我的项目实测，效果比预期想象中还要更好。

三、ui-test-executor Skill 它是怎么解决的
--------------------------------

`ui-test-executor` 是一个专门负责测试执行的 Agent Skill。它将已编写好的 `Playwright + Pytest` UI 测试脚本真正跑起来，形成「标签筛选 → 环境检测 → 执行调度 → artifact 采集 → 报告产出」的完整执行闭环。

**适用场景：** 

*   触发执行 UI 测试、按标签/模块/优先级筛选
    
*   跨浏览器矩阵执行、并行加速、失败重试
    
*   自动采集失败截图、录屏、Trace、Console 日志、Page Source
    
*   生成 JUnit XML / HTML / JSON 多格式报告，便于 CI 集成
    

它的整个设计遵循两条原则。

**只读，不写。**  它只读你的测试目录，只在执行层面做调度，一个字都不改你的测试脚本。脚本该怎么写还是脚本的事，执行归它管。这条边界划清楚，才敢放心把它放进 CI。

**执行前先亮牌，执行后留证据。**  开跑之前，先让你看清楚这次用什么跑、跑哪些；跑完之后，失败用例的现场证据一样不落。中间的过程，尽量不需要人盯。

落到执行流程上，它固化成一套五步流程。

**标签筛选 → 环境检测 → 执行调度 → 现场采集 → 报告产出**

![](https://mmbiz.qpic.cn/mmbiz_png/UzsCVuwOnvTbib2KWakcHm3sRqcwevg7FbJ1PUO4Gc9JEY8mHzwmgUgYEwMtRukS5erib4Sutm6xe8lAAuqa1gEE3UqLq7EvcW0Ca7C4vDndw/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=0)

对着前面这几个问题，一步一步看它是怎么拆的。

### 1\. 环境问题，先检测后执行

正式开跑前，它会先打印一份浏览器环境清单。本机装了哪些浏览器（Playwright 内置的加系统装的）、版本号、支不支持无头模式，逐项列出来。没装的也会列出来，后面直接附上安装命令。

扫一眼这张表，环境有没有坑、该选哪个浏览器，心里基本就有数了。

### 2\. 用例选择，说人话就行

不需要翻文档拼 `pytest -m` 表达式，直接说人话。

```
/ui-test-executor 只跑购物车模块的 P0 冒烟用例，Chrome 无头模式
```

AI 会把这句话翻译成 marker 表达式。

翻译完还不急着跑。它会先打印一份待执行用例清单，按「文件名、测试类、用例名」逐条列出本次命中的用例，连参数化展开都显示出来。比如同一条搜索用例展开成手机、小米、手表三个参数，一眼能看到。

配合 `--dry-run` 参数，只打印构建出的完整 pytest 命令，不实际执行。调度逻辑对不对，一眼可验，「参数拼错全量跑飞」这种事故从根上堵住了。

### 3\. 失败现场，六类证据自动采集

这是这个 Skill 最值钱的能力。用例一旦失败，现场自动保住。

![](https://mmbiz.qpic.cn/mmbiz_png/UzsCVuwOnvSncpwicx3drMCAtM63tYIc42PzWJib5G4dme6eJN2fxJRdQjjRd00xiaO6EDMgff4WwXwpltQtdqAY2ITnYiah5jjx4ujvLnwbLFI/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=1)

六类证据一次保全，**截图 / 录屏 / Trace / 日志 / 源码 / 网络** 覆盖失败现场全维度，追溯零盲区。

*   **截图。**  视口截图加全页截图，各来一张。
    
*   **录屏。**  失败用例的完整操作视频，从头看到尾。
    
*   **Trace。**  Playwright 运行轨迹，可以逐步回放每一步操作前后的页面状态。
    
*   **控制台日志。**  五段合并，页面错误、Console 报错、警告、网络请求摘要、性能指标，一份文件看全。
    
*   **页面源码。**  失败时刻的完整 HTML 快照。
    
*   **网络请求摘要。**  URL、状态码、资源类型，九成的接口追溯场景够用了。
    

而且有一条铁律。**只在失败时采集并保留完整执行过程证据链，通过的用例只保留执行结果信息。** 

以前是失败了什么都没有，现在是失败了什么都有。写失败分析从翻文件夹拼线索，变成打开一份归档好的证据包。

### 4\. 并行、矩阵、重试，说话就行

这一块最容易让人想到一堆参数，但在 ui-test-executor 这里，你只需要把要求说出来。

```
「全部用例并行跑，开 4 个进程，越快越好」「登录模块，用 Chrome、Firefox、WebKit 三个浏览器各跑一遍」「有偶发失败的用例，自动重试一次」
```

三句话，对应执行里的三件事，快、全、稳。

**要快。**  一句「并行跑」，几百条用例从串行一小时压到十几分钟。中午吃饭前说一声，回来报告已经躺好了。进程怎么开、任务怎么分发，AI 在底下自己安排，不用你操心。

**要全。**  一句「三个浏览器各跑一遍」，用例自动展开成矩阵，一条用例乘三个引擎，就是三条执行记录。有些兼容性问题，在 Chromium 上一片祥和，到 Firefox 上原形毕露，不跑一轮根本看不见。

**要稳。**  一句「偶发失败自动重试」，网络抖一下、CI 机器资源挤一下导致的失败，自动再跑，不用人守着重跑。但有一条要说清楚，确定性失败（定位器失效、DOM 结构变了）重试一百次也是挂，重试只兜偶发，不治本。

![](https://mmbiz.qpic.cn/mmbiz_png/UzsCVuwOnvT1A0XNj6FUCSchaPoW4icGeggChJIsAVhc3v47D8FDqSMCEteLK7ZZaGF97VugKRiay3rNrlNJD74yHK8xdvVsF7UBicRIm7P82c/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=2)

分发策略这种更深的细节，它也按项目情况自己选。POM 项目默认同一类的用例在同一个进程里跑，避免 fixture 重复初始化和状态污染，顺带压住了前面说的脏数据互相干扰。这些原本要自己踩坑才摸得出来的经验，全部做成了默认行为。

前面说的偶发失败，这里也接住了。时序抖出来的失败，重试先兜住这一轮，让结果不被偶发因素污染；真要排查，配合 Trace 回放看每一步操作的时间线，到底哪一步等少了，一眼定位。

至于 CI 环境里不方便对话的场景，它底层封装了完整的执行脚本，直接传参数调用就行，同一套能力的另一个入口。

### 5\. 报告五件套，一次跑完全产出

| 

产出

 | 

用途

 |
| --- | --- |
| `report.json` | 

结构化数据，CI/CD 和看板直接消费

 |
| `report.html` | 

可视化报告，浏览器直接打开

 |
| `report.xml` | 

JUnit 标准，Jenkins 和 GitLab CI 原生支持

 |
| `summary.md` | 

人读的 Markdown 摘要

 |
| `summary.txt` | 

单行摘要，CI 流水线直接抓作 build description

 |

只要有一条失败，还会自动追加一份 `failure_analysis.md` 深度分析报告。

每条失败用例还会展开七个小节，判定规则、断言原文、预期与实际、页面元素校验、失败截图路径、录屏与 Trace 复现命令、其他诊断材料。

跑完之后再补一句「打开最新失败那条的 Trace」，它自动定位 trace.zip 并启动 Trace Viewer，还支持中文用例名匹配。以前要去目录里一个个翻的事，现在一句话的事。

四、Skill 实战演练
------------

将技能安装好，在技能列表中选择 `ui-test-executor`，输入一句指令。

```
跑一下 shop-lab-ui-test 的 P0 冒烟用例。
```

![](https://mmbiz.qpic.cn/mmbiz_png/UzsCVuwOnvTbE2azDjItGibUCbyxTbyfHWcSYJHWBicyAdEA4BODpF3wb3llQKCg97SicbUNXFZJAxDOf5ND8NvYsq95qT3ibuNtF5uxY6krrvo/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=3)

接下来，Skill 自动完成四件事。

**第一，用例清单确认。**  主筛选集命中 8 条用例，逐条列出「文件名、测试类、用例名」，参数化展开也在内。确认无误，开跑。

![](https://mmbiz.qpic.cn/mmbiz_png/UzsCVuwOnvSEh2tRF2Ro1wGLSSxz2F7atBS9z1hwS3NAsNuhsTwiaEuC1bWXffvwOf2yZhIhWNfFXVYe8l1rxSxZYWbLFLkcXibnIDkC9CDUk/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=4)

**第二，环境自检。**  打印本机浏览器环境清单，检测到 4 个可用浏览器（Chromium、Chrome、Edge、Safari），附版本号和 Headless 支持情况。没装的 Firefox 后面跟了一条安装命令。本次执行选用 Chromium。

**第三，执行与现场采集。**  实时流式输出执行进度。失败的用例自动完成六类证据采集，全部归档到 `test-results/artifacts/` 下的标准目录。

> 技能开发调试期间，通常建议默认采用有头模式打开浏览器，方便观察操作，正式投产或者后续接入CICD时，可再改为无头模式运行。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/UzsCVuwOnvRhgw5OpviaAGkicP8Z9kBDAwpk69ge58udiaicbiaajTPPtTwMdxnkshnvbziaFiaIJ3IJibw3Wa88XyVbQ7nJhEic0TbUxee8LdqUUGM0/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=5)

等待所有P0冒烟用例执行完成。

![](https://mmbiz.qpic.cn/mmbiz_png/UzsCVuwOnvT5FQicmvfzDozZSicCG00EH5hG8jg2ujpcatbplYF3NXb6F4bFzSPkQxV9DAvAicosvYKa9JV8zSfZDoY3hpWLHZ304Biaxm5DEsU/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=6)

**第四，报告产出。**  执行结束，报告五件套加失败深度分析一次性生成，并给出下一步建议；有失败则直接给出 Trace 复现命令。

最终拿到的产出长这样。

![](https://mmbiz.qpic.cn/mmbiz_png/UzsCVuwOnvRkksxNtOOxCjVB8kibjCKEz2GXlL6gaPibQk97HrJdhCFPJkf8WAWhTbgMdLdlqzCuKwzh0qaW5OTIwIOMEJr3vxaGY51k9x8cI/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=7)

```
test-results/├── report.json               # 结构化报告├── report.html               # 可视化报告├── report.xml                # JUnit XML（CI 标准）├── summary.md                # Markdown 摘要├── summary.txt               # 单行 CI 摘要├── failure_analysis.md       # 失败深度分析（全过则不生成）└── artifacts/    ├── screenshots/          # 失败截图（视口 + 全页）    ├── page-source/          # 失败时 HTML 快照    ├── console-logs/         # 失败时五段合并日志    └── pytest-raw/           # 录屏 video.webm + trace.zip
```

当用例执行出现失败时，会在`test-results`目录下，自动生成一份failure\_analysis.md （失败用例故障分析报告）

![](https://mmbiz.qpic.cn/mmbiz_png/UzsCVuwOnvQws3QmtphPOXDYnLicFuuiaUSmAfIIEYhF9kOmM2uY7zQtpHrhqC6bE2hxJnXQvq7f1c9bL0gStM6nWhhXUQYfs8j6yBdeZPO3g/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=8)

在失败用例故障分析报告中，会以失败用例为单位，详细列出失败的判定规则、失败截图、失败录屏与Trace等信息。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/UzsCVuwOnvRCAFibabA3PSG7cCoVC6fb6poRsaheT2NOv9diaibia72a3cXNDbyy9IbATbWXLqKIj1XknhmGzxdMLraYu7C6S9tGsXvLNzRTW1Q/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=9)

进入到`test-results`\-> `pytest-raw`目录，查看是否有生成失败截图（png格式）、录屏（webm格式）、trace.zip等文件。

![](https://mmbiz.qpic.cn/mmbiz_png/UzsCVuwOnvTaWD4wyrCTZCqfBWZYken1CBrxYicfYytIcdEmia9p5wT5yKp8j5u1m3ymQxclTNXahpaukVic3yrxHjtmib8HvFJlmTZoyO1IYDc/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=10)

查看失败录屏文件：

![](https://mmbiz.qpic.cn/mmbiz_png/UzsCVuwOnvR7FYyNnNr3nYbVGwatN08F1ibGkWCUPH29f4zZ9EcVluf0KrQNYk4PIMKVM9dxibP9u1PjdRXKMFib7ncwgfLdjhLaDR6lC98iahs/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=11)

如果你想查看`trace.zip`文件详细内容，可以直接问AI:  `查看失败用例的trace`

![](https://mmbiz.qpic.cn/sz_mmbiz_png/UzsCVuwOnvQ30G5tcwKI9FOOAib6nEuDAqZuOA1dMQ3icHGzuy7OFKuq4rY4etxrTIKwjDzeUQmYFEIhCdJVMBQYFRgDzpdHO9EjBduG6tibyg/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=12)

整个过程人只需要像日常对话一样自然语言、口语化沟通即可。

五、最后再补充说两点
----------

有一个问题需要说清楚。AI 把测试跑完，测试工作没有结束。

`ui-test-executor` 接管的是「执行加采集」这些规则明确的活，把环境检测、命令拼装、证据归档从几小时压缩到几分钟。但下面这些事，仍然需要人来把关。

| 

AI 负责的事

 | 

人负责的事

 |
| --- | --- |
| 

浏览器环境检测与选择

 | 

确认浏览器范围是否符合测试策略

 |
| 

自然语言翻译成用例筛选

 | 

确认筛选范围覆盖本次迭代的风险点

 |
| 

并行调度与失败重试

 | 

判断失败是环境抖动还是真实缺陷

 |
| 

六类失败证据自动采集

 | 

看截图、看 Trace，判定缺陷归属

 |
| 

报告五件套自动产出

 | 

基于报告做出发布决策

 |

**特别提醒一句**。重试通过不代表没问题。偶发失败的用例，往往藏着时序问题或资源竞争，值得单独拎出来排查。看到「重试后全绿」就放心发布，这个懒偷不得。

回顾一下整个过程。

**痛点。**  环境翻车靠玄学，等待时序靠缘分，脏数据靠人肉排查，失败现场一次性，用例筛选靠翻文档，并行重试自己搭。

**方案。**  ui-test-executor 把执行固化成「标签筛选、环境检测、执行调度、现场采集、报告产出」的五步流程。执行前先亮牌，两份清单让你看清跑什么、用什么跑；执行后留证据，六类现场材料自动归档，报告五件套一次产出。

**效果。**  以前跑一轮测试要人盯着，失败了满世界找现场，写报告靠翻文件夹。现在一句自然语言指令启动，环境、范围、证据、报告全部自动到位，直接可以对接 CI/CD。

**边界。**  AI 负责调度和采集，人负责决策和复盘。

大家可以自己根据本文提供的思路开发 skill，如果需要现成的教程和 skill，也可以加入「**[狂师 . AI 进化社](https://mp.weixin.qq.com/s?__biz=MzA4NDUyNzA0Ng==&mid=2247509152&idx=1&sn=c4dd7c8cb5832998405d02b2c6979419&scene=21#wechat_redirect)**」获取，里面有各类 AI 技术落地保姆级图文教程、视频教程，包括 AI 测试全流程的实战教程保姆级手把手喂饭教程，跟着步骤操作，零基础也能快速上手。

> 温馨提醒，「AI 测试」只是 AI 进化社八大技能版块之一。

执行这个环节理顺之后，手里握着的就不再是一堆跑挂了的用例，而是一份证据齐全的失败档案。怎么让 AI 顺着这些证据自动分析失败原因、定位根因、给出修复建议，我们后面的文章接着聊。