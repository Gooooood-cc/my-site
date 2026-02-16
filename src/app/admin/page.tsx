"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Save, Upload, Plus, Trash2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GlassCard } from "@/components/ui/glass-card";

interface Profile {
  name: string;
  title: string;
  titleEn: string;
  tagline: string;
  taglineEn: string;
  avatar: string;
}

interface WorkExperience {
  id: string;
  company: string;
  companyEn: string;
  position: string;
  positionEn: string;
  period: string;
  description: string;
  descriptionEn: string;
  highlights: string[];
  highlightsEn: string[];
}

interface Project {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  technologies: string;
  highlights: string[];
  highlightsEn: string[];
}

interface Contact {
  email: string;
  github: string;
  wechat: string;
}

interface SiteData {
  profile: Profile;
  workExperience: WorkExperience[];
  projects: Project[];
  contact: Contact;
}

const defaultData: SiteData = {
  profile: {
    name: "Holly Chi",
    title: "AI产品经理",
    titleEn: "AI Product Manager",
    tagline: "搞点实际的能用的",
    taglineEn: "Building practical, usable products",
    avatar: ""
  },
  workExperience: [
    {
      id: "1",
      company: "XX公司",
      companyEn: "XX Company",
      position: "AI产品经理",
      positionEn: "AI Product Manager",
      period: "2024 - 至今",
      description: "负责AI产品规划与设计",
      descriptionEn: "Responsible for AI product planning and design",
      highlights: ["主导AI产品从0到1", "提升产品用户体验"],
      highlightsEn: ["Led AI product from 0 to 1", "Improved product user experience"]
    }
  ],
  projects: [
    {
      id: "1",
      title: "电商平台",
      titleEn: "E-commerce Platform",
      description: "全栈电商解决方案，支持实时库存管理",
      descriptionEn: "Full-stack solution with real-time inventory management",
      technologies: "React, Node.js, MongoDB",
      highlights: ["支持万人同时在线", "日处理订单10万+"],
      highlightsEn: ["Supports 10,000+ concurrent users", "Processes 100,000+ orders daily"]
    }
  ],
  contact: {
    email: "your.email@example.com",
    github: "https://github.com/WinterChenS",
    wechat: "WinterChen"
  }
};

export default function AdminPage() {
  const [data, setData] = useState<SiteData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [activeTab, setActiveTab] = useState<"profile" | "work" | "projects">("profile");

  // 从 localStorage 加载数据
  useEffect(() => {
    const stored = localStorage.getItem("siteData");
    if (stored) {
      try {
        setData(JSON.parse(stored));
      } catch {
        setData(defaultData);
      }
    } else {
      setData(defaultData);
    }
    setLoading(false);
  }, []);

  // 保存数据到 localStorage
  const handleSave = async () => {
    if (!data) return;
    setSaving(true);
    try {
      localStorage.setItem("siteData", JSON.stringify(data));
      setMessage("保存成功！页面刷新后生效。");
      setTimeout(() => setMessage(""), 3000);
    } catch {
      setMessage("保存失败");
    }
    setSaving(false);
  };

  // 导出数据（供开发者复制到代码中）
  const handleExport = () => {
    if (!data) return;
    const jsonStr = JSON.stringify(data, null, 2);
    navigator.clipboard.writeText(jsonStr);
    setMessage("数据已复制到剪贴板！请将内容粘贴到 data.json 文件中。");
    setTimeout(() => setMessage(""), 5000);
  };

  // 上传头像到 localStorage (Base64)
  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !data) return;

    if (!file.type.startsWith("image/")) {
      setMessage("请选择图片文件");
      return;
    }

    if (file.size > 500 * 1024) {
      setMessage("图片太大，请选择小于 500KB 的图片");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      setData({ ...data, profile: { ...data.profile, avatar: base64 } });
      setMessage("头像上传成功！点击保存生效。");
      setTimeout(() => setMessage(""), 3000);
    };
    reader.readAsDataURL(file);
  };

  const addWorkExperience = () => {
    if (!data) return;
    const newExp: WorkExperience = {
      id: Date.now().toString(),
      company: "",
      companyEn: "",
      position: "",
      positionEn: "",
      period: "",
      description: "",
      descriptionEn: "",
      highlights: [""],
      highlightsEn: [""],
    };
    setData({ ...data, workExperience: [...data.workExperience, newExp] });
  };

  const removeWorkExperience = (id: string) => {
    if (!data) return;
    setData({
      ...data,
      workExperience: data.workExperience.filter((exp) => exp.id !== id),
    });
  };

  const updateWorkExperience = (id: string, field: string, value: string) => {
    if (!data) return;
    setData({
      ...data,
      workExperience: data.workExperience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    });
  };

  const addProject = () => {
    if (!data) return;
    const newProject: Project = {
      id: Date.now().toString(),
      title: "",
      titleEn: "",
      description: "",
      descriptionEn: "",
      technologies: "",
      highlights: [""],
      highlightsEn: [""],
    };
    setData({ ...data, projects: [...data.projects, newProject] });
  };

  const removeProject = (id: string) => {
    if (!data) return;
    setData({
      ...data,
      projects: data.projects.filter((p) => p.id !== id),
    });
  };

  const updateProject = (id: string, field: string, value: string) => {
    if (!data) return;
    setData({
      ...data,
      projects: data.projects.map((p) =>
        p.id === id ? { ...p, [field]: value } : p
      ),
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
        <Loader2 className="w-8 h-8 animate-spin text-slate-400" />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
        <p className="text-slate-500">加载失败</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            管理后台
          </h1>
          <div className="flex items-center gap-4">
            {message && (
              <span className="text-green-600 dark:text-green-400 text-sm">
                {message}
              </span>
            )}
            <Button onClick={handleExport} variant="outline" className="mr-2">
              导出数据
            </Button>
            <Button
              onClick={handleSave}
              disabled={saving}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
              保存
            </Button>
          </div>
        </div>

        <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-blue-700 dark:text-blue-300">
            💡 数据保存在浏览器本地Storage中。点击"导出数据"复制JSON，然后在本地项目中更新 data.json 文件并推送到 GitHub。
          </p>
        </div>

        <div className="flex gap-2 mb-6">
          {(["profile", "work", "projects"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === tab ? "bg-blue-600 text-white" : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
              }`}
            >
              {tab === "profile" && "个人信息"}
              {tab === "work" && "工作经历"}
              {tab === "projects" && "项目"}
            </button>
          ))}
        </div>

        {activeTab === "profile" && (
          <GlassCard>
            <h2 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white">个人信息</h2>
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">头像</label>
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-slate-200">
                  {data.profile.avatar ? (
                    <img src={data.profile.avatar} alt="Avatar" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl">👨‍💻</div>
                  )}
                </div>
                <label className="cursor-pointer">
                  <input type="file" accept="image/*" onChange={handleAvatarUpload} className="hidden" />
                  <span className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200">
                    <Upload className="w-4 h-4" />上传头像
                  </span>
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">姓名</label>
              <Input value={data.profile.name} onChange={(e) => setData({ ...data, profile: { ...data.profile, name: e.target.value } })} />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">职位 (中文)</label>
                <Input value={data.profile.title} onChange={(e) => setData({ ...data, profile: { ...data.profile, title: e.target.value } })} />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">职位 (English)</label>
                <Input value={data.profile.titleEn} onChange={(e) => setData({ ...data, profile: { ...data.profile, titleEn: e.target.value } })} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">座右铭 (中文)</label>
                <Input value={data.profile.tagline} onChange={(e) => setData({ ...data, profile: { ...data.profile, tagline: e.target.value } })} />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">座右铭 (English)</label>
                <Input value={data.profile.taglineEn} onChange={(e) => setData({ ...data, profile: { ...data.profile, taglineEn: e.target.value } })} />
              </div>
            </div>
            <h3 className="text-lg font-semibold mt-6 mb-4 text-slate-900 dark:text-white">联系方式</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                <Input value={data.contact.email} onChange={(e) => setData({ ...data, contact: { ...data.contact, email: e.target.value } })} />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">GitHub</label>
                <Input value={data.contact.github} onChange={(e) => setData({ ...data, contact: { ...data.contact, github: e.target.value } })} />
              </div>
            </div>
          </GlassCard>
        )}

        {activeTab === "work" && (
          <div className="space-y-4">
            {data.workExperience.map((exp, index) => (
              <GlassCard key={exp.id}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">工作经历 #{index + 1}</h3>
                  <button onClick={() => removeWorkExperience(exp.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 className="w-4 h-4" /></button>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">公司 (中文)</label>
                    <Input value={exp.company} onChange={(e) => updateWorkExperience(exp.id, "company", e.target.value)} placeholder="公司名称" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Company (English)</label>
                    <Input value={exp.companyEn} onChange={(e) => updateWorkExperience(exp.id, "companyEn", e.target.value)} placeholder="Company Name" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">职位 (中文)</label>
                    <Input value={exp.position} onChange={(e) => updateWorkExperience(exp.id, "position", e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Position (English)</label>
                    <Input value={exp.positionEn} onChange={(e) => updateWorkExperience(exp.id, "positionEn", e.target.value)} />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">时间段</label>
                  <Input value={exp.period} onChange={(e) => updateWorkExperience(exp.id, "period", e.target.value)} placeholder="2024 - 至今" />
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">描述 (中文)</label>
                    <textarea value={exp.description} onChange={(e) => updateWorkExperience(exp.id, "description", e.target.value)} className="w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white" rows={3} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Description (English)</label>
                    <textarea value={exp.descriptionEn} onChange={(e) => updateWorkExperience(exp.id, "descriptionEn", e.target.value)} className="w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white" rows={3} />
                  </div>
                </div>
              </GlassCard>
            ))}
            <Button onClick={addWorkExperience} className="w-full py-4"><Plus className="w-4 h-4 mr-2" />添加工作经历</Button>
          </div>
        )}

        {activeTab === "projects" && (
          <div className="space-y-4">
            {data.projects.map((project, index) => (
              <GlassCard key={project.id}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">项目 #{index + 1}</h3>
                  <button onClick={() => removeProject(project.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 className="w-4 h-4" /></button>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">项目名称 (中文)</label>
                    <Input value={project.title} onChange={(e) => updateProject(project.id, "title", e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Project Name (English)</label>
                    <Input value={project.titleEn} onChange={(e) => updateProject(project.id, "titleEn", e.target.value)} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">描述 (中文)</label>
                    <textarea value={project.description} onChange={(e) => updateProject(project.id, "description", e.target.value)} className="w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white" rows={3} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Description (English)</label>
                    <textarea value={project.descriptionEn} onChange={(e) => updateProject(project.id, "descriptionEn", e.target.value)} className="w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white" rows={3} />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">技术栈 (逗号分隔)</label>
                  <Input value={project.technologies} onChange={(e) => updateProject(project.id, "technologies", e.target.value)} placeholder="React, Node.js, MongoDB" />
                </div>
              </GlassCard>
            ))}
            <Button onClick={addProject} className="w-full py-4"><Plus className="w-4 h-4 mr-2" />添加项目</Button>
          </div>
        )}
      </div>
    </div>
  );
}