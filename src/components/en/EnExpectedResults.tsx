import React from 'react';
import { Trophy, GraduationCap, Eye } from 'lucide-react';

export default function ExpectedResults() {
    const containerClass = "max-w-[1600px] w-[90vw] mx-auto px-8 md:px-12 relative z-10";
    const benefits = [
        {
            icon: <Trophy size={28} />,
            title: "Better Sports Response",
            desc: "More stable reaction and coordination during ball sports and movement."
        },
        {
            icon: <GraduationCap size={28} />,
            title: "Easier Reading & Screen Use",
            desc: "Reading and screen time may feel more comfortable and less tiring."
        },
        {
            icon: <Eye size={28} />,
            title: "Better Long-Term Support",
            desc: "Not just clearer vision now, but better support for long-term visual comfort."
        }
    ];

    return (
        <section id="expected-results" className="pt-12 pb-8 md:pt-20 md:pb-10 bg-[#121416]">
            <div className={containerClass}>
                <div>
                    <div className="mx-auto mb-4 md:mb-5 max-w-[1320px] flex flex-col items-center text-center">
                        <div className="nurture-tag mx-auto w-fit text-sm md:text-base px-4 py-1.5">Real-World Improvements</div>
                        <h2 className="mt-3 mb-3 text-center font-[900] tracking-tight text-white leading-[1.08]">
                            <span className="mx-auto block max-w-[20.6rem] text-[2.02rem] md:hidden">
                                More than slowing progression
                                <br />
                                helping daily vision
                                <br />
                                feel easier
                            </span>
                            <span className="hidden md:block md:max-w-[1020px] md:text-[3.05rem] md:leading-[1.1]">
                                More Than Slowing Progression — Helping Daily Vision Feel Easier
                            </span>
                        </h2>
                        <p className="text-slate-300/92 font-medium text-[16px] md:text-[17px] max-w-[22rem] md:max-w-[760px] leading-[1.6] md:leading-relaxed mx-auto">
                            <span className="block md:inline">Reading, sports, and daily eye use should gradually feel easier and more comfortable.</span>
                        </p>
                    </div>
                    <div className="max-w-[1380px] mx-auto">
                        <div className="md:hidden grid grid-cols-1 gap-3">
                            {benefits.map((benefit, i) => (
                                <div key={i} className="glass-panel px-5 py-[1.1rem] bg-white/[0.02] border-white/[0.05] transition-all duration-300 relative flex flex-col rounded-[22px] min-h-[176px]">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.04),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.16),transparent_42%)] pointer-events-none" />
                                    <div className="relative z-10 flex flex-col items-center text-center">
                                        <div className="flex items-center justify-center gap-2.5 mb-2.5">
                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-emerald-500/16 bg-emerald-500/[0.05] text-emerald-300">
                                                {benefit.icon}
                                            </div>
                                            <h4 className="text-[1.16rem] leading-[1.18] font-[900] tracking-tight text-white">{benefit.title}</h4>
                                        </div>
                                        <p className="text-slate-300/94 text-[14.5px] leading-[1.55] font-medium mx-auto max-w-[20rem]">
                                            {benefit.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
                            {benefits.map((benefit, i) => (
                                <div key={i} className="glass-panel px-5 py-5 md:px-6 md:py-[1.35rem] bg-white/[0.02] border-white/[0.05] transition-all duration-300 relative flex flex-col rounded-[22px] h-full md:min-h-[224px]">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.04),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.16),transparent_42%)] pointer-events-none" />
                                    <div className="relative z-10 flex h-full flex-col items-center text-center">
                                        <div className="flex items-center justify-center gap-2.5 mb-2.5">
                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-emerald-500/16 bg-emerald-500/[0.05] text-emerald-300">
                                                {benefit.icon}
                                            </div>
                                            <h4 className="max-w-[14ch] text-[1.24rem] md:text-[1.34rem] leading-[1.18] font-[900] tracking-tight text-white">{benefit.title}</h4>
                                        </div>
                                        <p className="text-slate-300 text-[15.5px] md:text-[16px] leading-[1.55] md:leading-[1.62] font-medium max-w-[37ch] mx-auto">
                                            {benefit.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
