import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-black text-white flex flex-col items-center justify-center px-6">
      <div className="text-center space-y-6">
        <p className="text-[10px] font-bold tracking-[0.5em] uppercase text-brand-gold">
          404 — Page Not Found
        </p>
        <h1 className="text-6xl md:text-8xl font-playfair font-black leading-[0.85]">
          Lost in<br />
          the <span className="text-brand-gold italic">Groove</span>
        </h1>
        <p className="text-white/40 text-sm max-w-sm mx-auto leading-relaxed">
          お探しのページは見つかりませんでした。トップページへお戻りください。
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-brand-gold text-black font-bold text-sm tracking-widest uppercase hover:bg-white transition-colors duration-500"
        >
          Back to Top
        </Link>
      </div>
    </div>
  );
}
