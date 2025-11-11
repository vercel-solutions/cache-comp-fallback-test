import { Suspense } from "react";
import { VisualSuspenseBoundary } from "@/components/boundary";
import { TextFallback } from "@/components/fallbacks";
import { getPost } from "@/lib/api";

// export async function generateStaticParams() {
//   return [{ postId: "1" }];
// }

export default function Page({ params }: PageProps<"/[lang]/slow/[postId]">) {
  return (
    <article className="flex flex-col gap-6 w-full max-md:p-4 p-8">
      <p>
        This text is static, but we waited 2.5 seconds before you could navigate
        here since the content below blocked the entire page.
      </p>
      <VisualSuspenseBoundary>
        <Suspense fallback={<TextFallback />}>
          <Post id={params.then((p) => `slow-${p.postId}`)} />
        </Suspense>
      </VisualSuspenseBoundary>
    </article>
  );
}

async function Post({ id }: { id: Promise<string> }) {
  "use cache";

  const postId = await id;
  const post = await getPost(postId);

  return <p>{post.title} loaded.</p>;
}
