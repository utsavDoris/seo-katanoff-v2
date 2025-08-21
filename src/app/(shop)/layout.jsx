import NavigationHeader from "@/components/navigationHeader";

export default function ShopLayout({ children }) {
  return (
    <div>
      {/* <h1>Header</h1> */}
      <NavigationHeader />
      <main>{children}</main>
      <h1>Footer</h1>
    </div>
  );
}
