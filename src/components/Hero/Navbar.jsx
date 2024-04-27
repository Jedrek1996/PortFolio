import React from "react";
import { links } from "../../data";

const Navbar = () => {
  return (
    <nav className=" h-screen flex flex-col fixed left-0 top-0">
      <div className="flex flex-col gap-y-28 mt-10 ml-2">
        {links.map((link) => {
          const { id, href, text } = link;
          return (
            <a
              key={id}
              href={href}
              className="capitalize text-2xl text-blue-400 hover:text-blue-500 transition-all duration-500
              hover:cursor-pointer hover:scale-110 vertical-text transform -rotate-90"
            >
              {text}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
