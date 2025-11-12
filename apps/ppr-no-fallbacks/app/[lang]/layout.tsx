import "@/app/globals.css";
import { VisualComponentBoundary } from "@components/boundary";
import { Corners } from "@components/corners";
import { Nav } from "@/components/nav";

export async function generateStaticParams() {
  return [{ lang: "en" }];
}

export default function Layout({ children, params }: LayoutProps<"/[lang]">) {
  return (
    <html lang="en">
      <body className="dark flex justify-center items-center h-svh">
        <nav className="fixed top-0 left-0 right-0 flex justify-center items-center gap-4 py-4 z-50"></nav>
        <VisualComponentBoundary
          label={
            <div className="text-red-500/60">/exhibit-a/[lang]/layout.tsx</div>
          }
          className="w-full max-w-4xl h-full max-h-[720px] p-8 px-16 pt-12 border-red-500/30 border-solid"
        >
          <div className="flex flex-col gap-6 w-full h-full">
            <header className="flex flex-col gap-4">
              <h1>
                Cache Components and Suspense UX Demos (No Suspense in Root
                Layout)
              </h1>
            </header>

            <Corners>
              {/* Sidebar */}
              <aside className="flex flex-col gap-4 w-50 shrink-0 p-4">
                <Nav lang={params.then((p) => p.lang)} />
              </aside>

              {/* Main Content Area */}
              <main className="flex w-full md:max-w-xl flex-1 overflow-y-auto min-h-0 max-md:border-t border-l border-dashed border-neutral-800">
                {children}
              </main>
            </Corners>
          </div>
        </VisualComponentBoundary>
      </body>
    </html>
  );
}
