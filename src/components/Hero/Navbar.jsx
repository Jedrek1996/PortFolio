import React, { useState, useEffect } from "react";
import { links } from "../../assets/constants/data";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const [activeLink, setActiveLink] = useState(null);

  const handleSetActiveLink = (index) => {
    setActiveLink(index);
    setShowLinks(false);
  };

  return (
    <nav
      className={`h-screen flex flex-col fixed left-0 top-0 ${
        isMobile ? "sm:hidden" : ""
      }`}
    >
      {isMobile && (
        <button
          className="text-white hover:text-blue-500 transition-all duration-500"
          onClick={toggleLinks} // Toggle link visibility when hamburger icon is clicked
        >
          ☰
        </button>
      )}
      <div
        className={`flex flex-col gap-y-10 mt-10 ml-2 ${
          isMobile && !showLinks ? "hidden" : "" // Hide links on small screens when showLinks is false
        }`}
      >
        {links.map((link, index) => {
          const { id, href, text, icon: Icon } = link;
          return (
            <a
              key={id}
              href={href}
              className={`ml-3 capitalize text-2xl text-white hover:text-[#f0d5f5] transition-all duration-500
              hover:cursor-pointer hover:scale-110 ${
                activeLink === index ? "text-pink-300 text-3xl" : ""
              }`}
              onClick={() => handleSetActiveLink(index)}
            >
              <Icon className="mr-2 inline-block ml-2" />
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
