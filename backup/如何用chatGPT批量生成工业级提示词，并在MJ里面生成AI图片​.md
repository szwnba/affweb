文档作者--海迪，应该有部分圈友认识我哈，两届领队。我们已经完成了AI绘画的闭环，现在还结合了chat，可以批量出工业级提示词。​
一、ChatGPT相关介绍​
1.ChatGPT是什么​
你好！我是ChatGPT，OpenAI开发的语言模型。我受过大量文本数据的训练，可以根据我收到的输入生成类似人类的文本。我可以回答问题，与你聊天，提供信息，甚至产生创造性的写作。我的训练数据使我能够理解和生成各种风格和格式的文本，从非正式聊天到学术写作。我是来帮忙的，有什么问题尽管问我！​
2.ChatGP能做什么​
ChatGPT 是一个由 OpenAI 训练的大型语言模型，它可以完成多种任务，包括：​
对话：与用户进行自然语言交流，回答问题，提供信息等。​
文本生成：生成文本，包括但不限于文章，故事，描述等。​
文本摘要：对长文本生成简要的摘要。​
文本翻译：翻译文本从一种语言到另一种语言。​
文本标注：为文本进行语法，语义，实体标注等。​
总的来说，ChatGPT 是一个多功能的自然语言处理工具，可以用于多种应用场景，如聊天机器人，文本生成，摘要等。​
中文翻译：ChatGPT 是一个由 OpenAI 训练的大型语言模型，它可以完成多种任务，包括对话，文本生成，文本摘要，文本翻译和文本标注等。

二、AI绘画领域垂直玩法​
1、喂词玩法​
给chatGPT喂词，想象成人工智能，并根据概念，生成提示词
You are going to pretend to be Concept2PromptAI or C2P_AI for short. C2P_AI takes concepts and turns them into prompts for generative AIs that create images.​
You will ask the user for a concept then provide a prompt for it in a copyable code-box.​
After providing a prompt, ask if the User wants three different options for prompts for the concept or if they wish to move to a new concept.​
Use the following examples as a guide:​
Concept: A macro shot of a stempunk insect​
Prompt: a close up of a bug with big eyes, by Andrei Kolkoutine, zbrush central contest winner, afrofuturism, highly detailed textured 8k, reptile face, cyber steampunk 8 k 3 d, c 4 d ”, high detail illustration, detailed 2d illustration, space insect android, with very highly detailed face, super detailed picture --v 4 --q 2 --stylize 1000​
Concept: An orange pie on a wooden table​
Prompt: a pie sitting on top of a wooden table, by Carey Morris, pexels contest winner, orange details, linen, high details!, gif, leafs, a pair of ribbed, 🦩🪐🐞👩🏻🦳, vivid attention to detail, navy, piping, warm sunshine, soft and intricate, lights on, crisp smooth lines, religious --v 4 --q 2 --stylize 1000​
Concept: a close up shot of a plant with blue and golden leaves​
Prompt: a close up of a plant with golden leaves, by Hans Schwarz, pexels, process art, background image, monochromatic background, bromeliads, soft. high quality, abstract design. blue, flax, aluminium, walking down, solid colours material, background artwork --v 4 --q 2 --stylize 1000

翻译成中文​

你要假装是Concept2Prompt AI或者简称C2P AI。C2P人工智能获取概念，并将其转化为生成人工智能的提示，生成图像。​
你将向用户询问一个概念，然后在一个可复制的代码框中给出提示。​
在提供一个提示后，询问用户是否需要三个不同的概念提示选项，或者他们是否希望转移到一个新概念。​
使用以下示例作为指南:​
概念:一个茎朋克昆虫的微距镜头​
提示:一只大眼睛的虫子的特写镜头，作者Andrei Kolkoutine，zbrush central竞赛获胜者，afrofuturism，高细节纹理8k，爬行动物脸，赛博蒸汽朋克8 k 3 d，c 4 d”，高细节插图，详细2d插图，太空昆虫机器人，具有非常高细节的脸，超细节图片- v 4 - q 2 -风格化1000​
概念:木制桌子上的橙色馅饼​
提示:一个馅饼坐在木桌的顶部，由凯里莫里斯，pexels竞赛冠军，橙色细节，亚麻，高细节！，gif，叶子，一对罗纹，🦩🪐🐞👩🏻🦳，对细节的生动关注，海军，滚边，温暖的阳光，柔和而复杂，灯光，清晰流畅的线条，宗教- v 4 - q 2 -风格化1000​
概念:一个有蓝色和金色叶子的植物的特写镜头

将上述的英文复制或者修改成你想要的提示词格式，然后放进去chatGPT里面，给他这个知识，让他理解。​
下面图片是chat回复的
![image](https://github.com/szwnba/affweb/assets/7855369/f14b9949-91c0-49df-8fad-26a16ff3720d)
![image](https://github.com/szwnba/affweb/assets/7855369/528bc3e4-3386-480d-91b2-3bd30f971f2e)
以下为翻译成中文的图
![image](https://github.com/szwnba/affweb/assets/7855369/93d928fd-bf80-4133-90be-63e6ea0c2a91)

下面的两张图是提示1和提示2在MJ里面生成的图
![image](https://github.com/szwnba/affweb/assets/7855369/72cf82c9-e9ed-4a9c-a968-a3a7281f0685)
从图片上看整体画风出来的图片效果还是不错的

2、充当提词器并激发想象玩法(开盲盒)
"I want you to act as a prompt generator for Midjourney's artificial intelligence program. Your job is to provide detailed descriptions that will inspire unique and interesting images from the AI. Keep in mind that Midjourney can understand a wide range of language and can interpret abstract concepts, so feel free to be as imaginative and descriptive as possible. The more surreal and imaginative your description, the more interesting the resulting image will be."

翻译成中文​
​
“我想让你充当Midjourney的人工智能程序的提示生成器。你的工作是提供详细的描述，这将激发人工智能独特而有趣的图像。请记住，Midjourney可以理解广泛的语言，并可以解释抽象的概念，所以尽可能自由地发挥想象力和描述性。你的描述越超现实、越富有想象力，最终得到的图像就会越有趣。”​
​
我让chatGPT充当MJ的提词器，并发挥它的想象力，如下：
![image](https://github.com/szwnba/affweb/assets/7855369/4e08be68-a6db-44a5-b45d-62607aec2372)
![image](https://github.com/szwnba/affweb/assets/7855369/d9581b94-d9af-4bcd-838a-82c140754233)
以下为用chat提示生成的提示词,在MJ里面生成的图片
![image](https://github.com/szwnba/affweb/assets/7855369/7586ac4a-ada4-420c-813f-f0f3111929f0)
![image](https://github.com/szwnba/affweb/assets/7855369/1d6b3349-3d2f-44c3-b17c-440def5598b5)
![image](https://github.com/szwnba/affweb/assets/7855369/15eca9a4-deb3-4021-a695-e4fe172fce8d)
是不是很惊艳,开盲盒图片,而且也很奇特,可以发小红书和抖音图文

3、给提示词喂词,生成类似玩法

I want you to act as a hint generator for Midjourney's AI program. Your job is based on the description in prompt, which is: "adorable kawaii dinosaur-themed fashion, scenic magical prehistoric forest environment, designed by Yoshitomo Nara and Ray Caesar and Studio Ghibli "Designed by Yoshitomo Nara and Ray Caesar and Studio Ghibli" Generate more prompts like this

![image](https://github.com/szwnba/affweb/assets/7855369/5fcc9d31-4810-4fd2-a000-61a2acff8554)
![image](https://github.com/szwnba/affweb/assets/7855369/47249cd9-4da9-453d-bd56-fdcf501e71b1)
从chat回复上面看，都是一个时装类型+双设计师+背景，很符合我的提示，下面为提示1和提示2生成的图
![image](https://github.com/szwnba/affweb/assets/7855369/a5b9e1a2-bf16-48e5-9013-37a083f50796)
![image](https://github.com/szwnba/affweb/assets/7855369/d43644bb-4e1b-494f-af67-79f833b30ff3)

4、只改动部分提示内容
给它整句提示，并告诉它只改动的部分，其它意思大致不变，生成更多的提示
You act as an optimization prompt generator for Midjourney's AI program. Your job is to change some of the following tips, Namely: "Highly detailed girl in a modern dress, Steven Bliss, Ilya Kuvshinov, rossdraws, Tom bagshaw, global lighting, radiant light, night city, concept art portrait by greg rutkowsk." Change only the word in parenthesis (global lighting, radiant light, night city), the whole hint remains the same, generating more of these hints

翻译成中文​
​
你充当Midjourney的AI程序的优化提示生成器。你的工作是改变下面的一些提示，即:“穿着现代服装的高度细致的女孩，史蒂文·布利斯，伊利亚·库夫什诺夫，罗斯德鲁，汤姆·巴格肖，全球照明，光芒四射，不夜城，格雷格·鲁特科夫斯基的概念艺术肖像。”仅改变括号中的单词(全局照明、辐射光、夜之城)，整个提示保持不变，生成更多这样的提示​
​
只保持整体结构，改动了部分，其实也可以改动一些其他的，比如改画家，改风格，改主体，也可以只保留一个，其他都改动等。
![image](https://github.com/szwnba/affweb/assets/7855369/39f7c33d-4994-40f1-9ca4-a4c80728e58e)
![image](https://github.com/szwnba/affweb/assets/7855369/70ef4953-e4e1-4ab6-9c24-8ffbe94c26fa)
下面这张是我给的原图,也就是发给chat提示的关键词图
![image](https://github.com/szwnba/affweb/assets/7855369/30c622ab-0a50-491a-9ec0-8299d2faf28d)
只改动了部分效果，整体风格不变，但是人物也跟着这部分改动而改动了，整体效果看起来还是不错的，大家可以根据指令，可以改变画家，改变渲染，改变或者保留，也可以优化等等。​

5、给出部分条件，让其发挥想象​
你现在充当一个midjourney的出图prompt提示器，现在，帮我写5条优质的表现女孩正面图片，不限于类型，写完并翻译成中文，谢谢​
这条我直接输入中文，下面是截图

![image](https://github.com/szwnba/affweb/assets/7855369/32467fca-6f4e-49c0-8fb0-fa56a1baee24)
下面的图片是chat生成的提示1和提示2生成的图
![image](https://github.com/szwnba/affweb/assets/7855369/0dc0a741-cb4e-4265-9cd4-760841d06a36)

总结：大家可以根据自己的需求，去训练自己的chatGPT出到满意的提示词，可以多个会话训练集合，备注好类型。这样下次可以直接选用，批量出词。​
​
![image](https://github.com/szwnba/affweb/assets/7855369/39113bd1-1f00-4862-a836-bad18213ef05)

图片中+就是新加训练对话及，方框内的就是训练的文本