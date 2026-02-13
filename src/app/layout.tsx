import type { Metadata } from "next";
import "./globals.css";
import { AIChat } from "@/components/ai-chat";
import { Navbar } from "@/components/layout/navbar";

export const metadata: Metadata = {
  title: "Developer Portfolio",
  description: "Crafting elegant digital experiences with code and creativity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body
        className={`
          antialiased
          font-sans
          text-slate-900
          bg-[#FAFAFA]
          selection:bg-blue-500/20
          selection:text-blue-900
        `}
      >
        <Navbar />
        {children}
        <AIChat />
      </body>
    </html>
  );
}
