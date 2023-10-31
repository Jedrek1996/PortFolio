import React from "react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero />
      <Skills></Skills>
    </>
  );
};

export default App;
