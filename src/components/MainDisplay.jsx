import React from "react";
import Navbar from "./Navbar";
import Sections from "./Sections";

function MainDisplay() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Sections />
    </React.Fragment>
  );
}

export default MainDisplay;
