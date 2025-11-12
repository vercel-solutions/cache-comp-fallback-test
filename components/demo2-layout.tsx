import { Suspense } from "react";
import { VisualSuspenseBoundary } from "./boundary";
import { Corners } from "./corners";
import { Nav, NavFallback } from "./nav";

export function Demo2Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  return (
    <Corners>
      {/* Sidebar */}
      <aside className="w-56 shrink-0 p-8">
        <VisualSuspenseBoundary label="suspense nav">
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
