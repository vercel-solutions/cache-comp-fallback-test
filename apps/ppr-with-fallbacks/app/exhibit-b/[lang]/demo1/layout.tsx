import { VisualComponentBoundary } from "@components/boundary";
import { Corners } from "@components/corners";
import { Nav } from "@components/nav";

export default async function Layout({
  children,
  params,
}: LayoutProps<"/exhibit-b/[lang]/demo1">) {
  "use cache";
  const { lang } = await params;

  return (
    <VisualComponentBoundary
      label={
        <div className="text-red-500/60">
          /exhibit-b/[lang]/demo1/layout.tsx
        </div>
      }
      className="flex h-full min-h-0 p-8 pt-12 -mx-8 border-red-500/30 border-solid gap-6"
    >
      <aside className="flex flex-col gap-4 w-40 shrink-0">
        <Nav lang={lang} demo="demo1" exhibit="b" />
      </aside>

      <Corners>
        <main className="flex w-full md:max-w-xl flex-1 overflow-y-auto min-h-0">
          {children}
        </main>
      </Corners>
    </VisualComponentBoundary>
  );
}
