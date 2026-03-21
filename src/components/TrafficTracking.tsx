"use client";

import { useEffect, useMemo, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

type TrafficSource = "facebook" | "google" | "other";

type VisitPayload = {
  pagePath: string;
  pageUrl: string;
  landingPage: "michelle" | "albert" | "default";
  referrer: string;
  source: TrafficSource;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  gclid: string | null;
  fbclid: string | null;
};

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const META_PIXEL_ID_DEFAULT = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const META_PIXEL_ID_ALBERT = process.env.NEXT_PUBLIC_META_PIXEL_ID_ALBERT;
const META_PIXEL_ID_MICHELLE = process.env.NEXT_PUBLIC_META_PIXEL_ID_MICHELLE;

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

const getLandingPage = (pathname: string): VisitPayload["landingPage"] => {
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

    const landingPage = getLandingPage(pathname);

    if (GA_MEASUREMENT_ID && typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: pagePath,
        page_location: window.location.href,
        page_title: document.title,
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
      {GA_MEASUREMENT_ID ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-bootstrap" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
            `}
          </Script>
        </>
      ) : null}

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
