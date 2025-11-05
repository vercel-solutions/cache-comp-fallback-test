"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense } from "react";

export interface NavItem {
  href: string;
  title: string;
  prepend?: boolean;
  children?: NavItem[];
}

const combinedNavItems: NavItem[] = [
  {
    title: "request memoization",
    href: "/",
    children: [
      { href: "/use-cache", title: "with 'use cache'", prepend: true },
      { href: "/no-use-cache", title: "no 'use cache'", prepend: true },
    ],
  },
  {
    title: "prefetch quirk",
    href: "/posts",
    children: [{ href: "/posts", title: "list of page links", prepend: false }],
  },
];

export function Nav({ postId, lang }: { postId?: string; lang?: string }) {
  return (
    <nav className="flex flex-col gap-4">
      {combinedNavItems.map((item) => (
        <NavSection
          key={item.href || item.title}
          item={item}
          postId={postId}
          lang={lang}
        />
      ))}
    </nav>
  );
}

function NavSection({
  item,
  postId,
  lang,
}: {
  item: NavItem;
  postId?: string;
  lang?: string;
}) {
  const hasChildren = item.children && item.children.length > 0;

  const getHref = ({ href, prepend }: NavItem) => {
    if (prepend) {
      return `/${lang || "en"}/${postId || "42"}${href}`;
    }
    return `/${lang || "en"}${href}`;
  };

  return (
    <Suspense>
      <div>
        {hasChildren && item.children ? (
          <>
            <div className="px-4 md:px-6 py-1 font-semibold text-xs text-neutral-300 mb-2">
              {item.title}
            </div>
            <div className="">
              {item.children.map((child) => (
                <NavLink key={child.href} href={getHref(child)}>
                  {child.title}
                </NavLink>
              ))}
            </div>
          </>
        ) : (
          <NavLink href={getHref(item)}>{item.title}</NavLink>
        )}
      </div>
    </Suspense>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === href : pathname.includes(href);

  return (
    <Link
      href={href}
      className={`block px-4 md:px-6 py-1 text-xs ${isActive ? "text-blue-500" : "text-neutral-500"}`}
    >
      {children}
    </Link>
  );
}
