import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AvA Reinigungsservice Hannover";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1a2332, #243044)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            width: 48,
            height: 2,
            background: "linear-gradient(90deg, #c9a84c, #d4ba6a)",
            marginBottom: 32,
          }}
        />
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "white",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          AvA
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "white",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Reinigungsservice
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#c9a84c",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          in Hannover
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#a8a08e",
            marginTop: 24,
            lineHeight: 1.5,
            maxWidth: 700,
          }}
        >
          Zuverlässige Reinigung für Privat- und Geschäftskunden.
          Flexibel, pünktlich und mit höchstem Anspruch an Qualität.
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginTop: 48,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 44,
              height: 44,
              borderRadius: 4,
              background: "rgba(201, 168, 76, 0.15)",
              color: "#c9a84c",
              fontSize: 16,
              fontWeight: 700,
            }}
          >
            AvA
          </div>
          <div style={{ color: "#7a7366", fontSize: 16 }}>
            ava-reinigung.de
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
