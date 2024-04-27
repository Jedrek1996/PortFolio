import { ReactTyped } from "react-typed";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-24 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h1 className="text-7xl font-bold tracking-wider">
          <span className="bg-gradient-to-r from-blue-500 to-blue-200 text-transparent bg-clip-text">
            I'm Jedrek
          </span>
        </h1>

        <ReactTyped
          className="mt-4 text-xl text-blue-300 capitalize tracking-wide font-medium"
          strings={[
            "Software Developer",
            '<span class="text-blue-300">Pokémon Card Collector ◓</span>',
          ]}
          typeSpeed={45}
          backSpeed={20}
          loop
        />

        <div className="flex gap-x-4 mt-4 sm:justify-center">
          <a href="#">
            <FaGithubSquare className="h-8 w-8 text-blue-200 hover:text-red-700 duration-300" />
          </a>
          <a href="#">
            <FaLinkedin className="h-8 w-8 text-blue-200 hover:text-red-700 duration-300" />
          </a>
          <a href="#">
            <FaTwitterSquare className="h-8 w-8 text-blue-200 hover:text-red-700 duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
