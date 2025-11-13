import { VisualComponentBoundary } from "@components/boundary";
import { Corners } from "@components/corners";
import { Nav } from "@/components/nav";

export default function Layout({
  children,
  params,
}: LayoutProps<"/[lang]/slow">) {
  return (
    <VisualComponentBoundary
      label={<div className="text-red-500/60">/[lang]/slow/layout.tsx</div>}
      className="flex h-full min-h-0 p-8 pt-12 -mx-8 border-red-500/30 border-solid"
    >
      <Corners>
        <aside className="flex flex-col gap-4 w-50 shrink-0 p-8">
          <Nav langPromise={params.then((p) => p.lang)} />
        </aside>

        <main className="flex w-full md:max-w-xl flex-1 overflow-y-auto min-h-0 max-md:border-t border-l border-dashed border-neutral-800">
          {children}
        </main>
      </Corners>
    </VisualComponentBoundary>
  );
}
