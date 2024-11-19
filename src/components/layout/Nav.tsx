"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
];

export const Nav = () => {
  const pathname = usePathname();
  const pathnameArray = pathname.split("/");

  return (
    <nav className="nav md:border-r border-border">
      <div className="flex flex-col">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="px-3 py-2 sm:hover:bg-border/60 font-geistMono w-44 cursor-pointer border-b border-border last:border-none"
          >
            <span
              className={
                pathname === link.href || `/${pathnameArray[1]}` === link.href
                  ? "font-[900]"
                  : ""
              }
            >
              [{link.label.slice(0, 1)}]
            </span>
            <span>{link.label.slice(1, link.label.length)}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};
