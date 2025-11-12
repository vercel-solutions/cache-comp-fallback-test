import { Suspense } from "react";
import {
  VisualComponentBoundary,
  VisualSuspenseBoundary,
} from "@/components/boundary";
import { Corners } from "@/components/corners";
import { Nav, NavFallback } from "@/components/nav";

export default function Layout({
  children,
  params,
}: LayoutProps<"/exhibit-b/[lang]/demo2">) {
  return (
    <VisualComponentBoundary
      label={<div className="text-red-500/60">/exhibit-b/[lang]/demo2/layout.tsx</div>}
      className="flex h-full min-h-0 p-8 pt-12 -mx-8 border-red-500/30 border-solid"
    >
      <Corners>
        {/* Sidebar */}
        <aside className="flex flex-col gap-4 w-50 shrink-0 p-4">
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
    </VisualComponentBoundary>
  );
}

