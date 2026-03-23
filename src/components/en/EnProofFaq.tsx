import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function ProofFaq() {
    const containerClass = "max-w-[1600px] w-[90vw] mx-auto px-8 md:px-12 relative z-10";
    const faqs = [
        {
            q: "Is my child suitable to start?",
            a: [
                "Most children aged 5 and above can be considered.",
                "The key is not only age. Your child should be able to follow simple instructions during training.",
                "If your child is very young or recently had an eye procedure, suitability should be checked first.",
            ],
        },
        {
            q: "What is included in the RM49 session?",
            a: [
                "RM49 includes a basic vision assessment, around 40 minutes of guided experience, and Q&A.",
                "At partner optical outlets, vision is checked first. For home sessions, a basic test is arranged.",
                "After the session, you can review early observations and suitability before deciding.",
                "Try first, then decide with more confidence.",
            ],
        },
        {
            q: "How long is the routine, and is it troublesome?",
            mobileLines: ["How long is the routine,", "and is it troublesome?"],
            a: [
                "It is usually simpler than many parents expect.",
                "In active training periods, it can be around 10-15 minutes per session, up to 3 times daily.",
                "For daily support, many children only need about 5 minutes each session.",
                "It does not require a strict time slot. Most families can do it at home with flexible timing.",
            ],
        },
        {
            q: "Does it hurt? Is it safe?",
            a: [
                "It is non-invasive and does not touch the eyeball.",
                "No medication is involved in the routine.",
                "For most users, the process feels manageable and not painful.",
                "If there was a recent eye procedure, assessment is advised before starting.",
            ],
        },
        {
            q: "How is this different from OK lenses, atropine, or supplements?",
            a: [
                "The key difference is daily visual training and function support, not only passive assistance.",
                "Compared with OK lenses, there is no direct eye contact; compared with atropine, it is non-medication based.",
                "Many parents decide based on long-term practicality and how realistic the routine is for their child.",
            ],
        },
        {
            q: "Can one device be shared by the family?",
            a: [
                "Yes. One device can be used by multiple family members in the same household.",
                "It is designed as a shareable family setup, not one separate purchase per person.",
                "This helps long-term value for families who want a sustainable routine.",
            ],
        },
    ];

    return (
        <section className="py-12 md:py-20 relative">
            <div className={containerClass}>
                <div className="max-w-[1000px] mx-auto">
                    <div className="text-center mb-8 md:mb-10">
                        <h2 className="text-[2.2rem] md:text-[3rem] font-[900] tracking-tight text-white">FAQ</h2>
                    </div>

                    <div className="space-y-3 md:space-y-4">
                        {faqs.map((faq, i) => (
                            <details key={i} className="group glass-panel overflow-hidden border-white/6 hover:border-emerald-500/18 transition-colors duration-300">
                                <summary className="list-none w-full px-5 py-4 md:px-8 md:py-6 flex justify-between items-start gap-5 md:gap-6 text-left cursor-pointer">
                                    <span className="text-[0.95rem] md:text-[1.14rem] font-semibold tracking-tight text-white leading-[1.35] pr-2 md:pr-4">
                                        {'mobileLines' in faq && faq.mobileLines ? (
                                            <>
                                                <span className="block md:hidden whitespace-nowrap">{faq.mobileLines[0]}</span>
                                                <span className="block md:hidden whitespace-nowrap">{faq.mobileLines[1]}</span>
                                                <span className="hidden md:inline">{faq.q}</span>
                                            </>
                                        ) : (
                                            faq.q
                                        )}
                                    </span>
                                    <ChevronDown size={20} className="text-slate-500 shrink-0 mt-0.5 transition-transform duration-300 group-open:rotate-180 group-open:text-emerald-400" />
                                </summary>
                                <div className="px-5 pb-5 md:px-8 md:pb-7 text-slate-300 text-[14px] md:text-[16px] leading-[1.65rem] md:leading-7 font-medium border-t border-white/6">
                                    <div className="pt-4 space-y-2.5 md:space-y-3">
                                        {faq.a.map((paragraph, idx) => (
                                            <p key={idx}>{paragraph}</p>
                                        ))}
                                    </div>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
