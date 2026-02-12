"use client";

import { ReactNode } from "react";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  gap?: "sm" | "md" | "lg" | "xl";
}

const maxWidthStyles = {
  sm: "max-w-2xl",
  md: "max-w-4xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  "2xl": "max-w-8xl",
  full: "max-w-full",
};

const gapStyles = {
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
  xl: "gap-10",
};

export function BentoGrid({
  children,
  className = "",
  maxWidth = "xl",
  gap = "lg",
}: BentoGridProps) {
  return (
    <div
      className={`
        mx-auto
        px-4
        sm:px-6
        lg:px-8
        ${maxWidthStyles[maxWidth]}
      `}
    >
      <div
        className={`
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          ${gapStyles[gap]}
          ${className}
        `}
      >
        {children}
      </div>
    </div>
  );
}
