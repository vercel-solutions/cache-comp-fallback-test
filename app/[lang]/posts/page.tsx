import Link from "next/link";

export default async function Page({ params }: PageProps<"/[lang]/posts">) {
  const { lang } = await params;

  return (
    <section className="flex flex-col gap-6 w-full h-[420px] overflow-y-auto ">
      <ul className="grid grid-cols-2 gap-4 w-full p-8">
        {Array.from({ length: 10 }).map((_, index) => (
          <PostItem key={index} postId={index.toString()} lang={lang} />
        ))}
      </ul>
    </section>
  );
}

function PostItem({ postId, lang }: { postId: string; lang: string }) {
  const postIdNum = Number(postId) + 1;

  return (
    <Link
      href={`/${lang}/posts/${postIdNum}`}
      className="flex items-center justify-center h-40 p-4 border border-neutral-800"
    >
      Post {postIdNum}
    </Link>
  );
}
