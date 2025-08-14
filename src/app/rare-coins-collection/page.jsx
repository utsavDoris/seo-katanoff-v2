import Hero from "@/components/Hero";
import heroRareCoin from "@/assets/images/what-we-buy/rare-coins/hero-rarecoins.webp";
import coin1 from "@/assets/images/what-we-buy/rare-coins/coins-1.webp";
import coin2 from "@/assets/images/what-we-buy/rare-coins/coins-2.webp";
import coin3 from "@/assets/images/what-we-buy/rare-coins/coins-3.webp";
import coin4 from "@/assets/images/what-we-buy/rare-coins/coins-4.webp";
import coin5 from "@/assets/images/what-we-buy/rare-coins/coins-5.webp";
import coin7 from "@/assets/images/what-we-buy/rare-coins/coins-7.webp";
import coinsBackground from "@/assets/images/what-we-buy/rare-coins/coins-background.webp";
import thumbnail from "@/assets/images/video.webp";
import {
  AnimatedSection,
  FallingCoins,
  TwoImagesAndCenterText,
  VideoSection,
} from "@/components/dynamiComponents";
import HeadingTitle from "@/components/HeadingTitle";
import KeepInTouch from "@/components/KeepInTouch";
import CustomImage from "@/components/customImage";

const benefits = [
  {
    title: "Age & Historical Significance",
    description:
      "Older pieces tied to significant historical periods tend to have higher value.",
  },
  {
    title: "Rarity",
    description:
      "The scarcity of a coin or collectible increases its desirability and market value.",
  },
  {
    title: "Condition",
    description: "Well-preserved items, with minimal wear, hold more value.",
  },
  {
    title: "Metal Content or Material",
    description:
      "For coins, precious metals like gold and silver add substantial worth.",
  },
];
const animatedContent = [
  {
    img: coin7,
    titleAttr: "",
    altAttr: "",
    description: [
      "United States Pattern Pieces are rare, experimental coins crafted as prototypes for potential U.S. currency designs. These unique pieces highlight variations in metals, denominations, and designs.",
      "Highly valued by collectors, they offer a glimpse into the history of American coinage and showcase the artistry and innovation behind early minting experiments.",
    ],

    direction: "RTF",
  },
];

const coins = [
  "1863 Two-Cent Pieces",
  "1836 Gold Dollar",
  "1854 Cent",
  "1856 Half Cent",
  "1866 Lincoln Five-Cent Piece",
  "1868 Cent",
  "1872 Amazonian Quarter",
  "1872 Amazonian Gold $3",
  "1874 Bickford Eagle",
  "1877 Half Union",
  "1879 Quarter Dollar",
  "1879 Dollar",
  "1907 Indian Head Double Eagle",
  "1916 Liberty Walking Half Dollar",
  "1942 Experimental Cent",
];

const half = Math.ceil(coins.length / 2);
const firstColumn = coins.slice(0, half);
const secondColumn = coins.slice(half);

export default function RareCoinsCollection() {
  return (
    <>
      <section>
        <Hero
          title="Explore, Buy, or Sell Rare Coins Today"
          imageSrc={heroRareCoin}
          textAlignment="center"
          titleAttr="Silver Coins | Silver Bars"
          altAttr=""
        />
      </section>

      <section>
        <FallingCoins
          coins={[coin1, coin2, coin3]}
          marqueeText="WE BUY & SELL • RARE COINS & COLLECTIBLES • WE BUY & SELL"
          description="Discover the true worth of your rare coins with our trusted expertise. Whether you're buying or selling, we provide accurate evaluations, competitive offers, and a seamless experience backed by decades of numismatic knowledge."
        />
      </section>

      <section className="overflow-hidden">
        <div className="flex justify-center w-full items-center relative xl:h-[90vh]">
          <div className="absolute inset-0">
            <CustomImage
              srcAttr={coinsBackground}
              altAttr=""
              titleAttr=""
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <TwoImagesAndCenterText
              title="Accurate Appraisals for Rare Coins & Collectibles"
              description="Whether you're looking to sell or expand your collection, our experts provide accurate, transparent appraisals based on age, rarity, and condition. We offer competitive market-based prices and a smooth, honest process. From cherished heirlooms to valuable finds, we help you buy or sell rare coins and collectibles with confidence."
              leftImage={coin4}
              rightImage={coin5}
              leftTitleAttr=""
              rightAltAttr=""
              rightTitleAttr=""
              leftAltAttr=""
              svgTitleAttr=""
              svgAltAttr=""
              textColor="text-white"
            />
          </div>
        </div>
      </section>

      <section className="2xl:pt-36 md:pt-14 pt-10 xl:pt-16">
        <div>
          <HeadingTitle sectionName="Discover the True Value of Your Rare Coins and Collectibles" />
        </div>
        <div className="container grid grid-cols-1 2xl:gap-10 2xl:pt-20 gap-6 lg:grid-cols-4 lg:pt-14 md:grid-cols-2 md:pt-8 pt-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col bg-white h-64 justify-center p-4 text-center items-center !py-28"
            >
              <h3 className="text-2xl  xl:text-3xl font-belleza mb-2">
                {benefit.title}
              </h3>
              <p className="mt-2 text-md xl:text-lg 2xl:text-[22px]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="2xl:pt-36 md:pt-14 pt-10 px-4 xl:pt-16">
        <HeadingTitle
          sectionName="Maximizing Value: What Sets Us Apart"
          description="Our experts carefully evaluate your rare coins and collectibles, focusing on authenticity, rarity, and condition to offer a fair and competitive value. We ensure a transparent, secure, and seamless selling experience."
        />
        <div className="container 2xl:pt-20 lg:pt-14 md:pt-8 pt-4 mx-auto">
          <VideoSection
            src="/video/coinVideo.mp4"
            videoClassName="w-full h-[80vh] lg:w-[1000px] lg:h-[80vh] 2xl:w-[1413px] 2xl:h-[760px]"
            thumbnail={thumbnail}
            titleAttr=""
            altAttr=""
          />
        </div>
      </section>

      <section className="2xl:pt-36 md:pt-14 pt-10 xl:pt-16">
        <HeadingTitle sectionName="United States Pattern Pieces" />
        <div className="container 2xl:pt-20 lg:pt-14 md:pt-8 pt-4">
          <AnimatedSection {...animatedContent[0]} animatedClass="!h-[50vh]" />
        </div>
        <div className="container flex bg-[#F8F6F2] justify-center 2xl:pt-20 lg:pt-14 md:pt-8 mx-auto pt-4 px-4">
          <div className="bg-white p-8 w-full max-w-5xl">
            <div className="grid grid-cols-1 text-xl 2xl:text-3xl font-belleza gap-x-12 gap-y-6 md:grid-cols-2">
              <ul className="space-y-3">
                {firstColumn.map((coin, index) => (
                  <li key={index} className="list-disc list-inside pt-6">
                    {coin}
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {secondColumn.map((coin, index) => (
                  <li key={index} className="list-disc list-inside pt-6">
                    {coin}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="2xl:pt-20 lg:pt-14 md:pt-8 pt-4">
        <KeepInTouch />
      </section>
    </>
  );
}
