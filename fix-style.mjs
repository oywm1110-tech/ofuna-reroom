import { readFileSync, writeFileSync } from "fs";

const file = "src/app/page.tsx";
let code = readFileSync(file, "utf8");

// style が2回指定されている問題を修正
code = code.replace(
  `<motion.div
        style={{ y, scale }}
        className="absolute inset-[-20%] bg-cover bg-center"
        {...{ style: { y, scale, backgroundImage: \`url(\${src})\` } }}
      />`,
  `<motion.div
        style={{ y, scale, backgroundImage: \`url(\${src})\` }}
        className="absolute inset-[-20%] bg-cover bg-center"
      />`
);

writeFileSync(file, code, "utf8");

const updated = readFileSync(file, "utf8");
console.log("Double style fixed:", !updated.includes("...{ style:") ? "YES" : "NO");
console.log("Done!");
