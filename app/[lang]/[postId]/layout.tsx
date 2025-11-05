import { DemoLayout } from "@/components/demo-layout";

export async function generateStaticParams() {
  return [{ postId: "1" }];
}

export default async function Layout({
  children,
  params,
}: LayoutProps<"/[lang]/[postId]">) {
  const { postId, lang } = await params;

  return (
    <html lang="en">
      <body className="flex justify-center items-center h-svh">
        <DemoLayout postId={postId} lang={lang}>
          {children}
        </DemoLayout>
      </body>
    </html>
  );
}
