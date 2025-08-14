import { WebsiteUrl } from "@/utils/environments";
import { generateMetadata } from "@/utils/metaConfig";

const META_TITLE =
  "Buy or Buy Diamonds for the Best Value | Trusted Diamond Buyers";
const META_DESCRIPTION =
  "Whether you're buying or selling, our diamond experts offer competitive prices, honest appraisals, and a transparent, hassle-free process.";
const META_KEYWORDS =
  "buy diamonds, sell diamonds, loose diamonds, diamond appraisal, diamond buyers, diamond dealers, cash for diamonds, diamond jewelry trade, certified diamond buyers";
const CANONICAL_URL = `${WebsiteUrl}/diamond`;

export const metadata = generateMetadata({
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: META_KEYWORDS,
  url: CANONICAL_URL,
});
export default function DiamondLayout({ children }) {
  return <div>{children}</div>;
}
