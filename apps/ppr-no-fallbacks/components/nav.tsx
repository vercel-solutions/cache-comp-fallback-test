import { TextFallback } from "./fallbacks";
import { NavLink } from "./nav-link";

export async function Nav({ lang: langPromise }: { lang: Promise<string> }) {
  const lang = await langPromise;

  const links = [
    {
      href: `/${lang}/fast`,
      label: "fast posts",
    },
    {
      href: `/${lang}/slow`,
      label: "slow posts",
    },
  ];

  return (
    <nav className="flex flex-col h-full">
      <div className="flex flex-col gap-3">
        {links.map((link) => (
          <NavLink key={link.href} href={link.href}>
            {link.label}
          </NavLink>
        ))}
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
      </div>
    </nav>
  );
}
