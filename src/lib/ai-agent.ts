"use client";

import { knowledgeBase, getKnowledgeContext } from "./knowledge-base";

export type ActionType =
  | "navigate"
  | "download"
  | "toggle_theme"
  | "change_language"
  | "answer_question"
  | "unknown";

export interface AgentAction {
  type: ActionType;
  payload?: string;
  shouldRespond: boolean;
}

export interface AgentResponse {
  message: string;
  action?: AgentAction;
}

// Intent detection prompt
const intentSystemPrompt = `你是一个网站AI助手，名叫 Holly 的 AI 助理。你的任务是理解用户意图并执行相应操作。

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

如果用户问题可以基于知识库回答，设置 shouldRespond: true 并在后续调用中提供答案。
如果用户只是请求导航或下载，设置 shouldRespond: false（动作会自动执行）。

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

## 重要

- 只返回 JSON，不要有其他文字
- 如果不确定用户意图，默认 answer_question
- 检测语言：中文问题用中文回答，英文问题用英文回答`;

// Answer prompt
const answerSystemPrompt = `你是一个网站AI助手，名叫 Holly 的 AI 助理。请根据以下知识库信息回答用户问题。

知识库：
${getKnowledgeContext("zh")}

## 回答要求

1. 根据用户语言选择回答语言（中文问题用中文，英文问题用英文）
2. 回答要自然、友好、简洁
3. 如果知识库没有相关信息，诚实地说明你不知道
4. 不要编造信息

## 关于 Holly

- 名字: ${knowledgeBase.name}
- 职位: ${knowledgeBase.title} / ${knowledgeBase.titleEn}
- 座右铭: ${knowledgeBase.tagline} / ${knowledgeBase.taglineEn}

开始回答用户问题。`;

export async function detectIntent(userMessage: string): Promise<AgentAction> {
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: [
          { role: "system", content: intentSystemPrompt },
          { role: "user", content: userMessage },
        ],
        isIntentDetection: true,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to detect intent");
    }

    const data = await response.json();
    return data.action as AgentAction;
  } catch (error) {
    console.error("Intent detection error:", error);
    return { type: "unknown", shouldRespond: true };
  }
}

export async function generateAnswer(
  userMessage: string,
  language: "zh" | "en" = "zh"
): Promise<string> {
  try {
    const context = getKnowledgeContext(language);
    const systemPrompt = answerSystemPrompt.replace(
      "${getKnowledgeContext(\"zh\")}",
      context
    );

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userMessage },
        ],
        isIntentDetection: false,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to generate answer");
    }

    const data = await response.json();
    return data.message as string;
  } catch (error) {
    console.error("Answer generation error:", error);
    return language === "zh"
      ? "抱歉，我现在有点忙，请稍后再试。"
      : "Sorry, I'm busy right now. Please try again later.";
  }
}

// Action execution helpers
export function executeAction(action: AgentAction): void {
  switch (action.type) {
    case "navigate":
      if (action.payload) {
        window.location.href = action.payload;
      }
      break;
    case "download":
      if (action.payload === "resume.pdf") {
        const link = document.createElement("a");
        link.href = "/resume.pdf";
        link.download = "Holly_Chi_Resume.pdf";
        link.click();
      }
      break;
    case "toggle_theme":
      // Dispatch custom event for theme toggle
      window.dispatchEvent(new CustomEvent("ai-toggle-theme"));
      break;
    default:
      break;
  }
}