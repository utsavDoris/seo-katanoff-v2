"use client";
import { useState, useRef } from "react";
import CustomImage from "./customImage";

const VideoSection = ({
  src,
  videoClassName,
  thumbnail,
  titleAttr = "",
  altAttr = "",
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleThumbnailClick = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };

  return (
    <section className="w-full overflow-hidden">
      <div className="relative">
        <div className={`flex justify-center mx-auto ${videoClassName}`}>
          <video
            ref={videoRef}
            muted
            controls
            preload="none"
            aria-label="Video player"
            className="h-full w-full object-cover overflow-hidden"
            playsInline
          >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {!isPlaying && (
          <div
            className={`flex  justify-center  absolute inset-0 items-center mx-auto ${videoClassName}`}
          >
            <CustomImage
              srcAttr={thumbnail}
              titleAttr={titleAttr}
              altAttr={altAttr}
              fill
              className="h-full w-full object-cover overflow-hidden"
            />

            <button
              onClick={handleThumbnailClick}
              className="flex bg-primary h-12 justify-center rounded-full w-12 animate-[pulse_2s_ease-in-out_infinite] cursor-pointer items-center lg:h-16 lg:w-16 z-[12]"
            >
              <div className="border-b-[10px] border-b-transparent border-l-[16px] border-l-white border-t-[10px] border-t-transparent h-0 w-0 lg:border-b-[12px] lg:border-l-[20px] lg:border-t-[12px] ml-1" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoSection;
