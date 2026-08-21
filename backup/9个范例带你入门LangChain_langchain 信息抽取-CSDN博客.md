前方干货预警：这可能是你心心念念想找的**最好懂最具实操性**的**langchain教程。**  本文通过演示9个具有代表性的应用范例，带你零基础入门langchain。

9个范例功能列表如下：

1，**文本总结**(Summarization): 对文本/聊天内容的重点内容总结。

2，**文档问答**(Question and Answering Over Documents): 使用文档作为上下文信息，基于文档内容进行问答。

3，**信息抽取**(Extraction): 从文本内容中抽取结构化的内容。

4，**结果评估**(Evaluation): 分析并评估LLM输出的结果的好坏。

5，[**数据库**](https://cloud.tencent.com/solution/database?from_column=20065&from=20065)**问答**(Querying Tabular Data): 从数据库/类数据库内容中抽取数据信息。

6，**代码理解**(Code Understanding): 分析代码，并从代码中获取逻辑，同时也支持QA。

7，**API\*\*\*\*交互**(Interacting with APIs): 通过对API文档的阅读，理解API文档并向真实世界调用API获取真实数据。

8，**聊天机器人**(Chatbots): 具备记忆能力的聊天机器人框架（有UI交互能力)。

9，**智能体**(Agents): 使用LLMs进行任务分析和决策，并调用工具执行决策。

代码语言：javascript

```
`# 在我们开始前，安装需要的依赖
!pip install langchain
!pip install openai
!pip install tiktoken 
!pip install faiss-cpu` 

*   1
*   2
*   3
*   4
*   5

*   1
*   2
*   3
*   4
*   5


```

代码语言：javascript

```
`openai_api_key='YOUR_API_KEY'
# 使用你自己的OpenAI API key` 

*   1
*   2

*   1
*   2


```

#### **一， 文本总结(Summarization)**

扔给LLM一段文本，让它给你生成总结可以说是最常见的场景之一了。

目前最火的应用应该是 chatPDF，就是这种功能。

##### **1，短文本总结**

代码语言：javascript

```
 `# Summaries Of Short Text

from langchain.llms import OpenAI
from langchain import PromptTemplate

llm = OpenAI(temperature=0, model_name = 'gpt-3.5-turbo', openai_api_key=openai_api_key) # 初始化LLM模型

# 创建模板
template = """
%INSTRUCTIONS:
Please summarize the following piece of text.
Respond in a manner that a 5 year old would understand.

%TEXT:
{text}
"""

# 创建一个 Lang Chain Prompt 模板，稍后可以插入值
prompt = PromptTemplate(
    input_variables=["text"],
    template=template,
)` 

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


```

代码语言：javascript

```
`confusing_text = """
For the next 130 years, debate raged.
Some scientists called Prototaxites a lichen, others a fungus, and still others clung to the notion that it was some kind of tree.
“The problem is that when you look up close at the anatomy, it’s evocative of a lot of different things, but it’s diagnostic of nothing,” says Boyce, an associate professor in geophysical sciences and the Committee on Evolutionary Biology.
“And it’s so damn big that when whenever someone says it’s something, everyone else’s hackles get up: ‘How could you have a lichen 20 feet tall?’”
"""` 

*   1
*   2
*   3
*   4
*   5
*   6

*   1
*   2
*   3
*   4
*   5
*   6


```

代码语言：javascript

```
`print ("------- Prompt Begin -------")
# 打印模板内容
final_prompt = prompt.format(text=confusing_text)
print(final_prompt)

print ("------- Prompt End -------")` 

*   1
*   2
*   3
*   4
*   5
*   6

*   1
*   2
*   3
*   4
*   5
*   6


```

代码语言：javascript

```
`------- Prompt Begin -------

%INSTRUCTIONS:
Please summarize the following piece of text.
Respond in a manner that a 5 year old would understand.

%TEXT:

For the next 130 years, debate raged.
Some scientists called Prototaxites a lichen, others a fungus, and still others clung to the notion that it was some kind of tree.
“The problem is that when you look up close at the anatomy, it’s evocative of a lot of different things, but it’s diagnostic of nothing,” says Boyce, an associate professor in geophysical sciences and the Committee on Evolutionary Biology.
“And it’s so damn big that when whenever someone says it’s something, everyone else’s hackles get up: ‘How could you have a lichen 20 feet tall?’”


------- Prompt End -------` 

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

代码语言：javascript

```
`output = llm(final_prompt)
print (output)` 

*   1
*   2

*   1
*   2


```

代码语言：javascript

```
`People argued for a long time about what Prototaxites was. Some thought it was a lichen, some thought it was a fungus, and some thought it was a tree. But it was hard to tell for sure because it looked like different things up close and it was really, really big.` 

*   1

*   1


```

##### **2，长文本总结**

对于文本长度较短的文本我们可以直接这样执行summary操作

但是对于文本长度超过lLM支持的max token size 时将会遇到困难

Lang Chain 提供了开箱即用的工具解决长文本的问题：load\_summarize\_chain

代码语言：javascript

```
`# Summaries Of Longer Text

from langchain.llms import OpenAI
from langchain.chains.summarize import load_summarize_chain
from langchain.text_splitter import RecursiveCharacterTextSplitter

llm = OpenAI(temperature=0, openai_api_key=openai_api_key)` 

*   1
*   2
*   3
*   4
*   5
*   6
*   7

*   1
*   2
*   3
*   4
*   5
*   6
*   7


```

代码语言：javascript

```
`with open('wonderland.txt', 'r') as file:
    text = file.read() # 文章本身是爱丽丝梦游仙境

# 打印小说的前285个字符
print (text[:285])` 

*   1
*   2
*   3
*   4
*   5

*   1
*   2
*   3
*   4
*   5


```

代码语言：javascript

```
`The Project Gutenberg eBook of Alice’s Adventures in Wonderland, by Lewis Carroll

This eBook is for the use of anyone anywhere in the United States and
most other parts of the world at no cost and with almost no restrictions
whatsoever. You may copy it, give it away or re-use it unde` 

*   1
*   2
*   3
*   4
*   5

*   1
*   2
*   3
*   4
*   5


```

代码语言：javascript

```
`num_tokens = llm.get_num_tokens(text)

print (f"There are {num_tokens} tokens in your file") 
# 全文一共4w8词
# 很明显这样的文本量是无法直接送进LLM进行处理和生成的` 

*   1
*   2
*   3
*   4
*   5

*   1
*   2
*   3
*   4
*   5


```

There are 48613 tokens in your file

解决长文本的方式无非是’chunking’,‘splitting’ 原文本为小的段落/分割部分

代码语言：javascript

```
`text_splitter = RecursiveCharacterTextSplitter(separators=["\n\n", "\n"], chunk_size=5000, chunk_overlap=350)
# 虽然我使用的是 RecursiveCharacterTextSplitter，但是你也可以使用其他工具
docs = text_splitter.create_documents([text])

print (f"You now have {len(docs)} docs intead of 1 piece of text")` 

*   1
*   2
*   3
*   4
*   5

*   1
*   2
*   3
*   4
*   5


```

You now have 36 docs intead of 1 piece of text

现在就需要一个 Lang Chain 工具，将分段文本送入LLM进行summary

代码语言：javascript

```
`# 设置 lang chain
# 使用 map_reduce的chain_type，这样可以将多个文档合并成一个
chain = load_summarize_chain(llm=llm, chain_type='map_reduce') # verbose=True 展示运行日志` 

*   1
*   2
*   3

*   1
*   2
*   3


```

代码语言：javascript

```
`# Use it. This will run through the 36 documents, summarize the chunks, then get a summary of the summary.
# 典型的map reduce的思路去解决问题，将文章拆分成多个部分，再将多个部分分别进行 summarize，最后再进行 合并，对 summarys 进行 summary
output = chain.run(docs)
print (output)
# Try yourself` 

*   1
*   2
*   3
*   4
*   5

*   1
*   2
*   3
*   4
*   5


```

代码语言：javascript

```
 `Alice follows a white rabbit down a rabbit hole and finds herself in a strange world full of peculiar characters. She experiences many strange adventures and is asked to settle disputes between the characters. In the end, she is in a court of justice with the King and Queen of Hearts and is questioned by the King. Alice reads a set of verses and has a dream in which she remembers a secret. Project Gutenberg is a library of electronic works founded by Professor Michael S. Hart and run by volunteers.` 

*   1

*   1


```

#### **二，文档问答(QA based Documents)**

为了确保LLM能够执行QA任务

1.  需要向LLM传递能够让他参考的上下文信息
2.  需要向LLM准确地传达我们的问题

##### **1，短文本问答**

代码语言：javascript

```
`# 概括来说，使用文档作为上下文进行QA系统的构建过程类似于 llm(your context + your question) = your answer
# Simple Q&A Example

from langchain.llms import OpenAI

llm = OpenAI(temperature=0, openai_api_key=openai_api_key)` 

*   1
*   2
*   3
*   4
*   5
*   6

*   1
*   2
*   3
*   4
*   5
*   6


```

代码语言：javascript

```
`context = """
Rachel is 30 years old
Bob is 45 years old
Kevin is 65 years old
"""

question = "Who is under 40 years old?"` 

*   1
*   2
*   3
*   4
*   5
*   6
*   7

*   1
*   2
*   3
*   4
*   5
*   6
*   7


```

代码语言：javascript

```
`output = llm(context + question)

print (output.strip())` 

*   1
*   2
*   3

*   1
*   2
*   3


```

Rachel is under 40 years old.

##### **2，长文本问答**

对于更长的文本，可以文本进行分块，对分块的内容进行 embedding，将 embedding 存储到数据库中，然后进行查询。

目标是选择相关的文本块，但是我们应该选择哪些文本块呢？目前最流行的方法是基于比较向量嵌入来选择相似的文本。

代码语言：javascript

```
`from langchain import OpenAI
from langchain.vectorstores import FAISS
from langchain.chains import RetrievalQA
from langchain.document_loaders import TextLoader
from langchain.embeddings.openai import OpenAIEmbeddings
llm = OpenAI(temperature=0, openai_api_key=openai_api_key)` 

*   1
*   2
*   3
*   4
*   5
*   6

*   1
*   2
*   3
*   4
*   5
*   6


```

代码语言：javascript

```
`loader = TextLoader('wonderland.txt') # 载入一个长文本，我们还是使用爱丽丝漫游仙境这篇小说作为输入
doc = loader.load()
print (f"You have {len(doc)} document")
print (f"You have {len(doc[0].page_content)} characters in that document")` 

*   1
*   2
*   3
*   4

*   1
*   2
*   3
*   4


```

You have 1 document

You have 164014 characters in that document

代码语言：javascript

```
`# 将小说分割成多个部分
text_splitter = RecursiveCharacterTextSplitter(chunk_size=3000, chunk_overlap=400)
docs = text_splitter.split_documents(doc)` 

*   1
*   2
*   3

*   1
*   2
*   3


```

代码语言：javascript

```
`# 获取字符的总数，以便可以计算平均值
num_total_characters = sum([len(x.page_content) for x in docs])

print (f"Now you have {len(docs)} documents that have an average of {num_total_characters / len(docs):,.0f} characters (smaller pieces)")` 

*   1
*   2
*   3
*   4

*   1
*   2
*   3
*   4


```

代码语言：javascript

```
`Now you have 62 documents that have an average of 2,846 characters (smaller pieces)` 

*   1

*   1


```

代码语言：javascript

```
`# 设置 embedding 引擎
embeddings = OpenAIEmbeddings(openai_api_key=openai_api_key)

# Embed 文档，然后使用伪数据库将文档和原始文本结合起来
# 这一步会向 OpenAI 发起 API 请求
docsearch = FAISS.from_documents(docs, embeddings)` 

*   1
*   2
*   3
*   4
*   5
*   6

*   1
*   2
*   3
*   4
*   5
*   6


```

代码语言：javascript

```
`# 创建QA-retrieval chain
qa = RetrievalQA.from_chain_type(llm=llm, chain_type="stuff", retriever=docsearch.as_retriever())` 

*   1
*   2

*   1
*   2


```

代码语言：javascript

```
`query = "What does the author describe the Alice following with?"
qa.run(query)
# 这个过程中，检索器会去获取类似的文件部分，并结合你的问题让 LLM 进行推理，最后得到答案
# 这一步还有很多可以细究的步骤，比如如何选择最佳的分割大小，如何选择最佳的 embedding 引擎，如何选择最佳的检索器等等
# 同时也可以选择云端向量存储` 

*   1
*   2
*   3
*   4
*   5

*   1
*   2
*   3
*   4
*   5


```

代码语言：javascript

```
`' The author describes Alice following a White Rabbit with pink eyes.'` 

*   1

*   1


```

#### **三，信息抽取(Extraction)**

Extraction是从一段文本中解析结构化数据的过程.

通常与Extraction parser一起使用，以构建数据，以下是一些使用范例。

1.  从句子中提取结构化行以插入数据库
2.  从长文档中提取多行以插入数据库
3.  从用户查询中提取参数以进行 API 调用
4.  最近最火的 Extraction 库是 KOR

##### **1，手动格式转换**

代码语言：javascript

```
`from langchain.schema import HumanMessage
from langchain.prompts import PromptTemplate, ChatPromptTemplate, HumanMessagePromptTemplate

from langchain.chat_models import ChatOpenAI


chat_model = ChatOpenAI(temperature=0, model='gpt-3.5-turbo', openai_api_key=openai_api_key)` 

*   1
*   2
*   3
*   4
*   5
*   6
*   7

*   1
*   2
*   3
*   4
*   5
*   6
*   7


```

代码语言：javascript

```
`# Vanilla Extraction
instructions = """
You will be given a sentence with fruit names, extract those fruit names and assign an emoji to them
Return the fruit name and emojis in a python dictionary
"""

fruit_names = """
Apple, Pear, this is an kiwi
"""` 

*   1
*   2
*   3
*   4
*   5
*   6
*   7
*   8
*   9

*   1
*   2
*   3
*   4
*   5
*   6
*   7
*   8
*   9


```

代码语言：javascript

```
`# Make your prompt which combines the instructions w/ the fruit names
prompt = (instructions + fruit_names)

# Call the LLM
output = chat_model([HumanMessage(content=prompt)])

print (output.content)
print (type(output.content))` 

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

代码语言：javascript

```
`{'Apple': '🍎', 'Pear': '🍐', 'kiwi': '🥝'}
<class 'str'>` 

*   1
*   2

*   1
*   2


```

代码语言：javascript

```
`output_dict = eval(output.content) #利用python中的eval函数手动转换格式

print (output_dict)
print (type(output_dict))` 

*   1
*   2
*   3
*   4

*   1
*   2
*   3
*   4


```

##### **2，自动格式转换**

使用langchain.output\_parsers.StructuredOutputParser可以自动生成一个带有格式说明的提示。

这样就不需要担心提示工程输出格式的问题了，将这部分完全交给 Lang Chain 来执行，将LLM的输出转化为 python 对象。

代码语言：javascript

```
`# 解析输出并获取结构化的数据
from langchain.output_parsers import StructuredOutputParser, ResponseSchema

response_schemas = [
    ResponseSchema(name="artist", description="The name of the musical artist"),
    ResponseSchema(name="song", description="The name of the song that the artist plays")
]

# 解析器将会把LLM的输出使用我定义的schema进行解析并返回期待的结构数据给我
output_parser = StructuredOutputParser.from_response_schemas(response_schemas)` 

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


```

代码语言：javascript

```
`format_instructions = output_parser.get_format_instructions()
print(format_instructions)` 

*   1
*   2

*   1
*   2


```

代码语言：javascript

```
`The output should be a markdown code snippet formatted in the following schema, including the leading and trailing "```json" and "```":

```json
{
	"artist": string  // The name of the musical artist
	"song": string  // The name of the song that the artist plays
}
``` ` 

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

代码语言：javascript

```
`# 这个 Prompt 与之前我们构建 Chat Model 时 Prompt 不同
# 这个 Prompt 是一个 ChatPromptTemplate，它会自动将我们的输出转化为 python 对象
prompt = ChatPromptTemplate(
    messages=[
        HumanMessagePromptTemplate.from_template("Given a command from the user, extract the artist and song names \n \
                                                    {format_instructions}\n{user_prompt}")  
    ],
    input_variables=["user_prompt"],
    partial_variables={"format_instructions": format_instructions}
)` 

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


```

代码语言：javascript

```
`artist_query = prompt.format_prompt(user_prompt="I really like So Young by Portugal. The Man")
print(artist_query.messages[0].content)` 

*   1
*   2

*   1
*   2


```

代码语言：javascript

```
`Given a command from the user, extract the artist and song names 
                                                     The output should be a markdown code snippet formatted in the following schema, including the leading and trailing "```json" and "```":

```json
{
	"artist": string  // The name of the musical artist
	"song": string  // The name of the song that the artist plays
}
```
I really like So Young by Portugal. The Man` 

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


```

代码语言：javascript

```
`artist_output = chat_model(artist_query.to_messages())
output = output_parser.parse(artist_output.content)

print (output)
print (type(output))
# 这里要注意的是，因为我们使用的 turbo 模型，生成的结果并不一定是每次都一致的
# 替换成gpt4模型可能是更好的选择` 

*   1
*   2
*   3
*   4
*   5
*   6
*   7

*   1
*   2
*   3
*   4
*   5
*   6
*   7


```

代码语言：javascript

```
`{'artist': 'Portugal. The Man', 'song': 'So Young'}
<class 'dict'>` 

*   1
*   2

*   1
*   2


```

#### **四，结果评估(Evaluation)**

由于自然语言的不可预测性和可变性，评估LLM的输出是否正确有些困难，langchain 提供了一种方式帮助我们去解决这一难题。

代码语言：javascript

```
`# Embeddings, store, and retrieval
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.vectorstores import FAISS
from langchain.chains import RetrievalQA

# Model and doc loader
from langchain import OpenAI
from langchain.document_loaders import TextLoader

# Eval
from langchain.evaluation.qa import QAEvalChain

llm = OpenAI(temperature=0, openai_api_key=openai_api_key)` 

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


```

代码语言：javascript

```
`# 还是使用爱丽丝漫游仙境作为文本输入
loader = TextLoader('wonderland.txt')
doc = loader.load()

print (f"You have {len(doc)} document")
print (f"You have {len(doc[0].page_content)} characters in that document")` 

*   1
*   2
*   3
*   4
*   5
*   6

*   1
*   2
*   3
*   4
*   5
*   6


```

代码语言：javascript

```
`You have 1 document
You have 164014 characters in that document` 

*   1
*   2

*   1
*   2


```

代码语言：javascript

```
`text_splitter = RecursiveCharacterTextSplitter(chunk_size=3000, chunk_overlap=400)
docs = text_splitter.split_documents(doc)

# Get the total number of characters so we can see the average later
num_total_characters = sum([len(x.page_content) for x in docs])

print (f"Now you have {len(docs)} documents that have an average of {num_total_characters / len(docs):,.0f} characters (smaller pieces)")` 

*   1
*   2
*   3
*   4
*   5
*   6
*   7

*   1
*   2
*   3
*   4
*   5
*   6
*   7


```

代码语言：javascript

```
`Now you have 62 documents that have an average of 2,846 characters (smaller pieces)` 

*   1

*   1


```

代码语言：javascript

```
`# Embeddings and docstore
embeddings = OpenAIEmbeddings(openai_api_key=openai_api_key)
docsearch = FAISS.from_documents(docs, embeddings)` 

*   1
*   2
*   3

*   1
*   2
*   3


```

代码语言：javascript

```
`chain = RetrievalQA.from_chain_type(llm=llm, chain_type="stuff", retriever=docsearch.as_retriever(), input_key="question")
# 注意这里的 input_key 参数，这个参数告诉了 chain 我的问题在字典中的哪个 key 里
# 这样 chain 就会自动去找到问题并将其传递给 LLM` 

*   1
*   2
*   3

*   1
*   2
*   3


```

代码语言：javascript

```
`question_answers = [
    {'question' : "Which animal give alice a instruction?", 'answer' : 'rabbit'},
    {'question' : "What is the author of the book", 'answer' : 'Elon Mask'}
]` 

*   1
*   2
*   3
*   4

*   1
*   2
*   3
*   4


```

代码语言：javascript

```
`predictions = chain.apply(question_answers)
predictions
# 使用LLM模型进行预测，并将答案与我提供的答案进行比较，这里信任我自己提供的人工答案是正确的` 

*   1
*   2
*   3

*   1
*   2
*   3


```

代码语言：javascript

```
`[{'question': 'Which animal give alice a instruction?',
  'answer': 'rabbit',
  'result': ' The Caterpillar gave Alice instructions.'},
 {'question': 'What is the author of the book',
  'answer': 'Elon Mask',
  'result': ' The author of the book is Lewis Carroll.'}]` 

*   1
*   2
*   3
*   4
*   5
*   6

*   1
*   2
*   3
*   4
*   5
*   6


```

代码语言：javascript

```
`# Start your eval chain
eval_chain = QAEvalChain.from_llm(llm)

graded_outputs = eval_chain.evaluate(question_answers,
                                     predictions,
                                     question_key="question",
                                     prediction_key="result",
                                     answer_key='answer')` 

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

代码语言：javascript

```
`graded_outputs` 

*   1

*   1


```

代码语言：javascript

```
`[{'text': ' INCORRECT'}, {'text': ' INCORRECT'}]` 

*   1

*   1


```

#### **五，数据库问答(Querying Tabular Data)**

代码语言：javascript

```
`# 使用自然语言查询一个 SQLite 数据库，我们将使用旧金山树木数据集
# Don't run following code if you don't run sqlite and follow db
from langchain import OpenAI, SQLDatabase, SQLDatabaseChain

llm = OpenAI(temperature=0, openai_api_key=openai_api_key)` 

*   1
*   2
*   3
*   4
*   5

*   1
*   2
*   3
*   4
*   5


```

代码语言：javascript

```
`sqlite_db_path = 'data/San_Francisco_Trees.db'
db = SQLDatabase.from_uri(f"sqlite:///{sqlite_db_path}")` 

*   1
*   2

*   1
*   2


```

代码语言：javascript

```
`db_chain = SQLDatabaseChain(llm=llm, database=db, verbose=True)` 

*   1

*   1


```

代码语言：javascript

```
`db_chain.run("How many Species of trees are there in San Francisco?")` 

*   1

*   1


```

1.  Find which table to use
2.  Find which column to use
3.  Construct the correct sql query
4.  Execute that query
5.  Get the result
6.  Return a natural language reponse back

confirm LLM result via pandas

代码语言：javascript

```
`import sqlite3
import pandas as pd

# Connect to the SQLite database
connection = sqlite3.connect(sqlite_db_path)

# Define your SQL query
query = "SELECT count(distinct qSpecies) FROM SFTrees"

# Read the SQL query into a Pandas DataFrame
df = pd.read_sql_query(query, connection)

# Close the connection
connection.close()` 

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


```

代码语言：javascript

```
`# Display the result in the first column first cell
print(df.iloc[0,0])` 

*   1
*   2

*   1
*   2


```

#### **六，代码理解(Code Understanding)**

代码理解用到的工具和文档问答差不多，不过我们的输入是一个项目的代码。

代码语言：javascript

```
`# Helper to read local files
import os

# Vector Support
from langchain.vectorstores import FAISS
from langchain.embeddings.openai import OpenAIEmbeddings

# Model and chain
from langchain.chat_models import ChatOpenAI

# Text splitters
from langchain.text_splitter import CharacterTextSplitter
from langchain.document_loaders import TextLoader

llm = ChatOpenAI(model='gpt-3.5-turbo', openai_api_key=openai_api_key)` 

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

代码语言：javascript

```
`embeddings = OpenAIEmbeddings(disallowed_special=(), openai_api_key=openai_api_key)` 

*   1

*   1


```

代码语言：javascript

```
`root_dir = '/content/drive/MyDrive/thefuzz-master'
docs = []

# Go through each folder
for dirpath, dirnames, filenames in os.walk(root_dir):
    
    # Go through each file
    for file in filenames:
        try: 
            # Load up the file as a doc and split
            loader = TextLoader(os.path.join(dirpath, file), encoding='utf-8')
            docs.extend(loader.load_and_split())
        except Exception as e: 
            pass` 

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


```

代码语言：javascript

```
`print (f"You have {len(docs)} documents\n")
print ("------ Start Document ------")
print (docs[0].page_content[:300])` 

*   1
*   2
*   3

*   1
*   2
*   3


```

代码语言：javascript

```
`You have 175 documents

------ Start Document ------
from timeit import timeit
import math
import csv

iterations = 100000


reader = csv.DictReader(open('data/titledata.csv'), delimiter='|')
titles = [i['custom_title'] for i in reader]
title_blob = '\n'.join(titles)


cirque_strings = [
    "cirque du soleil - zarkana - las vegas",
    "cirque du sol` 

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

代码语言：javascript

```
`docsearch = FAISS.from_documents(docs, embeddings)` 

*   1

*   1


```

代码语言：javascript

```
`# Get our retriever ready
qa = RetrievalQA.from_chain_type(llm=llm, chain_type="stuff", retriever=docsearch.as_retriever())` 

*   1
*   2

*   1
*   2


```

代码语言：javascript

```
`query = "What function do I use if I want to find the most similar item in a list of items?"
output = qa.run(query)` 

*   1
*   2

*   1
*   2


```

代码语言：javascript

```
`print (output)` 

*   1

*   1


```

代码语言：javascript

```
``You can use the `process.extractOne()` function from `thefuzz` package to find the most similar item in a list of items. For example:

```
from thefuzz import process

choices = ["New York Yankees", "Boston Red Sox", "Chicago Cubs", "Los Angeles Dodgers"]
query = "new york mets vs atlanta braves"

best_match = process.extractOne(query, choices)
print(best_match)
```

This will output:

```
('New York Yankees', 50)
```

Where `('New York Yankees', 50)` means that the closest match found was "New York Yankees" with a score of 50 (out of 100).`` 

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

代码语言：javascript

```
`query = "Can you write the code to use the process.extractOne() function? Only respond with code. No other text or explanation"
output = qa.run(query)
print(output)` 

*   1
*   2
*   3

*   1
*   2
*   3


```

代码语言：javascript

```
`process.extractOne(query, choices)` 

*   1

*   1


```

#### **七，API交互(Interacting with APIs)**

如果你需要的数据或操作在 API 之后，就需要LLM能够和API进行交互。

到这个环节，就与 Agents 和 Plugins 息息相关了。

Demo可能很简单，但是功能可以很复杂。

代码语言：javascript

```
`from langchain.chains import APIChain
from langchain.llms import OpenAI

llm = OpenAI(temperature=0, openai_api_key=openai_api_key)` 

*   1
*   2
*   3
*   4

*   1
*   2
*   3
*   4


```

代码语言：javascript

```
`api_docs = """

BASE URL: https://restcountries.com/

API Documentation:

The API endpoint /v3.1/name/{name} Used to find informatin about a country. All URL parameters are listed below:
    - name: Name of country - Ex: italy, france
    
The API endpoint /v3.1/currency/{currency} Uesd to find information about a region. All URL parameters are listed below:
    - currency: 3 letter currency. Example: USD, COP
    
Woo! This is my documentation
"""

chain_new = APIChain.from_llm_and_api_docs(llm, api_docs, verbose=True)` 

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

代码语言：javascript

```
`chain_new.run('Can you tell me information about france?')` 

*   1

*   1


```

![](https://img-blog.csdnimg.cn/img_convert/365fb49fe3c5f0c7399d738f07a670bc.png)

代码语言：javascript

```
`' France is an officially-assigned, independent country located in Western Europe. Its capital is Paris and its official language is French. Its currency is the Euro (€). It has a population of 67,391,582 and its borders are with Andorra, Belgium, Germany, Italy, Luxembourg, Monaco, Spain, and Switzerland.'` 

*   1

*   1


```

代码语言：javascript

```
`chain_new.run('Can you tell me about the currency COP?')` 

*   1

*   1


```

![](https://img-blog.csdnimg.cn/img_convert/ff860b0bf52b65c20db8eee3a715f0a8.png)

代码语言：javascript

```
`' The currency of Colombia is the Colombian peso (COP), symbolized by the "$" sign.'` 

*   1

*   1


```

#### **八，聊天机器人(Chatbots)**

聊天机器人使用了之前提及过的很多工具，且最重要的是增加了一个重要的工具：记忆力。

与用户进行实时交互，为用户提供自然语言问题的平易近人的 UI，

代码语言：javascript

```
`from langchain.llms import OpenAI
from langchain import LLMChain
from langchain.prompts.prompt import PromptTemplate

# Chat specific components
from langchain.memory import ConversationBufferMemory` 

*   1
*   2
*   3
*   4
*   5
*   6

*   1
*   2
*   3
*   4
*   5
*   6


```

代码语言：javascript

```
`template = """
You are a chatbot that is unhelpful.
Your goal is to not help the user but only make jokes.
Take what the user is saying and make a joke out of it

{chat_history}
Human: {human_input}
Chatbot:"""

prompt = PromptTemplate(
    input_variables=["chat_history", "human_input"], 
    template=template
)
memory = ConversationBufferMemory(memory_key="chat_history")` 

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


```

代码语言：javascript

```
`llm_chain = LLMChain(
    llm=OpenAI(openai_api_key=openai_api_key), 
    prompt=prompt, 
    verbose=True, 
    memory=memory
)` 

*   1
*   2
*   3
*   4
*   5
*   6

*   1
*   2
*   3
*   4
*   5
*   6


```

代码语言：javascript

```
 `llm_chain.predict(human_input="Is an pear a fruit or vegetable?")` 

*   1
*   2

*   1
*   2


```

![](https://img-blog.csdnimg.cn/img_convert/96c4de1b203be369dba16ebec07c4985.png)

代码语言：javascript

```
`' An pear is a fruit, but a vegetable-pear is a pun-ishable offense!'` 

*   1

*   1


```

代码语言：javascript

```
`llm_chain.predict(human_input="What was one of the fruits I first asked you about?")
# 这里第二个问题的答案是来自于第一个答案本身的，因此我们使用到了 memory` 

*   1
*   2

*   1
*   2


```

![](https://img-blog.csdnimg.cn/img_convert/d4ad8f2660ee56abddff6a88f8715220.png)

代码语言：javascript

```
`" An pear - but don't let it get to your core!"` 

*   1

*   1


```

#### **九，智能体(Agents)**

Agents是 LLM 中最热门的 🔥 主题之一。

Agents可以查看数据、推断下一步应该采取什么行动，并通过工具为您执行该行动, 是一个具备AI智能的决策者。

温馨提示：小心使用 Auto GPT, 会迅速消耗掉你大量的token。

代码语言：javascript

```
`# Helpers
import os
import json

from langchain.llms import OpenAI

# Agent imports
from langchain.agents import load_tools
from langchain.agents import initialize_agent

# Tool imports
from langchain.agents import Tool
from langchain.utilities import GoogleSearchAPIWrapper
from langchain.utilities import TextRequestsWrapper` 

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


```

代码语言：javascript

```
`os.environ["GOOGLE_CSE_ID"] = "YOUR_GOOGLE_CSE_ID"
os.environ["GOOGLE_API_KEY"] = "YOUR_GOOGLE_API_KEY"` 

*   1
*   2

*   1
*   2


```

代码语言：javascript

```
`llm = OpenAI(temperature=0, openai_api_key=openai_api_key)` 

*   1

*   1


```

代码语言：javascript

```
`search = GoogleSearchAPIWrapper()

requests = TextRequestsWrapper()` 

*   1
*   2
*   3

*   1
*   2
*   3


```

代码语言：javascript

```
`toolkit = [
    Tool(
        name = "Search",
        func=search.run,
        description="useful for when you need to search google to answer questions about current events"
    ),
    Tool(
        name = "Requests",
        func=requests.get,
        description="Useful for when you to make a request to a URL"
    ),
]` 

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

代码语言：javascript

```
`agent = initialize_agent(toolkit, llm, agent="zero-shot-react-description", verbose=True, return_intermediate_steps=True)` 

*   1

*   1


```

代码语言：javascript

```
`response = agent({"input":"What is the capital of canada?"})
response['output']` 

*   1
*   2

*   1
*   2


```

![](https://img-blog.csdnimg.cn/img_convert/78a14b7ae3ad3dd54d157b6af810f730.png)

代码语言：javascript

```
`'Ottawa is the capital of Canada.'` 

*   1

*   1


```

代码语言：javascript

```
`response = agent({"input":"Tell me what the comments are about on this webpage https://news.ycombinator.com/item?id=34425779"})
response['output']` 

*   1
*   2

*   1
*   2


```

![](https://img-blog.csdnimg.cn/img_convert/b0643611537bcb1245e8ecc4dd944441.png)

代码语言：javascript

```
`'The comments on the webpage are about the history of Y Combinator.'` 

*   1

*   1


```

以上。万水千山总是情，点个在看行不行？

### 如何系统的去学习大模型LLM ？

我意识到有很多经验和知识值得分享给大家，也可以通过我们的能力和经验解答大家在人工智能学习中的很多困惑，所以在工作繁忙的情况下还是坚持各种整理和分享。

但苦于知识传播途径有限，很多互联网行业朋友无法获得正确的资料得到学习提升，故此将并将**重要的 `AI大模型资料` 包括AI大模型入门学习思维导图、精品AI大模型学习书籍手册、视频教程、实战学习等录播视频免费分享出来**。

😝有需要的小伙伴，可以V扫描下方二维码免费领取🆓

![](https://img-blog.csdnimg.cn/direct/d0ff3055fcee4199969a0b0c24f01fab.jpeg#pic_center)

AI大模型系统学习路线图
------------

![](https://img-blog.csdnimg.cn/direct/1e1550ad1aa04071b1a39a1820c535d5.png#pic_center)

#### 阶段1：AI大模型时代的基础理解

*   **目标**：了解AI大模型的基本概念、发展历程和核心原理。
*   **内容**：
    *   学习大模型的基本概念和重要性。
    *   研究图灵大模型的背景和应用。
    *   掌握大模型的核心原理，包括架构、训练方法和性能评估。
    *   分析大模型在不同领域的实际应用案例。

#### 阶段2：AI大模型API应用开发工程

*   **目标**：掌握AI大模型API的使用和开发，以及相关的编程技能。
*   **内容**：
    *   学习Python编程基础，以便能够使用AI大模型的API。
    *   掌握API开发所需的环境配置和工具使用。
    *   通过演示工程实践，学习如何使用大模型API进行基础应用开发。
    *   进阶学习，包括提示工程（prompt engineering）和基于OpenAI的案例研究。

#### 阶段3：AI大模型应用架构实践

*   **目标**：深入理解AI大模型的应用架构，并能够进行私有化部署。
*   **内容**：
    *   理解私有化部署的必要性和流程。
    *   学习如何使用HuggingFace开源社区的资源。
    *   掌握ChatGPT、BaiChuan、LaMa等模型的特点和应用。
    *   学习大模型训练的技巧，包括数据准备、模型调优等。
    *   了解LoRA等技术在模型部署中的应用。

#### 阶段4：AI大模型私有化部署

*   **目标**：掌握多种AI大模型的私有化部署，包括多模态和特定领域模型。
*   **内容**：
    *   学习ChaGLM-6B、LaMa-7B、BaiChuan-7B等模型的特点和应用场景。
    *   探索多模态多任务场景下的模型应用。
    *   学习图生文技术栈、Stable Diffusion、ControlNet等高级技术。
    *   理解Video-LLaMA和单向流视频识别的原理和应用。
    *   通过案例学习，掌握BLIP 2.0在交互调性优化方面的应用。

#### 辅助学习资源：

*   阅读相关书籍和论文，深入了解大模型的理论和实践。
*   参加线上课程和研讨会，与行业专家交流。
*   加入AI技术社区，参与讨论和项目协作。

#### 学习计划：

*   **阶段1**：1-2个月，建立AI大模型的基础知识体系。
*   **阶段2**：2-3个月，专注于API应用开发能力的提升。
*   **阶段3**：3-4个月，深入实践AI大模型的应用架构和私有化部署。
*   **阶段4**：4-5个月，专注于高级模型的应用和部署。  
    请根据您的个人进度和时间安排，适当调整学习计划。记得在学习过程中，理论与实践相结合，不断进行项目实践和反思，以加深理解和技能的掌握。

学习是一个过程，只要学习就会有挑战。天道酬勤，你越努力，就会成为越优秀的自己。

如果你能在15天内完成所有的任务，那你堪称天才。然而，如果你能完成 60-70% 的内容，你就已经开始具备成为一名大模型 AI 的正确特征了。

###### 这份完整版的大模型 AI 学习资料已经上传CSDN，朋友们如果需要可以微信扫描下方CSDN官方认证二维码免费领取【`保证100%免费`】

😝有需要的小伙伴，可以Vx扫描下方二维码免费领取🆓

![](https://img-blog.csdnimg.cn/direct/06db47bc1ee64db68f750330142c4cd1.jpeg#pic_center)