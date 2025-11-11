import Link from "next/link";
import { Suspense } from "react";

export default function Page({ params }: PageProps<"/[lang]/posts">) {
  return (
    <section className="flex flex-col gap-6 w-full h-[420px] overflow-y-auto ">
      <ul className="grid grid-cols-2 gap-4 w-full p-8">
        {Array.from({ length: 10 }).map((_, index) => (
          <Suspense key={index}>
            <PostItem
              postId={index.toString()}
              lang={params.then((p) => p.lang)}
            />
          </Suspense>
        ))}
      </ul>
    </section>
  );
}

async function PostItem({
  postId,
  lang,
}: {
  postId: string;
  lang: Promise<string>;
}) {
  const _lang = await lang;
  const postIdNum = Number(postId) + 1;

  return (
    <Link
      href={`/${_lang}/posts/${postIdNum}`}
      className="flex items-center justify-center h-40 p-4 border border-neutral-800"
    >
      Post {postIdNum}
    </Link>
  );
}
