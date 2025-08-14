"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CustomImage from "./customImage";

const TextCarousel = ({ img, content, titleAttr = "", altAttr = "" }) => {
  return (
    <div className="flex h-[90vh] justify-center w-full items-center relative">
      <div className="absolute inset-0">
        <CustomImage
          srcAttr={img}
          altAttr={altAttr}
          titleAttr={titleAttr}
          className="object-cover w-full h-full"
        />
      </div>

      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        breakpoints={{
          768: { slidesPerView: 2 },
          1064: { slidesPerView: 2 },
          1500: { slidesPerView: 3 },
        }}
        className="w-full relative z-10"
      >
        {content.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col bg-white h-[300px] justify-center p-4 text-left">
              <h2 className="text-4xl  xl:text-6xl font-belleza">
                {item.title}
              </h2>
              <p className="mt-2 text-md xl:text-lg 2xl:text-[20px]">
                {item.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TextCarousel;
