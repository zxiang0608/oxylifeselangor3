import React from 'react';
import { Target, Sparkles, Activity as MuscleIcon, Eye, ShieldCheck } from 'lucide-react';

export default function MechanismSection() {
    const containerClass = "max-w-[1600px] w-[90vw] mx-auto px-8 md:px-12 relative z-10";
    const methods = [
        {
            step: "01",
            icon: <MuscleIcon size={28} />,
            title: "Eye muscle coordination",
            subtitle: "Core step",
            mechanism: "Trains both eyes to move together more smoothly.",
            benefit: "Helps near-far switching feel easier with less strain."
        },
        {
            step: "02",
            icon: <Target size={28} />,
            title: "Near-far focus training",
            subtitle: "Core step",
            mechanism: "Trains the eyes to adjust more smoothly between near and far.",
            benefit: "Reading, screen use, and distance viewing may feel more natural."
        },
        {
            step: "03",
            icon: <Eye size={28} />,
            title: "Visual stimulation",
            subtitle: "Core step",
            mechanism: "Uses guided light-based stimulation to support visual response.",
            benefit: "Helps support steadier visual performance during daily use."
        },
        {
            step: "04",
            icon: <Sparkles size={28} />,
            title: "Pupil response training",
            subtitle: "Core step",
            mechanism: "Trains how the eyes respond to changing light.",
            benefit: "Helps vision feel more comfortable under different lighting conditions."
        }
    ];

    return (
        <section id="mechanism" className="py-12 md:py-20 relative">
            <div className={containerClass}>
                <div className="mb-8 md:mb-16 max-w-[1200px] mx-auto text-center">
                    <div className="nurture-tag justify-center w-full">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
                        FOUR-STEP VISUAL TRAINING
                    </div>
                    <h2 className="mb-4 md:mb-6 font-[900] tracking-tighter leading-[1.08] text-white">
                        <span className="mx-auto flex max-w-[15.5rem] flex-col items-center text-[2.05rem] md:hidden">
                                <span className="block w-full text-center">One Simple Routine.</span>
                            <span className="mt-1 block w-full text-center">Just a Few Minutes a Day.</span>
                        </span>
                        <span className="hidden md:block md:text-[3rem]">
                            <span className="whitespace-nowrap">One Simple Routine. Just a Few Minutes a Day.</span>
                        </span>
                    </h2>
                    <p className="text-slate-300 text-[1.05rem] md:text-xl max-w-[20rem] md:max-w-[640px] mx-auto font-medium leading-[1.55] md:leading-relaxed">
                        <span className="block md:inline whitespace-nowrap">About 5 minutes per session,</span>
                        <span className="block md:inline md:ml-1 whitespace-nowrap">with one guided flow from start to finish.</span>
                    </p>
                </div>

                <div className="max-w-[1380px] mx-auto mb-8 md:mb-12">
                    <p className="text-slate-300/92 text-[14px] md:text-lg max-w-[22rem] md:max-w-[940px] mx-auto text-center font-medium leading-[1.65] md:leading-relaxed mb-4 md:mb-7">
                        <span className="block md:inline">4 guided steps to support eye coordination,</span>
                        <span className="block md:inline md:ml-1">focusing, visual response, and adaptation to light changes.</span>
                    </p>

                    <div className="md:hidden relative">
                        <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pr-16 pb-2 no-scrollbar">
                            {methods.map((method, i) => (
                                <div key={i} className="glass-panel w-[82vw] max-w-[20.5rem] shrink-0 snap-start px-[18px] py-[18px] group border-white/[0.04] transition-all duration-500 flex flex-col relative overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.022),rgba(255,255,255,0.01))] shadow-[0_14px_34px_rgba(0,0,0,0.14)]">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.05),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.35),transparent_44%)] opacity-90"></div>
                                <div className="absolute inset-[1px] rounded-[23px] border border-white/[0.025]"></div>

                                <div className="relative z-10 mb-3.5">
                                    <span className="absolute right-0 top-0 text-[34px] font-[900] text-white/[0.04] leading-none select-none transition-colors duration-500">
                                        {method.step}
                                    </span>
                                    <div className="flex items-center gap-3 pr-6">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center self-center rounded-2xl border border-emerald-500/16 bg-emerald-500/[0.06] text-emerald-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                                            {method.icon}
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <span className="mb-0.5 block text-[10px] font-semibold tracking-[0.14em] text-slate-500/55">{method.subtitle}</span>
                                            <h4 className="text-[1.28rem] font-[900] tracking-tight leading-[1.08] text-white">{method.title}</h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative z-10 h-px max-w-[96%] bg-gradient-to-r from-white/[0.12] via-white/[0.07] to-transparent mb-3.5" />

                                <div className="relative z-10 flex flex-col gap-4">
                                    <div className="rounded-2xl bg-white/[0.02] px-3.5 py-3.5">
                                        <p className="mb-1 text-[10.5px] font-medium tracking-[0.06em] text-slate-500/68">How it works</p>
                                        <p className="max-w-[34ch] text-[16px] text-slate-100 leading-[1.62] font-semibold">{method.mechanism}</p>
                                    </div>
                                    <div className="rounded-2xl bg-white/[0.015] px-3.5 py-3.5">
                                        <p className="mb-1 text-[10.5px] font-medium tracking-[0.06em] text-slate-500/68">Why it matters</p>
                                        <p className="max-w-[34ch] text-[15.5px] text-slate-300 leading-[1.62] font-medium">{method.benefit}</p>
                                    </div>
                                </div>
                                </div>
                            ))}
                        </div>
                        <div className="pointer-events-none absolute right-1 top-[42%] -translate-y-1/2">
                            <div className="swipe-nudge flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-[#0c1320]/88 text-white/78 shadow-[0_14px_28px_rgba(0,0,0,0.28)] backdrop-blur-md">
                                <span className="text-lg leading-none">→</span>
                            </div>
                        </div>
                        <div className="mt-1.5 flex items-center justify-center gap-2 text-[12px] font-medium tracking-[0.04em] text-slate-500">
                            <div className="flex items-center gap-1.5">
                                <span className="h-1.5 w-4 rounded-full bg-emerald-400/90"></span>
                                <span className="h-1.5 w-1.5 rounded-full bg-slate-600"></span>
                                <span className="h-1.5 w-1.5 rounded-full bg-slate-600"></span>
                                <span className="h-1.5 w-1.5 rounded-full bg-slate-600"></span>
                            </div>
                            <span>Swipe to view more</span>
                            <span className="text-slate-600">1/4</span>
                        </div>
                    </div>

                    <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
                        {methods.map((method, i) => (
                            <div key={i} className="glass-panel pl-5 pr-4 py-6 md:pl-6 md:pr-5 md:py-7 group border-white/[0.05] transition-all duration-500 flex flex-col relative overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.025),rgba(255,255,255,0.01))] shadow-[0_16px_42px_rgba(0,0,0,0.16)]">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.05),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.35),transparent_44%)] opacity-90"></div>
                                <div className="absolute inset-[1px] rounded-[23px] border border-white/[0.025]"></div>

                                <div className="relative z-10 mb-4 md:mb-5">
                                    <span className="absolute right-1 top-1 text-[34px] md:text-[38px] lg:text-[42px] font-[900] text-white/[0.06] leading-none select-none transition-colors duration-500">
                                        {method.step}
                                    </span>
                                    <div className="flex items-center gap-4 md:gap-5 lg:gap-6 pr-4 md:pr-4 lg:pr-5">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center self-center rounded-2xl border border-emerald-500/18 bg-emerald-500/[0.06] text-emerald-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                                            {method.icon}
                                        </div>
                                        <div className="min-w-0 flex-1 pl-1 md:pl-2 lg:pl-3">
                                            <span className="mb-1.5 block text-[12px] md:text-[13px] font-semibold tracking-[0.14em] text-slate-500/58">{method.subtitle}</span>
                                            <h4 className="text-[1.62rem] md:text-[1.72rem] lg:text-[1.88rem] font-[900] tracking-tight leading-[1.08] text-white">{method.title}</h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative z-10 h-px max-w-[92%] bg-gradient-to-r from-white/[0.14] via-white/[0.08] to-transparent mb-4 md:mb-5" />

                                <div className="relative z-10 flex flex-col gap-5 md:gap-6">
                                    <div className="border-t border-white/[0.04] pt-4 first:border-t-0 first:pt-0">
                                        <div className="grid grid-cols-1 xl:grid-cols-[4.25rem_minmax(0,1fr)] gap-y-1.5 xl:gap-x-5 items-start">
                                            <span className="block self-start text-[12px] md:text-[12.5px] leading-6 md:leading-7 font-medium tracking-[0.06em] text-slate-500/68">How it works</span>
                                            <p className="text-[18.5px] md:text-[19px] text-slate-100 leading-8 md:leading-[2rem] font-semibold">{method.mechanism}</p>
                                        </div>
                                    </div>
                                    <div className="border-t border-white/[0.04] pt-4">
                                        <div className="grid grid-cols-1 xl:grid-cols-[4.25rem_minmax(0,1fr)] gap-y-1.5 xl:gap-x-5 items-start">
                                            <span className="block self-start text-[12px] md:text-[12.5px] leading-6 md:leading-7 font-medium tracking-[0.06em] text-slate-500/68">Why it matters</span>
                                            <p className="text-[17px] md:text-[17.5px] text-slate-300 leading-8 md:leading-[2rem] font-medium">{method.benefit}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* WOW Detail Panel */}
                <div className="mb-6 md:mb-10 flex flex-col items-center gap-3 text-center">
                    <div className="w-full max-w-[1380px] px-2 md:px-10">
                        <div className="flex flex-col items-center gap-3">
                            <div className="md:hidden w-full flex justify-center">
                                <div className="relative w-full max-w-[22.5rem]">
                                    <div className="absolute inset-x-5 inset-y-1 rounded-full bg-emerald-500/18 blur-[26px] opacity-75"></div>
                                    <div className="relative flex items-center justify-center rounded-full border border-emerald-400/18 bg-[linear-gradient(180deg,rgba(17,34,33,0.96),rgba(10,19,24,0.96))] px-5 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_18px_38px_rgba(4,14,18,0.42),0_0_24px_rgba(16,185,129,0.12)]">
                                        <p className="whitespace-nowrap text-center text-[0.94rem] font-bold tracking-tight leading-none text-white">
                                            Session flow: Press start → 5 minutes of guided training → End session.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden md:flex items-center justify-center gap-3 text-white">
                                <div className="w-10 h-10 rounded-full bg-emerald-500/16 flex items-center justify-center shrink-0 border border-emerald-500/18">
                                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse drop-shadow-[0_0_8px_rgba(16,185,129,1)]"></div>
                                </div>
                                <p className="text-[1.7rem] font-bold tracking-tight leading-snug max-w-[20rem] md:max-w-none">
                                    <span className="hidden md:inline">Session flow: Press start <span className="text-emerald-400 mx-1.5 md:mx-2 font-black">→</span> 5 minutes of guided training <span className="text-emerald-400 mx-1.5 md:mx-2 font-black">→</span> End session.</span>
                                </p>
                            </div>

                            <div className="hidden md:flex flex-wrap gap-2 items-center justify-center">
                                <span className="flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-[0.14em] text-emerald-300">
                                    <ShieldCheck size={13} /> 0 direct eye contact
                                </span>
                                <span className="flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-[0.14em] text-emerald-300">
                                    <ShieldCheck size={13} /> 0 medication involved
                                </span>
                                <span className="flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-[0.14em] text-emerald-300">
                                    <ShieldCheck size={13} /> 0 hidden extra cost
                                </span>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}
