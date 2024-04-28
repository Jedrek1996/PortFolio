import React from "react";
import SectionTitle from "../SectionLayout/SectionTitle";

function Experience() {
  return (
    <section>
      <div className="mx-auto align-element">
        <SectionTitle text="Experience"></SectionTitle>
        <div className="grid grid-cols-2 gap-x-4">
          <div id="mainBranch" className="col-span-1">
            Main Branch
          </div>
          <div className="col-span-1">
            <div className="subranch">Sub Branch</div>
            <div className="subranch">Sub Branch</div>
            <div className="subranch">Sub Branch</div>
            <div className="subranch">Sub Branch</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
