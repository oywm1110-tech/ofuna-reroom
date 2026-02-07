import fs from "fs";
fs.writeFileSync("next.config.ts", `import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
`, "utf8");
console.log("next.config.ts updated!");
