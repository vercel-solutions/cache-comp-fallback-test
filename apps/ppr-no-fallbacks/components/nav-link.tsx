"use client";

import { cn } from "@lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  // For home route, only exact match. For other routes, match exact or child routes
  const isHomeRoute = href.split("/").length === 2; // e.g., "/en"
  const isActive =
    pathname === href || (!isHomeRoute && pathname.startsWith(href + "/"));

  return (
    <Link
      href={href}
      prefetch={false}
      className={cn("block", {
        "text-yellow-500": isActive,
      })}
    >
      <p>{children}</p>
    </Link>
  );
}
