import { cacheLife } from "next/cache";
import { Suspense } from "react";
import { VisualSuspenseBoundary } from "@/components/boundary";
import { Container } from "@/components/container";
import { TextFallback } from "@/components/fallbacks";
import { getPost } from "@/lib/api";

export async function generateStaticParams() {
  return [{ postId: "1" }];
}

export default function Page({ params }: PageProps<"/[lang]/demo2/slow/[postId]">) {
  return (
    <Container className="flex flex-col gap-6">
      <p className="text-xs leading-relaxed">
        This text is static, but we waited 2.5 seconds before you could navigate
        here since the content below blocked the entire page.
      </p>
      <VisualSuspenseBoundary>
        <Suspense fallback={<TextFallback />}>
          <Post id={params.then((p) => `slow-${p.postId}`)} />
        </Suspense>
      </VisualSuspenseBoundary>
    </Container>
  );
}

async function Post({ id }: { id: Promise<string> }) {
  "use cache: remote";
  cacheLife({ expire: 300 });

  const postId = await id;
  const post = await getPost(postId);

  return <p className="text-xs">{post.title} loaded.</p>;
}

