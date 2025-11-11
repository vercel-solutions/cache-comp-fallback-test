import { Code } from "@/components/code";

export default function Page() {
  return (
    <div className="px-8 flex flex-col gap-4 text-balanced">
      <p>
        Both post types make a fake request to a 2.5s promise that includes{" "}
        <Code>use cache: remote</Code> with a 30s expiration.
      </p>
      <p>
        Slow posts will block navigation until they're fully prerendered, since
        content in <Code>{`<Suspense />`}</Code> is being treated as static.
      </p>
      <p>
        Fast posts will not block navigation, treating the content in{" "}
        <Code>{`<Suspense />`}</Code> as dynamic by using{" "}
        <Code>await connection()</Code>.
      </p>

      <p>
        Note that we cannot rely on prefetching to always be complete before
        navigation. To demonstrate this, prefetching is disabled for the nav
        links. This simulates the actual user experience of scrolling through a
        long list of product tiles on an e-commerce listing page, where we
        experience blocking delays when clicking links that are not yet fully
        prefetched.
      </p>
      <p>
        By explicitly forcing the inner post component to be dynamic, we get the
        UX we expect: non-blocking, instant navigation, showing fallbacks. This
        seems unnecessarily counterintuitive.
      </p>
    </div>
  );
}
