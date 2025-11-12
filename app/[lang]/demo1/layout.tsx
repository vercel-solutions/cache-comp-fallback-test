import "@/app/globals.css";
import { VisualComponentBoundary } from "@/components/boundary";
import { Corners } from "@/components/corners";
import { Nav } from "@/components/nav";
import { RootHeader } from "@/components/root-header";

export async function generateStaticParams() {
  return [{ lang: "en" }];
}

export default function Layout({
  children,
  params,
}: LayoutProps<"/[lang]/demo1">) {
  return (
    <html lang="en">
      <body className="dark flex justify-center items-center h-svh">
        <div className="flex flex-col gap-6 w-full max-w-3xl h-full max-h-[540px]">
          <RootHeader lang={params.then((p) => p.lang)} />
          <Corners>
            {/* Sidebar */}
            <aside className="flex flex-col gap-4 w-56 shrink-0 p-8">
              <VisualComponentBoundary label="static nav">
                <Nav lang={params.then((p) => p.lang)} demo="demo1" />
              </VisualComponentBoundary>
            </aside>

            {/* Main Content Area */}
            <main className="flex w-full md:max-w-xl flex-1 overflow-y-auto min-h-0 max-md:border-t border-l border-dashed border-neutral-800">
              {children}
            </main>
          </Corners>
        </div>
      </body>
    </html>
  );
}
