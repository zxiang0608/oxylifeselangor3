import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { consultantCtas } from "@/lib/cta-config";

export const metadata: Metadata = {
  title: "儿童视力咨询服务与体验评估 | Oxylife",
  description:
    "使用 Personal Scope-EX 进行儿童视力咨询服务与体验评估，帮助家长了解孩子当前视力情况与适合的后续方案。位于 Petaling Jaya，欢迎 WhatsApp 预约。",
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
