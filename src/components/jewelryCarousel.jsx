import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import CustomImage from "./customImage";

export default function JewelryCarousel({ title = "", swiperItems = [] }) {
  return (
    <section className="bg-white mt-10 md:mt-14 xl:mt-24 2xl:mt-36 py-10 lg:py-20 text-center font-belleza">
      <h3 className="text-2xl md:text-3xl lg:text-4xl mb-6 md:mb-10">
        {title}
      </h3>
      <div className="mx-auto px-4 md:px-6 lg:px-10">
        <Swiper
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            480: { slidesPerView: 1, spaceBetween: 15 },
            640: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 2.5, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
            1280: { slidesPerView: 3.5, spaceBetween: 20 },
          }}
          modules={[Autoplay]}
        >
          {swiperItems.map((item, index) => (
            <SwiperSlide key={index} className="p-2">
              <CustomImage
                srcAttr={item.imgSrc}
                altAttr={item.altAttr}
                titleAttr={item.titleAttr}
                className="w-full h-auto shadow-lg "
              />
              <p className="mt-3 text-base md:text-lg">{item.title}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
