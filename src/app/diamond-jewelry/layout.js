import { WebsiteUrl } from "@/utils/environments";
import { generateMetadata } from "@/utils/metaConfig";

const META_TITLE = "Get Instant Value for Your Diamond Jewelry";
const META_DESCRIPTION =
  "Explore or sell stunning diamond jewelry including rings, earrings, and necklaces. Enjoy fair pricing, expert guidance, and a stress-free process.";
const META_KEYWORDS =
  "buy diamond jewelry, sell diamond jewelry, diamond rings, diamond earrings, diamond necklaces, diamond buyers, diamond appraisals, diamond resale, certified diamond jewelry";
const CANONICAL_URL = `${WebsiteUrl}/diamond-jewelry`;

export const metadata = generateMetadata({
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: META_KEYWORDS,
  url: CANONICAL_URL,
});
export default function DiamondJewelryLayout({ children }) {
  return <div>{children}</div>;
}
