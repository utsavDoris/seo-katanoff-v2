import NavigationHeader from "@/components/navigationHeader";

export default function ShopLayout({ children }) {
  return (
    <div>
      <NavigationHeader />
      <main className="flex-1">{children}</main>
      <h1>Footer</h1>
    </div>
  );
}
