import "@/app/globals.css";
import {
  VisualComponentBoundary,
  VisualSuspenseBoundary,
} from "@components/boundary";
import { TextFallback } from "@components/fallbacks";
import { RootNav } from "@components/root-nav";
import Link from "next/link";
import { Suspense } from "react";

export async function generateStaticParams() {
  return [{ lang: "en" }];
}

export async function RootHeader({ lang }: { lang: Promise<string> }) {
  const l = await lang;
  return (
    <header className="flex flex-col gap-4">
      <h1>Exhibit A: Suspense in Root Layout</h1>
      <VisualSuspenseBoundary>
        <Suspense fallback={<TextFallback />} key="root-nav">
          <RootNav lang={l} exhibit="a" />
        </Suspense>
      </VisualSuspenseBoundary>
    </header>
  );
}

export default function Layout({
  children,
  params,
}: LayoutProps<"/exhibit-a/[lang]">) {
  return (
    <html lang="en">
      <body className="dark flex justify-center items-center h-svh">
        <nav className="fixed top-0 left-0 right-0 flex justify-center items-center gap-4 py-4 z-50">
          <Link
            href="/exhibit-a/en/demo1/fast"
            className="text-xs text-yellow-500"
          >
            exhibit a
          </Link>
          <Link href="/exhibit-b/en/demo1/fast" className="text-xs">
            exhibit b
          </Link>
        </nav>
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
