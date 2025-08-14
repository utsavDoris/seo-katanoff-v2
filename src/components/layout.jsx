import Lenis from "./lenis";
import StoreProvider from "@/store/provider";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <Lenis>
      <StoreProvider>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </StoreProvider>
    </Lenis>
  );
};

export default Layout;
