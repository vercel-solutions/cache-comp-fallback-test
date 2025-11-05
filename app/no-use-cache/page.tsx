import { cookies } from "next/headers";
import { Suspense } from "react";
import {
  VisualComponentBoundary,
  VisualSuspenseBoundary,
} from "@/components/boundary";
import { Code } from "@/components/code";
import { getPost } from "@/lib/api";

async function PostTitle({ id }: { id: string }) {
  const post = await getPost(id);
  return <h2 className="text-base font-bold">{post.title}</h2>;
}

async function PostContent({ id }: { id: string }) {
  const post = await getPost(id);
  return <p className="text-sm text-neutral-400">{post.body}</p>;
}

async function User() {
  const sessionId = (await cookies()).get("sessionId")?.value;
  return <p className="text-sm text-neutral-400">Session ID: {sessionId}</p>;
}

export default async function Page() {
  return (
    <article className="flex flex-col gap-6 w-full">
      <p>
        There first two components below use the same fetch function. Neither
        are marked with <Code>use cache</Code>. The shared function does have{" "}
        <Code>use cache</Code>. In this scenario, the fetch is deduplicated.
      </p>

      <div className="flex flex-col gap-4">
        <VisualComponentBoundary label="post header">
          <PostTitle id="1" />
        </VisualComponentBoundary>

        <VisualComponentBoundary label="post body">
          <PostContent id="1" />
        </VisualComponentBoundary>
      </div>

      <Suspense>
        <VisualSuspenseBoundary>
          <User />
        </VisualSuspenseBoundary>
      </Suspense>
    </article>
  );
}
