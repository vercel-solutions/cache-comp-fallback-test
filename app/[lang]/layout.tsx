import "@/app/globals.css";
import { DemoLayout } from "@/components/demo-layout";

export async function generateStaticParams() {
  return [{ lang: "en" }];
}

export default function Layout({ children, params }: LayoutProps<"/[lang]">) {
  return (
    <html lang="en">
      <body className="dark flex justify-center items-center h-svh">
        <DemoLayout params={params}>{children}</DemoLayout>
      </body>
    </html>
  );
}
