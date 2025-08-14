import { WebsiteUrl } from "@/utils/environments";
import { generateMetadata } from "@/utils/metaConfig";

const META_TITLE =
  "Buy or Sell Watches and Fine Timepieces – Get Instant Cash Today";
const META_DESCRIPTION =
  "Buy or sell luxury watches like Rolex, Omega, and more. Get accurate valuations, fair prices, and a smooth experience from trusted watch specialists.";
const META_KEYWORDS =
  "buy watches, sell watches, Rolex buyers, Omega buyers, luxury watch buyers, fine watches, timepiece dealers, watch appraisal, watch resale, high-end watches";
const CANONICAL_URL = `${WebsiteUrl}/watches`;

export const metadata = generateMetadata({
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: META_KEYWORDS,
  url: CANONICAL_URL,
});
export default function WatchesLayout({ children }) {
  return <div>{children}</div>;
}
