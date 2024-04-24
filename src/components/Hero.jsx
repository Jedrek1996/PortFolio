import heroImg from "../assets/hero.svg";
import { ReactTyped } from "react-typed";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-emerald-100">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-24 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h1 className="text-7xl font-bold tracking-wider">I'm Jedrek</h1>

        <ReactTyped
          className="mt-4 text-3xl text-slate-700 capitalize tracking-wide"
          strings={["Aspiring Front End Developer", "Ttestinasd"]}
          typeSpeed={45}
          backSpeed={20}
          loop
        />

        <div className="flex gap-x-4 mt-4 sm:justify-center">
          <a href="#">
            <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
          <a href="#">
            <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
          <a href="#">
            <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
        </div>
      </div>
      {/* <img
        src={heroImg}
        className="hidden md:block absolute inset-y-0 right-0 h-screen"
        alt="Hero"
      /> */}
    </div>
  );
};

export default Hero;
