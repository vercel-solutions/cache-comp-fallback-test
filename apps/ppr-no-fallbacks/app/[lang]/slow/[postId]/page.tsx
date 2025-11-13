import { VisualSuspenseBoundary } from "@components/boundary";
import { Container } from "@components/container";
import { TextFallback } from "@components/fallbacks";
import { getPost, getPostDynamic } from "@lib/api";
import { cacheLife } from "next/cache";
import { connection } from "next/server";
import { Suspense } from "react";

export async function generateStaticParams() {
  return [{ postId: "1" }];
}

export default function Page({ params }: PageProps<"/[lang]/slow/[postId]">) {
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
          <Post2 params={params} />
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

async function Post({
  params,
}: {
  params: Promise<{ lang: string; postId: string }>;
}) {
  const { lang, postId } = await params;
  const post = await getPost(postId, lang, 1000);

  return (
    <p className="text-xs">
      {post.title} [{post.lang}] content loaded.
    </p>
  );
}

async function Post2({
  params,
}: {
  params: Promise<{ lang: string; postId: string }>;
}) {
  const [{ postId, lang }] = await Promise.all([params, connection()]);

  const post = await getPostDynamic(`${postId}-dynamic`, lang, 5000);

  return (
    <p className="text-xs">
      {post.title} [{post.lang}] content loaded.
    </p>
  );
}
