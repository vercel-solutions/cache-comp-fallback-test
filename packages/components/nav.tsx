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
              ? `${prefix}/${lang}/demo1/dynamic`
              : `/${lang}/demo1/dynamic`,
            label: "dynamic posts",
          },
          {
            href: prefix
              ? `${prefix}/${lang}/demo1/static`
              : `/${lang}/demo1/static`,
            label: "static posts",
          },
        ]
      : [
          {
            href: prefix
              ? `${prefix}/${lang}/demo2/dynamic`
              : `/${lang}/demo2/dynamic`,
            label: "dynamic posts",
          },
          {
            href: prefix
              ? `${prefix}/${lang}/demo2/static`
              : `/${lang}/demo2/static`,
            label: "static posts",
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
      <div className="flex flex-col gap-3">
        <TextFallback className="w-24" />
        <TextFallback className="w-24" />
      </div>
    </nav>
  );
}
