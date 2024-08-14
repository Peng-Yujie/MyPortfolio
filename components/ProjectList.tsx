import React from "react";
import ProjectPreview from "./ProjectPreview";
import { projectData } from "../lib/data";
import { useSectionInView } from "../lib/motionSettings";

const ProjectList = () => {
  const { ref } = useSectionInView("Projects");

  return (
    <section className="projects mb-4 scroll-mt-28" id="projects" ref={ref}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
        {projectData.map((project, index) => (
          <ProjectPreview
            key={index}
            name={project.name}
            description={project.description}
            badges={project.badges}
            imgSrc={project.imgSrc}
            bgColor={project.bgColor}
            repoLink={project.repoLink}
            docLink={project.docLink}
            colSpan={
              index === 0 && projectData.length % 2 === 1 ? "lg:col-span-2" : ""
            }
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
