import { connection } from "next/server";
import { Suspense } from "react";
import { VisualSuspenseBoundary } from "@/components/boundary";
import { TextFallback } from "@/components/fallbacks";
import { getPost } from "@/lib/api";

export async function generateStaticParams() {
  return [{ postId: "1" }];
}

export default function Page({
  params,
}: PageProps<"/[lang]/fast/[postId]">) {
  return (
    <article className="flex flex-col gap-6 w-full max-md:p-4 p-8">
      <p>
        This text is static, and we saw it immediately upon navigating here,
        while the content below was still loading.
      </p>
      <VisualSuspenseBoundary>
        <Suspense fallback={<TextFallback />}>
          <Post id={params.then((p) => `fast-${p.postId}`)} />
        </Suspense>
      </VisualSuspenseBoundary>
    </article>
  );
}

async function Post({ id }: { id: Promise<string> }) {
  const postId = await id;
  if (postId.startsWith("fast")) {
    await connection();
  }

  const post = await getPost(postId);

  return <p>{post.title} loaded.</p>;
}

