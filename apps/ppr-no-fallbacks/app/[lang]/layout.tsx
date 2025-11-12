import "@/app/globals.css";
import { VisualComponentBoundary } from "@components/boundary";
import { RootNav } from "@components/root-nav";

export async function generateStaticParams() {
  return [{ lang: "en" }];
}

export async function RootHeader({ lang }: { lang: Promise<string> }) {
  const l = await lang;
  return (
    <header className="flex flex-col gap-4">
      <h1>
        Cache Components and Suspense UX Demos (No Suspense in Root Layout)
      </h1>
      <RootNav lang={l} />
    </header>
  );
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
            <RootHeader lang={params.then((p) => p.lang)} />
            {children}
          </div>
        </VisualComponentBoundary>
      </body>
    </html>
  );
}
