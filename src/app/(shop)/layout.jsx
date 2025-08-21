import { ShoplayoutWrapper } from "@/components/dynamiComponents";

export default function ShopLayout({ children }) {
  return (
    <main>
      <ShoplayoutWrapper>{children}</ShoplayoutWrapper>
    </main>
  );
}
