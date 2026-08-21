这段时间

在把我的 agent 迁用国产模型

**困难重重**

不光是上次提到的  

[全军覆没：国产大模型，都没做好 OpenAI 兼容](http://mp.weixin.qq.com/s?__biz=MzkzNDQxOTU2MQ==&mid=2247489742&idx=1&sn=4355a46b32fa7d39b90999825dc6140f&chksm=c2bcd5c8f5cb5cde5a55f168b0000e7c5fe6e1bdcb766d38087350b4abf233cbeac8d87af223&scene=21#wechat_redirect)

有的模型，甚至根本找不到文档  

于是在这篇  

我整理了下各家的接入方法

**值得收藏**

**开发省点时间**  

顺便吐槽下...

希望各厂负责人能看到

以及

**我组了场活动，在文末**

**欢迎各位大佬参加**

大致按模型首字母排序

Baichuan / 百川
-------------

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYrlosibEDl3TrbOlKR6Xyib7pz5WECdia9KabmeaWQIJ8YE5HrxV6VPqIlqibUeYZLbbpia35qTGpcqdvw/640?wx_fmt=png&from=appmsg)

**评价**  

清晰明确，所有内容均在同级菜单，找起来很方便

_![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYrd6sjOBXGBqKOSdNicpTCn4dsKHcGnGqxI3GgrovibZZxIOw3CBb4baldIIWTo0pxib8mbnQb18kyew/640?wx_fmt=png&from=appmsg)
_

但这里也有些小瑕疵  

比如：没有明确调用方法

（拉到最后才发现支持OpenAI调用）  

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYrd6sjOBXGBqKOSdNicpTCn4ZstLMGCVs6zf3GF0aZZwblhgibTib3B7sumfRTaTicHibxicFmictFiacG8pQ/640?wx_fmt=png&from=appmsg)

**获取 key**

https://platform.baichuan-ai.com/console/apikey

**文档**  

https://platform.baichuan-ai.com/docs/api

**Playground**

https://platform.baichuan-ai.com/playground

**定价信息**  

https://platform.baichuan-ai.com/price

**OpenAI SDK**：支持

DeepSeek / 深度求索
---------------

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYrlosibEDl3TrbOlKR6Xyib7pz5WECdia9KabmeaWQIJ8YE5HrxV6VPqIlqibUeYZLbbpia35qTGpcqdvw/640?wx_fmt=png&from=appmsg)

**评价**  

感觉在文档里面，ds 的最为用心

有细节在里面，比如

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYrd6sjOBXGBqKOSdNicpTCn43MTTzFhR2g2XbdBCksUufdvKicQnzQYHgzv3N3QMHPhYmBria3y5ibMibw/640?wx_fmt=png&from=appmsg)

对于可能疑惑的地方，指向对应地址（比如这里的 api key）

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYrd6sjOBXGBqKOSdNicpTCn4VvsQfPZhNahg4ictNTGibKKXHib8myY9xoPsBnmiaTvhlEQwtBYcxHI0gQ/640?wx_fmt=png&from=appmsg)

在文档里，用各种语言展示了事例

但也有点问题

比如我没找到 playground

以及...

仅代表个人吐槽

为什么邮箱注册的不送 credit!!!!

害我充了 10 块钱  

**获取 key**

https://platform.deepseek.com/api_keys

**文档**  

https://platform.deepseek.com/api-docs/zh-cn/

**Playground**

木有

**定价信息**  

https://platform.deepseek.com/api-docs/zh-cn/pricing

**OpenAI SDK**：支持

GLM / 智谱
--------

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYrlosibEDl3TrbOlKR6Xyib7pz5WECdia9KabmeaWQIJ8YE5HrxV6VPqIlqibUeYZLbbpia35qTGpcqdvw/640?wx_fmt=png&from=appmsg)

**评价**  

网址很牛逼！大模特.cn  

bigmodel.cn

清晰易读很漂亮

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYrd6sjOBXGBqKOSdNicpTCn4ve6MPnyBrpETUQibeibgfDnhOVOvlDF8Sv6O3QiaZ7c7TDoCg9eDo88CQ/640?wx_fmt=png&from=appmsg)

各种指引很棒！

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYrd6sjOBXGBqKOSdNicpTCn4Zwotl42S82SSyMFqsyM3ZeRzUag2O4GOp8eEHvzleDMBIykQbfCAMA/640?wx_fmt=png&from=appmsg)

支持线上微调、Batch 任务等

对齐 OpenAI  

但在细节上有点问题

比如

开放接口的对应信息里

没有请求事例

得来回在 Doc 和 API Ref 里找材料

**获取 key**

https://bigmodel.cn/usercenter/apikeys

**文档**  

https://bigmodel.cn/dev/api

**Playground**

https://bigmodel.cn/trialcenter

**定价信息**  

https://open.bigmodel.cn/pricing

**OpenAI SDK**：支持

MiniMax
-------

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYrlosibEDl3TrbOlKR6Xyib7pz5WECdia9KabmeaWQIJ8YE5HrxV6VPqIlqibUeYZLbbpia35qTGpcqdvw/640?wx_fmt=png&from=appmsg)

**评价**  

信息都有，但排版好奇怪

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYrd6sjOBXGBqKOSdNicpTCn4kAEwZOXUibd6WibrsJXY2TJ6o5MObhMLIG9gH0SAKOeMTJz0SJ6lssTQ/640?wx_fmt=png&from=appmsg)

各种字体...

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYrd6sjOBXGBqKOSdNicpTCn4LcvwickzN8rlujkX9fibekXaHaynUhicNoib2ribu3prgVv5Bg50z8OFtEg/640?wx_fmt=png&from=appmsg)

然后文档里说支持 OpenAI 调用

但我没调成功

知道具体怎么调的朋友

欢迎后台发我个 sample code

**获取 key**

https://platform.minimaxi.com/user-center/basic-information/interface-key

**文档**  

https://platform.minimaxi.com/document/notice

**Playground**

https://platform.minimaxi.com/examination-center/text-experience-center

**定价信息**  

https://platform.minimaxi.com/document/price

**OpenAI SDK**

据说支持（我没调通）

Moonshot / 月之暗面
---------------

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYrlosibEDl3TrbOlKR6Xyib7pz5WECdia9KabmeaWQIJ8YE5HrxV6VPqIlqibUeYZLbbpia35qTGpcqdvw/640?wx_fmt=png&from=appmsg)

**评价**  

很清晰，技术人员很友好

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYrd6sjOBXGBqKOSdNicpTCn4qgCzBhTxsUPKOCzm6Z7BZryeUicp1ooClpEfohh29zOIMrFYPnGDMcQ/640?wx_fmt=png&from=appmsg)

看一眼就知道咋上手了

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYrd6sjOBXGBqKOSdNicpTCn4z4Ubib9g6tqVVm4E0FDuib5DuKXiageLHe3ExMVZPGWYs12aSicgljgLsQ/640?wx_fmt=png&from=appmsg)

少有的附带 cookbook 的 文档

但也有点小问题

比如今天新上的

[上下文缓存](https://mp.weixin.qq.com/s?__biz=MzkyNzY4NDEzNA==&mid=2247483721&idx=1&sn=ba9c803c554a085fc3542f21a56efd34&scene=21#wechat_redirect)  

在长文本QA中，能省钱的功能

省钱计算器是个图片...

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYrd6sjOBXGBqKOSdNicpTCn4NWJflPPYEicyWIOgXNtPXD8ibgQFMMtvYk3LZrf8vm80ANPrTiblgC07A/640?wx_fmt=png&from=appmsg)

**获取 key**

https://platform.moonshot.cn/console/api-keys

**文档**  

https://platform.moonshot.cn/docs

**Playground**

木有

**定价信息**  

https://platform.moonshot.cn/docs/price/chat

**OpenAI SDK**：支持

Qwen / 通义千问
-----------

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYrlosibEDl3TrbOlKR6Xyib7pz5WECdia9KabmeaWQIJ8YE5HrxV6VPqIlqibUeYZLbbpia35qTGpcqdvw/640?wx_fmt=png&from=appmsg)

**评价**  

哎...

哎...

哎...

通义千问/ 灵积 / 阿里云 / 魔搭 /... 确实不知道从哪开始

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYrd6sjOBXGBqKOSdNicpTCn4Qq0SgA1dibJNXf6GQ9JDRzopN7uOnOtkYwVHUceEJ8hAKf2sfNkc1wg/640?wx_fmt=png&from=appmsg)

我咋知道该点哪个？

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYrd6sjOBXGBqKOSdNicpTCn4yknyQCicxibUnd4sEpibZBFQHicsYrzcJ9UlChGbHOnOGaW2ichP4Bxe3Kg/640?wx_fmt=png&from=appmsg)

所以，我的 key 在哪里？

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYrd6sjOBXGBqKOSdNicpTCn4BqDrmg11LMoxIgfunQJNgg3s1GJ8jLN8YkNlmOatBibYz9I7d4a0s4g/640?wx_fmt=png&from=appmsg)

我在哪？我是谁？我该干什么？

实际用下来，模型非常强

但就是得花半小时找文档

我都找到了，放在下面

**获取 key**

https://dashscope.console.aliyun.com/apiKey

**文档**  

https://help.aliyun.com/zh/dashscope/developer-reference

**Playground**

https://dashscope.console.aliyun.com/playground

**定价信息**  

https://dashscope.console.aliyun.com/billing

**OpenAI SDK**：支持

Spark / 讯飞星火
------------

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYrlosibEDl3TrbOlKR6Xyib7pz5WECdia9KabmeaWQIJ8YE5HrxV6VPqIlqibUeYZLbbpia35qTGpcqdvw/640?wx_fmt=png&from=appmsg)

**评价**  

星火的 api 有点独特，文档很复杂

由于产品线太多，所以得找一会儿

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYrd6sjOBXGBqKOSdNicpTCn4EtxHanKdyEnwnbTOBDDiaJsveuf7n8ngJa9Ucle02jd0HraN5j3VHMA/640?wx_fmt=png&from=appmsg)

还好靠前

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYrd6sjOBXGBqKOSdNicpTCn48kPaibxaTibsp6JkufFBWcTqSwT8hLneQWjbldHq8icPY7N3qZRhSVMYQ/640?wx_fmt=png&from=appmsg)

key 是根据项目来的，所以稍微折腾下

和 Qwen 一样

文档不够友好

以及我还没找到 OpenAI SDK 的调用方式

**获取 key**

先创建应用  

https://console.xfyun.cn/app/myapp

在应用里获取 key

https://console.xfyun.cn/services/cbm

**文档**  

https://www.xfyun.cn/doc/spark/Web.html

**Playground**

https://console.xfyun.cn/services/sparkapiCenter

**定价信息**  

https://xinghuo.xfyun.cn/sparkapi

打开链接后需要往下划

**OpenAI SDK**：没找到

Stepfun / 阶跃星辰
--------------

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYrlosibEDl3TrbOlKR6Xyib7pz5WECdia9KabmeaWQIJ8YE5HrxV6VPqIlqibUeYZLbbpia35qTGpcqdvw/640?wx_fmt=png&from=appmsg)

评价  

简介清晰，使用 OpenAI SDK

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYrd6sjOBXGBqKOSdNicpTCn4R3BWdZnTXXiaiaZTlSdq9HHP8uA2RvYjRBHGCjynFMT4KmiaXKnWKVpOQ/640?wx_fmt=png&from=appmsg)

和 Kimi 一样，无缝切换

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYrd6sjOBXGBqKOSdNicpTCn4wUECibyvcJOyAaqQsOcJMJEaba1zDcTgr6kMEAFDmJrBuicy3xSoY83g/640?wx_fmt=png&from=appmsg)

示例也很清晰

吐槽：我总是打成「节约星尘」

**获取 key**

https://platform.stepfun.com/interface-key

**文档**  

https://platform.stepfun.com/docs/overview/concept

**Playground**

木有

**定价信息**  

https://platform.stepfun.com/docs/pricing/details

**OpenAI SDK**：支持

ERNIE / 文心一言
------------

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYrlosibEDl3TrbOlKR6Xyib7pz5WECdia9KabmeaWQIJ8YE5HrxV6VPqIlqibUeYZLbbpia35qTGpcqdvw/640?wx_fmt=png&from=appmsg)

**评价**

广告太多，不想评价

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYrd6sjOBXGBqKOSdNicpTCn4VJXK3M0LRpzMibCmRibgoKoqsnVl83YKRcEcQhGoQWic5icicPEyqhrvNqA/640?wx_fmt=png&from=appmsg)
  

  

结论
--

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYrlosibEDl3TrbOlKR6Xyib7pz5WECdia9KabmeaWQIJ8YE5HrxV6VPqIlqibUeYZLbbpia35qTGpcqdvw/640?wx_fmt=png&from=appmsg)

大模型新势力，在文档方面都还不错

老牌大厂在这块就有所欠缺了

其实国外也差不多

OpenAI/Claude 的 API 都挺好接的

Google 的 API 简直反人性

以及
--

![](https://mmbiz.qpic.cn/mmbiz_png/2icSMc1VBIYrlosibEDl3TrbOlKR6Xyib7pz5WECdia9KabmeaWQIJ8YE5HrxV6VPqIlqibUeYZLbbpia35qTGpcqdvw/640?wx_fmt=png&from=appmsg)

咱公众号基本都是 AI 从业者

很多人也会参加本次 WAIC 大会

在会后，让我们约几场行业精酿局～

分为：数据与训练/安全与对齐/产品与落地 三场  

**报名原则**

1.  必须是从业者，对等分享交流
    
2.  每个厂/组/实验室，最多来两人
    

![](https://mmbiz.qpic.cn/mmbiz_jpg/2icSMc1VBIYrd6sjOBXGBqKOSdNicpTCn4JbjiaQLoNWiccefMmE6JHtLUjaYM1O9qcVYdcFibicdTrqYVeKwGAMeIsw/640?wx_fmt=jpeg)