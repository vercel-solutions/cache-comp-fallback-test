import { type NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    "/((?!.well-known|api|sitemaps|webhooks|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/en/post/1`, req.url));
  }

  const response = NextResponse.next();

  // Get the existing userId cookie
  const existingCookie = req.cookies.get("userId");
  const now = Date.now();

  if (existingCookie) {
    const cookieTimestamp = Number.parseInt(existingCookie.value, 10);
    const timeDifference = now - cookieTimestamp;

    // If more than 60 seconds old, set a new userId
    if (timeDifference > 120000) {
      response.cookies.set("userId", now.toString());
    }
  } else {
    // Cookie doesn't exist, set it to now
    response.cookies.set("userId", now.toString());
  }

  return response;
}
