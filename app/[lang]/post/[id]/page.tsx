import { Suspense } from "react";
import Post from "@/components/post";

export default async function Page({ params }: PageProps<"/[lang]/post/[id]">) {
  return (
    <div className="flex flex-col gap-4">
      <h1>Post</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Post params={params} />
      </Suspense>
    </div>
  );
}
