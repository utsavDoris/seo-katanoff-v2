"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  cardAnimation,
  leftToRightAnimation,
  rightToLeftAnimation,
} from "@/utils/common";
import CustomImage from "./customImage";

const AlternatingFeatureBlock = ({
  description = "",
  title = "",
  direction = "LTF",
  imgSrc = "",
  titleAttr = "",
  altAttr = "",
  children,
  className = "",
  titleClassName = "",
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });
  const contentAnimation =
    direction === "LTF" ? rightToLeftAnimation : leftToRightAnimation;
  const layoutDirection =
    direction === "LTF"
      ? "flex-col lg:flex-row"
      : "flex-col lg:flex-row-reverse";
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      ref={ref}
      className={`flex ${layoutDirection} items-center justify-between gap-6  text-black ${className}`}
    >
      {/* Image Section */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={cardAnimation}
        className="h-[40vh] md:h-[70vh] w-full xxs:w-full lg:w-1/2 relative overflow-hidden lg:shadow-[38px_-40px_0px_-11px_rgba(0,0,0)]"
      >
        <CustomImage
          srcAttr={imgSrc}
          altAttr={altAttr}
          titleAttr={titleAttr}
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Content Section */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={contentAnimation}
        className="w-full lg:w-[45%] flex flex-col text-center lg:justify-center lg:items-start  lg:text-left "
      >
        <h2
          className={`uppercase text-xl md:text-4xl md:mb-2 2xl:text-6xl lg:leading-[50px] 2xl:leading-[60px]  font-belleza ${titleClassName}`}
        >
          {title}
        </h2>
        <div className="space-y-0.5 mb-3 !text-left">
          <p className="text-center lg:text-start  md:text-md lg:text-lg 2xl:text-[24px]  py-2">
            {description}
          </p>
        </div>

        {children}
      </motion.div>
    </section>
  );
};

export default AlternatingFeatureBlock;
