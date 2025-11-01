import { fetchAuthorDynamic } from "@/lib/api";

export async function AuthorDynamic({
  idPromise,
}: {
  idPromise: Promise<string>;
}) {
  const id = await idPromise;
  const author = await fetchAuthorDynamic(id);

  return <div>{author.name}</div>;
}
