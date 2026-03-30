"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-black/10 bg-white">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-4">
        <Link
          href="/"
          className="font-heading text-lg font-bold tracking-tight text-black"
        >
          Dr. Bhargava R
        </Link>

        <nav aria-label="Primary" className="flex flex-wrap gap-x-5 gap-y-2">
          {navItems.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "font-body text-sm",
                  "underline underline-offset-4 decoration-transparent",
                  isActive
                    ? "text-accent decoration-accent"
                    : "text-black/90 hover:text-accent hover:decoration-accent",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

