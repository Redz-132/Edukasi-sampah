import Bin3DSwitcher from "./Bin3DSwitcher";

export default function Hero() {
  return (
    <section id="top" className="paper-grain">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--organik)]">
            Belajar Pilah Sampah
          </p>
          <h1 className="font-display mt-3 text-4xl font-bold leading-[1.08] tracking-tight text-[var(--ink)] sm:text-5xl">
            Satu sampah, satu tempat yang tepat.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-[var(--ink-soft)]">
            Tiga warna tong, tiga jenis sampah. Kenali organik, anorganik, dan
            B3 supaya sampahmu berakhir di tempat yang benar bukan
            bercampur jadi satu.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#jenis"
              className="rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-semibold text-[var(--paper)] transition hover:bg-[var(--organik-dark)]"
            >
              Kenali jenisnya
            </a>
            <a
              href="#cara"
              className="rounded-full border border-[var(--line)] px-6 py-3 text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--ink)]"
            >
              Cara memilah
            </a>
          </div>
        </div>

        <div className="flex justify-center pt-6 md:pt-0">
          <Bin3DSwitcher />
        </div>
      </div>
    </section>
  );
}
