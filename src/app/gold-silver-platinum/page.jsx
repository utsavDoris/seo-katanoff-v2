import Hero from "@/components/Hero";
import heroGoldSilver from "@/assets/images/what-we-buy/gold-silver-platinum/home-goldsilver.webp";
import HeadingTitle from "@/components/HeadingTitle";
import {
  AnimatedSection,
  GoldSilverPlatinumScrollbar,
} from "@/components/dynamiComponents";
import goldSilver1 from "@/assets/images/what-we-buy/gold-silver-platinum/gold-silver-1.webp";
import goldSilver2 from "@/assets/images/what-we-buy/gold-silver-platinum/gold-silver-2.webp";
import goldSilver3 from "@/assets/images/what-we-buy/gold-silver-platinum/gold-silver-3.webp";
import goldSilver4 from "@/assets/images/what-we-buy/gold-silver-platinum/gold-silver-4.webp";
import goldSilver5 from "@/assets/images/what-we-buy/gold-silver-platinum/gold-silver-5.webp";
import goldSilver6 from "@/assets/images/what-we-buy/gold-silver-platinum/gold-silver-6.webp";
import goldSilver7 from "@/assets/images/what-we-buy/gold-silver-platinum/gold-silver-7.webp";
import goldSilver8 from "@/assets/images/what-we-buy/gold-silver-platinum/gold-silver-8.webp";
import goldSilver9 from "@/assets/images/what-we-buy/gold-silver-platinum/gold-silver-9.webp";
import goldSilver10 from "@/assets/images/what-we-buy/gold-silver-platinum/gold-silver-10.webp";
import goldSilver11 from "@/assets/images/what-we-buy/gold-silver-platinum/gold-silver-11.webp";
import goldSilver12 from "@/assets/images/what-we-buy/gold-silver-platinum/gold-silver-12.webp";
import starSvg from "@/assets/images/what-we-buy/gold-silver-platinum/star.svg";
import KeepInTouch from "@/components/KeepInTouch";
import CustomImage from "@/components/customImage";

const animatedContent = [
  {
    img: goldSilver1,
    titleAttr: "",
    altAttr: "",
    description: [
      "With over 50 years of industry experience, TeleGold has become a trusted destination for those looking to buy or sell gold, silver, and platinum with confidence. We believe in honest, transparent evaluations and take pride in offering fair, market-based prices that reflect the true value of your precious metals.",
      "Whether you're selling old gold jewelry, silver coins, flatware, or platinum pieces—or looking to invest in high-quality metals—we handle each transaction with professionalism, care, and integrity. Our knowledgeable team carefully assesses every item based on weight, purity, and current market rates, ensuring you receive the value you deserve.",
      "Our long-standing reputation is built on trust, personalized service, and a deep commitment to customer satisfaction. At TeleGold, we’re not just conducting transactions—we’re building lasting relationships, one piece at a time..",
    ],

    direction: "LTF",
  },
  {
    img: goldSilver2,
    titleAttr: "",
    altAttr: "",
    description: [
      "Whether you're buying or selling, we make precious metal transactions simple and transparent. At Tele Gold Jewelers, our expert team provides accurate evaluations based on real-time market rates to ensure fair value every time.",
      "From vintage silverware and gold bracelets to platinum coins and investment bullion, we assess each item with care and clarity. We walk you through every step—so whether you're adding to your collection or cashing in, you’ll feel informed and confident.",
      "With 50 years of experience, we’re committed to delivering exceptional service, honest pricing, and a seamless experience you can trust.",
    ],

    direction: "LTF",
  },
];

const items = [
  { title: "Convenience", image: goldSilver3, titleAttr: "Diamond Ring | Diamond Jewelry", altAttr: "" },
  { title: "Fairness", image: goldSilver4, titleAttr: "", altAttr: "" },
  { title: "Risk-Free", image: goldSilver5, titleAttr: "", altAttr: "" },
];

const benefits = [
  {
    number: "1",
    title: "Transparent Appraisals",
    description:
      "Whether buying or selling, we provide clear, professional evaluations so you fully understand the value of your gold, silver, or platinum.",
    image: goldSilver6,
    titleAttr: "",
    altAttr: "",
  },
  {
    number: "2",
    title: "Fair and Competitive Offers",
    description:
      "Get top market prices with no hidden fees or complicated terms—whether you’re purchasing or selling.",
    image: goldSilver7,
    titleAttr: "Antique Jewelry | Diamond Jewelry",
  },
  {
    number: "3",
    title: "Quick and Hassle-Free Process",
    description:
      "Enjoy a smooth experience with fast appraisals, fair offers, and prompt transactions on both buying and selling.",
    image: goldSilver8,
    titleAttr: "Necklace | Jewelry",
  },
  {
    number: "4",
    title: "Trusted by the Community",
    description:
      "With decades of experience and a strong reputation for integrity, we are the trusted choice for precious metals transactions.",
    image: goldSilver9,
    titleAttr: "",
    altAttr: "",
  },
];

const serviceDetail = {
  svgIcon: starSvg,
  svgAltAttr: "",
  svgTitleAttr: "",
  bgImg: goldSilver12,
  bgAltAttr: "",
  bgTitleAttr: "",
  title: "Why Choose Us?",
  description: [
    "Fair Deals, Trusted Expertise",
    "Whether you're buying or selling, we offer transparent appraisals, competitive market-based pricing, and a seamless experience. With a reputation built on trust, expertise, and customer-first service, we ensure every transaction delivers real value and peace of mind.",
  ],
  marqueeTitle: "Gold: The Eternal Classic",
  service: [
    {
      img: goldSilver10,
      altAttr: "",
      titleAttr: "",
    },
    {
      img: goldSilver11,
      altAttr: "",
      titleAttr: "",
    },
    {
      img: goldSilver12,
      altAttr: "",
      titleAttr: "",
    },
  ],
};

export default function GoldSilverPlatinum() {
  return (
    <>
      <section>
        <Hero
          title="Trusted Gold, Silver & Platinum Experts"
          imageSrc={heroGoldSilver}
          textAlignment="center"
          titleAttr="Gold Jewelry | Diamond Jewelry"
        />
      </section>

      <section className="pt-10 md:pt-14 xl:pt-16 2xl:pt-36">
        <div>
          <HeadingTitle sectionName="Gold, Silver & Platinum Buy and Sell with Confidence" />
        </div>
        <div className="container pt-4 md:pt-8 lg:pt-14 2xl:pt-20">
          <AnimatedSection {...animatedContent[0]} />
        </div>
      </section>

      <section className="mt-10 md:mt-14 xl:mt-16 2xl:mt-36 bg-[#ECEBE7]">
        <GoldSilverPlatinumScrollbar serviceDetail={serviceDetail} />
      </section>

      <section className="pt-10 md:pt-14 xl:pt-16 2xl:pt-36">
        <HeadingTitle sectionName="Fair Market Value for Gold, Silver & Platinum" />

        <div className="container pt-4 md:pt-8 lg:pt-14 2xl:pt-20">
          <AnimatedSection {...animatedContent[1]} />
        </div>
      </section>

      <section className="pt-10 md:pt-14 xl:pt-16 2xl:pt-36 container">
        <div className=" mx-auto">
          <div className="mb-8 flex flex-col xl:flex-row justify-between">
            <h2 className="text-3xl xl:text-5xl 2xl:text-6xl 4xl:text-7xl font-belleza">
              Easy, Hassle-Free
              <span className="hidden xl:inline">
                <br />
              </span>
              Selling Experience
            </h2>

            <p className="mt-4 md:text-md lg:text-lg 2xl:text-[24px] max-w-2xl">
             Experience a smooth, transparent, and efficient process at Tele Gold Jewelers—whether you're buying or selling.
              Our experts provide quick appraisals, fair market offers, and seamless transactions.
              From investing in gold and silver to selling unwanted jewelry or coins, 
              we make every step simple, secure, and stress-free—no hidden fees, just honest service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 md:pt-8 lg:pt-14 2xl:pt-20">
            {items.map((item, index) => (
              <div key={index} className="relative group">
                <CustomImage
                  srcAttr={item?.image}
                  titleAttr={item?.titleAttr}
                  altAttr={item?.altAttr}
                  className="w-full  object-cover "
                />
                <div className="absolute bottom-5 left-0 w-full font-belleza bg-opacity-50 text-white text-2xl xl:text-4xl py-3 text-center">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-10 md:pt-14 xl:pt-16 2xl:pt-36 container">
        <HeadingTitle sectionName="Why Choose Tele Gold Jewelers?" />

        <div className="mx-auto flex flex-col justify-center space-y-12 pt-4 md:pt-8 lg:pt-14 2xl:pt-20 px-4 md:px-8 lg:px-12">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col md:flex-row items-stretch gap-6 md:gap-12 mx-auto max-w-7xl w-full"
            >
              <span className="absolute justify-end md:static text-primary opacity-20 text-[120px] md:text-[140px] lg:text-[180px] font-belleza pointer-events-none">
                {item.number}
              </span>
              <div className="w-full md:w-[40%] lg:w-[45%]">
                <div className="h-[250px] w-full">
                  <CustomImage
                    srcAttr={item?.image}
                    titleAttr={item?.titleAttr}
                    altAttr={item?.altAttr}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-[60%] flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl xl:text-4xl font-belleza">
                  {item.title}
                </h3>
                <p className="mt-2 text-lg sm:text-lg md:text-xl">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pt-10 md:pt-14 xl:pt-16 2xl:pt-36">
        <KeepInTouch />
      </section>
    </>
  );
}
