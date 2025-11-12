"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@lib/utils";

export function RootNav({ lang }: { lang: string }) {
  const pathname = usePathname();

  // Detect which exhibit we're in based on pathname
  const exhibitPrefix = pathname.startsWith("/exhibit-b")
    ? "exhibit-b"
    : "exhibit-a";

  const homeHref = `/${exhibitPrefix}/${lang}`;
  const demo1Href = `/${exhibitPrefix}/${lang}/demo1`;
  const demo2Href = `/${exhibitPrefix}/${lang}/demo2`;

  const isHomeActive = pathname === homeHref;
  const isDemo1Active = pathname.startsWith(demo1Href);
  const isDemo2Active = pathname.startsWith(demo2Href);

  return (
    <nav className="flex gap-4">
      <Link
        href={homeHref}
        className={cn("text-xs", {
          "text-yellow-500": isHomeActive,
        })}
      >
        home
      </Link>
      <Link
        href={demo1Href}
        className={cn("text-xs", {
          "text-yellow-500": isDemo1Active,
        })}
      >
        demo one
      </Link>
      <Link
        href={demo2Href}
        className={cn("text-xs", {
          "text-yellow-500": isDemo2Active,
        })}
      >
        demo two
      </Link>
    </nav>
  );
}
