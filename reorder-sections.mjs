import { readFileSync, writeFileSync } from "fs";

const file = "src/app/page.tsx";
let code = readFileSync(file, "utf8");
const lines = code.split("\n");

// セクション境界（行番号→インデックス = 行番号-1）
// 現在の順序:
// HERO: 503-604
// MARQUEE1: 605-618
// STATS: 619-639
// PARALLAX BAND 1: 640-652
// EXPERIENCE: 653-723
// DRINK MENU: 724-847
// EQUIPMENT: 848-905
// PARALLAX BAND 2: 906-918
// MARQUEE 2: 919-930
// EVENTS: 931-1009
// PARALLAX BAND 3: 1010-1022
// GALLERY: 1023-1042
// FOOTER: 1043-end

// 目標の順序:
// HERO → MARQUEE1 → STATS → PARALLAX BAND 1 → DRINK MENU → EXPERIENCE → EVENTS → PARALLAX BAND 2 → GALLERY → MARQUEE 2 → EQUIPMENT → PARALLAX BAND 3 → FOOTER

// ブロックを抽出（行インデックスはline-1）
const hero = lines.slice(502, 604).join("\n");
const marquee1 = lines.slice(604, 618).join("\n");
const stats = lines.slice(618, 639).join("\n");
const band1 = lines.slice(639, 652).join("\n");
const experience = lines.slice(652, 723).join("\n");
const menu = lines.slice(723, 847).join("\n");
const equipment = lines.slice(847, 905).join("\n");
const band2 = lines.slice(905, 918).join("\n");
const marquee2 = lines.slice(918, 930).join("\n");
const events = lines.slice(930, 1009).join("\n");
const band3 = lines.slice(1009, 1022).join("\n");
const gallery = lines.slice(1022, 1042).join("\n");
const footer = lines.slice(1042).join("\n");

// 前半（HEROの前まで）
const preamble = lines.slice(0, 502).join("\n");

// 新しい順序で組み立て
const newCode = [
  preamble,
  hero,
  marquee1,
  stats,
  band1,
  menu,        // MENU first
  experience,  // then EXPERIENCE
  band2,       // parallax band
  events,      // EVENTS
  band3,       // parallax band
  gallery,     // GALLERY
  marquee2,    // marquee
  equipment,   // EQUIPMENT last (before footer)
  footer,
].join("\n");

writeFileSync(file, newCode, "utf8");

// ナビも更新
let updated = readFileSync(file, "utf8");

// モバイルナビ
updated = updated.replace(
  `{ label: "Menu", href: "#menu" },
              { label: "Equipment", href: "#equipment" },
              { label: "Events & Live", href: "#schedule" },
              { label: "Gallery", href: "#gallery" },
              { label: "Access", href: "#access" },`,
  `{ label: "Menu", href: "#menu" },
              { label: "Experience", href: "#system" },
              { label: "Events & Live", href: "#schedule" },
              { label: "Gallery", href: "#gallery" },
              { label: "Equipment", href: "#equipment" },
              { label: "Access", href: "#access" },`
);

// デスクトップナビ
updated = updated.replace(
  `{ label: "Menu", href: "#menu" },
            { label: "Equipment", href: "#equipment" },
            { label: "Events", href: "#schedule" },
            { label: "Gallery", href: "#gallery" },
            { label: "Access", href: "#access" },`,
  `{ label: "Menu", href: "#menu" },
            { label: "Experience", href: "#system" },
            { label: "Events", href: "#schedule" },
            { label: "Gallery", href: "#gallery" },
            { label: "Equipment", href: "#equipment" },
            { label: "Access", href: "#access" },`
);

writeFileSync(file, updated, "utf8");

// 確認
const final = readFileSync(file, "utf8");
const sections = [];
const re = /═══ (.+?) ═══/g;
let m;
while ((m = re.exec(final)) !== null) {
  if (!m[1].match(/^═/)) sections.push(m[1]);
}
console.log("Section order:", sections.join(" → "));
console.log("Nav has Experience:", final.includes('"Experience"') ? "YES" : "NO");
console.log("Done!");
