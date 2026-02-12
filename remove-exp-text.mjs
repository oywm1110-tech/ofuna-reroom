import { readFileSync, writeFileSync } from "fs";

const file = "src/app/page.tsx";
let code = readFileSync(file, "utf8");

code = code.replace(
  `            <p className="max-w-sm text-white/40 text-sm leading-relaxed">
              音楽好きが集まる場所。レコード、CDJ、ライブ——好きな音を語れる仲間がここにいる。
            </p>`,
  ``
);

writeFileSync(file, code, "utf8");

const updated = readFileSync(file, "utf8");
console.log("Text removed:", !updated.includes("音楽好きが集まる場所") ? "YES" : "NO");
console.log("Done!");
