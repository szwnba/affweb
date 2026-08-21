你是否曾想过，如果有一个工具，能够理解你的意图并自动执行复杂的网络数据抓取任务，那会怎样？ScrapeGraphAI\[1\] 就是这样一个工具，它利用最新的人工智能技术，让数据提取变得前所未有地简单。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/ac0vwH1QkxAnKBveu9TyG3xlpIBiapYUdbYRV1Eunj0AIf0IABDmsCrqevffb44Gfnbuodzm2AnmvBMDIXOxicCA/640?wx_fmt=jpeg&from=appmsg)

**ScrapeGraphAI** 是一个用于网络抓取 Python 库，它使用大语言模型（LLM）和直接图为网站、文档和 XML 文件创建抓取管道。只需说出您想要提取哪些信息，它就会为您完成！

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/ac0vwH1QkxAnKBveu9TyG3xlpIBiapYUd7ia1F2Uw7unliaWbqVHicrMPLs85flAzOMz8BYV7je0h1Z1HOuL23WoRw/640?wx_fmt=jpeg&from=appmsg)

工具特点
----

*   简单易用：只需输入 API 密钥，您就可以在几秒钟内抓取数千个网页！
    
*   开发便捷：你只需要实现几行代码，工作就完成了。
    
*   专注业务：有了这个库，您可以节省数小时的时间，因为您只需要设置项目，人工智能就会为您完成一切。
    

快速开始
----

### 在线示例

**1.官方 Streamlit**

> https://scrapegraph-ai-demo.streamlit.app/

![](https://mmbiz.qpic.cn/sz_mmbiz_png/ac0vwH1QkxAnKBveu9TyG3xlpIBiapYUd0qSlZVIE7znXT2jN0bEIPTXOn8eQ8XuA6EvsjzLDgbTsZ5qnjIF0Rg/640?wx_fmt=png&from=appmsg)

**2.Google Colab**

> https://colab.research.google.com/drive/1sEZBonBMGP44CtO6GQTwAlL0BGJXjtfd

### 本地安装

使用 pip 安装 scrapegraphai：

`pip install scrapegraphai  
`

此外，您还需要安装 Playwright\[2\] 抓取客户端渲染（由 JavaScript 动态渲染）的网页：

`playwright install  
`

> Playwright 是一个强大的 Python 库，仅用一个 API 即可自动执行 Chromium、Firefox、WebKit 等主流浏览器自动化操作。

使用示例
----

ScrapeGraphAI 支持通过 API 使用不同的 LLM，例如 OpenAI、Groq、Azure 和 Gemini，或使用 Ollama 的本地模型。

ScrapeGraphAI 内置了 3 种网页爬取流程：

*   `SmartScraperGraph`：仅需要用户提示词和输入源的单页抓取工具；
    
*   `SearchGraph`：多页抓取工具，从搜索引擎的前 n 个搜索结果中提取信息；
    
*   `SpeechGraph`：单页抓取工具，从网站提取信息并生成音频文件。
    

### 示例一：使用 Ollama API 提取信息

`from scrapegraphai.graphs import SmartScraperGraph

graph_config = {  
    "llm": {  
        "model": "ollama/mistral",  
        "temperature": 0,  
        "format": "json",  # Ollama needs the format to be specified explicitly  
        "base_url": "http://localhost:11434",  # set Ollama URL  
    },  
    "embeddings": {  
        "model": "ollama/nomic-embed-text",  
        "base_url": "http://localhost:11434",  # set Ollama URL  
    }  
}

smart_scraper_graph = SmartScraperGraph(  
    prompt="List me all the articles",  
    # also accepts a string with the already downloaded HTML code  
    source="https://perinim.github.io/projects",  
    config=graph_config  
)

result = smart_scraper_graph.run()  
print(result)

`

### 示例二：使用 ChatGPT API 提取信息

`from scrapegraphai.graphs import SmartScraperGraph  
OPENAI_API_KEY = "YOUR_API_KEY"

graph_config = {  
    "llm": {  
        "api_key": OPENAI_API_KEY,  
        "model": "gpt-3.5-turbo",  
    },  
}

smart_scraper_graph = SmartScraperGraph(  
    prompt="List me all the articles",  
    # also accepts a string with the already downloaded HTML code  
    source="https://perinim.github.io/projects",  
    config=graph_config  
)

result = smart_scraper_graph.run()  
print(result)

`

### 示例三：使用 Groq API 提取信息

`from scrapegraphai.graphs import SmartScraperGraph  
from scrapegraphai.utils import prettify_exec_info

groq_key = os.getenv("GROQ_APIKEY")

graph_config = {  
    "llm": {  
        "model": "groq/gemma-7b-it",  
        "api_key": groq_key,  
        "temperature": 0  
    },  
    "embeddings": {  
        "model": "ollama/nomic-embed-text",  
        "temperature": 0,  
        "base_url": "http://localhost:11434",   
    },  
    "headless": False  
}

smart_scraper_graph = SmartScraperGraph(  
    prompt="List me all the projects with their description and the author.",  
    source="https://perinim.github.io/projects",  
    config=graph_config  
)

result = smart_scraper_graph.run()  
print(result)

`

### 示例四：使用 Gemini API 提取信息

`from scrapegraphai.graphs import SmartScraperGraph  
GOOGLE_APIKEY = "YOUR_API_KEY"

# Define the configuration for the graph  
graph_config = {  
    "llm": {  
        "api_key": GOOGLE_APIKEY,  
        "model": "gemini-pro",  
    },  
}

# Create the SmartScraperGraph instance  
smart_scraper_graph = SmartScraperGraph(  
    prompt="List me all the articles",  
    source="https://perinim.github.io/projects",  
    config=graph_config  
)

result = smart_scraper_graph.run()  
print(result)

`

### 示例五、使用 Docker 提取信息

注意：使用本地模型之前记得创建 docker 容器！

`docker-compose up -d  
docker exec -it ollama ollama pull stablelm-zephyr  
`

您可以使用 Ollama 上可用的模型或您自己的模型来代替 stablelm-zephyr

`from scrapegraphai.graphs import SmartScraperGraph。

graph_config = {  
    "llm": {  
        "model": "ollama/mistral",  
        "temperature": 0,  
        "format": "json",  # Ollama needs the format to be specified explicitly  
        # "model_tokens": 2000, # set context length arbitrarily  
    },  
}

smart_scraper_graph = SmartScraperGraph(  
    prompt="List me all the articles",  
    # also accepts a string with the already downloaded HTML code  
    source="https://perinim.github.io/projects",    
    config=graph_config  
)

result = smart_scraper_graph.run()  
print(result)

`

随着 AI 技术的不断发展，将会为传统工具带来很大的机遇和挑战，后续会不断涌现出更多智能化的工具。

参考资料

\[1\] 

ScrapeGraphAI: _https://scrapegraph-doc.onrender.com/_

\[2\] 

Playwright: _https://playwright.dev/_

往期文章
----

*   [告别传统客服：支持十几个平台的 AI “懒人客服” 来了！](https://mp.weixin.qq.com/s?__biz=MzA5NDMwMTU3OA==&mid=2247483978&idx=1&sn=c319cfa8a398f1d29012a9b60139c5e7&scene=21#wechat_redirect)
    
*   [卖货主播大模型开源了，让销冠触手可及！](https://mp.weixin.qq.com/s?__biz=MzA5NDMwMTU3OA==&mid=2247483962&idx=1&sn=b6d48f613bc801e2f25cd773ca78f37c&scene=21#wechat_redirect)
    
*   [Kimi+麦肯锡，5 秒摸透一个行业！](https://mp.weixin.qq.com/s?__biz=MzA5NDMwMTU3OA==&mid=2247483932&idx=1&sn=f031c79afb9e8b2905b176650d10add1&scene=21#wechat_redirect)
    
*   [Kimi 10 秒生成流程图，别再手动绘图了！](https://mp.weixin.qq.com/s?__biz=MzA5NDMwMTU3OA==&mid=2247483922&idx=1&sn=4c2f114087b45bcad854fb51eeeee28b&scene=21#wechat_redirect)
    
*   [万字长文秒变精华！Kimi 的超强提示词秘籍](https://mp.weixin.qq.com/s?__biz=MzA5NDMwMTU3OA==&mid=2247483953&idx=1&sn=61d881b1a7c5823a3e948806904786f5&scene=21#wechat_redirect)
    
*   [阿里开源的自动化视频剪辑工具，太好用了！](https://mp.weixin.qq.com/s?__biz=MzA5NDMwMTU3OA==&mid=2247483913&idx=1&sn=39227e516f8b7a7e1c49b33b5f668274&scene=21#wechat_redirect)
    
*   [开源，11K Star！一个主题或关键词就能自动生成一条高清的短视频，无侵权风险！](https://mp.weixin.qq.com/s?__biz=MzA5NDMwMTU3OA==&mid=2247483971&idx=1&sn=557653df19f2b6e95f3815a7e3081c84&scene=21#wechat_redirect)
    

关注 AI 真好玩，带你玩转各类 AI 工具，掌控数字未来！

如果这篇文章对您有所帮助，请点赞、关注，并分享给您的朋友。感谢您的支持！