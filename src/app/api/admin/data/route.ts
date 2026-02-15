import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), "data.json");

// GET - 获取所有数据
export async function GET() {
  try {
    const data = fs.readFileSync(dataFilePath, "utf-8");
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    console.error("Error reading data:", error);
    return NextResponse.json({ error: "Failed to read data" }, { status: 500 });
  }
}

// POST - 保存所有数据
export async function POST(req: Request) {
  try {
    const data = await req.json();
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), "utf-8");
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error writing data:", error);
    return NextResponse.json({ error: "Failed to save data" }, { status: 500 });
  }
}