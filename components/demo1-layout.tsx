import { VisualComponentBoundary } from "./boundary";
import { Corners } from "./corners";
import { Nav } from "./nav";

export function Demo1Layout({
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
        <VisualComponentBoundary label="static nav">
          <Nav lang={params.then((p) => p.lang)} demo="demo1" />
        </VisualComponentBoundary>
      </aside>

      {/* Main Content Area */}
      <main className="flex w-full md:max-w-xl flex-1 overflow-y-auto min-h-0 max-md:border-t border-l border-dashed border-neutral-800">
        {children}
      </main>
    </Corners>
  );
}
