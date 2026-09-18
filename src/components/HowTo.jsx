import Bin3D from "./Bin3D";

const STEPS = [
  {
    title: "Pisahkan dari sumbernya",
    body: "Siapkan minimal 3 wadah di rumah — hijau, kuning, merah — dan buang sampah langsung ke wadah yang sesuai, bukan dicampur dulu.",
  },
  {
    title: "Bilas yang masih kotor",
    body: "Botol atau kaleng bekas makanan dibilas dulu supaya anorganik tidak mengundang bau dan lebih mudah didaur ulang.",
  },
  {
    title: "Kumpulkan B3 secara khusus",
    body: "Baterai, lampu, dan obat kedaluwarsa jangan digabung ke tong biasa — simpan terpisah dan antar ke titik pengumpulan B3.",
  },
  {
    title: "Olah organik jadi kompos",
    body: "Sisa sayur dan daun bisa dikubur atau dimasukkan ke komposter sederhana, jadi tidak semua harus berakhir di TPA.",
  },
];

export default function HowTo() {
  return (
    <section id="cara" className="border-t border-[var(--line)]">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="flex items-center gap-4">
          <Bin3D color="#4c9256" dark="var(--organik-dark)" size={0.3} />
          <h2 className="font-display text-2xl font-bold text-[var(--ink)] sm:text-3xl">
            Cara memilah, langkah demi langkah
          </h2>
        </div>

        <ol className="mt-10 space-y-0">
          {STEPS.map((s, i) => (
            <li
              key={s.title}
              className="flex gap-5 border-t border-[var(--line)] py-6 first:border-t-0"
            >
              <span className="font-display shrink-0 text-2xl font-bold text-[var(--anorganik-dark)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-semibold text-[var(--ink)]">{s.title}</h3>
                <p className="mt-1 max-w-lg text-sm leading-relaxed text-[var(--ink-soft)]">
                  {s.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
