import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { useEffect } from "react";
import "swiper/swiper-bundle.css"; // Import the CSS bundle

import { RxArrowTopRight } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { projectsData } from "../../assets/constants/data";
import SectionTitle from "../SectionLayout/SectionTitle";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

SwiperCore.use([Autoplay, FreeMode, Pagination]);

const ProjectSlider = () => {
  useEffect(() => {
    // Log window.innerWidth when component mounts or when it updates
    console.log("Window inner width:", window.innerWidth);
  }, []);
  return (
    <div className="flex items-center justify-center flex-col h-[750px]">
      <div className="flex items-center justify-center h-[100px] text-center text-white text-3xl font-bold z-30">
        <SectionTitle text="Personal Projects" />
      </div>

      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1, // Adjust to 1 slide per view for smaller screens
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
              className="flex flex-col gap-6 mb-10 group relative text-white rounded-xl px-6  h-[250px] w-full xl:py-20 lg:h-[400px] lg:w-full overflow-hidden cursor-pointer py-10"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.img})` }}
              />
              <div className="absolute inset-0 bg-black sm:bg-pink-400 md:bg-blue-400 lg:bg-green-300 xl:bg-red-400 opacity-10 group-hover:opacity-50"></div>

              <div className="relative flex flex-col gap-3">
                <h1 className="text-xl lg:text-2xl">{project.title} </h1>
                <p className="lg:text-[18px]">
                  {window.innerWidth < 858
                    ? project.text.split(" ").slice(0, 30).join(" ") +
                      (project.text.split(" ").length > 30 ? "..." : "")
                    : project.text}
                </p>
              </div>
              <div className="flex absolute bottom-12 left-6 md:mb-0 xl:mb-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="w-[25px] h-[25px] mr-2 hover:text-green-400 duration-200"></FaGithub>
                </a>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <TbWorldWww
                    className={`w-[25px] h-[25px] duration-200 ${
                      project.alertText
                        ? "text-gray-300 cursor-default"
                        : "hover:text-green-400"
                    }`}
                  />
                </a>
              </div>
              <div className="flex">
                <RxArrowTopRight className="absolute bottom-3 left-5 w-[35px] h-[35px] text-white group-hover:text-green-400 group-hover:rotate-45 duration-100" />
                <div className="absolute bottom-2 left-16 w-9/12 h-[35px] text-sm text-orange-200 font-thin">
                  {project.alertText ? project.alertText : ""}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectSlider;
