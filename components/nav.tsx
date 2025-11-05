"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavItem {
  href: string;
  title: string;
  children?: NavItem[];
}

interface NavProps {
  items?: NavItem[];
}

const combinedNavItems: NavItem[] = [
  {
    title: "request memoization",
    href: "/",
    children: [
      { href: "/use-cache", title: "with 'use cache'" },
      { href: "/no-use-cache", title: "no 'use cache'" },
    ],
  },
];

export function Nav({ items = combinedNavItems }: NavProps) {
  return (
    <nav className="flex flex-col gap-4">
      {items.map((item) => (
        <NavSection key={item.href || item.title} item={item} />
      ))}
    </nav>
  );
}

function NavSection({ item }: { item: NavItem }) {
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div>
      {hasChildren && item.children ? (
        <>
          <div className="px-4 md:px-6 py-1 font-semibold text-xs text-neutral-300 mb-2">
            {item.title}
          </div>
          <div className="">
            {item.children.map((child) => (
              <NavLink key={child.href} href={child.href}>
                {child.title}
              </NavLink>
            ))}
          </div>
        </>
      ) : (
        <NavLink href={item.href}>{item.title}</NavLink>
      )}
    </div>
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
      className={`block px-4 md:px-6 py-1 text-xs ${isActive ? "text-blue-500" : "text-neutral-500"}`}
    >
      {children}
    </Link>
  );
}
