import { Suspense } from "react";
import { Post } from "@/components/post";

export default async function Page({ params }: PageProps<"/[gen]/post/[id]">) {
  return (
    <article className="flex flex-col gap-4 max-w-md mx-auto pt-10">
      <p className="text-sm text-gray-300 mb-6">
        This page renders <strong>two cached components</strong> wrapped in
        suspense that read from params. In this case, we don't see the suspense
        fallbacks. This is expected behavior.
      </p>

      <div className="border border-dashed border-gray-300 p-2 rounded-sm">
        Hardcoded content
      </div>

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
