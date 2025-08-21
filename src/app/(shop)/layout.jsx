// import { Footer, Header } from "@/components/dynamiComponents";
import Footer from "@/components/layout/footer";

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
