import { cacheLife } from "next/cache";
import { fetchPost } from "@/lib/api";

export function PostFallback() {
  return <div>Loading...</div>;
}

export async function Post({ id }: { id: string }) {
  const post = await fetchPost(id);

  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
}
