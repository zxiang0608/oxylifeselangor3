import React from 'react';
import Image from 'next/image';
import { Stethoscope, Quote } from 'lucide-react';

export default function DoctorEndorsement() {
    const containerClass = "max-w-[1600px] w-[90vw] mx-auto px-8 md:px-12 relative z-10";

    const doctors = [
        {
            name: "Dr Tai Weng Yew",
            title: "Doctor of Medicine (MD)",
            quote: "From my observation, the IZON routine supports visual training and day-to-day eye regulation. With consistent use, I noticed improved visual comfort and performance.",
            image: "/images/DrTai Background Removed.png",
            accent: "from-emerald-500/16 via-slate-900/34 to-cyan-500/12",
        },
        {
            name: "Dr Kelvin Lew",
            title: "PhD in Molecular Medicine",
            quote: "After consistent usage, I observed better distance clarity and daily visual performance. To me, it is a practical visual training method that people can sustain.",
            image: "/images/DrKelvin Background Removed.png",
            accent: "from-cyan-500/14 via-slate-900/34 to-emerald-500/10",
        },
        {
            name: "Dr Kavitha Nowroji",
            title: "PhD in Molecular Medicine",
            quote: "After a period of use, I felt improved clarity and comfort during focused visual tasks. Overall, daily eye use felt easier than before.",
            image: "/images/DrKavitha.png",
            accent: "from-emerald-500/14 via-slate-900/34 to-sky-500/10",
        },
    ];

    return (
        <section className="py-12 md:py-20 relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#142B23] opacity-[0.10] blur-[200px] pointer-events-none"></div>

            <div className={containerClass}>
                {/* Header */}
                <div className="text-center mb-10 md:mb-16 max-w-[900px] mx-auto">
                    <div className="nurture-tag justify-center mx-auto w-fit mb-4">
                        <Stethoscope size={14} className="text-emerald-400" />
                        Professional Perspectives
                    </div>
                    <h2 className="text-[2.2rem] md:text-[3rem] font-[900] tracking-tighter mb-5 leading-[1.1] text-white">
                        More than technology,<br className="md:hidden" />
                        it also has<span className="text-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]"> professional support.</span>
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed">
                        Real views from professionals on the IZON training method.
                    </p>
                </div>

                {/* Doctor Cards */}
                <div className="md:hidden relative">
                <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pr-14 pb-2 no-scrollbar">
                    {doctors.map((doctor, index) => (
                        <div
                            key={index}
                            className="glass-panel w-[77vw] max-w-[19rem] shrink-0 snap-start px-5 pb-5 pt-5 flex h-full flex-col relative overflow-hidden border-white/[0.06] bg-[linear-gradient(180deg,rgba(255,255,255,0.025),rgba(255,255,255,0.01))] shadow-[0_16px_36px_rgba(0,0,0,0.16)] transition-all duration-500"
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.04),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.16),transparent_42%)] pointer-events-none" />
                            <div className="absolute inset-[1px] rounded-[15px] border border-white/[0.025] pointer-events-none" />
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent pointer-events-none" />

                            <div className="relative z-10 flex h-full flex-col">
                                <div className="w-full">
                                    <div className="flex items-center gap-4">
                                        <div className="relative h-[5.5rem] w-[5.5rem] shrink-0 overflow-hidden rounded-full border border-white/[0.08] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.12),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(15,23,42,0.3))] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                                            <div className={`absolute inset-0 bg-gradient-to-br ${doctor.accent} opacity-60`} />
                                            <Image
                                                src={doctor.image}
                                                alt={doctor.name}
                                                fill
                                                className="object-contain object-center scale-[1.04]"
                                                sizes="88px"
                                            />
                                        </div>
                                        <div className="min-w-0 flex-1 text-left">
                                            <p className="text-white font-semibold text-[1.02rem] leading-snug tracking-tight">{doctor.name}</p>
                                            <p className="mt-1.5 text-slate-400/92 text-[13px] leading-relaxed">{doctor.title}</p>
                                        </div>
                                    </div>

                                    <div className="mt-4 border-t border-white/[0.06] pt-3.5">
                                        <div className="flex items-center gap-2 text-emerald-300/68">
                                            <Quote size={17} className="shrink-0" />
                                            <div className="h-px flex-1 bg-gradient-to-r from-emerald-300/18 to-transparent" />
                                        </div>
                                        <p className="mt-3 text-slate-200 text-[15px] leading-[1.65rem] font-medium">
                                            &ldquo;{doctor.quote}&rdquo;
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pointer-events-none absolute right-1 top-[44%] -translate-y-1/2">
                    <div className="swipe-nudge flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-[#0c1320]/88 text-white/78 shadow-[0_14px_28px_rgba(0,0,0,0.28)] backdrop-blur-md">
                        <span className="text-lg leading-none">→</span>
                    </div>
                </div>
                <div className="mt-2 flex items-center justify-center gap-2 text-[12px] font-medium tracking-[0.06em] text-slate-500">
                    <div className="flex items-center gap-1.5">
                        <span className="h-1.5 w-4 rounded-full bg-emerald-400/90"></span>
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-600"></span>
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-600"></span>
                    </div>
                    <span>Swipe to view more</span>
                    <span className="text-slate-600">1/3</span>
                </div>
                </div>

                <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {doctors.map((doctor, index) => (
                        <div
                            key={index}
                            className="glass-panel px-6 pb-6 pt-5 md:px-7 md:pb-7 md:pt-5 flex h-full flex-col relative overflow-hidden border-white/[0.06] bg-[linear-gradient(180deg,rgba(255,255,255,0.025),rgba(255,255,255,0.01))] shadow-[0_16px_36px_rgba(0,0,0,0.16)] transition-all duration-500"
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.04),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.16),transparent_42%)] pointer-events-none" />
                            <div className="absolute inset-[1px] rounded-[15px] border border-white/[0.025] pointer-events-none" />
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent pointer-events-none" />

                            <div className="relative z-10 flex h-full flex-col">
                                <div className="w-full max-w-[35ch] mx-auto">
                                    <div className="flex items-center justify-center gap-5">
                                        <div className="relative h-[6.4rem] w-[6.4rem] shrink-0 overflow-hidden rounded-full border border-white/[0.08] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.12),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(15,23,42,0.3))] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                                            <div className={`absolute inset-0 bg-gradient-to-br ${doctor.accent} opacity-60`} />
                                            <Image
                                                src={doctor.image}
                                                alt={doctor.name}
                                                fill
                                                className="object-contain object-center scale-[1.04]"
                                                sizes="104px"
                                            />
                                        </div>
                                        <div className="min-w-0 flex max-w-[14rem] flex-col justify-center text-left">
                                            <p className="text-white font-semibold text-[1.1rem] leading-snug tracking-tight">{doctor.name}</p>
                                            <p className="mt-1.5 text-slate-400/92 text-[13px] leading-relaxed">{doctor.title}</p>
                                        </div>
                                    </div>

                                    <div className="mt-5 border-t border-white/[0.06] pt-4">
                                        <div className="flex items-center gap-2 text-emerald-300/68">
                                            <Quote size={17} className="shrink-0" />
                                            <div className="h-px flex-1 bg-gradient-to-r from-emerald-300/18 to-transparent" />
                                        </div>
                                        <p className="mt-3 text-slate-200 text-[15px] md:text-[16px] leading-7 font-medium">
                                            &ldquo;{doctor.quote}&rdquo;
                                        </p>
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
