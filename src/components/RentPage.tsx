"use client";

import React from "react";
import { ChevronDown, Check, Package, Truck, MessageCircle, ShieldCheck } from "lucide-react";
import EnNavbar from "@/components/en/EnNavbar";
import EnFooter from "@/components/en/EnFooter";

const WA_LINK =
  "https://wa.me/601155594933?text=Hi%2C+I%27m+interested+in+renting+an+IZON+device+(RM399%2Fmonth).+Please+share+more+details.";

const containerClass = "max-w-[1600px] w-[90vw] mx-auto px-6 sm:px-8 md:px-12 relative z-10";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": "https://www.oxylifeselangor.com/#organization",
      name: "Oxylife Selangor",
      description:
        "IZON eye physiotherapy device rental program in Petaling Jaya, Selangor. Rent an MDA-certified eye therapy device from RM399/month with consultant support included.",
      url: "https://www.oxylifeselangor.com/rent",
      telephone: "+60115559 4933",
      priceRange: "RM399–RM3000",
      openingHours: ["Mo-Fr 10:00-19:00", "Sa 10:00-17:00"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 3.1047,
        longitude: 101.6369,
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "A-13-10, Pinnacle Petaling Jaya, Lrg. Utara, Pjs 52",
        addressLocality: "Petaling Jaya",
        addressRegion: "Selangor",
        postalCode: "46200",
        addressCountry: "MY",
      },
      sameAs: ["https://www.facebook.com/oxylifeselangor"],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.oxylifeselangor.com/en" },
        { "@type": "ListItem", position: 2, name: "IZON Device Rental", item: "https://www.oxylifeselangor.com/rent" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can I rent an IZON eye therapy device in Malaysia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. An Oxylife Selangor consultant offers an IZON device rental program in Petaling Jaya, Selangor. Rental is RM399 per month with a refundable RM500 deposit. The device is delivered to your door and consultant support is included throughout the rental period.",
          },
        },
        {
          "@type": "Question",
          name: "How much does it cost to rent an IZON device in Malaysia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The IZON rental costs RM399 per month with a minimum 3-month commitment. A refundable RM500 deposit is required to confirm your unit. After the initial 3 months, the rate drops to RM299 per month. Delivery across Peninsular Malaysia is included.",
          },
        },
        {
          "@type": "Question",
          name: "What is the RM500 deposit for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The RM500 deposit confirms your rental slot and reserves one of the limited units available. It is fully refundable when the device is returned in good condition at the end of your rental period.",
          },
        },
        {
          "@type": "Question",
          name: "What happens after the 3-month rental commitment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "After the initial 3-month commitment at RM399 per month, the rental rate drops to RM299 per month. You can continue renting month-to-month, or choose to return the device.",
          },
        },
        {
          "@type": "Question",
          name: "Does the IZON rental include consultant support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Every rental includes dedicated WhatsApp support from an Oxylife Selangor consultant throughout the rental period. This includes training guidance, progress check-ins, and usage questions.",
          },
        },
        {
          "@type": "Question",
          name: "Is IZON eye therapy actually effective?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The IZON Personal Scope-EX is registered with Malaysia's Medical Device Authority (MDA License GA1448221-77276) and holds US FDA and ISO 13485 certification. Users in Malaysia have reported measurable outcomes including myopia degree reduction after 2–3 months of consistent use. The rental program exists precisely to let families verify effectiveness before committing to a purchase.",
          },
        },
        {
          "@type": "Question",
          name: "Why rent instead of buying IZON outright?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Buying an IZON device outright costs significantly more upfront. Renting at RM399 per month lets you verify results on your own child before committing. If you see improvement after 3 months, you can continue renting at RM299/month or purchase. If not, return the device — your only commitment is the 3-month minimum and the refundable deposit.",
          },
        },
        {
          "@type": "Question",
          name: "Is the IZON rental available across Malaysia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The IZON rental program delivers to addresses across Peninsular Malaysia. Delivery is arranged after the RM500 deposit is confirmed. East Malaysia delivery is subject to availability — please enquire via WhatsApp.",
          },
        },
      ],
    },
  ],
};

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group glass-panel overflow-hidden border-white/6 hover:border-emerald-500/18 transition-colors duration-300">
      <summary className="list-none w-full px-5 py-4 md:px-8 md:py-6 flex justify-between items-start gap-5 cursor-pointer">
        <span className="text-[0.95rem] md:text-[1.1rem] font-semibold tracking-tight text-white leading-[1.38]">
          {q}
        </span>
        <ChevronDown
          size={20}
          className="text-slate-500 shrink-0 mt-0.5 transition-transform duration-300 group-open:rotate-180 group-open:text-emerald-400"
        />
      </summary>
      <div className="px-5 pb-5 md:px-8 md:pb-7 border-t border-white/6">
        <p className="pt-4 text-slate-300 text-[14px] md:text-[16px] leading-[1.65rem] font-medium">{a}</p>
      </div>
    </details>
  );
}

export default function RentPage() {
  return (
    <main className="relative bg-[#121416] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <EnNavbar contactLabel="WhatsApp to Enquire" contactHref={WA_LINK} />

      {/* God rays */}
      <div className="absolute top-0 left-0 w-full h-[120vh] overflow-hidden pointer-events-none z-0">
        <div className="god-ray w-[8vw] h-[90vh] left-[5vw] top-[-2vh] rotate-[15deg]" style={{ opacity: 0.5 }} />
        <div className="god-ray w-[5vw] h-[70vh] left-[18vw] top-[-2vh] rotate-[22deg]" style={{ opacity: 0.3 }} />
      </div>

      {/* ── HERO ── */}
      <section className={`${containerClass} pt-24 md:pt-44 pb-16 md:pb-24`}>
        <div className="max-w-[860px] mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full border border-emerald-500/18 bg-emerald-500/[0.07] text-emerald-300 text-[11px] font-bold tracking-[0.14em] uppercase shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(110,231,183,0.4)]" />
            Limited Units · Petaling Jaya · Delivered to You
          </div>

          <h1 className="text-white font-[900] tracking-tight leading-[1.06] mb-5">
            <span className="block text-[2.1rem] sm:text-[2.6rem] md:text-[4rem] lg:text-[5rem]">
              Try IZON Before You Buy.
            </span>
            <span className="block text-[1.5rem] sm:text-[1.9rem] md:text-[2.8rem] lg:text-[3.4rem] text-emerald-300/85 font-[760] mt-1">
              Rent from RM399/month.
            </span>
          </h1>

          <p className="text-slate-300/90 text-[0.98rem] md:text-[1.18rem] leading-[1.68] max-w-[640px] mx-auto mb-8 font-medium">
            I'm an Oxylife Selangor consultant with a limited number of IZON units available for rental. Instead of committing to a full purchase, rent one, use it for 3 months, and see the results on your own child first.
          </p>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-[#060e0c] font-[800] text-[1rem] tracking-tight transition-all duration-200 shadow-[0_8px_28px_rgba(16,185,129,0.28)] hover:shadow-[0_12px_36px_rgba(16,185,129,0.42)] hover:scale-[1.02]"
          >
            <MessageCircle size={18} strokeWidth={2.5} />
            WhatsApp to Enquire
          </a>

          <p className="mt-3 text-slate-500 text-[12px] tracking-wide">
            RM500 refundable deposit required to reserve a unit
          </p>
        </div>
      </section>

      {/* ── SKEPTIC INTERCEPT ── */}
      <section className={`${containerClass} py-12 md:py-20`}>
        <div className="max-w-[780px] mx-auto">
          <div className="glass-panel rounded-[28px] border-emerald-500/10 bg-[linear-gradient(180deg,rgba(9,28,26,0.52),rgba(7,22,21,0.44))] p-7 md:p-12">
            <p className="text-emerald-400 text-[11px] font-bold tracking-[0.18em] uppercase mb-3">
              For the sceptics
            </p>
            <h2 className="text-white text-[1.6rem] md:text-[2.2rem] font-[880] tracking-tight leading-[1.15] mb-5">
              "Is IZON actually effective, or is this just marketing?"
            </h2>
            <p className="text-slate-300 text-[0.98rem] md:text-[1.08rem] leading-[1.72] font-medium mb-5">
              That's exactly the right question to ask — and the honest answer is: <strong className="text-white">try it and see for yourself.</strong> That's why the rental program exists. Every parent I've worked with either saw measurable improvement and continued, or returned the device. No one was stuck with something that didn't work.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              {[
                { label: "MDA Licensed", sub: "GA1448221-77276" },
                { label: "US FDA Certified", sub: "Medical device standard" },
                { label: "ISO 13485", sub: "Quality management" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center rounded-2xl border border-emerald-500/12 bg-emerald-500/[0.04] px-4 py-4"
                >
                  <ShieldCheck size={18} className="text-emerald-400 mb-2" />
                  <span className="text-white font-semibold text-[0.9rem]">{item.label}</span>
                  <span className="text-slate-500 text-[11px] mt-0.5">{item.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className={`${containerClass} py-12 md:py-16`}>
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-white text-[1.72rem] md:text-[2.8rem] font-[900] tracking-tight leading-[1.1]">
              Rent vs. Buy vs. Alternatives
            </h2>
            <p className="text-slate-400 text-[0.95rem] md:text-[1.05rem] mt-3 leading-[1.6]">
              Here's how the numbers actually compare over the first 3 months.
            </p>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-white/[0.06] bg-[linear-gradient(180deg,rgba(11,17,27,0.98),rgba(9,16,28,0.95))] shadow-[0_22px_52px_-16px_rgba(0,0,0,0.72)]">
            {/* Header */}
            <div className="grid grid-cols-4 border-b border-white/[0.06] px-5 py-3 md:px-8 md:py-4">
              <div className="text-slate-500 text-[11px] font-medium tracking-[0.12em] uppercase col-span-1"></div>
              {[
                { label: "Rent IZON", accent: true },
                { label: "Buy IZON", accent: false },
                { label: "OK Lens / Atropine", accent: false },
              ].map((h, i) => (
                <div key={i} className="text-center">
                  <span
                    className={`text-[11px] md:text-[12px] font-bold tracking-[0.08em] ${
                      h.accent ? "text-emerald-300" : "text-slate-400"
                    }`}
                  >
                    {h.label}
                  </span>
                </div>
              ))}
            </div>
            {/* Rows */}
            {[
              {
                label: "Upfront cost",
                vals: ["RM500 deposit\n(refundable)", "RM3,000+\n(one-time)", "RM500–800\n(first visit)"],
              },
              {
                label: "Month 1–3",
                vals: ["RM399/month", "—", "RM80–250/month\n(ongoing)"],
              },
              {
                label: "After 3 months",
                vals: ["RM299/month", "—", "Continues"],
              },
              {
                label: "Risk if no results",
                vals: ["Return device", "Stuck with it", "Keep paying"],
              },
              {
                label: "Consultant support",
                vals: ["Included", "Varies", "Clinic visits"],
              },
              {
                label: "Delivery",
                vals: ["To your door", "Self-collect", "—"],
              },
            ].map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-4 border-b border-white/[0.04] last:border-0 px-5 py-3 md:px-8 md:py-4 items-center"
              >
                <span className="text-slate-400 text-[11px] md:text-[13px] font-medium tracking-[0.04em] pr-2">
                  {row.label}
                </span>
                {row.vals.map((v, j) => (
                  <div key={j} className="text-center px-1">
                    <span
                      className={`text-[11px] md:text-[13px] font-semibold whitespace-pre-line leading-[1.4] ${
                        j === 0 ? "text-emerald-300" : "text-slate-400"
                      }`}
                    >
                      {v}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className={`${containerClass} py-12 md:py-16`}>
        <div className="max-w-[820px] mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-white text-[1.72rem] md:text-[2.8rem] font-[900] tracking-tight">How It Works</h2>
            <p className="text-slate-400 mt-2 text-[0.95rem]">Three steps from enquiry to results.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                step: "01",
                icon: <MessageCircle size={22} className="text-emerald-400" />,
                title: "WhatsApp to confirm",
                desc: "Message me to check availability. Pay the RM500 deposit to lock in your unit — only serious enquiries proceed.",
              },
              {
                step: "02",
                icon: <Truck size={22} className="text-emerald-400" />,
                title: "Device delivered",
                desc: "Your IZON device is shipped to your door across Peninsular Malaysia. I'll walk you through setup over WhatsApp.",
              },
              {
                step: "03",
                icon: <Package size={22} className="text-emerald-400" />,
                title: "3 months with support",
                desc: "Use it daily with my guidance. After 3 months, continue at RM299/month, purchase, or return — your call.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="glass-panel rounded-[22px] border-white/[0.05] p-6 md:p-7 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[11px] font-bold tracking-[0.18em] text-emerald-500/70 uppercase">
                    Step {item.step}
                  </span>
                </div>
                <div className="mb-3">{item.icon}</div>
                <h3 className="text-white font-[760] text-[1.08rem] mb-2 leading-[1.3]">{item.title}</h3>
                <p className="text-slate-400 text-[0.9rem] leading-[1.62] font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className={`${containerClass} py-12 md:py-16`}>
        <div className="max-w-[680px] mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-white text-[1.72rem] md:text-[2.8rem] font-[900] tracking-tight">Pricing</h2>
          </div>

          <div className="glass-panel rounded-[28px] border-emerald-500/12 bg-[linear-gradient(180deg,rgba(9,28,26,0.52),rgba(7,22,21,0.44))] overflow-hidden">
            {/* Starter */}
            <div className="px-7 py-7 md:px-10 md:py-8 border-b border-white/[0.05]">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-[11px] font-bold tracking-[0.16em] text-emerald-400 uppercase">
                    Months 1–3 · Starter
                  </span>
                  <div className="flex items-baseline gap-1.5 mt-1">
                    <span className="text-white text-[2.2rem] md:text-[2.8rem] font-[900] tracking-tight">RM399</span>
                    <span className="text-slate-400 text-[0.95rem] font-medium">/month</span>
                  </div>
                  <p className="text-slate-400 text-[13px] mt-1">3-month minimum commitment · RM500 deposit to start</p>
                </div>
              </div>
              <div className="space-y-2.5">
                {[
                  "IZON Personal Scope-EX device",
                  "Delivery to your door (Peninsular Malaysia)",
                  "WhatsApp consultant support throughout",
                  "Training protocol + progress check-ins",
                  "Fully refundable RM500 deposit",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="mt-0.5 h-4 w-4 rounded-full bg-emerald-500/15 flex items-center justify-center shrink-0">
                      <Check size={10} className="text-emerald-400" strokeWidth={2.5} />
                    </div>
                    <span className="text-slate-300 text-[13px] md:text-[14px] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ongoing */}
            <div className="px-7 py-6 md:px-10 md:py-7">
              <span className="text-[11px] font-bold tracking-[0.16em] text-slate-400 uppercase">
                Month 4 onwards · Ongoing
              </span>
              <div className="flex items-baseline gap-1.5 mt-1 mb-2">
                <span className="text-white text-[1.8rem] md:text-[2.2rem] font-[900] tracking-tight">RM299</span>
                <span className="text-slate-400 text-[0.95rem] font-medium">/month</span>
              </div>
              <p className="text-slate-400 text-[13px]">
                Loyalty rate after your initial commitment. Continue month-to-month with no long-term lock-in.
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-[#060e0c] font-[800] text-[1rem] tracking-tight transition-all duration-200 shadow-[0_8px_28px_rgba(16,185,129,0.28)] hover:shadow-[0_12px_36px_rgba(16,185,129,0.42)] hover:scale-[1.02]"
            >
              <MessageCircle size={18} strokeWidth={2.5} />
              Reserve a Unit via WhatsApp
            </a>
            <p className="text-slate-500 text-[12px] mt-2.5">Limited units available · Deposit confirms your slot</p>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className={`${containerClass} py-12 md:py-16`}>
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-white text-[1.72rem] md:text-[2.6rem] font-[900] tracking-tight leading-[1.1]">
              What families found after 2–3 months
            </h2>
            <p className="text-slate-400 text-[0.93rem] mt-2">
              These are real outcomes from users of the IZON device.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                name: "Suenn",
                profile: "13-year-old student",
                result: "−125° myopia · −75° astigmatism",
                period: "3 months of consistent use",
              },
              {
                name: "Ms Tan",
                profile: "44-year-old parent",
                result: "−100° myopia · +75° near vision",
                period: "2 months of consistent use",
              },
              {
                name: "Ms Joon",
                profile: "52-year-old, retired",
                result: "−100° myopia improvement",
                period: "2 months of consistent use",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="glass-panel rounded-[22px] border-white/[0.05] p-6 flex flex-col gap-3"
              >
                <div>
                  <span className="text-white font-[760] text-[1.05rem]">{t.name}</span>
                  <span className="text-slate-500 text-[12px] ml-2">{t.profile}</span>
                </div>
                <div className="h-px bg-white/[0.06]" />
                <p className="text-emerald-300 font-bold text-[1rem] leading-[1.3]">{t.result}</p>
                <p className="text-slate-400 text-[12px]">{t.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={`${containerClass} py-12 md:py-20`}>
        <div className="max-w-[820px] mx-auto">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-[1.9rem] md:text-[2.8rem] font-[900] tracking-tight text-white">FAQ</h2>
            <p className="text-slate-400 text-[0.93rem] mt-2">Common questions about the rental program and IZON effectiveness.</p>
          </div>
          <div className="space-y-3">
            {[
              {
                q: "Can I rent an IZON device in Malaysia?",
                a: "Yes. I'm an Oxylife Selangor consultant offering an IZON device rental program in Petaling Jaya, Selangor. Rental is RM399 per month with a refundable RM500 deposit. The device is delivered to your door and consultant support is included throughout.",
              },
              {
                q: "Why rent instead of buying?",
                a: "Buying outright costs significantly more upfront. Renting at RM399/month lets you verify results on your own child before committing. If you see improvement after 3 months, continue at RM299/month or purchase. If not, return the device — your only commitment is the 3-month minimum and the refundable deposit.",
              },
              {
                q: "What is the RM500 deposit for?",
                a: "The deposit confirms your rental slot and reserves one of the limited units. It is fully refundable when the device is returned in good condition at the end of your rental period.",
              },
              {
                q: "Is IZON eye therapy actually effective?",
                a: "The IZON device is registered with Malaysia's Medical Device Authority (MDA License GA1448221-77276) and holds US FDA and ISO 13485 certification. Users have reported measurable degree reductions after 2–3 months of consistent daily use. Results vary by individual — which is exactly why the rental program lets you test it yourself before buying.",
              },
              {
                q: "How is IZON different from OK lenses or atropine?",
                a: "OK lenses and atropine work passively — they slow progression but don't train the underlying visual system. IZON uses active visual training targeting extraocular muscle balance, near-far accommodation, retinal light stimulation, and pupil response. It involves no medication and no eye contact.",
              },
              {
                q: "What happens after the 3-month commitment?",
                a: "After the initial 3 months at RM399/month, the rate drops to RM299/month. You can continue renting month-to-month, choose to purchase the device, or return it. No long-term lock-in after the initial period.",
              },
              {
                q: "Is delivery available across Malaysia?",
                a: "Delivery covers Peninsular Malaysia and is included in the rental. East Malaysia delivery is subject to availability — please enquire via WhatsApp.",
              },
              {
                q: "What does consultant support include?",
                a: "You get dedicated WhatsApp support from me throughout the rental period — training guidance, usage questions, progress check-ins, and help if anything feels unclear. You're not renting a device and figuring it out alone.",
              },
            ].map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className={`${containerClass} py-12 md:py-20`}>
        <div className="max-w-[680px] mx-auto text-center">
          <div className="glass-panel rounded-[28px] border-emerald-500/12 bg-[linear-gradient(180deg,rgba(9,28,26,0.52),rgba(7,22,21,0.44))] px-8 py-10 md:px-12 md:py-14">
            <h2 className="text-white text-[1.6rem] md:text-[2.4rem] font-[900] tracking-tight leading-[1.12] mb-3">
              Ready to try it on your child?
            </h2>
            <p className="text-slate-300/88 text-[0.95rem] md:text-[1.06rem] leading-[1.68] mb-7 font-medium max-w-[480px] mx-auto">
              Message me on WhatsApp to check unit availability, ask questions, or reserve your slot with a deposit.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-[#060e0c] font-[800] text-[1rem] tracking-tight transition-all duration-200 shadow-[0_8px_28px_rgba(16,185,129,0.28)] hover:shadow-[0_12px_36px_rgba(16,185,129,0.42)] hover:scale-[1.02]"
            >
              <MessageCircle size={18} strokeWidth={2.5} />
              WhatsApp to Enquire
            </a>
            <p className="text-slate-500 text-[12px] mt-3">
              Units are limited · RM500 deposit secures your slot
            </p>
          </div>
        </div>
      </section>

      <EnFooter />
    </main>
  );
}
