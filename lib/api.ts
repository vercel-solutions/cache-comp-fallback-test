"use server";

import { cacheLife, cacheTag, updateTag } from "next/cache";

type Post = {
  id: string;
  title: string;
  body: string;
};

export async function getPost(id: string): Promise<Post> {
  "use cache: remote";
  cacheLife({ expire: 60 });
  cacheTag("posts");

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, title: `Post ${id}`, body: `Body of post ${id}` });
    }, 2500);
  });
}

export async function updatePostsTag() {
  updateTag("posts");
}
