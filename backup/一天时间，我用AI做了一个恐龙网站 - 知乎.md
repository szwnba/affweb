前言
--

之前有段时间，儿子喜欢恐龙，天天追着我问。

可是我三句不离霸王龙，所知有限啊！

于是，一狠心，用chatgpt辅助，

一天时间就做了一个恐龙百科网站。

![](https://pic3.zhimg.com/v2-4b805bec453bbc46c74dcafdb85b968a_b.jpg)

![](https://pic3.zhimg.com/v2-ef108e4a6c74a7eaaf27b8647db577f2_b.jpg)

一、 实现思路


-----------

  
要完成百科全书网站的制作，主要有两个关键点：  

*   采用VuePress搭建网站，简单高效；
*   采用ChatGPT生成内容，用过的都说好！

思路清晰明了，后续完全可以批量建站  
接下来，就让我们进入实操环节。

  
二、 VuePress搭建网站  

---------------------

**一）环境搭建**

*   官网安装node , [https://nodejs.cn/download/](https://link.zhihu.com/?target=https%3A//nodejs.cn/download/) , 安装过程很简单，一直默认next就行。
*   安装完成后，cmd 输入 node -v 和 npm -v 指令，如果显示出对应的版本号，则成功。

**二）项目搭建**

官方文档：[https://vuepress.vuejs.org/zh/](https://link.zhihu.com/?target=https%3A//vuepress.vuejs.org/zh/)  
由于我对前端一窍不通，在实施这一步的时候，我直接向ChatGPT寻求帮助，问题如下：

> 我想用vuepress搭建一个网站，网站内容是向儿童科普恐龙知识，网站内容分为三个版块“三叠纪、侏罗纪、白垩纪”，每个版块下包含各个时期的20种具有代表性的恐龙介绍。为了方便阅读，我希望网上有侧边栏和导航栏，可以迅速定位不同的恐龙时期和恐龙种类。我已经搭好了vuepress的开发环境，接下来我该怎么做呢？请一步步教我完成

![](https://pic1.zhimg.com/v2-89a0272ead13d03522cb4561f1508c14_b.jpg)

![](https://pic4.zhimg.com/v2-5f5566935976b43ab93ca219dd0c0127_b.jpg)

![](https://pic4.zhimg.com/v2-e6b4175e889441201bac0bd943b934e7_b.jpg)

![](https://pic3.zhimg.com/v2-1ae8db1f2451a77078af6e41ccf73682_b.jpg)

![](https://pic2.zhimg.com/v2-09b4c290e4b9e23e27bc20f0548c20f9_b.jpg)

大致流程就是如此，chatgpt手把手教学，还是那么强！

当然这里还有一些细节没有明确，我们填完网站内容再来细说，现阶段也无法操作。  
好了，大致框架搭好了，接下来就需要生成网站的主要内容了。  

  
三 网站内容生成  

--------------

  
又到了熟悉的问答环节。  

**一）首先，让ChatGPT帮我推荐各个时期的恐龙种类。** 

Now you are a dinosaur expert. What are the representative dinosaurs in the Triassic, Jurassic, and Cretaceous periods? List 20 for each period with their names (English and Chinese names) in markdown format.

> 注意，这里我采用英文提问，主要是希望得到的恐龙名称尽可能的准确。恐龙的英文名称是唯一且确定的，但是中文名称由于翻译习惯的不同而产生了不同的版本。  

![](https://pic1.zhimg.com/v2-a91d7f2a9100d5ccf6aa805043bfb4f4_b.jpg)

![](https://pic2.zhimg.com/v2-ed65f2d91dad7d3fdc39cbde9f033491_b.jpg)

![](https://pic1.zhimg.com/v2-9f45d6941a12998bd4d64c31e1a68a4c_b.jpg)

chatgpt准确的实现了我的需求。不过，仔细看一下，你会发现：恐龙的英文名全都准确无误；但是部分中文名称却不太合理，或者翻译的不太常见。这也没办法避免，只能去复核。

**二）为每种恐龙生成对应的介绍文字**

  
这里总计有60种恐龙。  
如果还是和之前一样一一提问，那就太费劲了。  
怎么办呢？直接调API~  
整个代码逻辑也很简单：  
（1）调用chatgpt API为所有的恐龙生成介绍；  
（2）将返回的结果保存到对应的三叠纪、侏罗纪、白垩纪文件夹下，文件以恐龙名称命名，方便后续使用。  

代码怎么写，直接问ChatGPT。

> 现在我想调用ChatGPT的API接口，为上述的各个时期的每个恐龙生成一段300字左右的简介，向儿童简单介绍每个恐龙的名称由来、特点和生活习性。新建Triassic, Jurassic, and Cretaceous三个文件夹，将chatGPT生成的每个恐龙的介绍文字，保存为markdown文件的格式，放在正确的文件夹下，文件名称采用类似“Plateosaurus _板龙.md”的形式。帮我完成python脚本，一步步完成功能  

```text
参考代码如下：
import openai
import os


openai.api_key = Your key


# List of dinosaurs for each period
Triassic_dinos = ["Plateosaurus (板龙)", "Coelophysis (腔骨龙)", "Herrerasaurus (赫雷拉龙)", "Eoraptor (曙龙)", 
                  "Staurikosaurus (南十字星龙)", "Liliensternus (莉莲斯特龙)", "Procompsognathus (前美颌龙)", 
                  "Melanorosaurus (黑山龙)", "Riojasaurus (里奥哈龙)", "Saturnalia (农神节龙)", 
                  "Thecodontosaurus (齿槽龙)", "Sellosaurus (梯齿龙)", "Saltopus (跳龙)", "Spondylosoma (脊骨龙)", 
                  "Marasuchus (马拉鳄龙)", "Pisanosaurus (皮萨诺龙)", "Pantydraco (派恩特龙)", 
                  "Mussaurus (老鼠龙)", "Coloradisaurus (科罗拉多龙)", "Anchisaurus (近蜥龙)"]
Jurassic_dinos = ["Allosaurus (异特龙)", "Apatosaurus (迷惑龙)", "Diplodocus (梁龙)", "Stegosaurus (剑龙)", 
                  "Brachiosaurus (腕龙)", "Compsognathus (美颌龙)", "Archaeopteryx (始祖鸟)", 
                  "Camarasaurus (囊龙)", "Dryosaurus (橡树龙)", "Mamenchisaurus (马门溪龙)", 
                  "Ceratosaurus (角鼻龙)", "Kentrosaurus (肯特龙)", "Othnielia (奥斯尼尔龙)", 
                  "Eustreptospondylus (欧曲椎龙)", "Yangchuanosaurus (阳川龙)", "Miragaia (米拉加雅龙)", 
                  "Shunosaurus (舒龙)", "Proceratosaurus (原角鼻龙)", "Megalosaurus (巨龙)", "Heterodontosaurus (异齿龙)"]
Cretaceous_dinos = ["Tyrannosaurus (霸王龙)", "Triceratops (三角龙)", "Velociraptor (迅猛龙)", 
                    "Spinosaurus (棘龙)", "Ankylosaurus (甲龙)", "Parasaurolophus (副栉龙)", 
                    "Pachycephalosaurus (厚头龙)", "Deinonychus (恐爪龙)", "Hadrosaurus (鸭嘴龙)", 
                    "Giganotosaurus (南方巨兽龙)", "Carnotaurus (食肉牛龙)", "Baryonyx (重爪龙)", 
                    "Alamosaurus (阿拉莫龙)", "Iguanodon (鳄鱼牙龙)", "Oviraptor (窃蛋龙)", 
                    "Maiasaura (慈母龙)", "Microraptor (微龙)", "Sinornithosaurus (中国鸟龙)", 
                    "Protoceratops (原角龙)", "Archaeoceratops (古角龙)"]


# Ensure the directories exist
os.makedirs('Triassic', exist_ok=True)
os.makedirs('Jurassic', exist_ok=True)
os.makedirs('Cretaceous', exist_ok=True)


# call API
def create_dino_file(dino_name, period):
    prompt = f"You are an expert of dinosaurs. Write a brief 300-word introduction in Chinese for children about the dinosaur {dino_name}, including its name origin, features, and habits."


    messages = [{"role": "user", "content": prompt}]
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=messages,
        temperature=0, # this is the degree of randomness of the model's output
    )


    filename = f"{dino_name.replace(' ', '_').replace('(', '_').replace(')', '')}.md"
    with open(os.path.join(period, filename), 'w', encoding='utf-8') as f:
        f.write(response.choices[0].message["content"].strip())
 
# full process
for dino in Triassic_dinos:
    create_dino_file(dino, 'Triassic')


for dino in Jurassic_dinos:
    create_dino_file(dino, 'Jurassic')


for dino in Cretaceous_dinos:
    create_dino_file(dino, 'Cretaceous')


```

**三）为每种恐龙配置对应的图片**

所谓一图胜千言，光有文字不行，还得为每种恐龙配置对应的图片。  
还是像之前做恐龙视频一样，去网上下载。  
怎么下载？还是问chatgpt。

![](https://pic4.zhimg.com/v2-357542c8d6c391fe2a76fc4bf5a65be3_b.jpg)

  
和chatgpt互动几轮，你就会得到正确的代码。具体细节参考之前的教程 [【ChatGPT实践篇】给小孩制作一个数字人恐龙科普短视频 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/629067782)  

```text
参考代码如下：
import os
import json
import requests


def get_dinosaur_image_urls(dinosaur_name, api_key, cx, num_images=2):
    search_url = f"xx" # your url
    payload = {
        "q": f"{dinosaur_name} dinosaur",
        "tbm": "isch",
        "searchType": "image",
        "key": api_key,
        "cx": cx,
        "num": num_images
    }
    response = requests.get(search_url, params=payload)
    if response.status_code == 200:
        data = json.loads(response.text)
        if data.get("items"):
            return [item["link"] for item in data["items"]]
        else:
            print(f"No items found in search results for {dinosaur_name}.")
            print("Response data:", data)
    else:
        print(f"Error {response.status_code}: Unable to fetch search results for {dinosaur_name}.")
    return []


def download_and_save_image(image_url, dinosaur_name, image_number):
    response = requests.get(image_url)
    if response.status_code == 200:
        if not os.path.exists("all_dinosaur_images"):
            os.makedirs("all_dinosaur_images")
        with open(f"all_dinosaur_images/{dinosaur_name}_{image_number}.jpg", "wb") as f:
            f.write(response.content)
            print(f"{dinosaur_name}_{image_number} image saved.")
    else:
        print(f"Error {response.status_code}: Unable to download image for {dinosaur_name}_{image_number}.")




api_key = "xx"  # Replace with your API key
cx = "xx"  # Replace with your Custom Search Engine ID


dinosaur_names = ['Alamosaurus',
 'Ankylosaurus',
 'Archaeoceratops',
 .... ,
 'Thecodontosaurus']


for dinosaur_name in dinosaur_names:
    image_urls = get_dinosaur_image_urls(dinosaur_name, api_key, cx)
    for i, image_url in enumerate(image_urls, start=1):
        download_and_save_image(image_url, dinosaur_name, i)
```

好了，到此网站的内容就大功告成了！

全程都是ChatGPT在干活，我只是一个工具人。  

  
四 项目调试和运行  

---------------

**由于我不懂vue，以下仅是我的一些不成熟的做法和经验，仅供参考**

**一）完善工程目录**

将上一步生成的各个恐龙的介绍文件，放在vuepress项目合适的位置。工程目录结构如下：  

```text
/dinosuars                             ------- 项目根目录
  /docs                                -------- target目录
    /.vuepress                         ------- 网页配置目录、静态资源
      config.js                        ------- 配置文件
    /triassic                          ------- markdown目录，恐龙分类
      Anchisaurus__近蜥龙.md           ------- 恐龙文件
      ...
    /jurassic
      ...
    /cretaceous
      ...
  package.json                        ------- 项目配置文件
```

  
注意：这里的.vuepress目录需要和markdown目录同级。一开始我没有认识到这一点，出现问题后我问chatgpt，它告诉我的，yyds。

**二）config.gs配置**

这一步，也是把我折磨的死去活来的一步。配置的过程中，sidebar一直达不到我要的效果。  
这个过程中，我也多次向chatgpt求助，尽管它没有帮我彻底解决问题，但还是给了我很多帮助。  
具有代表性的对话如下，  
我详细了描述了我的整个工程结构和主要内容，然后让chatgptbang帮我查找问题。  

![](https://pic4.zhimg.com/v2-9b1b5e6d60d4ba9dc315c2d5d9cb5bab_b.jpg)

![](https://pic4.zhimg.com/v2-77771154a1f122133d3f0e419df757db_b.jpg)

![](https://pic2.zhimg.com/v2-1acdacb38c5173a8f60780dd8fd18551_b.jpg)

一句话, **永远不要担心ChatGPT不懂你的问题**，没有它理解不了的，只有你描述的不对的

关于config.gs和项目结构，中间我踩了太多坑，现在已记不清过程了；结论如下：

  
（1）docs目录和每个markdown文件目录，都要有一个README.md文件，否则配置可能不生效；  
（2）README.md文件中要配置标题；  
（3）sidebar、nav的路径配置需要以”/”开始和结束  

最终，参看配置如下：  

```text
module.exports = {
  title: '神奇的恐龙王国',
  description: 'DIY恐龙科普丛书',
  head: [
        ['link',
            { rel: 'icon', href: '/icon.png' }
            //浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
        ]
        ],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '三叠纪', link: '/triassic/' },
      { text: '侏罗纪', link: '/jurassic/' },
      { text: '白垩纪', link: '/cretaceous/' },
      { text: '关于作者', link: 'https://e0749igednw.feishu.cn/docx/FJ0XdEfcwouRejxta1bcsNu0nHf'}
    ],
    sidebar: {
      '/triassic/': getTriassicSidebar(),
      '/jurassic/': getJurassicSidebar(),
      '/cretaceous/': getCretaceousSidebar(),
      '/': ['', '/triassic/', '/jurassic/', '/cretaceous/']
    }

  }
}

function getTriassicSidebar() {
    return ['/triassic/Anchisaurus__近蜥龙', '/triassic/Coelophysis__腔骨龙', '/triassic/Coloradisaurus__科罗拉多龙', '/triassic/Eoraptor__始盗龙', '/triassic/Herrerasaurus__赫雷拉龙', '/triassic/Liliensternus__莉莲斯特龙', '/triassic/Marasuchus__马拉鳄龙', '/triassic/Melanorosaurus__黑丘龙', '/triassic/Mussaurus__老鼠龙', '/triassic/Pantydraco__派恩特龙', '/triassic/Pisanosaurus__皮萨诺龙', '/triassic/Plateosaurus__板龙', '/triassic/Procompsognathus__前美颌龙', '/triassic/Riojasaurus__里奥哈龙', '/triassic/Saltopus__跳龙', '/triassic/Saturnalia__农神龙', '/triassic/Sellosaurus__梯齿龙', '/triassic/Spondylosoma__脊骨龙', '/triassic/Staurikosaurus__南十字星龙', '/triassic/Thecodontosaurus__齿槽龙']
    }

function getJurassicSidebar() {
  return ['/jurassic/Allosaurus__异特龙', '/jurassic/Apatosaurus__迷惑龙', '/jurassic/Archaeopteryx__始祖鸟', '/jurassic/Brachiosaurus__腕龙', '/jurassic/Camarasaurus__囊龙', '/jurassic/Ceratosaurus__角鼻龙', '/jurassic/Compsognathus__美颌龙', '/jurassic/Diplodocus__梁龙', '/jurassic/Dryosaurus__橡树龙', '/jurassic/Eustreptospondylus__欧曲椎龙', '/jurassic/Heterodontosaurus__异齿龙', '/jurassic/Kentrosaurus__肯特龙', '/jurassic/Mamenchisaurus__马门溪龙', '/jurassic/Megalosaurus__巨龙', '/jurassic/Miragaia__米拉加雅龙', '/jurassic/Othnielia__奥斯尼尔龙', '/jurassic/Proceratosaurus__原角鼻龙', '/jurassic/Shunosaurus__舒龙', '/jurassic/Stegosaurus__剑龙', '/jurassic/Yangchuanosaurus__阳川龙']
  }

function getCretaceousSidebar() {
  return ['/cretaceous/Alamosaurus__阿拉莫龙', '/cretaceous/Ankylosaurus__甲龙', '/cretaceous/Archaeoceratops__古角龙', '/cretaceous/Baryonyx__重爪龙', '/cretaceous/Carnotaurus__食肉牛龙', '/cretaceous/Deinonychus__恐爪龙', '/cretaceous/Giganotosaurus__南方巨兽龙', '/cretaceous/Hadrosaurus__鸭嘴龙', '/cretaceous/Iguanodon__鳄鱼牙龙', '/cretaceous/Maiasaura__慈母龙', '/cretaceous/Microraptor__微龙', '/cretaceous/Oviraptor__窃蛋龙', '/cretaceous/Pachycephalosaurus__厚头龙', '/cretaceous/Parasaurolophus__副栉龙', '/cretaceous/Protoceratops__原角龙', '/cretaceous/Sinornithosaurus__中国鸟龙', '/cretaceous/Spinosaurus__棘龙', '/cretaceous/Triceratops__三角龙', '/cretaceous/Tyrannosaurus__霸王龙', '/cretaceous/Velociraptor__迅猛龙']
  }
```

每种恐龙的md文件和图片都有了，现在还需要在md文件中插入图片的路径。  
60张图，一张张编辑太难了~  
一句话，简单重复的事情交给程序。不会？问chatgpt。  
示例程序如下：

```text
import os


def add_image_to_md(md_file_path, imgs):
    name = os.path.basename(md_file_path).split('__')[0]
    img_name = ''
    for img in imgs:
        if name in img:
            img_name = img
    if img_name:
        with open(md_file_path, 'a') as file:
            file.write('\n')  # 添加一个空行
            img_path = '../.vuepress/public/{}'.format(img_name)
            file.write('![{}]({})'.format(name, img_path))
            file.write('\n')


#需要处理的目录列表
dirs = [‘/triassic', ’/jurassic', ‘/cretaceous']


for d in dirs:
    # os.walk 返回当前目录、当前目录下的子目录、当前目录下的文件
    for root, dirs, files in os.walk(d):
        for file in files:
            if file.endswith('.md'):
                filepath = os.path.join(root, file)
                add_image_to_md(filepath, imgs)


```

**四）运行项目**

在项目root目录下 package.json文件中的“scripts”下定义指令，常用的有 dev， build， deploy。  

![](https://pic3.zhimg.com/v2-f5d92923b871a225d3325297f985b6aa_b.jpg)

  
root目录下 运行 “npm run dev” , 访问 http://localhost:8080/ 就可以看到页面效果了~  
看到这里，**离成功只有一步之遥了**！  

  
五 项目部署  

------------

  
官方推荐部署的方式有很多，这里我用了**简单又免费**的方式：Github Pages。只需要你有一个github账号。  
具体方法如下：  

![](https://pic4.zhimg.com/v2-7fdd8fb6f8ef18d6c48c6b75cb10bcd3_b.jpg)

![](https://pic3.zhimg.com/v2-3519a4aae2dc6d8a84f1e79fdfba0a62_b.jpg)

  
AI工具的出现，极大地提升了内容生成的效率~

即使不懂技术，你也能玩出花来！