import { ImageResponse } from "next/og";

export const alt = "Rudy Giacomazzo — Développeur full-stack Next.js";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#0d0d0f",
          color: "#ededed",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 36, fontWeight: 700 }}>
          RG<span style={{ color: "#ff4d5e" }}>.</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 38, color: "rgba(255,255,255,0.6)", marginBottom: 16 }}>
            Rudy Giacomazzo
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", fontSize: 78, fontWeight: 700, lineHeight: 1.05 }}>
            <span>Développeur full-stack&nbsp;</span>
            <span style={{ color: "#ff4d5e" }}>Next.js</span>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", fontSize: 28, color: "rgba(255,255,255,0.55)" }}>
          <span
            style={{
              width: 14,
              height: 14,
              borderRadius: 9999,
              background: "#34d399",
              marginRight: 14,
            }}
          />
          Disponible · Montpellier / Remote
        </div>
      </div>
    ),
    { ...size }
  );
}
