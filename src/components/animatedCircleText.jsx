import CustomImage from "./customImage";

const AnimatedCircleText = ({
  text = "",
  textClassName,
  arrowImage,
  imgClassName,
  speed = 10,
  titleAttr = "",
  altAttr = "",
  starAltAttr = "",
  starTitleAttr = "",
  textColor = "",
  purityImage,
}) => {
  return (
    <div
      className={`relative flex items-center justify-center rounded-full w-[150px] h-[150px] md:w-[200px] md:h-[200px]`}
    >
      <div className="bg-[#212121] bg-center bg-cover rounded-full absolute">
        <div className="flex h-24 justify-center w-24 items-center">
          <CustomImage
            srcAttr={arrowImage}
            className={`object-cover w-5 lg:w-auto ${imgClassName}`}
            altAttr={titleAttr}
            titleAttr={altAttr}
          />
        </div>
      </div>
      <div
        className={`h-full text-[0.75rem] ${
          textColor == "black" ? "text-[#939393] font-semibold" : "text-white"
        } w-full absolute font-mono md:text-[1rem]`}
        style={{
          animation: `textRotation ${speed}s linear infinite`,
        }}
      >
        {text.split("").map((char, i) => (
          <span
            key={i}
            className={`absolute left-1/2 text-[1em] md:text-[1.2em] origin-[0_75px] md:origin-[0_100px] uppercase  ${textClassName}`}
            style={{
              transform: `rotate(${(i * 360) / text.length}deg)`,
            }}
          >
            {char === "•" ? (
              <CustomImage
                srcAttr={purityImage}
                className="h-4 w-4 inline-block lg:pe-0 md:h-5 md:w-5 pe-1"
                altAttr={starAltAttr}
                titleAttr={starTitleAttr}
              />
            ) : (
              char
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCircleText;
