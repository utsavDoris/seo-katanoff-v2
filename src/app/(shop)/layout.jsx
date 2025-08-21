// import { Footer, Header } from "@/components/dynamiComponents";

import { Footer } from "@/components/dynamiComponents";
import Link from "next/link";

// import Header from "@/components/layout/header";

export default function ShopLayout({ children }) {
  return (
    <main>
      {/* <nav>
        <Link href="/about-us">About Us</Link>
        <Link href="/education">Education</Link>
      </nav> */}
      {/* <Header /> */}
      {children}
      <Footer />
    </main>
  );
}
