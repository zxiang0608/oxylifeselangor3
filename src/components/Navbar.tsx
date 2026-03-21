"use client";

import React from 'react';
import { trackWhatsAppCtaClick } from "@/lib/tracking";

type NavbarProps = {
    contactLabel?: string;
    contactHref?: string;
};

export default function Navbar({
    contactLabel = '专家咨询',
    contactHref = '#enrollment',
}: NavbarProps) {
    return (
        <nav className="absolute top-0 left-0 w-full z-[100] transition-all duration-300 py-2.5 md:py-3">
            {/* Background Container */}
            <div className="absolute inset-0 bg-[#080E1A]/28 backdrop-blur-[22px] border-b border-white/5 shadow-[0_6px_34px_rgba(0,0,0,0.52)]"></div>
            {/* Film Grain Layer (2% Opacity) */}
            <div className="absolute inset-0 opacity-[0.02] bg-noise pointer-events-none"></div>

            <div className="max-w-[1600px] w-[94vw] md:w-[90vw] mx-auto min-h-[3.9rem] md:min-h-0 flex items-center justify-between relative z-10 transition-transform duration-300">
                <div className="flex items-center pt-[1px]">
                    <img src="/images/oxylife-logo-new.png" alt="Oxylife" className="h-[1.75rem] md:h-[2.25rem] w-auto object-contain transition-all duration-300" />
                </div>
                <div className="hidden md:flex gap-12">
                    {[
                        { name: '为什么会近视/散光', path: 'comparison' },
                        { name: '自愈原理', path: 'mechanism' },
                        { name: '操作方式', path: 'path' },
                        { name: '真实见证', path: 'proof' },
                    ].map(item => (
                        <a key={item.name} href={`#${item.path}`} className="text-[12px] font-bold tracking-[0.1em] text-slate-300 hover:text-emerald-400 transition-colors no-underline">
                            {item.name}
                        </a>
                    ))}
                </div>
                {/* CTA Button */}
                <a
                    href={contactHref}
                    target={contactHref.startsWith('http') ? '_blank' : undefined}
                    rel={contactHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                    onClick={() =>
                        trackWhatsAppCtaClick({
                            ctaLocation: "navbar",
                            ctaLabel: contactLabel,
                            href: contactHref,
                        })
                    }
                    className="relative group min-w-[7.9rem] md:min-w-0 whitespace-nowrap text-[10px] md:text-[11px] font-[800] text-white tracking-[0.08em] md:tracking-[0.16em] bg-blue-600 px-4.5 md:px-8 py-2.5 md:py-3.5 rounded-full hover:bg-blue-500 transition-all cursor-pointer overflow-visible shadow-[0_10px_24px_rgba(37,99,235,0.22)] no-underline inline-flex items-center justify-center text-center"
                >
                    {contactLabel}
                    <div className="absolute inset-0 rounded-full shadow-[0_0_20px_#142B23] opacity-60 group-hover:opacity-100 animate-pulse transition-opacity duration-1000 -z-10 bg-[#142B23]/20"></div>
                </a>
            </div>
        </nav>
    );
}
