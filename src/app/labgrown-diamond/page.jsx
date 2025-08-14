"use client";
import Hero from "@/components/Hero";

import bgShape1 from "@/assets/images/labgrown-diamond/bg-shape-1.webp";
import bgShape2 from "@/assets/images/labgrown-diamond/bg-shape-2.webp";
import rotateArrow from "@/assets/images/icons/rotate-arrow-right.svg";
import brilliant from "@/assets/images/labgrown-diamond/brilliant.webp";
import emerald from "@/assets/images/labgrown-diamond/emerald.webp";
import princess from "@/assets/images/labgrown-diamond/princess.webp";
import asscher from "@/assets/images/labgrown-diamond/asscher.webp";
import bgEarth from "@/assets/images/labgrown-diamond/bg-earth.webp";
import superiorCutPrecision from "@/assets/images/labgrown-diamond/superior-cut-precision.webp";
import diamond from "@/assets/images/labgrown-diamond/diamond.gif";
import earth from "@/assets/images/labgrown-diamond/earth-bg.webp";
import diamondBgEarth from "@/assets/images/labgrown-diamond/diamond-bg-earth.webp";
import vibrantColor from "@/assets/images/labgrown-diamond/vibrant-color.webp";
import superiorCut from "@/assets/images/labgrown-diamond/superior-cut.webp";
import exceptionalClarity from "@/assets/images/labgrown-diamond/exceptional-clarity.webp";
import brilliantCut from "@/assets/images/labgrown-diamond/brilliant-cut.webp";
import brilliantCutDiamond from "@/assets/images/labgrown-diamond/brilliant-cut-diamond.webp";
import {
  DiamondJewelrySwipper,
} from "@/components/dynamiComponents";
import { GoArrowRight, GoX } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveShape,
  setIsBrilliantCutActive,
  setIsEthicalExpanded,
  setIsExceptionalClarityActive,
  setIsExceptionalValueExpanded,
  setIsSuperiorCutActive,
  setIsUnmatchedQualityExpanded,
  setIsVibrantColorActive,
} from "@/store/slices/commonSlice";
import { LinkButton } from "@/components/button";
import { useEffect, useRef, useState } from "react";
import LabgrownCard from "@/components/labgrownCard";
import { carouselImages } from "../diamond-jewelry/page";
import HeadingTitle from "@/components/HeadingTitle";
import CustomImage from "@/components/customImage";
const whyChooseLabGrownDiamonds = [
  {
    videoSrc: "/videos/ethical-sustainable.mov",
    title: "Eco-Friendly & Sustainable",
    description:
      "Lab-grown diamonds reduce environmental impact and offer an ethical, conflict-free alternative.",
  },
  {
    videoSrc: "/videos/unmatched-quality.mov",
    title: "Exceptional Value",
    description:
      "Enjoy stunning brilliance at a more affordable price than mined diamonds.",
  },
  {
    videoSrc: "/videos/exceptional-value.mov",
    title: "Identical Beauty & Quality",
    description:
      "Lab-grown diamonds have the same sparkle, clarity, and durability as natural diamonds.",
  },
];
const shapeData = [
  {
    name: "Brilliant Round",
    bgColor: "bg-[#6066EE]",
    key: "roundBrilliant",
    images: [brilliant, brilliant, brilliant],
    titleAttr: "Diamond",
    description:
      "The brilliant round diamond is known for its unmatched sparkle and timeless appeal. With 58 expertly cut facets, it maximizes light reflection, offering exceptional brilliance and fire.",
  },
  {
    name: "Princess-Cut",
    bgColor: "bg-[#E0E055]",
    key: "princess",
    images: [princess, princess, princess],
    titleAttr: "Diamond",
    description:
      "The princess cut features a square shape and sharp angles, delivering contemporary elegance. Its brilliant-cut facets enhance sparkle, making it a popular choice for engagement rings.",
  },
  {
    name: "Emerald-Cut",
    bgColor: "bg-[#8DDD8D]",
    key: "emerald",
    images: [emerald, emerald, emerald],
    titleAttr: "Diamond",
    description:
      "With its long, sleek lines and step-cut facets, the emerald-cut diamond exudes vintage charm. This shape highlights clarity, offering a unique, understated sparkle.",
  },
  {
    name: "Asscher-Cut",
    bgColor: "bg-[#F0B1DD]",
    key: "asscher",
    images: [asscher, asscher, asscher],
    titleAttr:"Diamond",
    description:
      "The Asscher cut, known for its geometric precision and art-deco appeal, boasts step-cut facets that create a mesmerizing hall-of-mirrors effect. It’s perfect for a bold, classic look.",
  },
];
export default function LabgrownDiamond() {
  const dispatch = useDispatch();
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  const {
    isEthicalExpanded,
    isUnmatchedQualityExpanded,
    isExceptionalValueExpanded,
    isVibrantColorActive,
    isSuperiorCutActive,
    isExceptionalClarityActive,
    isBrilliantCutActive,
    activeShape,
  } = useSelector(({ common }) => common);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setAnimate(true);
          }, 500);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <Hero isLabgrownDiamondPage={true} />

      {/* Mobile Screen */}
      <section className="md:hidden container pt-10">
        <h3 className="text-3xl mb-6 font-belleza text-center text-white">
          Why Choose Lab-Grown Diamonds?
        </h3>
        <div className="grid grid-cols-1 gap-6">
          {whyChooseLabGrownDiamonds.map((item, i) => {
            return (
              <div key={`why-choose-${i}`} className="relative">
                <video
                  muted
                  preload="none"
                  aria-label="Video player"
                  playsInline
                  className={`h-[300px] object-cover rounded-xl`}
                  autoPlay
                  loop
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                >
                  <source src={item.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-1 flex flex-col justify-between text-white p-2">
                  <h3 className=" text-lg ">{item.title}</h3>
                  <p className="font-medium">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* Tablet to Desktop */}
      <section className="hidden md:block md:pt-14 xl:pt-24 2xl:pt-36 relative">
        <CustomImage
          srcAttr={bgShape1}
          titleAttr=""
          altAttr=""
          className="absolute top-0 left-0 w-[300px]"
        />
        <h3 className="text-4xl 2xl:text-5xl font-belleza text-center text-white">
          Why Choose Lab-Grown Diamonds?
        </h3>
        <div className="flex justify-center w-full">
          <div className="w-[60%] flex flex-col items-center justify-center my-20">
            <div className="w-1/2 flex">
              <div className="w-1/2"></div>
              <div className="w-1/2 flex justify-center">
                {" "}
                <div className="rounded-full relative circle-border-wrapper ">
                  <div className="bg-[#060504]  rounded-full w-[300px] h-[300px]"></div>

                  <div
                    onMouseEnter={() => dispatch(setIsEthicalExpanded(true))}
                    onMouseLeave={() => dispatch(setIsEthicalExpanded(false))}
                    className={`group  !w-[320px] 2xl:!w-[380px] h-14 2xl:h-16 rounded-[27px] 2xl:rounded-[30px] p-1 2xl:p-2 pe-3 absolute top-10 -left-1/2 cursor-pointer transition-all duration-700 ease-in-out hover:rounded-3xl ${
                      isEthicalExpanded
                        ? "hover:h-80 2xl:hover:h-96  z-40"
                        : "z-30"
                    }  overflow-hidden`}
                  >
                    <video
                      muted
                      preload="none"
                      aria-label="Video player"
                      playsInline
                      className={`absolute inset-0 w-full h-full object-cover opacity-0 ${
                        isEthicalExpanded ? "group-hover:opacity-100 " : ""
                      } transition-opacity duration-500`}
                      autoPlay
                      loop
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    >
                      <source
                        src="/videos/ethical-sustainable.mov"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>

                    <div
                      className={`absolute inset-0 bg-[#E0E055] transition-opacity duration-500  ${
                        isEthicalExpanded ? "group-hover:opacity-0" : ""
                      } `}
                    ></div>

                    <div className="relative flex  items-center gap-2 z-10">
                      <div
                        onClick={() => dispatch(setIsEthicalExpanded(false))}
                        className={`w-12 h-12 bg-[#1A1A1A] rounded-full flex items-center justify-center transition-all duration-700 ${
                          isEthicalExpanded
                            ? "group-hover:translate-x-[260px] 2xl:group-hover:translate-x-[310px]"
                            : ""
                        } `}
                      >
                        <GoArrowRight
                          className={`text-white text-2xl ${
                            isEthicalExpanded ? "group-hover:hidden" : ""
                          } `}
                        />
                        <GoX
                          className={`hidden text-white text-2xl ${
                            isEthicalExpanded ? "group-hover:block " : ""
                          }`}
                        />
                      </div>
                      <h3
                        className={`text-xl 2xl:text-2xl transition-all duration-300 ${
                          isEthicalExpanded
                            ? "group-hover:-translate-x-10 2xl:group-hover:-translate-x-12"
                            : ""
                        }  text-[#1A1A1A]`}
                      >
                        Eco-Friendly & Sustainable
                      </h3>
                    </div>
                    <div className=" absolute inset-0 flex items-end p-4">
                      <p
                        className={`hidden ${
                          isEthicalExpanded ? "group-hover:block" : ""
                        } relative text-lg  text-[#1A1A1A]  font-medium z-10 2xl:text-xl mb-10`}
                      >
                        Lab-grown diamonds reduce environmental impact and offer
                        an ethical, conflict-free alternative.
                      </p>
                    </div>
                  </div>

                  <div
                    onMouseEnter={() =>
                      dispatch(setIsUnmatchedQualityExpanded(true))
                    }
                    onMouseLeave={() =>
                      dispatch(setIsUnmatchedQualityExpanded(false))
                    }
                    className={`group w-[320px] 2xl:w-[380px] h-14 2xl:h-16 rounded-[27px] 2xl:rounded-[30px] p-1 2xl:p-2 pe-3 absolute bottom-0 -right-1/2 cursor-pointer transition-all duration-700 ease-in-out hover:rounded-3xl ${
                      isUnmatchedQualityExpanded
                        ? "hover:h-80 2xl:hover:h-96  z-40"
                        : "z-30"
                    }  overflow-hidden`}
                  >
                    <video
                      muted
                      preload="none"
                      aria-label="Video player"
                      playsInline
                      className={`absolute inset-0 w-full h-full object-cover opacity-0 ${
                        isUnmatchedQualityExpanded
                          ? "group-hover:opacity-100 "
                          : ""
                      } transition-opacity duration-500`}
                      autoPlay
                      loop
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    >
                      <source
                        src="/videos/unmatched-quality.mov"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>

                    <div
                      className={`absolute inset-0 bg-[#8DDD8D] transition-opacity duration-500 ${
                        isUnmatchedQualityExpanded
                          ? "group-hover:opacity-0"
                          : ""
                      } `}
                    ></div>

                    <div className="relative flex  items-center  gap-2 z-10">
                      <div
                        onClick={() =>
                          dispatch(setIsUnmatchedQualityExpanded(false))
                        }
                        className={`w-12 h-12 bg-[#1A1A1A] rounded-full flex items-center justify-center transition-all duration-700 ${
                          isUnmatchedQualityExpanded
                            ? "group-hover:translate-x-[260px] 2xl:group-hover:translate-x-[310px]"
                            : ""
                        } `}
                      >
                        <GoArrowRight
                          className={`text-white text-2xl ${
                            isUnmatchedQualityExpanded
                              ? "group-hover:hidden"
                              : ""
                          } `}
                        />
                        <GoX
                          className={`hidden text-white text-2xl ${
                            isUnmatchedQualityExpanded
                              ? "group-hover:block "
                              : ""
                          }`}
                        />
                      </div>
                      <h3
                        className={`text-xl 2xl:text-2xl transition-all duration-300 ${
                          isUnmatchedQualityExpanded
                            ? "group-hover:-translate-x-10 2xl:group-hover:-translate-x-12 group-hover:text-white"
                            : ""
                        }  text-[#1A1A1A]`}
                      >
                        Exceptional Value
                      </h3>
                    </div>
                    <div className=" absolute inset-0 flex items-end p-4">
                      <p
                        className={`hidden ${
                          isUnmatchedQualityExpanded ? "group-hover:block" : ""
                        } relative text-lg  text-white  font-medium z-10 2xl:text-xl mb-10`}
                      >
                        Enjoy stunning brilliance at a more affordable price
                        than mined diamonds.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 flex">
              <div className="w-1/2 flex justify-center">
                <div className="rounded-full relative circle-border-wrapper rotate-[180deg]">
                  <div className="bg-[#060504]  rounded-full w-[300px] h-[300px]"></div>
                  <div
                    onMouseEnter={() =>
                      dispatch(setIsExceptionalValueExpanded(true))
                    }
                    onMouseLeave={() =>
                      dispatch(setIsExceptionalValueExpanded(false))
                    }
                    className={`group w-[320px] 2xl:w-[380px] h-14 2xl:h-16 rounded-[27px] 2xl:rounded-[30px] p-1 2xl:p-2 pe-3 rotate-180 absolute bottom-2 -right-1/2 cursor-pointer transition-all duration-700 ease-in-out hover:rounded-3xl ${
                      isExceptionalValueExpanded
                        ? "hover:h-80 2xl:hover:h-96 z-40"
                        : "z-30"
                    }  overflow-hidden`}
                  >
                    <video
                      muted
                      preload="none"
                      aria-label="Video player"
                      playsInline
                      className={`absolute inset-0 w-full h-full object-cover opacity-0 ${
                        isExceptionalValueExpanded
                          ? "group-hover:opacity-100 "
                          : ""
                      } transition-opacity duration-500`}
                      autoPlay
                      loop
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    >
                      <source
                        src="/videos/exceptional-value.mov"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>

                    <div
                      className={`absolute inset-0 bg-[#6066EE] transition-opacity duration-500 ${
                        isExceptionalValueExpanded
                          ? "group-hover:opacity-0"
                          : ""
                      } `}
                    ></div>

                    <div className="relative flex  items-center  gap-2 z-10">
                      <div
                        onClick={() =>
                          dispatch(setIsExceptionalValueExpanded(false))
                        }
                        className={`w-12 h-12 bg-[#1A1A1A] rounded-full flex items-center justify-center transition-all duration-700 ${
                          isExceptionalValueExpanded
                            ? "group-hover:translate-x-[260px] 2xl:group-hover:translate-x-[310px]"
                            : ""
                        } `}
                      >
                        <GoArrowRight
                          className={`text-white text-2xl ${
                            isExceptionalValueExpanded
                              ? "group-hover:hidden"
                              : ""
                          } `}
                        />
                        <GoX
                          className={`hidden text-white text-2xl ${
                            isExceptionalValueExpanded
                              ? "group-hover:block "
                              : ""
                          }`}
                        />
                      </div>
                      <h3
                        className={`text-xl 2xl:text-2xl transition-all duration-300 ${
                          isExceptionalValueExpanded
                            ? "group-hover:-translate-x-10 2xl:group-hover:-translate-x-12 group-hover:text-white"
                            : ""
                        }  text-[#1A1A1A]`}
                      >
                        Identical Beauty & Quality
                      </h3>
                    </div>
                    <div className=" absolute inset-0 flex items-end p-4">
                      <p
                        className={`hidden ${
                          isExceptionalValueExpanded ? "group-hover:block" : ""
                        } relative text-lg  text-white  font-medium z-10 2xl:text-xl mb-10`}
                      >
                        Lab-grown diamonds have the same sparkle, clarity, and
                        durability as natural diamonds.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/2"></div>
            </div>
          </div>
        </div>
        <CustomImage
          srcAttr={bgShape2}
          titleAttr=""
          altAttr=""
          className="absolute bottom-0 right-0 w-[300px]"
        />
      </section>

      <section className="py-36 md:py-44 xl:py-24 2xl:py-36 container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-36 md:gap-40 lg:gap-0 place-items-center">
          {/* Dynamic Content Section */}
          <div className="text-white leading-relaxed">
            {activeShape ? (
              shapeData.map(
                ({ key, name, description }) =>
                  activeShape === key && (
                    <div key={key}>
                      <h3 className="text-5xl font-belleza">{name}</h3>
                      <p className="text-base  lg:text-lg mt-4  w-[80%]">
                        {description}
                      </p>
                    </div>
                  )
              )
            ) : (
              <div>
                <h3 className="text-5xl 2xl:text-[4rem] font-belleza">
                  Lab-Grown Diamonds at Tele Gold Jewelers
                </h3>
                <p className="text-base lg:text-lg mt-4 w-[80%]">
                  Experience brilliance redefined with lab-grown diamonds at
                  Tele Gold Jewelers. Ethically produced and eco-friendly, these
                  diamonds offer stunning beauty, sparkle, and value. Choose
                  sustainable luxury without compromising on style or quality.
                </p>
              </div>
            )}
          </div>

          {/* Diamond Shapes Section */}
          <div className="grid grid-cols-8 md:grid-cols-7 lg:grid-cols-5 2xl:grid-cols-6  gap-[4.8rem] lg:gap-0   z-40">
            {shapeData.map(
              ({ name, bgColor, key, images, titleAttr, altAttr }) => {
                const isActive = activeShape === key;

                return (
                  <div
                    key={key}
                    className={`${bgColor} rounded-full flex items-center gap-10 p-1.5 lg:p-2 w-[280px] md:w-[350px] 2xl:w-[400px] -rotate-[75.92deg] overflow-hidden relative transition-all duration-500`}
                  >
                    <div
                      onClick={() =>
                        dispatch(setActiveShape(isActive ? null : key))
                      }
                      className={`w-12 h-12 md:w-14 md:h-14 2xl:w-16 2xl:h-16 bg-[#1A1A1A] rounded-full flex items-center justify-center rotate-[75.92deg] cursor-pointer transition-all duration-1000 ${
                        isActive
                          ? "!-rotate-[105deg] translate-x-[220px] lg:translate-x-[280px] 2xl:translate-x-[320px]"
                          : ""
                      }`}
                    >
                      <CustomImage
                        titleAttr={titleAttr}
                        altAttr={altAttr}
                        srcAttr={rotateArrow}
                      />
                    </div>

                    <h3
                      className={`font-belleza text-[#070705] text-xl lg:text-2xl transition-all duration-1000 ${
                        isActive
                          ? "translate-x-[250px] 2xl:translate-x-[290px]"
                          : ""
                      }`}
                    >
                      {name}
                    </h3>

                    <div
                      className={`flex gap-7 absolute -translate-x-[25rem] transition-all duration-1000 ${
                        isActive ? "translate-x-[0.5rem]" : ""
                      }`}
                    >
                      {images.map((src, idx) => (
                        <CustomImage
                          key={idx}
                          srcAttr={src}
                          titleAttr=""
                          altAttr=""
                          className="w-[40px] lg:w-[60px] 2xl:w-[70px]  rotate-[75.92deg]"
                        />
                      ))}
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>

      <section className="pt-10 md:pt-14 xl:pt-24 2xl:pt-36 relative">
        {" "}
        <CustomImage
          srcAttr={bgShape1}
          titleAttr=""
          altAttr=""
          className="absolute -bottom-1/2 left-0 w-[300px] z-30"
        />
        <div className="relative gradient-border-wrapper  rounded-3xl">
          <div className="bg-[#060504] rounded-3xl py-10 lg:py-20">
            <div className="container text-white  leading-relaxed grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              <div>
                <h3 className="text-5xl md:text-6xl lg:text-8xl  2xl:text-9xl font-belleza">
                  Experience the Future of Luxury
                </h3>
              </div>
              <div className="mt-2 2xl:mt-10">
                <p className="text-base lg:text-lg 2xl:text-2xl">
                  Experience the future of luxury with timeless elegance and
                  cutting-edge craftsmanship. From lab-grown diamonds to
                  innovative designs, redefine sophistication and embrace
                  brilliance that blends tradition with modernity. Luxury has
                  never looked this innovative!
                </p>
                <LinkButton
                  className="w-fit bg-white/20 rounded-full mt-12 lg:h-[2.8rem] 2xl:h-[3rem]"
                  href="/contact-us"
                >
                  Contact Now
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
        <CustomImage
          srcAttr={bgShape2}
          titleAttr=""
          altAttr=""
          className="absolute -top-1/2 right-0 w-[300px]"
        />
      </section>
      <section ref={sectionRef} className="py-10 md:py-14 xl:py-24 2xl:py-36 ">
        <div className="container grid grid-cols-1 lg:grid-cols-2">
          <div className="text-[#E2E2E2]">
            <h3 className="text-5xl md:text-6xl lg:text-7xl  2xl:text-8xl font-belleza">
              Our Commitment to Quality
            </h3>
            <p className="text-base lg:text-lg 2xl:text-xl mt-4 lg:w-[70%]">
              Our commitment to quality ensures that every piece we offer meets
              the highest standards of craftsmanship and excellence. From
              sourcing premium materials to meticulous attention to detail, we
              deliver unmatched beauty, authenticity, and lasting value.
            </p>
          </div>
        </div>
        <div className="relative h-screen mt-16 2xl:mt-20">
          <div className="flex justify-center relative">
            <div className="hidden lg:block absolute -top-[45%] 2xl:-top-[35%] left-[48.8%] -translate-x-1/2">
              <div className="relative">
                <CustomImage
                  srcAttr={diamondBgEarth}
                  titleAttr=""
                  altAttr=""
                  className="w-[380px] 2xl:w-[450px]"
                />
                <CustomImage
                  srcAttr={diamond}
                  titleAttr=""
                  altAttr=""
                  className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[42%] 2xl:-translate-y-[44%]"
                />
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              viewBox="0 0 1308 909"
              fill="none"
              className="hidden lg:block w-[70%]"
            >
              <path
                d="M627 -1.5V107.5C495.5 219.667 186.2 430.2 1 375"
                stroke="currentColor"
                strokeWidth="0.4"
                className={`path ${animate ? "animate-path" : ""}`}
              />
              <path
                d="M627 -1.5V107.5C735.5 175.5 744 440 908.5 567.5"
                stroke="currentColor"
                strokeWidth="0.4"
                className={`path ${animate ? "animate-path" : ""}`}
              ></path>
              <path
                d="M626.999 -1.5V107.5C862 186 1423.5 657.5 1285.5 908"
                stroke="currentColor"
                strokeWidth="0.4"
                className={`path ${animate ? "animate-path" : ""}`}
              ></path>
              <path
                d="M627 -1.5V107.5C495.5 219.667 508.5 854.5 212 854.5"
                stroke="currentColor"
                strokeWidth="0.4"
                className={`path ${animate ? "animate-path" : ""}`}
              ></path>
            </svg>
          </div>
          <div className="absolute top-0 left-[-3%] md:top-[5%] md:left-[15%] lg:!top-[29%] lg:!left-[4.5%] ">
            <CustomImage
              srcAttr={bgEarth}
              titleAttr=""
              altAttr=""
              className="w-32 lg:w-44 2xl:w-[250px]"
            />
            <CustomImage
              titleAttr="Diamond"
              srcAttr={vibrantColor}
              onMouseEnter={() => dispatch(setIsVibrantColorActive(true))}
              onMouseLeave={() => dispatch(setIsVibrantColorActive(false))}
              className="absolute inset-0  m-auto w-[100px] lg:w-[150px] 2xl:w-[200px] cursor-pointer"
            />
            <div
              className={`absolute left-[7.5rem] lg:left-[10.5rem] 2xl:left-[15rem] -top-20 opacity-0 ${
                isVibrantColorActive
                  ? "opacity-100 transition-opacity z-40"
                  : ""
              } transition-opacity duration-300`}
            >
              <LabgrownCard
                index={"1"}
                videoSrc="/videos/unmatched-quality.mov"
                title="Expert Craftsmanship"
                description="Designed with precision for timeless beauty and durability."
              />
            </div>
          </div>

          <div className="absolute top-[113px] right-[3%] md:top-[10%] md:right-[5%] lg:inset-[82%_auto_auto_14.5%]">
            <CustomImage
              srcAttr={bgEarth}
              titleAttr=""
              altAttr=""
              className="w-32 lg:w-44 2xl:w-[250px]"
            />
            <CustomImage
              srcAttr={superiorCut}
              titleAttr="Diamond"
              onMouseEnter={() => dispatch(setIsSuperiorCutActive(true))}
              onMouseLeave={() => dispatch(setIsSuperiorCutActive(false))}
              className="absolute inset-0  m-auto w-[100px] lg:w-[150px] 2xl:w-[200px] cursor-pointer"
            />
            <div
              className={`absolute right-[6rem] lg:left-[10.5rem] 2xl:left-[13rem] -top-10 opacity-0 ${
                isSuperiorCutActive ? "opacity-100 transition-opacity z-40" : ""
              } transition-opacity duration-300`}
            >
              <LabgrownCard
                index={"3"}
                imageSrc={superiorCutPrecision}
                altAttr=""
                titleAttr="Diamond"
                title="Genuine Materials"
                description="Authentic and high-quality materials you can trust."
              />
            </div>
          </div>

          <div className="absolute top-[370px] left-[-5%] md:top-[50%] md:left-[12%] lg:inset-[59%_27%_auto_auto]">
            <CustomImage
              srcAttr={bgEarth}
              titleAttr=""
              altAttr=""
              className="w-32 lg:w-44 2xl:w-[250px]"
            />
            <CustomImage
              srcAttr={exceptionalClarity}
              titleAttr="Diamond"
              onMouseEnter={() => dispatch(setIsExceptionalClarityActive(true))}
              onMouseLeave={() =>
                dispatch(setIsExceptionalClarityActive(false))
              }
              className="absolute inset-0  m-auto w-[100px] lg:w-[150px] 2xl:w-[200px] cursor-pointer"
            />
            <div
              className={`absolute left-[7.5rem] lg:left-[10.5rem] 2xl:-left-[115%] top-0 opacity-0 ${
                isExceptionalClarityActive
                  ? "opacity-100 transition-opacity z-40"
                  : ""
              } transition-opacity duration-300`}
            >
              <LabgrownCard
                index={"2"}
                videoSrc={"/videos/exceptional-value.mov"}
                title="Quality &nbsp; &nbsp; Checked"
                description="Thorough inspection to ensure top standards."
              />
            </div>
          </div>

          <div className="absolute top-[508px] right-[1.5rem] md:top-[65%] md:right-[10%]  lg:inset-[74%_9%_auto_auto]   2xl:inset-[74%_11%_auto_auto] ">
            <CustomImage
              srcAttr={bgEarth}
              titleAttr=""
              altAttr=""
              className="w-32 lg:w-44 2xl:w-[250px]"
            />
            <CustomImage
              titleAttr="Diamond"
              srcAttr={brilliantCutDiamond}
              onMouseEnter={() => dispatch(setIsBrilliantCutActive(true))}
              onMouseLeave={() => dispatch(setIsBrilliantCutActive(false))}
              className="absolute inset-0  m-auto w-[100px] lg:w-[150px] 2xl:w-[200px] cursor-pointer"
            />
            <div
              className={`absolute right-[6rem] lg:right-[10.5rem] 2xl:right-[13rem]  top-0 opacity-0 ${
                isBrilliantCutActive
                  ? "opacity-100 transition-opacity z-40"
                  : "-z-10"
              } transition-opacity duration-300`}
            >
              <LabgrownCard
                index={"3"}
                imageSrc={brilliantCut}
                title="Customer Focused"
                titleAttr="Diamond Ring | Diamond Jewelry"
                description="Committed to delivering excellence and satisfaction."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 xl:py-16 2xl:py-36">
        <HeadingTitle
          sectionName="OUR DIAMOND JEWELRY"
          headingClassName="text-white uppercase"
        />
        <div className="pt-4 md:pt-8 lg:pt-12 2xl:pt-16">
          <DiamondJewelrySwipper images={carouselImages} />
        </div>
      </section>
    </>
  );
}
