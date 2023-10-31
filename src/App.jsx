import React from "react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Project from "./components/Project";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero />
      <Skills></Skills>
      <About></About>
      <Project></Project>
    </>
  );
};

export default App;
