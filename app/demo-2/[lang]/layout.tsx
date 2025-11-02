import "@/app/globals.css";
import { Nav } from "@/components/nav";

export default async function Demo2LangLayout({
  children,
  params,
}: Readonly<LayoutProps<"/demo-2/[lang]">>) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body className="flex justify-center items-center h-svh">
        <div className="flex max-md:flex-col justify-center items-stretch max-w-4xl relative mx-auto border border-dashed border-neutral-800">
          <div className="absolute top-0 left-0 size-10 -m-px border-t border-l border-neutral-700" />
          <div className="absolute top-0 right-0 size-10 -m-px border-t border-r border-neutral-700" />
          <div className="absolute bottom-0 left-0 size-10 -m-px border-b border-l border-neutral-700" />
          <div className="absolute bottom-0 right-0 size-10 -m-px border-b border-r border-neutral-700" />

          {/* Sidebar */}
          <aside className="w-48 py-6.5">
            <Nav />
          </aside>

          {/* Main Content Area */}
          <main className="flex flex-col items-center justify-center w-full md:max-w-xl min-h-[420px] flex-1 overflow-y-auto max-md:p-4 p-8 max-md:border-t border-l border-dashed border-neutral-800">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
