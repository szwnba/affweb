![](https://mmbiz.qpic.cn/sz_mmbiz_png/ePw3ZeGRruyyujMZ5Zic5lGYtbYdia4kicMHYGgAbVicBzl1rfReutfoib8drk33VGmGT2MAKz5knqucj2rDzLe0Wvw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

* * *

01

SEED-Story：用大模型创造漫画长篇故事

SEED-Story是由腾讯 ARC 实验室推出的一个多模态长篇故事生成项目。它基于大型语言模型（MLLM），能够**从用户提供的图像和文本开始，生成包含丰富、连贯的叙事文本以及风格一致的图像的多模态长篇故事。** 

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/ePw3ZeGRruystGIicShhxGzuCkGVkEUiaNuG3fVsic6TWcQF3fIv4bX0Uicib76JFFIg26BWsrGPJydePvK0rjVOOQA/640?wx_fmt=jpeg&from=appmsg)

**1️⃣ 开源项目包括啥**

**多模态故事生成模型：** SEED-Story 模型能够生成包含文本和图像的故事，这些故事在角色和风格上保持一致性。

**StoryStream 数据集：** 项目团队还发布了一个专为多模态故事生成训练和基准测试设计的大规模数据集。

**技术方法：** SEED-Story 采用了三阶段的方法，包括视觉分词、指令调优和去分词器适应。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/ePw3ZeGRruystGIicShhxGzuCkGVkEUiaNPib0J8MVFoCc4icG9bpJaz0KvjaW7KNZFB4MYyP8Y3ydcvkK80nmzb6w/640?wx_fmt=png&from=appmsg)

**2️⃣ 特色功能**

**① 用户自定义故事起点：** 用户可以提供起始图像和文本，SEED-Story 据此生成故事。

**② 多模态序列生成：** 故事可以包含多达 25 个多模态序列，尽管在训练中只使用了最多 10 个序列。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/ePw3ZeGRruystGIicShhxGzuCkGVkEUiaNzg9W7cia35mIshPKxm2IGoZxibFuHZVU0llIWF1knwvh0bp1GicnQmEVw/640?wx_fmt=png&from=appmsg)

**③ 视觉与文本的一致性：** 生成的图像与叙事文本在风格和角色上保持高度一致。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/ePw3ZeGRruystGIicShhxGzuCkGVkEUiaNlgD67OgMvmyW2qYd6Hs7bNcr5biaHb6LHicJqYYYFATuwyV6ncFbfpvQ/640?wx_fmt=png&from=appmsg)

**3️⃣ 如何部署**

以下是使用 SEED-Story 生成多模态故事的基本步骤：

① 下载项目，依赖安装：确保 Python 环境（推荐使用Anaconda）和 PyTorch 等依赖项已安装。

git clone https://github.com/TencentARC/SEED-Story.git  
cd SEED-Story  
pip install -r requirements.txt

② 数据准备：下载并准备 StoryStream 数据集，该数据集包含图像和对应的故事文本。

③ 模型权重下载：从 SEED-Story Hugging Face 下载预训练的分词器、去分词器和基础模型。

④ 推理过程：使用提供的脚本进行多模态故事生成和故事可视化。

SEED-Story 展示了大模型在多模态故事生成领域的潜力。无论是研究人员还是开发者，都可以利用这个工具探索和创造引人入胜的故事。

你可以在 GitHub 上搜索 SEED-Story 项目来访问该开源项目的主页。或者关注公众号逛逛 GitHub 回复：2024-0714 来获取开源项目链接

02

Stirling-PDF：你的本地PDF操作神器  

Stirling-PDF，全面、易用的PDF处理工具，**满足用户对 PDF 文件操作的各种需求**。以其强大的功能和用户友好的界面，在 GitHub 上赢得了众多开发者们的青睐，目前已经获得了 30k 的 Star 。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/ePw3ZeGRruystGIicShhxGzuCkGVkEUiaNlQRl5dBGk0nOMVMSVmiaibzOaG8Eq8w6gLTUXibEyjuby7Ch5mcdhtBqQ/640?wx_fmt=png&from=appmsg)

它不仅**支持 PDF 文件的分割、合并、转换、重新组织、添加图像、旋转、压缩等多种操作，而且完全在本地运行，确保了数据的安全性和隐私性。** 

**1️⃣ 有啥优点？**

安全性：Stirling-PDF 不进行任何外发调用，所有文件操作都在本地完成，确保了用户数据的安全性。

功能丰富：支持 PDF 的页面操作、转换操作、安全与权限设置以及其他多种操作，几乎涵盖了用户对 PDF 处理的所有需求。

技术栈：使用Spring Boot + Thymeleaf、PDFBox、LibreOffice、OcrMyPdf等技术构建，保证了应用的性能和稳定性。

**2️⃣ 支持什么功能**

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/ePw3ZeGRruystGIicShhxGzuCkGVkEUiaNLlpdmVOd5CuZDHKCRHTZXhe0EBJmfiaiclcX8icsmGo4mvnJiaSIIlZqbg/640?wx_fmt=jpeg&from=appmsg)

**页面操作：** 包括PDF查看、编辑、合并、分割、旋转、删除页面等。

**转换操作：** 支持PDF与多种格式之间的转换，如图像、Word、PPT等。

**安全与权限：** 提供密码添加、PDF权限设置、水印添加、PDF签名等功能。

**其他操作：** 包括PDF修复、空白页检测、PDF压缩、OCR处理等。

Stirling-PDF 是一个功能全面、操作简便、安全性高的 PDF 处理工具。无论您是需要进行日常的 PDF 编辑，还是需要进行专业的 PDF 转换和处理，Stirling-PDF 都能满足您的需求。

你可以在 GitHub 上搜索 Stirling-PDF 项目来访问该开源项目的主页，或者关注公众号逛逛 GitHub 回复：2024-0714 来获取开源项目链接。

扫描关注 逛逛GitHub

![](https://mmbiz.qpic.cn/mmbiz_png/ePw3ZeGRruxW7LMX2Iz5DfjRIbFTS7UROhxibBmicicT0HpjIh1yniaJJibSnLFuicMHRx5NEdiaOh2OOACfr6MvR38ibQ/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)