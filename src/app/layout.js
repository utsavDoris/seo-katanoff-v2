// import { Layout } from "@/components/dynamiComponents";
import "./globals.css";
import { Inter } from "next/font/google";
import { generateMetadata } from "@/utils/metaConfig";
import { GoogleAnalytics } from "@next/third-parties/google";
import { googleAnalyticsId } from "@/utils/environments";
import Layout from "@/components/layout";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter", // Renamed variable
});
export const metadata = generateMetadata();

export default function MyApp({ children }) {
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
        <meta name="apple-mobile-web-app-title" content="Tele Gold" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className={inter.variable}>
        <Layout>{children}</Layout>
      </body>
      <GoogleAnalytics gaId={googleAnalyticsId} />
    </html>
  );
}
