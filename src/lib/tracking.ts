export type CtaTrackPayload = {
  ctaLocation: string;
  ctaLabel: string;
  href: string;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackWhatsAppCtaClick(payload: CtaTrackPayload) {
  if (typeof window === "undefined") return;
  if (!payload.href.startsWith("http")) return;

  const eventPayload = {
    cta_location: payload.ctaLocation,
    cta_label: payload.ctaLabel,
    destination: payload.href,
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
}
