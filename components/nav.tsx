import { ClearPostsCacheButton } from "./clear-tags";
import { NavLink } from "./nav-link";

export async function Nav({ lang: localPromise }: { lang: Promise<string> }) {
  const lang = await localPromise;

  return (
    <nav className="flex flex-col h-full py-8 px-6">
      <div className="flex flex-col gap-5 grow">
        <NavLink href={`/${lang}/fast`}>fast posts</NavLink>
        <NavLink href={`/${lang}/slow`}>slow posts</NavLink>
      </div>

      <ClearPostsCacheButton />
    </nav>
  );
}
