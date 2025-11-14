import { VisualSuspenseBoundary } from "@components/boundary";
import { Container } from "@components/container";
import { TextFallback } from "@components/fallbacks";
import { Suspense } from "react";
import { Post } from "@/components/posts";

export async function generateStaticParams() {
  return [{ postId: "1" }];
}

export default function Page({
  params,
}: PageProps<"/exhibit-b/[lang]/demo1/static/[postId]">) {
  return (
    <Container className="flex flex-col gap-6">
      <p className="text-green-500">
        expected behavior <span>(but potentially blocks nav)</span>
      </p>
      <VisualSuspenseBoundary>
        <Suspense fallback={<TextFallback />}>
          <Post params={params} />
        </Suspense>
      </VisualSuspenseBoundary>
      <p className="text-xs leading-relaxed">
        When refreshing, we don't see any fallbacks. This is the expected ISR
        behavior. However, we would expect instant navigation from the post list
        while the post content is loading with a fallback when it's not
        prefetched or already prerendered (feasibility not withstanding).
      </p>
    </Container>
  );
}
