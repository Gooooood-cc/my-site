import { NextResponse } from "next/server";
import { chatWithDeepSeek } from "@/lib/deepseek";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Check if API key is configured
    if (!process.env.DEEPSEEK_API_KEY) {
      return NextResponse.json(
        { 
          message: "AI 服务暂时不可用。请稍后重试，或直接联系站主。",
          error: "API key not configured"
        },
        { status: 503 }
      );
    }

    const response = await chatWithDeepSeek(message);

    return NextResponse.json({ message: response });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { 
        message: "抱歉，我暂时无法回答。请稍后重试。",
        error: "Internal server error"
      },
      { status: 500 }
    );
  }
}
