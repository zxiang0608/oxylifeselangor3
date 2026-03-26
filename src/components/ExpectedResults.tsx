import React from 'react';
import { Trophy, GraduationCap, Eye } from 'lucide-react';

export default function ExpectedResults() {
    const containerClass = "max-w-[1600px] w-[90vw] mx-auto px-8 md:px-12 relative z-10";
    const benefits = [
        {
            icon: <Trophy size={28} />,
            title: "运动更准",
            desc: "看球、接球、跑动时，反应更快，判断更稳。"
        },
        {
            icon: <GraduationCap size={28} />,
            title: "读书更稳",
            desc: "看书看屏幕更轻松，长时间用眼也不容易累。"
        },
        {
            icon: <Eye size={28} />,
            title: "未来更顺",
            desc: "不只是现在看得清，也是在替孩子守住未来眼睛的底子。"
        }
    ];

    return (
        <section id="expected-results" className="py-12 md:py-20 bg-[#121416]">
            <div className={containerClass}>
                <div>
                    <div className="mx-auto mb-5 md:mb-7 max-w-[1320px] flex flex-col items-center text-center">
                        <div className="nurture-tag mx-auto w-fit text-sm md:text-base px-4 py-1.5">真实世界的改变</div>
                        <h2 className="mt-3 mb-3 text-center font-[900] tracking-tight text-white leading-[1.1]">
                            <span className="mx-auto block max-w-[18.6rem] text-[1.92rem] md:hidden">
                                不只是稳住度数
                                <br />
                                也要把孩子的
                                <br />
                                用眼状态带回来
                            </span>
                            <span className="hidden md:block md:max-w-[860px] md:text-[3rem]">
                                <span className="block">不只是稳住度数，</span>
                                <span className="block">也要把孩子的用眼状态带回来。</span>
                            </span>
                        </h2>
                        <p className="text-slate-300/92 font-medium text-[16px] md:text-[17px] max-w-[22rem] md:max-w-[760px] leading-[1.6] md:leading-relaxed mx-auto">
                            <span className="block md:inline whitespace-nowrap">看书、运动、日常用眼，</span>
                            <span className="block md:inline md:ml-1 whitespace-nowrap">都应该慢慢变得更轻松。</span>
                        </p>
                    </div>
                    <div className="max-w-[1380px] mx-auto">
                        <div className="md:hidden grid grid-cols-1 gap-3">
                            {benefits.map((benefit, i) => (
                                <div key={i} className="glass-panel px-5 py-4 bg-white/[0.02] border-white/[0.05] transition-all duration-300 relative overflow-hidden flex flex-col rounded-[22px]">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.04),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.16),transparent_42%)] pointer-events-none" />
                                    <div className="relative z-10 flex flex-col items-center text-center">
                                        <div className="flex items-center justify-center gap-3 mb-2.5">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-emerald-500/16 bg-emerald-500/[0.05] text-emerald-300">
                                                {benefit.icon}
                                            </div>
                                            <h4 className="text-[1.28rem] font-[900] tracking-tight text-white">{benefit.title}</h4>
                                        </div>
                                        <p className="text-slate-300/92 text-[14px] leading-6 font-medium mx-auto max-w-[18.5rem]">
                                            {benefit.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
                            {benefits.map((benefit, i) => (
                                <div key={i} className="glass-panel px-5 py-5 md:px-6 md:py-[1.375rem] bg-white/[0.02] border-white/[0.05] transition-all duration-300 relative overflow-hidden flex flex-col rounded-[22px]">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.04),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.16),transparent_42%)] pointer-events-none" />
                                    <div className="relative z-10 flex flex-col items-center text-center">
                                        <div className="flex items-center justify-center gap-3 mb-2.5">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-emerald-500/16 bg-emerald-500/[0.05] text-emerald-300">
                                                {benefit.icon}
                                            </div>
                                            <h4 className="text-[1.4rem] md:text-[1.55rem] font-[900] tracking-tight text-white">{benefit.title}</h4>
                                        </div>
                                        <p className="text-slate-400 text-[15px] md:text-[16px] leading-6 md:leading-7 font-medium max-w-[34ch] md:whitespace-nowrap mx-auto">
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
