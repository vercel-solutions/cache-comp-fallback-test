"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = false;

  return (
    <Link
      href={href}
      prefetch={false}
      className={cn("block text-xs", {
        "text-blue-500": isActive,
      })}
    >
      {children}
    </Link>
  );
}
