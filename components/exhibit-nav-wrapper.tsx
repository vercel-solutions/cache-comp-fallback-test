import { ExhibitNav } from "./exhibit-nav";

export async function ExhibitNavWrapper({ lang }: { lang: Promise<string> }) {
  const l = await lang;
  return <ExhibitNav lang={l} />;
}
