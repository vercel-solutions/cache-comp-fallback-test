import { fetchPost } from "@/lib/api";

export function PostFallback() {
  return <div>Loading...</div>;
}

export async function Post({
  params,
}: {
  params: PageProps<"/[lang]/post/[id]">["params"];
}) {
  "use cache";

  const { id } = await params;

  const post = await fetchPost(id);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>id: {post.id}</p>
      <p>{post.body}</p>
    </div>
  );
}
