import React from "react";
import SectionTitle from "../SectionLayout/SectionTitle";
import { projects } from "../../assets/constants/data";
import ProjectsCard from "./ProjectsCard";

const Project = () => {
  return (
    <section
      className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 custom-smaller sm:w-5/12 md:w-8/12 lg:w-10/12 2xl:w-11/12 mx-auto align-element mt-32"
      id="projects"
    >
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
