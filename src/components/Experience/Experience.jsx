import React from "react";
import SectionTitle from "../SectionLayout/SectionTitle";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experiencesData } from "../../assets/constants/data";

function Experience() {
  return (
    <section
      id="experience"
      className="
      sm:px-8 md:px-12 lg:px-16 xl:px-20 
       md:w-9/12 lg:w-9/12 2xl:w-11/12 
      mx-auto align-element"
    >
      <div>
        <SectionTitle text="Experience" />

        <VerticalTimeline>
          {experiencesData.flat().map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgba(152, 152, 243, 0.161)",
                color: "rgb(100 116 139)",
                border: "none",
                boxShadow: "0 0 16px #ffffffc1",
              }}
              contentArrowStyle={{
                borderRight: "7px solid #ffffff30",
              }}
              iconStyle={{
                background: "rgb(181, 211, 248)",
                color: "rgb(100 116 139)",
              }}
              icon={
                <img
                  src={experience.icon}
                  className="rounded-full sm:w-10 sm: w-10 md:w-20 lg:w-16  mx-auto
                  "
                />
              }
            >
              <h3 className="vertical-timeline-element-title experienceHeader">
                {experience.position}
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-xs experienceCompany">
                {experience.company} ({experience.date})
              </h4>
              <p className="experienceBody font-normal">
                {experience.description}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Experience;
