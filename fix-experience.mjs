import { readFileSync, writeFileSync } from "fs";

const file = "src/app/page.tsx";
let code = readFileSync(file, "utf8");

// 1. ナビの順番変更（モバイル）
code = code.replace(
  `{ label: "Experience", href: "#system" },
              { label: "Equipment", href: "#equipment" },
              { label: "Menu", href: "#menu" },
              { label: "Events & Live", href: "#schedule" },
              { label: "Gallery", href: "#gallery" },
              { label: "Access", href: "#access" },`,
  `{ label: "Menu", href: "#menu" },
              { label: "Equipment", href: "#equipment" },
              { label: "Events & Live", href: "#schedule" },
              { label: "Gallery", href: "#gallery" },
              { label: "Access", href: "#access" },`
);

// 2. ナビの順番変更（デスクトップ）
code = code.replace(
  `{ label: "Experience", href: "#system" },
            { label: "Equipment", href: "#equipment" },
            { label: "Menu", href: "#menu" },
            { label: "Events", href: "#schedule" },
            { label: "Gallery", href: "#gallery" },
            { label: "Access", href: "#access" },`,
  `{ label: "Menu", href: "#menu" },
            { label: "Equipment", href: "#equipment" },
            { label: "Events", href: "#schedule" },
            { label: "Gallery", href: "#gallery" },
            { label: "Access", href: "#access" },`
);

// 3. EXPERIENCE セクション全体を置換
// 古いセクションの開始と終了を特定
const expStart = code.indexOf("{/* ═══ EXPERIENCE ═══ */}");
const expEnd = code.indexOf("</ParallaxSection>", expStart) + "</ParallaxSection>".length;

const newExperience = `{/* ═══ EXPERIENCE ═══ */}
      <SectionDivider />
      <ParallaxSection id="system" className="max-w-7xl mx-auto px-6 py-16 md:py-32">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-20">
            <div>
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-brand-gold block mb-4">About</span>
              <h2 className="text-5xl md:text-7xl font-playfair font-bold leading-[0.9]">The<br />Experience</h2>
            </div>
            <p className="max-w-sm text-white/40 text-sm leading-relaxed">
              音楽好きが集まる場所。レコード、CDJ、ライブ——好きな音を語れる仲間がここにいる。
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <ScrollReveal>
            <div className="h-full glass-panel p-10 md:p-12 flex flex-col justify-between group overflow-hidden relative min-h-[280px] md:min-h-[350px]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-0 group-hover:opacity-15 transition-opacity duration-1000 scale-110 group-hover:scale-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/80 to-transparent z-[1]" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center mb-8">
                  <Volume2 className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="text-3xl md:text-4xl font-playfair font-bold mb-4 italic leading-tight">Uncompromising<br />Sound</h3>
                <p className="text-white/50 leading-relaxed max-w-sm">
                  好きなレコードをリクエストしてください。最高品質の音響システムで、アーティストの吐息まで再現します。
                </p>
              </div>
              <div className="relative z-10 pt-12 flex items-center justify-between">
                <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-brand-gold/80">Sound System / 70s-90s Rock</span>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-rows-2 gap-4 md:gap-5">
            <ScrollReveal delay={0.1}>
              <div className="glass-panel p-8 flex items-center gap-6 h-full">
                <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-[0.2em] uppercase mb-1">Opening Hours</h3>
                  <p className="text-white/50 text-sm">
                    <span className="text-white font-oswald text-lg">19:00</span>
                    <span className="mx-2 text-white/30">\u2192</span>
                    <span className="text-white font-oswald text-lg">02:00</span>
                    <span className="ml-3 text-[10px] text-white/30 uppercase tracking-widest">Closed on Sundays</span>
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="glass-panel p-8 flex items-center gap-6 h-full">
                <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center flex-shrink-0">
                  <Music2 className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-[0.2em] uppercase mb-1">Music Community</h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    ジャンル問わず音楽好きが集まるコミュニティ。<br />レコード持ち込みOK、リクエスト自由。
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection>`;

code = code.substring(0, expStart) + newExperience + code.substring(expEnd);

writeFileSync(file, code, "utf8");

const updated = readFileSync(file, "utf8");
console.log("Table Charge removed:", !updated.includes("Table Charge") ? "YES" : "NO");
console.log("Music Request removed:", !updated.includes("Music Request") ? "YES" : "NO");
console.log("WHISKY card removed:", !updated.includes("Selected Malts") ? "YES" : "NO");
console.log("CRAFT BEER card removed:", !updated.includes("CRAFT BEER") ? "YES" : "NO");
console.log("COCKTAILS card removed:", !updated.includes("COCKTAILS & MORE") ? "YES" : "NO");
console.log("Music Community added:", updated.includes("Music Community") ? "YES" : "NO");
console.log("Experience nav removed:", !updated.includes('"Experience"') ? "YES" : "NO");
console.log("Done!");
