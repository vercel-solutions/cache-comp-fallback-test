import { cacheLife } from "next/cache";
import { fetchAuthor } from "@/lib/api";

export function AuthorFallback() {
  return <div>Loading author...</div>;
}

export async function AuthorCached({
  idPromise,
}: {
  idPromise: Promise<string>;
}) {
  "use cache";
  cacheLife("days");

  const id = await idPromise;
  const author = await fetchAuthor(id);

  return <div>{author.name}</div>;
}
