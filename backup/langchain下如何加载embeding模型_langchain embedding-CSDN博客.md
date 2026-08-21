背景
--

在学习本地构建RAG的过程中，embeding是不可避免的一步。在官方的示例文档中，使用的是openAI的embeding模型，这意味着需要先获取openAI key，并且这个过程中会产生计费。对于我们学习研究来说不太友好。因此，考虑下载预训练的模型到本地，然后使用本地的模型来进行embeding，从而避免产生额外费用。

本篇文章主要描述如何下载embeding模型并在langchain下使用embeding模型。

模型选择
----

目前主流的embeding模型项目包括FlagEmbedding, Ember, GTE and E5。这里我们选择FlagEmbedding作为示例，其他的类似。FlagEmbedding专注于检索增强llm领域，目前包括以下项目:

*   **Long-Context LLM**: Activation Beacon, LongLLM QLoRA
*   **Fine-tuning of LM** : LM-Cocktail
*   **Embedding Model**: Visualized-BGE, BGE-M3, LLM Embedder, BGE Embedding
*   **Reranker Model**: llm rerankers, BGE Reranker
*   **Benchmark**: C-MTEB

现阶段，我们只需要用到其中的Embedding Model。现有的模型包括：

![](https://i-blog.csdnimg.cn/direct/8d150c3e6f9042b3ac5cec1003cff3a9.jpeg)
  
![](https://i-blog.csdnimg.cn/direct/7f360ae693454520a1c42507858a246a.jpeg)

在这里我们选择bge-small-zh-v1.5为例，来进行后续的流程。

模型下载
----

这里介绍两种模型下载的方法。

### AutoModel.from\_pretrained

使用`transformers`库中的`AutoModel.from_pretrained`方法来下载模型。下面是如何下载`bge-small-zh-v1.5`模型的代码示例：

```
`ini
 代码解读
from transformers import AutoModel, AutoTokenizer
model_name = "BAAI/bge-small-zh-v1.5"
# 下载模型
model = AutoModel.from_pretrained(model_name)
# 下载分词器
tokenizer = AutoTokenizer.from_pretrained(model_name)` 

*   1
*   2
*   3
*   4
*   5
*   6
*   7
*   8

*   1
*   2
*   3
*   4
*   5
*   6
*   7
*   8


```

模型的下载可能会花费一些时间和网络流量，具体取决于你的网络速度和模型的大小。模型一旦下载，通常会被缓存在`~/.cache/huggingface/transformers`目录下，这样在未来的调用中可以快速加载。如果想要自定义安装下载路径，可以

```
`ini
 代码解读
model = AutoModel.from_pretrained(model_name, cache_dir="/path/to/your/cache/directory")` 

*   1
*   2
*   3

*   1
*   2
*   3


```

可能的问题：**ConnectionError**: (ProtocolError(‘Connection aborted.’, ConnectionResetError(10054, ‘远程主机强迫关闭了一个现有的连接。’。 这种情况一般是因为网络原因无法下载。只能尝试离线手动下载。

### 官网下载

官网下载的方式需要我们去huggingface的官网去进行下载，国内可以去hf-mirror.com 镜像网站去下载，以上述模型为例。搜索到相应模型后，切换到第二个tab，然后点击下载按钮进行下载。  
![](https://i-blog.csdnimg.cn/direct/fd205dd43290425cb8ff658c4a865bac.jpeg)
  
下载完成后将相关文件放到同一个目录下。以我的电脑为例，将下载的文件放置到D:\\model\\embeding\\bge-small-zh-v1.5目录下，之后在构建向量数据库的时候通过下面方式进行引用

```
`ini
 代码解读
vectorstore = Chroma.from_documents(documents=splits, embedding=HuggingFaceEmbeddings(model_name='D:\model\embeding\bge-small-zh-v1.5'))` 

*   1
*   2
*   3

*   1
*   2
*   3


```

### 如何系统的去学习AI大模型LLM ？

作为一名热心肠的互联网老兵，我意识到有很多经验和知识值得分享给大家，也可以通过我们的能力和经验解答大家在人工智能学习中的很多困惑，所以在工作繁忙的情况下还是坚持各种整理和分享。

但苦于知识传播途径有限，很多互联网行业朋友无法获得正确的资料得到学习提升，故此将并将**重要的 `AI大模型资料` 包括AI大模型入门学习思维导图、精品AI大模型学习书籍手册、视频教程、实战学习等录播视频免费分享出来**。

所有资料 ⚡️ ，朋友们如果有需要全套 《**LLM大模型入门+进阶学习资源包**》，**扫码获取~**

> 👉CSDN大礼包🎁：全网最全《LLM大模型入门+进阶学习资源包》免费分享**（安全链接，放心点击）**👈

​![](https://i-blog.csdnimg.cn/blog_migrate/ac5f55a43d628ef0b8457325d4edf956.jpeg)

### 一、全套AGI大模型学习路线

**AI大模型时代的学习之旅：从基础到前沿，掌握人工智能的核心技能！**

![](https://i-blog.csdnimg.cn/blog_migrate/88364745a21655bfcd37f027c18079f5.png)

### 二、640套AI大模型报告合集

这套包含640份报告的合集，涵盖了AI大模型的理论研究、技术实现、行业应用等多个方面。无论您是科研人员、工程师，还是对AI大模型感兴趣的爱好者，这套报告合集都将为您提供宝贵的信息和启示。

![](https://i-blog.csdnimg.cn/blog_migrate/65b8d4a2456d7e87091dd30dd77b9506.png)

### 三、AI大模型经典PDF籍

随着人工智能技术的飞速发展，AI大模型已经成为了当今科技领域的一大热点。这些大型预训练模型，如GPT-3、BERT、XLNet等，以其强大的语言理解和生成能力，正在改变我们对人工智能的认识。 那以下这些PDF籍就是非常不错的学习资源。

![](https://i-blog.csdnimg.cn/blog_migrate/f24835641125fd8514ca947213ceb376.png)

![](https://i-blog.csdnimg.cn/blog_migrate/07ad636353ea67f1b425bf4becfe48b3.jpeg)

#### 四、AI大模型商业化落地方案

![](https://i-blog.csdnimg.cn/blog_migrate/f0f3a6d06d3f05c037af554a955041ee.png)

#### 阶段1：AI大模型时代的基础理解

*   **目标**：了解AI大模型的基本概念、发展历程和核心原理。
*   **内容**：
    *   L1.1 人工智能简述与大模型起源
    *   L1.2 大模型与通用人工智能
    *   L1.3 GPT模型的发展历程
    *   L1.4 模型工程  
        \- L1.4.1 知识大模型  
        \- L1.4.2 生产大模型  
        \- L1.4.3 模型工程方法论  
        \- L1.4.4 模型工程实践
    *   L1.5 GPT应用案例

#### 阶段2：AI大模型API应用开发工程

*   **目标**：掌握AI大模型API的使用和开发，以及相关的编程技能。
*   **内容**：
    *   L2.1 API接口  
        \- L2.1.1 OpenAI API接口  
        \- L2.1.2 Python接口接入  
        \- L2.1.3 BOT工具类框架  
        \- L2.1.4 代码示例
    *   L2.2 Prompt框架  
        \- L2.2.1 什么是Prompt  
        \- L2.2.2 Prompt框架应用现状  
        \- L2.2.3 基于GPTAS的Prompt框架  
        \- L2.2.4 Prompt框架与Thought  
        \- L2.2.5 Prompt框架与提示词
    *   L2.3 流水线工程  
        \- L2.3.1 流水线工程的概念  
        \- L2.3.2 流水线工程的优点  
        \- L2.3.3 流水线工程的应用
    *   L2.4 总结与展望

#### 阶段3：AI大模型应用架构实践

*   **目标**：深入理解AI大模型的应用架构，并能够进行私有化部署。
*   **内容**：
    *   L3.1 Agent模型框架  
        \- L3.1.1 Agent模型框架的设计理念  
        \- L3.1.2 Agent模型框架的核心组件  
        \- L3.1.3 Agent模型框架的实现细节
    *   L3.2 MetaGPT  
        \- L3.2.1 MetaGPT的基本概念  
        \- L3.2.2 MetaGPT的工作原理  
        \- L3.2.3 MetaGPT的应用场景
    *   L3.3 ChatGLM  
        \- L3.3.1 ChatGLM的特点  
        \- L3.3.2 ChatGLM的开发环境  
        \- L3.3.3 ChatGLM的使用示例
    *   L3.4 LLAMA  
        \- L3.4.1 LLAMA的特点  
        \- L3.4.2 LLAMA的开发环境  
        \- L3.4.3 LLAMA的使用示例
    *   L3.5 其他大模型介绍

#### 阶段4：AI大模型私有化部署

*   **目标**：掌握多种AI大模型的私有化部署，包括多模态和特定领域模型。
*   **内容**：
    *   L4.1 模型私有化部署概述
    *   L4.2 模型私有化部署的关键技术
    *   L4.3 模型私有化部署的实施步骤
    *   L4.4 模型私有化部署的应用场景

#### 学习计划：

*   **阶段1**：1-2个月，建立AI大模型的基础知识体系。
*   **阶段2**：2-3个月，专注于API应用开发能力的提升。
*   **阶段3**：3-4个月，深入实践AI大模型的应用架构和私有化部署。
*   **阶段4**：4-5个月，专注于高级模型的应用和部署。

###### 这份完整版的所有 ⚡️ 大模型 LLM 学习资料已经上传CSDN，朋友们如果需要可以微信扫描下方CSDN官方认证二维码免费领取【`保证100%免费`】

全套 《**LLM大模型入门+进阶学习资源包**》**↓↓↓** **获取~**

> 👉CSDN大礼包🎁：全网最全《LLM大模型入门+进阶学习资源包》免费分享**（安全链接，放心点击）**👈

​![](https://i-blog.csdnimg.cn/blog_migrate/ac5f55a43d628ef0b8457325d4edf956.jpeg)