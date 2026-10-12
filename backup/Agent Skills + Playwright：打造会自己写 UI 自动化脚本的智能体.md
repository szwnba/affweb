> 关注 霍格沃兹软件测试开发 公众号，回复「**资料**」, 领取人工智能测试开发技术合集

上个月，团队里一个做了4年UI自动化的同事找我吐槽。他维护着800多条Playwright用例，那天早上打开报告一看——237条失败了。原因很简单：开发推了一次“不影响功能”的提交，把一批按钮的`data-testid`统一了命名规范。

他改定位器改到凌晨，第二天跟我说了一句话：“脚本写了这么多，为什么还是这么脆弱？”

我说：“因为你的定位规范、等待策略、踩过的坑，全部锁死在硬编码的代码里。AI读不懂，你也改不动。”

他问：“那怎么办？”

我说：“把那些规范抽出来，写成Agent能读懂的东西。让Agent带着规范去写脚本，而不是从零开始猜。”

一、先搞清楚：为什么AI写UI脚本总是“翻车”？
------------------------

很多人第一次用AI生成Playwright脚本，会踩同一个坑：**AI在猜页面。** 

你给它一段自然语言描述——“打开登录页，输入账号密码，点击登录，验证跳转到首页”——它会自信地写出一串`page.click('button.login-btn')`。跑起来大概率报错，因为页面上根本没有`login-btn`这个类名。

AI写的UI自动化，最危险的不是语法错误，是**“想当然”** 。它会编出不存在的选择器，会误判页面加载顺序，会用`waitForTimeout`硬等。这些错误在代码评审时看不出来，在CI上跑起来才暴露。

**根本原因只有一个：AI没有先“看”页面，就开始“写”操作了。** 

二、核心思路：让Agent先侦察，再执行
--------------------

Anthropic官方的`webapp-testing` Skill里，有一个设计叫 **Reconnaissance-Then-Action**。翻译成人话就是：**别着急点，先看看页面到底长什么样。** 

传统UI自动化是：测试工程师理解页面→找元素→设计步骤→写Playwright→机器执行。

Agent+Skill的方式是：**测试工程师定义目标→Agent理解页面→Agent找元素→Agent决定操作→Playwright执行→Agent判断结果。** 

人的职责从“把每一步写出来”，转向“告诉Agent我要验证什么”。这个变化，比生成几行Playwright代码重要得多。

人工智能技术学习交流群
-----------

伙伴们，对AI测试、大模型评测、质量保障感兴趣吗？我们建了一个 **「人工智能测试开发交流群」**，专门用来探讨相关技术、分享资料、互通有无。无论你是正在实践还是好奇探索，都欢迎扫码加入，一起抱团成长！期待与你交流！👇

![](https://mmbiz.qpic.cn/mmbiz_gif/w8gMgicHp6edqQFnk39bpvnwknsRuygMYCkOtNapia4PUSxMNKfUiakAOicgnbzOZkYhpPLNWU5jY6uBHxVwPJcasSrVMPgIYwssNTcrCIjaeLY/640?wx_fmt=gif&from=appmsg&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=3)

三、手把手：搭一个“会自己写脚本”的UI测试Skill
---------------------------

### 第一步：搭目录结构

```
.claude/skills/ui-test-skill/├── SKILL.md              ← 核心指令├── references/│   ├── locator-rules.md   ← 定位器规范│   └── waiting-rules.md   ← 等待策略规范└── scripts/    └── snapshot.py        ← 页面快照工具
```

### 第二步：写SKILL.md的头信息

```
---name: ui-test-skilldescription: 基于Playwright的UI自动化测试技能。当用户需要新增UI测试用例、修复定位器失效、调试页面交互时触发。关键词：UI自动化、Playwright、元素定位、定位失效、脚本报错。when_to_use: 用户需要为Web应用生成或维护Playwright UI自动化测试时使用。allowed-tools: Bash, Read, Write, Edit---
```

### 第三步：写SKILL.md的正文——这是核心

正文最关键的设计是**元素定位规范**和**先侦察再执行的流程**。

腾讯云社区一篇讲“自愈性Skill”的文章里，给了很清晰的定位优先级设计。我把这套规范直接写进了SKILL.md：

```
## 元素定位规范（严格按优先级执行）1. `getByRole` — 首选。基于无障碍角色，UI重构不影响，匹配用户意图2. `getByLabel` — 次选。表单字段的标签，相对稳定3. `getByText` — 可见文本内容，仅用于文本本身是业务语义的场景4. `getByTestId` — 语义定位不够用时的兜底5. ❌ 禁用 XPath — 与DOM结构深度耦合，结构变更必崩6. ❌ 禁用 CSS class — 与样式系统耦合，UI重构时第一个失效原因：我们在2024年经历两次UI大版本重构，每次XPath和CSS class定位器的失效率超过60%，而语义定位器的失效率接近0。
```

然后是**执行流程**：

```
## 执行流程### 步骤1：侦察页面（必须执行，不可跳过）在编写任何操作代码之前，先运行：python scripts/snapshot.py <目标URL>脚本会输出当前页面的可交互元素列表，包含每个元素的 role、name、以及推荐的定位器。### 步骤2：基于快照编写操作根据快照中实际存在的元素，选择定位策略。禁止凭经验猜测选择器。### 步骤3：执行与验证运行脚本。如果失败：- 重新 snapshot，检查元素是否存在- 如果元素存在但定位失败，切换下一优先级定位策略- 如果元素不存在，报告页面结构可能已变化### 步骤4：输出证据每次执行后，截图保存到 screenshots/ 目录，并将 Console 日志和 Network 请求写入日志文件。
```

**这个流程的核心是步骤1。**  它强制Agent在写任何操作之前，先“看”一眼页面。这一步看起来多余，但它把AI从“猜页面”变成了“看页面”，失败率断崖式下降。

### 第四步：用references放定位和等待规范

`references/locator-rules.md`里放详细的定位策略说明和示例。

`references/waiting-rules.md`里放等待策略规范：

```
## 等待策略1. 优先使用 Playwright 的自动等待（actionability checks）2. 需要显式等待时，用 web-first assertions：   await expect(page.getByRole('button', { name: '提交' })).toBeVisible()3. 等待网络请求完成：page.waitForLoadState('networkidle')4. ❌ 禁用 waitForTimeout — 硬编码等待是Flaky Test的最大来源## 四、一个真实的“自愈”场景Skill写好了，Agent怎么“自己修”脚本？假设页面上有一个“提交订单”按钮，原来的定位器是`getByTestId('submit-order')`。开发改版后，`data-testid`变了，脚本报错`element not found`。**没有Skill的Agent**：重新生成一段脚本，可能换了一个同样不稳定的CSS selector，或者编一个不存在的`getByText('提交订单')`——但如果页面上按钮文案是“确认下单”，就再次失败。**有Skill的Agent**：1. 先运行`snapshot.py`，获取当前页面的可交互元素列表2. 在快照中找到“提交订单”对应的元素，发现它的`role=button`，`name=“确认下单”`3. 参照Skill里的定位优先级，`getByRole`是第一优先级4. 把定位器改为`page.getByRole('button', { name: '确认下单' })`5. 重新执行，通过**这就是“自愈”的本质——不是脚本自己会修，是Agent带着规范重新生成，而不是从零猜。**## 五、进阶：用社区现成的Skill起步如果你不想从零写，社区已经有大量现成的Playwright Skill可以直接用。微软官方的`@playwright/cli`提供了Skill安装命令：```bashplaywright-cli install --skills
```

这会把Playwright Skill注册到Claude Code的Skill目录，Agent下次启动就能自动发现。

`tektite-io/playwright-skill`是一个通用型的Playwright自动化Skill，支持Agent自主编写和执行Playwright脚本，从简单页面测试到复杂多步流程都能覆盖。安装方式：

```
npx skills add lackeyjb/playwright-skill --skill playwright-skill --global --yes
```

`wico-playwright-agent-skills`提供了一条命令脚手架，把`playwright-e2e` Skill直接注入项目，同时支持Claude Code、Cursor、GitHub Copilot。

**关键原则：先装社区Skill跑通流程，再根据自己的业务规范定制。** 

六、避坑指南
------

**坑一：让Agent直接写脚本，不先侦察页面。**  这是最大的坑。AI会自信地编出不存在的选择器。SKILL.md里必须强制要求“先snapshot，再操作”。

**坑二：SKILL.md写成Playwright API手册。**  不要教Agent `page.click()`怎么用，它本来就会。你要教的是**你的项目里该用哪些定位器、该避免什么、失败了怎么处理**。这些是AI不知道的。

**坑三：忽略定位规范。**  如果不告诉Agent“禁用XPath”，它一定会用。把定位优先级写进Skill，是脚本稳定性的第一道防线。

**坑四：把自愈当万能药。**  自愈有一个崩溃不具备的失败模式——它可以把一个真实的回归变成一个通过的测试。如果定位器“修”到了一个语义完全不同的元素上，测试会通过，但Bug被掩盖了。自愈操作必须记录完整日志，人工定期审查。

**坑五：执行层交给模型随便控制。**  AI应该出现在拆解层、分析层和自愈逻辑中，但执行层要保持确定性。浏览器操作是高风险动作，不能每一步都由模型来控制。Agent决定“做什么”，Playwright负责“怎么做”。

最后
--

**传统UI自动化的核心是“写脚本”。Agent时代UI自动化的核心是“定义规范”。** 

你把定位优先级、等待策略、失败处理规则写进Skill，Agent每次写脚本都会参照这份规范。它不会用XPath，因为它知道XPath必崩。它会优先用`getByRole`，因为它知道这是最稳定的定位方式。

**你不需要再手写第N版Playwright脚本了。你只需要把规范固化下来，让Agent照着写。** 

下次你面对一个UI频繁改版的项目，别打开编辑器了。先花30分钟写一个UI测试Skill，把定位规范和执行流程写清楚。

**30分钟的投入，换的是未来每一次UI改版时，脚本不再集体崩溃。** 

**推荐学习**
--------

测试智能体评估与自我进化公开课，将系统讲解软件测试智能体技能体系、用例生成智能体技能、测试自动化智能体技能，以及智能体技能的评估方法、智能体评测工具与框架。同时，还将深入剖析反思机制与智能体技能自我进化，帮助你理解如何评估、反思并持续提升测试智能体。

欢迎扫码进群，参加本次公开课，一起探索会反思、能进化的测试智能体。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w8gMgicHp6eeWA7hYuesthw4N620616x0Qc2ZfAqULj13ESbzC2EGmtpreIkACa9mwYU617WztqPWU7y1KmM88gZeCb8R5yNibuwfsFcz1agA/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=1)

### 关于我们

霍格沃兹测试开发学社，隶属于 **测吧（北京）科技有限公司**，是一个面向软件测试爱好者的技术交流社区。

学社围绕现代软件测试工程体系展开，内容涵盖软件测试入门、自动化测试、性能测试、接口测试、测试开发、全栈测试，以及**人工智能测试与 AI 在测试工程中的应用实践**。

我们关注测试工程能力的系统化建设，包括 Python 自动化测试、Java 自动化测试、Web 与 App 自动化、持续集成与质量体系建设，同时探索 AI 驱动的测试设计、用例生成、自动化执行与质量分析方法，沉淀可复用、可落地的测试开发工程经验。

在技术社区与工程实践之外，学社还参与测试工程人才培养体系建设，面向高校提供**测试实训平台**与实践支持，组织开展 **“火焰杯” 软件测试相关技术赛事**，并探索以能力为导向的人才培养模式，包括高校学员**先学习、就业后付款**的实践路径。

同时，学社结合真实行业需求，为在职测试工程师与高潜学员提供**名企大厂 1v1 私教服务**，用于个性化能力提升与工程实践指导。