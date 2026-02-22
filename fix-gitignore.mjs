import { readFileSync, writeFileSync } from "fs";

let gitignore = readFileSync(".gitignore", "utf8");

gitignore += `
# editor agent/skill files
.agent/
.agents/
.claude/
__pycache__/
`;

writeFileSync(".gitignore", gitignore, "utf8");
console.log("Done!");
