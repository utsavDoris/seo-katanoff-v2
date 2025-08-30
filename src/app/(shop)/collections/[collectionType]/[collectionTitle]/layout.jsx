import {
  CATEGORIES,
  COLLECTION,
  helperFunctions,
  PRODUCT_TYPES,
  SUB_CATEGORIES,
  WebsiteUrl,
} from "@/_helper";
import { collectionService, productService } from "@/_services";
import { generateMetadata as generateMetaConfig } from "@/_utils/metaConfig";
import { createServerSearchParamsForServerPage } from "next/dist/server/request/search-params";
import { headers } from "next/headers";

export async function generateMetadata({ params }) {
  try {
    let { collectionType, collectionTitle } = params;
    let metaTitle = "";
    let metaKeyword = "";
    let metaDesc = "";

    // ✅ Parse query params from the request URL
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

    // ✅ Now we can read query params safely
    const searchParams = urlObj.searchParams;

    const parentCategory = searchParams.get("parentCategory") || "";
    const parentMainCategory = searchParams.get("parentMainCategory") || "";
    collectionTitle = helperFunctions.stringReplacedWithSpace(collectionTitle);

    if ([CATEGORIES, SUB_CATEGORIES].includes(collectionType)) {
      metaTitle = `Shop ${collectionTitle} | Lab Grown Diamond Jewelry | Katanoff`;
      metaDesc = `Explore ${collectionTitle} at Katanoff – luxury lab grown diamond jewelry crafted for everyday elegance, special occasions, and lasting beauty.`;
      metaKeyword = `Shop ${collectionTitle}, Buy ${collectionTitle}, Lab Grown Diamond ${collectionTitle}, Ethical Diamond Jewelry, Katanoff`;
    } else if (collectionType === PRODUCT_TYPES) {
      if (parentCategory?.toLowerCase() === "Men’s Jewelry"?.toLowerCase()) {
        metaTitle = `Shop Men's ${collectionTitle} | Lab Grown Diamond Jewelry | Katanoff`;
        metaDesc = `Explore our collection of men's ${collectionTitle} crafted with lab grown diamonds. Katanoff brings modern style, fine craftsmanship, and sustainable luxury.`;
        metaKeyword = `men's ${collectionTitle}, men's diamond ${collectionTitle}, lab grown diamond men's ${collectionTitle}, sustainable men's jewelry`;
      } else if (
        collectionTitle?.toLowerCase()?.includes(parentCategory?.toLowerCase())
      ) {
        metaTitle = `Shop ${collectionTitle} | Lab Grown Diamond Jewelry | Katanoff`;
        metaDesc = `Discover our stunning ${collectionTitle} collection, featuring lab grown diamonds set in timeless designs. Shop sustainable, high-quality jewelry at Katanoff.`;
        metaKeyword = `${collectionTitle}, diamond ${collectionTitle}, lab grown diamond ${collectionTitle}, sustainable ${collectionTitle} jewelry`;
      } else {
        console.log(parentCategory, "parentCategory");
        metaTitle = `Shop ${collectionTitle} ${parentCategory} | Lab Grown Diamond Jewelry | Katanoff`;
        metaDesc = `Shop elegant ${collectionTitle} ${parentCategory} at Katanoff. Designed with lab grown diamonds, each piece blends brilliance, quality, and sustainability.`;
        metaKeyword = ` ${collectionTitle}  ${parentCategory}, diamond  ${collectionTitle}  ${parentCategory}, lab grown  ${collectionTitle}  ${parentCategory}, sustainable ${collectionTitle} jewelry`;
      }
      // metaTitle = `${collectionTitle} | Lab Grown Diamond Jewelry Deals | Katanoff`;
      // metaDesc = `Discover ${collectionTitle} collection at Katanoff. Featuring lab grown diamond jewelry with timeless design, expert craftsmanship, and exceptional value.`;
      // metaKeyword = `${collectionTitle}, Lab Grown Diamond Jewelry, Fine Jewelry, Katanoff Jewelry`;
    } else if ([COLLECTION, GENERAL].includes(collectionType)) {
      metaTitle = `${collectionTitle} | Lab Grown Diamond Jewelry Deals | Katanoff`;
      metaDesc = `Discover ${collectionTitle} collection at Katanoff. Featuring lab grown diamond jewelry with timeless design, expert craftsmanship, and exceptional value.`;
      metaKeyword = `${collectionTitle}, Lab Grown Diamond Jewelry, Fine Jewelry, Katanoff Jewelry`;
    }

    // if (collectionType === COLLECTION) {
    // const collectionDetail = await productService.fetchCollectionBanners({
    //   collectionCategory: collectionType,
    //   collectionName: collectionTitle,
    //   parentSubCategory: parentCategory || "",
    //   parentMainCategory,
    // });
    // console.log(collectionDetail, "collectionDetail");
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
      keywords: metaKeyword,
      description: metaDesc,
      url: canonicalUrl,
      // openGraphImage: collectionDetail.mobile,
    };
    console.log(customMeta);
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
