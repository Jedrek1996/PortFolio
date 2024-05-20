import React from "react";
import Hero from "../Hero/Hero";
import Skills from "../Skills/Skills";
import About from "../About/About";
import Project from "../Projects/Project";
import Experience from "../Experience/Experience";
import Footer from "../Footer/Footer";

function Sections() {
  return (
    <React.Fragment>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Project />
      <Footer />
    </React.Fragment>
  );
}

export default Sections;
