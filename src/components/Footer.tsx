import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-[#01040a] relative z-20">
            <div className="max-w-[1180px] w-[90vw] mx-auto px-6 md:px-10 py-8 md:py-11">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start justify-items-start md:justify-items-center md:pl-[5%]">
                    <div className="w-full max-w-[20rem] flex justify-center md:justify-start">
                        <div className="mb-1">
                            <div className="relative w-[7.5rem] h-[7.5rem] md:w-[13rem] md:h-[13rem] overflow-hidden flex items-center justify-center md:-ml-3">
                                <Image
                                    src="/images/oxylife-logo-new.png"
                                    alt="Oxylife"
                                    fill
                                    sizes="(min-width: 768px) 208px, 120px"
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
                        <p className="text-slate-500 text-[11px] font-semibold tracking-[0.16em] uppercase mb-2">咨询入口</p>
                        <div className="flex flex-col gap-1.5 text-[14px] text-slate-300 mb-4">
                            <Link href="/" className="hover:text-emerald-300 transition-colors no-underline">首页咨询概览</Link>
                            <Link href="/albert" className="hover:text-emerald-300 transition-colors no-underline">儿童视力评估咨询</Link>
                            <Link href="/michelle" className="hover:text-emerald-300 transition-colors no-underline">儿童视力咨询体验</Link>
                        </div>
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
