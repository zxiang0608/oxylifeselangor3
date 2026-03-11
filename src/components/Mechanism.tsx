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
            mechanism: "通过引导双眼跟随目标移动，训练眼外肌协同与稳定性。",
            benefit: "帮助孩子看远看近更顺畅，减轻用眼时的紧张与吃力感。"
        },
        {
            step: "02",
            icon: <Target size={28} />,
            title: "远近调节训练",
            subtitle: "核心步骤",
            mechanism: "通过远近切换练习，提升眼睛对焦与调节反应。",
            benefit: "帮助孩子在看书、看屏幕与看远时切换更自然，不易疲劳。"
        },
        {
            step: "03",
            icon: <Eye size={28} />,
            title: "视网膜光刺激",
            subtitle: "核心步骤",
            mechanism: "以特定光学刺激激活视网膜感光反应，辅助视觉信号处理。",
            benefit: "帮助孩子建立更稳定的视觉输入基础，支持整体视觉表现。"
        },
        {
            step: "04",
            icon: <Sparkles size={28} />,
            title: "瞳孔反应训练",
            subtitle: "核心步骤",
            mechanism: "通过明暗变化训练瞳孔收缩与放大的反应速度。",
            benefit: "帮助孩子在不同光线环境下看得更稳定，日常用眼更轻松。"
        }
    ];

    return (
        <section id="mechanism" className="py-12 md:py-20 relative">
            <div className={containerClass}>
                <div className="mb-10 md:mb-16 max-w-[1200px] mx-auto text-center">
                    <div className="nurture-tag justify-center w-full">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
                        四步视觉训练系统
                    </div>
                    <h2 className="text-[2.2rem] md:text-[3rem] font-[900] tracking-tighter mb-6 leading-[1.1] text-white">
                        1 个按钮，开启视力 <br className="md:hidden" /><span className="text-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]">U-Turn</span>
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl max-w-[640px] mx-auto font-medium leading-relaxed">
                        每天 5 分钟，一键完成完整视觉训练流程。
                    </p>
                </div>

                <div className="max-w-[1380px] mx-auto mb-8 md:mb-12">
                    <p className="text-slate-300/88 text-[15px] md:text-lg max-w-[940px] mx-auto text-center font-medium leading-relaxed mb-5 md:mb-7">
                        OXYLIFE 通过 4 个核心训练步骤，从肌肉协调、对焦调节、视网膜刺激到瞳孔反应，帮助孩子逐步改善视觉表现。
                    </p>

                    <div className="md:hidden -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 no-scrollbar">
                        {methods.map((method, i) => (
                            <div key={i} className="glass-panel w-[84vw] max-w-[22rem] shrink-0 snap-start px-4 py-5 group border-white/[0.05] transition-all duration-500 flex flex-col relative overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.025),rgba(255,255,255,0.01))] shadow-[0_16px_42px_rgba(0,0,0,0.16)]">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.05),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.35),transparent_44%)] opacity-90"></div>
                                <div className="absolute inset-[1px] rounded-[23px] border border-white/[0.025]"></div>

                                <div className="relative z-10 mb-4">
                                    <span className="absolute right-0 top-0 text-[34px] font-[900] text-white/[0.04] leading-none select-none transition-colors duration-500">
                                        {method.step}
                                    </span>
                                    <div className="flex items-center gap-3 pr-6">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center self-center rounded-2xl border border-emerald-500/18 bg-emerald-500/[0.06] text-emerald-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                                            {method.icon}
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <span className="mb-1 block text-[11px] font-semibold tracking-[0.14em] text-slate-400/72">{method.subtitle}</span>
                                            <h4 className="text-[1.4rem] font-[900] tracking-tight leading-[1.1] text-white">{method.title}</h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative z-10 h-px max-w-[94%] bg-gradient-to-r from-white/[0.14] via-white/[0.08] to-transparent mb-4" />

                                <div className="relative z-10 flex flex-col gap-3">
                                    <div className="border-t border-white/[0.04] pt-3.5 first:border-t-0 first:pt-0">
                                        <div className="grid grid-cols-1 gap-y-1.5 items-start">
                                            <span className="block self-start text-[12px] leading-6 font-semibold tracking-[0.12em] text-slate-500/92 uppercase">作用机制</span>
                                            <p className="text-[16px] text-slate-200 leading-7 font-medium">{method.mechanism}</p>
                                        </div>
                                    </div>
                                    <div className="border-t border-white/[0.04] pt-3.5">
                                        <div className="grid grid-cols-1 gap-y-1.5 items-start">
                                            <span className="block self-start text-[12px] leading-6 font-semibold tracking-[0.12em] text-slate-500/92 uppercase">家长感受</span>
                                            <p className="text-[16px] text-slate-400 leading-7 font-medium">{method.benefit}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="md:hidden mt-3 text-center text-[12px] font-medium tracking-[0.08em] text-slate-500">左右滑动查看更多</p>

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
                <div className="mb-8 md:mb-10 flex flex-col items-center gap-4 text-center">
                    <div className="w-full max-w-[1380px] px-2 md:px-10">
                        <div className="flex flex-col items-center gap-3">
                            <div className="flex items-center justify-center gap-3 text-white">
                                <div className="w-10 h-10 rounded-full bg-emerald-500/16 flex items-center justify-center shrink-0 border border-emerald-500/18">
                                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse drop-shadow-[0_0_8px_rgba(16,185,129,1)]"></div>
                                </div>
                                <p className="text-[1rem] md:text-[1.7rem] font-bold tracking-tight leading-snug">
                                    每天流程：按下开始 <span className="text-emerald-400 mx-1.5 md:mx-2 font-black">→</span> 孩子看 5 分钟 <span className="text-emerald-400 mx-1.5 md:mx-2 font-black">→</span> 结束后关机。
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 items-center justify-center">
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
