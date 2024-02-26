import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { motion } from "framer-motion";
import { motionProps } from "./motionSettings";

const experienceData = [
  {
    title: "Job 1",
    date: "2019 - present",
    description: "Description for job 1",
    icon: React.createElement(CgWorkAlt),
    iconStyle: {
      background: "linear-gradient(to bottom right, #FEF08A, #A7F3D0)",
      color: "#14B8A6",
    },
  },
  {
    title: "Job 2",
    date: "2017 - 2019",
    description: "Description for job 2",
    icon: React.createElement(LuGraduationCap),
    iconStyle: {
      background: "linear-gradient(to bottom right, #FEF08A, #A7F3D0)",
      color: "#14B8A6",
    },
  },
];

const Experience = () => {
  return (
    <>
      <motion.div {...motionProps} className="w-full my-4 overflow-hidden">
        <h1 className="h1-section">Experience</h1>
      </motion.div>
      <motion.div
        {...motionProps}
        className="rounded-3xl overflow-hidden bg-gray-50 px-10 py-6"
      >
        <VerticalTimeline>
          {experienceData.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              date={experience.date}
              icon={experience.icon || React.createElement(LuGraduationCap)}
              iconStyle={experience.iconStyle}
            >
              <h3 className="vertical-timeline-element-title">
                {experience.title}
              </h3>
              <p>{experience.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </motion.div>
    </>
  );
};

export default Experience;
