import React from "react";
import Slider from "react-slick";
import SectionTitle from "../SectionLayout/SectionTitle";
import TestimonialsCard from "../Testimonials/TestimonialsCard";
import { skills } from "../../assets/constants/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInView } from "react-intersection-observer";
import { hiddenStyles, showStyles } from "../CustomCss&Settings/observerStyles";

import { SkillsNextArrow, SkillsPrevArrow } from "./carouselSettings";

const Testimonials = () => {
  const { ref, inView } = useInView();
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3400,
    pauseOnHover: true,
    nextArrow: <SkillsNextArrow />,
    prevArrow: <SkillsPrevArrow />,
  };

  return (
    <div ref={ref}>
      <section
        className={`py-px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 custom-smaller sm:w-5/12 md:w-7/12 lg:w-8/12 2xl:w-11/12 mt-32
      2xl h-80 mx-auto align-element mb-8`}
        style={{ ...(inView ? showStyles : hiddenStyles) }}
        id="skills"
      >
        <SectionTitle text="Testimonials" />
        <Slider {...settings} className={`pt-8`}>
          {skills.map((skill, index) => (
            <div key={index}>
              <h3>{skill.name}</h3>
              <TestimonialsCard key={skill.id} {...skill}></TestimonialsCard>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default Testimonials;
