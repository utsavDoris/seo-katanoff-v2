"use client";
import watchesBrand1 from "@/assets/images/what-we-buy/watches/watches-brand-1.webp";
import watchesBrand2 from "@/assets/images/what-we-buy/watches/watches-brand-2.webp";
import watchesBrand3 from "@/assets/images/what-we-buy/watches/watches-brand-3.webp";
import watchesBrand4 from "@/assets/images/what-we-buy/watches/watches-brand-4.webp";
import watchesBrand5 from "@/assets/images/what-we-buy/watches/watches-brand-5.webp";
import watchesBrand6 from "@/assets/images/what-we-buy/watches/watches-brand-6.webp";
import watchesBrand7 from "@/assets/images/what-we-buy/watches/watches-brand-7.webp";
import watchesBrand8 from "@/assets/images/what-we-buy/watches/watches-brand-8.webp";
import watchesBrand10 from "@/assets/images/what-we-buy/watches/watches-brand-10.webp";
import watchesBrand11 from "@/assets/images/what-we-buy/watches/watches-brand-11.webp";
import watchesBrand12 from "@/assets/images/what-we-buy/watches/watches-brand-12.webp";
import watchesBrand13 from "@/assets/images/what-we-buy/watches/watches-brand-13.webp";

import { motion } from "framer-motion";
import CustomImage from "./customImage";

const tempTopRow = [
  { img: watchesBrand1, titleAttr: "", altAttr: "" },
  { img: watchesBrand2, titleAttr: "", altAttr: "" },
  { img: watchesBrand3, titleAttr: "", altAttr: "" },
  { img: watchesBrand4, titleAttr: "", altAttr: "" },
];

const tempMiddleRow = [
  { img: watchesBrand5, titleAttr: "", altAttr: "" },
  { img: watchesBrand6, titleAttr: "", altAttr: "" },
  { img: watchesBrand7, titleAttr: "", altAttr: "" },
  { img: watchesBrand8, titleAttr: "", altAttr: "" },
];

const tempBottomRow = [
  { img: watchesBrand10, titleAttr: "", altAttr: "" },
  { img: watchesBrand11, titleAttr: "", altAttr: "" },
  { img: watchesBrand12, titleAttr: "", altAttr: "" },
  { img: watchesBrand13, titleAttr: "", altAttr: "" },
];

const topRow = [...tempTopRow, ...tempTopRow, ...tempTopRow, ...tempTopRow];
const middleRow = [
  ...tempMiddleRow,
  ...tempMiddleRow,
  ...tempMiddleRow,
  ...tempMiddleRow,
];
const bottomRow = [
  ...tempBottomRow,
  ...tempBottomRow,
  ...tempBottomRow,
  ...tempBottomRow,
];

const MarqueeBrands = () => {
  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex items-center whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        {topRow.map((src, i) => (
          <div
            key={i}
            className={` flex-shrink-0 bg-white  ${
              i % 2 === 0 ? "" : "opacity-0"
            }`}
          >
            <CustomImage
              srcAttr={src.img}
              altAttr={src.altAttr}
              titleAttr={src.titleAttr}
              className="h-36 w-72"
            />
          </div>
        ))}
      </motion.div>

      <motion.div
        className="flex items-center whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        {middleRow.map((src, i) => (
          <div
            key={i}
            className={` flex-shrink-0 bg-white  ${
              i % 2 !== 0 ? "" : "opacity-0"
            }`}
          >
            <CustomImage
              srcAttr={src.img}
              altAttr={src.altAttr}
              titleAttr={src.titleAttr}
              className="h-36 w-72"
            />
          </div>
        ))}
      </motion.div>
      <motion.div
        className="flex items-center whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        {bottomRow.map((src, i) => (
          <div
            key={i}
            className={` flex-shrink-0 bg-white  ${
              i % 2 === 0 ? "" : "opacity-0"
            }`}
          >
            <CustomImage
              srcAttr={src.img}
              altAttr={src.altAttr}
              titleAttr={src.titleAttr}
              className="h-36 w-72"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeBrands;
