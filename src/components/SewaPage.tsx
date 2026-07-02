"use client";

import React from "react";
import { ChevronDown, Check, Package, Truck, MessageCircle, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WA_LINK =
  "https://wa.me/601155594933?text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E4%BA%86%E8%A7%A3IZON%E8%AE%BE%E5%A4%87%E7%A7%9F%E7%94%A8%E6%96%B9%E6%A1%88%EF%BC%88RM399%2F%E6%9C%88%EF%BC%89%EF%BC%8C%E8%AF%B7%E5%8F%91%E8%AF%A6%E7%BB%86%E4%BF%A1%E6%81%AF%E7%BB%99%E6%88%91%E3%80%82";

const containerClass = "max-w-[1600px] w-[90vw] mx-auto px-6 sm:px-8 md:px-12 relative z-10";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": "https://www.oxylifeselangor.com/#organization",
      name: "Oxylife Selangor",
      description:
        "IZON眼部理疗仪器租用计划，位于雪兰莪八打灵再也。每月RM399起，含押金RM500，送货上门，顾问全程陪伴。",
      url: "https://www.oxylifeselangor.com/sewa",
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
        { "@type": "ListItem", position: 1, name: "首页", item: "https://www.oxylifeselangor.com/" },
        { "@type": "ListItem", position: 2, name: "IZON 设备租用", item: "https://www.oxylifeselangor.com/sewa" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "马来西亚可以租用IZON眼部理疗仪器吗？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "可以。我是Oxylife Selangor的顾问，目前提供IZON设备租用服务，配送至马来西亚半岛各地。租用费用为每月RM399，需缴交RM500可退还押金确认名额，并附带全程顾问支持。",
          },
        },
        {
          "@type": "Question",
          name: "租用IZON设备一个月多少钱？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "租用费为每月RM399，最少租用3个月。需缴交RM500可退还押金以锁定名额。满3个月后，月租费降至RM299。配送费已包含在内。",
          },
        },
        {
          "@type": "Question",
          name: "RM500押金是做什么用的？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "RM500押金用于确认您的租用名额，锁定其中一台可用设备。设备完好归还后，押金全额退还。",
          },
        },
        {
          "@type": "Question",
          name: "IZON真的有效吗？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "IZON Personal Scope-EX已获得马来西亚医疗器材局（MDA）注册（执照号GA1448221-77276），并持有美国FDA及ISO 13485认证。马来西亚用户在持续使用2至3个月后报告了可量化的视力改善，包括近视度数减少。租用计划的目的正是让家长能在购买前亲自验证效果。",
          },
        },
        {
          "@type": "Question",
          name: "3个月后会怎样？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "完成初始3个月（每月RM399）后，月租费降至RM299。您可以选择继续月租、购买设备，或归还设备。初始期满后无需长期绑定。",
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

export default function SewaPage() {
  return (
    <main className="relative bg-[#121416] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Navbar contactLabel="WhatsApp 咨询租用" contactHref={WA_LINK} />

      {/* God rays */}
      <div className="absolute top-0 left-0 w-full h-[120vh] overflow-hidden pointer-events-none z-0">
        <div className="god-ray w-[8vw] h-[90vh] left-[5vw] top-[-2vh] rotate-[15deg]" style={{ opacity: 0.5 }} />
        <div className="god-ray w-[5vw] h-[70vh] left-[18vw] top-[-2vh] rotate-[22deg]" style={{ opacity: 0.3 }} />
      </div>

      {/* ── HERO ── */}
      <section className={`${containerClass} pt-24 md:pt-44 pb-16 md:pb-24`}>
        <div className="max-w-[860px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full border border-emerald-500/18 bg-emerald-500/[0.07] text-emerald-300 text-[11px] font-bold tracking-[0.14em] uppercase shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(110,231,183,0.4)]" />
            名额有限 · 八打灵再也 · 送货上门
          </div>

          <h1 className="text-white font-[900] tracking-tight leading-[1.06] mb-5">
            <span className="block text-[2rem] sm:text-[2.5rem] md:text-[3.8rem] lg:text-[4.8rem]">
              先租用，再决定买不买。
            </span>
            <span className="block text-[1.4rem] sm:text-[1.8rem] md:text-[2.6rem] lg:text-[3.2rem] text-emerald-300/85 font-[760] mt-1">
              IZON 租用，每月 RM399 起。
            </span>
          </h1>

          <p className="text-slate-300/90 text-[0.98rem] md:text-[1.18rem] leading-[1.68] max-w-[640px] mx-auto mb-8 font-medium">
            我是 Oxylife Selangor 的顾问，目前有少量 IZON 设备可供租用。与其一次性购买，不如先租用 3 个月，亲眼看到孩子的效果，再做决定。
          </p>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-[#060e0c] font-[800] text-[1rem] tracking-tight transition-all duration-200 shadow-[0_8px_28px_rgba(16,185,129,0.28)] hover:shadow-[0_12px_36px_rgba(16,185,129,0.42)] hover:scale-[1.02]"
          >
            <MessageCircle size={18} strokeWidth={2.5} />
            WhatsApp 咨询租用
          </a>

          <p className="mt-3 text-slate-500 text-[12px] tracking-wide">
            需缴 RM500 可退还押金以锁定名额
          </p>
        </div>
      </section>

      {/* ── SKEPTIC INTERCEPT ── */}
      <section className={`${containerClass} py-12 md:py-20`}>
        <div className="max-w-[780px] mx-auto">
          <div className="glass-panel rounded-[28px] border-emerald-500/10 bg-[linear-gradient(180deg,rgba(9,28,26,0.52),rgba(7,22,21,0.44))] p-7 md:p-12">
            <p className="text-emerald-400 text-[11px] font-bold tracking-[0.18em] uppercase mb-3">
              对效果有疑虑？
            </p>
            <h2 className="text-white text-[1.5rem] md:text-[2.1rem] font-[880] tracking-tight leading-[1.2] mb-5">
              "IZON 真的有效吗？还是只是营销话术？"
            </h2>
            <p className="text-slate-300 text-[0.98rem] md:text-[1.08rem] leading-[1.72] font-medium mb-5">
              这是应该问的问题。诚实的回答是：<strong className="text-white">自己用了才知道。</strong>这正是租用计划存在的原因。看到效果的家长会继续使用或购买；没有效果的，归还设备就好。没有人被迫接受一个不适合自己孩子的方案。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              {[
                { label: "MDA 注册", sub: "GA1448221-77276" },
                { label: "美国 FDA 认证", sub: "医疗器材标准" },
                { label: "ISO 13485", sub: "质量管理体系" },
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

      {/* ── PRICING ── */}
      <section className={`${containerClass} py-12 md:py-16`}>
        <div className="max-w-[680px] mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-white text-[1.72rem] md:text-[2.8rem] font-[900] tracking-tight">租用费用</h2>
          </div>

          <div className="glass-panel rounded-[28px] border-emerald-500/12 bg-[linear-gradient(180deg,rgba(9,28,26,0.52),rgba(7,22,21,0.44))] overflow-hidden">
            {/* Starter */}
            <div className="px-7 py-7 md:px-10 md:py-8 border-b border-white/[0.05]">
              <span className="text-[11px] font-bold tracking-[0.16em] text-emerald-400 uppercase">
                第 1–3 个月 · 起步套餐
              </span>
              <div className="flex items-baseline gap-1.5 mt-1 mb-1">
                <span className="text-white text-[2.2rem] md:text-[2.8rem] font-[900] tracking-tight">RM399</span>
                <span className="text-slate-400 text-[0.95rem] font-medium">/ 月</span>
              </div>
              <p className="text-slate-400 text-[13px] mb-5">最少租用 3 个月 · RM500 押金确认名额</p>
              <div className="space-y-2.5">
                {[
                  "IZON Personal Scope-EX 设备一台",
                  "配送至半岛马来西亚各地（含运费）",
                  "全程 WhatsApp 顾问支持",
                  "训练指导 + 定期进度跟进",
                  "RM500 押金可退还",
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
                第 4 个月起 · 持续套餐
              </span>
              <div className="flex items-baseline gap-1.5 mt-1 mb-2">
                <span className="text-white text-[1.8rem] md:text-[2.2rem] font-[900] tracking-tight">RM299</span>
                <span className="text-slate-400 text-[0.95rem] font-medium">/ 月</span>
              </div>
              <p className="text-slate-400 text-[13px]">
                满足初始承诺后的优惠月租。按月续租，不绑定长期合约。
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
              WhatsApp 锁定名额
            </a>
            <p className="text-slate-500 text-[12px] mt-2.5">名额有限 · 押金确认即锁定</p>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className={`${containerClass} py-12 md:py-16`}>
        <div className="max-w-[820px] mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-white text-[1.72rem] md:text-[2.8rem] font-[900] tracking-tight">租用流程</h2>
            <p className="text-slate-400 mt-2 text-[0.95rem]">三步从咨询到拿到设备。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                step: "01",
                icon: <MessageCircle size={22} className="text-emerald-400" />,
                title: "WhatsApp 确认名额",
                desc: "联系我查询可用设备。缴交 RM500 押金即可锁定您的名额，仅限认真问询。",
              },
              {
                step: "02",
                icon: <Truck size={22} className="text-emerald-400" />,
                title: "设备送货上门",
                desc: "IZON 设备快递至半岛马来西亚各地。我会透过 WhatsApp 指导您完成设置。",
              },
              {
                step: "03",
                icon: <Package size={22} className="text-emerald-400" />,
                title: "3 个月 · 全程陪伴",
                desc: "每天使用，我提供全程指导。满 3 个月后，继续以 RM299/月租用、购买，或归还——由您决定。",
              },
            ].map((item, i) => (
              <div key={i} className="glass-panel rounded-[22px] border-white/[0.05] p-6 md:p-7 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[11px] font-bold tracking-[0.18em] text-emerald-500/70 uppercase">
                    第 {item.step} 步
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

      {/* ── TESTIMONIALS ── */}
      <section className={`${containerClass} py-12 md:py-16`}>
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-white text-[1.72rem] md:text-[2.6rem] font-[900] tracking-tight leading-[1.1]">
              使用 2–3 个月后的真实反馈
            </h2>
            <p className="text-slate-400 text-[0.93rem] mt-2">以下是 IZON 用户的真实使用成果。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { name: "Suenn", profile: "13岁学生", result: "近视减少 125度 · 散光减少 75度", period: "持续使用 3 个月" },
              { name: "陈女士", profile: "44岁家长", result: "近视减少 100度 · 老花减少 75度", period: "持续使用 2 个月" },
              { name: "钟女士", profile: "52岁，退休人士", result: "近视减少 100度", period: "持续使用 2 个月" },
            ].map((t, i) => (
              <div key={i} className="glass-panel rounded-[22px] border-white/[0.05] p-6 flex flex-col gap-3">
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
            <h2 className="text-[1.9rem] md:text-[2.8rem] font-[900] tracking-tight text-white">常见问题</h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: "马来西亚可以租用 IZON 设备吗？",
                a: "可以。我是 Oxylife Selangor 的顾问，提供 IZON 设备租用服务，配送至半岛马来西亚各地。租用费每月 RM399，需缴 RM500 可退还押金，全程附带顾问支持。",
              },
              {
                q: "为什么选择租用而不是直接购买？",
                a: "直接购买需要较高的前期费用。以每月 RM399 租用，让您先在自己孩子身上验证效果，再做购买决定。3 个月后见效，可继续以 RM299/月租用或购买；若效果不符合预期，归还设备即可——您唯一的承诺是 3 个月最低租期及可退还押金。",
              },
              {
                q: "RM500 押金退得回来吗？",
                a: "可以。设备完好归还后，押金全额退还。押金的作用是确认您的租用名额，锁定其中一台可用设备。",
              },
              {
                q: "IZON 真的有效吗？",
                a: "IZON 设备已获马来西亚医疗器材局（MDA）注册（执照号 GA1448221-77276），并持有美国 FDA 及 ISO 13485 认证。马来西亚用户持续使用 2 至 3 个月后报告了可量化的视力改善，包括近视度数减少。效果因人而异——租用计划正是为了让您亲自验证，而不是只凭我们的说法。",
              },
              {
                q: "3 个月后怎么办？",
                a: "完成初始 3 个月（每月 RM399）后，月租费降至 RM299。您可以选择继续月租、购买设备，或归还设备。初始期满后无需长期绑定。",
              },
              {
                q: "顾问支持包含哪些内容？",
                a: "租用期间，我会通过 WhatsApp 提供全程陪伴，包括训练指导、使用答疑、定期进度跟进。您不是独自摸索，而是有人带着您一步步来。",
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
              准备好给孩子试试了吗？
            </h2>
            <p className="text-slate-300/88 text-[0.95rem] md:text-[1.06rem] leading-[1.68] mb-7 font-medium max-w-[480px] mx-auto">
              WhatsApp 联系我，查询可用名额、提问，或缴交押金锁定您的设备。
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-[#060e0c] font-[800] text-[1rem] tracking-tight transition-all duration-200 shadow-[0_8px_28px_rgba(16,185,129,0.28)] hover:shadow-[0_12px_36px_rgba(16,185,129,0.42)] hover:scale-[1.02]"
            >
              <MessageCircle size={18} strokeWidth={2.5} />
              WhatsApp 咨询租用
            </a>
            <p className="text-slate-500 text-[12px] mt-3">名额有限 · RM500 押金锁定名额</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
