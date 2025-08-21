"use client";

import { usePathname } from "next/navigation";
import Footer from "./footer";

export default function ShoplayoutWrapper({ children }) {
  const pathname = usePathname();
  return (
    <>
      {/* <Header /> */}

      {children}
      <Footer pathname={pathname} />
    </>
  );
}
