import { React, useEffect } from "react";
import aboutSvg from "../../assets/about.svg";
import SectionTitle from "../SectionLayout/SectionTitle";
import { useInView } from "react-intersection-observer";
import { hiddenStyles, showStyles } from "../CustomCss&Settings/observerStyles";
import { aboutMe } from "../../data";

const About = () => {
  const { ref, inView } = useInView();
  return (
    <div ref={ref}>
      <section
        className=" py-32"
        id="about"
        style={{ ...(inView ? showStyles : hiddenStyles) }}
      >
        <div className="align-element grid md:grid-cols-2 items-center gap-16">
          <img src={aboutSvg} className="w-full h-64" alt="" />
          <article>
            <SectionTitle text="about me" />
            <text
              className="text-slate-500 mt-8 leading-loose font-medium"
              dangerouslySetInnerHTML={{ __html: aboutMe }}
            ></text>
          </article>
        </div>
      </section>
    </div>
  );
};

export default About;
