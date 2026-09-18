import fotoProfil from "../assets/foto-profil.jpg";

const LINK_PORTOFOLIO = "https://portofolio-zamm.vercel.app/";
const LINK_GUNS = "https://guns.lol/nizamm";

export default function About() {
  return (
    <section id="tentang" className="border-t border-[var(--line)]">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-[1fr_0.8fr] md:items-center md:py-20">
        <div>
          <h2 className="font-display text-2xl font-bold text-[var(--ink)] sm:text-3xl">
            Kenapa situs ini dibuat
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-[var(--ink-soft)]">
            Banyak sampah di rumah kita sebenarnya masih bisa dipilah dengan
            gampang, tapi sering berakhir campur aduk di satu tempat sampah.
            Situs ini dibuat supaya siapa pun bisa mulai dari langkah kecil:
            kenali jenis sampahnya, lalu pilah dari rumah sendiri.
          </p>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-[var(--ink-soft)]">
            Proyek edukasi sederhana ini dibuat dan dikelola oleh Nizam.
            Kalau ada masukan atau koreksi, tinggal tulis di kolom komentar
            atau hubungi lewat kontak di bawah.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={LINK_PORTOFOLIO}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[var(--ink)] px-5 py-2.5 text-sm font-semibold text-[var(--paper)] transition hover:bg-[var(--organik-dark)]"
            >
            Portofolio
            </a>
            <a
              href={LINK_GUNS}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[var(--line)] px-5 py-2.5 text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--ink)]"
            >
              Guns
            </a>
          </div>
        </div>

        <div className="tilt-card justify-self-center rounded-2xl border border-[var(--line)] bg-white/60 p-5 text-center">
          <img
            src={fotoProfil}
            alt="Foto profil Nizam"
            className="mx-auto h-28 w-28 rounded-full border-2 border-[var(--organik)] object-cover"
          />
          <p className="font-display mt-4 font-bold text-[var(--ink)]">Nizam</p>
          <p className="text-sm text-[var(--ink-soft)]">Pembuat & pengelola situs</p>
        </div>
      </div>
    </section>
  );
}
