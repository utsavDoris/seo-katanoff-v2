import StoreProvider from "@/store/provider";
import "./globals.css";
import { generateMetadata } from "@/_utils/metaConfig";
import Layout from "@/components/layout/Layout";

export const metadata = generateMetadata()
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Layout>{children}</Layout>
        </StoreProvider>
      </body>
    </html>
  );
}
