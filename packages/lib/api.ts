import { cacheLife } from "next/cache";

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
  cacheLife({ expire: 60 });

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
