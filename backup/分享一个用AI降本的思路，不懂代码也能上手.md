👆点击**生财有术** \> 点击右上角“···” > 设为星标🌟

如何用AI解决实际的业务问题？

生财圈友**@我来** 利用ChatGPT做算法建模，每年为公司省下6万元。  

  
今天他将分享通过ChatGPT进行数据分析的思路，从最开始定义问题到最终数据论证。

上手的实操过程门槛并不高，但可以实现把官方电商平台的流量指数，转化为真实的销量等我们想要的数据。

希望今天的这篇分享，对大家有所启发。

![](https://mmbiz.qpic.cn/mmbiz_png/SPuE3j6U9Wic1Tb9ocfm5CKesVwPW9gjSVHoTqjg1bhR5VIr0feqKTVgOKWxp5WUw5H22CLiausQKVyjCGlIL0MA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

大家好，我是我来。

最近使用GPT，为公司每年省下了至少6万元。

原因是**拟合出生意参谋（淘宝数据）&罗盘策略（抖音数据）**，行业竞争版块指数与真实值之间的函数关系，帮助公司获取真实的市占率等数据。

希望给大家带来一些思考，如果你能用在自己业务中也降低成本就更好了。

有一些数据分析的逻辑，对不熟悉这个领域的同学有些硬核，没关系，大家可以参考我解决问题的思路来处理自己的业务问题。

这个案例，是我如何使用GPT解决问题的全过程，从最开始定义问题到最终数据论证。

**Part 1**

**背景信息**  

做电商的老板，一般都很关注自己品牌在行业内的市占率。市占率的数据获取，一般有2种途径。

**01 官方平台**

生意参谋、罗盘策略、京东商智等官方平台，会有行业竞争版块。

但平台方不希望品牌方拿到竞品的真实销售额，给的都是指数，没有办法看到实际的市占、竞品销售情况。

只能看到处理后的：交易指数、金额指数、流量指数等信息。

![](https://mmbiz.qpic.cn/mmbiz_png/SPuE3j6U9Wib1Oia42R61HYFBLor7C3gNfMjvV9GFKSsYYM4TIpYYh6sKRcKOTvgicPHHia62o89TjTUpfNThwmoPw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/SPuE3j6U9Wib1Oia42R61HYFBLor7C3gNfNicfnIwXPOUPCWgzUUmDRw6o8sW2jpAP1ftibnPM324vKoFy9PX9P53Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/SPuE3j6U9Wib1Oia42R61HYFBLor7C3gNfffJjeHbnpcC1qn6gicOstbpC1Hib9W3smBvRnxlLUg4trzCMvtOZO0bw/640?wx_fmt=png&from=appmsg)

（向右滑动以查看）

**02 第三方平台**

购买第三方平台的数据，如情报通、飞瓜。

第三方平台往往比较贵，比如情报通两个类目三个平台一年至少20w，且还是按周更新的。并且，第三方平台的稳定性和准确性，都不算太好。

所以说，能选官方当然选官方。之前生意参谋行业竞争数据，还可以用店透视、小旺神等插件进行转换，从而拿到真实数据。

![](https://mmbiz.qpic.cn/mmbiz_png/SPuE3j6U9Wib1Oia42R61HYFBLor7C3gNfdABhESbiaftNf0bBTm00WU3lhosibTgcjKDbupsibGvqYII6dmMlB2b5A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/SPuE3j6U9Wib1Oia42R61HYFBLor7C3gNfFMP0BzJywafK2jphTeP1qOOZMVDG6z2m54RdEYEy5eIojI4pomAAlw/640?wx_fmt=png&from=appmsg)

（向右滑动以查看）

但最近，官方平台的指数算法升级，不同店铺的账号，看到同一个品牌的指数是不一样的，风控更严了。导致第三方插件逐渐无法使用。

![](https://mmbiz.qpic.cn/mmbiz_png/SPuE3j6U9Wib1Oia42R61HYFBLor7C3gNf3vsrxZJVtYibbOsJUljf8yZ1mlibxC9mupfzfolB4ibS60P1nACxdMYEA/640?wx_fmt=png&from=appmsg)

（点击查看大图）

但是，大盘销售额、本竞品市占率，又都是品牌方非常关注的指标，怎么办啊？

**Part 2**

**探寻解法**  

遇事不决GPT，这事儿当然要找GPT，我就去找了它。

![](https://mmbiz.qpic.cn/mmbiz_png/SPuE3j6U9Wib1Oia42R61HYFBLor7C3gNfIsmg32xjD7z3ele3ES0P3eevP0Nx2cDeZWWMZIPicopBibIq3ChBmsdw/640?wx_fmt=png&from=appmsg)

GPT回答的第一点让我眼前一亮，困扰我们的问题的解法找到了！

**通过找出历史数据中的销售额与相应时期的指数关系，建立数据模型，就可以测算出指数对应的大概销售额。** 

这题我会啊，不就是找y和x之间的函数关系，指数看成自变量x，实际成交金额看成因变量y。

只要能找出y与x之间的函数关系，我们可以去平台上获取指数x，通过函数关系计算出y的值，这题也就有解了。

此时的我，看到了希望······

然后，又陷入了绝望。这函数关系，咋找呢？我是数据产品经理，又不是算法工程师，要搞数据拟合，还要准确，这题咋解？

遇事不决GPT，我又把眼光投向了GPT，人我是PUA不了的，但GPT我可以无限PUA啊。

![](https://mmbiz.qpic.cn/mmbiz_png/SPuE3j6U9Wib1Oia42R61HYFBLor7C3gNfAzgMoEgdZU2Oze0NsNHCGZs8VnDpPpMDggKuMr0lqAGDNljsw7Ih6A/640?wx_fmt=png&from=appmsg)

唉，这个流程和数据分析很接近啊，数据分析我熟，这题大概能解了。

合并了一下思路，接下来要做三步：

❖

1、数据收集与预处理

❖

2、数据探查与模型建立

❖

3、模型评估与验证

**Part 3**

**实现过程**  

下面结合抖音-罗盘策略的品牌榜为例，来说说我的实现过程。生意参谋和京东商智也是一样的道理。

**01 数据收集与预处理**

之前明确过，测算的本质是：基于本品牌的历史数据，寻找指数与实际成交金额之间的函数关系，拟合出一个函数公式。

所以我们需要两部分数据：

❖

1、本品牌的历史销售数据

❖

2、行业竞争品牌榜的本品牌每日的指数值

把这两部分数据找出来之后，做个数据透视，留下需要的字段和数据。注意做好数据脱敏，最好把品牌相关信息去掉。

❖

1、历史销售数据，保留以下字段：日期、品牌名称、销售额。  

❖

2、行业竞争品牌榜指数，筛选出自己品牌的指数数据，其他删掉，保留一下字段：日期、品牌名称、指数。

然后将这两部分数据，使用VLOOKUP函数合并到一张表格中。得到下图这样一张表，接下来就是寻找指数与销售额之间的函数关系了。

![](https://mmbiz.qpic.cn/mmbiz_png/SPuE3j6U9Wib1Oia42R61HYFBLor7C3gNfnoWBWFcib5vg98KS2PzG79DU9wxIWVrqRRJTfDWEmZFVHqzicwFzQUoA/640?wx_fmt=png&from=appmsg)

可能有朋友在这一步就卡住了，Vlookup函数只能针对指定的一列做处理，没有办法处理两列啊。

没关系，遇事不决GPT，不妨我们把这个问题也丢给GPT看看。

❖

你是一位excel处理专家。接下来需要问你一个excel问题，  

我有两张数据表：

1）历史销售数据，字段有：日期、品牌名称、销售额。

2）行业竞争品牌榜指数，字段有：日期、品牌名称、指数。

我需要将第一张表的销售额拼到第二张表，根据日期和品牌名称拼，就是说，这两个字段一样时，拼过来。

我应该怎么操作？

![](https://mmbiz.qpic.cn/mmbiz_png/SPuE3j6U9Wib1Oia42R61HYFBLor7C3gNfgFDiclibn91lbialDHXFpJaCobO7ib8pa38HKeVF52DZ2zPR2ffJo92kGQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/SPuE3j6U9Wib1Oia42R61HYFBLor7C3gNfFWUDQDSwNjyBgtNiao3zVW6Niab7kt4gLM7H5Ju1w2RkSYBWkeibf9qDQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/SPuE3j6U9Wib1Oia42R61HYFBLor7C3gNfzDV8IGUOHVumlEULas7ZRjJD0wviaFFDr8gGiaKw3fwgPHKJ9ibJxdC7A/640?wx_fmt=png&from=appmsg)

(向右滑动以查看）

再来看看更高阶的玩法，让GPT-4的代码解释器处理好给到我们。

![](https://mmbiz.qpic.cn/mmbiz_png/SPuE3j6U9Wib1Oia42R61HYFBLor7C3gNfPTQclABbUdCVpRFlqb8YSE0Z2ReQBu2jaGY5EF1fSrLCaGy0LecmXw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/SPuE3j6U9Wib1Oia42R61HYFBLor7C3gNfZ9l8GPuhtZ9rdHAVxFoqMWibN6qqXloE8BNJv6Pq66y1aeIeQv1JmTA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/SPuE3j6U9Wib1Oia42R61HYFBLor7C3gNfWRRELR9YAQaYkLDvSI9OiaP0ZYD0emV6Ncw9qxibZDian5nPZK2wKFYiag/640?wx_fmt=png&from=appmsg)

（向右滑动以查看）  

**聊聊代码解释器**

23年，GPT-4上线了代码解释器，它有一个很好用的地方是：允许模型自动生成代码，并且能够运行代码，当发现代码运行出错时，能自动修改代码继续运行。

这对于不会编程或者编程能力较弱的人来说是一个很大的福音，可以通过提示词来让GPT运行程序帮助自己处理一些问题。尤其是后来GPT又升级了一次，可以输入文件和导出文件。

这就意味着，我可以丢给GPT几个文件，然后让它处理，处理好之后把文件输出出来，整个过程相当丝滑。

就好比：我们提了一个数据处理的需求给Python工程师，工程师帮我们处理好了之后，然后又丢给我了。相当于有了一个可以无限PUA的Python工程师，让它干啥它就干啥，还从来不和你争论，一个月的工钱还不到200元。

**代码解释器做数据处理有啥好处？**

1、GPT-4做数据处理的原理是先自动编写Python脚本，通过Python做数据处理，所以不用担心它发生胡说

2、GPT-4可以上传多个文件，这样使得我们可以把数据文件上传给GPT-4，让它做处理

3、GPT-4可以输出文件，这样使得我们可以直接下载GPT-4处理好的文件

**使用代码解释器的注意事项**

1、代码解释器在封闭的环境下运行，且没有办法安装新的库（库在Python可以简单理解为一个个插件），也就是说如果没有这个库，可能Python是没有办法运行的。当然常用的一些库肯定是有的，比如数据分析、图表可视化、图像处理、机器学习等

2、注意数据脱敏，毕竟数据是需要上传给GPT的

3、提示词的写法，需要清晰、明确、具体

4、代码解释器目前的算力有限，且计算时间很小，如果数据量级过大目前还不太能处理。

**使用Python做数据处理的注意点**

1）一维数据、二维数据

❖

一维数据：一般从各个平台下载下来的数据都是一维的，比如下图这种，字段（维度or指标）在一行，然后就是一条一条的数据

![](https://mmbiz.qpic.cn/mmbiz_png/SPuE3j6U9Wib1Oia42R61HYFBLor7C3gNfPSe2ichGYuzmlUicSMv8hfsqd7NclCcVkTaTF1PC5fC7JunQOIrwLia8Q/640?wx_fmt=png&from=appmsg)

❖

二维数据：一般是最终处理后的报表，比如下图，行与列均有对应的字段（维度or指标）  

![](https://mmbiz.qpic.cn/mmbiz_png/SPuE3j6U9Wib1Oia42R61HYFBLor7C3gNfIefnxDNN7uNE7byFxArgfaIPVqiakbrNDDWyk3VGalQQDYRr3PN8jJQ/640?wx_fmt=png&from=appmsg)

使用Python一般处理一维数据会比较好，二维数据，Python也能处理，但复杂度会高很多。所以，建议只给一维数据做处理。

2）数据处理类提示词写法注意点

数据类指令对清晰和明确要求会更高，所以在写此类指令要写清楚：有什么（输入），希望怎么处理（处理步骤），最后希望得到什么样的结果（输出）。

比如我这一段指令：

❖

**（角色设定）**你是一位Python处理专家，  

**（输入）**接下来我会给你发两个文件：本品牌销售额、本品牌指数。

  1）本品牌销售额字段有：日期、品牌名称、销售额

  2）本品牌指数有：日期、品牌名称、指数

**（处理过程）**我希望你讲这两个文件合到一起，将本品牌销售额表中的销售额按照日期和品牌名称拼到本品牌指数表中。

**（输出）**处理完之后，输出excel给我。

注释：

❖

**付费读书会产品的设计和销售**

《视频号直播卖读书会 | 4小时进账2W+》@阿猫

❖

**付费减脂训练营的设计和实操**

《0元投入变现4.5W，复购率超50%线上减脂营项目复盘》@小达

1、尽可能清晰明确，会发现我把字段全部列出来了，并告诉对方要怎么处理，“将本品牌销售额表中的销售额按照日期和品牌名称拼到本品牌指数表中”，这在数据逻辑中其实是左关联。

如果不明确，GPT也可以理解为另一种含义，“将本品牌指数表中的指数按照日期和品牌名称拼到本品牌销售表中。” 

其实这是两种不同的含义，可能会导致结果出错。

2、如果处理步骤过多，最好描述清楚每一步的操作，减少大模型的思考，更容易得到自己需要的结果，比如下面这个提示词：

![](https://mmbiz.qpic.cn/mmbiz_png/SPuE3j6U9Wib1Oia42R61HYFBLor7C3gNfoopC0SBX1n9zTB6fCnZHdclOdZcHvJBBoRYWHAYkibkIHyl2pA0O2hA/640?wx_fmt=png&from=appmsg)

**总结 | 基于GPT-4的3种数据处理方式**

![](https://mmbiz.qpic.cn/mmbiz_png/SPuE3j6U9Wib1Oia42R61HYFBLor7C3gNf2phd8IFSjTWQicdPZsqOrOM8BAXHtzxrknhndyJcJh95VEaNoelab4w/640?wx_fmt=png&from=appmsg)

（点击查看大图）

大家可能到这一步，基本的数据处理能力就具备了，接下来会和大家分享稍微硬核点的内容，如何用GPT做算法调教。

这里涉及一些数据分析的逻辑，算法复杂不复杂都不重要，因为最后都是投喂给GPT去做的。

**02 数据探查与算法建模**

这部分是最重要的，需要我们通过GPT拟合出这两者之间的函数关系。

这部分需要对算法有一些基本的理解，先分享一些我理解的基本逻辑（我没有搞过算法，以下均是我个人在这次调教过程中总结的一些经验）

算法拟合基本的逻辑：数据预处理 >> 选择合适的算法模型 >> 调教模型，确定参数 >\> 数据验证。

![](https://mmbiz.qpic.cn/mmbiz_png/SPuE3j6U9Wib1Oia42R61HYFBLor7C3gNfE2YjkGtiaMcckeEicXbcnWWctvMbQAmgKHwpibwk14UaGSFrEJAZD64RQ/640?wx_fmt=png&from=appmsg)

（点击查看大图）

关键点：

❖

模型选择：模型有很多种，线性回归、多项式回归、决策树等等，需要根据我们当前面临的问题选择合适的模型，比如回归问题适合使用线性回归，分类问题适合决策树。

❖

评估指标确定：一个判断什么样的模型是合格的标准，基于这个标准，我们可以选择到合适的模型。  

这里带大家回忆一下高中数学学习过的线性回归，就是一个算法模型的处理过程。

❖

数据探查：我们一般会先画散点图，观察趋势

❖

模型选择：然后再使用线性回归方程求出参数

❖

效果评估：计算R^2的值来评估模型拟合的好坏

![](https://mmbiz.qpic.cn/mmbiz_png/SPuE3j6U9Wib1Oia42R61HYFBLor7C3gNfOBOVQZqAE3Ucibnibd0P9QBD8TcLxUjVhqU0mtZITYMabzOq63KOUibOQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/SPuE3j6U9Wib1Oia42R61HYFBLor7C3gNfeKdS43lFEEibNqwZib7NtjgVZeQicSSJzQ1vvFPhD0uibv08qsMVA4GicnQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/SPuE3j6U9Wib1Oia42R61HYFBLor7C3gNfVxMV9ia6vhXSXW1Dc0JDicve1TPxqTRFkP6ab0ibwqSctGJtEprXl8UhQ/640?wx_fmt=png&from=appmsg)

（向右滑动以查看）

本次可能用到的算法模型：

![](https://mmbiz.qpic.cn/mmbiz_png/SPuE3j6U9Wib1Oia42R61HYFBLor7C3gNfkBpPpsGShllm21r9cZ2m8lLN6ySm8ffkqEuEgCFHb4mOUAia9MibXzsw/640?wx_fmt=png&from=appmsg)

（点击查看大图）

好了，我们回头来看看这次的案例。

**数据探查 | 先让GPT预处理**

我们可以先让GPT自己处理一下，看看GPT的效果：

![](https://mmbiz.qpic.cn/mmbiz_png/SPuE3j6U9Wib1Oia42R61HYFBLor7C3gNf885vFkNwqpuOnEsjqkXVWgLdcmdMgp1AxdNbW0o33ECfFjZ6kkOPZA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/SPuE3j6U9Wib1Oia42R61HYFBLor7C3gNfkH90riaa1jMewxoeyM0dVic58u9BfFKz9zaacUicXXogxHlWMyGWXZGzg/640?wx_fmt=png&from=appmsg)

（向右滑动以查看）

处理的时候会发现，GPT虽然拟合的效果不错，但与我们最终的目标还是差了点。

**算法建模 | 反复调教GPT来修正结果**

就像我们刚刚讲的，有两个关键点，我们来看看：

❖

模型选择：不妨先从线性回归模型尝试，然后再尝试多项式回归（这里直接和大家说结论，指数测算需要使用分段函数，每一段内分别用一次项、二次项、三次项进行拟合）

❖

评估指标：使用R^2和差值率（计算公式为：(测算金额-实际金额)/实际金额）。选择这两个指标的原因如下：  

R^2，是统计学中用来评估模型的重要标准

差值率，是我们判断拟合效果的核心指标（最后会计算差值率作为监控的指标）

这里给大家贴一下我当时调教的记录：

![](https://mmbiz.qpic.cn/mmbiz_png/SPuE3j6U9Wib1Oia42R61HYFBLor7C3gNfYXLD7cKZNc4ZcwtKSndhue2Y3v8VMfQjtKhHQhqtrEA2JR1XP75Prw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/SPuE3j6U9Wib1Oia42R61HYFBLor7C3gNf5dpoToXicV9AXicM9XoomyLW8cTLEcKdrYez6DMsicicsvI7nBtEcY3PJw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/SPuE3j6U9Wib1Oia42R61HYFBLor7C3gNf1mWyO0FPM25meZqNXib6lC27KwDWaibH2GE41fOJhaVFOBMvMH3LxPoQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/SPuE3j6U9Wib1Oia42R61HYFBLor7C3gNfs2borHl4L8eGBeNgEAce2ibaEQqNQtn6q7xATR92e047HdUGGEZcTvQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/SPuE3j6U9Wib1Oia42R61HYFBLor7C3gNf8TUZBTiaZBhps3QKj4CVaUrK0JhiaiakQfS6uDJDUMRULGdDj1GVV9v5Q/640?wx_fmt=png&from=appmsg)

（向右滑动以查看）

按照这样的方式不断调教，每次让GPT给我们15种方案，直到我们能找到R^2>99% ，-5%< 差值率 < 5%的函数关系。

**03 模型效果评估**

测算完之后，需要验证这套公式是否可以使用。

验证方法如下：

**验证标准：将实际成交金额与用指数计算出来的成交金额做差值比对。** 

1）通过GPT拟合出来的公式，计算成交金额

2）计算两个值，差值 = 计算成交金额 - 实际成交金额，差值率 = (计算成交金额 - 实际成交金额)/实际成交金额

![](https://mmbiz.qpic.cn/mmbiz_png/SPuE3j6U9Wib1Oia42R61HYFBLor7C3gNf6z99zAiaL1OAyKlaJNFvBELEAgFUcBl3kHYOICsjRdtaib1ic4jrfSLgA/640?wx_fmt=png&from=appmsg)

最后会得到类似于上图的数据，可以看出来误差很小，基本上就可以判断：指数测算成功。

**Part 4**

**最后效果**  

用GPT测算的结果怎么样？

根据上面找到的拟合方法，我们先来看看最终实现的结果：

**天猫 / 抖音 / 京东，均可以测算出指数与实际金额之间的关系，误差在5%以内，且数据量越大、数据质量越高，误差越小。** 

下图是三个平台能否测算的结论：

![](https://mmbiz.qpic.cn/mmbiz_png/SPuE3j6U9Wib1Oia42R61HYFBLor7C3gNflKyx92JUpRIHhC3qWWtNQOuVuCxQ5sKEU1ia6DyBDy3WrAobtibKPpHg/640?wx_fmt=png&from=appmsg)

\*\* 注释：最新消息，生意参谋行业竞争版块在4月30日发生调整，行业大盘会下线，其余变成区间值。  

然后和大家分享一下，目前实现的效果：

在一张电子表格中，每天监控天猫/京东/抖音，三大平台的指定类目下的行业销售额、本竞品市占率，每天上午可自动生成监控报表。

![](https://mmbiz.qpic.cn/mmbiz_png/SPuE3j6U9Wib1Oia42R61HYFBLor7C3gNfBaUfoQib9Sy1dyYha8RdUecyiavxfnQRvr3hKw4UMkczbcsRruFQPVibg/640?wx_fmt=png&from=appmsg)

**总结 | 目前AI大模型在数据层面的应用**

![](https://mmbiz.qpic.cn/mmbiz_png/SPuE3j6U9Wib1Oia42R61HYFBLor7C3gNfEHOib9sERNlNPEJUgrIITrNX1LgxZIlnjxSb1q1RvibTicLpNF92X4ZOA/640?wx_fmt=png&from=appmsg)

**作者** | 我来 | **编辑** | 爱丽丝家的胖兔子