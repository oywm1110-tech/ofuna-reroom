import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-black text-white font-sans selection:bg-brand-red selection:text-white pb-24">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Background placeholder - in real app this would be a high quality photo or video */}
        <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent"></div>

        <div className="relative z-20 text-center flex flex-col items-center gap-6">
          <h1 className="text-6xl md:text-9xl font-oswald font-bold tracking-tighter uppercase leading-none">
            Ofuna<br />Re:Room
          </h1>
          <p className="text-sm md:text-lg font-bold tracking-[0.3em] text-brand-gold uppercase border-y border-brand-gold/30 py-4 px-8">
            Authentic Rock Bar
          </p>
          <div className="mt-8 flex flex-col gap-4 w-full max-w-xs">
            <Link href="#system" className="w-full py-4 border border-white/20 hover:bg-white hover:text-brand-black transition-all duration-300 font-bold tracking-widest uppercase text-sm">
              System
            </Link>
            <Link href="#access" className="w-full py-4 bg-brand-red text-white border border-brand-red hover:bg-red-800 transition-all duration-300 font-bold tracking-widest uppercase text-sm">
              Access
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
          <span className="text-[10px] tracking-widest uppercase">Scroll</span>
          <div className="w-[1px] h-12 bg-white"></div>
        </div>
      </section>

      {/* Concept / Instagram-like Feed */}
      <section id="concept" className="container mx-auto px-6 py-20 max-w-4xl">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-stroke opacity-30">CONCEPT</h2>
          <span className="px-3 py-1 bg-brand-red text-[10px] font-bold tracking-widest uppercase rounded-full animate-pulse text-white">Live Now</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-400 font-light leading-relaxed">
            <p>
              <strong className="text-white block mb-2 font-bold tracking-wide">OFUNA UNDERGROUND.</strong>
            </p>
            <p>
              大船の地下に広がる、ロックを愛する大人たちの隠れ家。<br />
              70年代〜90年代のUK/USロックを中心に、極上の音響と空間を提供します。
            </p>
            <p>
              好きな音楽をリクエストして、グラスを傾ける。<br />
              誰かと語らうもよし、一人で音に没頭するもよし。<br />
              ここは "再構築 (Re:Room)" するための場所。
            </p>
          </div>
          <div className="aspect-square bg-neutral-900 border border-white/5 relative group">
            {/* Mock Instagram Post Image */}
            <div className="absolute inset-4 bg-neutral-800 flex items-center justify-center text-neutral-600 font-oswald text-2xl group-hover:text-neutral-500 transition-colors">
              OFUNA RE:ROOM
            </div>
            <div className="absolute top-0 right-0 p-4">
              <div className="w-3 h-3 rounded-full bg-brand-red animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* System Section */}
      <section id="system" className="bg-neutral-900/50 py-24 border-y border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold mb-12 text-white">SYSTEM</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-panel p-8">
              <h3 className="text-xl font-bold text-brand-gold mb-6 tracking-widest uppercase">Charge</h3>
              <ul className="space-y-4 text-sm md:text-base">
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Table Charge</span>
                  <span className="font-mono">¥500</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Music Request</span>
                  <span className="font-mono">Free</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Wi-Fi / Power</span>
                  <span className="font-mono">Available</span>
                </li>
              </ul>
            </div>

            <div className="glass-panel p-8">
              <h3 className="text-xl font-bold text-brand-gold mb-6 tracking-widest uppercase">Drink Menu</h3>
              <ul className="space-y-4 text-sm md:text-base">
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Beer (Heartland / Bass)</span>
                  <span className="font-mono">¥800~</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Whisky / Bourbon</span>
                  <span className="font-mono">¥900~</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Original Cocktails</span>
                  <span className="font-mono">¥1,000~</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule / Events */}
      <section className="container mx-auto px-6 py-24 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-oswald font-bold mb-12 text-white flex items-center gap-4">
          SCHEDULE <span className="text-base font-normal bg-white text-black px-2 py-1 tracking-widest rounded-sm">FEB 2026</span>
        </h2>

        <div className="space-y-2">
          {[
            { date: "02.14", day: "FRI", title: "VALENTINE ROCK NIGHT", dj: "Resident DJ" },
            { date: "02.21", day: "FRI", title: "90s UK ROCK SPECIAL", dj: "Guest DJ" },
            { date: "02.28", day: "SAT", title: "VINYL ONLY SESSION", dj: "Free Entry" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-6 border-b border-white/10 hover:border-brand-gold/50 transition-colors group cursor-pointer">
              <div className="font-oswald text-2xl md:text-3xl text-neutral-500 group-hover:text-white transition-colors w-24">
                {item.date} <span className="text-sm align-top ml-1">{item.day}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide group-hover:text-brand-gold transition-colors">{item.title}</h3>
                <p className="text-sm text-neutral-500 mt-1">{item.dj}</p>
              </div>
              <div className="px-4 py-2 border border-white/20 rounded-full text-xs uppercase tracking-widest group-hover:bg-white group-hover:text-black transition-all">
                Details
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Access & Footer */}
      <footer id="access" className="bg-neutral-900 border-t border-white/10 pt-20 pb-10">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-oswald font-bold mb-8 uppercase tracking-widest">Access</h2>
          <address className="not-italic text-neutral-400 leading-relaxed mb-8">
            〒247-0056<br />
            神奈川県鎌倉市大船 X-X-X<br />
            OFUNA RE:ROOM B1F
          </address>
          <div className="flex justify-center gap-8 mb-12">
            <a href="https://www.instagram.com/reroomofu7/" target="_blank" className="hover:text-brand-gold transition-colors">
              INSTAGRAM
            </a>
            <a href="https://www.facebook.com/ofuna.reroom/" target="_blank" className="hover:text-brand-gold transition-colors">
              FACEBOOK
            </a>
            <a href="#" className="hover:text-brand-gold transition-colors">
              GOOGLE MAPS
            </a>
          </div>
          <p className="text-neutral-600 text-xs tracking-widest">
            &copy; 2026 OFUNA RE:ROOM. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </main>
  );
}
