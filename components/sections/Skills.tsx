"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillsMotionProps, useScroll } from "@/lib/motionSettings";
import { skillsData, skillCategoryColors } from "@/lib/data";
import { useTheme } from "@/context/theme-context";
import LiquidCard from "@/components/ui/LiquidCard";

const Skills = () => {
  const { ref, isInView } = useScroll();
  const { theme } = useTheme();

  return (
    <section className="skills mb-4" id="skills">
      <LiquidCard>
        <div className="p-6 md:px-16 md:py-12">
          <h1 className="font-light text-text-muted mb-4">Skills</h1>
          <div className="flex flex-wrap gap-4 items-center justify-center">
            {skillsData.map((skill, index) => {
              const categoryColor = skillCategoryColors[skill.category];
              const hoverBgColor =
                theme === "dark" ? categoryColor.dark : categoryColor.light;

              return (
                <motion.div
                  {...skillsMotionProps}
                  key={index}
                  ref={ref}
                  animate={isInView ? "visible" : "hidden"}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { delay: index * 0.08, duration: 0.3 },
                    },
                  }}
                  className="skill-pill h-8 px-6 flex items-center justify-center text-text-secondary cursor-default"
                  whileHover={{
                    backgroundColor: hoverBgColor,
                    scale: 0.98,
                    transition: { duration: 0.15 },
                  }}
                >
                  {skill.name}
                </motion.div>
              );
            })}
          </div>
        </div>
      </LiquidCard>
    </section>
  );
};

export default Skills;
