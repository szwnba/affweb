github copolit的强劲对手，AWS发布的这款代码生成工具最大的优势就是对于个人用户免费。

> Amazon CodeWhisperer 是一款可以帮助程序员更快、更安全地编写代码的工具，可以在他们的开发环境中实时提供代码建议和推荐。它有以下几个特点：  
> 免费：对所有开发人员都可以免费使用。  
> 支持多种编程语言和 IDE：可以在多种编程语言和多个流行的 IDE 中使用，例如 Visual Studio Code、IntelliJ IDEA 等。  
> 提高生产力：可以帮助程序员处理常规或耗时的任务，快速学习不熟悉的 API，以及正确使用 AWS API 等常见编码场景。  
> 过滤有偏见或不公正的代码建议：可以帮助程序员过滤出有偏见或不公正的代码建议，提高代码的安全性和准确性。  
> 安全扫描：可以对开发人员编写的代码进行安全扫描，找到并建议修复难以检测的漏洞。  
> 最适用于 AWS 应用程序：针对最常用的 AWS API 进行了优化，成为构建 AWS 应用程序的最佳编码助手。  
> ----ChatGPT总结

![](https://pic1.zhimg.com/v2-e7e85ac1d6cf04e54a8afd83a975680c_b.jpg)

使用也很简单，只需要三步

![](https://pic4.zhimg.com/v2-d75ca33d4c1ab53185585feaf2ca36d7_b.jpg)

第一步，打开vscode

![](https://pic3.zhimg.com/v2-48184d0591c3e8aa96a30e20e8c4b94e_b.jpg)

![](https://pic2.zhimg.com/v2-8b5318401fe322bf25545e70301053ad_b.jpg)

会弹出一个对话框

![](https://pic4.zhimg.com/v2-45e7e9b16565cfe214f11c51029fc46b_b.jpg)

复制到打开的网页中，最后要在这一步创建一个aws的builder ID

![](https://pic2.zhimg.com/v2-aaeb2b4695f723a68192f5fce60eb489_b.jpg)

然后你需要在邮箱找到验证码并设置密码，最后要你许可，点allow就行

![](https://pic4.zhimg.com/v2-f73db334f1946109feea5f5362b3ed93_b.jpg)

这就算是成功了。打开vscode

![](https://pic2.zhimg.com/v2-01ac35186c2709894d9238c2f4f9f045_b.jpg)

至于怎么用，太简单了，

你直接在vscode打开一个文档，然后写注释你想要的功能，然后它就会自动生成了，如果你满意，按一下tab键就可以了。

```text
# a function that extract all number from a string
def extract_number(string):
 return ''.join(filter(str.isdigit, string))
```

![](https://pic3.zhimg.com/v2-02fd77ba9a77a838d09ffd942ae8cb3a_b.jpg)

对了，感谢评论区提醒，支持中文，福音啊！

![](https://pic2.zhimg.com/v2-aa4f46e11713f3b928e45e360e2462fd_b.jpg)

链接在这里：[AI Code Generator - Amazon CodeWhisperer - AWS](https://link.zhihu.com/?target=https%3A//aws.amazon.com/codewhisperer/)