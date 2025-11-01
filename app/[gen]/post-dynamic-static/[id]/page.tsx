import { Suspense } from "react";
import { AuthorDynamic } from "@/components/author-dynamic";
import { Post } from "@/components/post";

export default async function Page({ params }: PageProps<"/[gen]/post/[id]">) {
  return (
    <article className="flex flex-col gap-4 max-w-lg mx-auto pt-10">
      <p className="text-sm text-gray-400">
        This page renders{" "}
        <strong>one uncached component and one cached component</strong>, both
        wrapped in suspense to read from params. The author name in this example
        uses a function with{" "}
        <code className="text-pink-300 text-xs">await connection()</code> to
        force dynamic fetching.
      </p>

      <p className="text-sm text-gray-400 mb-6">
        In this case, we see the author fallback, but not the post fallback.
        This is the behavior we expect.
      </p>

      <Suspense fallback={<Fallback />}>
        <Content>
          <AuthorDynamic idPromise={params.then((p) => p.id)} />
        </Content>
      </Suspense>

      <Suspense fallback={<Fallback />}>
        <Content>
          <Post params={params} />
        </Content>
      </Suspense>
    </article>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div className="border border-blue-500 p-2 rounded-sm">{children}</div>
  );
}

function Fallback() {
  return (
    <div className="border border-yellow-500 p-2 rounded-sm">Loading...</div>
  );
}
