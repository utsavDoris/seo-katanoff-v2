import { LinkButton } from "./button";
import labgrownBg from "@/assets/images/labgrown-diamond/hero-bg.webp";
import earthBg from "@/assets/images/labgrown-diamond/earth-bg.webp";
import labgrownHero from "@/assets/images/labgrown-diamond/hero-diamond.gif";
import CustomImage from "./customImage";

const Hero = ({
  title,
  description,
  imageSrc,
  videoSrc,
  textAlignment = "center",
  isHomePage = false,
  titleAttr = "",
  altAttr = "",
  isLabgrownDiamondPage = false,
}) => {
  return (
    <section
      className={`relative overflow-hidden ${
        isHomePage || isLabgrownDiamondPage
          ? "h-screen"
          : "h-[55vh]  md:h-[60vh] lg:h-[65vh]"
      }`}
    >
      {imageSrc ? (
        <div className="relative w-full h-full">
          <CustomImage
            srcAttr={imageSrc}
            altAttr={altAttr}
            titleAttr={titleAttr}
            priority
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 pointer-events-none z-5"
            style={{
              background: `
        radial-gradient(circle at top left, rgba(0, 0, 0, 0.92), transparent 50%),
        radial-gradient(circle at top right, rgba(0, 0, 0, 0.88), transparent 50%),
        radial-gradient(circle at bottom left, rgba(0, 0, 0, 0.93), transparent 50%),
        radial-gradient(circle at bottom right, rgba(0, 0, 0, 0.89), transparent 50%)
      `,
            }}
          />
        </div>
      ) : (
        <video
          muted
          preload="none"
          aria-label="Video player"
          playsInline
          className="absolute top-0 left-0 w-full h-full"
          autoPlay
          loop
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {isLabgrownDiamondPage ? (
        <div className="relative">
          <CustomImage
            srcAttr={labgrownBg}
            className="w-full h-screen"
            titleAttr=""
            altAttr=""
          />

          <div className="absolute inset-0 flex items-center justify-center">
            {" "}
            <CustomImage
              srcAttr={earthBg}
              className="hidden w-[600px] 2xl:w-[800px]  lg:block"
              titleAttr=""
              altAttr=""
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <CustomImage
              srcAttr={labgrownHero}
              className="lg:w-full"
              titleAttr="Diamond"
            />
          </div>
          <div className="container absolute inset-0 flex items-center justify-center z-40">
            <h1 className="text-white pt-8 flex flex-col text-4xl md:text-8xl lg:text-[100px] 2xl:text-[130px] uppercase font-bold leading-tight">
              <span>Discover</span>
              <span>the Brilliance of</span>
              <span className="md:text-center">Lab-Grown </span>
              <span>Diamonds</span>
            </h1>
          </div>
        </div>
      ) : null}
      {isHomePage ? (
        <>
          <div className="container absolute inset-0 flex items-center w-full">
            <div className="md:w-[80%] lg:w-[50%] 2x:w-[50%] text-white">
              <h3 className="text-xl md:text-2xl font-belleza">
                Welcome to the
              </h3>
              <h1 className="text-2xl md:text-3xl lg:text-5xl  2xl:text-6xl  font-belleza uppercase mt-2 mb-8">
                {title}
              </h1>
              {description && (
                <p className="text-base lg:text-lg">{description}</p>
              )}

              <LinkButton
                href="/what-we-buy/diamond-jewelry"
                arrow={true}
                className="!py-0 lg:!h-[2.3rem] w-fit mt-10 4xl:!h-[3rem] !bg-transparent hover:!bg-white hover:!text-black  "
              >
                Learn More
              </LinkButton>
            </div>
          </div>
        </>
      ) : (
        <>
          {!isLabgrownDiamondPage ? (
            <div className="absolute bg-black/50 inset-0 flex justify-center items-center p-4"></div>
          ) : null}

          <div className="absolute inset-0 flex justify-center items-center p-4">
            <div
              className={`flex flex-col justify-center items-${textAlignment} w-full 
    max-w-[90%] sm:max-w-[70%] lg:max-w-[60%] text-${textAlignment} gap-3`}
            >
              {/* <h1 className="text-2xl md:text-4xl  2xl:text-6xl text-white font-belleza uppercase">
                {title}
              </h1> */}
              {title ? (
                <h1 className="text-2xl md:text-4xl  2xl:text-6xl text-white font-belleza uppercase">
                  {title}
                </h1>
              ) : null}
              {description && (
                <p className="text-[17px] md:text-[25px] text-white">
                  {description}
                </p>
              )}
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Hero;
