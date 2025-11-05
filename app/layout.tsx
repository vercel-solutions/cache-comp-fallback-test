import "@/app/globals.css";
import { DemoLayout } from "@/components/demo-layout";

export default async function Layout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className="flex justify-center items-center h-svh">
        <DemoLayout>{children}</DemoLayout>
      </body>
    </html>
  );
}
