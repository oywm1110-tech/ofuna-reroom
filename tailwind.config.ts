import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0a0a0a",
          gold: "#d4af37",
          red: "#8b2500",
          wine: "#722f37",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        oswald: ["var(--font-oswald)", "sans-serif"],
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Hiragino Sans"',
          '"Hiragino Kaku Gothic ProN"',
          '"Noto Sans JP"',
          '"Yu Gothic"',
          "Meiryo",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
