import React from "react";
import Navbar from "../Hero/Navbar";
import Hero from "../Hero/Hero";
import Skills from "../Skills/Skills";
import About from "../About/About";
import Project from "../Projects/Project";
import Carousel from "../Skills/Carousel";

function Sections() {
  return (
    <React.Fragment>
      <Hero />
      <Skills></Skills>
      <About></About>
      <Project></Project>
      <Carousel></Carousel>
    </React.Fragment>
  );
}

export default Sections;
