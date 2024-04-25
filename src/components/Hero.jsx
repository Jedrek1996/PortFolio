import { ReactTyped } from "react-typed";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import particleConfig from "./particleConfig";
import Particles from "react-tsparticles";

const Hero = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Particles params={particleConfig} />
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-24 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h1 className="text-7xl font-bold tracking-wider">
          <span className="bg-gradient-to-r from-red-100 to-yellow-50 text-transparent bg-clip-text">
            I'm Jedrek
          </span>
        </h1>

        <ReactTyped
          className="mt-4 text-2xl text-stone-200 capitalize tracking-wide font-medium"
          strings={[
            "Aspiring Front End Developer",
            '<span class="text-red-900">Pokémon Card Collector ◓</span>',
          ]}
          typeSpeed={45}
          backSpeed={20}
          loop
        />

        <div className="flex gap-x-4 mt-4 sm:justify-center">
          <a href="#">
            <FaGithubSquare className="h-8 w-8 text-red-900 hover:text-red-700 duration-300" />
          </a>
          <a href="#">
            <FaLinkedin className="h-8 w-8 text-red-900 hover:text-red-700 duration-300" />
          </a>
          <a href="#">
            <FaTwitterSquare className="h-8 w-8 text-red-900 hover:text-red-700 duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
