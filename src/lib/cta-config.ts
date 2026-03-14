export type LandingCtaConfig = {
  slug?: string;
  contactLabel: string;
  contactHref: string;
  trialLabel: string;
  trialHref: string;
  floatingAriaLabel?: string;
};

export const defaultLandingCta: LandingCtaConfig = {
  contactLabel: "专家咨询",
  contactHref: "#enrollment",
  trialLabel: "锁定 RM49 线下体验",
  trialHref: "#enrollment",
  floatingAriaLabel: "WhatsApp 联系",
};

export const consultantCtas: Record<"albert" | "michelle", LandingCtaConfig> = {
  albert: {
    slug: "albert",
    contactLabel: "Contact Albert",
    contactHref: "https://wa.link/khv3s5",
    trialLabel: "RM49 trial Albert",
    trialHref: "https://wa.link/slw57k",
    floatingAriaLabel: "Contact Albert on WhatsApp",
  },
  michelle: {
    slug: "michelle",
    contactLabel: "Contact Michelle",
    contactHref: "https://wa.link/g14bi1",
    trialLabel: "RM49 trial Michelle",
    trialHref: "https://wa.link/3s5zwr",
    floatingAriaLabel: "Contact Michelle on WhatsApp",
  },
};
