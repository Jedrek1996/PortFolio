import React from "react";
import { links } from "../data";

const Navbar = () => {
  return (
    <nav className="bg-stone-400 h-screen flex flex-col fixed left-0 top-0">
      <div className="flex flex-col gap-y-28 mt-10 ml-4">
        {links.map((link) => {
          const { id, href, text } = link;
          console.log(id);
          return (
            <a
              key={id}
              href={href}
              className="capitalize text-2xl text-stone-200 duration-75 hover:text-red-300 hover:text-3xl hover:cursor-pointer vertical-text transform -rotate-90 "
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
