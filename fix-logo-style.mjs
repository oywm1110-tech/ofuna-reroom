import { readFileSync, writeFileSync } from "fs";

const file = "src/app/page.tsx";
let code = readFileSync(file, "utf8");

// 現在のロゴ部分を差し替え
const oldBlock = `<motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
              className="flex justify-center"
            >
              <img
                src="/logo.jpg"
                alt="Ofuna Re:Room Logo"
                className="w-[70vw] md:w-[35vw] lg:w-[28vw] max-w-[400px] rounded-full"
              />
            </motion.div>`;

const newBlock = `<motion.div
              initial={{ opacity: 0, scale: 0.6, rotate: -360 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, duration: 1.5, ease: "easeOut" }}
              className="flex justify-center mb-6"
            >
              <div className="w-[140px] h-[140px] md:w-[180px] md:h-[180px] rounded-full overflow-hidden border-2 border-brand-gold/30 shadow-[0_0_40px_rgba(212,175,55,0.15)]">
                <img
                  src="/logo.jpg"
                  alt="Ofuna Re:Room Logo"
                  className="w-full h-full object-cover scale-[1.35]"
                />
              </div>
            </motion.div>
            <h1 className="text-[13vw] md:text-[9vw] font-playfair font-black leading-[0.85] tracking-tighter uppercase">
              <AnimatedTitle text="Ofuna" />
              <br />
              <span className="text-brand-gold italic">
                <AnimatedTitle text="Re:Room" />
              </span>
            </h1>`;

code = code.replace(oldBlock, newBlock);

writeFileSync(file, code, "utf8");

const updated = readFileSync(file, "utf8");
console.log("Logo resized:", updated.includes("scale-[1.35]") ? "YES" : "NO");
console.log("Title restored:", updated.includes("AnimatedTitle") ? "YES" : "NO");
console.log("Done!");
