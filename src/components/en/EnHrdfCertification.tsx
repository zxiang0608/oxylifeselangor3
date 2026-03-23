import React from 'react';
import Image from 'next/image';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

export default function HrdfCertification() {
    const containerClass = "max-w-[1600px] w-[90vw] mx-auto px-8 md:px-12 relative z-10";

    const checks = [
        {
            title: "Non-invasive",
            desc: "No direct contact with the eyeball.",
        },
        {
            title: "No long-term eye drops required",
            desc: "Reduces concerns about dependency and side effects.",
        },
        {
            title: "About 5 minutes per session",
            desc: "Can be done at home and is easier to keep up daily.",
        },
    ];

    const certItems = [
        "US FDA",
        "Korea KFDA",
        "ISO 13485",
    ];

    return (
        <section className="py-12 md:py-20 relative overflow-hidden bg-[#080E1A]">

            {/* God Rays / Tyndall light effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Ray 1 */}
                <div className="absolute top-0 left-[30%] w-[2px] h-full bg-gradient-to-b from-emerald-400/[0.06] via-emerald-500/[0.03] to-transparent blur-[6px] rotate-[15deg] origin-top" />
                {/* Ray 2 */}
                <div className="absolute top-0 left-[45%] w-[3px] h-full bg-gradient-to-b from-emerald-400/[0.04] via-emerald-500/[0.02] to-transparent blur-[8px] rotate-[8deg] origin-top" />
                {/* Ray 3 */}
                <div className="absolute top-0 left-[60%] w-[2px] h-full bg-gradient-to-b from-white/[0.04] via-white/[0.02] to-transparent blur-[6px] rotate-[18deg] origin-top" />
                {/* Ray 4 */}
                <div className="absolute top-0 left-[75%] w-[2px] h-full bg-gradient-to-b from-emerald-400/[0.05] via-transparent to-transparent blur-[5px] rotate-[12deg] origin-top" />
                {/* Deep sea ambient */}
                <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1200px] h-[600px] rounded-full bg-[#142B23] opacity-[0.12] blur-[200px]" />
            </div>

            <div className={containerClass}>
                <div className="max-w-[1560px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-6 items-center">

                    {/* LEFT — Safety Copy */}
                    <div className="relative p-1 md:p-3 flex justify-center">
                        <div className="relative z-10 max-w-[36rem] mx-auto text-center">
                            <div className="nurture-tag w-fit mb-5 md:mb-6 mx-auto">
                                <ShieldCheck size={14} className="text-emerald-400" />
                                Safety & Compliance
                            </div>

                            <h2 className="text-[2.12rem] md:text-[2.85rem] font-[900] tracking-tighter mb-4 md:mb-5 leading-[1.1] text-white mx-auto">
                                <span className="block">Safety First</span>
                            </h2>

                            <p className="text-slate-400 text-[16px] md:text-[18px] leading-relaxed font-medium mb-6 md:mb-8 max-w-[32ch] md:max-w-[35ch] mx-auto">
                                Because this is used regularly by children, safety, compliance, and traceability matter most.
                            </p>

                            <div className="space-y-[1.125rem] md:space-y-5 max-w-[25rem] mx-auto md:pl-6 text-left">
                                {checks.map((check, i) => (
                                    <div key={i} className="flex items-start gap-3.5 text-left">
                                        <CheckCircle2
                                            size={18}
                                            className="text-emerald-400 shrink-0 mt-0.5"
                                        />
                                        <div className="min-w-0">
                                            <p className="text-white text-[1.02rem] md:text-[1.12rem] font-semibold tracking-tight">{check.title}</p>
                                            <p className="mt-1 text-slate-400 text-[14px] md:text-[15px] leading-relaxed font-medium">{check.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CENTER — MDA Mark */}
                    <div className="relative flex items-center justify-center overflow-hidden p-1 md:p-3">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.04),transparent_62%)] blur-[24px] pointer-events-none" />
                        <div className="relative w-full max-w-[12.5rem] md:max-w-[23rem] h-full min-h-[15rem] md:min-h-[28rem]">
                            <Image
                                src="/images/mda.png"
                                alt="MDA"
                                fill
                                sizes="(min-width: 1024px) 23rem, 12.5rem"
                                className="object-contain object-center opacity-92 contrast-[0.94] brightness-[0.98] drop-shadow-[0_14px_34px_rgba(0,0,0,0.2)]"
                            />
                        </div>
                    </div>

                    {/* RIGHT — Compliance Card */}
                    <div className="relative flex justify-center">
                        <div className="absolute inset-0 bg-emerald-500/[0.035] blur-[72px] rounded-[32px] scale-110 pointer-events-none" />

                        <div className="relative glass-panel p-5 md:px-8 md:py-7 border-white/[0.08] transition-colors duration-500 text-left mx-auto">
                            <div className="w-full max-w-[27rem] mx-auto">
                                <p className="text-slate-500 text-[11px] font-semibold tracking-[0.18em] uppercase mb-5 md:mb-6 text-center">Registration & Compliance</p>

                                <div className="mb-5 md:mb-6 text-center">
                                    <p className="text-slate-400 text-[12px] font-semibold tracking-[0.16em] uppercase mb-2">MDA Registration No.</p>
                                    <p className="text-white text-[2rem] md:text-[3.45rem] font-[900] tracking-tight leading-none">
                                    GA1448221-77276
                                    </p>
                                    <p className="mt-2.5 md:mt-3 text-slate-500 text-[12px] md:text-[14px] leading-relaxed font-medium max-w-[22rem] mx-auto">
                                        Verifiable via Malaysia MMDR / MDA systems.
                                    </p>
                                </div>

                                <div className="border-t border-white/[0.06] pt-4 md:pt-[1.125rem] text-center">
                                    <p className="text-slate-500 text-[11px] font-semibold tracking-[0.14em] uppercase mb-2.5">Other Compliance References</p>
                                    <div className="space-y-2 max-w-[23rem] mx-auto">
                                        {certItems.map((item, i) => (
                                            <div key={i} className="text-slate-400 text-[13px] md:text-[14px] leading-relaxed font-medium">
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
