import { WebsiteUrl } from "@/utils/environments";
import { generateMetadata } from "@/utils/metaConfig";

const META_TITLE = "Buy or Sell Gold, Silver, and Platinum with Confidence";
const META_DESCRIPTION =
  "Buy or sell your gold, silver, or platinum with confidence. We offer top payouts, fair evaluations, and expert service for all precious metals.";
const META_KEYWORDS =
  "buy gold, sell gold, buy silver, sell silver, buy platinum, sell platinum, gold dealers, silver dealers, platinum dealers, cash for gold, precious metals buyers, local gold and silver buyers";
const CANONICAL_URL = `${WebsiteUrl}/gold-silver-platinum`;

export const metadata = generateMetadata({
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: META_KEYWORDS,
  url: CANONICAL_URL,
});
export default function GoldSilverPlatinumLayout({ children }) {
  return <div>{children}</div>;
}
