import { fetchAuthor } from "@/lib/api";

export function AuthorFallback() {
  return <div>Loading author...</div>;
}

export async function Author({ idPromise }: { idPromise: Promise<string> }) {
  "use cache";

  const id = await idPromise;
  const author = await fetchAuthor(id);

  return <div>{author.name}</div>;
}
