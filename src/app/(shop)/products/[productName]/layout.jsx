import { helperFunctions } from "@/_helper";
import { productService } from "@/_services";
import { generateMetadata as generateMetaConfig } from "@/_utils/metaConfig";

export async function generateMetadata({ params }) {
  try {
    let { productName } = params;
    productName = helperFunctions?.stringReplacedWithSpace(productName);

    if (!productName) {
      return {
        title: "Product Not Found | Katanoff Jewelry",
        description: "This product does not exist or has been removed.",
        robots: "noindex, nofollow",
      };
    }
    // ✅ Fetch product details directly (no thunk)
    const productDetail = await productService.getSingleProduct(productName);

    console.log("Fetched Product Detail:", productDetail);

    if (!productDetail) {
      return {
        title: "Product Not Found | Katanoff Jewelry",
        description: "Sorry, this product does not exist or has been removed.",
        robots: "noindex, nofollow",
      };
    }

    const ogImage =
      // productDetail?.yellowGoldThumbnailImage ||
      // productDetail?.roseGoldThumbnailImage ||
      // productDetail?.whiteGoldThumbnailImage ||
      // productDetail?.roseGoldImages?.[0]?.image ||
      // productDetail?.whiteGoldImages?.[0]?.image ||
      // productDetail?.yellowGoldImages?.[0]?.image ||
      "/images/default-meta-image.webp";

    const customMeta = {
      title: `${productDetail.productName} | Katanoff Jewelry`,
      description:
        productDetail?.description?.replace(/<[^>]*>/g, "")?.slice(0, 160) ||
        "Explore the latest jewelry designs with Katanoff. High-quality, beautifully crafted pendants and more.",
      keywords: [
        productDetail.productName,
        ...(productDetail?.collectionNames || []),
        productDetail?.categoryName,
        ...(productDetail?.subCategoryNames?.map((s) => s.title) || []),
        ...(productDetail?.productTypeNames?.map((s) => s.title) || []),
      ]
        .filter(Boolean)
        .join(", "),
      openGraphImage: ogImage,
    };
    return generateMetaConfig({ customMeta });
  } catch (error) {
    console.error("Metadata generation failed:", error);
    return {
      title: "Error | Katanoff Jewelry",
      description: "Something went wrong. Please try again later.",
    };
  }
}

export default function ProductLayout({ children }) {
  return children;
}
