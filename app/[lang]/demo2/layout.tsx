import { Suspense } from "react";
import { VisualSuspenseBoundary } from "@/components/boundary";
import { Corners } from "@/components/corners";
import { Nav, NavFallback } from "@/components/nav";

export default function Layout({
  children,
  params,
}: LayoutProps<"/[lang]/demo2">) {
  return (
    <Corners>
      {/* Sidebar */}
      <aside className="flex flex-col gap-4 w-56 shrink-0 p-8">
        <VisualSuspenseBoundary>
          <Suspense fallback={<NavFallback />}>
            <Nav lang={params.then((p) => p.lang)} demo="demo2" />
          </Suspense>
        </VisualSuspenseBoundary>
      </aside>

      {/* Main Content Area */}
      <main className="flex w-full md:max-w-xl flex-1 overflow-y-auto min-h-0 max-md:border-t border-l border-dashed border-neutral-800">
        {children}
      </main>
    </Corners>
  );
}
