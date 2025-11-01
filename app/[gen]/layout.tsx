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
        <div className="flex flex-col gap-4 max-w-lg mx-auto pt-10">
          <p className="text-sm text-gray-600">
            current layout params:{" "}
            <code className="text-pink-300 text-xs">{`{gen: "${gen}"}`}</code>.
          </p>

          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
