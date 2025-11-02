import { cacheLife } from "next/cache";
import { cookies } from "next/headers";
import { Suspense } from "react";
import { Code } from "@/components/code";

export default async function Page({ params }: PageProps<"/[lang]/post/[id]">) {
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

        <Suspense
          fallback={
            <Fallback>
              <TextSkeleton />
              <TextSkeleton />
            </Fallback>
          }
        >
          <Boundary>
            <ParamsAndCookies params={params} />
          </Boundary>
        </Suspense>
      </div>
    </article>
  );
}

async function ParamValues({
  params,
}: {
  params: PageProps<"/[lang]/post/[id]">["params"];
}) {
  "use cache";
  cacheLife("weeks");

  const _params = await params;

  return (
    <div>
      <p>
        runtime params: <Code>{JSON.stringify(_params, null, 2)}</Code>
      </p>
    </div>
  );
}

async function ParamsAndCookies({
  params,
}: {
  params: PageProps<"/[lang]/post/[id]">["params"];
}) {
  "use cache: private";
  cacheLife("minutes");

  const _params = await params;
  const userId = (await cookies()).get("userId")?.value;

  return (
    <div>
      <p>
        runtime params: <Code>{JSON.stringify(_params, null, 2)}</Code>
      </p>
      <p>
        user cookie: <Code>{`${userId}`}</Code>
      </p>
    </div>
  );
}

async function CookieValue() {
  "use cache: private";
  cacheLife({ stale: 60 });

  const userId = (await cookies()).get("userId")?.value;

  return (
    <div>
      <p>
        user cookie: <Code>{`${userId}`}</Code>
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
