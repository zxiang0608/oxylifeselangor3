import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const COOKIE_NAME = "consultant";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const existing = request.cookies.get(COOKIE_NAME)?.value;

  if (existing === "albert" || existing === "michelle") {
    return response;
  }

  const assignedConsultant = Math.random() < 0.5 ? "albert" : "michelle";
  response.cookies.set({
    name: COOKIE_NAME,
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
