"use client";

import { motion } from "framer-motion";
import { MeshGradientBackground } from "@/components/background/mesh-gradient";
import { GlassCard } from "@/components/ui/glass-card";
import { ExternalLink, Github, Calendar, ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "智能电商平台",
    titleEn: "Smart E-commerce Platform",
    description: "一个功能完善的电商平台，支持商品管理、订单处理、支付集成和实时库存管理。采用微前端架构，支持多团队并行开发。",
    descriptionEn: "A full-featured e-commerce platform with product management, order processing, and real-time inventory.",
    image: "/images/project-ecommerce.jpg",
    tags: ["React", "Node.js", "MongoDB", "Micro-frontend"],
    date: "2023",
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "数据可视化仪表盘",
    titleEn: "Data Analytics Dashboard",
    description: "实时数据可视化平台，支持多种图表类型、数据筛选和导出功能。使用 WebSocket 实现实时数据更新。",
    descriptionEn: "Real-time data visualization platform with multiple chart types and WebSocket updates.",
    image: "/images/project-dashboard.jpg",
    tags: ["Next.js", "D3.js", "PostgreSQL", "WebSocket"],
    date: "2023",
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "AI 智能助手",
    titleEn: "AI Assistant Application",
    description: "基于大语言模型的智能对话系统，支持多轮对话、上下文记忆和知识库检索。",
    descriptionEn: "LLM-based intelligent chat system with multi-turn conversations and knowledge base retrieval.",
    image: "/images/project-ai.jpg",
    tags: ["TypeScript", "OpenAI API", "Vector DB", "Tailwind"],
    date: "2024",
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 4,
    title: "社交媒体应用",
    titleEn: "Social Media App",
    description: "类似 Instagram 的社交应用，支持图片分享、点赞评论、关注系统和实时通知。",
    descriptionEn: "Instagram-like social app with photo sharing, likes, comments, and real-time notifications.",
    image: "/images/project-social.jpg",
    tags: ["React Native", "Firebase", "Redux", "Node.js"],
    date: "2022",
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 5,
    title: "内容管理系统",
    titleEn: "Content Management System",
    description: "企业级 CMS 系统，支持富文本编辑、媒体管理、用户权限和多语言内容。",
    descriptionEn: "Enterprise CMS with rich text editing, media management, and multi-language support.",
    image: "/images/project-cms.jpg",
    tags: ["Vue.js", "Strapi", "MySQL", "AWS"],
    date: "2022",
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 6,
    title: "在线教育平台",
    titleEn: "Online Education Platform",
    description: "支持视频课程、在线测验、进度追踪和证书生成的教育平台。",
    descriptionEn: "Education platform with video courses, quizzes, progress tracking, and certificates.",
    image: "/images/project-education.jpg",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
    date: "2023",
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] as const },
  },
};

export default function ProjectsPage() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <main className="relative min-h-screen pt-32 pb-20">
      <MeshGradientBackground />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="font-display text-4xl sm:text-5xl text-slate-900 mb-2">
            项目作品
          </h1>
          <p className="font-body text-lg text-slate-500">
            Projects & Work
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="font-display text-2xl text-slate-900 mb-1">精选项目</h2>
            <p className="font-body text-slate-500">Featured Projects</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <GlassCard padding="lg" hoverEffect className="h-full">
                  {/* Project Image Placeholder */}
                  <div className="h-56 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 mb-6 flex items-center justify-center overflow-hidden">
                    <div className="text-center">
                      <span className="text-6xl mb-4 block">
                        {project.id === 1 ? "🛒" :
                         project.id === 2 ? "📊" :
                         project.id === 3 ? "🤖" : "💻"}
                      </span>
                      <p className="font-body text-slate-400 text-sm">Project Preview</p>
                    </div>
                  </div>

                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-display text-2xl text-slate-900">
                        {project.title}
                      </h3>
                      <p className="font-body text-slate-400 text-sm">
                        {project.titleEn}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-body whitespace-nowrap">
                      <Calendar className="w-3 h-3" />
                      {project.date}
                    </span>
                  </div>

                  <p className="font-body text-slate-600 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-body"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-xl font-body text-sm hover:bg-slate-800 transition-colors"
                      >
                        查看演示
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white/60 border border-white/60 text-slate-900 rounded-xl font-body text-sm hover:bg-white/80 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        源代码
                      </a>
                    )}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Other Projects */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="font-display text-2xl text-slate-900 mb-1">更多项目</h2>
            <p className="font-body text-slate-500">More Projects</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <GlassCard padding="lg" hoverEffect className="h-full">
                  {/* Project Image Placeholder */}
                  <div className="h-40 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 mb-4 flex items-center justify-center">
                    <span className="text-4xl">
                      {project.id === 4 ? "📱" :
                       project.id === 5 ? "📝" :
                       project.id === 6 ? "🎓" : "💻"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-display text-lg text-slate-900">
                      {project.title}
                    </h3>
                  </div>
                  <p className="font-body text-slate-400 text-sm mb-3">
                    {project.titleEn}
                  </p>

                  <p className="font-body text-slate-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-body"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm font-body text-slate-600 hover:text-slate-900 transition-colors"
                        aria-label={`查看 ${project.title} 演示`}
                      >
                        演示
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm font-body text-slate-600 hover:text-slate-900 transition-colors"
                        aria-label={`查看 ${project.title} 源代码`}
                      >
                        <Github className="w-3 h-3" />
                        代码
                      </a>
                    )}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <GlassCard padding="xl" className="text-center">
            <h2 className="font-display text-2xl text-slate-900 mb-3">
              有更多想法？
            </h2>
            <p className="font-body text-slate-600 mb-6">
              欢迎查看我的 GitHub 或联系我讨论项目合作
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://github.com/WinterChenS"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-body font-medium hover:bg-slate-800 transition-colors"
              >
                <Github className="w-5 h-5" />
                访问 GitHub
              </a>
            </div>
          </GlassCard>
        </motion.section>
      </div>
    </main>
  );
}
