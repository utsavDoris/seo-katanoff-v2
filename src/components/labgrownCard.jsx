import React from "react";
import card from "@/assets/images/labgrown-diamond/card.svg";
import CustomImage from "./customImage";

export default function LabgrownCard({
  index = 1,
  title = "",
  videoSrc = "",
  imageSrc,
  altAttr = "",
  titleAttr = "",
  description = "",
}) {
  return (
    <div className="relative w-64 2xl:w-80 2xl:h-[500px] text-[#E2E2E2] ">
      <CustomImage
        srcAttr={card}
        className="w-full h-full absolute inset-0 z-0 object-contain"
        titleAttr=""
        altAttr=""
      />

      <div className="relative z-10 p-4 flex flex-col gap-2 h-full ">
        <div className="flex w-full gap-2 2xl:gap-4 2xl:mt-12 ">
          <h3 className="text-2xl 2xl:text-3xl font-belleza">{index}.</h3>
          {videoSrc ? (
            <video
              muted
              preload="none"
              aria-label="Video player"
              playsInline
              className="w-[200px] 2xl:w-[250px] h-[150px] 2xl:h-[200px] object-cover rounded"
              autoPlay
              loop
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : null}
          {imageSrc ? (
            <CustomImage
              src={imageSrc}
              altAttr={altAttr}
              titleAttr={titleAttr}
              className="w-[200px] 2xl:w-[250px] h-[150px] 2xl:h-[200px] object-cover rounded"
            />
          ) : null}
        </div>

        <div className="ps-4 2xl:ps-6">
          <h3 className="font-belleza text-3xl 2xl:text-4xl 2xl:pb-2">
            {title}
          </h3>
          <p className="text-base 2xl:text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
}
