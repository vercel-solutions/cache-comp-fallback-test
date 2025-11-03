import { Suspense } from "react";
import { Boundary } from "@/components/boundary";
import { Code } from "@/components/code";
import { CookieValue } from "@/components/cookie-value";
import { Fallback } from "@/components/fallback";
import { ParamValues } from "@/components/param-values-demo2";
import { TextSkeleton } from "@/components/text-skeleton";

export default async function Page({
  params,
}: PageProps<"/demo-2/[lang]/[segId]">) {
  return (
    <article className="flex flex-col gap-6 w-full">
      <p className="text-xs leading-relaxed">
        This demo doesn't use <Code>generateStaticParams</Code> at all. Notice
        that when navigating across different boundaries, we see the{" "}
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
          <Boundary label="suspense">
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
          <Boundary label="suspense">
            <CookieValue />
          </Boundary>
        </Suspense>
      </div>
    </article>
  );
}
