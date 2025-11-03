import { cacheTag } from "next/cache";
import { cookies } from "next/headers";
import { Code } from "@/components/code";

export async function CookieValue() {
  const sessionId = (await cookies()).get("sessionId")?.value;
  cacheTag(`sessionId-${sessionId}`);

  return (
    <div>
      <p>
        sessionId cookie: <Code>{`${sessionId}`}</Code>
      </p>
    </div>
  );
}
