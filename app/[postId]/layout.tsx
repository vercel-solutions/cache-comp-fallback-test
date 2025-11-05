import { DemoLayout } from "@/components/demo-layout";

export async function generateStaticParams() {
  return [{ postId: "1" }];
}

export default async function Layout({
  children,
  params,
}: LayoutProps<"/[postId]">) {
  const { postId } = await params;

  return <DemoLayout postId={postId}>{children}</DemoLayout>;
}
