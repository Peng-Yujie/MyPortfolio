import React from "react";
import ProjectPreview from "./ProjectPreview";
import { projectData } from "../lib/data";
import { useSectionInView } from "../lib/motionSettings";

const ProjectList = () => {
  const { ref } = useSectionInView("Projects");

  return (
    <section className="projects mb-4 scroll-mt-28" id="projects" ref={ref}>
      <div className="grid grid-cols-1 gap-4 my-4">
        {projectData.map((project, index) => (
          <ProjectPreview
            key={index}
            name={project.name}
            description={project.description}
            badges={project.badges}
            imgSrc={project.imgSrc}
            bgColor={project.bgColor}
            url={project.url}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
