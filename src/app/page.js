import silverLeafPendant from "@/assets/images/home/silver-leaf-pendant.webp";
import chain from "@/assets/images/home/chain.webp";
import classic from "@/assets/images/home/classic.webp";
import cuban from "@/assets/images/home/cuban.webp";
import butterflyNecklace from "@/assets/images/home/butterfly-necklace.webp";
import diamondChainPendant from "@/assets/images/home/diamond-chain-pendant.webp";
import doubleLoopNecklace from "@/assets/images/home/double-loop-necklace.webp";
import {
  AnimatedCircleText,
  ScrollImageSection,
} from "@/components/dynamiComponents";
import { LinkButton } from "@/components/button";
import shopByShape from "@/assets/images/home/shop-by-shape.webp";
import round from "@/assets/images/home/round.webp";
import emerald from "@/assets/images/home/emerald.webp";
import cushion from "@/assets/images/home/cushion.webp";
import princess from "@/assets/images/home/princess.webp";
import purity from "@/assets/images/icons/purity.svg";
import rightArrow from "@/assets/images/icons/right-arrow.svg";
import oval from "@/assets/images/home/oval.webp";
import marquise from "@/assets/images/home/marquise.webp";
import shopTheLookBg from "@/assets/images/home/shop-the-look-bg.webp";
import pendentCollection from "@/assets/images/home/pendent-collection.webp";
import jewelryBoxDiamondRing from "@/assets/images/home/jewelry-box-diamond-ring.webp";
import necklaceCloseup from "@/assets/images/home/necklace-closeup.webp";
import handWithRing from "@/assets/images/home/hand-with-ring.webp";
import diamondNecklaceWoman from "@/assets/images/home/diamond-necklace-woman.webp";
import HeadingTitle from "@/components/HeadingTitle";
import Hero from "@/components/Hero";
import Link from "next/link";
import CustomImage from "@/components/customImage";

const diamondShapes = [
  {
    title: "Round",
    shapeImg: round,
    altAttr: "Tele Gold Jewelers | Diamond Jewelry, Coin, Gold, Silver, Platinum",
    titleAttr: "Diamond",
  },
  {
    title: "Emerald",
    shapeImg: emerald,
    altAttr: "Tele Gold Jewelers | Diamond Jewelry, Coin, Gold, Silver, Platinum",
    titleAttr: "Diamond",
  },
  {
    title: "Cushion",
    shapeImg: cushion,
    altAttr: "Tele Gold Jewelers | Diamond Jewelry, Coin, Gold, Silver, Platinum",
    titleAttr: "Diamond",
  },
  {
    title: "Princess",
    shapeImg: princess,
    altAttr: "Tele Gold Jewelers | Diamond Jewelry, Coin, Gold, Silver, Platinum",
    titleAttr: "Diamond",
  },
  {
    title: "Oval",
    shapeImg: oval,
    altAttr: "Tele Gold Jewelers | Diamond Jewelry, Coin, Gold, Silver, Platinum",
    titleAttr: "Diamond",
  },
  {
    title: "Marquise",
    shapeImg: marquise,
    altAttr: "Tele Gold Jewelers | Diamond Jewelry, Coin, Gold, Silver, Platinum",
    titleAttr: "Diamond",
  },
];

const collectionCategory = [
  {
    title: "Classic",
    image: classic,
    altAttr: "",
    titleAttr: "",
  },
  {
    title: "Cuban",
    image: cuban,
    altAttr: "",
    titleAttr: "",
  },
  {
    title: "Chain",
    image: chain,
    altAttr: "",
    titleAttr: "",
  },
];
export default function Home() {
  return (
    <>
      <Hero
        videoSrc={"/videos/homeHero.mp4"}
        title={
          "Buy & Sell Coins, Gold, Silver, Estate Jewelry & Lab Diamond Jewelry"
        }
        description={
          "Specializing in rare coins, we also buy and sell gold, silver, estate jewelry, and lab-grown diamond jewelry. Count on us for honest service, top value, and expert knowledge."
        }
        isHomePage={true}
      />
      <section className="container pt-10 md:pt-14 xl:pt-24 2xl:pt-36 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center">
          <div className="leading-relaxed text-black">
            <h3 className="text-4xl md:text-5xl  lg:text-6xl 2xl:text-[80px] font-belleza">
              Welcome to TeleGold Jewelry & Coin
            </h3>
            <div className=" lg:w-[90%] 2xl:w-[80%]">
              <p className="md:text-md lg:text-lg lg:text-start 2xl:text-[24px] my-10 lg:my-20">
                Explore rare and valuable coins, fine gold and silver, elegant
                estate jewelry, and sparkling lab-grown diamond pieces — all
                chosen for their lasting beauty and value.
              </p>
            </div>
            <LinkButton
              href="#"
              className="!w-fit !py-5 lg:!py-6 lg:!px-8 !rounded-lg !bg-black text-white hover:!bg-white hover:!text-black hover:border-basegrey"
              arrow={true}
            >
              Learn More
            </LinkButton>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div className="grid grid-rows-2 gap-6 md:gap-16 place-items-center ">
              <div>
                <CustomImage
                  titleAttr="Diamond Ring | Diamond Jewelry"
                  srcAttr={silverLeafPendant}
                  className="rounded-lg"
                />
              </div>
              <div>
                <CustomImage
                  titleAttr="Diamond Ring | Diamond Jewelry"
                  srcAttr={diamondChainPendant}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="grid grid-rows-2 gap-6 place-items-center ">
              <div>
                <CustomImage
                  titleAttr="Diamond Ring | Diamond Jewelry"
                  srcAttr={butterflyNecklace}
                  className="rounded-lg"
                />
              </div>
              <div>
                <CustomImage
                  titleAttr="Diamond Ring | Diamond Jewelry"
                  srcAttr={doubleLoopNecklace}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container pt-10 md:pt-14 xl:pt-24 2xl:pt-36">
        <div className="text-center">
          <CustomImage
            srcAttr={shopByShape}
            className="inline-block w-64 2xl:w-80"
            altAttr=""
            titleAttr=""
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 my-10 gap-5 lg:gap-10">
          {diamondShapes.map((shape, index) => {
            return (
              <div
                key={index}
                className="bg-white px-4 py-4 2xl:py-6 text-center rounded-lg"
              >
                <CustomImage
                  altAttr={shape?.altAttr}
                  titleAttr={shape?.titleAttr}
                  className="inline-block"
                  srcAttr={shape?.shapeImg}
                />
                <h3 className=" font-belleza italic text-xl">{shape.title}</h3>
              </div>
            );
          })}
        </div>
      </section>
      <section className="pt-10 md:pt-14 xl:pt-24 2xl:pt-28">
        <HeadingTitle
          sectionName="Our Expertise"
          description="We specialize in coins, Morgan Coins & silver dollars, and rare collectibles — backed by over 50 years of trusted experience in professional coin collecting."
        />

        <ScrollImageSection />
      </section>
      <section className="container lg:max-w-none pt-10 md:pt-14 xl:pt-24 2xl:pt-36 text-center ">
        <div className="flex flex-col items-center justify-center w-full lg:relative 2xl:h-[70vh]">
          <div className="lg:absolute lg:inset-0 flex  flex-col md:flex-row justify-between gap-6 lg:gap-0">
            <CustomImage
              srcAttr={jewelryBoxDiamondRing}
              titleAttr="Diamond Ring | Diamond Jewelry"
              className="w-screen lg:w-48 lg:h-48 2xl:w-60 2xl:h-60"
            />
            <CustomImage
              srcAttr={necklaceCloseup}
              titleAttr="Gold Jewelry | Diamond Jewelry"
              className="w-screen lg:w-48 lg:h-48 2xl:w-60 2xl:h-60"
            />
          </div>
          <div className="my-6 lg:my-0 lg:w-1/2 z-40 text-primary">
            <h2 className="font-belleza text-2xl lg:text-5xl my-4 uppercase">
              Since 1981, we’ve been a trusted name in buying and selling coins,
              gold, silver, estate jewelry, and lab-grown diamond
              jewelry—offering expert guidance, fair prices, and personalized
              service for every customer.
            </h2>
            <p className="md:text-md lg:text-lg  2xl:text-[24px]">
              We take pride in our deep industry knowledge and commitment to
              integrity. Whether you&apos;re a seasoned collector or first-time
              seller, our goal is to provide a seamless, transparent, and
              rewarding experience every step of the way.
            </p>
            <div className="flex justify-center">
              {" "}
              <LinkButton
                href="/about-us"
                roundedArrow={true}
                className="uppercase font-belleza w-fit mt-4 lg:mt-10 4xl:!h-[3rem]  !bg-transparent hover:!bg-black hover:!text-white  !border-[#383838] "
              >
                KNOW MORE
              </LinkButton>
            </div>
          </div>
          <div className="2xl:px-10 lg:absolute lg:container lg:inset-x-0 lg:bottom-0 flex flex-col md:flex-row justify-between items-center  w-full">
            <CustomImage
              srcAttr={handWithRing}
              titleAttr="Silver Coins | Silver Bars"
              className="w-full md:w-1/2 lg:w-56 lg:h-56 2xl:w-60 2xl:h-60"
            />
            <CustomImage
              srcAttr={diamondNecklaceWoman}
              titleAttr="Diamond Ring | Diamond Jewelry"
              className="w-full md:w-1/2 lg:w-60 lg:h-60 2xl:w-72 2xl:h-72"
            />
          </div>
        </div>
      </section>

      <section className="container pt-10 md:pt-14 xl:pt-24 2xl:pt-36">
        <div className="w-full flex flex-col lg:flex-row justify-between gap-5"></div>
      </section>
      <section className="pt-10 md:pt-14 xl:pt-24 2xl:pt-36 relative ">
        <CustomImage srcAttr={shopTheLookBg} 
        titleAttr="Diamond Ring | Diamond Jewelry" 
        />

        <div className="absolute bottom-[10%] left-[10%]   text-primary">
          <div className="flex items-center gap-6">
            <h3 className="text-5xl font-belleza">Shop the look</h3>

            <Link href="/contact-us">
              <AnimatedCircleText
                text="Shop Now • Shop Now • Shop Now • Shop Now • "
                arrowImage={rightArrow}
                purityImage={purity}
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
