export async function generateStaticParams() {
  return [{ postId: "1" }];
}

export default async function Page({ params }: PageProps<"/posts/[postId]">) {
  const { postId } = await params;

  return (
    <div>
      <p>Post ID: {postId}</p>
    </div>
  );
}
