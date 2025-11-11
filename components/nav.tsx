import { Suspense } from "react";
import { NavLink } from "./nav-link";

export async function Nav({ lang: localPromise }: { lang: Promise<string> }) {
  const lang = await localPromise;

  return (
    <nav>
      <Suspense>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h4 className="text-muted-foreground">slow</h4>
            <NavLink href={`/${lang}/posts/slow-1`}>post 1</NavLink>
            <NavLink href={`/${lang}/posts/slow-2`}>post 2</NavLink>
            <NavLink href={`/${lang}/posts/slow-3`}>post 3</NavLink>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-muted-foreground">fast</h4>
            <NavLink href={`/${lang}/posts/fast-1`}>post 1</NavLink>
            <NavLink href={`/${lang}/posts/fast-2`}>post 2</NavLink>
            <NavLink href={`/${lang}/posts/fast-3`}>post 3</NavLink>
          </div>
        </div>
      </Suspense>
    </nav>
  );
}
