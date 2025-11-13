import { VisualSuspenseBoundary } from "@components/boundary";
import { Container } from "@components/container";
import { TextFallback } from "@components/fallbacks";
import { Suspense } from "react";
import { Post, PostDynamic, PostShortCacheLife } from "@/components/posts";

export async function generateStaticParams() {
  return [{ postId: "1" }];
}

export default function Page({
  params,
}: PageProps<"/exhibit-a/[lang]/demo1/slow/[postId]">) {
  return (
    <Container className="flex flex-col gap-6">
      <p className="text-xs leading-relaxed">
        This text is static, but we waited 2.5 seconds before you could navigate
        here (if it wasn't prefetched or already prerendered) since the content
        below blocked the entire page. The only difference between this demo 2
        is that the left nav does not use suspense.
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
          <PostDynamic params={params} />
        </Suspense>
      </VisualSuspenseBoundary>
      <p className="text-xs leading-relaxed">
        When refreshing, we only see the post content suspense fallback, and
        subsequent visits behave the same as the fast (dynamic) posts. However,
        on long tail posts, before prefetch can finish, users experience a
        noticeable delay.
      </p>
    </Container>
  );
}
