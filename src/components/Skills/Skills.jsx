import React from "react";
import Slider from "react-slick";
import SectionTitle from "../SectionLayout/SectionTitle";
import SkillsCard from "./SkillsCard";
import { skills } from "../../data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skills = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <section className="py-20 align-element" id="skills">
      <SectionTitle text="tech stack"></SectionTitle>

      <Slider {...settings}>
        {skills.map((skill, index) => (
          <div key={index}>
            <h3>{skill.name}</h3>
            <SkillsCard key={skill.id} {...skill}></SkillsCard>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Skills;
