import React from "react";

const SkillsCard = ({ icon, title, text }) => {
  return (
    <article>
      <span>{icon}</span>
      <h4 className="mt-6 font-bold">{title}</h4>
      <p className="mt-2 text-slate-400 hover:text-slate-700 transition-all duration-500">
        {text}
      </p>
    </article>
  );
};

export default SkillsCard;
