"use client";

import { cn } from "@lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function RootNav({
  lang,
  exhibit,
}: {
  lang: string;
  exhibit?: "a" | "b";
}) {
  const pathname = usePathname();

  const prefix = exhibit ? `/exhibit-${exhibit}` : "";

  const demo1Href = prefix ? `${prefix}/${lang}/demo1` : `/${lang}/demo1`;
  const demo2Href = prefix ? `${prefix}/${lang}/demo2` : `/${lang}/demo2`;

  const isDemo1Active = pathname.startsWith(demo1Href);
  const isDemo2Active = pathname.startsWith(demo2Href);

  return (
    <nav className="flex gap-4">
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
