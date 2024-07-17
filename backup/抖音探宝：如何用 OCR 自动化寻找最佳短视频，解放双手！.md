做视频剪辑的同学都知道，搜索对标账号和样片是相当耗时的，一般我们通过关键字检索可以获取少量账号和视频素材，并且短时间检索的数据是相同的，因此没法持续获取数据  

那么，如何持续获取相关账户信息和样片呢？

以某音为例，我们只需要前期针对账号做一些特定的训练，后期推荐的大部分内容都是我们想要的数据；然后模拟刷视频的动作，通过 OCR 截取视频相关的信息（视频标题、时长、喜欢量等）进行过滤，最后通过点击复制链接按钮，将视频信息写入到本地即可

本篇文章将聊聊常见可行的方案

1、**pytesseract**

借助 pyautogui 和 pytesseract，可以先对屏幕进行截图，然后利用 pytesseract 进行文字识别

首先，下载 pytesseract 客户端，安装后将运行目录配置到环境变量中

下载地址：https://github.com/UB-Mannheim/tesseract/wiki

然后，下载中文语音训练库并放到应用安装目录

PS：最新版本为 4.1.0

下载地址：https://github.com/tesseract-ocr/tessdata

接着，安装依赖

pip3 install pyautogui pytesseract

核心源码如下：

```
`import pyautogui, pytesseract, os, re``from zhon.hanzi import punctuation``os.environ['TESSDATA_PREFIX'] = r'C:\Program Files\Tesseract-OCR'``def remove_special_characters(text):` `text = re.sub(r'[{}]+'.format(punctuation), '', text)  # 去除特殊字符` `text = re.sub(r'\s+', '', text)  # 去除空格和换行符` `return text``def __convert_to_minutes(time_str):` `"""` `将视频时长的字符串格式转换为分钟数。` `:param time_str: 视频时长的字符串，格式为 'HH:MM:SS' 或 'MM:SS'` `:return: 转换后的分钟数` `"""` `if len(time_str.split(':')) == 2:` `hours = 0` `minutes, seconds = time_str.split(':')` `else:` `hours, minutes, seconds = map(int, time_str.split(':'))` `return int(hours) * 60 * 60 + int(minutes) * 60 + int(seconds)``def get_region_text(region):` `# 截图（基于坐标）` `im = pyautogui.screenshot(region=region)` `im.save('my_screenshot.png')` `# 使用pytesseract识别截图中的文字` `text = pytesseract.image_to_string(im, lang='chi_sim')` `# print("识别文字(raw):", text)` `text_new = remove_special_characters(text)` `# print("识别文字(new):", text_new)` `return text_new``# 视频时长（秒）``def get_video_duration(str_raw):` `duration_seconds = -1` `try:` `duration_str = str_raw.split("/")[-1].strip()` `duration_seconds = int(__convert_to_minutes(duration_str))` `except:` `pass` `return duration_seconds``if __name__ == '__main__':` `# 时长` `video_duration_raw = get_region_text((340, 1689, 160, 62))` `video_duration = get_video_duration(video_duration_raw)` `# 视频介绍` `video_content = get_region_text((259, 1774, 1024, 70))` `# 喜欢` `try:` `video_like = int(get_region_text((1699, 1888, 85, 46)))` `except:` `video_like = -1` `print("视频时长:", video_duration)` `print('视频介绍：', video_content)` `print("视频喜欢数：", video_like)`
```

2、**CnOCR**

实际体验下来，方式一的识别结果不如人意；如果要使用 pytesseract，建议自己训练数据集，提高准确率

CnOCR 是基于 PyTorch 的超棒中英文 OCR Python 工具包；它自带 20 多个针对不同应用场景的训练有素的模型，安装即可使用

项目地址：https://github.com/breezedeus/CnOCR

首先，需要安装 C++ 生成工具

https://visualstudio.microsoft.com/zh-hans/visual-cpp-build-tools/

然后，安装依赖包

pip install cnocr\[ort-cpu\]

核心源码如下：

```
`import pyautogui, os, re``from zhon.hanzi import punctuation``from cnocr import CnOcr``# pip3 install cnocr[ort-cpu]``def __convert_to_minutes(time_str):` `"""` `将视频时长的字符串格式转换为分钟数。` `:param time_str: 视频时长的字符串，格式为 'HH:MM:SS' 或 'MM:SS'` `:return: 转换后的分钟数` `"""` `# 如果没有小时部分，我们需要将小时设置为0` `if len(time_str.split(':')) == 2:` `hours = 0` `minutes, seconds = time_str.split(':')` `else:` `# 使用分割函数 split，如果没有小时部分，将默认小时部分为0` `hours, minutes, seconds = map(int, time_str.split(':'))` `return int(hours) * 60 * 60 + int(minutes) * 60 + int(seconds)``def get_region_text(region):` `im = pyautogui.screenshot(region=region)` `im.save('my_screenshot.png')` `ocr = CnOcr()` `result = ocr.ocr('my_screenshot.png')` `text = result[0].get("text")` `print("识别文字(raw):", text)` `return text``# 视频时长（秒）``def get_video_duration(str_raw):` `duration_seconds = -1` `try:` `duration_str = str_raw.split("/")[-1].strip()` `duration_seconds = int(__convert_to_minutes(duration_str))` `except:` `pass` `return duration_seconds``if __name__ == '__main__':` `# 时长` `video_duration_ = get_region_text((340, 1689, 160, 62))` `video_duration = get_video_duration(video_duration_)` `video_content = get_region_text((259, 1774, 1024, 70))` `# 喜欢` `try:` `video_like = int(get_region_text((1699, 1888, 85, 46)))` `except:` `video_like = -1` `print("视频时长:", video_duration)` `print('视频介绍：', video_content)` `print("视频喜欢数：", video_like)`
```

3、**PaddleOCR**

PaddleOCR 是百度开源的深度学习框架 PaddlePaddle 下的 OCR 工具集，支持多种语言的文字检测与识别；它具有易用性、高效性，并提供丰富的文档和模型，适用于多种场景的文字识别任务

项目地址：https://github.com/PaddlePaddle/PaddleOCR

首先，需要安装 PaddlePaddle

```
pip3 install paddlepaddle -i https://mirror.baidu.com/pypi/simple
```

然后，安装 PaddleOCR whl 包

```
pip3 install "paddleocr>=2.0.1" # 推荐使用2.0.1+版本
```

核心源码如下：

```
`import pyautogui, os, re``from paddleocr import PaddleOCR``def get_region_text(region):` `im = pyautogui.screenshot(region=region)` `im.save('my_screenshot.png')` `ocr = PaddleOCR(use_angle_cls=True, lang="ch",` `use_gpu=True)  # need to run only once to download and load model into memory` `img_path = 'my_screenshot.png'` `text = ocr.ocr(img_path, cls=True)[0][0][-1][0]` `print("识别文字(raw):", text)` `return text``if __name__ == '__main__':` `# 时长` `video_duration_ = get_region_text((340, 1689, 160, 62))` `video_duration = get_video_duration(video_duration_)` `# 视频介绍（不精确）` `video_content = get_region_text((259, 1774, 1024, 70))` `# 喜欢` `try:` `video_like = int(get_region_text((1699, 1888, 85, 46)))` `except:` `video_like = -1` `print("视频时长:", video_duration)` `print('视频介绍：', video_content)` `print("视频喜欢数：", video_like)`
```

4、实战一下

以某音为例，要筛选出合适的账号和片子，我们需要先借助工具获取元素的坐标（视频内容、喜欢数、时长等），并配置筛选关键字和喜欢阈值

```
`if __name__ == '__main__':` `# 坐标配置` `duration_region = (187, 1879, 186, 52)  # 视频时长` `content_region = (144, 1694, 622, 141)  # 内容，包含多行` `like_region = (2102, 1295, 159, 58)  # 喜欢数` `studio_video_region = (138, 1698, 111, 59)  # 左下角：直播中` `share_url_region = 2211, 1715  # 分享ICON` `copy_url_region = 1747, 1698  # 拷贝URL到剪切板` `dy_video_region = 1314, 1155  # 视频中间位置（方便暂停播放，提取视频时长）` `# 视频保存目录` `output_path = 'C:\\Users\\xx\\Desktop\\'` `output_video_path = f'{output_path}video_result.txt'` `# 运行日志` `timestamp = datetime.datetime.now().strftime('%Y%m%d_%H%M%S')` `file_name = f'log_{timestamp}.txt'` `output_log_path = f'{output_path}{file_name}'` `logger = Logger(output_log_path)` `# 喜欢数阈值（5000）` `like_target = 5 * 1000` `# 时长限制（秒）` `video_duration_min = 45` `video_duration_max = 120` `# 关键字` `keywords = ['xx1', 'xx2']`
```

然后编写过滤逻辑和数据写入本地逻辑

```
`def current_video_check():` `# 时长` `video_duration_ = get_region_text(duration_region)` `video_duration = get_video_duration(video_duration_)` `logger.debug("视频时长：" + str(video_duration))` `...` `# 视频介绍` `video_content = get_region_text(content_region)` `logger.debug("视频介绍：" + str(video_content))` `if not contain_keywords(video_content) or '广告' in video_content:` `video_content_result = False` `return video_duration_result, video_content_result, video_like_result` `else:` `video_content_result = True` `# 喜欢` `try:` `video_like_str = get_region_text(like_region)` `video_like = get_like_count(video_like_str)` `except:` `video_like = -1` `logger.debug("视频喜欢数：" + str(video_like))` `if video_like < like_target:` `video_like_result = False` `else:` `video_like_result = True` `return video_duration_result, video_content_result, video_like_result``# 写入数据``def write_to_file():` `# 移动到复制按钮处，显示复制悬浮框` `pyautogui.moveTo(share_url_region)` `time.sleep(1)` `# 点击复制按钮，将内容复制到剪切板` `pyautogui.click(copy_url_region)` `...` `# 点击界面，关闭复制弹框` `pyautogui.click(dy_video_region)`
```

最后模拟刷视频的动作，通过上面的筛选条件过滤出合适的数据

```
`def start():` `# 点击视频画面，停止播放，并窗口focus` `pyautogui.click(dy_video_region)` `while True:` `video_duration_result, video_content_result, video_like_result = current_video_check()` `if video_duration_result and video_content_result and video_like_result:` `write_to_file()` `elif not video_duration_result:` `logger.error("Fail-时长不满足要求")` `elif not video_content_result:` `logger.error("Fail-视频内容不满足要求")` `elif not video_like_result:` `logger.error("Fail-视频点赞数不满足要求")` `# 下一个片子` `# 模拟按下方向下键` `pyautogui.press('down')` `# 等待一段时间` `time.sleep(random.uniform(0.5, 2.0))` `if is_studio_video():` `print("直播间，过滤。。。")` `pyautogui.press('down')` `time.sleep(1)` `else:` `# 模拟按下空格键（暂停）` `# pyautogui.press('space')` `pyautogui.click(dy_video_region)`
```

完整思路及核心源码上面已全部包含。

![](https://mmbiz.qpic.cn/mmbiz_png/ohoo1dCmvqfatDt2TsehjQicnMdNNP0jXDhqkeibEaNoHNfB1axdvdnD2Gcnibmw6qyLTeTgqiamGl43kgBUicAwIsA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/ohoo1dCmvqfatDt2TsehjQicnMdNNP0jXDhqkeibEaNoHNfB1axdvdnD2Gcnibmw6qyLTeTgqiamGl43kgBUicAwIsA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/ohoo1dCmvqfatDt2TsehjQicnMdNNP0jXDhqkeibEaNoHNfB1axdvdnD2Gcnibmw6qyLTeTgqiamGl43kgBUicAwIsA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/ohoo1dCmvqfatDt2TsehjQicnMdNNP0jXDhqkeibEaNoHNfB1axdvdnD2Gcnibmw6qyLTeTgqiamGl43kgBUicAwIsA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_gif/ohoo1dCmvqfatDt2TsehjQicnMdNNP0jXNCMEibh29o9oY1TtWh4CztmDET80h1gSt6SibqTEyS5dgpTXMf8Kj9GA/640?wx_fmt=gif&from=appmsg)

**更多每日开发小技巧**

**尽在****未闻 Code Telegram Channel** **!**

![](https://mmbiz.qpic.cn/mmbiz_gif/ohoo1dCmvqfatDt2TsehjQicnMdNNP0jXNCMEibh29o9oY1TtWh4CztmDET80h1gSt6SibqTEyS5dgpTXMf8Kj9GA/640?wx_fmt=gif&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/ohoo1dCmvqfatDt2TsehjQicnMdNNP0jXdx9eYu8af82iaCGk9zmA6Pyp2kaquzHQ4FG7nq1dDog1hUfadKmlyRw/640?wx_fmt=png&from=appmsg)

END

![](https://mmbiz.qpic.cn/mmbiz_jpg/ohoo1dCmvqfatDt2TsehjQicnMdNNP0jXibPu10qNgORDEiaXeaeSOvuxKxoaXueka0IpbEc4iaLLLaCicBKNvMXYfQ/640?wx_fmt=jpeg&from=appmsg)

未闻 Code·知识星球开放啦！

一对一答疑爬虫相关问题

职业生涯咨询

面试经验分享

每周直播分享

......

未闻 Code·知识星球期待与你相见~

![](https://mmbiz.qpic.cn/mmbiz_gif/ohoo1dCmvqfatDt2TsehjQicnMdNNP0jXYTjGTlgEaicmuRqQPiaV9puqAT4OArcMIzG6tKZCP5bTWahDA4Kbnfcg/640?wx_fmt=gif&from=appmsg)

一二线大厂在职员工

十多年码龄的编程老鸟

国内外高校在读学生

中小学刚刚入门的新人

在“未闻 Code技术交流群”等你来！

_入群方式：添加微信“mekingname”，备注“粉丝群”（谢绝广告党，非诚勿扰！)_