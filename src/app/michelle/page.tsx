import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { consultantCtas } from "@/lib/cta-config";

export const metadata: Metadata = {
  title: "Michelle 专属咨询页",
  description:
    "通过 Michelle 了解 Oxylife Selangor 儿童与家庭视力训练方案，并直接咨询或预约 RM49 体验。",
  alternates: {
    canonical: "/michelle",
  },
};

export default function MichellePage() {
  return (
    <LandingPage
      ctaConfig={consultantCtas.michelle}
      canonicalPath="/michelle"
      enableFloatingCta
    />
  );
}
