import React from "react";
import CustomImage from "./customImage";

export default function CategoryFeatureSection({
  title = "",
  description = "",
  categoryImage,
  titleAttr = "",
  altAttr = "",
}) {
  return (
    <section className="container pt-10 md:pt-14 xl:pt-24 2xl:pt-36">
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center leading-relaxed gap-10 lg:gap-14">
        <div>
          <h3 className="font-belleza text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl text-black uppercase">
            {title}
          </h3>
          <p className="mt-4 md:text-md lg:text-lg 2xl:text-[24px]">
            {description}
          </p>
        </div>
        <div>
          <CustomImage
            srcAttr={categoryImage}
            titleAttr={titleAttr}
            altAttr={altAttr}
            className="lg:shadow-[38px_-40px_0px_-11px_rgba(0,0,0)] 2xl:shadow-[38px_-44px_0px_-1px_rgba(0,0,0)]  object-cover"
          />
        </div>
      </div>
    </section>
  );
}
