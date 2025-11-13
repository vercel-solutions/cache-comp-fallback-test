import "@/app/globals.css";
import { Corners } from "@components/corners";
import { TextFallback } from "@components/fallbacks";
import { Suspense } from "react";
import { NavLink } from "@/components/nav-link";

export async function generateStaticParams() {
  return [{ lang: "en" }];
}

async function Nav({ langPromise }: { langPromise: Promise<string> }) {
  const lang = await langPromise;
  return (
    <nav className="flex flex-col h-full">
      <div className="flex flex-col gap-3">
        <Suspense fallback={<TextFallback />}>
          <NavLink href={`/${lang}/fast`}>fast posts</NavLink>
          <NavLink href={`/${lang}/slow`}>slow posts</NavLink>
        </Suspense>
      </div>
    </nav>
  );
}

export default async function Layout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
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
              <Nav langPromise={params.then((p) => p.lang)} />
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
