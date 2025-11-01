import { Suspense } from "react";
import { AuthorCached } from "@/components/author-cached";
import { AuthorDynamic } from "@/components/author-dynamic";
import { Post } from "@/components/post";

export default async function Page({ params }: PageProps<"/[lang]/post/[id]">) {
  return (
    <article className="flex flex-col gap-4">
      <p className="text-sm text-gray-300">
        Our top level dynamic segment{" "}
        <code className="text-pink-300 text-xs">/[lang]</code> uses{" "}
        <code className="text-pink-300 text-xs">generateStaticParams</code> in
        the layout, returning a single path:{" "}
        <code className="text-pink-300 text-xs">"en"</code>.
      </p>

      <pre>
        <code className="text-pink-300 text-xs">{`export async function generateStaticParams() {
  return [{ lang: "en" }];
}`}</code>
      </pre>

      <p className="text-sm text-gray-300">
        This page renders{" "}
        <strong>two cached components and one dynamic component</strong> wrapped
        in suspense that read from params to fetch remote data.
      </p>
      <p className="text-sm text-gray-300">
        If we are under the <code className="text-pink-300 text-xs">/en</code>{" "}
        path, we will always see the suspense fallbacks for all componentswhen
        the page is loaded.
      </p>
      <p className="text-sm text-gray-300">
        If we are under the any other lang path, the cached components will not
        show the suspense fallbacksm whle the dynamic component will. This is
        the behavior we expect.
      </p>

      <div className="flex flex-col gap-4 mt-4">
        <Suspense fallback={<Fallback />}>
          <Content>
            <AuthorCached idPromise={params.then((p) => p.id)} />
          </Content>
        </Suspense>

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
