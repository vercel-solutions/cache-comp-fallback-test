import type { Metadata } from "next";
import Link from "next/link";
import "../globals.css";

export const metadata: Metadata = {
  title: "Cache Component Suspense Fallbacks",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<LayoutProps<"/[lang]">>) {
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
          <aside className="w-48 py-6">
            <nav className="space-y-2">
              <Link href={`/${lang}`} className="block px-4 md:px-6 py-1">
                runtime params
              </Link>
              <Link href={`/en/post/1`} className="block px-4 md:px-6 py-1">
                [en] post 1
              </Link>
              <Link href={`/en/post/2`} className="block px-4 md:px-6 py-1">
                [en] post 2
              </Link>
              <Link href={`/fr/post/3`} className="block px-4 md:px-6 py-1">
                [fr] post 3
              </Link>
              <Link href={`/fr/post/4`} className="block px-4 md:px-6 py-1">
                [fr] post 4
              </Link>
            </nav>
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
