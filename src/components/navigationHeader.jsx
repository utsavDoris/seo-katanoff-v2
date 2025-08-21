"use client";
import { useState } from "react";
import { HeaderLinkButton } from "./button";

export default function NavigationHeader() {
  const [lastScrollY, setLastScrollY] = useState(500);

  const staticLinks = [
    {
      title: "Custom",
      href: "/custom-jewelry",
    },
    {
      title: "About Katanoff",
      href: "/about-us",
    },
  ];
  return (
    <header>
      <nav>
        <ul>
          {staticLinks?.map((link) => (
            <li key={`static-link-${link.title}`} className={`relative `}>
              <HeaderLinkButton
                href={link.href}
                className={`rounded-none hover:!font-semibold flex items-center gap-1 hover:!text-primary py-2 lg:py-5 ${
                  lastScrollY > 100 ? "py-2 lg:py-5" : "py-4"
                }`}
              >
                {link.title}
              </HeaderLinkButton>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
