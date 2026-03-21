import { NextResponse } from "next/server";

type TrafficSource = "facebook" | "google" | "other";

type VisitBody = {
  pagePath?: unknown;
  pageUrl?: unknown;
  landingPage?: unknown;
  referrer?: unknown;
  source?: unknown;
  utmSource?: unknown;
  utmMedium?: unknown;
  utmCampaign?: unknown;
  gclid?: unknown;
  fbclid?: unknown;
};

const safeString = (value: unknown) => {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, 512);
};

const optionalString = (value: unknown) => {
  const normalized = safeString(value);
  return normalized.length > 0 ? normalized : null;
};

const includesAny = (value: string, keywords: string[]) =>
  keywords.some((keyword) => value.includes(keyword));

const classifySource = (payload: {
  utmSource: string | null;
  referrer: string | null;
  gclid: string | null;
  fbclid: string | null;
}): TrafficSource => {
  const normalizedUtmSource = payload.utmSource?.toLowerCase() ?? "";
  const normalizedReferrer = payload.referrer?.toLowerCase() ?? "";

  if (
    payload.fbclid ||
    includesAny(normalizedUtmSource, ["facebook", "fb", "instagram", "meta"]) ||
    includesAny(normalizedReferrer, ["facebook.com", "instagram.com", "m.facebook.com"])
  ) {
    return "facebook";
  }

  if (
    payload.gclid ||
    includesAny(normalizedUtmSource, ["google", "gdn", "youtube"]) ||
    includesAny(normalizedReferrer, ["google.", "googleadservices.com", "youtube.com"])
  ) {
    return "google";
  }

  return "other";
};

export async function POST(request: Request) {
  let body: VisitBody = {};

  try {
    body = (await request.json()) as VisitBody;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
  }

  const referrer = optionalString(body.referrer);
  const utmSource = optionalString(body.utmSource);
  const gclid = optionalString(body.gclid);
  const fbclid = optionalString(body.fbclid);

  const source =
    body.source === "facebook" || body.source === "google" || body.source === "other"
      ? body.source
      : classifySource({ utmSource, referrer, gclid, fbclid });

  const landingPageRaw = safeString(body.landingPage);
  const landingPage =
    landingPageRaw === "michelle" || landingPageRaw === "albert" ? landingPageRaw : "default";

  const forwardPayload = {
    timestamp: new Date().toISOString(),
    pagePath: safeString(body.pagePath),
    pageUrl: safeString(body.pageUrl),
    landingPage,
    source,
    referrer,
    utmSource,
    utmMedium: optionalString(body.utmMedium),
    utmCampaign: optionalString(body.utmCampaign),
    gclid,
    fbclid,
    userAgent: request.headers.get("user-agent"),
    ip:
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip"),
  };

  // Optional webhook for persistence (e.g. Google Apps Script, Make, Zapier, your own backend).
  const webhookUrl = process.env.VISIT_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(forwardPayload),
      });
    } catch (error) {
      console.error("visit webhook forwarding failed", error);
    }
  }

  console.log("visit", forwardPayload);

  return NextResponse.json({ ok: true });
}
