import React from "react";
import SectionTitle from "../SectionLayout/SectionTitle";
import { useInView } from "react-intersection-observer";
import { hiddenStyles, showStyles } from "../CustomCss&Settings/observerStyles";
import { aboutMe } from "../../assets/constants/data";
import me from "../../assets/about/me.jpg";
import Lottie from "lottie-react";
import morpheAnimation from "../../assets/animations/aboutMeAnimation.json";
import "./about.css";

const About = () => {
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className="max-w-4xl mx-auto">
      <section
        className="py-16 md:py-24 lg:py-32 about-section"
        id="about"
        style={{ ...(inView ? showStyles : hiddenStyles) }}
      >
        <div className="align-element grid md:grid-cols-2 items-center gap-10 relative max-w">
          {/* <Lottie
            className="inline-block max-w-full"
            animationData={morpheAnimation}
          /> */}
          <img
            src={me}
            alt="About Me"
            className="inline-block max-w-full rounded-md opacity-75 w-full md:max-w-sm lg:max-w-xl"
          />
          <article className="relative z-10 p-6 md:p-8 lg:p-10 bg-white opacity-70 shadow-lg rounded-lg article-expand hover:scale-110">
            <div className="flex items-center mb-6 md:mb-8 opacity-100">
              <SectionTitle text="About Me" />
            </div>
            <div
              className="text-slate-500 leading-loose font-medium text-base opacity-100"
              dangerouslySetInnerHTML={{ __html: aboutMe }}
            />
          </article>
          <div className="absolute top-0 left-0 w-full h-full bg-blue-100 opacity-30 transform rotate-3 rounded-lg -z-10"></div>
        </div>
      </section>
    </div>
  );
};

export default About;
