export async function generateStaticParams() {
  return [{ postId: "1" }];
}

export default async function Layout({ children }: React.PropsWithChildren) {
  return children;
}
