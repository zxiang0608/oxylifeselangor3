import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const MICHELLE_DEFAULT_HOSTS = new Set([
  "oxylifeselangor.com",
  "www.oxylifeselangor.com",
]);

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname !== "/") {
    return NextResponse.next();
  }

  const host =
    request.headers.get("x-forwarded-host") ?? request.headers.get("host");

  if (!host || !MICHELLE_DEFAULT_HOSTS.has(host)) {
    return NextResponse.next();
  }

  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = "/michelle";

  return NextResponse.redirect(redirectUrl, 308);
}

export const config = {
  matcher: ["/"],
};
