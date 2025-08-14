import commonPromoBanner from "@/assets/images/what-we-sell/promo-banner.webp";
import CustomImage from "./customImage";
export default function PromoBanner({
  title = "",
  description = "",
  promoBanner,
  altAttr = "",
  titleAttr = "",
  isEarringPage = false,
  className = "",
}) {
  return (
    <section className="container text-center pt-10 md:pt-14 xl:pt-24 2xl:pt-36">
      <div className="flex flex-col items-center ">
        <h3
          className={`text-2xl md:text-4xl lg:text-[80px] 2xl:text-[110px] lg:leading-tight -mb-36 2xl:-mb-48 z-40 uppercase font-belleza text-black ${className}`}
        >
          {title}
        </h3>
        <div className="lg:w-[80%] ">
          <CustomImage
            srcAttr={promoBanner || commonPromoBanner}
            className="object-cover lg:h-[80vh]"
            titleAttr={titleAttr}
            altAttr={altAttr}
          />
          {isEarringPage ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center mt-4">
              <h3 className="font-semibold text-lg block lg:text-start">
                Premium Craftsmanship
              </h3>
              <div>
                {" "}
                <p className="mt-2 md:text-md lg:text-lg lg:text-start 2xl:text-[24px]">
                  {description}
                </p>
              </div>
            </div>
          ) : (
            <p className="mt-5 md:text-md lg:text-lg  2xl:text-[24px]">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
