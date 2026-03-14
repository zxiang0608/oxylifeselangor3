import React from 'react';

type EnrollmentSectionProps = {
    contactLabel?: string;
    contactHref?: string;
};

export default function EnrollmentSection({
    contactLabel = '先咨询孩子适不适合',
    contactHref = '#enrollment',
}: EnrollmentSectionProps) {
    const containerClass = "relative z-10 max-w-[1600px] w-[90vw] mx-auto px-8 md:px-12";

    return (
        <section id="enrollment" data-cta-zone="true" className="relative py-16 md:py-20 bg-gradient-to-b from-transparent via-emerald-950/20 to-transparent">
            <div className={containerClass}>
                <div className="max-w-[1100px] mx-auto text-center relative z-10">
                    <h2 className="text-[2rem] md:text-[3rem] font-[900] text-white leading-[1.08] tracking-tight mb-8 px-4">
                        <span className="block md:inline">咨询专家：</span>
                        <span className="block md:inline whitespace-nowrap">
                            开始视力{" "}
                            <span className="text-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]">U-Turn</span>
                        </span>
                    </h2>
                    <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
                        <div className="relative group">
                            {/* Tyndall God Ray focused on Button */}
                            <div className="god-ray w-[300px] h-[300px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-1000"></div>
                            <a
                                href={contactHref}
                                target={contactHref.startsWith('http') ? '_blank' : undefined}
                                rel={contactHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="relative bg-white text-emerald-950 px-10 md:px-20 py-5 md:py-6 rounded-full font-bold text-lg md:text-xl tracking-[0.06em] md:tracking-widest shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:bg-emerald-400 hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:text-white transition-all duration-300 transform hover:-translate-y-2 border-none cursor-pointer z-10 no-underline inline-flex items-center justify-center text-center whitespace-nowrap"
                            >
                                {contactLabel}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
