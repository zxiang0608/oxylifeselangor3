"use client";

import { useEffect, useMemo, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    gtag_report_conversion?: (url?: string, sendTo?: string) => boolean;
    fbq?: (...args: unknown[]) => void;
  }
}

type TrafficSource = "facebook" | "google" | "other";
type Consultant = "albert" | "michelle" | "default";

type VisitPayload = {
  pagePath: string;
  pageUrl: string;
  consultant: Consultant;
  landingPage: "michelle" | "albert" | "default";
  referrer: string;
  source: TrafficSource;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  gclid: string | null;
  fbclid: string | null;
};

const ALBERT_PIXEL_FALLBACK_ID = "1179069353627076";
const META_PIXEL_ID_DEFAULT =
  process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim() || ALBERT_PIXEL_FALLBACK_ID;
const META_PIXEL_ID_ALBERT =
  process.env.NEXT_PUBLIC_META_PIXEL_ID_ALBERT?.trim() || ALBERT_PIXEL_FALLBACK_ID;
const META_PIXEL_ID_MICHELLE = process.env.NEXT_PUBLIC_META_PIXEL_ID_MICHELLE?.trim();

const includesAny = (value: string, keywords: string[]) =>
  keywords.some((keyword) => value.includes(keyword));

const classifySource = (payload: {
  utmSource: string | null;
  referrer: string;
  gclid: string | null;
  fbclid: string | null;
}): TrafficSource => {
  const normalizedUtmSource = payload.utmSource?.toLowerCase() ?? "";
  const normalizedReferrer = payload.referrer.toLowerCase();

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

const getConsultantFromPathname = (pathname: string): Consultant => {
  if (pathname.startsWith("/michelle")) return "michelle";
  if (pathname.startsWith("/albert")) return "albert";
  return "default";
};

export default function TrafficTracking() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const visitedKeySetRef = useRef<Set<string>>(new Set());
  const activeMetaPixelId = useMemo(() => {
    if (pathname.startsWith("/albert")) {
      return META_PIXEL_ID_ALBERT || META_PIXEL_ID_DEFAULT;
    }
    if (pathname.startsWith("/michelle")) {
      return META_PIXEL_ID_MICHELLE || META_PIXEL_ID_DEFAULT;
    }
    return META_PIXEL_ID_DEFAULT;
  }, [pathname]);

  const queryString = useMemo(() => searchParams.toString(), [searchParams]);
  const pagePath = queryString ? `${pathname}?${queryString}` : pathname;

  useEffect(() => {
    const dedupeKey = pagePath;

    if (visitedKeySetRef.current.has(dedupeKey)) return;
    visitedKeySetRef.current.add(dedupeKey);

    const consultant = getConsultantFromPathname(pathname);
    const landingPage = consultant;

    if (typeof window.gtag === "function") {
      window.gtag("set", "user_properties", {
        consultant,
      });
      window.gtag("event", "page_view", {
        page_path: pagePath,
        page_location: window.location.href,
        page_title: document.title,
        consultant,
        landing_page: landingPage,
      });
    }

    if (activeMetaPixelId && typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }

    const params = new URLSearchParams(window.location.search);
    const payload: VisitPayload = {
      pagePath,
      pageUrl: window.location.href,
      consultant,
      landingPage,
      referrer: document.referrer ?? "",
      utmSource: params.get("utm_source"),
      utmMedium: params.get("utm_medium"),
      utmCampaign: params.get("utm_campaign"),
      gclid: params.get("gclid"),
      fbclid: params.get("fbclid"),
      source: classifySource({
        utmSource: params.get("utm_source"),
        referrer: document.referrer ?? "",
        gclid: params.get("gclid"),
        fbclid: params.get("fbclid"),
      }),
    };

    void fetch("/api/visit", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch(() => {
      // Ignore tracking transport failures
    });
  }, [activeMetaPixelId, pagePath, pathname]);

  return (
    <>
      {activeMetaPixelId ? (
        <>
          <Script
            id={`meta-pixel-bootstrap-${activeMetaPixelId}`}
            strategy="afterInteractive"
          >
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${activeMetaPixelId}');
            `}
          </Script>
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${activeMetaPixelId}&ev=PageView&noscript=1`}
            />
          </noscript>
        </>
      ) : null}
    </>
  );
}
