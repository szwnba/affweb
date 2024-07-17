点关注，不迷路  

免费的AI学习交流群，加我微信发送暗号“W001”，邀请进群

往期精彩内容：  

[【绝对干货】AI提示工程(Prompt Engineering)最佳实践](http://mp.weixin.qq.com/s?__biz=MzU1MjgyOTA5NQ==&mid=2247483957&idx=1&sn=d26f75105d5905c8ddbbec1bd5e29f2c&chksm=fbfd6bfdcc8ae2eb393a2f3ec0b5a015032465e058a02b618e142e600a26b0a3cf6212b98b92&scene=21#wechat_redirect)  

[这两款Kimi Chat插件真香](http://mp.weixin.qq.com/s?__biz=MzU1MjgyOTA5NQ==&mid=2247484007&idx=1&sn=aacda2a5cc0cf180c5c11cece70e4cab&chksm=fbfd6bafcc8ae2b94e69e98073c86afd470bcb653c81ca4e262066ab1fdd12f2449dc2dec36f&scene=21#wechat_redirect)  

[AI智能体｜使用扣子Coze创建知识库，看这一篇就够了（新手必看）](http://mp.weixin.qq.com/s?__biz=MzU1MjgyOTA5NQ==&mid=2247484166&idx=1&sn=9d1dd89d9a7098a79bd8755624b15f99&chksm=fbfd6acecc8ae3d8173d47cf8d371a5a09640d3f698787b1b84eb2333265288001aa06766fd7&scene=21#wechat_redirect)  

[AI智能体｜使用扣子Coze搭建AI智能体，看这一篇就够了（新手必看）](http://mp.weixin.qq.com/s?__biz=MzU1MjgyOTA5NQ==&mid=2247484197&idx=1&sn=2765500d7156a9067e3c81cf0e5f1267&chksm=fbfd6aedcc8ae3fbc59ef654f45d0101836964ba421fbf92a02efc176a5ad9326a956db93399&scene=21#wechat_redirect)  

[AI智能体｜我把Coze Bot接入了微信公众号](http://mp.weixin.qq.com/s?__biz=MzU1MjgyOTA5NQ==&mid=2247484211&idx=1&sn=d043c7c1f5b42183b60f308694503d7c&chksm=fbfd6afbcc8ae3edd33c9d43cf2392113184b7ad5bfe16f98551a6c78b6d1cc264a62e06e842&scene=21#wechat_redirect)  

* * *

大家好，我是无界生长。

今天分享下如何使用Coze（扣子）创建AI绘画工作流，为后续通过Coze创建AI绘画助手做铺垫，学会了的话，欢迎分享转发！

![](https://mmbiz.qpic.cn/mmbiz_png/Cgaia2X4JYvOnHfYwTzxLxg9Y4uDu8CFWOu3Z7KwlDV8dDMzwVDibq0yGA9BsSfLojFcdRpDuibiaZxvicKh3zyUJaw/640?wx_fmt=png&from=appmsg)

扣子Coze平台集成了超过60种类型的插件，其中包含了AI绘画相关的插件。我们这里使用通义万相这个插件的文生图工具，通过文字描述生成图像。如果你认为通义万相不满足需求，可以尝试使用官方集成的其他绘画插件，或者开发自定义的绘画插件。

![](https://mmbiz.qpic.cn/mmbiz_png/Cgaia2X4JYvOnHfYwTzxLxg9Y4uDu8CFWeEqy5ibm3sPJLRn5jFKibScicBCwlnCosibTM86jpTGCOIOzcBh9XU3KfA/640?wx_fmt=png&from=appmsg)
  

输入参数
----

| 参数名 | 参数类型 | 参数说明 |
| --- | --- | --- |
| n | integer | 生成几张图片，默认一张 |
| prompt | string | 用户关于图片的描述 |
| size | integer | 0:1024_1024, 1:720_1280, 2:1280*720 |
| style | integer | 0:默认风格, 1:3D卡通, 2:动画, 3:油画, 4:水彩, 5:素描, 6:中国画, 7:扁平插画 |

返回结果
----

![](https://mmbiz.qpic.cn/mmbiz_png/Cgaia2X4JYvOnHfYwTzxLxg9Y4uDu8CFWPiaGmSFxOTsvG5reic2VhonHibXu8oaCpPnv7nibxyrGn8ZS4Rmc6cfjgw/640?wx_fmt=png&from=appmsg)

登陆Coze国内版官网：https://www.coze.cn ，点击“创建工作流”。  

![](https://mmbiz.qpic.cn/mmbiz_png/Cgaia2X4JYvOnHfYwTzxLxg9Y4uDu8CFWgGawk5wUMZTbgbgsh2FxEKczZAdRAKpOaeTexVO6Jiaia3KlibkPnnstg/640?wx_fmt=png&from=appmsg)

填写工作流的名称和描述。  

![](https://mmbiz.qpic.cn/mmbiz_png/Cgaia2X4JYvOnHfYwTzxLxg9Y4uDu8CFWRXbAwtQBFnJibuXgNmHQ5KaEoGTwib5gfDgYUpro8abELc7tLVicVaKZw/640?wx_fmt=png&from=appmsg)

进入工作流编辑页面，默认只有“开始”和“结束”节点，可以在“开始”和“结束”节点之间添加“基础节点”、“插件”、和“工作流”。  

![](https://mmbiz.qpic.cn/mmbiz_png/Cgaia2X4JYvOnHfYwTzxLxg9Y4uDu8CFWXgtIIGkXcUJwaa8ffiaxxUnMrNKTVdTicOwneoPy2GsCxy3ibwthsGFLQ/640?wx_fmt=png&from=appmsg)

*   “开始”节点：接收大模型从用户输入内容中解析出的参数
    
*   “文生图”节点：从“开始”节点接收输入参数，生成图片，返回结果
    
*   “选择器”节点：对“文生图”节点的返回结果做条件判断，如果图片生成成功，走到“图片生成成功”节点，否则走到“图片生成失败”节点
    
*   “图片生成成功”节点：打印信息，输出“文生图”节点的返回结果中的image_urls内容
    
*   “图片生成失败”节点：打印信息，输出“文生图”节点的返回结果中的log_id、msg、code内容
    
*   “结束”节点：生成最终结果，返回变量，由Bot生成回答
    

![](https://mmbiz.qpic.cn/mmbiz_png/Cgaia2X4JYvOnHfYwTzxLxg9Y4uDu8CFWA2CxPet4YNGicH0QX1liaRlu23VfQqranPQM4dOvtgaEyrnb5B8mGUiaA/640?wx_fmt=png&from=appmsg)

点击右上角的试运行按钮，填写参数，检查工作流运行结果是否符合预期  

![](https://mmbiz.qpic.cn/mmbiz_png/Cgaia2X4JYvOnHfYwTzxLxg9Y4uDu8CFW6WlrklK91LQTWyevL2wibhh3WewE0kDSnMdNicEI17ibZJ7sV0NEPu6KQ/640?wx_fmt=png&from=appmsg)

如果需要反复输入相同参数测试工作流，可以勾选“运行后自动将此数据保存为测试集”，填写测试集名称和描述即可。  

![](https://mmbiz.qpic.cn/mmbiz_png/Cgaia2X4JYvOnHfYwTzxLxg9Y4uDu8CFWTzica1E3c3mMRJKiaSazESyBfTLqRVKDSCoicn3Ha6brBpTqerxZqATzQ/640?wx_fmt=png&from=appmsg)

试运行工作流通过后，点击右上角的“发布”按钮。（发布工作流必须要试运行通过，否则不允许发布）  

![](https://mmbiz.qpic.cn/mmbiz_png/Cgaia2X4JYvOnHfYwTzxLxg9Y4uDu8CFWE3Gka1TpNG8BZfhXcMLHw54C8FrpLx3frib9AKTticRxDmbXicNMZI6Tw/640?wx_fmt=png&from=appmsg)

发布成功后，可以在工作流界面看到我们制作好的AI绘画工作流了  

![](https://mmbiz.qpic.cn/mmbiz_png/Cgaia2X4JYvOnHfYwTzxLxg9Y4uDu8CFW5KlolsZjDdsx1y3GZdVvak4eJn1PXUyYc39JMLOoHZmfUKsQt2dOqQ/640?wx_fmt=png&from=appmsg)

本文详细的介绍了如何使用通义万相的文生图工具制作AI绘画工作流，并对工作流进行测试和发布。上述工作流通过Coze Bot 发布到了Bot商店，想体验绘画助手可以在Coze或者豆包搜索：无界生长的绘画助手。如果看完还没学会的话，可以私信我。学会了的话，欢迎转发分享给你的朋友们。

* * *

我是无界生长，如果你觉得我分享的内容对你有帮助，麻烦点个关注，带你一起玩转AI！

私人微信限时开放一天  

![](https://mmbiz.qpic.cn/mmbiz_jpg/Cgaia2X4JYvNEaFubWanTVcNfcibCn6DHVVz69byZhXmcCPL2vDv3jS1fBEZkfatoeTjaMqvibukSelscX0WVQYibQ/640?wx_fmt=jpeg&from=appmsg)