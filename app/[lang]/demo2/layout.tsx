import { Demo2Layout } from "@/components/demo2-layout";

export default function Layout({ children, params }: LayoutProps<"/[lang]/demo2">) {
  return <Demo2Layout params={params}>{children}</Demo2Layout>;
}

