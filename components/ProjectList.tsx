import React from "react";
import ProjectPreview from "./ProjectPreview";
import { motion } from "framer-motion";
import { motionProps } from "../lib/motionSettings";
import { projectData } from "../lib/data";

const ProjectList = () => {
  return (
    <section className="projects mb-4 scroll-mt-20" id="projects">
      {/* <section className="projects mb-12 scroll-mt-12"> */}
      {/* <motion.div {...motionProps} className="w-full my-4 overflow-hidden">
        <h1 className="h1-section">Projects</h1>
      </motion.div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        {projectData.map((project, index) => (
          <ProjectPreview
            key={index}
            name={project.name}
            description={project.description}
            badges={project.badges}
            imgURL={project.imgURL}
            bgColor={project.bgColor}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
