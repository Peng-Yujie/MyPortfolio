import React from "react";
import ProjectPreview from "./ProjectPreview";
import { motion } from "framer-motion";
import { motionProps } from "./motionSettings";

const ProjectList = () => {
  return (
    <>
      <motion.div {...motionProps} className="w-full my-4 overflow-hidden">
        <h1 className="h1-section">Projects</h1>
      </motion.div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <ProjectPreview
          name="Project 2"
          description="Project 1 description Project 1 description Project 1 description Project 1 description Project 1 description Project 1 description Project 1 description Project 1 description Project 1 description Project 1 description Project 1 description Project 1 description"
          imgURL="/project-1.png"
          bgColor="#E4E4E4"
        />
        <ProjectPreview />
        <ProjectPreview />
        <ProjectPreview />
      </section>
    </>
  );
};

export default ProjectList;
