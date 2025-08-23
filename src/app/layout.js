import StoreProvider from "@/store/provider";
import Script from "next/script";
import "./globals.css";
import { Layout } from "@/components/dynamiComponents";
// import { generateMetadata } from "@/_utils/metaConfig";
// import { googleAnalyticsId, googleSiteVerificationId } from "@/_helper";
// import { GoogleAnalytics } from "@next/third-parties/google";

// export const metadata = generateMetadata();
export default function RootLayout({ children }) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="KatanOff" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        {/* <meta
          name="google-site-verification"
          content={googleSiteVerificationId}
        /> */}
      </head>
      <body>
        <StoreProvider>
          <Layout>
            {GA_ID ? (
              <>
                <Script
                  strategy="afterInteractive"
                  src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                />
                <Script id="ga4" strategy="afterInteractive">
                  {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { send_page_view: true });
              `}
                </Script>
              </>
            ) : null}
            {children}</Layout>
        </StoreProvider>
      </body>
      {/* <GoogleAnalytics gaId={googleAnalyticsId} /> */}
    </html>
  );
}
