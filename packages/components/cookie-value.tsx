import { getSessionId } from "@lib/api";
import { Code } from "./code";

export async function CookieValue() {
  const sessionId = await getSessionId();

  return (
    <div>
      <p>
        sessionId cookie: <Code>{`${sessionId}`}</Code> ("use cache: private")
      </p>
    </div>
  );
}
