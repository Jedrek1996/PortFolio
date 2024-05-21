import { ReactTyped } from "react-typed";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Lottie from "lottie-react";
import heroAnimation from "../../assets/animations/heroAnimation.json";
import "../../index.css";

const Hero = () => {
  return (
    <section className="flex items-center justify-center h-screen" id="home">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-24 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="relative flex justify-end w-full">
          <span className=" text-white text-2xl -rotate-12 -z-30">Hello</span>
          <h1 className="text-8xl font-thin tracking-wider">
            <block className="bg-gradient-to-r from-blue-400 to-blue-200 text-transparent bg-clip-text inline-block animated-gradient-text z-30">
              I'm Jedrek
            </block>
          </h1>
          <div className="absolute bottom-8 -right-36 z-0">
            {/* <Lottie
              className="inline-block"
              animationData={heroAnimation}
              style={{
                width: "230px",
                height: "auto",
                opacity: 0.25,
              }}
            /> */}
          </div>
        </div>

        <ReactTyped
          className="mt-4 text-xl text-blue-300 capitalize tracking-wide font-medium"
          strings={["Software Developer", "Pokémon Card Collector ◓"]}
          typeSpeed={45}
          backSpeed={20}
          loop
        />

        <div className="flex gap-x-4 mt-4 sm:justify-center">
          <a
            href="https://github.com/Jedrek1996"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare className="h-8 w-8 text-red-200 hover:text-red-300 cursor-pointer duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/jedrek-koh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="h-8 w-8 text-blue-300 hover:text-blue-400 cursor-pointer duration-300" />
          </a>
          <a
            href="mailto:kohjedrek96@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoMail className="h-9 w-9 text-green-200 hover:text-green-300 cursor-pointer duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
