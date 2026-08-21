1 图形化 Agent 工具
--------------

### 1.1 核心组件

*   机器人 Bot：一个 AI 应用，或称为 Agent
    
*   知识库：上传个人数据，机器人可根据其内容进行回复
    
*   工作流：将大问题拆解成多个小问题，通过路径实现，路径上的每个节点完成特定任务
    
*   插件：调用外部功能（Tools）
    

### 1.2 使用体验

*   大模型与其他元素结合，实现完整的目标功能。
    
*   功能：调用工具、设置工作流和本地数据（知识库）。
    
*   工具：有许多现成工具可供使用。
    
*   工作流：前后关系非常直观，像搭积木一样。
    

2 Coze
------

*   扣子是一个 AI 应用开发平台，由字节跳动推出。
    
*   相对更 toC，无需编程即可实现 agent 的创建和发布，效果有点类似于 AI 界的微信小程序。
    

| 区别 | 海外版 | 国内版 |
| --- | --- | --- |
| 网址 | www.coze.com | www.coze.cn |
| 登陆方式 | 需要魔法才能使用 | 无使用的网络限制 |
| 可用模型 | OpenAI GPT 系列 | 字节自研模型/国内常用模型 |
| 发布平台 | Discord、Instagram、Slack | 飞书、微信客服、微信公众号&订阅号 |

3 Dify
------

*   支持本地搭建和使用本地模型。
    
*   可部署到国外的社交媒体平台，也可以通过迂回方式接入 UI 或微信。
    
*   提供类似于 OpenAPI 的接口，支持 ChatGPT 风格的 API HTTP 访问方法。
    

![](https://mmbiz.qpic.cn/sz_mmbiz_png/GlayJjdWfyqQfozYl8axXJAwjwqBiaO3pLich2wWTszvgTr5iaA6A9Vdcr3GcS1UogO9wGDPmsiaTTHxw4O0ibnWVFg/640?wx_fmt=png&from=appmsg)

https://github.com/langgenius/dify

目前：42.5k Star

### 3.1 安装

```properties
git clone https://github.com/langgenius/dify
cd dify
cd docker
cp .env.example .env
docker compose up -d
```

代码 TypeScript 50%，Python 50%（20 万行）

### 3.2 使用

*   运行后，可以在浏览器上访问 http://localhost/install
    
*   第一次进入 Dify 控制台时，需要进行初始化安装操作。
    
*   如果使用国外模型，请在 docker-compose.yml 文件的环境变量部分设置代理 HTTP\_PROXY 和 HTTPS\_PROXY。
    
*   在右上角的设置中配置模型。
    
*   支持国内和国外主流大模型。
    

### 3.3 细节

*   RAG 是怎么做的，有没有使用 embedding？
    

*   数据库支持 pgsql、oracle、milvus 等。
    

*   是否把所有内容都打包成一个 image？
    

*   pgsql、redis、Weaviate、前端、后端和沙箱都分别拆成了 image，总共会启动 9 个 image。
    

*   有没有反思部分？
    

*   没找到，觉得在 workflow 逻辑中有点难做。
    

*   plugins 自带工具有哪些？
    

*   Dify 为 AI Agent 提供了 50 多种内置工具，如谷歌搜索、DALL·E、Stable Diffusion 和 WolframAlpha 等。
    
*   实现：dify/api/core/tools/provider/builtin，这里的 agent plugin 和 langchain 中的 agent tool 差不多。
    

4 参考
----

*   【AI提效，创意释放】使用Coze打造全能AI Agent，免费使用GPT4、全网
    
*   B站UP主：在野在也
    
*   学习Agent，从dify开始
    
*   FastGPT、Dify、Coze产品功能对比分析