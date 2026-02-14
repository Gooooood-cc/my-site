import OpenAI from "openai";

if (!process.env.DEEPSEEK_API_KEY) {
  console.warn("DEEPSEEK_API_KEY is not set");
}

export const deepseek = new OpenAI({
  baseURL: "https://api.deepseek.com",
  apiKey: process.env.DEEPSEEK_API_KEY || "",
});

export async function chatWithDeepSeek(
  message: string,
  isIntentDetection: boolean = false
): Promise<string> {
  try {
    const response = await deepseek.chat.completions.create({
      model: "deepseek-chat",
      messages: [
        {
          role: "system",
          content: isIntentDetection
            ? `你是一个网站AI助手，名叫 Holly 的 AI 助理。你的任务是理解用户意图并执行相应操作。

## 可执行的动作

1. **导航 (navigate)**: 用户想去某个页面
   - "去首页" / "去项目页" / "去简历页" / "带我去看博客" → navigate to "/", "/projects", "/resume"
   - "看项目" / "查看作品" → navigate to "/projects"
   - "看简历" / "查看简历" → navigate to "/resume"

2. **下载 (download)**: 用户想下载简历
   - "下载简历" / "下载PDF" / "简历PDF" → download resume.pdf

3. **切换主题 (toggle_theme)**: 用户想切换主题
   - "切换主题" / "深色模式" / "浅色模式" / "黑暗模式" / "开灯" / "关灯" → toggle_theme

4. **回答问题 (answer_question)**: 用户在询问关于 Holly Chi 的问题
   - 项目经验、工作经历、技能等问题 → answer_question

## 输出格式

你必须返回 JSON 格式，不要有其他内容：

{
  "type": "动作类型",
  "payload": "可选参数",
  "shouldRespond": true/false
}

如果用户问题可以基于知识库回答，设置 shouldRespond: true。
如果用户只是请求导航或下载，设置 shouldRespond: false。
如果不确定用户意图，默认 answer_question。

## 示例

用户: "带我去看项目"
→ { "type": "navigate", "payload": "/projects", "shouldRespond": false }

用户: "下载简历"
→ { "type": "download", "payload": "resume.pdf", "shouldRespond": false }

用户: "切换深色模式"
→ { "type": "toggle_theme", "shouldRespond": false }

用户: "你做过最复杂的项目是什么？"
→ { "type": "answer_question", "shouldRespond": true }

用户: "你在XX公司负责什么？"
→ { "type": "answer_question", "shouldRespond": true }

用户: "你好" / "hi"
→ { "type": "answer_question", "shouldRespond": true }

重要：只返回 JSON，不要有其他文字。`
            : `你是这个个人网站的 AI 助手。站主 Holly Chi 是一位 AI 产品经理，热爱创造实际可用的产品。

你的任务是：
1. 友好地回答访客关于站主的问题
2. 介绍站主的技能和项目经验
3. 引导访客与站主联系
4. 保持简洁专业的回答风格
5. 根据用户语言选择回答语言（中文或英文）

如果访客问站主的联系方式，告诉他们可以在这个网站上找到相关信息。`,
        },
        {
          role: "user",
          content: message,
        },
      ],
      temperature: isIntentDetection ? 0.2 : 0.7,
      max_tokens: isIntentDetection ? 200 : 500,
    });

    const content = response.choices[0]?.message?.content || "";

    // If intent detection, parse JSON
    if (isIntentDetection) {
      try {
        // Try to extract JSON from response
        const jsonMatch = content.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          return jsonMatch[0];
        }
        // Fallback: try parsing whole response
        return content;
      } catch {
        return JSON.stringify({ type: "unknown", shouldRespond: true });
      }
    }

    return content || "抱歉，我没有理解您的问题。";
  } catch (error) {
    console.error("DeepSeek API error:", error);
    throw error;
  }
}
