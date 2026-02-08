import { readFileSync, writeFileSync } from "fs";

const file = "src/app/page.tsx";
let code = readFileSync(file, "utf8");

// 1. テキスト変更: "レコードとウィスキー。最高の音と酒を、大船の地下で。" → 新テキスト
code = code.replace(
  "レコードとウィスキー。最高の音と酒を、大船の地下で。",
  "音楽好きが集まる場所。レコード、CDJ、ライブ——好きな音を語れる仲間がここにいる。"
);

// 2. B1F を 4F に変更
code = code.replace("OFUNA RE:ROOM B1F", "OFUNA RE:ROOM 4F");

writeFileSync(file, code, "utf8");

// 確認
const updated = readFileSync(file, "utf8");
const hasNewText = updated.includes("音楽好きが集まる場所");
const hasB1F = updated.includes("B1F");
const has4F = updated.includes("OFUNA RE:ROOM 4F");

console.log("Text updated:", hasNewText ? "YES" : "NO");
console.log("B1F removed:", !hasB1F ? "YES" : "NO");
console.log("4F added:", has4F ? "YES" : "NO");
console.log("All done!");
