import fotoProfil from "../assets/foto-profil.jpg";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--line)] bg-[var(--paper)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg font-bold tracking-tight text-[var(--ink)]">
          Edukasi Sampah
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-[var(--ink-soft)] md:flex">
          <a href="#jenis" className="hover:text-[var(--ink)]">Jenis Sampah</a>
          <a href="#cara" className="hover:text-[var(--ink)]">Cara Memilah</a>
          <a href="#fakta" className="hover:text-[var(--ink)]">Fakta</a>
          <a href="#komentar" className="hover:text-[var(--ink)]">Komentar</a>
          <a href="#kontak" className="hover:text-[var(--ink)]">Kontak</a>
        </nav>
        <a
          href="#tentang"
          className="flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/60 py-1 pl-1 pr-3 text-sm font-medium text-[var(--ink)] transition hover:border-[var(--organik)]"
        >
          <img
            src={fotoProfil}
            alt="Foto profil Nizam"
            className="h-7 w-7 rounded-full border border-[var(--line)] object-cover"
          />
          Nizam
        </a>
      </div>
    </header>
  );
}
