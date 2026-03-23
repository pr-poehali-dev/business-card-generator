import { useState } from "react";

const QR_URL =
  "https://cdn.poehali.dev/projects/132d405c-553e-42f4-8e21-517410a4dedf/bucket/1a99deae-988d-45a0-8bc6-92f9515c1b34.png";

// 50×50 мм при 96 dpi → 189px, но для экрана удваиваем для читаемости
const SIZE = 380;
const RADIUS = 38; // 5мм / 50мм * 380px ≈ 38px

export default function Index() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 24,
        background: "#f0f0f0",
        fontFamily: "'Golos Text', 'Roboto', sans-serif",
      }}
    >
      {/* Card wrapper with 3D flip */}
      <div
        onClick={() => setFlipped((f) => !f)}
        style={{
          width: SIZE,
          height: SIZE,
          perspective: 1200,
          cursor: "pointer",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            transformStyle: "preserve-3d",
            transition: "transform 0.65s cubic-bezier(0.4,0.2,0.2,1)",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* ── ЛИЦЕВАЯ СТОРОНА ── */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              borderRadius: RADIUS,
              overflow: "hidden",
              background: "#ffffff",
              boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
              display: "flex",
              flexDirection: "column",
              padding: 36,
              boxSizing: "border-box",
            }}
          >
            {/* Специализация сверху */}
            <div
              style={{
                fontSize: 19,
                color: "#111",
                letterSpacing: "0.02em",
              }}
            >
              Юрист-медиатор
            </div>

            {/* Имя по центру */}
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontSize: 38,
                  fontWeight: 700,
                  color: "#111",
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                  whiteSpace: "nowrap",
                  textAlign: "center",
                }}
              >
                Алексей Назаров
              </div>
            </div>

            {/* Телефон прибит к низу справа */}
            <div
              style={{
                fontSize: 18,
                color: "#111",
                letterSpacing: "0.02em",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: 0,
              }}
            >
              <img
                src="https://cdn.poehali.dev/projects/132d405c-553e-42f4-8e21-517410a4dedf/bucket/e30f2269-6ee0-4329-8f5b-4d014c1f0be4.png"
                alt="телефон"
                style={{ width: 44, height: 44, objectFit: "contain", marginRight: -4 }}
              />
              +7 918 206-66-50
            </div>
          </div>

          {/* ── ОБРАТНАЯ СТОРОНА ── */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              borderRadius: RADIUS,
              overflow: "hidden",
              background: "#0d1b3e",
              boxShadow: "0 8px 40px rgba(0,0,0,0.28)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 32,
              boxSizing: "border-box",
            }}
          >
            {/* QR-код со скруглёнными углами */}
            <img
              src={QR_URL}
              alt="QR-код"
              style={{
                width: "85%",
                height: "85%",
                objectFit: "contain",
                filter: "invert(1)",
                borderRadius: RADIUS,
              }}
            />
          </div>
        </div>
      </div>

      {/* Подсказка */}
      <div
        style={{
          fontSize: 12,
          color: "#999",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        нажмите, чтобы перевернуть
      </div>

      {/* Размер */}
      <div style={{ fontSize: 11, color: "#bbb", letterSpacing: "0.08em" }}>
        50 × 50 мм · скругление 5 мм · цифровая печать
      </div>
    </div>
  );
}