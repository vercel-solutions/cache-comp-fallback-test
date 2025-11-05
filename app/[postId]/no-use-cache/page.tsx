import { cookies } from "next/headers";
import { Suspense } from "react";
import {
  VisualComponentBoundary,
  VisualSuspenseBoundary,
} from "@/components/boundary";
import { Code } from "@/components/code";
import { getPost } from "@/lib/api";

async function PostTitle({ id }: { id: Promise<string> }) {
  const post = await getPost(await id);
  return <h2 className="text-base font-bold">{post.title}</h2>;
}

async function PostContent({ id }: { id: Promise<string> }) {
  const post = await getPost(await id);
  return <p className="text-sm text-neutral-400">{post.body}</p>;
}

async function User() {
  const sessionId = (await cookies()).get("sessionId")?.value;
  return <p className="text-xs text-neutral-400">Session ID: {sessionId}</p>;
}

export async function generateStaticParams() {
  return [{ postId: "1" }];
}

export default async function Page({
  params,
}: PageProps<"/[postId]/no-use-cache">) {
  return (
    <article className="flex flex-col gap-6 w-full">
      <p>
        There first two components below use the same fetch function. Neither
        are marked with <Code>use cache</Code>. The shared function does have{" "}
        <Code>use cache</Code>. In this scenario, the fetch is deduplicated.
      </p>

      <div className="flex flex-col gap-4">
        <VisualComponentBoundary label="post header">
          <PostTitle id={params.then((p) => p.postId)} />
        </VisualComponentBoundary>

        <VisualComponentBoundary label="post body">
          <PostContent id={params.then((p) => p.postId)} />
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
