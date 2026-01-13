"use client";

import { useTheme } from "@/context/theme-context";

export default function FluidBackground() {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Background gradient based on theme */}
      <div
        className="absolute inset-0 transition-colors duration-500"
        style={{
          background:
            theme === "dark"
              ? "linear-gradient(135deg, #020617 0%, #0f172a 30%, #1e293b 60%, #0f172a 100%)"
              : "linear-gradient(135deg, #e0f2fe 0%, #f0fdfa 25%, #f0f4f8 50%, #ecfeff 75%, #e0f7fa 100%)",
        }}
      />

      {/* Gradient orbs */}
      <div
        className="absolute w-[700px] h-[700px] -top-40 -left-40 rounded-full transition-opacity duration-500"
        style={{
          background:
            theme === "dark"
              ? "radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, transparent 70%)",
          opacity: theme === "dark" ? 0.6 : 0.4,
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] top-1/4 -right-20 rounded-full transition-opacity duration-500"
        style={{
          background:
            theme === "dark"
              ? "radial-gradient(circle, rgba(94, 234, 212, 0.06) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(20, 184, 166, 0.1) 0%, transparent 70%)",
          opacity: theme === "dark" ? 0.5 : 0.3,
        }}
      />
      <div
        className="absolute w-[600px] h-[600px] bottom-0 left-1/3 rounded-full transition-opacity duration-500"
        style={{
          background:
            theme === "dark"
              ? "radial-gradient(circle, rgba(125, 211, 252, 0.05) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(34, 211, 238, 0.08) 0%, transparent 70%)",
          opacity: theme === "dark" ? 0.4 : 0.25,
        }}
      />
    </div>
  );
}
