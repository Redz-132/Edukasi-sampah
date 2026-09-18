import Bin3D from "./Bin3D";

const TYPES = [
  {
    key: "organik",
    label: "Organik",
    color: "#4c9256",
    dark: "var(--organik-dark)",
    desc: "Sisa makhluk hidup yang bisa membusuk dan terurai secara alami.",
    contoh: ["Sisa sayur & buah", "Daun kering", "Ampas kopi & teh", "Sisa nasi"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
        <path
          d="M12 21c-4.5-1.2-7-5-7-9.5C5 6.3 8.3 3 12.8 3c1 4.8-.3 9-3.3 12M12.8 3C17.4 4 20 7.6 20 12c0 4-2.2 7.2-5.8 8.6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    key: "anorganik",
    label: "Anorganik",
    color: "#f0b93e",
    dark: "var(--anorganik-dark)",
    desc: "Sampah yang sulit terurai, tapi banyak yang bisa didaur ulang.",
    contoh: ["Botol & gelas plastik", "Kaleng & kertas", "Kardus", "Kaca"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
        <path
          d="M12 3l3 5h-6l3-5zM4.5 15l-2.2 3.8a1 1 0 00.9 1.5h4.4M19.5 15l2.2 3.8a1 1 0 01-.9 1.5h-4.4M9 20.3h6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M8 8l-3.5 6M16 8l3.5 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: "b3",
    label: "B3",
    color: "#d15850",
    dark: "var(--b3-dark)",
    desc: "Bahan berbahaya & beracun. Perlu penanganan khusus, jangan dibuang sembarangan.",
    contoh: ["Baterai bekas", "Lampu neon", "Kaleng cat", "Obat kedaluwarsa"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
        <path
          d="M12 3l9.5 17H2.5L12 3z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M12 10v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="17" r="0.9" fill="currentColor" />
      </svg>
    ),
  },
];

export default function WasteTypes() {
  return (
    <section id="jenis" className="border-t border-[var(--line)] bg-white/40">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2 className="font-display text-2xl font-bold text-[var(--ink)] sm:text-3xl">
          Tiga jenis sampah yang perlu kamu kenali
        </h2>
        <p className="mt-2 max-w-xl text-[var(--ink-soft)]">
          Tempelkan warna ini di kepala: hijau untuk organik, kuning untuk
          anorganik, merah untuk B3.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {TYPES.map((t) => (
            <div
              key={t.key}
              className="tilt-card rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-6"
              style={{ borderTop: `5px solid ${t.color}` }}
            >
              <div className="mb-2">
                <Bin3D color={t.color} dark={t.dark} size={0.32} item={t.icon} />
              </div>
              <h3 className="font-display mt-4 text-lg font-bold text-[var(--ink)]">
                {t.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">
                {t.desc}
              </p>
              <ul className="mt-4 space-y-1.5 border-t border-[var(--line)] pt-4">
                {t.contoh.map((c) => (
                  <li key={c} className="flex items-center gap-2 text-sm text-[var(--ink)]">
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: t.color }}
                    />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
