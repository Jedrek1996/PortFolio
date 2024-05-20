import React, { useState } from "react";
import SectionTitle from "../SectionLayout/SectionTitle";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experiencesData } from "../../../constants/data";

function Experience() {
  const [hoveredElement, setHoveredElement] = useState(null);

  const commonStyles = {
    background: "rgb(169, 205, 246)",
    color: "rgb(100 116 139)",
  };

  const hoverStyles = {
    background: "rgb(100, 116, 139)",
    color: "rgb(169, 205, 246)",
  };

  const commonClassNames = "vertical-timeline-element--work";
  const contentArrowStyle = { borderRight: "7px solid  rgb(96 165 250)" };

  return (
    <section
      id="experience"
      className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 custom-smaller sm:w-5/12 md:w-8/12 lg:w-10/12 2xl:w-11/12 mx-auto align-element"
    >
      <div>
        <SectionTitle text="Experience" />

        <VerticalTimeline>
          {experiencesData.flat().map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              className={commonClassNames}
              contentStyle={
                hoveredElement === index ? hoverStyles : commonStyles
              }
              contentArrowStyle={contentArrowStyle}
              iconStyle={hoveredElement === index ? hoverStyles : commonStyles}
              icon={
                <img
                  src={experience.icon}
                  className="rounded-full w-15 h-15 mx-auto"
                />
              }
              onMouseEnter={() => setHoveredElement(index)}
              onMouseLeave={() => setHoveredElement(null)}
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
