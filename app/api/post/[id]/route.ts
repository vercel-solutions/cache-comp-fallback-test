import { cacheLife, cacheTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(
  _req: NextRequest,
  ctx: RouteContext<"/api/post/[id]">,
) {
  const { id } = await ctx.params;

  const post = await fetchPost(id);

  return NextResponse.json(post);
}

async function fetchPost(id: string) {
  "use cache";
  cacheLife("days");
  cacheTag("posts", `post-${id}`);

  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
    res.json(),
  );
}
