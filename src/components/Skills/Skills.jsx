import React from "react";
import { skillsData } from "../../assets/constants/data";
import SkillDataProvider from "./SkillsDataProvider";

const Skills = () => {
  return (
    <section
      className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 custom-smaller sm:w-5/12 md:w-8/12 lg:w-10/12 2xl:w-11/12 mx-auto align-element mt-32"
      id="projects"
    >
      <div className="w-full flex flex-col justify-center items-center gap-5 text-center mt-24">
        <div className="text-4xl font-light tracking-wider capitalize mb-8 animated-gradient-skills-section">
          「Programming Skills」
        </div>
        <div className="w-8/12 flex flex-row justify-around flex-wrap gap-5 items-center">
          {skillsData.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
