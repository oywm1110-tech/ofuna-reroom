import { readFileSync, writeFileSync } from "fs";

const file = "src/app/page.tsx";
let code = readFileSync(file, "utf8");

// メニューセクションを EXPERIENCE と EQUIPMENT の間に挿入
const menuSection = `
      {/* ═══ DRINK MENU ═══ */}
      <SectionDivider />
      <section id="menu" className="max-w-7xl mx-auto px-6 py-16 md:py-32">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-20">
              <div>
                <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-brand-gold block mb-4">Drink Menu</span>
                <h2 className="text-5xl md:text-7xl font-playfair font-bold leading-[0.9]">Menu</h2>
              </div>
              <p className="max-w-sm text-white/40 text-sm leading-relaxed">
                All cocktails ¥500。気軽に楽しめる価格で、音楽とお酒をお楽しみください。
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ScrollReveal delay={0}>
              <div className="glass-panel p-6 md:p-8 h-full">
                <h3 className="text-brand-gold font-oswald font-bold text-lg tracking-widest mb-1">COCKTAIL</h3>
                <p className="text-white/30 text-xs mb-5">¥500</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white/70 text-[11px] font-bold tracking-widest mb-2">GIN</h4>
                    <div className="space-y-1 text-white/50 text-sm">
                      <p>ジン・トニック</p><p>ジン・バック</p><p>ジン・スリング</p><p>ブラッディ・サム</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white/70 text-[11px] font-bold tracking-widest mb-2">VODKA</h4>
                    <div className="space-y-1 text-white/50 text-sm">
                      <p>ウォッカ・トニック</p><p>グレイハウンド</p><p>モスコー・ミュール</p><p>ゴッド・マザー</p><p>ブラック・ルシアン</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white/70 text-[11px] font-bold tracking-widest mb-2">RUM</h4>
                    <div className="space-y-1 text-white/50 text-sm">
                      <p>キューバ・リバー</p><p>ラム・クーラー</p><p>ゴールデン・フレンド</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white/70 text-[11px] font-bold tracking-widest mb-2">TEQUILA</h4>
                    <div className="space-y-1 text-white/50 text-sm">
                      <p>テコニック</p><p>テキーラ・グレープフルーツ</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="glass-panel p-6 md:p-8 h-full">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-brand-gold font-oswald font-bold text-lg tracking-widest mb-1">WINE</h3>
                    <p className="text-white/30 text-xs mb-3">¥500</p>
                    <div className="text-white/50 text-sm"><p>DEL SUR 赤・白</p></div>
                  </div>
                  <div>
                    <h3 className="text-brand-gold font-oswald font-bold text-lg tracking-widest mb-1">LIQUEUR</h3>
                    <p className="text-white/30 text-xs mb-3">¥500</p>
                    <div className="space-y-1 text-white/50 text-sm">
                      <p>カルーア</p><p>マリブ</p><p>アマレット</p><p>パッソア（パッションフルーツ）</p><p>イエガー</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-brand-gold font-oswald font-bold text-lg tracking-widest mb-1">WHISKEY</h3>
                    <p className="text-white/30 text-xs mb-3">¥700</p>
                    <div className="space-y-1 text-white/50 text-sm">
                      <p>I.W.ハーパー</p><p>フォア・ローゼズ</p><p>ワイルド・ターキー</p><p>ジャック・ダニエル</p><p>カティ・サーク</p><p>ジェイムソン</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="glass-panel p-6 md:p-8 h-full">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-brand-gold font-oswald font-bold text-lg tracking-widest mb-1">焼酎</h3>
                    <p className="text-white/30 text-xs mb-3">¥600</p>
                    <div className="space-y-1 text-white/50 text-sm">
                      <p>いいちご溶岩（麦）</p><p>二階堂（麦）</p><p>黒霧島（芋）</p><p>れんと</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-brand-gold font-oswald font-bold text-lg tracking-widest mb-1">キンミヤ</h3>
                    <p className="text-white/30 text-xs mb-3">¥500</p>
                    <div className="space-y-1 text-white/50 text-sm">
                      <p>コーヒー豆乳割り</p><p>紅茶豆乳割り</p><p>ウーロン茶割り</p><p>紅茶割り</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-brand-gold font-oswald font-bold text-lg tracking-widest mb-1">生ビール</h3>
                    <p className="text-white/30 text-xs mb-3">¥700</p>
                    <div className="space-y-1 text-white/50 text-sm">
                      <p>一番搾り</p><p>シャンディ・ガフ</p><p>レッド・アイ</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-brand-gold font-oswald font-bold text-lg tracking-widest mb-1">瓶ビール</h3>
                    <p className="text-white/30 text-xs mb-3">¥750</p>
                    <div className="text-white/50 text-sm"><p>ハートランド</p></div>
                  </div>
                  <div>
                    <h3 className="text-brand-gold font-oswald font-bold text-lg tracking-widest mb-1">ハイボール</h3>
                    <p className="text-white/30 text-xs mb-3">¥500</p>
                    <div className="text-white/50 text-sm"><p>ホワイト・ホース</p></div>
                  </div>
                  <div>
                    <h3 className="text-brand-gold font-oswald font-bold text-lg tracking-widest mb-1">SOFT DRINK</h3>
                    <p className="text-white/30 text-xs mb-3">¥500</p>
                    <div className="space-y-1 text-white/50 text-sm">
                      <p>コカ・コーラ</p><p>ジンジャー・エール</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
`;

// EXPERIENCE の閉じタグの後、EQUIPMENT の前に挿入
code = code.replace(
  "      {/* ═══ EQUIPMENT ═══ */}",
  menuSection + "\n      {/* ═══ EQUIPMENT ═══ */}"
);

// ナビにMenuを追加
code = code.replace(
  '{ label: "Equipment", href: "#equipment" },\n              { label: "Events & Live", href: "#schedule" },',
  '{ label: "Equipment", href: "#equipment" },\n              { label: "Menu", href: "#menu" },\n              { label: "Events & Live", href: "#schedule" },'
);
code = code.replace(
  '{ label: "Equipment", href: "#equipment" },\n            { label: "Events", href: "#schedule" },',
  '{ label: "Equipment", href: "#equipment" },\n            { label: "Menu", href: "#menu" },\n            { label: "Events", href: "#schedule" },'
);

writeFileSync(file, code, "utf8");

const updated = readFileSync(file, "utf8");
console.log("Menu section added:", updated.includes('id="menu"') ? "YES" : "NO");
console.log("COCKTAIL:", updated.includes("ジン・トニック") ? "YES" : "NO");
console.log("WHISKEY:", updated.includes("ジャック・ダニエル") ? "YES" : "NO");
console.log("Beer:", updated.includes("ハートランド") ? "YES" : "NO");
console.log("Nav updated:", (updated.match(/"Menu"/g) || []).length);
console.log("Done!");
