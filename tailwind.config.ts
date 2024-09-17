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
        background: "var(--background)",
        foreground: "var(--foreground)",
        textcolor:'#373737',
        orange:"#FF651C"
        
      },
    },
    backgroundImage: {
      pattern: "url('pxdraft.com/themeforest/krinky/assets/img/effect/bg-effect-1.png')",
      
    }
  },
  plugins: [],
};
export default config;
