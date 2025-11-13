import "@/app/globals.css";
import { Corners } from "@components/corners";
import { TextFallback } from "@components/fallbacks";
import { Suspense } from "react";
import { NavLink } from "@/components/nav-link";

export async function generateStaticParams() {
  return [{ lang: "en" }];
}

export async function RootHeader({ lang }: { lang: Promise<string> }) {
  const l = await lang;
  return <h1>No Fallbacks</h1>;
}

export default function Layout({ children, params }: LayoutProps<"/[lang]">) {
  return (
    <html lang="en">
      <body className="dark flex justify-center items-center h-svh">
        <div className="flex flex-col gap-6 w-full max-w-3xl h-full max-h-[560px]">
          <header>
            <Suspense fallback={<TextFallback />}>
              <RootHeader lang={params.then((p) => p.lang)} />
            </Suspense>
          </header>

          {children}
        </div>
      </body>
    </html>
  );
}
