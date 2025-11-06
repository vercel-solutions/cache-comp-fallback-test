import { connection } from "next/server";
import { Suspense } from "react";
import {
  VisualComponentBoundary,
  VisualSuspenseBoundary,
} from "@/components/boundary";
import { getPost } from "@/lib/api";

type DrupalData = {
  id: string;
  date: string;
};

async function getDataFromDrupal(id: string): Promise<DrupalData> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // Simulate a failure 50% of the time
  if (Math.random() < 0.5) {
    throw new Error("Failed to get data from Drupal");
  }
  return { id, date: new Date().toISOString() };
}

async function getCachedDataFromDrupal(id: string): Promise<DrupalData> {
  "use cache: remote";
  const data = await getDataFromDrupal(id);
  return {
    id: data.id,
    date: `${data.date} (cached)`,
  };
}

async function DynamicData({ id }: { id: Promise<string> }) {
  await connection();
  const _id = await id;
  let data: DrupalData;
  try {
    data = await getDataFromDrupal(_id);
  } catch (_error) {
    data = await getCachedDataFromDrupal(_id);
  }
  return <div>Dynamic data: {data.date}</div>;
}

async function CachedData({ id }: { id: Promise<string> }) {
  const data = await getCachedDataFromDrupal(await id);
  return <div>Cached data: {data.date}</div>;
}

export default async function Page({
  params,
}: PageProps<"/[lang]/posts/[postId]">) {
  return (
    <article className="flex flex-col gap-6 w-full max-md:p-4 p-8">
      <VisualSuspenseBoundary label="isr">
        <Suspense fallback={<div>Loading...</div>}>
          <CachedData id={params.then((params) => params.postId)} />
        </Suspense>
      </VisualSuspenseBoundary>

      <VisualSuspenseBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <DynamicData id={params.then((params) => params.postId)} />
        </Suspense>
      </VisualSuspenseBoundary>
    </article>
  );
}
