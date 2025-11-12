"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { VisualSuspenseBoundary } from "./boundary";

export function RootNav({ lang }: { lang: string }) {
  const pathname = usePathname();

  const homeHref = `/${lang}`;
  const demo1Href = `/${lang}/demo1`;
  const demo2Href = `/${lang}/demo2`;

  const isHomeActive = pathname === homeHref;
  const isDemo1Active = pathname.startsWith(demo1Href);
  const isDemo2Active = pathname.startsWith(demo2Href);

  return (
    <VisualSuspenseBoundary>
      <nav className="flex gap-4">
        <Link
          href={homeHref}
          className={cn("text-sm", {
            "text-yellow-500": isHomeActive,
          })}
        >
          home
        </Link>
        <Link
          href={demo1Href}
          className={cn("text-sm", {
            "text-yellow-500": isDemo1Active,
          })}
        >
          demo one
        </Link>
        <Link
          href={demo2Href}
          className={cn("text-sm", {
            "text-yellow-500": isDemo2Active,
          })}
        >
          demo two
        </Link>
      </nav>
    </VisualSuspenseBoundary>
  );
}
