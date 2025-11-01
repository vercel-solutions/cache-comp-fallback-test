import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Cache Component Suspense Fallbacks",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<LayoutProps<"/[lang]">>) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
