import "@/app/globals.css";
import { RootNav } from "@/components/root-nav";

export async function generateStaticParams() {
  return [{ lang: "en" }];
}

async function RootHeader({ lang }: { lang: Promise<string> }) {
  const l = await lang;
  return (
    <header className="flex flex-col gap-4">
      <h1>Cache Components Testing</h1>
      <RootNav lang={l} />
    </header>
  );
}

export default function Layout({ children, params }: LayoutProps<"/[lang]">) {
  return (
    <html lang="en">
      <body className="dark flex justify-center items-center h-svh">
        <div className="flex flex-col gap-6 w-full max-w-3xl h-full max-h-[540px]">
          <RootHeader lang={params.then((p) => p.lang)} />
          {children}
        </div>
      </body>
    </html>
  );
}
