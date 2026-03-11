import React from 'react';

export default function PathSection() {
    const containerClass = "max-w-[1600px] w-[90vw] mx-auto px-8 md:px-12 relative z-10";
    const steps = [
        {
            step: "01",
            title: "先确认适不适合",
            summary: "先了解孩子的视力情况，确认是否适合开始",
            relief: "不用一开始就自己猜，也不用盲目尝试",
            cardClass: "border-white/8",
        },
        {
            step: "02",
            title: "再看有没有进步",
            summary: "在家完成视力监测，持续看见变化",
            relief: "不是等孩子说看不清才发现，而是更早掌握进展",
            cardClass: "border-white/10",
        },
        {
            step: "03",
            title: "最后定孩子专属方案",
            summary: "根据监测结果匹配更适合孩子的方案与节奏",
            relief: "每天只需约 5 分钟，家里就能更稳定地执行",
            cardClass: "border-emerald-500/18 shadow-[0_18px_36px_rgba(0,0,0,0.16)]",
        }
    ];

    return (
        <section id="path" className="relative py-12 md:py-20 bg-transparent border-y border-white/5 backdrop-blur-3xl">
            <div className={containerClass}>
                <div className="max-w-[980px] mb-9 md:mb-14 text-center mx-auto">
                    <div className="hidden md:flex nurture-tag text-center w-fit justify-center mx-auto mb-4 text-[10px] md:text-[11px] tracking-[0.18em] opacity-80">THE CLINICAL PROTOCOL</div>
                    <h2 className="text-[2.2rem] md:text-[3rem] font-[900] tracking-tight mb-5 text-white leading-[1.1] w-fit mx-auto">
                        <span className="block whitespace-nowrap">不是复杂流程，</span>
                        <span className="block whitespace-nowrap">而是有人一步一步带着做。</span>
                    </h2>
                    <p className="text-slate-300 font-medium text-[17px] md:text-[19px] leading-relaxed max-w-[24rem] md:max-w-none mx-auto">
                        从评估、监测到专属方案制定，<br className="md:hidden" />
                        全程更清楚，也更容易坚持。
                    </p>
                </div>

                <div className="md:hidden -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 no-scrollbar">
                    {steps.map((item, i) => (
                        <div key={i} className={`glass-panel w-[84vw] max-w-[21.5rem] shrink-0 snap-start px-6 py-6 group relative overflow-hidden transition-colors duration-500 ${item.cardClass}`}>
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.035),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.16),transparent_44%)] pointer-events-none" />

                            <div className="relative z-10">
                                <div className="flex items-center justify-center gap-3 mb-5">
                                    <div className="text-[1.9rem] font-[900] text-emerald-400/26 tracking-tighter leading-none shrink-0">{item.step}</div>
                                    <div className="flex items-center min-h-[2.3rem]">
                                        <h4 className="text-[1.18rem] font-[900] tracking-tight text-white leading-[1.18] whitespace-nowrap">{item.title}</h4>
                                    </div>
                                </div>

                                <div className="w-full h-px bg-gradient-to-r from-white/0 via-white/10 to-white/0 mb-4" />

                                <div className="space-y-3 max-w-[20.5rem] mx-auto text-left">
                                    <p className="text-slate-200 text-[15px] leading-[1.65rem] font-medium">
                                        {item.summary}
                                    </p>
                                    <p className="text-slate-400 text-[14px] leading-relaxed font-medium">
                                        {item.relief}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="md:hidden mt-3 text-center text-[12px] font-medium tracking-[0.08em] text-slate-500">左右滑动查看更多</p>

                <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
                    {steps.map((item, i) => (
                        <div key={i} className={`glass-panel px-8 md:px-9 py-8 md:py-9 group relative overflow-hidden transition-colors duration-500 ${item.cardClass}`}>
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.035),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.16),transparent_44%)] pointer-events-none" />

                            <div className="relative z-10">
                                <div className="flex items-center justify-center gap-4 mb-6">
                                    <div className="text-[2.2rem] md:text-[2.7rem] font-[900] text-emerald-400/26 tracking-tighter leading-none shrink-0">{item.step}</div>
                                    <div className="flex items-center min-h-[2.7rem] md:min-h-[3rem]">
                                        <h4 className="text-[1.3rem] md:text-[1.55rem] font-[900] tracking-tight text-white leading-[1.14] whitespace-nowrap">{item.title}</h4>
                                    </div>
                                </div>

                                <div className="w-full h-px bg-gradient-to-r from-white/0 via-white/10 to-white/0 mb-5" />

                                <div className="space-y-4 max-w-[20.5rem] mx-auto text-left">
                                    <p className="text-slate-200 text-[15px] md:text-[16px] leading-7 font-medium">
                                        {item.summary}
                                    </p>
                                    <p className="text-slate-400 text-[14px] md:text-[15px] leading-relaxed font-medium">
                                        {item.relief}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
