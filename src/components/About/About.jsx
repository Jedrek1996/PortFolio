import React from "react";
import SectionTitle from "../SectionLayout/SectionTitle";
import { useInView } from "react-intersection-observer";
import { hiddenStyles, showStyles } from "../CustomCss&Settings/observerStyles";
import { aboutMe } from "../../../constants/data";
import Lottie from "lottie-react";
import morpheAnimation from "../../assets/animations/aboutMeAnimation.json";
import "./about.css";

const About = () => {
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className="max-w-5xl mx-auto">
      <section
        className="py-32 about-section"
        id="about"
        style={{ ...(inView ? showStyles : hiddenStyles) }}
      >
        <div className="align-element grid md:grid-cols-2 items-center gap-10 relative max-w">
          <Lottie
            className="inline-block max-w-full"
            animationData={morpheAnimation}
          />
          <article className="relative z-10 p-8 bg-white shadow-lg rounded-lg article-expand hover:scale-110">
            <div className="flex items-center mb-8">
              <SectionTitle text="About Me" />
            </div>
            <div
              className="text-slate-500 leading-loose font-medium text-lg"
              dangerouslySetInnerHTML={{ __html: aboutMe }}
            />
          </article>
          <div className="absolute top-0 left-0 w-full h-full bg-blue-50 opacity-75 transform rotate-3 rounded-lg -z-10"></div>
        </div>
      </section>
    </div>
  );
};

export default About;
