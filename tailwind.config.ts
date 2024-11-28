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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#2E5021',
        secondary: '#006633',
        dark1: '#3F4141',
        dark2: '#222222',
        dark3: '#333333',
        dark4: '#444444',
        gray1: '#D9D9D9',
        gray2: '#666666',
        gray3: '#4E4E4E',
        brown1: '#352A1C',
        brown2: '#24211D',
      },
      fontSize: {
        '13': '0.8125rem',  // 13px를 rem으로 변환한 값 (13px ÷ 16px = 0.8125rem)
      },
    },
  },
  plugins: [],
} satisfies Config;
