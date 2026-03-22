"use client";

import React, { useState, useEffect, useRef } from 'react';
import {
    Users, Check, AlertCircle, Wind, Focus, Layers, ChevronDown, ShieldCheck
} from 'lucide-react';

export default function Hero() {
    const [isFlashing, setIsFlashing] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: 0, y: 0 });

    // Assets
    const deviceMain = "/device-render.png";

    // Three.js Canvas Removed to fit Deep Water aesthetic

    // Flash Photography Logic
    useEffect(() => {
        const flashInterval = setInterval(() => {
            setIsFlashing(true);
            setTimeout(() => setIsFlashing(false), 150);
        }, 8000);

        return () => clearInterval(flashInterval);
    }, []);

    const containerClass = "max-w-[1600px] w-[90vw] mx-auto px-6 sm:px-8 md:px-12 relative z-10";

    return (
        <>
            <div
                className="fixed inset-0 bg-white pointer-events-none z-[100] transition-opacity duration-100 ease-out"
                style={{ opacity: isFlashing ? 0.04 : 0 }}
            />



            {/* Tyndall Effect — 3 narrow beams from top-left */}
            <div className="absolute top-0 left-0 w-full h-[120vh] overflow-hidden pointer-events-none z-0">
                <div className="god-ray w-[8vw] h-[90vh] left-[5vw] top-[-2vh] rotate-[15deg]" style={{ opacity: 0.6 }} />
                <div className="god-ray w-[5vw] h-[70vh] left-[18vw] top-[-2vh] rotate-[22deg]" style={{ opacity: 0.4 }} />
                <div className="god-ray w-[4vw] h-[50vh] left-[28vw] top-[-2vh] rotate-[28deg]" style={{ opacity: 0.25 }} />
            </div>

            {/* PILLAR 1: EDUCATION (HERO) */}
            <section id="education" className={`${containerClass} pt-28 md:pt-52 pb-20 md:pb-32`}>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-12 lg:gap-20 mb-16 md:mb-52 max-w-[1300px] mx-auto xl:pl-[3%]">
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <div className="relative flex w-full justify-center">
                            <div className="absolute bottom-[8%] h-16 w-[84%] rounded-full bg-black/60 blur-[28px] opacity-85 sm:w-[78%]"></div>
                            <div className="absolute bottom-[8.8%] h-[1px] w-[62%] bg-gradient-to-r from-transparent via-emerald-400/16 to-transparent"></div>
                            <div className="absolute inset-x-[18%] bottom-[20%] h-24 rounded-full bg-emerald-500/[0.035] blur-3xl opacity-75"></div>
                            <img src={deviceMain} alt="izon" className="relative z-10 w-full max-w-[255px] sm:max-w-[292px] md:max-w-[500px] lg:max-w-[600px] drop-shadow-[0_24px_64px_rgba(0,0,0,0.42)] md:drop-shadow-[0_40px_100px_rgba(16,185,129,0.2)]" />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 max-w-[19rem] sm:max-w-[21rem] md:max-w-none flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="flex flex-col items-center md:items-start gap-2.5 mb-6 md:mb-10 w-full">
                            <div className="authority-badge min-h-[2.1rem] w-full max-w-[14.8rem] sm:max-w-[16.2rem] justify-center mx-auto md:mx-0 px-3 py-1 md:px-[14px] md:py-[8px] gap-0 md:gap-[10px] tracking-[0.1em] md:tracking-[0.5em] rounded-[12px] border border-emerald-500/14 bg-[linear-gradient(180deg,rgba(5,30,32,0.92),rgba(5,24,28,0.88))] shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_12px_26px_rgba(0,0,0,0.18)]">
                                <span className="whitespace-nowrap text-[8px] sm:text-[8.5px] md:text-[10px] font-bold uppercase tracking-[0.14em] md:tracking-widest text-emerald-100">Korea • Malaysia • Singapore</span>
                            </div>
                            <div className="authority-badge min-h-[2.1rem] w-full max-w-[14.8rem] sm:max-w-[16.2rem] justify-center mx-auto md:mx-0 px-3 py-1 md:px-[14px] md:py-[8px] gap-0 md:gap-[10px] tracking-[0.1em] md:tracking-[0.5em] rounded-[12px] border border-emerald-500/14 bg-[linear-gradient(180deg,rgba(5,30,32,0.92),rgba(5,24,28,0.88))] shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_12px_26px_rgba(0,0,0,0.18)]">
                                <span className="whitespace-nowrap text-[8px] sm:text-[8.5px] md:text-[10px] font-bold uppercase tracking-[0.14em] md:tracking-widest text-emerald-100">MDA Licensed: GA1448221-77276</span>
                            </div>
                        </div>
                        <h1 className="text-[2.68rem] sm:text-[3rem] md:text-[4.75rem] lg:text-[6.5rem] font-[900] leading-[0.93] md:leading-[1.04] tracking-tight mb-5 md:mb-8 text-white">
                            <span className="block text-[1.04em] tracking-[-0.03em]">让视力</span>
                            <span className="mt-1.5 flex items-baseline justify-center gap-1.5 md:mt-0 md:inline-flex md:justify-start md:gap-0 whitespace-nowrap">
                                <span className="text-emerald-400 text-[0.9em] tracking-[-0.03em]">真正</span>
                                <span className="text-emerald-400 tracking-[-0.045em] text-[0.84em] sm:text-[0.87em] md:text-[1em]">U-Turn</span>
                            </span>
                        </h1>
                        <p className="text-slate-200/88 text-[0.9rem] sm:text-[0.96rem] md:text-[1.18rem] max-w-[19rem] sm:max-w-[20.4rem] md:max-w-[620px] mb-3 md:mb-4 leading-[1.65] font-medium">
                            给孩子与家庭使用的视力训练方案，重点帮助减轻用眼负担、稳定度数变化。
                        </p>
                        <p className="text-slate-300 text-[0.96rem] sm:text-[1.03rem] md:text-[1.45rem] lg:text-2xl max-w-[19rem] sm:max-w-[20.4rem] md:max-w-[600px] mb-0 md:mb-12 leading-[1.72] md:leading-relaxed font-medium">
                            <span className="block md:inline">什么都试了，度数还是每一年起？</span>
                            <span className="block whitespace-nowrap">别再治标不治本了，我们帮你 <span className="text-white font-bold tracking-wider whitespace-nowrap">U-Turn</span> 度数</span>
                        </p>
                    </div>
                </div>

                <div className="mb-14 md:mb-48 pt-8 md:pt-16">
                    <div className="mb-6 md:mb-12 text-center flex flex-col items-center">
                        <h3 className="text-[1.76rem] sm:text-[2rem] md:text-[3.5rem] font-[900] tracking-tighter text-white mb-2 md:mb-4 leading-[1.08]">为什么度数一直在起？</h3>
                        <p className="text-emerald-400 font-[800] tracking-[0.14em] uppercase text-[0.98rem] md:text-xl">因为眼睛的“零件”乱了：</p>
                    </div>

                    {(() => {
                        const items = [
                        {
                            icon: (
                                <div className="mb-8 relative w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden bg-[#0A0F14] shadow-[var(--shadow-premium)] group-hover:shadow-[0_20px_40px_rgba(16,185,129,0.1)] transition-all duration-700 flex items-center justify-center isolate">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none opacity-50"></div>
                                    <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.05] rounded-2xl z-20 pointer-events-none group-hover:ring-emerald-500/20 transition-all duration-700"></div>
                                    <img 
                                        src="/images/balloon-effect Background Removed.png" 
                                        alt="Eye Anatomy - Balloon Effect" 
                                        className="w-[90%] h-[90%] object-contain drop-shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-700 group-hover:scale-105"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = "https://placehold.co/400x400/000000/10b981?text=Eye+Anatomy";
                                        }}
                                    />
                                </div>
                            ),
                            title: (
                                <>
                                    1. 气球效应<br />
                                    <span className="text-base tracking-normal text-emerald-500/70 inline-block mt-1">(Balloon Effect)</span>
                                </>
                            ),
                            subtitle: "—— 肌肉在“拉”",
                            desc: (
                                <>
                                    眼睛周围的肌肉不平衡，像两只手用力<span className="text-emerald-400 font-bold">拉扯</span>气球。眼球被扯长了，度数自然停不下。
                                </>
                            )
                        },
                        {
                            icon: (
                                <div className="mb-8 relative w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden bg-[#0A0F14] shadow-[var(--shadow-premium)] group-hover:shadow-[0_20px_40px_rgba(16,185,129,0.1)] transition-all duration-700 flex items-center justify-center isolate">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none opacity-50"></div>
                                    <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.05] rounded-2xl z-20 pointer-events-none group-hover:ring-emerald-500/20 transition-all duration-700"></div>
                                    <img 
                                        src="/images/ciliary.png" 
                                        alt="Eye Anatomy - Projector Fallacy" 
                                        className="w-[90%] h-[90%] object-contain transition-all duration-700 group-hover:scale-105"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = "https://placehold.co/400x400/000000/10b981?text=Ciliary+Muscle";
                                        }}
                                    />
                                </div>
                            ),
                            title: (
                                <>
                                    2. 投影仪误区<br />
                                    <span className="text-base tracking-normal text-emerald-500/70 inline-block mt-1">(Projector Fallacy)</span>
                                </>
                            ),
                            subtitle: "—— 对焦 motor “卡”了",
                            desc: (
                                <>
                                    睫状肌就是你的对焦 motor。普通眼镜只是换镜片，但没修 motor。Motor<span className="text-emerald-400 font-bold">卡着不动</span>，眼睛越看越累。
                                </>
                            )
                        },
                        {
                            icon: (
                                <div className="mb-8 relative w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden bg-[#0A0F14] shadow-[var(--shadow-premium)] group-hover:shadow-[0_20px_40px_rgba(16,185,129,0.1)] transition-all duration-700 flex items-center justify-center isolate">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none opacity-50"></div>
                                    <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.05] rounded-2xl z-20 pointer-events-none group-hover:ring-emerald-500/20 transition-all duration-700"></div>
                                    <img 
                                        src="/images/eye-dilating.gif" 
                                        alt="Eye Anatomy - Active Template" 
                                        className="w-full h-full object-cover object-[25%_center] transition-all duration-700 group-hover:scale-105"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = "https://placehold.co/400x400/000000/10b981?text=Active+Template";
                                        }}
                                    />
                                </div>
                            ),
                            title: (
                                <>
                                    3. 主动校准模版<br />
                                    <span className="text-base tracking-normal text-emerald-500/70 inline-block mt-1">(Active Template)</span>
                                </>
                            ),
                            subtitle: "—— 控光“锁”死焦点",
                            desc: (
                                <>
                                    IZON 像个指挥官，教瞳孔重新控光，让卡住的肌肉放松。<span className="text-emerald-400 font-bold">压力没了</span>，眼球不再变形，度数才能 U-Turn。
                                </>
                            )
                        }
                        ];

                        return (
                            <>
                                <div className="md:hidden relative">
                                <div className="relative -mx-4">
                                <div className="flex snap-x snap-mandatory gap-3.5 overflow-x-auto px-4 pr-12 pb-2 no-scrollbar">
                                    {items.map((item, i) => (
                                        <div key={i} className="glass-panel w-[79vw] max-w-[19.5rem] shrink-0 snap-start rounded-[22px] px-[18px] py-[18px] flex flex-col items-center text-center border-white/[0.035] bg-[linear-gradient(180deg,rgba(255,255,255,0.018),rgba(255,255,255,0.006))] shadow-[0_18px_40px_rgba(0,0,0,0.2)]">
                                            <div className="[&>div]:mb-3.5 [&>div]:w-24 [&>div]:h-24">{item.icon}</div>
                                            <div className="max-w-[16.6rem]">
                                                <h4 className="text-[1.26rem] font-[900] tracking-tight mb-1.5 text-emerald-400 leading-[1.12]">{item.title}</h4>
                                                <p className="text-[12px] font-bold text-white/46 mb-2.5 tracking-[0.02em]">{item.subtitle}</p>
                                                <p className="mx-auto max-w-[15.8rem] text-slate-200/88 text-[0.97rem] leading-[1.62] font-medium">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="pointer-events-none absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"></div>
                                </div>
                                <div className="mx-auto mt-0.5 flex w-[calc(100%-2rem)] items-center justify-between rounded-full border border-white/[0.055] bg-[linear-gradient(180deg,rgba(10,15,25,0.94),rgba(8,13,22,0.88))] px-3 py-1.5 shadow-[0_10px_22px_rgba(0,0,0,0.18)]">
                                    <div className="flex items-center gap-1.5 shrink-0">
                                        <span className="h-1.5 w-4 rounded-full bg-emerald-400/95"></span>
                                        <span className="h-1.5 w-1.5 rounded-full bg-slate-600"></span>
                                        <span className="h-1.5 w-1.5 rounded-full bg-slate-600"></span>
                                        <span className="ml-1 text-[11px] font-medium tracking-[0.08em] text-slate-500">1/3</span>
                                    </div>
                                    <span className="text-[11px] font-medium tracking-[0.04em] text-slate-400 text-center px-2">向右滑动查看更多</span>
                                    <div className="swipe-nudge flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-white/78 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] shrink-0">
                                        <span className="text-sm leading-none">→</span>
                                    </div>
                                </div>
                                <div className="mx-auto mt-1.5 h-px w-[calc(100%-2rem)] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"></div>
                                </div>

                                <div className="hidden md:grid grid-cols-3 gap-12">
                                    {items.map((item, i) => (
                                        <div key={i} className="group border-t border-white/20 pt-10 flex flex-col items-center text-center">
                                            {item.icon}
                                            <h4 className="text-2xl md:text-[30px] font-[900] uppercase tracking-wide mb-3 text-emerald-500 group-hover:text-emerald-400 transition-colors leading-[1.3]">{item.title}</h4>
                                            <p className="text-base font-bold text-white/50 mb-5">{item.subtitle}</p>
                                            <p className="text-slate-300 text-xl md:text-[22px] leading-[1.8] font-medium">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </>
                        );
                    })()}
                </div>

                {/* MODULE A: THE DIVERGENT PATHS */}
                <div id="comparison" className="pt-4 md:pt-[90px] pb-[96px] md:pb-32 mb-8 md:mb-10">
                    <div className="max-w-[800px] mx-auto text-center mb-5 md:mb-14 px-4 md:px-8">
                        <h2 className="mb-4 text-white/95 leading-[1.18]">
                            <span className="mx-auto flex max-w-[18.9rem] flex-col items-center md:hidden">
                                <span className="block w-[15.6rem] text-center text-[1.62rem] font-[860] tracking-tight">
                                    5年后，孩子的镜片
                                </span>
                                <span className="mt-1 block w-[11.2rem] text-center text-[1.62rem] font-[860] tracking-tight">
                                    越来越厚，
                                </span>
                                <span className="mt-1.5 block w-[18.4rem] text-center text-[1.72rem] font-[900] tracking-tight">
                                    还是度数终于稳住了？
                                </span>
                            </span>
                            <span className="hidden md:block">
                                <span className="block mx-auto max-w-[20.8rem] text-[1.52rem] md:max-w-none md:text-3xl lg:text-[2.7rem] font-[760] tracking-tight whitespace-nowrap">
                                    5年后，孩子的镜片越来越厚，
                                </span>
                                <span className="mt-1 block mx-auto max-w-[20.8rem] text-[1.68rem] md:max-w-none md:text-[2.15rem] lg:text-[3rem] font-[900] tracking-tight whitespace-nowrap">
                                    还是度数终于稳住了？
                                </span>
                            </span>
                        </h2>
                        <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-white/12 to-transparent"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative max-w-[1400px] mx-auto rounded-[2rem] overflow-hidden border border-white/[0.08] md:border-white/10 shadow-[0_18px_42px_rgba(0,0,0,0.28)] md:shadow-2xl">

                        {/* 中轴线 Center Axis (Desktop only) */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent z-20 shadow-[0_0_15px_rgba(255,255,255,0.2)]"></div>

                        {/* 左边：传统防控路 (Passive Path) —— 红色警告 */}
                        <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0.018),rgba(255,255,255,0.008))] backdrop-blur-xl px-4 py-4 md:px-12 md:pt-12 md:pb-12 relative overflow-hidden group flex flex-col z-10 transition-all duration-700">
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-900/10 rounded-full blur-[100px] pointer-events-none group-hover:scale-105 transition-all duration-1000"></div>

                            <div className="relative z-10 flex-1 flex flex-col">
                                <h4 className="inline-flex w-fit items-center gap-2 md:rounded-full md:border md:border-red-500/18 md:bg-red-500/[0.095] md:px-3 md:py-1.5 text-[10.5px] md:text-base font-bold tracking-[0.12em] md:tracking-[0.2em] text-red-400/95 mb-4 md:mb-8 md:shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                                    <AlertCircle size={15} /> 传统防控路 (PASSIVE PATH)
                                </h4>

                                <div className="space-y-3.5 md:space-y-8 mb-3 md:mb-6">
                                    <div className="grid grid-cols-[2.5rem_minmax(0,1fr)] md:flex gap-x-3 md:gap-6 items-start">
                                        <div className="w-[2.5rem] h-[2.5rem] md:w-14 md:h-14 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20 mt-0.5">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] md:w-7 md:h-7 text-red-500/90">
                                                {/* Elongated eyeball showing anatomical stretching */}
                                                <path d="M4 12 C 4 7 8 4 12 4 C 18 4 22 8 22 12 C 22 16 18 20 12 20 C 8 20 4 17 4 12 Z" />
                                                <circle cx="8" cy="12" r="2.5" className="text-red-500/50" />
                                                <path d="M14 12 h8" strokeDasharray="2 2" className="text-red-500/40" />
                                                <path d="M19 9 l3 3 l-3 3" className="text-red-500/60" />
                                            </svg>
                                        </div>
                                        <div className="min-w-0 pt-0.5">
                                            <h5 className="text-white font-bold text-[1.2rem] md:text-xl leading-[1.08] mb-1 md:mb-3">眼轴拉长</h5>
                                            <p className="text-slate-300/98 text-[0.98rem] md:text-lg leading-[1.55rem] md:leading-relaxed">眼轴像气球一样越拉越长，一旦变形，就很难恢复原状。</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-[2.5rem_minmax(0,1fr)] md:flex gap-x-3 md:gap-6 items-start">
                                        <div className="w-[2.5rem] h-[2.5rem] md:w-14 md:h-14 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20 mt-0.5">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] md:w-7 md:h-7 text-red-500/90">
                                                {/* Concave optical lens showing increasing edge thickness */}
                                                <path d="M4 2 C 10 8 10 16 4 22 L 7 22 C 13 16 13 8 7 2 Z" className="text-red-500/40" />
                                                <path d="M9 2 C 15 8 15 16 9 22 L 15 22 C 21 16 21 8 15 2 Z" />
                                                <path d="M20 12 L 2 12" strokeDasharray="2 2" className="text-red-500/20" />
                                            </svg>
                                        </div>
                                        <div className="min-w-0 pt-0.5">
                                            <h5 className="text-white font-bold text-[1.2rem] md:text-xl leading-[1.08] mb-1 md:mb-3">镜片越来越厚</h5>
                                            <p className="text-slate-300/98 text-[0.98rem] md:text-lg leading-[1.55rem] md:leading-relaxed">度数每半年起，眼镜越换越厚，鼻梁负担也越来越重。</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-[2.5rem_minmax(0,1fr)] md:flex gap-x-3 md:gap-6 items-start">
                                        <div className="w-[2.5rem] h-[2.5rem] md:w-14 md:h-14 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20 mt-0.5">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] md:w-7 md:h-7 text-red-500/90">
                                                {/* Clinical chart showing risk progression */}
                                                <path d="M3 20 L 21 20" className="text-red-500/30" />
                                                <path d="M3 18 L 8 12 L 13 15 L 20 4" strokeWidth="2" />
                                                <path d="M16 4 L 20 4 L 20 8" strokeWidth="2" />
                                                <circle cx="12" cy="12" r="8" className="text-red-500/10" strokeDasharray="2 2" />
                                            </svg>
                                        </div>
                                        <div className="min-w-0 pt-0.5">
                                            <h5 className="text-white font-bold text-[1.2rem] md:text-xl leading-[1.08] mb-1 md:mb-3">长期风险增加</h5>
                                            <p className="text-slate-300/98 text-[0.98rem] md:text-lg leading-[1.55rem] md:leading-relaxed">当近视越来越深，未来发展成高度近视的风险也会跟着提高。</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-3 mb-auto border-t border-red-500/10 pt-3 md:mt-6 md:pt-4 flex flex-col items-center md:items-start">
                                    <div className="mb-2 flex w-full max-w-[200px] items-center justify-between md:max-w-none">
                                        <div className="text-[10px] font-semibold tracking-[0.16em] text-red-400/62 uppercase">五年趋势</div>
                                        <span className="inline-flex items-center justify-center rounded-full border border-red-500/12 bg-red-500/[0.05] px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em] text-red-400/86 uppercase">度数持续加深</span>
                                    </div>
                                    <div className="mx-auto flex items-end h-[48px] justify-center gap-1.5 w-full max-w-[200px] opacity-90">
                                        <div className="w-full bg-red-950/40 rounded-t-sm h-[20%] transition-all duration-1000 delay-100 group-hover:h-[30%]"></div>
                                        <div className="w-full bg-red-900/40 rounded-t-sm h-[40%] transition-all duration-1000 delay-200 group-hover:h-[50%]"></div>
                                        <div className="w-full bg-red-800/40 rounded-t-sm h-[60%] transition-all duration-1000 delay-300 group-hover:h-[70%]"></div>
                                        <div className="w-full bg-red-700/50 rounded-t-sm h-[80%] transition-all duration-1000 delay-400 group-hover:h-[90%]"></div>
                                        <div className="w-full bg-red-500/60 rounded-t-sm h-[100%] group-hover:scale-y-[1.05] origin-bottom transition-all duration-500"></div>
                                    </div>
                                    <div className="mx-auto mt-1.5 flex w-full max-w-[200px] items-center justify-between text-[10px] font-medium tracking-[0.04em] text-slate-500/82">
                                        <span>现在</span>
                                        <span className="text-red-400/78">5年后</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 右边：IZON 物理校准路 (Active Path) —— 蓝色希望 */}
                        <div className="bg-[linear-gradient(180deg,rgba(9,28,26,0.58),rgba(7,22,21,0.5)_42%,rgba(6,17,18,0.44))] backdrop-blur-xl px-5 py-5 md:px-12 md:pt-12 md:pb-12 relative overflow-hidden group flex flex-col z-20 shadow-[0_0_22px_rgba(16,185,129,0.035)] md:shadow-[0_0_50px_rgba(16,185,129,0.05)] hover:shadow-[0_0_80px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/6 md:ring-emerald-500/10 transition-all duration-700">
                            <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_70%)] opacity-70"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-900/18 rounded-full blur-[120px] pointer-events-none group-hover:scale-110 group-hover:bg-emerald-800/18 transition-all duration-1000 ease-in-out"></div>

                            <div className="relative z-10 flex-1 flex flex-col">
                                <h4 className="inline-flex w-fit items-center gap-2 text-[10.5px] md:text-base font-bold tracking-[0.12em] md:tracking-[0.2em] text-emerald-300 mb-4 md:mb-8 md:rounded-full md:border md:border-emerald-500/16 md:bg-emerald-500/[0.08] md:px-3 md:py-1.5 md:shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.35)] md:hidden"></span>
                                    <ShieldCheck size={15} className="hidden md:block" /> IZON 主动校准路 (ACTIVE PATH)
                                </h4>

                                <div className="space-y-4 md:space-y-8 mb-3 md:mb-6">
                                    <div className="grid grid-cols-[2.5rem_minmax(0,1fr)] md:flex gap-x-3 md:gap-6 items-start">
                                        <div className="w-[2.6rem] h-[2.6rem] md:w-14 md:h-14 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/26 mt-0.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] md:w-7 md:h-7 text-emerald-400">
                                                {/* Stable eyeball shape with a physical stop/barrier at the back to indicate controlled axial growth */}
                                                <circle cx="10" cy="12" r="6" />
                                                <circle cx="10" cy="12" r="2" className="text-emerald-500/50" />
                                                <path d="M16 12 h3" strokeDasharray="1 2" className="text-emerald-500/40" />
                                                <path d="M21 7 v10" strokeWidth="2" />
                                                <path d="M18 9 l3 3 l-3 3" className="text-emerald-500/50" />
                                            </svg>
                                        </div>
                                        <div className="min-w-0 pt-0.5">
                                            <h5 className="text-white font-[860] text-[1.22rem] md:text-xl leading-[1.08] mb-1.5 md:mb-3">减缓眼轴增长</h5>
                                            <p className="max-w-[15rem] text-slate-200/[0.92] text-[0.98rem] md:text-lg leading-[1.55rem] md:leading-relaxed">通过针对性的视觉训练，帮助减缓眼轴继续拉长。</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-[2.5rem_minmax(0,1fr)] md:flex gap-x-3 md:gap-6 items-start">
                                        <div className="w-[2.6rem] h-[2.6rem] md:w-14 md:h-14 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/26 mt-0.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] md:w-7 md:h-7 text-emerald-400">
                                                {/* Clinical chart showing degree progression flattening/stabilizing */}
                                                <path d="M3 20 h18" className="text-emerald-500/30" />
                                                <path d="M3 15 l6 -5 l5 -1 h7" strokeWidth="1.5" />
                                                <circle cx="20" cy="9" r="1.5" fill="currentColor" />
                                                <path d="M14 10 v10 M20 10 v10" strokeDasharray="2 2" className="text-emerald-500/20" />
                                            </svg>
                                        </div>
                                        <div className="min-w-0 pt-0.5">
                                            <h5 className="text-white font-[860] text-[1.22rem] md:text-xl leading-[1.08] mb-1.5 md:mb-3">减缓度数加深</h5>
                                            <p className="max-w-[15rem] text-slate-200/[0.92] text-[0.98rem] md:text-lg leading-[1.55rem] md:leading-relaxed">当孩子的用眼负担慢慢减轻，度数就比较不容易一直往上升。</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-[2.5rem_minmax(0,1fr)] md:flex gap-x-3 md:gap-6 items-start">
                                        <div className="w-[2.6rem] h-[2.6rem] md:w-14 md:h-14 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/26 mt-0.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] md:w-7 md:h-7 text-emerald-400">
                                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" className="text-emerald-500/20" fill="currentColor" />
                                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                                <path d="M9 11h6 M12 8v6" strokeWidth="2" strokeLinecap="round" className="text-emerald-300" />
                                            </svg>
                                        </div>
                                        <div className="min-w-0 pt-0.5">
                                            <h5 className="text-white font-[860] text-[1.22rem] md:text-xl leading-[1.08] mb-1.5 md:mb-3">降低长期风险</h5>
                                            <p className="max-w-[15rem] text-slate-200/[0.92] text-[0.98rem] md:text-lg leading-[1.55rem] md:leading-relaxed">把度数控制得更稳，也是在帮孩子降低未来高度近视风险。</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-3 mb-auto border-t border-emerald-500/10 pt-3 md:mt-6 md:pt-4 flex flex-col items-center md:items-start">
                                    <div className="mb-2 flex w-full max-w-[200px] items-center justify-between md:max-w-none">
                                        <div className="text-[10px] font-semibold tracking-[0.16em] text-emerald-300/62 uppercase">五年趋势</div>
                                        <span className="inline-flex items-center justify-center rounded-full border border-emerald-500/10 bg-emerald-500/[0.045] px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em] text-emerald-300/88 uppercase">度数获得控制</span>
                                    </div>
                                    <div className="mx-auto flex flex-row-reverse items-end h-[48px] justify-center gap-1.5 w-full max-w-[200px] opacity-95">
                                        <div className="w-full bg-emerald-950/35 rounded-t-sm h-[24%] transition-all duration-1000 delay-100 group-hover:h-[28%]"></div>
                                        <div className="w-full bg-emerald-900/38 rounded-t-sm h-[34%] transition-all duration-1000 delay-200 group-hover:h-[40%]"></div>
                                        <div className="w-full bg-emerald-500/62 rounded-t-sm h-[56%] transition-all duration-1000 delay-300 group-hover:h-[64%] relative flex justify-center">
                                        </div>
                                        <div className="w-full bg-emerald-600/46 rounded-t-sm h-[26%] transition-all duration-1000 delay-400 border-t border-emerald-500/20"></div>
                                        <div className="w-full bg-emerald-700/44 rounded-t-sm h-[22%] transition-all duration-1000 delay-500 border-t border-emerald-500/20"></div>
                                    </div>
                                    <div className="mx-auto mt-1.5 flex w-full max-w-[200px] items-center justify-between text-[10px] font-medium tracking-[0.04em] text-slate-500/82">
                                        <span>现在</span>
                                        <span className="text-emerald-300/78">5年后</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* THE CLINICAL BENCHMARK (COMPARISON TABLE) */}
                <div className="pt-8 md:pt-10 pb-8 md:pb-10 overflow-hidden">
                    <div className="max-w-[1200px] mx-auto mb-9 md:mb-16 px-4 md:px-6 text-center">
                        <div className="nurture-tag mx-auto mb-5 md:mb-6">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
                            方案对比
                        </div>
                        <h2 className="text-slate-100 text-center leading-[1.12] mb-4 md:mb-6">
                            <span className="mx-auto flex max-w-[18.2rem] flex-col items-center md:hidden">
                                <span className="block w-[12.6rem] text-center text-[1.84rem] font-[820] tracking-[0.01em]">
                                    同样是花钱
                                </span>
                                <span className="mt-1 block w-[14.4rem] text-center text-[1.84rem] font-[900] tracking-[0.01em]">
                                    哪一种更值得
                                </span>
                                <span className="mt-1 block w-[10.2rem] text-center text-[1.84rem] font-[900] tracking-[0.01em]">
                                    长期选择？
                                </span>
                            </span>
                            <span className="hidden md:block">
                                <span className="block mx-auto w-fit text-[2rem] md:text-3xl lg:text-4xl font-[800] tracking-[0.01em] whitespace-nowrap">
                                    同样是花钱，哪一种方式
                                </span>
                                <span className="mt-1 block mx-auto w-fit text-[2rem] md:text-3xl lg:text-4xl font-[900] tracking-[0.01em] whitespace-nowrap">
                                    更值得长期选择？
                                </span>
                            </span>
                        </h2>
                        <p className="text-slate-400 font-medium max-w-[21.75rem] md:max-w-[700px] mx-auto text-[1.03rem] md:text-lg text-center leading-[1.58]">
                            <span className="block md:inline whitespace-nowrap">为什么越来越多家长，在比较长期效果后，</span>
                            <span className="block md:inline whitespace-nowrap">选择 OXYLIFE？</span>
                        </p>
                        <p className="text-slate-500/82 text-[11px] md:text-[13px] font-medium max-w-[19.75rem] md:max-w-[600px] mx-auto text-center mt-3 md:mt-4 tracking-[0.03em] leading-[1.55]">
                            <span className="block md:inline whitespace-nowrap">家长在选择儿童近视控制方案时，通常会比较长期效果、</span>
                            <span className="block md:inline whitespace-nowrap">安全性、孩子配合度与整体费用。</span>
                        </p>
                    </div>

                    <div className="max-w-[1200px] mx-auto px-3 md:px-6">
                        {/* TOP SECTION: OXYLIFE MAIN TABLE */}
                        <div className="max-w-[69rem] mx-auto mb-9 md:mb-12">
                            <div className="relative overflow-hidden rounded-[24px] md:rounded-[26px] border border-white/[0.045] bg-[linear-gradient(180deg,rgba(11,17,27,0.98),rgba(9,16,28,0.95)_38%,rgba(6,10,18,0.94))] backdrop-blur-2xl ring-1 ring-inset ring-white/[0.02] shadow-[0_22px_52px_-16px_rgba(0,0,0,0.72)] md:shadow-[0_28px_72px_-18px_rgba(0,0,0,0.82)]">
                                {/* Soft, clinical top edge light (no flashy colors) */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.06),transparent_34%),radial-gradient(circle_at_50%_38%,rgba(16,185,129,0.045),transparent_28%),radial-gradient(circle_at_top_left,rgba(148,163,184,0.08),transparent_34%)] pointer-events-none"></div>
                                <div className="absolute inset-[1px] rounded-[25px] border border-white/[0.025]"></div>
                                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.16] to-transparent"></div>
                                <div className="absolute inset-y-10 left-0 w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent"></div>
                                <div className="absolute inset-y-10 right-0 w-px bg-gradient-to-b from-transparent via-white/[0.05] to-transparent"></div>
                                <div className="absolute inset-x-0 top-0 h-[320px] bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>

                                {/* Table Header */}
                                <div className="md:hidden border-b border-white/[0.04] bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.1))] relative z-10 px-4 py-4">
                                    <div className="flex h-full flex-col">
                                        <div className="mb-2 flex min-h-[1.5rem] items-start">
                                            <span className="text-[10px] font-medium tracking-[0.18em] text-emerald-300/76 uppercase">更值得长期选择</span>
                                        </div>
                                        <div className="flex min-h-[2.6rem] items-start">
                                            <h4 className="text-[1.36rem] font-semibold leading-[1.15] text-slate-50 tracking-[0.01em]">OXYLIFE 主动校准</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:grid grid-cols-12 gap-4 px-6 md:px-12 py-6 border-b border-white/[0.04] bg-[linear-gradient(180deg,rgba(255,255,255,0.025),rgba(0,0,0,0.12))] items-center relative z-10">
                                    <div className="col-span-12 md:col-span-3 hidden md:block">
                                        <span className="text-[10px] md:text-xs tracking-[0.18em] text-slate-500/90 font-medium uppercase">临床维度</span>
                                    </div>
                                    <div className="col-span-8 md:col-span-6 hidden md:block">
                                        <div className="flex h-full flex-col">
                                            <div className="mb-2 flex min-h-[1.75rem] items-start">
                                                <span className="text-[10px] md:text-[11px] font-medium tracking-[0.18em] text-emerald-300/76 uppercase">更值得长期选择</span>
                                            </div>
                                            <div className="flex min-h-[2.75rem] items-start">
                                                <h4 className="text-[1.48rem] md:text-[1.62rem] font-semibold leading-[1.15] text-slate-50 tracking-[0.01em]">OXYLIFE 主动校准</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-4 md:col-span-3 text-right hidden md:block">
                                        <span className="text-[10px] md:text-xs tracking-[0.18em] text-slate-500/90 font-medium uppercase">综合评估</span>
                                    </div>
                                </div>

                                {/* Table Rows */}
                                <div className="flex flex-col relative z-10">
                                    {/* Main column subtle background highlight */}
                                    <div className="absolute top-0 bottom-0 left-[25%] right-[25%] hidden md:block pointer-events-none border-x border-white/[0.02] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(16,185,129,0.03)_18%,rgba(255,255,255,0.015)_52%,transparent)] shadow-[inset_0_0_40px_rgba(255,255,255,0.015)]"></div>
                                    <div className="absolute top-0 bottom-0 left-[25%] w-px hidden md:block bg-gradient-to-b from-transparent via-emerald-400/[0.16] to-transparent"></div>
                                    <div className="absolute top-0 bottom-0 right-[25%] w-px hidden md:block bg-gradient-to-b from-transparent via-emerald-400/[0.12] to-transparent"></div>
                                    
                                    {[
                                        { cat: "防控原理", title: "主动校准用眼状态，引导度数逐步回落。" },
                                        { cat: "安全性", title: "非接触式物理训练，无感染风险。" },
                                        { cat: "孩子体验", title: "每次5分钟，如游戏般轻松配合。" },
                                        { cat: "长期费用", title: "一次投入，全家受用，利于家庭长期规划。" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="relative group border-b border-white/[0.03] last:border-0 px-4 py-3 md:grid md:grid-cols-12 md:gap-x-5 md:gap-y-3 md:px-12 md:py-7 md:items-center transition-all">
                                            
                                            <div className="mb-2 md:mb-0 md:col-span-3 flex items-center pr-4">
                                                <h4 className="text-slate-500/90 font-medium tracking-[0.08em] text-[11px] md:text-sm">{item.cat}</h4>
                                            </div>
                                            <div className="md:col-span-6 flex items-start justify-between gap-3 md:flex-col md:justify-center relative md:pr-6">
                                                <h5 className="max-w-[17.8rem] sm:max-w-none font-semibold text-[1rem] md:text-[17px] text-slate-100 leading-[1.45] md:leading-snug tracking-[0.015em]">
                                                    {idx === 0 ? "主动校准用眼状态，引导度数逐步回落" :
                                                     idx === 1 ? "非接触式物理训练，无感染风险" :
                                                     idx === 2 ? "每次5分钟，如游戏般轻松配合" :
                                                     "一次投入，全家受用，更利于长期规划"}
                                                </h5>
                                                <div className="md:hidden flex h-7 min-w-7 items-center justify-center rounded-full border border-emerald-500/10 bg-emerald-500/[0.045] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                                                    <Check className="w-3.5 h-3.5 text-emerald-300" strokeWidth={2.4} />
                                                </div>
                                            </div>
                                            <div className="col-span-2 md:col-span-3 hidden md:flex justify-end items-center">
                                                <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-full border border-emerald-500/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(16,185,129,0.04))] shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_10px_20px_rgba(0,0,0,0.12)]">
                                                    <div className="flex h-5 w-5 items-center justify-center rounded-full border border-emerald-500/16 bg-emerald-500/[0.08]">
                                                        <Check className="w-3 h-3 text-emerald-300" strokeWidth={2.5} />
                                                    </div>
                                                    <span className="text-[10px] md:text-[11px] font-semibold tracking-[0.16em] uppercase text-emerald-300/88 hidden md:inline-block">OXYLIFE 优势</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* BOTTOM SECTION: 3 COMPETITOR CARDS */}
                        <div className="max-w-[69rem] mx-auto mb-5 md:mb-7">
                            <div className="flex items-center gap-3">
                                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/[0.08] to-white/[0.03]"></div>
                                <span className="shrink-0 text-[10px] md:text-[11px] font-medium tracking-[0.18em] text-slate-500/78 uppercase">其他常见方案</span>
                                <div className="h-px flex-1 bg-gradient-to-r from-white/[0.03] via-white/[0.08] to-transparent"></div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                            {/* OK Lenses */}
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white/[0.03] bg-[linear-gradient(180deg,rgba(6,10,20,0.8),rgba(4,7,16,0.72)_52%,rgba(4,7,15,0.62))] p-7 md:p-9 ring-1 ring-inset ring-white/[0.016] transition-all group shadow-[0_10px_26px_rgba(0,0,0,0.16)] hover:border-white/[0.038] hover:ring-white/[0.02]">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(148,163,184,0.035),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.3),transparent_42%)] opacity-78"></div>
                                <div className="absolute inset-[1px] rounded-[23px] border border-white/[0.018]"></div>
                                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent"></div>
                                <div className="absolute left-6 right-6 top-0 h-14 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.025),transparent_68%)] opacity-32"></div>

                                <div className="relative z-10 mb-5 border-b border-white/[0.05] pb-4 md:mb-8">
                                    <div className="flex items-center justify-between gap-3">
                                        <div className="flex min-w-0 items-center gap-2.5">
                                            <div className="h-1.5 w-1.5 rounded-full bg-amber-300/72 shadow-[0_0_7px_rgba(252,211,77,0.18)]"></div>
                                            <span className="truncate text-[12.5px] tracking-[0.1em] text-slate-100/90 font-semibold whitespace-nowrap">OK 镜 (Ortho-K)</span>
                                        </div>
                                        <span className="shrink-0 text-[11px] font-semibold tracking-[0.06em] text-amber-300/70 whitespace-nowrap">
                                            角膜塑形方案
                                        </span>
                                    </div>
                                </div>

                                <div className="relative z-10 flex flex-col gap-0 md:grid md:flex-1 md:grid-rows-4 md:gap-0">
                                    <div className="pt-0 md:pr-2">
                                        <p className="break-keep">
                                            <strong className="mb-1.5 block text-[0.98rem] md:text-[1.04rem] font-medium leading-snug text-slate-200/88">以角膜塑形辅助管理。</strong>
                                            <span className="block max-w-[30ch] text-[13.5px] md:text-[14px] font-medium leading-[1.55rem] text-slate-400/68">通过夜间佩戴，暂时调整角膜形态，帮助白天视力表现。</span>
                                        </p>
                                    </div>
                                    <div className="border-t border-white/[0.05] pt-4 md:pr-2 md:pt-5">
                                        <p className="break-keep">
                                            <strong className="mb-1.5 block text-[0.98rem] md:text-[1.04rem] font-medium leading-snug text-slate-200/76">清洁与复查要求高。</strong>
                                            <span className="block max-w-[30ch] text-[13.5px] md:text-[14px] font-medium leading-[1.55rem] text-slate-400/68">若护理不到位，角膜感染与刺激风险会增加。</span>
                                        </p>
                                    </div>
                                    <div className="border-t border-white/[0.05] pt-4 md:pr-2 md:pt-5">
                                        <p className="break-keep">
                                            <strong className="mb-1.5 block text-[0.98rem] md:text-[1.04rem] font-medium leading-snug text-slate-200/88">需要一段适应期。</strong>
                                            <span className="block max-w-[30ch] text-[13.5px] md:text-[14px] font-medium leading-[1.55rem] text-slate-400/68">初戴常见异物感，家长也需配合日常护理。</span>
                                        </p>
                                    </div>
                                    <div className="border-t border-white/[0.05] pt-4 md:pr-2 md:pt-5">
                                        <p className="break-keep">
                                            <strong className="mb-1.5 block text-[0.98rem] md:text-[1.04rem] font-medium leading-snug text-slate-200/88">后续维护支出持续。</strong>
                                            <span className="block max-w-[30ch] text-[13.5px] md:text-[14px] font-medium leading-[1.55rem] text-slate-400/68">除镜片费用外，还包括复查、护理液与定期更换。</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Eye Drops */}
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white/[0.03] bg-[linear-gradient(180deg,rgba(6,10,20,0.8),rgba(4,7,16,0.72)_52%,rgba(4,7,15,0.62))] p-7 md:p-9 ring-1 ring-inset ring-white/[0.016] transition-all group shadow-[0_10px_26px_rgba(0,0,0,0.16)] hover:border-white/[0.038] hover:ring-white/[0.02]">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(148,163,184,0.035),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.3),transparent_44%)] opacity-78"></div>
                                <div className="absolute inset-[1px] rounded-[23px] border border-white/[0.018]"></div>
                                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent"></div>
                                <div className="absolute left-6 right-6 top-0 h-14 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.025),transparent_68%)] opacity-32"></div>

                                <div className="relative z-10 mb-5 border-b border-white/[0.06] pb-4 md:mb-8">
                                    <div className="flex items-center justify-between gap-3">
                                        <div className="flex min-w-0 items-center gap-2.5">
                                            <div className="h-1.5 w-1.5 rounded-full bg-amber-300/72 shadow-[0_0_7px_rgba(252,211,77,0.18)]"></div>
                                            <span className="truncate text-[12.5px] tracking-[0.1em] text-slate-100/90 font-semibold whitespace-nowrap">阿托品药水</span>
                                        </div>
                                        <span className="shrink-0 text-[11px] font-semibold tracking-[0.06em] text-amber-300/70 whitespace-nowrap">
                                            药物辅助方案
                                        </span>
                                    </div>
                                </div>

                                <div className="relative z-10 flex flex-col gap-0 md:grid md:flex-1 md:grid-rows-4 md:gap-0">
                                    <div className="pt-0 md:pr-2">
                                        <p className="break-keep">
                                            <strong className="mb-1.5 block text-[1.01rem] md:text-[1.08rem] font-semibold leading-snug text-slate-100">以药物方式辅助控制。</strong>
                                            <span className="block max-w-[30ch] text-[13.5px] md:text-[14px] font-medium leading-[1.55rem] text-slate-400/76">临床上常用于延缓近视发展与眼轴增长。</span>
                                        </p>
                                    </div>
                                    <div className="border-t border-white/[0.05] pt-4 md:pr-2 md:pt-5">
                                        <p className="break-keep">
                                            <strong className="mb-1.5 block text-[1.01rem] md:text-[1.08rem] font-semibold leading-snug text-amber-300/72">可能出现短暂不适。</strong>
                                            <span className="block max-w-[30ch] text-[13.5px] md:text-[14px] font-medium leading-[1.55rem] text-slate-400/76">部分孩子会有畏光或近距离视物模糊。</span>
                                        </p>
                                    </div>
                                    <div className="border-t border-white/[0.05] pt-4 md:pr-2 md:pt-5">
                                        <p className="break-keep">
                                            <strong className="mb-1.5 block text-[1.01rem] md:text-[1.08rem] font-semibold leading-snug text-slate-100">每天点药要规律。</strong>
                                            <span className="block max-w-[30ch] text-[13.5px] md:text-[14px] font-medium leading-[1.55rem] text-slate-400/76">通常需要家长提醒，长期执行更关键。</span>
                                        </p>
                                    </div>
                                    <div className="border-t border-white/[0.05] pt-4 md:pr-2 md:pt-5">
                                        <p className="break-keep">
                                            <strong className="mb-1.5 block text-[1.01rem] md:text-[1.08rem] font-semibold leading-snug text-slate-100">属于持续性支出。</strong>
                                            <span className="block max-w-[30ch] text-[13.5px] md:text-[14px] font-medium leading-[1.55rem] text-slate-400/76">使用周期通常较长，需配合复诊与药费。</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Supplements */}
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white/[0.03] bg-[linear-gradient(180deg,rgba(6,10,20,0.8),rgba(4,7,16,0.72)_52%,rgba(4,7,15,0.62))] p-7 md:p-9 ring-1 ring-inset ring-white/[0.016] transition-all group shadow-[0_10px_26px_rgba(0,0,0,0.16)] hover:border-white/[0.038] hover:ring-white/[0.02]">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(148,163,184,0.035),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.3),transparent_44%)] opacity-78"></div>
                                <div className="absolute inset-[1px] rounded-[23px] border border-white/[0.018]"></div>
                                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent"></div>
                                <div className="absolute left-6 right-6 top-0 h-14 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.025),transparent_68%)] opacity-32"></div>

                                <div className="relative z-10 mb-5 border-b border-white/[0.06] pb-4 md:mb-8">
                                    <div className="flex items-center justify-between gap-3">
                                        <div className="flex min-w-0 items-center gap-2.5">
                                            <div className="h-1.5 w-1.5 rounded-full bg-amber-300/72 shadow-[0_0_7px_rgba(252,211,77,0.18)]"></div>
                                            <span className="truncate text-[12.5px] tracking-[0.1em] text-slate-100/90 font-semibold whitespace-nowrap">叶黄素等补剂</span>
                                        </div>
                                        <span className="shrink-0 text-[11px] font-semibold tracking-[0.06em] text-amber-300/70 whitespace-nowrap">
                                            营养辅助方案
                                        </span>
                                    </div>
                                </div>

                                <div className="relative z-10 flex flex-col gap-0 md:grid md:flex-1 md:grid-rows-4 md:gap-0">
                                    <div className="pt-0 md:pr-2">
                                        <p className="break-keep">
                                            <strong className="mb-1.5 block text-[1.01rem] md:text-[1.08rem] font-semibold leading-snug text-slate-100">以营养补充为主。</strong>
                                            <span className="block max-w-[30ch] text-[13.5px] md:text-[14px] font-medium leading-[1.55rem] text-slate-400/76">可作为日常护眼支持，但不是直接的度数控制方案。</span>
                                        </p>
                                    </div>
                                    <div className="border-t border-white/[0.05] pt-4 md:pr-2 md:pt-5">
                                        <p className="break-keep">
                                            <strong className="mb-1.5 block text-[1.01rem] md:text-[1.08rem] font-semibold leading-snug text-amber-300/72">更适合作为辅助。</strong>
                                            <span className="block max-w-[30ch] text-[13.5px] md:text-[14px] font-medium leading-[1.55rem] text-slate-400/76">若单独依赖补剂，可能延误更有效的干预时机。</span>
                                        </p>
                                    </div>
                                    <div className="border-t border-white/[0.05] pt-4 md:pr-2 md:pt-5">
                                        <p className="break-keep">
                                            <strong className="mb-1.5 block text-[1.01rem] md:text-[1.08rem] font-semibold leading-snug text-slate-100">日常补充较容易。</strong>
                                            <span className="block max-w-[30ch] text-[13.5px] md:text-[14px] font-medium leading-[1.55rem] text-slate-400/76">多数孩子接受度较高，执行门槛相对低。</span>
                                        </p>
                                    </div>
                                    <div className="border-t border-white/[0.05] pt-4 md:pr-2 md:pt-5">
                                        <p className="break-keep">
                                            <strong className="mb-1.5 block text-[1.01rem] md:text-[1.08rem] font-semibold leading-snug text-slate-100">属于长期日常支出。</strong>
                                            <span className="block max-w-[30ch] text-[13.5px] md:text-[14px] font-medium leading-[1.55rem] text-slate-400/76">金额分散，通常纳入家庭营养预算。</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
