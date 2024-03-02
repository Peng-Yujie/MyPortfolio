import React from "react";
import { motion } from "framer-motion";
import {
  motionProps,
  skillsMotionProps,
  useScroll,
} from "../lib/motionSettings";
import { skillsData } from "../lib/data";

const Skills = () => {
  const { ref, isInView } = useScroll();

  return (
    <section className="skills mb-4">
      <motion.div
        className="rounded-3xl overflow-hidden bg-gray-50 dark:bg-none dark:bg-gray-600 dark:outline dark:outline-2 dark:outline-gray-500"
        {...motionProps}
      >
        <div className="p-6 md:px-16 md:py-12">
          <h1 className="font-light text-zinc-300 mb-4">Skills</h1>
          <div className="flex flex-wrap gap-4 items-center justify-center">
            {skillsData.map((skill, index) => (
              <motion.div
                {...skillsMotionProps}
                key={index}
                transition={{ delay: index * 0.15 }}
                ref={ref}
                animate={isInView ? "visible" : "hidden"}
                className="h-8 px-6 rounded-full outline outline-teal-500 outline-2 text-teal-500 dark:outline-gray-500 dark:text-white hover:outline-gray-500 hover:text-gray-500 
              dark:hover:outline-gray-700 flex items-center justify-center"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
