import { DemoLayout } from "@/components/demo-layout";

export default async function Layout({ children }: React.PropsWithChildren) {
  return <DemoLayout>{children}</DemoLayout>;
}
