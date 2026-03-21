import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const COOKIE_NAME = "consultant";
const DEFAULT_CONSULTANT = "michelle";

const isLikelyBot = (userAgent: string) =>
  /(bot|crawler|spider|crawl|slurp|bingpreview|facebookexternalhit|linkedinbot|whatsapp)/i.test(
    userAgent
  );

export function GET(request: NextRequest) {
  const existing = request.cookies.get(COOKIE_NAME)?.value;
  const userAgent = request.headers.get("user-agent") ?? "";
  const botRequest = isLikelyBot(userAgent);

  const consultant =
    existing === "albert" || existing === "michelle"
      ? existing
      : botRequest
        ? DEFAULT_CONSULTANT
        : Math.random() < 0.5
          ? "albert"
          : "michelle";

  const destination = request.nextUrl.clone();
  destination.pathname = `/${consultant}`;
  destination.search = "";
  const response = NextResponse.redirect(destination, 307);
  response.headers.set("X-Robots-Tag", "noindex, nofollow");

  if (!botRequest && existing !== "albert" && existing !== "michelle") {
    response.cookies.set({
      name: COOKIE_NAME,
      value: consultant,
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
      sameSite: "lax",
      secure: true,
    });
  }

  return response;
}
