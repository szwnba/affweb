因为Jev的出现，UI自动化有了一个新范式

VOL. 01

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sSWVCTSbgZWq4l1MCPY3RfHVNKEEznuazbmibq81QzJcSmGn2Aqsk1ibMJ36heXb7Nv1UsXJg5V4lx8hycpcFciap82piaHY4SXgTntjdp3kJiaU/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=0)

因为 Jev 的出现， **UI 自动化测试出现了新范式。**  真正的UI自动化可能要到来了。

以前我们做 UI 自动化，基本都是：

text

```
定位元素 → 点击/输入 → 断言 → 下一步
```

测试工程师需要提前把每一个元素、每一个操作都定义好。

比如：

python

```
page.locator("#username").fill("test001")page.locator("#password").fill("123456")page.locator("#login").click()
```

这套方案最大的问题大家应该都遇到过。

**页面一改，脚本就容易挂。** 

换个按钮、改个 DOM、调整一下前端组件，原来的 XPath、CSS Selector 就可能失效。

而 Jev 给我的启发是：

**浏览器操作，其实不一定需要一个大模型每一步都“思考”。** 

页面已经在那里了，输入框、按钮、下拉框这些元素也都在那里。

真正需要 AI 做的事情可能只是：

**下一步应该操作哪个元素？**

所以我觉得可以尝试一套新的 UI 自动化架构：

**Jev + Playwright + 大模型。** 

大模型负责理解测试意图。

比如：

测试用户登录功能，输入账号密码并完成登录。

Playwright 负责真正操作浏览器。

而 Jev 只负责做一个非常简单的决策：

**下一步点什么、输入什么、操作哪个元素。** 

比如当前页面有：

text

```
1. 用户名输入框2. 密码输入框3. 登录按钮4. 注册按钮
```

Jev 不需要生成代码，也不需要输出一大段自然语言。

只需要：

json

```
{  "action": "click",  "target": 3}
```

然后交给 Playwright 执行。

执行完成以后，再读取页面状态，继续判断下一步。

整个过程变成：

text

```
读取页面↓Jev判断下一步↓Playwright执行↓重新读取页面↓Jev继续判断
```

这和传统 UI 自动化最大的区别就是：

**以前是“脚本决定怎么操作”，现在可以变成“测试意图 + AI 决定怎么操作”。** 

而且这里还有一个更值得做的方向：

让 UI 自动化摆脱固定元素

比如原来的登录按钮是：

text

```
#loginButton
```

前端改版以后，这个 ID 没了。

传统脚本：

**直接报错。** 

AI Agent 则可以根据按钮文字、元素类型、DOM 结构、页面上下文等信息，重新判断：

这个“登录”按钮就是我要找的元素。

然后继续执行。

这样做的意义就不只是：

**AI 帮测试工程师写 Playwright。** 

而是让 UI 自动化从：

**元素驱动 → 意图驱动。** 

当然，测试和普通 Browser Agent 还有一个很大的区别：

**不能让 AI 自己觉得“操作成功了”就算 Pass。** 

操作可以交给 AI，但结果必须由明确的断言判断：

text

```
URL 是否正确页面元素是否存在接口返回是否正确业务数据是否发生变化
```

所以我比较看好的一套组合是：

**LLM：理解测试目标**

**Jev：决定下一步操作**

**Playwright：执行浏览器操作**

**Assertion：判断测试结果**

比如测试目标只是：

测试登录功能，使用正常账号登录，验证用户能够进入首页。

LLM先理解这个测试目标，把它拆成具体的操作和预期结果。

Jev负责根据当前页面状态，决定下一步应该操作哪个元素，比如找到用户名输入框、密码输入框、登录按钮。

Playwright负责真正执行这些操作。

操作完成以后，就进入 **Assertion（断言）**。

Assertion并不是让AI“看起来判断一下成功没成功”，而是把预期结果转换成真正可以执行的验证条件。

比如：

python

```
assert page.url.endswith("/home")expect(page.get_by_text("欢迎回来")).to_be_visible()expect(page.locator(".user-avatar")).to_be_visible()
```

全部满足，测试 **PASS**。

有一个条件不满足，测试 **FAIL**，然后再把失败的页面状态、错误信息交给LLM分析原因。

所以整个链路其实是：

**LLM理解 → Jev决策 → Playwright执行 → Assertion验证 → LLM分析**

**![](https://mmbiz.qpic.cn/sz_mmbiz_png/sSWVCTSbgZUgJYCBlNJ8ZwyGcYXCOKTVNOhytSQrs8JLofKBbNojoFJqibcqjlbD8T8jcT3jASrvUrAnkR4Q1e8EdV6lX4iaBaF5oZau5fmWk/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=1)**

这可能才是 AI 驱动 UI 自动化比较实际的一条路线。

不是把 Selenium、Playwright 这些东西扔掉。

而是在它们上面加一个**会判断下一步怎么走的 Agent**。

以后测试工程师写的可能不再是：

text

```
点击这个按钮输入这个参数再点击那个按钮检查页面有没有某个元素
```

而是：

**测试登录功能，使用正常账号登录，验证用户能够进入首页。** 

剩下的，让 Agent 自己走。

这才是我理解的 **AI 原生驱动 UI 自动化**。

[别只会让 AI 写测试用例，这 5 个 Skill 才是真正能提效的](https://mp.weixin.qq.com/s?__biz=MzcwMzEwNTM1NQ==&mid=2247484005&idx=1&sn=2797d0f02f82098ff315c0c7d143a30d&scene=21#wechat_redirect)[零基础入行软件测试，2026年到底该怎么学](https://mp.weixin.qq.com/s?__biz=MzcwMzEwNTM1NQ==&mid=2247484039&idx=1&sn=128565201341c2a1aaba256932cacb0c&scene=21#wechat_redirect)[面试了几个测试：真正会测试的人，反而不太会面试](https://mp.weixin.qq.com/s?__biz=MzcwMzEwNTM1NQ==&mid=2247483999&idx=1&sn=e6313ac06c0204f4728ed9ac2e36ab6d&scene=21#wechat_redirect)[自动化测试的下一站](https://mp.weixin.qq.com/s?__biz=MzcwMzEwNTM1NQ==&mid=2247483993&idx=1&sn=127064bbdff7aa3ccdeacb05a3cdc466&scene=21#wechat_redirect)