import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { consultantCtas } from "@/lib/cta-config";

export const metadata: Metadata = {
  title: "Albert 专属咨询页",
  description:
    "通过 Albert 了解 Oxylife Selangor 儿童与家庭视力训练方案，并直接咨询或预约 RM49 体验。",
  alternates: {
    canonical: "/albert",
  },
};

export default function AlbertPage() {
  return (
    <LandingPage
      ctaConfig={consultantCtas.albert}
      canonicalPath="/albert"
      enableFloatingCta
    />
  );
}
