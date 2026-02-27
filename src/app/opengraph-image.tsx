import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "ทำทันที โซลูชั่น จำกัด | GPS Tracking & Fleet Safety";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  // Load Noto Sans Thai font for correct Thai character rendering
  const fontData = await fetch(
    "https://fonts.gstatic.com/s/notosansthai/v25/iJWnBXeUZi_OHPqn4wq6hQ2_hbJ1xyN9wd43SofpAtFv.woff",
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    <div
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #1a3a5c 60%, #0f172a 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "64px",
        fontFamily: "'Noto Sans Thai', sans-serif",
        position: "relative",
      }}
    >
      {/* Decorative accent lines */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "6px",
          background: "linear-gradient(90deg, #f59e0b, #fbbf24, #f59e0b)",
          display: "flex",
        }}
      />

      {/* Brand badge */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "32px",
        }}
      >
        <div
          style={{
            background: "#f59e0b",
            borderRadius: "10px",
            padding: "10px 22px",
            fontSize: "26px",
            fontWeight: "bold",
            color: "#0f172a",
            letterSpacing: "3px",
            display: "flex",
          }}
        >
          TTTHI
        </div>
        <div
          style={{
            color: "#94a3b8",
            fontSize: "22px",
            display: "flex",
          }}
        >
          ทำทันที โซลูชั่น จำกัด
        </div>
      </div>

      {/* Main headline */}
      <div
        style={{
          fontSize: "64px",
          fontWeight: "bold",
          color: "#ffffff",
          textAlign: "center",
          lineHeight: 1.15,
          marginBottom: "20px",
          display: "flex",
        }}
      >
        GPS Tracking &amp; Fleet Safety
      </div>

      {/* Sub-headline */}
      <div
        style={{
          fontSize: "28px",
          color: "#93c5fd",
          textAlign: "center",
          marginBottom: "52px",
          display: "flex",
        }}
      >
        รับรองโดยกรมขนส่งทางบก (DLT) · MDVR · ADAS · DMS
      </div>

      {/* CTA button */}
      <div
        style={{
          background: "#f59e0b",
          borderRadius: "50px",
          padding: "18px 52px",
          fontSize: "26px",
          fontWeight: "bold",
          color: "#0f172a",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        ติดต่อเราวันนี้ → ttthi.com
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Noto Sans Thai",
          data: fontData,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
