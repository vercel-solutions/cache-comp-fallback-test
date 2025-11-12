import { Code } from "@/components/code";
import { Container } from "@/components/container";
import { Corners } from "@/components/corners";

export default function Page() {
  return (
    <Corners>
      <main className="flex w-full flex-1 items-center justify-center">
        <Container className="flex flex-col gap-4 max-w-xl">
          <p className="text-xs leading-relaxed">
            These demos demonstrate the different behaviors of suspense
            fallbacks, blocking navigation, and static vs dynamic content.
          </p>
          <p className="text-xs leading-relaxed">
            Both demos contain a post list and a post detail page. The post
            detail pages render a static paragraph and a post content area
            wrapped with <Code>{`<Suspense />`}</Code>. The post API simulates a
            2.5 request time, and uses <Code>"use cache: remote"</Code>.
          </p>
          <p className="text-xs leading-relaxed">
            <strong>Demo 1 renders a static nav in the layout.</strong> Slow
            posts will block navigation until they're fully prerendered (scroll
            the list quickly then click a link to beat prefetching). Fast posts
            will not block navigation, and the post content will show a fallback
            while it loads. Refrershing the slow post detail page after its been
            loaded will not show suspense fallbacks anymore. Fast pasts will
            always show the fallbacks as expected.
          </p>
          <p className="text-xs leading-relaxed">
            <strong>
              Demo 2 renders nav with suspense. Slow posts will not
            </strong>{" "}
            block navigation in this scenario. Both slow and fast posts behave
            the same. However, refreshing a post detail page will always show
            suspense fallbacks in both the nav and post content areas.
          </p>
        </Container>
      </main>
    </Corners>
  );
}
