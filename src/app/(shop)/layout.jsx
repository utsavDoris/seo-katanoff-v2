// import { Footer, Header } from "@/components/dynamiComponents";
"use client";
import { Footer } from "@/components/dynamiComponents";
import Link from "next/link";
import { usePathname } from "next/navigation";

// import Header from "@/components/layout/header";

export default function ShopLayout({ children }) {
  const pathname = usePathname();
  return (
    <main>
      {/* <Header /> */}
      {children}
      <Footer pathname={pathname} />
    </main>
  );
}
