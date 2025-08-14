import StoreProvider from "@/store/provider";
import "./globals.css";
import LayoutWrapper from "@/components/layout/LayoutWrapper";
import { generateMetadata } from "@/_utils/metaConfig";

export const metadata = generateMetadata();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </StoreProvider>
      </body>
    </html>
  );
}
