import { cacheLife, cacheTag } from "next/cache";
import { cookies } from "next/headers";
import { Suspense } from "react";
import { Boundary } from "@/components/boundary";
import { Code } from "@/components/code";

type Props = PageProps<"/demo-1/[lang]/[segId]">;

export default async function Page({ params }: Props) {
  return (
    <article className="flex flex-col gap-6 w-full">
      <p className="text-xs leading-relaxed text-neutral-300">
        This demo uses <Code>generateStaticParams</Code>, returning only a
        single path <Code>{`[{lang: "__"}]`}</Code> in the first segment's
        layout. Notice that when navigating to pages under <Code>/__</Code>, we
        see both suspense fallbacks. For all other lang paths, only the 2nd
        fallback shows (as expected). This allows us to await{" "}
        <Code>params</Code> for all lang paths except <Code>/__</Code> without
        showing the suspense fallback, while still getting instant navigation.
        <br />
        <br />
        It's the behavior most will expect, but it seems hidden behind an
        unintuitive workaround.
      </p>

      <div className="flex flex-col gap-4">
        <Suspense
          fallback={
            <Fallback>
              <TextSkeleton />
            </Fallback>
          }
        >
          <Boundary label="suspense 'use cache'">
            <ParamValues params={params} />
          </Boundary>
        </Suspense>

        <Suspense
          fallback={
            <Fallback>
              <TextSkeleton />
            </Fallback>
          }
        >
          <Boundary label="suspense 'use cache: private'">
            <CookieValue />
          </Boundary>
        </Suspense>
      </div>
    </article>
  );
}

async function ParamValues({ params }: { params: Props["params"] }) {
  "use cache";
  cacheLife("weeks");

  const _params = await params;

  cacheTag(`post-${_params.lang}-${_params.segId}`);

  return (
    <div>
      <p>
        params:{" "}
        <Code>{`{lang: "${_params.lang}", segId: "${_params.segId}"}`}</Code>
      </p>
    </div>
  );
}

async function CookieValue() {
  "use cache: private";
  cacheLife({ stale: 30, revalidate: 30, expire: 30 });

  const sessionId = (await cookies()).get("sessionId")?.value;
  cacheTag(`sessionId-${sessionId}`);

  return (
    <div>
      <p>
        sessionId cookie: <Code>{`${sessionId}`}</Code>
      </p>
    </div>
  );
}

function Fallback({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative border border-dashed border-yellow-500/50 p-4 pt-8">
      <div className="absolute top-0 left-0 -m-px px-1.5 py-0.5 text-xs text-yellow-500 border-r border-b border-dashed border-yellow-500/50">
        suspense fallback
      </div>
      {children}
    </div>
  );
}

function TextSkeleton() {
  return (
    <div className="flex items-center h-[18px]">
      <div className="h-3 w-64 bg-neutral-700 animate-pulse" />
    </div>
  );
}
