"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Nav() {
  return (
    <nav>
      <NavLink href={`/en/post/1`}>[en] post 1</NavLink>
      <NavLink href={`/en/post/2`}>[en] post 2</NavLink>
      <NavLink href={`/fr/post/3`}>[fr] post 3</NavLink>
      <NavLink href={`/fr/post/4`}>[fr] post 4</NavLink>
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
