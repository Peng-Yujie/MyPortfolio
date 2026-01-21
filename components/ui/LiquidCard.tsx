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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="liquid-card-wrap">
        <div className={`liquid-card ${className}`}>
          {children}
        </div>
        <div className="liquid-card-shadow"></div>
      </div>
    </motion.div>
  );
}
