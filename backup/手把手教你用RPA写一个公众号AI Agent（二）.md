![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWTXA1fxdcMSG2naib9htFiaoedrFw1BhjUF8PFxWbicXvSTEgFWeWOl8ib84qrSOAOnGxTcsGf7JjhkPQ/640?wx_fmt=png&from=appmsg)

如果你对RPA+AI感兴趣，加我Fu_prompt,发送“公众号粉”。

《手把手教你用RPA写一个公众号AI Agent》的系列教程的内容如下：

1.  **自动采集对标账号的图文素材**
    
2.  自动使用ChatGPT生成图片
    
3.  自动使用ChatGPT改写文章
    
4.  自动上传图文，排版
    
5.  发布图文
    
6.  优化RPA各流程
    
7.  总结并且分享RPA机器人
    

在[手把手教你用RPA写一个公众号AI Agent（一）](http://mp.weixin.qq.com/s?__biz=Mzk0MTYxODA5MQ==&mid=2247483795&idx=1&sn=f6dfa5763a39ee54ef8bcd9465c8b69f&chksm=c2cee757f5b96e41dd6647809513061388897cd951a30d29595fb2c895018717041d58c6b114&scene=21#wechat_redirect)中已经将实现自动采集对标账号的图文素材的RPA的实现思路已经介绍了。

接下来我来介绍具体实操的部分。  

1\. 自定义对话框来设置输入参数。  

![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWTXA1fxdcMSG2naib9htFiaoewzXfvU1gxsBiaYOnicGYVicfibTBrnicb0PvicJbGnkLrpZrFlnibg3nuXZpg/640?wx_fmt=png&from=appmsg)

2\. 准备账号文件夹

![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWTXA1fxdcMSG2naib9htFiaoeyD1SGLAkmibiae0xpuTOHwSQib44QcW2T34auibKrKDAQphn2v1M8MsYWA/640?wx_fmt=png&from=appmsg)

文章根文件夹中存储了各个账号的文章。

![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWTXA1fxdcMSG2naib9htFiaoepKgesbnUbPh0IkmVnKuN2Y0u3dO1r2ea2sSCquP3lhh7tNSyga3cuQ/640?wx_fmt=png&from=appmsg)

3. 进入对标账号文章列表页面

![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWTXA1fxdcMSG2naib9htFiaoeOibbh2jf6bZJM1R9RxV4PMFVcPE5UdJ9ePxZakvhjBh4vplETb5eOIQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWTXA1fxdcMSG2naib9htFiaoeVOaIYvNQNxGrd0j6G8ZTuXvSwicdubUCG2FAPGGBhweuIwZIqZYhGuQ/640?wx_fmt=png&from=appmsg)

4. 跳到开始页码

![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWTXA1fxdcMSG2naib9htFiaoe3UDcUTZAdibEbWDQKuO6MXYGOYLmGn9tibicTbxwDq6X4JVM8cs4Ef4Xg/640?wx_fmt=png&from=appmsg)

5. 获取文章列表  

![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWTXA1fxdcMSG2naib9htFiaoe35lTXZ9TluFjcF0KccUkzW7PTPYjoM4ONgnJTL0Bx5FpAuNxKgicyXg/640?wx_fmt=png&from=appmsg)

6. 判断是否完成了预设的采集页数  

![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWTXA1fxdcMSG2naib9htFiaoeQkZyegKLZp7vRmdic38CYFlC4CDicomdysRebwzict7XHfpu3TYousHdQ/640?wx_fmt=png&from=appmsg)

7. 跳转到单文章网页

![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWTXA1fxdcMSG2naib9htFiaoeOYNrB4dibnFjibTnfT8Wx4KU6GxItu3JSNJL4ZhW4NoHLic28VjysicHSQ/640?wx_fmt=png&from=appmsg)

8. 获取标题和正文  

![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWTXA1fxdcMSG2naib9htFiaoebh0kf3Be8nSq1xyyRjDialwwOLKboiajpgNHZnINRkWwlqOCdJh8Dlow/640?wx_fmt=png&from=appmsg)

9. 写入标题和内容

![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWTXA1fxdcMSG2naib9htFiaoe8kvl6mAVNpCiaWDCWibygicMgPiaxHthKibIxYTibYbnqGdywZPzXZqc76OQ/640?wx_fmt=png&from=appmsg)

10.获取图片链接列表并下载图片  

![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWTXA1fxdcMSG2naib9htFiaoeAhrDjQo53xkOJnc3ibCmMOdoUzvuDDOJM72aibtiaVLPpyVP4c8Q4InGg/640?wx_fmt=png&from=appmsg)

11\. 判断是否已经采集完了该账号，如果没有，点击下一页，如果采集完了，则退出循环。

![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWTXA1fxdcMSG2naib9htFiaoe8ZCn3T5PvVdZBe8OXpWWylAs4ibYc25TNwkIxno6ia9DibnOpMp1UBaaA/640?wx_fmt=png&from=appmsg)

12\. 最终的采集效果。  

每个账号文件夹，都存储了各篇文章的文件夹  

![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWTXA1fxdcMSG2naib9htFiaoeAnsuXsKJJ6sVfCNWibOl7w7UrgZPYysOZiaIq5mVvp36y2ib3ia8OiaVN7A/640?wx_fmt=png&from=appmsg)

各篇文章的文件夹里面存放了文章的内容和图片文件

![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWTXA1fxdcMSG2naib9htFiaoeicjg7pHT7hZlBdIibNskTkAp7E0vHFTxsYPm9MicWHpaT2P95ID48icHvQ/640?wx_fmt=png&from=appmsg)

由于篇幅有限，无法完整地展示所有的配置细节，请添加我的知识星球，我会把详细的教程放在知识星球。![](https://mmbiz.qpic.cn/mmbiz_png/WkINSo9GVWRHqMIA5wZxSRGYVE93r4Ykib1seHw08IoZagGZKDJll7vTQcicZDibY4tSEyBtbUuhic7rI72QXnFFtA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
  

最后，如果你对RPA+AI感兴趣，加我Fu_prompt,发送“公众号粉”，我拉你进【RPA+AI技术交流群】。

如果你觉得我写得不错，请点赞，分享，在看一键三连，你的鼓励是我不断分享的动力。