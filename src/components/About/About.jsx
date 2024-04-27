import React from "react";
import aboutSvg from "../../assets/about.svg";
import SectionTitle from "../SectionLayout/SectionTitle";

const About = () => {
  return (
    <section className="bg-whit py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" alt="" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            repudiandae quaerat atque, aliquid consectetur corrupti quae,
            doloremque animi vero molestiae temporibus cum necessitatibus sit
            sequi odit! Id quae voluptatem doloribus, tenetur aut eveniet soluta
            illum impedit! Numquam eveniet suscipit architecto ullam soluta
            perferendis, accusamus autem labore. Soluta, atque velit!
            Perspiciatis?
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
