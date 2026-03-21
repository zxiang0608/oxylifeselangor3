export type CtaTrackPayload = {
  ctaLocation: string;
  ctaLabel: string;
  href: string;
};

type ClickEventLike = {
  preventDefault: () => void;
};

const GOOGLE_ADS_CONVERSION_BY_URL: Record<string, string> = {
  "https://wa.link/g14bi1": "AW-18031279990/3-ZhCIqK6YwcEPb-_ZVD",
  "https://wa.link/3s5zwr": "AW-18031279990/IEUvCI2K6YwcEPb-_ZVD",
  "https://wa.link/khv3s5": "AW-18031279990/TPA8CJCK6YwcEPb-_ZVD",
  "https://wa.link/slw57k": "AW-18031279990/wSVuCJOK6YwcEPb-_ZVD",
};

const normalizeUrl = (url: string) => url.trim().replace(/\/$/, "");

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    gtag_report_conversion?: (url?: string, sendTo?: string) => boolean;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackWhatsAppCtaClick(
  payload: CtaTrackPayload,
  event?: ClickEventLike
) {
  if (typeof window === "undefined") return;
  if (!payload.href.startsWith("http")) return;

  const normalizedHref = normalizeUrl(payload.href);
  const conversionSendTo = GOOGLE_ADS_CONVERSION_BY_URL[normalizedHref];

  const eventPayload = {
    cta_location: payload.ctaLocation,
    cta_label: payload.ctaLabel,
    destination: normalizedHref,
    page_path: window.location.pathname,
  };

  if (typeof window.gtag === "function") {
    window.gtag("event", "whatsapp_cta_click", eventPayload);
  }

  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", "WhatsAppClick", eventPayload);
    window.fbq("track", "Contact", eventPayload);
    window.fbq("track", "Lead", eventPayload);
  }

  if (conversionSendTo && typeof window.gtag_report_conversion === "function") {
    event?.preventDefault();
    window.gtag_report_conversion(normalizedHref, conversionSendTo);
  }
}
