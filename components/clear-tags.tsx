"use client";

import { updatePostsTag } from "@/lib/api";

export function ClearPostsCacheButton() {
  return (
    <button type="button" onClick={() => updatePostsTag()}>
      clear posts cache
    </button>
  );
}
