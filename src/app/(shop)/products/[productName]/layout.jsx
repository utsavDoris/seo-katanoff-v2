import { helperFunctions, WebsiteUrl } from "@/_helper";
import { productService } from "@/_services";
import { generateMetadata as generateMetaConfig } from "@/_utils/metaConfig";

export async function generateMetadata({ params, searchParams }) {
  try {
    let { productName } = params;
    productName = helperFunctions?.stringReplacedWithSpace(productName);

    // If product name is missing → Return 404-friendly metadata
    if (!productName) {
      return {
        title: "Product Not Found | Katanoff Jewelry",
        description: "This product does not exist or has been removed.",
        robots: "noindex, nofollow",
      };
    }

    // ✅ Fetch product details directly
    const productDetail = await productService.getSingleProduct(productName);

    if (!productDetail) {
      return {
        title: "Product Not Found | Katanoff Jewelry",
        description: "Sorry, this product does not exist or has been removed.",
        robots: "noindex, nofollow",
      };
    }

    // ✅ Build OpenGraph image
    const ogImage =
      productDetail?.yellowGoldThumbnailImage ||
      productDetail?.roseGoldThumbnailImage ||
      productDetail?.whiteGoldThumbnailImage ||
      productDetail?.roseGoldImages?.[0]?.image ||
      productDetail?.whiteGoldImages?.[0]?.image ||
      productDetail?.yellowGoldImages?.[0]?.image ||
      `${WebsiteUrl}/opengraph-image.png`;

    // ✅ Construct full canonical URL (including query params)
    const searchParamsString = searchParams
      ? `?${new URLSearchParams(searchParams).toString()}`
      : "";
    const canonicalUrl = `${WebsiteUrl}/products/${params.productName}${searchParamsString}`;

    // ✅ Pass dynamic product data to meta generator
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
      url: canonicalUrl,
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
