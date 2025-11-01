import { Suspense } from "react";
import { Post, PostFallback } from "@/components/post";

export default async function Page({ params }: PageProps<"/[lang]/post/[id]">) {
  return (
    <article className="flex flex-col gap-4">
      <Suspense fallback={<PostFallback />}>
        <Post params={params} />
      </Suspense>
    </article>
  );
}
