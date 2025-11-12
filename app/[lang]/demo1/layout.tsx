import { Corners } from "@/components/corners";
import { Nav } from "@/components/nav";

export default function Layout({
  children,
  params,
}: LayoutProps<"/[lang]/demo1">) {
  return (
    <Corners>
      {/* Sidebar */}
      <aside className="flex flex-col gap-4 w-56 shrink-0 p-8">
        <Nav lang={params.then((p) => p.lang)} demo="demo1" />
      </aside>

      {/* Main Content Area */}
      <main className="flex w-full md:max-w-xl flex-1 overflow-y-auto min-h-0 max-md:border-t border-l border-dashed border-neutral-800">
        {children}
      </main>
    </Corners>
  );
}
