import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        light_blue: "var(--light-blue)",
        light_red: "var(--light-red)",
        light_green: "var(--light-green)",
        sky_blue: "var(--sky-blue)",
      },
      fontFamily: {
        geist_sans: "var(--font-geist-sans)",
        geist_mono: "var(--font-geist-mono)",
        signika: "var(--font-signika)",
      }
    },
  },
  plugins: [],
} satisfies Config;
