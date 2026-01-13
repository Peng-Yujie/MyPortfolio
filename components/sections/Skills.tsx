"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { skillsData } from "@/lib/data";
import { useActiveSection } from "@/context/active-section-context";
import LiquidCard from "@/components/ui/LiquidCard";

const categoryColors: Record<string, string> = {
  frontend: "hover:border-sky-400 hover:text-sky-600",
  backend: "hover:border-teal-400 hover:text-teal-600",
  language: "hover:border-emerald-400 hover:text-emerald-600",
  database: "hover:border-cyan-400 hover:text-cyan-600",
  devops: "hover:border-sky-400 hover:text-sky-600",
  design: "hover:border-teal-400 hover:text-teal-600",
};

const categoryDotColors: Record<string, string> = {
  frontend: "bg-sky-400",
  backend: "bg-teal-400",
  language: "bg-emerald-400",
  database: "bg-cyan-400",
  devops: "bg-sky-500",
  design: "bg-teal-500",
};

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { margin: "-40%" });
  const { setActiveSection, timeOfLastClick } = useActiveSection();

  useEffect(() => {
    if (isInView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Skills");
    }
  }, [isInView, setActiveSection, timeOfLastClick]);

  return (
    <section id="skills" ref={sectionRef} className="py-20 scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <p className="section-subtitle">What I Work With</p>
        <h2 className="section-title mb-10">
          Technical <span className="text-gradient">Skills</span>
        </h2>
      </motion.div>

      <LiquidCard className="p-6 md:p-10">
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.03,
              },
            },
          }}
        >
          {skillsData.map((skill) => (
            <motion.div
              key={skill.name}
              className={`
                px-5 py-2.5 rounded-full
                bg-white/70 border border-white/80
                text-sm text-text-secondary
                transition-all duration-200
                ${categoryColors[skill.category]}
              `}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              {skill.name}
            </motion.div>
          ))}
        </motion.div>

        {/* Category Legend */}
        <div className="flex flex-wrap justify-center gap-5 mt-8 pt-6 border-t border-white/50">
          {Object.entries(categoryDotColors).map(([category, color]) => (
            <div key={category} className="flex items-center gap-2">
              <div className={`w-2.5 h-2.5 rounded-full ${color}`} />
              <span className="text-text-muted text-xs capitalize">
                {category}
              </span>
            </div>
          ))}
        </div>
      </LiquidCard>
    </section>
  );
}
