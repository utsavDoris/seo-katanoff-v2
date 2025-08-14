import { WebsiteUrl } from "@/utils/environments";
import { generateMetadata } from "@/utils/metaConfig";

const META_TITLE = "Get in Touch with Us - Tele Gold Jewelrs";
const META_DESCRIPTION =
  "Have questions about selling gold or jewelry? Contact our team today for expert assistance and personalized service.";
const META_KEYWORDS =
  "contact us, reach out, sell jewelry, sell coins, sell watches, customer support, jewelry buyers, coin dealers, fine watches, get in touch, contact information, support services";
const CANONICAL_URL = `${WebsiteUrl}/contact-us`;

export const metadata = generateMetadata({
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: META_KEYWORDS,
  url: CANONICAL_URL,
});
export default function ContactUsLayout({ children }) {
  return <div>{children}</div>;
}
