import Link from "next/link";
import { Suspense } from "react";
import { VisualSuspenseBoundary } from "./boundary";
import { Corners } from "./corners";
import { Nav, NavFallback } from "./nav";

function HeaderLink() {
  return (
    <Link href="/demo2">
      <h1>Cache Components Testing</h1>
    </Link>
  );
}

export function DemoLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  return (
    <div className="flex flex-col gap-6 w-full max-w-3xl h-full max-h-[540px]">
      <header>
        <HeaderLink />
      </header>
      <Corners>
        {/* Sidebar */}
        <aside className="w-56 shrink-0 p-8">
          <VisualSuspenseBoundary>
            <Suspense fallback={<NavFallback />}>
              <Nav lang={params.then((p) => p.lang)} />
            </Suspense>
          </VisualSuspenseBoundary>
        </aside>

        {/* Main Content Area */}
        <main className="flex w-full md:max-w-xl flex-1 overflow-y-auto min-h-0 max-md:border-t border-l border-dashed border-neutral-800">
          {children}
        </main>
      </Corners>
    </div>
  );
}
