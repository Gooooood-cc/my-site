"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  padding?: "none" | "sm" | "md" | "lg" | "xl";
}

// Padding presets
const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
  xl: "p-10",
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
    bg-white/80
    backdrop-blur-xl
    rounded-[24px]
    border border-white/60
    shadow-sm
    overflow-hidden
  `;

  const hoverStyles = hoverEffect
    ? `
      cursor-pointer
      transition-all
      duration-300
      hover:shadow-xl
      hover:scale-[1.02]
      hover:bg-white/90
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
      {/* Subtle hairline border */}
      <div className="absolute inset-0 rounded-[24px] pointer-events-none border border-white/30" />
      
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
      <GlassCard padding="lg" className="h-full w-full">
        {children}
      </GlassCard>
    </motion.div>
  );
}
