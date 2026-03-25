export type CtaTrackPayload = {
  ctaLocation: string;
  ctaLabel: string;
  href: string;
};
type Consultant = "albert" | "michelle" | "default";
type AssignedConsultant = "albert" | "michelle";
type ConsultantIntent = "contact" | "trial";

type ClickEventLike = {
  preventDefault: () => void;
};

const GOOGLE_ADS_WHATSAPP_CLICK_SEND_TO = "AW-18031279990/anr9COSko44cEPb-_ZVD";

const CONSULTANT_COOKIE_NAME = "consultant";
const CONSULTANT_STORAGE_KEY = "consultant";

const CONSULTANT_WHATSAPP_LINKS: Record<
  AssignedConsultant,
  Record<ConsultantIntent, string>
> = {
  albert: {
    contact: "https://wa.link/khv3s5",
    trial: "https://wa.link/slw57k",
  },
  michelle: {
    contact: "https://wa.link/g14bi1",
    trial: "https://wa.link/3s5zwr",
  },
};

const normalizeUrl = (url: string) =>
  url.trim().split("#")[0].split("?")[0].replace(/\/$/, "");

const normalizePath = (url: string) => {
  try {
    const parsed = new URL(url, window.location.origin);
    return normalizeUrl(parsed.pathname);
  } catch {
    return normalizeUrl(url);
  }
};

const isAssignedConsultant = (
  consultant: string | null | undefined
): consultant is AssignedConsultant =>
  consultant === "albert" || consultant === "michelle";

const getConsultantFromCookie = (): AssignedConsultant | null => {
  const match = document.cookie
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${CONSULTANT_COOKIE_NAME}=`));
  if (!match) return null;
  const value = decodeURIComponent(match.split("=")[1] || "");
  return isAssignedConsultant(value) ? value : null;
};

const getConsultantFromStorage = (): AssignedConsultant | null => {
  const value = window.localStorage.getItem(CONSULTANT_STORAGE_KEY);
  return isAssignedConsultant(value) ? value : null;
};

const persistAssignedConsultant = (consultant: AssignedConsultant) => {
  window.localStorage.setItem(CONSULTANT_STORAGE_KEY, consultant);
  document.cookie = `${CONSULTANT_COOKIE_NAME}=${consultant}; path=/; max-age=${
    60 * 60 * 24 * 30
  }; samesite=lax`;
};

const getOrAssignConsultant = (): AssignedConsultant => {
  const stored = getConsultantFromStorage();
  if (stored) {
    persistAssignedConsultant(stored);
    return stored;
  }

  const cookieValue = getConsultantFromCookie();
  if (cookieValue) {
    persistAssignedConsultant(cookieValue);
    return cookieValue;
  }

  const assigned: AssignedConsultant = Math.random() < 0.5 ? "albert" : "michelle";
  persistAssignedConsultant(assigned);
  return assigned;
};

const getConsultantIntent = (payload: CtaTrackPayload): ConsultantIntent => {
  const normalizedLabel = payload.ctaLabel.toLowerCase();
  const normalizedLocation = payload.ctaLocation.toLowerCase();

  if (
    normalizedLocation.includes("financial") ||
    normalizedLabel.includes("rm49") ||
    normalizedLabel.includes("assessment") ||
    normalizedLabel.includes("体验")
  ) {
    return "trial";
  }

  return "contact";
};

const resolveCtaHref = (
  payload: CtaTrackPayload
): { href: string; consultant: Consultant } => {
  if (payload.href.startsWith("http")) {
    return {
      href: normalizeUrl(payload.href),
      consultant: getConsultantFromPathname(window.location.pathname),
    };
  }

  if (normalizePath(payload.href) === "/consultant") {
    const assigned = getOrAssignConsultant();
    const intent = getConsultantIntent(payload);
    return {
      href: CONSULTANT_WHATSAPP_LINKS[assigned][intent],
      consultant: assigned,
    };
  }

  return {
    href: payload.href,
    consultant: getConsultantFromPathname(window.location.pathname),
  };
};

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
  const resolved = resolveCtaHref(payload);
  const normalizedHref = resolved.href;
  const resolvedIsExternal = normalizedHref.startsWith("http");
  const wasConsultantRouterHref = !payload.href.startsWith("http") &&
    normalizePath(payload.href) === "/consultant";
  if (!resolvedIsExternal) return;

  if (wasConsultantRouterHref) {
    // Stop default /consultant navigation and go directly to assigned WhatsApp.
    event?.preventDefault();
  }

  const conversionSendTo = GOOGLE_ADS_WHATSAPP_CLICK_SEND_TO;
  const consultant = resolved.consultant;
  const intentType = getConsultantIntent(payload);

  const eventPayload = {
    consultant,
    cta_location: payload.ctaLocation,
    cta_text: payload.ctaLabel,
    cta_label: payload.ctaLabel,
    destination: normalizedHref,
    page_path: window.location.pathname,
  };

  const ga4EventPayload = {
    ...eventPayload,
    assigned_consultant: consultant,
    intent_type: intentType,
  };

  if (typeof window.gtag === "function") {
    window.gtag("set", "user_properties", {
      consultant,
    });
    window.gtag("event", "whatsapp_cta_click", ga4EventPayload);
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
    return;
  }

  if (wasConsultantRouterHref) {
    window.location.href = normalizedHref;
  }
}
