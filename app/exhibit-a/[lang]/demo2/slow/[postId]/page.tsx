import { cacheLife } from "next/cache";
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
}: PageProps<"/exhibit-a/[lang]/demo2/slow/[postId]">) {
  return (
    <Container className="flex flex-col gap-6">
      <p className="text-xs leading-relaxed">
        This text is static, and we saw it immediately upon navigating while the
        content below was still loading. The only difference between this demo 1
        is that the left nav uses suspense.
      </p>
      <VisualSuspenseBoundary>
        <Suspense fallback={<TextFallback />}>
          <Post id={params.then((p) => `slow-${p.postId}`)} />
        </Suspense>
      </VisualSuspenseBoundary>
      <p className="text-xs leading-relaxed">
        When refreshing, we see all suspense fallbacks from the top down. In
        this scenario, there is no UX difference between static and dynamic
        approaches.
      </p>
    </Container>
  );
}

async function Post({ id }: { id: Promise<string> }) {
  "use cache: remote";
  cacheLife({ expire: 30 });

  const postId = await id;
  const post = await getPost(postId);

  return <p className="text-xs">{post.title} content loaded.</p>;
}
