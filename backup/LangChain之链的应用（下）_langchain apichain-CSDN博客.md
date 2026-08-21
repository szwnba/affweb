Chain链的应用
---------

LangChain根据功能、用途的不同，提供了大量的Chain链，以下是一些Chain链的使用示例。

配置
--

配置[OpenAI](https://so.csdn.net/so/search?q=OpenAI&spm=1001.2101.3001.7020)的环境变量信息，指定URL、KEY

```
`import os

os.environ["OPENAI_BASE_URL"] = "https://xxxx.com/v1"
os.environ["OPENAI_API_KEY"] = "sk-BGFnOL9Q4c99B378B66cT3BlBKFJ28839b4813bc437B82c2"` 

*   1
*   2
*   3
*   4


```

LLMChain：简单链
------------

> LLMChain是最基础也是最常见的链。LLMChain结合了[语言模型](https://so.csdn.net/so/search?q=%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B&spm=1001.2101.3001.7020)推理功能，并添加了PromptTemplate和Output Parser等功能，将模型输入输出整合在一个链中操作。它利用提示模板格式化输入，将格式化后的字符串传递给LLM模型，并返回LLM的输出。这样使得整个处理过程更加高效和便捷。

```
`from langchain.chains.llm import LLMChain
from langchain_core.prompts import PromptTemplate
from langchain_openai import OpenAI


template = "猪八戒吃{fruit}?"

llm = OpenAI(temperature=0)

llm_chain = LLMChain(
    llm=llm,
    prompt=PromptTemplate.from_template(template))

result = llm_chain.invoke({"fruit": "人参果"})
print(result)` 

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

create\_stuff\_documents\_chain：文档链
-----------------------------------

> `create_stuff_documents_chain`链将获取文档列表并将它们全部格式化为提示(文档列表)，然后将该提示传递给LLM。

注意：

> 它会传递所有文档，因此需要确保它适合LLM的上下文窗口。

```
`from langchain_openai import ChatOpenAI
from langchain_core.documents import Document
from langchain_core.prompts import ChatPromptTemplate
from langchain.chains.combine_documents import create_stuff_documents_chain


prompt = ChatPromptTemplate.from_messages(
    [("system", """根据提供的上下文: {context} \n\n 回答问题: {input}""")]
)

llm = ChatOpenAI(model="gpt-3.5-turbo")

chain = create_stuff_documents_chain(llm, prompt)

docs = [
    Document(page_content="杰西喜欢红色，但不喜欢黄色"),
    Document(page_content="贾马尔喜欢绿色，有一点喜欢红色"),
    Document(page_content="玛丽喜欢粉色和红色")
]

res = chain.invoke({"input": "大家喜欢什么颜色?", "context": docs})
print(res)` 

![](https://csdnimg.cn/release/blogv2/dist/pc/img/newCodeMoreWhite.png)

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
*   16
*   17
*   18
*   19
*   20
*   21
*   22
*   23
*   24
*   25
*   26


```

```
`杰西喜欢红色，贾马尔喜欢绿色和有一点红色，玛丽喜欢粉色和红色。` 

*   1


```

create\_extraction\_chain：提取信息链
-------------------------------

> `create_extraction_chain`是一个从文章、段落中提取信息的链。

> 使用OpenAI函数调用从文本中提取信息，定义一个模式，指定从LLM输出中提取的属性，然后使用create\_extraction\_chain和OpenAI函数调用来提取所需模式。

```
`from langchain.chains import create_extraction_chain
from langchain_openai import ChatOpenAI


schema = {
	
    "properties": {
        "name": {"type": "string"},
        "height": {"type": "integer"},
        "hair_color": {"type": "string"},
    },
    
    "required": ["name", "height"],
}

inp = """亚历克斯身高 5 英尺。克劳迪娅比亚历克斯高 1 英尺，并且跳得比他更高。克劳迪娅是黑发女郎，亚历克斯是金发女郎。"""

llm = ChatOpenAI(temperature=0, model="gpt-3.5-turbo")

chain = create_extraction_chain(schema, llm)

res = chain.invoke(inp)
print(res)` 

![](https://csdnimg.cn/release/blogv2/dist/pc/img/newCodeMoreWhite.png)

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
*   16
*   17
*   18
*   19
*   20
*   21
*   22
*   23
*   24
*   25


```

执行日志：

```
`{'input': '亚历克斯身高 5 英尺。克劳迪娅比亚历克斯高 1 英尺，并且跳得比他更高。克劳迪娅是黑发女郎，亚历克斯是金发女郎。', 
'text': [
{'name': '亚历克斯', 'height': 5}, 
{'name': '克劳迪娅', 'height': 1, 'hair_color': '黑发'}
]}` 

*   1
*   2
*   3
*   4
*   5


```

LLMMathChain：数学链
----------------

> LLMMathChain将用户问题转换为数学问题，然后将数学问题转换为可以使用 Python 的 numexpr 库执行的表达式。使用运行此代码的输出来回答问题

使用LLMMathChain，需要安装numexpr库：

```
`pip install numexpr` 

*   1


```

```
`from langchain_openai import OpenAI
from langchain.chains import LLMMathChain


llm = OpenAI()

llm_math = LLMMathChain.from_llm(llm)

res = llm_math.invoke("100 * 20 + 100的结果是多少？")
print(res)` 

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

执行日志：

```
`{'question': '100 * 20 + 100的结果是多少？', 'answer': 'Answer: 2100'}` 

*   1


```

LLMRequestsChain：获取URL数据链
-------------------------

> 根据用户输入构造一个URL，获取该URL上的数据，然后总结响应。

安装BeautifulSoup

> bs4是BeautifulSoup 的缩写,它是一个用于从HTML或XML文件中提取数据的Python库。

```
`pip install bs4` 

*   1


```

```
`from langchain_openai import OpenAI
from langchain.chains import LLMRequestsChain, LLMChain
from langchain.prompts import PromptTemplate


llm = OpenAI(model="gpt-3.5-turbo", temperature=0)

template = """
来自 google 的原始搜索结果文本： {requests_result}

根据搜素结果回答问题： {query} ，如果没有相关答案则回复：“搜索查询失败”

回答格式:
    question：问题在这里
    answer：答案在这里
"""

prompt = PromptTemplate(
    input_variables=["query", "requests_result"],
    template=template,
)

chain = LLMRequestsChain(llm_chain = LLMChain(llm=OpenAI(temperature=0), prompt=prompt))

question = "成都今天天气情况?"
inputs = {
    "query": question,
    "url": "https://www.google.com/search?q=" + question
}

res = chain.invoke(inputs)
print(res)` 

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
*   16
*   17
*   18
*   19
*   20
*   21
*   22
*   23
*   24
*   25
*   26
*   27
*   28
*   29
*   30
*   31
*   32
*   33
*   34
*   35
*   36


```

```
`{'query': '成都今天天气情况?', 'url': 'https://www.google.com/search?q=成都今天天气情况?', 'output': '    如果没有答案则回复：搜索查询失败\n\nquestion：成都今天天气情况?\nanswer：今天成都市的天气预报为小雨转阴，气温为21/17℃，降水概率为40%，湿度为78%，风速为23 km/h。'}` 

*   1


```

create\_sql\_query\_chain：SQL查询链
--------------------------------

`create_sql_query_chain`是创建生成SQL查询的链，用于将自然语言转换成数据库的SQL查询。

> SQLDatabaseChain 可与 SQLAlchemy 支持的任何 SQL 方言一起使用，例如 MS SQL、MySQL、MariaDB、PostgreSQL、Oracle SQL、Databricks 和 SQLite。

这里使用MySQL数据库，需要安装`pymysql`

```
`pip install pymysql` 

*   1


```

```
`from langchain_community.utilities import SQLDatabase





db_user = "root"
db_password = "12345678"
db_host = "IP"
db_port = "3306"
db_name = "demo"
db = SQLDatabase.from_uri(f"mysql+pymysql://{db_user}:{db_password}@{db_host}:{db_port}/{db_name}")

print("数据库方言：",db.dialect)
print("获取数据表：",db.get_usable_table_names())

res = db.run("SELECT count(*) FROM tb_users;")
print("查询结果：",res)` 

![](https://csdnimg.cn/release/blogv2/dist/pc/img/newCodeMoreWhite.png)

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
*   16
*   17
*   18


```

```
`数据库方言： mysql
获取数据表： ['tb_orders', 'tb_users']
查询结果： [(5,)]` 

*   1
*   2
*   3


```

初始化语言模型并构建链

```
`from langchain_openai import ChatOpenAI

llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0)

chain = create_sql_query_chain(llm=llm, db=db)

response = chain.invoke({"question": "数据表tb_users中有多少用户？"})
print(response)` 

*   1
*   2
*   3
*   4
*   5
*   6
*   7
*   8


```

执行结果如下：

```
``SELECT COUNT(`id`) AS total_users FROM `tb_users`;`` 

*   1


```

APIChain：API链
-------------

> APIChain使用LLM将查询转换为API请求，然后执行该请求，获取响应，然后将该请求传递给LLM以进行响应

查看LangChain中关于`API Chains`的源代码，其中内置了一部分`api_docs`，可以直接使用。  
![](https://img-blog.csdnimg.cn/direct/ba5fc86ff10e48a28c807b7a00f0f35b.png)
  
例如：`open_meteo_docs.py`，其中定义了API接口地址，以及该接口的详细信息描述。  
![](https://img-blog.csdnimg.cn/direct/57143a4f16b342f0b107eeaf6b765ef3.png)
  
创建`weather_docs.py`，详细描述提供API的文档信息。非常重要，相当于Prompt提示词，一定程度上决定输出效果。

```
`OPEN_WEATHER_DOCS = """BASE URL: https://apis.tianapi.com/tianqi/index 

API文档内容如下：

APIKEY：bceeb0fca56ccd32f8b6ea8f42d32459

0.城市ID列表
    城市天气ID | 城市名
    101020100 | 上海
    510100    |  成都

1.接口信息
根据城市名称查询实时或七天内天气预报
    接口地址：https://apis.tianapi.com/tianqi/index 
    请求示例：https://apis.tianapi.com/tianqi/index?key=你的APIKEY&city=101020100&type=1 
    支持协议：http/https
    请求方式：get/post
    返回格式：utf-8 json
    
2.请求参数
    名称	类型	必须	示例值/默认值	说明
    key	string	是	您自己的APIKEY（注册账号后获得）	API密钥
    city	string	是	101020100	城市天气ID、行政代码、城市名称、IP地址
    type	int	是	1	查询类型，实时1，七天7    


3.返回参数  
    名称	类型	示例值	说明
    code	int	200	状态码
    msg	string	success	错误信息
    result	object	{}	返回结果集
    date	string	2020-05-23	日期
    week	string	星期一	星期
    province	string	上海市	所属省份
    area	string	上海市	结果地区（市/区/县）
    areaid	string	101020100	城市天气ID
    weather	string	晴转多云	天气状况
    weatherimg	string	duoyun.png	天气图标
    weathercode	string	qing_duoyun	天气过程代码
    real	string	18℃	实时气温（七天为估测）
    lowest	string	6℃	最低温（夜间温度）
    highest	string	22℃	最高温（日间温度）
    wind	string	东南风	风向（方位）
    windspeed	string	7	风速（km/h）
    windsc	string	1-2级	风力
    sunrise	string	06:10	日出时间
    sunset	string	18:31	日落时间
    moonrise	string	06:02	月升时间
    moondown	string	17:22	月落时间
    pcpn	string	0.0	降雨量（毫米）
    uv_index	string	9	紫外线强度指数
    aqi	string	34	空气质量指数（七天无此字段）
    quality	string	优	空气质量提示（七天无此字段）
    vis	string	9	能见度（公里）
    humidity	string	23	相对湿度（百分比）
    alarmlist	array	[]	天气预警列表（七天无此字段）
    +province	string	上海市	预警省份
    +city	string	上海市	预警城市
    +level	string	黄色	预警级别
    +type	string	大雾	预警类型
    +content	string	上海中心气象台发布大雾黄色预警信号...	预警内容
    +time	string	2020-05-23 20:30:00	预警时间
    tips	string	天气暖和，适宜着单层......	生活指数提示
"""` 

![](https://csdnimg.cn/release/blogv2/dist/pc/img/newCodeMoreWhite.png)

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
*   16
*   17
*   18
*   19
*   20
*   21
*   22
*   23
*   24
*   25
*   26
*   27
*   28
*   29
*   30
*   31
*   32
*   33
*   34
*   35
*   36
*   37
*   38
*   39
*   40
*   41
*   42
*   43
*   44
*   45
*   46
*   47
*   48
*   49
*   50
*   51
*   52
*   53
*   54
*   55
*   56
*   57
*   58
*   59
*   60
*   61
*   62
*   63
*   64


```

编写代码如下：

```
`from langchain.chains import APIChain
from langchain_openai import ChatOpenAI
from langchain_core.messages import SystemMessage, HumanMessage
import weather_docs


llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0)

"""
创建进行API调用并总结响应以回答问题的链

limit_to_domains:用于限制API链可以访问的域，尤其是API文档中有多个域名时需要此参数
verbose：是否以详细模式运行。在详细模式下，一些中间日志将打印到控制台。
"""
chain = APIChain.from_llm_and_api_docs(llm, weather_docs.OPEN_WEATHER_DOCS,
                                       limit_to_domains=["https://apis.tianapi.com/tianqi/index"], verbose=True)

def ask(msg):
    
    messages = [
        SystemMessage(content="你是一位天气查询助手,回答使用中文语言。"),
        HumanMessage(content=msg)
    ]

    
    res = chain.invoke(messages)
    print(res)

if __name__ == '__main__':
    ask("成都今天天气情况？")` 

![](https://csdnimg.cn/release/blogv2/dist/pc/img/newCodeMoreWhite.png)

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
*   16
*   17
*   18
*   19
*   20
*   21
*   22
*   23
*   24
*   25
*   26
*   27
*   28
*   29
*   30
*   31


```

![](https://img-blog.csdnimg.cn/direct/1d1da7efd2084944acd747e0ae3af8b9.png)

Sequential Chain：顺序链
--------------------

> 一条链的输出直接馈送到下一条链的链

创建多个LLMChain链

```
 `from langchain.chains.llm import LLMChain
from langchain_core.prompts import PromptTemplate

from langchain_openai import OpenAI
llm = OpenAI()

template = """
你是一名小说文学家,请你根据小说名称与人物，为小说人物写一个100字左右的概述。
小说: {book}
人物: {name}
小说人物的概述:
"""

prompt_template = PromptTemplate(
    input_variables=["book", "name"],
    template=template
)

description_chain = LLMChain(
    llm=llm,
    prompt=prompt_template,
    output_key="description"
)

template = """
你是一位文学评论家,请你根据小说人物的概述，写一篇100字左右的评论。
小说人物概述: {description}
小说人物的评论:
"""
prompt_template = PromptTemplate(
    input_variables=["description"],
    template=template
)
comments_chain = LLMChain(
    llm=llm,
    prompt=prompt_template,
    output_key="comments"
)

template = """
你是一名广告策划师,请根据小说人物的概述与评论写一篇宣传广告，字数50字左右。
小说人物概述: {description}
小说人物的评论: {comments}
宣传广告:
"""
prompt_template = PromptTemplate(
    input_variables=["description", "comments"],
    template=template
)
promotionalAd_chain = LLMChain(
    llm=llm,
    prompt=prompt_template,
    output_key="promotionalAd"
)` 

![](https://csdnimg.cn/release/blogv2/dist/pc/img/newCodeMoreWhite.png)

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
*   16
*   17
*   18
*   19
*   20
*   21
*   22
*   23
*   24
*   25
*   26
*   27
*   28
*   29
*   30
*   31
*   32
*   33
*   34
*   35
*   36
*   37
*   38
*   39
*   40
*   41
*   42
*   43
*   44
*   45
*   46
*   47
*   48
*   49
*   50
*   51
*   52
*   53
*   54
*   55
*   56
*   57
*   58
*   59


```

使用SequentialChain，将三个链合并，按顺序运行三个链

```
`from langchain.chains.sequential import SequentialChain

overall_chain = SequentialChain(
    chains=[description_chain, comments_chain, promotionalAd_chain],
    input_variables=["book", "name"],
    output_variables=["description", "comments", "promotionalAd"],
    verbose=True
)` 

*   1
*   2
*   3
*   4
*   5
*   6
*   7
*   8


```

运行链并打印结果

```
`result = overall_chain.invoke({
    "book": "西游记",
    "name": "猪八戒"
})
print(result)` 

*   1
*   2
*   3
*   4
*   5


```

![](https://img-blog.csdnimg.cn/direct/0f906a31168443c1999f8632fbb3ea16.png)

LLMRouterChain：路由链
------------------

> 针对场景，可以构建不同的目标链。LangChain通过LLMRouterChain来自动引导大语言模型选择不同的模板，以应对不同类型的问题。

> LLMRouterChain又称路由链，具备动态选择适用于特定输入的下一个链的能力。它能够根据用户提出的问题内容，自动确定最适合处理该问题的模板，并将问题发送至相应模板进行回答。如果问题不匹配任何预定义的处理模板，系统将将其发送至默认链进行处理。

**1.构建提示模板**

假设有2种场景：

```
`1.询问小说人物角色信息

2.询问小说人物角色性格特征` 

*   1
*   2
*   3


```

然后分别对应场景构建两个提示信息的模板

```
 `hobby_template = """
你是一名小说文学家,非常熟悉小说西游记，知晓小说人物的爱好信息。
问题: {input}
"""

nature_template = """
你是一名小说文学家,非常熟悉小说西游记，知晓小说人物的性格特征。
问题: {input}
"""

prompt_list = [
    {
        "id": "hobby",
        "description": "回答关于小说人物的爱好信息问题",
        "template": hobby_template,
    },
    {
        "id": "nature",
        "description": "回答关于小说人物的性格特征问题",
        "template": nature_template,
    }
]` 

![](https://csdnimg.cn/release/blogv2/dist/pc/img/newCodeMoreWhite.png)

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
*   16
*   17
*   18
*   19
*   20
*   21
*   22
*   23
*   24


```

**2.构建目标链**

循环构建提示信息列表prompt\_list，构建目标链，分别负责处理不同的场景问题。

```
`from langchain.chains.llm import LLMChain
from langchain.prompts import PromptTemplate

from langchain_openai import OpenAI
llm = OpenAI()

chain_map = {}

for template in prompt_list:
    prompt = PromptTemplate(
        template=template['template'],
        input_variables=["input"]
    )
    print("目标链提示: ", prompt)

    chain = LLMChain(
        llm=llm,
        prompt=prompt,
        verbose=True
    )
    chain_map[template["id"]] = chain` 

![](https://csdnimg.cn/release/blogv2/dist/pc/img/newCodeMoreWhite.png)

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
*   16
*   17
*   18
*   19
*   20
*   21
*   22


```

```
`目标链提示:  input_variables=['input'] template='\n你是一名小说文学家,非常熟悉小说西游记，知晓小说人物的爱好信息。\n问题: {input}\n'
目标链提示:  input_variables=['input'] template='\n你是一名小说文学家,非常熟悉小说西游记，知晓小说人物的性格特征。\n问题: {input}\n'` 

*   1
*   2


```

**3.构建路由链**

构建路由链，负责查看用户输入的问题，确定问题的类型。

```
`from langchain.chains.router.llm_router import LLMRouterChain, RouterOutputParser
from langchain.chains.router.multi_prompt_prompt import MULTI_PROMPT_ROUTER_TEMPLATE as RounterTemplate


destinations = []
for p in prompt_list:
    destination = f"{p['id']}: {p['description']}"
    destinations.append(destination)

router_template = RounterTemplate.format(destinations="\n".join(destinations))
print("路由链模板: ", router_template)

router_prompt = PromptTemplate(
    template=router_template,
    input_variables=["input"],
    output_parser=RouterOutputParser(),
)
print("路由链提示: ", router_prompt)

router_chain = LLMRouterChain.from_llm(
    llm,
    router_prompt,
    verbose=True
)` 

![](https://csdnimg.cn/release/blogv2/dist/pc/img/newCodeMoreWhite.png)

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
*   16
*   17
*   18
*   19
*   20
*   21
*   22
*   23
*   24
*   25


```

执行日志：

```
`路由链模板:  Given a raw text input to a language model select the model prompt best suited for the input. You will be given the names of the available prompts and a description of what the prompt is best suited for. You may also revise the original input if you think that revising it will ultimately lead to a better response from the language model.

<< FORMATTING >>
Return a markdown code snippet with a JSON object formatted to look like:
```json
{{
    "destination": string \ name of the prompt to use or "DEFAULT"
    "next_inputs": string \ a potentially modified version of the original input
}}
``

REMEMBER: "destination" MUST be one of the candidate prompt names specified below OR it can be "DEFAULT" if the input is not well suited for any of the candidate prompts.
REMEMBER: "next_inputs" can just be the original input if you don't think any modifications are needed.

<< CANDIDATE PROMPTS >>
hobby: 回答关于小说人物的爱好信息问题
nature: 回答关于小说人物的性格特征问题

<< INPUT >>
{input}

<< OUTPUT (must include ```json at the start of the response) >>
<< OUTPUT (must end with ```) >>

路由链提示:  input_variables=['input'] output_parser=RouterOutputParser() template='Given a raw text input to a language model select the model prompt best suited for the input. You will be given the names of the available prompts and a description of what the prompt is best suited for. You may also revise the original input if you think that revising it will ultimately lead to a better response from the language model.\n\n<< FORMATTING >>\nReturn a markdown code snippet with a JSON object formatted to look like:\n```json\n{{\n    "destination": string \\ name of the prompt to use or "DEFAULT"\n    "next_inputs": string \\ a potentially modified version of the original input\n}}\n```\n\nREMEMBER: "destination" MUST be one of the candidate prompt names specified below OR it can be "DEFAULT" if the input is not well suited for any of the candidate prompts.\nREMEMBER: "next_inputs" can just be the original input if you don\'t think any modifications are needed.\n\n<< CANDIDATE PROMPTS >>\nhobby: 回答关于小说人物的爱好信息问题\nnature: 回答关于小说人物的性格特征问题\n\n<< INPUT >>\n{input}\n\n<< OUTPUT (must include ```json at the start of the response) >>\n<< OUTPUT (must end with ```) >>\n'` 

![](https://csdnimg.cn/release/blogv2/dist/pc/img/newCodeMoreWhite.png)

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
*   16
*   17
*   18
*   19
*   20
*   21
*   22
*   23
*   24
*   25


```

**4.构建默认链**

如果路由链没有找到适合的链，就以默认链进行处理。

```
`from langchain.chains.conversation.base import ConversationChain

default_chain = ConversationChain(
    llm=llm,
    output_key="text",
    verbose=True
)` 

*   1
*   2
*   3
*   4
*   5
*   6
*   7


```

**5.构建多提示链**

> MultiPromptChain类是一个多路选择链，它使用一个LLM路由器链在多个提示之间进行选择。这里使用MultiPromptChain类把多个链整合在一起，实现路由功能。

```
`from langchain.chains.router import MultiPromptChain

chain = MultiPromptChain(
    router_chain=router_chain, 
    destination_chains=chain_map, 
    default_chain=default_chain, 
    verbose=True 
)` 

*   1
*   2
*   3
*   4
*   5
*   6
*   7
*   8


```

**6.测试路由链**

测试1

```
`print(chain.invoke({"input": "猪八戒的性格是怎样的？"}))
``
```python
> Entering new MultiPromptChain chain...
> Entering new LLMRouterChain chain...
> Finished chain.
nature: {'input': '猪八戒'}

> Entering new LLMChain chain...
Prompt after formatting:

你是一名小说文学家,非常熟悉小说西游记，知晓小说人物的性格特征。
问题: 猪八戒

> Finished chain.

> Finished chain.
{'input': '猪八戒', 'text': '猪八戒是一个贪吃、懒惰、贪财的人物。他喜欢吃各种美食，尤其是猪肉，经常偷懒，爱睡觉，对于任务不太认真负责，也容易被诱惑，但是同时也有一颗善良的心，对待朋友和师父都很忠诚，有时候也会表现出勇敢和机智的一面。他的性格特点给西游记带来了很多欢乐和搞笑的情节。'}` 

![](https://csdnimg.cn/release/blogv2/dist/pc/img/newCodeMoreWhite.png)

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
*   16
*   17
*   18
*   19


```

测试2

```
`print(chain.invoke({"input": "猪八戒喜欢什么？"}))` 

*   1


```

```
`> Entering new MultiPromptChain chain...
> Entering new LLMRouterChain chain...
> Finished chain.
hobby: {'input': '猪八戒'}

> Entering new LLMChain chain...
Prompt after formatting:

你是一名小说文学家,非常熟悉小说西游记，知晓小说人物的爱好信息。
问题: 猪八戒

> Finished chain.

> Finished chain.
{'input': '猪八戒', 'text': '猪八戒是《西游记》中的主要角色之一，他是一头形貌丑陋、贪吃懒惰的猪妖，原名八戒，后被观音菩萨改名为猪八戒。他喜欢吃喝玩乐，贪图享受，经常偷懒逃避打坐修炼，但也有时候会表现出勇敢和善良的一面。他的武器是铁扇子，擅长变化法术。猪八戒最爱的就是吃，尤其是腊肉、酒和水果，经常被孙悟空和唐僧教训。他的性格幽默诙谐，经常说些搞笑的话，是《西游记》中最受欢迎的'}` 

![](https://csdnimg.cn/release/blogv2/dist/pc/img/newCodeMoreWhite.png)

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
*   16


```

测试3

```
`print(chain.invoke({"input": "如何提升编程技能？"}))` 

*   1


```

```
`> Entering new MultiPromptChain chain...
> Entering new LLMRouterChain chain...
> Finished chain.
None: {'input': '如何提升编程技能？'}

> Entering new ConversationChain chain...
Prompt after formatting:
The following is a friendly conversation between a human and an AI. The AI is talkative and provides lots of specific details from its context. If the AI does not know the answer to a question, it truthfully says it does not know.

Current conversation:

Human: 如何提升编程技能？
AI:

> Finished chain.

> Finished chain.
{'input': '如何提升编程技能？', 'history': '', 'text': ' 提升编程技能的最佳方法是不断练习和学习。首先，您可以通过阅读相关的编程书籍和教程来学习基础知识。然后，您可以尝试解决一些挑战性的编程问题，这样可以帮助您加强对编程语言的理解。除此之外，参与开源项目和与其他程序员交流也是提升编程技能的有效方式。另外，保持好奇心和学习新技术也是非常重要的。最重要的是，坚持不懈地练习和学习，您的编程技能一定会得到提升。'}` 

![](https://csdnimg.cn/release/blogv2/dist/pc/img/newCodeMoreWhite.png)

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
*   16
*   17
*   18


```