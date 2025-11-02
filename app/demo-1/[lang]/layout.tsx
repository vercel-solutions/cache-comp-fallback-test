import type { Metadata } from "next";
import "@/app/globals.css";
import { Nav, type NavItem } from "@/components/nav";

export const metadata: Metadata = {
  title: "Cache Component Suspense Fallbacks",
};

const navItems: NavItem[] = [
  { href: "/demo-1/__/0", title: "/[__]/[0]" },
  { href: "/demo-1/en/1", title: "/[en]/[1]" },
  { href: "/demo-1/fr/2", title: "/[fr]/[1]" },
  { href: "/demo-1/en/3", title: "/[en]/[2]" },
  { href: "/demo-1/fr/4", title: "/[fr]/[2]" },
];

export async function generateStaticParams() {
  return [{ lang: "__" }];
}

export default async function LangLayout({
  children,
  params,
}: Readonly<LayoutProps<"/demo-1/[lang]">>) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body className="flex justify-center items-center h-svh">
        <div className="flex max-md:flex-col justify-center items-stretch max-w-4xl relative mx-auto border border-dashed border-neutral-800">
          <div className="absolute top-0 left-0 size-10 -m-px border-t border-l border-neutral-700" />
          <div className="absolute top-0 right-0 size-10 -m-px border-t border-r border-neutral-700" />
          <div className="absolute bottom-0 left-0 size-10 -m-px border-b border-l border-neutral-700" />
          <div className="absolute bottom-0 right-0 size-10 -m-px border-b border-r border-neutral-700" />

          {/* Sidebar */}
          <aside className="w-48 py-6.5">
            <Nav items={navItems} />
          </aside>

          {/* Main Content Area */}
          <main className="flex flex-col items-center justify-center md:min-w-lg flex-1 overflow-y-auto max-md:p-4 p-8 max-md:border-t border-l border-dashed border-neutral-800">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
