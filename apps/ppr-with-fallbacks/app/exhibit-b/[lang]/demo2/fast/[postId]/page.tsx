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
}: PageProps<"/exhibit-b/[lang]/demo2/fast/[postId]">) {
  return (
    <Container className="flex flex-col gap-6">
      <p className="text-xs leading-relaxed">
        Navigation here is instant. We're forcing the post content area to be
        dynamic with <Code>await connection()</Code>.
      </p>
      <VisualSuspenseBoundary>
        <Suspense fallback={<TextFallback />}>
          <PostDynamic params={params} />
        </Suspense>
      </VisualSuspenseBoundary>
      <p className="text-xs leading-relaxed">
        If this is post <Code>1</Code> (given in <Code>gSP</Code>), when we
        navigate here we see the post content fallback. Refreshing post{" "}
        <Code>1</Code> behaves the same, only showing the dynamic post
        component's fallback as expected.
      </p>
      <p className="text-xs leading-relaxed font-bold">
        For all other posts, upon refresh, we see the fallback for the post
        content as expected, but we also see fallbacks for all suspense
        boundaries from the top down.
      </p>
    </Container>
  );
}
