import { ImageResponse } from "next/og";

export const alt = "Marcos Ranauro — Do zero ao no ar. Fullstack Developer freelance";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BG = "#0A0A0A";
const FG = "#FAFAFA";
const MUTED = "#A1A1A1";
const ACCENT = "#C6FF00";
const BORDER = "#222222";

/** Carrega woff/woff2 do Google Fonts via CSS API (compatível com Edge em build). */
async function loadGoogleFont(family: string, weight: number): Promise<ArrayBuffer> {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, "+")}:wght@${weight}`,
    { headers: { "User-Agent": "Mozilla/5.0 (compatible; OG-Image-Generator)" } },
  ).then((res) => res.text());

  const match = css.match(
    /src:\s*url\(([^)]+)\)\s*format\(['"](?:opentype|truetype|woff2?)['"]\)/,
  );
  if (!match?.[1]) {
    throw new Error(`Failed to load font: ${family} ${weight}`);
  }

  return fetch(match[1]).then((res) => res.arrayBuffer());
}

export default async function Image() {
  const [spaceGroteskBold, interRegular] = await Promise.all([
    loadGoogleFont("Space Grotesk", 700),
    loadGoogleFont("Inter", 400),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: BG,
          padding: "72px 80px",
          fontFamily: "Inter",
        }}
      >
        {/* Detalhe lime — parcimônia */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: ACCENT,
            }}
          />
          <span
            style={{
              fontSize: 13,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: MUTED,
            }}
          >
            Fullstack Developer · Freelance
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontFamily: "Space Grotesk",
              fontSize: 72,
              fontWeight: 700,
              color: FG,
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            Marcos Ranauro
          </div>
          <div
            style={{
              fontFamily: "Space Grotesk",
              fontSize: 40,
              fontWeight: 700,
              color: FG,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Do zero ao no ar.
          </div>
          <div
            style={{
              fontSize: 22,
              color: MUTED,
              lineHeight: 1.5,
              maxWidth: 720,
            }}
          >
            Sites e produtos digitais sob medida — design, código e deploy.
          </div>
        </div>

        {/* Rodapé editorial */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `1px solid ${BORDER}`,
            paddingTop: 28,
          }}
        >
          <span
            style={{
              fontSize: 13,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: MUTED,
            }}
          >
            marcosranauro.com.br
          </span>
          <div
            style={{
              width: 48,
              height: 2,
              backgroundColor: ACCENT,
              opacity: 0.85,
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Space Grotesk",
          data: spaceGroteskBold,
          weight: 700,
          style: "normal",
        },
        {
          name: "Inter",
          data: interRegular,
          weight: 400,
          style: "normal",
        },
      ],
    },
  );
}
