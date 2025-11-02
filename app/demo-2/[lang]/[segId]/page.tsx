import { cacheLife, cacheTag } from "next/cache";
import { cookies } from "next/headers";
import { Suspense } from "react";
import { Boundary } from "@/components/boundary";
import { Code } from "@/components/code";

type Props = PageProps<"/demo-2/[lang]/[segId]">;

export default async function Page({ params }: Props) {
  return (
    <article className="flex flex-col gap-6 w-full">
      <p className="text-xs leading-relaxed">
        This section doesn't use <Code>generateStaticParams</Code> at all.
        Notice that when navigating across different boundaries, we see the{" "}
        <Code>loading.tsx</Code>. When navigating to pages under the same lang
        in this section, we see both suspense fallbacks. Without{" "}
        <Code>generateStaticParams</Code> in place for a single dummy lang,
        awaiting <Code>params</Code> always shows the fallback.
        <br />
        <br />
        The is the documented approach, but the end result is undesirable.
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
  cacheLife("max");

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
