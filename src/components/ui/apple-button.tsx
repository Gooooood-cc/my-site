"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface AppleButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

// Primary: Brand blue fill
const primaryStyles = `
  bg-[#0071e3]
  text-white
  hover:bg-[#0077ed]
  shadow-sm
`;

// Secondary: Light gray fill
const secondaryStyles = `
  bg-[#E5E5EA]
  text-[#1d1d1f]
  hover:bg-[#D1D1D6]
`;

// Outline: Transparent with border
const outlineStyles = `
  bg-transparent
  border border-[#0071e3]
  text-[#0071e3]
  hover:bg-[#0071e3]/10
`;

const sizeStyles = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-base rounded-xl",
  lg: "px-8 py-4 text-lg rounded-xl",
};

export function AppleButton({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  ...props
}: AppleButtonProps) {
  const baseStyles = `
    relative
    font-medium
    transition-all
    duration-200
    ease-out
    focus:outline-none
    focus:ring-2
    focus:ring-[#0071e3]/50
    disabled:opacity-50
    disabled:cursor-not-allowed
  `;

  const variantClass = {
    primary: primaryStyles,
    secondary: secondaryStyles,
    outline: outlineStyles,
  }[variant];

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <motion.button
      className={`
        ${baseStyles}
        ${variantClass}
        ${sizeStyles[size]}
        ${widthClass}
        ${className}
      `}
      whileHover={!props.disabled ? { scale: 1.02 } : undefined}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
