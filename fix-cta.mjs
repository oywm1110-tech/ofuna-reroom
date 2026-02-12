import { readFileSync, writeFileSync } from "fs";

const file = "src/app/page.tsx";
let code = readFileSync(file, "utf8");

code = code.replace(
  '今夜、会いに行く。',
  'Come Find Your Sound.'
);

code = code.replace(
  '予約不要・お一人様歓迎・初めての方もお気軽に',
  'No reservation needed. Walk in, grab a drink, and let the music do the rest.'
);

writeFileSync(file, code, "utf8");

const updated = readFileSync(file, "utf8");
console.log("Title updated:", updated.includes("Come Find Your Sound") ? "YES" : "NO");
console.log("Subtitle updated:", updated.includes("Walk in") ? "YES" : "NO");
console.log("Done!");
