import { WebsiteUrl } from "@/utils/environments";
import { generateMetadata } from "@/utils/metaConfig";

const META_TITLE =
  "Buy or Sell Vintage Platinum Jewelry | Timeless Elegance & Style";
const META_DESCRIPTION =
  "Explore or sell vintage platinum jewelry with confidence. We offer expert evaluations and top prices for heirloom-quality pieces.";
const META_KEYWORDS =
  "buy platinum jewelry, sell platinum jewelry, platinum rings, vintage platinum, estate platinum, platinum jewelry dealers, platinum buyers, platinum jewelry resale";
const CANONICAL_URL = `${WebsiteUrl}/vintage-platinum-jewelry`;

export const metadata = generateMetadata({
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: META_KEYWORDS,
  url: CANONICAL_URL,
});
export default function VintagePlatinumJewelryLayout({ children }) {
  return <div>{children}</div>;
}
