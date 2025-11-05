import "@/app/globals.css";

export default async function Layout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className="flex justify-center items-center h-svh">{children}</body>
    </html>
  );
}
