import "@/app/globals.css";

export async function generateStaticParams() {
  return [{ lang: "en" }];
}

export default async function Layout({ children }: React.PropsWithChildren) {
  "use cache";
  return children;
}
