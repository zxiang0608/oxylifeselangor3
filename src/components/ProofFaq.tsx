"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function ProofFaq() {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const containerClass = "max-w-[1600px] w-[90vw] mx-auto px-8 md:px-12 relative z-10";
    const faqs = [
        {
            q: "孩子适不适合开始？",
            a: [
                "一般 5 岁以上就可以开始",
                "关键不是只看年龄，而是孩子能不能听懂并配合简单指令，例如张开/闭上眼睛、跟着红光看、完成几分钟训练",
                "如果孩子还太小，或刚做完眼睛相关疗程/手术，建议先评估，再决定是否适合开始",
            ],
        },
        {
            q: "RM49 体验包含什么？",
            a: [
                "RM49 包含一次基础视力评估、约 40 分钟体验，以及现场答疑",
                "如果是在合作眼镜店进行，会先做视力检查；如果是上门体验，或附近没有合作眼镜店，则会先做基础视力测试",
                "体验后，一般可现场看到初步变化，我们也会说明适不适合你或孩子开始",
                "不会强制购买，重点是先体验、先看懂，再决定",
            ],
        },
        {
            q: "每天需要做多久？会不会很麻烦？",
            a: [
                "不会很麻烦，时间比很多家长想象中短",
                "一般治疗阶段，每次约 10–15 分钟，一天 3 次；做到对变化满意后，可以慢慢减少",
                "如果是孩子日常保护，通常每天 5 分钟就可以；成人保养，每 2–3 天 5 分钟也可以",
                "不需要固定时间，在家、沙发、房间，甚至车里都能做。大多数人学会后，就能自己完成",
            ],
        },
        {
            q: "会不会痛？安全吗？",
            a: [
                "不会痛，也不接触眼球",
                "整个过程是无创的，不需要碰到眼球表面，也不涉及药物",
                "对大多数人来说，使用过程是轻松的，不会有疼痛感",
                "如果刚做完眼睛相关疗程/手术，一般不建议马上开始，最好先评估再决定",
            ],
        },
        {
            q: "这跟 OK 镜 / 阿托品 / 营养品有什么不同？",
            a: [
                "最大的不同，是 IZON 不只是辅助，而是从训练与调节入手",
                "跟 OK 镜相比，不需要接触眼球，也少了日常护理负担；跟阿托品相比，不涉及药物；跟营养品相比，不只是补充，而是更直接从用眼训练开始",
                "很多家长最后比较的，不只是原理，而是哪一种更容易坚持，哪一种更适合孩子",
            ],
        },
        {
            q: "一台机器可以全家用吗？",
            a: [
                "可以，一台机器就能全家共享",
                "不限制人数，同住家人都可以使用，而且是一次付费，不需要每个人重复购买",
                "也就是说，不是一个人一套、一个人一笔费用，而是全家共用一台，长期一起受益",
            ],
        },
    ];

    return (
        <section className="py-12 md:py-20 relative">
            <div className={containerClass}>
                {/* FAQ */}
                <div className="max-w-[1000px] mx-auto">
                    <div className="text-center mb-8 md:mb-10">
                        <h2 className="text-[2.2rem] md:text-[3rem] font-[900] tracking-tight text-white">常见问题</h2>
                    </div>

                    <div className="space-y-3 md:space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="glass-panel overflow-hidden border-white/6 hover:border-emerald-500/18 transition-colors duration-300">
                                <button
                                    className="w-full px-5 py-4 md:px-8 md:py-6 flex justify-between items-start gap-5 md:gap-6 text-left bg-transparent border-none cursor-pointer focus:outline-none"
                                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                >
                                    <span className="text-[0.98rem] md:text-[1.14rem] font-semibold tracking-tight text-white leading-[1.35] pr-3 md:pr-4">{faq.q}</span>
                                    {activeFaq === i ? <ChevronUp size={20} className="text-emerald-400 shrink-0 mt-0.5" /> : <ChevronDown size={20} className="text-slate-500 shrink-0 mt-0.5" />}
                                </button>
                                {activeFaq === i && (
                                    <div className="px-5 pb-5 md:px-8 md:pb-7 text-slate-300 text-[14px] md:text-[16px] leading-[1.65rem] md:leading-7 font-medium animate-in fade-in slide-in-from-top-1 duration-300 border-t border-white/6">
                                        <div className="pt-4 space-y-2.5 md:space-y-3">
                                            {faq.a.map((paragraph, idx) => (
                                                <p key={idx}>{paragraph}</p>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
