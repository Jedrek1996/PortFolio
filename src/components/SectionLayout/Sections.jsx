import React from "react";
import Hero from "../Hero/Hero";
import Skills from "../Skills/Skills";
import About from "../About/About";
import Project from "../Projects/Project";
import Carousel from "../Skills/Carousel";
import Experience from "../Experience/Experience";

function Sections() {
  return (
    <React.Fragment>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Project />
      <Carousel />
    </React.Fragment>
  );
}

export default Sections;
