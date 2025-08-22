import { Footer, Header } from "@/components/dynamiComponents";
// import { Footer } from "@/components/dynamiComponents";

export default function ShopLayout({ children }) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
