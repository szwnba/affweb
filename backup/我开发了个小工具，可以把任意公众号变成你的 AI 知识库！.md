阿虚同学  

读完需要

4

分钟

速读仅需 2 分钟

点击头像即可关注

之前评论区简单征集过下大家对「公众号文章采集」的需求👇

![](https://mmbiz.qpic.cn/mmbiz_png/4rDzV4SKxUDUhQpuXjyWX7FDoWkEDoIMET67BemvbI1ZWJiaE5LPibb1sicgXQG90eEmxHHBq4cMuwpUiblhBL7GRH7gGDc13mMW0Yf3dvwaPfo/640?wx_fmt=png&from=appmsg#imgIndex=0)

点赞人数很多，看得出还是很多人都需要一个**公众号转 AI 知识库**的工具

1

**公众号历史文章全量采集软件**

所以阿虚折腾与测试了很多天，终于把这个工具开发好了（也支持 Mac 电脑）![](https://mmbiz.qpic.cn/mmbiz_png/4rDzV4SKxUAClM2ZtSTMjmJrNnxOyibb5v9dG6rN2H43pzO1aZ3HDhZIwcnXj9Ly6zUiapEgUzoMvBJbwffuAibjjMEPEniaoFtapicpFqcTdcJA/640?wx_fmt=png&from=appmsg#imgIndex=1)

![](https://mmbiz.qpic.cn/mmbiz_png/4rDzV4SKxUAqlrpBxJBjg0okCPX7U4yyUKaKNHicPjeFAPlb20NtHbl4upTGJcZ3LeyCRYn0bNZoXgemqcLv9Ug9kxLmmIv5gZgadYF0W2JU/640?wx_fmt=png&from=appmsg#imgIndex=2)

使用的话极其简单，通过「某公众号的任意一篇文章链接」即可在软件左下角完成公众号添加

然后先点击左上角的「扫码登录」登录好你的**微信读书**，这里有一个关键的注意事项

很多时候你点击登录，会发现其实浏览器上已经登录了账号的，但左上角还是显示**登录已失效**——其实这时已经触发了微信的风控

![](https://mmbiz.qpic.cn/mmbiz_png/4rDzV4SKxUCWia7o7ngpMyMCCuJibPDZu8vTjbQiaaf2elv0Jmjo2Xa5qlI3t3YsfTBp7rGM02DiaG82T3HzQNIS4t3DzicaMSnu135Lluic8gt48/640?wx_fmt=png&from=appmsg#imgIndex=3)

只是在微信读书主页是不会显示人机验证的![](https://mmbiz.qpic.cn/mmbiz_png/4rDzV4SKxUCOu7J9eFnkT2KJRLiaGkG9iareFUSH4BibxJAY8Run5G0LQn87lYOtiaTZxg9pdgFQwOr5CK0mP4ENtOgKu2gl13ACiaMHbL2CdFUU/640?wx_fmt=png&from=appmsg#imgIndex=4)

所以我们就需要**主动点进任意已订阅公众号的文章，触发人机验证的弹窗**，然后手动解决人机验证

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4rDzV4SKxUC1wGI2gfiacQZ4ad26UhnKandvCRWhrRwExj0YZexTabhtnxsnqHlRicnTc5xhYTEJ41E8ZvFgnkWMgeON37aDS2JDn222qjyBU/640?wx_fmt=png&from=appmsg#imgIndex=5)
▲主动点击某篇文章才能触发

过了人机验证，软件就会自动刷新微信读书凭证

![](https://mmbiz.qpic.cn/mmbiz_png/4rDzV4SKxUApqvFWdalpia2QFNWx1NvZZqAxNowDWO2YO1zKBaouz7NuYtF4DPI59XwrHKokt0T7hsicaLhTxTAKia6dSrYxhU2EUp7dicfqWyU/640?wx_fmt=png&from=appmsg#imgIndex=6)

最后就可以勾选公众号，点击右上角开始采集了![](https://mmbiz.qpic.cn/mmbiz_png/4rDzV4SKxUCHXPUgL46TJdsFPEa8ibFJftb5zMdovL1Mu9SQTjFoSwH76QBfPqOk6iaslrethicVtykwnEkXhHeKKCJVgg56WKqUf6jCXe6BEc/640?wx_fmt=png&from=appmsg#imgIndex=7)

软件区分首次全量采集和后续的增量采集：

1.  全量采集：软件限制只能单个账号单个账号跑，且视你需要采集的公众号历史文章数量，不建议一天全量采集太多账号，极容易触发账号级风控
    
2.  增量采集：因为一次可以拉取最新的 20 篇文章链接，且会自动补采到上次文章的位置，所以没必要每天运行，可能半个月跑一次足够。增量采集的话可以同时多个账号，实测几十个账号都没问题
    

最后就是如果全量采集的过程中触发了账号级风控，**可能需要 1－2 天才能恢复正常**，目前软件的设计上来说是可以从上次中断的地方续采的

像某些几千篇历史文章的公众号，大概率会触发风控

但因为阿虚没专门测试到这个极端情况，有需要的话只能各位自己实测了![](https://mmbiz.qpic.cn/sz_mmbiz_png/4rDzV4SKxUCmC4zviaiaZQKocgCC6SHbmca3F3qShploQ0VakpstJ3sXeoUaJadncZdZWDtf7wvYkZx9Hc0NO6rzicBqUl6GqSkuOWKZSVJtsg/640?wx_fmt=png&from=appmsg#imgIndex=8)

至少来说我测试采集了几百篇历史文章的账号是没有问题的（单天采集 1 个）

2

**导入 ima 知识库**

最后来说下怎么把获取到的文章数据导入到腾讯 ima

在软件选中账号后点击导出数据，你会获得一份 JSON 格式的 txt 文件

为什么不是 Excel 表格？因为其实 JSON 格式对 AI 来说才更友好更易读取

![](https://mmbiz.qpic.cn/mmbiz_png/4rDzV4SKxUDMICpXxDxELurAYHkicagD86GfOAd6YURD9ZS5GB5SVZsKwueAvXias98cuJ0uJWgIg3gCAMOn0vMHyWg1KG6zWiaOv4tM0z3YuA/640?wx_fmt=png&from=appmsg#imgIndex=9)

接着我们打开 ima 知识库 ➔ 我的 copilot ➔ 页面右上角齿轮，这里可以**免费领取每日算力**

![](https://mmbiz.qpic.cn/mmbiz_png/4rDzV4SKxUDickDOQR1yBqX8fhRtxksOguU4LgQyIOZDiccPGyEskiaojrw1JDXu1ozCicXvh8NvZHAV7P491BKwFibib2CAjFfqp2JGiabFJ38JJA/640?wx_fmt=png&from=appmsg#imgIndex=10)

是的，没错

导入过程我们借助 AI 就可以了，不需要搞什么自动化之类的。阿虚研究分析一阵发现这就是最简单的办法![](https://mmbiz.qpic.cn/sz_mmbiz_png/4rDzV4SKxUBnWZfZIJTS8l4KxzpIddWYj2I8dcsd28tic62SOx7fTp5orJ5sCkibdUf06NsTiceT0fflm2sYa3eZLB6y1eVak6JSaRbaZDDicgQ/640?wx_fmt=png&from=appmsg#imgIndex=11)

模型的话就选 GLM-5.3-Flash、DeepSeek-v4-Flash 这样算力消耗低的模型，完全够处理这个导入任务

⚠️ 注意

别去瓜兮兮的选什么 4 倍消耗的 K3，2.2 倍消耗的 GLM-5.3 模型，根本没必要，太过于浪费算力了

2.1

**第一次全量导入**

我们把导出的数据 txt 文件上传上去，大致这样要求 AI 即可：**将 txt 中所有的文章链接添加到「XXX」知识库中的「XXX」文件夹**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4rDzV4SKxUB4zyXDB4O8sl2hH54tfg1PncQdbmjETv9yNnrZlNN8hTHwnpq7MczUQP4A7aH5ByhnnYgHgcwGYxib76tUhMTdkAg3LoHaiaZPk/640?wx_fmt=png&from=appmsg#imgIndex=12)

当然，如果你**专门建个知识库**存某个账号的所有文件，提示词可以更简单点：将 txt 中所有的文章链接添加到「XXX」知识库

之后就耐心等待 Copilot 开始跑任务即可，AI 会自动分批替你导入所有采集到的文章链接

![](https://mmbiz.qpic.cn/mmbiz_png/4rDzV4SKxUCgCf32FupptPpUkwpltoBGYqiabkxowoTIuprUmCpHIq773CzcZ6GiavPYAZG0hCQlMkVI5TjhKaxUfVktNe7I1RxkDc6ajDeSg/640?wx_fmt=png&from=appmsg#imgIndex=13)

然后由于添加的链接巨多，ima 知识库需要花很长时间才来解析所有文章内容，这一步呢就需要耐心等待了

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4rDzV4SKxUDyz7Iic4EVX6K2w7dg8NATxArCIRRKD1iaW96jh8xy1icibLgFHVdic6X5bRIjHjKKUfWa6nX3m7RJHiaSNEnticbicJDwY3yUrVxVhr4/640?wx_fmt=png&from=appmsg#imgIndex=14)

关键是由于 ima 的问题，添加大量链接时，你极大概率会遇到很多链接都显示解析失败

倒也不用自己挨着去点击 ↻ 重新解析链接

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4rDzV4SKxUCicj8QlX7BLA52NnTzM2hkCr4cwria8ticX9jkMP4SU9ibyicVEmpCQaIEmtxMia5QtiaMuS1oDf7CwqFyk2RVUZYlXYaxgozcNVZ8IQ/640?wx_fmt=png&from=appmsg#imgIndex=15)

这事儿也可以交给 AI 来处理，只需要让它帮你把这些失败的链接重新解析即可

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4rDzV4SKxUDb5PiaOvSSfssCLnhcLb6ibj9fMIOp9khh63drVUh02qz9lJDWQToa2lBemhJ8WjJagdFrrSI7BwL95csZ6ia11riaEgoDjj6FLaA/640?wx_fmt=png&from=appmsg#imgIndex=16)

只不过重试解析这件事又需要耐心等待，由于 ima 对于公众号长链接的解析不稳定，整个过程可能会耗费几十分钟甚至数小时

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4rDzV4SKxUCGFQm9sDadn1ZVmX9eMLv5QrY4iclDgy1x5ia7sDxiatOZFKQJKKVMHktEAHcsicTZF01M37NVFiclZWmz1NQojYD6G3C6H7aMT70U/640?wx_fmt=png&from=appmsg#imgIndex=17)

是有时候会残留一些解析失败的长链接，这个就只能你**手动按名称排序**之后删除一下了（copilot 没有删除链接的权限）

![](https://mmbiz.qpic.cn/mmbiz_gif/4rDzV4SKxUDZicRLP4Cicrh5OOiaoAP1BLibyt51BLsOvr2vbgqxHn5DlicR9SbwGD7xTWK4ibgr0TlyeRm0hPkmoIT8mqhL2pjj4SSBlc9tIt2vk/640?wx_fmt=gif&from=appmsg#imgIndex=18)

**删除之后，再让 Copilot 尝试重新导入链接解析**。记得需要自己先手动删除，再让 AI 导入（因为 ima 有链接去重机制，已经导入的链接会无法导入）

2.2

**后续新增导入**

至于后续新增文章导入起来也比较简单，就在提示词上加一句**「跳过已导入的文章」**即可，比如像下面这样写命令

![](https://mmbiz.qpic.cn/mmbiz_png/4rDzV4SKxUDBlZZG2aPjqVk1W0x9DWRZvsuYsR5LDJGdGSWEmibTgww4HgiaxX1nkMQzHHCUFYeJibGV0G6ejcytyQvZUv0cQourfqNpFSqHg4/640?wx_fmt=png&from=appmsg#imgIndex=19)

因为软件导出的数据中有文章标题，Copilot 就可以根据表来跳过已经导入的文章

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4rDzV4SKxUDFMdtwQFbLicKKekKU0wkpvo540uWB8ADmJu05HMSziaib3N07siapQ24HuLy95K28BZH2IREtZgEMATZ1GsnsnmPhicbtWGG1Vfeo/640?wx_fmt=png&from=appmsg#imgIndex=20)

![](https://mmbiz.qpic.cn/mmbiz_gif/4rDzV4SKxUA18aNgOyq2C9ozJ3ceOiaW26QBWVibY1K9zIr4QZVoTcjibenB9JVqbJfFgmsonpqEuCGk08XeiaVibiayCeFiaIa7P2rxcdHPj8JdQo/640?wx_fmt=gif&from=appmsg#imgIndex=21)

最后说一下，软件仅采集文章链接，没有下载文章全文功能。如果需要下载文章内容，可以用现成的软件：github.com/qiye45/wechatDownload，让 AI 把导出的数据提取为一行行链接后，就可以用他这个软件批量下载文章了

需要阿虚这款软件的话，可以在公众号后台回复以下关键词获取下载链接（也可以后续看文章置顶留言获取）

“

公众号转 AI 知识库

”

![](https://mmbiz.qpic.cn/mmbiz_gif/4rDzV4SKxUBca9Wyx13PgHA7f6XooK1eHHEqtfaoBW864hKzniaZuy8icRoibnibWaibSgSNQdKXVmkg7XcojeHX4aRYMwGuaE1HSAoNnSjRhQ0o/640?wx_fmt=gif&from=appmsg#imgIndex=22)

![](https://mmbiz.qpic.cn/mmbiz_gif/4rDzV4SKxUAXXmcYa15ialMY5ISmunFXrvY4o3EnHTZl0ZR4ibjRbXmcMwACzNtIqO5jelcgZI9ZuD9r3UJPF8kHuWT5JpPHERibRYAhKXLOLQ/640?wx_fmt=gif&from=appmsg#imgIndex=23)