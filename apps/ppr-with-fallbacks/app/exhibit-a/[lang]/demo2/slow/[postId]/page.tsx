import { VisualSuspenseBoundary } from "@components/boundary";
import { Code } from "@components/code";
import { Container } from "@components/container";
import { TextFallback } from "@components/fallbacks";
import { Suspense } from "react";
import { Post, PostShortCacheLife } from "@/components/posts";

// export async function generateStaticParams() {
//   return [{ postId: "1" }];
// }

export default function Page({
  params,
}: PageProps<"/exhibit-a/[lang]/demo2/slow/[postId]">) {
  return (
    <Container className="flex flex-col gap-6" key="demo2-slow">
      <p className="text-xs leading-relaxed">
        This text is static, and we saw it immediately upon navigating while the
        content below was still loading. The only difference between this demo 1
        is that the left nav uses suspense.
      </p>
      <VisualSuspenseBoundary>
        <Suspense fallback={null} key="demo2-slow-post">
          <Post params={params} />
        </Suspense>
      </VisualSuspenseBoundary>
      <VisualSuspenseBoundary>
        <Suspense
          fallback={<TextFallback />}
          key="demo2-slow-post-short-cache-life"
        >
          <PostShortCacheLife params={params} />
        </Suspense>
      </VisualSuspenseBoundary>
      <p className="text-xs leading-relaxed">
        If this is post "1" (given in <Code>generateStaticParams</Code>), when
        refreshing, we will only see the suspense fallback for the 2nd post with
        short cache life. When refreshing any other posts here, we see all
        fallbacks from the top down.
      </p>
    </Container>
  );
}
