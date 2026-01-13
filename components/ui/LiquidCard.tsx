"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface LiquidCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function LiquidCard({
  children,
  className = "",
  delay = 0,
}: LiquidCardProps) {
  return (
    <motion.div
      className={`liquid-card ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{
        scale: [1, 0.98, 1.01, 1],
        transition: {
          duration: 0.4,
          times: [0, 0.2, 0.6, 1],
          ease: "easeOut",
        },
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
}
