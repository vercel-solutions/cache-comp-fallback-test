import { cacheLife, cacheTag } from "next/cache";
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
  cacheLife("days");

  const { id } = await params;

  cacheTag("posts", `post-${id}`);

  const post = await fetchPost(id);

  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
}
