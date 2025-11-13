import { VisualSuspenseBoundary } from "@components/boundary";
import { Code } from "@components/code";
import { Container } from "@components/container";
import { CookieValue } from "@components/cookie-value";
import { TextFallback } from "@components/fallbacks";
import { Suspense } from "react";
import { Post, PostShortCacheLife } from "@/components/posts";

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
          <Post params={params} />
        </Suspense>
      </VisualSuspenseBoundary>
      <VisualSuspenseBoundary>
        <Suspense fallback={<TextFallback />}>
          <PostShortCacheLife params={params} />
        </Suspense>
      </VisualSuspenseBoundary>
      <VisualSuspenseBoundary>
        <Suspense fallback={<TextFallback />}>
          <CookieValue />
        </Suspense>
      </VisualSuspenseBoundary>
      <p className="text-xs leading-relaxed">
        If this is post "1" (given in <Code>generateStaticParams</Code>), when
        refreshing, we will only see the suspense fallbacks for the 2 areas
        below. For all other posts, when refreshing, we will see all suspense
        fallbacks from the top down. In this scenario, there is no UX difference
        between static and dynamic approaches.
      </p>
    </Container>
  );
}
