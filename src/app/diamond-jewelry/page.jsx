import Hero from "@/components/Hero";
import heroCoin from "@/assets/images/hero-coins.webp";
import ringVed from "@/assets/images/what-we-buy/diamond-jewelry/ringVed.gif";
import diamondJewelry1 from "@/assets/images/what-we-buy/diamond-jewelry/diamond-jewelry-1.webp";
import diamondJewelry2 from "@/assets/images/what-we-buy/diamond-jewelry/diamond-jewelry-2.webp";
import diamondJewelry3 from "@/assets/images/what-we-buy/diamond-jewelry/diamond-jewelry-3.webp";
import diamondJewelry4 from "@/assets/images/what-we-buy/diamond-jewelry/diamond-jewelry-4.webp";
import diamondJewelry5 from "@/assets/images/what-we-buy/diamond-jewelry/diamond-jewelry-5.webp";
import diamondJewelry6 from "@/assets/images/what-we-buy/diamond-jewelry/diamond-jewelry-6.webp";
import diamondJewelry7 from "@/assets/images/what-we-buy/diamond-jewelry/diamond-jewelry-7.webp";
import diamondJewelry8 from "@/assets/images/what-we-buy/diamond-jewelry/diamond-jewelry-8.webp";
import diamondJewelry9 from "@/assets/images/what-we-buy/diamond-jewelry/diamond-jewelry-9.webp";

import whiteCircle from "@/assets/images/what-we-buy/diamond-jewelry/whiteCircle.svg";
import HeadingTitle from "@/components/HeadingTitle";
import {
  AnimatedSection,
  DiamondJewelrySwipper,
  MarqueeText,
  TwoImagesAndCenterText,
} from "@/components/dynamiComponents";
import KeepInTouch from "@/components/KeepInTouch";
import CustomImage from "@/components/customImage";

const animatedContent = [
  {
    img: diamondJewelry4,
    titleAttr: "",
    altAttr: "",
    description: [
      "Whether you're looking to buy or sell diamond jewelry, understanding what impacts its value is essential. The 4Cs—carat, cut, clarity, and color—are the foundation of a diamond's quality and are crucial for both buyers and sellers. Certified diamonds, especially those with documentation from reputable gemological labs, are more desirable in the market and tend to retain better value.",
      "For sellers, the condition and craftsmanship of the jewelry—especially vintage or designer pieces—can significantly enhance resale potential. For buyers, these elements add character, history, and uniqueness. Always evaluate the setting, metal quality, and overall design integrity. Well-maintained jewelry appeals more to buyers and commands higher offers from sellers.",
      "Finally, market trends matter. Diamond prices can fluctuate, so timing and partnering with a trusted jeweler offering transparent evaluations can make all the difference. Whether you're buying a special piece or selling a cherished item, knowledge and trust are key to a successful experience.",
    ],

    direction: "RTF",
  },
  {
    img: diamondJewelry7,
    titleAttr: "",
    altAttr: "",
    description: [
      "Whether you're buying or selling diamond jewelry, understanding what drives its value is essential. The 4Cs—Carat weight, Color, Clarity, and Cut—remain the cornerstone of diamond evaluation. Larger, well-cut diamonds with higher clarity typically command more attention and worth.",
      "The type of metal (such as platinum or 18K gold), craftsmanship, and uniqueness of design also impact value. Vintage pieces and rare settings can add desirability, while certifications and market conditions ensure fair pricing. Knowledge of these factors leads to confident, informed decisions on both sides of the transaction.",
    ],

    direction: "LTF",
  },
];

export const carouselImages = [
  {
    image: diamondJewelry1,
    title: "Engagement Rings",
    link: "/contact-us",
    altAttr: "",
    titleAttr: "",
  },
  {
    image: diamondJewelry9,
    title: "Bracelets & Bangles",
    link: "/contact-us",
    altAttr: "",
    titleAttr: "",
  },
  {
    image: diamondJewelry2,
    title: "Earrings",
    link: "/contact-us",
    altAttr: "",
    titleAttr: "",
  },
  {
    image: diamondJewelry3,
    title: "Necklaces & Pendants",
    link: "/contact-us",
    altAttr: "",
    titleAttr: "",
  },
  {
    image: diamondJewelry8,
    title: "Watches",
    link: "/contact-us",
    altAttr: "",
    titleAttr: "",
  },
];

export default function VintagePlatinumJewelry() {
  return (
    <>
      <section>
        <Hero
          title="Buy Diamond Jewelry with Ease and Confidence"
          imageSrc={heroCoin}
          textAlignment="center"
          titleAttr="Diamond Ring | Diamond Jewelry"
          altAttr=""
        />
      </section>

      <section className="container text-primary pt-10 md:pt-14 xl:pt-16 2xl:pt-36">
        <div className="flex flex-col">
          <h2 className="text-4xl md:text-6xl 2xl:text-9xl leading-tight  font-belleza">
            The secret to
          </h2>

          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-9xl leading-tight flex items-center gap-3 font-belleza flex-wrap  md:gap-3">
            effortless{" "}
            <span className="inline-block transform rotate-[-6deg] px-4">
              <CustomImage
                srcAttr={ringVed}
                titleAttr="Diamond Ring | Diamond Jewelry"
                altAttr=""
                className="w-[150px] h-[80px] md:w-[300px] md:h-[180px] object-cover"
              />
            </span>
            glamour.
          </h2>
        </div>
        <div className="md:translate-x-[60%] pt-4 ">
          <p className="md:w-[50%] lg:w-[45%] xl:w-[40%] 2xl:w-[40%] text-xl 2xl:text-[22px]">
            Effortless glamour is about timeless elegance and subtle brilliance.
            It enhances your natural beauty, creating a balance between
            simplicity and luxury, so you can shine confidently and effortlessly
            in any moment.
          </p>
        </div>
      </section>

      <section className="pt-10 md:pt-14 xl:pt-16 2xl:pt-36">
        <div>
          <HeadingTitle sectionName="OUR DIAMOND JEWELRY" />
        </div>
        <div className="pt-4 md:pt-8 lg:pt-12 2xl:pt-16">
          <DiamondJewelrySwipper images={carouselImages} />
        </div>
      </section>

      <section className="pt-10 md:pt-14 xl:pt-16 2xl:pt-36">
        <div>
          <HeadingTitle sectionName="Key Considerations When Buying or Selling Diamond Jewelry" />
        </div>
        <div className="container  pt-4 md:pt-8 lg:pt-14 2xl:pt-20 ">
          <AnimatedSection {...animatedContent[0]} />
        </div>
      </section>

      <section className="pt-10 md:pt-14 xl:pt-16 2xl:pt-36 ">
        <TwoImagesAndCenterText
          title="Maximize Value When Buying or Selling Diamond Jewelry"
          description="Whether you're buying or selling diamond jewelry, understanding what drives its value is essential. The 4Cs—Carat weight, Color, Clarity, and Cut—remain the cornerstone of diamond evaluation. Larger, well-cut diamonds with higher clarity typically command more attention and worth."
          leftImage={diamondJewelry5}
          rightImage={diamondJewelry6}
          svgImage={whiteCircle}
          leftTitleAttr=""
          rightAltAttr=""
          rightTitleAttr=""
          leftAltAttr=""
          svgTitleAttr=""
          svgAltAttr=""
          backgroundColor="bg-greyBg"
          textColor="text-primary"
        />
      </section>
      <section className="pt-10 md:pt-14 xl:pt-16 2xl:pt-36 ">
        <MarqueeText
          text={[
            "• because elegance never goes out of style",
            "• A little sparkle goes a long way.",
            "• Luxury you can wear",
            "• A diamond is forever, just like our love.",
            "• Wear your confidence like a diamond—unbreakable and radiant.",
          ]}
          speed={30}
          isAbsolute={false}
        />
      </section>
      <section className="pt-10 md:pt-14 xl:pt-16 2xl:pt-36 ">
        <div>
          <HeadingTitle sectionName="Key Factors That Affect Diamond Jewelry Value" />
        </div>
        <div className="container  pt-4 md:pt-8 lg:pt-14 2xl:pt-20 ">
          <AnimatedSection {...animatedContent[1]} />
        </div>
      </section>

      <section className="pt-10 md:pt-14 xl:pt-16 2xl:pt-36">
        <KeepInTouch />
      </section>
    </>
  );
}
