import Marquee from "@/components/Marquee";
import keepInTouch from "@/assets/images/keep-in-touch/keep-in-touch-1.webp";

import EmailComponent from "./EmailComponent";
import CustomImage from "./customImage";

const KeepInTouch = () => {
  return (
    <section
      className={`mt-10 w-full bg-gradient-to-t from-[#fff5df] to-[#ffffff52] justify-center `}
    >
      <div>
        <Marquee />
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:gap-4 py-6 md:pt-24 container">
        <div className="mx-auto md:py-12 lg:pb-none ">
          <div>
            <h2 className=" text-xl md:text-3xl lg:text-5xl 2xl:text-7xl 4xl:text-8xl font-belleza text-black mx-auto z-10 leading-10  ">
              Keep in touch
            </h2>
            <p className="lg:py-4 py-2 font-inter text-sm text-blacklg:text-sm 2xl:text-lg lg:w-[70%]">
              Stay in the loop and be the first to discover our latest diamond
              jewelry collections and exclusive offers.
            </p>
          </div>
          <EmailComponent />
        </div>
        <div className="flex justify-end">
          <CustomImage
            srcAttr={keepInTouch}
            titleAttr="Diamond Bracelet | Diamond Jewelry"
            altAttr=""
            className="w-[80%]  object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default KeepInTouch;
