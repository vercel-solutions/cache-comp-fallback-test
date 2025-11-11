import { Code } from "@/components/code";
import { Container } from "@/components/container";

export default function Page() {
  return (
    <div className="flex flex-col justify-center h-full">
      <Container className="flex flex-col gap-4 text-balanced">
        <p>
          Both post types make a fake request to a 2.5s promise that includes{" "}
          <Code>use cache: remote</Code> with a 60s expiration.
        </p>
        <p>
          Slow posts will block navigation until they're fully prerendered,
          since content in <Code>{`<Suspense />`}</Code> is being treated as
          static.
        </p>
        <p>
          Fast posts will not block navigation, treating the content in{" "}
          <Code>{`<Suspense />`}</Code> as dynamic by using{" "}
          <Code>await connection()</Code>.
        </p>
        <p>
          Even with aggressive prefetching, when scrolling down the list quickly
          then clicking a link, we will often experience a blocked navigation
          with the slow posts.
        </p>
        <p>
          By explicitly forcing the inner post component to be dynamic, we get
          the UX we expect: non-blocking, instant navigation, showing fallbacks.
          This is counter intuitive, as we would expect both approaches to
          immediately render the static parts of the page while the suspense
          content streams in with fallback.
        </p>
      </Container>
    </div>
  );
}
