import { type NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    "/((?!.well-known|api|sitemaps|webhooks|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname === "/") {
    return NextResponse.redirect(
      new URL(`/exhibit-a/en/demo1/dynamic`, req.url),
    );
  }

  const response = NextResponse.next();

  // Get the existing sessionId cookie
  const existingCookie = req.cookies.get("sessionId");

  if (!existingCookie) {
    response.cookies.set(
      "sessionId",
      Math.floor(Math.random() * 1000000).toString(),
      { maxAge: 30 },
    );
  }

  return response;
}
