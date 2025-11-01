import type { Metadata } from "next";
import Link from "next/link";
import "../globals.css";

export const metadata: Metadata = {
  title: "Cache Component Suspense Fallbacks",
};

export async function generateStaticParams() {
  return [{ gen: "gsp" }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<LayoutProps<"/[gen]">>) {
  const { gen } = await params;

  return (
    <html lang="en">
      <body>
        <div className="flex flex-col gap-4 max-w-lg mx-auto pt-10">
          <div className="flex gap-6 mb-4">
            <Link
              href="/gsp/post/1"
              className={`text-sm text-yellow-500 hover:underline ${gen === "gsp" ? "underline" : ""}`}
            >
              path in gsp at build time
            </Link>
            <Link
              href="/foo/post/1"
              className={`text-sm text-yellow-500 hover:underline ${gen !== "gsp" ? "underline" : ""}`}
            >
              path not in gsp at build time
            </Link>
          </div>

          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
