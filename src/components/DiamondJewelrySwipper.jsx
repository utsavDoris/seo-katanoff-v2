"use client";

// components/Carousel.js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { LinkButton } from "./button";
import CustomImage from "./customImage";

export default function DiamondJewelrySwipper({ images }) {
  return (
    <div className="bg-black !rounded-none mx-auto py-4">
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next1",
          prevEl: ".swiper-button-prev1",
        }}
        modules={[Navigation]}
        loop={true}
        grabCursor={true}
        className="mySwiper"
        spaceBetween={20}
        breakpoints={{
          940: {
            slidesPerView: 1.5,
          },
          1140: {
            slidesPerView: 2,
          },
          1400: {
            slidesPerView: 3,
          },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="gap-2">
            <div className="shadow-lg max-w-3xl mx-auto overflow-hidden">
              <div className="relative">
                <CustomImage
                  srcAttr={src.image}
                  altAttr={src.altAttr}
                  titleAttr={src.titleAttr}
                  className="object-cover h-[500px] w-full"
                />
                <div className="absolute inset-1 flex flex-col justify-end text-2xl text-white w-full  font-belleza gap-6  mb-6">
                  <div className="relative">
                    <p className="text-center mb-2">{src.title}</p>
                    <div className="border-t-2 border-white w-[40px] absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                  <div className="flex justify-center">
                    <LinkButton
                      className="!bg-transparent !text-white !w-fit hover:!bg-white hover:!text-black"
                      href={src.link}
                    >
                      Enquire Now
                    </LinkButton>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
