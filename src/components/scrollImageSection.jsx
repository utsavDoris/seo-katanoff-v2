"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Image from "next/image";
import coins from "@/assets/images/home/coins.webp";
import jewelry from "@/assets/images/home/jewelry.webp";
import bgLines from "@/assets/images/home/bg-lines.webp";
import CustomImage from "./customImage";

gsap.registerPlugin(ScrollTrigger);

export default function ComparisonScroll() {
  const sectionRef = useRef(null);
  const firstImageRef = useRef(null);
  const secondImageRef = useRef(null);
  const innerFirstImageRef = useRef(null);
  const innerSecondImageRef = useRef(null);

  const [currentTitle, setCurrentTitle] = useState("Jewelry");
  const [currentDescription, setCurrentDescription] = useState(
   "Timeless estate jewelry pieces featuring vintage charm and fine craftsmanship, carefully curated for quality, beauty, and lasting value."
  );

  useEffect(() => {
    const section = sectionRef.current;
    const firstImage = firstImageRef.current;
    const secondImage = secondImageRef.current;
    const innerFirstImage = innerFirstImageRef.current;
    const innerSecondImage = innerSecondImageRef.current;

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=100vh",
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
          const progress = self.progress;
          if (progress < 0.5) {
            setCurrentTitle("Estate Jewelry");
            setCurrentDescription(
              "Timeless estate jewelry pieces featuring vintage charm and fine craftsmanship, carefully curated for quality, beauty, and lasting value."
            );
          } else {
            setCurrentTitle("Coins");
            setCurrentDescription(
              "Discover rare coins, Morgan and silver dollars, expertly sourced and selected with over 50 years of trusted collecting experience."
            );
          }
        },
      },
      defaults: { ease: "none" },
    });

    tl.fromTo(
      [firstImage, innerFirstImage],
      { yPercent: 100, y: 0 },
      { yPercent: 0 }
    ).fromTo(
      [secondImage, innerSecondImage],
      { yPercent: -100, y: 0 },
      { yPercent: 0 },
      0
    );
  }, []);

  return (
    <div className="bg-black min-h-screen overflow-hidden mt-10">
      <section ref={sectionRef} className="relative h-screen">
        {/* Outer Image */}
        <div className="w-full h-full relative">
          <div className="w-full h-full">
            <Image
              src={jewelry}
              alt="Jewelry"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div ref={firstImageRef} className="absolute inset-0 overflow-hidden">
            <Image
              ref={secondImageRef}
              src={coins}
              alt="Coins"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <CustomImage
          srcAttr={bgLines}
          className="absolute inset-1 flex justify-center items-center opacity-85 h-screen"
        />
        {/* Centered Content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] lg:w-[40%]">
          <div className="bg-[#F6F5F1] text-center px-4 py-6">
            <motion.h3
              className="font-belleza text-3xl 2xl:text-4xl mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              key={currentTitle}
            >
              {currentTitle}
            </motion.h3>
            <div className="h-[400px] 2xl:h-[500px] relative overflow-hidden">
              {/* Inner Image */}
              <div className="w-full h-full relative">
                <div className="w-full h-full">
                  <Image
                    src={jewelry}
                    alt="Jewelry"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div
                  ref={innerFirstImageRef}
                  className="absolute inset-0 overflow-hidden"
                >
                  <Image
                    ref={innerSecondImageRef}
                    src={coins}
                    alt="Coins"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-3">
              <motion.p
                className="md:text-md lg:text-lg 2xl:text-[24px] lg:w-[60%] mt-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                key={currentDescription}
              >
                {currentDescription}
              </motion.p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
