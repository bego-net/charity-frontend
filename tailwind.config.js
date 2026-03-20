/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pageBg: "var(--bg-main)",
        pageText: "var(--text-main)",
        accentPrimary: "var(--accent-1)",
        accentSecondary: "var(--accent-2)",
        buttonCta: "var(--cta)",
      },
    },
  },
  plugins: [],
}