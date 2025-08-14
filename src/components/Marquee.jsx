import diamondSvg from "@/assets/images/diamond.svg";
import starSvg from "@/assets/images/star.svg";
import CustomImage from "./customImage";

const Marquee = ({ variant = "telegold" }) => {
  return (
    <>
      {variant === "telegold" && (
        <div
          className="relative overflow-hidden  py-4 bg-black"
          style={{
            transform: "rotate(1.3deg) translateX(-1.83px)",
            transformOrigin: "center",
          }}
        >
          {/* Scrolling marquee */}
          <div className="flex animate-marquee-smooth-md  md:animate-marquee-smooth whitespace-nowrap gap-12">
            {[...Array(10).keys()].map((index) => (
              <div
                key={index}
                className="flex items-center gap-5 flex-shrink-0"
              >
                <CustomImage
                  srcAttr={diamondSvg}
                  titleAttr=""
                  altAttr=""
                  className="h-12 w-12 object-cover"
                />
                <h2 className="uppercase text-white text-2xl">
                  Telegold Jewelry
                </h2>
                <CustomImage
                  srcAttr={diamondSvg}
                  titleAttr=""
                  altAttr=""
                  className="h-12 w-12 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
      {variant === "contact" && (
        <div className="relative overflow-hidden">
          <div className="w-full h-full py-4">
            {/* Scrolling marquee */}
            <div className="flex animate-marquee-smooth-md  md:animate-marquee-smooth whitespace-nowrap gap-12">
              {[...Array(10).keys()].map((index) => (
                <div
                  key={index}
                  className="flex items-center gap-5 flex-shrink-0"
                >
                  <CustomImage
                    srcAttr={starSvg}
                    titleAttr=""
                    altAttr=""
                    className="h-12 w-12 object-cover"
                  />
                  <h2 className="text-[#D9D9D9] font-bold text-2xl md:text-4xl lg:text-5xl uppercase">
                    contact us
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {variant === "engagement-rings" && (
        <div className="w-full h-[60vh] lg:h-[70vh] flex items-center ">
          {/* Scrolling marquee */}
          <div className="flex animate-marquee-engagement-rings-md  md:animate-marquee-engagement-rings whitespace-nowrap gap-12">
            {[...Array(10).keys()].map((index) => (
              <div
                key={index}
                className="flex items-center gap-5 flex-shrink-0"
              >
                <h2 className="text-[#D9D9D9] font-bold text-[90px] md:text-[100px] lg:text-[180px] ">
                  Sealed with a promise, forever in your hands
                </h2>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Marquee;
