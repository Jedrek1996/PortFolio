import React from "react";

const SectionTitle = ({ text }) => {
  return (
    <div className="border-b border-blue-200 pb-3 mb-4 ">
      <h2 className="text-3xl font-bold tracking-wider capitalize text-blue-400">
        {text}
      </h2>
    </div>
  );
};

export default SectionTitle;
