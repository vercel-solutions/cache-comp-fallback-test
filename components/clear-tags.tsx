"use client";

import { updatePostsTag } from "@/lib/api";

export function ClearPostsCacheButton() {
  return (
    <button
      type="button"
      className="border border-dashed border-neutral-800 hover:text-yellow-500 active:text-blue-500 cursor-pointer h-[40px]"
      onClick={() => updatePostsTag()}
    >
      clear posts cache
    </button>
  );
}
