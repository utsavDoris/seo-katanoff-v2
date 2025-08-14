"use client";
import CustomImage from "./customImage";
import { MarqueeText } from "./dynamiComponents";

const FallingCoins = ({ coins, description }) => {
  const coinData = [
    {
      src: coins[1],
      left: "50%",
      width: "250px",
      delay: "0s",
      altAttr: "",
      titleAttr: "",
    },
    {
      src: coins[2],
      left: "75%",
      width: "200px",
      delay: "-2.5s",
      altAttr: "",
      titleAttr: "",
    },
    {
      src: coins[0],
      left: "25%",
      width: "200px",
      delay: "-5s",
      titleAttr: "",
      titleAttr: "",
    },
  ];

  return (
    <div className="relative w-full h-[80vh] bg-offwhite flex flex-col items-center justify-center overflow-hidden">
      {coinData.map((coin, index) => (
        <CustomImage
          key={index}
          srcAttr={coin.src}
          altAttr={coin?.altAttr}
          titleAttr={coin?.titleAttr}
          className="absolute animate-fall z-50"
          style={{
            left: coin.left,
            width: coin.width,
            animationDelay: coin.delay,
          }}
        />
      ))}

      <MarqueeText
        text={["We Buy & SELL  •  RARE COINS & COLLECTIBLES  •"]}
        isAbsolute={false}
        MarqueeClassName="md:text-xl lg:text-6xl"
      />

      <p className="mt-6 text-md md:text-xl lg:text-2xl max-w-7xl text-center z-10 relative  px-4 py-2 rounded-md">
        {description}
      </p>
    </div>
  );
};

export default FallingCoins;
