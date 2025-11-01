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

export async function fetchPost(id: string) {
  "use cache: remote";

  return api(`/api/post/${id}`).then((res) => res.json());
}
