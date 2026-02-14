// Personal knowledge base for AI Agent
// This data is used to answer visitor questions about Holly Chi

export interface WorkExperience {
  company: string;
  companyEn: string;
  position: string;
  positionEn: string;
  period: string;
  description: string;
  descriptionEn: string;
  highlights?: string[];
  highlightsEn?: string[];
}

export interface Project {
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  technologies: string[];
  url?: string;
  highlights?: string[];
  highlightsEn?: string[];
}

export interface Skill {
  category: string;
  categoryEn: string;
  items: string[];
}

export const knowledgeBase = {
  // Basic Info
  name: "Holly Chi",
  title: "AI产品经理",
  titleEn: "AI Product Manager",
  tagline: "搞点实际的能用的",
  taglineEn: "Building practical, usable products",

  // Work Experience
  workExperience: [
    {
      company: "XX公司",
      companyEn: "XX Company",
      position: "AI产品经理",
      positionEn: "AI Product Manager",
      period: "2024 - 至今",
      description: "负责AI产品规划与设计",
      descriptionEn: "Responsible for AI product planning and design",
      highlights: [
        "主导AI产品从0到1",
        "提升产品用户体验",
      ],
      highlightsEn: [
        "Led AI product from 0 to 1",
        "Improved product user experience",
      ],
    } as WorkExperience,
  ] as WorkExperience[],

  // Projects
  projects: [
    {
      title: "电商平台",
      titleEn: "E-commerce Platform",
      description: "全栈电商解决方案，支持实时库存管理",
      descriptionEn: "Full-stack solution with real-time inventory management",
      technologies: ["React", "Node.js", "MongoDB"],
      highlights: [
        "支持万人同时在线",
        "日处理订单10万+",
      ],
      highlightsEn: [
        "Supports 10,000+ concurrent users",
        "Processes 100,000+ orders daily",
      ],
    } as Project,
    {
      title: "数据分析仪表盘",
      titleEn: "Analytics Dashboard",
      description: "可视化数据分析平台",
      descriptionEn: "Visual data analytics platform",
      technologies: ["Next.js", "D3.js", "PostgreSQL"],
      highlights: [
        "实时数据可视化",
        "自定义报表",
      ],
      highlightsEn: [
        "Real-time data visualization",
        "Custom reports",
      ],
    } as Project,
    {
      title: "AI 助手应用",
      titleEn: "AI Assistant App",
      description: "基于大语言模型的智能对话系统",
      descriptionEn: "LLM-based intelligent chat system",
      technologies: ["TypeScript", "OpenAI", "Tailwind"],
      highlights: [
        "多轮对话能力",
        "知识库问答",
      ],
      highlightsEn: [
        "Multi-turn conversation",
        "Knowledge base Q&A",
      ],
    } as Project,
  ] as Project[],

  // Skills
  skills: [
    {
      category: "AI产品",
      categoryEn: "AI Products",
      items: ["产品规划", "需求分析", "用户研究", "数据分析"],
    },
    {
      category: "AI Products",
      categoryEn: "AI Products",
      items: ["Product Planning", "Requirement Analysis", "User Research", "Data Analysis"],
    },
    {
      category: "技术",
      categoryEn: "Technical",
      items: ["Python", "JavaScript", "SQL", "机器学习基础"],
    },
    {
      category: "Languages",
      categoryEn: "Languages",
      items: ["中文", "English"],
    },
  ] as Skill[],

  // Contact
  contact: {
    email: "your.email@example.com",
    github: "https://github.com/WinterChenS",
    wechat: "WinterChen",
  },

  // Resume PDF
  resumeUrl: "/resume.pdf",
};

// Convert knowledge base to context string for AI
export function getKnowledgeContext(lang: "zh" | "en" = "zh"): string {
  const k = knowledgeBase;
  const isZh = lang === "zh";

  let context = `关于 ${k.name} (${k.title}):\n\n`;

  // Work Experience
  context += "工作经历:\n";
  k.workExperience.forEach((exp, i) => {
    context += `${i + 1}. ${exp.company} - ${exp.position} (${exp.period})\n`;
    context += `   ${isZh ? exp.description : exp.descriptionEn}\n`;
    if (exp.highlights) {
      const hl = isZh ? exp.highlights : (exp.highlightsEn || exp.highlights);
      hl.forEach(h => context += `   - ${h}\n`);
    }
    context += "\n";
  });

  // Projects
  context += "项目经验:\n";
  k.projects.forEach((proj, i) => {
    context += `${i + 1}. ${isZh ? proj.title : proj.titleEn}\n`;
    context += `   ${isZh ? proj.description : proj.descriptionEn}\n`;
    context += `   技术: ${proj.technologies.join(", ")}\n`;
    if (proj.highlights) {
      const hl = isZh ? proj.highlights : (proj.highlightsEn || proj.highlights);
      hl.forEach(h => context += `   - ${h}\n`);
    }
    context += "\n";
  });

  // Skills
  context += "技能:\n";
  k.skills.forEach(skill => {
    context += `- ${isZh ? skill.category : skill.categoryEn}: ${skill.items.join(", ")}\n`;
  });

  context += `\n联系方式:\n`;
  context += `- Email: ${k.contact.email}\n`;
  context += `- GitHub: ${k.contact.github}\n`;

  return context;
}
