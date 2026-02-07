import fs from "fs";
let c = fs.readFileSync("src/app/page.tsx", "utf8");

const oldNoiseOverlay = /function NoiseOverlay\(\) \{[\s\S]*?^  \);?\n\}/m;

const newNoiseOverlay = `function NoiseOverlay() {
  const noiseUrl = "data:image/svg+xml,%3Csvg viewBox=%270 0 256 256%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%271%27/%3E%3C/svg%3E";
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[9997] opacity-[0.03]"
      style={{
        backgroundImage: "url(\\"" + noiseUrl + "\\")",
        backgroundRepeat: "repeat",
      }}
    />
  );
}`;

c = c.replace(oldNoiseOverlay, newNoiseOverlay);
fs.writeFileSync("src/app/page.tsx", c, "utf8");
console.log("NoiseOverlay fixed!");
