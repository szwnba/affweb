![](https://mmbiz.qpic.cn/mmbiz_png/giawagr6wPwmDXWgCAoBo6YkeGHkbSQTW4aPcmIM19crTHuEYxLeI700nCiaia00FZPm3iaHDPZewDIicZZ9NchAibLOuWTFWw8dD3biaPcImPgDPI/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=0)

* * *

你是不是也被这些事搞烦了
------------

说出来你可能不信——我之前每个月花在AI API上的钱，够吃好几顿火锅了。

Claude Pro买了，GPT Plus也买了，Cursor还要另付。结果呢？Claude的额度每个月剩一大截就重置了，GPT那边呢，写代码写到一半，rate limit弹出来，卡在那等半小时。

最烦的是token烧得快。你跑一次`git diff`，几百token没了。grep一段日志，又是几百。这些工具输出的东西，你根本控制不了它多长，但钱包替你心疼。

还有那些免费额度——散落在十几个平台上，Kiro有、Qoder有、Pollinations也有，但每个平台都要单独注册、单独管key，我光是记住哪个key对应哪个服务就够呛了。

**后来我发现了OmniRoute，上面这些问题，一次性全解决了。** 

* * *

OmniRoute 是什么东西
---------------

一句话说清楚：**一个本地跑的AI网关，帮你把237个AI供应商的免费额度全部串起来用。** 

![](https://mmbiz.qpic.cn/mmbiz_png/giawagr6wPwmfwlrLA2Iw8gvNvzUNSPgSA6058ZiarMvpywHabT8PpmjEzGSwnLXa3S7a2vOc3vmdmgRoib31RwsKDPfvt0XuECKYXC1Pv3heo/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=1)

它在你电脑上跑，你的IDE、Cursor、Cline、Claude Code，所有请求都走它。它干三件事：

**第一，帮你找最便宜的。**  237个供应商，90多个有免费额度，其中11个永久免费，不用信用卡。OmniRoute帮你盯着，哪个能用就用哪个。

**第二，一个挂了自动换下一个。**  额度用完了？毫秒级切到下一个。供应商挂了？再换一个。你写代码的手根本停不下来，后台悄悄就切了。

**第三，帮你省token。**  内置的RTK + Caveman双重压缩，能砍掉15%到95%的token。我实测下来，工具密集的session里，平均能省89%。同样一个问题，压缩前69个token，压缩后19个，回答质量没差，但token省了七成多。

加起来，这些免费额度聚合到一起，每个月大约有**16亿个免费token**可用。第一个月注册的时候还能多拿一些，大概能到21亿。

* * *

等等，这玩意儿真的免费？
------------

对，OmniRoute本身是MIT开源协议，完全免费，跑在你自己机器上。

它不收你钱，它只是个路由器。你用的token来自各个供应商的免费额度，不是它卖给你的。

你可以这样拼一个**零成本方案**：

| 

供应商

 | 

免费模型

 | 

额度

 |
| --- | --- | --- |
| 

Kiro

 | 

Claude Sonnet 4.5、Haiku 4.5

 | 

每月约50积分

 |
| 

Qoder

 | 

Kimi-K2、DeepSeek-R1

 | 

♾️ 无限

 |
| 

Pollinations

 | 

GPT-5、Claude、Gemini

 | 

无需Key

 |
| 

Cloudflare AI

 | 

50+模型

 | 

每天10K neurons

 |

这几个加一起，个人开发者日常用完全够了。我自己跑了两个月，一分钱没花。

* * *

怎么用
---

![](https://mmbiz.qpic.cn/sz_mmbiz_png/giawagr6wPwlzGqPtS0r0feHSCfYe0jsiaCruF7LZVianzQFf2sulePpkaXSvcyia8jo5SzyUicMeJMQ9CeqU5DNCczo7n1I9hwBHd3WdoZSwLUM/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=2)

三步，五分钟搞定。

**第一步，安装。** 

`npm install -g omniroute  
omniroute`

跑起来之后Dashboard自动弹出来，在`http://localhost:20128`。

**第二步，连免费供应商。** 

Dashboard的Providers页面，点Connect，把Kiro、Pollinations这些免费的都连上。每个供应商有独立的配置向导，跟着走就行。

**第三步，配你的AI工具。** 

Cursor、Cline、Copilot，任何一个都行，把API地址改成：

`Base URL: http://localhost:20128/v1  
API Key:  从Dashboard复制  
Model:    auto`

Model填`auto`最省心——OmniRoute会根据健康状态、配额、成本、延迟，自动选最优的供应商。你也可以选`auto/coding`（偏向代码质量）、`auto/fast`（追求速度）、`auto/cheap`（最省钱）。

**就这么多了。你的所有AI工具，瞬间接入237个供应商的免费额度。** 

* * *

几个我觉得特别值的点
----------

### Token压缩是真的香

OmniRoute内置了10个压缩引擎，最实用的是RTK + Caveman组合。我举个例子你就懂：

压缩前（69 tokens）："The reason your React component is re-rendering is likely because you're creating a new object reference on each render cycle..."

压缩后（19 tokens）："New object ref each render. Inline object prop = new ref = re-render. Wrap in useMemo."

**意思一模一样，token少了七成。**  一天跑几十次coding session，省下来的token够你多用好几个模型。

### 17种路由策略，够你折腾

优先级路由、加权随机、成本优化、round-robin、上下文接力……17种策略随便组合。不想折腾的话，`auto`模式一个字搞定。

我比较喜欢`auto/smart`——它会在保证质量的前提下，有10%的概率去探索没用过的模型，帮你发现新的好东西。

### 本地跑，不碰你的隐私

所有东西跑在你自己机器上。API密钥AES-256加密存着。你的提示词只发给你选的供应商，不经过任何第三方。

对，代码是MIT开源的，想审计随时审计。

### 跨平台，哪儿都能跑

npm、Docker、Windows/macOS/Linux的Electron桌面端，甚至Android Termux也能跑。还有个PWA版本，浏览器直接装。基本上你能想到的平台都覆盖了。

* * *

适合什么人
-----

说白了——

自己掏钱买AI订阅觉得肉疼的开发者。学生党零预算但想要顶级AI辅助。同时用Cursor、Cline、Claude Code好几个工具，想统一管理的人。还有那种被地区限制搞得很烦的——OmniRoute内置三级代理，哪儿都能用。

* * *

跟其他方案比一嘴
--------

LiteLLM和OpenRouter也做类似的事，但：

OmniRoute有**237个供应商**，它们一般100出头。OmniRoute有**90多个免费供应商**，它们少得多。OmniRoute有**Token压缩**，它们没有。OmniRoute有**17种路由策略**，它们三五种。

而且OmniRoute是**完全免费**的，MIT开源。

* * *

试试看
---

`npm install -g omniroute  
omniroute  
# 打开 http://localhost:20128`

GitHub: diegosouzapw/OmniRoute  
官网: omniroute.online

别光收藏不试。装上跑起来，五分钟的事。跑完你会回来谢我的。