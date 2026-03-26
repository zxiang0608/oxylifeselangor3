import EnNavbar from "@/components/en/EnNavbar";
import EnHero from "@/components/en/EnHero";
import EnPath from "@/components/en/EnPath";
import EnMechanism from "@/components/en/EnMechanism";
import EnProof from "@/components/en/EnProof";
import EnExpectedResults from "@/components/en/EnExpectedResults";
import EnDoctorEndorsement from "@/components/en/EnDoctorEndorsement";
import EnHrdfCertification from "@/components/en/EnHrdfCertification";
import EnEnrollment from "@/components/en/EnEnrollment";
import EnProofFaq from "@/components/en/EnProofFaq";
import EnFooter from "@/components/en/EnFooter";
import EnFinancialComparison from "@/components/en/EnFinancialComparison";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import type { LandingCtaConfig } from "@/lib/cta-config";
import { getSiteUrl } from "@/lib/site-content";

type EnglishLandingPageProps = {
  ctaConfig: LandingCtaConfig;
  enableFloatingCta?: boolean;
  canonicalPath?: string;
};

const englishFaqSchemaItems = [
  {
    question: "Is my child suitable to start?",
    answer:
      "Most children aged 5 and above can be considered, as long as they can follow simple instructions.",
  },
  {
    question: "What is included in the RM49 session?",
    answer:
      "RM49 includes a basic vision assessment, guided experience session, and Q&A before deciding.",
  },
  {
    question: "How long is the routine, and is it troublesome?",
    answer:
      "The routine is designed to be short, manageable, and practical for home use.",
  },
  {
    question: "Does it hurt? Is it safe?",
    answer:
      "It is non-invasive, does not touch the eyeball, and does not involve medication.",
  },
  {
    question: "How is this different from OK lenses, atropine, or supplements?",
    answer:
      "This approach focuses on daily visual training and function support rather than relying only on lenses, medication, or supplements.",
  },
  {
    question: "Can one device be shared by the family?",
    answer:
      "Yes. It is presented as a family-shareable setup for household use.",
  },
];

export default function EnglishLandingPage({
  ctaConfig,
  enableFloatingCta = false,
  canonicalPath = "/en",
}: EnglishLandingPageProps) {
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
    inLanguage: "en",
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "IZON Visual Training Program",
    image: ["https://oxylifeselangor.com/device-render.png"],
    brand: {
      "@type": "Brand",
      name: "Oxylife Selangor",
    },
    description:
      "A non-invasive visual training program designed to support better eye function and reduce daily eye strain.",
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
    mainEntity: englishFaqSchemaItems.map((faq) => ({
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
      <EnNavbar contactLabel={ctaConfig.contactLabel} contactHref={ctaConfig.contactHref} />
      <EnHero />
      <EnMechanism />
      <EnDoctorEndorsement />
      <EnExpectedResults />
      <EnProof />
      <EnHrdfCertification />
      <EnPath />
      <EnFinancialComparison trialLabel={ctaConfig.trialLabel} trialHref={ctaConfig.trialHref} />
      <EnEnrollment contactLabel={ctaConfig.contactLabel} contactHref={ctaConfig.contactHref} />
      <EnProofFaq />
      <EnFooter />
      {enableFloatingCta && ctaConfig.contactHref.startsWith("http") ? (
        <FloatingWhatsAppButton
          href={ctaConfig.contactHref}
          ariaLabel={ctaConfig.floatingAriaLabel || ctaConfig.contactLabel}
        />
      ) : null}
    </main>
  );
}
