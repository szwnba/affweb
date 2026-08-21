**目前比较有效的几种微信公众号的采集方式:**  
1、通过web端素材管理接口的方式  
2、通过appium从手机端  
3、通过逆向工程暴力获取  
4、通过第三方服务接口  
5、搜狗微信公众号接口(已凉)  
**个人及小团体对公众号内容获取数量不多的情况下一般都会采用前两种相对简单便捷成本低的方式去获取内容,不差钱的团队肯定就买第三方服务了,靠提供微信公众号采集接口的服务盈利的肯定就是逆向工程了.我介绍第一种比较简单适合小规模采集的方案**

1、首先我们需要注册个属于自己的公众号平台[微信公众号注册地址](https://mp.weixin.qq.com/cgi-bin/readtemplate?t=register/step1_tmpl&lang=zh_CN&token=)  
2、注册成功后进入点击如图所示的素材管理![](https://img-blog.csdnimg.cn/20200716151301247.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjYwMzc4NA==,size_16,color_FFFFFF,t_70)
  
3、点击素材管理后点击如图所示的新建图文消息![](https://img-blog.csdnimg.cn/20200716151350391.png)
  
4、点击新建图文消息后点击如图所示的超链接![](https://img-blog.csdnimg.cn/20200716151428132.png)
  
5、点解超链接后点击如图所示的选择其他公众号![](https://img-blog.csdnimg.cn/20200716151511326.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjYwMzc4NA==,size_16,color_FFFFFF,t_70)
  
6、这时候就可以输入我们想要获取公众号内容的名字去搜索查询  
![](https://img-blog.csdnimg.cn/20200716151604578.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjYwMzc4NA==,size_16,color_FFFFFF,t_70)
  
7、我们通过抓包查看分析下  
![](https://img-blog.csdnimg.cn/20200716151816598.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjYwMzc4NA==,size_16,color_FFFFFF,t_70)
![](https://img-blog.csdnimg.cn/20200716151743552.png)
  
**通过抓包也不难分析出请求参数的话就是我截图那样,稍后代码中将会呈现出来,然后通过请求response返回的内容也可以看到例如title、link、概要、更新时间等等的内容这里我们主要取title和url,我要说明一下我们通过这种方式获取的link是临时链接并不是手机端打开那样的永久链接但是也无妨我们只要通过访问临时链接把内容下载下来就可以了这个临时链接的有效时长其实也是很长时间的,如果我们想转换成永久链接我们可以通过手机端打开得到的就是永久链接地址了**

**大体概述下代码流程**  
1、调用登录函数login_wechat通过webdrive扫码登录微信公众号,这里不采用自动输入账号密码的方式登录是因为即便输入账号密码还是需要扫码确认  
2、登录成功获取cookie信息保存本地cookie.txt文件  
3、调用采集函数get_content获取cookie.txt的cookie值并提取token  
4、拼接好我们需要的请求参数后请求素材管理中接口中我们待采集公众号信息  
5、通过请求接口获取文章的title、link并实现翻页功能  
6、拿到我们待采集文章的link后请求link地址下载文章内容  
7、将title、link、内容对应保存csv文件

```
 `import re
import csv
import json
import time
import random
import requests
from selenium import webdriver

def login_wechat():
    browser = webdriver.Chrome()
    browser.get("https://mp.weixin.qq.com/")
    time.sleep(2)
    print("请拿手机扫码二维码登录公众号")
    time.sleep(30)
    print("登录成功")
    
    cookie_items = browser.get_cookies()
    post = {}
    
    for cookie_item in cookie_items:
        post[cookie_item['name']] = cookie_item['value']
    cookie_str = json.dumps(post)
    with open('cookie.txt', 'w+', encoding='utf-8') as f:
        f.write(cookie_str)
    print("cookies信息已保存到本地")
    browser.quit()

def get_content(ky):
    
    url = 'https://mp.weixin.qq.com' 
    header = {
        "HOST": "mp.weixin.qq.com",
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36"
    }
    
    with open('cookie.txt', 'r', encoding='utf-8') as f:
        cookie = f.read()
    cookies = json.loads(cookie)
    
    session = requests.Session()
    session.keep_alive = False
    
    session.adapters.DEFAULT_RETRIES = 10
    time.sleep(5)
    
    response = session.get(url=url, cookies=cookies)
    token = re.findall(r'token=(\d+)', str(response.url))[0]
    time.sleep(2)
    
    search_url = 'https://mp.weixin.qq.com/cgi-bin/searchbiz?'
    
    query_id = {
        'action': 'search_biz',
        'token': token,
        'lang': 'zh_CN',
        'f': 'json',
        'ajax': '1',
        'random': random.random(),
        'query': ky,
        'begin': '0',
        'count': '5'
    }
    
    search_response = session.get(search_url,cookies=cookies,headers=header,params=query_id)
    
    lists = search_response.json().get('list')[0]
    print(lists)
    
    fakeid = lists.get('fakeid')

    
    appmsg_url = 'https://mp.weixin.qq.com/cgi-bin/appmsg?'
    
    query_id_data = {
        'token': token,
        'lang': 'zh_CN',
        'f': 'json',
        'ajax': '1',
        'random': random.random(),
        'action': 'list_ex',
        'begin': '0',  
        'count': '5',
        'query': '',
        'fakeid': fakeid,
        'type': '9'
    }
    
    appmsg_response = session.get(appmsg_url,cookies=cookies,headers=header,params=query_id_data)
    
    max_num = appmsg_response.json().get('app_msg_cnt')
    
    num = int(int(max_num) / 5)
    print(num)
    
    begin = 0
    seq = 0
    while num + 1 > 0:
        query_id_data = {
            'token': token,
            'lang': 'zh_CN',
            'f': 'json',
            'ajax': '1',
            'random': random.random(),
            'action': 'list_ex',
            'begin': '{}'.format(str(begin)),
            'count': '5',
            'query': '',
            'fakeid': fakeid,
            'type': '9'
        }
        print('正在翻页：--------------', begin/5)
        time.sleep(8)

        
        query_fakeid_response = session.get(appmsg_url,cookies=cookies,headers=header,params=query_id_data)
        fakeid_list = query_fakeid_response.json().get('app_msg_list')
        if fakeid_list:
            for item in fakeid_list:
                content_link = item.get('link')
                content_title = item.get('title')
                fileName = ky + '.txt'
                seq += 1
                content_body = session.get(content_link).text
                info = [content_title, content_link, content_body]
                save(ky,info)
        begin = int(begin)
        begin += 5

def csv_head(ky):
    ky = ky
    head = ['content_title', 'content_link', 'content_body',]
    csvFile = open(fr'{ky}.csv', 'w', newline='', encoding='utf-8-sig')  
    writer = csv.writer(csvFile)
    writer.writerow(head)
    csvFile.close()

def save(ky,info):
    ky = ky
    csvFile = open(fr'{ky}.csv', 'a+', newline='', encoding='utf-8-sig')  
    writer = csv.writer(csvFile)
    writer.writerow(info)
    csvFile.close()

if __name__ == '__main__':
    ky = '肯德基'
    login_wechat()
    csv_head(ky)
    get_content(ky)` 

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
*   65
*   66
*   67
*   68
*   69
*   70
*   71
*   72
*   73
*   74
*   75
*   76
*   77
*   78
*   79
*   80
*   81
*   82
*   83
*   84
*   85
*   86
*   87
*   88
*   89
*   90
*   91
*   92
*   93
*   94
*   95
*   96
*   97
*   98
*   99
*   100
*   101
*   102
*   103
*   104
*   105
*   106
*   107
*   108
*   109
*   110
*   111
*   112
*   113
*   114
*   115
*   116
*   117
*   118
*   119
*   120
*   121
*   122
*   123
*   124
*   125
*   126
*   127
*   128
*   129
*   130
*   131
*   132
*   133
*   134
*   135
*   136
*   137
*   138
*   139
*   140
*   141
*   142
*   143
*   144
*   145
*   146
*   147
*   148
*   149
*   150
*   151
*   152
*   153
*   154


```