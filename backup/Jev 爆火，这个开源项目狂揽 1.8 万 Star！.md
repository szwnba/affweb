最近几天，一款名叫 **Jev** 的模型火遍 AI 圈，被开发者们玩疯了，官方 API 一度被挤到无法调用。

它是由前 OpenAI 研究员创办的 TypeSafe AI 发布，其最大的特点**是不会聊天，也不写文字**。

但给它一段内容，再提几个问题能在几百毫秒内响应返回选哪个、打几分、有几成把握。

用过大模型做分类的朋友应该知道，哪怕一个简单的「是」或「否」，它也得先输出一段分析。

又慢又费 token，而 Jev 输入每百万 token 只要 0.042 美元，输出干脆免费。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/snxIHWuwQon4A3nNNuvmORzaLtE6jjpuJkXSX7KnAVgTAZeWMwt1sMcM09JkO7xnuicNnI0knZXCINFVU8jJD9ibNgjyFvWEk411FL66w8Bes/640?wx_fmt=png&from=appmsg#imgIndex=0)

正好解决了现有模型的两大痛点，因此刚发布就爆火，各种玩法层出不穷。

有人让 Jev 来操控电脑，比如 Browser Use 团队就用它来驱动浏览器去自动化查询机票信息。

从打开网页，到刷出苏黎世飞伦敦的航班，全程只用 7.1 秒，花费仅 0.0039 美元，下图原速实录。

![](https://mmbiz.qpic.cn/mmbiz_gif/snxIHWuwQomNbeiboMKiad43lMwibrVlCicZdgbmF7QXs2hiagEeviaLNDYDnf9tibJKQ88ey4IFjhGdhe3EpBnYR5fA7oIYwqL9dtIJ3n2Mrqc9e8/640?wx_fmt=gif&from=appmsg#imgIndex=1)

浏览器能操控，电脑也不在话下，开发者 Andy Gao 用 Jev 给自己的 Mac 做了个语音助手。

每句指令该点哪、该打开什么，都交给 Jev 来判断，快得有点离谱。

他对着麦克风说「打开备忘录，新建一条……」，话还没说完，备忘录就已经弹出来了。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/snxIHWuwQokfEwQgUwREPIYB36bMpicqLdXyDWe0uE0WCicUUmSIY79lNWJWc89KWcLK2RzmGFTUXMIKI4MAM0MMicuTr8Toj9ia5du0nxJ9oQI/640?wx_fmt=png&from=appmsg#imgIndex=2)

操控电脑还算正经用途，更有趣的是，有开发者拿 Jev 和 GPT-6 Astra 组队打《我的世界》。

Astra 负责规划路线和目标，Jev 负责每一步的走位和动作选择，一个动脑一个动手。

只用 8 分 43 秒就通关，整局下来 Astra 花了 0.96 美元，Jev 只花了 1 美分。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/snxIHWuwQomxsGzLiaIsiboXWFZ2bqk8zBfAmQfw4Bh8Q1IweicORRU8NERczdw7TnwU8UBbhu2YqZQsHXHZ5EVR6dk9nhr2Q4XZSMYHsAgNG4/640?wx_fmt=png&from=appmsg#imgIndex=3)

不过 Jev 是闭源的 API，模型拿不到手，数据也需要传到 TypeSafe 的服务器上。

就在 Jev 发布后短短两天，GitHub 上就冒出了至少六个复刻开源项目。

其中有人拿 Qwen 的小模型，在笔记本上不到两个小时就训出了一个接口同款的决策模型。

在复刻项目里 Star 数涨得最快的，是一个叫 **laya** 的开源项目，**5 天时间就暴涨 1.8 万 Star**。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/snxIHWuwQom8zbu3rCYhLkprqHHJbkGTvet7IVVhcNB4c8kMweoDtKNucU2NmL4UEJGPj557qDwwuFyZuESw22TS5LT3waBHS6oqnIufHFY/640?wx_fmt=png&from=appmsg#imgIndex=4)

作者 Nandakishor M 在博客里说，自己去年就发过这类决策模型的论文，看到 Jev 后决定做一个开源版本。

laya 的用法和 Jev 几乎一样，同样支持**选择题、打分题、是非题**三种题型。

区别在于它采用 Apache 2.0 协议开源，模型权重可下载本地部署，参数最高 0.4B，普通电脑配置就能跑。

laya 和 Jev 对比，在 typed-decisions 基准上，微调后的 laya 准确率 0.766，Jev 是 0.727。

AG News 新闻分类上是 0.950 对 0.910，衡量置信度靠不靠谱的校准误差，laya 是 0.081，Jev 是 0.246。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/snxIHWuwQok7lQj0U6QkNcshTL518krBhkvLgrdFj9FnHMn7DZxGnXV0GSuClL5qQL1EpL8qdicA1yze3g6hK2icgAEnG5iaibhrcXr7JyEHXSY/640?wx_fmt=png&from=appmsg#imgIndex=5)

当然，Jev 这边的数字来自第三方公开测评，两边的测试条件并不一样。

而且选项一多，Jev 仍然占优。比如 Banking77 这种 77 个意图的分类，Jev 是 0.870，laya 只有 0.425。

速度倒是 laya 的强项，在一张 T4 显卡上，回答单个问题只要 33 毫秒，一次问 10 个问题，平均每题 7 毫秒左右。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/snxIHWuwQomx6rcYaUemMo623qKjayUKEzX7qZkcIokBkR9hVl6IO7g0ia0sD8WKWGtbXvxicKt4QSibzvMe2zXsYaR2lDoF8nyE4Rc3kpcS5Q/640?wx_fmt=png&from=appmsg#imgIndex=6)

作者挺坦诚的，在 README 文件里说：赢过 Jev 的那个成绩是微调之后才拿到的，基础模型直接用效果一般。

为此，还将微调 notebook 开放了给我们，在 Kaggle 免费的双 T4 GPU 上跑 4 到 5 个小时就能训完。

laya 还准备了三个模型，内置的 Router 会先识别输入的语言，再交给对应的模型处理，支持 100 多种语言。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/snxIHWuwQokhNibywLn99DYyiaM2qTSKnkckPbP9T8IIa6MYhQgpwxBFXaDAGsiaIsZR0HP1aOuINS0ibkH6C2ibL74haZU90kaZAtibKHKrtIwCE/640?wx_fmt=png&from=appmsg#imgIndex=7)

另外还内置了模型路由、提示词注入防护、内容审核、工单分诊几套现成模板，拿来就能用。

每个答案都附带置信度，把握高的自动处理，把握低的转给人工复核。

想先体验的朋友，可以直接打开 Hugging Face 上的在线 Demo，填入内容和问题就能看到结果。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/snxIHWuwQolfEkL6NMAL9NFZZiaX6KdkFI5hsVchLo6TfEP3CcbefYQtPIQiaF1KlpydgQEibEtagPCibhVicSWG8SarZiaDETyZ12anzSDQZ15nI/640?wx_fmt=png&from=appmsg#imgIndex=8)

要在本地部署也很简单，准备好 Python 3.10 以上的环境，一行命令就能装好。

```nginx
pip install laya
```

装完之后用 `Router` 加载模型，把内容和问题传给 `predict` 就能拿到答案。

### 写在最后

所以 laya 比较适合看重数据隐私，又经常要用模型做判断，或对内容做审核的团队。

再说回 Jev，这一周据我观察，关于它的讨论两极分化的挺严重。

有人说它补齐了 Agent 时代缺的那块拼图，也有人觉得它只是包装过的分类器。

我觉得，说它是分类器没错，Jev 强在速度、成本和置信度校准，聪明程度并没有超过大模型。

但分类器能做到这么便宜、这么快，恰好说明 AI 应用里有大量的活，只要一个判断就够了。

接下来 Agent 里会不会多出一层专门做判断的小模型，这个让我们拭目以待。

GitHub 项目地址：https://github.com/NandhaKishorM/laya

今天的分享到此结束，感谢大家抽空阅读，我们下期再见，Respect！