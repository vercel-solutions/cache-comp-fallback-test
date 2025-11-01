import { Suspense } from "react";
import { Post, PostFallback } from "@/components/post";

export async function generateMetadata() {
  return [{ lang: "en", id: "1" }];
}

export default async function Page({ params }: PageProps<"/[lang]/post/[id]">) {
  const { id } = await params;

  return (
    <article className="flex flex-col gap-4">
      {/* <Suspense fallback={<PostFallback />}> */}
      <Post id={id} />
      {/* </Suspense> */}
    </article>
  );
}
