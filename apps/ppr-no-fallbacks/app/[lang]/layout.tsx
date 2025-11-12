import "@/app/globals.css";
import { Corners } from "@components/corners";
import { Nav } from "@/components/nav";

export async function generateStaticParams() {
  return [{ lang: "en" }];
}

export default function Layout({ children, params }: LayoutProps<"/[lang]">) {
  return (
    <html lang="en">
      <body className="dark flex justify-center items-center h-svh">
        <div className="flex flex-col gap-6 w-full max-w-4xl h-full max-h-[640px]">
          <header>
            <h1>
              Cache Components and Suspense UX Demos (No Suspense in Root
              Layout)
            </h1>
          </header>

          <Corners>
            {/* Sidebar */}
            <aside className="flex flex-col gap-4 w-50 p-8">
              <Nav lang={params.then((p) => p.lang)} />
            </aside>

            {/* Main Content Area */}
            <main className="flex w-full  flex-1 overflow-y-auto min-h-0 max-md:border-t border-l border-dashed border-neutral-800">
              {children}
            </main>
          </Corners>
        </div>
      </body>
    </html>
  );
}
