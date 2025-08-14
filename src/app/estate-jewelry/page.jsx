import Hero from "@/components/Hero";
import heroEstate from "@/assets/images/what-we-buy/estate-jewelry/home-estate.webp";
import estate1 from "@/assets/images/what-we-buy/estate-jewelry/estate-1.webp";
import estate2 from "@/assets/images/what-we-buy/estate-jewelry/estate-2.webp";
import estate3 from "@/assets/images/what-we-buy/estate-jewelry/estate-3.webp";
import estate4 from "@/assets/images/what-we-buy/estate-jewelry/estate-4.webp";
import estateBackground from "@/assets/images/what-we-buy/estate-jewelry/estate-background.webp";
import estateSwiper1 from "@/assets/images/what-we-buy/estate-jewelry/estate-swiper-1.webp";
import estateSwiper2 from "@/assets/images/what-we-buy/estate-jewelry/estate-swiper-2.webp";
import estateSwiper3 from "@/assets/images/what-we-buy/estate-jewelry/estate-swiper-3.webp";
import estateSwiper4 from "@/assets/images/what-we-buy/estate-jewelry/estate-swiper-4.webp";
import estateSwiper5 from "@/assets/images/what-we-buy/estate-jewelry/estate-swiper-5.webp";
import {
  AnimatedSection,
  EstateJewelrySwiper,
} from "@/components/dynamiComponents";

import HeadingTitle from "@/components/HeadingTitle";
import KeepInTouch from "@/components/KeepInTouch";
import CustomImage from "@/components/customImage";

const animatedContent = [
  {
    img: estate2,
    titleAttr: "",
    altAttr: "",
    description: [
      "The value of estate diamond jewelry is closely tied to its age, origin, and historical significance. Pieces from iconic eras like Victorian, Art Deco, or Edwardian showcase unique design and craftsmanship that make them highly desirable.",
      "Whether you’re buying or selling, understanding the provenance—including the maker, previous owners, and unique hallmarks—helps ensure authenticity and accurate valuation. These factors are essential for collectors and sellers to assess true worth and significance.",
    ],

    direction: "LTF",
  },
];

const jewelryData = [
  {
    title: "Victorian Era Diamond Jewelry",
    img: estateSwiper1,
    titleAttr: "",
    altAttr: "",
  },
  {
    title: "Art Deco Diamond Jewelry",
    img: estateSwiper2,
    titleAttr: "",
    altAttr: "",
  },
  {
    title: "Edwardian Era Diamond Jewelry",
    img: estateSwiper3,
    titleAttr: "",
    altAttr: "",
  },
  {
    title: "Retro Diamond Jewelry",
    img: estateSwiper4,
    titleAttr: "",
    altAttr: "",
  },
  {
    title: "Antique Diamond Brooches and Rings",
    img: estateSwiper5,
    titleAttr: "",
    altAttr: "",
  },
];

export default function EstateJewelry() {
  return (
    <>
      <section>
        <Hero
          title="Trusted Place to Buy and Sell Estate Diamond Jewelry"
          imageSrc={heroEstate}
          textAlignment="center"
          titleAttr="Antique Jewelry | Diamond Jewelry"
          altAttr="Tele Gold Jewelers | Diamond Jewelry, Coin, Gold, Silver, Platinum"
        />
      </section>

      <section className="relative w-full pt-12 md:pt-18 xl:pt-24 2xl:pt-48">
        <div className="absolute top-[5%] md:top-[8%] lg:top-[0%] xl:top-[6%] 2xl:top-[10%] inset-0 flex flex-col items-start px-10 4xl:px-20">
          <div className="w-2xl">
            <h2 className="text-xl xss:text-3xl md:text-5xl 4xl:text-7xl font-belleza uppercase text-primary leading-tight">
              ESTATE DIAMOND <br /> JEWELRY
            </h2>
          </div>

          <div className="max-w-2xl  mt-0 ml-[10%] 2xl:ml-[30%] hidden lg:block">
            <p className=" text-lg 2xl:text-[24px]">
              Estate diamond jewelry combines timeless charm with exceptional
              craftsmanship. Whether you’re buying a unique, story-filled piece
              or selling your treasured jewelry, each item offers lasting value
              and beauty. Experience trusted service and fair prices in every
              transaction.
            </p>
          </div>
        </div>

        <div>
          <CustomImage
            titleAttr="Diamond Ring | Diamond Jewelry"
            srcAttr={estate1}
            className="w-full object-cover"
          />
        </div>
        <div className="py-4 md:pt-6 px-2 md:px-6 lg:hidden">
          <p className=" text-primary">
            Estate Jewelry refers to previously owned fine jewelry, often
            vintage or antique, that carries history and craftsmanship. These
            pieces can range from antique Victorian and Art Deco designs to more
            modern, high-end luxury jewelry.
          </p>
        </div>
      </section>

      <section className="pt-10 md:pt-14 xl:pt-16 2xl:pt-36">
        <div>
          <HeadingTitle sectionName="Age And Origin Of Estate Jewelry" />
        </div>
        <div className="container  pt-4 md:pt-8 lg:pt-14 2xl:pt-20">
          <AnimatedSection {...animatedContent[0]} />
        </div>
      </section>

      <section className="pt-10 md:pt-14 xl:pt-16 2xl:pt-36">
        <EstateJewelrySwiper
          backgroundImg={estateBackground}
          jewelryItems={jewelryData}
        />
      </section>

      <section className="container pt-10 md:pt-14 xl:pt-16 2xl:pt-36">
        <div className="4xl:translate-y-[15%]">
          <p className="font-belleza text-3xl md:text-6xl lg:text-8xl xl:text-8xl 4xl:text-[180px] text-[#1513131A] uppercase lg:tracking-wider">
            Unique Jewelry
          </p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="md:relative flex  bottom-[-10%] lg:bottom-[0%] 4xl:bottom-[-10%]">
            <CustomImage
              srcAttr={estate3}
              titleAttr="Gold Jewelry | Diamond Jewelry"
              className="w-[100%] 4xl:!w-[68%] 4xl:h-[550px] object-cover"
            />
          </div>
          <div>
            <div>
              <CustomImage
                srcAttr={estate4}
                titleAttr="Gold Jewelry | Diamond Jewelry"
                className="w-full "
              />
            </div>
            <p className="mt-4 md:text-md lg:text-lg 2xl:text-[28px] leading-relaxed pt-6">
              Unique jewelry stands out for its one-of-a-kind designs and
              exceptional craftsmanship. Each piece tells a story, reflecting
              individuality and personal style that can’t be found in
              mass-produced items. Whether vintage or modern, unique jewelry
              captures attention and becomes a treasured part of your
              collection.
            </p>
            <p className="mt-4 md:text-md lg:text-lg 2xl:text-[28px] leading-relaxed pt-6">
              At Tele Gold Jewelers, we offer a curated selection of rare and
              distinctive pieces. Whether you’re buying or selling, our experts
              ensure you connect with jewelry that’s truly special and valuable.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-10 md:pt-14 xl:pt-16 2xl:pt-36">
        <KeepInTouch />
      </section>
    </>
  );
}
