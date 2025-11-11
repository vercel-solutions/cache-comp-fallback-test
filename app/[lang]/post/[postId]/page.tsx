import { connection } from "next/server";
import { Suspense } from "react";
import { VisualSuspenseBoundary } from "@/components/boundary";
import { Code } from "@/components/code";
import { TextFallback } from "@/components/fallbacks";
import { getPost } from "@/lib/api";

export async function generateStaticParams() {
  return [{ postId: "1" }];
}

export default async function Page({
  params,
}: PageProps<"/[lang]/post/[postId]">) {
  const { postId } = await params;

  return (
    <article className="flex flex-col gap-6 w-full max-md:p-4 p-8">
      <p>Post ID: {postId}</p>
      {postId.startsWith("fast") ? (
        <p>
          This text is static, and we saw it immediately upon navigating here,
          while the content below was still loading.
        </p>
      ) : (
        <p>
          This text is static, but we waited 2.5 seconds before you could
          navigate here since the content below blocked the entire page.
        </p>
      )}

      <VisualSuspenseBoundary>
        <Suspense fallback={<TextFallback />}>
          <Post id={postId} />
        </Suspense>
      </VisualSuspenseBoundary>
    </article>
  );
}

async function Post({ id }: { id: string }) {
  if (id.startsWith("fast")) {
    await connection();
  }

  const post = await getPost(id);

  return <p>{post.title} loaded.</p>;
}
