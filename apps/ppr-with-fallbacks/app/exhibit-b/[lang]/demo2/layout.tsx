import {
  VisualComponentBoundary,
  VisualSuspenseBoundary,
} from "@components/boundary";
import { Corners } from "@components/corners";
import { Nav, NavFallback } from "@components/nav";
import { Suspense } from "react";

export default async function Layout({
  children,
  params,
}: LayoutProps<"/exhibit-b/[lang]/demo2">) {
  "use cache";
  const { lang } = await params;

  return (
    <VisualComponentBoundary
      label={
        <div className="text-red-500/60">
          /exhibit-b/[lang]/demo2/layout.tsx
        </div>
      }
      className="flex h-full min-h-0 p-8 pt-12 -mx-8 border-red-500/30 border-solid gap-6"
    >
      <aside className="flex flex-col gap-4 w-40 shrink-0">
        <VisualSuspenseBoundary>
          <Suspense fallback={<NavFallback />}>
            <Nav lang={lang} demo="demo2" exhibit="b" />
          </Suspense>
        </VisualSuspenseBoundary>
      </aside>

      <Corners>
        <main className="flex w-full md:max-w-xl flex-1 overflow-y-auto min-h-0">
          {children}
        </main>
      </Corners>
    </VisualComponentBoundary>
  );
}
