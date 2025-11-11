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
  const isActive = pathname === href;

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
