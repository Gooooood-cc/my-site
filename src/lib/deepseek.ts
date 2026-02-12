import OpenAI from "openai";

if (!process.env.DEEPSEEK_API_KEY) {
  console.warn("DEEPSEEK_API_KEY is not set");
}

export const deepseek = new OpenAI({
  baseURL: "https://api.deepseek.com",
  apiKey: process.env.DEEPSEEK_API_KEY || "",
});

export async function chatWithDeepSeek(message: string): Promise<string> {
  try {
    const response = await deepseek.chat.completions.create({
      model: "deepseek-chat",
      messages: [
        {
          role: "system",
          content: `你是这个个人网站的 AI 助手。站主是一位前端开发者，热爱创造简洁优雅的数字体验。

你的任务是：
1. 友好地回答访客关于站主的问题
2. 介绍站主的技能（React, Next.js, TypeScript, AI 应用）
3. 引导访客与站主联系
4. 保持简洁专业的回答风格

如果访客问站主的联系方式，告诉他们可以在这个网站上找到相关信息。`,
        },
        {
          role: "user",
          content: message,
        },
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    return response.choices[0]?.message?.content || "抱歉，我没有理解您的问题。";
  } catch (error) {
    console.error("DeepSeek API error:", error);
    throw error;
  }
}
