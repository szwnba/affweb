你听说过塔罗牌吗？

这是一种神奇的占卜工具，起源于 15 世纪的欧洲。它由 78 张牌组成 - 22 张大阿尔卡纳和 56 张小阿尔卡纳。每张牌都藏着独特的寓意，能帮你探索生活中的困惑，窥探未来的可能。有趣的是，现在塔罗牌不仅仅可以用来占卜，很多人把它当作一面镜子，用来认识自己、探索内心。

当然，科技在进步，我们可以把 AI 和传统塔罗牌结合在一起，让这门古老的智慧焕发新生。

说实话，要搭建一个专业的塔罗牌咨询系统可不是件容易事。一般来说，一个团队得花好几个月才能搞定。不过，有了 FastGPT 的工作流就不一样了，只要简单拖拖拽拽，再配合 Sealos Devbox 开发一点服务，就能搭建出一个专业的塔罗牌咨询系统。

![](https://mmbiz.qpic.cn/mmbiz_jpg/qFG6mghhA4YULOR2oOiaWS05RicoNCiah2tVfXP7b17cBl6lpvUHYD3FqKru7rs4b0b20drNsVE8EXVDPiaFHShaeA/640?wx_fmt=jpeg&from=appmsg)

FastGPT 提供的可视化界面超级好用，它可以把复杂的塔罗牌解读变得简单直观。只需通过简单的节点连接就能实现专业级的塔罗牌咨询服务。来，让我们一起看看怎么用 FastGPT 打造一个智能塔罗牌系统吧！

> 注意：本项目的塔罗牌插图来自于 https://github.com/LindseyB/tarot-api

### 信息咨询

![](https://mmbiz.qpic.cn/mmbiz_png/qFG6mghhA4YULOR2oOiaWS05RicoNCiah2tyOpia7mJ4yy4153jUu0wEicG1RGZg3jTbTQkLWCJ6gEPZTVXynpgE7EA/640?wx_fmt=png&from=appmsg)

### 卡牌抽取

![](https://mmbiz.qpic.cn/mmbiz_png/qFG6mghhA4YULOR2oOiaWS05RicoNCiah2t6gasWxMae2mxhia3HtJzGqiaBTZpSu55FtvoQAXb5tZKUBcYCE2bHb2Q/640?wx_fmt=png&from=appmsg)

### 卡牌初分析

![](https://mmbiz.qpic.cn/mmbiz_png/qFG6mghhA4YULOR2oOiaWS05RicoNCiah2tM2Lribc5MJtwba025YGVBBsJz1wOOuA08RvNiaARIPDZ9BjrSgdib5JOg/640?wx_fmt=png&from=appmsg)

### 结果细讨论

![](https://mmbiz.qpic.cn/mmbiz_png/qFG6mghhA4YULOR2oOiaWS05RicoNCiah2tDJDnVakG4MRKD9FoWsLDjVVlpVs091Y8W3iaGwI1yXZPRjlAB7G7RrA/640?wx_fmt=png&from=appmsg)

为什么要做 AI 塔罗机器人？
---------------

在开发这个项目前，我深入调研了塔罗占卜市场，发现了三个核心痛点：

1.  专业门槛高，优质服务稀缺 🎴  
    塔罗牌解读需要掌握 78 张牌的正逆位共 156 种含义，还要熟练运用 10+种经典牌阵，理解数百种牌面组合。同时还需要具备占星学、心理学等跨学科知识。这导致优质塔罗师极度稀缺，供不应求。
    
2.  使用体验不足 ⚡  
    预约热门塔罗师通常需要等待 1-2 周，单次占卜要花 30-60分钟。线下店铺少且营业时间有限，想要追问还得重新预约，极不便捷。
    
3.  互动性欠佳 🤝  
    一对一咨询容易产生压力，缺乏有效的反馈渠道。用户无法与他人交流经验，得到的建议也往往缺乏可执行性，后续服务体验割裂。
    

基于这些痛点，我们打造了基于 FastGPT 的 AI 塔罗机器人，带来三大突破：

1.  在专业性方面  
    我们构建了完整的塔罗知识体系，通过标准化输出确保解读质量稳定可控，有效避免主观偏差。
    
2.  在便捷性方面 ⚡  
    我们提供 7×24 小时在线服务，支持多人同时占卜互动，秒级响应且支持深度追问对话。
    
3.  在普惠性方面 💝  
    我们提供完全免费且不限次数的咨询服务。用户可以在群内交流经验，激发集体智慧。
    

通过这些创新，我们让塔罗占卜服务变得更加专业可靠 (💫)、便捷高效 (⚡)、普惠共享 (💝)，让每个人都能便捷地获得优质的塔罗咨询服务。

FastGPT 工作流设计
-------------

让我们来看看如何使用 FastGPT 搭建一个专业的塔罗牌咨询系统。整个工作流程设计如下：

![](https://mmbiz.qpic.cn/mmbiz_png/qFG6mghhA4YULOR2oOiaWS05RicoNCiah2tY8t4aZvNcJs6rU9nxlIzH13z2uxG9btUz90CMfxBWLZXKsNCqpZ1XQ/640?wx_fmt=png&from=appmsg)

### 主要工作流程 🔄

系统的工作流程分为以下几个主要阶段：

**1、初始化阶段**

首先是用户引导配置，系统会通过友好的对话引导用户进入正确的咨询流程：

![](https://mmbiz.qpic.cn/mmbiz_png/qFG6mghhA4YULOR2oOiaWS05RicoNCiah2tRywdFJTvse2dFTmapRGBibiaTBvES16KN9rUco6uoa9nx4IiaQIcWG3iag/640?wx_fmt=png&from=appmsg)

**2、问题类型判断**

系统会智能判断用户的需求类型，分为三种情况：

*   继续已有的塔罗解读
    
*   开始新的占卜流程
    
*   提供塔罗知识介绍
    

![](https://mmbiz.qpic.cn/mmbiz_png/qFG6mghhA4YULOR2oOiaWS05RicoNCiah2t11kSickePrghgvjHK4yaiaqkH0xWY5Tj9mhOJ0Yk2RKicX3iaaudgSuYeg/640?wx_fmt=png&from=appmsg)

**3、信息收集阶段**

系统会仔细提取用户输入中的关键信息，确保准确理解用户的咨询需求：

![](https://mmbiz.qpic.cn/mmbiz_png/qFG6mghhA4YULOR2oOiaWS05RicoNCiah2txFwAt5b179XXrsQRfyByormW7VQ10eB1x26TOWwFQV9icTyvseddPcQ/640?wx_fmt=png&from=appmsg)

### 核心功能模块 🔧

系统包含以下核心功能模块：

*   1
    
*   2
    
*   3
    
*   4
    
*   5
    
*   6
    

```
// 使用 AI 模型提取用户输入中的关键信息(该部分为工作流的解释)const contentExtract = {  model: "gpt-4o-mini",  inputs: ["userQuestion", "questionType", "timeFrame", "spreadType"],  confirmStatus: boolean}
```

塔罗牌抽取：

> HTTP 请求获取塔罗牌结果

![](https://mmbiz.qpic.cn/mmbiz_png/qFG6mghhA4YULOR2oOiaWS05RicoNCiah2t3nN2l4nqtAl42Fy92oXFGjSJQRRkaRWc3B0Zz5MXLia7peAKPF2Bkdw/640?wx_fmt=png&from=appmsg)

结果解读：

![](https://mmbiz.qpic.cn/mmbiz_png/qFG6mghhA4YULOR2oOiaWS05RicoNCiah2tqDh8scay1MdOmCq3Pn3KhxlGNOjp8PBv8HlPcISnQhslZndw6tcx5g/640?wx_fmt=png&from=appmsg)

### 状态管理与交互流程 📊

系统采用全局变量管理用户会话状态，并进行信息完整性检查：

![](https://mmbiz.qpic.cn/mmbiz_png/qFG6mghhA4YULOR2oOiaWS05RicoNCiah2tibYf5HrLwticuU2yr6icQdmSkm0DWrrnFASC4HkxSzQs9lvrek1h0Ix3w/640?wx_fmt=png&from=appmsg)

整个交互过程包含以下步骤：

1.  引导式对话 - 通过友好的对话引导用户表达需求
    
2.  信息收集与确认 - 收集并确认用户的咨询问题和相关信息
    
3.  塔罗牌抽取与展示 - 进行塔罗牌抽取并展示结果
    
4.  专业解读与建议 - 提供专业的塔罗牌解读和建议
    

塔罗牌后端服务实现 🎴
------------

### API 接口设计

#### 图片服务 /api/cards/\[id\]/image

*   1
    
*   2
    

```
// 获取塔罗牌图片GET /api/cards/{id}/image
```

#### 抽牌服务 /api/readings

*   1
    
*   2
    
*   3
    
*   4
    
*   5
    
*   6
    
*   7
    
*   8
    
*   9
    
*   10
    
*   11
    
*   12
    

```
// 创建新的塔罗牌阵POST /api/readingsRequest {  spreadType: "SINGLE" | "THREE_CARDS" | "CELTIC_CROSS" | "RELATIONSHIP",  question?: string}Response {  success: boolean,  spread: string,  cards: TarotCard[],  timestamp: string}
```

### 核心数据结构 📊

#### 塔罗牌数据

*   1
    
*   2
    
*   3
    
*   4
    
*   5
    
*   6
    
*   7
    
*   8
    
*   9
    
*   10
    
*   11
    
*   12
    

```
interface TarotCard {  id: number;           // 卡牌ID  name: string;         // 中文名称  nameEn: string;       // 英文名称  type: 'major' | 'minor'; // 大阿卡纳或小阿卡纳  suit?: string;        // 牌组类型(权杖/圣杯/宝剑/金币)  description: string;  // 描述  uprightMeaning: string;   // 正位含义  reversedMeaning: string;  // 逆位含义  isReversed?: boolean;     // 是否逆位  position?: string;        // 在牌阵中的位置}
```

#### 牌阵类型

*   1
    
*   2
    
*   3
    
*   4
    
*   5
    
*   6
    

```
const SPREAD_TYPES = {  '单牌': 'SINGLE',  '三牌阵': 'THREE_CARDS',  '凯尔特十字阵': 'CELTIC_CROSS',  '关系牌阵': 'RELATIONSHIP'} as const;
```

### 关键功能实现 🛠️

*   1
    
*   2
    
*   3
    
*   4
    
*   5
    
*   6
    
*   7
    
*   8
    
*   9
    
*   10
    
*   11
    
*   12
    

```
卡牌抽取逻辑async function drawCards(deck: TarotCard[], spreadType: string) {  // 根据牌阵类型确定抽牌数量  const count = SPREAD_CARDS_COUNT[spreadType];    // 随机抽取卡牌并添加位置信息  return shuffled.slice(0, count).map((card, index) => ({    ...card,    isReversed: Math.random() > 0.5,    position: POSITION_MEANINGS[spreadType][index]  }));}
```

#### 图片处理

*   1
    
*   2
    
*   3
    
*   4
    
*   5
    
*   6
    
*   7
    
*   8
    
*   9
    
*   10
    
*   11
    
*   12
    
*   13
    
*   14
    
*   15
    

```
// 构建图片文件路径const imagePath = path.join(  process.cwd(),   'data',   'tarot',   'cards',   `${fileName}.png`);// 返回图片数据return new NextResponse(imageBuffer, {  headers: {    'Content-Type': 'image/png',    'Cache-Control': 'public, max-age=31536000'  }});
```

完整后端代码可参考：**https://github.com/Jiangween/tarot-app**

再看一个感情问题的案例
-----------

![](https://mmbiz.qpic.cn/mmbiz_jpg/qFG6mghhA4YULOR2oOiaWS05RicoNCiah2tsXicJOlC2sFVQ4j3yBLNo5hBRZ8fX9T9kjgFpLYs1Kumibia9Cl19cG9g/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/qFG6mghhA4YULOR2oOiaWS05RicoNCiah2tge8ia8ClyIxCDQV57nZpRIpCXibJqe0icsibzMcKlM7rKZd59ahrCd1dfQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/qFG6mghhA4YULOR2oOiaWS05RicoNCiah2tNspfzkzrSFyiacA6Bqk8my0gIXwDp7LQhEZmjRASibn7PssKz9Hvbfpw/640?wx_fmt=png&from=appmsg)

我只能说：

![](https://mmbiz.qpic.cn/mmbiz_jpg/qFG6mghhA4YULOR2oOiaWS05RicoNCiah2tjLJic2MpYXhgNicUGI4RINNKRibHblywickUm9yFO3oyz8wypkGt4maG4Q/640?wx_fmt=jpeg&from=appmsg)

总结
--

本文详细介绍了如何利用 FastGPT 打造一个专业的 AI 塔罗牌咨询系统。通过可视化的工作流设计，我们将复杂的塔罗牌解读流程变得简单直观。从信息咨询、卡牌抽取到结果分析，每个环节都经过精心设计，最终实现了一个专业、便捷且普惠的塔罗牌咨询服务。

通过这个案例，我们可以看到 FastGPT 在处理复杂对话流程时的强大能力。同时也证明了 AI 技术与传统文化相结合可以创造出令人惊喜的创新应用。通过这种结合，我们让古老的塔罗牌焕发出新的生命力，让更多人能够便捷地获得优质的塔罗咨询服务。

最后是福利时刻，想获取本文工作流的同学，只需要👇

关注公众号

后台回复「**124**」，限时免费领取！

↓ ↓ ↓ ↓ ↓

![](https://mmbiz.qpic.cn/mmbiz_png/73icnXvmN7wOI0rvtgpcAvoymzwXc4GsnicX7nxUa21NoWg2J48JaZ95yswdzic3MZ3Hagz97n5zdXiaMtm7ic36oTA/640?wx_fmt=png)

**加入 FastGPT 开源社区**

让 AI 更懂你的知识

**🏠官网链接**

https://fastgpt.cn

**🐙GitHub 地址**

https://github.com/labring/FastGPT

**📑访问 Sealos 文档**

https://doc.fastgpt.cn/

**🏘️逛逛论坛**

https://forum.laf.run/

### 往期推荐

[

70 个群都来问我的 AI 日报，是这么做的。

2024-11-14

![](https://mmbiz.qpic.cn/mmbiz_jpg/qFG6mghhA4aRJR1TEMM2QYZwzu8ABENYh2LbbazX8g1KQkv8Sz7wHlNDJYHfysuuEq8qZzXIGxiaFp1z75ZMxBA/640?wx_fmt=jpeg)


](https://mp.weixin.qq.com/s?__biz=MzU1MzY4NzQ1OA==&mid=2247522963&idx=1&sn=416dd5da50ed23181c955af2d072dd4e&scene=21#wechat_redirect)

[

扔掉 Google 翻译！这个超强 AI 翻译工作流才是你的最佳选择

2024-10-30

![](https://mmbiz.qpic.cn/mmbiz_jpg/qFG6mghhA4Y6fOUM7Y7icvcagRAJWQmdK3SN0gfG9wzN4MCPtNyqib7Mv8jkc6fgzkrLMk71HCR7DhTibWn8hvCXA/640?wx_fmt=jpeg)


](https://mp.weixin.qq.com/s?__biz=MzU1MzY4NzQ1OA==&mid=2247522842&idx=1&sn=c3800f7acfebca62cb4226325c74499e&scene=21#wechat_redirect)

[

AI 居然说我是牛马，还画出了我牛马的一生，我绷不住了...

2024-10-25

![](https://mmbiz.qpic.cn/mmbiz_jpg/qFG6mghhA4Zbzic9UsP9Lk6tibyUAL2nhDGKMiaaOuTZH1HPXcGMhsODWFoF83rWKwEVtVQDQibichj4vkKh3xD6Ojw/640?wx_fmt=jpeg)


](https://mp.weixin.qq.com/s?__biz=MzU1MzY4NzQ1OA==&mid=2247522688&idx=1&sn=76212e602be952447ad6150c41692500&scene=21#wechat_redirect)

[

别再手动处理数据了！FastGPT 这个新功能让你提前下班

2024-11-05

![](https://mmbiz.qpic.cn/mmbiz_jpg/qFG6mghhA4YXZgytibHSBO8N42dcJkwk7TOMteMQibgFcWNtuiaaz7553SVjPH00ZH9tjhibKaQNTF0uvByxsL5MLA/640?wx_fmt=jpeg)


](https://mp.weixin.qq.com/s?__biz=MzU1MzY4NzQ1OA==&mid=2247522916&idx=1&sn=0210b30ca949fd34c2f5a58c01a11b14&scene=21#wechat_redirect)

[

不用写一行代码，使用 FastGPT 搭建 GitHub Issues 自动总结机器人

2024-10-21

![](https://mmbiz.qpic.cn/mmbiz_jpg/qFG6mghhA4b4cPzTcyibWAZ4ibZBjLdEtOdf9Tj3sIIk35ZTLmpPIxyic6VMOd7XHibSMDApJaUjiaHSoTTIn4xwRbA/640?wx_fmt=jpeg)


](https://mp.weixin.qq.com/s?__biz=MzU1MzY4NzQ1OA==&mid=2247522626&idx=1&sn=d321250235ab2729ec12932fba602d52&scene=21#wechat_redirect)

### 关于 FastGPT

**FastGPT 是一款基于 LLM 大模型的开源 AI 知识库构建平台。提供了开箱即用的数据处理、模型调用、RAG 检索、可视化 AI 工作流编排等能力，帮助您轻松构建复杂的 AI 应用。** 

![](https://mmbiz.qpic.cn/mmbiz_png/qFG6mghhA4YULOR2oOiaWS05RicoNCiah2ticUUN6zVNxmmRiaUbalJ6Vje8gWvHTBhw8QDTekpDdtLPgCpicIt9UMww/640?wx_fmt=png&from=appmsg)