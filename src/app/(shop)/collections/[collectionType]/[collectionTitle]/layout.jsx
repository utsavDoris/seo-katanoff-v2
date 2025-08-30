import {
  CATEGORIES,
  COLLECTION,
  helperFunctions,
  SUB_CATEGORIES,
  WebsiteUrl,
} from "@/_helper";
import { collectionService, productService } from "@/_services";
import { generateMetadata as generateMetaConfig } from "@/_utils/metaConfig";
import { headers } from "next/headers";

export async function generateMetadata({ params }) {
  try {
    let { collectionType, collectionTitle } = params;
    let metaTitle = "";
    let metaDesc = "";
    let metaKeyword = "";

    const headersList = headers();
    const fullUrl =
      headersList.get("x-url") ||
      headersList.get("referer") ||
      headersList.get("x-forwarded-host") ||
      "";
    const host = headersList.get("host");
    const protocol = headersList.get("x-forwarded-proto") || "https";
    const completeUrl = fullUrl || `${protocol}://${host}`;
    const urlObj = new URL(completeUrl);
    const searchParams = urlObj.searchParams;

    const parentCategory = searchParams.get("parentCategory") || "";
    const parentMainCategory = searchParams.get("parentMainCategory") || "";
    collectionTitle = helperFunctions.stringReplacedWithSpace(collectionTitle);

    if (collectionType === COLLECTION) {
      metaTitle = `${collectionTitle} | Lab Grown Diamond Jewelry Deals | Katanoff`;
      metaDesc = `Discover ${collectionTitle} collection at Katanoff. Featuring lab grown diamond jewelry with timeless design, expert craftsmanship, and exceptional value.`;
      metaKeyword = `${collectionTitle}, Lab Grown Diamond Jewelry, Fine Jewelry, Katanoff Jewelry`;
    } else if (collectionType === SUB_CATEGORIES) {
      metaTitle = `Shop ${collectionTitle} | Lab Grown Diamond Jewelry | Katanoff`;
      metaDesc = `Explore ${collectionTitle} at Katanoff – luxury lab grown diamond jewelry crafted for everyday elegance, special occasions, and lasting beauty.`;
      metaKeyword = `Shop ${collectionTitle}, Buy ${collectionTitle}, Lab Grown Diamond ${collectionTitle}, Ethical Diamond Jewelry, Katanoff`;
    }

    // if (collectionType === COLLECTION) {
    const collectionDetail = await productService.fetchCollectionBanners({
      collectionCategory: collectionType,
      collectionName: collectionTitle,
      parentSubCategory: parentCategory,
      parentMainCategory,
    });
    console.log(collectionDetail, "collectionDetail");
    // }
    // productName = helperFunctions?.stringReplacedWithSpace(productName);

    // if (!productName) {
    //   return {
    //     title: "Product Not Found | Katanoff Jewelry",
    //     description: "This product does not exist or has been removed.",
    //     robots: "noindex, nofollow",
    //   };
    // }

    // const productDetail = await productService.getSingleProduct(productName);

    // if (!productDetail) {
    //   return {
    //     title: "Product Not Found | Katanoff Jewelry",
    //     description: "Sorry, this product does not exist or has been removed.",
    //     robots: "noindex, nofollow",
    //   };
    // }

    // const ogImage =
    //   productDetail?.yellowGoldThumbnailImage ||
    //   productDetail?.roseGoldThumbnailImage ||
    //   productDetail?.whiteGoldThumbnailImage ||
    //   productDetail?.roseGoldImages?.[0]?.image ||
    //   productDetail?.whiteGoldImages?.[0]?.image ||
    //   productDetail?.yellowGoldImages?.[0]?.image ||
    //   `${WebsiteUrl}/opengraph-image.png`;

    const canonicalUrl = `${WebsiteUrl}/${collectionType}/${collectionTitle}`;

    const customMeta = {
      title: metaTitle,
      description: metaDesc,
      keywords: metaKeyword,
      url: canonicalUrl,
      openGraphImage: collectionDetail.mobile,
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

export default function collectionLayout({ children }) {
  return children;
}
