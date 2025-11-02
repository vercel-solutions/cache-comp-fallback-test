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
  response.cookies.set("userId", Date.now().toString());

  return response;
}
