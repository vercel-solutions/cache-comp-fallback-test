"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavItem {
  href: string;
  title: string;
}

interface NavProps {
  items: NavItem[];
}

export function Nav({ items }: NavProps) {
  return (
    <nav>
      {items.map((item) => (
        <NavLink key={item.href} href={item.href}>
          {item.title}
        </NavLink>
      ))}
    </nav>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isActive = usePathname() === href;

  return (
    <Link
      href={href}
      className={`block px-4 md:px-6 py-1 ${isActive ? "text-blue-500" : "text-neutral-500"}`}
    >
      {children}
    </Link>
  );
}
