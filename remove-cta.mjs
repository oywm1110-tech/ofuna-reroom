import { readFileSync, writeFileSync } from "fs";

const file = "src/app/page.tsx";
let code = readFileSync(file, "utf8");

code = code.replace(
  `          {/* CTA */}
          <ScrollReveal>
            <div className="glass-panel p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-20 border-brand-gold/10">
              <div>
                <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-2">Come Find Your Sound.</h3>
                <p className="text-white/40 text-sm">No reservation needed. Walk in, grab a drink, and let the music do the rest.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="https://www.instagram.com/reroomofu7/" target="_blank" rel="noopener noreferrer" data-hover className="px-8 py-3 rounded-full bg-brand-gold text-black font-bold text-sm tracking-widest uppercase hover:bg-white transition-colors flex items-center gap-2">
                  <Instagram className="w-4 h-4" /> DMでお問い合わせ
                </a>
                <a href="https://map.yahoo.co.jp/v3/place/LoTzc64j59Q" target="_blank" rel="noopener noreferrer" data-hover className="px-8 py-3 rounded-full border border-white/20 font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> アクセス
                </a>
              </div>
            </div>
          </ScrollReveal>`,
  ``
);

writeFileSync(file, code, "utf8");

const updated = readFileSync(file, "utf8");
console.log("CTA removed:", !updated.includes("Come Find Your Sound") ? "YES" : "NO");
console.log("Done!");
