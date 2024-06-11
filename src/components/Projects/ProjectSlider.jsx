import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";

import "swiper/swiper-bundle.css"; // Import the CSS bundle

import { RxArrowTopRight } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { projectsData } from "../../assets/constants/data";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

SwiperCore.use([Autoplay, FreeMode, Pagination]);

const ProjectSlider = () => {
  return (
    <div className="flex items-center justify-center flex-col h-[750px]">
      <div className="flex items-center justify-center h-[100px] text-center text-white text-3xl font-bold z-30">
        <span style={{ textDecorationColor: "white" }}>Personal Projects</span>
        <span className="text-red-100 ml-2">(In Progress)</span>
      </div>

      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1, // Adjust to   1 slide per view for smaller screens
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 2, // Adjust to 2 slides per view for medium screens
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3, // Adjust to 3 slides per view for larger screens
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {projectsData.map((project) => (
          <SwiperSlide key={project.title}>
            <div
              id="projects"
              className="flex flex-col gap-6 mb-10 group relative text-white rounded-xl px-6 py-20 h-[250px] w-full lg:h-[400px] lg:w-full overflow-hidden cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.img})` }}
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                <h1 className="text-xl lg:text-2xl">{project.title} </h1>
                <p className="lg:text-[18px]">{project.text} </p>
              </div>
              <div className="flex absolute bottom-12 left-6 mb-3">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="w-[25px] h-[25px] mr-2 hover:text-green-400 duration-200"></FaGithub>
                </a>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TbWorldWww className="w-[25px] h-[25px] hover:text-green-400 duration-200" />
                </a>
              </div>

              <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-green-400 group-hover:rotate-45 duration-100" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectSlider;
