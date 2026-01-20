"use client";

import { useTheme } from "@/context/theme-context";
import { useScroll, useTransform, motion } from "framer-motion";

export default function FluidBackground() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const { scrollY } = useScroll();

  // Parallax transform for dot pattern
  const dotY = useTransform(scrollY, [0, 3000], [0, -150]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Base color - notebook paper yellow / dark blue */}
      <div
        className="absolute inset-0 transition-colors duration-500"
        style={{
          background: isDark ? "#0a0f1a" : "#f5f3e8",
        }}
      />

      {/* Dot grid pattern - moves with scroll for parallax effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          y: dotY,
          backgroundImage: isDark
            ? `radial-gradient(circle, rgba(100, 120, 150, 0.2) 1px, transparent 1px)`
            : `radial-gradient(circle, rgba(180, 170, 140, 0.35) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Subtle gradient overlay for depth - very subtle */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: isDark
            ? "radial-gradient(ellipse at 30% 20%, rgba(56, 189, 248, 0.03) 0%, transparent 50%)"
            : "radial-gradient(ellipse at 70% 30%, rgba(255, 250, 230, 0.4) 0%, transparent 50%)",
        }}
      />
    </div>
  );
}
