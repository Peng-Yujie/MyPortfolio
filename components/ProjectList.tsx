import React from "react";
import ProjectPreview from "./ProjectPreview";

const ProjectList = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
      {/* <ProjectPreview
    name="Flip App"
    description="Next generation social media app"
    imgURL="/project-2.png"
    bgColor="#685CDD"
    dark
  /> */}
      <ProjectPreview />
      <ProjectPreview />
      <ProjectPreview />
      <ProjectPreview />
    </section>
  );
};

export default ProjectList;
