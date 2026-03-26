"use client";

import React from 'react';
import { trackWhatsAppCtaClick } from "@/lib/tracking";
type FinancialComparisonProps = {
    trialLabel?: string;
    trialHref?: string;
};

export default function FinancialComparison({
    trialLabel = 'Lock In RM49 Assessment',
    trialHref = '#enrollment',
}: FinancialComparisonProps) {
    const rows = [
        {
            id: 1,
            name: "Keep Changing Glasses",
            desc: "Repeated glasses changes over time can add up, especially as eye power continues to rise.",
            price: "15,000+",
            type: "loss",
            perPersonLabel: "(long-term passive spending)"
        },
        {
            id: 2,
            name: "Myopia Control Lenses",
            desc: "Over the years, replacement and ongoing care can add up to a high long-term cost.",
            price: "15,000",
            type: "loss",
            perPersonLabel: "(ongoing per-person cost)"
        },
        {
            id: 3,
            name: "OK Lenses / Contact Lenses",
            desc: "Replacement, maintenance, and daily care costs can build up over time.",
            price: "12,000",
            type: "loss",
            perPersonLabel: "(ongoing maintenance cost)"
        },
        {
            id: 4,
            name: "Eye Supplements",
            desc: "Monthly supplements may seem smaller at first, but the cost can build up over time.",
            price: "9,000",
            type: "loss",
            perPersonLabel: "(long-term daily spending)"
        },
        {
            id: 5,
            name: "IZON Visual Training",
            desc: "First assessment today: 40 minutes with 1-to-1 guided support",
            price: "49",
            type: "win",
            perPersonLabel: "first assessment",
            remark: "A lower-cost first step before committing to years of trial and error."
        }
    ];

    return (
        <section className="relative py-12 md:py-20 bg-[#121416] overflow-hidden">
            {/* Ambient Background Light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-[1200px] w-[90vw] mx-auto relative z-10">
                <div className="text-center mb-7 md:mb-10">
                    <h2 className="mb-4 md:mb-5 font-[900] tracking-tight text-white">
                        <span className="mx-auto block max-w-[19.8rem] text-[1.72rem] leading-[1.12] md:hidden">
                            How Much Will
                            <br />
                            Trial and Error Cost
                            <br />
                            Over Time?
                        </span>
                        <span className="hidden md:block md:text-[2.62rem] md:leading-[1.12]">
                            How Much Will Trial and Error Cost Over Time?
                        </span>
                    </h2>
                    <p className="text-slate-400/92 text-[1rem] md:text-[1.15rem] leading-[1.65] max-w-[44rem] mx-auto font-medium">
                        Over the years, many families spend more than expected on repeated glasses changes and ongoing eye-care costs. A lower-cost first assessment can help you choose a better direction earlier.
                    </p>
                </div>

                {/* 3D Frosted Glass Card */}
                <div className="relative backdrop-blur-[20px] bg-white/[0.02] border border-white/10 rounded-[2rem] p-4 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden mb-10 md:mb-14 max-w-[1000px] mx-auto">
                    {/* Inner Highlights */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none"></div>
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                    <div className="flex flex-col space-y-2.5 relative z-10">
                        {rows.map((row) => (
                            <div
                                key={row.id}
                                className={`flex flex-col md:flex-row items-start md:items-center justify-between p-4 md:p-6 rounded-2xl transition-all ${row.type === 'win'
                                    ? 'bg-emerald-500/10 border border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.15)] mt-4'
                                    : 'bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.025]'
                                    }`}
                            >
                                <div className="grid w-full grid-cols-[minmax(0,1fr)_7.8rem] gap-x-3 gap-y-3 md:grid-cols-[minmax(0,1fr)_12.5rem] md:items-center">
                                    <div className="min-w-0 pr-1 md:pr-3">
                                        <div className="min-w-0 max-w-[16.25rem] md:max-w-none">
                                            <h3 className={`${row.type === 'win' ? 'text-[1.03rem] md:text-[2.05rem] font-bold text-emerald-300' : 'text-[0.98rem] md:text-[1.34rem] font-semibold text-slate-200/95'} mb-1.5 tracking-[0.01em] leading-snug`}>
                                                {row.name}
                                            </h3>
                                            <p className={`${row.type === 'win' ? 'text-emerald-100/78' : 'text-slate-300/84'} text-[13px] md:text-[14.5px] leading-[1.6] max-w-[25ch] md:max-w-[42ch]`}>
                                                {row.desc}
                                            </p>
                                        </div>
                                    </div>

                                    <div className={`w-[7.8rem] md:w-[12.5rem] flex flex-col justify-center self-center rounded-[18px] bg-white/[0.02] px-3.5 py-3 text-center md:self-center md:border-l md:border-white/[0.05] md:rounded-none md:bg-transparent md:px-0 md:py-0 md:pl-7 md:items-end md:text-right`}>
                                        <div className={`inline-flex items-baseline justify-center md:justify-end gap-[0.2rem] ${row.type === 'win' ? 'text-emerald-300' : 'text-slate-300/95'}`}>
                                            <span className={`${row.type === 'win' ? 'text-[0.8rem] md:text-[1.28rem]' : 'text-[0.76rem] md:text-[1.12rem]'} font-bold leading-none`}>RM</span>
                                            <span className={`${row.type === 'win' ? 'text-[1.28rem] md:text-[3.28rem]' : 'text-[1.18rem] md:text-[2.9rem]'} font-[900] tracking-tight leading-none`}>
                                                {row.price}
                                            </span>
                                        </div>
                                        {row.type === 'win' && (
                                            <div className="mt-1 text-[11px] sm:text-xs font-semibold tracking-[0.08em] text-emerald-200/92 text-center md:text-right">
                                                {row.perPersonLabel}
                                            </div>
                                        )}
                                        {row.type === 'win' && row.remark && (
                                            <div className="hidden md:block mt-2.5 text-emerald-100/76 text-[11px] md:text-[12px] leading-[1.45] max-w-[220px] text-right font-medium">
                                                {row.remark}
                                            </div>
                                        )}
                                    </div>

                                    {row.type === 'win' && row.remark && (
                                        <div className="col-span-2 pt-0.5 text-center text-emerald-100/78 text-[11px] md:text-[12px] leading-tight font-medium md:hidden">
                                            {row.remark}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Final RM49 Button - Breathing Glow */}
                <div id="comparison-cta" data-cta-zone="true" className="flex justify-center relative z-20">
                    <a
                        href={trialHref}
                        target={trialHref.startsWith('http') ? '_blank' : undefined}
                        rel={trialHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                        onClick={(event) =>
                            trackWhatsAppCtaClick({
                                ctaLocation: "financial-comparison",
                                ctaLabel: trialLabel,
                                href: trialHref,
                            }, event)
                        }
                        className="relative group inline-block no-underline"
                    >
                        {/* Hero breathing glow behind the button */}
                        <div className="absolute inset-0 bg-emerald-500 rounded-full blur-[25px] opacity-50 group-hover:opacity-100 animate-pulse transition-opacity duration-1000"></div>

                        <span className="relative whitespace-nowrap px-8 py-4 md:px-12 md:py-5 bg-emerald-500 text-emerald-950 font-[900] text-[0.98rem] md:text-2xl tracking-[0.06em] md:tracking-wider rounded-full hover:bg-emerald-400 transition-all shadow-[0_0_40px_rgba(16,185,129,0.3)] flex items-center gap-2.5 md:gap-3">
                            {trialLabel}
                            <div className="bg-emerald-900/10 rounded-full p-1 border border-emerald-900/20">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </div>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}
