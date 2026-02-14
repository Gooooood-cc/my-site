import { NextResponse } from "next/server";
import { chatWithDeepSeek } from "@/lib/deepseek";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages, isIntentDetection, message } = body;

    // Check if API key is configured
    if (!process.env.DEEPSEEK_API_KEY) {
      return NextResponse.json(
        {
          message: "AI 服务暂时不可用。请稍后重试，或直接联系站主。",
          error: "API key not configured",
          action: { type: "unknown", shouldRespond: true }
        },
        { status: 503 }
      );
    }

    // For intent detection, extract the last user message
    if (isIntentDetection && messages && Array.isArray(messages)) {
      const lastUserMessage = messages
        .filter((m: { role: string }) => m.role === "user")
        .pop()?.content;

      if (!lastUserMessage) {
        return NextResponse.json(
          { action: { type: "unknown", shouldRespond: true } },
          { status: 400 }
        );
      }

      try {
        const response = await chatWithDeepSeek(lastUserMessage, isIntentDetection);
        return NextResponse.json({ action: response });
      } catch {
        return NextResponse.json(
          { action: { type: "unknown", shouldRespond: true } },
          { status: 500 }
        );
      }
    }

    // For regular chat, use the message field
    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const response = await chatWithDeepSeek(message, false);

    return NextResponse.json({ message: response });
  } catch (error) {
    console.error("Chat API error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      {
        message: "抱歉，我暂时无法回答。请稍后重试。",
        error: errorMessage,
        action: { type: "unknown", shouldRespond: true }
      },
      { status: 500 }
    );
  }
}
