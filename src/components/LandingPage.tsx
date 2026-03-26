import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PathSection from "@/components/Path";
import MechanismSection from "@/components/Mechanism";
import ProofSection from "@/components/Proof";
import ExpectedResults from "@/components/ExpectedResults";
import DoctorEndorsement from "@/components/DoctorEndorsement";
import HrdfCertification from "@/components/HrdfCertification";
import EnrollmentSection from "@/components/Enrollment";
import ProofFaq from "@/components/ProofFaq";
import Footer from "@/components/Footer";
import FinancialComparison from "@/components/FinancialComparison";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { faqItems, getSiteUrl } from "@/lib/site-content";
import type { LandingCtaConfig } from "@/lib/cta-config";

type LandingPageProps = {
  ctaConfig: LandingCtaConfig;
  enableFloatingCta?: boolean;
  canonicalPath?: string;
};

export default function LandingPage({
  ctaConfig,
  enableFloatingCta = false,
  canonicalPath = "/",
}: LandingPageProps) {
  const siteUrl = getSiteUrl();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Oxylife Selangor",
    url: siteUrl,
    telephone: "+60 11-5559 4933",
    address: {
      "@type": "PostalAddress",
      streetAddress: "A-13-10, Pinnacle Petaling Jaya, Lrg. Utara, Pjs 52",
      addressLocality: "Petaling Jaya",
      addressRegion: "Selangor",
      postalCode: "46200",
      addressCountry: "MY",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Oxylife Selangor",
    url: siteUrl,
    inLanguage: "zh-Hans",
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "IZON 视力自愈方案",
    image: [
      "https://oxylifeselangor.com/device-render.png",
    ],
    brand: {
      "@type": "Brand",
      name: "Oxylife Selangor",
    },
    description:
      "给孩子与家庭使用的视力训练方案，重点帮助减轻用眼负担、稳定度数变化，并先判断是否适合开始。",
    offers: {
      "@type": "Offer",
      priceCurrency: "MYR",
      price: "49",
      availability: "https://schema.org/InStock",
      url: `${siteUrl}${canonicalPath}#comparison-cta`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="relative bg-[#121416] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar contactLabel={ctaConfig.contactLabel} contactHref={ctaConfig.contactHref} />
      <Hero />
      <MechanismSection />
      <DoctorEndorsement />
      <ExpectedResults />
      <ProofSection />
      <HrdfCertification />
      <PathSection />
      <FinancialComparison trialLabel={ctaConfig.trialLabel} trialHref={ctaConfig.trialHref} />
      <EnrollmentSection contactLabel={ctaConfig.contactLabel} contactHref={ctaConfig.contactHref} />
      <ProofFaq />
      <Footer />
      {enableFloatingCta && ctaConfig.contactHref.startsWith("http") ? (
        <FloatingWhatsAppButton
          href={ctaConfig.contactHref}
          ariaLabel={ctaConfig.floatingAriaLabel || ctaConfig.contactLabel}
        />
      ) : null}
    </main>
  );
}
