"use client";
import { useEffect, useRef, useState } from "react";
import MarqueeText from "./MarqueeText";

import gsap from "gsap";
import { motion } from "framer-motion";
import CustomImage from "./customImage";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      when: "beforeChildren",
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const descriptionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const GoldSilverPlatinumScrollbar = ({ serviceDetail }) => {
  const [height, setHeight] = useState(0);

  const antiqueObjRef = useRef(null);

  useEffect(() => {
    gsap.to(antiqueObjRef.current, {
      y: -20,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "power1.inOut",
    });
    const element = document.getElementById("scroll-animated-box");
    const rect = element.getBoundingClientRect();
    setHeight(rect?.height);
  }, []);

  return (
    <section>
      <div
        className="relative"
        style={{
          height: window.innerWidth >= 1024 ? `${height}px` : "auto",
        }}
      >
        <div className="lg:min-h-[100vh] lg:sticky top-0 items-center grid grid-cols-1 gap-8 lg:gap-0 lg:grid-cols-2">
          <div className="w-full h-full lg:block hidden">
            <CustomImage
              srcAttr={serviceDetail?.bgImg}
              altAttr={serviceDetail?.bgAltAttr}
              titleAttr={serviceDetail?.bgTitleAttr}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 w-1/2" />
          </div>
          <motion.div
            className="relative h-fit md:space-y-6 self-start lg:top-20 lg:sticky container lg:px-0 "
            variants={containerVariants}
          >
            {serviceDetail?.svgIcon && (
              <motion.div
                className="absolute right-6"
                variants={containerVariants}
              >
                <CustomImage
                  src={serviceDetail.svgIcon}
                  altAttr={serviceDetail.svgAltAttr}
                  titleAttr={serviceDetail.svgTitleAttr}
                  width={100}
                  height={100}
                  className="h-20 w-20 md:h-40 md:w-40 rounded-full"
                />
              </motion.div>
            )}

            <div className="pt-24 lg:pt-56 justify-center  text-left lg:w-[85%] xl:w-[80%] 2xl:w-[70%] flex flex-col mx-auto">
              <motion.h2
                className="text-3xl font-belleza md:text-5xl 2xl:text-6xl service-title"
                variants={titleVariants}
              >
                {serviceDetail.title}
              </motion.h2>
              <div className="border-b border-[#D9D9D9] pt-4" />

              {serviceDetail.description.map((desc, index) => (
                <motion.p
                  key={index}
                  className="text-md xl:text-lg text-primary  lg:!text-xl 2xl:!text-[22px] leading-relaxed service-description pt-12"
                  variants={descriptionVariants}
                >
                  {desc}
                </motion.p>
              ))}
            </div>
            <div className="lg:pt-[10%] xl:pt-[12%] 2xl:pt-[18%] 4xl:pt-[28%] 6xl:pt-[32%] pt-12 !pb-6">
              {serviceDetail?.marqueeTitle && (
                <motion.div
                  className="flex justify-center items-center"
                  variants={containerVariants}
                >
                  <MarqueeText
                    text={serviceDetail.marqueeTitle}
                    isAbsolute={false}
                    MarqueeClassName="text-[#DADADA] !font-bold !text-4xl"
                  />
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
        <div className="lg:absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="relative" id="scroll-animated-box">
            {serviceDetail?.service?.map((item, index) => (
              <div key={index} className="gap-6 flex flex-col">
                <div className="w-full lg:w-1/2 flex justify-center items-center gap-6 pt-12">
                  <CustomImage
                    srcAttr={item?.img}
                    className="relative z-10  w-[700px] h-[450px] object-cover"
                    altAttr={item?.altAttr}
                    titleAttr={item?.titleAttr}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldSilverPlatinumScrollbar;
