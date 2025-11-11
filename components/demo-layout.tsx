import Link from "next/link";
import { Suspense } from "react";
import { VisualSuspenseBoundary } from "./boundary";
import { Nav, NavFallback } from "./nav";

async function HeaderLink({ langPromise }: { langPromise: Promise<string> }) {
  const lang = await langPromise;
  return (
    <Link href={`/${lang}`}>
      <h1>Cache Components Testing</h1>
    </Link>
  );
}

export function DemoLayout({ children, params }: LayoutProps<"/[lang]">) {
  return (
    <div className="flex flex-col gap-6 w-full max-w-3xl h-full max-h-[540px]">
      <header>
        <HeaderLink langPromise={params.then((p) => p.lang)} />
      </header>
      <div className="flex max-md:flex-col justify-center items-stretch w-full relative mx-auto border border-dashed border-neutral-800 flex-1 min-h-0">
        <div className="absolute top-0 left-0 size-10 -m-px border-t border-l border-neutral-700" />
        <div className="absolute top-0 right-0 size-10 -m-px border-t border-r border-neutral-700" />
        <div className="absolute bottom-0 left-0 size-10 -m-px border-b border-l border-neutral-700" />
        <div className="absolute bottom-0 right-0 size-10 -m-px border-b border-r border-neutral-700" />

        {/* Sidebar */}
        <aside className="w-56 shrink-0 py-6 px-6">
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
      </div>
    </div>
  );
}
