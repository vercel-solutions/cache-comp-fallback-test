import { VisualComponentBoundary } from "@components/boundary";
import { Corners } from "@components/corners";
import { cn } from "@lib/utils";
import Link from "next/link";

export default function Layout({
  children,
  params,
}: LayoutProps<"/exhibit-a/[lang]/demo1">) {
  return (
    <VisualComponentBoundary
      label={
        <div className="text-red-500/60">
          /exhibit-a/[lang]/demo1/layout.tsx
        </div>
      }
      className="flex h-full min-h-0 p-8 pt-12 -mx-8 border-red-500/30 border-solid gap-6"
    >
      <aside className="flex flex-col gap-4 w-40 shrink-0 ">
        <Nav lang={params.then((p) => p.lang)} demo="demo1" exhibit="a" />
      </aside>

      <Corners>
        <main className="w-full md:max-w-xl flex-1 overflow-y-auto min-h-0">
          {children}
        </main>
      </Corners>
    </VisualComponentBoundary>
  );
}

async function Nav({
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
          <Link
            key={link.href}
            href={link.href}
            className={cn("block", {
              "text-yellow-500": false,
            })}
          >
            <p>{link.label}</p>
          </Link>
        ))}
      </div>
    </nav>
  );
}
