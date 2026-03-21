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

  const existingConsultant = request.cookies.get("consultant")?.value;
  const assignedConsultant =
    existingConsultant === "albert" || existingConsultant === "michelle"
      ? existingConsultant
      : Math.random() < 0.5
        ? "albert"
        : "michelle";

  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = `/${assignedConsultant}`;

  const response = NextResponse.redirect(redirectUrl, 308);
  response.cookies.set({
    name: "consultant",
    value: assignedConsultant,
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    sameSite: "lax",
    secure: true,
  });

  return response;
}

export const config = {
  matcher: ["/"],
};
