import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IZON Medical | Biological Recalibration",
  description: "Myopia is a physical ocular stretch. We target the biological cause through refractive matrix calibration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
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
