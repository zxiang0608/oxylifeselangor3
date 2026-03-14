"use client";

import React, { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

type FloatingWhatsAppButtonProps = {
  href: string;
  ariaLabel: string;
};

export default function FloatingWhatsAppButton({
  href,
  ariaLabel,
}: FloatingWhatsAppButtonProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const zones = Array.from(document.querySelectorAll("[data-cta-zone='true']"));

    if (!zones.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const hasVisibleZone = entries.some(
          (entry) => entry.isIntersecting && entry.intersectionRatio > 0.2
        );
        setIsVisible(!hasVisibleZone);
      },
      {
        threshold: [0.2, 0.35, 0.5],
      }
    );

    zones.forEach((zone) => observer.observe(zone));

    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`fixed bottom-4 right-4 z-[120] flex h-14 w-14 items-center justify-center rounded-full border border-emerald-400/22 bg-[linear-gradient(180deg,rgba(20,185,129,0.96),rgba(10,124,85,0.96))] text-white shadow-[0_18px_40px_rgba(16,185,129,0.28),0_0_0_1px_rgba(255,255,255,0.05)_inset] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_22px_48px_rgba(16,185,129,0.34),0_0_0_1px_rgba(255,255,255,0.06)_inset] md:bottom-6 md:right-6 ${
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-3 opacity-0 pointer-events-none"
      }`}
    >
      <MessageCircle size={26} strokeWidth={2.2} />
    </a>
  );
}
