import React from "react";
import Navbar from "./Hero/Navbar";
import Sections from "./SectionLayout/Sections";

function MainDisplay() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Sections />
    </React.Fragment>
  );
}

export default MainDisplay;
