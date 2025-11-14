import { cacheLife } from "next/cache";
import { cookies } from "next/headers";

type Post = {
  id: string;
  title: string;
  body: string;
  lang?: string;
  delay?: number;
};

export async function getPost(
  id: string,
  lang?: string,
  delay?: number,
): Promise<Post> {
  "use cache: remote";
  cacheLife({
    stale: 86400,
    revalidate: 86400,
    expire: 604800,
  });

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        title: `Post ${id}`,
        body: `Body of post ${id}`,
        lang: lang ?? "en",
      });
    }, delay ?? 2500);
  });
}

export async function getPostShortCacheLife(
  id: string,
  lang?: string,
  delay?: number,
): Promise<Post> {
  "use cache: remote";
  cacheLife({
    stale: 120,
    revalidate: 120,
    expire: 120,
  });

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        title: `Post ${id}`,
        body: `Body of post ${id}`,
        lang: lang ?? "en",
      });
    }, delay ?? 2500);
  });
}

export async function getPostDynamic(
  id: string,
  lang?: string,
  delay?: number,
): Promise<Post> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        title: `Post ${id}`,
        body: `Body of post ${id}`,
        lang: lang ?? "en",
      });
    }, delay ?? 2500);
  });
}

export async function getSessionId() {
  "use cache: private";
  cacheLife({
    stale: 3000,
    revalidate: 3000,
    expire: 3000,
  });

  const sessionId = (await cookies()).get("sessionId")?.value;
  return sessionId;
}
