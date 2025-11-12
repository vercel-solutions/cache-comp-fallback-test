import { TextFallback } from "./fallbacks";
import { NavLink } from "./nav-link";

export async function Nav({
  lang: langPromise,
  demo,
}: {
  lang: Promise<string>;
  demo: "demo1" | "demo2";
}) {
  const lang = await langPromise;

  const links =
    demo === "demo1"
      ? [
          { href: `/exhibit-a/${lang}/demo1/fast`, label: "fast posts" },
          { href: `/exhibit-a/${lang}/demo1/slow`, label: "slow posts" },
        ]
      : [
          { href: `/exhibit-a/${lang}/demo2/fast`, label: "fast posts" },
          { href: `/exhibit-a/${lang}/demo2/slow`, label: "slow posts" },
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
