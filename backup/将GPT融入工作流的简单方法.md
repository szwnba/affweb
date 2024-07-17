一直在考虑如何让GPT融入自身工作流的方法，但因为网页版使用仍然有其便利性，而工作流的开发则需要时间。你往往会因为“紧急”而忽视了“重要”，而“重要”却是更长期有效且效率更高的。因此，不得不将注意力从“紧急”转到“重要”上来。

首先让我们来思考，工作流中高频且只需一次对话便能够完成的场景有哪些？

*   会议纪要
    
*   梳理任务清单
    
*   邮件润色
    
*   文档大纲生成
    
*   文档总结概述
    
*   日程安排
    
*   翻译
    
*   专业术语解释
    
*   文案创作
    
*   文档分类
    

尝试将以上场景进行分类，可归类为：

*   文档工作
    

*   大纲生成
    
*   总结概述
    
*   会议纪要
    
*   文档分类
    
*   邮件润色
    

*   任务管理
    

*   梳理任务清单
    
*   日程安排
    

*   解析或创作
    

*   文案创作
    
*   翻译
    
*   专业术语解释
    

假设以上工作都只需要一次对话即可完成，那么我们的py程序的输入、处理过程和输出则是：

输入参数：工作场景+语料 处理步骤1：调用调试好的对应prompt 处理步骤2：将prompt+语料组合并发起对话请求 输出：提取api返回结果

利用Alfred工作流将上面的核心程序连接到你的使用场景中，比如：

1.  通过快捷键触发工作流，如 shift+command+P
    
2.  获取你鼠标选中的文本→作为语料
    
3.  输入到py程序
    
4.  输出到剪贴板
    

通过Alfred工作流来做的好处是，你可以在不同的工具中去调用，无论是Logseq还是Obsidian（当然Obsidian的TextGenerator插件也能完成），还是其他任何一个能记录文字的地方都可以调用，并且使用的是同一套prompt。

以下是py程序的示例：

``import os, sys  
import openai  
import json

# 运行环境初始化  
os.environ["http_proxy"] = "http://127.0.0.1:1088" #修改为你的本地代理端口  
os.environ["https_proxy"] = "http://127.0.0.1:1088" #修改为你的本地代理端口

openai.api_key = "你的openai key"

# 输出标准化  
def stdout_write(output_string: str) -> None:  
	output_string = "..." if output_string == "" else output_string  
	sys.stdout.write(output_string)

# 请求函数  
def call_gpt_response(chat_template, chat_prompt, stream_msg=[]):  
	# chat_template 模板取自各个模版md文件  
	# chat_prompt 提问  
	prompt_messages = []  
	chat_prompt = chat_template + chat_prompt  
	system_content = {"role": "system", "content": "你是任务规划助手"}  
	user_content_final = {"role": "user", "content": chat_prompt}  
	prompt_messages.append(system_content)

		i = 1  
	for msg in stream_msg:  
		if i%2 == 1:  
			user_content_previous = {"role": "user", "content": msg}  
		else:  
			user_content_previous = {"role": "system", "content": msg}  
		prompt_messages.append(user_content_previous)  
		i = i + 1

	prompt_messages.append(user_content_final)  
	response = openai.ChatCompletion.create(  
		# model = "gpt-3.5-turbo-0301",  
		model = "gpt-4",  
		messages = prompt_messages  
	) # 修改你希望调用的模型

	res = json.loads(str(response))  
	res_status = res['choices'][0]['finish_reason']  
	res_content = res['choices'][0]['message']['content']

		if res_status == 'stop':  
		return res_content  
	else:  
		print('Something wrong:{}'.format(res_status))  
		return 999

if __name__ == '__main__':  
	# 根据输入参数，调用不同的模版  
	template = "".join(sys.argv[1])  
	input_selection = "".join(sys.argv[2])  
	# 根据template参数读取对应md文件  
	template_text = open("./templates/{}.md".format(template), 'r', encoding='utf-8').read()

	# 发起请求  
	response = call_gpt_response(template_text, input_selection)  
	response.replace('`', '').replace('\n\n', '\n')  
	stdout_write(response)

``

工作流图

其中执行py程序的算子示例（此处为了数据脱敏，用了~来表示，实际使用时建议用完整路径）：

`cd ~/code/alfred-workflow

~/opt/anaconda3/envs/py37/bin/python ~/code/alfred-workflow/text_chat_main.py planner $1

`

每一个prompt最好都先在网页端进行多次尝试，等生成内容格式相对固定且内容质量稳定后再放入模板进行使用，比如这个是用于任务规划的prompt：

`作为一个个人任务规划管理师，你将为我对目标进行合理分解细化，并给出每个任务的预估工作量。你将为我分析任务之间的依赖关系，并将其以优先级区分，保证工作可有序高效进行。我是智慧城市产品经理和大数据技术经理，一般工作任务都跟产品管理与技术管理更为相关。

输出规则如下：

{  
- 整个清单以Markdown格式输出  
- 一级任务是无序列表，将```TODO```字眼，优先级(由高到低是#A、#B、#C)，任务描述，依赖关系，预估工作量写在一行，格式是：```- TODO [#A] 任务描述-依赖关系-预估工作量```  
- 二级子任务是有序列表  
}

以下是一个粗略的任务清单，请将其整理为规划好的一二级任务清单，只输出清单即可：

`

* * *

* * *

个人星球正式更名：**歪思大数据与AI研习社**

希望小伙伴在此可结识到志同道合的人，分享研究心得，讨论最新的技术发展趋势。

借此机会将2023年Q2的更新计划颠覆一下下。因为AI的发展实在太快，即日起，不再过于在乎更新内容的精确性，而更注重瞬时性。个人立Flag，从一周两更开始，并且完整内容将与个人公众号同步发布。

其他更零散、更偏向“不愿意公开发布”的内容会放在星球这边。结合个人能力的倾向，我的更新会更偏向技术，当然也欢迎小伙伴跟我讨论各种应用及行业需求场景。

![](https://mmbiz.qpic.cn/mmbiz_jpg/Hj8kVpDjib5iahicEvsaQB9JjAwBPmiaa9phETAxiaGwPwgib98xhaHTPFtkzialibiarrkXOnM2b6LLr3rayGuDmA6d0rQ/640?wx_fmt=jpeg)