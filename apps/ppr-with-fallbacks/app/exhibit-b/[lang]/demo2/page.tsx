import { Code } from "@components/code";
import { Container } from "@components/container";

export default function Page() {
  return (
    <Container className="flex flex-col gap-4">
      <p className="text-xs leading-relaxed">
        <strong>
          Suspense around the left nav in this layout. Post detail pages also
          use suspense around the post content area. No suspense in the root
          header.
        </strong>
      </p>
      <p className="text-xs leading-relaxed">
        Slow posts will block navigation in this scenario. (Scroll the list
        quickly then click a link to beat prefetching.)
      </p>
      <p className="text-xs leading-relaxed">
        Fast posts will not block navigation, as we've forced the post content
        area to be dynamic with <Code>await connection()</Code>. When clicking a
        fast post link, the detail page is instantly loaded, while the post
        content area renders a fallback while it loads.
      </p>
      <p className="text-xs leading-relaxed">
        Refreshing the fast post detail page after its been loaded will show
        suspense fallbacks only in the post content area.
      </p>
      <p className="text-xs leading-relaxed">
        Refreshing the slow post detail page after its been loaded will not show
        any suspense fallbacks.
      </p>
    </Container>
  );
}
