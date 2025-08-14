import Hero from "@/components/Hero";
import heroVintage from "@/assets/images/what-we-buy/vintage-platinum-jewelry/home-vintage.webp";
import KeepInTouch from "@/components/KeepInTouch";
import vintage1 from "@/assets/images/what-we-buy/vintage-platinum-jewelry/vintage-1.webp";
import vintage2 from "@/assets/images/what-we-buy/vintage-platinum-jewelry/vintage-2.webp";
import vintage3 from "@/assets/images/what-we-buy/vintage-platinum-jewelry/vintage-3.webp";
import vintage4 from "@/assets/images/what-we-buy/vintage-platinum-jewelry/vintage-4.webp";
import vintage5 from "@/assets/images/what-we-buy/vintage-platinum-jewelry/vintage-5.webp";
import vintage6 from "@/assets/images/what-we-buy/vintage-platinum-jewelry/vintage-6.webp";
import vintage7 from "@/assets/images/what-we-buy/vintage-platinum-jewelry/vintage-7.webp";
import vintage8 from "@/assets/images/what-we-buy/vintage-platinum-jewelry/vintage-8.webp";
import vintage9 from "@/assets/images/what-we-buy/vintage-platinum-jewelry/vintage-9.webp";
import vintage10 from "@/assets/images/what-we-buy/vintage-platinum-jewelry/vintage-10.webp";
import vintage11 from "@/assets/images/what-we-buy/vintage-platinum-jewelry/vintage-11.webp";
import vintage12 from "@/assets/images/what-we-buy/vintage-platinum-jewelry/vintage-12.webp";
import vintage13 from "@/assets/images/what-we-buy/vintage-platinum-jewelry/vintage-13.webp";
import vintage14 from "@/assets/images/what-we-buy/vintage-platinum-jewelry/vintage-14.webp";
import vintage15 from "@/assets/images/what-we-buy/vintage-platinum-jewelry/vintage-15.webp";
import HeadingTitle from "@/components/HeadingTitle";
import CustomImage from "@/components/customImage";

const categories = [
  {
    label: "Rings",
    image: vintage3,
    titleAttr: "Diamond Ring | Diamond Jewelry",
    altAttr: "Tele Gold Jewelers | Diamond Jewelry, Coin, Gold, Silver, Platinum",
  },
  {
    label: "Earings",
    image: vintage8,
    titleAttr: "Gold Jewelry | Diamond Jewelry",
    altAttr: "Tele Gold Jewelers | Diamond Jewelry, Coin, Gold, Silver, Platinum",
  },
  {
    label: "Necklace",
    image: vintage7,
    titleAttr: "Gold Jewelry | Diamond Jewelry",
    altAttr: "Tele Gold Jewelers | Diamond Jewelry, Coin, Gold, Silver, Platinum",
  },
  {
    label: "Bracelets",
    image: vintage9,
    titleAttr: "Gold Jewelry | Diamond Jewelry",
    altAttr: "Tele Gold Jewelers | Diamond Jewelry, Coin, Gold, Silver, Platinum",
  },
];
const features = [
  {
    title: "Timeless Craftsmanship",
    description:
      "Showcasing intricate designs that reflect the artistry of bygone eras.",
    image: vintage11,
    titleAttr: "Diamond Ring | Diamond Jewelry",
    altAttr: "Tele Gold Jewelers | Diamond Jewelry, Coin, Gold, Silver, Platinum",
  },
  {
    title: "Rare Elegance",
    description:
      "A symbol of exclusivity with distinctive vintage details and unique charm.",
    image: vintage12,
    titleAttr: "Diamond",
    altAttr: "Tele Gold Jewelers | Diamond Jewelry, Coin, Gold, Silver, Platinum",
  },
  {
    title: "Lasting Durability",
    description:
      "Platinum’s strength ensures your treasured piece endures for generations.",
    image: vintage13,
    titleAttr: "Antique Jewelry | Diamond Jewelry",
    altAttr: "Tele Gold Jewelers | Diamond Jewelry, Coin, Gold, Silver, Platinum",
  },
  {
    title: "Historic Value",
    description:
      "Each piece holds historical significance, echoing stories from a rich past.",
    image: vintage14,
    titleAttr: "Diamonds",
    altAttr: "Tele Gold Jewelers | Diamond Jewelry, Coin, Gold, Silver, Platinum",
  },
];

const collectionArray = [
  {
    title: "Ring: Endless Radiance",
    description:
      "A timeless symbol of love and commitment, crafted for elegance and everyday brilliance.",
    image: vintage5,
    titleAttr: "Diamond Earring | Diamond Jewelry",
    altAttr: "Tele Gold Jewelers | Diamond Jewelry, Coin, Gold, Silver, Platinum",
  },
  {
    title: "Earring: Subtle Sparkle",
    description:
      "Delicate and refined, these earrings add a touch of grace to every look.",
    image: vintage6,
    titleAttr: "Gold Jewelry | Diamond Jewelry",
    altAttr: "Tele Gold Jewelers | Diamond Jewelry, Coin, Gold, Silver, Platinum",
  },
  {
    title: "Necklace: Classic Grace",
    description:
      "An exquisite statement piece that enhances your neckline with timeless beauty.",
    image: vintage10,
    titleAttr: "Diamond Ring | Diamond Jewelry",
    altAttr: "Tele Gold Jewelers | Diamond Jewelry, Coin, Gold, Silver, Platinum",
  },
  {
    title: "Bracelet: Elegant Charm",
    description:
      "A graceful accessory designed to add subtle sophistication to any outfit.",
    image: vintage4,
    titleAttr: "Gold Jewelry | Diamond Jewelry",
    altAttr: "Tele Gold Jewelers | Diamond Jewelry, Coin, Gold, Silver, Platinum",
  },
];
export default function VintagePlatinumJewelry() {
  return (
    <>
      <section>
        <Hero
          title="Celebrating the Legacy of Vintage Platinum Jewelry"
          imageSrc={heroVintage}
          textAlignment="center"
          titleAttr="Gold Jewelry | Diamond Jewelry"
          altAttr="Tele Gold Jewelers | Diamond Jewelry, Coin, Gold, Silver, Platinum"
        />
      </section>
      <div className="md:px-0 px-6">
        <section className="flex flex-col justify-between 2xl:pt-36 items-center md:flex-row md:pt-14 pt-10 xl:pt-16">
          <div className="md:pl-8 xl:pl-36">
            <div className="hidden md:block">
              <h2 className="text-3xl 3xl:text-9xl 4xl:text-[9rem] font-belleza md:text-5xl xl:text-7xl">
                Timeless Elegance
              </h2>

              <div className="flex items-center space-x-4">
                <div className="relative w-[200px] h-[250px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse at 40% 60%, #7ED4FF 0%, #489eef4a 50%, transparent 100%)] blur-2xl opacity-80 z-0 rounded-[40%_60%_60%_40%/50%_30%_70%_50%]" />

                  <div className="relative z-10">
                    <CustomImage
                      srcAttr={vintage2}
                      titleAttr="Diamond"
                      altAttr="Tele Gold Jewelers | Diamond Jewelry, Coin, Gold, Silver, Platinum"
                      className="rounded-full w-full h-full"
                    />
                  </div>
                </div>

                <h3 className="text-3xl xl:text-7xl 3xl:text-9xl 4xl:text-[7rem] font-belleza md:text-5xl">
                  Eternal Platinum
                </h3>
              </div>
            </div>

            <div className="flex justify-center text-center md:hidden px-2">
              <h2 className="text-3xl font-belleza">
                Timeless Elegance & Eternal Platinum
              </h2>
            </div>

            <div className="flex justify-center items-center mt-6">
              <p className="2xl:text-[24px] leading-relaxed lg:text-2xl 2xl:text-2xl md:text-lg md:w-[70%]">
                Discover the lasting beauty of platinum jewelry, known for its
                unmatched durability, purity, and classic charm. Whether it's
                modern designs or vintage heirlooms, platinum remains a timeless
                symbol of elegance and luxury.
              </p>
            </div>
          </div>

          <div className="flex h-full justify-end w-full md:mt-0 mt-6 xl:w-[80%]">
            <CustomImage
              srcAttr={vintage1}
              titleAttr="Gold Jewelry | Diamond Jewelry"
              className="h-full w-full object-cover xl:h-[90vh]"
            />
          </div>
        </section>
        <section className="2xl:pt-36 md:pt-14 pt-10 xl:pt-16">
          <HeadingTitle sectionName="Collection" />
          <div className="md:container 2xl:pt-20 lg:pt-14 md:pt-8 pt-4">
            <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-4 mx-auto  sm:grid-cols-2 xl:gap-12">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="shadow-md group overflow-hidden relative"
                >
                  <CustomImage
                    srcAttr={category.image}
                    titleAttr={category.titleAttr}
                    altAttr={category.altAttr}
                    className="h-full w-full duration-300 group-hover:scale-105 object-cover transition-transform"
                  />
                  <div className="flex bg-opacity-30 justify-center absolute inset-0 items-center">
                    <span className="text-2xl text-white font-belleza xl:text-3xl">
                      {category.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 xl:gap-12 md:container mx-auto px-4 2xl:pt-32 lg:pt-28 md:pt-20 pt-12">
            {collectionArray.map((item, index) => {
              const isReverse = index > 1;
              return (
                <div
                  key={item?.description}
                  className={`
                    flex flex-col 
                    lg:flex-row 
                    ${isReverse ? "lg:flex-row-reverse md:pt-8 xl:pt-16" : ""}
                    items-center lg:items-start 
                     md:gap-8 lg:gap-4 2xl:gap-12 w-full
                   `}
                >
                  <div className="relative w-[300px] sm:w-[320px] md:w-[320px] lg:w-[250px] xl:w-[280px] 2xl:w-[350px] 2xl:h-[300px] sm:h-[270px] md:h-[270px] lg:h-[200px] xl:h-[240px] shrink-0">
                    <div className="absolute bottom-5 left-5 w-full h-full border-2 border-[#E8B08A] z-0" />
                    <div className="relative z-10">
                      <CustomImage
                        src={item?.image}
                        titleAttr={item?.titleAttr}
                        altAttr={item?.altAttr}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="text-center lg:text-left flex flex-col gap-1 justify-center h-full md:max-w-[376px] py-6 md:py-0">
                    <h3 className="text-2xl lg:text-3xl 2xl:text-4xl font-belleza">
                      {item?.title}
                    </h3>
                    <p className="text-md lg:text-lg 2xl:text-xl 3xl:text-[24px]">
                      {item?.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="md:container 2xl:pt-36 md:pt-14 pt-10 xl:pt-16">
          <div className="flex justify-start">
            <h2 className="2xl:text-7xl font-belleza md:text-5xl xl:text-6xl text-4xl w-full 4xl:w-[55%] lg:w-[60%]">
              Key Features of Vintage Platinum Jewelry:
            </h2>
          </div>
          <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4 min-h-screen 2xl:pt-20 lg:pt-14 md:pt-8 pt-4">
            {features.map((item, index) => (
              <div
                key={index}
                className="relative w-full h-full min-h-[500px] group overflow-hidden rounded-md"
              >
                <CustomImage
                  srcAttr={item.image}
                  titleAttr={item.titleAttr}
                  altAttr={item.altAttr}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-start sm:justify-start lg:px-6 py-4 z-10">
                  <div className="text-white">
                    <h3 className="text-3xl lg-text-4xl font-belleza 3xl:text-[42px]">
                      {item.title}
                    </h3>
                    <p className="text-md lg:text-lg mt-1 w-[90%] md:max-w-[85%] pt-4">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="2xl:pt-36 md:pt-14 pt-10 xl:pt-16">
        <div className="bg-greyBg h-full lg:h-[50vh] grid grid-cols-1 lg:grid-cols-2">
          <div className="col-span-1 lg:col-start-2 px-6 md:px-12 my-auto text-center md:text-start py-8 md:py-14 lg:py-0">
            <h2 className="text-3xl md:text-2xl lg:text-4xl 2xl:text-7xl font-belleza leading-tight">
              WHAT MAKES <br className="hidden lg:block" />
              VINTAGE ELEGANT
            </h2>

            <p className="text-md lg:text-lg xl:text-xl 2xl:text-[24px] mt-3">
              “Vintage elegant” is all about timeless beauty, refined details,
              and a sense of history. Here’s what makes something embody vintage
              elegance:
            </p>
          </div>
        </div>

        <div className="md:container grid grid-cols-1 md:grid-cols-2 gap-4 items-center px-6 md-px-16 lg:translate-y-[-45%] xl:translate-y-[-30%]">
          <div className="relative w-full md:w-[90%] h-screen md:h-full lg:h-[650px] xl:h-[800px]  2xl:h-[950px] ">
            <CustomImage
              srcAttr={vintage15}
              titleAttr="Gold Jewelry | Diamond Jewelry"
              altAttr="Tele Gold Jewelers | Diamond Jewelry, Coin, Gold, Silver, Platinum"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="h-full flex flex-col justify-end">
            <div className="grid grid-cols-2 gap-16 mt-8">
              <div className="font-belleza w-[120%]">
                <h3 className="text-3xl lg:text-5xl font-belleza xl:text-8xl 3xl:text-9xl text-[#3838381A]">
                  01
                </h3>
                <p className="mt-1 text-2xl lg:text-3xl 2xl:text-5xl">
                  Classic Design
                </p>
              </div>
              <div className="font-belleza">
                <h3 className="text-3xl lg:text-5xl font-belleza xl:text-8xl 3xl:text-9xl text-[#3838381A]">
                  02
                </h3>
                <p className="mt-1 text-2xl lg:text-3xl 2xl:text-5xl">
                  Fine Materials
                </p>
              </div>
              <div className="font-belleza lg:mt-10 xl:mt-20 w-[120%]">
                <h3 className="text-3xl lg:text-5xl font-belleza xl:text-8xl 3xl:text-9xl text-[#3838381A]">
                  03
                </h3>
                <p className="mt-1 text-2xl lg:text-3xl 2xl:text-5xl">
                  Handcrafted Details
                </p>
              </div>
              <div className="font-belleza lg:mt-10 xl:mt-20">
                <h3 className="text-3xl lg:text-5xl font-belleza xl:text-8xl 3xl:text-9xl text-[#3838381A]">
                  04
                </h3>
                <p className="mt-1 text-2xl lg:text-3xl 2xl:text-5xl">
                  Timeless Appeal
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="md:pt-14 pt-10 lg:pt-0 lg:mt-[-5%]">
        <KeepInTouch />
      </section>
    </>
  );
}
