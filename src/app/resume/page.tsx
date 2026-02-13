"use client";

import { motion } from "framer-motion";
import { MeshGradientBackground } from "@/components/background/mesh-gradient";
import { GlassCard } from "@/components/ui/glass-card";
import { Download, Calendar, Building2, Code2, ExternalLink } from "lucide-react";

const workExperience = [
  {
    id: 1,
    company: "某知名科技公司",
    companyEn: "Tech Company",
    position: "高级前端工程师",
    positionEn: "Senior Frontend Engineer",
    period: "2022 - 至今",
    description: "负责公司核心产品的前端架构设计和开发，带领团队完成多个重要项目",
    descriptionEn: "Led frontend architecture design and development for core products",
    achievements: [
      "设计并实现了微前端架构，提升团队开发效率 40%",
      "优化核心页面性能，Lighthouse 评分从 65 提升至 95",
      "建立前端工程化体系，包括 CI/CD、代码规范、自动化测试",
    ],
  },
  {
    id: 2,
    company: "互联网初创公司",
    companyEn: "Startup",
    position: "前端开发工程师",
    positionEn: "Frontend Developer",
    period: "2020 - 2022",
    description: "参与产品从零到一的全过程，负责前端开发和用户体验优化",
    descriptionEn: "Participated in product development from scratch",
    achievements: [
      "独立完成官网、管理后台、移动端 H5 开发",
      "实现响应式设计，适配多种设备和屏幕尺寸",
      "集成第三方支付和登录系统",
    ],
  },
  {
    id: 3,
    company: "软件开发公司",
    companyEn: "Software Company",
    position: "初级前端工程师",
    positionEn: "Junior Frontend Developer",
    period: "2019 - 2020",
    description: "参与企业级应用的前端开发，学习并掌握现代前端技术栈",
    descriptionEn: "Developed enterprise applications and mastered modern frontend stack",
    achievements: [
      "使用 Vue.js 开发多个企业管理系统",
      "参与前端组件库的建设和维护",
      "获得优秀新人奖",
    ],
  },
];

const projectExperience = [
  {
    id: 1,
    name: "电商平台重构",
    nameEn: "E-commerce Platform",
    role: "技术负责人",
    roleEn: "Tech Lead",
    period: "2023",
    description: "负责将传统电商平台重构为微前端架构，支持多团队并行开发",
    descriptionEn: "Rebuilt e-commerce platform with micro-frontend architecture",
    technologies: ["React", "TypeScript", "Module Federation", "Tailwind CSS"],
    link: "#",
  },
  {
    id: 2,
    name: "数据可视化平台",
    nameEn: "Data Visualization Platform",
    role: "核心开发",
    roleEn: "Core Developer",
    period: "2022",
    description: "开发实时数据大屏和数据分析仪表盘，支持多种图表类型",
    descriptionEn: "Built real-time data dashboard with multiple chart types",
    technologies: ["Next.js", "D3.js", "ECharts", "WebSocket"],
    link: "#",
  },
  {
    id: 3,
    name: "AI 智能客服系统",
    nameEn: "AI Customer Service",
    role: "前端开发",
    roleEn: "Frontend Developer",
    period: "2023",
    description: "开发基于大语言模型的智能客服对话界面",
    descriptionEn: "Built chat interface for LLM-based customer service",
    technologies: ["React", "OpenAI API", "Framer Motion", "Node.js"],
    link: "#",
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

export default function ResumePage() {
  return (
    <main className="relative min-h-screen pt-32 pb-20">
      <MeshGradientBackground />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="font-display text-4xl sm:text-5xl text-slate-900 mb-2">
                简历
              </h1>
              <p className="font-body text-lg text-slate-500">
                Resume / CV
              </p>
            </div>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-2xl font-body font-medium hover:bg-slate-800 transition-colors w-fit"
            >
              <Download className="w-5 h-5" />
              <span>下载简历 PDF</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Work Experience */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="font-display text-2xl text-slate-900 mb-1">工作经历</h2>
            <p className="font-body text-slate-500">Work Experience</p>
          </motion.div>

          <div className="space-y-6">
            {workExperience.map((job) => (
              <motion.div key={job.id} variants={itemVariants}>
                <GlassCard padding="lg" hoverEffect>
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <h3 className="font-display text-xl text-slate-900">
                            {job.position}
                          </h3>
                          <p className="font-body text-slate-400 text-sm">
                            {job.positionEn}
                          </p>
                        </div>
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-body whitespace-nowrap">
                          <Calendar className="w-3 h-3" />
                          {job.period}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <Building2 className="w-4 h-4 text-slate-400" />
                        <span className="font-body text-slate-700">{job.company}</span>
                        <span className="font-body text-slate-400 text-sm">/ {job.companyEn}</span>
                      </div>

                      <p className="font-body text-slate-600 mb-4">
                        {job.description}
                      </p>

                      <ul className="space-y-2">
                        {job.achievements.map((achievement, index) => (
                          <li 
                            key={index}
                            className="flex items-start gap-2 font-body text-sm text-slate-600"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Project Experience */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="font-display text-2xl text-slate-900 mb-1">项目经历</h2>
            <p className="font-body text-slate-500">Project Experience</p>
          </motion.div>

          <div className="space-y-6">
            {projectExperience.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <GlassCard padding="lg" hoverEffect>
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <h3 className="font-display text-xl text-slate-900">
                            {project.name}
                          </h3>
                          <p className="font-body text-slate-400 text-sm">
                            {project.nameEn}
                          </p>
                        </div>
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-body">
                          <Code2 className="w-3 h-3" />
                          {project.period}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 mb-3">
                        <span className="font-body text-slate-700">{project.role}</span>
                        <span className="font-body text-slate-400 text-sm">/ {project.roleEn}</span>
                      </div>

                      <p className="font-body text-slate-600 mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-body"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {project.link && (
                        <a 
                          href={project.link}
                          className="inline-flex items-center gap-1 text-sm font-body text-slate-600 hover:text-slate-900 transition-colors"
                        >
                          查看项目
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Summary */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="font-display text-2xl text-slate-900 mb-1">技能专长</h2>
            <p className="font-body text-slate-500">Skills</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <GlassCard padding="lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-body font-semibold text-slate-900 mb-3">前端技术</h3>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS", "Framer Motion"].map((skill) => (
                      <span key={skill} className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-body">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-body font-semibold text-slate-900 mb-3">后端 & 工具</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "Python", "PostgreSQL", "MongoDB", "Docker", "Git"].map((skill) => (
                      <span key={skill} className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-body">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </motion.section>
      </div>
    </main>
  );
}
