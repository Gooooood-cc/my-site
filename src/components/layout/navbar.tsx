"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GlassCard } from "@/components/ui/glass-card";
import { Github, Mail, Download } from "lucide-react";

const navItems = [
  { href: "/", label: "首页", labelEn: "Home" },
  { href: "/resume", label: "简历", labelEn: "Resume" },
  { href: "/projects", label: "项目", labelEn: "Projects" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <GlassCard padding="sm" variant="subtle" className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-display text-xl text-slate-900 hover:text-slate-700 transition-colors">
            WinterChen
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  text-sm font-body transition-colors relative group
                  ${pathname === item.href 
                    ? "text-slate-900" 
                    : "text-slate-600 hover:text-slate-900"
                  }
                `}
              >
                {item.label}
                <span className="text-xs text-slate-400 ml-1 group-hover:text-slate-500 transition-colors">
                  {item.labelEn}
                </span>
                {pathname === item.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-slate-900 rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Social Links + Download */}
          <div className="flex items-center gap-3">
            {/* GitHub */}
            <motion.a
              href="https://github.com/WinterChenS"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-xl bg-white/60 border border-white/60 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-white/80 transition-colors backdrop-blur-sm"
            >
              <Github className="w-4 h-4" />
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:your.email@example.com"
              aria-label="Email"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-xl bg-white/60 border border-white/60 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-white/80 transition-colors backdrop-blur-sm"
            >
              <Mail className="w-4 h-4" />
            </motion.a>

            {/* WeChat */}
            <motion.a
              href="#contact"
              aria-label="WeChat"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-xl bg-white/60 border border-white/60 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-white/80 transition-colors backdrop-blur-sm"
              title="微信: WinterChen"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"/>
              </svg>
            </motion.a>
            
            {/* Download Resume */}
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-body font-medium hover:bg-slate-800 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>下载简历</span>
              <span className="text-xs text-slate-400">PDF</span>
            </motion.a>
          </div>
        </GlassCard>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden mt-3">
        <GlassCard padding="sm" variant="subtle" className="flex items-center justify-around">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`
                text-sm font-body py-2 px-3 rounded-lg transition-colors
                ${pathname === item.href 
                  ? "text-slate-900 bg-slate-100" 
                  : "text-slate-600"
                }
              `}
            >
              {item.label}
            </Link>
          ))}
        </GlassCard>
      </div>
    </motion.nav>
  );
}
