// import { Footer, Header } from "@/components/dynamiComponents";

// import Footer from "@/components/layout/footer";
// import Header from "@/components/layout/header";

export default function ShopLayout({ children }) {
  return (
    <div>
      {/* <Header /> */}
      <main className="flex-1">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
