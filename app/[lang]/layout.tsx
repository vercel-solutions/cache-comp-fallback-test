import "@/app/globals.css";
import { RootHeader } from "@/components/root-header";

export async function generateStaticParams() {
  return [{ lang: "en" }];
}

export default function Layout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
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

