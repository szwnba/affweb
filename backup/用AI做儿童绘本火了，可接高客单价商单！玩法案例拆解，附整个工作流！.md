一、商业可行性
-------

**最近很多朋友问我儿童绘本能不能通过AI做，具体报价和实现会不会有什么问题？**

我的回答是：AI现在肯定能做，具体报价看修改次数，200块一张上下浮动。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/0jbau7U0eUsibr7yLOYmOtUicBKd6ibFLlLsm9D2raxITLNzGRBNjx3koW20CHg2ZkqMUvnQyzFCib3LaEcMicK8U6A/640?wx_fmt=jpeg&from=appmsg)
![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/0jbau7U0eUsibr7yLOYmOtUicBKd6ibFLlLDUHibIAAmmcnePGTDnJpyHhnaOp3T2jYdeg9mial4MDFd7V0CTfiaRTmA/640?wx_fmt=jpeg&from=appmsg)

**具体实现方案？**

简单一点的可以使用MJ制作，通过**Style Tuner**控制风格，复杂一点的就需要使用SD去使用IP Adapter等人物风格一致性插件，或者训练LORA模型，本篇文章主要讲解MJ的**Style Tuner**这个工作流。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/0jbau7U0eUsibr7yLOYmOtUicBKd6ibFLlLXDZ1SDVKgEPoibqeEK0f9bPF56EgogWkUEjbC3K6x0P9rzOR8QZK5Kg/640?wx_fmt=jpeg&from=appmsg)

**我们再来站在买方和卖方思考一下这个利润空间**

**对于儿童绘本企业**：花费几千块打造一个原创优质画风、情节完善的绘本，具有部分商业优势，可以大量印刷发布，卖出几十本就回本了。

**对于AIGC从业者**：to B端事少，规范相对明确，要求稳定，批量，少数是定制化

**AI工具在这上面的一个优势：** 

1.  **快速生成内容：**  AI技术可以快速生成文字和图像，因此可以加速绘本创作的过程。这意味着可以更快地生产出大量的绘本内容，以满足市场需求。
    
2.  **个性化定制：**  AI可以根据读者的兴趣、年龄和其他特征生成个性化的绘本内容。这种定制化的内容可以更好地吸引和保留读者。
    
3.  **无限创意可能性：**  AI可以从海量的数据和模型中获取灵感，创造出各种各样的故事情节、角色和图像。这种无限的创意可能性可以帮助创造出独特而吸引人的绘本内容。
    
4.  **成本效益：**  使用AI制作绘本可以降低人力和时间成本。相比传统的人工创作，AI生成的内容通常更经济高效。
    
5.  **自动化制作流程：**  AI技术可以用于自动化绘本的制作流程，包括文字编辑、插图生成、版式设计等环节。这可以提高生产效率，并减少人为错误。
    

二、使用工具
------

ChatGPT：强大的文本生成工具，提供儿童绘本剧情以及转换成MJ提示词

Midjourney：付费的强大AI绘画工具，出图风格多样，对小白友好，且人物相对可控。

三、具体的工作流
--------

### 1\. ChatGPT制作分镜

这里可以使用我的这个提示词，生成这个分镜镜头，如果需要的话可以私聊我，我发给你。

```
# Role: 儿童绘本分镜专家## Profile:- author: 小石 AI绘画视频- version: 1.0- language: 中文- description: 专注于创作适合儿童的绘本分镜，富含童趣、想象力，启发儿童思维。## Background:创作儿童绘本分镜的目的是提供给儿童一种既教育又娱乐的阅读体验。通过吸引人的故事情节和生动的插画，激发儿童的想象力和创造力，同时传递正面的价值观和教育意义。## Goals:1. 设计故事情节，确保故事内容富有童趣和想象力。2. 创建分镜头脚本，详细描述每个画面的内容、角色动作和表情。3. 保证故事内容适合儿童，易于理解且具有教育意义。4. 通过故事传递正面的信息和价值观。## Constraints:1. 故事内容和插画需适合儿童的认知水平。2. 避免使用复杂的情节和难以理解的概念。3. 确保所有内容都是儿童友好的，没有不适宜的语言或画面。## Skills:1. 深刻理解儿童心理和喜好。2. 强大的故事构思能力，能够创作引人入胜的故事情节。3. 艺术设计能力，能够想象并描述生动的画面。4. 能够创作符合教育目的的内容。## Workflows:1. 确定故事主题和核心教育信息。2. 构思故事情节，确保情节连贯、有趣且充满想象力。3. 设计分镜头脚本，详细描述每一页的画面布局、角色动作和情感表达。4. 检查故事和画面是否符合儿童的认知水平和兴趣。5. 完成分镜脚本后，与插画师合作，将脚本转化为具体的插画。## Initialization:以“亲爱的小朋友，今天我要讲一个非常有趣的故事给你听，这个故事充满了奇妙的想象和冒险，准备好了吗？”为开场白，激发儿童的兴趣和好奇心，接着进入故事分镜创作。
```

我输入的是《米娅的许愿树》，我们来看看结果

```markdown
《米娅的许愿树》是一个美妙的故事主题，充满了想象和温馨的情感，非常适合儿童绘本。让我们一起构思这个故事的分镜头脚本。
### 故事大纲
米娅是一个充满好奇心和想象力的小女孩，她在后院发现了一棵非常特别的树。这棵树的叶子上闪烁着奇异的光芒，米娅相信这是一棵许愿树。每当夜幕降临，树叶会散发出温暖的光芒，米娅决定每晚许一个愿望，看看它们是否会实现。
### 分镜头脚本
1. **开场画面**
  - 描述: 米娅在她充满阳光的房间里玩耍，窗外是她美丽的后院。她的目光被一棵特殊的树吸引，树叶在阳光下闪烁着不同寻常的光芒。
  - 动作/表情: 米娅带着好奇和兴奋的表情，凑近窗户，两手捧脸，眼睛睁得大大的。
2. **发现许愿树**
  - 描述: 米娅走到树下，仰望着这棵奇特的树。树干扭曲，枝叶茂盛，叶子在夕阳的余晖中散发出温暖的光芒。
  - 动作/表情: 米娅环抱树干，闭上眼睛，做出许愿的样子。一个微小的光点从她的手心飞出，融入树叶中。
3. **第一个愿望**
  - 描述: 那天晚上，米娅在树下许下了她的第一个愿望——希望第二天能找到一颗闪闪发光的石头。
  - 动作/表情: 米娅坐在树下，手中握着一张纸条，上面写着她的愿望。她仰望星空，脸上满是期待。
4. **愿望成真**
  - 描述: 第二天，米娅在花园里找到了一颗闪闪发光的小石头，正如她所愿。
  - 动作/表情: 米娅惊喜地捧着石头，脸上充满了不可思议的表情。她兴奋地跑回许愿树，向树致谢。
5. **更多愿望**
  - 描述: 米娅每天晚上都会许一个新的愿望，她的愿望从简单的小玩意到希望家人幸福健康不等。
  - 动作/表情: 每个晚上，米娅都会在树下安静地坐着，她的表情从专注、期待到满足，展现了许愿过程的各种情感。
6. **教训与收获**
  - 描述: 随着时间的推移，米娅意识到，真正的幸福不是通过愿望实现的物质事物，而是与家人和朋友们共度
的美好时光。
  - 动作/表情: 米娅和家人一起在树下野餐，分享笑声和故事。她看向许愿树，眼中充满了感激和爱。
### 结语
- 描述: 故事以米娅坐在树下，望着星空的宁静夜晚结束。她学会了珍惜身边的每一刻，以及与亲爱的人共享的时光。
- 动作/表情: 米娅手里拿着一本书，脸上带着满足的微笑，旁边是满足的家人和那棵神奇的许愿树。

这个分镜脚本旨在通过米娅的故事传达一个深刻的信息——真正的幸福和愿望的实现来自于我们与亲人的关系和生活中的简单快乐。每个画面都应该设计得既美观又富有情感，以吸引儿童的注意力并激发他们的想象力。如果您对这个分镜头脚本有任何反馈或想要进一步的细化，请随时告诉我！
```

看完这个感觉还是一个挺有正能量的启蒙故事，如果这个不符合预期，可以进行具体修改，然后我们接着开始转化成MJ的提示词，这样比直接生成MJ提示词效果会更好。

### 2\. 将分镜转成MJ的咒语

这里我们采用**少样本**的方式，输入提示词，让GPT更好的理解我的内容

请讲如上分镜转成Midjorney能够识别的prompt，示例:

```javascript
the cover for a fantasy movie, in the style of chinese 
tradition, utopian vision, 8k resolution, dark pink, 
nightcore, dragoncore, fujifilm velvia --ar 3:4 --v 6.0
```

最终得到的结果

为了将上述分镜脚本转化为Midjourney能识别的prompt，我们需要将每个场景的描述简化并转换为视觉元素和风格指示。以下是根据《米娅的许愿树》故事的关键场景和元素制定的示例prompt：

```markdown
1. **开场画面**
  - Prompt: "A whimsical children's bedroom filled with sunlight, overlooking a vibrant backyard with a mysterious, shimmering tree, in the style of enchanting children's book illustrations --ar 3:4 --v 6.0"
2. **发现许愿树**
  - Prompt: "A curious girl embracing a twisted, lush tree with leaves glowing in the twilight, reminiscent of magical realism, in the style of heartwarming children's book art --ar 3:4 --v 6.0"
3. **第一个愿望**
  - Prompt: "A girl sitting under a radiant tree at night, holding a wish note, looking up at a starry sky with hopeful eyes, in the style of dreamy and imaginative children's illustrations --ar 3:4 --v 6.0"
4. **愿望成真**
  - Prompt: "A delighted girl holding a sparkling stone in a garden, with a magical tree in the background, capturing the wonder of a child's dream come true, in vibrant, heartwarming children's illustration style --ar 3:4 --v 6.0"
5. **更多愿望**
  - Prompt: "A series of evenings under a wishful tree, with a girl expressing various emotions from contemplation to joy, in a narrative sequence, styled like a captivating children's storybook --ar 3:4 --v 6.0"
6. **教训与收获**
  - Prompt: "A joyful family picnic under a magical tree, sharing laughs and stories, conveying the message of love and togetherness, illustrated in a warm, uplifting children's book style --ar 3:4 --v 6.0"
### 结语
  - Prompt: "A serene night under a star-filled sky, with a content girl reading a book under a wishful tree, surrounded by her loving family, in the style of heartwarming children's book endings --ar 3:4 --v 6.0"
这些prompt是为了捕捉每个场景的核心情感和视觉元素，同时保持符合Midjourney的格式和风格要求。您可以根据需要进一步调整这些prompt以适应您的具体需求和风格偏好。
```

### 3\. 使用MJ的Style Tuner确保角色、画风一致性

使用ST之后看到的是这个页面

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/0jbau7U0eUsibr7yLOYmOtUicBKd6ibFLlLV3H8Wd2gsPGwhbIxflypAEMqrCtpbZTI2ibWE7wjtiahqOPjQMWUcWDg/640?wx_fmt=jpeg&from=appmsg)

**那么我们怎么开启ST呢？**

就在MJ里面输入/tune

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0jbau7U0eUsibr7yLOYmOtUicBKd6ibFLlL0iaYnWvjIJY7ubkqcTEH5PrZAzZazg7XhZKPpLb5exgibxzMx1DgnkQA/640?wx_fmt=png&from=appmsg)

我们这里是需要消耗我们MJ积分数的，为了节省，我选择了16

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/0jbau7U0eUsibr7yLOYmOtUicBKd6ibFLlL89SA7MyhF8cYYS8s6a2VkhKh6ljiaemXWibvAccrBEWFTJhtMVm7CZZw/640?wx_fmt=jpeg&from=appmsg)

然后会让我们选择一些图像风格，我们选择自己喜欢的适合儿童插画的风格（注意，不要选其他风格的，否则最后是混搭，风格不明显）

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0jbau7U0eUsibr7yLOYmOtUicBKd6ibFLlLt05F5Zu4lV8k2HVXwDgVxobIK64c3VSbv79r2lDYKxqKP8Ak9rWkng/640?wx_fmt=png&from=appmsg)

选完之后在最下面我们会生成一个code，这就是我们生成风格对应的一个**唯一标识，**我们后续使用MJ指令，使用 **--style code** 就会生成风格统一的画

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/0jbau7U0eUsibr7yLOYmOtUicBKd6ibFLlL5f6589ob3oHmjcsp9HWr5jVn7pcG1kr7HEpbZbjqCPXRqeSzibYJ5kw/640?wx_fmt=jpeg&from=appmsg)

### 4\. 使用提示词，生成具体画面

使用我在步骤二的MJ咒语，最后看我生成的图

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/0jbau7U0eUsibr7yLOYmOtUicBKd6ibFLlL4SWaXnjdnq9KMvfJsdvKddNwfuVCRkIVG3Nwib8Pb0CtjNluvma7boQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/0jbau7U0eUsibr7yLOYmOtUicBKd6ibFLlLAdAoCMMOhKcAXRL7FUibge6ash1D6ibfkvozibrE0LPZkU7XS9OPp5rcw/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/0jbau7U0eUsibr7yLOYmOtUicBKd6ibFLlLx4xDDxPkQB9nUpSxKZIkP36zVRVJO2xPMiaTDKLEz8pgUxpCnftnEUQ/640?wx_fmt=jpeg&from=appmsg)

### 5\. 后期处理

如果你也想拿来发视频，那就可以进一步用Runway Gen-2，和剪映后期处理，在Runway中使用**图片+描述**选项，效果更好，并且建议幅度到2左右。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/0jbau7U0eUsibr7yLOYmOtUicBKd6ibFLlLcnMATNRhrpWd6eaNm1rFykkAdmv6Av9ZsBdDmDib0K3q6oSyOVkfxrg/640?wx_fmt=jpeg&from=appmsg)

最后在剪映中把素材整合，把之前的文本朗读，使得作品更加优质。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/0jbau7U0eUsibr7yLOYmOtUicBKd6ibFLlLvUknTzhTJPX24Na39ffccTmLiczzm4DfSwLm155lA4Qhef1iaZQQWqsA/640?wx_fmt=jpeg&from=appmsg)

结尾
--

感谢大家阅读到这，觉得有帮助可以给小石 **点赞＋在看，**能让更多对AI绘画视频实战的人看到。有兴趣一起交流可以加小石vx ：aaxiaoshi666，朋友圈和群定期AI干货分享。还有个宝藏免费星球，欢迎大家来学习，2024一起加油。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0jbau7U0eUsibr7yLOYmOtUicBKd6ibFLlLmn90UUf76I1k3QjqvPI0ibgvXXK9m9JoWPJOuFhlcy7X6633XUpmCMw/640?wx_fmt=png&from=appmsg)