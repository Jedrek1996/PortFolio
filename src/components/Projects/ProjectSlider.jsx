import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";

import "swiper/swiper-bundle.css"; // Import the CSS bundle

import { RxArrowTopRight } from "react-icons/rx";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { projects } from "../../assets/constants/data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

// Configure Swiper to use necessary modules
SwiperCore.use([Autoplay, FreeMode, Pagination]);

const ProjectSlider = () => {
  return (
    <div className="flex items-center justify-center flex-col h-[900px]">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
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
        {projects.map((project) => (
          <SwiperSlide key={project.title}>
            <div className="flex flex-col gap-6 mb-20 group relative  text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.img})` }}
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                <h1 className="text-xl lg:text-2xl">{project.title} </h1>
                <p className="lg:text-[18px]">{project.text} </p>
              </div>
              <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default ProjectSlider;
