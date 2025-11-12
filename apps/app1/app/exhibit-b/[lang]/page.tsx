import { Code } from "@/components/code";
import { Container } from "@/components/container";
import { Corners } from "@/components/corners";

export default function Page() {
  return (
    <Corners>
      <main className="flex w-full flex-1 items-center justify-center">
        <Container className="flex flex-col gap-4 max-w-xl">
          <p className="text-xs leading-relaxed">
            These demos illustrate the different behaviors of suspense
            fallbacks, blocking navigation, and static vs dynamic content.
          </p>
          <p className="text-xs leading-relaxed">
            Demos 1 and 2 contain a post list and a post detail page. The post
            details render a static paragraph and a post content area wrapped in{" "}
            <Code>{`<Suspense/>`}</Code>.
          </p>
          <p className="text-xs leading-relaxed">
            The top-level layout renders the primary nav with suspense. This is
            important to note as it affects the behavior across both demos.
          </p>
          <p className="text-xs leading-relaxed">
            <strong>Demo 1 renders a static left nav in it's layout.</strong>
          </p>
          <p className="text-xs leading-relaxed">
            <strong>Demo 2 renders it's left nav with suspense.</strong>
          </p>
          <p className="text-xs leading-relaxed">
            The post API applies <Code>"use cache: remote"</Code>, simulating a
            2.5s request time initially.
          </p>
        </Container>
      </main>
    </Corners>
  );
}

