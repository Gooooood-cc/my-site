import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { AIChat } from "@/components/ai-chat";
import { Navbar } from "@/components/layout/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

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
          ${inter.variable}
          ${plusJakarta.variable}
          antialiased
          font-body
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
