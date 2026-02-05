import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen vintage-gradient">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden border-b-4 border-vintage-gold">
        <div className="z-10 bg-smoky-black/80 p-8 md:p-12 border-2 border-vintage-gold shadow-[10px_10px_0px_rgba(74,14,14,1)]">
          <h1 className="text-5xl md:text-8xl font-serif font-black text-vintage-gold uppercase tracking-tighter text-psychedelic mb-4">
            Ofuna Reroom
          </h1>
          <p className="text-xl md:text-3xl font-serif italic text-paper tracking-widest uppercase mb-8">
            Music, Spirit and Rock &apos;n&apos; Roll
          </p>
          <div className="flex justify-center gap-4">
            <a href="#events" className="px-6 py-3 bg-burgundy text-paper font-bold uppercase tracking-widest border-2 border-vintage-gold hover:bg-vintage-gold hover:text-smoky-black transition-colors">
              Live Sessions
            </a>
          </div>
        </div>

        {/* Spinning Vinyl */}
        <div className="absolute -bottom-24 -right-24 md:-bottom-48 md:-right-48 w-64 h-64 md:w-[600px] md:h-[600px] opacity-40">
          <div className="w-full h-full rounded-full border-[20px] md:border-[60px] border-smoky-black bg-[#1a1a1a] shadow-2xl animate-vinyl flex items-center justify-center relative">
            <div className="absolute w-full h-full rounded-full border border-paper/20 animate-pulse"></div>
            {/* Vinyl Label */}
            <div className="w-1/3 h-1/3 rounded-full bg-burgundy border-4 border-vintage-gold flex items-center justify-center text-center p-2">
              <span className="text-[8px] md:text-xs font-serif text-vintage-gold uppercase font-bold leading-none">
                Ofuna Reroom<br />Since 1970s
              </span>
            </div>
            {/* Vinyl Grooves */}
            <div className="absolute w-[90%] h-[90%] rounded-full border-2 border-paper/5"></div>
            <div className="absolute w-[80%] h-[80%] rounded-full border-2 border-paper/5"></div>
            <div className="absolute w-[70%] h-[70%] rounded-full border-2 border-paper/5"></div>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section id="about" className="py-24 px-8 md:px-24 bg-paper text-smoky-black relative border-b-4 border-burgundy">
        <div className="max-w-4xl mx-auto border-l-8 border-burgundy pl-8">
          <h2 className="text-4xl md:text-6xl font-serif font-black uppercase mb-8 text-burgundy">The Concept</h2>
          <p className="text-xl md:text-2xl leading-relaxed font-serif italic mb-6">
            「大船で1970年代のUKロックを愛でる場所」
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            1970年代、ロンドンの路地裏にあった熱狂的なロックバー。
            そのスピリットを、神奈川県大船の地に蘇らせました。
            アナログの温かみ、真空管アンプの咆哮、そして人々が集うコミュニティとしての場所。
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            ミュージックバーであり、リフォームの相談場所であり、
            何よりもロックを愛する大人たちのためのリビングルーム。それが Ofuna Reroom です。
          </p>
        </div>
      </section>

      {/* Live / Event Info */}
      <section id="events" className="py-24 px-8 md:px-24 bg-smoky-black text-paper">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif font-black uppercase mb-12 text-vintage-gold text-center">Upcoming Sessions</h2>
          <div className="space-y-8">
            {[
              { date: "FEB 15", title: "Led Zeppelin Night", theme: "Deep cut sessions from IV and Physical Graffiti" },
              { date: "FEB 22", title: "Pink Floyd Experience", theme: "Dark Side of the Moon 50th Anniversary playback" },
              { date: "MAR 01", title: "The Who: Quadrophenia", theme: "A night of mod culture and power chords" },
            ].map((event, i) => (
              <div key={i} className="group border-b-2 border-paper/20 pb-8 flex flex-col md:flex-row md:items-center gap-6 hover:bg-burgundy/20 transition-colors p-4">
                <div className="text-3xl font-serif font-black text-burgundy bg-vintage-gold px-4 py-2 rotate-[-2deg]">
                  {event.date}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-4xl font-serif font-bold uppercase group-hover:text-vintage-gold transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-paper/60 italic mt-1">{event.theme}</p>
                </div>
                <div className="text-paper/40 font-serif">START 20:00</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-burgundy border-y-4 border-vintage-gold px-4 overflow-hidden">
        <h2 className="text-center text-4xl md:text-6xl font-serif font-black text-vintage-gold uppercase mb-16 underline decoration-4 underline-offset-8">Gallery of Spirits</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
          <div className="aspect-square bg-smoky-black border-2 border-vintage-gold relative group overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center opacity-20 filter grayscale group-hover:scale-110 transition-transform">
              <span className="text-paper text-sm uppercase tracking-widest font-serif">Vintage Amp</span>
            </div>
          </div>
          <div className="aspect-square bg-smoky-black border-2 border-vintage-gold relative group overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center opacity-20 filter grayscale group-hover:scale-110 transition-transform">
              <span className="text-paper text-sm uppercase tracking-widest font-serif">Acoustic Corner</span>
            </div>
          </div>
          <div className="aspect-square bg-smoky-black border-2 border-vintage-gold relative group overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center opacity-20 filter grayscale group-hover:scale-110 transition-transform">
              <span className="text-paper text-sm uppercase tracking-widest font-serif">Vinyl Wall</span>
            </div>
          </div>
          <div className="aspect-square bg-smoky-black border-2 border-vintage-gold relative group overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center opacity-20 filter grayscale group-hover:scale-110 transition-transform">
              <span className="text-paper text-sm uppercase tracking-widest font-serif">Reform Spirit</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / SNS Link */}
      <footer className="py-16 bg-smoky-black text-paper text-center border-t-8 border-burgundy">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-black uppercase text-vintage-gold mb-8">Join the Community</h2>
          <a
            href="https://www.facebook.com/ofuna.reroom/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-[#1877F2] text-white font-bold uppercase tracking-[0.2em] transform skew-x-[-10deg] hover:scale-105 transition-transform"
          >
            Ofuna Reroom Facebook
          </a>
          <div className="mt-12 opacity-40 font-serif text-sm">
            <p>神奈川県鎌倉市大船X-X-X</p>
            <p>Music, Spirit and Rock &apos;n&apos; Roll | Since 1970s Aesthetic</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
