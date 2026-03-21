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
    contactLabel: "专家咨询",
    contactHref: "https://wa.link/khv3s5",
    trialLabel: "锁定 RM49 线下体验",
    trialHref: "https://wa.link/slw57k",
    floatingAriaLabel: "WhatsApp 联系",
  },
  michelle: {
    slug: "michelle",
    contactLabel: "专家咨询",
    contactHref: "https://wa.link/g14bi1",
    trialLabel: "锁定 RM49 线下体验",
    trialHref: "https://wa.link/3s5zwr",
    floatingAriaLabel: "WhatsApp 联系",
  },
};
