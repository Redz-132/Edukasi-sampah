export default function Bin3D({
  color,
  dark,
  size = 1,
  item,
  category = "organik",
}) {
  const W = 108 * size;
  const H = 146 * size;
  const D = 84 * size;
  const T = 7 * size;

  const wasteByCategory = {
    organik: ["leaf", "banana", "leaf2"],
    anorganik: ["bottle", "can", "plastic"],
    b3: ["battery", "bottleB3", "battery2"],
  };

  const pieces = wasteByCategory[category] || wasteByCategory.organik;

  function WastePiece({ type, left, top, rotate, scale = 1 }) {
    const common = {
      position: "absolute",
      left: `${left}px`,
      top: `${top}px`,
      width: `${28 * size * scale}px`,
      height: `${28 * size * scale}px`,
      transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
      transformOrigin: "center",
      opacity: 0.96,
      filter: "drop-shadow(0 2px 2px rgba(0,0,0,.25))",
    };

    if (type === "leaf" || type === "leaf2") {
      return (
        <div style={common}>
          <svg viewBox="0 0 40 40" width="100%" height="100%">
            <path
              d="M33 5C19 7 8 15 8 26c0 5 3 8 8 8 11 0 16-11 17-29Z"
              fill={type === "leaf" ? "#5c8f45" : "#769f55"}
            />
            <path
              d="M10 31C17 23 22 17 31 9"
              stroke="#d9e8c9"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
      );
    }

    if (type === "banana") {
      return (
        <div style={common}>
          <svg viewBox="0 0 40 40" width="100%" height="100%">
            <path
              d="M7 8c4 19 14 25 27 16"
              stroke="#e7bd3d"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M6 7l4 2"
              stroke="#8c5b25"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
      );
    }

    if (type === "bottle") {
      return (
        <div style={common}>
          <svg viewBox="0 0 40 40" width="100%" height="100%">
            <path
              d="M15 6h10v5l4 5v16H11V16l4-5V6Z"
              fill="#77b6c9"
              stroke="#d9f3f8"
              strokeWidth="1.5"
            />
            <path d="M16 6h8" stroke="#43879b" strokeWidth="3" />
            <path d="M13 19h14" stroke="#ffffff88" strokeWidth="2" />
          </svg>
        </div>
      );
    }

    if (type === "plastic") {
      return (
        <div style={common}>
          <svg viewBox="0 0 40 40" width="100%" height="100%">
            <path
              d="M9 13l8-6 14 5-2 15-9 7-11-6Z"
              fill="#d8e3e1"
              stroke="#aabbb7"
              strokeWidth="1.5"
            />
            <path d="M17 7l5 14" stroke="#ffffff" strokeWidth="2" opacity=".7" />
          </svg>
        </div>
      );
    }

    if (type === "can") {
      return (
        <div style={common}>
          <svg viewBox="0 0 40 40" width="100%" height="100%">
            <ellipse cx="20" cy="8" rx="10" ry="4" fill="#b9c4c2" />
            <rect x="10" y="8" width="20" height="23" rx="3" fill="#aebbb8" />
            <ellipse cx="20" cy="31" rx="10" ry="4" fill="#7f8d8a" />
            <path d="M12 14h16" stroke="#edf4f3" strokeWidth="2" opacity=".7" />
          </svg>
        </div>
      );
    }

    if (type === "battery" || type === "battery2") {
      return (
        <div style={common}>
          <svg viewBox="0 0 40 40" width="100%" height="100%">
            <rect x="10" y="8" width="20" height="25" rx="3" fill="#454d50" />
            <rect x="16" y="4" width="8" height="5" rx="1.5" fill="#687276" />
            <path
              d="M22 12l-7 10h5l-2 9 7-12h-5Z"
              fill="#e0bd45"
            />
          </svg>
        </div>
      );
    }

    return (
      <div style={common}>
        <svg viewBox="0 0 40 40" width="100%" height="100%">
          <rect x="10" y="9" width="20" height="22" rx="4" fill="#b64b47" />
          <rect x="8" y="7" width="24" height="5" rx="2" fill="#7e2f2b" />
          <path d="M20 15v10M15 20h10" stroke="#fff" strokeWidth="2.5" />
        </svg>
      </div>
    );
  }

  const face = (style) => ({
    position: "absolute",
    left: "50%",
    top: "50%",
    transformStyle: "preserve-3d",
    backfaceVisibility: "hidden",
    ...style,
  });

  return (
    <>
      <style>{`
        @keyframes realisticBinFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }

        @keyframes realisticBinShadow {
          0%, 100% { transform: translateX(-50%) scale(1); opacity: .22; }
          50% { transform: translateX(-50%) scale(.86); opacity: .14; }
        }
      `}</style>

      <div
        style={{
          position: "relative",
          width: `${W + 90 * size}px`,
          height: `${H + 115 * size}px`,
          perspective: "1400px",
          transformStyle: "preserve-3d",
        }}
      >
        {/* FLOAT LAYER: sengaja dipisah dari layer rotasi supaya animasi tidak merusak 3D */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transformStyle: "preserve-3d",
            animation: "realisticBinFloat 4s ease-in-out infinite",
          }}
        >
          {/* BAYANGAN */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              bottom: `${4 * size}px`,
              width: `${W * 0.92}px`,
              height: `${19 * size}px`,
              borderRadius: "50%",
              background: "rgba(0,0,0,.30)",
              filter: "blur(9px)",
              transform: "translateX(-50%) rotateX(70deg)",
              animation: "realisticBinShadow 4s ease-in-out infinite",
            }}
          />

          {/* BODY UTUH */}
          <div
            style={{
              position: "relative",
              width: `${W}px`,
              height: `${H}px`,
              transformStyle: "preserve-3d",
              transform: `translateY(${8 * size}px)`,
            }}
          >
            {/* FRONT */}
            <div
              style={face({
                width: `${W}px`,
                height: `${H}px`,
                marginLeft: `${-W / 2}px`,
                marginTop: `${-H / 2}px`,
                borderRadius: `${14 * size}px ${14 * size}px ${10 * size}px ${10 * size}px`,
                background: `
                  linear-gradient(
                    90deg,
                    ${dark} 0%,
                    ${color} 12%,
                    ${color} 70%,
                    ${dark} 100%
                  )
                `,
                border: "1px solid rgba(0,0,0,.15)",
                boxShadow: `
                  inset 9px 0 14px rgba(0,0,0,.14),
                  inset -8px 0 12px rgba(255,255,255,.10),
                  0 5px 8px rgba(0,0,0,.08)
                `,
                transform: `translateZ(${D / 2}px)`,
              })}
            >
              {/* FRONT HIGHLIGHT */}
              <div
                style={{
                  position: "absolute",
                  left: "10%",
                  top: "8%",
                  width: "6%",
                  height: "70%",
                  borderRadius: "99px",
                  background: "rgba(255,255,255,.10)",
                }}
              />

              {/* DEKOR PANEL */}
              <div
                style={{
                  position: "absolute",
                  left: "13%",
                  right: "13%",
                  top: "12%",
                  bottom: "11%",
                  borderRadius: `${10 * size}px`,
                  border: "1px solid rgba(255,255,255,.10)",
                  background: "rgba(255,255,255,.018)",
                }}
              />

              {/* ICON UTAMA */}
              {item && (
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "53%",
                    width: `${44 * size}px`,
                    height: `${44 * size}px`,
                    transform: "translate(-50%, -50%)",
                    color: "white",
                    filter: "drop-shadow(0 3px 3px rgba(0,0,0,.24))",
                  }}
                >
                  {item}
                </div>
              )}

              {/* FOOT PEDAL */}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  bottom: `${7 * size}px`,
                  width: `${30 * size}px`,
                  height: `${7 * size}px`,
                  transform: "translateX(-50%)",
                  borderRadius: `${5 * size}px`,
                  background: "rgba(0,0,0,.30)",
                  boxShadow: "inset 0 1px 1px rgba(255,255,255,.10)",
                }}
              />
            </div>

            {/* BACK */}
            <div
              style={face({
                width: `${W}px`,
                height: `${H}px`,
                marginLeft: `${-W / 2}px`,
                marginTop: `${-H / 2}px`,
                borderRadius: `${14 * size}px`,
                background: `linear-gradient(90deg, ${dark}, ${color}, ${dark})`,
                border: "1px solid rgba(0,0,0,.17)",
                transform: `rotateY(180deg) translateZ(${D / 2}px)`,
              })}
            />

            {/* LEFT */}
            <div
              style={face({
                width: `${D}px`,
                height: `${H}px`,
                marginLeft: `${-D / 2}px`,
                marginTop: `${-H / 2}px`,
                borderRadius: `${10 * size}px 0 0 ${10 * size}px`,
                background: `
                  linear-gradient(
                    90deg,
                    ${dark},
                    rgba(0,0,0,.14)
                  )
                `,
                border: "1px solid rgba(0,0,0,.18)",
                boxShadow: "inset 5px 0 10px rgba(0,0,0,.13)",
                transform: `rotateY(-90deg) translateZ(${W / 2}px)`,
              })}
            />

            {/* RIGHT */}
            <div
              style={face({
                width: `${D}px`,
                height: `${H}px`,
                marginLeft: `${-D / 2}px`,
                marginTop: `${-H / 2}px`,
                borderRadius: `0 ${10 * size}px ${10 * size}px 0`,
                background: `
                  linear-gradient(
                    90deg,
                    rgba(0,0,0,.20),
                    ${dark}
                  )
                `,
                border: "1px solid rgba(0,0,0,.18)",
                boxShadow: "inset -5px 0 10px rgba(0,0,0,.13)",
                transform: `rotateY(90deg) translateZ(${W / 2}px)`,
              })}
            />

            {/* BOTTOM */}
            <div
              style={face({
                width: `${W}px`,
                height: `${D}px`,
                marginLeft: `${-W / 2}px`,
                marginTop: `${-D / 2}px`,
                borderRadius: `0 0 ${10 * size}px ${10 * size}px`,
                background: dark,
                transform: `rotateX(-90deg) translateZ(${H / 2}px)`,
              })}
            />

            {/* TOP RIM */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: `${W + 9 * size}px`,
                height: `${D + 9 * size}px`,
                marginLeft: `${-(W + 9 * size) / 2}px`,
                marginTop: `${-(D + 9 * size) / 2}px`,
                transform: `rotateX(90deg) translateZ(${H / 2 + 1}px)`,
                transformStyle: "preserve-3d",
                background: `
                  linear-gradient(
                    135deg,
                    ${color},
                    ${dark}
                  )
                `,
                borderRadius: `${13 * size}px`,
                border: "1px solid rgba(0,0,0,.18)",
                boxShadow: `
                  inset 0 2px 3px rgba(255,255,255,.14),
                  0 2px 4px rgba(0,0,0,.14)
                `,
              }}
            >
              {/* INNER OPENING */}
              <div
                style={{
                  position: "absolute",
                  left: `${8 * size}px`,
                  right: `${8 * size}px`,
                  top: `${8 * size}px`,
                  bottom: `${8 * size}px`,
                  borderRadius: `${9 * size}px`,
                  background: `
                    radial-gradient(
                      ellipse at center,
                      #161b18 0%,
                      #090c0b 72%,
                      #050706 100%
                    )
                  `,
                  boxShadow: "inset 0 5px 11px rgba(0,0,0,.55)",
                  overflow: "hidden",
                }}
              >
                {/* DETAIL SAMPAH DI DALAM */}
                <WastePiece type={pieces[0]} left={W * .34} top={D * .48} rotate={-22} scale={.78} />
                <WastePiece type={pieces[1]} left={W * .55} top={D * .42} rotate={16} scale={.86} />
                <WastePiece type={pieces[2]} left={W * .70} top={D * .58} rotate={-8} scale={.66} />

                <div
                  style={{
                    position: "absolute",
                    left: "16%",
                    right: "16%",
                    bottom: "9%",
                    height: "18%",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,.035)",
                    filter: "blur(2px)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* LID TERBUKA — menempel dengan badan lewat hinge */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: `${24 * size}px`,
              width: `${W + 13 * size}px`,
              height: `${D * .72}px`,
              marginLeft: `${-(W + 13 * size) / 2}px`,
              transformOrigin: "50% 100%",
              transform: `translateZ(${D * .22}px) rotateX(48deg)`,
              transformStyle: "preserve-3d",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: `${12 * size}px`,
                background: `
                  linear-gradient(
                    135deg,
                    ${color} 0%,
                    ${dark} 100%
                  )
                `,
                border: "1px solid rgba(0,0,0,.18)",
                boxShadow: `
                  0 7px 9px rgba(0,0,0,.18),
                  inset 0 2px 3px rgba(255,255,255,.12)
                `,
              }}
            />

            <div
              style={{
                position: "absolute",
                left: "50%",
                bottom: `${10 * size}px`,
                transform: "translateX(-50%)",
                width: `${34 * size}px`,
                height: `${8 * size}px`,
                borderRadius: "99px",
                background: dark,
                boxShadow: "inset 0 1px 2px rgba(255,255,255,.12)",
              }}
            />

            <div
              style={{
                position: "absolute",
                left: "8%",
                right: "8%",
                top: "16%",
                height: "1px",
                background: "rgba(255,255,255,.11)",
              }}
            />
          </div>

          {/* HINGE */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: `${31 * size}px`,
              width: `${W * .42}px`,
              height: `${6 * size}px`,
              marginLeft: `${-(W * .42) / 2}px`,
              borderRadius: "999px",
              background: dark,
              transform: `translateZ(${D * .46}px)`,
              boxShadow: "0 2px 4px rgba(0,0,0,.18)",
            }}
          />

          {/* RODA KIRI */}
          <div
            style={{
              position: "absolute",
              left: `${W * .29}px`,
              bottom: `${7 * size}px`,
              width: `${18 * size}px`,
              height: `${18 * size}px`,
              borderRadius: "50%",
              background: "#252927",
              border: `${4 * size}px solid #111513`,
              transform: `translateZ(${D * .33}px)`,
              boxShadow: "0 2px 4px rgba(0,0,0,.28)",
            }}
          />

          {/* RODA KANAN */}
          <div
            style={{
              position: "absolute",
              right: `${W * .29}px`,
              bottom: `${7 * size}px`,
              width: `${18 * size}px`,
              height: `${18 * size}px`,
              borderRadius: "50%",
              background: "#252927",
              border: `${4 * size}px solid #111513`,
              transform: `translateZ(${D * .33}px)`,
              boxShadow: "0 2px 4px rgba(0,0,0,.28)",
            }}
          />
        </div>
      </div>
    </>
  );
}
