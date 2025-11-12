import Link from "next/link";
import { VisualComponentBoundary } from "./boundary";
import { Corners } from "./corners";
import { Nav } from "./nav";

async function HomeLink({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return <Link href={`/${lang}`}>home</Link>;
}

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
      <aside className="flex flex-col gap-4 w-56 shrink-0 p-8">
        <HomeLink params={params} />

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
