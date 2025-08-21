// import { Footer, Header } from "@/components/dynamiComponents";

import dynamic from "next/dynamic.js";

const Footer = dynamic(() => import("./layout/footer.jsx"), {
  ssr: false,
});

// import Footer from "@/components/layout/footer";
// import Header from "@/components/layout/header";

export default function ShopLayout({ children }) {
  return (
    <main>
      {/* <Header /> */}
      {children}
      <Footer />
    </main>
  );
}
