"use client";

import { motion } from "framer-motion";
import { MeshGradientBackground } from "@/components/background/mesh-gradient";
import { GlassCard, BentoItem, FeatureCard } from "@/components/ui/glass-card";
import { BentoGrid } from "@/components/layout/bento-grid";
import { ArrowUpRight, Sparkles, Code2, Palette, Camera, FileText, ArrowRight } from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1] as const,
    },
  },
};

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <MeshGradientBackground />

      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      >
        <div className="max-w-7xl mx-auto">
          <GlassCard padding="sm" variant="subtle" className="flex items-center justify-between">
            <span className="font-display text-xl text-slate-900">Portfolio</span>
            <div className="flex items-center gap-6 text-sm font-body">
              <a href="#work" className="text-slate-600 hover:text-slate-900 transition-colors">Work</a>
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">About</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">Contact</a>
            </div>
          </GlassCard>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto w-full"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Intro Text */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div variants={itemVariants}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-white/60 text-sm text-slate-600 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4" />
                  Available for freelance work
                </span>
              </motion.div>

              <motion.h1 
                variants={itemVariants}
                className="font-display text-5xl sm:text-6xl lg:text-7xl text-slate-900 leading-[1.1]"
              >
                Crafting digital
                <br />
                <span className="text-slate-400">experiences</span>
                <br />
                with precision
              </motion.h1>

              <motion.p 
                variants={itemVariants}
                className="font-body text-lg sm:text-xl text-slate-500 max-w-xl leading-relaxed"
              >
                Frontend developer and designer specializing in building elegant, 
                performant web applications with modern technologies.
              </motion.p>

              <motion.div variants={itemVariants} className="flex items-center gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-8 py-4 bg-slate-900 text-white rounded-2xl font-body font-medium flex items-center gap-2 hover:bg-slate-800 transition-colors"
                >
                  View Projects
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white/60 text-slate-900 rounded-2xl font-body font-medium border border-white/60 backdrop-blur-sm hover:bg-white/80 transition-colors"
                >
                  Get in Touch
                </motion.button>
              </motion.div>
            </div>

            {/* Right: Visual Element */}
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-5"
            >
              <GlassCard variant="elevated" padding="2xl" className="relative overflow-hidden">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 mx-auto rounded-full bg-slate-900/5 flex items-center justify-center">
                      <Code2 className="w-10 h-10 text-slate-700" />
                    </div>
                    <div>
                      <p className="font-display text-3xl text-slate-900">5+</p>
                      <p className="font-body text-slate-500">Years Experience</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating badge */}
                <motion.div 
                  className="absolute -bottom-4 -right-4 px-6 py-3 bg-slate-900 text-white rounded-2xl font-body text-sm shadow-xl"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  React & Next.js Expert
                </motion.div>
              </GlassCard>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Bento Grid Section */}
      <section id="work" className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-display text-4xl sm:text-5xl text-slate-900 mb-4">
                Selected Work
              </h2>
              <p className="font-body text-lg text-slate-500">
                A collection of projects that showcase my expertise
              </p>
            </div>
            <motion.button
              whileHover={{ x: 4 }}
              className="hidden sm:flex items-center gap-2 text-slate-600 hover:text-slate-900 font-body transition-colors"
            >
              View all projects
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>

          <BentoGrid maxWidth="full" gap="lg">
            {/* Featured Project - Large */}
            <BentoItem colSpan={2} rowSpan={2} variant="elevated">
              <div className="h-full flex flex-col">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 text-sm font-body mb-4">
                      Featured
                    </span>
                    <h3 className="font-display text-3xl text-slate-900 mb-2">
                      E-commerce Platform
                    </h3>
                    <p className="font-body text-slate-500">
                      Full-stack solution with real-time inventory
                    </p>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-slate-400" />
                </div>
                <div className="flex-1 min-h-[200px] rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                  <span className="font-body text-slate-400">Project Preview</span>
                </div>
              </div>
            </BentoItem>

            {/* Skills Card */}
            <FeatureCard
              icon={<Code2 className="w-6 h-6" />}
              title="Development"
              description="React, Next.js, TypeScript, Node.js, and modern tooling"
            />

            {/* Design Card */}
            <FeatureCard
              icon={<Palette className="w-6 h-6" />}
              title="Design"
              description="UI/UX design with Figma and design systems"
            />

            {/* Blog Card */}
            <BentoItem variant="subtle">
              <div className="h-full flex flex-col justify-between">
                <FileText className="w-8 h-8 text-slate-400 mb-4" />
                <div>
                  <h3 className="font-display text-xl text-slate-900 mb-2">Latest Writing</h3>
                  <p className="font-body text-sm text-slate-500">
                    Thoughts on frontend architecture and design systems
                  </p>
                </div>
              </div>
            </BentoItem>

            {/* Photography Card */}
            <BentoItem variant="subtle">
              <div className="h-full flex flex-col justify-between">
                <Camera className="w-8 h-8 text-slate-400 mb-4" />
                <div>
                  <h3 className="font-display text-xl text-slate-900 mb-2">Photography</h3>
                  <p className="font-body text-sm text-slate-500">
                    Visual storytelling through the lens
                  </p>
                </div>
              </div>
            </BentoItem>

            {/* Contact CTA - Wide */}
            <BentoItem colSpan={2}>
              <GlassCard 
                padding="xl" 
                hoverEffect 
                className="h-full bg-gradient-to-r from-slate-900 to-slate-800 text-white"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div>
                    <h3 className="font-display text-2xl mb-2">Let&apos;s work together</h3>
                    <p className="font-body text-slate-300">
                      Have a project in mind? I&apos;d love to hear about it.
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-body font-medium whitespace-nowrap hover:bg-slate-100 transition-colors"
                  >
                    Start a Conversation
                  </motion.button>
                </div>
              </GlassCard>
            </BentoItem>
          </BentoGrid>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl sm:text-5xl text-slate-900 mb-6">
                Building the web,
                <br />
                <span className="text-slate-400">one pixel at a time</span>
              </h2>
              <div className="space-y-4 font-body text-lg text-slate-600 leading-relaxed">
                <p>
                  I&apos;m a frontend developer with a passion for creating beautiful, 
                  functional digital experiences. With over 5 years of experience, 
                  I&apos;ve worked with startups and established companies to bring 
                  their visions to life.
                </p>
                <p>
                  My approach combines technical expertise with an eye for design, 
                  ensuring that every project not only works flawlessly but also 
                  looks and feels exceptional.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <GlassCard className="aspect-square flex items-center justify-center">
                <div className="text-center">
                  <p className="font-display text-4xl text-slate-900">50+</p>
                  <p className="font-body text-slate-500">Projects</p>
                </div>
              </GlassCard>
              <GlassCard className="aspect-square flex items-center justify-center">
                <div className="text-center">
                  <p className="font-display text-4xl text-slate-900">30+</p>
                  <p className="font-body text-slate-500">Clients</p>
                </div>
              </GlassCard>
              <GlassCard className="aspect-square flex items-center justify-center">
                <div className="text-center">
                  <p className="font-display text-4xl text-slate-900">5+</p>
                  <p className="font-body text-slate-500">Years</p>
                </div>
              </GlassCard>
              <GlassCard className="aspect-square flex items-center justify-center">
                <div className="text-center">
                  <p className="font-display text-4xl text-slate-900">∞</p>
                  <p className="font-body text-slate-500">Coffee</p>
                </div>
              </GlassCard>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 px-6 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="font-display text-2xl text-slate-900 mb-2">Let&apos;s create something amazing</p>
              <p className="font-body text-slate-500">hello@example.com</p>
            </div>
            <div className="flex items-center gap-4">
              {["GitHub", "Twitter", "LinkedIn", "Dribbble"].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ y: -2 }}
                  className="w-12 h-12 rounded-2xl bg-white/60 border border-white/60 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-white/80 transition-colors backdrop-blur-sm font-body text-sm"
                >
                  {social[0]}
                </motion.a>
              ))}
            </div>
          </div>
          <p className="text-center font-body text-sm text-slate-400 mt-12">
            © 2026 Crafted with care using Next.js & Tailwind CSS
          </p>
        </div>
      </footer>
    </main>
  );
}
