import { readFileSync, writeFileSync } from "fs";

const file = "src/app/page.tsx";
let code = readFileSync(file, "utf8");
const lines = code.split("\n");

// ParallaxSection の開始行を見つけて、対応する閉じタグを修正
const parallaxStarts = [];
lines.forEach((line, i) => {
  if (line.includes("<ParallaxSection")) {
    parallaxStarts.push(i);
  }
});

console.log("ParallaxSection starts at lines:", parallaxStarts.map(l => l + 1));

// 各 ParallaxSection の閉じタグを見つける
// 692行目(index 691), 750行目(index 749), 841行目(index 840)
const closeLines = [691, 749, 840];

for (const idx of closeLines) {
  if (lines[idx] && lines[idx].trim() === "</section>") {
    lines[idx] = lines[idx].replace("</section>", "</ParallaxSection>");
    console.log(`Line ${idx + 1}: </section> -> </ParallaxSection>`);
  } else {
    console.log(`Line ${idx + 1}: NOT </section>, found: "${lines[idx]?.trim()}"`);
  }
}

writeFileSync(file, lines.join("\n"), "utf8");

// 確認
const updated = readFileSync(file, "utf8");
const sectionCloses = (updated.match(/<\/section>/g) || []).length;
const parallaxCloses = (updated.match(/<\/ParallaxSection>/g) || []).length;
console.log("Remaining </section>:", sectionCloses);
console.log("</ParallaxSection> count:", parallaxCloses);
console.log("Done!");
