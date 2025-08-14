import Hero from "@/components/Hero";
import heroDiamond from "@/assets/images/what-we-buy/diamond/home-diamond.webp";
import DiamondCard from "@/components/DiamondCard";
import HeadingTitle from "@/components/HeadingTitle";
import diamondAsscher from "@/assets/images/what-we-buy/diamond/diamond-asscher.webp";
import diamondCushion from "@/assets/images/what-we-buy/diamond/diamond-cushion.webp";
import diamondEmerald from "@/assets/images/what-we-buy/diamond/diamond-emerald.webp";
import diamondHeart from "@/assets/images/what-we-buy/diamond/diamond-heart.webp";
import diamondmarquise from "@/assets/images/what-we-buy/diamond/diamond-marquise.webp";
import diamondOval from "@/assets/images/what-we-buy/diamond/diamond-oval.webp";
import diamondPear from "@/assets/images/what-we-buy/diamond/diamond-pear.webp";
import diamondPrincess from "@/assets/images/what-we-buy/diamond/diamond-princess.webp";
import diamondRadiant from "@/assets/images/what-we-buy/diamond/diamond-radiant.webp";
import diamondRound from "@/assets/images/what-we-buy/diamond/diamond-round.webp";
import diamond1 from "@/assets/images/what-we-buy/diamond/diamond-1.webp";
import diamond2 from "@/assets/images/what-we-buy/diamond/diamond-2.webp";
import diamond3 from "@/assets/images/what-we-buy/diamond/diamond-3.webp";
import diamond4 from "@/assets/images/what-we-buy/diamond/diamond-4.webp";
import diamond5 from "@/assets/images/what-we-buy/diamond/diamond-5.webp";
import diamond6 from "@/assets/images/what-we-buy/diamond/diamond-6.webp";
import diamond7 from "@/assets/images/what-we-buy/diamond/diamond-7.webp";
import diamondBackground from "@/assets/images/what-we-buy/diamond/diamond-background.webp";

import KeepInTouch from "@/components/KeepInTouch";
import {
  AnimatedSection,
  FAQSection,
  TextCarousel,
} from "@/components/dynamiComponents";
import CustomImage from "@/components/customImage";

const cardsData = [
  { image: diamondPear, titleAttr: "", altAttr: "", title: "PEAR" },
  { image: diamondRound, titleAttr: "", altAttr: "", title: "ROUND" },
  { image: diamondAsscher, titleAttr: "", altAttr: "", title: "ASSCHER" },
  { image: diamondPrincess, titleAttr: "", altAttr: "", title: "PRINCESS" },
  { image: diamondCushion, titleAttr: "", altAttr: "", title: "CUSHION" },
  { image: diamondHeart, titleAttr: "", altAttr: "", title: "HEART" },
  { image: diamondOval, titleAttr: "", altAttr: "", title: "OVAL" },
  { image: diamondEmerald, titleAttr: "", altAttr: "", title: "EMERALD" },
  { image: diamondRadiant, titleAttr: "", altAttr: "", title: "RADIANT" },
  { image: diamondmarquise, titleAttr: "", altAttr: "", title: "MARQUISE" },
];

const animatedContent = [
  {
    img: diamond2,
    titleAttr: "",
    altAttr: "",
    description: [
      "At Tele Gold Jewelers, we specialize in turning your diamonds into cash through a process built on trust, transparency, and fairness. Our expert evaluators carefully assess your diamond jewelry to ensure you receive the best possible offer, whether it’s a ring, necklace, or loose diamond.",
      "With over 30 years of industry experience, we guarantee competitive pricing and a seamless experience from start to finish. We value honesty and prioritize your satisfaction, making the selling process smooth, secure, and rewarding. Choose Tele Gold Jewelers for a professional, stress-free way to transform your diamonds into instant cash.",
    ],

    direction: "RTF",
  },
  {
    img: diamond3,
    titleAttr: "",
    altAttr: "",
    description: [
      "The cut of a diamond plays a vital role in how it interacts with light, directly affecting its sparkle, brilliance, and fire. Unlike carat or color, the cut is responsible for a diamond’s shine and radiance. A well-cut diamond enhances light reflection, giving it that dazzling brilliance we all admire and associate with luxury and timeless beauty.",
      "When light enters a diamond, it reflects off the precisely cut facets before exiting the stone. The angles, proportions, and symmetry determine how much light is reflected back, influencing the diamond’s light performance. If cut too shallow or deep, light escapes, reducing its sparkle. A perfectly proportioned cut, like a round brilliant or cushion shape, maximizes brightness and fire.",
      "Whether it’s a classic round cut or a fancy pear, marquise, or emerald cut, precision-cutting techniques ensure optimal light performance, making each diamond unique and breathtakingly radiant. Understanding cut helps buyers choose diamonds that captivate with brilliance for a lifetime.",
    ],

    direction: "LTF",
  },
];

const content = [
  {
    title: "Brilliance",
    description:
      "The dazzling light reflected from a diamond’s surface. Brilliance gives diamonds their captivating sparkle, enhancing their beauty and making them radiate under any light.",
  },
  {
    title: "Certified Diamond",
    description:
      "A diamond verified by a trusted gemological lab, such as GIA or IGI. Certification guarantees quality by assessing cut, clarity, color, and carat weight.",
  },
  {
    title: "Crown",
    description:
      " The upper section of a diamond, located above the girdle. The crown’s facets play a vital role in reflecting light and enhancing the gem’s brilliance.",
  },
  {
    title: "Cutlet",
    description:
      "A tiny, often pointed facet at the bottom of a diamond’s pavilion. A small or absent cutlet increases brilliance and sparkle.",
  },
  {
    title: "Facet",
    description:
      " The flat, polished surfaces on a diamond that reflect light. Precision-cut facets maximize the stone’s fire, brilliance, and overall radiance.",
  },
  {
    title: "Fire ",
    description:
      "The colorful flashes of light that radiate from a diamond when exposed to light. Fire enhances a diamond’s visual appeal and sparkle.",
  },
  {
    title: "Girdle",
    description:
      " The narrow band encircling a diamond at its widest point. It separates the crown from the pavilion and affects how securely the stone can be set.",
  },
  {
    title: "Pavilion",
    description:
      "The lower section of a diamond, situated beneath the girdle. The pavilion’s angle impacts the gem’s brilliance by directing light upward.",
  },
  {
    title: "Scintillation",
    description:
      " A tiny, often pointed facet at the bottom of a diamond’s pavilion. A small or absent cutlet increases brilliance and sparkle.",
  },
];

export default function Diamond() {
  return (
    <>
      {" "}
      <section>
        <Hero
          title="Turn Your Diamonds into Instant Cash"
          imageSrc={heroDiamond}
          textAlignment="center"
          titleAttr=""
          altAttr=""
        />
      </section>
      <section className="text-primary 2xl:pt-36 lg:px-16 md:pt-14 md:px-12 pt-10 px-6 xl:pt-16">
        <div className="flex justify-center">
          <CustomImage titleAttr="" altAttr="" srcAttr={diamond1} />
        </div>
        <div className="flex justify-center text-center">
          <p className="text-gray text-md lg:text-xl xl:text-[22px] w-full 2xl:w-[70%] md:text-xl md:w-[90%] xl:w-[80%]">
            Sell your diamonds with confidence at Tele Gold Jewelers. We value
            transparency, offer competitive prices, and ensure a smooth,
            hassle-free experience. Trust us to provide the best return for your
            precious diamond jewelry.
          </p>
        </div>
      </section>
      <section className="container text-primary 2xl:pt-36 2xl:px-[14rem] md:pt-14 pt-10 xl:pt-16">
        <div>
          <HeadingTitle sectionName="Diamond Shape" />
        </div>
        <div className="flex justify-center w-full 2xl:pt-10 lg:pt-8 md:pt-6 pt-[6px]">
          <div className="grid grid-cols-2 lg:gap-8 md:grid-cols-3 xl:grid-cols-5">
            {cardsData.map((card, index) => (
              <DiamondCard
                key={index}
                image={card.image}
                altAttr={card.altAttr}
                titleAttr={card.titleAttr}
                title={card.title}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="text-primary 2xl:pt-36 md:pt-14 pt-10 xl:pt-16">
        <HeadingTitle sectionName="Reliable Diamond to Cash Solutions" />
        <div className="container 2xl:pt-20 lg:pt-14 md:pt-8 pt-4">
          <AnimatedSection {...animatedContent[0]} />
        </div>
      </section>
      <section className="2xl:pt-36 md:pt-14 pt-10 xl:pt-16">
        <TextCarousel
          img={diamondBackground}
          content={content}
          titleAttr=""
          altAttr=""
        />
      </section>
      <section className="container 2xl:pt-36 md:pt-14 pt-10 xl:pt-16">
        <div>
          <HeadingTitle
            sectionName="Mastering the 4Cs of Diamonds: A Guide to Quality and Value"
            description="When buying a diamond, understanding the 4Cs—Cut, Color, Clarity, and Carat—is essential. Each factor plays a vital role in determining the diamond’s beauty and value."
          />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 py-10 uppercase">
          <div className="relative">
            <div className="flex justify-center w-full absolute bottom-5">
              <div className="bg-[#FFFFFFD9] text-center !w-[90%] font-belleza  py-2 md:py-0 lg:py-2 xl:py-4">
                <p className="text-2xl md:text-xl lg:text-3xl">Color</p>
              </div>
            </div>
            <CustomImage
              srcAttr={diamond4}
              titleAttr=""
              altAttr=""
              className="object-cover w-full mx-auto"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="relative">
              <div className="flex justify-center w-full absolute bottom-5">
                <div className="bg-[#FFFFFFD9] text-center !w-[90%] font-belleza py-2 md:py-0 lg:py-2 xl:py-4">
                  <p className="text-2xl md:text-xl lg:text-3xl">Clarity</p>
                </div>
              </div>
              <CustomImage
                srcAttr={diamond5}
                titleAttr=""
                altAttr=""
                className="object-cover  w-full mx-auto"
              />
            </div>
            <div className="relative">
              <div className="flex justify-center w-full absolute bottom-5">
                <div className="bg-[#FFFFFFD9] text-center !w-[90%] font-belleza  py-2 md:py-0 lg:py-2 xl:py-4">
                  <p className="text-2xl md:text-xl lg:text-3xl">Cut</p>
                </div>
              </div>

              <CustomImage
                srcAttr={diamond6}
                titleAttr=""
                altAttr=""
                className="object-cover  w-full mx-auto"
              />
            </div>
          </div>

          <div className="relative">
            <div className="flex justify-center w-full absolute bottom-5">
              <div className="bg-[#FFFFFFD9] text-center !w-[90%] font-belleza  py-2 md:py-0 lg:py-2 xl:py-4">
                <p className="text-2xl md:text-xl lg:text-3xl">Carat</p>
              </div>
            </div>
            <CustomImage
              srcAttr={diamond7}
              titleAttr=""
              altAttr=""
              className="object-cover w-full mx-auto"
            />
          </div>
        </div>

        <div className="flex justify-center text-center">
          <p className="2xl:text-[24px] lg:text-lg md:text-md">
            Cut defines how well the diamond reflects light, while Color
            measures the absence of any hue. Clarity evaluates the presence of
            inclusions or blemishes, and Carat refers to the stone’s weight. By
            mastering the 4Cs, you can make an informed decision and select a
            diamond that perfectly suits your preferences and budget.
          </p>
        </div>
      </section>
      <section className="text-primary 2xl:pt-36 md:pt-14 pt-10 xl:pt-16">
        <div className="py-4">
          <HeadingTitle sectionName="Cut and Light Performance" />
        </div>
        <div className="container 2xl:pt-20 lg:pt-14 md:pt-8 pt-4">
          <AnimatedSection {...animatedContent[1]} />
        </div>
      </section>
      <section className="2xl:pt-36 md:pt-14 pt-10 xl:pt-16">
        <HeadingTitle sectionName=" Diamond FAQ" />
        <div className="2xl:pt-20 lg:pt-14 md:container md:pt-8 pt-4">
          <FAQSection />
        </div>
      </section>
      <section className="2xl:pt-36 md:pt-14 pt-10 xl:pt-16">
        <KeepInTouch />
      </section>
    </>
  );
}
