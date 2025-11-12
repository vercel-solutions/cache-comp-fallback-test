import Link from "next/link";
import { Suspense } from "react";
import { TextFallback } from "./fallbacks";
import { NavLink } from "./nav-link";

export function Nav({ lang }: { lang: string }) {
  const links = [
    {
      href: `/${lang}/fast`,
      label: "fast posts",
    },
    {
      href: `/${lang}/slow`,
      label: "slow posts",
    },
  ];

  return (
    <nav className="flex flex-col h-full">
      <div className="flex flex-col gap-3">
        {/* {links.map((link) => (
          <NavLink key={link.href} href={link.href}>
            {link.label}
          </NavLink>
        ))} */}
        <Link href={`${lang}/fast`} prefetch={false} className="text-xs">
          fast posts
        </Link>
        <Link href={`${lang}/slow`} prefetch={false} className="text-xs">
          slow posts
        </Link>
      </div>
    </nav>
  );
}

export function NavFallback() {
  return (
    <nav className="flex flex-col h-full">
      <div className="flex flex-col gap-4">
        <TextFallback className="w-24" />
        <TextFallback className="w-24" />
      </div>
    </nav>
  );
}
