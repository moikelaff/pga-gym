import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandWhite:      "#FFFFFF",
        brandGray:       "#9A9A9A",
        brandHotPink:       "#ED7B99",
        brandNavy:       "#182D3F",
        brandLightPink:  "#EAD7D9",
        brandGreen:      "#20B525",
      },
    },
  },
  plugins: [],
} satisfies Config;
