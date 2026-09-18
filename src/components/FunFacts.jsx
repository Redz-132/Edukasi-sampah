const FACTS = [
  { big: "±60%", label: "sampah rumah tangga di Indonesia adalah sisa makanan & organik" },
  { big: "100+", label: "tahun waktu yang dibutuhkan plastik untuk terurai di alam" },
  { big: "3", label: "wadah saja sudah cukup untuk mulai memilah dari rumah" },
];

export default function FunFacts() {
  return (
    <section id="fakta" className="border-t border-[var(--line)] bg-[var(--ink)] text-[var(--paper)]">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2 className="font-display text-2xl font-bold sm:text-3xl">
          Kenapa memilah itu penting
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {FACTS.map((f) => (
            <div key={f.label}>
              <p className="font-display text-4xl font-bold text-[var(--anorganik)]">
                {f.big}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--paper-dim)]">
                {f.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
