> 大家好，我是斌斌。 本公众号专注于分享RPA+AI内容，愿景带领1000+人掌握RPA，实现十倍速效率提升，提高自媒体创作效率，解放重复劳动。感谢您的阅读，关注我，即可领取RPA基础手册。

本文将分享借助数据抓取、AI和RPA工具，打造资讯流量入口，以搭建一个招聘资讯公众号为例子，如何每天花10分钟，自动搬运下各大招聘网站的招聘信息，吸引大量求职者，为他们提供求职相关的资料和服务，实现精准变现！

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4O20yibSlvuJMRKYMY5q0oZt3XHhBHJrj1VlXialgxJfQOlLjobFud5AuvK5iast2DzbISlfsJoEhKnib2CK7D2JicA/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**01**

对标账号
----

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4O20yibSlvuKMJElLdYx6YOd0Wo5vae6RpXAux8WN2PnTMV8wQCeU6icArqFml7YP2qs95iaKV2DJ36rWo775AsXA/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

账号拆解  

![](https://mmbiz.qpic.cn/mmbiz_jpg/zUwpFbW4A8wibUMrr3O7D7TZYjPCCJF6IZPvjJqlibzMGg3jCeZcau226Bk0HtSJ7NFqN5TGGdax7Q9NBHUmyzAQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

流程展示
----

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4O20yibSlvuKMJElLdYx6YOd0Wo5vae6R0j4Gbibp8VWEpKo2fIHxZsdiafoicYN2HbTCIAkxcBU74uNz3BbqLUwaA/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

1.数据爬取：爬取招聘网站的数据

2.数据处理：清洗掉不符合要求的数据

3.MD文档生成：将数据转换成md代码

4.内容排版：md及公众号文章头尾模板设计

5.公众号发布：将md文档发送到公众号

**02**

方案实操
----

### 1.数据爬取

**八爪鱼工具-数据爬取**

本文用到八爪鱼工具：

1\. 操作简单，无需编写代码，常规采集可自动识别采集项，一键完成

2\. 相较于用RPA采集，八爪鱼爬取时不占用电脑，可以进行其他操作

官网：https://affiliate.bazhuayu.com/qjxzxzgH3a95（复制打开）

1.1 操作步骤

.iguopin.com/job 为数据源，操作步骤：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4O20yibSlvuKMJElLdYx6YOd0Wo5vae6Rz5YyVLARTiaX1aUEBIApNFXla0icqfgp5nKLMIXbmIh8G9uNgWFr2kxQ/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4O20yibSlvuKMJElLdYx6YOd0Wo5vae6RY8ILtUgCJqM1vCl0bapaptCOsicibEzphhJ3UNIHQwBdGrUqbgMzTr3g/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4O20yibSlvuKMJElLdYx6YOd0Wo5vae6Ro3WOaaia6rWAGOMJ9SeIhBzCG0qQLia8LVOoBoszbiaJic4SKZY1gqjc9g/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

1.2 采集详情

现在还缺招聘细则，需要到列表详情中抓取，点击列表卡片标题，选择【点击一次】。

![](https://mmbiz.qpic.cn/mmbiz_jpg/zUwpFbW4A8wibUMrr3O7D7TZYjPCCJF6IbMJibPFPp5BSCaBpEswrw0fd4MNiav6NZ0S3Gsm9JR4mjulUqcd4ZmBA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

页面会马上进入岗位详情页

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4O20yibSlvuKMJElLdYx6YOd0Wo5vae6RRiaRrqYDGOJFMREeV4xzl00WMibVpRRWRrgqofD4Z6VEScSFCVNqoiaicw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

发现数据不是我们想要的，点击取消，不生成采集设置，手动抓取我们想要的数据。

> 如果在点击元素后左下角没有出现页面2，需要在【点击元素】节点上点击高级设置【在新标签中打开】,应用后刷新就会出现页面2了。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4O20yibSlvuKMJElLdYx6YOd0Wo5vae6RdNvDDw39OMGVplX4kgyHicmicz50DBPiaoFGxshvjo49pAqBAI4oC9Ocw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

依次点击招聘人数、最低学历、专业要求、工作经验、报名截止、岗位描述等元素。点击页面元素后，选择提取文本内容。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4O20yibSlvuKMJElLdYx6YOd0Wo5vae6RZcSNRJib8UIzIrCJuAEwmpMyphH4KtgI0Vz9TKeJkb0ShtvrcibiaJ5xg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

获取了下方这一行数据  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4O20yibSlvuKMJElLdYx6YOd0Wo5vae6RMfDRITFL31RnYKeCro96ldCEjCcZzyiaia4cDE9HDRJfJnE7pSXrZiaSQ/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

高级设置，把采集动作延迟一下（避免页面还没加载出来漏数据），等待指定元素出现，否则等待5s

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4O20yibSlvuKMJElLdYx6YOd0Wo5vae6RjibVTEb3slcYFMUtXkq93m0AWgwx0GynFNacy2BYhXicib5576xTWEvVA/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

1.3 开始采集  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4O20yibSlvuKMJElLdYx6YOd0Wo5vae6RyvDMLKYY1TWaicIn3VUXSt0PSP5PIwUibGYic8kK3t88T5QFYibYrcKWYw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4O20yibSlvuKMJElLdYx6YOd0Wo5vae6RWCZTkXDFbMPiaJnAWQhdbqwUMGjm2y9CoC3z9A1dsJrx6kgF2lFoncA/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

1.4 数据导出

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4O20yibSlvuKMJElLdYx6YOd0Wo5vae6Rpu5n0tyVPAPjpzfBQGvqXBYbdfUppEB7dHEQbleFhOv9iasxfcNNSAA/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

### 2.数据处理&md生成

> chatGPT具有出色的数据分析和处理能力，直接用chatGPT帮我们处理数据即可。

过滤掉已经过期的岗位，使用chatGPT发送文件和指令即可

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4O20yibSlvuKMJElLdYx6YOd0Wo5vae6RwPEAsfiaN4RtXDXJJtibtgD06DysNMRZ8dshicgTCCIuNrtCpa5UiblkuA/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

2\. 将数据整合为md代码，直接向chatGPT发送文件和指令即可，可以自定义模板

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4O20yibSlvuKMJElLdYx6YOd0Wo5vae6RqekpNsViaTrffxe1nUE4wGIiaRCpc2HEJhmkxD7RGqI1zv7TzoBbKk4Q/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

3\. 再让它帮我们生成一列标题

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4O20yibSlvuKMJElLdYx6YOd0Wo5vae6RuibNMQKicElErtyEUvZXRxVVoBwp6YgRf3Vlcm2uMLc1NVH3p4U8RP8A/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

4\. 点击下载：获取到80条已经格式化的md内容

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4O20yibSlvuKMJElLdYx6YOd0Wo5vae6RYsrJ0Kduiczrccz1CDCLCaMUAfaA91Vz3w5496sJq0QjdqF3PlVn3PQ/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4O20yibSlvuKMJElLdYx6YOd0Wo5vae6R0LCOISVA3SZZs2xic22V0zibqo6xiaMdA7eicnIJGAK9sJeO2NFjcMHJuA/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

3.内容排版

> editor.mdnice.com/

将代码粘贴到mdnice，预制合适的模板。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4O20yibSlvuKMJElLdYx6YOd0Wo5vae6RnNHxqIdQUeBITicZnQwcNyfAXabfMkhQJTUlicicoT5rVOiaegNp8ehYQg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

至此，你已经可以手动的发布招聘咨询了，直接点击复制按钮，到公众号发布页面发布即可。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4O20yibSlvuKMJElLdYx6YOd0Wo5vae6RcBicia11hgbO91y0fyicNhrhxyARCMVICLVjVCEQz35CT4DNKeS8icibPjw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

4.RPA内容自动化发布  

**八爪鱼RPA**

由于影刀RPA无法分享机器人，所有此处使用八爪鱼RPA  
上手容易，对个人开发者非常友好，免费版可以分享，可以自己制作应用，对应用的使用、源码做权限管理。

官网：https://rpa.bazhuayu.com/link-wbb（复制打开）

**此处拆分为两个RPA：**   

**1.表格内容批量更新&合并到mdnice**

把相同公司的招聘内容合并生成文章并发布，比如每篇文章可发布3个招聘信息，超过3个的拆分多篇,可直接用RPA自动化执行

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4O20yibSlvuKMJElLdYx6YOd0Wo5vae6RPPR90ukK7qqcREUek0ZtnrfQiaqh5QVp6NgjnljocjRKnYRJjV3Ao9w/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4O20yibSlvuKMJElLdYx6YOd0Wo5vae6R5jNnV6hH8FF7WNtYv823k8nJuGMWicSCtzUBO9KKfWkxRGVABCRBibyg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

2\. mdnice内容批量发布到公众号

利用RPA发布机器人定时从mdnice到公众号发布，可实现1分钟分布一篇。

总结
--

资讯类的内容指的是提供最新信息、新闻、报道、行业动态等内容，通常需要具有时效性和准确性，对于自媒体从业者，资讯类的内容最大的优点是永不枯竭，车轮滚滚向前，永远会有新鲜的新闻和信息，当我们从优质的数据源头将内容灌输至自己的账号，打破信息差，就能吸引目标人群。

✦

**END**

✦

本文用到的核心工具是八爪鱼系列产品：**八爪鱼采集器+八爪鱼RPA**

用八爪鱼爬取数据后，可以无缝到RPA做自动化流程。

有免费版使用，具备强大的自定义配置规则流程的同时，还有**模版应用市场**，小白或想省事的时候就可以直接用模版！非常丰富，基本热门网站都有～

八爪鱼官网：https://affiliate.bazhuayu.com/qjxzxz（复制打开）gH3a95

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/4O20yibSlvuKMJElLdYx6YOd0Wo5vae6R7G1b0poVfU8WViaaNWLywogwTagOWV3fBkYicSQmFprfZOicMrS26p7VQ/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

八爪鱼RPA官网：https://rpa.bazhuayu.com/link-wbblink-qjxz

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4O20yibSlvuKMJElLdYx6YOd0Wo5vae6RB0VRbqLjXNE0mmuZzW56Sia26Mm7KqoxuVWw25atGfXBVTdUjHicFZ1w/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

有疑惑的小伙伴，欢迎留言&关注，本文转载来自知乎作者 @ 奇迹小甄。

* * *

欢迎**关注**、**点赞**、**转发**给我鼓励~

👇👇关注我👇👇陪你一起阅见更好的自己

**关住后+我w~x（**AlbertWubinbin**），即可领取RPA相关资料**