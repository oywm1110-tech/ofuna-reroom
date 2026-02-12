import { readFileSync, writeFileSync } from "fs";

const file = "src/app/page.tsx";
let code = readFileSync(file, "utf8");

// Uncompromising Sound カード全体を削除し、2カラムグリッドを1カラムに変更
const oldGrid = `<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
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

          <div className="grid grid-rows-2 gap-4 md:gap-5">`;

const newGrid = `<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">`;

code = code.replace(oldGrid, newGrid);

// 閉じタグの余分な </div> も削除
code = code.replace(
  `          </div>
        </div>
      </ParallaxSection>



      {/* ═══ EVENTS ═══ */}`,
  `        </div>
      </ParallaxSection>



      {/* ═══ EVENTS ═══ */}`
);

writeFileSync(file, code, "utf8");

const updated = readFileSync(file, "utf8");
console.log("Uncompromising removed:", !updated.includes("Uncompromising") ? "YES" : "NO");
console.log("Opening Hours kept:", updated.includes("Opening Hours") ? "YES" : "NO");
console.log("Music Community kept:", updated.includes("Music Community") ? "YES" : "NO");
console.log("Done!");
