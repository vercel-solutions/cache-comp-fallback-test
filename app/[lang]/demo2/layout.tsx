import "@/app/globals.css";
import { Suspense } from "react";
import { VisualSuspenseBoundary } from "@/components/boundary";
import { Corners } from "@/components/corners";
import { Nav, NavFallback } from "@/components/nav";
import { RootNav } from "@/components/root-nav";

export async function generateStaticParams() {
  return [{ lang: "en" }];
}

export async function RootHeader({ lang }: { lang: Promise<string> }) {
  const l = await lang;
  return (
    <header className="flex flex-col gap-4">
      <h1>Cache Components Testing</h1>
      <Suspense fallback={<NavFallback />}>
        <RootNav lang={l} />
      </Suspense>
    </header>
  );
}

export default function Layout({
  children,
  params,
}: LayoutProps<"/[lang]/demo2">) {
  return (
    <html lang="en">
      <body className="dark flex justify-center items-center h-svh">
        <div className="flex flex-col gap-6 w-full max-w-3xl h-full max-h-[540px]">
          <RootHeader lang={params.then((p) => p.lang)} />
          <Corners>
            {/* Sidebar */}
            <aside className="flex flex-col gap-4 w-56 shrink-0 p-8">
              <Nav lang={params.then((p) => p.lang)} demo="demo2" />
            </aside>

            {/* Main Content Area */}
            <main className="flex w-full md:max-w-xl flex-1 overflow-y-auto min-h-0 max-md:border-t border-l border-dashed border-neutral-800">
              {children}
            </main>
          </Corners>
        </div>
      </body>
    </html>
  );
}
