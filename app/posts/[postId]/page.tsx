import { getPost } from "@/lib/api";

export async function generateStaticParams() {
  return [{ postId: "1" }];
}

export default async function Page({ params }: PageProps<"/posts/[postId]">) {
  const { postId } = await params;

  const post = await getPost(postId);

  return (
    <article className="flex flex-col gap-6 w-full max-md:p-4 p-8">
      <p>{post.title}</p>
      <p>{post.body}</p>
    </article>
  );
}
