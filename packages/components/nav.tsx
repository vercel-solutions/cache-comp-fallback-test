import { TextFallback } from "./fallbacks";
import { NavLink } from "./nav-link";

export async function Nav({
  lang: langPromise,
  demo,
  exhibit,
}: {
  lang: Promise<string>;
  demo?: "demo1" | "demo2";
  exhibit?: "a" | "b";
}) {
  const lang = await langPromise;

  const prefix = exhibit ? `/exhibit-${exhibit}` : "";

  const links =
    demo === "demo1"
      ? [
          {
            href: prefix
              ? `${prefix}/${lang}/demo1/fast`
              : `/${lang}/demo1/fast`,
            label: "fast posts",
          },
          {
            href: prefix
              ? `${prefix}/${lang}/demo1/slow`
              : `/${lang}/demo1/slow`,
            label: "slow posts",
          },
        ]
      : [
          {
            href: prefix
              ? `${prefix}/${lang}/demo2/fast`
              : `/${lang}/demo2/fast`,
            label: "fast posts",
          },
          {
            href: prefix
              ? `${prefix}/${lang}/demo2/slow`
              : `/${lang}/demo2/slow`,
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
