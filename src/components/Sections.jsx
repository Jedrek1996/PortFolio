import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Skills from "./Skills";
import About from "./About";
import Project from "./Project";

function Sections() {
  return (
    <React.Fragment>
      <Hero />
      <Skills></Skills>
      <About></About>
      <Project></Project>
    </React.Fragment>
  );
}

export default Sections;
