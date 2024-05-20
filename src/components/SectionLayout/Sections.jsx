import React from "react";
import Hero from "../Hero/Hero";
import Testimonials from "../Testimonials/Testimonials";
import About from "../About/About";
import Project from "../Projects/Project";
import Experience from "../Experience/Experience";
import Footer from "../Footer/Footer";
import Skills from "../Skills/Skills";
import ProjectSlider from "../Projects/ProjectSlider";

function Sections() {
  return (
    <React.Fragment>
      <Hero />
      <About />
      <Experience />
      <Skills />
      {/* <Testimonials /> */}
      <ProjectSlider />
      <Footer />
    </React.Fragment>
  );
}

export default Sections;
