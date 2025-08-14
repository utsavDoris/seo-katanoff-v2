import { WebsiteUrl } from "@/utils/environments";
import { generateMetadata } from "@/utils/metaConfig";

const META_TITLE = "Turn Your Rare Coins and Collectibles into Instant Cash";
const META_DESCRIPTION =
  "Buy or sell rare coins and collectibles with trusted experts. Get fast appraisals, accurate valuations, and competitive cash offers.";
const META_KEYWORDS =
  "buy coins, sell coins, rare coin buyers, collectible coin dealers, coin appraisals, antique coins, cash for coins, gold coins, silver coins, coin resale, coin dealers near me";
const CANONICAL_URL = `${WebsiteUrl}/rare-coins-collection`;

export const metadata = generateMetadata({
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: META_KEYWORDS,
  url: CANONICAL_URL,
});
export default function RareCoinsCollectionLayout({ children }) {
  return <div>{children}</div>;
}
