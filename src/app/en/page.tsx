import type { Metadata } from "next";
import EnglishLandingPage from "@/components/EnglishLandingPage";
import { englishLandingCta } from "@/lib/cta-config";

export const metadata: Metadata = {
  title: "Child Vision Consultation & Assessment | Oxylife",
  description:
    "Non-invasive child vision consultation and first assessment in Petaling Jaya. Learn your child’s current visual condition and suitable next steps with Personal Scope-EX.",
  alternates: {
    canonical: "/en",
    languages: {
      en: "/en",
      "zh-Hans": "/",
    },
  },
  openGraph: {
    title: "Child Vision Consultation & Assessment | Oxylife",
    description:
      "Non-invasive child vision consultation and first assessment in Petaling Jaya. Learn your child’s current visual condition and suitable next steps with Personal Scope-EX.",
    url: "/en",
    locale: "en_MY",
  },
};

export default function EnglishPage() {
  return <EnglishLandingPage ctaConfig={englishLandingCta} canonicalPath="/en" />;
}
