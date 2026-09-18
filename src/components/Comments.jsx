import { useEffect, useRef, useState } from "react";

const FIREBASE_DB_URL = "https://komen-4bc0e-default-rtdb.asia-southeast1.firebasedatabase.app/";

function resizeFotoKeBase64(file, maxSize = 96) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const scale = Math.min(maxSize / img.width, maxSize / img.height, 1);
        const canvas = document.createElement("canvas");
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;
        canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.7));
      };
      img.onerror = reject;
      img.src = reader.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function Avatar({ src, nama, size = 40 }) {
  if (src) {
    return (
      <img
        src={src}
        alt={nama}
        style={{ width: size, height: size }}
        className="rounded-full object-cover"
      />
    );
  }
  const huruf = nama?.trim()?.[0]?.toUpperCase() || "?";
  return (
    <div
      style={{ width: size, height: size }}
      className="flex items-center justify-center rounded-full bg-[var(--organik)] text-sm font-bold text-white"
    >
      {huruf}
    </div>
  );
}

function UploadFoto({ foto, nama, onPilih, fileRef }) {
  return (
    <label className="group relative flex h-16 w-16 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-dashed border-[var(--line)] bg-white/60 transition hover:border-[var(--organik)]">
      {foto ? (
        <img src={foto} alt={nama} className="h-full w-full rounded-full object-cover" />
      ) : (
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-[var(--ink-soft)] group-hover:text-[var(--organik)]">
          <path d="M4 8.5A1.5 1.5 0 015.5 7h2l1-2h7l1 2h2A1.5 1.5 0 0120 8.5v9A1.5 1.5 0 0118.5 19h-13A1.5 1.5 0 014 17.5v-9z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <circle cx="12" cy="13" r="3.2" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      )}
      <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--organik)] text-white">
        <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3">
          <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </span>
      <input ref={fileRef} type="file" accept="image/*" onChange={onPilih} className="hidden" />
    </label>
  );
}

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");
  const [foto, setFoto] = useState(null);
  const [fotoError, setFotoError] = useState("");
  const [mengirim, setMengirim] = useState(false);
  const fileRef = useRef(null);

  useEffect(() => {
    fetch(`${FIREBASE_DB_URL}/komentar.json`)
      .then((r) => r.json())
      .then((data) => {
        const list = data
          ? Object.entries(data).map(([id, v]) => ({ id, ...v }))
          : [];
        list.sort((a, b) => b.waktu - a.waktu);
        setComments(list);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  async function handleFoto(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      setFotoError("Ukuran foto maksimal 5MB.");
      e.target.value = "";
      return;
    }
    setFotoError("");
    const base64 = await resizeFotoKeBase64(file);
    setFoto(base64);
  }

  async function kirim(e) {
    e.preventDefault();
    if (!nama.trim() || !pesan.trim() || mengirim) return;
    setMengirim(true);

    const baru = {
      nama: nama.trim(),
      pesan: pesan.trim(),
      foto: foto || null,
      waktu: Date.now(),
    };

    try {
      const res = await fetch(`${FIREBASE_DB_URL}/komentar.json`, {
        method: "POST",
        body: JSON.stringify(baru),
      });
      const data = await res.json();
      setComments([{ id: data.name, ...baru }, ...comments]);
      setNama("");
      setPesan("");
      setFoto(null);
      if (fileRef.current) fileRef.current.value = "";
    } catch {
      alert("Gagal mengirim komentar. Cek koneksi internet kamu, atau URL Firebase belum diganti.");
    } finally {
      setMengirim(false);
    }
  }

  return (
    <section id="komentar" className="border-t border-[var(--line)] bg-white/40">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2 className="font-display text-2xl font-bold text-[var(--ink)] sm:text-3xl">
          Komentar
        </h2>
        <p className="mt-2 max-w-lg text-sm text-[var(--ink-soft)]">
          Tulis pertanyaan, masukan, atau koreksi. Komentar ini kelihatan oleh
          semua pengunjung situs.
        </p>

        <form onSubmit={kirim} className="mt-8 max-w-lg space-y-3">
          <div className="flex items-center gap-3">
            <UploadFoto foto={foto} nama={nama} onPilih={handleFoto} fileRef={fileRef} />
            <div className="text-xs text-[var(--ink-soft)]">
              <p>Foto profil (opsional)</p>
              <p>Maksimal 5MB.</p>
              {fotoError && <p className="mt-0.5 text-[var(--b3)]">{fotoError}</p>}
            </div>
          </div>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Nama kamu"
            className="w-full rounded-xl border border-[var(--line)] bg-[var(--paper)] px-4 py-2.5 text-sm text-[var(--ink)] outline-none focus:border-[var(--organik)]"
          />
          <textarea
            value={pesan}
            onChange={(e) => setPesan(e.target.value)}
            placeholder="Tulis komentar kamu..."
            rows={3}
            className="w-full rounded-xl border border-[var(--line)] bg-[var(--paper)] px-4 py-2.5 text-sm text-[var(--ink)] outline-none focus:border-[var(--organik)]"
          />
          <button
            type="submit"
            disabled={mengirim}
            className="rounded-full bg-[var(--ink)] px-6 py-2.5 text-sm font-semibold text-[var(--paper)] transition hover:bg-[var(--organik-dark)] disabled:opacity-60"
          >
            {mengirim ? "Mengirim..." : "Kirim komentar"}
          </button>
        </form>

        <div className="mt-10 max-w-lg space-y-4">
          {loading && <p className="text-sm text-[var(--ink-soft)]">Memuat komentar...</p>}
          {!loading && error && (
            <p className="text-sm text-[var(--b3)]">
              Belum bisa memuat komentar — URL Firebase di Comments.jsx belum diganti.
            </p>
          )}
          {!loading && !error && comments.length === 0 && (
            <p className="text-sm text-[var(--ink-soft)]">
              Belum ada komentar. Jadi yang pertama, yuk.
            </p>
          )}
          {comments.map((c) => (
            <div
              key={c.id}
              className="flex gap-3 rounded-xl border border-[var(--line)] bg-[var(--paper)] p-4"
            >
              <Avatar src={c.foto} nama={c.nama} />
              <div>
                <p className="font-semibold text-[var(--ink)]">{c.nama}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-[var(--ink)]">
                  {c.pesan}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
