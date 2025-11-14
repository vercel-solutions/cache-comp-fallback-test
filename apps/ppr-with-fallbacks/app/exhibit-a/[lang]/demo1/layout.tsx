import { VisualComponentBoundary } from "@components/boundary";
import { Corners } from "@components/corners";
import { Nav } from "@components/nav";

export default function Layout({
  children,
  params,
}: LayoutProps<"/exhibit-a/[lang]/demo1">) {
  return (
    <VisualComponentBoundary
      label={
        <div className="text-red-500/60">
          /exhibit-a/[lang]/demo1/layout.tsx
        </div>
      }
      className="flex h-full min-h-0 p-8 pt-12 -mx-8 border-red-500/30 border-solid gap-6"
    >
      <aside className="flex flex-col gap-4 w-40 shrink-0 ">
        <Nav lang={params.then((p) => p.lang)} demo="demo1" exhibit="a" />
      </aside>

      <Corners>
        <main className="w-full md:max-w-xl flex-1 overflow-y-auto min-h-0">
          {children}
        </main>
      </Corners>
    </VisualComponentBoundary>
  );
}
