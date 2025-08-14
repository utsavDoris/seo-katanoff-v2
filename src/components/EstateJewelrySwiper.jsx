"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CustomImage from "./customImage";

const EstateJewelrySwiper = ({ backgroundImg, jewelryItems }) => {
  return (
    <div className="relative w-full h-[70vh] lg:h-[100vh] flex items-center justify-center">
      <div className="absolute inset-0">
        <CustomImage
          srcAttr={backgroundImg}
          altAttr=""
          titleAttr=""
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      </div>

      <div className="absolute top-0 w-full bg-offwhite flex justify-center px-4">
        <h2
          className="text-2xl md:text-5xl lg:text-7xl 2xl:text-8xl 4xl:text-9xl font-belleza text-transparent bg-clip-text bg-cover bg-center tracking-wide lg:tracking-wider whitespace-nowrap uppercase text-center flex flex-wrap"
          style={{
            backgroundImage: `url(${backgroundImg.src})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          TYPES OF ESTATE JEWELRY
        </h2>
      </div>

      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        freeMode={true}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3.3 },
        }}
        className="relative z-10 w-full px-6"
      >
        {jewelryItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="p-4 lg:mt-28  bg-white flex flex-col justify-center items-center mx-10 h-full xl:min-h-[350px] 2xl:min-h-[500px]">
              <CustomImage
                srcAttr={item.img}
                altAttr={item.altAttr}
                titleAttr={item.titleAttr}
                className="rounded-md lg:max-h-[350px]"
              />

              <h3 className="text-center py-6 text-lg lg:text-2xl 2xl:text-3xl font-belleza">
                {item.title}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EstateJewelrySwiper;
