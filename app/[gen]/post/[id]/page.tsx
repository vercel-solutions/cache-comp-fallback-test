import { Suspense } from "react";
import { AuthorCached } from "@/components/author-cached";
import { Post } from "@/components/post";

export default async function Page({ params }: PageProps<"/[gen]/post/[id]">) {
  return (
    <article className="flex flex-col gap-4">
      <p className="text-sm text-gray-500 mb-6">
        This page renders <strong>two cached components</strong> wrapped in
        suspense that read from params. If we are under{" "}
        <code className="text-pink-300 text-xs">/gen</code>, which was returned
        from <code className="text-pink-300 text-xs">generateStaticParams</code>{" "}
        in the parent layout, we will always see the suspense fallbacks.
      </p>

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
