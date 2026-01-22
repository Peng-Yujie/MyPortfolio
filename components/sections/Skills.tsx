"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillsMotionProps, useScroll } from "@/lib/motionSettings";
import { skillsData } from "@/lib/data";
import LiquidCard from "@/components/ui/LiquidCard";

const Skills = () => {
  const { ref, isInView } = useScroll();

  return (
    <section className="skills mb-4" id="skills">
      <LiquidCard>
        <div className="p-6 md:px-16 md:py-12">
          <h1 className="font-light text-text-muted mb-4">Skills</h1>
          <div className="flex flex-wrap gap-4 items-center justify-center">
            {skillsData.map((skill, index) => (
              <motion.div
                {...skillsMotionProps}
                key={index}
                transition={{ delay: index * 0.15 }}
                ref={ref}
                animate={isInView ? "visible" : "hidden"}
                className="skill-pill h-8 px-6 flex items-center justify-center text-text-secondary"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </LiquidCard>
    </section>
  );
};

export default Skills;
