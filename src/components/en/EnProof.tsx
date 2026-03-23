"use client";

import React from 'react';
import Image from 'next/image';

export default function ProofSection() {
    const containerClass = "max-w-[1600px] w-[90vw] mx-auto px-8 md:px-12 relative z-10";
    const testimonials = [
        {
            metrics: [{ label: "Myopia improvement", value: "-125" }, { label: "Astigmatism improvement", value: "-75" }],
            duration: "Used for 3 months",
            quote: "“We first started because of my daughter’s astigmatism. We did not expect her eye power to improve this much. Even the optometrist was surprised during follow-up.”",
            name: "Suenn",
            bio: "13 years old (student)",
            imageSrc: "/images/Suenn.png",
            imagePosition: "center 32%",
        },
        {
            metrics: [{ label: "Myopia improvement", value: "-100" }, { label: "Near vision improvement", value: "+75" }],
            duration: "Family use • 2 months",
            quote: "“I used it together with my child. After about 2 months, using my phone felt easier. The short routine made it much easier to keep going.”",
            name: "Ms Tan",
            bio: "44 years old (mother/staff)",
            imageSrc: "/images/Tan.png",
            imagePosition: "center 24%",
        },
        {
            metrics: [{ label: "Myopia improvement", value: "-100" }],
            duration: "Used for 2 months",
            quote: "“At 50, I did not expect much change. But the routine was short and manageable, and I was encouraged by the improvement.”",
            name: "Ms Joon",
            bio: "52 years old (retired)",
            imageSrc: "/images/Joon.png",
            imagePosition: "center 18%",
        }
    ];

    return (
        <section id="proof" className="pt-8 pb-12 md:pt-12 md:pb-20">
            <div className={containerClass}>
                {/* TESTIMONIALS (CASE STUDIES) */}
                <div className="max-w-[1000px] mx-auto text-center mb-9 md:mb-12">
                    <div className="nurture-tag text-center w-full justify-center mb-4">Real Family Feedback</div>
                    <h2 className="text-[2.2rem] md:text-[3rem] font-[900] tracking-tighter mb-4 text-white">Testimonials</h2>
                </div>

                <div className="md:hidden relative text-left">
                    <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pr-16 pb-2 no-scrollbar">
                        {testimonials.map((t, i) => (
                            <div key={i} className="glass-panel w-[82vw] max-w-[20.5rem] shrink-0 snap-start p-5 bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 transition-all duration-300 flex flex-col relative group">
                                <div className="flex items-center justify-center gap-3 text-center">
                                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[24px] border border-white/10 bg-slate-900 shadow-[0_18px_30px_rgba(0,0,0,0.28),0_0_0_1px_rgba(255,255,255,0.03)] ring-1 ring-emerald-400/12">
                                        <Image
                                            src={t.imageSrc}
                                            alt={t.name}
                                            fill
                                            sizes="80px"
                                            className="object-cover"
                                            style={{ objectPosition: t.imagePosition }}
                                        />
                                        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_52%,rgba(4,8,15,0.18)_100%)]" />
                                    </div>

                                    <div className="min-w-0 pt-1 flex flex-col items-center">
                                        <div className="text-[1.08rem] font-semibold tracking-tight text-white">{t.name}</div>
                                        <div className="mt-0.5 text-[11px] text-slate-400 leading-relaxed">{t.bio}</div>
                                        <div className="mt-2 inline-flex w-fit items-center gap-1.5 text-[10px] font-medium tracking-[0.08em] text-emerald-200/82">
                                            <span className="text-emerald-300/90">•</span>
                                            Customer feedback
                                        </div>
                                    </div>
                                </div>

                                <div className="relative mt-4 flex flex-1 flex-col">
                                    <div className="px-1 pt-1">
                                        <div className="mb-3 h-px w-full bg-gradient-to-r from-white/0 via-white/8 to-white/0" />
                                        <p className="text-slate-100/92 text-[14.5px] leading-6 font-medium">
                                            {t.quote}
                                        </p>
                                    </div>

                                    <div className="mt-5 rounded-[22px] border border-emerald-500/8 bg-gradient-to-br from-emerald-900/26 to-emerald-950/14 p-4 transition-colors group-hover:border-emerald-500/14">
                                        <div className="flex justify-center items-end gap-4 mb-3 w-fit mx-auto">
                                            {t.metrics.map((m, idx) => (
                                                <div key={idx} className="text-center">
                                                    <div className="text-[1.58rem] font-[900] text-emerald-300/90 tracking-tight leading-none mb-1">{m.value}</div>
                                                    <div className="text-[10.5px] font-semibold text-emerald-200/74 tracking-[0.08em]">{m.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex justify-center -mb-7 relative z-10">
                                            <span className="text-[10px] font-semibold tracking-[0.1em] text-emerald-100 bg-emerald-900/58 border border-emerald-400/22 px-3.5 py-1.5 rounded-full">
                                                {t.duration}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="pointer-events-none absolute right-1 top-[43%] -translate-y-1/2">
                        <div className="swipe-nudge flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-[#0c1320]/88 text-white/78 shadow-[0_14px_28px_rgba(0,0,0,0.28)] backdrop-blur-md">
                            <span className="text-lg leading-none">→</span>
                        </div>
                    </div>
                    <div className="mt-2 flex items-center justify-center gap-2 text-[12px] font-medium tracking-[0.04em] text-slate-500">
                        <div className="flex items-center gap-1.5">
                            <span className="h-1.5 w-4 rounded-full bg-emerald-400/90"></span>
                            <span className="h-1.5 w-1.5 rounded-full bg-slate-600"></span>
                            <span className="h-1.5 w-1.5 rounded-full bg-slate-600"></span>
                        </div>
                        <span>Swipe to view more</span>
                        <span className="text-slate-600">1/3</span>
                    </div>
                </div>

                <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-left">
                    {testimonials.map((t, i) => (
                        <div key={i} className="glass-panel p-5 md:p-8 bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 transition-all duration-300 flex flex-col relative group h-full">
                            <div className="flex items-center justify-center gap-3 md:gap-5 text-center">
                                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[24px] border border-white/10 bg-slate-900 shadow-[0_18px_30px_rgba(0,0,0,0.28),0_0_0_1px_rgba(255,255,255,0.03)] ring-1 ring-emerald-400/12 md:h-28 md:w-28 md:rounded-[30px]">
                                    <Image
                                        src={t.imageSrc}
                                        alt={t.name}
                                        fill
                                        sizes="80px"
                                        className="object-cover"
                                        style={{ objectPosition: t.imagePosition }}
                                    />
                                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_52%,rgba(4,8,15,0.18)_100%)]" />
                                </div>

                                <div className="min-w-0 pt-1 flex flex-col items-center">
                                    <div className="text-[1.08rem] md:text-[1.24rem] font-semibold tracking-tight text-white">{t.name}</div>
                                    <div className="mt-0.5 text-[11px] md:text-[12px] text-slate-400 leading-relaxed">{t.bio}</div>
                                    <div className="mt-2 inline-flex w-fit items-center gap-1.5 text-[10px] font-medium tracking-[0.08em] text-emerald-200/82">
                                        <span className="text-emerald-300/90">•</span>
                                        Customer feedback
                                    </div>
                                </div>
                            </div>

                            <div className="relative mt-4 md:mt-6 flex flex-1 flex-col">
                                <div className="px-1 pt-1">
                                    <div className="mb-3 h-px w-full bg-gradient-to-r from-white/0 via-white/8 to-white/0" />
                                    <p className="text-slate-100/92 text-[14.5px] md:text-[15.5px] leading-6 md:leading-7 font-medium">
                                        {t.quote}
                                    </p>
                                </div>

                                <div className="mt-5 rounded-[22px] border border-emerald-500/8 bg-gradient-to-br from-emerald-900/26 to-emerald-950/14 p-4 md:p-5 transition-colors group-hover:border-emerald-500/14">
                                    <div className={`flex ${t.metrics.length > 1 ? 'justify-center' : 'justify-center'} items-end gap-4 md:gap-8 mb-3 w-fit mx-auto`}>
                                        {t.metrics.map((m, idx) => (
                                            <div key={idx} className="text-center">
                                                <div className="text-[1.58rem] md:text-[2rem] font-[900] text-emerald-300/90 tracking-tight leading-none mb-1">{m.value}</div>
                                                <div className="text-[10.5px] md:text-[11px] font-semibold text-emerald-200/74 tracking-[0.08em]">{m.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex justify-center -mb-7 md:-mb-9 relative z-10">
                                        <span className="text-[10px] font-semibold tracking-[0.1em] text-emerald-100 bg-emerald-900/58 border border-emerald-400/22 px-3.5 py-1.5 rounded-full">
                                            {t.duration}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
