import React from "react";
import SectionTitle from "./SectionTitle";
import { projects } from "../data";
import ProjectsCard from "./ProjectsCard";

const Project = () => {
  return (
    <section className="py-20 align-element" id="projects">
      <SectionTitle text="web creations"></SectionTitle>
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project}></ProjectsCard>;
        })}
      </div>
    </section>
  );
};

export default Project;
