"use client";

// Simplified, performant background with CSS-only effects
export default function FluidBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Base gradient - light blue/teal */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #e0f2fe 0%, #f0fdfa 25%, #f0f4f8 50%, #ecfeff 75%, #e0f7fa 100%)",
        }}
      />

      {/* Soft gradient orbs - CSS only, no animations for performance */}
      <div 
        className="absolute w-[800px] h-[800px] -top-60 -left-40 rounded-full opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 70%)",
        }}
      />
      
      <div 
        className="absolute w-[600px] h-[600px] top-1/4 -right-20 rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(20, 184, 166, 0.12) 0%, transparent 70%)",
        }}
      />
      
      <div 
        className="absolute w-[700px] h-[700px] bottom-0 left-1/3 rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(34, 211, 238, 0.1) 0%, transparent 70%)",
        }}
      />

      {/* Subtle mesh overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(14, 165, 233, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(20, 184, 166, 0.08) 0%, transparent 50%)
          `,
        }}
      />
    </div>
  );
}
