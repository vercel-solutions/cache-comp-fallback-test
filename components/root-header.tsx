import { RootNav } from "@/components/root-nav";

export async function RootHeader({ lang }: { lang: Promise<string> }) {
  const l = await lang;
  return (
    <header className="flex flex-col gap-4">
      <h1>Cache Components Testing</h1>
      <RootNav lang={l} />
    </header>
  );
}
