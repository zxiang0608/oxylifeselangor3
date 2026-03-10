import React from 'react';
import Image from 'next/image';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

export default function HrdfCertification() {
    const containerClass = "max-w-[1600px] w-[90vw] mx-auto px-8 md:px-12 relative z-10";

    const checks = [
        {
            title: "完全无创",
            desc: "不接触眼球表面，孩子使用时更安心。",
        },
        {
            title: "无需长期点药",
            desc: "减少家长对依赖性与副作用的顾虑。",
        },
        {
            title: "每天约 5 分钟",
            desc: "家里就能完成，日常更容易坚持。",
        },
    ];

    const certItems = [
        "美国 FDA",
        "韩国 KFDA",
        "ISO 13485",
    ];

    return (
        <section className="py-16 md:py-20 relative overflow-hidden bg-[#080E1A]">

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
                <div className="max-w-[1560px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-6 items-center">

                    {/* LEFT — Safety Copy */}
                    <div className="relative p-2 md:p-3 flex justify-center">
                        <div className="relative z-10 max-w-[36rem] mx-auto text-center">
                            <div className="nurture-tag w-fit mb-6 mx-auto">
                                <ShieldCheck size={14} className="text-emerald-400" />
                                安全与合规
                            </div>

                            <h2 className="text-[2.2rem] md:text-[3rem] font-[900] tracking-tighter mb-4 leading-[1.08] text-white w-fit min-w-[12.5ch] md:min-w-[13.2ch] mx-auto">
                                <span className="block whitespace-nowrap">给孩子用的，</span>
                                <span className="block whitespace-nowrap">安全我们不敢马虎。</span>
                            </h2>

                            <p className="text-slate-400 text-[18px] md:text-[19.5px] leading-relaxed font-medium mb-7 w-fit min-w-[24.5ch] md:min-w-[26ch] mx-auto">
                                <span className="block whitespace-nowrap">每天都要接触孩子的眼睛与用眼习惯，</span>
                                <span className="block whitespace-nowrap">安全、合规、可查询，比什么都重要。</span>
                            </p>

                            <div className="space-y-3.5 md:space-y-4 max-w-[25rem] mx-auto md:pl-6 text-left">
                                {checks.map((check, i) => (
                                    <div key={i} className="flex items-start gap-3.5 text-left">
                                        <CheckCircle2
                                            size={18}
                                            className="text-emerald-400 shrink-0 mt-0.5"
                                        />
                                        <div className="min-w-0">
                                            <p className="text-white text-[1.02rem] md:text-[1.12rem] font-semibold tracking-tight">{check.title}</p>
                                            <p className="mt-0.5 text-slate-400 text-[14px] md:text-[15px] leading-relaxed font-medium">{check.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CENTER — MDA Mark */}
                    <div className="relative flex items-center justify-center overflow-hidden p-2 md:p-3">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05),transparent_62%)] blur-[28px] pointer-events-none" />
                        <div className="relative w-full max-w-[26rem] h-full min-h-[28rem] md:min-h-[31rem]">
                            <Image
                                src="/images/mda.png"
                                alt="MDA"
                                fill
                                sizes="(min-width: 1024px) 26rem, 100vw"
                                className="object-contain object-center drop-shadow-[0_18px_48px_rgba(0,0,0,0.22)]"
                            />
                        </div>
                    </div>

                    {/* RIGHT — Compliance Card */}
                    <div className="relative flex justify-center">
                        <div className="absolute inset-0 bg-emerald-500/[0.035] blur-[72px] rounded-[32px] scale-110 pointer-events-none" />

                        <div className="relative glass-panel p-8 md:p-9 border-white/[0.08] transition-colors duration-500 text-left mx-auto">
                            <div className="w-full max-w-[27rem] mx-auto">
                                <p className="text-slate-500 text-[11px] font-semibold tracking-[0.18em] uppercase mb-7 text-center">注册与合规信息</p>

                                <div className="mb-8 text-center">
                                    <p className="text-slate-400 text-[12px] font-semibold tracking-[0.16em] uppercase mb-2">MDA 注册号</p>
                                    <p className="text-white text-[2.6rem] md:text-[3.45rem] font-[900] tracking-tight leading-none">
                                    GA1448221-77276
                                    </p>
                                    <p className="mt-4 text-slate-500 text-[13px] md:text-[14px] leading-relaxed font-medium max-w-[22rem] mx-auto">
                                        可于马来西亚 MMDR / MDA 系统查询
                                    </p>
                                </div>

                                <div className="border-t border-white/[0.06] pt-5 text-center">
                                    <p className="text-slate-500 text-[11px] font-semibold tracking-[0.14em] uppercase mb-3">其他合规信息</p>
                                    <div className="space-y-2.5 max-w-[23rem] mx-auto">
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
