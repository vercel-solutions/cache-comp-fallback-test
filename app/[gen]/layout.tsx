import type { Metadata } from "next";
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
        <main>{children}</main>
      </body>
    </html>
  );
}
