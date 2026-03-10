"use client";

import React, { useState, useEffect, useRef } from 'react';
import {
    Globe, ShieldCheck, Users, Check, AlertCircle, Wind, Focus, Layers, ChevronDown
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

    const containerClass = "max-w-[1600px] w-[90vw] mx-auto px-8 md:px-12 relative z-10";

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
            <section id="education" className={`${containerClass} pt-52 pb-32`}>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 mb-52 max-w-[1300px] mx-auto xl:pl-[3%]">
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <img src={deviceMain} alt="izon" className="w-full max-w-[500px] lg:max-w-[600px] drop-shadow-[0_40px_100px_rgba(16,185,129,0.2)]" />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="flex flex-wrap gap-4 mb-10">
                            <div className="authority-badge">
                                <Globe size={14} className="text-emerald-400" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-100">Korea • Malaysia • Singapore</span>
                            </div>
                            <div className="authority-badge">
                                <ShieldCheck size={14} className="text-emerald-400" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-100">MDA Licensed: GB4122123-1</span>
                            </div>
                        </div>
                        <h1 className="text-[4rem] lg:text-[6.5rem] font-[900] leading-[1.1] tracking-tight mb-8 text-white">
                            让视力，<br className="hidden md:block" />
                            <span className="text-emerald-400 whitespace-nowrap">真正 U-Turn。</span>
                        </h1>
                        <p className="text-slate-300 text-xl lg:text-2xl max-w-[600px] mb-12 leading-relaxed font-medium">
                            试过保健品、药水、防控镜片，度数还是每一年起？<br className="hidden md:block" />
                            别再“治标不治本”了，我们帮你 <span className="text-white font-bold tracking-wider whitespace-nowrap">U-Turn</span> 度数。
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-48 pt-16">
                    <div className="col-span-1 md:col-span-3 mb-8 text-center flex flex-col items-center">
                        <h3 className="text-4xl md:text-[3.5rem] font-[900] tracking-tighter text-white mb-4">为什么度数一直在起？</h3>
                        <p className="text-emerald-400 font-[800] tracking-widest uppercase text-lg md:text-xl">因为眼睛的“零件”乱了：</p>
                    </div>
                    {[
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
                    ].map((item, i) => (
                        <div key={i} className="group border-t border-white/20 pt-10 flex flex-col items-center text-center">
                            {item.icon}
                            <h4 className="text-2xl md:text-[30px] font-[900] uppercase tracking-wide mb-3 text-emerald-500 group-hover:text-emerald-400 transition-colors leading-[1.3]">{item.title}</h4>
                            <p className="text-base font-bold text-white/50 mb-5">{item.subtitle}</p>
                            <p className="text-slate-300 text-xl md:text-[22px] leading-[1.8] font-medium">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* MODULE A: THE DIVERGENT PATHS */}
                <div id="comparison" className="pt-[84px] md:pt-[90px] pb-[120px] md:pb-32 mb-8 md:mb-10">
                    <div className="max-w-[800px] mx-auto text-center mb-16 px-8">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl leading-snug lg:leading-snug font-bold tracking-tight mb-6 text-white/95">
                            5年后，孩子的镜片越来越厚，<br className="hidden md:block" />还是度数终于控制住了？
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative max-w-[1400px] mx-auto rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">

                        {/* 中轴线 Center Axis (Desktop only) */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent z-20 shadow-[0_0_15px_rgba(255,255,255,0.2)]"></div>

                        {/* 左边：传统防控路 (Passive Path) —— 红色警告 */}
                        <div className="bg-white/[0.02] backdrop-blur-xl px-10 pt-10 pb-8 md:px-12 md:pt-12 md:pb-12 relative overflow-hidden group flex flex-col z-10 transition-all duration-700">
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-900/10 rounded-full blur-[100px] pointer-events-none group-hover:scale-105 transition-all duration-1000"></div>

                            <div className="relative z-10 flex-1 flex flex-col">
                                <h4 className="flex items-center gap-3 text-sm md:text-base font-bold tracking-[0.2em] text-red-500/80 mb-8">
                                    <AlertCircle size={18} /> 传统防控路 (PASSIVE PATH)
                                </h4>

                                <div className="space-y-8 mb-6">
                                    <div className="flex gap-6 items-start">
                                        <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-red-500/90">
                                                {/* Elongated eyeball showing anatomical stretching */}
                                                <path d="M4 12 C 4 7 8 4 12 4 C 18 4 22 8 22 12 C 22 16 18 20 12 20 C 8 20 4 17 4 12 Z" />
                                                <circle cx="8" cy="12" r="2.5" className="text-red-500/50" />
                                                <path d="M14 12 h8" strokeDasharray="2 2" className="text-red-500/40" />
                                                <path d="M19 9 l3 3 l-3 3" className="text-red-500/60" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h5 className="text-white font-bold text-xl mb-3">眼轴拉长</h5>
                                            <p className="text-slate-400 text-base md:text-lg leading-relaxed">眼轴像气球一样越拉越长，一旦变形，就很难自己回到原来的状态。</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 items-start">
                                        <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-red-500/90">
                                                {/* Concave optical lens showing increasing edge thickness */}
                                                <path d="M4 2 C 10 8 10 16 4 22 L 7 22 C 13 16 13 8 7 2 Z" className="text-red-500/40" />
                                                <path d="M9 2 C 15 8 15 16 9 22 L 15 22 C 21 16 21 8 15 2 Z" />
                                                <path d="M20 12 L 2 12" strokeDasharray="2 2" className="text-red-500/20" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h5 className="text-white font-bold text-xl mb-3">镜片越来越厚</h5>
                                            <p className="text-slate-400 text-base md:text-lg leading-relaxed">度数每半年起，眼镜越换越厚，鼻梁负担也越来越重。</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 items-start">
                                        <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-red-500/90">
                                                {/* Clinical chart showing risk progression */}
                                                <path d="M3 20 L 21 20" className="text-red-500/30" />
                                                <path d="M3 18 L 8 12 L 13 15 L 20 4" strokeWidth="2" />
                                                <path d="M16 4 L 20 4 L 20 8" strokeWidth="2" />
                                                <circle cx="12" cy="12" r="8" className="text-red-500/10" strokeDasharray="2 2" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h5 className="text-white font-bold text-xl mb-3">长期风险增加</h5>
                                            <p className="text-slate-400 text-base md:text-lg leading-relaxed">当近视越来越深，未来发展成高度近视的风险也会跟着提高。</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-red-500/10 pt-3 flex flex-col items-center mt-6 mb-auto">
                                    <span className="text-xs font-semibold tracking-widest text-red-500/60 uppercase mb-3">度数持续加深</span>
                                    <div className="flex items-end h-[60px] justify-center gap-1.5 mb-2 w-full max-w-[200px] opacity-80">
                                        <div className="w-full bg-red-950/40 rounded-t-sm h-[20%] transition-all duration-1000 delay-100 group-hover:h-[30%]"></div>
                                        <div className="w-full bg-red-900/40 rounded-t-sm h-[40%] transition-all duration-1000 delay-200 group-hover:h-[50%]"></div>
                                        <div className="w-full bg-red-800/40 rounded-t-sm h-[60%] transition-all duration-1000 delay-300 group-hover:h-[70%]"></div>
                                        <div className="w-full bg-red-700/50 rounded-t-sm h-[80%] transition-all duration-1000 delay-400 group-hover:h-[90%]"></div>
                                        <div className="w-full bg-red-500/60 rounded-t-sm h-[100%] group-hover:scale-y-[1.05] origin-bottom transition-all duration-500"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 右边：IZON 物理校准路 (Active Path) —— 蓝色希望 */}
                        <div className="bg-white/[0.03] backdrop-blur-xl px-10 pt-10 pb-8 md:px-12 md:pt-12 md:pb-12 relative overflow-hidden group flex flex-col z-20 shadow-[0_0_50px_rgba(16,185,129,0.05)] hover:shadow-[0_0_80px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/10 transition-all duration-700">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none group-hover:scale-110 group-hover:bg-emerald-800/20 transition-all duration-1000 ease-in-out"></div>

                            <div className="relative z-10 flex-1 flex flex-col">
                                <h4 className="flex items-center gap-3 text-sm md:text-base font-bold tracking-[0.2em] text-emerald-400 mb-8">
                                    <ShieldCheck size={18} /> IZON 主动校准路 (ACTIVE PATH)
                                </h4>

                                <div className="space-y-8 mb-6">
                                    <div className="flex gap-6 items-start">
                                        <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/30">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-emerald-400">
                                                {/* Stable eyeball shape with a physical stop/barrier at the back to indicate controlled axial growth */}
                                                <circle cx="10" cy="12" r="6" />
                                                <circle cx="10" cy="12" r="2" className="text-emerald-500/50" />
                                                <path d="M16 12 h3" strokeDasharray="1 2" className="text-emerald-500/40" />
                                                <path d="M21 7 v10" strokeWidth="2" />
                                                <path d="M18 9 l3 3 l-3 3" className="text-emerald-500/50" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h5 className="text-white font-bold text-xl mb-3">减缓眼轴增长</h5>
                                            <p className="text-slate-300 text-base md:text-lg leading-relaxed">通过针对性的视觉训练，帮助减缓眼轴继续拉长。</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 items-start">
                                        <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/30">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-emerald-400">
                                                {/* Clinical chart showing degree progression flattening/stabilizing */}
                                                <path d="M3 20 h18" className="text-emerald-500/30" />
                                                <path d="M3 15 l6 -5 l5 -1 h7" strokeWidth="1.5" />
                                                <circle cx="20" cy="9" r="1.5" fill="currentColor" />
                                                <path d="M14 10 v10 M20 10 v10" strokeDasharray="2 2" className="text-emerald-500/20" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h5 className="text-white font-bold text-xl mb-3">减缓度数加深</h5>
                                            <p className="text-slate-300 text-base md:text-lg leading-relaxed">当孩子的用眼负担慢慢减轻，度数就比较不容易一直往上升。</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 items-start">
                                        <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/30">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-emerald-400">
                                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" className="text-emerald-500/20" fill="currentColor" />
                                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                                <path d="M9 11h6 M12 8v6" strokeWidth="2" strokeLinecap="round" className="text-emerald-300" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h5 className="text-white font-bold text-xl mb-3">降低长期风险</h5>
                                            <p className="text-slate-300 text-base md:text-lg leading-relaxed">把度数控制得更稳，也是在帮助孩子降低未来高度近视带来的风险。</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-emerald-500/10 pt-3 flex flex-col items-center mt-6 mb-auto">
                                    <span className="text-xs font-semibold tracking-widest text-emerald-500/60 uppercase mb-3">度数获得控制</span>
                                    <div className="flex flex-row-reverse items-end h-[60px] justify-center gap-1.5 mb-2 w-full max-w-[200px] opacity-80">
                                        <div className="w-full bg-emerald-950/40 rounded-t-sm h-[20%] transition-all duration-1000 delay-100 group-hover:h-[30%]"></div>
                                        <div className="w-full bg-emerald-900/40 rounded-t-sm h-[40%] transition-all duration-1000 delay-200 group-hover:h-[50%]"></div>
                                        <div className="w-full bg-emerald-500/60 rounded-t-sm h-[60%] transition-all duration-1000 delay-300 group-hover:h-[70%] relative flex justify-center">
                                        </div>
                                        <div className="w-full bg-emerald-600/50 rounded-t-sm h-[30%] transition-all duration-1000 delay-400 border-t border-emerald-500/20"></div>
                                        <div className="w-full bg-emerald-700/50 rounded-t-sm h-[30%] transition-all duration-1000 delay-500 border-t border-emerald-500/20"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* THE CLINICAL BENCHMARK (COMPARISON TABLE) */}
                <div className="pt-8 md:pt-10 pb-8 md:pb-10 overflow-hidden">
                    <div className="max-w-[1200px] mx-auto mb-16 px-6 text-center">
                        <div className="nurture-tag mx-auto mb-6">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
                            方案对比
                        </div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold md:font-semibold tracking-[0.02em] mb-6 text-slate-100 text-center leading-tight">
                            同样是花钱，哪一种方式更值得长期选择？
                        </h2>
                        <p className="text-slate-400 font-medium max-w-[700px] mx-auto text-lg text-center">
                            为什么越来越多家长，在比较长期效果后，选择 OXYLIFE？
                        </p>
                        <p className="text-slate-500/70 text-[11px] md:text-[13px] font-medium max-w-[600px] mx-auto text-center mt-4 tracking-wide leading-relaxed">
                            家长在选择儿童近视控制方案时，通常会比较长期效果、安全性、孩子配合度，以及整体费用。
                        </p>
                    </div>

                    <div className="max-w-[1200px] mx-auto px-4 md:px-6">
                        {/* TOP SECTION: OXYLIFE MAIN TABLE */}
                        <div className="max-w-4xl mx-auto mb-12 md:mb-16">
                            <div className="relative overflow-hidden rounded-[26px] border border-white/[0.05] bg-[linear-gradient(180deg,rgba(11,17,27,0.98),rgba(9,16,28,0.95)_38%,rgba(6,10,18,0.94))] backdrop-blur-2xl ring-1 ring-inset ring-white/[0.02] shadow-[0_28px_72px_-18px_rgba(0,0,0,0.82)]">
                                {/* Soft, clinical top edge light (no flashy colors) */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.06),transparent_34%),radial-gradient(circle_at_50%_38%,rgba(16,185,129,0.045),transparent_28%),radial-gradient(circle_at_top_left,rgba(148,163,184,0.08),transparent_34%)] pointer-events-none"></div>
                                <div className="absolute inset-[1px] rounded-[25px] border border-white/[0.025]"></div>
                                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.16] to-transparent"></div>
                                <div className="absolute inset-y-10 left-0 w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent"></div>
                                <div className="absolute inset-y-10 right-0 w-px bg-gradient-to-b from-transparent via-white/[0.05] to-transparent"></div>
                                <div className="absolute inset-x-0 top-0 h-[320px] bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>

                                {/* Table Header */}
                                <div className="grid grid-cols-12 gap-4 px-6 md:px-12 py-6 border-b border-white/[0.04] bg-[linear-gradient(180deg,rgba(255,255,255,0.025),rgba(0,0,0,0.12))] items-center relative z-10">
                                    <div className="col-span-12 md:col-span-3 hidden md:block">
                                        <span className="text-[10px] md:text-xs tracking-[0.18em] text-slate-500/90 font-medium uppercase">临床维度</span>
                                    </div>
                                    <div className="col-span-8 md:col-span-6 hidden md:block">
                                        <div className="flex items-center gap-3 rounded-full border border-emerald-500/12 bg-emerald-500/[0.035] px-4 py-2 w-fit shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_0_22px_rgba(16,185,129,0.05)]">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.45)]"></div>
                                            <span className="text-xs md:text-sm tracking-[0.18em] text-slate-100 font-semibold uppercase">OXYLIFE 主动校准</span>
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
                                        { cat: "孩子体验", title: "每天 5 分钟，如游戏般轻松配合。" },
                                        { cat: "长期费用", title: "一次投入，全家受用，利于家庭长期规划。" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="grid grid-cols-12 gap-x-5 gap-y-3 px-6 md:px-12 py-6 md:py-7 border-b border-white/[0.03] last:border-0 items-center transition-all relative group">
                                            
                                            <div className="col-span-12 md:col-span-3 flex items-center pr-4">
                                                <h4 className="text-slate-500/90 font-medium tracking-[0.08em] text-xs md:text-sm">{item.cat}</h4>
                                            </div>
                                            <div className="col-span-10 md:col-span-6 flex flex-col justify-center relative pr-4 md:pr-6">
                                                <h5 className="font-semibold text-[15px] md:text-[17px] text-slate-100 leading-snug tracking-[0.015em]">{item.title}</h5>
                                            </div>
                                            <div className="col-span-2 md:col-span-3 flex justify-end items-center">
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
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                            {/* OK Lenses */}
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white/[0.05] bg-[linear-gradient(180deg,rgba(8,13,26,0.9),rgba(5,10,21,0.78)_52%,rgba(4,8,18,0.68))] p-7 md:p-9 ring-1 ring-inset ring-white/[0.025] transition-all group shadow-[0_14px_40px_rgba(0,0,0,0.24)] hover:border-white/[0.08] hover:ring-white/[0.035]">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(148,163,184,0.1),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.5),transparent_44%)] opacity-90"></div>
                                <div className="absolute inset-[1px] rounded-[23px] border border-white/[0.025]"></div>
                                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent"></div>
                                <div className="absolute left-6 right-6 top-0 h-14 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.055),transparent_68%)] opacity-60"></div>

                                <div className="relative z-10 mb-7 border-b border-white/[0.06] pb-6 md:mb-8 md:min-h-[11.25rem]">
                                    <div className="flex h-full flex-col">
                                        <div className="mb-4 flex min-h-[2.75rem] items-start md:mb-5 md:min-h-[3rem]">
                                            <span className="inline-flex rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-[10px] md:text-[11px] font-semibold tracking-[0.2em] text-slate-400/90">常见的角膜塑形方案</span>
                                        </div>
                                        <div className="flex min-h-[4.75rem] items-start md:min-h-[5.25rem]">
                                            <h4 className="max-w-[10ch] text-[1.92rem] md:text-[2.05rem] font-semibold leading-[1.15] text-slate-100 tracking-[0.01em]">OK 镜 (Ortho-K)</h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative z-10 flex flex-col gap-5 md:grid md:flex-1 md:grid-rows-4 md:gap-0">
                                    <div className="pt-0 md:pr-2">
                                        <span className="mb-3 block text-[10px] md:text-[11px] font-semibold tracking-[0.2em] text-slate-500/90 uppercase">防控原理</span>
                                        <p className="break-keep">
                                            <strong className="mb-2 block text-[1.02rem] md:text-[1.08rem] font-semibold leading-snug text-slate-100">以角膜塑形辅助管理。</strong>
                                            <span className="block max-w-[30ch] text-[13.5px] md:text-[14px] font-medium leading-6 text-slate-400/78">通过夜间佩戴，暂时调整角膜形态，帮助白天视力表现。</span>
                                        </p>
                                    </div>
                                    <div className="border-t border-white/[0.05] pt-5 md:pr-2 md:pt-6">
                                        <span className="mb-3 block text-[10px] md:text-[11px] font-semibold tracking-[0.2em] text-slate-500/90 uppercase">安全性评估</span>
                                        <p className="break-keep">
                                            <strong className="mb-2 block text-[1.02rem] md:text-[1.08rem] font-semibold leading-snug text-amber-400/92">清洁与复查要求高。</strong>
                                            <span className="block max-w-[30ch] text-[13.5px] md:text-[14px] font-medium leading-6 text-slate-400/78">若护理不到位，角膜感染与刺激风险会增加。</span>
                                        </p>
                                    </div>
                                    <div className="border-t border-white/[0.05] pt-5 md:pr-2 md:pt-6">
                                        <span className="mb-3 block text-[10px] md:text-[11px] font-semibold tracking-[0.2em] text-slate-500/90 uppercase">孩子体验</span>
                                        <p className="break-keep">
                                            <strong className="mb-2 block text-[1.02rem] md:text-[1.08rem] font-semibold leading-snug text-slate-100">需要一段适应期。</strong>
                                            <span className="block max-w-[30ch] text-[13.5px] md:text-[14px] font-medium leading-6 text-slate-400/78">初戴常见异物感，家长也需配合日常护理。</span>
                                        </p>
                                    </div>
                                    <div className="border-t border-white/[0.05] pt-5 md:pr-2 md:pt-6">
                                        <span className="mb-3 block text-[10px] md:text-[11px] font-semibold tracking-[0.2em] text-slate-500/90 uppercase">费用结构</span>
                                        <p className="break-keep">
                                            <strong className="mb-2 block text-[1.02rem] md:text-[1.08rem] font-semibold leading-snug text-slate-100">后续维护支出持续。</strong>
                                            <span className="block max-w-[30ch] text-[13.5px] md:text-[14px] font-medium leading-6 text-slate-400/78">除镜片费用外，还包括复查、护理液与定期更换。</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Eye Drops */}
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white/[0.05] bg-[linear-gradient(180deg,rgba(8,13,26,0.9),rgba(5,10,21,0.78)_52%,rgba(4,8,18,0.68))] p-7 md:p-9 ring-1 ring-inset ring-white/[0.025] transition-all group shadow-[0_14px_40px_rgba(0,0,0,0.24)] hover:border-white/[0.08] hover:ring-white/[0.035]">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(148,163,184,0.1),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.5),transparent_44%)] opacity-90"></div>
                                <div className="absolute inset-[1px] rounded-[23px] border border-white/[0.025]"></div>
                                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent"></div>
                                <div className="absolute left-6 right-6 top-0 h-14 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.055),transparent_68%)] opacity-60"></div>

                                <div className="relative z-10 mb-7 border-b border-white/[0.06] pb-6 md:mb-8 md:min-h-[11.25rem]">
                                    <div className="flex h-full flex-col">
                                        <div className="mb-4 flex min-h-[2.75rem] items-start md:mb-5 md:min-h-[3rem]">
                                            <span className="inline-flex rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-[10px] md:text-[11px] font-semibold tracking-[0.2em] text-slate-400/90">常见的药物辅助方案</span>
                                        </div>
                                        <div className="flex min-h-[4.75rem] items-start md:min-h-[5.25rem]">
                                            <h4 className="max-w-[10ch] text-[1.92rem] md:text-[2.05rem] font-semibold leading-[1.15] text-slate-100 tracking-[0.01em]">阿托品药水</h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative z-10 flex flex-col gap-5 md:grid md:flex-1 md:grid-rows-4 md:gap-0">
                                    <div className="pt-0 md:pr-2">
                                        <span className="mb-3 block text-[10px] md:text-[11px] font-semibold tracking-[0.2em] text-slate-500/90 uppercase">防控原理</span>
                                        <p className="break-keep">
                                            <strong className="mb-2 block text-[1.02rem] md:text-[1.08rem] font-semibold leading-snug text-slate-100">以药物方式辅助控制。</strong>
                                            <span className="block max-w-[30ch] text-[13.5px] md:text-[14px] font-medium leading-6 text-slate-400/78">临床上常用于延缓近视发展与眼轴增长。</span>
                                        </p>
                                    </div>
                                    <div className="border-t border-white/[0.05] pt-5 md:pr-2 md:pt-6">
                                        <span className="mb-3 block text-[10px] md:text-[11px] font-semibold tracking-[0.2em] text-slate-500/90 uppercase">安全性评估</span>
                                        <p className="break-keep">
                                            <strong className="mb-2 block text-[1.02rem] md:text-[1.08rem] font-semibold leading-snug text-amber-400/92">可能出现短暂不适。</strong>
                                            <span className="block max-w-[30ch] text-[13.5px] md:text-[14px] font-medium leading-6 text-slate-400/78">部分孩子会有畏光或近距离视物模糊。</span>
                                        </p>
                                    </div>
                                    <div className="border-t border-white/[0.05] pt-5 md:pr-2 md:pt-6">
                                        <span className="mb-3 block text-[10px] md:text-[11px] font-semibold tracking-[0.2em] text-slate-500/90 uppercase">孩子体验</span>
                                        <p className="break-keep">
                                            <strong className="mb-2 block text-[1.02rem] md:text-[1.08rem] font-semibold leading-snug text-slate-100">每天点药要规律。</strong>
                                            <span className="block max-w-[30ch] text-[13.5px] md:text-[14px] font-medium leading-6 text-slate-400/78">通常需要家长提醒，长期执行更关键。</span>
                                        </p>
                                    </div>
                                    <div className="border-t border-white/[0.05] pt-5 md:pr-2 md:pt-6">
                                        <span className="mb-3 block text-[10px] md:text-[11px] font-semibold tracking-[0.2em] text-slate-500/90 uppercase">费用结构</span>
                                        <p className="break-keep">
                                            <strong className="mb-2 block text-[1.02rem] md:text-[1.08rem] font-semibold leading-snug text-slate-100">属于持续性支出。</strong>
                                            <span className="block max-w-[30ch] text-[13.5px] md:text-[14px] font-medium leading-6 text-slate-400/78">使用周期通常较长，需配合复诊与药费。</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Supplements */}
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white/[0.05] bg-[linear-gradient(180deg,rgba(8,13,26,0.9),rgba(5,10,21,0.78)_52%,rgba(4,8,18,0.68))] p-7 md:p-9 ring-1 ring-inset ring-white/[0.025] transition-all group shadow-[0_14px_40px_rgba(0,0,0,0.24)] hover:border-white/[0.08] hover:ring-white/[0.035]">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(148,163,184,0.1),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.5),transparent_44%)] opacity-90"></div>
                                <div className="absolute inset-[1px] rounded-[23px] border border-white/[0.025]"></div>
                                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent"></div>
                                <div className="absolute left-6 right-6 top-0 h-14 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.055),transparent_68%)] opacity-60"></div>

                                <div className="relative z-10 mb-7 border-b border-white/[0.06] pb-6 md:mb-8 md:min-h-[11.25rem]">
                                    <div className="flex h-full flex-col">
                                        <div className="mb-4 flex min-h-[2.75rem] items-start md:mb-5 md:min-h-[3rem]">
                                            <span className="inline-flex rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-[10px] md:text-[11px] font-semibold tracking-[0.2em] text-slate-400/90">常见的营养辅助方案</span>
                                        </div>
                                        <div className="flex min-h-[4.75rem] items-start md:min-h-[5.25rem]">
                                            <h4 className="max-w-[10ch] text-[1.92rem] md:text-[2.05rem] font-semibold leading-[1.15] text-slate-100 tracking-[0.01em]">儿童叶黄素等补剂</h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative z-10 flex flex-col gap-5 md:grid md:flex-1 md:grid-rows-4 md:gap-0">
                                    <div className="pt-0 md:pr-2">
                                        <span className="mb-3 block text-[10px] md:text-[11px] font-semibold tracking-[0.2em] text-slate-500/90 uppercase">防控原理</span>
                                        <p className="break-keep">
                                            <strong className="mb-2 block text-[1.02rem] md:text-[1.08rem] font-semibold leading-snug text-slate-100">以营养补充为主。</strong>
                                            <span className="block max-w-[30ch] text-[13.5px] md:text-[14px] font-medium leading-6 text-slate-400/78">可作为日常护眼支持，但不是直接的度数控制方案。</span>
                                        </p>
                                    </div>
                                    <div className="border-t border-white/[0.05] pt-5 md:pr-2 md:pt-6">
                                        <span className="mb-3 block text-[10px] md:text-[11px] font-semibold tracking-[0.2em] text-slate-500/90 uppercase">控制效力</span>
                                        <p className="break-keep">
                                            <strong className="mb-2 block text-[1.02rem] md:text-[1.08rem] font-semibold leading-snug text-amber-400/92">更适合作为辅助。</strong>
                                            <span className="block max-w-[30ch] text-[13.5px] md:text-[14px] font-medium leading-6 text-slate-400/78">若单独依赖补剂，可能延误更有效的干预时机。</span>
                                        </p>
                                    </div>
                                    <div className="border-t border-white/[0.05] pt-5 md:pr-2 md:pt-6">
                                        <span className="mb-3 block text-[10px] md:text-[11px] font-semibold tracking-[0.2em] text-slate-500/90 uppercase">孩子体验</span>
                                        <p className="break-keep">
                                            <strong className="mb-2 block text-[1.02rem] md:text-[1.08rem] font-semibold leading-snug text-slate-100">日常补充较容易。</strong>
                                            <span className="block max-w-[30ch] text-[13.5px] md:text-[14px] font-medium leading-6 text-slate-400/78">多数孩子接受度较高，执行门槛相对低。</span>
                                        </p>
                                    </div>
                                    <div className="border-t border-white/[0.05] pt-5 md:pr-2 md:pt-6">
                                        <span className="mb-3 block text-[10px] md:text-[11px] font-semibold tracking-[0.2em] text-slate-500/90 uppercase">费用结构</span>
                                        <p className="break-keep">
                                            <strong className="mb-2 block text-[1.02rem] md:text-[1.08rem] font-semibold leading-snug text-slate-100">属于长期日常支出。</strong>
                                            <span className="block max-w-[30ch] text-[13.5px] md:text-[14px] font-medium leading-6 text-slate-400/78">金额分散，通常纳入家庭营养预算。</span>
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
