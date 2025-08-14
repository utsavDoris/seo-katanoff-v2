import { WebsiteUrl } from "@/utils/environments";
import { generateMetadata } from "@/utils/metaConfig";

const META_TITLE = "Timeless Jewelry, Unique Craftsmanship, and Unmatched";
const META_DESCRIPTION =
  "We offer fine jewelry with timeless designs and expert craftsmanship. Discover elegance, value, and a trusted experience.";
const META_KEYWORDS =
  "fine jewelry, estate jewelry, timeless designs, unique craftsmanship, luxury watches, rare coins, diamonds, premium jewelry, elegant accessories, handcrafted jewelry";
const CANONICAL_URL = `${WebsiteUrl}/about-us`;

export const metadata = generateMetadata({
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: META_KEYWORDS,
  url: CANONICAL_URL,
});
export default function AboutUsLayout({ children }) {
  return <div>{children}</div>;
}
