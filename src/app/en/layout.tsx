import type { ReactNode } from "react";
import { Inter, Sora } from "next/font/google";

const enInter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-en-inter",
});

const enSora = Sora({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-en-hero",
});

export default function EnLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${enInter.variable} ${enSora.variable} en-font-scope`}>
      {children}
    </div>
  );
}
