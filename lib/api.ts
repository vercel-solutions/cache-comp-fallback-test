import { cacheLife, cacheTag } from "next/cache";
import { connection } from "next/server";

async function api(path: string, options?: RequestInit): Promise<Response> {
  const env = process.env.VERCEL_ENV || "development";
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL || "localhost:3000";
  const protocol = env === "development" ? "http" : "https";
  const url = `${protocol}://${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;

  return fetch(url, {
    ...options,
    headers: {
      ...options?.headers,
      "x-vercel-protection-bypass":
        process.env.VERCEL_AUTOMATION_BYPASS_SECRET || "",
    },
  });
}

// export async function fetchPost(id: string) {
//   "use cache";
//   cacheLife("days");
//   cacheTag("posts", `post-${id}`);

//   const result = await api(`/api/post/${id}`);

//   if (!result.ok) {
//     throw new Error("Failed to fetch post");
//   }

//   return result.json();
// }

export async function fetchPost(id: string) {
  "use cache";
  cacheLife("days");
  cacheTag("posts", `post-${id}`);

  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
    res.json(),
  );
}

export async function fetchAuthor(id: string) {
  await connection();

  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
    res.json(),
  );
}
