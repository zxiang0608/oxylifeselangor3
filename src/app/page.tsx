import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { defaultLandingCta } from "@/lib/cta-config";

export const metadata: Metadata = {
  title: "Oxylife | Eye Treatment at Home",
  description:
    "先帮助家长判断孩子是否适合开始，再比较长期效果、安全性、孩子配合度与整体费用。",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <LandingPage ctaConfig={defaultLandingCta} canonicalPath="/" />;
}
