"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import post from "@/assets/images/what-we-sell/post.webp";
import post2 from "@/assets/images/what-we-sell/post-2.webp";
import post3 from "@/assets/images/what-we-sell/post-3.webp";
import post4 from "@/assets/images/what-we-sell/post-4.webp";
import post5 from "@/assets/images/what-we-sell/post-5.webp";
import bgShape from "@/assets/images/icons/bg-shape.svg";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { instagramUrl } from "@/utils/environments";
import CustomImage from "./customImage";

const swiperItems = [
  { image: post, titleAttr: "", altAttr: "" },
  { image: post2, titleAttr: "", altAttr: "" },
  { image: post3, titleAttr: "", altAttr: "" },
  { image: post4, titleAttr: "", altAttr: "" },
  { image: post5, titleAttr: "", altAttr: "" },
];

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex flex-col lg:flex-row items-center overflow-hidden">
        <div className="w-full lg:w-1/3 h-full flex items-center justify-center px-8 pt-8 lg:p-8 z-50 bg-offwhite">
          <div className="max-w-md text-center lg:text-left">
            <span className="text-sm md:text-lg 2xl:text-xl">
              WORLD FOLLOWING US
            </span>
            <h2 className="text-2xl  md:text-3xl lg:text-5xl 2xl:text-7xl font-bold font-belleza uppercase text-[#151313] my-4">
              Tele gold jewelers
            </h2>
            <CustomImage
              srcAttr={bgShape}
              altAttr=""
              titleAttr=""
              className="object-cover w-20 2xl:w-28 mt-4 2xl:mt-6 mx-auto lg:mx-0"
            />
          </div>
        </div>

        {/* Responsive Carousel */}
        <div className="w-full lg:w-2/3 h-full flex items-center overflow-x-hidden">
          <motion.div style={{ x }} className="flex gap-4 px-4 lg:px-0">
            {swiperItems.map((card, index) => (
              <Card card={card} key={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div className="group relative w-[250px] sm:w-[300px] 2xl:w-[400px] overflow-hidden flex-shrink-0">
      <CustomImage
        srcAttr={card.image}
        className="object-cover w-full"
        titleAttr={card.titleAttr}
        altAttr={card.altAttr}
      />
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex items-center justify-center"></div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 text-white group-hover:opacity-100 rounded-full z-50">
        <Link
          target="_blank"
          href={instagramUrl}
          className="text-xl h-10 w-10 rounded-full border border-white flex justify-center items-center"
        >
          <FaInstagram />
        </Link>
      </div>
    </div>
  );
};

export default HorizontalScrollCarousel;
