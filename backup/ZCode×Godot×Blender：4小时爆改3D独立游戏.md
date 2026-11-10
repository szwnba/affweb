ZCode 插件市场现已上线 Godot 和 Blender 官方插件。通过 ZCode 对话框输入指令，就能直接调用本机 Blender 批量生成 3D 模型，再让 Godot 搭建场景、编写脚本并自动测试。

近期，B 站独立游戏开发者 @夜神不说话 用这套插件完成了一次完整实测。他全程使用 GLM-5.3-Flash，消耗约 3 亿 Tokens，仅使用端内活动赠送的免费额度即完成开发。在不到 4 小时内，他将一款 2D 旧项目重制为 3D 可玩游戏《逃离千禧年》。新版本包含 100 件 3D 低模元件、类似《逃离塔科夫》的网格背包、三个场景组成的循环玩法，以及 PS1/CRT 复古滤镜。

下面我们按照实际开发过程，将这套「ZCode + Godot + Blender」工作流拆解为以下 5 个步骤，供大家参考。

准备工作：开启Godot与Blender插件
----------------------

更新至最新版 ZCode，打开左侧「插件市场」，在底部的「游戏/3D」分类中，找到 Blender、Godot、Tripo 3D、Hyper3D Rodin，以及 Unity、Unreal Engine 等插件。

开启插件后，ZCode 会自动配置本机 CLI 和相关技能，如 godot:setup、godot:cli、blender:cli，之后在输入框中使用 /godot、/blender 命令，或直接指定插件。

此次实测采用 Godot 和 Blender 的组合。Godot（GDScript）体积较小，支持 Headless CLI 命令行导入和语法检查；Blender 则负责低多边形（Low Poly）建模。两者配合，即便是轻量免费的 GLM-5.3-Flash，也能完成从资产制作到游戏组装的开发任务。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/MsUCaeEFPcpiaqtceS1Y1TSU89rhgVV5YGEDicOJ3uQpichhAN7bf8uQEqdNYXic09jIeJEdksM3nib9fRH4RJSVibelk6YuYtdYsLUKYeqb3ic70Y/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=0)

资产盘点与骨架搭建：28分钟跑通可玩闭环
--------------------

### 1.将旧工程迁移至Godot

这次开发的目标，是将此前使用 RPG Maker 制作的 2D Demo《逃离千禧年》重制为 3D 游戏。新版本计划融合《深空当铺》的摆摊循环和《逃离塔科夫》的网格搜刮玩法，整体采用怪核风格。

首先，将旧项目的 GitHub 仓库交给 ZCode，让它评估哪些素材和机制可以迁移到新工程中。

> 提示词：你好，我们现在要来做游戏。这个链接（https://github.com/Yesenmidnight/2000sEscape.git）是我们今年 2 月份用 RPGMAKER 做的《逃离千禧年》，包含类似《逃离塔科夫》的背包系统、视觉滤镜系统、人物行走及美术素材。
> 
> 当前任务：（1）先把项目 clone 到本地；（2）不继续用 RPGMAKER 开发，也不直接在旧项目上改，请分析并梳理里面可复用的素材和核心机制，准备迁移到新的 Godot 工程里。

收到指令后，ZCode 在后台启动了 3 个 Explore 子智能体，并行扫描旧工程的不同模块。约 8 分钟后，ZCode 输出了完整的评估报告，梳理出三类可以复用的内容：

*   约 3300 行网格背包与容器算法，可以迁移为 GDScript。
*   100 个千禧年怀旧物品配置，包括辣条、AD钙奶、游戏卡带等。
*   CRT 滤镜相关公式。

ZCode 还会主动提醒部分默认图块受到 RPG Maker 引擎授权限制，不能直接带入 Godot。

开发者可以先审阅报告，确定保留哪些系统，再进入新工程的开发。

### 2.明确新玩法规格，20 分钟搭出三场景骨架

在确认保留范围后，向 ZCode 一次性给出新版本的场景循环、探索视角与本机 Godot 路径：

> 提示词：把最核心的三个系统（1. 塔科夫式网格背包；2. 场景容器搜刮；3. CRT/VHS 噪点暗角滤镜）直接迁移到 Godot 版，其余功能按以下新设计重做：
> 
> （1）场景与循环：包含「家」「横版街道」「报亭」三个场景。每天从家出发去报亭摆摊，晚上收摊回家睡觉推进天数；
> 
> （2）横版街景探索：支持自选上下班路线，按固定节点推进（如探索 5 次到达）。每到一个节点可搜刮容器转移到背包，并概率触发随机事件；
> 
> （3）室内第一人称环视（家与报亭）：类似《恶魔轮盘赌》，角色固定站位不移动，左右挪动鼠标转动视角观察 3D 房间四周并点击互动；
> 
> （4）本地环境：D 盘根目录已安装 Godot 4.7，使用 GDScript 开发。

约 20 分钟后，ZCode 搭建出了三个场景组成的游戏骨架，并打通了「家 → 街道选路搜刮 → 报亭 → 回家存档」的完整流程。

此时按下 F5，就可以进入游戏试玩。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/MsUCaeEFPcoiaTiaFrVWhIPbEc0wF4aLB3tmBJKx08ia8u1diaIcnVOO9tiaAuHJHia3JQia7iadpvNOiafxFSS6Hl6oSicGIicibdicACP6M8FsCLbCygCs/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=1)

自动跑测与手感打磨：CLI自检+Computer Use真机点按
--------------------------------

每次修改功能后，ZCode 都会进行两层验证，省去人工反复调试的时间。

第一层：Godot Headless CLI 自检。

后台执行 --headless --import 导入资产，检查 Shader 语法和 GDScript 类型推断等问题，并根据报错进行修复。

第二层：Computer Use 实际操作测试。

调用内置的「电脑控制」能力，自动调整窗口位置，通过真实鼠标点击操作游戏并截屏，完成「出门上班 → 选路线 → 探索触发事件 → 弹出双栏搜刮界面」四个步骤的回归测试。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/MsUCaeEFPcoJiawlPUXoIKZPSJU9TFdbyLV2ahHBJ8a0QmbcxibJehwKXAY9OCgPgvzAYvBkzhV95a1JibIKsJSQqVF6l7iaYyqHD5siaYCRHtibY/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=2)

当我们在试玩阶段发现体验细节问题时，可以直接描述现象并附上截图，让 ZCode 修改。

例如，发现物品拖动和旋转时的中心点存在问题，给出这样的指令：

> 提示词：不管我按住物品的任何位置拖，它的图片中心点都应该钉在鼠标指针下面。这样按 R 旋转时才能继续围绕中心点旋转，避免视觉跳切。

经过两轮调整，红绿网格放置预览、跨容器搜刮和物品中心点旋转等功能都完成了修复，整个过程不到 8 分钟。

![](https://mmbiz.qpic.cn/mmbiz_png/MsUCaeEFPcoaSFoL3vsU6kfT8CLq9icHPmFKsNwCibogTa0RNtKJaib4t8UNjGxECJW1WDibaFEHWiaCcYtsSHjXoE61Wbrb9nib7wicrur7I8dj7c/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=3)

3D资产量产：Blender连建100件低模，截图直修穿模
-----------------------------

2D 游戏骨架跑通后，开发进入 3D 资产制作阶段。

这一步主要由 ZCode 调度本机 Blender 完成，包括约 70 件怀旧商品、10 余类家具和容器，以及家与报亭的墙面硬装，合计 100 个 3D 元件。

### 1.先做样板，再分批生成

为使后续资产能够顺利导入 Godot，先让 ZCode 制定统一的建模和导出规范：按 items/、containers/、rooms/ 统一命名、原点与尺寸导出 .glb，以便按 ID 直接关联 Items.json。

先制作 3 个样板模型，验证 Godot 导入流程，再分 5 批批量制作其余资产。

> 提示词：先全部用本机 Blender 把所有建模建完并摆进来。请尽量不要只用简单的圆柱体、长方体敷衍建模，先参考每件怀旧物品真实的外观特征，再做成风格统一的低模，单个物品控制在 128 个面左右。打开允许运行 Python 脚本与自动覆盖保存，分批推进。

### 2.右侧实时检视 + 原生多模态「看图修模」

ZCode 执行 Blender 建模脚本时，可以通过右侧预览面板或 Blender 视口查看模型变化，及时检查墙面、柜台和道具的制作效果。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/MsUCaeEFPcrIMJn62C8RY40UicPZAic8YEbM2SDVDBZyPzuw47SzyxiaQTic8mLb99rflkjC884yA31YlicOia1A7dGGnAITIHl1FibmT0E1PyNJyw/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=4)

如果遇到磁带陷入地面、或者杂物悬空等问题，可以直接截图交给 ZCode，说一句“这两个建模有问题”：

![](https://mmbiz.qpic.cn/mmbiz_png/MsUCaeEFPco0hGiaq2WU8LbIHmgOcib5GxicsNGERWODe6M4uvH0p1v1pWCAdheJSm95uBWlHvvRSRdsWibsSAqhNxhSkJtmiaSkgV8wcIWqlGro/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=5)

GLM-5.3-Flash 根据截图识别出“杂物堆的布料/卷报/酒瓶全飘在半空，纸箱两侧开盖像翅膀一样和箱体脱节”，随即重修落地。最终，5 批共 100 个低模元件全部完成，耗时不到 100 分钟，平均每件模型的制作时间不到 1 分钟。

![](https://mmbiz.qpic.cn/mmbiz_png/MsUCaeEFPcqx5NoibSDn9eThVwJibcziaic8H2icHFsDV747PPVfnEXKEAsdo93AnZg5iar6yuiaFcCzR3BfFdTSl3CNbibnT5UwWhib7WqFMNIZRRRg/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=6)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/MsUCaeEFPcp7lYPyQge38psjDicuafj1OYQ2loJmyV4lt94GVlcuufxQE4gwib5RYRqyNnvjd0ESNW14LnnhHZb5DUygRvaTjovyibozicdlpE0/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=7)

组装：合入Godot，加上PS1+CRT怪核滤镜
------------------------

100 个 .glb 模型准备就绪后，让 ZCode 将它们导入 Godot，完成场景组装和视觉风格化。

> 提示词：好的，非常棒，那么 @godot 开始组装吧！将家和报亭替换为 3D 场景并接入第一人称鼠标环视，加上 PS1 复古材质与低清 CRT 滤镜效果。

ZCode 连续执行了 43 分钟，完成了整套 3D 场景组装与视觉风格化。主要工作包括：

*   场景全面 3D 化：保留原有 HUD 与网格背包逻辑，将「家」与「报亭」替换为 .glb 3D 空间、灯光与第一人称鼠标环视相机。
*   PS1 + CRT 怪核管线：编写 PS1 空间着色器（顶点吸附、颜色抖动、仿射贴图），开启 scaling\_3d/scale=0.4 低分辨率 3D 渲染（UI 保持高清），再叠加老电视 CRT 扫描线滤镜，千禧年怪核味瞬间拉满。
    
*   跨工具自动排坑：自动修复了「Control 根节点下 Node3D 不渲染」「Blender -Y 轴到 glTF +Z 轴朝向反转」等 4 个跨软件深坑，并跑完自动截图序列完成验收。
    

![](https://mmbiz.qpic.cn/mmbiz_png/MsUCaeEFPcpmnv7lZ177FLx9Pto1r2V06fias0WwbzWTXdQDIeMNI88zABwe0efMTGMfHFib2D5yc2dHmyz11f2ibQUaqapmwBQJJ519Wicool4/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=8)

![](https://mmbiz.qpic.cn/mmbiz_png/MsUCaeEFPcpjPfrvW1tFCiabdy1rkEPf0dg7ffw9uibyEA4ic9C49LphUv5V3yw8I7ic6Pu285gc9JTYHbJDbkYMGIkh0dBTl0enRnKebrfgslU/640?wx_fmt=png&from=appmsg&watermark=1#imgIndex=9)

结语
--

从迁移旧项目、搭建三场景玩法循环，到调整网格背包的操作手感，再到调用 Blender 制作 100 件 3D 低模并组装进 Godot，整个开发过程不到 4 小时。全程使用 GLM-5.3-Flash，总消耗约 3 亿 Tokens，使用 ZCode 端内活动赠送的免费额度即可完成。按照开发者的实测情况，传统单人开发模式下，完成同等工作量往往需要一周以上。

这次实测展示了一种新的游戏开发方式：开发者可以用自然语言描述玩法和修改需求，再由 AI Agent 调度 Godot、Blender 等工具，完成资产制作、程序开发和自动测试。

下载最新版 ZCode，在左侧「插件市场 → 游戏/3D」安装并开启 Godot、Blender 等插件，输入 /godot、/blender 就能动手开启你的第一款 3D 游戏项目。

实战案例原作者：B 站 @夜神不说话  

原视频：https://www.bilibili.com/video/BV1baWx6SEGv

下载体验

https://zcode.z.ai/cn

开源仓库

https://github.com/zai-org/ZCode

插件仓库  

zcode-pluginshttps://github.com/zai-org/zcode-plugins

——  关注我们，获取最新动态  ——