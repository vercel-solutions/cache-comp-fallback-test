import { cacheLife, cacheTag } from "next/cache";
import { fetchPost } from "@/lib/api";

export async function Post({
  params,
}: {
  params: PageProps<"/[gen]/post/[id]">["params"];
}) {
  "use cache";
  cacheLife("days");

  const { id } = await params;

  cacheTag("posts", `post-${id}`);

  const post = await fetchPost(id);

  return (
    <div className="flex flex-col gap-2">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
