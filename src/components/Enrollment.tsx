import React from 'react';

export default function EnrollmentSection() {
    const containerClass = "relative z-10 max-w-[1600px] w-[90vw] mx-auto px-8 md:px-12";

    return (
        <section id="enrollment" className="relative py-16 md:py-20 bg-gradient-to-b from-transparent via-emerald-950/20 to-transparent">
            <div className={containerClass}>
                <div className="max-w-[1100px] mx-auto text-center relative z-10">
                    <h2 className="text-[2.2rem] md:text-[3rem] font-[900] text-white leading-[1.1] tracking-tight mb-8 px-4">
                        咨询专家：开始视力 <br className="md:hidden" />
                        <span className="text-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]">U-Turn</span>
                    </h2>
                    <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
                        <div className="relative group">
                            {/* Tyndall God Ray focused on Button */}
                            <div className="god-ray w-[300px] h-[300px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-1000"></div>
                            <button className="relative bg-white text-emerald-950 px-16 md:px-20 py-5 md:py-6 rounded-full font-bold text-lg md:text-xl tracking-widest shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:bg-emerald-400 hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:text-white transition-all duration-300 transform hover:-translate-y-2 border-none cursor-pointer z-10">
                                先咨询孩子适不适合
                            </button>
                        </div>
                        <div className="flex items-center gap-3 text-slate-400 mt-4 md:mt-0 bg-white/5 py-3 px-6 rounded-full border border-white/10 backdrop-blur-sm relative z-10">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]"></div>
                            <span className="text-sm md:text-base font-medium tracking-wide">只需 30 秒登记，剩下的由我们为你把关。</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
