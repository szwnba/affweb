![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/WCrDl4BUjHwezsD47raUozj3s3056wJ0wsVPxpNhH4ItXGKG62eox9n09tqgd5hDsGiaj1iaaMNmtKCXdaJR6PDw/640?wx_fmt=jpeg&from=appmsg)

**Claude Dev是我认为市面上最强的AI程序员。** 

它不仅是一个开源版的Cursor，而且比Cursor的composer还要猛。

本文我将用一个最近很火的李继刚提示词做一个占卜应用，来演示一下 Claude dev 有多好用。

我们知道Cursor的composer虽然猛，但是在依赖安装的时候，他只是给出用什么指令安装，并不能替用户安装。

**而Claude Dev能够直接替用户安装好依赖，而且还能够识别安装的时候错在哪里。** 

![](https://mmbiz.qpic.cn/sz_mmbiz_png/WCrDl4BUjHwezsD47raUozj3s3056wJ0HuzbEDz2DOSXvBEjGQjribibs9bUySk3XY6SF4QcW1P2ZHoHAu1DgYIQ/640?wx_fmt=png&from=appmsg)

比如这里的&&连接号，在安装的过程中报错，它能自动识别出错误，然后分开一步一步运行，**这一点比要付费25刀的Replit还要强。** 

**同时Claude Dev还能直接替你创建需要的文件和写好代码。** 

先看看最终的成果：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/WCrDl4BUjHwezsD47raUozj3s3056wJ0LiaPT2ticUmlFI8MDY0wvVtexPLMWQZd5HOXU2hUKy1ic4orIHzp62fCg/640?wx_fmt=png&from=appmsg)

**开始实操：** 

**第一步：白嫖V0做前端**  

要V0迅速帮我搞一个漂亮的React前端，反手复制代码留着待会用。（V0每天能免费使用10几次）  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/WCrDl4BUjHwezsD47raUozj3s3056wJ0yMJdicod6ymN6QYsLL4OgxWfPaJzHibO5mre13URgeDwBGneOBHjGcrg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/WCrDl4BUjHwezsD47raUozj3s3056wJ0ChjhUOvgzKyfaGSvW0PicecFBJtfFVoqicaVdO8ibjI7Wk9dQSH4MrlhQ/640?wx_fmt=png&from=appmsg)

**第二步：安装设置Claude Dev**

\- 安装：以插件的形式在Cursor或者VsCode安装

![](https://mmbiz.qpic.cn/sz_mmbiz_png/WCrDl4BUjHwezsD47raUozj3s3056wJ0fWDAxRIDu0o3ug6eAs4icVm4IXOCGF61GyG4DfKwWsE9l5S4bg98s9Q/640?wx_fmt=png&from=appmsg)

\- 设置：我这里用openrouter的Claude的api，不会用的有一个国产的中转平台也挺好用。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/WCrDl4BUjHwezsD47raUozj3s3056wJ0zDvFFOACEecvjIFZSFJzCPibK5QsI0u2q0htjbAEwDTYQgFP53avxeA/640?wx_fmt=png&from=appmsg)

**第三步：开始聊天编程**

\- 把V0代码放进去，要求Claude Dev帮我创建一个React项目  

\-1：Claude Dev能够看到每一次API消耗的费用  

\-2：Claude Dev能把每一个问题都用思维链拆分，这也是它强大的原因之一

\-3：自动给出安装依赖的代码，你只需要按确定就会自动运行  

\-4：选择接受或者拒绝，接受就会自动安装依赖  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/WCrDl4BUjHwezsD47raUozj3s3056wJ0mkRROXx7HXXzx4Z0rz4jy29ChocEjDbC1OK6mXiawvZCMxJAwKmSafw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/WCrDl4BUjHwezsD47raUozj3s3056wJ0BBQTEo1a5cibkjaUVr5icQjePnmkwIPy1ZC3Ccjoxlld2ibG9mbGIepJQ/640?wx_fmt=png&from=appmsg)

\-5：和Cursor的composer相似的自动生成文件并且完成写代码的功能

\-6：选择Save保存，就能保存为你自动创建的文件

![](https://mmbiz.qpic.cn/sz_mmbiz_png/WCrDl4BUjHwezsD47raUozj3s3056wJ0HHNRmxchafCUzH5XUc0jNxXdibA8d7W7T1OZAw7QLnHWqC1nWeLiaGwQ/640?wx_fmt=png&from=appmsg)

到这里Claude Dev已经帮我完成了以下文件的自动创建：

\- React必须要的依赖文件

\- env 放我的openrouter的api密钥的文件

**全程我就做了两件事情：** 

\- 填入写好的提示词

\- 填入API密钥

**不存在什么安装依赖，什么创建文件之类的事情。** 

![](https://mmbiz.qpic.cn/sz_mmbiz_png/WCrDl4BUjHwezsD47raUozj3s3056wJ0UNRiaaxetsp6mDCsck3GTGgOEKWudPoeWHuxpy2hcQDqr4sZk2gogvg/640?wx_fmt=png&from=appmsg)

最终，Claude Dev还会把这次消耗的总金额写出来：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/WCrDl4BUjHwezsD47raUozj3s3056wJ0KzexO8DVr2UVhFKWX33wM3pADDU9ek44pdsJeLURibuYSaYeJVGS3FQ/640?wx_fmt=png&from=appmsg)

\- 输入494234个token

\- 输出12925个token  

\- 消耗0.6672美金

感受下来用户体验真的很好，除了贵其他没毛病。  

但其实可以用其他模型替代，甚至可以本地的大模型ollama。  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/WCrDl4BUjHwezsD47raUozj3s3056wJ0d6UbjAbpyDhmkVib0gAeia5omYLcgBTN8FyFOdQm8sWeIwy75uRM4upg/640?wx_fmt=png&from=appmsg)

此外Claude Dev还支持视觉分析，可以截报错的图片让他修复。

感兴趣的朋友可以去尝试。

https://github.com/saoudrizwan/claude-dev

最后讲下我自己运营的一个社群今天上线了。

1.  86篇AI产品增长策略和案例（日更）
    
2.  AI精选开源项目（日更）
    
3.  AI资讯日报（日更）
    
4.  AI杀手级应用追踪
    
5.  70个AI变现案例合集
    
6.  其他付费的AI课程网盘资源
    

**内容如上，至于价格一年就两杯星巴克的钱。** 

![](https://mmbiz.qpic.cn/sz_mmbiz_png/WCrDl4BUjHwezsD47raUozj3s3056wJ05LCeAabGWec1DH2K87GFVZTrSUL3tyn3mhspN8tM9sEDg9DLjrRURw/640?wx_fmt=png&from=appmsg)