"use client";

import { motion } from "framer-motion";

export function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#F5F5F7]">
      {/* Ambient Light Orbs */}
      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full opacity-40 blur-[80px]"
        style={{
          background: "radial-gradient(circle, rgba(162, 210, 255, 0.8) 0%, rgba(162, 210, 255, 0) 70%)",
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-[-20%] right-[-10%] w-[55vw] h-[55vw] rounded-full opacity-30 blur-[80px]"
        style={{
          background: "radial-gradient(circle, rgba(200, 180, 255, 0.8) 0%, rgba(200, 180, 255, 0) 70%)",
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />
      
      <motion.div
        className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] rounded-full opacity-25 blur-[60px]"
        style={{
          background: "radial-gradient(circle, rgba(120, 200, 255, 0.6) 0%, rgba(120, 200, 255, 0) 70%)",
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10,
        }}
      />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F5F5F7]/50" />
    </div>
  );
}
