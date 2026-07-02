import type { Metadata } from "next";
import { faqItems, getSiteUrl } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "常见问题 FAQ | Oxylife 儿童视力训练",
  description:
    "关于 IZON 视力训练方案的常见问题解答：适合年龄、RM49 体验内容、训练时长、安全性、与阿托品/OK镜的比较等。",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "常见问题 FAQ | Oxylife 儿童视力训练",
    description:
      "关于 IZON 视力训练方案的常见问题解答：适合年龄、RM49 体验内容、训练时长、安全性、与阿托品/OK镜的比较等。",
    url: "/faq",
    locale: "zh_MY",
  },
};

export default function FaqPage() {
  const siteUrl = getSiteUrl();

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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "首页", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "常见问题", item: `${siteUrl}/faq` },
    ],
  };

  return (
    <main className="relative bg-[#121416] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-[860px] mx-auto px-6 md:px-10 py-24 md:py-32">
        {/* Breadcrumb */}
        <nav className="mb-10 text-sm text-slate-500" aria-label="breadcrumb">
          <ol className="flex items-center gap-2">
            <li><a href="/" className="hover:text-emerald-400 transition-colors">首页</a></li>
            <li className="text-slate-700">/</li>
            <li className="text-slate-400">常见问题</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.06] px-3 py-1 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
            <span className="text-[11px] font-semibold tracking-[0.14em] text-emerald-400 uppercase">常见问题</span>
          </div>
          <h1 className="text-[2.2rem] md:text-[3rem] font-[900] tracking-tighter text-white leading-[1.1] mb-4">
            关于 IZON 的<br />
            <span className="text-emerald-400">你最想知道的问题</span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-[560px]">
            选择任何一种视力方案前，家长通常都有很多疑问。这里整理了最常被问到的问题，帮你做出更有把握的决定。
          </p>
        </header>

        {/* FAQ List */}
        <section aria-label="常见问题列表">
          <dl className="space-y-6">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/[0.06] bg-[linear-gradient(180deg,rgba(255,255,255,0.025),rgba(255,255,255,0.01))] px-6 py-6 md:px-8 md:py-7"
              >
                <dt className="text-white font-[700] text-[1.05rem] md:text-[1.15rem] leading-[1.45] mb-3">
                  {item.question}
                </dt>
                <dd className="text-slate-300 text-[0.97rem] md:text-base leading-[1.72] font-medium">
                  {item.answer}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* CTA */}
        <div className="mt-14 md:mt-16 rounded-2xl border border-emerald-500/15 bg-emerald-500/[0.05] px-6 py-8 md:px-10 text-center">
          <p className="text-white font-[700] text-[1.1rem] md:text-xl mb-2">
            还有其他疑问？
          </p>
          <p className="text-slate-400 text-sm md:text-base mb-6">
            直接 WhatsApp 我们，通常几分钟内回复。
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=601155594933"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-[700] text-white tracking-wide hover:bg-emerald-400 transition-colors"
          >
            WhatsApp 咨询
          </a>
          <p className="text-slate-500 text-[13px] mt-5">
            还没决定要不要购买？<a href="/sewa" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">先租用 IZON 试试</a>，RM399/月起。
          </p>
        </div>

        {/* Back link */}
        <div className="mt-10 text-center">
          <a href="/" className="text-sm text-slate-500 hover:text-emerald-400 transition-colors">
            ← 返回首页
          </a>
        </div>
      </div>
    </main>
  );
}
