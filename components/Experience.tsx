import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { motionProps } from "../lib/motionSettings";
import { experienceData } from "../lib/data";
import { useTheme } from "../context/theme-context";

const Experience = () => {
  const { theme } = useTheme();

  return (
    <section className="experience mb-4">
      {/* <section className="experience mb-12 scroll-mt-12"> */}
      {/* <motion.div {...motionProps} className="w-full my-4 overflow-hidden">
        <h1 className="h1-section">Experience</h1>
      </motion.div> */}
      <motion.div
        {...motionProps}
        className="rounded-3xl overflow-hidden bg-gray-50 px-10 py-6 dark:bg-none dark:bg-gray-600 dark:outline dark:outline-2 dark:outline-gray-500"
      >
        <VerticalTimeline>
          {experienceData.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              date={experience.date}
              icon={experience.icon}
              iconStyle={experience.iconStyle}
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
            >
              <h3 className="vertical-timeline-element-title">
                {experience.title}
              </h3>
              <p>{experience.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </motion.div>
    </section>
  );
};

export default Experience;
