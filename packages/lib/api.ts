import { cacheLife } from "next/cache";

type Post = {
  id: string;
  title: string;
  body: string;
  lang?: string;
};

export async function getPost(id: string, lang?: string): Promise<Post> {
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
    }, 2500);
  });
}
