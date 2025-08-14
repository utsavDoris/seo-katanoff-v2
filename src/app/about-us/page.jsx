"use client";
import Hero from "@/components/Hero";
import heroAboutUs from "@/assets/images/hero-aboutus.webp";
import HeadingTitle from "@/components/HeadingTitle";
import Link from "next/link";
import {
  AnimatedCircleText,
  AnimatedSection,
  Timeline,
  VideoSection,
} from "@/components/dynamiComponents";
import aboutUsThumbnail from "@/assets/images/about-us/about-us-thumbnail.webp";
import aboutUs1 from "@/assets/images/about-us/about-us-1.webp";
import aboutUs2 from "@/assets/images/about-us/about-us-2.webp";
import aboutUs3 from "@/assets/images/about-us/about-us-3.webp";
import aboutUs4 from "@/assets/images/about-us/about-us-4.webp";
import KeepInTouch from "@/components/KeepInTouch";
import rightArrowGrey from "@/assets/images/icons/right-arrow-grey.svg";
import purity from "@/assets/images/icons/grey-purity.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link as LinkIcon } from "lucide-react";
import CustomImage from "@/components/customImage";
gsap.registerPlugin(ScrollTrigger);

const animatedContent = [
  {
    img: aboutUs1,
    altAttr: " ",
    titleAttr: "",
    description: [
      "At TeleGold, we treat every customer with transparency and respect. Whether you're buying or selling, our promise is simple: honest evaluations, fair market prices, and unmatched service. With decades of experience, we’re committed to making your experience smooth, rewarding, and built on trust from start to finish.",
    ],

    direction: "LTF",
  },
];

const timelineItems = [
  {
    no: 1,
    title: "Trusted Experience",
    description:
    "With over 50 years in the industry, our expertise ensures confidence in every transaction."
  },
  {
    no: 2,
    title: "Honesty & Transparency",
    description:
      "We handle every appraisal and sale with integrity, ensuring fair prices and clear communication throughout the process.",
  },
  {
    no: 3,
    title: "Exceptional Service",
    description:
      "Our personalized, customer-focused approach guarantees a seamless and rewarding experience.",
  },
  {
    no: 4,
    title: "Maximum Value",
    description:
      "We strive to provide the best value, helping you get the most for your jewelry, coins, and collectibles.",
  },
];

export default function AboutUs() {
  return (
    <>
      <section>
        <Hero
          title="Crafting Connections Through Timeless Treasures"
          imageSrc={heroAboutUs}
          textAlignment="center"
          titleAttr="Silver Coins | Silver Bars"
          altAttr="Tele Gold Jewelers | Diamond Jewelry, Coin, Gold, Silver, Platinum"
        />
      </section>

      <section className="relative mt-10 md:mt-14 xl:mt-16 2xl:mt-36">
        <div className="flex items-start justify-center">
          <HeadingTitle
            sectionName="Timeless Excellence in Coins and Jewelry"
            description="Since the 1970s, TeleGold Jewelers has been a trusted destination for buying and selling coins, gold, silver, estate jewelry, and lab-grown diamond pieces. With over 50 years of experience, we’re known for our honest service, fair pricing, and deep industry knowledge. Whether you're a seasoned collector or exploring your first sale, we’re here to guide you with care and professionalism. Our commitment to quality and trust has made us a lasting name in the community and beyond."
          />
        </div>
        <div className="2xl:pt-20 lg:pt-14 md:pt-8 pt-4">
          <VideoSection
            src="/video/coinVideo.mp4"
            videoClassName="w-full h-[85vh]"
            thumbnail={aboutUsThumbnail}
            titleAttr=""
            altAttr=""
          />
        </div>
      </section>

      <section className="mt-10 md:mt-14 xl:mt-16 2xl:mt-36">
        <HeadingTitle sectionName="Our Promise: Honesty, Value, and Exceptional Service" />
        <div className="container  pt-4 md:pt-8 lg:pt-14 2xl:pt-20 ">
          <AnimatedSection {...animatedContent[0]} />
        </div>
      </section>

      <section className="mt-10 md:mt-14 xl:mt-16 2xl:mt-36">
        <div className="lg:hidden flex justify-center text-center md:pt-8 pt-4 px-2">
          <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-belleza leading-normal">
            Why Choose Tele Gold Jewelers
          </h2>
        </div>
        <Timeline items={timelineItems} />
      </section>

      <section className="bg-[#FAFAF8] pt-10 md:pt-14 xl:pt-16 2xl:pt-36 pb-20 md:pb-28 xl:pb-32 2xl:pb-56">
        <div className={` relative `}>
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="absolute xl:block hidden top-[-55%] 2xl:top-[-50%] left-[6%] ">
              <CustomImage
                srcAttr={aboutUs4}
                titleAttr="Watch | Rolex | Citizen"
                className="2xl:w-full w-[70%]  h-full"
              />
            </div>
            <div className="relative lg:bottom-[-30%] flex justify-center">
              <CustomImage
                srcAttr={aboutUs2}
                titleAttr="Diamond Ring | Diamond Jewelry"
                className="w-[20%] lg:h-auto lg:w-[30%]"
              />
            </div>

            <div
              className={`text-center justify-center flex flex-col lg:w-[130%] lg:translate-x-[-20%] `}
            >
              <h2 className="text-4xl lg:text-5xl font-belleza mb-4 uppercase">
                Our Mission
              </h2>
              <p className="text-md md:text-lg lg:text-lg 2xl:text-[24px] leading-relaxed">
                Our mission is to make every transaction simple, secure, and rewarding.
                Whether you’re selling rare coins, gold, silver, estate jewelry, or lab-grown diamonds, 
                we offer honest evaluations, fair pricing, and expert guidance. 
                We strive to build lasting relationships through trust, transparency, 
                and personalized service—ensuring every client feels confident, valued, and supported from start to finish.
              </p>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <CustomImage
                srcAttr={aboutUs3}
                titleAttr="Coins"
                className="w-full lg:w-[80%]"
              />
            </div>
            <div className="hidden lg:block absolute lg:bottom-[-56%] xl:bottom-[-51%] 2xl:bottom-[-20%] left-[65%] lg:left-[56%] text-primary">
              <div className="flex items-center gap-6">
                <Link  href="/contact-us">
                <AnimatedCircleText
                  text="Shop Now • Shop Now • Shop Now • Shop Now • "
                  textColor="black"
                  arrowImage={rightArrowGrey}
                  purityImage={purity}
                />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10 md:pt-14 xl:pt-16 2xl:pt-36">
        <KeepInTouch />
      </section>
    </>
  );
}
