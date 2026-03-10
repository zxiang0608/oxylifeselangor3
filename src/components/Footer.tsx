import React from 'react';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-[#01040a] relative z-20">
            <div className="max-w-[1180px] w-[90vw] mx-auto px-8 md:px-10 py-10 md:py-11">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 items-start justify-items-center md:pl-[5%]">
                    <div className="w-full max-w-[20rem]">
                        <div className="mb-2">
                            <div className="relative w-[13rem] h-[13rem] overflow-hidden flex items-center justify-center -ml-3">
                                <Image
                                    src="/images/oxylife-logo-new.png"
                                    alt="Oxylife"
                                    fill
                                    sizes="208px"
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-[20rem]">
                        <p className="text-slate-500 text-[11px] font-semibold tracking-[0.16em] uppercase mb-3">亲临体验</p>
                        <p className="text-white text-[1.12rem] font-semibold tracking-tight mb-2.5">Oxylife Selangor</p>
                        <p className="text-slate-400 text-[15px] leading-relaxed font-medium mb-4">
                            A-13-10, Pinnacle Petaling Jaya, Lrg. Utara, Pjs 52, 46200 Petaling Jaya, Selangor
                        </p>
                        <p className="text-slate-500 text-[11px] font-semibold tracking-[0.16em] uppercase mb-2">联系电话</p>
                        <p className="text-slate-300 text-[15px] leading-relaxed font-medium">
                            +6011-5559 4933 (Tay)
                        </p>
                    </div>

                    <div className="w-full max-w-[20rem]">
                        <p className="text-slate-500 text-[11px] font-semibold tracking-[0.16em] uppercase mb-3">医疗资质</p>
                        <p className="text-white text-[1.14rem] font-semibold tracking-tight mb-1.5">MDA 注册号 GA1448221-77276</p>
                        <div className="w-12 h-px bg-gradient-to-r from-emerald-400/35 to-transparent mb-4" />
                        <p className="text-slate-400 text-[14px] leading-relaxed font-medium mb-3.5">
                            儿童与家庭视力训练方案
                        </p>
                        <div className="flex flex-col gap-2 text-[14px] text-slate-300">
                            <a href="#" className="hover:text-emerald-300 transition-colors no-underline">Privacy Policy</a>
                            <a href="#" className="hover:text-emerald-300 transition-colors no-underline">Terms of Service</a>
                        </div>
                        <p className="mt-3.5 text-[13px] text-slate-500 leading-relaxed">
                            © 2025 Oxylife. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
