"use client";

import React, { useState, useEffect } from 'react';

export default function Navbar() {
    return (
        <nav className="absolute top-0 left-0 w-full z-[100] transition-all duration-300 py-2 md:py-3">
            {/* Background Container */}
            <div className="absolute inset-0 bg-[#080E1A]/20 backdrop-blur-[20px] border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"></div>
            {/* Film Grain Layer (2% Opacity) */}
            <div className="absolute inset-0 opacity-[0.02] bg-noise pointer-events-none"></div>

            <div className="max-w-[1600px] w-[90vw] mx-auto flex items-center justify-between relative z-10 transition-transform duration-300">
                <div className="flex items-center">
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
                <button className="relative group text-[11px] font-[800] text-white tracking-[0.2em] bg-blue-600 px-8 py-3.5 rounded-full hover:bg-blue-500 transition-all cursor-pointer overflow-visible">
                    专家咨询
                    {/* Breathing Outer Glow */}
                    <div className="absolute inset-0 rounded-full shadow-[0_0_20px_#142B23] opacity-60 group-hover:opacity-100 animate-pulse transition-opacity duration-1000 -z-10 bg-[#142B23]/20"></div>
                </button>
            </div>
        </nav>
    );
}
