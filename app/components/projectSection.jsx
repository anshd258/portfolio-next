"use client";
import { useEffect, useState } from "react";
import ProjectCard from "./projectCard";
import projectData from "../static/projectdata.json";
import ProjectTag from "./projectTag";
function ProjectSection() {
  const [uniqueTags, setUniqueTags] = useState([]);
  const [Tag, setTag] = useState("All");

  useEffect(() => {
    const collectUniqueTags = () => {
      let tags = [];
      projectData.forEach((project) => {
        project.tag.forEach((tag) => {
          if (!tags.includes(tag)) {
            tags.push(tag);
          }
        });
      });
      return tags;
    };

    // Update uniqueTags state
    setUniqueTags(collectUniqueTags());
    
  }, []);

  const handleTabChange = (tag) => {
    setTag(tag);
  };
  return (
    <>
      <h1 className="text-center font-bold text-white md:text-7xl text-5xl mb-12">
        Projects
      </h1>
      <div className="flex flex-row justify-center items-center text-white s">
        {uniqueTags.map((value, index) => (
          <ProjectTag
            key={index}
            name={value}
            isSelected={Tag === value}
            onClick={() => handleTabChange(value)}
          />
        ))}
      </div>
      <div className="grid md:grid-cols-3 md:gap-12 gap-4">
        {projectData.map((value, index) => (
          value.tag.includes(Tag) ? <ProjectCard
          key={index}
          githubLink={value.githubLink}
          livelink={value.liveLink}
          desc={value.description}
          img={value.image}
          title={value.title}
        />: null
        ))}
      </div>
    </>
  );
}

export default ProjectSection;
