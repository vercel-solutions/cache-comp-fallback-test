import { TextFallback } from "./fallbacks";
import { NavLink } from "./nav-link";

export async function Nav({ lang: langPromise }: { lang: Promise<string> }) {
  const lang = await langPromise;

  return (
    <nav className="flex flex-col h-full">
      <div className="flex flex-col gap-3">
        <NavLink href={`/${lang}`}>home</NavLink>
        <NavLink href={`/${lang}/fast`}>fast posts</NavLink>
        <NavLink href={`/${lang}/slow`}>slow posts</NavLink>
      </div>
    </nav>
  );
}

export function NavFallback() {
  return (
    <nav className="flex flex-col h-full">
      <div className="flex flex-col gap-4">
        <TextFallback className="w-24" />
        <TextFallback className="w-24" />
        <TextFallback className="w-24" />
      </div>
    </nav>
  );
}
