import "@/app/globals.css";
import { Suspense } from "react";
import {
  VisualComponentBoundary,
  VisualSuspenseBoundary,
} from "@/components/boundary";
import { TextFallback } from "@/components/fallbacks";
import { RootNav } from "@/components/root-nav";

export async function generateStaticParams() {
  return [{ lang: "en" }];
}

export async function RootHeader({ lang }: { lang: Promise<string> }) {
  const l = await lang;
  return (
    <header className="flex flex-col gap-4">
      <h1>Cache Components and Suspense UX Demos (Suspense in Root Layout)</h1>
      <VisualSuspenseBoundary>
        <Suspense fallback={<TextFallback />}>
          <RootNav lang={l} />
        </Suspense>
      </VisualSuspenseBoundary>
    </header>
  );
}

export default function Layout({ children, params }: LayoutProps<"/[lang]">) {
  return (
    <html lang="en">
      <body className="dark flex justify-center items-center h-svh">
        <VisualComponentBoundary
          label={<div className="text-red-500/60">/[lang]/layout.tsx</div>}
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
