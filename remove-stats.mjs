import { readFileSync, writeFileSync } from "fs";

const file = "src/app/page.tsx";
let code = readFileSync(file, "utf8");
const lines = code.split("\n");

const result = [];
let skipping = false;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes("═══ STATS ═══")) {
    skipping = true;
    continue;
  }
  if (skipping) {
    if (lines[i].includes("</section>")) {
      skipping = false;
      continue;
    }
    continue;
  }
  result.push(lines[i]);
}

writeFileSync(file, result.join("\n"), "utf8");

const updated = readFileSync(file, "utf8");
console.log("Stats removed:", !updated.includes("WHISKY SELECTION") ? "YES" : "NO");
console.log("Stats section removed:", !updated.includes("═══ STATS ═══") ? "YES" : "NO");
console.log("Done!");
