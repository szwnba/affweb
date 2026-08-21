前言
--

上次介绍了通过Hexo+GitHub Pages，零成本搭建一个专属自己的独立博客网站。我觉得那篇文章是没有入门门槛的，不管你是什么行业，只要想打造个人IP，又不太想受博客平台的约束，那么读完后动手操作一下也能轻松完成。

而这次呢，上篇说了Hexo篇会有三部曲，现在来到第二阶段，就要在前者基础上做进一步升级，将完成下面七个主要的博客指标。

![](https://mmbiz.qpic.cn/mmbiz_gif/oneRjXnW5LGicNoMAdG2dAwnjwNTribzbVXOFf3GaN3UOJoIAiaNH2dG80QKUsgiaLYaGb03UHSZMBJeOWI6wH5OIA/640?wx_fmt=gif)

指标
--

*   Hexo如何**安装Butterfly主题并配置**？
    
*   Hexo如何**创建页面和添加文章**？
    
*   Hexo如何**添加第三方评论系统**？
    
*   Butterfly主题如何**添加站内搜索**？
    
*   Butterfly主题如何**添加百度统计**？
    
*   Butterfly主题如何**添加文章置顶功能**？
    
*   Butterfly主题如何**配置RSS和404页面**？
    
*   如何**配合Typora**完成md的同步与本地备份？
    

主题添加与配置
-------

Hexo官网专门有一个栏目的主题列表，这里我选的 “butterfly”，首先拉取主题代码到themes目录下，然后在Hexo的配置中启动主题。  

*   #### 拉取主题包
    

```nginx
git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly
```

*   #### 启动主题
    

```http
theme: butterfly
```

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oneRjXnW5LEYwltdCQ8L2zfQ52icYqqjibP3dBU8Nib4OQzMKN54RSNiaib5aE6pdygU99vY8TM7aJa5b32KicPNlt2Q/640?wx_fmt=png&from=appmsg)

基础配置
----

基础配置主要是设置网站的标题、描述、SEO、菜单等项，下面我就列出hexo的config（根目录下_config.yml），和主题Butterfly的config（themes的Butterfly下_config.yml），并注释相关项的简介仅供参考。

*   #### hexo\_config.yml
    

```http
title: ZERO开发                           #网站标题
subtitle: 一个独立开发者的博客               #网站副标题
description: 公众号：ZERO开发               #网站描述
keywords: 技术博客、独立开发者、PHP开发、Pthon开发、人工智能
author: 北桥苏             #您的名字
language: zh-CN           #网站使用的语言
timezone:              #网站时区。Hexo 默认使用您电脑的时区

# URL 网址
## 如果您的网站存放在子目录中，
## 例如 http://yoursite.com/blog，则请将您的 url
## 设为 http://yoursite.com/blog 并把 root 设为 /blog/。
url: http://z11r00.github.io
root: /
permalink: :year/:month/:day/:title/
permalink_defaults:

# Directory 目录配置
source_dir: source       #源文件夹，这个文件夹用来存放内容。
public_dir: public       #公共文件夹，这个文件夹用于存放生成的站点文件。
tag_dir: tags           #标签文件夹
archive_dir: archives   #归档文件夹
category_dir: categories #分类文件夹
code_dir: downloads/code #nclude code 文件夹
i18n_dir: :lang         #国际化（i18n）文件夹
skip_render:             #跳过指定文件的渲染，您可使用 glob 表达式来匹配路径。

# Writing 文章
new_post_name: :title.md # 新建文章默认文件名
default_layout: post     # 默认布局
titlecase: false # Transform title into titlecase
external_link: true # 在新标签中打开一个外部链接，默认为true
filename_case: 0   #转换文件名，1代表小写；2代表大写；默认为0，意思就是创建文章的时候，是否自动帮你转换文件名，默认就行，意义不大。
render_drafts: false #是否渲染_drafts目录下的文章，默认为false
post_asset_folder: false #启动 Asset 文件夹
relative_link: false   #把链接改为与根目录的相对位址，默认false
future: true       #显示未来的文章，默认false
syntax_highlighter: highlight.js
highlight:   #代码块的设置
enable: true
line_number: true
auto_detect: false
tab_replace:
prismjs:
preprocess: true
line_number: true
tab_replace: ''

# Category & Tag 分类和标签的设置
default_category: uncategorized       #默认分类
category_map:                         #分类别名
tag_map:                               #标签别名

# 全局日期格式化
date_format: YYYY-MM-DD
time_format: HH:mm:ss
updated_option: 'mtime'
pagination_dir: page   #分页目录

## 插件index，用于显示分页和排序配置
index_generator:
path: ''
per_page: 5# 0.关闭分页功能 >0.每页条数
order_by:
  top: -1# 置顶排序：-1.倒序 1.正序
  date: -1# 日期排序：-1.倒序 1.正序

# 主题启动配置
theme: butterfly

# Deployment github部署配置
deploy:
type: git
repository: https://github.com/z11r00/z11r00.github.io
branch: main

##hexo-generator-search搜索插件配置
search:
path: search.xml
field: post
format: html
limit: 10000

## rss配置
feed:
type: atom
path: atom.xml
limit: 20

## rss位置
rss: /atom.xml
```

*   #### hexo\_butterfly\_config.yml
    

```properties
nav:
logo: /img/logo.png # 导航栏左侧LOGO
display_title: true
fixed: true # 是否置顶导航栏


Home: / || fas fa-home
Archives: /archives/ || fas fa-archive
Tags: /tags/ || fas fa-tags
Categories: /categories/ || fas fa-folder-open
List||fas fa-list:
Music: /music/ || fas fa-music
Movie: /movies/ || fas fa-video
Link: /link/ || fas fa-link
About: /about/ || fas fa-heart


menu:
首页: / || fas fa-home
时间轴: /archives/ || fas fa-archive
标签: /tags/ || fas fa-tags
分类: /categories/ || fas fa-folder-open




友链: /link/ || fas fa-link
关于: /about/ || fas fa-heart



highlight_theme: light # darker / pale night / light / ocean / mac / mac light / false
highlight_copy: true # copy button
highlight_lang: true # show the code language
highlight_shrink: false # true: shrink the code blocks / false: expand the code blocks | none: expand code blocks and hide the button
highlight_height_limit: false # unit: px
code_word_wrap: false   # 代码是否自动换行


social:
fab fa-github: https://github.com/z11r00 || Github || '#24292e'
fas fa-envelope: 2652364582@qq.com || Email || '#4a7dbe'
fas fa-rss: /atom.xml || RSS






favicon: /img/favicon.png


avatar:
img: /img/avatar.png
effect: false


disable_top_img: true


index_img: /img/index_img.jpg


default_top_img: /img/default_top_img.jpeg


archive_img: /img/archive_img.jpg


tag_img:




tag_per_img:


category_img:




category_per_img:


cover:

index_enable: true
aside_enable: true
archives_enable: true


position: both
(當沒有設置cover時，默認的封面顯示)
default_cover:
  - https://i.loli.net/2020/05/01/gkihqEjXxJ5UZ1C.jpg


error_img:
flink: /img/friend_404.gif
post_page: /img/404.jpg


error_404:
enable: true
subtitle: 'Page Not Found'
background: /img/404.jpg


post_meta:
page: # Home Page
  date_type: created # created or updated or both 主頁文章日期是創建日或者更新日或都顯示
  date_format: date # date/relative 顯示日期還是相對日期
  categories: true # true or false 主頁是否顯示分類
  tags: false # true or false 主頁是否顯示標籤
  label: true # true or false 顯示描述性文字
post:
  date_type: both # created or updated or both 文章頁日期是創建日或者更新日或都顯示
  date_format: date # date/relative 顯示日期還是相對日期
  categories: true # true or false 文章頁是否顯示分類
  tags: true # true or false 文章頁是否顯示標籤
  label: true # true or false 顯示描述性文字


anchor:

auto_update: false

click_to_scroll: false


photofigcaption: false



copy:
enable: true     # 是否开启网站复制权限
copyright:
  enable: false   # 是否开启复制版权信息添加
  limit_count: 50 # 字数限制，当复制文字大于这个字数限制时，将在复制的内容后面加上版权信息





toc:
post: true
page: false
number: true
expand: false
style_simple: false
scroll_percent: true


post_copyright:
enable: true
decode: false
author_href:
license: CC BY-NC-SA 4.0
license_url: https://creativecommons.org/licenses/by-nc-sa/4.0/


reward:
enable: true
text: 打赏一下~
QR_code:
  - img: /img/qrcode/wechat_trade.jpg
    link:
    text: 微信
  - img: /img/qrcode/alipay_trade.jpg
    link:
    text: 支付宝



post_edit:
enable: false


url:


related_post:
enable: true
limit: 6 # Number of posts displayed
date_type: created # or created or updated 文章日期顯示創建日或者更新日






post_pagination: 1


noticeOutdate:
enable: false
style: flat # style: simple/flat
limit_day: 500 # When will it be shown
position: top # position: top/bottom
message_prev: It has been
message_next: days since the last update, the content of the article may be outdated.



footer:
owner:
  enable: true
  since: 2017
custom_text: Copyright© ZERO开发-独立开发者的日常总结<br/><a href="https://beian.miit.gov.cn/" target="_blank">赣ICP备16002525号-1</a>

copyright: false





aside:
enable: true
hide: false
button: true
mobile: true # display on mobile
position: left # left or right
display:
  archive: true
  tag: true
  category: true
card_author:
  enable: true
  description:
  button:
    enable: true
    icon: fas fa-video
    text: 关注我
    link: https://space.bilibili.com/286666708/
card_announcement:
  enable: true
  content: 微信公众号：ZERO开发，致力于为猿友们提供有价值的内容
card_recent_post:
  enable: true
  limit: 5 # if set 0 will show all
  sort: date # date or updated
  sort_order: # Don't modify the setting unless you know how it works
card_categories:
  enable: true
  limit: 8 # if set 0 will show all
  expand: none # none/true/false
  sort_order: # Don't modify the setting unless you know how it works
card_tags:
  enable: true
  limit: 40 # if set 0 will show all
  color: false
  orderby: random # Order of tags, random/name/length
  order: 1 # Sort of order. 1, asc for ascending; -1, desc for descending
  sort_order: # Don't modify the setting unless you know how it works
card_archives:
  enable: true
  type: monthly # yearly or monthly
  format: MMMM YYYY # eg: YYYY年MM月
  order: -1 # Sort of order. 1, asc for ascending; -1, desc for descending
  limit: 8 # if set 0 will show all
  sort_order: # Don't modify the setting unless you know how it works
card_webinfo:
  enable: true
  post_count: true
  last_push_date: true
  sort_order: # Don't modify the setting unless you know how it works
card_post_series:
  enable: true
  series_title: false # The title shows the series name
  orderBy: 'date' # Order by title or date
  order: -1 # Sort of order. 1, asc for ascending; -1, desc for descending



busuanzi:
site_uv: true
site_pv: true
page_pv: true



runtimeshow:
enable: false
publish_date:


newest_comments:
enable: true
sort_order: # Don't modify the setting unless you know how it works
limit: 6
storage: 10 # unit: mins, save data to localStorage
avatar: true





translate:
enable: false

default: 繁

defaultEncoding: 2

translateDelay: 0

msgToTraditionalChinese: '繁'

msgToSimplifiedChinese: '簡'


readmode: true


local_search:
enable: true

preload: false

top_n_per_article: 1

unescape: false
CDN:


docsearch:
enable: false
appId:
apiKey:
indexName:
option:





sharejs:
enable: true
sites: weibo,wechat,qq,facebook,twitter



addtoany:
enable: false
item: facebook,twitter,wechat,sina_weibo,facebook_messenger,email,copy_link




comments:


use: gitalk # Valine,Disqus
text: true # Display the comment name next to the button


lazyload: true
count: false # Display comment count in post's top_img
card_post_count: false # Display comment count in Home Page



disqus:
shortname:
apikey: # For newest comments widget




disqusjs:
shortname:
apikey:
option:



livere:
uid:



gitalk:
client_id: Ov23…………1C6fM
client_secret: 4304…………44433f77352
repo: z11r00.github.io
owner: z11r00
admin: z11r00
option:






baidu_analytics: 74270…………………………………………





google_adsense:
enable: false
auto_ads: true
js: https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js
client:
enable_page_level_ads: true




site_verification:




```

*   #### 创建菜单页面
    

页面包括标签页（tags）、分类页（categories）、友链页（link）、关于页（about），当然也可以自行添加，比如音乐电影之类。不过添加这种页面方式都大同小异，以下以标签页举例。

*   #### 运行命令
    

```javascript
hexo new page tags
```

*   #### 编辑MD
    

运行命令后，会在source下根据butterfly模板生成对应的md文件，tags就是tags，不过要将md文件的type修改为对应的类型，类型见上。

```http
title: 标签页
date: 2024-05-02 21:01:24
type: "tags"
```

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LEYwltdCQ8L2zfQ52icYqqjibZxfNOuGtbG2gEAPDDcNZLde9USbhpyicz62kDemiczUfUxrWjtQbhnFA/640?wx_fmt=jpeg)

*   #### Page（页面）front-matter
    

```http
title: 页面名称
date: 创建日期
type: （tags,link,categories这三个页面需要配置）
comments: (是否需要显示评论，默认true)
description: 用于SEO优化
top_img: (设置顶部图)
mathjax: (数学公式显示是否支持)
katex:   (Tex公式显示是否支持)
```

创建文章
----

写文章，可以通过命令创建，也可以在source/_posts目录下，自行新建markedown文件，因为命令也是在_posts文件夹下新建。

*   #### 运行命令
    

```javascript
hexo new "文章的大标题"
```

*   #### Post（文章）front-matter
    

```makefile
title: CentOS7下Tomcat启动慢的原因及解决方案
date: 2017-12-02 21:01:24
description：文章描述，用于做SEO优化的
keywords: 文章SEO关键词
top_img: 文章顶部图
cover: 文章缩略图（封面图）
toc: true (是否显示文章目录)
toc_number: true (是否显示文章目录的标识数字)
copyright: true (是否显示版权)
mathjax: (数学公式显示是否支持)
katex:   (Tex公式显示是否支持)
hide: false (是否隐藏当前文章)
comments: true #是否可评论
toc: true #是否显示文章目录
categories: "云服务器" #分类
tags:   #标签
- centOS
- tomcat
```

站内搜索添加
------

站内搜索，我是采用的hexo-generator-search插件解决方案，安装完插件，然后配置一下，最后用hexo清理再生成一下全站静态，同时在根目录也会生成一个search.xml，用于做字符串模糊匹配的。

*   #### 插件安装
    

```sql
npm install hexo-generator-search --save
```

*   #### 添加或配置
    

```makefile
-config（hexo配置）

search:
path: search.xml
field: post
format: html
limit: 10000

-butterfly-config（butterfly主题配置）

local_search:
enable: true
preload: false
CDN:
```

*   #### 清理与生成
    

```nginx
hexo clean && hexo g
```

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oneRjXnW5LEYwltdCQ8L2zfQ52icYqqjib5KGAUhIuSaw25a5n7VZEcUlwaNf4LDADZWicricLO5TQxBGd23sVpoQQ/640?wx_fmt=png&from=appmsg)

评论系统添加
------

第三方评论系统我这里使用的是Gitalk ，Gitalk 是一个基于 GitHub Issue 和 Preact 开发的`评论插件`。使用GitHub登陆，能支持多国语言，至于他的原理，其他博主有介绍。这里就不展开了，如果有时间以后可能会整体介绍一下常用的第三方评论系统，因为我还是希望评论能支持多种方式登陆的，目前没有找到合适的就先选择Gitalk。

*   #### 注册应用账号
    

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LEYwltdCQ8L2zfQ52icYqqjib4jEu3zXLh7jPsObsmwtXMNWaSYtr8IWeicE02icS05T6TcvxTtpZvBSQ/640?wx_fmt=jpeg&from=appmsg)

*   #### 获取参数
    

注册成功后拿到 “Client ID” 和 “Client secrets”（点击生成再复制），其中注意的是Homepage URL 要设置为 用户名.github.io精确到https的地址。Authorization callback URL 填写注册的域名，如果绑定了个性化域名就填自己的域名，也是要精确到https的位置。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LEYwltdCQ8L2zfQ52icYqqjibkXUAH62ApniaURHUr2L589bhfroqYKIe3e5fn1BMpl8ASWliag0BQwIA/640?wx_fmt=jpeg&from=appmsg)

*   #### 修改Butterfly配置
    

打开butterfly主题的配置文件，第一个找到 “gitalk” 项，将上面复制的client id 和 client secrets粘贴。

第二个找到 “comments”，将use配置为 "gitalk"，当然也可以用valine、Disqus之类的第三方评论系统。

```sql
comments:
use: # 使用的第三方评论系统名称
text: true # 是否在按钮旁显示评论名称
# If you set it to true, the comment count will be invalid
lazyload: false # 是否设置评论窗为懒加载
count: true # 是否设置评论数统计
card_post_count: true # 是否将评论数显示到首页

gitalk:
client_id: # github应用ID
client_secret: # github应用密钥
repo: 用户名.github.io
owner: 用户名
admin: 用户名
```

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LEYwltdCQ8L2zfQ52icYqqjibeTVRkL1MEicxGyZGib705dkzQFglxtUBRTdCUmicyBdfQYgkP1YianibhKw/640?wx_fmt=jpeg&from=appmsg)

*   #### 博客仓库设置
    

进入仓库，点击 “Settings”，找到 “Features”， 将 “Issues” 勾选。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LEYwltdCQ8L2zfQ52icYqqjibkicnnkExeIYUy4ZibfXA2CkLh1SvN8gN80rhBdicrnZcE7Vff0DLuCgjw/640?wx_fmt=jpeg&from=appmsg)

文章置顶功能添加
--------

打开hexo配置文件 \_config.yml，如果前面有per\_page的关闭，使用的是hexo-generator-index插件排序，可以自定义序号和日期排序。

如何要置顶文章，只需在文章md的front-matter里添加一个top参数，数值自定。文章列表会出现一个钉子图标，要看到效果则要hexo先清理再生成。

*   #### 添加配置
    

```makefile
index_generator:
path: ''
per_page: 5 # 每页条数
order_by:  
  top: -1   # 置顶：-1.倒序 1.顺序
  date: -1   # 日期：-1.倒序 1.顺序
```

*   #### md文章设置
    

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oneRjXnW5LEYwltdCQ8L2zfQ52icYqqjibnN8iciaqpYnSUc8efMgDXANavNEgTXAXoqELnhe39WXYSXBaLgOUmZWg/640?wx_fmt=png&from=appmsg)

*   #### 清理与生成
    

```nginx
hexo clean && hexo g
```

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oneRjXnW5LEYwltdCQ8L2zfQ52icYqqjibibJOSGiaZ84Pn9G4VsubMnF0y3pFs0JHwOVdmHPbbYicUcLvGT5gEsjQQ/640?wx_fmt=png&from=appmsg)

RSS配置
-----

对于RSS输出功能，需要安装 hexo-generator-feed 插件。最后使用hexo清理再生成，博客根目录就会生成atom.xml

*   #### 插件安装
    

```sql
npm install hexo-generator-feed --save
```

*   #### 添加配置
    

```makefile
feed:
type: atom
path: atom.xml
limit: 20
```

*   #### 设置RSS地址
    

```http
rss: /atom.xml
```

设置404页面
-------

在hexo的\_config.yml找到或添加error\_404，设置开启，分别添加标题和背景图。

```makefile
error_404:
enable: true
subtitle: 'Page Not Found'
background: /img/404.jpg
```

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oneRjXnW5LEYwltdCQ8L2zfQ52icYqqjibOGeqSDUydxxwEY8BtMhl5m8gv75zUxbFfOpPHPoGibSNWvcToN0SDnA/640?wx_fmt=png&from=appmsg)

添加百度统计
------

先登陆或注册百度统计平台，找到 “使用设置” -> “代码获取” -> “新版统计代码获取”，然后会看到一段js代码，只需要复制如下的一个32位长度的字符串。最后将该字符串粘贴到butterfly的config.yml中的baidu\_analytics中，部署后一天就可以在后台查看统计报表了。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oneRjXnW5LEYwltdCQ8L2zfQ52icYqqjibjbkH2wH991WCa869DKiaPAyWOSAQndB5lic2xtxMOX4Dic2EFWpgfP1Vw/640?wx_fmt=png&from=appmsg)

MarketDown用法
------------

关于新建的文章，我希望本地能备份一份，有md文件和图片，方便上传到其他平台博客。那要怎么做呢，这里我用一个免费的md工具——Typora为例。

*   #### 创建文件和文件夹
    

创建一个以文章标题的文件夹，里面再分别创建一img文件夹和同文章标题的md文件，img下再创建一个与文章标题同名的文件夹。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LEYwltdCQ8L2zfQ52icYqqjibicibSFdia93ZLia7RwaiblTsbRv4shbQXjPXCNoxCtZtcbkhZ1NPtiamTBBw/640?wx_fmt=jpeg&from=appmsg)

*   #### Typora设置
    

依次找到 “文件” -> “偏好设置” -> "图像" , 将插入图片时的下拉选中 “复制到指定路径”，填入下面的值。

```bash
./img/${filename}/
```

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LEYwltdCQ8L2zfQ52icYqqjibJ6OtV1qP9xLibuKp1lqtGraAVKvoGYWxHs0o4biaib11zEAmvF3kR9bAA/640?wx_fmt=jpeg&from=appmsg)

第二步找到 “格式” -> "图像" -> “设置图片根目录”，选择markdown文件同级的目录，最后复制图片时就会复制到img下的文章同名目录下。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LEYwltdCQ8L2zfQ52icYqqjibtG0LiauenAqxic6Mice4NkImlas2Isk8h7pL3m4FDCkE8bAJrGC49xodg/640?wx_fmt=jpeg&from=appmsg)

为什么要这样设置？因为Hexo的图片在打包前都是在主题包/source/img里，而为了方便本地能按文章存储，也方便将本地的文章图片直接丢到img下，然后md文件放到\_post中。打包之后就能以仓库图片展示，而且按文章分类存储，以后删除起来也一目了然。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/oneRjXnW5LEYwltdCQ8L2zfQ52icYqqjibQJ5YafSRHVsSLc89K9Jzd3P0QQNpUGrvRSj0nM0GSnkuNACcjsER9g/640?wx_fmt=jpeg&from=appmsg)

写在最后
----

这次的优化看起来好像是面面俱到了，但其实关于Hexo主题还有更细节的处理。比如可以添加博客看板精灵，酷炫的动态大背景，还有鼠标跟随或点击特效等等。

但是目前我这博客定位以内容为主，所以暂时就不演示了，当然，如果有用户喜欢也可以马上加上去的。

最后呢，就是三部曲的第二篇结束了，下次就进入Hexo章最后一篇。现在是计划介绍一下怎么让博客被各大搜索引擎收录，以及一些推广心得等等。

具体的更新时间也还不知道，因为在等我那个小游戏的软著下来，下来后我一定要好好写一篇软著申请避坑的文章，可实在是太难等了！

（**我是一个持续摸索个人副业的普通程序员，关注我，和你一起探索更多可能。——ZERO开发**）

![](https://mmbiz.qpic.cn/mmbiz_gif/oneRjXnW5LGicNoMAdG2dAwnjwNTribzbVXOFf3GaN3UOJoIAiaNH2dG80QKUsgiaLYaGb03UHSZMBJeOWI6wH5OIA/640?wx_fmt=gif)