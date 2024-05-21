import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-full text-white p-[15px] bg-[#c5a2a221] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-medium text-[18px] text-[#b5d3f8]">
              Social Platforms
            </div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Github</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Linkedin</span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-medium text-[18px] text-[#b5d3f8]">
              Contact Me
            </div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a
                className="text-[15px] ml-[6px]"
                href="mailto:kohjedrek96@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer invisible">
              <span className="text-[15px] ml-[6px]">Fill me</span>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Jedrek Koh
        </div>
      </div>
    </div>
  );
};

export default Footer;
/* 
 #93f7bc, #b5d3f8, #f0d5f5
 green ,  blue   , pink
*/
