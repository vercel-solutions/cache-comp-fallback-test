import { Code } from "@components/code";
import { getPost, getPostDynamic, getPostShortCacheLife } from "@lib/api";
import { connection } from "next/server";

export async function Post({
  params,
}: {
  params: Promise<{ lang: string; postId: string }>;
}) {
  "use cache";
  const { lang, postId } = await params;
  const post = await getPost(postId, lang);
  const timestamp = Date.now();

  return (
    <p className="text-xs">
      {post.title} content loaded at <Code>{timestamp}</Code>.
    </p>
  );
}

export async function PostShortCacheLife({
  params,
}: {
  params: Promise<{ lang: string; postId: string }>;
}) {
  const { lang, postId } = await params;
  const post = await getPostShortCacheLife(`${postId}-short-cache-life`, lang);

  return <p className="text-xs">{post.title} content loaded.</p>;
}

export async function PostDynamic({
  params,
}: {
  params: Promise<{ lang: string; postId: string }>;
}) {
  const [{ postId, lang }] = await Promise.all([params, connection()]);
  const post = await getPostDynamic(`${postId}-dynamic`, lang);
  const timestamp = Date.now();

  return (
    <p className="text-xs">
      {post.title} content loaded at <Code>{timestamp}</Code>.
    </p>
  );
}
