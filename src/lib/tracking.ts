export type CtaTrackPayload = {
  ctaLocation: string;
  ctaLabel: string;
  href: string;
};
type Consultant = "albert" | "michelle" | "default";

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
const getConsultantFromPathname = (pathname: string): Consultant => {
  if (pathname.startsWith("/michelle")) return "michelle";
  if (pathname.startsWith("/albert")) return "albert";
  return "default";
};

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
  const consultant = getConsultantFromPathname(window.location.pathname);

  const eventPayload = {
    consultant,
    cta_location: payload.ctaLocation,
    cta_text: payload.ctaLabel,
    cta_label: payload.ctaLabel,
    destination: normalizedHref,
    page_path: window.location.pathname,
  };

  if (typeof window.gtag === "function") {
    window.gtag("set", "user_properties", {
      consultant,
    });
    window.gtag("event", "whatsapp_cta_click", eventPayload);
  }

  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", "WhatsAppClick", eventPayload);
    window.fbq("track", "Contact", eventPayload);
    window.fbq("track", "Lead", eventPayload);
  }

  if (conversionSendTo && typeof window.gtag_report_conversion === "function") {
    event?.preventDefault();
    // Safety fallback: if Ads callback does not run (blocked script/network),
    // still continue to WhatsApp so users are not stuck.
    window.setTimeout(() => {
      window.location.href = normalizedHref;
    }, 800);
    window.gtag_report_conversion(normalizedHref, conversionSendTo);
  }
}
