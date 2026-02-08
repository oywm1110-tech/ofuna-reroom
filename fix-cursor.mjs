import { readFileSync, writeFileSync } from "fs";

const file = "src/app/globals.css";
let css = readFileSync(file, "utf8");

// cursor: none を cursor: auto に変更（デフォルトカーソル復活）
css = css.replace("cursor: none;", "cursor: auto;");

writeFileSync(file, css, "utf8");

const updated = readFileSync(file, "utf8");
console.log("cursor:none removed:", !updated.includes("cursor: none;") ? "YES" : "NO");
console.log("Done!");
