
import React from 'react';
import { motion } from 'framer-motion';

const BackgroundGlow: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Primary Orange Glow */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-primary/10 blur-[120px]"
      />
      
      {/* Secondary Purple Glow */}
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[0%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-secondary/10 blur-[120px]"
      />

      {/* Center Subtle Wash */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#050505] opacity-50" />
    </div>
  );
};

export default BackgroundGlow;
