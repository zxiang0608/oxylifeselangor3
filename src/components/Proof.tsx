"use client";

import React from 'react';
import Image from 'next/image';

export default function ProofSection() {
    const containerClass = "max-w-[1600px] w-[90vw] mx-auto px-8 md:px-12 relative z-10";
    const testimonials = [
        {
            metrics: [{ label: "近视改善", value: "-125度" }, { label: "散光改善", value: "-75度" }],
            duration: "使用 3个月",
            quote: "“当初是为了女儿的散光买的，没想到近视降了这么多。之前验光师说只能戴眼镜，现在每次去验光，验光师都觉得不可思议。”",
            name: "Suenn",
            bio: "13岁 (学生)",
            imageSrc: "/images/Suenn.png",
            imagePosition: "center 32%",
        },
        {
            metrics: [{ label: "近视改善", value: "-100度" }, { label: "老花改善", value: "+75度" }],
            duration: "全家使用 • 2个月",
            quote: "“都说成年人视力没救了。我跟着孩子一起练，才2个月，看手机真的不用拿那么远了。一台机器全家受惠，这笔钱花得太值了。”",
            name: "Ms Tan",
            bio: "44岁 (妈妈/职员)",
            imageSrc: "/images/Tan.png",
            imagePosition: "center 24%",
        },
        {
            metrics: [{ label: "近视改善", value: "-100度" }],
            duration: "使用 2个月",
            quote: "“到了50岁以为就这样了，没想到还能逆转，坚持几分钟也不累，去验光时验光师都吓了一跳。物理训练真的很神奇。”",
            name: "Ms Joon",
            bio: "52岁 (退休)",
            imageSrc: "/images/Joon.png",
            imagePosition: "center 18%",
        }
    ];

    return (
        <section id="proof" className="py-12 md:py-20">
            <div className={containerClass}>
                {/* TESTIMONIALS (CASE STUDIES) */}
                <div className="max-w-[1000px] mx-auto text-center mb-9 md:mb-12">
                    <div className="nurture-tag text-center w-full justify-center mb-4">用户真实反馈</div>
                    <h2 className="text-[2.2rem] md:text-[3rem] font-[900] tracking-tighter mb-4 text-white">真实见证</h2>
                </div>

                <div className="md:hidden relative text-left">
                    <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pr-16 pb-2 no-scrollbar">
                        {testimonials.map((t, i) => (
                            <div key={i} className="glass-panel w-[82vw] max-w-[20.5rem] shrink-0 snap-start p-5 bg-white/[0.02] border border-white/5 hover:border-emerald-500/24 transition-all duration-300 flex flex-col relative overflow-hidden group">
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
                                        <div className="mt-1 text-[11px] text-slate-400 leading-relaxed">{t.bio}</div>
                                        <div className="mt-2 inline-flex w-fit items-center gap-1.5 text-[10px] font-medium tracking-[0.08em] text-emerald-200/82">
                                            <span className="text-emerald-300/90">•</span>
                                            已验证反馈
                                        </div>
                                    </div>
                                </div>

                                <div className="relative mt-4 flex flex-1 flex-col">
                                    <div className="px-1 pt-1">
                                        <div className="mb-3 h-px w-full bg-gradient-to-r from-white/0 via-white/8 to-white/0" />
                                        <p className="text-slate-200 text-[14.5px] leading-6 italic">
                                            {t.quote}
                                        </p>
                                    </div>

                                    <div className="mt-5 rounded-[22px] border border-emerald-500/10 bg-gradient-to-br from-emerald-900/40 to-emerald-950/20 p-4 transition-colors group-hover:border-emerald-500/20">
                                        <div className="flex justify-center items-end gap-4 mb-3 w-fit mx-auto">
                                            {t.metrics.map((m, idx) => (
                                                <div key={idx} className="text-center">
                                                    <div className="text-[1.7rem] font-[900] text-emerald-400 tracking-tighter leading-none mb-1">{m.value}</div>
                                                    <div className="text-[11px] font-bold text-emerald-500/80 uppercase tracking-widest">{m.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex justify-center -mb-7 relative z-10">
                                            <span className="text-[10px] font-bold tracking-[0.12em] text-[#020617] bg-emerald-400 px-3.5 py-1.5 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.24)]">
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
                        <span>向右滑动查看更多</span>
                        <span className="text-slate-600">1/3</span>
                    </div>
                </div>

                <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-left">
                    {testimonials.map((t, i) => (
                        <div key={i} className="glass-panel p-5 md:p-8 bg-white/[0.02] border border-white/5 hover:border-emerald-500/24 transition-all duration-300 flex flex-col relative overflow-hidden group">
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
                                    <div className="mt-1 text-[11px] md:text-[12px] text-slate-400 leading-relaxed">{t.bio}</div>
                                    <div className="mt-2 inline-flex w-fit items-center gap-1.5 text-[10px] font-medium tracking-[0.08em] text-emerald-200/82">
                                        <span className="text-emerald-300/90">•</span>
                                        已验证反馈
                                    </div>
                                </div>
                            </div>

                            <div className="relative mt-4 md:mt-6 flex flex-1 flex-col">
                                <div className="px-1 pt-1">
                                    <div className="mb-3 h-px w-full bg-gradient-to-r from-white/0 via-white/8 to-white/0" />
                                    <p className="text-slate-200 text-[14.5px] md:text-[16px] leading-6 md:leading-7 italic">
                                        {t.quote}
                                    </p>
                                </div>

                                <div className="mt-5 rounded-[22px] border border-emerald-500/10 bg-gradient-to-br from-emerald-900/40 to-emerald-950/20 p-4 md:p-6 transition-colors group-hover:border-emerald-500/20">
                                    <div className={`flex ${t.metrics.length > 1 ? 'justify-center' : 'justify-center'} items-end gap-4 md:gap-8 mb-3 w-fit mx-auto`}>
                                        {t.metrics.map((m, idx) => (
                                            <div key={idx} className="text-center">
                                                <div className="text-[1.7rem] md:text-4xl font-[900] text-emerald-400 tracking-tighter leading-none mb-1">{m.value}</div>
                                                <div className="text-[11px] font-bold text-emerald-500/80 uppercase tracking-widest">{m.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex justify-center -mb-7 md:-mb-9 relative z-10">
                                        <span className="text-[10px] font-bold tracking-[0.12em] text-[#020617] bg-emerald-400 px-3.5 py-1.5 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.24)]">
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
