import { VisualSuspenseBoundary } from "@components/boundary";
import { Code } from "@components/code";
import { Container } from "@components/container";
import { TextFallback } from "@components/fallbacks";
import { Suspense } from "react";
import { PostDynamic } from "@/components/posts";

export async function generateStaticParams() {
  return [{ postId: "1" }];
}

export default function Page({
  params,
}: PageProps<"/exhibit-a/[lang]/demo2/fast/[postId]">) {
  return (
    <Container className="flex flex-col gap-6" key="demo2-fast">
      <p className="text-xs leading-relaxed">
        This text is static, and we saw it immediately upon navigating here,
        while the content below was still loading. We are forcing the post
        content area to be dynamic with <Code>await connection()</Code>.
      </p>
      <VisualSuspenseBoundary>
        <Suspense fallback={<TextFallback />}>
          <PostDynamic
            params={params.then((p) => ({ ...p, postId: `fast-${p.postId}` }))}
          />
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
