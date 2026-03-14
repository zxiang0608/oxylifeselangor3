import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const getSiteUrl = () => {
  const rawUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL ||
    "http://localhost:3000";

  return new URL(rawUrl.startsWith("http") ? rawUrl : `https://${rawUrl}`);
};

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Oxylife Selangor | 儿童与家庭视力训练方案",
    template: "%s | Oxylife Selangor",
  },
  description:
    "Oxylife Selangor 提供儿童与家庭视力训练方案，帮助评估是否适合开始、减轻用眼负担，并比较长期效果、安全性、孩子配合度与整体费用。",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Oxylife Selangor",
    locale: "zh_CN",
    title: "Oxylife Selangor | 儿童与家庭视力训练方案",
    description:
      "帮助家长先判断孩子是否适合开始，再比较长期效果、安全性、孩子配合度与整体费用。",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oxylife Selangor | 儿童与家庭视力训练方案",
    description:
      "帮助家长先判断孩子是否适合开始，再比较长期效果、安全性、孩子配合度与整体费用。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hans" className="scroll-smooth">
      <body
        className={`${plusJakartaSans.variable} font-sans antialiased`}
      >
        {/* HUD Layer - Platinum Standard */}
        <div className="hud-marker hud-marker-tl hidden md:block" />
        <div className="hud-marker hud-marker-tr hidden md:block" />
        <div className="hud-marker hud-marker-bl hidden md:block" />
        <div className="hud-marker hud-marker-br hidden md:block" />

        {/* Global Texture Layer - Film Grain */}
        <div className="bg-noise fixed inset-0 z-0 pointer-events-none mix-blend-overlay" style={{ opacity: 0.02 }} />

        {/* Global Ambient Glows - 'Wood' Deep Forest Breathing (opacity < 15%) */}
        <div className="fixed top-[-20%] left-[-20%] w-[80vw] h-[80vw] rounded-full bg-[#142B23] pointer-events-none z-0" style={{ filter: 'blur(1200px)', opacity: 0.12 }} />
        <div className="fixed bottom-[-20%] right-[-20%] w-[80vw] h-[80vw] rounded-full bg-[#142B23] pointer-events-none z-0" style={{ filter: 'blur(1200px)', opacity: 0.12 }} />

        {children}
      </body>
    </html>
  );
}
