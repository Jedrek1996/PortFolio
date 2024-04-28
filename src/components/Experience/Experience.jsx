import React from "react";
import SectionTitle from "../SectionLayout/SectionTitle";

function Experience() {
  return (
    <section className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 custom-smaller sm:w-5/12 md:w-8/12 lg:w-10/12 2xl:w-11/12 mx-auto align-element">
      <div>
        <SectionTitle text="Experience"></SectionTitle>
        <div className="grid grid-cols-2 gap-x-4">
          <div id="mainBranch" className="col-span-1" />
          <div className="col-span-1">
            <div className="subBranch">Sub Branch</div>
            <div className="subBranch">Sub Branch</div>
            <div className="subBranch">Sub Branch</div>
            <div className="subBranch">Sub Branch</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
