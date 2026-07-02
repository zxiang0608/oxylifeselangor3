import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Child Vision Consultation & Assessment | Oxylife";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "linear-gradient(135deg, #121416 0%, #1a1d20 60%, #0d1a2e 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 80px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "4px",
            background: "linear-gradient(90deg, #22c55e, #4ade80)",
          }}
        />

        {/* Badge row */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              background: "rgba(34,197,94,0.15)",
              border: "1px solid rgba(34,197,94,0.4)",
              color: "#4ade80",
              fontSize: "14px",
              fontWeight: 600,
              padding: "6px 16px",
              borderRadius: "999px",
              letterSpacing: "0.05em",
            }}
          >
            KOREA · MALAYSIA · SINGAPORE
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "#9ca3af",
              fontSize: "14px",
              fontWeight: 500,
              padding: "6px 16px",
              borderRadius: "999px",
              letterSpacing: "0.04em",
            }}
          >
            MDA GA1448221-77276
          </div>
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: "60px",
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: "16px",
            maxWidth: "860px",
          }}
        >
          Stop Your Child&apos;s Eye Power
        </div>
        <div
          style={{
            fontSize: "60px",
            fontWeight: 900,
            color: "#22c55e",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: "32px",
          }}
        >
          From Getting Worse
        </div>

        {/* Sub-copy */}
        <div
          style={{
            fontSize: "22px",
            color: "#9ca3af",
            lineHeight: 1.5,
            maxWidth: "700px",
          }}
        >
          Non-invasive vision training for children and families.
          First assessment in Petaling Jaya — WhatsApp to book.
        </div>

        {/* Brand watermark */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            right: "80px",
            fontSize: "20px",
            fontWeight: 700,
            color: "rgba(255,255,255,0.25)",
            letterSpacing: "0.1em",
          }}
        >
          OXYLIFE
        </div>
      </div>
    ),
    { ...size }
  );
}
