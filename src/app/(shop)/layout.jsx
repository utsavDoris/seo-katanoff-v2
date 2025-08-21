export default function ShopLayout({ children }) {
  return (
    <div>
      <h1>Header</h1>
      <main className="flex-1">{children}</main>
      <h1>Footer</h1>
    </div>
  );
}
