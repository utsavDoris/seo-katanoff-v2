import Hero from "@/components/Hero";
import heroWatches from "@/assets/images/what-we-buy/watches/home-watches.webp";
import watches1 from "@/assets/images/what-we-buy/watches/watches-1.webp";
import watches2 from "@/assets/images/what-we-buy/watches/watches-2.webp";
import watches3 from "@/assets/images/what-we-buy/watches/watches-3.webp";
import watches4 from "@/assets/images/what-we-buy/watches/watches-4.webp";
import watches5 from "@/assets/images/what-we-buy/watches/watches-5.webp";
import watches6 from "@/assets/images/what-we-buy/watches/watches-6.webp";
import watches7 from "@/assets/images/what-we-buy/watches/watches-7.webp";
import HeadingTitle from "@/components/HeadingTitle";
import {
  AnimatedSection,
  MarqueeBrands,
  MarqueeText,
} from "@/components/dynamiComponents";
import KeepInTouch from "@/components/KeepInTouch";
import CustomImage from "@/components/customImage";

const animatedContent = [
  {
    img: watches6,
    titleAttr: "Watch | Rolex | Citizen",
    altAttr: "Tele Gold Jewelers | Diamond Jewelry, Coin, Gold, Silver, Platinum",
    description: [
      "Whether you’re looking to sell a treasured timepiece or invest in a luxury watch, we offer a trusted, transparent, and rewarding experience. From rare collector’s pieces to iconic brands like Rolex and Patek Philippe, we understand the value, craftsmanship, and history behind every watch.",
      "Our experts provide accurate evaluations and fair, market-based offers for sellers, while helping buyers discover authentic, high-quality watches with confidence. Whether you’re parting with an heirloom or adding to your collection, our seamless process ensures you get the value and service you deserve.",
    ],

    direction: "RTF",
  },
];

export default function Watches() {
  return (
    <>
      <section>
        <Hero
          title="Explore, Buy, or Sell Premium Watches Today"
          imageSrc={heroWatches}
          textAlignment="center"
          titleAttr="Watch | Rolex | Citizen"
          altAttr="Tele Gold Jewelers | Diamond Jewelry, Coin, Gold, Silver, Platinum"
        />
      </section>

      <section className="relative flex items-center justify-center w-full  pt-20 md:pt-24 xl:pt-28 2xl:pt-40 3xl:pt-48">
        <div>
          <MarqueeText
            text=" Luxury on Your Wrist, Cash in Your Hand!"
            speed={30}
            MarqueeClassName="top-[40px] md:top-[55px] 2xl:top-[90px]  3xl:top-[130px] text-5xl md:text-7xl xl:text-9xl 3xl:text-[180px]"
          />
          <div className="relative z-10 flex justify-center items-center">
            <CustomImage
              srcAttr={watches1}
              altAttr="Tele Gold Jewelers | Diamond Jewelry, Coin, Gold, Silver, Platinum"
              titleAttr="Watch | Rolex | Citizen"
              className="2xl:w-full lg:w-[90%]"
            />
          </div>
        </div>
      </section>

      <section className="pt-10 md:pt-14 xl:pt-16 2xl:pt-36">
        <HeadingTitle sectionName="Trading Timepieces with Trust and Precision" />
        <div className="container  pt-4 md:pt-8 lg:pt-14 2xl:pt-20">
          <AnimatedSection {...animatedContent[0]} />
        </div>
      </section>

      <section className="flex flex-col items-center w-full pt-10 md:pt-14 xl:pt-16 2xl:pt-36">
        <MarqueeBrands />
      </section>

      <section className="pt-10 md:pt-14 xl:pt-16 2xl:pt-36">
        <div>
          <HeadingTitle
            sectionName="Vintage and Antique Pocket Watches"
            description="Whether you're looking to buy a timeless piece or sell a treasured heirloom, we make the process seamless. Our experts provide accurate evaluations, fair market prices, and a trusted experience for collectors and sellers alike."
          />
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 items-start pt-4 md:pt-8 lg:pt-14 2xl:pt-20">
          <div>
            <div>
              <CustomImage
                srcAttr={watches5}
                titleAttr="Watch | Rolex | Citizen"
                className="w-full"
              />
            </div>
            <p className="mt-4 md:text-md lg:text-lg 2xl:text-[24px] leading-relaxed pt-6">
              Our experts carefully assess each pocket watch based on condition, rarity,
               and craftsmanship—whether you're looking to sell a cherished heirloom or purchase a unique collector’s piece. 
               We offer fair market evaluations, transparent pricing, and a smooth, trustworthy experience. 
              From classic antiques to rare finds, we’re here to help you unlock and preserve the value of your timeless treasures.
            </p>
          </div>

          <div className="md:relative flex justify-center bottom-[-10%] lg:bottom-[0%] 2xl:bottom-[-10%]">
            <CustomImage
              srcAttr={watches4}
              titleAttr="Watch | Rolex | Citizen"
              className="w-[100%] 2xl:!w-[75%] 2xl:h-[590px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="pt-10 md:pt-14 xl:pt-16 2xl:pt-36">
        <div className="container mx-auto px-6 2xl:px-12 grid grid-cols-1 lg:grid-cols-2 gap-6 ">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-5xl 2xl:text-6xl font-belleza mb-6">
              We Buy and Sell Luxury and High-End Watches
            </h2>
            <div className="  inline-block">
              <CustomImage
                srcAttr={watches7}
                titleAttr="Watch | Rolex | Citizen"
                className="w-[100%] lg:!h-[450px] 2xl:!h-[500px]"
              />
            </div>
          </div>

          <div>
            <div className="w-full border-t border-[#DFDEDB]"></div>

            <p className="mt-8 md:text-md lg:text-lg 2xl:text-[24px] leading-relaxed">
              Looking to buy or sell a luxury watch? We specialize in high-end
              timepieces, offering a seamless experience for watch enthusiasts,
              collectors, and sellers alike. Whether you’re parting with a
              premium brand like Rolex, Patek Philippe, or Omega, or seeking to
              purchase an iconic watch, we provide competitive offers and
              genuine authenticity.
            </p>

            <p className="mt-12 md:text-md lg:text-lg 2xl:text-[24px] leading-relaxed text-black">
              When buying luxury watches, we carefully consider several key
              factors, including:
            </p>
            <ul className="mt-2 space-y-2 md:text-md lg:text-lg 2xl:text-[24px] text-black">
              <li>
                Brand & Model – Renowned names like Rolex, Cartier, and
                Breitling hold greater value.
              </li>
              <li>
                Condition – Scratches, wear, and maintenance history impact the
                watch’s value.
              </li>
              <li>
                Authenticity – Original parts, serial numbers, and documentation
                are verified.
              </li>
              <li>
                Age – Vintage, antique, and rare models can increase in value
                over time.
              </li>
              <li>
                Movement Type – Mechanical, automatic, and quartz movements are
                evaluated.
              </li>
              <li>
                Box & Papers – Watches with their original box, warranty, and
                papers are more desirable.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="pt-10 md:pt-14 xl:pt-16 2xl:pt-36">
        <div className="container mx-auto px-6 2xl:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-5xl 2xl:text-6xlfont-belleza mb-4 lg:mb-8 2xl:mb-16">
              We’re Here to Help You Every Step of the Way
            </h2>
            <p className=" md:text-md lg:text-lg 2xl:text-[24px] leading-relaxed">
              Buying or selling a luxury watch doesn’t have to be complicated. 
              Our experienced team is here to make the process smooth, transparent, and rewarding.
              We provide honest evaluations, expert guidance, and competitive offers—ensuring you always feel confident in your decision.
            </p>
            <p className=" md:text-md lg:text-lg 2xl:text-[24px] pt-6">
              Whether you're parting with a cherished timepiece or searching for your next investment watch,
              we’re committed to delivering exceptional service from start to finish.
              Your satisfaction is our priority.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 items-end">
            <CustomImage
              srcAttr={watches2}
              titleAttr="Watch | Rolex | Citizen"
              className="w-[90%]  lg:!h-[350px] 2xl:!h-auto object-cover"
            />
            <CustomImage
              srcAttr={watches3}
              titleAttr="Watch | Rolex | Citizen"
              className="w-[100%]  lg:!h-[450px] 2xl:!h-auto  object-cover"
            />
          </div>
        </div>
      </section>
      <section className="pt-10 md:pt-14 xl:pt-16 2xl:pt-36">
        <KeepInTouch />
      </section>
    </>
  );
}
