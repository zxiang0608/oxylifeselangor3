import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";
import { consultantCtas } from "@/lib/cta-config";

export const metadata: Metadata = {
  title: "儿童视力评估与咨询服务 | Oxylife",
  description:
    "使用 Personal Scope-EX 提供儿童视力评估与咨询服务，协助家长进一步了解孩子的视力情况与后续安排。位于 Petaling Jaya，欢迎 WhatsApp 咨询。",
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
