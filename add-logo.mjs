import { readFileSync, writeFileSync } from "fs";

const file = "src/app/page.tsx";
let code = readFileSync(file, "utf8");

const logoUrl = "https://www.genspark.ai/api/files/s/ImAxozuT";

// 1. ヒーローセクション: AnimatedTitle の "Ofuna" + "Re:Room" をロゴ画像に差し替え
// 現在の構造:
//   <h1 ...>
//     <AnimatedTitle text="Ofuna" />
//     <br />
//     <span className="text-brand-gold italic">
//       <AnimatedTitle text="Re:Room" />
//     </span>
//   </h1>
// ロゴ画像に置換

code = code.replace(
  `<h1 className="text-[15vw] md:text-[11vw] font-playfair font-black leading-[0.85] tracking-tighter uppercase">
              <AnimatedTitle text="Ofuna" />
              <br />
              <span className="text-brand-gold italic">
                <AnimatedTitle text="Re:Room" />
              </span>
            </h1>`,
  `<motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
              className="flex justify-center"
            >
              <img
                src="${logoUrl}"
                alt="Ofuna Re:Room Logo"
                className="w-[70vw] md:w-[35vw] lg:w-[28vw] max-w-[400px] rounded-full"
              />
            </motion.div>`
);

// 2. デスクトップナビのテキストロゴもロゴ画像に
code = code.replace(
  `<div className="font-playfair font-bold text-2xl tracking-tight">OFUNA <span className="text-brand-gold italic">RE:ROOM</span></div>`,
  `<img src="${logoUrl}" alt="Re:Room" className="h-10 w-10 rounded-full" /><div className="font-playfair font-bold text-2xl tracking-tight">OFUNA <span className="text-brand-gold italic">RE:ROOM</span></div>`
);

writeFileSync(file, code, "utf8");

// 確認
const updated = readFileSync(file, "utf8");
console.log("Hero logo added:", updated.includes("Ofuna Re:Room Logo") ? "YES" : "NO");
console.log("Nav logo added:", updated.includes("h-10 w-10 rounded-full") ? "YES" : "NO");
console.log("Done!");
