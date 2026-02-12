import { Variants } from "framer-motion";

// Spring animation presets based on Apple Design Guide
// cubic-bezier(0.25, 1, 0.5, 1)
export const springTransition = {
  type: "spring",
  stiffness: 260,
  damping: 20,
  mass: 1,
};

// Smooth easing
export const smoothEase = [0.25, 1, 0.5, 1] as const;

// Fade In Up Animation
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: smoothEase,
    },
  },
};

// Staggered Fade In (for lists)
export const staggerFadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: smoothEase,
    },
  },
};

// Scale on Hover
export const scaleOnHover = {
  scale: 1.02,
  brightness: 1.05,
  transition: {
    duration: 0.3,
    ease: "easeOut",
  },
};

// Button hover effect
export const buttonHover = {
  scale: 1.02,
  backgroundColor: "rgba(0, 113, 227, 0.9)",
  transition: {
    duration: 0.2,
    ease: "easeOut",
  },
};

// Page load animation
export const pageLoad: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

export const pageItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: smoothEase,
    },
  },
};

// Scroll reveal animation
export const scrollReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: smoothEase,
    },
  },
};
