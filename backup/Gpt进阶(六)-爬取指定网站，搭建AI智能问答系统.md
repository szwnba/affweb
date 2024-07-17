**本文介绍一个智能AI问答系统，通过简单的抓取网站（OpenAI网站为例），使用Embeddings API将抓取的页面转换为嵌入，然后创建一个基本的搜索功能，允许用户询问相关信息**

![](https://mmbiz.qpic.cn/mmbiz_png/4j9C6A8ZYQFx4p58GnjNEVtqLXVtXnuur7hzf3dbGLSs374guUQKVzI1AEx0JoDfDszTtLLqCAibAciaTHRZiao5g/640?wx_fmt=png)

相关技术点：爬虫，文本处理，文本分割，token计算，嵌入，语义搜索

**目录：** 

> 1Web爬虫相关  
> 2数据预处理  
> 3使用嵌入构建问答系统  
> 4其他

Web爬虫
-----

导入相关库指定爬取目标url

```
import requestsimport reimport urllib.requestfrom bs4 import BeautifulSoupfrom collections import dequefrom html.parser import HTMLParserfrom urllib.parse import urlparseimport osimport pandas as pdimport tiktokenimport openaiimport numpy as npfrom openai.embeddings_utils import distances_from_embeddings, cosine_similarity# 匹配网址（URL）的字符串HTTP_URL_PATTERN = r'^http[s]{0,1}://.+$'# 爬取的网站domain = "openai.com"full_url = "https://openai.com/"
```

1 创建一个类--解析HTML获取超链接

```
class HyperlinkParser(HTMLParser):    def __init__(self):        super().__init__()        # 创建一个列表以存储超链接        self.hyperlinks = []    # 重写HTMLParser的handle_starttag方法以获取超链接    def handle_starttag(self, tag, attrs):        attrs = dict(attrs)        # 如果标签是锚定标签并且具有href属性，则将href属性添加到超链接列表中        if tag == "a" and "href" in attrs:            self.hyperlinks.append(attrs["href"])
```

2 解析指定url

```
def get_hyperlinks(url):    try:        # 打开URL并阅读HTML        with urllib.request.urlopen(url) as response:            if not response.info().get('Content-Type').startswith("text/html"):                return []            html = response.read().decode('utf-8')    except Exception as e:        print(e)        return []    # 创建HTML解析器，然后解析HTML以获得超链接    parser = HyperlinkParser()    parser.feed(html)    return parser.hyperlinks
```

**3 过滤超链接（过滤出同一域名的）**

```
def get_domain_hyperlinks(local_domain, url):    clean_links = []    for link in set(get_hyperlinks(url)):        clean_link = None        if re.search(HTTP_URL_PATTERN, link):            # 解析URL并检查域是否相同            url_obj = urlparse(link)            if url_obj.netloc == local_domain:                clean_link = link        # 如果链接不是URL，检查它是否是相对链接        else:            if link.startswith("/"):                link = link[1:]            elif (                    link.startswith("#")                    or link.startswith("mailto:")                    or link.startswith("tel:")            ):                continue            clean_link = "https://" + local_domain + "/" + link        if clean_link is not None:            if clean_link.endswith("/"):                clean_link = clean_link[:-1]            clean_links.append(clean_link)    # 返回同一域内的超链接列表    return list(set(clean_links))
```

**4 开始爬取**

```
def crawl(url):    # 解析URL并获取域    local_domain = urlparse(url).netloc    # 创建一个队列来存储要爬网的URL    queue = deque([url])    # 创建一个集合来存储已经看过的URL(没有重复)    seen = set([url])    # 创建一个目录来存储文本文件    if not os.path.exists("text/"):        os.mkdir("text/")    if not os.path.exists("text/" + local_domain + "/"):        os.mkdir("text/" + local_domain + "/")    # 创建目录来存储csv文件    if not os.path.exists("processed"):        os.mkdir("processed")    # 当队列不为空时，继续搜索    while queue:        # 从队列中获取下一个URL        url = queue.pop()        print(url)  # 用于调试和查看进度        # 将url中的文本保存到<url>.txt文件        with open('text/' + local_domain + '/' + url[8:].replace("/", "_") + ".txt", "w", encoding="UTF-8") as f:            # 使用BeautifulSoup从URL获取文本            soup = BeautifulSoup(requests.get(url).text, "html.parser")            # 获取文本，但删除标签            text = soup.get_text()            # 如果爬虫到达需要JavaScript的页面，它将停止爬行            if ("You need to enable JavaScript to run this app." in text):                print("Unable to parse page " + url + " due to JavaScript being required")            f.write(text)        # 从URL获取超链接，并将它们添加到队列中        for link in get_domain_hyperlinks(local_domain, url):            if link not in seen:                queue.append(link)                seen.add(link)# start crawl....# crawl(full_url)
```

![](https://mmbiz.qpic.cn/mmbiz_png/4j9C6A8ZYQFx4p58GnjNEVtqLXVtXnuu1NHBCosn9vBu8qLkPlgAPO8micfDoNblQdC6ocbDRB05V2KUI4GkVHQ/640?wx_fmt=png)

数据预处理
-----

**5 text数据预处理**

将文本转换为CSV需要循环遍历先前创建的文本目录中的文本文件。打开每个文件后，删除多余的间距并将修改后的文本附加到列表中。然后，将删除了新行的文本添加到空的Pandas数据框中，并将数据框写入CSV文件

```
#Step 5 删除text多余间距def remove_newlines(serie):    serie = serie.str.replace('\n', ' ')    serie = serie.str.replace('\\n', ' ')    serie = serie.str.replace('  ', ' ')    serie = serie.str.replace('  ', ' ')    return serie### Step 6 text数据通过df.to_csv()转为csvtexts = []# 获取文本目录中的所有文本文件for file in os.listdir("text/" + domain + "/"):    with open("text/" + domain + "/" + file, "r", encoding="UTF-8") as f:        text = f.read()        # 省略前11行和后4行，然后用空格替换-、_和#update.        texts.append((file[11:-4].replace('-', ' ').replace('_', ' ').replace('#update', ''), text))# 从文本列表创建一个数据框架df = pd.DataFrame(texts, columns=['fname', 'text'])df['text'] = df.fname + ". " + remove_newlines(df.text)df.to_csv('processed/scraped.csv')df.head()
```

结果示例：  

![](https://mmbiz.qpic.cn/mmbiz_png/4j9C6A8ZYQFx4p58GnjNEVtqLXVtXnuuWvIIv1sQFbhHlCP2WK7fuAzdYLprj3U0hoHibZvuGOmwISIsVDz8Dlw/640?wx_fmt=png)

**7 使用tiktoken计算tokens**

tiktoken是OpenAI开源的一个快速分词工具。它将一个文本字符串（例如“tiktoken很棒！”）和一个编码（例如“cl100k_base”）作为输入，然后将字符串拆分为标记列表（例如\["t"，"ik"，"token"，" is"，" great"，"!"\]）  
文本字符串拆分成tokens: 1该字符串是否太长以至于文本模型无法处理；2 OpenAI API调用的费用（因为使用费用按token计算）。

```
tokenizer = tiktoken.get_encoding("cl100k_base") #加载编码:第一次运行此方法时，需要连接互联网下载，之后的运行将不需要网络连接df = pd.read_csv('processed/scraped.csv', index_col=0)df.columns = ['title', 'text']# 对文本进行标记化并将标记数保存到新列df['n_tokens'] = df.text.apply(lambda x: len(tokenizer.encode(x)))# 可视化df.n_tokens.hist()
```

**8 将文本拆分**

```
max_tokens = 500def split_into_many(text, max_tokens=max_tokens):    # 分割文本为句子并计算token    sentences = text.split('. ')    n_tokens = [len(tokenizer.encode(" " + sentence)) for sentence in sentences]    chunks = []    tokens_so_far = 0    chunk = []    for sentence, token in zip(sentences, n_tokens):        if tokens_so_far + token > max_tokens:            chunks.append(". ".join(chunk) + ".")            chunk = []            tokens_so_far = 0        if token > max_tokens:            continue        chunk.append(sentence)        tokens_so_far += token + 1    if chunk:        chunks.append(". ".join(chunk) + ".")    return chunksshortened = []for row in df.iterrows():    if row[1]['text'] is None:        continue    if row[1]['n_tokens'] > max_tokens:        shortened += split_into_many(row[1]['text'])    else:        shortened.append(row[1]['text'])df = pd.DataFrame(shortened, columns=['text'])df['n_tokens'] = df.text.apply(lambda x: len(tokenizer.encode(x)))df.n_tokens.hist()
```

**9 文本嵌入（需要大约3-5分钟）**

```
df['embeddings'] = df.text.apply(    lambda x: openai.Embedding.create(input=x, engine='text-embedding-ada-002')['data'][0]['embedding'])df.to_csv('processed/embeddings.csv')df.head()# 将嵌入转换为NumPy数组df = pd.read_csv('processed/embeddings.csv', index_col=0)df['embeddings'] = df['embeddings'].apply(eval).apply(np.array)df.head()
```

使用嵌入构建问答系统
----------

**10 语义搜索，返回top5**

```
def create_context(        question, df, max_len=1800, size="ada"):    """    Create a context for a question by finding the most similar context from the dataframe    """    q_embeddings = openai.Embedding.create(input=question, engine='text-embedding-ada-002')['data'][0]['embedding']    #余弦距离比较数字向量（嵌入的搜索）    df['distances'] = distances_from_embeddings(q_embeddings, df['embeddings'].values, distance_metric='cosine')    returns = []    cur_len = 0    for i, row in df.sort_values('distances', ascending=True).iterrows():        cur_len += row['n_tokens'] + 4        if cur_len > max_len:            break        returns.append(row["text"])    return "\n\n###\n\n".join(returns)
```

**11 开始实现问答**

```
def answer_question(        df,        model="text-davinci-003",        question="Am I allowed to publish model outputs to Twitter, without a human review?",        max_len=1800,        size="ada",        debug=False,        max_tokens=150,        stop_sequence=None):    """    Answer a question based on the most similar context from the dataframe texts    """    context = create_context(        question,        df,        max_len=max_len,        size=size,    )    if debug:        print("Context:\n" + context)        print("\n\n")    try:        response = openai.Completion.create(            prompt=f"Answer the question based on the context below, and if the question can't be answered based on the context, say \"I don't know\"\n\nContext: {context}\n\n---\n\nQuestion: {question}\nAnswer:",            temperature=0,            max_tokens=max_tokens,            top_p=1,            frequency_penalty=0,            presence_penalty=0,            stop=stop_sequence,            model=model,        )        return response["choices"][0]["text"].strip()    except Exception as e:        print(e)        return ""print(answer_question(df, question="What day is it?", debug=False))print(answer_question(df, question="What is our newest embeddings model?"))
```

结果示例：

![](https://mmbiz.qpic.cn/mmbiz_png/4j9C6A8ZYQFx4p58GnjNEVtqLXVtXnuunqW4JlFPyhVZpm43iang0km8AaNFGevv8wKOoevfw3CicOVtb6qCVicxg/640?wx_fmt=png)

其他
--

**为了快速搜索多个矢量，建议使用矢量数据库 ，以下是一些推荐**

> 地址：platform.openai.com/docs/guides/embeddings/limitations-risks

![](https://mmbiz.qpic.cn/mmbiz_png/4j9C6A8ZYQFx4p58GnjNEVtqLXVtXnuu49M9FYuiaUhPEtRwXsyLib1bmLxDibtMcficFGxovPAHKoy9PENW1vFBcA/640?wx_fmt=png)

### **推荐阅读**

• [Gpt进阶(四）:最简方式搭建自己的AI知识库（FastGPT+宝塔）](http://mp.weixin.qq.com/s?__biz=MzkzMDIxODk2MQ==&mid=2247486134&idx=1&sn=f9152903b9a8ec61755cac79ab2ef475&chksm=c27cdc08f50b551e899702c9754cf53ad79f42f6c2c140135e4a6c9e8ed95d2af8df56ebebd8&scene=21#wechat_redirect)  
• [Gpt进阶(三）：搭建本地的chatpdf（原理，文档处理，语义搜索等），详解](http://mp.weixin.qq.com/s?__biz=MzkzMDIxODk2MQ==&mid=2247486067&idx=1&sn=de399169b983fa5781a344a70001ded6&chksm=c27cdccdf50b55dbdc1f4b211d8dfd6491b387aef59da6859c874f44c36fa08dade71a2db384&scene=21#wechat_redirect)• [爆肝3天，正式上线AI免费学习网站-零栈](http://mp.weixin.qq.com/s?__biz=MzkzMDIxODk2MQ==&mid=2247486046&idx=1&sn=a611311bc16b87a54fe09a190baa16bf&chksm=c27cdce0f50b55f65093afe0f01d0ce9656ef7e925bce00441ed68caf1d161ed3c731bb87ab7&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/mmbiz_gif/7ibzJsmgW5wguO21SlkBAdxJgAicEOVCzDiaObyzEAEMTI527clib7gHvKfBtDu8MJZLwwEIVuVBmqfn01fmLDdTfQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1)