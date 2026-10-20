import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Krityam: AI automation that turns D2C orders into delivered revenue";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const mark = `data:image/png;base64,${(await readFile(join(process.cwd(), "public/images/krityam-mark.png"))).toString("base64")}`;
const sora = await readFile(join(process.cwd(), "src/app/fonts/sora-700.woff"));
const manrope = await readFile(join(process.cwd(), "src/app/fonts/manrope-500.woff"));

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
          padding: "72px 80px",
          background: "#fbfaf8",
          backgroundImage: "radial-gradient(60% 70% at 85% 0%, rgba(249,115,22,0.22), transparent 70%)",
          color: "#1c1917",
          fontFamily: "Sora",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <img src={mark} width={74} height={60} alt="" />
          <div style={{ display: "flex", fontSize: 40, fontWeight: 700, letterSpacing: -1.2 }}>
            Krityam<span style={{ color: "#ea580c" }}>.co</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ display: "flex", flexWrap: "wrap", fontSize: 74, fontWeight: 700, lineHeight: 1.05, letterSpacing: -3, maxWidth: 1000 }}>
            AI automation that turns D2C orders into&nbsp;<span style={{ color: "#ea580c" }}>delivered revenue.</span>
          </div>
          <div style={{ display: "flex", fontFamily: "Manrope", fontWeight: 500, fontSize: 30, color: "#57534e" }}>
            Lower RTO · Higher AOV · Higher LTV · Done for you
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Sora", data: sora, weight: 700, style: "normal" },
        { name: "Manrope", data: manrope, weight: 500, style: "normal" },
      ],
    },
  );
}
