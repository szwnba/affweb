![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/3WAfPxicpXckIOb8SplYOrrqOZ4S56CkDApVvMfPFky7xvoTjR1KfOqM7nn0mS82MYTUtGia4T6coOOL71L1pUZQ/640?wx_fmt=jpeg&from=appmsg)

有人的地方就会有江湖，有需求的地方就会有商机。

你以为Coze是个大善人，免费让你用大模型，提供平台给你免费用，人家终究是要盈利的，最近Coze收费事件就在网上讨论的沸沸扬扬。  

作为资深白嫖党，即使我平时不怎么使用Coze，很多类似的开源项目都可以完美替代Coze。但不得不承认，Coze对技术小白太友好了，注册个账号，随便点几下就能体验AI带来的成就感。所以Coze的用户基数还是很大的，很多人都已经在上面创建了解决实际问题的工作流，换平台对于大多数人来说不是最好的选择。

前几天在我的订阅专栏中发了一篇教程，将兼容openai接口的大模型接入coze工作流。  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/3WAfPxicpXckgtG9QrhK9m0FBxAGqO1ialHaXF2W04ulL8icaiamewPXRcm40o7S7OGF5uRnk4QSZ5Q0VLp6sgyDQg/640?wx_fmt=png&from=appmsg)

大体思路就是单独保存一个工作流作为模型节点供其他工作流在过程中调用。

经过测试完美运行，整个流程消耗coze 0 token，也就是0元购~~

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/3WAfPxicpXclhpLkePDZ1XoU9wCDGy3nAMRwCzBtOAzysC5svXNd2mdkvgDIwLkNZFbric7Bw2wAm71iatXE3ibKtQ/640?wx_fmt=jpeg&wxfrom=3)

废话不多说，上代码  

```javascript
async function main({ params }: Args): Promise<Output> {

const url = '接口地址';

const bearerToken = 'api key';

const headers = new Headers({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${bearerToken}` 
});


const body = JSON.stringify({
  "model": "模型名称",
  "messages": [
    {
      "role": "user",
      "content": params.input
    }
  ],
  "use_search": true
});

try {

  const response = await fetch(url, {
    method: 'POST',
    headers: headers,
    body: body,
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }


  const data = await response.json();
  return data.choices[0].message.content; 
} catch (error) {
  console.error('Error:', error);

  throw error; 
}
}
```

以上代码替换接口地址，api key，模型名称

如果你以为只是调用外部大模型那么简单就错了，这个应用最好的地方在于可以调用任何有接口的其他平台的服务。  

例如你可以在coze中调用dify执行，也可以在coze中调用自建的stable diffusion或者comfy UI，还可以远程指令启动异地办公室部署的PRA机器人，甚至是调用几乎所有抱脸上的项目。。。。。。  

更多可能留给脑洞大开的你们。  

这里是古哒哒研究所，擅长各种雕虫小技~~  

更多AI技巧请关注我的专栏，加入专栏读者群享免费答疑解惑

**专栏下集预告：创建入门版claude3免费接口并接入微信**

**专栏下下集预告：高级版claude3免费接口搭建，接入任意应用**

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/3WAfPxicpXckIOb8SplYOrrqOZ4S56CkDAHqic19SbZnhmLIgO8CD7hoJRAXswbsauLayouOGrUz97Rdn231Zn4g/640?wx_fmt=jpeg)

[快手AI革命：Kolors文生图大模型开源，开启艺术创作新纪元！](http://mp.weixin.qq.com/s?__biz=MzIxMjY3MzgyMw==&mid=2247486017&idx=1&sn=702b185184d51693fd6942233b5a2b21&chksm=97433e31a034b72721f777ef91b54081d9ba727fe8e58d73851aad921850611b7399c0a3e98b&scene=21#wechat_redirect)  

[简单三步老照片动起来，让49.9的镰刀割不动你](http://mp.weixin.qq.com/s?__biz=MzIxMjY3MzgyMw==&mid=2247485988&idx=1&sn=8c651a315f4f215636d73af8276f37aa&chksm=97433e54a034b742759e9ebdada87efcdd9199877c46d362d1e2c2794e07bd7be7e4f8aac8a4&scene=21#wechat_redirect)  

[无需本地部署！免费使用开源大模型API](http://mp.weixin.qq.com/s?__biz=MzIxMjY3MzgyMw==&mid=2247485975&idx=1&sn=eeafb3f609af7ac7570d1ed11dcad9e7&chksm=97433e67a034b7718a5f130b6673c879e0eb5fc89e8a8404d5f14e89816768a08b6c16a732cd&scene=21#wechat_redirect)  

[云端部署Stable Diffusion，价值8万元显卡免费用！](http://mp.weixin.qq.com/s?__biz=MzIxMjY3MzgyMw==&mid=2247485956&idx=1&sn=7ce0efeafcca0b9414cf36cdd88e9d0d&chksm=97433e74a034b762ff515ad605a2b83e7d0ff3639175e9583aecb1829bc26813cdc890857d9d&scene=21#wechat_redirect)

[无需本地部署！免费使用开源大模型API](http://mp.weixin.qq.com/s?__biz=MzIxMjY3MzgyMw==&mid=2247485975&idx=1&sn=eeafb3f609af7ac7570d1ed11dcad9e7&chksm=97433e67a034b7718a5f130b6673c879e0eb5fc89e8a8404d5f14e89816768a08b6c16a732cd&scene=21#wechat_redirect)  

[AI搜索引擎私有化部署：Gemma2+Perplexica，拉爆Llama3 Qwen2](http://mp.weixin.qq.com/s?__biz=MzIxMjY3MzgyMw==&mid=2247485938&idx=1&sn=732f55b8d57f886c0d593b1e56c20c82&chksm=97433d82a034b494074c7014c4bdcc464bb268fbdeb111614b3149da451f1c138839814e40a7&scene=21#wechat_redirect)  

[统一回复：别再问我微信能不能接入开源这个那个模型，能接入所有模型，云端的本地的。我说的~~](http://mp.weixin.qq.com/s?__biz=MzIxMjY3MzgyMw==&mid=2247485918&idx=1&sn=88f6552dc4b0e3b14da01c57deb88557&chksm=97433daea034b4b85ddf48ec1b4f71cd3336b99ac6206402fe007160040eceda7f7ee0de91b4&scene=21#wechat_redirect)  

[一个简单的演示，开源项目免费部署云端，墙内可访问，带API接口，套路适用几乎所有AI项目，门票这就值了](http://mp.weixin.qq.com/s?__biz=MzIxMjY3MzgyMw==&mid=2247485907&idx=1&sn=436fc53579d277bc97cf9abe5fea6d45&chksm=97433da3a034b4b58d97a820523ec5895799243a570a446a4ebc523431d7c018650a4e6d4a79&scene=21#wechat_redirect)  

[薅GPT4o羊毛，无需自建接口！完美闭环~~](http://mp.weixin.qq.com/s?__biz=MzIxMjY3MzgyMw==&mid=2247485876&idx=1&sn=d838455225c63be9afd8ff6bf5d155f9&chksm=97433dc4a034b4d20d8bdf6ea5e64a56baeaadee5fdcb0dfb7cac834517e6f214bd0193c6d77&scene=21#wechat_redirect)  

[我的模型听我的~~破解大模型的审查机制，提升模型生成能力，探索无限可能！](http://mp.weixin.qq.com/s?__biz=MzIxMjY3MzgyMw==&mid=2247485795&idx=1&sn=3ef4c955fe3c54f6a13357d83a7d6e51&chksm=97433d13a034b405e77bfa2a5c50ca7398403eb0a81346f6999d2ff03a1ea683a83ebedf6fd3&scene=21#wechat_redirect)  

[Coze接入个人微信，下载解压即用](http://mp.weixin.qq.com/s?__biz=MzIxMjY3MzgyMw==&mid=2247485728&idx=1&sn=0cb15118a28ccced63c0b42ec44de72c&chksm=97433d50a034b446087577d8f006aa04a27dbba0a151872323b0b021022dd62d4667965d74fc&scene=21#wechat_redirect)

[Open GPT-4o可本地部署支持多模态](http://mp.weixin.qq.com/s?__biz=MzIxMjY3MzgyMw==&mid=2247485713&idx=1&sn=43da81b11be5ec104dd4957a739727c7&chksm=97433d61a034b477dbde748582f15b947d3d9778df058860a2d8e56a6b2d7fe2595cd0d8be31&scene=21#wechat_redirect)  

[Qwen2：免费翻译与数据分析的实用技巧](http://mp.weixin.qq.com/s?__biz=MzIxMjY3MzgyMw==&mid=2247485689&idx=1&sn=3f650629d2a21013ac38a315d91371a6&chksm=97433c89a034b59f35fb60e756925d4b08359a4bda8f55572806681b54c8ba56290c4a96144c&scene=21#wechat_redirect)

[超越Llama3：快速体验本地部署glm-4-9b支持高并发请求](http://mp.weixin.qq.com/s?__biz=MzIxMjY3MzgyMw==&mid=2247485618&idx=1&sn=c8910decd51996d5907a127e3b9edb98&chksm=97433cc2a034b5d46d17cdfae5c8fe3e35b2ad3f94a6d0b06e008d5950de026c3d4eaf154342&scene=21#wechat_redirect)

[拒绝套壳山寨：原生GPT-4o免费接入个人微信，挂载本地知识库，不限次数，量大管饱](http://mp.weixin.qq.com/s?__biz=MzIxMjY3MzgyMw==&mid=2247485581&idx=1&sn=b8c283aa6bd86bb818b8703b4c0bbd7b&chksm=97433cfda034b5eb7f9cb357e1087b449c991a91747248576ac2cf888cde720f464b870d7eb7&scene=21#wechat_redirect)  

[影刀RPA演示：无限免费的GPT-4o](http://mp.weixin.qq.com/s?__biz=MzIxMjY3MzgyMw==&mid=2247485562&idx=1&sn=f79b2864fbf151268cf81d3703ab8768&chksm=97433c0aa034b51c76df28ce77196244941eca730a020ae52b519439c009fed73e610eb2f147&scene=21#wechat_redirect)  

[AutoGen Studio：构建多智能体工作流解决方案](http://mp.weixin.qq.com/s?__biz=MzIxMjY3MzgyMw==&mid=2247485536&idx=1&sn=a101d038b4e214ccf697689f72ed184f&chksm=97433c10a034b506637ae52a6f80f4e4e6e0a8dadde422e30de7b6e421f291467d8b3f4e2fd0&scene=21#wechat_redirect)  

[挑战GPT4?？Kimi+Qwen多模型协作Agent](http://mp.weixin.qq.com/s?__biz=MzIxMjY3MzgyMw==&mid=2247485467&idx=1&sn=b7e6c03f9ba3968fd00a43ac0c2e0caa&chksm=97433c6ba034b57d11fb58c84740655cd29fdd1f4b146d74cf4fcb2d1f435d1419ad275a6682&scene=21#wechat_redirect)  

[吊打Coze：原生Kimi接入个人微信，免费接入，打包下载解压即用](http://mp.weixin.qq.com/s?__biz=MzIxMjY3MzgyMw==&mid=2247485440&idx=1&sn=90ed6755567fecd1823ed491e8fa28fa&chksm=97433c70a034b566ef5ed0f20129a9d4fd20d264e44f18daed7c13885f6d60c99830ae9b4f37&scene=21#wechat_redirect)  

[so easy：月之暗面Kimi接入微信只要三分钟](http://mp.weixin.qq.com/s?__biz=MzIxMjY3MzgyMw==&mid=2247485420&idx=1&sn=9d851b3860ccccbcc311781a336a0292&chksm=9743339ca034ba8a693983c938a3d4f9f2e6aea44b1306ac091648b2a3ac81c679bc5dab1be9&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/mmbiz_png/3WAfPxicpXcnkVm08ewPXeModD5OO3BRo9kOLChmdAmOb8HSmiabdic9zooPePepcUfUibLPu2qnqicMmicwnfPwpSmg/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)
![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/3WAfPxicpXckH8x8aFTkTs7ic8s2MCXFIXpnznXlNh2tjBdNnshxMmgicYT4b9kWMIK99icKibib6EJEuWt297vheGpw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

**加微信不失联**
----------

分享Chat-GPT、Stable Diffusion等AI工具最新玩法和EXCEL、RPA自动化办公的高级应用