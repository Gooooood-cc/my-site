"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/background/aurora-background";
import { GlassCard, BentoItem } from "@/components/ui/glass-card";
import { BentoGrid } from "@/components/layout/bento-grid";
import { fadeInUp, staggerFadeIn, staggerItem } from "@/lib/animations";
import { MessageCircle, Github, Mail, ArrowDown } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Aurora Background */}
      <AuroraBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Avatar */}
          <motion.div
            variants={staggerItem}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-white/80 backdrop-blur-xl shadow-lg flex items-center justify-center text-5xl border border-white/30">
              👋
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={staggerItem}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1d1d1f] mb-6"
          >
            你好，我是
            <span className="block mt-2 bg-gradient-to-r from-[#0071e3] to-[#5856d6] bg-clip-text text-transparent">
              开发者
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={staggerItem}
            className="text-xl sm:text-2xl text-[#86868b] max-w-2xl mx-auto leading-relaxed"
          >
            热爱创造简洁优雅的数字体验
            <br />
            <span className="text-[#86868b]/60">前端开发者 / AI 爱好者</span>
          </motion.p>

          {/* Social Links */}
          <motion.div
            variants={staggerItem}
            className="flex items-center justify-center gap-4 mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border border-white/30 flex items-center justify-center text-[#1d1d1f] hover:bg-white hover:shadow-lg transition-all"
            >
              <Github className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border border-white/30 flex items-center justify-center text-[#1d1d1f] hover:bg-white hover:shadow-lg transition-all"
            >
              <Mail className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border border-white/30 flex items-center justify-center text-[#1d1d1f] hover:bg-white hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-[#86868b]"
          >
            <span className="text-sm">向下滚动</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* Bento Grid Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <BentoGrid maxWidth="xl" gap="lg">
          {/* Featured Projects */}
          <BentoItem colSpan={2} rowSpan={2}>
            <GlassCard padding="xl" hoverEffect className="h-full">
              <div className="h-full flex flex-col">
                <h2 className="text-2xl font-semibold text-[#1d1d1f] mb-6">
                  🚀 精选项目
                </h2>
                <div className="flex-1 flex items-center justify-center bg-[#F5F5F7]/50 rounded-2xl">
                  <p className="text-[#86868b]">项目展示区域</p>
                </div>
              </div>
            </GlassCard>
          </BentoItem>

          {/* Skills */}
          <BentoItem>
            <GlassCard padding="xl" hoverEffect>
              <h3 className="text-lg font-semibold text-[#1d1d1f] mb-4">
                💻 技能专长
              </h3>
              <p className="text-[#86868b]">React / Next.js / TypeScript</p>
            </GlassCard>
          </BentoItem>

          {/* Blog */}
          <BentoItem>
            <GlassCard padding="xl" hoverEffect>
              <h3 className="text-lg font-semibold text-[#1d1d1f] mb-4">
                📝 技术博客
              </h3>
              <p className="text-[#86868b]">分享开发心得</p>
            </GlassCard>
          </BentoItem>

          {/* Timeline */}
          <BentoItem>
            <GlassCard padding="xl" hoverEffect>
              <h3 className="text-lg font-semibold text-[#1d1d1f] mb-4">
                📅 履历
              </h3>
              <p className="text-[#86868b]">工作经历时间线</p>
            </GlassCard>
          </BentoItem>

          {/* Photography */}
          <BentoItem>
            <GlassCard padding="xl" hoverEffect>
              <h3 className="text-lg font-semibold text-[#1d1d1f] mb-4">
                📷 摄影
              </h3>
              <p className="text-[#86868b]">作品集展示</p>
            </GlassCard>
          </BentoItem>

          {/* Contact CTA */}
          <BentoItem colSpan={2}>
            <GlassCard padding="xl" hoverEffect className="bg-gradient-to-r from-[#0071e3]/10 to-[#5856d6]/10">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">
                    联系我
                  </h3>
                  <p className="text-[#86868b]">
                    期待与你的合作
                  </p>
                </div>
                <button className="bg-[#0071e3] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#0077ed] transition-colors">
                  发送邮件
                </button>
              </div>
            </GlassCard>
          </BentoItem>
        </BentoGrid>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-[#86868b]/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#86868b] text-sm">
            © 2026 开发者. 使用 Next.js + DeepSeek AI 构建
          </p>
        </div>
      </footer>
    </main>
  );
}
