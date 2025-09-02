import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0E",
        amber: "#F77A18",
      },
      boxShadow: {
        amber: "0 0 0 1px rgba(247,122,24,.25), 0 18px 45px rgba(247,122,24,.18)"
      }
    },
  },
  plugins: [],
};
export default config;
