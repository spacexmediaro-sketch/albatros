import { ImageResponse } from "next/og";
import { type NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const title = searchParams.get("title") || "Service Auto Multimarca";
  const subtitle =
    searchParams.get("subtitle") || "Reparatii auto de incredere in Blejoi-Ploiesti";
  const type = searchParams.get("type") || "page";

  // Accent bar width varies by type
  const accentWidth = type === "service" ? 120 : type === "blog" ? 80 : 100;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          backgroundColor: "#04040A",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top section: brand + accent */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "12px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "#C9A84C",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "22px",
                fontWeight: 700,
                color: "#FFFFFF",
              }}
            >
              A
            </div>
            <span
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: "#FFFFFF",
                letterSpacing: "3px",
                textTransform: "uppercase" as const,
              }}
            >
              ALBATROS A SERVICE
            </span>
          </div>

          {/* Red accent line */}
          <div
            style={{
              width: `${accentWidth}px`,
              height: "4px",
              backgroundColor: "#C9A84C",
              borderRadius: "2px",
              marginTop: "8px",
            }}
          />
        </div>

        {/* Middle section: title + subtitle */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              fontSize: title.length > 40 ? "48px" : "60px",
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.15,
              margin: 0,
              maxWidth: "900px",
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: "26px",
              fontWeight: 400,
              color: "#8B8D97",
              lineHeight: 1.4,
              margin: 0,
              maxWidth: "800px",
            }}
          >
            {subtitle}
          </p>
        </div>

        {/* Bottom section: location + type badge */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <span
            style={{
              fontSize: "18px",
              color: "#8B8D97",
              fontWeight: 500,
            }}
          >
            Service Auto Multimarca | Blejoi-Ploiesti
          </span>
          <span
            style={{
              fontSize: "14px",
              color: "#C9A84C",
              fontWeight: 600,
              textTransform: "uppercase" as const,
              letterSpacing: "2px",
              border: "1px solid #C9A84C",
              padding: "6px 16px",
              borderRadius: "4px",
            }}
          >
            {type === "service"
              ? "Serviciu"
              : type === "blog"
                ? "Blog"
                : "albatrosa.ro"}
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
