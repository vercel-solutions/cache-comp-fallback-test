import { Demo1Layout } from "@/components/demo1-layout";

export default function Layout({ children, params }: LayoutProps<"/[lang]/demo1">) {
  return <Demo1Layout params={params}>{children}</Demo1Layout>;
}

