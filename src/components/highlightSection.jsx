import commonHighlightImg from "@/assets/images/what-we-sell/highlight-image.webp";
import CustomImage from "./customImage";

export default function HighlightSection({
  title = "",
  description = "",
  points = [],
  imgSrc,
  altAttr = "",
  titleAttr = "",
}) {
  return (
    <section className=" mt-10 md:mt-14 xl:mt-24 2xl:mt-36 bg-black text-white lg:pt-10">
      <div className="w-full  flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between items-center lg:border-t lg:border-[#595959]">
        <div className="lg:w-[35%]">
          <CustomImage
            srcAttr={imgSrc || commonHighlightImg}
            altAttr={altAttr}
            titleAttr={titleAttr}
            className="object-cover w-full"
          />
        </div>
        <div className="lg:w-[75%] p-8 md:p-10 lg:px-20 2xl:px-24 border-t border-[#595959] lg:border-0">
          <h3 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl font-belleza uppercase">
            {title}
          </h3>
          {description ? (
            <p className="mt-6 md:text-md lg:text-lg lg:text-start 2xl:text-[24px]">
              {description}
            </p>
          ) : null}
          <div className="ml-3 mt-2">
            {points.map((point, i) => {
              return (
                <h3
                  className="list-item py-3 2xl:py-5 md:text-md lg:text-lg lg:text-start 2xl:text-[24px]"
                  key={i}
                >
                  <span className="font-semibold">{point.title} : </span>
                  {point.description}
                </h3>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
