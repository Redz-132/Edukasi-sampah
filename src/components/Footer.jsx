export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)]">
      <div className="mx-auto max-w-5xl px-6 py-8 text-center text-sm text-[var(--ink-soft)]">
        © {new Date().getFullYear()} Edukasi Sampah — dibuat oleh Nizam.
      </div>
    </footer>
  );
}
