import { Suspense } from "react";
import { Boundary } from "@/components/boundary";
import { Code } from "@/components/code";
import { CookieValue } from "@/components/cookie-value";
import { Fallback } from "@/components/fallback";
import { ParamValues } from "@/components/param-values";
import { TextSkeleton } from "@/components/text-skeleton";

export default async function Page({
  params,
}: PageProps<"/demo-1/[lang]/[segId]">) {
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
