import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { defaultLandingCta } from "@/lib/cta-config";

export const metadata: Metadata = {
  title: "儿童视力咨询与体验评估 | Oxylife",
  description:
    "使用 Personal Scope-EX 进行儿童视力咨询与体验评估，帮助家长了解孩子目前视力状况与后续方案。位于 Petaling Jaya，欢迎 WhatsApp 咨询预约。",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <LandingPage ctaConfig={defaultLandingCta} canonicalPath="/" />;
}
