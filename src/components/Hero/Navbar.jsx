import React, { useState, useEffect } from "react";
import { links } from "../../assets/constants/data";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    const handleScroll = () => {
      if (isMobile && window.scrollY > 50) {
        setShowLinks(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

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
      className={`flex flex-col fixed mt-4 ml-6 top-0 left-0 z-50 text-3xl ${
        isMobile ? "sm:hidden" : ""
      }`}
    >
      {isMobile && (
        <button
          className="text-white transition-all duration-700 ease-in-out"
          onClick={toggleLinks}
        >
          ☰
        </button>
      )}
      <div
        className={`flex flex-col gap-y-10 mt-10 ${
          isMobile && !showLinks ? "hidden" : ""
        }`}
      >
        {links.map((link, index) => {
          const { id, href, text, icon: Icon } = link;
          return (
            <a
              key={id}
              href={href}
              className={` capitalize text-2xl text-white hover:text-[#f0d5f5] transition-all duration-700 ease-in-out
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
