import React from 'react';
import { Target, Sparkles, Activity as MuscleIcon, Eye, ShieldCheck } from 'lucide-react';

export default function MechanismSection() {
    const containerClass = "max-w-[1600px] w-[90vw] mx-auto px-8 md:px-12 relative z-10";
    const methods = [
        {
            step: "01",
            icon: <MuscleIcon size={28} />,
            title: "眼外肌平衡训练",
            subtitle: "核心步骤",
            mechanism: "引导双眼跟随目标移动，训练眼外肌协同与稳定。",
            benefit: "看远看近更顺，减轻用眼时的紧张与吃力感。"
        },
        {
            step: "02",
            icon: <Target size={28} />,
            title: "远近调节训练",
            subtitle: "核心步骤",
            mechanism: "通过远近切换练习，提升对焦与调节反应。",
            benefit: "看书、看屏幕、看远切换更自然，不易疲劳。"
        },
        {
            step: "03",
            icon: <Eye size={28} />,
            title: "视网膜光刺激",
            subtitle: "核心步骤",
            mechanism: "以特定光学刺激激活视网膜反应，辅助视觉信号处理。",
            benefit: "建立更稳定的视觉输入基础，支持整体视觉表现。"
        },
        {
            step: "04",
            icon: <Sparkles size={28} />,
            title: "瞳孔反应训练",
            subtitle: "核心步骤",
            mechanism: "通过明暗变化训练瞳孔收缩与放大反应。",
            benefit: "不同光线下看得更稳，日常用眼更轻松。"
        }
    ];

    return (
        <section id="mechanism" className="py-12 md:py-20 relative">
            <div className={containerClass}>
                <div className="mb-8 md:mb-16 max-w-[1200px] mx-auto text-center">
                    <div className="nurture-tag justify-center w-full">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
                        四步视觉训练系统
                    </div>
                    <h2 className="mb-4 md:mb-6 font-[900] tracking-tighter leading-[1.08] text-white">
                        <span className="mx-auto flex max-w-[14.5rem] flex-col items-center text-[2.05rem] md:hidden">
                                <span className="block w-[10.8rem] text-center">1 个按钮</span>
                            <span className="mt-1 block w-full text-center">开启视力</span>
                            <span className="mt-1 block w-[7.3rem] text-center text-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]">U-Turn</span>
                        </span>
                        <span className="hidden md:block md:text-[3rem]">
                            <span className="whitespace-nowrap">1 个按钮，开启视力</span>
                            <span className="ml-2 whitespace-nowrap text-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]">U-Turn</span>
                        </span>
                    </h2>
                    <p className="text-slate-300 text-[1.05rem] md:text-xl max-w-[20rem] md:max-w-[640px] mx-auto font-medium leading-[1.55] md:leading-relaxed">
                        <span className="block md:inline whitespace-nowrap">每天 5 分钟，一键完成</span>
                        <span className="block md:inline md:ml-1 whitespace-nowrap">完整视觉训练流程。</span>
                    </p>
                </div>

                <div className="max-w-[1380px] mx-auto mb-8 md:mb-12">
                    <p className="text-slate-300/92 text-[14px] md:text-lg max-w-[22rem] md:max-w-[940px] mx-auto text-center font-medium leading-[1.65] md:leading-relaxed mb-4 md:mb-7">
                        <span className="block md:inline whitespace-nowrap">4 个训练步骤：肌肉协调、对焦调节，</span>
                        <span className="block md:inline md:ml-1 whitespace-nowrap">视网膜刺激与瞳孔反应，</span>
                        <span className="block md:inline md:ml-1 whitespace-nowrap">帮助孩子逐步改善视觉表现。</span>
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
                                            <span className="mb-0.5 block text-[10px] font-semibold tracking-[0.14em] text-slate-400/72">{method.subtitle}</span>
                                            <h4 className="text-[1.28rem] font-[900] tracking-tight leading-[1.08] text-white">{method.title}</h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative z-10 h-px max-w-[96%] bg-gradient-to-r from-white/[0.12] via-white/[0.07] to-transparent mb-3.5" />

                                <div className="relative z-10 flex flex-col gap-3">
                                    <div className="rounded-2xl bg-white/[0.02] px-3 py-3">
                                        <p className="text-[12px] font-semibold tracking-[0.12em] text-slate-500/90 uppercase mb-1.5">作用机制</p>
                                        <p className="text-[16px] text-slate-200 leading-[1.65] font-medium">{method.mechanism}</p>
                                    </div>
                                    <div className="rounded-2xl bg-white/[0.015] px-3 py-3">
                                        <p className="text-[12px] font-semibold tracking-[0.12em] text-slate-500/90 uppercase mb-1.5">家长感受</p>
                                        <p className="text-[15.5px] text-slate-300/92 leading-[1.65] font-medium">{method.benefit}</p>
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
                            <span>向右滑动查看更多</span>
                            <span className="text-slate-600">1/4</span>
                        </div>
                    </div>

                    <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
                        {methods.map((method, i) => (
                            <div key={i} className="glass-panel px-5 py-6 md:px-6 md:py-7 group border-white/[0.05] transition-all duration-500 flex flex-col relative overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.025),rgba(255,255,255,0.01))] shadow-[0_16px_42px_rgba(0,0,0,0.16)]">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.05),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.35),transparent_44%)] opacity-90"></div>
                                <div className="absolute inset-[1px] rounded-[23px] border border-white/[0.025]"></div>

                                <div className="relative z-10 mb-4 md:mb-5">
                                    <span className="absolute right-0 top-0 text-[40px] md:text-[44px] lg:text-[50px] font-[900] text-white/[0.04] leading-none select-none transition-colors duration-500">
                                        {method.step}
                                    </span>
                                    <div className="flex items-center gap-4 md:gap-5 lg:gap-6 pr-7 md:pr-8 lg:pr-10">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center self-center rounded-2xl border border-emerald-500/18 bg-emerald-500/[0.06] text-emerald-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                                            {method.icon}
                                        </div>
                                        <div className="min-w-0 flex-1 pl-1 md:pl-4 lg:pl-9">
                                            <span className="mb-1.5 block text-[12px] md:text-[13px] font-semibold tracking-[0.14em] text-slate-400/72">{method.subtitle}</span>
                                            <h4 className="text-[1.62rem] md:text-[1.72rem] lg:text-[1.88rem] font-[900] tracking-tight leading-[1.08] text-white">{method.title}</h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative z-10 h-px max-w-[92%] bg-gradient-to-r from-white/[0.14] via-white/[0.08] to-transparent mb-4 md:mb-5" />

                                <div className="relative z-10 flex flex-col gap-4">
                                    <div className="border-t border-white/[0.04] pt-3.5 first:border-t-0 first:pt-0">
                                        <div className="grid grid-cols-1 xl:grid-cols-[5.5rem_minmax(0,1fr)] gap-y-1.5 xl:gap-x-3 items-start">
                                            <span className="block self-start text-[14px] md:text-[15px] leading-8 md:leading-[2rem] font-semibold tracking-[0.12em] text-slate-500/92 uppercase">作用机制</span>
                                            <p className="max-w-[30ch] xl:max-w-none text-[18px] md:text-[18.5px] text-slate-200 leading-8 md:leading-[2rem] font-medium">{method.mechanism}</p>
                                        </div>
                                    </div>
                                    <div className="border-t border-white/[0.04] pt-3.5">
                                        <div className="grid grid-cols-1 xl:grid-cols-[5.5rem_minmax(0,1fr)] gap-y-1.5 xl:gap-x-3 items-start">
                                            <span className="block self-start text-[14px] md:text-[15px] leading-8 md:leading-[2rem] font-semibold tracking-[0.12em] text-slate-500/92 uppercase">家长感受</span>
                                            <p className="max-w-[30ch] xl:max-w-none text-[18px] md:text-[18.5px] text-slate-400 leading-8 md:leading-[2rem] font-medium">{method.benefit}</p>
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
                                            按下开始 → 孩子看 5 分钟 → 结束后关机
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden md:flex items-center justify-center gap-3 text-white">
                                <div className="w-10 h-10 rounded-full bg-emerald-500/16 flex items-center justify-center shrink-0 border border-emerald-500/18">
                                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse drop-shadow-[0_0_8px_rgba(16,185,129,1)]"></div>
                                </div>
                                <p className="text-[1.7rem] font-bold tracking-tight leading-snug max-w-[20rem] md:max-w-none">
                                    <span className="hidden md:inline">每天流程：按下开始 <span className="text-emerald-400 mx-1.5 md:mx-2 font-black">→</span> 孩子看 5 分钟 <span className="text-emerald-400 mx-1.5 md:mx-2 font-black">→</span> 结束后关机。</span>
                                </p>
                            </div>

                            <div className="hidden md:flex flex-wrap gap-2 items-center justify-center">
                                <span className="flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-[0.14em] text-emerald-300">
                                    <ShieldCheck size={13} /> 全程 0 接触眼球
                                </span>
                                <span className="flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-[0.14em] text-emerald-300">
                                    <ShieldCheck size={13} /> 0 药物依赖
                                </span>
                                <span className="flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-[0.14em] text-emerald-300">
                                    <ShieldCheck size={13} /> 0 额外开销
                                </span>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}
