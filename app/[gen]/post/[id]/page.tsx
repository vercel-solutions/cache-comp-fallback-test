import { Suspense } from "react";
import { AuthorCached } from "@/components/author-cached";
import { Post } from "@/components/post";

export default async function Page({ params }: PageProps<"/[gen]/post/[id]">) {
  return (
    <article className="flex flex-col gap-4">
      <p className="text-sm text-gray-300">
        Our top level dynamic segment{" "}
        <code className="text-pink-300 text-xs">/[gen]</code> uses{" "}
        <code className="text-pink-300 text-xs">generateStaticParams</code> in
        the layout, returning a single path:{" "}
        <code className="text-pink-300 text-xs">"gsp"</code>.
      </p>

      <pre>
        <code className="text-pink-300 text-xs">{`export async function generateStaticParams() {
  return [{ gen: "gsp" }];
}`}</code>
      </pre>

      <p className="text-sm text-gray-300">
        This page renders <strong>two cached components</strong> wrapped in
        suspense that read from params to fetch remote data.
      </p>
      <p className="text-sm text-gray-300">
        If we are under the <code className="text-pink-300 text-xs">/gsp</code>{" "}
        path, we will always see the suspense fallbacks when the page is loaded.
      </p>
      <p className="text-sm text-gray-300">
        If we are under the any other path, the cached components will not show
        the suspense fallbacks. This is the behavior we expect.
      </p>

      <div className="flex flex-col gap-4 mt-4">
        <Suspense fallback={<Fallback />}>
          <Content>
            <AuthorCached idPromise={params.then((p) => p.id)} />
          </Content>
        </Suspense>

        <Suspense fallback={<Fallback />}>
          <Content>
            <Post params={params} />
          </Content>
        </Suspense>
      </div>
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
