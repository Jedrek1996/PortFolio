import React from "react";
import { links } from "../data";

const Navbar = () => {
  return (
    <nav className="bg-emerald-100 h-screen flex flex-col">
      <div className="py-4 pb-80">
        <h2 className="text-3xl font-bold">
          Web<span className="text-emerald-600">Dev</span>
        </h2>
      </div>

      <div className="flex flex-col gap-y-3">
        {links.map((link) => {
          const { id, href, text } = link;
          return (
            <div key={id} className="vertical-text">
              {text.split("").map((char, index) => (
                <span
                  key={index}
                  className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
                >
                  {char}
                </span>
              ))}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
