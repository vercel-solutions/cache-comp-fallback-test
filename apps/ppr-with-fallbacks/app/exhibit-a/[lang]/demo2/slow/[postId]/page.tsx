import { VisualSuspenseBoundary } from "@components/boundary";
import { Code } from "@components/code";
import { Container } from "@components/container";
import { TextFallback } from "@components/fallbacks";
import { Suspense } from "react";
import { Post } from "@/components/posts";

export async function generateStaticParams() {
  return [{ postId: "1" }];
}

export default function Page({
  params,
}: PageProps<"/exhibit-a/[lang]/demo2/slow/[postId]">) {
  return (
    <Container className="flex flex-col gap-6" key="demo2-slow">
      <p className="text-xs leading-relaxed">
        Here we see instant navigation from the post list.
      </p>
      <VisualSuspenseBoundary>
        <Suspense fallback={<TextFallback />} key="demo2-slow-post">
          <Post params={params} />
        </Suspense>
      </VisualSuspenseBoundary>
      <p className="text-xs leading-relaxed">
        If this is post <Code>1</Code> (given in <Code>gSP</Code>), when we
        navigate here see no suspense fallbacks. Refreshing post <Code>1</Code>{" "}
        also shos no fallbacks.
      </p>
      <p className="text-xs leading-relaxed font-bold">
        For all other posts, we always see the fallback for the post content.
        Upon refreshing, we see all fallbacks from the top down.
      </p>
    </Container>
  );
}
