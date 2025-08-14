"use client";
import dynamic from "next/dynamic";

// Common Component
export const CustomImage = dynamic(() => import("./customImage"), {
  ssr: false,
});

export const DropDown = dynamic(() => import("./dropdown"), { ssr: false });

export const Spinner = dynamic(() => import("./spinner"), { ssr: false });

export const AnimatedSection = dynamic(() => import("./AnimatedSection"), {
  ssr: false,
});

export const DiamondJewelrySwipper = dynamic(
  () => import("./DiamondJewelrySwipper"),
  { ssr: false }
);

export const MarqueeBrands = dynamic(() => import("./MarqueeBrands"), {
  ssr: false,
});

export const MarqueeText = dynamic(() => import("./MarqueeText"), {
  ssr: false,
});

export const AnimatedCircleText = dynamic(
  () => import("./animatedCircleText"),
  { ssr: false }
);

export const HorizontalScrollCarousel = dynamic(
  () => import("./horizontalScrollCarousel"),
  { ssr: false }
);

export const AlternatingFeatureBlock = dynamic(
  () => import("./alternatingFeatureBlock"),
  {
    ssr: false,
  }
);

export const FAQSection = dynamic(() => import("./FAQSection"), {
  ssr: false,
});

export const TextCarousel = dynamic(() => import("./TextCarousel"), {
  ssr: false,
});

export const ContactForm = dynamic(() => import("./contactForm"), {
  ssr: false,
});

export const EstateJewelrySwiper = dynamic(
  () => import("./EstateJewelrySwiper"),
  {
    ssr: false,
  }
);

export const FallingCoins = dynamic(() => import("./FallingCoins"), {
  ssr: false,
});

export const TwoImagesAndCenterText = dynamic(
  () => import("./TwoImagesAndCenterText"),
  {
    ssr: false,
  }
);

export const VideoSection = dynamic(() => import("./VideoSection"), {
  ssr: false,
});

export const GoldSilverPlatinumScrollbar = dynamic(
  () => import("./GoldSilverPlatinumScrollbar"),
  { ssr: false }
);

export const Timeline = dynamic(() => import("./Timeline"), { ssr: false });

export const ScrollImageSection = dynamic(
  () => import("./scrollImageSection"),
  { ssr: false }
);
