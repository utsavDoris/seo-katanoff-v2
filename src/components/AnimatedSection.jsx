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

const AnimatedSection = ({
  description = [],
  animatedClass = "",
  points = [],
  title = "",
  direction = "LTF",
  img = "",
  titleAttr = "",
  altAttr = "",
  children,
  className = "",
  titleClassName = "",
  isPrimaryColor = false,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });
  const contentAnimation =
    direction === "LTF" ? rightToLeftAnimation : leftToRightAnimation;
  const layoutDirection =
    direction === "LTF"
      ? "flex-col lg:flex-row"
      : "flex-col-reverse lg:flex-row-reverse";
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      ref={ref}
      className={`flex ${layoutDirection} items-center justify-between gap-6   ${className}`}
    >
      {/* Image Section */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={cardAnimation}
        className={`h-[40vh] md:h-[70vh] w-full xxs:w-full lg:w-1/2 relative overflow-hidden ${animatedClass}`}
      >
        <CustomImage
          srcAttr={img}
          titleAttr={titleAttr}
          altAttr={altAttr}
          fill
          priority
          className={`object-cover`}
        />
      </motion.div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={contentAnimation}
        className="w-full lg:w-[45%] flex flex-col text-center lg:justify-center lg:items-start  lg:text-left"
      >
        <h2
          className={`uppercase text-xl md:text-4xl md:mb-2 2xl:text-4xl lg:leading-[50px] 2xl:leading-[60px]  font-belleza ${titleClassName} ${
            isPrimaryColor ? "text-primary" : ""
          } `}
        >
          {title}
        </h2>
        <div className="space-y-0.5 mb-3 !text-left">
          {description.length &&
            description.map((desc, i) => {
              return (
                <p
                  key={i}
                  className={`md:text-md lg:text-[1.05rem] 2xl:text-[24px] ${
                    i !== 0 ? "xl:pt-4 pt-2" : ""
                  }`}
                >
                  {desc}
                </p>
              );
            })}
          {points.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mb-3">
              <ol className="list-decimal pl-4 space-y-2">
                {points
                  .slice(0, Math.ceil(points.length / 2))
                  .map((point, i) => (
                    <li
                      key={i}
                      className=" md:text-md lg:text-md 2xl:text-[24px]"
                    >
                      {point}
                    </li>
                  ))}
              </ol>

              <ol
                className="list-decimal pl-4 space-y-2"
                start={Math.ceil(points.length / 2) + 1}
              >
                {points.slice(Math.ceil(points.length / 2)).map((point, i) => (
                  <li
                    key={i}
                    className=" md:text-md lg:text-lg 2xl:text-[24px]"
                  >
                    {point}
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>

        {children}
      </motion.div>
    </section>
  );
};

export default AnimatedSection;
