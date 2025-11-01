import { type NextRequest, NextResponse } from "next/server";

/**
 * Proxy configuration that defines which routes this proxy applies to.
 * The matcher uses a negative lookahead regex pattern to apply proxy to all routes
 * EXCEPT those specifically excluded.
 *
 * Excluded paths:
 * - .well-known: Standard directory for metadata
 * - api: API routes
 * - sitemaps: SEO-related content
 * - webhooks: External service callbacks
 * - _next/static: Next.js static assets
 * - _next/image: Next.js image optimization routes
 * - favicon.ico: Browser favicon
 * - sitemap.xml: SEO sitemap
 * - robots.txt: Search engine crawl instructions
 *
 * This exclusion pattern improves performance by not running proxy on static assets,
 * API routes, and other paths that don't need the commerce proxy processing.
 */
export const config = {
  matcher: [
    "/((?!.well-known|api|sitemaps|webhooks|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};

const locales = ["en", "fr"];

/**
 * Commerce proxy function that handles URL rewrites
 *
 * Redirects to the /en-US prefix for all requests that don't start with /en-US
 */
export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Cannot access the site without a locale prefix
  if (!locales.some((locale) => pathname.startsWith(`/${locale}`))) {
    // Default to the first locale which is en-US
    return NextResponse.redirect(new URL(`/${locales[0]}${pathname}`, req.url));
  }

  return NextResponse.next();
}
