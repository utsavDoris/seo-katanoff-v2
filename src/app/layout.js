'use client'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <nav>
          <Link href="/">Home</Link>
          <Link href="/about-us">About</Link>
          <Link href="/contact-us">Contact</Link>
        </nav> */}
        {children}
      </body>
    </html>
  );
}
