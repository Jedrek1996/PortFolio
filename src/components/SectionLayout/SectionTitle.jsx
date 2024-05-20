import React from "react";
import "../../index.css";

const SectionTitle = ({ text }) => {
  return (
    <div className="border-b border-blue-200 pb-3 mb-4 ">
      <h1 className="text-4xl font-light tracking-wider capitalize text-blue-400 animated-gradient-text-section ">
        {text}
      </h1>
    </div>
  );
};

export default SectionTitle;
