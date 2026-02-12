import { readFileSync, writeFileSync } from "fs";

const file = "src/app/page.tsx";
let code = readFileSync(file, "utf8");
const lines = code.split("\n");

// PARALLAX BAND セクションの行番号を特定して削除
const result = [];
let skipping = false;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes("PARALLAX BAND")) {
    skipping = true;
    continue;
  }
  if (skipping) {
    // ParallaxBandの閉じタグ </ParallaxBand> を見つけたら終了
    if (lines[i].includes("</ParallaxBand>")) {
      skipping = false;
      continue;
    }
    continue;
  }
  result.push(lines[i]);
}

writeFileSync(file, result.join("\n"), "utf8");

const updated = readFileSync(file, "utf8");
console.log("Parallax bands removed:", !updated.includes("PARALLAX BAND") ? "YES" : "NO");
console.log("ParallaxBand usage removed:", !updated.includes("<ParallaxBand") ? "YES" : "NO");
console.log("Done!");
