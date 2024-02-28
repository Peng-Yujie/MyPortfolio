import React from "react";
import ProjectPreview from "./ProjectPreview";
import { projectData } from "../lib/data";

const ProjectList = () => {
  return (
    <section className="projects mb-4 scroll-mt-20" id="projects">
      <div className="grid grid-cols-1 gap-4 my-4">
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
