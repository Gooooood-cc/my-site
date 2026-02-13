"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MeshGradientBackground } from "@/components/background/mesh-gradient";
import { GlassCard } from "@/components/ui/glass-card";
import { ArrowUpRight, Sparkles, Code2, Palette, Globe } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] as const },
  },
};

const featuredProjects = [
  {
    id: 1,
    title: "电商平台",
    titleEn: "E-commerce Platform",
    description: "全栈电商解决方案，支持实时库存管理",
    descriptionEn: "Full-stack solution with real-time inventory",
    tags: ["React", "Node.js", "MongoDB"],
    color: "from-blue-50 to-indigo-100",
  },
  {
    id: 2,
    title: "数据分析仪表盘",
    titleEn: "Analytics Dashboard",
    description: "可视化数据分析平台",
    descriptionEn: "Data visualization platform",
    tags: ["Next.js", "D3.js", "PostgreSQL"],
    color: "from-emerald-50 to-teal-100",
  },
  {
    id: 3,
    title: "AI 助手应用",
    titleEn: "AI Assistant App",
    description: "基于大语言模型的智能对话系统",
    descriptionEn: "LLM-based intelligent chat system",
    tags: ["TypeScript", "OpenAI", "Tailwind"],
    color: "from-purple-50 to-violet-100",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <MeshGradientBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto w-full"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Intro Text */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div variants={itemVariants}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-sm text-slate-600">
                  <Sparkles className="w-4 h-4" />
                  <span>AI产品经理</span>
                  <span className="text-slate-400">/</span>
                  <span className="text-slate-400">AI Product Manager</span>
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1]"
              >
                你好，我是
                <br />
                <span className="text-slate-400">Holly Chi</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-slate-500 max-w-xl leading-relaxed"
              >
                搞点实际的能用的
                <br />
                <span className="text-slate-400">
                  Building practical, usable products
                </span>
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
                <Link href="/projects">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group w-fit px-8 py-4 bg-slate-900 text-white rounded-2xl font-medium flex flex-col items-center gap-1 hover:bg-slate-800 transition-colors"
                  >
                    <span>查看项目</span>
                    <span className="text-slate-400 text-sm">View Projects</span>
                  </motion.button>
                </Link>
                <Link href="/resume">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-fit px-8 py-4 bg-white text-slate-900 rounded-2xl font-medium border border-slate-200 hover:bg-slate-50 transition-colors flex flex-col items-center gap-1"
                  >
                    <span>查看简历</span>
                    <span className="text-slate-400 text-sm">Resume</span>
                  </motion.button>
                </Link>
              </motion.div>
            </div>

            {/* Right: Avatar */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5 flex justify-center lg:justify-end"
            >
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-slate-100 flex items-center justify-center shadow-lg">
                <span className="text-7xl lg:text-8xl">👨‍💻</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2">
                精选作品
              </h2>
              <p className="text-lg text-slate-500">
                Featured Work
              </p>
            </div>
            <Link
              href="/projects"
              className="hidden sm:flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
            >
              查看全部
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href="/projects">
                  <GlassCard 
                    padding="lg" 
                    hoverEffect 
                    className="h-full cursor-pointer group"
                  >
                    <div className={`h-48 rounded-2xl bg-gradient-to-br ${project.color} mb-6 flex items-center justify-center`}>
                      <div className="w-16 h-16 rounded-2xl bg-white/80 flex items-center justify-center">
                        {index === 0 ? <Code2 className="w-8 h-8 text-slate-700" /> :
                         index === 1 ? <Palette className="w-8 h-8 text-slate-700" /> :
                         <Globe className="w-8 h-8 text-slate-700" />}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-400 mb-3">
                      {project.titleEn}
                    </p>
                    <p className="text-slate-600 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-2xl font-bold text-slate-900 mb-2">
            让我们一起创造精彩
          </p>
          <p className="text-slate-500 mb-6">
            Let&apos;s create something amazing together
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/WinterChenS"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-2xl bg-white/60 border border-white/60 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-white/80 transition-colors backdrop-blur-sm"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="mailto:your.email@example.com"
              className="w-12 h-12 rounded-2xl bg-white/60 border border-white/60 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-white/80 transition-colors backdrop-blur-sm"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
          <p className="text-center text-sm text-slate-400 mt-8">
            © 2026 Holly Chi. 使用 Next.js & Tailwind CSS 构建
          </p>
        </div>
      </footer>
    </main>
  );
}
