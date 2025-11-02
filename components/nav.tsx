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
    title: "demo 1",
    href: "/demo-1",
    children: [
      { href: "/demo-1/en/1", title: "/[en]/[1]" },
      { href: "/demo-1/de/1", title: "/[de]/[1]" },
      { href: "/demo-1/en/2", title: "/[en]/[2]" },
      { href: "/demo-1/de/2", title: "/[de]/[2]" },
    ],
  },
  {
    title: "demo 2",
    href: "/demo-2",
    children: [
      { href: "/demo-2/en/1", title: "/[en]/[1]" },
      { href: "/demo-2/de/1", title: "/[de]/[1]" },
      { href: "/demo-2/en/2", title: "/[en]/[2]" },
      { href: "/demo-2/de/2", title: "/[de]/[2]" },
    ],
  },
  {
    title: "demo 3",
    href: "/demo-3",
    children: [
      { href: "/demo-3/en/pg/1", title: "/[en]/pg/[1]" },
      { href: "/demo-3/de/pg/1", title: "/[de]/pg/[1]" },
      { href: "/demo-3/en/pg/2", title: "/[en]/pg/[2]" },
      { href: "/demo-3/de/pg/2", title: "/[de]/pg/[2]" },
    ],
  },
];

export function Nav({ items = combinedNavItems }: NavProps) {
  return (
    <nav className="flex flex-col gap-2">
      {items.map((item) => (
        <NavSection key={item.href || item.title} item={item} />
      ))}
    </nav>
  );
}

function NavSection({ item }: { item: NavItem }) {
  const pathname = usePathname();
  const hasChildren = item.children && item.children.length > 0;
  const isActiveSection =
    hasChildren && item.children?.some((child) => pathname === child.href);

  return (
    <div>
      {hasChildren && item.children ? (
        <>
          <div className="px-4 md:px-6 py-1 font-semibold text-xs text-neutral-300">
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
