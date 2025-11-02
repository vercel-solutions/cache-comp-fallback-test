import { DemoLayout } from "@/components/demo-layout";

export async function generateStaticParams() {
  return [{ lang: "__" }];
}

export default async function Demo1LangLayout({
  children,
  params,
}: Readonly<LayoutProps<"/demo-1/[lang]">>) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body className="flex justify-center items-center h-svh">
        <DemoLayout>{children}</DemoLayout>
      </body>
    </html>
  );
}
