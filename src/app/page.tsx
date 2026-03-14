import type { Metadata } from "next";
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

const getSiteUrl = () => {
  const rawUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL ||
    "http://localhost:3000";

  return rawUrl.startsWith("http") ? rawUrl : `https://${rawUrl}`;
};

const siteUrl = getSiteUrl();

const faqItems = [
  {
    question: "孩子适不适合开始？",
    answer:
      "一般 5 岁以上就可以开始。关键不是只看年龄，而是孩子能不能听懂并配合简单指令。如果孩子还太小，或刚做完眼睛相关疗程或手术，建议先评估，再决定是否适合开始。",
  },
  {
    question: "RM49 体验包含什么？",
    answer:
      "RM49 包含一次基础视力评估、约 40 分钟体验，以及现场答疑。在合作眼镜店体验时，会先做视力检查；如选择上门体验，或附近没有合作眼镜店，则会安排基础视力测试。体验后，通常可以现场看到初步变化，我们也会判断你或孩子是否适合开始。先体验、看效果，再决定。",
  },
  {
    question: "每天需要做多久？会不会很麻烦？",
    answer:
      "不会很麻烦。一般治疗阶段，每次约 10 到 15 分钟，一天 3 次；如果是孩子日常保护，通常每天 5 分钟就可以。大多数人学会后，就能自己完成。",
  },
  {
    question: "会不会痛？安全吗？",
    answer:
      "不会痛，也不接触眼球。整个过程是无创的，不需要碰到眼球表面，也不涉及药物。如果刚做完眼睛相关疗程或手术，一般不建议马上开始，最好先评估再决定。",
  },
  {
    question: "这跟 OK 镜 / 阿托品 / 营养品有什么不同？",
    answer:
      "最大的不同，是 IZON 不只是辅助，而是从训练与调节入手。跟 OK 镜相比，不需要接触眼球，也少了日常护理负担；跟阿托品相比，不涉及药物；跟营养品相比，不只是补充，而是更直接从用眼训练开始。",
  },
  {
    question: "一台机器可以全家用吗？",
    answer:
      "可以，一台机器就能全家共享。不限制人数，同住家人都可以使用，而且是一次付费，不需要每个人重复购买。",
  },
];

export const metadata: Metadata = {
  title: "儿童与家庭视力训练方案",
  description:
    "先帮助家长判断孩子是否适合开始，再比较长期效果、安全性、孩子配合度与整体费用。",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
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
      url: `${siteUrl}/#enrollment`,
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
    <main className="relative bg-[#080C14] min-h-screen">
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
      <Navbar />
      <Hero />
      <MechanismSection />     {/* 1. 原理板块 */}
      <DoctorEndorsement />    {/* 2. 医生背书 */}
      <ExpectedResults />      {/* 3. 预期效果 */}
      <ProofSection />         {/* 4. 真实见证 (Testimony) */}
      <HrdfCertification />    {/* 5. 安全认证 */}
      <PathSection />          {/* 6. 适用检测 (Protocol) */}
      <FinancialComparison />
      <EnrollmentSection />    {/* 7. CTA */}
      <ProofFaq />             {/* 8. FAQ */}
      <Footer />
    </main>
  );
}
