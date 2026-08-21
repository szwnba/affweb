    7月份我在Telegram上发起了一个Build in public项目,如何从零开始构建一个Affiliate佣金网站(小报童专栏精选推荐)，这是一个全程免费的从0到1的项目构建分享过程。但telegram并非大多数国人的常规通讯工具，光合理使用网络就拦截了95%的人，因此我在这里将分享过程做个总结，旨在给大家提供个思路、触类旁通的启发和帮助。

    一直以来我的Affiliate社群不管是技术上、经济上、成就上都在我之上的大牛比比皆是，因此Build in Public过程中难免纰漏，不足之处还望各位指正批评。

**每个人都有自己做项目的基本原则，我的几点原则：轻资产、轻维护、轻售后**

1.   轻资产，就是成本不要投入太大，不管是时间上，还是资金上，所有的想法一开始都先把它当作一个MVP，先短时间内做一个"冠冕堂皇的垃圾产品"出来看看市场、用户的反应，做互联网项目不要过度的想象完美和长远，想的越多，考虑的越长远，门槛和困难就越大，除了成功把自己劝退之外，没有任何意义！
    
2.  轻维护，尽量不要让项目维护成本和门槛太高，被一个项目的售后绑在马车上无法脱身.要想它成为副业，成为被动收入，就要考虑好日后将怎么维护，如何实现自动化、规模化，人工维护部分占比多少.如果人工维护占比太大，大概率失败都会归咎于更新维护死。
    
3.  轻售后，互联网最典型的是电商的售后是最重的，卖服装的还积压库存、换季、退换货、纠纷，而做虚拟产品或服务类的售前售后都很轻，没有边际成本，会员服务、资源、软件类型的，很多都能标准化自动化，一本逐万利。
    

 一旦满足这几点轻原则，你在项目选择上就可以更精准明确.  

### **一，选项目**

    2024年初的时候我在星球里分享过一个知识付费的平台，小报童，当时我建议大家搞个佣金导航站，原因是它不像知识星球，只有你付费加入某个星球，才能去分享某个星球获佣金。而且affiliate佣金比例高达40%-60%，在业内相当的高了，甚至你比作者和平台赚的还多，而且你可以推广整个平台的专栏，该项目你的成本只是推广和分享，作者和平台负责维护和售后，完全符合以上说的轻资产、轻维护、轻售后原则，小报童的合伙人计划没有申请门槛，微信扫描登录即可复制链接或生成海报推广专栏。

![](https://mmbiz.qpic.cn/mmbiz_jpg/hfAPnEhDvPrqMZ3ReFM4Tz8Lcoc3RL1nIibQbND63LNXoRbuW2gh2luJmXwTfQgqCOAbFIfpEiaAgqrOlYrY6hWQ/640?wx_fmt=jpeg&from=appmsg)

### **二，注册域名**

    项目选定了之后，下一步就是注册域名了，我一般优先去选老域名，老域名的筛选原则有几点：

*   3年以上的老域名（域名年龄）
    
*   com域名（域名类型）
    
*   长度尽量短，不超过10位（域名长度）
    
*   通过114查询域名有没有快照和收录，最好选有快照、收录多、有备案的
    
*   查询历史快照，是否做过敏感词、违法词
    
*   检查域名有没有被比较危险 被黑，被挂乱七八糟的东西
    
*    站内site，有权重索引
    

    老域名我是在ename.cn易名淘的，www.xiaobaozha.com(寓意:小报站/小爆炸/小报栈），跟官网名语意接近，这个三拼的5年老域名，入手才80块钱，现在.com域名新注册也是这个价.

### **三，网站技术选型**

    如何构建这个小报童佣金站点，这是一个很考究个人经验的问题，10个人有10个不同的构建方法，常规的方式用现成的网站导航模版(现在有一些甚至是不需要服务器实现的导航网站模板)，wordpress，cms，自建站，这个完全取决于个人熟悉的领、技术能力、认知、对项目的理解。

    不同的构建方式肯定是决定不同的维护方式。所以在构建之前就要考虑轻维护原则，我个人比较喜欢把网站所有的控制权和扩展能力掌握在自己手里的，基于此，构建这个站点，我用React开发前端，集成Prisma做数据库ORM，实现API接口。React+Prisma应该也算是国外的主流MVP构建站点的模式。

    当然，React+Prisma都是我首次使用，数据库使用Mysql，因为所有的项目都有了AI的加持，所以大部分技术上的问题我都不担心。

### **四，数据库设计**

    数据库表设计以及字段设计比较简单，直接拿小报童的API接口，COPY到POSTMAN就设计出来了

 ![](https://mmbiz.qpic.cn/mmbiz_png/hfAPnEhDvPrqMZ3ReFM4Tz8Lcoc3RL1nuehkAJhF3BSwI8Qa4zFRawC0aialSicCMKPbjzRR4SdyJibptZaGEgcOA/640?wx_fmt=png&from=appmsg)

    然后将设计好的表导入到Prisma中的schema.prisma![](https://mmbiz.qpic.cn/mmbiz_png/hfAPnEhDvPrqMZ3ReFM4Tz8Lcoc3RL1netibYzY3P6HiclIia11iabudIUUicfVZKOjJZ7yK6B02wQJ7AuEf9XwTyYg/640?wx_fmt=png&from=appmsg)

### **五，API接口设计**

    API接口设计，我大概罗列了几个，基本就可以让网站跑起来了。

1.  获取全部栏目（按照最新排序/订阅数高低/创建时间/是否免费） GET /api/xbotall
    
2.  栏目分类列表（GET /api/categorylist）
    
3.  Tag列表（POST /api/tagslist）
    
4.  推荐列表（POST/api/recommendlist）
    
5.  栏目详情（POST/api/detail/{uuid}）
    
6.  全网统计（GET /api/statistic）
    
7.  提交栏目（POST /api/post）
    

![](https://mmbiz.qpic.cn/mmbiz_jpg/hfAPnEhDvPrqMZ3ReFM4Tz8Lcoc3RL1n8tRMrrbeuL2P3nLqxUPicmumLhm7g7iabJQC3f7hB4c32XmvIxTWicEgA/640?wx_fmt=jpeg&from=appmsg)

### **六，前端网站开发**

    前端网站，我用的是claude3.5的artifacts来完成网站的设计工作，前端的React框架，使用的是阿里巴巴开源的Umi，一套可扩展的企业级前端应用框架，很多繁杂的配置，例如本项目用到的RouteAPI生成器、Tailwind CSS，Antdesign，它都已经集成进去了，做到开箱即用，省去大量的前期配置工作。

    记住，要搞钱，就不要做极客，为技术而技术，把时间花在那些看似重要却没意义的事上

**最终前端开发的页面效果****：** 

    **首页：** 

 ![](https://mmbiz.qpic.cn/mmbiz_png/hfAPnEhDvPrqMZ3ReFM4Tz8Lcoc3RL1nBg4icv5GfdtKv7pQXn0S8yatDoicH16D8pLJ9KpeB6BNtg9rD3Sx4M7g/640?wx_fmt=png&from=appmsg)

     **专栏详情页：** 

 ![](https://mmbiz.qpic.cn/mmbiz_png/hfAPnEhDvPrqMZ3ReFM4Tz8Lcoc3RL1nhPQJS3KgfBOZ6DRy5XEYzRp12FicZzww0aPhmCwbf7fwyWpe6MUjN7Q/640?wx_fmt=png&from=appmsg)

      **文章列表页：** 

![](https://mmbiz.qpic.cn/mmbiz_png/hfAPnEhDvPrqMZ3ReFM4Tz8Lcoc3RL1n1huwcdTB0Ifj8V62Hlh0VJtSQJJk3WmNW7YDDF0389Qq4VxEJZ5j9g/640?wx_fmt=png&from=appmsg)

**也可以直接在电脑上打开浏览：https://www.xiaobaozha.com**

###  **七，数据入库**

    数据入库是一个重复且工作量巨大的维护环节，前面我们说了要轻维护，自然不能接受这种低效重复的工作。所以我用Scrapy写了一个脚本，脚本的功能主要是支持一键爬取某个栏目的所有数据（如：专栏介绍、专栏内容、免费试读、专栏统计等），脚本实现起来比较简单。

    这里要注意一下，小报童官方会给每个用户的合伙人链接生成一个固定的推荐ID，类似这样refer=4182y546-d4fc-4b2f-894f-6ec1a1bd224e，其中4182y546-d4fc-4b2f-894f-6ec1a1bd224e即是你的推荐ID，分享链接的时候务必携带这个参数。

    如果你也在使用scrapy，强烈推荐你使用在github开源的AyugeSpiderTools提升scrapy生产力工具，作者ayuge已经对scrapy封装了settings，items，middlewares，pipelines通用的方法，这样你只需要专注spider的脚本编写。

**AyugeSpiderTools开源地址：** 

https://github.com/shengchenyang/AyugeSpiderTools

### **八，脚本部署**

    脚本部署我原来使用的是crawlab，但是由于它集成了mongodb数据库，为了节省服务器资源，后来我换成了scrapydweb，它使用的sqlite更轻量，同样支持自动部署、定时爬取任务、统计等。

![](https://mmbiz.qpic.cn/mmbiz_png/hfAPnEhDvPrqMZ3ReFM4Tz8Lcoc3RL1n6gtygufbdnf6q27os7kdRmcqrYX764nksIge6U9EApVzvj8jsw0xTQ/640?wx_fmt=png&from=appmsg)

### **九，网站部署上线**

    React+Prisma人工部署同样是重复些低效的任务，当你每次修改完代码之后，需要打包、上传、安装新依赖、生成Prisma、执行数据库合并、重启服务等等，所以我使用了Github Actions，通过deploy.yml脚本，当你提交代码即可完成了所有的这些部署环节。

![](https://mmbiz.qpic.cn/mmbiz_png/hfAPnEhDvPrqMZ3ReFM4Tz8Lcoc3RL1n1vSJFzTeiahoF8aiclLhTzK7M6PBjZsiaXD4ET3KYiano52mh5nprPA4hw/640?wx_fmt=png&from=appmsg)

### **十，写到最后**

    此Build in public项目分享主要根据轻资产、轻维护、轻售后原则选项目，通过ename购买老域名，前端使用umi+react，数据库orm使用prisma，数据库使用mysql，维护入库使用scrapy的封装库AyugeSpiderTools，脚本部署和任务执行：scrapydweb，代码版本管理和部署使用github+actions。

*   **时间成本：** 一周时间(30小时左右)，其中AI完成了70%-80%的代码量
    
*   **资金成本：** 80元（购买域名） + 70元（claude3.5 AI/月租），其中服务器未采购,使用原有的服务器，总计150元.
    
*   **维护成本：** 无，(脚本实现)
    

**种一棵树最好的时间是十年前，其次是现在！**

  选择半衰期长的行业，Affiliate不应该仅着眼于短期项目，而是要做长期主义，享受复利，这是最近在做的项目的一些心得理解，分享给各位。