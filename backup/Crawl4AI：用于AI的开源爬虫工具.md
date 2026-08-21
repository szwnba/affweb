_关注 **AI 技能**，开启智能生活！__![](https://mmbiz.qpic.cn/mmbiz_png/b96CibCt70iaajvl7fD4ZCicMcjhXMp1v6UibM134tIsO1j5yqHyNhh9arj090oAL7zGhRJRq6cFqFOlDZMleLl4pw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)
_

pCrawl4AI v0.2.0 🕷️🤖

项目概述
----

*   **背景**：在信息化时代，网络数据的采集和处理变得尤为重要。Crawl4AI 应运而生，旨在简化网页爬取过程，并从中提取有用信息，使其易于供大型语言模型（LLMs）和其他AI应用使用。
    
*   **目标**：本项目的主要目标是提高网络爬虫的效率和效果，实现高效率、高质量的数据提取，并支持多种数据处理策略。
    
*   **项目简介**：Crawl4AI 能够将语义标记的数据块提取成 JSON 格式，提供干净的 HTML 和 Markdown 文件，这些都是为了支持检索增强生成（RAG）、模型微调以及 AI 聊天机器人的开发而设计。通过其强大的爬取功能和对多 URL 的支持，Crawl4AI 可以轻松地集成为库或服务器，并提供 Docker 容器来简化设置流程。
    
*   **主要功能**：
    

*   **高效的网页爬取**：支持同时对多个URL进行爬取，快速提取数据。
    
*   **执行自定义JavaScript**：在爬取前执行JS脚本，如点击加载更多按钮。
    
*   **支持多种内容提取策略**：包括基于主题、正则表达式、句子等的分块策略；余弦聚类、LLM等提取策略。
    
*   **CSS选择器支持**：可指定CSS选择器来提取特定内容。
    
*   **传递指令/关键词以细化提取**：允许用户定义特定指令或关键词优化内容提取结果。
    
*   **数据格式化输出**：将提取的数据块转换成 JSON，提供清洁的 HTML 和 Markdown 文件，方便进一步处理和使用。
    
*   **替换媒体标签**：在抓取的内容中用 ALT 文本替换图像等媒体标签，以提升内容的可访问性和解析度。
    

*   **特点**：
    

1.  **高效且提取有价值的数据**：Crawl4AI设计用于快速而有效地提取网页中的关键信息。
    
2.  **适合LLM的输出格式**：支持JSON、清理后的 HTML 和 Markdown等格式，适合语言模型和其他 AI 应用。
    
3.  **支持同时多个 URL**：能够处理多个网址的数据抓取，大幅提高工作效率。
    
4.  **用 ALT 替换媒体标签**：增强了对非文本内容的处理，使得最终的数据更加完整和有用。
    

安装与配置
-----

### 开始 🚀

要开始使用 Crawl4AI，只需访问我们的 Web 应用程序 crawl4ai.uccode.io（即将准备就绪）并输入您要抓取的 URL。该应用程序将处理 URL 并为您提供各种格式的提取数据。

### 安装 💻

有两种方法可以使用 Crawl4AI：作为 Python 项目中的库或作为独立的本地服务器。

#### 使用 Crawl4AI 作为库 📚

若要将 Crawl4AI 安装为库，请按照下列步骤操作：

1.  从 GitHub 安装包：
    

```
pip install git+https://github.com/unclecode/crawl4ai.git
```

或者，您可以克隆存储库并在本地安装软件包：

```
virtualenv venvsource venv/bin/activategit clone https://github.com/unclecode/crawl4ai.gitcd crawl4aipip install -e .
```

2.  在 Python 脚本中导入必要的模块：
    

```
from crawl4ai.web_crawler import WebCrawlerfrom crawl4ai.models import UrlModelimport os
```

3.  创建 WebCrawler 实例并指定数据库路径：
    

```
crawler = WebCrawler(db_path='crawler_data.db')
```

4.  执行单页爬取或多页爬取，并传递相应的参数：
    

```
# 单页爬取single_url = UrlModel(url='https://kidocode.com', forced=False)result = crawl4ai.fetch_page(    single_url,     provider= "openai/gpt-3.5-turbo",     api_token = os.getenv('OPENAI_API_KEY'),     extract_blocks_flag=True,    word_count_threshold=5 # 最小字数阈值，用于判断 HTML 标签是否为值得提取的块)# 多页爬取urls = [    UrlModel(url='http://example.com', forced=False),    UrlModel(url='http://example.org', forced=False)]results = crawl4ai.fetch_pages(    urls,     provider= "openai/gpt-3.5-turbo",     api_token = os.getenv('OPENAI_API_KEY'),     extract_blocks_flag=True,     word_count_threshold=5)for res in results:    print(res.model_dump())
```

首次运行将下载适用于 Selenium 的 Chrome 驱动程序，并在当前目录中创建一个 SQLite 数据库文件 `crawler_data.db` 以存储已爬网数据。

#### 将 Crawl4AI 作为本地服务器🚀运行

若要将 Crawl4AI 作为独立的本地服务器运行，请按照下列步骤操作：

1.  克隆存储库：
    

```
git clone https://github.com/unclecode/crawl4ai.git
```

2.  导航到项目目录：
    

```
cd crawl4ai
```

3.  打开 `crawler/config.py` 并设置您喜欢的 LLM 提供程序和 API 令牌。
    
4.  构建 Docker 镜像：
    

```
docker build -t crawl4ai .
```

对于 Mac 用户，请改用以下命令：

```
docker build --platform linux/amd64 -t crawl4ai .
```

5.  运行 Docker 容器：
    

```
docker run -d -p 8000:80 crawl4ai
```

6.  访问应用程序 http://localhost:8000。
    

此代码向 localhost 上运行的 Crawl4AI 服务器发送 POST 请求，指定目标 URL （ https://example.com ） 和所需的选项 （ groq\_api\_token ， include\_raw\_html ， 和 forced ）。服务器处理请求并以 JSON 格式返回已爬网数据。

选择最适合您需求的方法。如果您想将 Crawl4AI 集成到您现有的 Python 项目中，请将其安装为库。如果您希望将 Crawl4AI 作为独立服务运行并通过 API 端点与之交互，建议使用 Docker 将其作为本地服务器运行。

请务必检查以设置所需的环境变量 `config.py`。

### 配置说明

*   配置文件通常位于项目根目录下的 `config.json`，可配置项包括API端点、日志级别等。
    
*   环境变量如 `OPENAI_API_KEY` 需在系统环境中设置以使用特定的服务。
    

使用指南
----

### 基本使用

*   **启动爬虫**：
    
    ```
    from crawl4ai import WebCrawlercrawler = WebCrawler()result = crawler.run(url="https://www.example.com")
    ```
    
*   **停止和监控项目**：使用命令行工具或日志文件来监控爬虫的运行状态和性能。
    

### 示例代码

*   **执行自定义JavaScript并提取内容**：
    
    ```
    from crawl4ai import WebCrawler, LocalSeleniumCrawlerStrategyjs_code = "document.querySelector('button.load-more').click();"strategy = LocalSeleniumCrawlerStrategy(js_code=js_code)crawler = WebCrawler(strategy=strategy)result = crawler.run(url="https://www.example.com")
    ```
    

### 常见问题

*   **Q: 如何处理爬虫在特定网站上的反爬措施？**
    

*   **A**: 使用自定义用户代理或IP代理池，以及适当的访问频率控制。
    

文档与资源
-----

### API文档

*   访问 Crawl4AI API 文档 了解每个API的详细描述和用法。
    

### 参考资源

*   Crawl4AI GitHub 仓库
    
*   Python 网络爬虫教程
    

授权协议
----

*   本项目采用 Apache 2.0 License。点击查看完整的许可证文本。
    

> 注：本文内容仅供参考，具体项目特性请参照官方 GitHub 页面的最新说明。
> 
> https://github.com/unclecode/crawl4ai

如喜欢本文，请点击右上角，把文章分享到朋友圈  
如有想了解学习的技术点，请留言给若飞安排分享

**·END·**

![](https://mmbiz.qpic.cn/mmbiz_gif/dTxkmqQ6SznicxdpxUKbBLoJzSlpvNfyfeGn8PIB1Wx5kSbhECECnibDwEYfQrkyyjQibSo1zMUX5sJo4KzcibF9GQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1)

**因公众号更改推送规则，请点“在看”并加“星标”第一时间获取精彩技术分享**

![](https://mmbiz.qpic.cn/mmbiz_jpg/qzQDpGHXpeSjpr4YBq68XEKLYkWibTMkDvqd5gD8G09spTqXDNS1BGCicOgPgG0HTyv2Hib5mxumm3LPzQicCPXa0g/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

进ChatGPT群请加若飞，暗号 “gpt”