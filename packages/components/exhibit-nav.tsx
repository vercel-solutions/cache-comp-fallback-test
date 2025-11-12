"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@lib/utils";

export function ExhibitNav({ exhibit }: { exhibit: "a" | "b" }) {
  const isExhibitAActive = exhibit === "a";
  const isExhibitBActive = exhibit === "b";

  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-center items-center gap-4 py-4 z-50">
      <Link
        href="/exhibit-a/en"
        className={cn("text-xs", {
          "text-yellow-500": isExhibitAActive,
        })}
      >
        exhibit a
      </Link>
      <Link
        href="/exhibit-b/en"
        className={cn("text-xs", {
          "text-yellow-500": isExhibitBActive,
        })}
      >
        exhibit b
      </Link>
    </nav>
  );
}
