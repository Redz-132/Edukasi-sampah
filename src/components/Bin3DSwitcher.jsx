import { useRef, useState } from "react";
import Bin3D from "./Bin3D";

const KATEGORI = [
  {
    key: "organik",
    label: "Organik",
    desc: "Sisa makanan, daun, dan sampah yang bisa membusuk",
    color: "#4c9256",
    dark: "#275f32",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-full w-full">
        <path
          d="M12 21c-4.5-1.2-7-5-7-9.5C5 6.3 8.3 3 12.8 3c1 4.8-.3 9-3.3 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12.8 3C17 4 20 7.5 20 12c0 4-2.2 7.2-5.8 8.6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },

  {
    key: "anorganik",
    label: "Anorganik",
    desc: "Plastik, kertas, dan kaleng yang bisa didaur ulang",
    color: "#f0b93e",
    dark: "#a9741a",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-full w-full">
        <path
          d="M12 3l3 5h-6l3-5z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M4.5 15l-2.2 3.8a1 1 0 00.9 1.5h4.4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M19.5 15l2.2 3.8a1 1 0 01-.9 1.5h-4.4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M7.6 20h8.8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },

  {
    key: "b3",
    label: "B3",
    desc: "Baterai, lampu, dan obat kedaluwarsa",
    color: "#d15850",
    dark: "#842d27",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-full w-full">
        <path
          d="M12 3l9.5 17H2.5L12 3z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M12 9v5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="12" cy="17" r="1" fill="currentColor" />
      </svg>
    ),
  },
];

export default function Bin3DSwitcher() {
  const [index, setIndex] = useState(0);
  const [rotation, setRotation] = useState(-24);
  const [tiltX, setTiltX] = useState(-7);
  const [tiltY, setTiltY] = useState(-24);
  const [flipping, setFlipping] = useState(false);
  const [dragging, setDragging] = useState(false);

  const stageRef = useRef(null);
  const lastPointerX = useRef(0);
  const dragMoved = useRef(false);

  const k = KATEGORI[index];

  function handleHover(e) {
    if (dragging || flipping || !stageRef.current) return;

    const rect = stageRef.current.getBoundingClientRect();

    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;

    setTiltX(py * -15);
    setTiltY(px * 22);
  }

  function resetTilt() {
    if (!dragging) {
      setTiltX(-7);
      setTiltY(-24);
    }
  }

  function handlePointerDown(e) {
    if (flipping) return;

    dragMoved.current = false;
    lastPointerX.current = e.clientX;

    setDragging(true);
    e.currentTarget.setPointerCapture?.(e.pointerId);
  }

  function handlePointerMove(e) {
    if (!dragging || flipping) return;

    const dx = e.clientX - lastPointerX.current;

    if (Math.abs(dx) > 2) {
      dragMoved.current = true;
    }

    lastPointerX.current = e.clientX;

    setRotation((r) => r + dx * 0.75);

    setTiltY((y) => y + dx * 0.035);
  }

  function stopDragging() {
    setDragging(false);
    setTiltX(-7);
  }

  function handleClick() {
    if (flipping || dragMoved.current) {
      dragMoved.current = false;
      return;
    }

    setFlipping(true);

    // Selalu berakhir menghadap DEPAN lagi.
    const target =
      Math.round(rotation / 360) * 360 + 360;

    setRotation(target);

    // Ganti warna/jenis ketika tong sedang setengah jalan berputar.
    setTimeout(() => {
      setIndex((i) => (i + 1) % KATEGORI.length);
    }, 430);

    setTimeout(() => {
      setFlipping(false);
    }, 850);
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        ref={stageRef}
        onMouseMove={handleHover}
        onMouseLeave={resetTilt}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        aria-label="Klik untuk mengganti jenis sampah. Geser untuk memutar tong."
        className="select-none outline-none"
        style={{
          width: "310px",
          height: "355px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          perspective: "1600px",
          cursor: dragging ? "grabbing" : "grab",
          touchAction: "none",
        }}
      >
        <div
          style={{
            transformStyle: "preserve-3d",
            transform: `
              rotateX(${tiltX}deg)
              rotateY(${rotation + tiltY}deg)
            `,
            transition: flipping
              ? "transform .85s cubic-bezier(.18,.78,.2,1)"
              : dragging
                ? "none"
                : "transform .12s ease-out",
            willChange: "transform",
          }}
        >
          <Bin3D
            color={k.color}
            dark={k.dark}
            size={1.15}
            item={k.icon}
            category={k.key}
          />
        </div>
      </div>

      <div className="text-center">
        <p
          className="font-display text-xl font-bold"
          style={{ color: k.dark }}
        >
          {k.label}
        </p>

        <p className="mt-1 max-w-xs text-sm leading-relaxed text-[var(--ink-soft)]">
          {k.desc}
        </p>

        <p className="mt-2 text-xs text-[var(--ink-soft)]">
          Klik untuk ganti jenis · geser untuk memutar 3D
        </p>
      </div>
    </div>
  );
}
