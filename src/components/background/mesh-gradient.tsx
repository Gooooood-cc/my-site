"use client";

import { motion } from "framer-motion";

export function MeshGradientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#FAFAFA]">
      {/* Organic gradient mesh layers */}
      <motion.div
        className="absolute top-0 right-0 w-[80vw] h-[80vh] opacity-40"
        style={{
          background: "radial-gradient(ellipse at 70% 30%, rgba(99, 102, 241, 0.15) 0%, transparent 60%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-0 left-0 w-[70vw] h-[70vh] opacity-30"
        style={{
          background: "radial-gradient(ellipse at 30% 70%, rgba(236, 72, 153, 0.12) 0%, transparent 60%)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />
      
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] opacity-20"
        style={{
          background: "radial-gradient(ellipse at center, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Subtle noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Bottom fade for seamless transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FAFAFA]/80 pointer-events-none" />
    </div>
  );
}
