const SOSMED = [
  {
    key: "instagram",
    label: "Instagram",
    href: "https://instagram.com/nijamgatwu",
    color: "#e1685f",
    dark: "#a5322a",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="white" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4.2" stroke="white" strokeWidth="1.8" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="white" />
      </svg>
    ),
  },
  {
    key: "tiktok",
    label: "TikTok",
    href: "https://tiktok.com/@nizamgatwu",
    color: "#2a3532",
    dark: "#101513",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M14 3v10.5a3 3 0 11-2.2-2.9M14 3c.4 2.3 2.1 4 4.5 4.2"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    key: "github",
    label: "GitHub",
    href: "https://github.com/Redz-132",
    color: "#f0b93e",
    dark: "#a9741a",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M9 19c-4 1.2-4-2-5.5-2.5M17 21v-2.9c0-.8-.3-1.4-.7-1.8 2.4-.3 4.9-1.2 4.9-5.5 0-1.2-.4-2.2-1.2-3 .1-.3.5-1.4-.1-3 0 0-1-.3-3.2 1.2-1.9-.5-3.9-.5-5.8 0C8.7 4.4 7.7 4.7 7.7 4.7c-.6 1.6-.2 2.7-.1 3-.8.8-1.2 1.8-1.2 3 0 4.3 2.5 5.2 4.9 5.5-.3.3-.6.9-.7 1.7-.6.3-2.2.8-3.2-.9"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

function SocialBadge({ color, dark, icon }) {
  return (
    <div className="social-badge-stage">
      <div className="social-badge-back" style={{ background: dark }} />
      <div className="social-badge-front" style={{ background: color }}>
        {icon}
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="kontak" className="border-t border-[var(--line)]">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2 className="font-display text-2xl font-bold text-[var(--ink)] sm:text-3xl">
          Hubungi saya
        </h2>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-[var(--ink-soft)]">
          Ada pertanyaan?Sapa lewat media sosial.
        </p>

        <div className="mt-8 flex flex-wrap gap-6">
          {SOSMED.map((s) => (
            <a
              key={s.key}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2"
            >
              <SocialBadge color={s.color} dark={s.dark} icon={s.icon} />
              <span className="text-xs font-semibold text-[var(--ink)]">{s.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
