import { Suspense } from "react";
import { RootNav } from "@/components/root-nav";
import { TextFallback } from "./fallbacks";

export async function RootHeader({ lang }: { lang: Promise<string> }) {
  const l = await lang;
  return (
    <header className="flex flex-col gap-4">
      <h1>Cache Components Testing</h1>
      <Suspense fallback={<TextFallback />}>
        <RootNav lang={l} />
      </Suspense>
    </header>
  );
}
