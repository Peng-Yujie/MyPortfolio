"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface LiquidCardProps {
  children: ReactNode;
  className?: string;
}

export default function LiquidCard({
  children,
  className = "",
}: LiquidCardProps) {
  return (
    <motion.div
      className={`liquid-card ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
