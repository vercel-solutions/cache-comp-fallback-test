import { getSessionId } from "@lib/api";
import { cacheLife } from "next/cache";
import { Code } from "./code";

export async function CookieValue() {
  "use cache: private";
  cacheLife({
    stale: 3000,
    revalidate: 3000,
    expire: 3000,
  });

  const sessionId = await getSessionId();

  return (
    <div>
      <p>
        sessionId cookie: <Code>{`${sessionId}`}</Code> ("use cache: private")
      </p>
    </div>
  );
}
