import { connection } from "next/server";
import { fetchAuthorDynamic } from "@/lib/api";

export async function AuthorDynamic({
  idPromise,
}: {
  idPromise: Promise<string>;
}) {
  await connection();

  const id = await idPromise;
  const author = await fetchAuthorDynamic(id);

  return <div>{author.name} (dynamic)</div>;
}
