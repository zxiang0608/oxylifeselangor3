import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Suspense } from "react";
import Script from "next/script";
import TrafficTracking from "@/components/TrafficTracking";
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
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
const GOOGLE_ADS_ID =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_ID?.trim() || "AW-18031279990";
const GTM_CONTAINER_ID = "GTM-KPVBNHLM";
// Reuse one global gtag loader; prefer GA4 stream ID, fallback to Ads ID.
const GOOGLE_SCRIPT_ID = GA_MEASUREMENT_ID || GOOGLE_ADS_ID;
const seoTitle = "儿童视力咨询与体验评估 | Oxylife";
const seoDescription =
  "使用 Personal Scope-EX 进行儿童视力咨询与体验评估，帮助家长了解孩子目前视力状况与后续方案。位于 Petaling Jaya，欢迎 WhatsApp 咨询预约。";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: seoTitle,
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  description: seoDescription,
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
    siteName: "Oxylife",
    locale: "zh_CN",
    title: seoTitle,
    description: seoDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hans" className="scroll-smooth">
      <head>
        <Script id="gtm-head" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_CONTAINER_ID}');
          `}
        </Script>
      </head>
      <body
        className={`${plusJakartaSans.variable} font-sans antialiased`}
      >
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_CONTAINER_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {GOOGLE_SCRIPT_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_SCRIPT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-tag-bootstrap" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                ${GA_MEASUREMENT_ID ? `gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });` : ""}
                ${GOOGLE_ADS_ID ? `gtag('config', '${GOOGLE_ADS_ID}');` : ""}
                window.gtag_report_conversion = function(url, sendTo) {
                  var callback = function () {
                    if (typeof(url) !== 'undefined') {
                      window.location = url;
                    }
                  };
                  gtag('event', 'conversion', {
                    'send_to': sendTo,
                    'value': 1.0,
                    'currency': 'MYR',
                    'event_callback': callback
                  });
                  return false;
                };
              `}
            </Script>
          </>
        ) : null}
        <Suspense fallback={null}>
          <TrafficTracking />
        </Suspense>
        {/* HUD Layer - Platinum Standard */}
        <div className="hud-marker hud-marker-tl hidden md:block" />
        <div className="hud-marker hud-marker-tr hidden md:block" />
        <div className="hud-marker hud-marker-bl hidden md:block" />
        <div className="hud-marker hud-marker-br hidden md:block" />

        {/* Global Texture + Subtle S-Curve Background Motif */}
        <div className="bg-noise fixed inset-0 z-0 pointer-events-none mix-blend-overlay" style={{ opacity: 0.015 }} />
        <div className="bg-s-curve fixed inset-0 z-[1] pointer-events-none" />

        {children}
      </body>
    </html>
  );
}
