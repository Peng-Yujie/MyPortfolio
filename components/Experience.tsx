import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { motionProps } from "../lib/motionSettings";
import { experienceData } from "../lib/data";
import { darkBgClass } from "./ThemeSwitch";

const Experience = () => {
  return (
    <section className="experience mb-4">
      {/* <section className="experience mb-12 scroll-mt-12"> */}
      {/* <motion.div {...motionProps} className="w-full my-4 overflow-hidden">
        <h1 className="h1-section">Experience</h1>
      </motion.div> */}
      <motion.div
        {...motionProps}
        className={`rounded-3xl overflow-hidden bg-gray-50 px-10 py-6 ${darkBgClass}`}
      >
        <VerticalTimeline>
          {experienceData.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              date={experience.date}
              icon={experience.icon}
              iconStyle={experience.iconStyle}
              style={{ color: "#000" }}
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
