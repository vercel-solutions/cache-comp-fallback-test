import { connection } from "next/server";
import { Suspense } from "react";
import { VisualSuspenseBoundary } from "@/components/boundary";
import { Container } from "@/components/container";
import { TextFallback } from "@/components/fallbacks";
import { getPost } from "@/lib/api";

export async function generateStaticParams() {
  return [{ postId: "1" }];
}

export default function Page({
  params,
}: PageProps<"/[lang]/demo1/fast/[postId]">) {
  return (
    <Container className="flex flex-col gap-6">
      <p className="text-xs leading-relaxed">
        This text is static, and we saw it immediately upon navigating here,
        while the content below was still loading.
      </p>
      <VisualSuspenseBoundary>
        <Suspense fallback={<TextFallback />}>
          <Post id={params.then((p) => `fast-${p.postId}`)} />
        </Suspense>
      </VisualSuspenseBoundary>
    </Container>
  );
}

async function Post({ id }: { id: Promise<string> }) {
  const [postId] = await Promise.all([id, connection()]);

  const post = await getPost(postId);

  return <p className="text-xs">{post.title} loaded.</p>;
}
