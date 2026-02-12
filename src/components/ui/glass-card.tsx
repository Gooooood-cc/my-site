"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  padding?: "none" | "sm" | "md" | "lg" | "xl" | "2xl";
}

// Padding presets - 强制巨大留白
const paddingStyles = {
  none: "",
  sm: "p-6",
  md: "p-8",
  lg: "p-12",
  xl: "p-16",
  "2xl": "p-20",
};

export function GlassCard({
  children,
  className = "",
  hoverEffect = false,
  padding = "md",
  ...props
}: GlassCardProps) {
  const baseStyles = `
    relative
    bg-white/40
    backdrop-blur-2xl
    rounded-[28px]
    border-[1.5px] border-white/70
    shadow-[0_8px_32px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)]
    overflow-hidden
  `;

  const hoverStyles = hoverEffect
    ? `
      cursor-pointer
      transition-all
      duration-300
      hover:shadow-[0_12px_48px_rgba(0,0,0,0.12),0_4px_16px_rgba(0,0,0,0.06)]
      hover:scale-[1.02]
      hover:bg-white/50
      hover:border-white/80
    `
    : "";

  const paddingStyle = paddingStyles[padding];

  return (
    <motion.div
      className={`${baseStyles} ${paddingStyle} ${hoverStyles} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        ease: [0.25, 1, 0.5, 1],
      }}
      {...props}
    >
      {/* Inner highlight for glass depth */}
      <div className="absolute inset-[1px] rounded-[27px] pointer-events-none border border-white/40 bg-gradient-to-br from-white/30 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

// Bento Grid Item Variant
interface BentoItemProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  colSpan?: 1 | 2 | 3 | 4;
  rowSpan?: 1 | 2;
}

export function BentoItem({
  children,
  className = "",
  colSpan = 1,
  rowSpan = 1,
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
      <GlassCard padding="xl" className="h-full w-full">
        {children}
      </GlassCard>
    </motion.div>
  );
}
