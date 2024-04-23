import React from "react";
import ProjectCard from "./projectCard";
import  projectData from "../static/projectdata.json"
function ProjectSection() {
  return (
    <>
      <h1 className="text-center font-bold text-white md:text-7xl text-5xl mb-12">
        Projects
      </h1>
    <div className="grid md:grid-cols-3 md:gap-12 gap-4">
       {projectData.map((value, index) => ( <ProjectCard key={index} githubLink={value.githubLink} livelink={value.liveLink} desc={value.description} img={value.image} title={value.title}/>))}
    </div>
    </>
  );
}

export default ProjectSection;
