import "@/app/globals.css";
import { Corners } from "@components/corners";
import Link from "next/link";

export async function generateStaticParams() {
  return [{ lang: "en" }];
}

export default async function Layout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;

  return (
    <html lang="en">
      <body className="dark flex justify-center items-center h-svh">
        <div className="flex flex-col gap-6 w-full max-w-3xl h-full max-h-[560px]">
          <header>
            <h1>No Fallbacks</h1>
          </header>

          <Corners>
            {/* Sidebar */}
            <aside className="flex flex-col gap-4 w-50 p-8">
              <nav className="flex flex-col h-full">
                <div className="flex flex-col gap-3">
                  <Link href={`/${lang}/fast`} className="text-xs">
                    fast posts
                  </Link>
                  <Link href={`/${lang}/slow`} className="text-xs">
                    slow posts
                  </Link>
                </div>
              </nav>
            </aside>

            {/* Main Content Area */}
            <main className="flex w-full flex-1 overflow-y-auto min-h-0 max-md:border-t border-l border-dashed border-neutral-800">
              {children}
            </main>
          </Corners>
        </div>
      </body>
    </html>
  );
}
