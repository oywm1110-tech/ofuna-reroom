import { readFileSync, writeFileSync } from "fs";

const file = "src/app/page.tsx";
let code = readFileSync(file, "utf8");

// genspark URLを /logo.jpg に全置換
code = code.replaceAll("https://www.genspark.ai/api/files/s/ImAxozuT", "/logo.jpg");

writeFileSync(file, code, "utf8");

const updated = readFileSync(file, "utf8");
console.log("Old URL removed:", !updated.includes("genspark.ai") ? "YES" : "NO");
console.log("New path added:", updated.includes("/logo.jpg") ? "YES" : "NO");
console.log("Done!");
