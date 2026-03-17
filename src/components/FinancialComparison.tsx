import React from 'react';
type FinancialComparisonProps = {
    trialLabel?: string;
    trialHref?: string;
};

export default function FinancialComparison({
    trialLabel = '锁定 RM49 线下体验',
    trialHref = '#enrollment',
}: FinancialComparisonProps) {
    const rows = [
        {
            id: 1,
            name: "放任不管（频繁换镜）",
            desc: "10年内持续换镜 + 度数管理风险累积 + 成年后可能面对更高干预成本",
            price: "15,000+",
            type: "loss",
            perPersonLabel: "（长期被动消耗）"
        },
        {
            id: 2,
            name: "防控镜片（10年计划）",
            desc: "发育期通常需要多次更换镜片，长期投入持续累积",
            price: "15,000",
            type: "loss",
            perPersonLabel: "（按人头持续投入）"
        },
        {
            id: 3,
            name: "OK镜 / 隐形眼镜（5年）",
            desc: "镜片损耗与更换风险存在，护理液等后续支出也会持续累积",
            price: "12,000",
            type: "loss",
            perPersonLabel: "（后续维护支出持续）"
        },
        {
            id: 4,
            name: "视力保健品（5年）",
            desc: "每月持续补充叶黄素、营养品，花费不断累积，变化却未必明显",
            price: "9,000",
            type: "loss",
            perPersonLabel: "（长期日常支出）"
        },
        {
            id: 5,
            name: "IZON 视力自愈方案",
            desc: "今日首诊：40分钟专家1对1指导 + 深度评估",
            price: "49",
            type: "win",
            perPersonLabel: "体验价",
            remark: "可一次买断，全家共享"
        }
    ];

    return (
        <section className="relative py-12 md:py-20 bg-[#080E1A] overflow-hidden">
            {/* Ambient Background Light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-[1200px] w-[90vw] mx-auto relative z-10">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="mb-5 font-[900] tracking-tight text-white">
                        <span className="mx-auto block max-w-[18.6rem] text-[1.94rem] leading-[1.08] md:hidden">
                            孩子的眼睛
                            <br />
                            <span className="text-emerald-400">你打算花多少钱</span>
                            <br />
                            <span className="text-emerald-400">“试错”？</span>
                        </span>
                        <span className="hidden text-[3rem] md:block">
                            孩子的眼睛，
                            <span className="text-emerald-400">你打算花多少钱“试错”？</span>
                        </span>
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
                        这是一份 5–10 年的真实视力账单。与其把钱花在反复试错与被动消耗上，不如先用更小成本确认更对的方向。
                    </p>
                </div>

                {/* 3D Frosted Glass Card */}
                <div className="relative backdrop-blur-[20px] bg-white/[0.02] border border-white/10 rounded-[2rem] p-4 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden mb-10 md:mb-16 max-w-[1000px] mx-auto">
                    {/* Inner Highlights */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none"></div>
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                    <div className="flex flex-col space-y-2.5 relative z-10">
                        {rows.map((row) => (
                            <div
                                key={row.id}
                                className={`flex flex-col md:flex-row items-start md:items-center justify-between p-4 md:p-6 rounded-2xl transition-all ${row.type === 'win'
                                    ? 'bg-emerald-500/10 border border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.15)] mt-4'
                                    : 'bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.025]'
                                    }`}
                            >
                                <div className="grid w-full grid-cols-[minmax(0,1fr)_7.8rem] gap-x-3 gap-y-3 md:grid-cols-[minmax(0,1fr)_12.5rem] md:items-center">
                                    <div className="min-w-0 pr-1 md:pr-3">
                                        <div className="min-w-0 max-w-[15.25rem] md:max-w-none">
                                            <h3 className={`font-bold ${row.type === 'win' ? 'text-[1.02rem] md:text-2xl text-emerald-400' : 'text-[1rem] md:text-[1.55rem] text-slate-200'} mb-1.5 tracking-wide leading-snug`}>
                                                {row.name}
                                            </h3>
                                            <p className={`${row.type === 'win' ? 'text-emerald-100/72' : 'text-slate-300/92'} text-[13.5px] md:text-[15px] leading-[1.58] max-w-[23ch] md:max-w-[38ch]`}>
                                                {row.desc}
                                            </p>
                                        </div>
                                    </div>

                                    <div className={`w-[7.8rem] md:w-[12.5rem] flex flex-col justify-center self-center rounded-[18px] bg-white/[0.02] px-3.5 py-3 text-center md:self-center md:border-l md:border-white/[0.05] md:rounded-none md:bg-transparent md:px-0 md:py-0 md:pl-7 md:items-end md:text-right`}>
                                        <div className={`font-[900] text-[1.16rem] md:text-[3.2rem] tracking-tighter flex items-end justify-center md:justify-end gap-1 ${row.type === 'win' ? 'text-emerald-400' : 'text-slate-300'}`}>
                                            <span className={`text-[10px] md:text-lg mb-1 ${row.type === 'win' ? 'text-emerald-400' : 'text-slate-500'}`}>RM</span>
                                            {row.price}
                                        </div>
                                        {row.type === 'win' && (
                                            <div className="mt-1 text-[11px] sm:text-xs font-bold tracking-wider text-emerald-300 text-center md:text-right">
                                                {row.perPersonLabel}
                                            </div>
                                        )}
                                        {row.type === 'win' && row.remark && (
                                            <div className="hidden md:block mt-2.5 text-emerald-100/78 text-[11px] md:text-[12px] leading-tight max-w-[200px] text-right font-medium">
                                                {row.remark}
                                            </div>
                                        )}
                                    </div>

                                    {row.type === 'win' && row.remark && (
                                        <div className="col-span-2 pt-0.5 text-center text-emerald-100/78 text-[11px] md:text-[12px] leading-tight font-medium md:hidden">
                                            {row.remark}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Final RM49 Button - Breathing Glow */}
                <div id="comparison-cta" data-cta-zone="true" className="flex justify-center relative z-20">
                    <a
                        href={trialHref}
                        target={trialHref.startsWith('http') ? '_blank' : undefined}
                        rel={trialHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="relative group inline-block no-underline"
                    >
                        {/* Hero breathing glow behind the button */}
                        <div className="absolute inset-0 bg-emerald-500 rounded-full blur-[25px] opacity-50 group-hover:opacity-100 animate-pulse transition-opacity duration-1000"></div>

                        <span className="relative whitespace-nowrap px-8 py-4 md:px-12 md:py-5 bg-emerald-500 text-emerald-950 font-[900] text-[0.98rem] md:text-2xl tracking-[0.06em] md:tracking-wider rounded-full hover:bg-emerald-400 transition-all shadow-[0_0_40px_rgba(16,185,129,0.3)] flex items-center gap-2.5 md:gap-3">
                            {trialLabel}
                            <div className="bg-emerald-900/10 rounded-full p-1 border border-emerald-900/20">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </div>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}
