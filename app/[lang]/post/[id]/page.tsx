import { Suspense } from "react";
import { Author, AuthorFallback } from "@/components/author";
import { Post, PostFallback } from "@/components/post";

// export async function generateStaticParams() {
//   return [{ lang: "en", id: "1" }];
// }

export default async function Page({ params }: PageProps<"/[lang]/post/[id]">) {
  return (
    <article className="flex flex-col gap-4">
      <Suspense fallback={<AuthorFallback />}>
        <Author idPromise={params.then((p) => p.id)} />
      </Suspense>
      <Suspense fallback={<PostFallback />}>
        <Post params={params} />
      </Suspense>
    </article>
  );
}
