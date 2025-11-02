import { cacheLife, cacheTag, revalidateTag, updateTag } from "next/cache";
import { cookies } from "next/headers";
import { Suspense } from "react";
import { Code } from "@/components/code";

type Props = PageProps<"/demo-1/[lang]/post/[id]">;

export default async function Page({ params }: Props) {
  return (
    <article className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-4">
        <Suspense
          fallback={
            <Fallback>
              <TextSkeleton />
            </Fallback>
          }
        >
          <Boundary>
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
          <Boundary>
            <CookieValue />
          </Boundary>
        </Suspense>
      </div>
    </article>
  );
}

async function ParamValues({ params }: { params: Props["params"] }) {
  "use cache";
  cacheLife({ stale: 30, revalidate: 30, expire: 30 });

  const _params = await params;

  cacheTag(`post-${_params.lang}-${_params.id}`);

  return (
    <div>
      <p>
        runtime params: <Code>{JSON.stringify(_params, null, 2)}</Code>
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

function Boundary({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative border border-dashed border-blue-500/50 p-4 pt-8">
      <div className="absolute top-0 left-0 -m-px px-1.5 py-0.5 text-xs text-blue-500 border-r border-b border-dashed border-blue-500/50">
        suspense
      </div>
      {children}
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
