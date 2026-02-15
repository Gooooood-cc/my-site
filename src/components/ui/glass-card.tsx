"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  padding?: "none" | "sm" | "md" | "lg" | "xl" | "2xl";
  variant?: "default" | "elevated" | "subtle";
}

// Padding presets - generous breathing room
const paddingStyles = {
  none: "",
  sm: "p-6",
  md: "p-8",
  lg: "p-10",
  xl: "p-12",
  "2xl": "p-16",
};

// Variant styles for different material depths
const variantStyles = {
  default: {
    background: "bg-white/60 dark:bg-slate-900/60",
    border: "border-white/60 dark:border-slate-700/60",
    shadow: "shadow-[0_2px_8px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04),0_24px_48px_rgba(0,0,0,0.03)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.2),0_8px_24px_rgba(0,0,0,0.2),0_24px_48px_rgba(0,0,0,0.15)]",
  },
  elevated: {
    background: "bg-white/80 dark:bg-slate-900/80",
    border: "border-white/70 dark:border-slate-700/70",
    shadow: "shadow-[0_4px_12px_rgba(0,0,0,0.05),0_16px_40px_rgba(0,0,0,0.05),0_40px_80px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.25),0_16px_40px_rgba(0,0,0,0.25),0_40px_80px_rgba(0,0,0,0.2)]",
  },
  subtle: {
    background: "bg-white/40 dark:bg-slate-900/40",
    border: "border-white/50 dark:border-slate-700/50",
    shadow: "shadow-[0_1px_4px_rgba(0,0,0,0.02),0_4px_12px_rgba(0,0,0,0.02)] dark:shadow-[0_1px_4px_rgba(0,0,0,0.15),0_4px_12px_rgba(0,0,0,0.1)]",
  },
};

export function GlassCard({
  children,
  className = "",
  hoverEffect = false,
  padding = "lg",
  variant = "default",
  ...props
}: GlassCardProps) {
  const variantStyle = variantStyles[variant];

  const hoverStyles = hoverEffect
    ? `
      cursor-pointer
      transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
      hover:shadow-[0_8px_24px_rgba(0,0,0,0.06),0_24px_60px_rgba(0,0,0,0.06),0_48px_96px_rgba(0,0,0,0.04)]
      dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.25),0_24px_60px_rgba(0,0,0,0.25),0_48px_96px_rgba(0,0,0,0.2)]
      hover:bg-white/70 dark:hover:bg-slate-800/70
      hover:scale-[1.01]
      will-change-transform
    `
    : "";

  const paddingStyle = paddingStyles[padding];

  return (
    <motion.div
      className={`
        relative
        rounded-[32px]
        border-[1.5px]
        overflow-hidden
        ${variantStyle.background}
        ${variantStyle.border}
        ${variantStyle.shadow}
        ${paddingStyle}
        ${hoverStyles}
        ${className}
      `}
      style={{
        backdropFilter: "blur(40px) saturate(180%)",
        WebkitBackdropFilter: "blur(40px) saturate(180%)",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1],
      }}
      {...props}
    >
      {/* Layer 1: Surface reflection */}
      <div
        className="absolute inset-0 pointer-events-none rounded-[32px]"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none rounded-[32px] dark:hidden"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none rounded-[32px] hidden dark:block"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 50%, transparent 100%)",
        }}
      />

      {/* Layer 2: Inner highlight edge */}
      <div
        className="absolute inset-[1px] pointer-events-none rounded-[31px] border border-white/30 dark:border-slate-700/30"
      />
      
      {/* Layer 3: Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

// Bento Grid Item - organic shapes
interface BentoItemProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  colSpan?: 1 | 2 | 3 | 4;
  rowSpan?: 1 | 2;
  variant?: "default" | "elevated" | "subtle";
}

export function BentoItem({
  children,
  className = "",
  colSpan = 1,
  rowSpan = 1,
  variant = "default",
  ...props
}: BentoItemProps) {
  const colSpanClass = {
    1: "col-span-1",
    2: "col-span-1 md:col-span-2",
    3: "col-span-1 md:col-span-3",
    4: "col-span-1 md:col-span-2 lg:col-span-4",
  }[colSpan];

  const rowSpanClass = {
    1: "row-span-1",
    2: "row-span-1 md:row-span-2",
  }[rowSpan];

  return (
    <motion.div
      className={`
        ${colSpanClass}
        ${rowSpanClass}
        ${className}
      `}
      {...props}
    >
      <GlassCard padding="xl" variant={variant} className="h-full w-full">
        {children}
      </GlassCard>
    </motion.div>
  );
}

// Feature Card - for showcasing specific content
interface FeatureCardProps extends HTMLMotionProps<"div"> {
  children?: ReactNode;
  className?: string;
  icon?: ReactNode;
  title?: string;
  description?: string;
}

export function FeatureCard({
  children,
  className = "",
  icon,
  title,
  description,
  ...props
}: FeatureCardProps) {
  return (
    <GlassCard
      padding="xl"
      hoverEffect
      className={`h-full flex flex-col ${className}`}
      {...props}
    >
      {icon && (
        <div className="w-12 h-12 rounded-2xl bg-slate-900/5 dark:bg-slate-100/10 flex items-center justify-center mb-6 text-slate-700 dark:text-slate-300">
          {icon}
        </div>
      )}
      {title && (
        <h3 className="text-xl text-slate-900 dark:text-slate-100 mb-2 font-semibold">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
          {description}
        </p>
      )}
      {children}
    </GlassCard>
  );
}
