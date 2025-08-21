// import { Footer, Header } from "@/components/dynamiComponents";

const Footer = dynamic(() => import("@/components/layout/footer"), {
  ssr: true,
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
