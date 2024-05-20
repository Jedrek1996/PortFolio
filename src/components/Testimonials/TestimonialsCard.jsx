import React from "react";

const TestimonialsCard = ({ icon, title, text }) => {
  return (
    <article>
      <span className="text-[69px]">{icon}</span>
      <h4 className="mt-6 text-white font-bold">{title}</h4>
      <p
        className="mt-2 mr-10 text-white hover:text-pink-100 transition-all duration-500 text-sm max-w-xs
      "
      >
        {text}
      </p>
    </article>
  );
};

export default TestimonialsCard;
