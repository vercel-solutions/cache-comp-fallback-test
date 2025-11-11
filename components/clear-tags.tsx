"use client";

import { updatePostsTag } from "@/lib/api";

export function ClearPostsCacheButton() {
  return (
    <button
      type="button"
      className="hover:text-yellow-500 active:text-blue-500 cursor-pointer"
      onClick={() => updatePostsTag()}
    >
      clear posts cache
    </button>
  );
}
