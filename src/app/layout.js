'use client';
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/about-us">About</Link>
            <Link href="/contact-us">Contact</Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
