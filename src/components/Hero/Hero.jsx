import { ReactTyped } from "react-typed";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import Lottie from "lottie-react";
import heroAnimation from "../../assets/animations/heroAnimation.json";
import "../../index.css";

const Hero = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-24 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="relative flex justify-end w-full">
          <h1 className="text-8xl font-thin tracking-wider">
            <span className="bg-gradient-to-r from-blue-400 to-blue-200 text-transparent bg-clip-text inline-block animated-gradient-text z-30">
              I'm Jedrek
            </span>
          </h1>
          <div className="absolute bottom-8 -right-36 z-0">
            <Lottie
              className="inline-block"
              animationData={heroAnimation}
              style={{
                width: "230px",
                height: "auto",
                opacity: 0.25,
              }}
            />
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
          <a href="#">
            <FaGithubSquare className="h-8 w-8 text-red-200 hover:text-red-300 cursor-pointer duration-300" />
          </a>
          <a href="#">
            <FaLinkedin className="h-8 w-8 text-blue-300 hover:text-blue-500 cursor-pointer duration-300" />
          </a>
          <a href="#">
            <FaTwitterSquare className="h-8 w-8 text-green-300 hover:text-green-400 cursor-pointer duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
