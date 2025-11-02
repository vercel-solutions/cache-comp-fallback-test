import { DemoLayout } from "@/components/demo-layout";

export default async function Demo2LangLayout({
  children,
  params,
}: Readonly<LayoutProps<"/demo-2/[lang]">>) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body className="flex justify-center items-center h-svh">
        <DemoLayout>{children}</DemoLayout>
      </body>
    </html>
  );
}
