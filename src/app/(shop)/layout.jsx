// import { Footer, Header } from "@/components/dynamiComponents";

import Footer from "@/components/layout/footer";
// import Header from "@/components/layout/header";

export default function RootLayout({ children }) {
  return (
    <main>
      {/* <Header /> */}
      {children}
      <Footer />
    </main>
  );
}
