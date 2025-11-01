import { type NextRequest, NextResponse } from "next/server";

export async function GET(
  _req: NextRequest,
  ctx: RouteContext<"/api/post/[id]">,
) {
  const { id } = await ctx.params;

  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  ).then((res) => res.json());

  return NextResponse.json(post);
}
