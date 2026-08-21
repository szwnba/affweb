Stability AI recently released the weights for Stable Diffusion 3 Medium, a 2 billion parameter text-to-image model that excels at photorealism, typography, and prompt following.  
Stability AI 最近发布了 Stable Diffusion 3 Medium 的权重，这是一个 20 亿参数的文本到图像模型，在照片级写实、排版和提示跟随方面表现出色。

You can [run the official Stable Diffusion 3 model on Replicate](https://replicate.com/stability-ai/stable-diffusion-3), and it is available for commercial use. We have also open-sourced our [Diffusers](https://github.com/replicate/cog-stable-diffusion-3) and [ComfyUI](https://github.com/fofr/cog-comfyui-sd3) implementations ([read our guide to ComfyUI](https://replicate.com/guides/comfyui)).  
您可以在 Replicate 上运行官方的 Stable Diffusion 3 模型，它可用于商业用途。我们还开源了 Diffusers 和 ComfyUI 实现（阅读我们的 ComfyUI 指南）。

In this blog post we’ll show you how to use Stable Diffusion 3 (SD3) to get the best images, including how to prompt SD3, which is a bit different from previous Stable Diffusion models.  
在这篇博文中，我们将向您展示如何使用 Stable Diffusion 3 （SD3） 来获得最佳图像，包括如何提示 SD3，这与以前的 Stable Diffusion 模型略有不同。

To help you experiment, we’ve created an [SD3 explorer model](https://replicate.com/fofr/sd3-explorer) that exposes all of the settings we discuss here.  
为了帮助您进行实验，我们创建了一个 SD3 资源管理器模型，该模型公开了我们在这里讨论的所有设置。

[![](https://d31rfu1d3w8e4q.cloudfront.net/static/blog/get-the-best-from-stable-diffusion-3/explorer-screenshot.png)
](https://replicate.com/fofr/sd3-explorer)

[SD3 has very good adherence to long, descriptive prompts. Try it out yourself in our](https://replicate.com/fofr/sd3-explorer) [SD3 explorer model.](https://replicate.com/fofr/sd3-explorer)  
SD3 可以很好地遵循长描述性提示。在我们的 SD3 浏览器模型中亲自尝试一下。

Picking an SD3 version  
选择 SD3 版本
----------------------------------

Stability AI have packaged up SD3 Medium in different ways to make sure it can run on as many devices as possible.  
Stability AI 以不同的方式打包了 SD3 Medium，以确保它可以在尽可能多的设备上运行。

SD3 uses three different text encoders. (The text encoder is the part that takes your prompt and puts it into a format the model can understand). One of these new text encoders is really big – meaning it uses a lot of memory. If you’re looking at the [SD3 Hugging Face weights](https://huggingface.co/stabilityai/stable-diffusion-3-medium), you’ll see four options with different text encoder configurations. You should choose which one to use based on your available VRAM.  
SD3 使用三种不同的文本编码器。（文本编码器是接收提示并将其转换为模型可以理解的格式的部分）。其中一个新的文本编码器非常大，这意味着它使用大量内存。如果您正在查看 SD3 拥抱面重，您会看到四个具有不同文本编码器配置的选项。您应该根据可用的 VRAM 选择要使用的 VRAM。

### **sd3\_medium\_incl\_clips\_t5xxlfp8.safetensors  
sd3\_medium\_incl\_clips\_t5xxlfp8.安全张量**

This encoder contains the model weights, the two CLIP text encoders and the large T5-XXL model in a compressed fp8 format. We recommend these weights for simplicity and best results.  
该编码器包含模型权重、两个 CLIP 文本编码器和压缩 fp8 格式的大型 T5-XXL 模型。为了简单起见，我们推荐这些砝码并获得最佳效果。

### **sd3\_medium\_incl\_clips\_t5xxlfp16.safetensors  
sd3\_medium\_incl\_clips\_t5xxlfp16.安全张量**

The same as `sd3_medium_incl_clips_t5xxlfp8.safetensors`, except the T5 part isn’t compressed as much. By using fp16 instead of fp8, you’ll get a slight improvement in your image quality. This improvement comes at the cost of higher memory usage.  
与 `sd3_medium_incl_clips_t5xxlfp8.safetensors` 相同，只是 T5 部分没有压缩那么多。通过使用 fp16 而不是 fp8，您的图像质量会略有提高。这种改进是以更高的内存使用率为代价的。

### **sd3\_medium\_incl_clips.safetensors  
sd3\_medium\_incl_clips.安全张量**

This version does away with the T5 element altogether. It includes the weights with just the two CLIP text encoders. This is a good option if you do not have much VRAM, but your results might be very different from the full version. You might notice that this version doesn’t follow your prompts as closely, and it may also reduce the quality of text in images.  
此版本完全取消了 T5 元素。它仅包括两个 CLIP 文本编码器的权重。如果您没有太多 VRAM，这是一个不错的选择，但您的结果可能与完整版本有很大不同。您可能会注意到，此版本没有严格遵循您的提示，并且还可能降低图像中的文本质量。

### **sd3_medium.safetensorssd3_medium.安全张量**

This model is just the base weights without any text encoders. If you use these weights, make sure you’re loading the text encoders separately. Stability AI have provided an [example ComfyUI workflow](https://huggingface.co/stabilityai/stable-diffusion-3-medium/blob/main/comfy_example_workflows/sd3_medium_example_workflow_multi_prompt.json) for this.  
该模型只是没有任何文本编码器的基本权重。如果使用这些粗细，请确保单独加载文本编码器。Stability AI 为此提供了一个示例 ComfyUI 工作流程。

Prompting促使
-----------

The big change in usage in SD3 is prompting. You can now pass in very long and descriptive prompts and get back images with very good prompt adherence. You’re no longer limited to the 77-token limit of the CLIP text encoder.  
SD3 使用的巨大变化正在促使人们注意。您现在可以传入很长的描述性提示，并以非常好的提示依从性获得图像。您不再受限于 CLIP 文本编码器的 77 个标记限制。

![](https://d31rfu1d3w8e4q.cloudfront.net/static/blog/get-the-best-from-stable-diffusion-3/book-prompt-comparison.jpg)

Results for the same prompt in SD3 (left) vs. SDXL, showing SD3's advantages in long prompts and correctly rendering text. Prompt: The cover of a 1970s hardback children's storybook with a black and white illustration of a small white baby bird perched atop the head of a friendly old hound dog. The dog is lying flag with its chin on the floor. The dog's ears are long and droopy, and its eyes are looking upward at the small bird perched atop its head. The little white bird is looking down expectantly at the dog. The book's title is 'Are You My Boss?" set in a white serif font, and the cover is in a cool blue and green color palette  
SD3（左）与 SDXL 中相同提示的结果，显示了 SD3 在长提示和正确呈现文本方面的优势。提示：一本 1970 年代精装儿童故事书的封面，上面有一幅黑白插图，一只白色的小鸟栖息在一只友好的老猎犬的头上。这只狗躺在地上，下巴放在地板上。狗的耳朵又长又下垂，它的眼睛向上看着栖息在它头顶上的小鸟。小白鸟满怀期待地低头看着狗。这本书的书名是“你是我的老板吗？”，采用白色衬线字体，封面采用冷蓝色和绿色调色板

Your prompt can now go as long as 10,000 characters, or more than 1,500 words. In practice, you won’t need that sort of length, but it is clear we should no longer worry about prompt length.  
您的提示现在可以长达 10,000 个字符，或超过 1,500 个单词。在实践中，你不需要这种长度，但很明显，我们不应该再担心提示长度。

For very long prompts, at the moment, it’s hard to say what will and will not make it into the image. It isn’t clear which parts of a prompt the model will pay attention to. But the longer and more complex the prompt, the more likely something will be missing.  
对于很长的提示，目前很难说什么会和不会进入图像。目前尚不清楚模型将注意提示的哪些部分。但是提示越长、越复杂，就越有可能遗漏某些东西。

### Do not use negative prompts  
不要使用否定提示

SD3 was not trained with negative prompts. Negative prompting does not work as you expect it to with SD3. If you’ve already experimented with SD3, you may have noticed that when you give a negative prompt, your image does change, but the change isn’t a meaningful one. Your negative prompt will not remove the elements you don’t want; instead, it will introducing noise to your conditioning and simply vary your output, kind of like using a different seed.  
SD3 没有使用负面提示进行训练。否定提示在 SD3 中无法正常工作。如果您已经尝试过 SD3，您可能已经注意到，当您给出否定提示时，您的图像确实会发生变化，但这种变化并不有意义。您的否定提示不会删除您不想要的元素;相反，它会在您的条件反射中引入噪音，并简单地改变您的输出，有点像使用不同的种子。

### Prompting techniques提示技术

Now that we’re allowed longer prompts, you can use plain English sentences and grammar to describe the image you want. You can still use comma-separated keywords like before, but if you’re aiming for something specific, it pays to be descriptive and explicit with your prompts. This level of prompting is now similar to the way you would prompt Midjourney version 6 and DALL·E 3.  
现在我们被允许使用更长的提示，您可以使用简单的英语句子和语法来描述您想要的图像。你仍然可以像以前一样使用逗号分隔的关键字，但如果你的目标是特定的东西，那么你的提示要有描述性和明确性。此级别的提示现在类似于提示 Midjourney 版本 6 和 DALL·E 3.

When you are describing an element of an image, try to make your language unambiguous to prevent those descriptions from also applying to other parts of the image.  
当你描述图像的元素时，尽量使你的语言明确，以防止这些描述也适用于图像的其他部分。

These are examples of long and descriptive prompts that show good prompt adherence in SD3:  
这些是长提示和描述性提示的示例，这些提示在 SD3 中显示出良好的提示依从性：

> a man and woman are standing together against a backdrop, the backdrop is divided equally in half down the middle, left side is red, right side is gold, the woman is wearing a t-shirt with a yoda motif, she has a long skirt with birds on it, the man is wearing a three piece purple suit, he has spiky blue hair ([see example](https://replicate.com/p/z78h5v1dwxrgp0cg5cvrpgs2fc))  
> 一男一女站在一起，背景从中间平分成两半，左边是红色的，右边是金色的，女人穿着一件带有尤达图案的T恤，她有一条长裙，上面有小鸟，男人穿着三件套紫色西装， 他有一头尖尖的蓝色头发（见示例）

> a man wearing 1980s red and blue paper 3D glasses is sitting on a motorcycle, it is parked in a supermarket parking lot, midday sun, he is wearing a Slipknot t-shirt and has black pants and cowboy boots ([see example](https://replicate.com/p/pg4r85kd39rgm0cg5dp9e8q56c))  
> 一个戴着 1980 年代红蓝纸 3D 眼镜的男人坐在一辆摩托车上，它停在超市停车场，正午的阳光下，他穿着 Slipknot T 恤，穿着黑色裤子和牛仔靴（见示例）

> a close-up half-portrait photo of a woman wearing a sleek blue and white summer dress with a monstera plant motif, has square white glasses, green braided hair, she is on a pebble beach in Brighton UK, very early in the morning, twilight sunrise ([see example](https://replicate.com/p/nts3c16qhnrgj0cg5dqv31jjm0))  
> 一张特写半肖像照片，一个女人穿着光滑的蓝白夏装，上面有龟背竹植物图案，戴着方形的白色眼镜，绿色的辫子头发，她在英国布莱顿的鹅卵石海滩上，清晨，暮光之城日出（见示例）

### Different prompts for each text encoder  
每个文本编码器都有不同的提示

Now that we have three text encoders, we can technically pass in different prompts to each of them. For example, you could try passing the general style and theme of an image to the CLIP text encoders, and the detailed subject to the T5 part. In our experimentation, we haven’t found any special techniques yet, but we’re still trying.  
现在我们有三个文本编码器，从技术上讲，我们可以向每个编码器传递不同的提示。例如，您可以尝试将图像的一般样式和主题传递给 CLIP 文本编码器，并将详细主题传递给 T5 部分。在我们的实验中，我们还没有发现任何特殊的技术，但我们仍在尝试。

[Here’s an example where we pass different prompts to the CLIP and T5 encoders](https://replicate.com/p/vmp5h000c9rgj0cg5d6813mmnr).  
下面是一个示例，我们将不同的提示传递给 CLIP 和 T5 编码器。

Settings设置
----------

There are many settings, some new, that you can use to change image outputs in SD3. We recommend some good defaults below, but you should experiment to find your own preferences.  
有许多设置，有些是新的，可用于更改 SD3 中的图像输出。我们在下面推荐一些好的默认值，但您应该尝试找到自己的偏好。

In summary, you should start your experimentation from these settings (we’ll discuss them more in detail below):  
总之，您应该从这些设置开始实验（我们将在下面更详细地讨论它们）：

*   28 steps28 步
*   3.5 to 4.5 CFG  
    3.5 至 4.5 CFG
*   `dpmpp_2m` sampler with the `sgm_uniform` scheduler  
    `dpmpp_2m` 带有调度程序的 `sgm_uniform` 采样器
*   3.0 shift3.0 班

### Width and height宽度和高度

Much like SDXL, SD3 gives the best outputs at around 1 megapixel. Resolutions must be divisible by 64. We recommend the following widths and heights for these common aspect ratios:  
与 SDXL 非常相似，SD3 在 100 万像素左右提供最佳输出。分辨率必须能被 64 整除。对于这些常见的纵横比，我们建议采用以下宽度和高度：

*   **1:1** \- 1024 x 1024 (Square images)  
    1：1 - 1024 x 1024 （方形图像）
*   **16:9** \- 1344 x 768 (Cinematic and widescreen)  
    16：9 - 1344 x 768（电影和宽银幕）
*   **21:9** \- 1536 x 640 (Cinematic)  
    21：9 - 1536 x 640（电影）
*   **3:2** \- 1216 x 832 (Landscape aspect ratio)  
    3：2 - 1216 x 832（横向宽高比）
*   **2:3** \- 832 x 1216 (Portrait aspect ratio)  
    2：3 - 832 x 1216（纵向宽高比）
*   **5:4** \- 1088 x 896 (Landscape aspect ratio)  
    5：4 - 1088 x 896（横向宽高比）
*   **4:5** \- 896 x 1088 (Portrait aspect ratio)  
    4：5 - 896 x 1088（纵向宽高比）
*   **9:16** \- 768 x 1344 (Long vertical images)  
    9：16 - 768 x 1344 （长垂直图像）
*   **9:21** \- 640 x 1536 (Very tall images)  
    9：21 - 640 x 1536 （超高图像）

If you’ve previously used Stable Diffusion 1.5 and SDXL at resolutions larger than they were trained, you might be familiar with the strange outputs they give – distorted images, multiple heads, repeating elements, and so on. ([You can see some of these in our previous SDXL guide](https://sdxl.replicate.dev/).) This does not happen with SD3. In SD3, if you go bigger than the expected resolution, you’ll have a reasonable image in the middle and strange repeating artifacts around the edges ([here’s a prediction example showing an image that’s too large](https://replicate.com/p/4qnntmc8znrgj0cg5dc928wsk0)). Similarly, if you go too small, your image will be harshly cropped ([here’s a prediction example showing a cropped image that’s too small](https://replicate.com/p/kbzq9743whrgg0cg5dd8ztxm50)).  
如果您以前使用过 Stable Diffusion 1.5 和 SDXL 的分辨率大于训练的分辨率，您可能熟悉它们给出的奇怪输出——扭曲的图像、多个磁头、重复的元素等等。（您可以在我们之前的 SDXL 指南中看到其中的一些内容。SD3 不会发生这种情况。在SD3中，如果分辨率大于预期分辨率，则中间会出现合理的图像，边缘会出现奇怪的重复伪影（这是一个预测示例，显示图像太大）。同样，如果你太小，你的图像将被严重裁剪（这是一个预测示例，显示裁剪后的图像太小）。

### Number of steps步数

This setting is the number of denoising steps the model will use when generating an image. In SDXL, this value was typically around 20, and for Lightning models it’s 4 steps. Number of steps is the main factor that determines how long your image takes to generate. More steps, better image versus fewer steps, faster image.  
此设置是模型在生成图像时将使用的去噪步骤数。在 SDXL 中，此值通常约为 20，而对于 Lightning 型号，该值为 4 步。步数是决定图像生成时间的主要因素。更多的步数，更好的图像与更少的步骤，更快的图像。

For SD3, we recommend 28 steps. This number gives sharp images with an interesting foreground and background and few VAE artifacts (visible noise patterns you might see in generated images), and it doesn’t take too long.  
对于 SD3，我们建议 28 个步骤。这个数字提供了清晰的图像，具有有趣的前景和背景，并且几乎没有VAE伪影（您可能会在生成的图像中看到的可见噪点模式），并且不会花费太长时间。

### The effect of increasing steps  
增加步数的影响

The way steps affects image quality is different from previous Stable Diffusion models. We are used to steps improving quality iteratively up to a certain point where the effect levels off and images remain almost static. But with SD3, as you increase steps, you’ll notice something different.  
步长影响图像质量的方式与以前的 Stable Diffusion 模型不同。我们习惯于迭代地提高质量，直到效果趋于平稳，图像几乎保持静止。但是使用 SD3，随着步数的增加，您会注意到一些不同的东西。

SD3 can usually get to an OK-looking image in about 8 to 10 steps ([here’s an example prediction at 10 steps](https://replicate.com/p/egdx1h72rsrgm0cg5ddttacxa8)), albeit with VAE noise artifacts and parts of the image that aren’t coherent. This is also dependent on prompt and seed. As the steps increase you get more coherent and interesting images. The sweet spot is around 26 to 36.  
SD3 通常可以在大约 8 到 10 个步骤内获得一个看起来不错的图像（这是一个 10 步的预测示例），尽管存在 VAE 噪声伪影和图像中不连贯的部分。这也取决于提示和种子。随着步骤的增加，您将获得更连贯和有趣的图像。最佳点在 26 到 36 左右。

You will also find that images and their subjects can sometimes change quite dramatically at different step values. For example, for a vague prompt of a person, you could find your subject changes age, gender or ethnicity as steps increase. Compare these two outputs: [one at 10 steps](https://replicate.com/p/c92xbp36p9rgp0cg5df9py1cm0), and another – with the same settings and seed – [at 32 steps](https://replicate.com/p/vhbjm0qva5rgp0cg5devah6n34).  
您还会发现，图像及其主体有时会在不同的步长值下发生巨大变化。例如，对于一个人的模糊提示，您可能会发现您的主题会随着步数的增加而改变年龄、性别或种族。比较这两个输出：一个是 10 步，另一个是 32 步，具有相同的设置和种子。

### Guidance scale指导量表

The guidance scale (or CFG, classifier-free guidance) tells the model how similar the output should be to the prompt. For SD3, you need to use lower values than SD 1.5 and SDXL.  
指导量表（或 CFG，无分类器指导）告诉模型输出与提示的相似程度。对于 SD3，您需要使用低于 SD 1.5 和 SDXL 的值。

We recommend somewhere between 3.5 and 4.5. If your outputs look “burnt,” like they have too much contrast, lower the CFG ([here’s an example of a burnt image where the CFG is too high](https://replicate.com/p/s7775f6gbxrgp0cg5dfvzy36jr)).  
我们建议介于 3.5 和 4.5 之间。如果您的输出看起来“烧毁”，就像它们的对比度过高一样，请降低 CFG（这是一个 CFG 过高的烧毁图像示例）。

It’s also worth pointing out that the lower your CFG, the more similar your outputs will be across the different text encoder options (in other words, whether you use the T5 text encoder in fp8, fp16 or not at all). So if you’re using a very low CFG, you could do away with the large T5 encoder without affecting the image quality much. As an example, compare these two outputs that use the same seed and a CFG of 1.5: [this is the output with fp16](https://replicate.com/p/kb3404y5jnrgg0cg5dhrrwnatc), which is [very similar to the CLIP-only output](https://replicate.com/p/x1j7z7j791rgj0cg5dhrekmh08).  
还值得指出的是，CFG 越低，不同文本编码器选项的输出就越相似（换句话说，无论您在 fp8、fp16 中是否使用 T5 文本编码器）。因此，如果您使用的是非常低的 CFG，则可以取消大型 T5 编码器，而不会对图像质量产生太大影响。例如，比较使用相同种子且 CFG 为 1.5 的两个输出：这是使用 fp16 的输出，与仅 CLIP 输出非常相似。

### Sampler and scheduler采样器和调度器

Different tools use different labels for these, but essentially this is the algorithm the model will use to manage noise. Different algorithms give different images.  
不同的工具使用不同的标签，但本质上这是模型将用于管理噪声的算法。不同的算法给出不同的图像。

For SD3 we recommend using the `dpmpp_2m` sampler with the `sgm_uniform` scheduler in ComfyUI. Use `dpm++ 2M` in Automatic1111. `Euler` can also give good results.  
对于 SD3，我们建议在 ComfyUI 中将 `dpmpp_2m` 采样器与 `sgm_uniform` 调度器一起使用。在 Automatic1111 中使用 `dpm++ 2M` 。 `Euler` 也可以给出良好的效果。

Some samplers and schedulers simply do not work with SD3 – notably the `ancestral` and `sde` samplers and the popular SDXL noise scheduler, `karras`.  
一些采样器和调度器根本不适用于 SD3 – 特别是 `ancestral` 和 `sde` 采样器和流行的 SDXL 噪声调度器。 `karras`

### Shift转变

Shift is a new parameter in SD3 that you can modify. It represents the timestep scheduling shift, where higher shift values are better at managing noise in higher resolutions. Essentially, noise is handled better and you get nicer-looking images when using a shift. You can read more about the theory behind timestep schedule shifting in the [SD3 research paper](https://arxiv.org/pdf/2403.03206).  
Shift 是 SD3 中可以修改的新参数。它表示时间步长调度偏移，其中较高的偏移值在更高分辨率下更好地管理噪声。从本质上讲，噪点处理得更好，使用移位时您可以获得更好看的图像。您可以在 SD3 研究论文中阅读有关时间步长时间表转移背后的理论的更多信息。

3.0 is the recommended default value for shift based on a human preference evaluation, but you can of course change it. In ComfyUI, you can find the value on the “ModelSamplingSD3” node, and in Diffusers you can pass in a shift parameter to the `FlowMatchEulerDiscreteScheduler`.  
3.0 是基于人工偏好评估的 shift 的建议默认值，但您当然可以更改它。在 ComfyUI 中，您可以在“ModelSamplingSD3”节点上找到该值，在 Diffusers 中，您可以将 shift 参数传递给 `FlowMatchEulerDiscreteScheduler` .

A shift value of 6.0 scored well in the human evaluation and is worth trying. If you use lower values like 2.0 or 1.5, you can get a more raw and “less processed” looking image, which works well for certain prompts.  
6.0 的偏移值在人工评估中得分很高，值得一试。如果您使用较低的值（如 2.0 或 1.5），则可以获得更原始且“处理较少”的图像，这适用于某些提示。

Conclusion结论
------------

Have fun experimenting with Stable Diffusion 3 using these tips! For more on working with SD3, check out our recent blog posts:  
使用这些技巧进行 Stable Diffusion 3 试验的乐趣！有关使用 SD3 的更多信息，请查看我们最近的博客文章：

*   [Run Stable Diffusion 3 with an API  
    使用 API 运行 Stable Diffusion 3](https://replicate.com/blog/run-stable-diffusion-3-with-an-api)
*   [Run Stable Diffusion 3 on your own machine with ComfyUI  
    使用 ComfyUI 在您自己的机器上运行 Stable Diffusion 3](https://replicate.com/blog/run-sd3-on-comfyui)
*   [Push a custom version of Stable Diffusion 3  
    推送 Stable Diffusion 3 的自定义版本](https://replicate.com/blog/push-a-custom-sd3)