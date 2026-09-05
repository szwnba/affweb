今天给大家安利一个GitHub上的宝藏项目：**public-apis**。有了它，你再也不用满世界翻免费接口了。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4A1TDwCmIxH7ziama5Xia6Jer36XlCFsv9UmDicMsdUyofl69uU5kcqvUSNJv0AOw471z2kUc8s3KicdicEicyedW1WQJoTPF3sYn1Pu0rPVhGMSg/640?wx_fmt=png&from=appmsg#imgIndex=0)

它到底是什么？
-------

public-apis 诞生于2016年，是一个社区维护的免费公共API集合列表。说白了，就是把互联网上能用的免费API全收拾进一张大表里，打开就能挑。

整个项目的核心资产就是一份README.md文件——**1900行代码，全是分类好的API目录**。没写复杂的代码框架，没建大型数据库，就靠一张大表格解决了千万开发者的痛点。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/4A1TDwCmIxHiaWI0p4O5aKtPtmaoKqicteZEVLeGTFcc9FhANLWOEQ3h5773od1fWf4hGCUyDXn9Rq0x0FxD3pfRPC3VV8vPaxwEI6D1MSXZM/640?wx_fmt=png&from=appmsg#imgIndex=1)

目前在GitHub上已经斩获**超过47万颗Star**，是全球最受欢迎的免费API合集项目。

硬核数据告诉你它有多强
-----------

| 

指标

 | 

数据

 |
| --- | --- |
| 

GitHub Star

 | 

470,000+ ⭐

 |
| 

收录API数量

 | 

1,600+ 个

 |
| 

分类覆盖

 | 

50+ 个大类

 |
| 

贡献者人数

 | 

800+ 人

 |
| 

累计提交

 | 

4,500+ 次

 |
| 

开源协议

 | 

MIT

 |

更香的是——**45%的收录API完全不需要认证，开箱即用**；90%支持HTTPS；26%明确标注支持CORS，浏览器端直接fetch就能用。

50+分类，总有一款适合你
-------------

整个API清单分了50多个大类，基本囊括了开发中可能碰到的主流场景：

*   **天气**：OpenWeatherMap、Open-Meteo——天气预报小程序、出行助手
    
*   **金融**：Fixer汇率、CoinGecko加密币——汇率换算工具、加密货币看板
    
*   **动物**：Cat Facts、Dog CEO、Cataas——随机萌宠图片、趣味卡片
    
*   **新闻**：News API、HackerNews——资讯聚合、技术热点抓取
    
*   **音乐**：Spotify元数据、Deezer——音乐识别、歌单推荐
    
*   **地理位置**：IPstack、OpenStreetMap——IP定位、地址解析
    
*   **机器学习**：图像识别、NLP、文本分析——AI入门练习
    

怎么用？3分钟上手
---------

每个API条目都有五个标准字段：**名称、描述、是否需要认证（Auth）、是否支持HTTPS、是否支持CORS**。

找接口时顺手扫一遍这几个标记，能省去点进链接再逐步排查的功夫。

**前端直调**：筛选 **No Auth + HTTPS + CORS=Yes** 的组合，省去后端转发的步骤，直接在浏览器里fetch就能拿到数据。

**举个栗子**：想做一个随机狗狗图片的页面？几行代码搞定：

```
<html><body>  <img id="dog" /></body><script>  fetch("https://dog.ceo/api/breeds/image/random")    .then(response => response.json())    .then(data => {      document.getElementById("dog").src = data.message;    });</script></html>
```

全程0花费，5分钟搞定！

这些API好玩到停不下来
------------

在public-apis里泡久了，总有几个让人爱不释手的：

*   **NASA APOD API**：每天一张NASA的宇宙美图+科普短文，做桌面应用绝了
    
*   **The Cat API**：云吸猫神器！随机猫咪图片/动图/GIF，代码写崩了的治愈良药
    
*   **Open-Meteo**：免费天气预报，无需KEY，地理数据贼全
    
*   **CoinGecko**：币圈行情实时抓取
    
*   **PoetryDB**：海量经典诗歌，文青开发者必备
    

进阶玩法：AI Agent的“弹药库”
-------------------

现在做AI Agent，最缺的往往不是模型，而是“能把世界接进来”的弹药。API就是Agent连接真实世界的接口。

public-apis已经成为AI Agent开发者的重要资源库。社区已经开发了**MCP（Model Context Protocol）服务器**，让AI助手可以智能搜索和调用public-apis中的API。还有开发者把它接入了DeepSeek Harness，让Agent能搜索1716个免费API并直接调用。

甚至还有**命令行工具（CLI）** ，终端里就能搜索和调用API。

> 地址：https://github.com/public-apis/public-apis